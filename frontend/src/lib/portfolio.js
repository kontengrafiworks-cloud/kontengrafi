// ============================================================
// PORTFOLIO ITEMS
// ============================================================
// Replace each `thumb` and `full` URL with your hosted asset.
//
// Recommended host: CLOUDINARY (free 25GB). Upload via dashboard,
// copy the URL, paste here.
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
// ============================================================

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
    // ---- PHOTO & DESIGN ----
    { id: "pd1", type: "photo", cat: "photo-design", thumb: F1, full: F1, title: "Editorial · SS Drop" },
    { id: "pd2", type: "photo", cat: "photo-design", thumb: F2, full: F2, title: "Campaign · Metallic" },
    { id: "pd3", type: "photo", cat: "photo-design", thumb: F4, full: F4, title: "Lookbook · Winter" },
    { id: "pd4", type: "photo", cat: "photo-design", thumb: F6, full: F6, title: "Portrait · Brand" },
    { id: "pd5", type: "photo", cat: "photo-design", thumb: F7, full: F7, title: "Fabric Story" },
    { id: "pd6", type: "photo", cat: "photo-design", thumb: D1, full: D1, title: "Plated · Bistro" },
    { id: "pd7", type: "photo", cat: "photo-design", thumb: D4, full: D4, title: "Latte Art · Halaman" },
    { id: "pd8", type: "photo", cat: "photo-design", thumb: D5, full: D5, title: "Dessert · Studio" },
    { id: "pd9", type: "photo", cat: "photo-design", thumb: F5, full: F5, title: "Accessory · Hero" },
    { id: "pd10", type: "photo", cat: "photo-design", thumb: D2, full: D2, title: "Pour · Cold Brew" },
    { id: "pd11", type: "photo", cat: "photo-design", thumb: F3, full: F3, title: "Editorial · Streetwear" },
    { id: "pd12", type: "photo", cat: "photo-design", thumb: D3, full: D3, title: "Bar Night · Cocktail" },

    // ---- UGC ----
    { id: "ugc1", type: "photo", cat: "ugc", thumb: F3, full: F3, title: "UGC · Street Drop" },
    { id: "ugc2", type: "photo", cat: "ugc", thumb: F5, full: F5, title: "UGC · Accessory Detail" },
    { id: "ugc3", type: "photo", cat: "ugc", thumb: D6, full: D6, title: "UGC · Food Flatlay" },
    { id: "ugc4", type: "video", cat: "ugc", thumb: D1, full: VID2, title: "UGC · Foodie Review" },
    { id: "ugc5", type: "video", cat: "ugc", thumb: F4, full: VID1, title: "UGC · Drop Day" },
    { id: "ugc6", type: "video", cat: "ugc", thumb: D5, full: VID1, title: "UGC · Restaurant Vibe" },
    { id: "ugc7", type: "video", cat: "ugc", thumb: F2, full: VID5, title: "UGC · Lookbook Cut" },
    { id: "ugc8", type: "video", cat: "ugc", thumb: D3, full: VID5, title: "UGC · Cafe Day" },
    { id: "ugc9", type: "photo", cat: "ugc", thumb: F7, full: F7, title: "UGC · Lifestyle" },
    { id: "ugc10", type: "video", cat: "ugc", thumb: F6, full: VID2, title: "UGC · Behind The Scenes" },

    // ---- COMMERCIAL ----
    { id: "com1", type: "video", cat: "commercial", thumb: F1, full: VID1, title: "Brand Film · Aurelle" },
    { id: "com2", type: "video", cat: "commercial", thumb: F2, full: VID3, title: "Campaign Reel" },
    { id: "com3", type: "video", cat: "commercial", thumb: D3, full: VID2, title: "Menu Showcase" },
    { id: "com4", type: "video", cat: "commercial", thumb: F6, full: VID5, title: "Brand Film · Story" },
    { id: "com5", type: "video", cat: "commercial", thumb: D6, full: VID3, title: "Food Cinemagraph" },
    { id: "com6", type: "video", cat: "commercial", thumb: F3, full: VID1, title: "Campaign · Urban" },
    { id: "com7", type: "video", cat: "commercial", thumb: F5, full: VID4, title: "Hero Shot · Brand" },
    { id: "com8", type: "video", cat: "commercial", thumb: D2, full: VID4, title: "Pour Loop · Coffee" },
    { id: "com9", type: "video", cat: "commercial", thumb: D4, full: VID4, title: "Latte Top-down" },
    { id: "com10", type: "video", cat: "commercial", thumb: F4, full: VID2, title: "Drop Reveal" },
    { id: "com11", type: "photo", cat: "commercial", thumb: F1, full: F1, title: "Editorial · Magazine" },
    { id: "com12", type: "photo", cat: "commercial", thumb: F2, full: F2, title: "Campaign · Drop 02" },
    { id: "com13", type: "photo", cat: "commercial", thumb: F6, full: F6, title: "Brand Visual" },
    { id: "com14", type: "photo", cat: "commercial", thumb: D3, full: D3, title: "Mocktail · Brand" },
];

export const FILTERS = [
    { id: "photo-design", label: "Photo & Design" },
    { id: "ugc", label: "UGC" },
    { id: "commercial", label: "Commercial" },
];
