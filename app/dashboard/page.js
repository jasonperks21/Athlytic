'use client';
import React from "react";
import dynamic from "next/dynamic";
import { House, Calendar, Clock, Target } from "lucide-react";

// Lazy load chart components
const LineChart = dynamic(() => import('recharts').then(mod => ({ default: mod.LineChart })), { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => ({ default: mod.Line })), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.XAxis })), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.YAxis })), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => ({ default: mod.CartesianGrid })), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => ({ default: mod.Tooltip })), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => ({ default: mod.ResponsiveContainer })), { ssr: false });

// Mock health metrics data (replace with real data or import as needed)
const healthMetrics = [
  {
    id: "sleepScore",
    label: "Sleep Score",
    source: "Oura Ring",
    unit: "/100",
    trend: "+5%",
    trendType: "up",
    value: 85,
    data: [
      { date: "2024-05-01", value: 80 },
      { date: "2024-05-02", value: 82 },
      { date: "2024-05-03", value: 85 },
      { date: "2024-05-04", value: 87 },
      { date: "2024-05-05", value: 84 },
      { date: "2024-05-06", value: 86 },
      { date: "2024-05-07", value: 85 },
    ],
  },
  {
    id: "hrv",
    label: "HRV",
    source: "Oura Ring",
    unit: "ms",
    trend: "-3%",
    trendType: "down",
    value: 42,
    data: [
      { date: "2024-05-01", value: 45 },
      { date: "2024-05-02", value: 44 },
      { date: "2024-05-03", value: 43 },
      { date: "2024-05-04", value: 41 },
      { date: "2024-05-05", value: 40 },
      { date: "2024-05-06", value: 42 },
      { date: "2024-05-07", value: 42 },
    ],
  },
  {
    id: "distance",
    label: "Weekly Distance",
    source: "Strava",
    unit: "km",
    trend: "+8%",
    trendType: "up",
    value: 45,
    data: [
      { date: "2024-05-01", value: 42 },
      { date: "2024-05-02", value: 38 },
      { date: "2024-05-03", value: 45 },
      { date: "2024-05-04", value: 41 },
      { date: "2024-05-05", value: 47 },
      { date: "2024-05-06", value: 43 },
      { date: "2024-05-07", value: 45 },
    ],
  },
];

const MetricCard = ({ metric }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{metric.label}</h3>
        <p className="text-sm text-gray-500 mt-1">From {metric.source}</p>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-gray-900">{metric.value}<span className="text-sm text-gray-500 font-normal ml-1">{metric.unit}</span></div>
        <div className={`text-sm font-medium ${
          metric.trendType === 'up' ? 'text-green-600' : 
          metric.trendType === 'down' ? 'text-red-600' : 'text-gray-500'
        }`}>
          {metric.trend} this week
        </div>
      </div>
    </div>
    
    <div className="h-32">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={metric.data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
            <House className="w-4 h-4" />
            <span>Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-600 mt-2">Here&apos;s what&apos;s happening with your health today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                                 <p className="text-blue-100 text-sm">Today&apos;s Activities</p>
                 <p className="text-3xl font-bold">3</p>
               </div>
               <Calendar className="w-8 h-8 text-blue-200" />
             </div>
           </div>
           
           <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-green-100 text-sm">Weekly Goal</p>
                <p className="text-3xl font-bold">78%</p>
              </div>
              <Target className="w-8 h-8 text-green-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Active Time</p>
                <p className="text-3xl font-bold">4.2h</p>
              </div>
              <Clock className="w-8 h-8 text-purple-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Calories</p>
                <p className="text-3xl font-bold">2,847</p>
              </div>
              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">🔥</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {healthMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
} 