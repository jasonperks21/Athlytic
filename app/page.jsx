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
import Header from "@/components/landing/header"
import HeroSection from '@/components/landing/hero'
import Features from '@/components/landing/features'
import GuideSection from '@/components/landing/guide'

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
