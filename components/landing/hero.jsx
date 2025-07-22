'use client';

import { useEffect, useState, useRef } from 'react';
import TextType from '@/app/elements/TextType';
import { gsap } from 'gsap';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center gap-4">
    {Array.from({ length: 3 }, (_, i) => (
      <div 
        key={`spinner-left-${i + 1}`} 
        className={`z-10 h-[2px] w-6 bg-white/50 md:h-1 md:w-8 spinner-anim-${i + 1}`} 
      />
    ))}
    <div className="font-mono-md z-10">Loading</div>
    {Array.from({ length: 3 }, (_, i) => (
      <div 
        key={`spinner-right-${i + 1}`} 
        className={`z-10 h-[2px] w-6 bg-white/50 md:h-1 md:w-8 spinner-anim-${i + 1}`} 
      />
    ))}
  </div>
);

const getVideoSource = (width) => {
  if (width >= 3840) return '/hero-video-2160p.mp4';
  if (width >= 2560) return '/hero-video-2160p.mp4';
  if (width >= 1820) return '/hero-video-2160p.mp4';
  return '/hero-video-2160p.mp4';
};

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setVideoSrc(getVideoSource(window.innerWidth));
    
    // Set initial video source
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Hide loading screen after minimum duration
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const TYPING_SPEED = 75;
    const TYPING_TEXT = "A new era of\npersonal health";
    const textTypeDelay = TYPING_TEXT.length * TYPING_SPEED + 800; // Text length * speed + pause

    gsap.set([paragraphRef.current, buttonRef.current], { 
      opacity: 0,
      y: 20
    });

    const tl = gsap.timeline({ delay: textTypeDelay / 1000 });

    tl.to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .add(() => {
      setShowVideo(true);
      videoRef.current?.play();
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Loading Spinner */}
      <div 
        className="pointer-events-none fixed inset-0 z-[9999999999] flex items-center justify-center bg-black text-white/50"
        style={{ 
          opacity: isLoading ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <LoadingSpinner />
      </div>

      {/* Black Overlay */}
      <div 
        className="absolute inset-0 z-20 bg-black/20"
        style={{ transition: 'opacity 3.5s' }}
      />

      {/* Video Background */}
      {videoSrc && (
        <video
          ref={videoRef}
          key={videoSrc}
          playsInline
          webkit-playsinline="true"
          muted
          preload="metadata"
          className={`absolute left-0 top-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsLoading(false)}
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          <h1 className="bg-white p-12 text-4xl text-black">
            Your browser does not support the video tag.
          </h1>
        </video>
      )}

      {/* Hero Text Content */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
        <div className="max-w-[800px] text-center">
          <h1 className="mb-6 text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white">
            <TextType 
              text={["A new era of\npersonal health"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              cursorCharacter="_" 
            />
          </h1>
          <p ref={paragraphRef} className="mx-auto mb-8 text-[21px] font-light leading-[1.2] tracking-[-0.01em] text-white/70">
            50+ supported apps, 10k active athletes,<br />
            25% average performance boost. All just for $10/month.
          </p>
          <div ref={buttonRef} className="mt-8">
            <a 
              href="/dashboard" 
              className="inline-block cursor-pointer font-mono text-sm tracking-wide"
            >
              <div className="relative">
                <div className="relative z-10 bg-white px-8 py-4 text-zinc-900">
                  JOIN TODAY
                </div>
                <div className="absolute inset-0 z-0 bg-white blur-2xl [@supports(-webkit-hyphens:none)]:hidden"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;