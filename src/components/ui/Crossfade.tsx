import { useEffect, useRef, useState } from "react";

interface CrossfadeImageProps {
    src: string;
    alt: string;
    className?: string;
}

const CrossfadeImage = ({ src, alt, className = "" }: CrossfadeImageProps) => {
    const [displayedSrc, setDisplayedSrc] = useState(src);
    const [incomingSrc, setIncomingSrc] = useState<string | null>(null);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        if (src === displayedSrc) return;

        const img = new Image();
        img.src = src;

        img.onload = () => {
            setIncomingSrc(src);
            // Pequeno delay para garantir que o browser pintou o elemento antes do fade
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setFadeIn(true);
                });
            });
        };

        return () => {
            img.onload = null;
        };
    }, [src]);

    // Após a transição, promove a imagem nova para "displayed"
    const handleTransitionEnd = () => {
        if (incomingSrc) {
            setDisplayedSrc(incomingSrc);
            setIncomingSrc(null);
            setFadeIn(false);
        }
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Imagem atual — fica visível até a nova estar pronta */}
            <img
                src={displayedSrc}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Nova imagem — carrega invisível, faz fade-in quando pronta */}
            {incomingSrc && (
                <img
                    src={incomingSrc}
                    alt={alt}
                    onTransitionEnd={handleTransitionEnd}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    style={{ opacity: fadeIn ? 1 : 0 }}
                />
            )}
        </div>
    );
};

export default CrossfadeImage;
