import React, { useState } from 'react';
import SearchBar from '../Searchbar/Searchbar.jsx'; // Asegúrate de que la ruta de importación sea correcta
import './Catalogo.css';
import data_product from '../../Assets/data_products.js';
import Item from '../Item/Item.jsx';

const Catalogo = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(data_product.map((item) => item.type))]; // Asumiendo que 'type' es tu categoría

  const filteredProducts = data_product.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      (!selectedCategory || item.type === selectedCategory)
    );
  });

  return (
    <div className="Catalogo">
      <h1>Nuestros Productos</h1>
      <hr />
      <SearchBar 
        onKeywordChange={setSearchKeyword}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      <div className="Catalogo-item">
        {filteredProducts.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Catalogo;
