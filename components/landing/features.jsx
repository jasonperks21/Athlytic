'use client';

import { Brain, Target, Zap, TrendingUp, Heart, ChartColumn } from "lucide-react";
import dynamic from 'next/dynamic';

// Lazy load GridMotion since it's heavy
const GridMotion = dynamic(() => import('@/app/elements/GridMotion'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-gradient-radial from-orange-500/5 to-transparent" />
});

const FeatureCard = ({ icon: Icon, title, description, gradientFrom, gradientTo, hoverBorder, index }) => {
  return (
    <div 
      data-slot="card" 
      className={`text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-lg bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-${hoverBorder}/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-${hoverBorder}/5 hover:-translate-y-1 animate-fade-in-up`}
      style={{ animationDelay: `${index * 200}ms` }}
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
      title: "Real-Time Analytics",
      description: "Get instant feedback on your performance metrics with live data processing and immediate insights to optimize your training sessions",
      gradientFrom: "purple",
      gradientTo: "pink",
      hoverBorder: "purple"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Data-driven recommendations to systematically improve your athletic performance based on comprehensive analysis of your health metrics",
      gradientFrom: "green",
      gradientTo: "emerald",
      hoverBorder: "green"
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Continuous tracking of vital health indicators with early warning systems to prevent overtraining and optimize recovery periods",
      gradientFrom: "red",
      gradientTo: "rose",
      hoverBorder: "red"
    },
    {
      icon: ChartColumn,
      title: "Advanced Reporting",
      description: "Comprehensive reports with actionable insights, trend analysis, and progress tracking to keep you motivated and on track",
      gradientFrom: "indigo",
      gradientTo: "blue",
      hoverBorder: "indigo"
    }
  ];

  const gridItems = [
    '/integrations/strava.png',
    '/integrations/oura.png', 
    '/integrations/fitbit.png',
    '/integrations/garmin.png',
    '/integrations/whoop.png',
    '/integrations/apple-health.png',
    '/integrations/myfitnesspal.png',
    'Performance Insights',
    'AI Analysis',
    'Goal Tracking',
    'Health Metrics',
    'Training Plans',
    'Recovery Data',
    'Nutrition Info',
    'Sleep Analysis',
    'Heart Rate',
    'VO2 Max',
    'Power Output',
    'Cadence',
    'Pace Analysis',
    'Distance Tracking',
    'Calorie Burn',
    'Hydration',
    'Stress Levels',
    'Training Load',
    'Recovery Score',
    'Performance Trends',
    'Injury Prevention'
  ];

  return (
    <section id="features" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full text-zinc-400 text-sm font-medium mb-6 animate-fade-in">
            FEATURES
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Why Athletes Choose Us
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Leverage cutting-edge AI to unlock your athletic potential with personalized insights and data-driven recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
              hoverBorder={feature.hoverBorder}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            Powered by Your Data
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            Connect all your favorite fitness apps and devices for comprehensive analysis
          </p>
        </div>
      </div>

      {/* Background Grid Motion - Lazy Loaded */}
      <div className="absolute inset-0 z-0 opacity-30">
        <GridMotion items={gridItems} gradientColor="#EE7A1B" />
      </div>
    </section>
  );
};

export default Features;