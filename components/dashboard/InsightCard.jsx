import React from 'react';
import { Zap, Clock, Heart, Apple, AlertTriangle, CheckCircle, Info } from 'lucide-react';

// AIInsight = {
//   id: string | number,
//   title: string,
//   description: string,
//   category: 'performance' | 'recovery' | 'nutrition' | 'sleep' | string,
//   priority: 'high' | 'medium' | 'low' | string,
//   confidence: number,
//   actionable: boolean,
//   recommendations: string[],
// }

export const InsightCard = ({ insight }) => {
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