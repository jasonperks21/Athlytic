import React from "react";

export default function Dashboards() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-gray-600">Your health and performance overview</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <button className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 font-medium hover:bg-gray-100">Last 7 days</button>
          <button className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700">Generate Report</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-center items-start">
          <span className="text-gray-500 text-sm mb-1 flex items-center gap-2"><span className="inline-block w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">🔔</span> This Week</span>
          <span className="text-2xl font-bold">5 workouts</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-center items-start">
          <span className="text-gray-500 text-sm mb-1 flex items-center gap-2"><span className="inline-block w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">📅</span> Total Distance</span>
          <span className="text-2xl font-bold">32.5 km</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-center items-start">
          <span className="text-gray-500 text-sm mb-1 flex items-center gap-2"><span className="inline-block w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">⏰</span> Avg Sleep</span>
          <span className="text-2xl font-bold">7h 34m</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm">Sleep Score</span>
            <span className="bg-gray-100 text-xs px-2 py-1 rounded">Oura Ring</span>
          </div>
          <span className="text-3xl font-bold">85 <span className="text-base font-normal text-gray-400">/100</span></span>
          <span className="text-green-600 text-xs mt-1">▲ +5% <span className="text-gray-400">vs last week</span></span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm">HRV</span>
            <span className="bg-gray-100 text-xs px-2 py-1 rounded">Oura Ring</span>
          </div>
          <span className="text-3xl font-bold">42 <span className="text-base font-normal text-gray-400">ms</span></span>
          <span className="text-red-500 text-xs mt-1">▼ -3% <span className="text-gray-400">vs last week</span></span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm">Weekly Distance</span>
            <span className="bg-gray-100 text-xs px-2 py-1 rounded">Strava</span>
          </div>
          <span className="text-3xl font-bold">32.5 <span className="text-base font-normal text-gray-400">km</span></span>
          <span className="text-green-600 text-xs mt-1">▲ +8% <span className="text-gray-400">vs last week</span></span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm">Resting HR</span>
            <span className="bg-gray-100 text-xs px-2 py-1 rounded">Oura Ring</span>
          </div>
          <span className="text-3xl font-bold">58 <span className="text-base font-normal text-gray-400">bpm</span></span>
          <span className="text-red-500 text-xs mt-1">▼ -2% <span className="text-gray-400">vs last week</span></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Sleep & HRV Trends</h2>
          <div className="h-48 flex items-center justify-center text-gray-400">[Trend Chart Placeholder]</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Training Load</h2>
          <div className="h-48 flex items-center justify-center text-gray-400">[Training Load Chart Placeholder]</div>
        </div>
      </div>
    </div>
  );
} 