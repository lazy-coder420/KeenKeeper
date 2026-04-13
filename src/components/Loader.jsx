export const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="animate-spin">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
      <span className="ml-3 text-lg text-gray-600 dark:text-gray-300">
        Loading...
      </span>
    </div>
  );
};
