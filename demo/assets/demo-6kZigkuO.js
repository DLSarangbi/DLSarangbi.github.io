import { S as SERMON_FILE_VERSION, f as formatRange, L as LAST_VERSE_SENTINEL, B as BOOKS, D as DEFAULT_APP_SETTINGS, a as DEFAULT_EDITOR_SETTINGS, b as bookByNumber, c as flattenForSearch, d as SNIPPET_MARK_OPEN, e as SNIPPET_MARK_CLOSE, g as applyThemePreference, h as clientExports, j as jsxRuntimeExports, r as reactExports, A as App } from "./index-BZ8O7pUT.js";
function daysFromToday(days) {
  const date = /* @__PURE__ */ new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
const DEMO_SERIES = [
  {
    id: "series-letters",
    name: "Summer in the Letters",
    description: "Galatians, Romans, and 1 Peter, one Sunday each, then Ephesians and James to close the summer",
    planned: [
      { id: "plan-eph", title: "Seated With Him", passage: "Ephesians 2:1-10", date: daysFromToday(5) },
      { id: "plan-jas", title: "Doers of the Word", passage: "James 1:19-27", date: daysFromToday(12) }
    ]
  }
];
const DEMO_ILLUSTRATIONS = [
  {
    id: "story-septembers",
    title: "Thirty-one Septembers",
    body: 'A teacher of thirty-one years: "Every September they are new, even when I am not."',
    source: "A conversation after a funeral",
    tags: ["faithfulness"],
    createdAt: `${daysFromToday(-20)}T09:00:00.000Z`
  },
  {
    id: "story-nets",
    title: "The mended nets",
    body: "The fisherman who mended nets every evening, whether or not the day had caught anything.",
    source: "My grandfather",
    tags: ["hope", "work"],
    createdAt: `${daysFromToday(-100)}T09:00:00.000Z`
  }
];
const SEEDS = [
  {
    title: "The Discipline of Returning",
    primaryPassage: "Galatians 6:7-10",
    datePreached: null,
    status: "draft",
    seriesId: "series-letters",
    tags: ["faithfulness", "attention"],
    lengthMinutes: 30,
    blocks: [
      { type: "point", heading: "Rivers carve canyons slowly", minutes: 12, content: "No single day of water moves the stone, and yet the canyon is there." },
      { type: "illustration", content: 'A teacher of thirty-one years: "Every September they are new, even when I am not."', illustrationId: "story-septembers" },
      { type: "point", heading: "The harvest comes in its season", minutes: 10, content: "Sowing is quiet work. Nobody applauds a seed." },
      { type: "scripture", ref: "Galatians 6:9", translation: "ESV", text: "And let us not grow weary of doing good, for in due season we will reap, if we do not give up." },
      { type: "reflection", content: "What have you been tempted to stop doing because it seemed to make no difference?" },
      { type: "note", content: "Slow down through the second point. Last time it was rushed." }
    ]
  },
  {
    title: "When All Things Work Together",
    primaryPassage: "Romans 8:28-39",
    datePreached: daysFromToday(-17),
    status: "preached",
    seriesId: "series-letters",
    tags: ["suffering", "providence"],
    blocks: [
      { type: "point", heading: "God's purpose stands", content: "Nothing in creation can separate us from the love of God." },
      { type: "scripture", ref: "Romans 8:28", translation: "ESV", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose." },
      { type: "application", content: "Name the hard year out loud, and name where God was in it." },
      { type: "reflection", content: "Where have you seen providence at work in a hard year?" }
    ],
    preachings: [
      { date: daysFromToday(-556), church: "Hope Chapel", minutes: 29 },
      { date: daysFromToday(-17), church: "Grace Fellowship", minutes: 32 }
    ]
  },
  {
    title: "A Living Hope",
    primaryPassage: "1 Peter 1:3-9",
    datePreached: daysFromToday(-87),
    status: "preached",
    seriesId: "series-letters",
    tags: ["hope", "resurrection"],
    blocks: [
      { type: "point", heading: "Born again to a living hope", content: "Through the resurrection of Jesus Christ from the dead." },
      { type: "point", heading: "Kept by the power of God", content: "An inheritance that does not fade." },
      { type: "scripture", ref: "Romans 8:11", translation: "ESV", text: "If the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you." },
      { type: "illustration", content: "The fisherman who mended nets every evening, whether or not the day had caught anything.", illustrationId: "story-nets" }
    ]
  },
  {
    title: "The Shepherd Who Goes Looking",
    primaryPassage: "Luke 15:1-7",
    datePreached: daysFromToday(-129),
    status: "preached",
    tags: ["grace", "parables"],
    blocks: [
      { type: "point", heading: "Ninety-nine are not enough", content: "The shepherd leaves what is safe for what is lost." },
      { type: "scripture", ref: "Luke 15:4", translation: "ESV", text: "What man of you, having a hundred sheep, if he has lost one of them, does not leave the ninety-nine in the open country, and go after the one that is lost, until he finds it?" },
      { type: "application", content: "Who has drifted from this room that nobody has gone after?" }
    ]
  },
  {
    title: "Salt That Keeps Its Taste",
    primaryPassage: "Matthew 5:13-16",
    datePreached: daysFromToday(-171),
    status: "preached",
    tags: ["witness"],
    blocks: [
      { type: "point", heading: "Salt is for the food, not the shaker", content: "A church that stays in the building has not yet been used." },
      { type: "illustration", content: "The fisherman who mended nets every evening, whether or not the day had caught anything.", illustrationId: "story-nets" },
      { type: "point", heading: "Light is meant to be seen", content: "Not to be admired: to help people find the door." }
    ]
  }
];
const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "untitled-sermon";
function pathFor(sermon) {
  const date = sermon.datePreached ?? sermon.createdAt.slice(0, 10);
  return `Sermons/${date.slice(0, 4)}/${date}-${slug(sermon.title)}.json`;
}
function seedSermons() {
  return SEEDS.map((seed, n) => {
    const stamp = `${seed.datePreached ?? daysFromToday(-10)}T09:00:00.000Z`;
    return {
      id: `demo-${n + 1}`,
      fileVersion: SERMON_FILE_VERSION,
      title: seed.title,
      seriesId: seed.seriesId ?? null,
      primaryPassage: seed.primaryPassage,
      datePreached: seed.datePreached,
      ...seed.lengthMinutes ? { lengthMinutes: seed.lengthMinutes } : {},
      ...seed.preachings ? { preachings: seed.preachings } : {},
      status: seed.status,
      tags: seed.tags,
      createdAt: stamp,
      updatedAt: stamp,
      blocks: seed.blocks.map((block, i) => ({ ...block, id: `demo-${n + 1}-b${i + 1}` }))
    };
  });
}
const SHORT = {
  gen: 1,
  ex: 2,
  exo: 2,
  lev: 3,
  num: 4,
  deut: 5,
  dt: 5,
  josh: 6,
  judg: 7,
  jdg: 7,
  ru: 8,
  "1sam": 9,
  "2sam": 10,
  "1kgs": 11,
  "1ki": 11,
  "2kgs": 12,
  "2ki": 12,
  "1chr": 13,
  "1ch": 13,
  "2chr": 14,
  "2ch": 14,
  ezr: 15,
  neh: 16,
  est: 17,
  esth: 17,
  jb: 18,
  ps: 19,
  psa: 19,
  psalm: 19,
  pss: 19,
  prov: 20,
  pr: 20,
  eccl: 21,
  ecc: 21,
  qoh: 21,
  song: 22,
  sos: 22,
  cant: 22,
  isa: 23,
  jer: 24,
  lam: 25,
  ezek: 26,
  eze: 26,
  dan: 27,
  hos: 28,
  joe: 29,
  am: 30,
  amo: 30,
  ob: 31,
  obad: 31,
  jon: 32,
  mic: 33,
  nah: 34,
  hab: 35,
  zeph: 36,
  zep: 36,
  hag: 37,
  zech: 38,
  zec: 38,
  mal: 39,
  mt: 40,
  matt: 40,
  mk: 41,
  mrk: 41,
  lk: 42,
  luk: 42,
  jn: 43,
  jhn: 43,
  ac: 44,
  rom: 45,
  ro: 45,
  "1cor": 46,
  "1co": 46,
  "2cor": 47,
  "2co": 47,
  gal: 48,
  eph: 49,
  phil: 50,
  php: 50,
  col: 51,
  "1thess": 52,
  "1th": 52,
  "2thess": 53,
  "2th": 53,
  "1tim": 54,
  "1ti": 54,
  "2tim": 55,
  "2ti": 55,
  tit: 56,
  phlm: 57,
  phm: 57,
  heb: 58,
  jas: 59,
  jam: 59,
  "1pet": 60,
  "1pe": 60,
  "2pet": 61,
  "2pe": 61,
  "1jn": 62,
  "1jo": 62,
  "2jn": 63,
  "2jo": 63,
  "3jn": 64,
  "3jo": 64,
  jud: 65,
  jude: 65,
  rev: 66,
  re: 66
};
const fold = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");
function bookNumber(name) {
  const key = fold(name);
  if (!key) return null;
  const exact = BOOKS.find((book) => fold(book.name) === key);
  if (exact) return exact.number;
  if (key in SHORT) return SHORT[key];
  const opening = BOOKS.filter((book) => fold(book.name).startsWith(key) && key.length >= 3);
  return opening.length === 1 ? opening[0].number : null;
}
const REFERENCE = /^\s*((?:[1-3]\s*)?[a-z]+(?:\s+(?:of\s+)?[a-z]+)*)\.?\s*(\d+)?(?:\s*[:.]\s*(\d+))?(?:\s*[-–]\s*(\d+)(?:\s*[:.]\s*(\d+))?)?\s*$/i;
function parseReference(text) {
  const match = REFERENCE.exec(text);
  if (!match) return [];
  const book = bookNumber(match[1] ?? "");
  if (book === null) return [];
  const chapter = match[2] ? Number(match[2]) : null;
  const verse = match[3] ? Number(match[3]) : null;
  const endA = match[4] ? Number(match[4]) : null;
  const endB = match[5] ? Number(match[5]) : null;
  if (chapter === null) return [{ book, chapterStart: 1, verseStart: 1, chapterEnd: LAST_VERSE_SENTINEL, verseEnd: LAST_VERSE_SENTINEL }];
  if (verse === null) {
    return [{ book, chapterStart: chapter, verseStart: 1, chapterEnd: endA ?? chapter, verseEnd: LAST_VERSE_SENTINEL }];
  }
  if (endA !== null && endB !== null) return [{ book, chapterStart: chapter, verseStart: verse, chapterEnd: endA, verseEnd: endB }];
  return [{ book, chapterStart: chapter, verseStart: verse, chapterEnd: chapter, verseEnd: endA ?? verse }];
}
function describeReference(text) {
  const ranges2 = parseReference(text);
  return ranges2.length ? ranges2.map(formatRange).join(", ") : null;
}
function overlaps(a, b) {
  if (a.book !== b.book) return false;
  const start = (r) => r.chapterStart * 1e3 + r.verseStart;
  const end = (r) => r.chapterEnd * 1e3 + r.verseEnd;
  return start(a) <= end(b) && end(a) >= start(b);
}
const clone = (value) => JSON.parse(JSON.stringify(value));
const now = () => (/* @__PURE__ */ new Date()).toISOString();
const sermons = /* @__PURE__ */ new Map();
for (const sermon of seedSermons()) sermons.set(pathFor(sermon), sermon);
let series = clone(DEMO_SERIES);
let illustrations = clone(DEMO_ILLUSTRATIONS);
let shapes = [];
let views = [
  { id: "view-romans", name: "Romans", query: { book: 45 } },
  { id: "view-preached", name: "Preached this year", query: { status: "preached", from: `${(/* @__PURE__ */ new Date()).getFullYear()}-01-01` } }
];
let appSettings = { ...DEFAULT_APP_SETTINGS };
let editorSettings = clone(DEFAULT_EDITOR_SETTINGS);
let podium = {
  theme: "dark",
  fontScale: 1,
  targetMinutes: 30,
  showNotes: true,
  reading: "manuscript",
  rail: true,
  pace: 130,
  clock: "elapsed",
  pointTiming: true,
  nextLine: true,
  touchBar: true,
  keyLine: true,
  marks: true,
  warnFive: true,
  warnAtTime: true,
  warnPointOver: true
};
const libraryListeners = /* @__PURE__ */ new Set();
const changed = () => {
  for (const listener of libraryListeners) listener();
};
const LICENSE = { state: "active", expiresAt: null, lastCheckedAt: now(), daysRemaining: null };
const FIRST = [...sermons.entries()].find(([, sermon]) => sermon.status === "draft")?.[0] ?? null;
const byDate = (a, b) => {
  if (a.datePreached === null && b.datePreached !== null) return -1;
  if (b.datePreached === null && a.datePreached !== null) return 1;
  return (b.datePreached ?? "").localeCompare(a.datePreached ?? "") || b.updatedAt.localeCompare(a.updatedAt);
};
const summary = (sermon, path) => ({
  id: sermon.id,
  title: sermon.title,
  filePath: path,
  datePreached: sermon.datePreached,
  primaryPassage: sermon.primaryPassage,
  status: sermon.status,
  updatedAt: sermon.updatedAt
});
function ranges(sermon) {
  const refs = [sermon.primaryPassage ?? "", ...sermon.blocks.map((block) => block.type === "scripture" ? block.ref : "")];
  return refs.flatMap((ref) => ref ? parseReference(ref) : []);
}
const words = (sermon) => flattenForSearch(sermon).toLowerCase();
function snippet(sermon, terms) {
  const text = flattenForSearch(sermon);
  const lower = text.toLowerCase();
  const at = Math.max(0, Math.min(...terms.map((term) => lower.indexOf(term)).filter((i) => i >= 0)));
  const start = Math.max(0, at - 50);
  const end = Math.min(text.length, at + 90);
  let piece = (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
  for (const term of terms) {
    piece = piece.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig"), (m) => `${SNIPPET_MARK_OPEN}${m}${SNIPPET_MARK_CLOSE}`);
  }
  return piece;
}
function query(q) {
  const text = q.text?.trim().toLowerCase() ?? "";
  const terms = text ? text.split(/\s+/) : [];
  const asked = text ? parseReference(text) : [];
  const rows = [...sermons.entries()].filter(([, s]) => q.status ? s.status === q.status : q.hideArchived ? s.status !== "archived" : true).filter(([, s]) => q.church ? (s.preachings ?? []).some((p) => p.church?.toLowerCase() === q.church.toLowerCase()) : true).filter(([, s]) => q.seriesId === null ? s.seriesId === null : q.seriesId !== void 0 ? s.seriesId === q.seriesId : true).filter(([, s]) => q.tag ? s.tags.some((tag) => tag.toLowerCase() === q.tag.toLowerCase()) : true).filter(([, s]) => q.from ? (s.datePreached ?? "") >= q.from : true).filter(([, s]) => q.to ? (s.datePreached ?? "") <= q.to && s.datePreached !== null : true).filter(([, s]) => {
    if (q.book === void 0) return true;
    return ranges(s).some((r) => r.book === q.book && (q.chapter === void 0 || r.chapterStart <= q.chapter && r.chapterEnd >= q.chapter));
  });
  const order = (list) => q.sort === "title" ? [...list].sort(([, a], [, b]) => a.title.localeCompare(b.title, void 0, { sensitivity: "base" })) : q.sort === "edited" ? [...list].sort(([, a], [, b]) => b.updatedAt.localeCompare(a.updatedAt)) : [...list].sort(([, a], [, b]) => byDate(a, b));
  const hit = ([path, s], withSnippet) => ({
    ...summary(s, path),
    ...withSnippet && terms.length ? { snippet: snippet(s, terms) } : {}
  });
  if (!terms.length) return order(rows).map((row) => hit(row, false));
  const touching = asked.length ? order(rows.filter(([, s]) => ranges(s).some((r) => asked.some((a) => overlaps(a, r))))) : [];
  const seen = new Set(touching.map(([, s]) => s.id));
  const saying = order(rows.filter(([, s]) => !seen.has(s.id) && terms.every((term) => words(s).includes(term))));
  return [...touching.map((row) => hit(row, false)), ...saying.map((row) => hit(row, true))].slice(0, q.limit ?? 200);
}
function related(sermonId) {
  const entry = [...sermons.entries()].find(([, s]) => s.id === sermonId);
  if (!entry) return [];
  const [, self] = entry;
  const groups = [];
  const seen = /* @__PURE__ */ new Set([sermonId]);
  const row = (path, s) => ({ id: s.id, title: s.title, filePath: path, datePreached: s.datePreached, status: s.status });
  const others = [...sermons.entries()].filter(([, s]) => s.id !== sermonId).sort(([, a], [, b]) => byDate(a, b));
  const take = (list) => {
    const out = [];
    for (const [path, s] of list) {
      if (seen.has(s.id)) continue;
      seen.add(s.id);
      out.push(row(path, s));
      if (out.length === 5) break;
    }
    return out;
  };
  const chapters = /* @__PURE__ */ new Set();
  for (const range of ranges(self)) {
    const name = bookByNumber(range.book)?.name ?? `Book ${range.book}`;
    if (range.chapterEnd >= LAST_VERSE_SENTINEL) {
      if (chapters.has(`${range.book}`)) continue;
      chapters.add(`${range.book}`);
      const list = take(others.filter(([, s]) => ranges(s).some((r) => r.book === range.book)));
      if (list.length) groups.push({ kind: "passage", label: `Also in ${name}`, sermons: list });
      continue;
    }
    for (let chapter = range.chapterStart; chapter <= Math.min(range.chapterEnd, range.chapterStart + 11); chapter++) {
      if (chapters.has(`${range.book}:${chapter}`)) continue;
      chapters.add(`${range.book}:${chapter}`);
      const list = take(others.filter(([, s]) => ranges(s).some((r) => r.book === range.book && r.chapterStart <= chapter && r.chapterEnd >= chapter)));
      if (list.length) groups.push({ kind: "passage", label: `Also in ${name} ${chapter}`, sermons: list });
    }
  }
  const told = new Set(self.blocks.flatMap((block) => "illustrationId" in block && block.illustrationId ? [block.illustrationId] : []));
  for (const storyId of told) {
    const story = illustrations.find((entry2) => entry2.id === storyId);
    const list = take(others.filter(([, s]) => s.blocks.some((block) => "illustrationId" in block && block.illustrationId === storyId)));
    if (list.length) groups.push({ kind: "story", label: `Also told: ${story?.title.trim() || "this story"}`, sermons: list });
  }
  if (self.seriesId) {
    const named = series.find((entry2) => entry2.id === self.seriesId);
    const list = others.filter(([, s]) => s.seriesId === self.seriesId).slice(0, 12).map(([path, s]) => row(path, s));
    if (named && list.length) groups.push({ kind: "series", label: `Also in ${named.name}`, sermons: list });
  }
  return groups;
}
function coverage() {
  const byBook = /* @__PURE__ */ new Map();
  for (const sermon of sermons.values()) {
    for (const range of ranges(sermon)) {
      const total = bookByNumber(range.book)?.chapters ?? 0;
      if (!total) continue;
      const entry = byBook.get(range.book) ?? { sermons: /* @__PURE__ */ new Set(), chapters: /* @__PURE__ */ new Set(), last: null };
      entry.sermons.add(sermon.id);
      for (let chapter = Math.max(1, range.chapterStart); chapter <= Math.min(range.chapterEnd, total); chapter++) entry.chapters.add(chapter);
      if (sermon.datePreached && (!entry.last || sermon.datePreached > entry.last)) entry.last = sermon.datePreached;
      byBook.set(range.book, entry);
    }
  }
  return BOOKS.filter((book) => byBook.has(book.number)).map((book) => {
    const entry = byBook.get(book.number);
    return { book: book.number, sermons: entry.sermons.size, chapters: [...entry.chapters].sort((a, b) => a - b), last: entry.last };
  });
}
const seriesRows = () => series.map((entry) => ({ ...entry, planned: clone(entry.planned ?? []), retired: entry.retired === true, sermonCount: [...sermons.values()].filter((s) => s.seriesId === entry.id).length })).sort((a, b) => a.name.localeCompare(b.name));
const tagRows = () => {
  const counts = /* @__PURE__ */ new Map();
  for (const sermon of sermons.values()) for (const tag of sermon.tags) counts.set(tag.toLowerCase(), (counts.get(tag.toLowerCase()) ?? 0) + 1);
  return [...counts.entries()].map(([name, sermonCount]) => ({ name, sermonCount })).sort((a, b) => b.sermonCount - a.sermonCount || a.name.localeCompare(b.name));
};
const illustrationRows = () => illustrations.map((entry) => ({
  ...entry,
  uses: [...sermons.entries()].filter(([, s]) => s.blocks.some((block) => "illustrationId" in block && block.illustrationId === entry.id)).sort(([, a], [, b]) => byDate(a, b)).map(([path, s]) => ({ sermonId: s.id, sermonTitle: s.title, filePath: path, datePreached: s.datePreached }))
}));
const unsubscribe = () => () => void 0;
function printInTab(html) {
  const tab = window.open("", "_blank");
  if (!tab) return;
  tab.document.open();
  tab.document.write(html);
  tab.document.close();
  tab.focus();
  setTimeout(() => tab.print(), 400);
}
const demoApi = {
  getSermonFolder: async () => ({ path: "Demo library, in this browser tab", exists: true }),
  chooseSermonFolder: async () => ({ status: "cancelled" }),
  listCloudFolders: async () => [],
  useCloudFolder: async () => ({ status: "cancelled" }),
  connectCloudFolder: async () => ({ status: "cancelled" }),
  disconnectCloudFolder: async () => ({ status: "cancelled" }),
  getLibraryStatus: async () => ({ sermonCount: sermons.size, failures: [], lastReindexMs: 0 }),
  listSermons: async () => [...sermons.entries()].sort(([, a], [, b]) => byDate(a, b)).map(([path, s]) => summary(s, path)),
  readSermon: async (path) => {
    const sermon = sermons.get(path);
    if (!sermon) throw new Error(`No sermon at ${path}`);
    return clone(sermon);
  },
  createSermon: async (title, options) => {
    const stamp = now();
    const sermon = { id: crypto.randomUUID(), fileVersion: SERMON_FILE_VERSION, title, seriesId: options?.seriesId ?? null, primaryPassage: options?.primaryPassage ?? null, datePreached: null, status: "draft", tags: [], createdAt: stamp, updatedAt: stamp, blocks: [] };
    const path = pathFor(sermon);
    sermons.set(path, sermon);
    changed();
    return { filePath: path, updatedAt: stamp };
  },
  duplicateSermon: async (path) => {
    const original = sermons.get(path);
    if (!original) throw new Error(`No sermon at ${path}`);
    const stamp = now();
    const copy = { ...clone(original), id: crypto.randomUUID(), datePreached: null, status: "draft", createdAt: stamp, updatedAt: stamp };
    const copyPath = pathFor(copy).replace(/\.json$/, `-${copy.id.slice(0, 8)}.json`);
    sermons.set(copyPath, copy);
    changed();
    return { filePath: copyPath, updatedAt: stamp };
  },
  deleteSermon: async (path) => {
    sermons.delete(path);
    changed();
  },
  getLastOpened: async () => FIRST,
  writeSermon: async (sermon, previousPath, options) => {
    const updatedAt = now();
    const written = { ...clone(sermon), updatedAt };
    const path = options?.keepName && previousPath ? previousPath : pathFor(written);
    if (previousPath && previousPath !== path) sermons.delete(previousPath);
    sermons.set(path, written);
    changed();
    return { filePath: path, updatedAt };
  },
  queryLibrary: async (q) => query(q),
  readPassage: async (text) => describeReference(text),
  relatedSermons: async (sermonId) => related(sermonId),
  coverage: async () => coverage(),
  listSeries: async () => seriesRows(),
  listViews: async () => views.map((view) => ({ ...clone(view), sermonCount: query({ ...view.query, limit: 1e5 }).length })),
  saveViews: async (next) => {
    views = clone(next);
    return views.map((view) => ({ ...clone(view), sermonCount: query({ ...view.query, limit: 1e5 }).length }));
  },
  voiceStatus: async () => ({ ready: false, downloaded: false, loading: false, progress: null, error: "Dictation runs on your own computer, in the app.", size: "76 MB" }),
  prepareVoice: async () => ({ ready: false, downloaded: false, loading: false, progress: null, error: "Dictation runs on your own computer, in the app.", size: "76 MB" }),
  onVoiceProgress: () => unsubscribe(),
  transcribe: async () => {
    throw new Error("Transcription runs on your own computer, in the app.");
  },
  chooseRecording: async () => null,
  readRecording: async () => {
    throw new Error("Recordings open in the app.");
  },
  listShapes: async () => clone(shapes),
  saveShapes: async (next) => {
    shapes = clone(next);
    return clone(shapes);
  },
  saveSeries: async (next) => {
    series = next.map((entry) => ({ id: entry.id, name: entry.name, description: entry.description, ...entry.planned?.length ? { planned: clone(entry.planned) } : {}, ...entry.retired ? { retired: true } : {} }));
    changed();
    return seriesRows();
  },
  listTags: async () => tagRows(),
  listChurches: async () => {
    const seen = /* @__PURE__ */ new Map();
    for (const sermon of sermons.values()) {
      for (const telling of sermon.preachings ?? []) {
        if (!telling.church) continue;
        const key = telling.church.toLowerCase();
        const row = seen.get(key) ?? { name: telling.church, sermons: /* @__PURE__ */ new Set(), last: telling.date };
        row.sermons.add(sermon.id);
        if (telling.date > row.last) row.last = telling.date;
        seen.set(key, row);
      }
    }
    return [...seen.values()].map((row) => ({ name: row.name, sermonCount: row.sermons.size, last: row.last })).sort((a, b) => b.last.localeCompare(a.last));
  },
  renameTag: async (from, to) => {
    let count = 0;
    for (const sermon of sermons.values()) {
      if (!sermon.tags.some((tag) => tag.toLowerCase() === from.toLowerCase())) continue;
      const tags = sermon.tags.filter((tag) => tag.toLowerCase() !== from.toLowerCase());
      if (!tags.some((tag) => tag.toLowerCase() === to.toLowerCase())) tags.push(to);
      sermon.tags = tags;
      count++;
    }
    changed();
    return count;
  },
  revealSermon: async () => void 0,
  getPodiumSettings: async () => ({ ...podium }),
  setPodiumSettings: async (next) => {
    podium = { ...podium, ...next };
    return { ...podium };
  },
  // The podium fills the window it is in and stays there: a visitor's
  // whole screen is not the page's to take.
  setPodiumMode: async () => void 0,
  exportPdf: async (html) => {
    printInTab(html);
    return { status: "cancelled" };
  },
  printHtml: async (html) => printInTab(html),
  getAppSettings: async () => ({ ...appSettings }),
  setAppSettings: async (next) => {
    appSettings = { ...appSettings, ...next };
    return { ...appSettings };
  },
  listSpellingLanguages: async () => [],
  listFonts: async () => ["Palatino Linotype", "Georgia", "Times New Roman", "Garamond", "Calibri", "Arial"],
  listHistory: async () => [],
  readHistory: async () => {
    throw new Error("History lives in your sermon folder, in the app.");
  },
  keepHistory: async () => null,
  getAppInfo: async () => ({ version: "demo", dataPath: "this browser tab" }),
  getEditorSettings: async () => clone(editorSettings),
  setEditorSettings: async (next) => {
    editorSettings = { ...editorSettings, ...next };
    return clone(editorSettings);
  },
  openExported: async () => void 0,
  listIllustrations: async () => illustrationRows(),
  saveIllustrations: async (next) => {
    illustrations = clone(next);
    changed();
    return illustrationRows();
  },
  getLicenseStatus: async () => ({ ...LICENSE }),
  revalidateLicense: async () => ({ ...LICENSE }),
  activateLicense: async () => ({ ...LICENSE }),
  deactivateLicense: async () => ({ ...LICENSE }),
  getUpdateReady: async () => null,
  installUpdate: async () => void 0,
  onUpdateReady: () => unsubscribe(),
  importDocx: async () => ({ status: "cancelled", importedCount: 0, failures: [] }),
  exportMarkdown: async () => ({ status: "cancelled", written: 0, failures: [] }),
  chooseImage: async () => null,
  storeImage: async (bytes, mime) => {
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return `data:${mime};base64,${btoa(binary)}`;
  },
  onContextMenu: (callback) => {
    const listener = (event) => {
      const target = event.target;
      const editable = Boolean(target?.closest('[contenteditable="true"], input, textarea'));
      if (!editable) return;
      event.preventDefault();
      callback({ x: event.clientX, y: event.clientY, misspelledWord: "", suggestions: [], isEditable: true });
    };
    document.addEventListener("contextmenu", listener);
    return () => document.removeEventListener("contextmenu", listener);
  },
  onLibraryChanged: (callback) => {
    libraryListeners.add(callback);
    return () => libraryListeners.delete(callback);
  },
  onSermonFileChanged: () => unsubscribe(),
  onLicenseChanged: () => unsubscribe(),
  replaceMisspelling: async () => void 0,
  learnSpelling: async () => false
};
window.api = demoApi;
document.documentElement.classList.add("demo");
applyThemePreference("system");
let touched = false;
const settle = () => {
  touched = true;
};
window.addEventListener("pointerdown", settle, { once: true, capture: true });
window.addEventListener("keydown", settle, { once: true, capture: true });
document.addEventListener("focusin", (event) => {
  if (!touched && event.target instanceof HTMLElement) event.target.blur();
});
const scrollIntoView = Element.prototype.scrollIntoView;
Element.prototype.scrollIntoView = function(arg) {
  if (touched) scrollIntoView.call(this, arg);
};
const focus = HTMLElement.prototype.focus;
HTMLElement.prototype.focus = function(options) {
  focus.call(this, touched ? options : { ...options, preventScroll: true });
};
const container = document.getElementById("root");
if (!container) throw new Error("Root element missing from demo.html");
clientExports.createRoot(container).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
