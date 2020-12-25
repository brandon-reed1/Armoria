export const tinctures = {
  field: { metals: 5, colours: 7, patterns: 2 },
  division: { metals: 5, colours: 7, patterns: 1 },
  charge: { metals: 2, colours: 3 },
  metals: {
    field: { argent: 3, or: 2 },
    division: { argent: 3, or: 2 },
    charge: { argent: 1, or: 2 }
  },
  colours: {
    field: { gules: 5, sable: 3, azure: 4, vert: 2, purpure: 3 },
    division: { gules: 5, sable: 3, azure: 4, vert: 2, purpure: 3 },
    charge: { gules: 7, sable: 1, azure: 5, vert: 3, purpure: 2 }
  },
  patterns: { // patterns including furs
    field: { semy: 1, vair: 2, vairInPale: 1, vairEnPointe: 2, ermine: 2, chequy: 4, lozengy: 2, fusily: 1, pally: 4, barry: 4, gemelles: 1, bendy: 3, bendySinister: 2, palyBendy: 1, pappellony: 2, masoned: 3, fretty: 2 },
    division: { semy: 1, vair: 3, vairInPale: 2, vairEnPointe: 3, ermine: 4, chequy: 3, lozengy: 1, fusily: 1, pally: 5, barry: 5, bendy: 2, bendySinister: 1, pappellony: 1, masoned: 3, fretty: 1 }
  }
};

export const positionsSelect = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i",
  "kn", "bh", "df", "pq", "jo", "lm",
  "abc", "def", "ghi", "adg", "beh", "cfi",
  "jeo", "jln", "kmo", "peq", "lem",
  "bhdf", "jleh", "behdf", "acegi",
  "bdefh", "kenpq", "abcpqh",
  "abcdefgzi", "ABCDEFGHIJKL"];

export const positions = {
  conventional: { e: 20, abcdefgzi: 3, beh: 3, behdf: 2, acegi: 1, kn: 3, bhdf: 1, jeo: 1, abc: 3, jln: 6, jlh: 3, kmo: 2, jleh: 1, def: 3, abcpqh: 4, ABCDEFGHIJKL: 1 },
  complex: { e: 40, beh: 1, kn: 1, jeo: 1, abc: 2, jln: 7, jlh: 2, def: 1, abcpqh: 1 },
  divisions: {
    perPale: { e: 15, pq: 5, jo: 2, jl: 2, ABCDEFGHIJKL: 1 },
    perFess: { e: 12, kn: 4, jkl: 2, gizgiz: 1, jlh: 3, kmo: 1, ABCDEFGHIJKL: 1 },
    perBend: { e: 5, lm: 5, bcfdgh: 1 },
    perBendSinister: { e: 1, jo: 1 },
    perCross: { e: 4, jlmo: 1, jj: 1, jo: 2, jl: 1 },
    perChevron: { e: 1, jlh: 1, dfk: 1, dfkh: 2, bdefh: 1 },
    perChevronReversed: { e: 1, mok: 2, dfh: 2, dfkh: 1, bdefh: 1 },
    perSaltire: { bhdf: 8, e: 3, abcdefgzi: 1, bh: 1, df: 1, beh: 1, behdf: 1, ABCDEFGHIJKL: 1 },
    perPile: { ee: 3, be: 2, abceh: 1, abcabc: 1, jleh: 1 }
  },
  ordinariesOn: {
    pale: { ee: 12, beh: 10, kn: 3, bb: 1 },
    fess: { ee: 1, def: 3 },
    bar: { defdefdef: 1 },
    fessCotissed: { ee: 1, def: 3 },
    fessDoubleCotissed: { ee: 1, defdef: 3 },
    bend: { ee: 2, jo: 1, joe: 1 },
    bendSinister: { ee: 1, lm: 1, lem: 4 },
    bendlet: { joejoejoe: 1 },
    bendletSinister: { lemlemlem: 1 },
    bordure: { ABCDEFGHIJKL: 1 },
    chief: { abc: 5, bb: 1 },
    quarter: { jjj: 1 },
    canton: { yyyy: 1 },
    cross: { eeee: 1, behdfbehdf: 3, behbehbeh: 2 },
    crossParted: { e: 5, ee: 1 },
    saltire: { ee: 5, jlemo: 1 },
    saltireParted: { e: 5, ee: 1 },
    pall: { ee: 1, acez: 5, jlhh: 3 },
    pallReversed: { ee: 1, bemo: 5 },
    pile: { bb: 1 },
    pileInBend: { eeee: 1, eeoo: 1 },
    pileInBendSinister: { eeee: 1, eemm: 1 }
  },
  ordinariesOff: {
    pale: { yy: 1 },
    fess: { abc: 3, abcz: 1 },
    bar: { abc: 2, abcgzi: 1, jlh: 5, bgi: 2, ach: 1 },
    gemelle: { abc: 1 },
    bend: { cg: 2, cc: 1 },
    bendSinister: { ai: 2, aa: 1 },
    bendlet: { cg: 2, cc: 1 },
    bendletSinister: { ai: 2, aa: 1 },
    bordure: { e: 4, jleh:2, kenken: 1, peqpeq: 1 },
    orle: { e: 4, jleh: 1, kenken: 1, peqpeq: 1 },
    chief: { emo: 2, emoz: 1, ez: 2 },
    terrace: { e: 5, def: 1, bdf: 3 },
    mount: { e: 5, def: 1, bdf: 3 },
    point: { e: 2, def: 1, bdf: 3, acbdef: 1 },
    flaunches: { e: 3, kn: 1, beh: 3 },
    qyron: { bh: 1 },
    quarter: { e: 1 },
    canton: { e: 5, beh: 1, def: 1, bdefh: 1, kn: 1 },
    cross: { acgi: 1 },
    pall: { BCKFEILGbdmfo: 1 },
    pallReversed: { aczac: 1 },
    chevron: { ach: 3, hh: 1 },
    chevronReversed: { bb: 1 },
    pile: { acdfgi: 1, acac: 1 },
    pileInBend: { cg: 1 },
    pileInBendSinister: { ai: 1 },
    label: { defgzi: 2, eh: 3, defdefhmo: 1, egiegi: 1, pqn: 5 }
  },
  // charges
  inescutcheonHeater: { e: 3, jln: 1 },
  inescutcheonOldFrench: { e: 3, jln: 1 },
  inescutcheonSpanish: { e: 3, jln: 1 },
  mascle: { e: 15, abcdefgzi: 3, beh: 3, bdefh: 4, acegi: 1, kn: 3, joe: 2, abc: 3, jlh: 8, jleh: 1, df: 3, abcpqh: 4, pqe: 3, eknpq: 3 },
  lionRampant: { e: 10, def: 2, abc: 2, bdefh: 1, kn: 1, jlh: 2, abcpqh: 1 },
  lionPassant: { e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1 },
  wolfPassant: { e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1 },
  greyhoundСourant: { e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1 },
  griffinRampant: { e: 10, def: 2, abc: 2, bdefh: 1, kn: 1, jlh: 2, abcpqh: 1 },
  griffinPassant: { e: 10, def: 1, abc: 1, bdefh: 1, jlh: 1, abcpqh: 1 },
  boarRampant: { e: 12, beh: 1, kn: 1, jln: 2 },
  eagle: { e: 15, beh: 1, kn: 1, abc: 1, jlh: 2, def: 2, pq: 1 },
  raven: { e: 15, beh: 1, kn: 1, jeo: 1, abc: 3, jln: 3, def: 1 },
  wyvern: { e: 10, jln: 1 },
  garb: { e: 1, def: 3, abc: 2, beh: 1, kn: 1, jln: 3, jleh: 1, abcpqh: 1, joe: 1, lme: 1 },
  crown: { e: 10, abcdefgzi: 1, beh: 3, behdf: 2, acegi: 1, kn: 1, pq: 2, abc: 1, jln: 4, jleh: 1, def: 2, abcpqh: 3 },
  hand: { e: 10, jln: 2, kn: 1, jeo: 1, abc: 2, pqe: 1 }
};

export const lines = {
  straight: 40, wavy: 8, engrailed: 4, invecked: 3, rayonne: 3, embattled: 1, raguly: 1, urdy: 1, dancetty: 1, indented: 2,
  dentilly: 1, bevilled: 1, angled: 1, flechy: 1, barby: 1, enclavy: 1, escartely: 1, arched: 2, archedReversed: 1, nowy: 1, nowyReversed: 1,
  embattledGhibellin: 1, embattledNotched: 1, embattledGrady: 1, dovetailedIndented: 1, dovetailed: 1,
  potenty: 1, potentyDexter: 1, potentySinister: 1, nebuly: 2, seaWaves: 1, dragonTeeth: 1, firTrees: 1
};

export const divisions = {
  variants: { perPale: 5, perFess: 5, perBend: 2, perBendSinister: 1, perChevron: 1, perChevronReversed: 1, perCross: 5, perPile: 1, perSaltire: 1, gyronny: 1, chevronny: 1 },
  perPale: lines,
  perFess: lines,
  perBend: lines,
  perBendSinister: lines,
  perChevron: lines,
  perChevronReversed: lines,
  perCross: { straight: 20, wavy: 5, engrailed: 4, invecked: 3, rayonne: 1, embattled: 1, raguly: 1, urdy: 1, indented: 2, dentilly: 1, bevilled: 1, angled: 1, embattledGhibellin: 1, embattledGrady: 1, dovetailedIndented: 1, dovetailed: 1, potenty: 1, potentyDexter: 1, potentySinister: 1, nebuly: 1 },
  perPile: lines
};

export const ordinaries = {
  lined: {
    pale: 7, fess: 5, bend: 3, bendSinister: 2, chief: 5, bar: 2, gemelle: 1, fessCotissed: 1, fessDoubleCotissed: 1,
    bendlet: 2, bendletSinister: 1, terrace: 3, cross: 6, crossParted: 1, saltire: 2, saltireParted: 1
  },
  straight: {
    bordure: 8, orle: 4, mount: 1, point: 2, flaunches: 1, gore: 1,
    qyron: 1, quarter: 1, canton: 2, pall: 3, pallReversed: 2, chevron: 4, chevronReversed: 3,
    pile: 2, pileInBend: 2, pileInBendSinister: 1, piles: 1, pilesInPoint: 2, label: 1
  }
};

export const charges = {
  types: { conventional: 30, crosses: 8, animals: 3, birds: 2, aquatic: 1, fantastic: 3, plants: 1, agriculture: 1, arms: 1, bodyparts: 1, miscellaneous: 3, inescutcheon: 3, uploaded: 0 },
  single: { conventional: 12, crosses: 8, plants: 2, animals: 11, birds: 4, aquatic: 2, fantastic: 7, agriculture: 1, arms: 5, bodyparts: 1, miscellaneous: 8, inescutcheon: 5, uploaded: 0 },
  semy: { conventional: 12, crosses: 3, plants: 1 },
  conventional: {
    lozenge: 2, fusil: 4, mascle: 4, rustre: 2, lozengeFaceted: 3, lozengePloye: 1, roundel: 7, annulet: 4,
    mullet: 5, mulletPierced: 1, mulletFaceted: 1, mullet4: 3, mullet6: 4, mullet6Pierced: 1, mullet6Faceted: 1, mullet7: 1, mullet8: 1, mullet10: 1,
    estoile: 1, billet: 5, triangle: 3, trianglePierced: 1, goutte: 4, heart: 4, pique: 2, trefle: 2, сarreau: 1,
    fleurDeLis: 6, sun: 3, sunInSplendour: 1, crescent: 5, fountain: 1, compassRose: 1, fountain: 1
  },
  inescutcheon: { inescutcheonHeater: 2, inescutcheonOldFrench: 1, inescutcheonSpanish: 4 },
  crosses: {
    crossHummetty: 15, crossVoided: 1, crossPattee: 3, crossPotent: 2, crossClechy: 3, crosslet: 1, crossBottony: 1, crossFleury: 3,
    crossPatonce: 1, crossPommy: 1, crossGamma: 1, crossArrowed: 1, crossFitchy: 1, crossCercelee: 1, crossMoline: 2, crossFourchy: 1,
    crossAvellane: 1, crossErminee: 1, crossMaltese: 3, crossCeltic: 1, crossOccitan: 1, crossSaltire: 3, crossTau: 1
  },
  animals: { lionRampant: 4, lionPassant: 1, wolfPassant: 1, greyhoundСourant: 1, boarRampant: 1, horseRampant: 1, horseSalient: 1, bullPassant: 1, bullHeadCaboshed: 1, deerHeadCaboshed: 1 },
  fantastic: { dragonPassant: 3, wyvern: 2, griffinPassant: 1, griffinRampant: 1, eagleTwoHeards: 2, unicornRampant: 1, pegasus: 1, serpent: 1 },
  birds: { eagle: 9, raven: 2, cock: 3, parrot: 1, swan: 2, swanErased: 1, heron: 1 },
  plants: { cinquefoil: 1, rose: 1 },
  aquatic: { escallop: 5, pike: 1, cancer: 1 },
  agriculture: { garb: 1 },
  arms: { sword: 5, hatchet: 2, lochaberAxe: 1, mallet: 1 },
  bodyparts: { hand: 1 },
  miscellaneous: { crown: 3, key: 1, buckle: 1, bugleHorn: 1, horseshoe: 3, stagsAttires: 1, cowHorns: 2, wing: 1, wingSword: 1, lute: 1, harp: 1, wheel: 2, boat: 1 },
  natural: { fountain: "azure", garb: "or", raven: "sable" }, // charges to use predefined colours
  sinister: ["crossGamma", "lionRampant", "lionPassant", "wolfPassant", "greyhoundСourant", "boarRampant", "horseRampant", "horseSalient", "bullPassant",
    "eagle", "raven", "cock", "parrot", "swan", "swanErased", "heron", "pike", "dragonPassant", "wyvern", "griffinPassant", "griffinRampant", "unicornRampant",
    "pegasus", "serpent", "hatchet", "lochaberAxe", "hand", "wing", "wingSword", "lute", "harp"], // charges that can be sinister
  reversed: ["goutte", "mullet", "mullet7", "crescent", "crossTau", "cancer", "sword", "hand", "horseshoe"] // charges that can be reversed
}

export const shields = {
  // shield-specific position: [x, y] (relative to center)
  heater: {
    a: [-43.75, -50], b: [0, -50], c: [43.75, -50],
    d: [-43.75, 0], e: [0, 0], f: [43.75, 0],
    g: [-32.25, 37.5], h: [0, 50], i: [32.25, 37.5],
    y: [-50, -50], z: [0, 62.5],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-32.5, 32.5], n: [0, 42.5], o: [32.5, 32.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.2, -66.6], B: [-22, -66.6], C: [22, -66.6], D: [66.2, -66.6],
    K: [-66.2, -20], E: [66.2, -20],
    J: [-55.5, 26], F: [55.5, 26],
    I: [-33, 62], G: [33, 62],
    H: [0, 89.5]
  },
  oldFrench: {
    a: [-43.75, -50], b: [0, -50], c: [43.75, -50],
    d: [-43.75, 0], e: [0, 0], f: [43.75, 0],
    g: [-37.5, 50], h: [0, 50], i: [37.5, 50],
    y: [-50, -50], z: [0, 62.5],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 45], o: [37.5, 37.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.2, -66.6], B: [-22, -66.6], C: [22, -66.6], D: [66.2, -66.6],
    K: [-66.2, -20], E: [66.2, -20],
    J: [-64, 26], F: [64, 26],
    I: [-45, 62], G: [45, 62], 
    H: [0, 91.5],
  },
  spanish: {
    a: [-43.75, -50], b: [0, -50], c: [43.75, -50],
    d: [-43.75, 0], e: [0, 0], f: [43.75, 0],
    g: [-43.75, 50], h: [0, 50], i: [43.75, 50],
    y: [-50, -50], z: [0, 50],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 50], o: [37.5, 37.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.2, -66.6], B: [-22, -66.6], C: [22, -66.6], D: [66.2, -66.6],
    K: [-66.4, -20], E: [66.4, -20],
    J: [-66.4, 26], F: [66.4, 26],
    I: [-49, 70], G: [49, 70],
    H: [0, 92]
  },
  french: {
    a: [-43.75, -50], b: [0, -50], c: [43.75, -50],
    d: [-43.75, 0], e: [0, 0], f: [43.75, 0],
    g: [-43.75, 50], h: [0, 50], i: [43.75, 50],
    y: [-50, -50], z: [0, 65],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 37.5], o: [37.5, 37.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.2, -66.6], B: [-22, -66.6], C: [22, -66.6], D: [66.2, -66.6],
    K: [-66.4, -20], E: [66.4, -20],
    J: [-66.4, 26], F: [66.4, 26],
    I: [-65.4, 70], G: [65.4, 70],
    H: [0, 89]
  },
  swiss: {
    a: [-43.75, -50], b: [0, -50], c: [43.75, -50],
    d: [-43.75, 0], e: [0, 0], f: [43.75, 0],
    g: [-32, 37.5], h: [0, 50], i: [32, 37.5],
    y: [-50, -50], z: [0, 62.5],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-32, 32.5], n: [0, 42.5], o: [32, 32.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.2, -66.6], B: [-22, -66], C: [22, -66], D: [66.2, -66.6],
    K: [-63, -20], E: [63, -20],
    J: [-50, 26], F: [50, 26],
    I: [-29, 62], G: [29, 62],
    H: [0, 89.5]
  },
  wedged: {
    a: [-43.75, -50], b: [0, -50], c: [43.75, -50],
    d: [-43.75, 0], e: [0, 0], f: [43.75, 0],
    g: [-32.25, 37.5], h: [0, 50], i: [32.25, 37.5],
    y: [-50, -50], z: [0, 62.5],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-32.5, 32.5], n: [0, 42.5], o: [32.5, 32.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66, -53], B: [-22, -72.5], C: [22, -72.5], D: [66, -53],
    K: [-62.6, -13], E: [62.6, -13],
    J: [-50, 26], F: [50, 26],
    I: [-27, 62], G: [27, 62],
    H: [0, 87]
  },
  italian: {
    a: [-37.5, -50], b: [0, -50], c: [37.5, -50],
    d: [-43, 0], e: [0, 0], f: [43, 0],
    g: [-37.5, 50], h: [0, 50], i: [37.5, 50],
    y: [-48, -48], z: [0, 60],
    j: [-35.5, -37.5], k: [0, -37.5], l: [35.5, -37.5],
    m: [-35.5, 37.5], n: [0, 50], o: [35.5, 37.5],
    p: [-36.5, 0], q: [36.5, 0],
    A: [-48, -48], B: [-23, -78], C: [23, -78], D: [48, -48],
    K: [-59, -10], E: [59, -10],
    J: [-55, 31], F: [55, 31],
    I: [-36, 68], G: [36, 68],
    H: [0, 85]
  },
  round: {
    a: [-40, -47.5], b: [0, -47.5], c: [40, -47.5],
    d: [-40, 0], e: [0, 0], f: [40, 0],
    g: [-32.5, 47.5], h: [0, 47.5], i: [32.5, 47.5],
    y: [-48, -48], z: [0, 57.5],
    j: [-35.5, -35.5], k: [0, -37.5], l: [35.5, -35.5],
    m: [-35.5, 35.5], n: [0, 37.5], o: [35.5, 35.5],
    p: [-36.5, 0], q: [36.5, 0],
    A: [-59, -48], B: [-23, -73], C: [23, -73], D: [59, -48],
    K: [-76, -10], E: [76, -10],
    J: [-70, 31], F: [70, 31],
    I: [-42, 64], G: [42, 64],
    H: [0, 77]
  },
  renaissance: {
    a: [-43.75, -50], b: [0, -50], c: [43.75, -50],
    d: [-41.5, 0], e: [0, 0], f: [41.5, 0],
    g: [-43.75, 50], h: [0, 50], i: [43.75, 50],
    y: [-50, -50], z: [0, 62.5],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 37.5], o: [37.5, 37.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-61, -55], B: [-23, -67], C: [23, -67], D: [61, -55],
    K: [-55, -11], E: [55, -11],
    J: [-65, 31], F: [65, 31],
    I: [-45, 76], G: [45, 76],
    H: [0, 87]
  },
  baroque: {
    a: [-43.75, -45], b: [0, -50], c: [43.75, -45],
    d: [-43.75, 0], e: [0, 0], f: [43.75, 0],
    g: [-43.75, 50], h: [0, 50], i: [43.75, 50],
    y: [-50, -50], z: [0, 60],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 50], o: [37.5, 37.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-65, -54.5], B: [-22, -65], C: [22, -65], D: [65, -54.5],
    K: [-58.5, -15], E: [58.5, -15],
    J: [-65, 31], F: [66, 31],
    I: [-35, 73], G: [35, 73],
    H: [0, 89]
  },
  polish: {
    a: [-35, -50], b: [0, -50], c: [35, -50],
    d: [-40, 0], e: [0, 0], f: [40, 0],
    g: [-37.5, 50], h: [0, 50], i: [37.5, 50],
    y: [-50, -50], z: [0, 65],
    j: [-27.5, -27.5], k: [0, -45], l: [27.5, -27.5],
    m: [-27.5, 27.5], n: [0, 45], o: [27.5, 27.5],
    p: [-32.5, 0], q: [32.5, 0],
    A: [-48, -52], B: [-23, -80], C: [23, -80], D: [48, -52],
    K: [-47, -10], E: [47, -10],
    J: [-62, 32], F: [62, 32],
    I: [-37, 68], G: [37, 68],
    H: [0, 86]
  },
  german: {
    a: [-43.75, -50], b: [0, -50], c: [43.75, -50],
    d: [-40, 0], e: [0, 0], f: [40, 0],
    g: [-43.75, 50], h: [0, 50], i: [43.75, 50],
    y: [-50, -50], z: [0, 60],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 50], o: [37.5, 37.5],
    p: [-32.5, 0], q: [32.5, 0],
    A: [-55, -59], B: [-15, -59], C: [24, -79], D: [50, -58],
    K: [-40, -14], E: [51, -14],
    J: [-64, 26], F: [62, 26],
    I: [-46, 66], G: [48, 67],
    H: [0, 83]
  },
  diamond: {
    a: [-32, -37], b: [0, -50], c: [32, -37],
    d: [-43, 0], e: [0, 0], f: [43, 0],
    g: [-32, 37], h: [0, 50], i: [32, 37],
    y: [-50, -50], z: [0, 62],
    j: [-27.5, -27.5], k: [0, -37], l: [27.5, -27.5],
    m: [-27.5, 27.5], n: [0, 42], o: [27.5, 27.5],
    p: [-37, 0], q: [37, 0],
    A: [-43, -28], B: [-22, -56], C: [22, -56], D: [43, -28],
    K: [-63, 0], E: [63, 0],
    J: [-42, 28], F: [42, 28],
    I: [-22, 56], G: [22, 56],
    H: [0, 83], L: [0, -82]
  },
  kite: {
    b: [0, -65], e: [0, -15], h: [0, 35],
    z: [0, 35], k: [0, -50], n: [0, 20],
    p: [-20, -15], q: [20, -15],
    A: [-38, -52], B: [-29, -78], C: [29, -78], D: [38, -52],
    K: [-33, -20], E: [33, -20],
    J: [-25, 11], F: [25, 11],
    I: [-15, 42], G: [15, 42],
    H: [0, 73], L: [0, -91]
  },
  vesicaPiscis: {
    a: [-32, -37], b: [0, -50], c: [32, -37],
    d: [-32, 0], e: [0, 0], f: [32, 0],
    g: [-32, 37], h: [0, 50], i: [32, 37],
    y: [-50, -50], z: [0, 62],
    j: [-27.5, -27.5], k: [0, -37], l: [27.5, -27.5],
    m: [-27.5, 27.5], n: [0, 42], o: [27.5, 27.5],
    p: [-27.5, 0], q: [27.5, 0],
    A: [-45, -32], B: [-29, -63], C: [29, -63], D: [45, -32],
    K: [-50, 0], E: [50, 0],
    J: [-45, 32], F: [45, 32],
    I: [-29, 63], G: [29, 63],
    H: [0, 89], L: [0, -89]
  },
  square: {
    a: [-49.75, -50], b: [0, -50], c: [49.75, -50],
    d: [-49.75, 0], e: [0, 0], f: [49.75, 0],
    g: [-49.75, 50], h: [0, 50], i: [49.75, 50],
    y: [-50, -50], z: [0, 50],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 37.5], o: [37.5, 37.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.5, -66.5], B: [-22, -66.5], C: [22, -66.5], D: [66.5, -66.5],
    K: [-66.5, -20], E: [66.5, -20],
    J: [-66.5, 26], F: [66.5, 26],
    I: [-66.5, 66.5], G: [66.5, 66.5],
    H: [-22, 66.5], L: [22, 66.5]
  },
  flag: {
    a: [-60, -40], b: [0, -40], c: [60, -40],
    d: [-60, 0], e: [0, 0], f: [60, 0],
    g: [-60, 40], h: [0, 40], i: [60, 40],
    y: [-60, -42.5], z: [0, 40],
    j: [-45, -30], k: [0, -30], l: [45, -30],
    m: [-45, 30], n: [0, 30], o: [45, 30],
    p: [-45, 0], q: [45, 0],
    A: [-81, -51], B: [-27, -51], C: [27, -51], D: [81, -51],
    K: [-81, -17], E: [81, -17],
    J: [-81, 17], F: [81, 17],
    I: [-81, 51], G: [81, 51],
    H: [-27, 51], L: [27, 51]
  },
  pennon: {
    a: [-75, -40],
    d: [-75, 0], e: [-25, 0], f: [25, 0],
    g: [-75, 40],
    y: [-70, -42.5],
    j: [-60, -30],
    m: [-60, 30],
    p: [-60, 0], q: [5, 0],
    A: [-81, -48], B: [-43, -36], C: [-4.5, -24], D: [33, -12],
    E: [72, 0],
    F: [33, 12], G: [-4.5, 24], H: [-43, 36], I: [-81, 48], 
    J: [-81, 17], K: [-81, -17]
  },
  guidon: {
    a: [-60, -40], b: [0, -40], c: [60, -40],
    d: [-60, 0], e: [0, 0],
    g: [-60, 40], h: [0, 40], i: [60, 40],
    y: [-60, -42.5], z: [0, 40],
    j: [-45, -30], k: [0, -30], l: [45, -30],
    m: [-45, 30], n: [0, 30], o: [45, 30],
    p: [-45, 0],
    A: [-81, -51], B: [-27, -51], C: [27, -51], D: [78, -51],
    K: [-81, -17], E: [40.5, -17],
    J: [-81, 17], F: [40.5, 17],
    I: [-81, 51], G: [78, 51],
    H: [-27, 51], L: [27, 51]
  },
  banner: {
    a: [-50, -50], b: [0, -50], c: [50, -50],
    d: [-50, 0], e: [0, 0], f: [50, 0],
    g: [-50, 40], h: [0, 40], i: [50, 40],
    y: [-50, -50], z: [0, 40],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 27.5], n: [0, 27.5], o: [37.5, 27.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.5, -66.5], B: [-22, -66.5], C: [22, -66.5], D: [66.5, -66.5],
    K: [-66.5, -20], E: [66.5, -20],
    J: [-66.5, 26], F: [66.5, 26],
    I: [-66.5, 66.5], G: [66.5, 66.5],
    H: [-25, 75], L: [25, 75]
  },
  dovetail: {
    a: [-49.75, -50], b: [0, -50], c: [49.75, -50],
    d: [-49.75, 0], e: [0, 0], f: [49.75, 0],
    g: [-49.75, 50], i: [49.75, 50],
    y: [-50, -50], z: [0, 40],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 32.5], o: [37.5, 37.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.5, -66.5], B: [-22, -66.5], C: [22, -66.5], D: [66.5, -66.5],
    K: [-66.5, -16.5], E: [66.5, -16.5],
    J: [-66.5, 34.5], F: [66.5, 34.5],
    I: [-66.5, 84.5], G: [66.5, 84.5],
    H: [-25, 64], L: [25, 64]
  },
  gonfalon: {
    a: [-49.75, -50], b: [0, -50], c: [49.75, -50],
    d: [-49.75, 0], e: [0, 0], f: [49.75, 0],
    g: [-49.75, 50], h: [0, 50], i: [49.75, 50],
    y: [-50, -50], z: [0, 50],
    j: [-37.5, -37.5], k: [0, -37.5], l: [37.5, -37.5],
    m: [-37.5, 37.5], n: [0, 37.5], o: [37.5, 37.5],
    p: [-37.5, 0], q: [37.5, 0],
    A: [-66.5, -66.5], B: [-22, -66.5], C: [22, -66.5], D: [66.5, -66.5],
    K: [-66.5, -20], E: [66.5, -20],
    J: [-66.5, 26], F: [66.5, 26],
    I: [-40, 63], G: [40, 63],
    H: [0, 88]
  },
  pennant: {
    a: [-45, -50], b: [0, -50], c: [45, -50],
    e: [0, 0], h: [0, 50],
    y: [-50, -50], z: [0, 50],
    j: [-32.5, -37.5], k: [0, -37.5], l: [32.5, -37.5],
    n: [0, 37.5],
    A: [-60, -76], B: [-22, -76], C: [22, -76], D: [60, -76],
    K: [-46, -38], E: [46, -38],
    J: [-31, 0], F: [31, 0],
    I: [-16, 38], G: [16, 38],
    H: [0, 76]
  }
};