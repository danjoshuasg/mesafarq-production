import React from 'react';
import './Searchbar.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta que tu componente

const Searchbar = ({ onKeywordChange, onCategoryChange, categories }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => onKeywordChange(e.target.value)}
      />
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Todas las categorías</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Searchbar;
