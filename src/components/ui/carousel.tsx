"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import carouselBlog from "@/assets/boas-praticas-conservacao-equipamentos-videocirurgia.webp";
import carouselMaintenance from "@/assets/manutencao-equipamentos-videocirurgia-qualidade-original.webp";
import carouselInstitutional from "@/assets/empresa-manutencao-equipamentos-medicos-astato.webp";
import carouselSales from "@/assets/venda-equipamentos-videocirurgia-curadoria-tecnica.webp";

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
    cta: { label: string; href: string; ariaLabel?: string; disabled?: boolean };
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
        cta: { label: "Em breve", href: "/equipamentos", disabled: true },
    },
    {
        id: "s4",
        alt: "Dicas de conservação e boas práticas",
        desktopSrc: carouselBlog as unknown as string,
        mobileSrc: carouselBlog as unknown as string,
        title: "Dicas de Conservação e Boas Práticas",
        description: "Orientações da nossa equipe técnica para prolongar a vida útil dos seus equipamentos.",
        cta: { label: "Acessar Conteúdos", href: "/noticias" },
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
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                                        />

                                        {/* Overlay colado na base */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pt-16 sm:pt-20 pb-4 sm:pb-5 px-4 sm:px-6 md:px-8">
                                            <div className="max-w-2xl mx-auto text-white text-center">
                                                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight mb-1 sm:mb-2 drop-shadow-sm">
                                                    {s.title}
                                                </h2>
                                                {s.description ? (
                                                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed mb-3 sm:mb-4 drop-shadow-sm line-clamp-2">
                                                        {s.description}
                                                    </p>
                                                ) : null}

                                                {s.cta.disabled ? (
                                                    <span
                                                        className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-slate-300 bg-slate-500/40 backdrop-blur-sm rounded-xl border border-slate-400/30 cursor-not-allowed opacity-80"
                                                        aria-disabled="true"
                                                    >
                                                        {s.cta.label}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                                                    </span>
                                                ) : (
                                                    <a
                                                        href={s.cta.href}
                                                        className={cn(
                                                            "inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50",
                                                            idx === selectedIndex && "ring-2 ring-white/40"
                                                        )}
                                                        aria-label={s.cta.ariaLabel || s.cta.label}
                                                        role="button"
                                                    >
                                                        {s.cta.label}
                                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>

                                            {/* Barra de progresso */}
                                            <div className="mt-3 sm:mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-white rounded-full transition-all duration-500 ease-out shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                                                    style={{ width: `${((selectedIndex + 1) / scrollSnaps.length) * 100}%` }}
                                                    role="progressbar"
                                                    aria-valuenow={selectedIndex + 1}
                                                    aria-valuemin={1}
                                                    aria-valuemax={scrollSnaps.length}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-2 sm:left-4 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-16 bg-[#004A4A]/95 backdrop-blur-md hover:bg-white/95 shadow-xl hover:shadow-2xl rounded-full flex items-center justify-center text-white hover:text-[#004A4A] transition-all duration-200 border border-white/40 hover:border-[#004A4A]/80" />
                    <CarouselNext className="right-2 sm:right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-16 bg-[#004A4A]/95 backdrop-blur-md hover:bg-white/95 shadow-xl hover:shadow-2xl rounded-full flex items-center justify-center text-white hover:text-[#004A4A] transition-all duration-200 border border-white/40 hover:border-[#004A4A]/80" />
                </BaseCarousel>
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
