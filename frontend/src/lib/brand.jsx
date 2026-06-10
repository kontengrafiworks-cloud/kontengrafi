export const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/dxjoqg4i_Blue%20Geometric%20Creative%20Agency%20Logo.png";

export const BRAND = {
    name: "Kontengrafi",
    suffix: "Works",
    tagline: "A helping hand behind every post",
    description:
        "Kontengrafi adalah tim kreator konten untuk brand fashion & F&B. Kami berdiri di samping Anda — dari ide, shoot, edit, sampai posting — supaya Anda fokus mengelola merek.",
};

// Inline SVG pinwheel mark — color via currentColor
export const Pinwheel = ({ className = "w-8 h-8", title = "Kontengrafi" }) => (
    <svg
        viewBox="-50 -50 100 100"
        className={className}
        fill="currentColor"
        aria-label={title}
        role="img"
    >
        {[0, 90, 180, 270].map((deg) => (
            <path
                key={deg}
                d="M 0 0 L 0 -42 A 32 32 0 0 1 30 -30 Z"
                transform={`rotate(${deg})`}
            />
        ))}
    </svg>
);
