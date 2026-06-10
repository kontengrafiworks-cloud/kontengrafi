export const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_kontengrafi-landing/artifacts/dxjoqg4i_Blue%20Geometric%20Creative%20Agency%20Logo.png";

export const BRAND = {
    name: "Kontengrafi",
    tagline: "A helping hand behind every post",
    description:
        "Kontengrafi adalah tim kreator konten untuk UGC & commercial content. Kami berdiri di samping brand Anda — dari ide, shoot, edit, sampai posting.",
};

// Static SVG pinwheel mark (no animation). Color via currentColor.
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

// Small sketchy arrow with "nudge it" handwritten caption (Invoko style)
export const NudgeArrow = ({ className = "" }) => (
    <svg
        viewBox="0 0 140 80"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
    >
        <path
            d="M 5 70 Q 30 50 50 35 T 100 18"
            strokeDasharray="0"
        />
        <path d="M 95 14 L 105 18 L 99 26" />
    </svg>
);
