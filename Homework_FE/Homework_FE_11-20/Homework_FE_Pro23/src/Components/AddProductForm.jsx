import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addProduct } from '../actions/productsActions';

function AddProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addProduct(formData));
      setFormData({
          name: '',
          description: '',
          price: ''
      });
};


  return (

    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Название товара" required />
    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Описание товара" required />
    <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Цена" required />
   
    <button type="submit">Добавить товар</button>
    </form>
    
  );
}

export default AddProductForm