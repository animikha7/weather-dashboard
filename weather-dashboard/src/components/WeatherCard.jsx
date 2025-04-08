export default function WeatherCard({ data }) {
    const { name, main, weather, wind } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  
    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow-xl text-center space-y-2 transition-all duration-300">
        <h2 className="text-2xl font-bold">{name}</h2>
        <img src={iconUrl} alt={weather[0].description} className="mx-auto" />
        <p className="text-lg">{weather[0].main}</p>
        <p>🌡️ {main.temp}°C</p>
        <p>💧 Humidity: {main.humidity}%</p>
        <p>💨 Wind: {wind.speed} km/h</p>
      </div>
    );
  }
  