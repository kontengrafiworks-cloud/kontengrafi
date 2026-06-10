// Central place for contact links so they can be swapped easily later.
export const CONTACT = {
    brand: "Kontengrafi",
    whatsappNumber: "6281995555169",
    whatsappMessage:
        "Halo Kontengrafi, saya tertarik untuk berdiskusi tentang produksi konten.",
    instagram: "https://instagram.com/kontengrafi.works",
    tiktok: "https://tiktok.com/@kontengrafi.works",
    email: "halo@kontengrafi.id",
};

export const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    CONTACT.whatsappMessage,
)}`;
