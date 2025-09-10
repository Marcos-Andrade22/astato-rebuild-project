"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import img1 from "@/assets/test1.jpg"
import img2 from "@/assets/test2.jpg"
import img3 from "@/assets/test3.jpg"
import img4 from "@/assets/test4.jpg"
import img5 from "@/assets/test5.jpg"
import heroImage from "@/assets/hero-medical-equipment.jpg"
import { cn } from "@/lib/utils"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/BaseCarousel"

const slides = [
    { id: "s1", alt: "Slide 1", desktopSrc: img1, mobileSrc: "/hero/slide1-1080x1440.jpg" },
    { id: "s2", alt: "Slide 2", desktopSrc: img2, mobileSrc: "/hero/slide2-1080x1440.jpg" },
    { id: "s3", alt: "Slide 3", desktopSrc: heroImage },
    { id: "s4", alt: "Slide 4", desktopSrc: img4 },
    { id: "s5", alt: "Slide 5", desktopSrc: img5 },
]

const BaseCarousel: React.FC = () => {
    const [api, setApi] = React.useState<CarouselApi | null>(null)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

    const autoplay = React.useMemo(
        () =>
            Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
            }),
        []
    )

    React.useEffect(() => {
        if (!api) return
        const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
        const onInit = () => setScrollSnaps(api.scrollSnapList())

        onInit()
        onSelect()
        api.on("select", onSelect)
        api.on("reInit", onInit)

        return () => {
            api.off("select", onSelect)
            api.off("reInit", onInit)
        }
    }, [api])

    const scrollTo = (index: number) => api?.scrollTo(index)

    return (
        <>
            <section
                className="relative min-h-[60vh] w-full bg-[#8fb4b4]"
                role="region"
                aria-roledescription="carousel"
                aria-label="Carrossel com indicadores"
            >
                <Carousel
                    opts={{
                        loop: true,
                        align: "center",            // centraliza o slide ativo
                        // containScroll removido para não anular o alinhamento
                        dragFree: false,
                    }}
                    plugins={[autoplay]}
                    setApi={setApi}
                    className="w-full overflow-visible" // deixe visível para prévias ultrapassarem
                >
                    {/* Espaçamento entre slides: -ml no content + pl nos itens */}
                    <CarouselContent className="-ml-4 md:-ml-6 px-6 md:px-10 h-full">
                        {slides.map((s, idx) => (
                            <CarouselItem
                                key={s.id}
                                className="pl-4 md:pl-6 h-[60vh] md:h-[70vh] basis-[85%] sm:basis-[75%] lg:basis-[65%]"
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                                    <BackgroundPicture
                                        desktopSrc={s.desktopSrc as unknown as string}
                                        mobileSrc={s.mobileSrc}
                                        alt={s.alt}
                                        eager={idx === 0}
                                    />
                                    {/* Overlay leve */}
                                    <div className="absolute inset-0 bg-black/20" />
                                    {/* Conteúdo do card */}
                                    <div className="absolute inset-0 flex items-end p-6">
                                        <span className="rounded-md bg-white/85 px-3 py-1 text-sm font-medium">
                                            {s.alt}
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:border-green-500 shadow" />
                    <CarouselNext className="right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:border-green-500 shadow" />
                </Carousel>
                {/* Indicadores */}
                <nav
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6"
                    aria-label="Indicadores de slides"
                >
                    {scrollSnaps.map((_, i) => {
                        const isActive = i === selectedIndex
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
                        )
                    })}
                </nav>
            </section>
        </>
    )
}

function BackgroundPicture({
    desktopSrc,
    mobileSrc,
    alt,
    eager,
}: {
    desktopSrc: string
    mobileSrc?: string
    alt: string
    eager?: boolean
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
    )
}

export default BaseCarousel
