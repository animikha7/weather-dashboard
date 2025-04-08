import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { weather, loading, error, fetchWeather, history } = useWeather();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="transition-all duration-300 min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white">
        <div className="max-w-md mx-auto p-6">
          {/* Theme Toggle Button */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">🌤️ Weather Dashboard</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={fetchWeather} />

          {/* Recent Search History */}
          {history?.length > 0 && (
            <div className="mb-4">
              <p className="font-medium mb-1">Recent:</p>
              <div className="flex flex-wrap gap-2">
                {history.map((city, index) => (
                  <button
                    key={index}
                    onClick={() => fetchWeather(city)}
                    className="px-3 py-1 bg-blue-200 dark:bg-blue-700 rounded-md text-sm hover:opacity-80 transition-all duration-200"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Weather Content */}
          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {weather && !loading && !error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WeatherCard data={weather} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
