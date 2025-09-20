export default function LoginPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to My App
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          This is a React application with React Router v7 setup. Navigate
          through the application to see the routing in action.
        </p>

        <div className="space-x-4">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Learn More
          </button>

          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
