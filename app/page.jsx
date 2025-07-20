import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Activity,
  Brain,
  Target,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Heart,
  BarChart3,
  Smartphone,
  Star,
  Menu,
  Play,
  Users,
  Shield,
  Clock,
} from "lucide-react"
import { GoToDashboardButton } from "@/components/GoToDashboardButton"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Athlytic</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors font-medium">
                Features
              </a>
              <a href="#integrations" className="text-zinc-400 hover:text-white transition-colors font-medium">
                Integrations
              </a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors font-medium">
                Pricing
              </a>
              <Button variant="ghost" className="text-zinc-400 hover:text-white">
                Sign In
              </Button>
              <GoToDashboardButton
                variant="primary"
                className="font-semibold"
              >
                Go to Dashboard
              </GoToDashboardButton>
            </nav>

            <Button variant="ghost" size="icon" className="lg:hidden text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge
            variant="secondary"
            className="mb-8 bg-orange-500/10 text-orange-400 border-orange-500/20 px-4 py-2 text-sm font-medium"
          >
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Performance Analytics
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Unlock Your
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent block">
              Athletic Potential
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Connect your fitness apps, get AI-powered insights, and achieve your performance goals faster than ever.
            Transform your health data into actionable intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
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
              <Play className="mr-3 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-black text-orange-500 mb-3">10K+</div>
                <div className="text-zinc-400 font-medium">Active Athletes</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-black text-orange-500 mb-3">25%</div>
                <div className="text-zinc-400 font-medium">Avg Performance Boost</div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-black text-orange-500 mb-3">50+</div>
                <div className="text-zinc-400 font-medium">App Integrations</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400">
              POWERFUL FEATURES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Built for Peak Performance
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
              Everything you need to analyze, understand, and optimize your athletic performance with cutting-edge AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold mb-3">AI-Powered Insights</CardTitle>
                <CardDescription className="text-zinc-400 text-base leading-relaxed">
                  Advanced LLM analysis of your health data to uncover hidden patterns and optimization opportunities
                  that human analysis might miss
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold mb-3">Goal-Driven Coaching</CardTitle>
                <CardDescription className="text-zinc-400 text-base leading-relaxed">
                  Set specific goals like "improve running times" and get personalized recommendations tailored to your
                  unique objectives and current performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold mb-3">Multi-App Integration</CardTitle>
                <CardDescription className="text-zinc-400 text-base leading-relaxed">
                  Connect Strava, Oura, MyFitnessPal, and 50+ other apps for comprehensive health tracking and unified
                  data analysis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold mb-3">Performance Tracking</CardTitle>
                <CardDescription className="text-zinc-400 text-base leading-relaxed">
                  Monitor your progress with detailed analytics and beautiful visualizations of your improvement over
                  time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold mb-3">Health Optimization</CardTitle>
                <CardDescription className="text-zinc-400 text-base leading-relaxed">
                  Get actionable recommendations for sleep, nutrition, recovery, and training based on comprehensive
                  data analysis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold mb-3">Advanced Analytics</CardTitle>
                <CardDescription className="text-zinc-400 text-base leading-relaxed">
                  Deep dive into your metrics with comprehensive dashboards and detailed performance reports that reveal
                  insights
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400">
              HOW IT WORKS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Three Simple Steps</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
              Get started in minutes and unlock your athletic potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-white text-black font-bold">1</Badge>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Connect Your Apps</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Link your favorite fitness and health apps like Strava, Oura, MyFitnessPal, and more in just a few
                clicks
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-white text-black font-bold">2</Badge>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Set Your Goals</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Define your objectives - whether it's improving running times, building strength, or optimizing overall
                health
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-white text-black font-bold">3</Badge>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Get AI Insights</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Receive personalized recommendations and actionable insights powered by advanced AI analysis of your
                data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Carousel */}
      <section id="integrations" className="py-24 px-6 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400">
            INTEGRATIONS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Seamless Connections</h2>
          <p className="text-xl text-zinc-400 mb-16 max-w-3xl mx-auto font-medium">
            Connect with all your favorite fitness and health apps for comprehensive tracking
          </p>

          {/* Carousel Container */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex space-x-8 min-w-full justify-around items-center">
                {[
                  { name: "Strava", color: "from-orange-600 to-red-600" },
                  { name: "Oura", color: "from-blue-600 to-indigo-600" },
                  { name: "MyFitnessPal", color: "from-blue-500 to-cyan-500" },
                  { name: "Garmin", color: "from-blue-700 to-blue-800" },
                  { name: "Fitbit", color: "from-teal-500 to-green-500" },
                  { name: "Apple Health", color: "from-gray-600 to-gray-700" },
                ].map((app) => (
                  <Card
                    key={app.name}
                    className="flex-shrink-0 bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 min-w-[200px] group"
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Activity className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-lg">{app.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Second set of logos */}
              <div className="flex space-x-8 min-w-full justify-around items-center">
                {[
                  { name: "Google Fit", color: "from-green-500 to-blue-500" },
                  { name: "Whoop", color: "from-red-600 to-pink-600" },
                  { name: "Polar", color: "from-cyan-500 to-blue-500" },
                  { name: "Suunto", color: "from-orange-500 to-red-500" },
                  { name: "Zwift", color: "from-orange-600 to-yellow-500" },
                  { name: "Peloton", color: "from-red-500 to-pink-500" },
                ].map((app) => (
                  <Card
                    key={app.name}
                    className="flex-shrink-0 bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 min-w-[200px] group"
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Activity className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-lg">{app.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Third set (repeat for seamless loop) */}
              <div className="flex space-x-8 min-w-full justify-around items-center">
                {[
                  { name: "Strava", color: "from-orange-600 to-red-600" },
                  { name: "Oura", color: "from-blue-600 to-indigo-600" },
                  { name: "MyFitnessPal", color: "from-blue-500 to-cyan-500" },
                  { name: "Garmin", color: "from-blue-700 to-blue-800" },
                  { name: "Fitbit", color: "from-teal-500 to-green-500" },
                  { name: "Apple Health", color: "from-gray-600 to-gray-700" },
                ].map((app) => (
                  <Card
                    key={`${app.name}-repeat`}
                    className="flex-shrink-0 bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 min-w-[200px] group"
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Activity className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-lg">{app.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10"></div>
          </div>

          <Badge variant="secondary" className="mt-12 bg-zinc-800 text-zinc-300 px-4 py-2">
            + 40 more integrations and growing
          </Badge>
        </div>
      </section>

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
            <Card className="bg-zinc-900/50 border-zinc-800 relative">
              <CardHeader className="pb-8">
                <CardTitle className="text-white text-3xl font-bold">Starter</CardTitle>
                <CardDescription className="text-zinc-400 text-lg">Perfect for getting started</CardDescription>
                <div className="text-5xl font-black text-white mt-6">Free</div>
                <p className="text-zinc-500">Forever</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Connect up to 3 apps</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Basic AI insights</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Weekly reports</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Community support</span>
                  </li>
                </ul>
                <GoToDashboardButton
                  className="w-full bg-transparent border-2 border-zinc-700 hover:bg-zinc-800 text-white font-semibold py-6"
                  variant="outline"
                >
                  Go to Dashboard
                </GoToDashboardButton>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-orange-500/10 to-red-500/10 border-orange-500 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 font-bold">
                  MOST POPULAR
                </Badge>
              </div>
              <CardHeader className="pb-8">
                <CardTitle className="text-white text-3xl font-bold">Pro</CardTitle>
                <CardDescription className="text-zinc-400 text-lg">For serious athletes</CardDescription>
                <div className="text-5xl font-black text-white mt-6">
                  $29<span className="text-xl text-zinc-400 font-normal">/month</span>
                </div>
                <p className="text-zinc-500">Billed monthly</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Unlimited app connections</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Advanced AI insights</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Daily recommendations</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Goal tracking & coaching</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Priority support</span>
                  </li>
                </ul>
                <GoToDashboardButton className="w-full font-semibold py-6" variant="primary">
                  Go to Dashboard
                </GoToDashboardButton>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 relative">
              <CardHeader className="pb-8">
                <CardTitle className="text-white text-3xl font-bold">Elite</CardTitle>
                <CardDescription className="text-zinc-400 text-lg">For teams and coaches</CardDescription>
                <div className="text-5xl font-black text-white mt-6">
                  $99<span className="text-xl text-zinc-400 font-normal">/month</span>
                </div>
                <p className="text-zinc-500">Up to 10 athletes</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Everything in Pro</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Team management</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Custom integrations</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Advanced analytics</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-base">Dedicated support</span>
                  </li>
                </ul>
                <GoToDashboardButton
                  className="w-full bg-transparent border-2 border-zinc-700 hover:bg-zinc-800 text-white font-semibold py-6"
                  variant="outline"
                >
                  Go to Dashboard
                </GoToDashboardButton>
              </CardContent>
            </Card>
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
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-8 text-lg leading-relaxed">
                  "Athlytic helped me identify the perfect balance between training intensity and recovery. My marathon
                  time improved by 15 minutes!"
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Sarah Martinez</div>
                    <div className="text-zinc-400">Marathon Runner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-8 text-lg leading-relaxed">
                  "The AI insights are incredible. It spotted patterns in my sleep and nutrition that I never would have
                  noticed on my own."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">MJ</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Mike Johnson</div>
                    <div className="text-zinc-400">Triathlete</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-8 text-lg leading-relaxed">
                  "As a coach, Athlytic gives me unprecedented insights into my athletes' performance. Game changer for
                  our team."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">LC</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Lisa Chen</div>
                    <div className="text-zinc-400">Performance Coach</div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white">
                  <Target className="w-5 h-5" />
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
