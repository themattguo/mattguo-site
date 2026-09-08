import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  FileText,
  Mail,
  Moon,
  Sun,
  X,
} from "lucide-react";

const documentsBase = "/assets/documents";

function openMailto(e) {
  e.preventDefault();
  const email = "themattguo@outlook.com";
  window.location.href = "mailto:" + email;
  // Fallback: copy to clipboard after a short delay
  setTimeout(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).catch(() => {});
    }
  }, 300);
}

const copy = {
  cn: {
    lang: "EN",
    nav: [
      ["影像", "/film"],
      ["翻译", "/translation"],
      ["摄影", "/photography"],
      ["关于", "/about"],
    ],
    heroKicker: "郭子灏",
    heroTitle: "语言有来路，影像有现场。",
    heroBody: "在文本之间转换，也在现场之中观看。",
    enter: "看作品",
    contact: "联系我",
    open: "查看",
    back: "返回",
    view: "预览",
    download: "下载",
    close: "收起",
    role: "角色",
    method: "做法",
    preview: "10 秒一见",
    darkMode: "深色模式",
    lightMode: "浅色模式",
  },
  en: {
    lang: "中文",
    nav: [
      ["Film", "/film"],
      ["Translation", "/translation"],
      ["Photo", "/photography"],
      ["About", "/about"],
    ],
    heroKicker: "Matt Guo",
    heroTitle: "Words in context. Images on site.",
    heroBody: "Moving through texts. Looking into scenes.",
    enter: "View Work",
    contact: "Contact",
    open: "View",
    back: "Back",
    view: "Preview",
    download: "Download",
    close: "Close",
    role: "Role",
    method: "Approach",
    preview: "A 10-second look",
    darkMode: "Dark",
    lightMode: "Light",
  },
};

const heroFilms = [
  {
    id: "liangyuan",
    video: "/assets/video-clips/liangyuan_preview.mp4",
    fullVideo: "/assets/video-full/liangyuan.mp4",
    poster: "/assets/video-covers/lingnan_liangyuan_cover.jpg",
    cn: "梁园",
    en: "Liang's Garden: An Epitome of Lingnan Culture",
  },
  {
    id: "tiandi",
    video: "/assets/video-clips/lingnan_tiandi_preview.mp4",
    fullVideo: "/assets/video-full/lingnan_tiandi.mp4",
    poster: "/assets/video-covers/lingnan_tiandi_cover.jpg",
    cn: "岭南天地",
    en: "Lingnan World: A Fusion of History and Modernity",
  },
  {
    id: "morning",
    video: "/assets/video-clips/morning_routine_preview.mp4",
    fullVideo: "/assets/video-full/morning_routine.mp4",
    poster: "/assets/video-covers/vlog_morning_routine_cover.jpg",
    cn: "晨间",
    en: "Morning Routine",
  },
  {
    id: "sukiya",
    video: "/assets/video-clips/sukiya_preview.mp4",
    fullVideo: "/assets/video-full/sukiya.mp4",
    poster: "/assets/video-covers/vlog_sukiya_cover.jpg",
    cn: "日记",
    en: "Sukiyaki Diaries",
  },
];

const projects = [
  {
    id: "lingnan",
    area: "film",
    path: "/work/lingnan-cultural-shorts",
    year: "2026",
    image: "/assets/video-covers/lingnan_liangyuan_cover.jpg",
    gallery: heroFilms.slice(0, 2),
    cn: {
      eyebrow: "文化短片",
      title: "岭南文化短视频",
      short: "梁园、岭南天地，一路入镜。",
      summary: "从建筑、街区与环境声进入地方文化。",
      role: "调研、脚本、拍摄、剪辑、字幕与整理",
      method: "以空间动线带路，以环境声定调，以短字幕留白。",
    },
    en: {
      eyebrow: "Cultural Shorts",
      title: "Lingnan Cultural Shorts",
      short: "Liang's Garden and Lingnan World, framed in motion.",
      summary: "Architecture, streets, and ambient sound open a way into local culture.",
      role: "Research, scripting, shooting, editing, subtitles, and preparation",
      method: "Spatial movement guides; ambient sound sets the tone; concise subtitles leave room.",
    },
  },
  {
    id: "vlog",
    area: "film",
    path: "/work/daily-vlog",
    year: "2025",
    image: "/assets/video-covers/vlog_morning_routine_cover.jpg",
    gallery: heroFilms.slice(2),
    cn: {
      eyebrow: "日常影像",
      title: "Daily Vlog",
      short: "日常有节奏，剪辑有手感。",
      summary: "把日常动作当作影像节奏练习。",
      role: "拍摄、剪辑",
      method: "用生活动作、环境声音和轻量剪辑保留自然感。",
    },
    en: {
      eyebrow: "Everyday Motion",
      title: "Daily Vlog",
      short: "Everyday rhythm, edited by feel.",
      summary: "Everyday motion becomes a study in visual rhythm.",
      role: "Shooting and editing",
      method: "Everyday actions, ambient sound, and light editing keep the work natural.",
    },
  },
  {
    id: "black-myth",
    area: "translation",
    path: "/work/black-myth-wukong-localization",
    year: "2025",
    cover: "/assets/document-covers/qudu-ziyuan.jpg",
    cn: {
      eyebrow: "游戏本地化",
      title: "《黑神话：悟空》本地化项目",
      short: "术语要准，声线要稳，神话要通。",
      summary: "课程团队项目，展示中期与终期汇报、术语库、翻译分析与猪八戒样章的中英对照材料。",
      role: "项目管理、术语协调、样章整理、翻译分析与审校讨论",
      method: "以术语表统一称谓，以角色声线校准语气，以审校表收束风格。",
      disclaimer: "学术课程项目。游戏内容版权归属游戏科学。",
    },
    en: {
      eyebrow: "Game Localization",
      title: "Black Myth: Wukong Localization",
      short: "Terms aligned. Voices steady. Myth carried through.",
      summary: "A course team project featuring a midterm report, translation analyses, and bilingual Zhu Bajie samples.",
      role: "Project management, terminology coordination, sample organization, analysis, and review discussions",
      method: "Glossaries align naming; voice notes tune tone; review sheets bring the style together.",
      disclaimer: "Academic course project. Game content © Game Science.",
    },
    documents: [
      ["盘丝岭翻译项目中期汇报", "PDF", `${documentsBase}/translation/black-myth-midterm.pdf`, "/assets/document-covers/black-myth-midterm.jpg"],
      ["盘丝岭翻译项目终期汇报", "PDF", `${documentsBase}/translation/black-myth-final.pdf`, "/assets/document-covers/black-myth-final.jpg"],
      ["《黑神话：悟空》术语库", "PDF", `${documentsBase}/translation/black-myth-glossary.pdf`, "/assets/document-covers/black-myth-glossary.jpg"],
      ["黄眉台词翻译分析报告", "PDF", `${documentsBase}/translation/huangmei-analysis.pdf`, "/assets/document-covers/huangmei-analysis.jpg"],
      ["紫蛛儿翻译分析报告", "PDF", `${documentsBase}/translation/zizhuer-analysis.pdf`, "/assets/document-covers/zizhuer-analysis.jpg"],
      ["猪八戒影神图样章 · 中文 · ST", "PDF", `${documentsBase}/translation/zhu-bajie-portrait-cn.pdf`, "/assets/document-covers/zhu-bajie-portrait-cn.jpg"],
      ["猪八戒影神图样章 · English · TT", "PDF", `${documentsBase}/translation/zhu-bajie-portrait-en.pdf`, "/assets/document-covers/zhu-bajie-portrait-en.jpg"],
      ["猪八戒对白样章 · 中文 · ST", "PDF", `${documentsBase}/translation/zhu-bajie-dialogue-cn.pdf`, "/assets/document-covers/zhu-bajie-dialogue-cn.jpg"],
      ["猪八戒对白样章 · English · TT", "PDF", `${documentsBase}/translation/zhu-bajie-dialogue-en.pdf`, "/assets/document-covers/zhu-bajie-dialogue-en.jpg"],
    ],
  },
  {
    id: "global-monthly",
    area: "translation",
    path: "/work/global-monthly-translation",
    year: "2026",
    cover: "/assets/document-covers/global-monthly-cn.jpg",
    cn: {
      eyebrow: "财经报告",
      title: "Global Monthly 报告翻译",
      short: "原文在左，中文在右，信息在中间。",
      summary: "展示财经报告翻译中的信息组织、术语稳定性与中文阅读路径。",
      role: "财经文本翻译、中文终稿整理、版式检查",
      method: "先还原结构，再处理术语、长句与图表语境。",
    },
    en: {
      eyebrow: "Financial Report",
      title: "Global Monthly Report Translation",
      short: "Source on one side. Chinese on the other. Meaning in between.",
      summary: "A financial-report case focused on structure, terminology stability, and Chinese readability.",
      role: "Report translation, final Chinese preparation, and layout checking",
      method: "Structure first; then terminology, long sentences, and chart context.",
    },
    documents: [
      ["Global Monthly · English · ST", "PDF", `${documentsBase}/translation/global-monthly-source.pdf`, "/assets/document-covers/global-monthly-source.jpg"],
      ["Global Monthly · 中文 · TT", "PDF", `${documentsBase}/translation/global-monthly-cn.pdf`, "/assets/document-covers/global-monthly-cn.jpg"],
    ],
  },
  {
    id: "coca-cola",
    area: "translation",
    path: "/work/coca-cola-ppt-translation",
    year: "2026",
    cover: "/assets/document-covers/coca-cola-logo.svg",
    cn: {
      eyebrow: "Slides 翻译",
      title: "可口可乐演示文稿翻译",
      short: "一页一层级，一屏一节奏。",
      summary: "演示型文本翻译，重点处理信息层级、标题节奏、图表旁注与中英版式关系。",
      role: "演示材料翻译、中文终稿整理、课堂展示",
      method: "把 slide 当作信息界面处理：先可扫读，再求准确，再看版式。",
      disclaimer: "课堂翻译练习。原始材料归属 The Coca-Cola Company。",
    },
    en: {
      eyebrow: "Deck Translation",
      title: "Coca-Cola Deck Translation",
      short: "One slide, one hierarchy. One screen, one rhythm.",
      summary: "A presentation-translation case focused on hierarchy, headline rhythm, chart notes, and bilingual layout.",
      role: "Deck translation, Chinese final preparation, and classroom presentation",
      method: "Slides are treated as information interfaces: scanability first, accuracy next, layout throughout.",
      disclaimer: "Classroom translation exercise. Source material © The Coca-Cola Company.",
    },
    documents: [
      ["Demonstration Slides", "PDF/PPT 展示", `${documentsBase}/translation/coca-cola-class-presentation.pdf`, "/assets/document-covers/coca-cola-presentation.jpg"],
      ["English · ST", "PDF", `${documentsBase}/translation/coca-cola-source.pdf`, "/assets/document-covers/coca-cola-source.jpg"],
      ["中文 · TT", "PDF", `${documentsBase}/translation/coca-cola-cn-final.pdf`, "/assets/document-covers/coca-cola-cn-final.jpg"],
    ],
  },
  {
    id: "proverbs",
    area: "translation",
    path: "/work/chinese-western-proverbs",
    year: "2025",
    cover: "/assets/document-covers/value-proverbs.jpg",
    cn: {
      eyebrow: "研究写作",
      title: "中西谚语价值取向",
      short: "小句子里，看大文化。",
      summary: "作为研究写作样例，展示从翻译实践延伸到文化观察的分析能力。",
      role: "资料整理、文本分析、论文写作",
      method: "从语义、价值取向与跨文化解释三层展开论述。",
    },
    en: {
      eyebrow: "Research Writing",
      title: "Value Orientations in Chinese and Western Proverbs",
      short: "Small sayings, larger cultures.",
      summary: "A research-writing sample extending translation practice into cultural observation.",
      role: "Source organization, textual analysis, and academic writing",
      method: "Meaning, value orientation, and cross-cultural interpretation structure the argument.",
    },
    documents: [
      ["Value Orientations in Chinese and Western Proverbs", "PDF", `${documentsBase}/translation/value-orientations-proverbs.pdf`, "/assets/document-covers/value-proverbs.jpg"],
    ],
  },
];

const pageMeta = {
  film: {
    image: "/assets/photos/lingnan-3b0711-hero.jpg",
    cn: ["影像", "先到现场，再按下录制。", "一眼预览，进入岭南与日常。"],
    en: ["Film", "First, the place. Then, the frame.", "A brief look at Lingnan culture and everyday motion."],
  },
  translation: {
    image: "/assets/document-covers/qudu-ziyuan.jpg",
    cn: ["翻译", "让文本换一种抵达方式。", "展示结果，也呈现过程。"],
    en: ["Translation", "Text, arriving another way.", "Outcomes shown. Process kept."],
  },
  photography: {
    image: "/assets/photos/IMG_9197.jpg",
    cn: ["摄影", "把光线、空间和一瞬间排好。", "照片按观看主题排列。"],
    en: ["Photography", "Light, space, and a moment—composed.", "Photos are grouped by theme."],
  },
  hall: {
    image: "/assets/honor-gallery/ielts-score.jpg",
    cn: ["材料", "让经历有迹可循。", "图片展示，可点开查看大图。"],
    en: ["Archive", "A record, in pictures.", "High-resolution images open in lightbox view."],
  },
  about: {
    image: "/assets/photos/IMG_9192.jpg",
    cn: ["关于", "郭子灏，Matt Guo。", "翻译专业硕士在读，本科商务英语。"],
    en: ["About", "Matt Guo.", "MTI student with a background in Business English."],
  },
};

const homeEntries = [
  ["影像", "Film", "/film", "/assets/photos/lingnan-3b0711-hero.jpg", "短片、日常，与现场"],
  ["翻译", "Translation", "/translation", "/assets/document-covers/qudu-ziyuan.jpg", "文本、版式，与语境的移动"],
  ["摄影", "Photography", "/photography", "/assets/photos/IMG_9197.jpg", "空间、建筑，与光线的停顿"],
  ["关于", "About", "/about", "/assets/photos/IMG_9192.jpg", "经历、能力，与联系方式"],
];

const photoBase = "/assets/photos/full-gallery";

const photoThemes = [
  ["全部", "All", [
    "lingnan-03d1d15.jpg", "lingnan-3b0711.jpg", "lingnan-7ce793.jpg", "lingnan-cfe377.jpg",
    "architecture-img-1969.jpg", "architecture-img-1971.jpg", "architecture-img-1973.jpg", "architecture-img-1976.jpg", "architecture-img-1977.jpg", "architecture-img-1980.jpg", "architecture-img-1982.jpg",
    "japan-dscf1128.jpg", "japan-dscf1132.jpg", "japan-dscf1168.jpg", "japan-dscf1169.jpg", "japan-dscf1174.jpg", "japan-dscf1186.jpg", "japan-dscf1189.jpg", "japan-dscf1203.jpg", "japan-dscf1213.jpg", "japan-dscf1286.jpg", "japan-fullsizerender-2.jpg", "japan-fullsizerender-5.jpg", "japan-fullsizerender.jpg", "japan-img-0078.jpg",
    "singapore-dscf3157.jpg", "singapore-dscf3178.jpg",
    "thailand-img-1312.jpg", "thailand-img-2254.jpg", "thailand-img-9196.jpg", "thailand-img-9197.jpg",
    "hongkong-731d6.jpg", "hongkong-901453.jpg", "hongkong-d8518.jpg", "hongkong-f884f.jpg",
    "maldives-img-3261.jpg", "maldives-img-3312.jpg", "maldives-img-3324.jpg", "maldives-img-3327.jpg", "maldives-img-3328.jpg", "maldives-img-3329.jpg", "maldives-img-3330.jpg",
    "bw-6642cd.jpg", "bw-f5c40.jpg", "bw-fb782.jpg",
  ]],
  ["空间秩序", "Spatial Order", [
    "architecture-img-1969.jpg", "architecture-img-1971.jpg", "architecture-img-1973.jpg", "architecture-img-1976.jpg", "architecture-img-1977.jpg", "architecture-img-1980.jpg", "architecture-img-1982.jpg",
    "singapore-dscf3157.jpg", "singapore-dscf3178.jpg", "hongkong-901453.jpg", "japan-dscf1169.jpg",
  ]],
  ["街巷现场", "Street Scenes", [
    "lingnan-03d1d15.jpg", "lingnan-3b0711.jpg", "lingnan-7ce793.jpg", "lingnan-cfe377.jpg",
    "japan-dscf1128.jpg", "japan-dscf1132.jpg", "japan-dscf1168.jpg", "japan-dscf1174.jpg", "japan-dscf1186.jpg", "japan-dscf1189.jpg", "japan-dscf1203.jpg", "japan-dscf1213.jpg", "japan-dscf1286.jpg",
  ]],
  ["海与天光", "Sea & Light", [
    "maldives-img-3261.jpg", "maldives-img-3312.jpg", "maldives-img-3324.jpg", "maldives-img-3327.jpg", "maldives-img-3328.jpg", "maldives-img-3329.jpg", "maldives-img-3330.jpg",
    "thailand-img-9196.jpg", "thailand-img-9197.jpg",
  ]],
  ["植物静物", "Still Life", [
    "japan-fullsizerender-2.jpg", "japan-fullsizerender-5.jpg", "japan-fullsizerender.jpg", "japan-img-0078.jpg",
    "thailand-img-1312.jpg", "thailand-img-2254.jpg",
  ]],
  ["低光色彩", "Low-Light Color", [
    "hongkong-731d6.jpg", "hongkong-d8518.jpg", "hongkong-f884f.jpg",
  ]],
  ["黑白质感", "Monochrome", ["bw-6642cd.jpg", "bw-f5c40.jpg", "bw-fb782.jpg"]],
];

const skills = {
  cn: ["中英文本处理", "翻译与本地化", "术语整理", "文献与资料管理", "基础语料与数据分析", "影像拍摄与剪辑", "摄影创作"],
  en: ["CN/EN text processing", "Translation and localization", "Terminology work", "Literature and source management", "Basic corpus and data analysis", "Video shooting and editing", "Photography"],
};

const honorBase = "/assets/honor-gallery";

const honorItems = [
  ["2025 普译奖一等奖", "puyi-2025.jpg"],
  ["2024 商赛一等奖", "business-contest-2024.jpg"],
  ["2024 大英赛一等奖", "neccs-2024.jpg"],
  ["2022 外研社国才杯阅读比赛二等奖", "fltrp-reading-2022.jpg"],
  ["TEM-8", "tem8.jpg"],
  ["TEM-4", "tem4.jpg"],
  ["CET-6", "cet6.jpg"],
  ["CET-4", "cet4.jpg"],
  ["IELTS", "ielts-score.jpg"],
  ["普通话证书", "putonghua.jpg"],
  ["优秀毕业生", "outstanding-graduate.jpg"],
  ["优秀毕业设计（论文）", "outstanding-thesis.jpg"],
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getInitialLang() {
  try {
    return window.localStorage.getItem("mg-site-lang") || "cn";
  } catch {
    return "cn";
  }
}

function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem("mg-site-theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [lightbox, setLightbox] = useState(null);
  const [pdfViewer, setPdfViewer] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);
  const [themeIndex, setThemeIndex] = useState(0);
  const [activeTranslation, setActiveTranslation] = useState("black-myth");
  const t = copy[lang];
  const path = window.location.pathname;
  const project = projects.find((item) => item.path === path);
  const page =
    path === "/film" ? "film" :
    path === "/translation" ? "translation" :
    path === "/photography" ? "photography" :
    path === "/hall" ? "hall" :
    path === "/about" ? "about" :
    project ? "project" :
    "home";

  function toggleLang() {
    const next = lang === "cn" ? "en" : "cn";
    setLang(next);
    try {
      window.localStorage.setItem("mg-site-lang", next);
    } catch {
      // localStorage is optional in this prototype.
    }
  }

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      window.localStorage.setItem("mg-site-theme", next);
    } catch {
      // localStorage is optional.
    }
  }

  return (
    <main className={`site-shell lang-${lang} theme-${theme}`}>
      <SiteHeader lang={lang} t={t} onLang={toggleLang} theme={theme} onTheme={toggleTheme} />
      {page === "home" && <HomePage lang={lang} t={t} />}
      {page === "film" && <FilmPage lang={lang} t={t} />}
      {page === "translation" && (
        <TranslationPage
          lang={lang}
          t={t}
          activeTranslation={activeTranslation}
          setActiveTranslation={setActiveTranslation}
          onViewPdf={setPdfViewer}
        />
      )}
      {page === "photography" && (
        <PhotographyPage
          lang={lang}
          themeIndex={themeIndex}
          setThemeIndex={setThemeIndex}
          setLightbox={setLightbox}
        />
      )}
      {page === "hall" && <HallPage lang={lang} t={t} />}
      {page === "about" && <AboutPage lang={lang} t={t} />}
      {page === "project" && <ProjectPage project={project} lang={lang} t={t} onViewPdf={setPdfViewer} />}
      <Footer t={t} />
      {lightbox && <Lightbox image={lightbox} t={t} onClose={() => setLightbox(null)} />}
      {pdfViewer && <PdfViewer url={pdfViewer} onClose={() => setPdfViewer(null)} t={t} />}
    </main>
  );
}

function SiteHeader({ lang, t, onLang, theme, onTheme }) {
  return (
    <header className="site-header">
      <a className="logo-word" href="/" aria-label="Matt Guo home">MG</a>
      <nav aria-label="Primary navigation">
        {t.nav.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="icon-button" onClick={onTheme} title={theme === "light" ? t.darkMode : t.lightMode}>
          {theme === "light" ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
        </button>
        <button className="text-button" onClick={onLang}>{t.lang}</button>
      </div>
    </header>
  );
}

function HomePage({ lang, t }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>{lang === 'cn' ? splitTitle(t.heroTitle) : t.heroTitle}</h1>
          <p>{t.heroBody}</p>
          <div className="hero-actions">
            <a className="button primary" href="#entries">{t.enter}</a>
            <a href="mailto:themattguo@outlook.com" className="button secondary" onClick={openMailto}>{t.contact}</a>
          </div>
        </div>
        <figure className="hero-figure">
          <img src="/assets/photos/IMG_2253.jpg" alt="" decoding="async" loading="lazy" />
        </figure>
      </section>

      <section className="entry-section" id="entries">
        <div className="section-heading">
          <h2>{lang === "cn" ? "四个入口，各自抵达。" : "Four entries. Four ways in."}</h2>
        </div>
        <div className="entry-grid">
          {homeEntries.map(([cn, en, href, image, meta]) => (
            <a className="entry-card" href={href} key={href}>
              <img src={image} alt="" loading="lazy" />
              <span>{lang === "cn" ? meta : en}</span>
              <strong>{lang === "cn" ? cn : en}</strong>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function splitTitle(title) {
  if (!title.includes('，')) return title;
  const result = [];
  title.split('，').forEach((part, i, arr) => {
    result.push(part);
    if (i < arr.length - 1) {
      result.push('，');
      result.push(<br key={i} />);
    }
  });
  return result;
}

function PageHero({ page, lang }) {
  const meta = pageMeta[page];
  const [kicker, title, body] = meta[lang];
  return (
    <section className={`page-hero page-${page}`}>
      <img src={meta.image} alt="" decoding="async" loading="lazy" />
      <div className="page-hero-copy">
        <p className="eyebrow">{kicker}</p>
        <h1>{lang === 'cn' && page === 'film' ? splitTitle(title) : title}</h1>
        <p>{body}</p>
      </div>
    </section>
  );
}

function InteriorPageShell({ page, lang, children }) {
  return (
    <>
      <PageHero page={page} lang={lang} />
      <section className={`content-section content-${page}`}>{children}</section>
    </>
  );
}

function FilmPage({ lang, t }) {
  const filmProjects = projects.filter((project) => project.area === "film");
  return (
    <InteriorPageShell page="film" lang={lang}>
      <div className="film-project-list">
        {filmProjects.map((project) => (
          <div className="film-project-block" key={project.id}>
            <a className="story-row film-row" href={project.path}>
              <div>
                <p className="eyebrow">{project[lang].eyebrow}</p>
                <h2>{project[lang].title}</h2>
                <p>{project[lang].short}</p>
              </div>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            {project.gallery && (
              <div className="clip-grid">
                {project.gallery.map((film) => (
                  <div className="clip-card" key={film.id}>
                    <video src={film.video} poster={film.poster} loop playsInline controls />
                    <span>{film[lang]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </InteriorPageShell>
  );
}

function TranslationPage({ lang, t, activeTranslation, setActiveTranslation, onViewPdf }) {
  const translationProjects = projects.filter((project) => project.area === "translation");
  const active = translationProjects.find((project) => project.id === activeTranslation) || translationProjects[0];
  return (
    <InteriorPageShell page="translation" lang={lang}>
      <div className="translation-layout">
        <aside className="translation-tabs">
          {translationProjects.map((project) => (
            <button
              key={project.id}
              className={cx(active.id === project.id && "active")}
              onClick={() => setActiveTranslation(project.id)}
            >
              <span>{project[lang].eyebrow}</span>
              <strong>{project[lang].title}</strong>
            </button>
          ))}
        </aside>
        <article className="translation-panel">
          <div className="article-intro">
            <h2>{active[lang].short}</h2>
            <p>{active[lang].summary}</p>
          </div>
          <DocumentShelf lang={lang} t={t} documents={active.documents || []} onView={onViewPdf} />
        </article>
      </div>
    </InteriorPageShell>
  );
}

function PhotographyPage({ lang, themeIndex, setThemeIndex, setLightbox }) {
  const theme = photoThemes[themeIndex];
  return (
    <InteriorPageShell page="photography" lang={lang}>
      <div className="theme-filter">
        {photoThemes.map(([cn, en], index) => (
          <button
            className={cx(themeIndex === index && "active")}
            key={cn}
            onClick={() => setThemeIndex(index)}
          >
            {lang === "cn" ? cn : en}
          </button>
        ))}
      </div>
      <div className="photo-grid">
        {theme[2].map((photo, index) => (
          <button
            key={photo}
            className={cx("photo-tile", index % 5 === 0 && "wide", index % 7 === 0 && "tall")}
            onClick={() => setLightbox(`${photoBase}/${photo}`)}
          >
            <img src={`${photoBase}/${photo}`} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </InteriorPageShell>
  );
}

function HallPage({ lang }) {
  return (
    <InteriorPageShell page="hall" lang={lang}>
      <HonorGallery lang={lang} />
    </InteriorPageShell>
  );
}

function HonorGallery({ lang }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="honor-gallery">
        {honorItems.map(([label, file], index) => (
          <button
            className={cx("honor-tile", index % 5 === 0 && "wide")}
            key={file}
            onClick={() => setActive(`${honorBase}/${file}`)}
          >
            <img src={`${honorBase}/${file}`} alt="" loading="lazy" />
            <span>
              <Award size={15} aria-hidden="true" />
              {label}
            </span>
          </button>
        ))}
      </div>
      {active && <Lightbox image={active} t={{ close: lang === "cn" ? "关闭" : "Close" }} onClose={() => setActive(null)} />}
    </>
  );
}

function AboutPage({ lang, t }) {
  const aboutData = {
    cn: {
      bio: "郭子灏，翻译专业硕士在读，本科商务英语。关注文本、影像与文化现场，在翻译与观看之间理解语境，也记录其中的人、事与表达。",
      education: [
        ["深圳大学", "翻译硕士（MTI）", "2025年9月 – 2027年6月"],
        ["广东东软学院", "商务英语 · 本科", "2021年9月 – 2025年6月"],
      ],
      internship: {
        title: "海外考试教学助理",
        company: "深圳市西尔北美文化发展有限公司",
        period: "2024年7月 – 2025年3月",
      },
    },
    en: {
      bio: "Matt Guo is an MTI student with a background in Business English. His work moves between translation and observation, with a focus on text, moving image, and the people, places, and expressions within context.",
      education: [
        ["Shenzhen University", "MTI (Master of Translation and Interpreting)", "Sept 2025 – Jun 2027"],
        ["Neusoft Institute, Guangdong", "Business English · BA", "Sept 2021 – Jun 2025"],
      ],
      internship: {
        title: "Overseas Exam Teaching Assistant",
        company: "Shenzhen Share Education Co., Ltd",
        period: "Jul 2024 – Mar 2025",
      },
    },
  };
  const d = aboutData[lang];
  return (
    <InteriorPageShell page="about" lang={lang}>
      <div className="about-layout">
        <article className="about-copy">
          <h2>{lang === "cn" ? "文字进入语境，镜头留住现场。" : "Words enter context. Images keep the scene."}</h2>
          <p>{d.bio}</p>
          <div className="about-detail-grid">
            <div className="about-detail">
              <span>{lang === "cn" ? "教育" : "Education"}</span>
              {d.education.map(([school, degree, year]) => (
                <div key={degree}>
                  <strong>{school}</strong>
                  <p>{degree}</p>
                  <p className="about-year">{year}</p>
                </div>
              ))}
              <div>
                <strong>{d.internship.title}</strong>
                <p>{d.internship.company}</p>
                <p className="about-year">{d.internship.period}</p>
              </div>
            </div>
            <div className="about-detail">
              <span>{lang === "cn" ? "能力" : "Capabilities"}</span>
              {skills[lang].map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </div>
          </div>
        </article>
        <aside className="contact-panel">
          <img src="/assets/photos/resume-photo.jpg" alt="" className="resume-photo" loading="lazy" />
          <a href="mailto:themattguo@outlook.com" className="button primary" onClick={openMailto}>
            <Mail size={17} aria-hidden="true" />
            themattguo@outlook.com
          </a>
          <a className="button secondary" href="/hall">
            <FileText size={17} aria-hidden="true" />
            {lang === "cn" ? "查看材料档案" : "Evidence archive"}
          </a>
        </aside>
      </div>
    </InteriorPageShell>
  );
}

function ProjectPage({ project, lang, t, onViewPdf }) {
  const isFilm = project.area === "film";
  const heroImage = isFilm ? project.image : project.cover;
  return (
    <article className="article-page">
      <section className="article-hero">
        <img src={heroImage} alt="" decoding="async" loading="lazy" />
        <a className="back-link" href={isFilm ? "/film" : "/translation"}>
          <ArrowLeft size={17} aria-hidden="true" />
          {t.back}
        </a>
        <div>
          <p className="eyebrow">{project[lang].eyebrow}</p>
          <h1>{project[lang].title}</h1>
        </div>
      </section>
      <section className="article-body">
        <p className="lead">{project[lang].summary}</p>
        <div className="note-grid">
          <div>
            <span>{t.role}</span>
            <p>{project[lang].role}</p>
          </div>
          <div>
            <span>{t.method}</span>
            <p>{project[lang].method}</p>
          </div>
        </div>
        {project.gallery && (
          <div className="clip-grid">
            {project.gallery.map((film) => (
              <div className="clip-card" key={film.id}>
                <video src={film.fullVideo || film.video} poster={film.poster} loop playsInline controls />
                <span>{film[lang]}</span>
              </div>
            ))}
          </div>
        )}
        {project.documents && <DocumentShelf lang={lang} t={t} documents={project.documents} onView={onViewPdf} />}
        {project[lang].disclaimer && (
          <p className="disclaimer-note">{project[lang].disclaimer}</p>
        )}
      </section>
    </article>
  );
}

function DocumentShelf({ documents, onView }) {
  return (
    <div className="document-shelf">
      {documents.map(([title, type, href, cover]) => (
        <button className="document-card" onClick={() => onView(href)} key={href}>
          {cover && <img src={cover} alt="" loading="lazy" />}
          <span className="doc-type">{type}</span>
          <strong>{title}</strong>
        </button>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <span>MG</span>
      <span>© 2026</span>
    </footer>
  );
}

function PdfViewer({ url, onClose, t }) {
  return (
    <div className="pdf-viewer" role="dialog" aria-modal="true" aria-label="PDF Viewer">
      <button className="pdf-close" onClick={onClose}>
        <X size={20} aria-hidden="true" />
        <span>{t ? t.close : "收起"}</span>
      </button>
      <iframe src={url} title="PDF Document" frameBorder="0" />
    </div>
  );
}

function Lightbox({ image, t, onClose }) {
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
      <button className="icon-button close-button" onClick={onClose}>
        <X size={20} aria-hidden="true" />
        <span>{t.close}</span>
      </button>
      <img src={image} alt="" />
    </div>
  );
}
