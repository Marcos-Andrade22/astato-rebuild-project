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

                                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-10">
                                            {/* Overlay com card flutuante */}
                                            <div className="absolute inset-0 flex flex-col justify-end items-center p-4 sm:p-6 md:p-10 pb-24 md:pb-32">
                                                <div className="pointer-events-auto w-[90%] sm:w-[80%] md:w-[65%] bg-[#004A4A]/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-white/30 text-white drop-shadow-xl">
                                                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-2 md:mb-3 drop-shadow-sm">
                                                        {s.title}
                                                    </h2>
                                                    {s.description ? (
                                                        <p className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed mb-4 md:mb-6 drop-shadow-sm">
                                                            {s.description}
                                                        </p>
                                                    ) : null}

                                                    {/* CTA Button */}
                                                    <a
                                                        href={s.cta.href}
                                                        className={cn(
                                                            "inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] pointer-events-auto focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#004A4A]/50",
                                                            idx === selectedIndex && "ring-2 ring-white/40"
                                                        )}
                                                        aria-label={s.cta.ariaLabel || s.cta.label}
                                                        role="button"
                                                    >
                                                        {s.cta.label}
                                                        <svg
                                                            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Barra de progresso no rodapé */}
                                            <nav
                                                className="w-full absolute bottom-6 left-0 right-0 px-4 sm:px-6 md:px-10"
                                                aria-label="Barra de progresso dos slides"
                                            >
                                                <div className="absolute bottom-0 left-0 right-0 h-1 md:h-1.5 bg-white/20">
                                                    <div
                                                        className="h-full bg-white rounded-full transition-all duration-500 ease-out shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                                                        style={{
                                                            width: `${((selectedIndex + 1) / scrollSnaps.length) * 100}%`,
                                                        }}
                                                        role="progressbar"
                                                        aria-valuenow={selectedIndex + 1}
                                                        aria-valuemin={1}
                                                        aria-valuemax={scrollSnaps.length}
                                                    />
                                                </div>
                                            </nav>
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
