"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import img1 from "@/assets/test1.jpg";
import img2 from "@/assets/test2.jpg";
import img3 from "@/assets/test3.jpg";
import img4 from "@/assets/test4.jpg";
import img5 from "@/assets/test5.jpg";
import heroImage from "@/assets/hero-medical-equipment.jpg";

import { cn } from "@/lib/utils";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/BaseCarousel";

type Slide = {
    id: string;
    alt: string;
    desktopSrc: string;
    mobileSrc?: string;
    title: string;
    description?: string;
    cta: { label: string; href: string; ariaLabel?: string };
};

const slides: Slide[] = [
    {
        id: "s1",
        alt: "Slide 1",
        desktopSrc: img1 as unknown as string,
        mobileSrc: "/hero/slide1-1080x1440.jpg",
        title: "Assistência médica de excelência",
        description: "Soluções de MedTech inovadoras para procedimentos complexos.",
        cta: {
            label: "Saiba mais",
            href: "/sobre",
            ariaLabel: "Saiba mais sobre a empresa",
        },
    },
    {
        id: "s2",
        alt: "Slide 2",
        desktopSrc: img2 as unknown as string,
        mobileSrc: "/hero/slide2-1080x1440.jpg",
        title: "Cirurgia geral e visceral",
        description: "Produtos eficientes para procedimentos laparoscópicos.",
        cta: { label: "Ver portfólio", href: "/cirurgia-geral" },
    },
    {
        id: "s3",
        alt: "Slide 3",
        desktopSrc: heroImage as unknown as string,
        title: "Soluções de imagiologia",
        description: "De Full-HD a 3D e 4K com fluorescência.",
        cta: { label: "Conhecer soluções", href: "/imagiologia" },
    },
    {
        id: "s4",
        alt: "Slide 4",
        desktopSrc: img4 as unknown as string,
        title: "Integração OR1",
        description: "Integração modular para a sala de cirurgia.",
        cta: { label: "Descobrir OR1", href: "/or1" },
    },
    {
        id: "s5",
        alt: "Slide 5",
        desktopSrc: img5 as unknown as string,
        title: "Serviço e suporte",
        description: "Atendimento, manuais e peças de reposição.",
        cta: { label: "Fale conosco", href: "/contato" },
    },
];

const BaseCarousel: React.FC = () => {
    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const autoplay = React.useMemo(
        () =>
            Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
            }),
        []
    );

    React.useEffect(() => {
        if (!api) return;

        const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
        const onInit = () => setScrollSnaps(api.scrollSnapList());

        onInit();
        onSelect();

        api.on("select", onSelect);
        api.on("reInit", onInit);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onInit);
        };
    }, [api]);

    const scrollTo = (index: number) => api?.scrollTo(index);

    return (
        <>
            <section
                className="relative min-h-[60vh] w-full bg-[#FFF]"
                role="region"
                aria-roledescription="carousel"
                aria-label="Carrossel com indicadores"
            >
                <Carousel
                    opts={{ loop: true, align: "center", dragFree: false }}
                    plugins={[autoplay]}
                    setApi={setApi}
                    className="w-full overflow-visible"
                >
                    <CarouselContent className="-ml-4 md:-ml-6 px-6 md:px-10 h-full">
                        {slides.map((s, idx) => (
                            <CarouselItem
                                key={s.id}
                                className="pl-4 md:pl-6 h-[60vh] md:h-[70vh] basis-[85%] sm:basis-[75%] lg:basis-[65%]"
                            >
                                {/* Wrapper que faz o clipping com cantos arredondados */}
                                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                                    {/* Elemento que escala, herdando o mesmo raio e recortando filhos */}
                                    <div
                                        className={cn(
                                            "h-full w-full transition-transform transition-opacity duration-300 ease-out rounded-[inherit] overflow-hidden will-change-transform",
                                            idx === selectedIndex
                                                ? "scale-105 opacity-100 z-10"
                                                : "scale-75 opacity-90 z-0"
                                        )}
                                    >
                                        <BackgroundPicture
                                            desktopSrc={s.desktopSrc}
                                            mobileSrc={s.mobileSrc}
                                            alt={s.alt}
                                            eager={idx === 0}
                                        />

                                        {/* Gradiente para contraste */}
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                                            aria-hidden="true"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-start p-4 sm:p-6 md:p-10">
                                            <div className="pointer-events-auto max-w-[90%] sm:max-w-[80%] md:max-w-[60%] text-white drop-shadow">
                                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                                                    {s.title}
                                                </h2>

                                                {s.description ? (
                                                    <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90">
                                                        {s.description}
                                                    </p>
                                                ) : null}

                                                <div className="mt-4">
                                                    <a
                                                        href={s.cta.href}
                                                        aria-label={s.cta.ariaLabel ?? s.cta.label}
                                                        className="inline-flex items-center gap-2 rounded-md bg-white/90 text-slate-900 px-4 py-2 text-sm sm:text-base font-medium hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/80 transition"
                                                    >
                                                        {s.cta.label}
                                                        <svg
                                                            className="h-4 w-4"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:shadow" />
                    <CarouselNext className="right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:shadow" />
                </Carousel>


                {/* Indicadores */}
                <nav
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6"
                    aria-label="Indicadores de slides"
                >
                    {scrollSnaps.map((_, i) => {
                        const isActive = i === selectedIndex;
                        return (
                            <button
                                key={i}
                                onClick={() => scrollTo(i)}
                                aria-label={`Ir para o slide ${i + 1}`}
                                aria-current={isActive ? "true" : "false"}
                                className={cn(
                                    "h-[3px] rounded-full transition-all",
                                    isActive
                                        ? "w-16 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.6)]"
                                        : "w-16 bg-white/50"
                                )}
                            />
                        );
                    })}
                </nav>
            </section>
        </>
    );
};

function BackgroundPicture({
    desktopSrc,
    mobileSrc,
    alt,
    eager,
}: {
    desktopSrc: string;
    mobileSrc?: string;
    alt: string;
    eager?: boolean;
}) {
    return (
        <div className="absolute inset-0">
            {mobileSrc ? (
                <picture>
                    <source media="(max-width: 767px)" srcSet={mobileSrc} />
                    <img
                        src={desktopSrc}
                        alt={alt}
                        loading={eager ? "eager" : "lazy"}
                        decoding="async"
                        className="h-full w-full object-cover"
                    />
                </picture>
            ) : (
                <img
                    src={desktopSrc}
                    alt={alt}
                    loading={eager ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover"
                />
            )}
        </div>
    );
}

export default BaseCarousel;
