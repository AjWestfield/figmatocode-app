export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24">
      <div className="w-full max-w-3xl p-6 sm:p-12 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <h1 className="text-3xl font-bold mb-4 text-center">Figma to Code</h1>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
          Create beautiful iOS apps with AI-generated designs and Swift code
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="ios-button-primary">
            Get Started
          </button>
          <button className="ios-button-outline">
            Learn More
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-1">Design with AI</h3>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">Generate UI designs from prompts</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-1">Auto Code</h3>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">Convert designs to Swift automatically</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-1">Customize</h3>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">Edit and refine your designs</p>
          </div>
        </div>
      </div>
    </main>
  );
}
