import React, { useState } from 'react';
import './CategorySelection.css';

const CATEGORIES = [
  "Україна",
  "Укр. меми",
  "ГейМінг",
  "Кіно-доміно",
  "Географія",
  "Каша-малаша",
  "Ток шоу",
  "Возможно крімінал"
];

const CategorySelection = () => {
  const [usedCategories, setUsedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    if (!usedCategories.includes(category)) {
      setUsedCategories((prev) => [...prev, category]);
    }
  };

  return (
    <div className="page-background">
      <div className="content-wrapper">
        <h1 className="title">Обери категорію</h1>
        <div className="categories-grid">
          {CATEGORIES.map((category) => {
            const isUsed = usedCategories.includes(category);
            return (
              <button
                key={category}
                className={`category-card ${isUsed ? 'used' : ''}`}
                onClick={() => handleCategoryClick(category)}
                disabled={isUsed}
              >
                {category}
                {isUsed && <span className="used-badge">Used</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
