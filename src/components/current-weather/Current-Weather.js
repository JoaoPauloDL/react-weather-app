import "./Current-Weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Detalhes</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Sensação</span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Vento</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Umidade</span>
            <span className="parameter-value">54%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressão</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
