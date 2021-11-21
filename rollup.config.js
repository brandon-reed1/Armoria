import * as path from "path";
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import livereload from "rollup-plugin-livereload";
import {terser} from "rollup-plugin-terser";
import {generateSW} from "rollup-plugin-workbox";

const production = !process.env.ROLLUP_WATCH;
const projectRootDir = path.resolve(__dirname);
console.log(projectRootDir);

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true
      });

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    }
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js"
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into a separate file - better for performance
      css: css => {
        css.write("bundle.css");
      }
    }),

    resolve({
      browser: true,
      dedupe: ["svelte"]
    }),

    // convert CommonJS modules to ES6
    commonjs(),

    alias({
      entries: [{find: "@", replacement: path.resolve(projectRootDir, "src")}]
    }),

    // In dev mode, call `npm run start` once the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the browser on changes when not in production
    !production && livereload("public"),

    // generate service worker and add charges folder to precache
    production &&
      generateSW({
        swDest: "./public/sw.js",
        globDirectory: "public/charges/",
        globPatterns: ["**/*.{svg}"],
        cacheId: "armoria",
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: "*.{js, json, png}",
            handler: "NetworkFirst",
            options: {
              cacheName: "armoria-cache"
            }
          }
        ]
      }),

    // minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
