"use client"

import AnimatedCounter from "@/app/services/AnimatedCounter";
import { useEffect, useState } from "react";

import {
    ClipboardCheck,
    SmilePlus,
    ShieldCheck,
    Users
} from "lucide-react";


const stats = [
    {
        Icon: ClipboardCheck,
        value: 250,
        suffix: "+",
        label: "Projects Completed",
    },
    {
        Icon: SmilePlus,
        value: 98,
        suffix: "%",
        label: "Client Satisfaction",
    },
    {
        Icon: ShieldCheck,
        value: 12,
        suffix: "+",
        label: "Years of Experience",
    },
    {
        Icon: Users,
        value: 50,
        suffix: "+",
        label: "Expert Professionals",
    },
];


export default function HeroStats() {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [showGlow, setShowGlow] = useState(false);

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // This safely runs only on the client side
        setWindowWidth(window.innerWidth);
    }, []);

    const handleMouseMove = (e) => {

        if (windowWidth > 600) {
            const rect = e.currentTarget.getBoundingClientRect();

            setMouse({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }

    };

    return (
        <div className="relative z-20 mt-10 lg:-mt-8">
            <div className="relative mx-auto max-w-[380px] md:max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f4f27] via-[#0b3d1d] to-[#0f4f27] px-6 py-8"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowGlow(true)}
                onMouseLeave={() => setShowGlow(false)}
            >
                {/* Cursor Glow */}
                <div
                    className={`pointer-events-none absolute h-60 w-60 rounded-full bg-white/20 blur-3xl transition-opacity duration-300 ${showGlow ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        left: mouse.x,
                        top: mouse.y,
                        transform: "translate(-50%, -50%)",
                    }}
                />

                <div className="relative z-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map(({ value, suffix, label, Icon }, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center text-center text-white ${index !== stats.length - 1
                                    ? "lg:border-r lg:border-white/15"
                                    : ""
                                    }`}
                            >
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                                    <Icon className=" h-8 w-8 text-[#52d416]" strokeWidth={2} />
                                </div>

                                <span className="block text-2xl font-semibold text-gray-900 sm:text-3xl text-center">
                                    <AnimatedCounter color={"white"} value={value} suffix={suffix} />
                                </span>
                                {/* <h3 style={{ fontFamily: "var(--font-text)" }} className="text-3xl font-semibold">{item.value}</h3> */}

                                <p className="mt-2 text-sm text-white/80">
                                    {label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}