// Photography library — Fashion + F&B (Food & Beverage)
// All from Pexels (royalty-free) — replaceable with client assets later.

export const FASHION_IMAGES = {
    hero: "https://images.pexels.com/photos/9148280/pexels-photo-9148280.jpeg",
    editorial_1: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg",
    editorial_2: "https://images.pexels.com/photos/29271917/pexels-photo-29271917.jpeg",
    streetwear: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
    accessory: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
    model_portrait: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg",
    fabric_detail: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
};

export const FNB_IMAGES = {
    plated_food: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
    coffee_pour: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg",
    cocktail: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg",
    latte_art: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    dessert: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    beverage_studio: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg",
    food_flatlay: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
};

export const PORTRAIT_AVATARS = {
    male_1: "https://images.pexels.com/photos/26872232/pexels-photo-26872232.jpeg",
    female_1: "https://images.pexels.com/photos/12931653/pexels-photo-12931653.jpeg",
    male_2: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg",
};

// Real Kontengrafi work — hosted on Cloudinary (cloud: dbgwganez)
// 4:5 portrait, auto-optimized for web display.
const CLOUDINARY = "https://res.cloudinary.com/dbgwganez/image/upload";
const kontengrafi = (id, size = "w_800,h_1000,c_fill,q_auto,f_auto") =>
    `${CLOUDINARY}/${size}/${id}`;

export const KONTENGRAFI_PHOTOS = {
    bag_editorial: kontengrafi("bag_creation_27_ff2j2n"),
    bag_hero: kontengrafi("bag_creation_1_c96zxl"),
    jewelry_1: kontengrafi("KM-p_14_zn7kkd"),
    jewelry_2: kontengrafi("KM-p_13_mdkzkb"),
    jewelry_3: kontengrafi("KM-p_4_oqjiho"),
    lookbook_22: kontengrafi("example_22_xg38qi"),
    lookbook_18: kontengrafi("example_18_epfgnx"),
    editorial_3: kontengrafi("example_3_potb43"),
    editorial_6: kontengrafi("example_6_avjnjk"),
    editorial_1k: kontengrafi("example_1_gj4pdb"),
    design_1: kontengrafi("freepik_2754978502_vzjiso"),
    design_2: kontengrafi("freepik_2754934832_ayjurs"),
    studio_18: kontengrafi("18_u00i3x"),
    studio_1: kontengrafi("1_hzsy1u"),
};
