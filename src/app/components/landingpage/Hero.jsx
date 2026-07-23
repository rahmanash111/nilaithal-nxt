"use client";

import Link from "next/link";
import {
    ArrowRight,
    Leaf,
    ShieldCheck,
    CircleDollarSign,
    Trees,
} from "lucide-react";


// import Feature from "./Feature";       // <- keep your existing Feature component
// import HeroVideo from "./HeroVideo";   // <- keep your existing HeroVideo component

// export default function Hero() {
//     return (
//         <section className="relative overflow-hidden bg-[#fafafa] pt-10 lg:pt-20 w-full">
//             <div className="mx-auto max-w-7xl px-5">
//                 {/* `relative` here is required — WaveDivider centers itself on this element's gap */}
//                 <div className="relative grid items-center gap-10 lg:grid-cols-2">
//                     {/* LEFT */}
//                     <div style={{ fontFamily: "var(--font-title)" }} className="z-10">
//                         <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-green-700">
//                             <Leaf size={16} className="mr-2" />
//                             Clean Energy. Brighter Future.
//                         </span>
//                         <h1 className="mt-4 lg:mt-8 text-[40px] font-black leading-tight text-gray-900 lg:text-7xl">
//                             Powering Today
//                             <span className="block text-green-700">Sustaining</span>
//                             Tomorrow
//                         </h1>
//                         <p className="mt-4 lg:mt-8 max-w-lg lg:text-lg leading-6 lg:leading-8 text-gray-600">
//                             {" "}
//                             Innovative renewable energy solutions that create value for
//                             businesses, communities and the planet.
//                         </p>
//                         <div className="mt-10 flex flex-wrap gap-5">
//                             <Link
//                                 href="about"
//                                 className="flex items-center rounded-xs lg:rounded-xl bg-green-700 lg:py-4 px-4 lg:px-7 py-3 w-full lg:w-fit font-semibold text-white transition hover:bg-green-800"
//                             >
//                                 Explore Solutions
//                                 <ArrowRight className="ml-3" size={18} />
//                             </Link>
//                             <Link
//                                 href="about"
//                                 className="flex items-center rounded-xs lg:rounded-xl border border-green-700 lg:py-4 px-4 lg:px-7 py-3 w-full lg:w-fit font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
//                             >
//                                 Our Services
//                                 <ArrowRight className="ml-3" size={18} />
//                             </Link>
//                         </div>

//                         <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
//                             <Feature icon={<Leaf size={20} />} title="Clean Energy" sub="Solutions" />
//                             <Feature icon={<Trees size={20} />} title="Sustainable" sub="Future" />
//                             <Feature icon={<CircleDollarSign size={20} />} title="Cost" sub="Effective" />
//                             <Feature icon={<ShieldCheck size={20} />} title="Environment" sub="Friendly" />
//                         </div>
//                     </div>

//                     {/* RIGHT */}
//                     {/* the negative left margin lets the image bleed into the gap — that
//              bleed is exactly what the wave's bulge exposes. Adjust -ml-* to
//              taste: bigger = more dramatic bulge. */}
//                     <div className="relative h-[70vh] lg:h-[100vh] lg:-ml-16 xl:-ml-24">
//                         <HeroVideo />
//                     </div>

//                     {/* Wavy seam between the two columns */}
//                     <WaveDivider color="#fafafa" />

//                     {/* Decorative leaf sitting over the curve, like the reference image */}
//                     <Leaf
//                         aria-hidden="true"
//                         size={48}
//                         className="pointer-events-none absolute left-1/2 top-[62%] z-30 -translate-x-1/2 -rotate-[20deg] text-green-600/70"
//                         fill="currentColor"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#fafafa] pt-10 lg:pt-20 w-full">
            {/* <AnimatedDotsBackground /> */}
            <div className="mx-auto max-w-7xl px-5">
                <div className="grid items-center gap-10 lg:grid-cols-2">

                    {/* LEFT */}
                    <div style={{ fontFamily: "var(--font-title)" }} className="z-10">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-green-700">
                            <Leaf size={16} className="mr-2" />
                            Clean Energy. Brighter Future.
                        </span>
                        <h1 className="mt-4 lg:mt-8 text-[40px] font-black leading-tight text-gray-900 lg:text-7xl">
                            Powering Today
                            <span className="block text-green-700">
                                Sustaining
                            </span>
                            Tomorrow
                        </h1>
                        <p className="mt-4 lg:mt-8 max-w-lg lg:text-lg leading-6 lg:leading-8 text-gray-600"> Innovative renewable energy solutions that create value for businesses, communities and the planet.</p>
                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link
                                href="about"
                                className="flex items-center rounded-xs lg:rounded-xl bg-green-700 lg:py-4 px-4 lg:px-7 py-3 w-full lg:w-fit font-semibold text-white transition hover:bg-green-800"
                            >
                                Explore Solutions
                                <ArrowRight className="ml-3" size={18} />
                            </Link>
                            <Link
                                href="about"
                                className="flex items-center rounded-xs lg:rounded-xl border border-green-700 lg:py-4 px-4 lg:px-7 py-3 w-full lg:w-fit font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
                            >
                                Our Services
                                <ArrowRight className="ml-3" size={18} />
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

                            <Feature
                                icon={<Leaf size={20} />}
                                title="Clean Energy"
                                sub="Solutions"
                            />

                            <Feature
                                icon={<Trees size={20} />}
                                title="Sustainable"
                                sub="Future"
                            />

                            <Feature
                                icon={<CircleDollarSign size={20} />}
                                title="Cost"
                                sub="Effective"
                            />

                            <Feature
                                icon={<ShieldCheck size={20} />}
                                title="Environment"
                                sub="Friendly"
                            />

                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className={"h-screen relative border border-red"}>
                        <HeroVideo />
                    </div>
                </div>

                <HeroStats />

            </div>
        </section>
    );
}

// function CurveSeparator() {
//     return (
//         <div className="absolute left-1/2 top-0 z-20 h-full -translate-x-1/2">
//             <svg
//                 className="absolute top-0 right-0 h-full w-[120px] pointer-events-none"
//                 viewBox="0 0 120 900"
//                 preserveAspectRatio="none"
//             >
//                 <path
//                     d="
//           M60 0
//           C20 80 20 180 60 260
//           C100 340 100 430 60 510
//           C20 590 20 700 60 780
//           C100 860 100 900 60 900
//         "
//                     fill="none"
//                     stroke="#6CC04A"
//                     strokeWidth="3"
//                 />
//             </svg>
//         </div>
//     );
// }

function Feature({ icon, title, sub }) {
    return (
        <div className="flex items-start gap-3">
            <div className="rounded-full bg-green-100 p-3 text-green-700">{icon}</div>
            <div>
                <p className="font-semibold">
                    {title}
                </p>
                <p className="text-gray-500">
                    {sub}
                </p>
            </div>
        </div>
    );
}


import Image from "next/image";
import clients from "../../../assets/clients.webp"
import experience from "../../../assets/experience.webp"
import expert from "../../../assets/expert.webp"
import projects from "../../../assets/projects (2).webp"

const stats = [
    {
        img: projects,
        value: "250+",
        label: "Projects Completed",
    },
    {
        img: clients,
        value: "98%",
        label: "Client Satisfaction",
    },
    {
        img: experience,
        value: "12+",
        label: "Years of Experience",
    },
    {
        img: expert,
        value: "50+",
        label: "Expert Professionals",
    },
];


function HeroStats() {

    // const [mouse, setMouse] = useState({ x: 0, y: 0 });
    // const [showGlow, setShowGlow] = useState(false);

    // const windowWidth = window.innerWidth;

    // console.log(windowWidth);

    // const handleMouseMove = (e) => {

    //     if (windowWidth > 600) {
    //         const rect = e.currentTarget.getBoundingClientRect();

    //         console.log(e.clientY - rect.top);

    //         setMouse({
    //             x: e.clientX - rect.left,
    //             y: e.clientY - rect.top,
    //         });
    //     }

    // };

    return (
        <div className="relative z-20 -mt-10 lg:mt-16">
            <div
                className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f4f27] via-[#0b3d1d] to-[#0f4f27] px-6 py-8"
            // onMouseMove={handleMouseMove}
            // onMouseEnter={() => setShowGlow(true)}
            // onMouseLeave={() => setShowGlow(false)}
            >
                {/* Cursor Glow */}
                {/* <div
                    className={`pointer-events-none absolute h-60 w-60 rounded-full bg-white/10 blur-3xl transition-opacity duration-300 opacity-0"`}
                    style={{
                        left: mouse.x,
                        top: mouse.y,
                        transform: "translate(-50%, -50%)",
                        transition: "left 0.15s ease-out, top 0.15s ease-out"
                    }}
                /> */}

                <div className="relative z-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center text-center text-white ${index !== stats.length - 1
                                    ? "lg:border-r lg:border-white/15"
                                    : ""
                                    }`}
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                                    <Image alt="image-file" height={"15px"} width={"15px"} src={item.img} />
                                </div>

                                <h3 style={{ fontFamily: "var(--font-text)" }} className="text-3xl font-semibold">{item.value}</h3>

                                <p className="mt-2 text-sm text-white/80">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


const HeroVideo = () => {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.2)',
            width: '100%',
            height: '100%',
            pointerEvents: 'none', // prevents pause on click
        }}>
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
                <source src="https://www.venusinterior.in/uploads/videos/banner-video.mp4" type="video/mp4" />
                <source src="https://www.venusinterior.in/uploads/videos/banner-video.webm" type="video/webm" />
            </video>
        </div>
    )
}