import {get} from "svelte/store";
import {changes, grid} from "../data/stores";

export function drag(e, c, coa) {
  const el = e.currentTarget;
  const {x, y, a} = parseTransform(el.getAttribute("transform"));
  const x1 = e.x, y1 = e.y;
  const sizeAdj = +el.closest("svg").getAttribute("width") / 200;
  document.addEventListener("mouseup", dragStop, { once: true });

  const size = c.size || 1;
  const angle = c.angle || 0;
  const rad = -a * (Math.PI / 180);
  const cosAngle = Math.cos(rad);
  const sinAngle = Math.sin(rad);
  const gridSize = get(grid);

  if (e.shiftKey) {
    document.addEventListener("mousemove", resize);
    document.body.style.cursor = "ns-resize";
  } else if (e.ctrlKey || e.metaKey) {
    document.addEventListener("mousemove", rotate);
    document.body.style.cursor = "ew-resize";
  } else {
    document.addEventListener("mousemove", move);
    document.body.style.cursor = "move";
  };

  function move(e) {
    const dx = x + (e.x - x1) / sizeAdj;
    const dy = y + (e.y - y1) / sizeAdj;

    const relX = (dx * cosAngle) - (dy * sinAngle);
    const relY = (dx * sinAngle) + (dy * cosAngle);

    c.x = Math.round(relX / gridSize) * gridSize;
    c.y = Math.round(relY / gridSize) * gridSize;
    setTransform(el, c);
  }

  function resize(e) {
    const dy = y + (e.y - y1) / sizeAdj;
    c.size = size + Math.round(dy) / -100;
    setTransform(el, c);
    if (c.p) changes.add(JSON.stringify(coa));
  }

  function rotate(e) {
    const dx = x + (e.x - x1) / sizeAdj;
    let a = angle + Math.round(dx / 1.8);
    if (a > 180) a = a % 180 - 180;
    if (a < -179) a = a % 180 + 180;
    c.angle = a;
    setTransform(el, c);
  }

  function setTransform(el, c) {
    const tr = transform(c);
    if (tr) el.setAttribute("transform", tr);
    else el.removeAttribute("transform");
  }

  function dragStop() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mousemove", rotate);
    document.body.style.cursor = "auto";
    changes.add(JSON.stringify(coa));
  }
}

export function transform(charge) {
  let {x = 0, y = 0, angle = 0, size = 1, p} = charge;
  if (p) size = 1; // size is defined on use element level

  if (!x && !y && !angle && size === 1) return null;

  let transform = "";
  if (x || y) transform += `translate(${x} ${y})`;
  if (angle) transform += ` rotate(${angle})`;
  if (size !== 1) transform += `scale(${size})`;

  return transform.trim();
}

export function transform2(c) {
  if (!c.x && !c.y && !c.angle && !c.size) return null;

  // charges have c.p and have size on use level, not on g level
  const size = c.p ? 1 : c.size;
  return `rotate(${c.angle||0}) translate(${c.x||0} ${c.y||0}) scale(${size||1})`;
}

function parseTransform(string) {
  if (!string) { return {x: 0, y: 0, a: 0, s: 1}; }
  const a = string.replace(/[a-z()]/g, "").replace(/[ ]/g, ",").split(",");
  return {x: +a[0] || 0, y: +a[1] || 0, a: +a[2] || 0, s: +a[3] || 1};
}