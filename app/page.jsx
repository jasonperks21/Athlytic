'use client';

import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Activity,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Shield,
  Clock,
} from "lucide-react"
import { GoToDashboardButton } from "@/components/GoToDashboardButton"

// Lazy load heavy components - now possible with client component
const Header = dynamic(() => import("@/components/landing/header"), {
  ssr: true,
})
const HeroSection = dynamic(() => import('@/components/landing/hero'), {
  ssr: false, // Hero can be client-side only to reduce initial bundle
  loading: () => <div className="h-screen bg-black" />
})
const Features = dynamic(() => import('@/components/landing/features'), {
  ssr: false,
  loading: () => <div className="py-24 bg-black" />
})
const GuideSection = dynamic(() => import('@/components/landing/guide'), {
  ssr: false,
  loading: () => <div className="py-24 bg-black" />
})
const IntegrationsSection = dynamic(() => import('@/components/landing/integrations'), {
  ssr: false,
  loading: () => <div className="py-24 bg-black" />
})

// Move pricing data to separate object to reduce initial bundle
const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for getting started",
    price: "Free",
    period: "Forever",
    features: [
      "Connect up to 3 apps",
      "Basic AI insights", 
      "Weekly reports",
      "Community support"
    ],
    popular: false,
    variant: "outline"
  },
  {
    id: "pro", 
    name: "Pro",
    description: "For serious athletes",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited app connections",
      "Advanced AI insights",
      "Daily recommendations", 
      "Goal tracking & coaching",
      "Priority support"
    ],
    popular: true,
    variant: "primary"
  },
  {
    id: "elite",
    name: "Elite", 
    description: "For teams and coaches",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Pro",
      "Team management",
      "Custom integrations",
      "Advanced analytics",
      "Dedicated support"
    ],
    popular: false,
    variant: "outline"
  }
]

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Marathon Runner",
    initials: "SM",
    gradient: "from-orange-500 to-red-500",
    text: "Athlytic helped me identify the perfect balance between training intensity and recovery. My marathon time improved by 15 minutes!"
  },
  {
    name: "Mike Johnson", 
    role: "Triathlete",
    initials: "MJ",
    gradient: "from-blue-500 to-cyan-500",
    text: "The AI insights are incredible. It spotted patterns in my sleep and nutrition that I never would have noticed on my own."
  },
  {
    name: "Lisa Chen",
    role: "Performance Coach", 
    initials: "LC",
    gradient: "from-green-500 to-emerald-500",
    text: "As a coach, Athlytic gives me unprecedented insights into my athletes' performance. Game changer for our team."
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* Guide Section */}
      <GuideSection />

      {/* Integrations Carousel */}
      <IntegrationsSection />

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400">
              PRICING
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Choose Your Plan</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
              Start free and upgrade as you grow. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id}
                className={`${plan.popular 
                  ? 'bg-gradient-to-b from-orange-500/10 to-red-500/10 border-orange-500 relative scale-105' 
                  : 'bg-zinc-900/50 border-zinc-800'} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 font-bold">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-8">
                  <CardTitle className="text-white text-3xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">{plan.description}</CardDescription>
                  <div className="text-5xl font-black text-white mt-6">
                    {plan.price}{plan.period !== "Forever" && <span className="text-xl text-zinc-400 font-normal">{plan.period}</span>}
                  </div>
                  <p className="text-zinc-500">{plan.period === "Forever" ? plan.period : "Billed monthly"}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-zinc-300">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <GoToDashboardButton
                    className={`w-full font-semibold py-6 ${
                      plan.variant === 'outline' 
                        ? 'bg-transparent border-2 border-zinc-700 hover:bg-zinc-800 text-white' 
                        : ''
                    }`}
                    variant={plan.variant}
                  >
                    Go to Dashboard
                  </GoToDashboardButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400">
              TESTIMONIALS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Trusted by Athletes</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
              See how Athlytic is helping athletes worldwide achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-8 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{testimonial.name}</div>
                      <div className="text-zinc-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Ready to Optimize Your Performance?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Join thousands of athletes who are already using AI to reach their peak performance. Start your free trial
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GoToDashboardButton
              size="lg"
              variant="primary"
              className="text-lg px-10 py-6 font-semibold h-auto"
            >
              Go to Dashboard
              <ArrowRight className="ml-3 w-5 h-5" />
            </GoToDashboardButton>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white text-lg px-10 py-6 font-semibold h-auto bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Athlytic</span>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 max-w-md">
                AI-powered performance analytics for athletes who demand excellence. Transform your data into results.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white">
                  <Users className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white">
                  <Activity className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-12 bg-zinc-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 mb-4 md:mb-0">© 2024 Athlytic. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <Badge variant="secondary" className="bg-zinc-800 text-zinc-400">
                <Shield className="w-4 h-4 mr-2" />
                SOC 2 Compliant
              </Badge>
              <Badge variant="secondary" className="bg-zinc-800 text-zinc-400">
                <Clock className="w-4 h-4 mr-2" />
                99.9% Uptime
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
