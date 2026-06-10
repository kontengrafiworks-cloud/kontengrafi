// ============================================================
// PORTFOLIO ITEMS
// ============================================================
// Replace each `thumb` and `full` URL with your hosted asset.
//
// Recommended host: CLOUDINARY (free 25GB). Upload via dashboard,
// copy the URL, paste here. Cloudinary auto-converts to WebP/MP4
// and serves via global CDN.
//
// SHAPE:
//   type:  'photo' | 'video'
//   cat:   'ugc' | 'commercial' | 'fashion' | 'fnb'
//   thumb: small image url (used in grid) — for video: poster frame
//   full:  full image url (photo) OR mp4/webm url (video)
//   title: optional caption shown on hover
//
// For YouTube/Vimeo: store the embed url in `full` and add
// `embed: true` — the lightbox will render an iframe.
// ============================================================

const FASHION = "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg";
const FASHION2 = "https://images.pexels.com/photos/9148280/pexels-photo-9148280.jpeg";
const FASHION3 = "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg";
const FASHION4 = "https://images.pexels.com/photos/29271917/pexels-photo-29271917.jpeg";
const FASHION5 = "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg";
const FASHION6 = "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg";
const FASHION7 = "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg";
const FOOD = "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg";
const FOOD2 = "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg";
const FOOD3 = "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg";
const FOOD4 = "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg";
const FOOD5 = "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg";
const FOOD6 = "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg";

// Free sample MP4s from Pexels Videos (replace with your Cloudinary URLs)
const VID1 = "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4";
const VID2 = "https://videos.pexels.com/video-files/8419076/8419076-hd_1280_720_25fps.mp4";
const VID3 = "https://videos.pexels.com/video-files/7670835/7670835-hd_1920_1080_30fps.mp4";
const VID4 = "https://videos.pexels.com/video-files/4828287/4828287-uhd_2560_1440_30fps.mp4";
const VID5 = "https://videos.pexels.com/video-files/3209211/3209211-hd_1920_1080_25fps.mp4";

export const PORTFOLIO = [
    // ---- PHOTOS (20) ----
    { id: "p1", type: "photo", cat: "fashion", thumb: FASHION, full: FASHION, title: "Editorial · SS Drop" },
    { id: "p2", type: "photo", cat: "fnb", thumb: FOOD, full: FOOD, title: "Plated · Bistro" },
    { id: "p3", type: "photo", cat: "ugc", thumb: FASHION3, full: FASHION3, title: "UGC · Streetwear" },
    { id: "p4", type: "photo", cat: "commercial", thumb: FASHION2, full: FASHION2, title: "Campaign · Metallic" },
    { id: "p5", type: "photo", cat: "fnb", thumb: FOOD2, full: FOOD2, title: "Pour · Cold Brew" },
    { id: "p6", type: "photo", cat: "fashion", thumb: FASHION4, full: FASHION4, title: "Lookbook · Winter" },
    { id: "p7", type: "photo", cat: "fnb", thumb: FOOD3, full: FOOD3, title: "Bar Night · Cocktail" },
    { id: "p8", type: "photo", cat: "ugc", thumb: FASHION5, full: FASHION5, title: "Accessory · Detail" },
    { id: "p9", type: "photo", cat: "commercial", thumb: FASHION6, full: FASHION6, title: "Portrait · Brand" },
    { id: "p10", type: "photo", cat: "fnb", thumb: FOOD4, full: FOOD4, title: "Latte Art · Halaman" },
    { id: "p11", type: "photo", cat: "fashion", thumb: FASHION7, full: FASHION7, title: "Fabric Story" },
    { id: "p12", type: "photo", cat: "fnb", thumb: FOOD5, full: FOOD5, title: "Dessert · Studio" },
    { id: "p13", type: "photo", cat: "ugc", thumb: FOOD6, full: FOOD6, title: "Food Flatlay" },
    { id: "p14", type: "photo", cat: "commercial", thumb: FASHION, full: FASHION, title: "Editorial · Magazine" },
    { id: "p15", type: "photo", cat: "fashion", thumb: FASHION2, full: FASHION2, title: "Campaign · Drop 02" },
    { id: "p16", type: "photo", cat: "fnb", thumb: FOOD2, full: FOOD2, title: "Cafe Series" },
    { id: "p17", type: "photo", cat: "ugc", thumb: FASHION3, full: FASHION3, title: "Lifestyle Cut" },
    { id: "p18", type: "photo", cat: "commercial", thumb: FASHION4, full: FASHION4, title: "Brand Visual" },
    { id: "p19", type: "photo", cat: "fnb", thumb: FOOD3, full: FOOD3, title: "Mocktail · Bar Halaman" },
    { id: "p20", type: "photo", cat: "fashion", thumb: FASHION5, full: FASHION5, title: "Accessory · Hero" },

    // ---- VIDEOS (20) ----
    { id: "v1", type: "video", cat: "commercial", thumb: FASHION, full: VID1, title: "Brand Film · Aurelle" },
    { id: "v2", type: "video", cat: "ugc", thumb: FOOD, full: VID2, title: "UGC · Foodie Review" },
    { id: "v3", type: "video", cat: "commercial", thumb: FASHION2, full: VID3, title: "Campaign Reel" },
    { id: "v4", type: "video", cat: "fnb", thumb: FOOD2, full: VID4, title: "Pour Loop · Coffee" },
    { id: "v5", type: "video", cat: "fashion", thumb: FASHION3, full: VID5, title: "Lookbook Motion" },
    { id: "v6", type: "video", cat: "ugc", thumb: FASHION4, full: VID1, title: "UGC · Drop Day" },
    { id: "v7", type: "video", cat: "commercial", thumb: FOOD3, full: VID2, title: "Menu Showcase" },
    { id: "v8", type: "video", cat: "fashion", thumb: FASHION5, full: VID3, title: "Accessory Spin" },
    { id: "v9", type: "video", cat: "fnb", thumb: FOOD4, full: VID4, title: "Latte Top-down" },
    { id: "v10", type: "video", cat: "commercial", thumb: FASHION6, full: VID5, title: "Brand Film · Story" },
    { id: "v11", type: "video", cat: "ugc", thumb: FOOD5, full: VID1, title: "UGC · Restaurant Vibe" },
    { id: "v12", type: "video", cat: "fashion", thumb: FASHION7, full: VID2, title: "Fabric Reveal" },
    { id: "v13", type: "video", cat: "commercial", thumb: FOOD6, full: VID3, title: "Food Cinemagraph" },
    { id: "v14", type: "video", cat: "fnb", thumb: FOOD, full: VID4, title: "Plate Story · Modern" },
    { id: "v15", type: "video", cat: "ugc", thumb: FASHION2, full: VID5, title: "UGC · Lookbook" },
    { id: "v16", type: "video", cat: "commercial", thumb: FASHION3, full: VID1, title: "Campaign · Urban" },
    { id: "v17", type: "video", cat: "fashion", thumb: FASHION4, full: VID2, title: "Drop Reveal" },
    { id: "v18", type: "video", cat: "fnb", thumb: FOOD2, full: VID3, title: "Pour Loop · Mocktail" },
    { id: "v19", type: "video", cat: "commercial", thumb: FASHION5, full: VID4, title: "Hero Shot · Brand" },
    { id: "v20", type: "video", cat: "ugc", thumb: FOOD3, full: VID5, title: "UGC · Cafe Day" },
];

export const FILTERS = [
    { id: "all", label: "Semua" },
    { id: "photo", label: "Foto" },
    { id: "video", label: "Video" },
    { id: "ugc", label: "UGC" },
    { id: "commercial", label: "Commercial" },
];
