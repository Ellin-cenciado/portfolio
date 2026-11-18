/* =========================================================
   Ellin — portfolio data, diagrams and interactions
   ========================================================= */

(() => {
  "use strict";

  const PROJECTS = [
    {
      id: "webstudy",
      index: "01",
      title: "WebStudy",
      category: "Full-stack / Mobile / AI",
      filters: ["product", "data"],
      featured: true,
      span: 12,
      year: "2026",
      team: false,
      role: "Solo project — product design, backend, frontend, desktop packaging and Android bridge.",
      tagline: "One study engine. Three front ends.",
      blurb:
        "A local-first study tracker that carries debt forward, packaged for the browser, Electron and Android from a single Python engine.",
      description:
        "A study tracker built around a deceptively simple rule: every day grants study time, and time you do not study becomes debt. WebStudy takes SimpleStudy's Python domain engine and puts it behind three very different shells — a React web app, an Electron desktop bundle and a native Android app.",
      highlights: [
        "Kept Python as the single authority for timing, carry-over, checklists and history; the React front ends only render state and send commands.",
        "Streamed live state over Server-Sent Events and reused SimpleStudy's XDG files, so an existing installation opens with its data intact.",
        "Packaged the backend as a PyInstaller sidecar for Electron, with loopback binding, a parent watchdog and a clean shutdown that flushes state.",
        "Embedded the same engine in Android through Chaquopy: React Native UI, no WebView and no local server, with the timer and checklist fully offline.",
        "Built Study Prep: PDF, PPTX and Markdown extraction plus an OpenAI-compatible LLM pipeline that produces study notes and a deterministic checklist plan.",
        "Covered the stack with 193 backend tests, Vitest, Jest, linting and one-command setup/start scripts."
      ],
      stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Python", "SSE", "Electron", "PyInstaller", "React Native", "Chaquopy", "SQLite"],
      cardStack: ["React 19", "FastAPI", "Electron", "React Native"],
      stats: [["193", "backend tests"], ["3", "front ends"], ["22.7k", "lines of code"]],
      repo: "https://github.com/Ellin-cenciado/WebStudy"
    },
    {
      id: "simplestudy",
      index: "02",
      title: "SimpleStudy",
      category: "Desktop / Linux",
      filters: ["product", "systems"],
      featured: false,
      span: 7,
      year: "2026",
      team: false,
      role: "Solo project — domain model, GTK interface, D-Bus service, storage and test suite.",
      tagline: "Where the carry-over model began.",
      blurb:
        "A GTK4 study tracker with a pure carry-over ledger, a D-Bus daemon and SQLite history.",
      description:
        "SimpleStudy is the origin of the carry-over model: a Linux-native study tracker with GTK4, a D-Bus daemon and an unapologetically pure core. Unmet hours roll into the next day; Saturday's optional goal never becomes debt.",
      highlights: [
        "Modeled each weekday policy as data and kept the ledger arithmetic in a pure module with no GTK, D-Bus or SQLite imports.",
        "Tested time-dependent behaviour with a fake clock instead of sleeps, so the suite is deterministic and fast.",
        "Exposed the daemon over org.simplestudy.Daemon so the GTK GUI, CLI and any future client share one state machine.",
        "Persisted config, state and checklist with atomic writes; kept day summaries in SQLite for the stats view.",
        "Counted wall-clock session time, breaks included, and used a monotonic clock so suspend time is never credited.",
        "Added a five-minute rest after a subject, plus per-item surplus and debt carry in the checklist.",
        "Wrote 127 tests across ledger, tracker, service, storage, config, GUI opacity and daemon behaviour."
      ],
      stack: ["Python", "GTK4", "libadwaita", "D-Bus", "SQLite", "systemd", "unittest"],
      cardStack: ["Python", "GTK4", "D-Bus", "SQLite"],
      stats: [["127", "tests"], ["06", "core modules"], ["30", "Python modules"]],
      repo: "https://github.com/Ellin-cenciado/SimpleStudy"
    },
    {
      id: "telejob",
      index: "03",
      title: "TeleJob",
      category: "AI / Automation",
      filters: ["product", "data"],
      featured: false,
      span: 5,
      year: "2026",
      team: false,
      role: "Solo project — pipeline design, Telegram integration, Gemini prompting and LinkedIn publishing.",
      tagline: "Screenshot album in. Bilingual post out.",
      blurb:
        "A Telegram bot that turns screenshot albums into reviewed, bilingual LinkedIn posts with Gemini.",
      description:
        "A private Telegram bot that turns a messy album of screenshots into a polished, bilingual LinkedIn post. Send photos plus context; get back a draft, edit it in chat, then publish without leaving Telegram.",
      highlights: [
        "Batched Telegram media groups behind a timer so an entire album becomes one multimodal Gemini 2.5 Flash request.",
        "Wrapped file downloads in a retry and backoff policy tuned for PythonAnywhere's proxy, the practical failure point of the pipeline.",
        "Used Gemini's inline image payload with a strict prompt: Spanish post, English translation, professional hashtags, no invasive markdown.",
        "Built an edit-and-confirm loop with inline callbacks before any LinkedIn API call is made.",
        "Implemented LinkedIn's current /rest/images upload flow, including multi-image posts and author URN resolution.",
        "Kept every secret in environment variables and documented the PythonAnywhere deployment."
      ],
      stack: ["Python", "Flask", "Gemini 2.5 Flash", "Telegram Bot API", "LinkedIn API", "PythonAnywhere", "requests"],
      cardStack: ["Python", "Flask", "Gemini 2.5", "Telegram"],
      stats: [["467", "lines of Python"], ["02", "output languages"], ["01", "webhook"]],
      repo: "https://github.com/Ellin-cenciado/TeleJob"
    },
    {
      id: "big-brother-fs",
      index: "04",
      title: "big-brother-fs",
      category: "Systems / FUSE",
      filters: ["systems"],
      featured: false,
      span: 5,
      year: "2025",
      team: true,
      role: "Team project — four-person implementation of a userspace FAT32 filesystem. Repository includes the full history.",
      tagline: "A FAT32 filesystem, mounted from userspace.",
      blurb:
        "A FAT32 filesystem mounted through FUSE, with a hand-built directory tree and cluster-chain layer.",
      description:
        "A userspace FAT32 filesystem built on FUSE. The project reads a disk image, reconstructs the directory tree and serves file operations while keeping the in-memory model and the on-disk image consistent.",
      highlights: [
        "Parsed the boot sector, BIOS parameter block and both FAT copies to mount an image.",
        "Represented directories with a hybrid tree — binary search by name plus linked traversal — for logarithmic lookup and cheap path walks.",
        "Implemented the FUSE operation set across the FAT table, directory entries and cluster chains, including create, mkdir, unlink, read and write paths.",
        "Kept 8.3 filename semantics and single-threaded operation as explicit scope decisions rather than accidental limitations.",
        "Added Check unit tests for the generic tree and FAT tree, plus mounted-image shell tests and a logging/watch test harness.",
        "Documented the module boundaries and debug workflow: foreground FUSE, a DEBUG macro and clang-format."
      ],
      stack: ["C", "FUSE", "FAT32", "GLib", "Check", "Linux", "Make"],
      cardStack: ["C", "FUSE", "FAT32", "GLib"],
      stats: [["4.1k", "lines of C"], ["43", "unit tests"], ["8.3", "filename format"]],
      repo: "https://github.com/Ellin-cenciado/big-brother-fs"
    },
    {
      id: "spark-reddit",
      index: "05",
      title: "spark-reddit",
      category: "Data / Scala",
      filters: ["data"],
      featured: false,
      span: 7,
      year: "2026",
      team: true,
      role: "Team project — three-person Scala and Spark implementation, including the parallelization report.",
      tagline: "Named-entity recognition at feed scale.",
      blurb:
        "A Scala and Spark pipeline that downloads Reddit feeds, filters noise and ranks named entities.",
      description:
        "A Scala and Spark pipeline that ingests Reddit feeds, filters noise and counts named entities against curated dictionaries. The design deliberately mixes a functional data pipeline with an OOP entity model.",
      highlights: [
        "Loaded subscriptions and entity dictionaries, downloaded JSON feeds, parsed posts with json4s and filtered empty or irrelevant posts.",
        "Modeled entities as a class hierarchy with polymorphic describe behaviour; Organization → University and Technology → ProgrammingLanguage show the inheritance.",
        "Matched whole words case-insensitively, so 'Java' does not match 'JavaScript' and 'Scala' does not match 'ScalaTest'.",
        "Parallelized the entity-counting stage on Spark RDDs and documented which pipeline steps map to which Spark abstractions.",
        "Exposed --subscription-file, --entities-dir and --top-k through scopt, with sensible defaults.",
        "Wrote an integration harness covering malformed JSON, unreachable URLs, bad schemas, missing directories and partial dictionaries."
      ],
      stack: ["Scala", "Apache Spark 3.5", "RDDs", "sbt", "json4s", "scopt", "Bash"],
      cardStack: ["Scala", "Spark 3.5", "sbt", "json4s"],
      stats: [["519", "lines of Scala"], ["07", "integration scenarios"], ["3.5", "Spark version"]],
      repo: "https://github.com/Ellin-cenciado/spark-reddit"
    },
    {
      id: "bookeeper",
      index: "06",
      title: "BooKeeper-Scraper",
      category: "Automation",
      filters: ["data"],
      featured: false,
      span: 6,
      year: "2026",
      team: false,
      role: "Solo project — scraper, state diffing, scheduling and notification pipeline.",
      tagline: "One book. One notification.",
      blurb:
        "A 70-line scraper that watches a library catalogue and sends a Telegram ping when the book is free.",
      description:
        "Sometimes the project is just: I want to read Crime and Punishment, and the library copy is always checked out. This bot watches the catalogue and pings Telegram the moment the status changes.",
      highlights: [
        "Scrapes a Koha OPAC detail page through ScraperAPI with an Argentine residential proxy.",
        "Diffs the current status against estado_anterior.txt and only notifies on meaningful changes.",
        "Runs on a GitHub Actions schedule every two days and commits the new state back to the repository.",
        "Sends a direct Telegram message with the new status and a link to the book.",
        "Keeps credentials in repository secrets; the whole thing is 70 lines of Python.",
        "Uses the repository itself as durable state, so the workflow survives runner restarts."
      ],
      stack: ["Python", "requests", "BeautifulSoup", "ScraperAPI", "GitHub Actions", "Telegram Bot API"],
      cardStack: ["Python", "BeautifulSoup", "Actions", "Telegram"],
      stats: [["70", "lines of Python"], ["1", "book watched"], ["2", "day cadence"]],
      repo: "https://github.com/Ellin-cenciado/BooKeeper-Scraper"
    },
    {
      id: "my-bash",
      index: "07",
      title: "my-bash",
      category: "Systems / C",
      filters: ["systems"],
      featured: false,
      span: 6,
      year: "2025",
      team: true,
      role: "Team project — three-person Unix shell implementation in C, with parsing, execution and tests.",
      tagline: "A Unix shell, built from the parser up.",
      blurb:
        "A C shell with builtins, redirections, pipelines, background jobs and a real test suite.",
      description:
        "A Unix shell written in C, from the command model outward: lexer/parser input becomes command and pipeline structures, then a fork/exec executor handles builtins, redirections, pipes and background jobs.",
      highlights: [
        "Defined explicit command and pipeline structures instead of passing argv arrays around.",
        "Implemented internal commands and external execution with fork, exec and wait.",
        "Supported input and output redirection, multi-stage pipelines and background execution.",
        "Built a Check-based test suite for parsing, command construction, pipelines and execution, with syscall mocks and Valgrind leak checks.",
        "Added a Makefile that picks the right precompiled lexer/parser objects for i386 and x86_64.",
        "Documented module boundaries, team workflow and AI-assisted debugging."
      ],
      stack: ["C", "POSIX", "GLib", "Check", "Valgrind", "Make", "Linux"],
      cardStack: ["C", "POSIX", "Check", "Valgrind"],
      stats: [["1.5k", "lines of C"], ["79", "test cases"], ["51", "commits"]],
      repo: "https://github.com/Ellin-cenciado/my-bash"
    },
    {
      id: "alu",
      index: "08",
      title: "alu-sys-verilog",
      category: "Hardware / FPGA",
      filters: ["hardware"],
      featured: true,
      span: 12,
      year: "2025",
      team: false,
      role: "Solo project — SystemVerilog datapath, testbench, constraints and Vivado project.",
      tagline: "Four bits, built from gates.",
      blurb:
        "A 4-bit ALU in SystemVerilog, from full adders and gate primitives to flags and a Vivado testbench.",
      description:
        "A 4-bit ALU built structurally in SystemVerilog: gates, a ripple-carry adder, an opcode mux, flag logic and a seven-segment output wrapper, held together by a Vivado project with constraints and a directed testbench.",
      highlights: [
        "Implemented AND, OR, ADD, SUB (two's complement) and PASS B behind a 3-bit opcode.",
        "Built addition from a chain of full adders to make carry propagation explicit.",
        "Generated zero and carry flags, and routed the result to a seven-segment controller for FPGA output.",
        "Wrote eight directed simulation cases, including carry-out, zero-result and undefined-opcode behaviour.",
        "Included XDC pin constraints and tracked synthesis/implementation runs from Vivado.",
        "Kept the design readable rather than parameterized — the goal was understanding the datapath."
      ],
      stack: ["SystemVerilog", "Vivado", "FPGA", "XDC", "Testbench", "Digital logic"],
      cardStack: ["SystemVerilog", "Vivado", "FPGA", "XDC"],
      stats: [["08", "directed tests"], ["4-bit", "datapath"], ["01", "Vivado project"]],
      repo: "https://github.com/Ellin-cenciado/alu-sys-verilog"
    }
  ];

  const FILTER_LABELS = {
    all: "all",
    product: "product",
    systems: "systems",
    data: "data & AI",
    hardware: "hardware"
  };

  /* =======================================================
     Diagram primitives
     ======================================================= */

  const T = (x, y, text, cls = "dg-text", anchor = "start") =>
    `<text x="${x}" y="${y}" class="${cls}"${anchor !== "start" ? ` text-anchor="${anchor}"` : ""}>${text}</text>`;

  const R = (x, y, w, h, cls = "dg-box") =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}"/>`;

  const L = (x1, y1, x2, y2, cls = "dg-line") =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;

  const P = (d, cls = "dg-line") => `<path d="${d}" class="${cls}"/>`;

  const C = (cx, cy, r, cls = "dg-node") => `<circle cx="${cx}" cy="${cy}" r="${r}" class="${cls}"/>`;

  const arrow = (x1, y1, x2, y2, id, cls = "dg-line") =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" marker-end="url(#arrow-${id})"/>`;

  const markers = (id) =>
    `<defs><marker id="arrow-${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#141512"/></marker></defs>`;

  const fig = (label, text, body) =>
    `<svg class="diagram" viewBox="0 0 400 260" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${markers(text)}${T(14, 16, `FIG. ${text} — ${label}`, "dg-corner")}${body}</svg>`;

  const chip = (x, y, w, text, cls = "dg-text--xs", fill = "dg-box") =>
    `${R(x, y, w, 22, fill)}${T(x + w / 2, y + 14, text, `${cls}`, "middle")}`;

  /* =======================================================
     Diagrams — one hand-built system map per project
     ======================================================= */

  const DIAGRAMS = {
    webstudy: () => fig(
      "THREE SHELLS / ONE ENGINE",
      "01",
      `
      ${T(14, 34, "CLIENTS", "dg-text--xs")}
      ${R(14, 42, 112, 44)}${T(24, 59, "WEB", "dg-text dg-text--bold")}${T(24, 73, "React 19 + SSE", "dg-text--xs")}${T(116, 59, "01", "dg-text--xs", "end")}
      ${R(14, 98, 112, 44)}${T(24, 115, "DESKTOP", "dg-text dg-text--bold")}${T(24, 129, "Electron + PyInstaller", "dg-text--xs")}${T(116, 115, "02", "dg-text--xs", "end")}
      ${R(14, 154, 112, 44)}${T(24, 171, "ANDROID", "dg-text dg-text--bold")}${T(24, 185, "React Native + Chaquopy", "dg-text--xs")}${T(116, 171, "03", "dg-text--xs", "end")}
      ${P("M126 64 H148 V120 H164", "dg-line--soft")}
      ${P("M126 120 H164", "dg-line--soft")}
      ${P("M126 176 H148 V120", "dg-line--soft")}
      ${R(168, 76, 132, 96, "dg-box--ink")}
      ${T(180, 98, "STUDY ENGINE", "dg-text dg-text--md dg-text--bold dg-text--inv")}
      ${T(180, 115, "timing · ledger", "dg-text--sm dg-text--inv-soft")}
      ${T(180, 127, "checklist · history", "dg-text--sm dg-text--inv-soft")}
      ${L(180, 138, 288, 138, "dg-line--soft")}
      ${T(180, 155, "PYTHON 3.11+", "dg-text--xs dg-text--inv-soft")}
      ${C(284, 90, 3, "dg-dot")}
      ${L(300, 94, 318, 94, "dg-line--soft")}
      ${L(300, 150, 318, 150, "dg-line--soft")}
      ${R(318, 76, 68, 38)}${T(326, 92, "XDG", "dg-text dg-text--bold")}${T(326, 105, "state / config", "dg-text--xs")}
      ${R(318, 128, 68, 43)}${T(326, 144, "AI PREP", "dg-text dg-text--bold")}${T(326, 157, "LLM pipeline", "dg-text--xs")}
      ${T(14, 216, "DELIVERY", "dg-text--xs")}
      ${chip(14, 224, 66, "OFFLINE")}
      ${chip(88, 224, 48, "SSE")}
      ${chip(144, 224, 88, "APK / APPIMAGE")}
      ${chip(240, 224, 66, "224 TESTS")}
      ${chip(314, 224, 72, "3 CLIENTS")}
      ${T(386, 216, "ONE SOURCE OF TRUTH", "dg-text--xs dg-text--accent", "end")}
      `
    ),

    simplestudy: () => fig(
      "THE CARRY-OVER LEDGER",
      "02",
      `
      ${C(96, 127, 62)}
      ${C(96, 127, 50, "dg-line--soft")}
      ${P("M96 65 A62 62 0 0 1 127 181", "dg-line--accent")}
      ${T(96, 121, "04:00", "dg-text dg-text--lg dg-text--bold", "middle")}
      ${T(96, 135, "REQUIRED", "dg-text--xs", "middle")}
      ${T(96, 151, "MON → TUE", "dg-text--xs", "middle")}
      ${T(96, 211, "DEBT CARRIED", "dg-text--sm dg-text--accent", "middle")}
      ${T(96, 224, "WALL-CLOCK TIME", "dg-text--xs", "middle")}
      ${T(186, 38, "ARCHITECTURE", "dg-text--xs")}
      ${L(190, 58, 190, 214, "dg-line--soft")}
      ${C(190, 66, 3)}
      ${C(190, 110, 3)}
      ${C(190, 154, 3)}
      ${C(190, 198, 3, "dg-dot")}
      ${R(202, 48, 184, 36)}${T(212, 64, "GTK4 + LIBADWAITA", "dg-text dg-text--bold")}${T(212, 77, "timer / checklist / stats", "dg-text--xs")}
      ${R(202, 92, 184, 36)}${T(212, 108, "D-BUS DAEMON", "dg-text dg-text--bold")}${T(212, 121, "org.simplestudy.Daemon", "dg-text--xs")}
      ${R(202, 136, 184, 36)}${T(212, 152, "PURE CORE", "dg-text dg-text--bold")}${T(212, 165, "ledger · pomodoro · fake clock", "dg-text--xs")}
      ${R(202, 180, 184, 36)}${T(212, 196, "SQLITE + XDG", "dg-text dg-text--bold")}${T(212, 209, "history / atomic state", "dg-text--xs")}
      ${T(202, 240, "SATURDAY'S GOAL NEVER BECOMES DEBT", "dg-text--xs dg-text--accent")}
      `
    ),

    telejob: () => fig(
      "ALBUM TO LINKEDIN",
      "03",
      `
      ${R(14, 38, 104, 62)}
      ${T(24, 54, "TELEGRAM", "dg-text dg-text--bold")}
      ${T(24, 66, "media_group", "dg-text--xs")}
      ${R(24, 73, 18, 14, "dg-box--fill")}
      ${R(46, 73, 18, 14, "dg-box--fill")}
      ${R(68, 73, 18, 14, "dg-box--fill")}
      ${T(24, 96, "caption + 3 photos", "dg-text--xs")}
      ${arrow(118, 68, 142, 68, "03")}
      ${R(144, 46, 74, 46)}
      ${T(152, 62, "GETFILE", "dg-text dg-text--bold")}
      ${T(152, 75, "retry ×1–3", "dg-text--xs")}
      ${T(152, 86, "backoff", "dg-text--xs")}
      ${arrow(218, 68, 240, 68, "03")}
      ${R(242, 38, 144, 62, "dg-box--ink")}
      ${T(254, 56, "GEMINI 2.5", "dg-text dg-text--bold dg-text--inv")}
      ${T(254, 69, "FLASH", "dg-text dg-text--bold dg-text--inv")}
      ${T(254, 84, "one multimodal call", "dg-text--xs dg-text--inv-soft")}
      ${P("M366 52 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 Z", "dg-dot")}
      ${arrow(314, 100, 314, 126, "03")}
      ${P("M314 126 H294 V138", "dg-line")}
      ${R(200, 138, 186, 68)}
      ${T(210, 154, "DRAFT PREVIEW", "dg-text dg-text--bold")}
      ${T(210, 168, "ES + EN · hashtags", "dg-text--xs")}
      ${R(210, 176, 40, 18, "dg-box--accent")}${T(230, 188, "ES", "dg-text--xs dg-text--bold", "middle")}
      ${R(254, 176, 40, 18, "dg-box--fill")}${T(274, 188, "EN", "dg-text--xs", "middle")}
      ${T(302, 188, "edit ✓", "dg-text--xs dg-text--accent")}
      ${arrow(200, 172, 176, 172, "03")}
      ${R(14, 138, 158, 68)}
      ${T(24, 154, "LINKEDIN", "dg-text dg-text--bold")}
      ${T(24, 168, "rest/images upload", "dg-text--xs")}
      ${R(24, 176, 134, 18, "dg-box--fill")}${T(91, 188, "PUBLISHED POST", "dg-text--xs", "middle")}
      ${T(14, 232, "PROXY RETRY / PYTHONANYWHERE", "dg-text--xs")}
      ${T(386, 232, "PREVIEW → EDIT → CONFIRM", "dg-text--xs dg-text--accent", "end")}
      `
    ),

    "big-brother-fs": () => fig(
      "FAT32 IN USER SPACE",
      "04",
      `
      ${T(14, 34, "USER SPACE", "dg-text--xs")}
      ${R(14, 42, 168, 82)}
      ${T(24, 58, "IN-MEMORY TREE", "dg-text dg-text--bold")}
      ${R(26, 68, 26, 16, "dg-box--fill")}${T(39, 79, "/", "dg-text--xs", "middle")}
      ${P("M52 76 H64 V66 H72", "dg-line--soft")}
      ${P("M52 76 H64 V88 H72", "dg-line--soft")}
      ${P("M52 76 H64 V104 H72", "dg-line--soft")}
      ${R(72, 58, 42, 16, "dg-box")}${T(93, 69, "etc", "dg-text--xs", "middle")}
      ${R(72, 80, 48, 16, "dg-box")}${T(96, 91, "home", "dg-text--xs", "middle")}
      ${R(72, 100, 48, 16, "dg-box--accent")}${T(96, 111, "docs", "dg-text--xs dg-text--bold", "middle")}
      ${T(128, 91, "BST + list", "dg-text--xs")}
      ${T(128, 102, "8.3 names", "dg-text--xs")}
      ${R(196, 42, 190, 82)}
      ${T(206, 58, "FUSE OPERATIONS", "dg-text dg-text--bold")}
      ${T(206, 72, "getattr · readdir", "dg-text--xs")}
      ${T(206, 84, "create · mkdir · unlink", "dg-text--xs")}
      ${T(206, 96, "read · write · truncate", "dg-text--xs")}
      ${R(318, 104, 58, 14, "dg-box--fill")}${T(347, 114, "libfuse", "dg-text--xs", "middle")}
      ${L(14, 142, 386, 142, "dg-line--soft dg-dash")}
      ${T(386, 136, "FUSE BOUNDARY", "dg-text--xs", "end")}
      ${R(14, 152, 366, 78, "dg-box--fill")}
      ${T(24, 168, "FAT32 IMAGE", "dg-text dg-text--bold")}
      ${R(24, 178, 74, 32)}${T(61, 192, "BOOT", "dg-text--xs", "middle")}${T(61, 203, "BPB", "dg-text--xs", "middle")}
      ${R(104, 178, 58, 32)}${T(133, 192, "FAT #1", "dg-text--xs", "middle")}${T(133, 203, "COPY", "dg-text--xs", "middle")}
      ${R(168, 178, 58, 32)}${T(197, 192, "FAT #2", "dg-text--xs", "middle")}${T(197, 203, "COPY", "dg-text--xs", "middle")}
      ${R(232, 178, 138, 32)}${T(301, 191, "DATA + CLUSTER CHAINS", "dg-text--xs", "middle")}${T(301, 203, "7 → 12 → 19 → EOF", "dg-text--xs", "middle")}
      ${arrow(98, 124, 98, 152, "04", "dg-line--soft")}
      ${arrow(302, 124, 302, 152, "04", "dg-line--soft")}
      ${T(100, 224, "KEEP MEMORY = IMAGE", "dg-text--xs dg-text--accent")}
      ${T(14, 244, "43 UNIT TESTS", "dg-text--xs")}
      ${T(120, 244, "MOUNTED-IMAGE TESTS", "dg-text--xs")}
      ${T(280, 244, "SINGLE THREAD", "dg-text--xs")}
      ${T(386, 244, "CLANG-FORMAT", "dg-text--xs", "end")}
      `
    ),

    "spark-reddit": () => fig(
      "FEEDS TO ENTITIES",
      "05",
      `
      ${R(14, 36, 68, 38)}${T(48, 51, "REDDIT", "dg-text--sm dg-text--bold", "middle")}${T(48, 64, "JSON FEED", "dg-text--xs", "middle")}
      ${arrow(82, 55, 90, 55, "05")}
      ${R(92, 36, 60, 38)}${T(122, 51, "PARSE", "dg-text--sm dg-text--bold", "middle")}${T(122, 64, "json4s", "dg-text--xs", "middle")}
      ${arrow(152, 55, 160, 55, "05")}
      ${R(162, 36, 56, 38)}${T(190, 51, "FILTER", "dg-text--sm dg-text--bold", "middle")}${T(190, 64, "empty", "dg-text--xs", "middle")}
      ${arrow(218, 55, 226, 55, "05")}
      ${R(228, 36, 80, 38)}${T(268, 51, "DETECT", "dg-text--sm dg-text--bold", "middle")}${T(268, 64, "whole words", "dg-text--xs", "middle")}
      ${arrow(308, 55, 316, 55, "05")}
      ${R(318, 36, 68, 38)}${T(352, 51, "RANK", "dg-text--sm dg-text--bold", "middle")}${T(352, 64, "top-k", "dg-text--xs", "middle")}
      ${T(14, 92, "SPARK 3.5 · LOCAL[*] · FUNCTIONAL PIPELINE", "dg-text--xs dg-text--accent")}
      ${T(14, 112, "OOP ENTITY MODEL", "dg-text--xs")}
      ${R(144, 118, 112, 26)}
      ${T(200, 135, "NamedEntity", "dg-text dg-text--bold", "middle")}
      ${P("M200 144 V150 H46 V154 M200 150 H117 V154 M200 150 H260 V154 M200 150 H340 V154", "dg-line--soft")}
      ${R(14, 154, 64, 22)}${T(46, 169, "Person", "dg-text--xs", "middle")}
      ${R(78, 154, 78, 22)}${T(117, 169, "Organization", "dg-text--xs", "middle")}
      ${R(232, 154, 56, 22)}${T(260, 169, "Place", "dg-text--xs", "middle")}
      ${R(296, 154, 88, 22)}${T(340, 169, "Technology", "dg-text--xs", "middle")}
      ${L(117, 176, 117, 184, "dg-line--soft")}
      ${L(340, 176, 340, 184, "dg-line--soft")}
      ${R(78, 184, 78, 22, "dg-box--fill")}${T(117, 199, "University", "dg-text--xs", "middle")}
      ${R(296, 184, 88, 22, "dg-box--fill")}${T(340, 199, "ProgrammingLanguage", "dg-text--xs", "middle")}
      ${T(14, 230, "DICTIONARY MATCHING", "dg-text--xs")}
      ${T(14, 242, "CASE-INSENSITIVE / WHOLE-WORD", "dg-text--xs")}
      ${chip(282, 224, 104, "7 E2E SCENARIOS", "dg-text--xs", "dg-box--fill")}
      `
    ),

    bookeeper: () => fig(
      "ONE BOOK, WATCHED",
      "06",
      `
      ${R(14, 54, 122, 96)}
      ${T(24, 70, "KOHA OPAC", "dg-text dg-text--bold")}
      ${T(24, 83, "catalogue detail", "dg-text--xs")}
      ${L(24, 90, 126, 90, "dg-line--soft")}
      ${R(24, 98, 100, 22, "dg-box--accent")}${T(74, 112, "PRESTADO", "dg-text--xs dg-text--bold", "middle")}
      ${T(24, 134, "checked out", "dg-text--xs")}
      ${arrow(136, 102, 154, 102, "06")}
      ${R(154, 52, 92, 126)}
      ${L(164, 52, 164, 178, "dg-line--soft")}
      ${T(176, 78, "CRIME", "dg-serif")}
      ${T(176, 95, "AND", "dg-serif")}
      ${T(176, 112, "PUNISHMENT", "dg-serif")}
      ${T(176, 156, "DOSTOEVSKY", "dg-text--xs")}
      ${R(228, 52, 8, 26, "dg-box--accent")}
      ${arrow(246, 102, 262, 102, "06")}
      ${R(262, 54, 124, 96)}
      ${T(272, 70, "TELEGRAM", "dg-text dg-text--bold")}
      ${P("M276 88 l26 -8 l-8 26 l-6 -10 l-8 4 Z", "dg-line")}
      ${R(304, 82, 70, 28)}
      ${T(339, 95, "BOOK IS", "dg-text--xs", "middle")}
      ${T(339, 104, "FREE", "dg-text--xs dg-text--accent", "middle")}
      ${T(272, 128, "only on change", "dg-text--xs")}
      ${T(272, 140, "estado_anterior", "dg-text--xs")}
      ${L(14, 200, 386, 200, "dg-line--soft dg-dash")}
      ${R(14, 208, 116, 26, "dg-box--fill")}${T(72, 224, "SCRAPERAPI / AR", "dg-text--xs", "middle")}
      ${R(142, 208, 100, 26, "dg-box--fill")}${T(192, 224, "CRON · /2 DAYS", "dg-text--xs", "middle")}
      ${R(254, 208, 132, 26, "dg-box--fill")}${T(320, 224, "STATE DIFF → NOTIFY", "dg-text--xs", "middle")}
      ${T(14, 244, "GITHUB ACTIONS SCHEDULE", "dg-text--xs")}
      `
    ),

    "my-bash": () => fig(
      "A SHELL, FROM THE PARSER UP",
      "07",
      `
      ${R(14, 34, 372, 38, "dg-box--ink")}
      ${T(26, 58, "$ ls *.c | grep study &gt; out.txt &amp;", "dg-text dg-text--md dg-text--inv")}
      ${T(14, 88, "INPUT MODEL", "dg-text--xs")}
      ${R(14, 96, 64, 28)}${T(46, 114, "LEX", "dg-text--xs", "middle")}
      ${arrow(78, 110, 88, 110, "07")}
      ${R(90, 96, 68, 28)}${T(124, 114, "PARSE", "dg-text--xs", "middle")}
      ${arrow(158, 110, 168, 110, "07")}
      ${R(170, 96, 76, 28)}${T(208, 114, "COMMAND", "dg-text--xs", "middle")}
      ${arrow(246, 110, 256, 110, "07")}
      ${R(258, 96, 72, 28, "dg-box--fill")}${T(294, 114, "PIPELINE", "dg-text--xs", "middle")}
      ${R(14, 146, 72, 42)}
      ${T(50, 164, "MYBASH", "dg-text--sm dg-text--bold", "middle")}
      ${T(50, 177, "parent", "dg-text--xs", "middle")}
      ${arrow(86, 167, 100, 167, "07")}
      ${R(102, 146, 54, 42)}
      ${T(129, 164, "LS", "dg-text--sm dg-text--bold", "middle")}
      ${T(129, 177, "child", "dg-text--xs", "middle")}
      ${L(156, 160, 178, 160, "dg-line--accent")}
      ${L(156, 174, 178, 174, "dg-line--accent")}
      ${T(167, 152, "PIPE", "dg-text--xs dg-text--accent", "middle")}
      ${R(178, 146, 66, 42)}
      ${T(211, 164, "GREP", "dg-text--sm dg-text--bold", "middle")}
      ${T(211, 177, "child", "dg-text--xs", "middle")}
      ${arrow(244, 167, 258, 167, "07")}
      ${P("M260 146 h40 l12 12 v30 h-52 Z", "dg-box")}
      ${T(286, 164, "out.txt", "dg-text--xs", "middle")}
      ${T(286, 177, "redirect", "dg-text--xs", "middle")}
      ${C(350, 167, 15, "dg-box--accent")}
      ${T(350, 171, "&amp;", "dg-text--md dg-text--bold", "middle")}
      ${T(14, 208, "FORK · EXEC · WAIT", "dg-text--xs")}
      ${T(386, 208, "OPEN FILE DESCRIPTORS", "dg-text--xs", "end")}
      ${T(14, 232, "BUILTINS", "dg-text--xs")}
      ${chip(14, 238, 150, "CD · EXPORT · EXIT")}
      ${chip(174, 238, 74, "79 TESTS")}
      ${chip(258, 238, 58, "CHECK")}
      ${chip(326, 238, 60, "GLIB")}
      `
    ),

    alu: () => fig(
      "4 BITS, BUILT FROM GATES",
      "08",
      `
      ${T(14, 40, "RIPPLE-CARRY DATAPATH", "dg-text--xs")}
      ${R(14, 58, 38, 48)}${T(33, 78, "FA0", "dg-text--sm dg-text--bold", "middle")}${T(33, 91, "+", "dg-text--md", "middle")}
      ${R(60, 58, 38, 48)}${T(79, 78, "FA1", "dg-text--sm dg-text--bold", "middle")}${T(79, 91, "+", "dg-text--md", "middle")}
      ${R(106, 58, 38, 48)}${T(125, 78, "FA2", "dg-text--sm dg-text--bold", "middle")}${T(125, 91, "+", "dg-text--md", "middle")}
      ${R(152, 58, 38, 48)}${T(171, 78, "FA3", "dg-text--sm dg-text--bold", "middle")}${T(171, 91, "+", "dg-text--md", "middle")}
      ${L(52, 82, 60, 82, "dg-line--accent")}
      ${L(98, 82, 106, 82, "dg-line--accent")}
      ${L(144, 82, 152, 82, "dg-line--accent")}
      ${T(56, 76, "C", "dg-text--xs", "middle")}
      ${T(102, 76, "C", "dg-text--xs", "middle")}
      ${T(148, 76, "C", "dg-text--xs", "middle")}
      ${T(14, 126, "A[3:0] / B[3:0]", "dg-text--xs")}
      ${L(14, 134, 190, 134, "dg-line--soft")}
      ${L(14, 142, 190, 142, "dg-line--soft")}
      ${P("M33 134 V106 M79 134 V106 M125 134 V106 M171 134 V106", "dg-line--soft")}
      ${T(14, 160, "3-BIT OPCODE", "dg-text--xs")}
      ${R(14, 168, 190, 38, "dg-box--fill")}
      ${T(24, 182, "000 AND", "dg-text--xs")}${T(76, 182, "001 OR", "dg-text--xs")}${T(124, 182, "010 ADD", "dg-text--xs")}
      ${T(24, 196, "110 SUB", "dg-text--xs")}${T(76, 196, "111 PASS B", "dg-text--xs")}${T(144, 196, "others 0", "dg-text--xs")}
      ${arrow(190, 82, 212, 82, "08")}
      ${R(214, 42, 172, 96, "dg-box--ink")}
      ${T(226, 60, "RESULT MUX", "dg-text dg-text--md dg-text--bold dg-text--inv")}
      ${T(226, 76, "AND / OR / ADD / SUB / PASS", "dg-text--xs dg-text--inv-soft")}
      ${T(226, 94, "ZERO = NOR(RESULT)", "dg-text--xs dg-text--inv-soft")}
      ${T(226, 107, "CARRY = MSB CARRY OUT", "dg-text--xs dg-text--inv-soft")}
      ${T(226, 126, "SUB VIA TWO'S COMPLEMENT", "dg-text--xs dg-text--accent")}
      ${arrow(300, 138, 300, 158, "08")}
      ${R(214, 160, 100, 34)}
      ${T(264, 175, "RESULT [3:0]", "dg-text dg-text--bold", "middle")}
      ${T(264, 187, "to 7-seg", "dg-text--xs", "middle")}
      ${R(326, 150, 60, 26, "dg-box--accent")}${T(356, 166, "ZERO", "dg-text--xs dg-text--bold", "middle")}
      ${R(326, 184, 60, 26)}${T(356, 200, "CARRY", "dg-text--xs", "middle")}
      ${T(14, 226, "8 DIRECTED TESTS", "dg-text--xs")}
      ${T(144, 226, "XDC CONSTRAINTS", "dg-text--xs")}
      ${T(270, 226, "VIVADO SYNTH + IMPL", "dg-text--xs")}
      ${T(14, 244, "STRUCTURAL SYSTEMVERILOG", "dg-text--xs dg-text--accent")}
      ${T(386, 244, "4-BIT ALU", "dg-text--xs", "end")}
      `
    )
  };

  /* =======================================================
     Render project cards
     ======================================================= */

  const grid = document.getElementById("project-grid");
  const filterCount = document.getElementById("filter-count");

  const tagMarkup = (tags) =>
    tags.map((tag) => `<li>${tag}</li>`).join("");

  const cardMarkup = (project) => `
    <article
      class="project-card span-${project.span}${project.featured ? " project-card--wide" : ""} will-reveal"
      data-project="${project.id}"
      data-filters="${project.filters.join(" ")}"
    >
      <div class="card-plate" aria-hidden="true">${DIAGRAMS[project.id]()}</div>
      <div class="card-body">
        <div class="card-topline">
          <span>${project.index} — ${project.category}</span>
          ${project.team ? '<span class="card-team">Team project</span>' : ""}
        </div>
        <h3 class="card-heading">
          <button class="card-title" type="button" data-open="${project.id}" aria-haspopup="dialog">
            ${project.title}
          </button>
        </h3>
        <p class="card-tagline">${project.tagline}</p>
        <p class="card-blurb">${project.blurb}</p>
        <ul class="tag-list">${tagMarkup(project.cardStack)}</ul>
        <div class="card-footer">
          <span class="card-cta">
            Open case study
            <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11 11 3M4 3h7v7"/></svg>
          </span>
          <span class="card-year">${project.year}</span>
        </div>
      </div>
    </article>
  `;

  grid.innerHTML = PROJECTS.map(cardMarkup).join("");

  const cards = Array.from(grid.querySelectorAll(".project-card"));

  /* =======================================================
     Filtering
     ======================================================= */

  const filterButtons = Array.from(document.querySelectorAll(".filter"));

  const applyFilter = (filter, reveal = true) => {
    let visible = 0;
    const visibleCards = [];

    cards.forEach((card) => {
      const matches =
        filter === "all" || card.dataset.filters.split(" ").includes(filter);

      card.classList.toggle("is-hidden", !matches);
      card.setAttribute("aria-hidden", String(!matches));
      card.classList.remove("filter-wide");

      if (matches) {
        visible += 1;
        visibleCards.push(card);
        if (reveal) card.classList.add("is-visible");
      }
    });

    grid.classList.toggle("is-filtered", filter !== "all");

    if (filter !== "all" && visibleCards.length % 2 === 1) {
      visibleCards[visibleCards.length - 1].classList.add("filter-wide");
    }

    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const noun = visible === 1 ? "project" : "projects";
    filterCount.textContent =
      filter === "all"
        ? `Showing all ${visible} projects`
        : `Showing ${visible} ${FILTER_LABELS[filter]} ${noun}`;
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  /* =======================================================
     Case-study dialog
     ======================================================= */

  const dialog = document.getElementById("project-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogMeta = document.getElementById("dialog-meta");
  const dialogTagline = document.getElementById("dialog-tagline");
  const dialogDescription = document.getElementById("dialog-description");
  const dialogHighlights = document.getElementById("dialog-highlights");
  const dialogStack = document.getElementById("dialog-stack");
  const dialogStats = document.getElementById("dialog-stats");
  const dialogRole = document.getElementById("dialog-role");
  const dialogRepo = document.getElementById("dialog-repo");
  const dialogPlate = document.getElementById("dialog-plate");
  const closeButton = document.getElementById("dialog-close");

  let lastFocused = null;

  const projectById = (id) => PROJECTS.find((project) => project.id === id);

  const openProject = (id, updateHash = true) => {
    const project = projectById(id);
    if (!project) return;

    lastFocused = document.activeElement;

    dialogMeta.textContent = `${project.index} / ${project.category}${project.team ? " / Team project" : ""}`;
    dialogTitle.textContent = project.title;
    dialogTagline.textContent = project.tagline;
    dialogDescription.textContent = project.description;
    dialogHighlights.innerHTML = project.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");
    dialogStack.innerHTML = project.stack
      .map((item) => `<li>${item}</li>`)
      .join("");
    dialogStats.innerHTML = project.stats
      .map(
        ([value, label]) =>
          `<div><dt>${value}</dt><dd>${label}</dd></div>`
      )
      .join("");
    dialogRole.textContent = project.role;
    dialogRepo.href = project.repo;
    dialogRepo.setAttribute("aria-label", `View ${project.title} repository on GitHub`);
    dialogPlate.innerHTML = DIAGRAMS[project.id]();

    dialog.scrollTop = 0;

    if (!dialog.open) {
      dialog.showModal();
      document.body.classList.add("dialog-open");
    }

    if (updateHash) {
      window.history.replaceState(null, "", `#${project.id}`);
    }

    closeButton.focus({ preventScroll: true });
  };

  const closeProject = () => {
    if (dialog.open) dialog.close();
  };

  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");

    if (projectById(window.location.hash.slice(1))) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus({ preventScroll: true });
    }
  });

  closeButton.addEventListener("click", closeProject);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });

  window.addEventListener("hashchange", () => {
    const id = window.location.hash.slice(1);
    if (projectById(id)) {
      openProject(id, false);
    } else if (dialog.open) {
      closeProject();
    }
  });

  grid.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;

    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;

    const trigger = event.target.closest("[data-open]");
    const card = event.target.closest(".project-card");
    const id = trigger?.dataset.open || card?.dataset.project;

    if (id) openProject(id);
  });

  /* =======================================================
     Header, menu and scroll progress
     ======================================================= */

  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const progress = document.getElementById("scroll-progress");

  let scrollQueued = false;

  const updateScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight - window.innerHeight;
    const ratio = height > 0 ? Math.min(scrollTop / height, 1) : 0;

    header.classList.toggle("is-scrolled", scrollTop > 16);
    progress.style.transform = `scaleX(${ratio})`;
    scrollQueued = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (scrollQueued) return;
      scrollQueued = true;
      window.requestAnimationFrame(updateScroll);
    },
    { passive: true }
  );

  updateScroll();

  const closeMenu = () => {
    header.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.querySelector(".brand").addEventListener("click", closeMenu);

  document.addEventListener("click", (event) => {
    if (!header.classList.contains("nav-open")) return;
    if (!header.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });

  /* =======================================================
     Reveal on scroll
     ======================================================= */

  const revealTargets = Array.from(
    document.querySelectorAll(
      ".section-head, .filter-bar, .principle, .approach-head, .approach-quote, .tool-group, .contact-inner > *:not(.contact-link)"
    )
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("will-reveal");
    if (!element.classList.contains("project-card")) {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
    }
  });

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    [...revealTargets, ...cards].forEach((element) => {
      observer.observe(element);
    });
  } else {
    [...revealTargets, ...cards].forEach((element) =>
      element.classList.add("is-visible")
    );
  }

  /* =======================================================
     Small details
     ======================================================= */

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyFilter("all", false);

  const initialProject = projectById(window.location.hash.slice(1));
  if (initialProject) {
    openProject(initialProject.id, false);
  }
})();
