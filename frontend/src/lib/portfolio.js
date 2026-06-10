// ============================================================
// PORTFOLIO ITEMS
// ============================================================
// Replace each `thumb` and `full` URL with your hosted asset.
//
// SHAPE:
//   type:  'photo' | 'video'
//   cat:   'photo-design' | 'ugc' | 'commercial'
//   thumb: small image url (used in grid) — for video: poster frame
//   full:  full image url (photo) OR mp4/webm url (video)
//   title: short caption
//
// For YouTube/Vimeo: store the embed url in `full` and add
// `embed: true` — the lightbox will render an iframe.
//
// PERFORMANCE TIP: keep `thumb` ≤ 600px wide. Pexels URL param
// `?auto=compress&cs=tinysrgb&w=600` does this automatically.
// Cloudinary: use `w_600,q_auto,f_auto` in the URL.
// ============================================================

// Thumbnails — compressed (Pexels auto-resize 600px)
const t = (id) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop`;
// Full-size — for lightbox photo view
const F1 = "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg";
const F2 = "https://images.pexels.com/photos/9148280/pexels-photo-9148280.jpeg";
const F3 = "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg";
const F4 = "https://images.pexels.com/photos/29271917/pexels-photo-29271917.jpeg";
const F5 = "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg";
const F6 = "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg";
const F7 = "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg";
const D1 = "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg";
const D2 = "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg";
const D3 = "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg";
const D4 = "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg";
const D5 = "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg";
const D6 = "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg";

const VID1 = "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4";
const VID2 = "https://videos.pexels.com/video-files/8419076/8419076-hd_1280_720_25fps.mp4";
const VID3 = "https://videos.pexels.com/video-files/7670835/7670835-hd_1920_1080_30fps.mp4";
const VID4 = "https://videos.pexels.com/video-files/4828287/4828287-uhd_2560_1440_30fps.mp4";
const VID5 = "https://videos.pexels.com/video-files/3209211/3209211-hd_1920_1080_25fps.mp4";

export const PORTFOLIO = [
    // ---- PHOTO & DESIGN (photos only) ----
    { id: "pd1", type: "photo", cat: "photo-design", thumb: t("2065200"), full: F1, title: "Editorial · SS Drop" },
    { id: "pd2", type: "photo", cat: "photo-design", thumb: t("9148280"), full: F2, title: "Campaign · Metallic" },
    { id: "pd3", type: "photo", cat: "photo-design", thumb: t("29271917"), full: F4, title: "Lookbook · Winter" },
    { id: "pd4", type: "photo", cat: "photo-design", thumb: t("2235071"), full: F6, title: "Portrait · Brand" },
    { id: "pd5", type: "photo", cat: "photo-design", thumb: t("996329"), full: F7, title: "Fabric Story" },
    { id: "pd6", type: "photo", cat: "photo-design", thumb: t("1640772"), full: D1, title: "Plated · Bistro" },
    { id: "pd7", type: "photo", cat: "photo-design", thumb: t("302899"), full: D4, title: "Latte Art · Halaman" },
    { id: "pd8", type: "photo", cat: "photo-design", thumb: t("291528"), full: D5, title: "Dessert · Studio" },
    { id: "pd9", type: "photo", cat: "photo-design", thumb: t("1191531"), full: F5, title: "Accessory · Hero" },
    { id: "pd10", type: "photo", cat: "photo-design", thumb: t("2074130"), full: D2, title: "Pour · Cold Brew" },
    { id: "pd11", type: "photo", cat: "photo-design", thumb: t("1485031"), full: F3, title: "Editorial · Streetwear" },
    { id: "pd12", type: "photo", cat: "photo-design", thumb: t("1283219"), full: D3, title: "Bar Night · Cocktail" },

    // ---- UGC (videos only) ----
    { id: "ugc1", type: "video", cat: "ugc", thumb: t("1640772"), full: VID2, title: "UGC · Foodie Review" },
    { id: "ugc2", type: "video", cat: "ugc", thumb: t("29271917"), full: VID1, title: "UGC · Drop Day" },
    { id: "ugc3", type: "video", cat: "ugc", thumb: t("291528"), full: VID1, title: "UGC · Restaurant Vibe" },
    { id: "ugc4", type: "video", cat: "ugc", thumb: t("9148280"), full: VID5, title: "UGC · Lookbook Cut" },
    { id: "ugc5", type: "video", cat: "ugc", thumb: t("1283219"), full: VID5, title: "UGC · Cafe Day" },
    { id: "ugc6", type: "video", cat: "ugc", thumb: t("2235071"), full: VID2, title: "UGC · Behind The Scenes" },
    { id: "ugc7", type: "video", cat: "ugc", thumb: t("1485031"), full: VID3, title: "UGC · Street Style" },
    { id: "ugc8", type: "video", cat: "ugc", thumb: t("302899"), full: VID4, title: "UGC · Morning Routine" },
    { id: "ugc9", type: "video", cat: "ugc", thumb: t("1191531"), full: VID2, title: "UGC · Unboxing" },
    { id: "ugc10", type: "video", cat: "ugc", thumb: t("2074130"), full: VID3, title: "UGC · Coffee Walk" },
    { id: "ugc11", type: "video", cat: "ugc", thumb: t("1640774"), full: VID4, title: "UGC · Foodie Diary" },
    { id: "ugc12", type: "video", cat: "ugc", thumb: t("996329"), full: VID5, title: "UGC · Lifestyle Cut" },

    // ---- COMMERCIAL (videos only) ----
    { id: "com1", type: "video", cat: "commercial", thumb: t("2065200"), full: VID1, title: "Brand Film · Aurelle" },
    { id: "com2", type: "video", cat: "commercial", thumb: t("9148280"), full: VID3, title: "Campaign Reel" },
    { id: "com3", type: "video", cat: "commercial", thumb: t("1283219"), full: VID2, title: "Menu Showcase" },
    { id: "com4", type: "video", cat: "commercial", thumb: t("2235071"), full: VID5, title: "Brand Film · Story" },
    { id: "com5", type: "video", cat: "commercial", thumb: t("1640774"), full: VID3, title: "Food Cinemagraph" },
    { id: "com6", type: "video", cat: "commercial", thumb: t("1485031"), full: VID1, title: "Campaign · Urban" },
    { id: "com7", type: "video", cat: "commercial", thumb: t("1191531"), full: VID4, title: "Hero Shot · Brand" },
    { id: "com8", type: "video", cat: "commercial", thumb: t("2074130"), full: VID4, title: "Pour Loop · Coffee" },
    { id: "com9", type: "video", cat: "commercial", thumb: t("302899"), full: VID4, title: "Latte Top-down" },
    { id: "com10", type: "video", cat: "commercial", thumb: t("29271917"), full: VID2, title: "Drop Reveal" },
    { id: "com11", type: "video", cat: "commercial", thumb: t("1640772"), full: VID1, title: "Plated · Cinematic" },
    { id: "com12", type: "video", cat: "commercial", thumb: t("996329"), full: VID3, title: "Brand Visual" },
];

export const FILTERS = [
    { id: "photo-design", label: "Photo & Design" },
    { id: "ugc", label: "UGC" },
    { id: "commercial", label: "Commercial" },
];
