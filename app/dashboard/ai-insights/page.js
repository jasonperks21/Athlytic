'use client';
import React, { useState } from 'react';
import { Zap, Clock, Heart, Apple, AlertTriangle, CheckCircle, Info, Brain } from 'lucide-react';

// Mock data for demonstration
const aiInsights = [
  {
    id: 1,
    title: 'Improve Sleep Quality',
    description: 'Your sleep quality has decreased by 10% this week. Consider adjusting your bedtime routine.',
    category: 'sleep',
    priority: 'high',
    confidence: 85,
    actionable: true,
    recommendations: [
      'Go to bed at the same time each night',
      'Avoid screens 1 hour before bed',
    ],
  },
  {
    id: 2,
    title: 'Increase Protein Intake',
    description: 'Your protein intake is below recommended levels for muscle recovery.',
    category: 'nutrition',
    priority: 'medium',
    confidence: 70,
    actionable: true,
    recommendations: [
      'Add a protein-rich snack after workouts',
    ],
  },
  {
    id: 3,
    title: 'Consistent Performance',
    description: 'Your performance metrics have remained stable over the past month.',
    category: 'performance',
    priority: 'low',
    confidence: 90,
    actionable: false,
    recommendations: [],
  },
  {
    id: 4,
    title: 'Faster Recovery',
    description: 'Your recovery time has improved by 15% compared to last week.',
    category: 'recovery',
    priority: 'medium',
    confidence: 80,
    actionable: true,
    recommendations: [
      'Continue current stretching routine',
    ],
  },
];

// InsightCard component (JSX only, no TypeScript)
const InsightCard = ({ insight }) => {
  const getCategoryIcon = () => {
    switch (insight.category) {
      case 'performance':
        return <Zap className="w-5 h-5" />;
      case 'recovery':
        return <Heart className="w-5 h-5" />;
      case 'nutrition':
        return <Apple className="w-5 h-5" />;
      case 'sleep':
        return <Clock className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getPriorityIcon = () => {
    switch (insight.priority) {
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <Info className="w-4 h-4 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = () => {
    switch (insight.priority) {
      case 'high':
        return 'bg-red-50 border-red-200';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200';
      case 'low':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getCategoryColor = () => {
    switch (insight.category) {
      case 'performance':
        return 'text-blue-600 bg-blue-50';
      case 'recovery':
        return 'text-red-600 bg-red-50';
      case 'nutrition':
        return 'text-green-600 bg-green-50';
      case 'sleep':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className={`rounded-xl p-6 border-2 ${getPriorityColor()} hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${getCategoryColor()}`}>{getCategoryIcon()}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              {getPriorityIcon()}
              <span className="text-sm text-gray-500 capitalize">{insight.priority} priority</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm font-medium text-gray-600">Confidence</span>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${insight.confidence}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">{insight.confidence}%</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">{insight.description}</p>

      {insight.actionable && insight.recommendations.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Recommendations:</h4>
          <ul className="space-y-1">
            {insight.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function AiInsightsPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Insights', count: aiInsights.length },
    { id: 'performance', label: 'Performance', count: aiInsights.filter(i => i.category === 'performance').length },
    { id: 'recovery', label: 'Recovery', count: aiInsights.filter(i => i.category === 'recovery').length },
    { id: 'sleep', label: 'Sleep', count: aiInsights.filter(i => i.category === 'sleep').length },
    { id: 'nutrition', label: 'Nutrition', count: aiInsights.filter(i => i.category === 'nutrition').length },
  ];

  const filteredInsights = filter === 'all' 
    ? aiInsights 
    : aiInsights.filter(insight => insight.category === filter);

  const priorityOrder = { high: 3, medium: 2, low: 1 };
  const sortedInsights = [...filteredInsights].sort((a, b) => 
    priorityOrder[b.priority] - priorityOrder[a.priority]
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <Brain className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Insights</h2>
            <p className="text-gray-600 mt-1">Personalized recommendations powered by machine learning</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
          <Zap className="w-4 h-4" />
          <span>Generate New Insights</span>
        </button>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Insights Grid */}
      <div className="space-y-4">
        {sortedInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>

      {filteredInsights.length === 0 && (
        <div className="text-center py-12">
          <Brain className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No insights found</h3>
          <p className="text-gray-500">Try adjusting your filters or connect more apps for better insights.</p>
        </div>
      )}
    </div>
  );
} 