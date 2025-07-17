import Link from 'next/link';
import { Badge } from '../components/badge';
import { Separator } from '../components/separator';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-10 max-w-lg w-full">
        <Badge className="mb-4">Welcome to Athlytic</Badge>
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">Your Health & Performance Hub</h1>
        <p className="text-gray-600 mb-6 text-center">
          Track your workouts, monitor your health metrics, and gain AI-driven insights—all in one place.
        </p>
        <Separator className="my-4" />
        <Link href="/dashboards" className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-150">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
