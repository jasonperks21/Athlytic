'use client';
import React from 'react';
import MetricDetail from '../../../components/dashboard/MetricDetail';
import { Activity, Download, Filter } from 'lucide-react';

// Mock health metrics data (copied from app/dashboard/page.js)
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

export default function MetricsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <Activity className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Health Metrics</h2>
            <p className="text-gray-600 mt-1">Detailed view of your health and performance data</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {healthMetrics.map((metric) => (
          <MetricDetail key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
} 