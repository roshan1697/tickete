import { useState } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 2));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0));
    };

    return (
        <div className="max-w-2xl m-auto">
            <div id="default-carousel" className="relative mt-4 mb-4 ml-4" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    {/* Item 1 */}
                    <div className={`duration-700 ease-in-out ${currentSlide === 0 ? '' : 'hidden'}`} data-carousel-item>
                        <img src="/image1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
                    </div>
                    {/* Item 2 */}
                    <div className={`duration-700 ease-in-out ${currentSlide === 1 ? '' : 'hidden'}`} data-carousel-item>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
                    </div>
                    {/* Item 3 */}
                    <div className={`duration-700 ease-in-out ${currentSlide === 2 ? '' : 'hidden'}`} data-carousel-item>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3" />
                    </div>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex space-x-1 -translate-x-1/2 bottom-5 left-1/2">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                           
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                          
                           
                            onClick={() => handleSlideChange(index)}
                        ></button>
                    ))}
                </div>
                {/* Slider controls */}
                <button
                  
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                
                    onClick={handlePrevSlide}
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        {/* Your SVG for the previous button */}
                        &lt;
                    </span>
                </button>
                <button
                  
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    
                    onClick={handleNextSlide}
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        {/* Your SVG for the next button */}
                        &gt;
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
