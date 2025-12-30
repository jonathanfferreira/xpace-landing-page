import React, { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Wait for a few seconds then start fading out
        const timer = setTimeout(() => {
            setIsFading(true);
            // Wait for fade out animation to finish before unmounting
            setTimeout(onComplete, 500);
        }, 2000); // Display time: 2s

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-black transition-opacity duration-500 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="relative flex flex-col items-center">
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse"></div>

                <div className="relative z-10 flex flex-col items-center animate-bounce-slight">
                    {/* Logo White (Since bg is black) */}
                    <img src="/images/logo/XPACE PERFIL BRANCO.png" alt="XPACE Loading" className="w-48 md:w-64 h-auto animate-pulse" />

                    {/* Loader Bar */}
                    <div className="w-32 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-cyber-pink w-full animate-loading-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
