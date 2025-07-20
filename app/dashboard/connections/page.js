import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";
import {
  CheckCircle,
  Smartphone,
  Link2,
  Plus,
  Activity,
  Apple,
  Gem,
  Link,
  X,
  RefreshCw,
} from "lucide-react";

const mockApps = [
  {
    name: "Strava",
    icon: Activity,
    lastSync: "2 hours ago",
    connected: true,
    data: ["Activities", "Heart Rate", "Distance", "Pace"],
    status: "Connected",
  },
  {
    name: "Oura Ring",
    icon: Gem,
    lastSync: "30 minutes ago",
    connected: true,
    data: ["Sleep Score", "HRV", "Temperature", "Readiness"],
    status: "Connected",
  },
  {
    name: "MyFitnessPal",
    icon: Apple,
    lastSync: null,
    connected: false,
    data: ["Calories", "Macros", "Water Intake", "Weight"],
    status: "Not connected",
  },
];

function SummaryCard({ title, value, icon: Icon, className }) {
  // Determine color classes based on className prop
  let gradient = "";
  let border = "";
  let iconBg = "";
  let titleText = "";
  let valueText = "";

  if (className?.includes("green")) {
    gradient = "bg-gradient-to-r from-green-50 to-emerald-50";
    border = "border-green-200";
    iconBg = "bg-green-100";
    titleText = "text-green-600";
    valueText = "text-green-700";
  } else if (className?.includes("blue")) {
    gradient = "bg-gradient-to-r from-blue-50 to-cyan-50";
    border = "border-blue-200";
    iconBg = "bg-blue-100";
    titleText = "text-blue-600";
    valueText = "text-blue-700";
  } else if (className?.includes("purple")) {
    gradient = "bg-gradient-to-r from-purple-50 to-fuchsia-50";
    border = "border-purple-200";
    iconBg = "bg-purple-100";
    titleText = "text-purple-600";
    valueText = "text-purple-700";
  }

  return (
    <div className={`rounded-xl p-4 border ${gradient} ${border}`}>
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className={`text-sm font-medium ${titleText}`}>{title}</p>
          <p className={`text-2xl font-bold ${valueText}`}>{value}</p>
        </div>
      </div>
    </div>
  );
}

function AppConnectionCard({ app }) {
  const Icon = app.icon;
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
            <Icon className="w-7 h-7 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {app.connected ? `Last sync: ${app.lastSync}` : 'Not connected'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {app.connected ? (
            <>
              <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span className="text-xs font-medium">Connected</span>
              </div>
              <button
                className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                title="Disconnect"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Connect
            </button>
          )}
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Available Data:</h4>
        <div className="flex flex-wrap gap-2">
          {app.data.map((dataPoint, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded-full ${
                app.connected
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-gray-50 text-gray-500 border border-gray-200'
              }`}
            >
              {dataPoint}
            </span>
          ))}
        </div>
      </div>
      {app.connected && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Data sync status</span>
            <button className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 transition-colors">
              <RefreshCw className="w-4 h-4" />
              <span>Sync now</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function HelpSection() {
  return (
    <Card className="mt-8">
      <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="font-medium mb-1">Need help connecting your apps?</div>
          <div className="text-sm text-gray-500">Our step-by-step guides will walk you through connecting each fitness app to get the most accurate insights.</div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">View Guides</Button>
          <Button variant="secondary">Contact Support</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ConnectionsPage() {
  const connectedCount = mockApps.filter((a) => a.connected).length;
  const dataSources = mockApps.reduce((acc, a) => acc + a.data.length, 0);
  const availableCount = mockApps.length - connectedCount;

  return (
    <div className="space-y-6 px-8 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <Link className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">App Connections</h2>
            <p className="text-gray-600 mt-1">
              {connectedCount} of {mockApps.length} apps connected
            </p>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Integration</span>
        </button>
      </div>

      {/* Connection Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Smartphone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-green-600 font-medium">Connected Apps</p>
              <p className="text-2xl font-bold text-green-700">{connectedCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Link className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-blue-600 font-medium">Data Sources</p>
              <p className="text-2xl font-bold text-blue-700">
                {dataSources}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Plus className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-purple-600 font-medium">Available</p>
              <p className="text-2xl font-bold text-purple-700">{availableCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockApps.map((app) => (
          <AppConnectionCard key={app.name} app={app} />
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Need help connecting your apps?</h3>
        <p className="text-gray-600 mb-4">
          Our step-by-step guides will walk you through connecting each fitness app to get the most accurate insights.
        </p>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
            View Guides
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
} 