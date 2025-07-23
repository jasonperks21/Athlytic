'use client';

import Image from 'next/image'

const logos = [
  { name: 'Strava', src: '/icons/strava.svg'},
  { name: 'Oura', src: '/icons/oura.svg'},
  { name: 'MyFitnessPal', src: '/icons/mfp.svg'},
  { name: 'Garmin', src: '/icons/garmin.svg'},
  { name: 'Fitbit', src: '/icons/fitbit.svg'},
  { name: 'Peloton', src: '/icons/peloton.svg'},
  { name: 'Runna', src: '/icons/runna.svg'},
  { name: 'Flo', src: '/icons/flo.svg'}
]

const LogoCard = ({ name, src }) => (
  <div className="inline-flex items-center justify-center mx-8 w-64 h-32 overflow-hidden">
    <Image
      src={src}
      alt={name}
      width={160}
      height={160}
      className="w-full h-full text-white opacity-100 hover:opacity-100 transition-opacity duration-300 scale-250"
      style={{ objectFit: 'contain' }}
    />
  </div>
)

const InfiniteLogos = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <LogoCard
            key={`first-${index}-${logo.name}`}
            {...logo}
          />
        ))}
        {/* Second set of logos for seamless loop */}
        {logos.map((logo, index) => (
          <LogoCard
            key={`second-${index}-${logo.name}`}
            {...logo}
          />
        ))}
      </div>
    </div>
  )
}

export default InfiniteLogos 