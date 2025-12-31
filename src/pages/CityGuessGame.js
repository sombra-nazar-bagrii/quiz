import React, { useState } from 'react';
import './CityGuessGame.css';

const CITIES_DATA = [
  { population: "2,9", name: "Київ", points: 1, hint: "Столиця України" },
  { population: "1,44", name: "Харків", points: 1, hint: "Перша столиця УРСР" },
  { population: "1,02", name: "Одеса", points: 2, hint: "Перлина біля моря" },
  { population: "990", name: "Дніпро", points: 2, hint: "Космічна столиця" },
  { population: "908", name: "Донецьк", points: 3, hint: "Місто мільйона троянд" },
  { population: "731", name: "Запоріжжя", points: 3, hint: "Острів Хортиця" },
  { population: "724", name: "Львів", points: 4, hint: "Культурна столиця" },
  { population: "619", name: "Кривий Ріг", points: 4, hint: "Найдовше місто" },
  { population: "480", name: "Миколаїв", points: 5, hint: "Місто корабелів" },
  { population: "436", name: "Маріуполь", points: 5, hint: "Місто металургів" },
  { population: "403", name: "Севастополь", points: 6, hint: "Місто-герой" },
  { population: "401", name: "Луганськ", points: 6, hint: "Східні ворота" },
  { population: "370", name: "Вінниця", points: 7, hint: "Фонтан Рошен" },
  { population: "342", name: "Сімферополь", points: 7, hint: "Ворота Криму" },
  { population: "286", name: "Херсон", points: 8, hint: "Місто кавунів" },
  { population: "286", name: "Чернігів", points: 8, hint: "Місто легенд" },
];

const CityGuessGame = () => {
  const [revealedCities, setRevealedCities] = useState([]);
  const [usedHints, setUsedHints] = useState([]);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const matchedCity = CITIES_DATA.find(
      (city) =>
        city.name.toLowerCase() === value.toLowerCase() &&
        !revealedCities.includes(city.name)
    );

    if (matchedCity) {
      setRevealedCities((prev) => [...prev, matchedCity.name]);
      setInputValue("");
    }
  };

  const handleHintClick = (cityName) => {
    if (!usedHints.includes(cityName)) {
      setUsedHints((prev) => [...prev, cityName]);
    }
    setActiveTooltip(activeTooltip === cityName ? null : cityName);
  };

  return (
    <div className="city-game-container">
      <div className="game-content">
        <h1 className="game-title">Вгадай місто за населенням</h1>

        <div className="input-section">
          <input
            type="text"
            className="city-input"
            placeholder="Введіть назву міста..."
            value={inputValue}
            onChange={handleInputChange}
            autoFocus
          />
        </div>

        <table className="game-table">
          <thead>
            <tr>
              <th>Населення (млн)</th>
              <th>Місто</th>
              <th>Бали</th>
            </tr>
          </thead>
          <tbody>
            {CITIES_DATA.map((city, index) => {
              const isRevealed = revealedCities.includes(city.name);
              const isHintUsed = usedHints.includes(city.name);
              const points = isHintUsed ? Math.ceil(city.points / 2) : city.points;

              return (
                <tr key={index}>
                  <td>
                    <div className="population-wrapper">
                      {city.population}
                      <button
                        className="hint-button"
                        onClick={() => handleHintClick(city.name)}
                        title="Show hint"
                      >
                        💡
                      </button>
                      {activeTooltip === city.name && (
                        <div className="tooltip">{city.hint}</div>
                      )}
                    </div>
                  </td>
                  <td className={`city-cell ${isRevealed ? 'city-revealed' : 'city-hidden'}`}>
                    {isRevealed ? city.name : '???'}
                  </td>
                  <td>{points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CityGuessGame;

