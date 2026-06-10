// ============================================================
// PORTFOLIO ITEMS — Powered by Cloudinary
// ============================================================
// Cloud: dbgwganez
// Folders: PHOTO (4:5), UGC (9:16 video), COMMERCIAL (9:16 video)
// ============================================================

const CLOUD = "dbgwganez";

// --- IMAGE helpers (Photo & Design — 4:5 portrait) ---
// Thumbnail: 600x750 fill, auto format/quality
const imgThumb = (id) =>
    `https://res.cloudinary.com/${CLOUD}/image/upload/w_600,h_750,c_fill,q_auto,f_auto/${id}`;
// Full size for lightbox (max 1600w, retain aspect)
const imgFull = (id) =>
    `https://res.cloudinary.com/${CLOUD}/image/upload/w_1600,q_auto,f_auto/${id}`;

// --- VIDEO helpers (UGC + Commercial — 9:16 vertical) ---
// Poster: extract first frame, 540x960 fill (9:16)
const vidPoster = (id) =>
    `https://res.cloudinary.com/${CLOUD}/video/upload/w_540,h_960,c_fill,q_auto,f_auto,so_0/${id}.jpg`;
// Streaming video (auto codec + quality, capped width to keep file size small)
const vidFull = (id) =>
    `https://res.cloudinary.com/${CLOUD}/video/upload/w_720,q_auto,vc_auto/${id}.mp4`;

// ===================== PHOTO & DESIGN =====================
const PHOTOS = [
    { id: "bag_creation_27_ff2j2n", title: "Bag · Editorial" },
    { id: "bag_creation_1_c96zxl", title: "Bag · Hero" },
    { id: "example_3_potb43", title: "Editorial · 03" },
    { id: "KM-p_14_zn7kkd", title: "Jewelry · 14" },
    { id: "KM-p_13_mdkzkb", title: "Jewelry · 13" },
    { id: "KM-p_4_oqjiho", title: "Jewelry · 04" },
    { id: "freepik_2754978502_vzjiso", title: "Design · Brand" },
    { id: "freepik_2754934832_ayjurs", title: "Design · Layout" },
    { id: "example_22_xg38qi", title: "Lookbook · 22" },
    { id: "example_18_epfgnx", title: "Lookbook · 18" },
    { id: "example_6_avjnjk", title: "Editorial · 06" },
    { id: "example_1_gj4pdb", title: "Editorial · 01" },
    { id: "18_u00i3x", title: "Studio · 18" },
    { id: "1_hzsy1u", title: "Studio · 01" },
];

// ========================= UGC =========================
const UGCS = [
    { id: "iMFG_UGC_od0zbm", title: "iMFG · UGC" },
    { id: "Ecloria_31_mei_2026_ro1e6v", title: "Ecloria · UGC" },
    { id: "1_2_wzwdgm", title: "Lifestyle · UGC" },
    { id: "Lavish_3_Juni_2026_2_p8yagf", title: "Lavish · UGC" },
    { id: "Fashion_Example_7_mj6ou4", title: "Fashion · UGC" },
    { id: "KAFAMILK_APRIL_30_2026_suvv0r", title: "Kafamilk · UGC" },
    { id: "5_Juni_2026_btnsjk", title: "Lifestyle · June" },
    { id: "0603_6_avwr4t", title: "Daily · UGC" },
];

// ====================== COMMERCIAL ======================
const COMMERCIALS = [
    { id: "DENTYN_1_1_yqqosd", title: "Dentyn · Commercial" },
    { id: "Proposal_iMFG_1_ympzgx", title: "iMFG · Proposal" },
    { id: "Ecloira_21Mei_2026_tjlufl", title: "Ecloria · Commercial" },
    { id: "0502_1_gpzy1r", title: "Brand Reel · 0502" },
    { id: "F_B_Example_2_kj90zf", title: "F&B · Reel 02" },
    { id: "F_B_Example_tqvbc1", title: "F&B · Reel 01" },
    { id: "KAFAMILK_24_5_2026_lnvkty", title: "Kafamilk · Campaign" },
    { id: "Ecloria_15_mei_2026_ppcj5x", title: "Ecloria · Story" },
];

export const PORTFOLIO = [
    ...PHOTOS.map((p, i) => ({
        id: `pd${i + 1}`,
        type: "photo",
        cat: "photo-design",
        thumb: imgThumb(p.id),
        full: imgFull(p.id),
        title: p.title,
    })),
    ...UGCS.map((v, i) => ({
        id: `ugc${i + 1}`,
        type: "video",
        cat: "ugc",
        thumb: vidPoster(v.id),
        full: vidFull(v.id),
        title: v.title,
    })),
    ...COMMERCIALS.map((v, i) => ({
        id: `com${i + 1}`,
        type: "video",
        cat: "commercial",
        thumb: vidPoster(v.id),
        full: vidFull(v.id),
        title: v.title,
    })),
];

export const FILTERS = [
    { id: "photo-design", label: "Photo & Design" },
    { id: "ugc", label: "UGC" },
    { id: "commercial", label: "Commercial" },
];
