"use client";
import { useState, useEffect } from "react";

export default function SplashScreen() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
        const hideTimer = setTimeout(() => setLoading(false), 2500);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <img
                src="https://res.cloudinary.com/duomot4hp/image/upload/v1782837198/ChatGPT_Image_30._%D1%98%D1%83%D0%BD_2026._18_40_41_cexbmh.png"
                alt="Logo"
                className="w-full h-full object-contain  sm:p-12 md:p-16"
            />
        </div>
    );
}