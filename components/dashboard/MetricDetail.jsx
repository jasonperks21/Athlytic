import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

// Lazy load the chart components to reduce initial bundle size
const LineChart = dynamic(() => import('recharts').then(mod => ({ default: mod.LineChart })), { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => ({ default: mod.Line })), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.XAxis })), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.YAxis })), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => ({ default: mod.CartesianGrid })), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => ({ default: mod.Tooltip })), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => ({ default: mod.ResponsiveContainer })), { ssr: false });

/**
 * MetricDetail component displays detailed information and a trend chart for a health metric.
 * @param {Object} props
 * @param {Object} props.metric - The health metric object.
 */
function MetricDetail({ metric }) {
  const getTrendIcon = () => {
    if (metric.trendType === 'up') {
      return <TrendingUp className="w-5 h-5 text-green-500" />;
    } else if (metric.trendType === 'down') {
      return <TrendingDown className="w-5 h-5 text-red-500" />;
    }
    return <Minus className="w-5 h-5 text-gray-400" />;
  };

  const getTrendColor = () => {
    if (metric.trendType === 'up') return 'text-green-600';
    if (metric.trendType === 'down') return 'text-red-600';
    return 'text-gray-500';
  };

  // Calculate statistics only once
  const stats = React.useMemo(() => {
    const values = metric.data.map(d => d.value);
    return {
      peak: Math.max(...values),
      average: Math.round(values.reduce((sum, val) => sum + val, 0) / values.length),
      lowest: Math.min(...values)
    };
  }, [metric.data]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{metric.label}</h3>
          <p className="text-sm text-gray-500 mt-1">From {metric.source}</p>
        </div>
        <div className="text-right">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
            <span className="text-lg text-gray-500">{metric.unit}</span>
          </div>
          <div className="flex items-center justify-end mt-2 space-x-1">
            {getTrendIcon()}
            <span className={`text-sm font-medium ${getTrendColor()}`}>
              {metric.trend} this week
            </span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metric.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              labelFormatter={(value) => new Date(value).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
              formatter={(value) => [`${value} ${metric.unit}`, metric.label]}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">{stats.peak}</p>
          <p className="text-sm text-gray-500">Peak</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">{stats.average}</p>
          <p className="text-sm text-gray-500">Average</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">{stats.lowest}</p>
          <p className="text-sm text-gray-500">Lowest</p>
        </div>
      </div>
    </div>
  );
}

MetricDetail.propTypes = {
  metric: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    trend: PropTypes.string.isRequired,
    trendType: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MetricDetail; 