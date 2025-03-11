import { useState, useEffect, useRef } from 'react';

type VideoSlide = {
  id: number;
  videoSrc: string;
  title: string;
  description: string;
  thumbnail: string;
};

type VideoCarouselProps = {
  slides: VideoSlide[];
  autoPlayInterval?: number;
};

const VideoCarousel = ({ slides, autoPlayInterval = 8000 }: VideoCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Reset video refs array
    videoRefs.current = videoRefs.current.slice(0, slides.length);
    
    // Play current video and pause others
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      
      if (index === currentSlide) {
        if (isPlaying) {
          video.play().catch(err => console.error("Video play error:", err));
        } else {
          video.pause();
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
    
    // Set up autoplay interval
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(nextSlide, autoPlayInterval);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide, isPlaying, slides.length, autoPlayInterval]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Videos */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide.thumbnail} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
          {/* <video
            ref={el => videoRefs.current[index] = el}
            src={slide.videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            aria-label={`Video showing ${slide.title}`}
          /> */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">{slide.title}</h2>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-200">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors ml-4"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel; 