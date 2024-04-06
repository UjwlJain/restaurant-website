import React, { useState } from 'react';
import './Menu.css';

// Import images
import Pizza from '../assets/Pizza.jpg';
import Burger from '../assets/Burger.jpg';
import Samosa from '../assets/Samosa.jpg';
import Pasta from '../assets/Pasta.jpg';
import Momos from '../assets/Momos.jpg';
import Noodles from '../assets/Noodles.jpg';
import Chaat from '../assets/Chaat.jpg';
import Vadapav from '../assets/Vadapav.jpg';
import Rolls from '../assets/Rolls.jpg';

import Dosa from '../assets/Dosa.jpg';
import Idli from '../assets/Idli.jpg';
import Meduvada from '../assets/Meduvada.jpg';
import Rasam from '../assets/Rasam.jpg';
import Utppam from '../assets/Utppam.jpg';

import Phulka from '../assets/Phulka.jpg';
import Naan from '../assets/Naan.jpg';
import Dal from '../assets/Dal.jpg';
import Makhani from '../assets/Makhani.jpg';
import Rice from '../assets/Rice.jpg';
import Paneer from '../assets/Paneer.jpg';
import Aloodopyaza from '../assets/Aloodopyaza.jpg';
import Mixveg from '../assets/Mixveg.jpg';
import Papad from '../assets/Papad.jpg';
import Dumaloo from '../assets/Dumaloo.jpg';

import Jalebi from '../assets/Jalebi.jpg';
import GJamun from '../assets/GJamun.jpg';
import Rasgulla from '../assets/Rasgulla.jpg';
import Barfi from '../assets/Barfi.jpg';
import Cake from '../assets/Cake.jpg';
import Kulfi from '../assets/Kulfi.jpg';
import Icecream from '../assets/Icecream.jpg';

import Shake from '../assets/Shake.jpg';
import Softdrinks from '../assets/Softdrinks.jpg';
import Lemonade from '../assets/Lemonade.jpg';
import Tea from '../assets/Tea.jpg';
import Water from '../assets/Water.jpg';
import Coffee from '../assets/Coffee.jpg';
import Curd from '../assets/Curd.jpg';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fast Food');
  const categories = ['Fast Food', 'South Indian', 'Full Course', 'Drinks', 'Desserts'];

  const foodItems = {
    'Fast Food': [
      { name: 'Pizza', image: Pizza , price: '120' },
      { name: 'Burger', image: Burger, price: '70' },
      { name: 'Samosa', image: Samosa, price: '12' },
      { name: 'Pasta', image: Pasta, price:'90' },
      { name: 'Momos', image: Momos, price: '50' },
      { name: 'Noodles', image: Noodles, price: '80' },
      { name: 'Chaat', image: Chaat, price: '60' },
      { name: 'Vadapav', image: Vadapav, price: '35' },
      { name: 'Rolls', image: Rolls, price: '50' }
    ],
    'South Indian': [
      { name: 'Dosa', image: Dosa , price: '60'},
      { name: 'Idli', image: Idli , price: '20'},
      { name: 'MeduVada', image: Meduvada , price: '25'},
      { name: 'Rasam Rice', image: Rasam , price: '80'},
      { name: 'Utppam', image: Utppam , price: '35'}
    ],
    'Full Course': [
      { name: 'Phulka', image: Phulka , price: '11'},
      { name: 'Butter Naan', image: Naan , price: '55'},
      { name: 'Dal', image: Dal , price: '24'},
      { name: 'Dal Makhni', image: Makhani , price: '52'},
      { name: 'Paneer Sabji', image: Paneer, price: '95'},
      { name: 'Mix Veg', image: Mixveg , price: '85'},
      { name: 'Aloo Do Pyaaza', image: Aloodopyaza , price: '105'},
      { name: 'Jeera Rice', image: Rice , price: '90'},
      { name: 'Papad', image: Papad , price: '15'},
      { name: 'Dum Aloo', image: Dumaloo , price: '85'},
     ],
    'Desserts': [
      { name: 'Jalebi', image: Jalebi , price: '12'},
      { name: 'Gulab Jamun', image: GJamun , price: '16'},
      { name: 'Rasgulla', image: Rasgulla , price: '15'},
      { name: 'Kaju Barfi', image: Barfi , price: '12'},
      { name: 'Ice-Cream', image: Icecream , price: '45'},
      { name: 'Kulfi-Faluda', image: Kulfi, price: '90'},
      { name: 'Cake', image: Cake , price: '220'},
      ],
    'Drinks': [
      { name: 'Milkshake', image: Shake , price: '70'},
      { name: 'Lemonade', image: Lemonade , price: '50'},
      { name: 'Soft Drinks', image: Softdrinks , price: '30'},
      { name: 'Plain Water', image: Water , price: '18'},
      { name: 'Coffee', image: Coffee , price: '35'},
      { name: 'Tea', image: Tea, price: '12'},
      { name: 'Curd', image: Curd , price: '25'},
      ]
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="menu-container">
      <div className="dropdown">
        <button className="dropbtn">{selectedCategory}</button>
        <div className="dropdown-content">
          {categories.map((category, index) => (
            <a key={index} onClick={() => handleCategoryChange(category)}>{category}</a>
          ))}
        </div>
      </div>
      <div className="food-cards">
        {foodItems[selectedCategory].map((item, index) => (
          <div key={index} className="food-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
