'use client';

import InfiniteLogos from '@/app/elements/InfiniteLogos'

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto text-center max-w-6xl">
        <span
          data-slot="badge"
          className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground mb-6 border-zinc-700 text-zinc-400"
        >
          INTEGRATIONS
        </span>
        
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Seamless Connections
        </h2>
        
        <p className="text-xl text-zinc-400 mb-16 max-w-3xl mx-auto font-medium">
          Connect with all your favorite fitness and health apps for comprehensive tracking
        </p>

        <InfiniteLogos />

        <span
          data-slot="badge"
          className="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-secondary/90 mt-12 bg-zinc-800 text-zinc-300 px-4 py-2"
        >
          + 40 more integrations and growing
        </span>
      </div>
    </section>
  )
}

export default IntegrationsSection