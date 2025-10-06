import Carousel from '../ui/Carousel.tsx'

const CarouselSection = () => {
    return (
        <div
            className="py-10 bg-[#F5F5F5]"
            aria-roledescription="carousel-div"
            aria-label="Div do carrossel"
            id="presentation"
        >
            <Carousel />
        </div>
    )
}

export default CarouselSection