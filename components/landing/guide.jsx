'use client';

import { Badge } from "@/components/ui/badge";
import { Smartphone, Target, Brain } from "lucide-react";
import { motion, useMotionValue, useSpring, transform } from "framer-motion";
// Remove Beams import since we won't use it anymore

const StepCard = ({ icon: Icon, title, description, gradient, step }) => {
  const [gradientFrom, gradientTo] = gradient.split(' ')[1].split('-');
  
  return (
    <div 
      data-slot="card" 
      className="text-card-foreground flex flex-col gap-6 rounded-xl border py-8 px-6 shadow-lg bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-white/20 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-1"
    >
      <div 
        data-slot="card-header" 
        className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto]"
      >
        <div className="relative">
          <div 
            className={`w-16 h-16 bg-gradient-to-br from-${gradientFrom}-500/90 to-${gradientTo}-500/90 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${gradientFrom}-500/20 ring-1 ring-white/10`}
          >
            <Icon className="w-7 h-7 text-white/90 stroke-[1.5]" aria-hidden="true" />
          </div>
          <Badge 
            variant="default" 
            className="absolute -top-2 -right-2 bg-white text-black font-bold shadow-lg"
          >
            {step}
          </Badge>
        </div>
        <div data-slot="card-title" className={`text-white text-2xl font-bold mt-6 mb-3 group-hover:text-${gradientFrom}-400 transition-colors duration-300`}>
          {title}
        </div>
        <div data-slot="card-description" className="text-zinc-400 text-base leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

const GuideSection = () => {
  const steps = [
    {
      id: 1,
      title: "Connect Your Apps",
      description: "Link your favorite fitness and health apps like Strava, Oura, MyFitnessPal, and more in just a few clicks",
      icon: Smartphone,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Set Your Goals",
      description: "Define your objectives - whether it's improving running times, building strength, or optimizing overall health",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Get AI Insights",
      description: "Receive personalized recommendations and actionable insights powered by advanced AI analysis of your data",
      icon: Brain,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { stiffness: 75, damping: 15 });
  const rotateY = useSpring(mouseX, { stiffness: 75, damping: 15 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const moveX = (event.clientX - centerX) / 50;
    const moveY = (event.clientY - centerY) / 50;

    mouseX.set(moveX);
    mouseY.set(-moveY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="relative py-24 px-6 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/swimmer.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 border-zinc-700 text-zinc-400"
          >
            HOW IT WORKS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Three Simple Steps
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
            Get started in minutes and unlock your athletic potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
              gradient={step.gradient}
              step={step.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideSection;