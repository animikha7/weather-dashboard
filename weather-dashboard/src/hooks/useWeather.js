import { useState } from "react";
import axios from "axios";

// Fetch your API key from .env
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null); // Optional: clear previous data

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Could not find the city or API failed.");
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
};
