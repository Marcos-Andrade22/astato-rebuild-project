"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import carouselBlog from "@/assets/carousel-blog.jpg";
import carouselMaintenance from "@/assets/carousel-maintenance.jpg";
import carouselInstitutional from "@/assets/carousel-institutional.jpg";
import carouselSales from "@/assets/carousel-sales.jpg";

import { cn } from "@/lib/utils";

import {
    BaseCarousel,
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
        alt: "Institucional - Laboratório técnico e equipe Astato",
        desktopSrc: carouselInstitutional as unknown as string,
        mobileSrc: carouselInstitutional as unknown as string,
        title: "Soluções em Manutenção e Equipamentos Médicos",
        description: "Referência em manutenção de equipamentos de vídeo cirurgia e agora também venda de equipamentos de marca própria.",
        cta: {
            label: "Conheça a Astato",
            href: "/empresa",
            ariaLabel: "Conheça a Astato",
        },
    },
    {
        id: "s2",
        alt: "Manutenção especializada de equipamentos de vídeo cirurgia",
        desktopSrc: carouselMaintenance as unknown as string,
        mobileSrc: carouselMaintenance as unknown as string,
        title: "Manutenção Especializada de Equipamentos de Vídeo Cirurgia",
        description: "Precisão técnica, padrão de fábrica e segurança em cada procedimento.",
        cta: { label: "Ver Serviços", href: "/#servicos" },
    },
    {
        id: "s3",
        alt: "Vendas de equipamentos de vídeo cirurgia",
        desktopSrc: carouselSales as unknown as string,
        mobileSrc: carouselSales as unknown as string,
        title: "Vendas de Equipamentos de Vídeo Cirurgia",
        description: "Equipamentos selecionados por quem possui expertise em manutenção hospitalar.",
        cta: { label: "Ver Equipamentos", href: "/equipamentos" },
    },
    {
        id: "s4",
        alt: "Dicas de conservação e boas práticas",
        desktopSrc: carouselBlog as unknown as string,
        mobileSrc: carouselBlog as unknown as string,
        title: "Dicas de Conservação e Boas Práticas",
        description: "Orientações da nossa equipe técnica para prolongar a vida útil dos seus equipamentos.",
        cta: { label: "Acessar Conteúdos", href: "/blog" },
    },
];

const Carousel: React.FC = () => {
    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const autoplay = React.useMemo(
        () =>
            Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
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
                className="relative min-h-[60vh] w-full bg-[#F5F5F5] overflow-hidden"
                role="region"
                aria-roledescription="carousel"
                aria-label="Carrossel com indicadores"
            >
                <BaseCarousel
                    opts={{ loop: true, align: "center", dragFree: false }}
                    plugins={[autoplay]}
                    setApi={setApi}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4 px-2 md:px-6 h-full">
                        {slides.map((s, idx) => (
                            <CarouselItem
                                key={s.id}
                                className="pl-2 md:pl-4 h-[60vh] md:h-[70vh] basis-[85%] sm:basis-[75%] lg:basis-[65%]"
                            >
                                {/* Wrapper que faz o clipping com cantos arredondados */}
                                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                                    {/* Elemento que escala, herdando o mesmo raio e recortando filhos */}
                                    <div
                                        className={cn(
                                            "h-full w-full rounded-[inherit] overflow-hidden transition-transform transition-opacity duration-100 ease-out will-change-[transform,filter]",
                                            idx === selectedIndex
                                                ? "scale-105 opacity-100 z-10 filter-none"
                                                : "scale-75 opacity-90 z-0 blur-sm"
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
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
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

                                                {/* <div className="mt-4">
                                                    <a
                                                        href={s.cta.href}
                                                        aria-label={s.cta.ariaLabel ?? s.cta.label}
                                                        className="inline-flex items-center gap-2 rounded-md bg-white/90 text-slate-900 px-4 py-2 text-sm sm:text-base font-medium hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/80 transition"
                                                    >
                                                        {s.cta.label}
                                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:shadow" />
                    <CarouselNext className="right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:shadow" />
                </BaseCarousel>



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

export default Carousel;
