'use client';

import { Brain, Target, Zap, TrendingUp, Heart, ChartColumn } from "lucide-react";
import GridMotion from '@/app/elements/GridMotion';

const FeatureCard = ({ icon: Icon, title, description, gradientFrom, gradientTo, hoverBorder }) => {
  return (
    <div 
      data-slot="card" 
      className={`text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-lg bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-${hoverBorder}/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-${hoverBorder}/5 hover:-translate-y-1`}
    >
      <div 
        data-slot="card-header" 
        className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-4"
      >
        <div 
          className={`w-16 h-16 bg-gradient-to-br from-${gradientFrom}-500/90 to-${gradientTo}-500/90 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${gradientFrom}-500/20 ring-1 ring-white/10`}
        >
          <Icon className="w-7 h-7 text-white/90 stroke-[1.5]" aria-hidden="true" />
        </div>
        <div data-slot="card-title" className="text-white text-2xl font-bold mb-3 group-hover:text-${gradientFrom}-400 transition-colors duration-300">
          {title}
        </div>
        <div data-slot="card-description" className="text-zinc-400 text-base leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced LLM analysis of your health data to uncover hidden patterns and optimization opportunities that human analysis might miss",
      gradientFrom: "orange",
      gradientTo: "red",
      hoverBorder: "orange"
    },
    {
      icon: Target,
      title: "Goal-Driven Coaching",
      description: "Set specific goals like \"improve running times\" and get personalized recommendations tailored to your unique objectives and current performance",
      gradientFrom: "blue",
      gradientTo: "cyan",
      hoverBorder: "blue"
    },
    {
      icon: Zap,
      title: "Multi-App Integration",
      description: "Connect Strava, Oura, MyFitnessPal, and 50+ other apps for comprehensive health tracking and unified data analysis",
      gradientFrom: "green",
      gradientTo: "emerald",
      hoverBorder: "green"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor your progress with detailed analytics and beautiful visualizations of your improvement over time",
      gradientFrom: "purple",
      gradientTo: "pink",
      hoverBorder: "purple"
    },
    {
      icon: Heart,
      title: "Health Optimization",
      description: "Get actionable recommendations for sleep, nutrition, recovery, and training based on comprehensive data analysis",
      gradientFrom: "yellow",
      gradientTo: "orange",
      hoverBorder: "yellow"
    },
    {
      icon: ChartColumn,
      title: "Advanced Analytics",
      description: "Deep dive into your metrics with comprehensive dashboards and detailed performance reports that reveal insights",
      gradientFrom: "indigo",
      gradientTo: "blue",
      hoverBorder: "indigo"
    }
  ];

  const gridItems = [
    '/runner.svg',
    '/basketball.svg',
    '/football.svg',
    '/boxer.svg',
    '/stretching.svg',
    '/swimmer.svg',
    '/runner.svg',
    '/football.svg',
    '/basketball.svg',
    '/swimmer.svg',
    '/boxer.svg',
    '/stretching.svg',
    '/basketball.svg',
    '/runner.svg',
    '/swimmer.svg',
    '/stretching.svg',
    '/football.svg',
    '/boxer.svg',
    '/runner.svg',
    '/stretching.svg',
    '/basketball.svg',
    '/swimmer.svg',
    '/football.svg',
    '/boxer.svg',
    '/stretching.svg',
    '/runner.svg',
    '/swimmer.svg',
    '/basketball.svg'
  ];

  return (
    <section id="features" className="relative py-24 px-6 bg-zinc-950">
      <div className="absolute inset-0 left-0 right-0 top-0 bottom-0 w-full h-full overflow-hidden opacity-50">
        <GridMotion items={gridItems} gradientColor="#EE7A1B" />
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <span 
            data-slot="badge" 
            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground mb-6 border-zinc-700 text-zinc-400"
          >
            POWERFUL FEATURES
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Built for Peak Performance
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
            Everything you need to analyze, understand, and optimize your athletic performance with cutting-edge AI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;