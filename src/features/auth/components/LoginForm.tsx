import {
  Shield,
  Wrench,
  Database,
  FileText,
  Car,
  Settings,
} from 'lucide-react';
import { Link } from 'react-router';

export default function LoginForm() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fff200]">
      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold tracking-wider text-black md:text-8xl">
            COCKPIT
          </h1>
        </div>

        {/* App Icons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <div className="rounded-lg bg-red-600 p-3 shadow-lg">
            <Shield className="h-4 w-4 text-white md:h-8 md:w-8" />
          </div>
          <div className="rounded-lg bg-red-600 p-3 shadow-lg">
            <Wrench className="h-4 w-4 text-white md:h-8 md:w-8" />
          </div>
          <div className="rounded-lg bg-red-600 p-3 shadow-lg">
            <Database className="h-4 w-4 text-white md:h-8 md:w-8" />
          </div>
          <div className="rounded-lg bg-red-600 p-3 shadow-lg">
            <FileText className="h-4 w-4 text-white md:h-8 md:w-8" />
          </div>
          <div className="rounded-lg bg-red-600 p-3 shadow-lg">
            <Car className="h-4 w-4 text-white md:h-8 md:w-8" />
          </div>
          <div className="rounded-lg bg-red-600 p-3 shadow-lg">
            <Settings className="h-4 w-4 text-white md:h-8 md:w-8" />
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded border-none bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                className="w-full rounded border-none bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <Link
              to="/menu"
              className="flex w-full justify-center rounded bg-black px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-600 focus:outline-none"
            >
              Sign in
            </Link>
          </div>

          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-black hover:underline"
              onClick={(e) => {
                e.preventDefault();
                alert('Password reset functionality would go here');
              }}
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Red Bar */}
      <div className="h-16 bg-red-600"></div>
    </div>
  );
}
