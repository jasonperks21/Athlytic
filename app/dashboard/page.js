'use client';
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { House, Calendar, Clock, Target } from "lucide-react";

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
    value: 32.5,
    data: [
      { date: "2024-05-01", value: 28 },
      { date: "2024-05-02", value: 29 },
      { date: "2024-05-03", value: 30 },
      { date: "2024-05-04", value: 31 },
      { date: "2024-05-05", value: 32 },
      { date: "2024-05-06", value: 33 },
      { date: "2024-05-07", value: 32.5 },
    ],
  },
  {
    id: "restingHR",
    label: "Resting HR",
    source: "Oura Ring",
    unit: "bpm",
    trend: "-2%",
    trendType: "down",
    value: 58,
    data: [
      { date: "2024-05-01", value: 60 },
      { date: "2024-05-02", value: 59 },
      { date: "2024-05-03", value: 58 },
      { date: "2024-05-04", value: 57 },
      { date: "2024-05-05", value: 58 },
      { date: "2024-05-06", value: 59 },
      { date: "2024-05-07", value: 58 },
    ],
  },
];

// Combine data for charting
const combinedData = healthMetrics[0].data.map((item, index) => ({
  date: item.date,
  sleepScore: healthMetrics[0].data[index]?.value || 0,
  hrv: healthMetrics[1].data[index]?.value || 0,
  distance: healthMetrics[2].data[index]?.value || 0,
  restingHR: healthMetrics[3].data[index]?.value || 0,
}));

// Quick stats for the top cards
const quickStats = [
  { label: "This Week", value: "5 workouts", icon: Target, color: "blue" },
  { label: "Total Distance", value: "32.5 km", icon: Calendar, color: "green" },
  { label: "Avg Sleep", value: "7h 34m", icon: Clock, color: "purple" },
];

// MetricCard subcomponent
function MetricCard({ metric }) {
  const isUp = metric.trendType === "up";
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 text-sm">{metric.label}</span>
        <span className="bg-gray-100 text-xs px-2 py-1 rounded">{metric.source}</span>
      </div>
      <span className="text-2xl font-bold">
        {metric.value} <span className="text-base font-normal text-gray-400">{metric.unit}</span>
      </span>
      <span className={`text-xs mt-1 ${isUp ? "text-green-600" : "text-red-500"}`}>
        {isUp ? "▲" : "▼"} {metric.trend} <span className="text-gray-400">vs last week</span>
      </span>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6 min-h-screen bg-gray-50 p-2 sm:p-3 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <House className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-600 mt-1">Your health and performance overview</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Last 7 days
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-${stat.color}-50`}>
                  <Icon className={`w-5 h-5 text-${stat.color}-600`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sleep & HRV Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={combinedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sleepScore"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Sleep Score"
              />
              <Line
                type="monotone"
                dataKey="hrv"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="HRV"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Load</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={combinedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="distance"
                stroke="#10b981"
                strokeWidth={2}
                name="Distance (km)"
              />
              <Line
                type="monotone"
                dataKey="restingHR"
                stroke="#f59e0b"
                strokeWidth={2}
                name="Resting HR"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 