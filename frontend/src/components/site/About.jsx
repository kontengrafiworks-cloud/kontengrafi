import { useReveal } from "@/lib/reveal";

export const About = () => {
    const r1 = useReveal(0);
    const r2 = useReveal(150);
    const r3 = useReveal(300);

    return (
        <section
            id="about"
            data-testid="about-section"
            className="py-24 md:py-32 bg-white"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                    <div ref={r1} className="reveal md:col-span-5">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#0047FF]">
                            ( 01 ) Cerita Kami
                        </span>
                        <h2 className="mt-6 font-display font-black text-4xl md:text-6xl leading-[0.95] tracking-tight text-slate-900">
                            Studio konten untuk merek yang ingin{" "}
                            <span className="text-[#0047FF]">bergerak cepat</span>.
                        </h2>
                    </div>

                    <div ref={r2} className="reveal md:col-span-7 md:pt-4">
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Kami percaya konten yang baik tidak harus mahal,
                            lambat, atau rumit. Kontengrafi memadukan
                            pendekatan kreatif modern dengan alur produksi
                            yang efisien — sehingga setiap brand, besar atau
                            kecil, bisa tampil dengan kualitas sinematik tanpa
                            menunggu berminggu-minggu.
                        </p>
                        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                            Dari konsep, eksekusi, hingga aset final — semua
                            kami rapikan dalam satu pintu agar Anda bisa fokus
                            pada hal yang benar-benar penting: membangun
                            merek.
                        </p>

                        <div
                            ref={r3}
                            className="reveal mt-12 grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden"
                        >
                            {[
                                { k: "Cepat", v: "Hasil dalam hitungan hari, bukan minggu" },
                                { k: "Sinematik", v: "Estetika premium di setiap frame" },
                                { k: "Fleksibel", v: "Skalabel untuk semua ukuran brand" },
                                { k: "Transparan", v: "Tanpa biaya tersembunyi" },
                            ].map((it) => (
                                <div
                                    key={it.k}
                                    className="bg-white p-6 md:p-8"
                                >
                                    <div className="font-display font-bold text-xl md:text-2xl text-slate-900">
                                        {it.k}
                                    </div>
                                    <div className="mt-2 text-sm text-slate-500">
                                        {it.v}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
