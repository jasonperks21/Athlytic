'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Lazy load TextType component
const TextType = dynamic(() => import('@/app/elements/TextType'), {
  ssr: false,
  loading: () => <div className="text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-white min-h-[120px]">A new era of personal health</div>
});

const LoadingSpinner = () => (
  <div className="flex items-center justify-center gap-4">
    {Array.from({ length: 3 }, (_, i) => (
      <div 
        key={`spinner-left-${i + 1}`} 
        className={`z-10 h-[2px] w-6 bg-white/50 md:h-1 md:w-8 animate-pulse`} 
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
    <div className="font-mono-md z-10">Loading</div>
    {Array.from({ length: 3 }, (_, i) => (
      <div 
        key={`spinner-right-${i + 1}`} 
        className={`z-10 h-[2px] w-6 bg-white/50 md:h-1 md:w-8 animate-pulse`} 
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </div>
);

const getVideoSource = (width) => {
  if (width >= 3840) return '/hero-video-2160p.mp4';
  if (width >= 2560) return '/hero-video-1440p.mp4';
  if (width >= 1820) return '/hero-video-1080p.mp4';
  return '/hero-video-720p.mp4';
};

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setVideoSrc(getVideoSource(window.innerWidth));
    
    // Set initial video source
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Show content after a short delay for better UX
    const contentTimer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);

    // Show video slightly later
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
      if (videoRef.current) {
        videoRef.current.play().catch(console.warn);
      }
    }, 2500);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(videoTimer);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Loading Spinner */}
      <div 
        className={`pointer-events-none fixed inset-0 z-[9999999999] flex items-center justify-center bg-black text-white/50 transition-opacity duration-500 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <LoadingSpinner />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 z-20 bg-black/20" />

      {/* Video Background */}
      {videoSrc && (
        <video
          ref={videoRef}
          key={videoSrc}
          playsInline
          muted
          preload="metadata"
          className={`absolute left-0 top-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            showVideo ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setIsLoading(false)}
          loop
          poster="/hero-poster.jpg" // Add a poster image for better loading UX
        >
          <source src={videoSrc} type="video/mp4" />
          <div className="bg-white p-12 text-4xl text-black">
            Your browser does not support the video tag.
          </div>
        </video>
      )}

      {/* Hero Text Content */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
        <div className="max-w-[800px] text-center">
          <h1 className="mb-6 text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {showContent ? (
              <TextType 
                text={["A new era of\npersonal health"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                cursorCharacter="_" 
              />
            ) : (
              <span className="opacity-0">A new era of personal health</span>
            )}
          </h1>
          <p 
            className={`mx-auto mb-8 text-[21px] font-light leading-[1.2] tracking-[-0.01em] text-white/70 transition-all duration-800 delay-[3000ms] ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            50+ supported apps, 10k active athletes,<br />
            25% average performance boost. All just for $10/month.
          </p>
          <div 
            className={`mt-8 transition-all duration-800 delay-[3500ms] ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="/dashboard" 
              className="inline-block cursor-pointer font-mono text-sm tracking-wide group"
            >
              <div className="relative">
                <div className="relative z-10 bg-white px-8 py-4 text-zinc-900 transition-all duration-300 group-hover:bg-zinc-100">
                  JOIN TODAY
                </div>
                <div className="absolute inset-0 z-0 bg-white blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-75"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;