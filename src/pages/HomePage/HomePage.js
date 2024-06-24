import React, { useRef, useState, useEffect } from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import upArrow from '../../assets/images/up-arrow.JPG'; // Ensure this path is correct

const HomePage = () => {
  const [showScroll, setShowScroll] = useState(false);
  const fruitsSectionRef = useRef(null);
  const dairySectionRef = useRef(null);
  const bakerySectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const sampleProducts = [
    {
      id: 1,
      name: 'Fortune Suji',
      weight: '500 g',
      price: 35,
      originalPrice: 39,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Parle-G',
      weight: '250 g',
      price: 25,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Cat Food',
      weight: '1 kg',
      price: 192,
      originalPrice: 199,
      discount: 3,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Whisper Ultra XL',
      weight: '15 piece',
      price: 160,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Tata Agni Tea',
      weight: '250 g',
      price: 55,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Product 1',
      weight: '500 g',
      price: 50,
      originalPrice: 60,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Product 2',
      weight: '1 kg',
      price: 100,
      originalPrice: 120,
      discount: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Product 3',
      weight: '750 g',
      price: 75,
      originalPrice: 90,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Product 4',
      weight: '200 g',
      price: 20,
      originalPrice: 25,
      discount: 5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      name: 'Product 5',
      weight: '300 g',
      price: 30,
      originalPrice: 35,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 11,
      name: 'Product 6',
      weight: '400 g',
      price: 40,
      originalPrice: 45,
      discount: 5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 12,
      name: 'Product 7',
      weight: '600 g',
      price: 60,
      originalPrice: 70,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 13,
      name: 'Product 8',
      weight: '700 g',
      price: 70,
      originalPrice: 80,
      discount: 12,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 14,
      name: 'Product 9',
      weight: '800 g',
      price: 80,
      originalPrice: 90,
      discount: 11,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 15,
      name: 'Product 10',
      weight: '900 g',
      price: 90,
      originalPrice: 100,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 16,
      name: 'Product 11',
      weight: '1.2 kg',
      price: 120,
      originalPrice: 140,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 17,
      name: 'Product 12',
      weight: '1.5 kg',
      price: 150,
      originalPrice: 170,
      discount: 12,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 18,
      name: 'Product 13',
      weight: '2 kg',
      price: 200,
      originalPrice: 230,
      discount: 13,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 19,
      name: 'Product 14',
      weight: '250 g',
      price: 25,
      originalPrice: 30,
      discount: 8,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 20,
      name: 'Product 15',
      weight: '150 g',
      price: 15,
      originalPrice: 20,
      discount: 7,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const fruitProducts = [
    {
      id: 21,
      name: 'Apple',
      weight: '1 kg',
      price: 150,
      originalPrice: 200,
      discount: 25,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 22,
      name: 'Banana',
      weight: '1 kg',
      price: 50,
      originalPrice: 60,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 23,
      name: 'Orange',
      weight: '1 kg',
      price: 120,
      originalPrice: 140,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 24,
      name: 'Grapes',
      weight: '500 g',
      price: 90,
      originalPrice: 100,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 25,
      name: 'Mango',
      weight: '1 kg',
      price: 200,
      originalPrice: 250,
      discount: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 26,
      name: 'Pineapple',
      weight: '1 piece',
      price: 80,
      originalPrice: 100,
      discount: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 27,
      name: 'Strawberry',
      weight: '250 g',
      price: 150,
      originalPrice: 180,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 28,
      name: 'Blueberry',
      weight: '200 g',
      price: 200,
      originalPrice: 220,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 29,
      name: 'Watermelon',
      weight: '1 piece',
      price: 60,
      originalPrice: 80,
      discount: 25,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 30,
      name: 'Papaya',
      weight: '1 piece',
      price: 45,
      originalPrice: 50,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const dairyProducts = [
    {
      id: 31,
      name: 'Milk',
      weight: '1 liter',
      price: 60,
      originalPrice: 70,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 32,
      name: 'Butter',
      weight: '500 g',
      price: 250,
      originalPrice: 300,
      discount: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 33,
      name: 'Cheese',
      weight: '250 g',
      price: 200,
      originalPrice: 220,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 34,
      name: 'Yogurt',
      weight: '500 g',
      price: 80,
      originalPrice: 100,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 35,
      name: 'Paneer',
      weight: '250 g',
      price: 120,
      originalPrice: 140,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 36,
      name: 'Cream',
      weight: '200 ml',
      price: 70,
      originalPrice: 80,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 37,
      name: 'Ghee',
      weight: '500 g',
      price: 450,
      originalPrice: 500,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 38,
      name: 'Milk Powder',
      weight: '1 kg',
      price: 400,
      originalPrice: 450,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 39,
      name: 'Curd',
      weight: '1 kg',
      price: 50,
      originalPrice: 60,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 40,
      name: 'Buttermilk',
      weight: '1 liter',
      price: 40,
      originalPrice: 50,
      discount: 20,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const bakeryProducts = [
    {
      id: 41,
      name: 'Bread',
      weight: '500 g',
      price: 40,
      originalPrice: 50,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 42,
      name: 'Bun',
      weight: '250 g',
      price: 30,
      originalPrice: 40,
      discount: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 43,
      name: 'Cake',
      weight: '1 kg',
      price: 500,
      originalPrice: 600,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 44,
      name: 'Cookies',
      weight: '500 g',
      price: 150,
      originalPrice: 180,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 45,
      name: 'Croissant',
      weight: '200 g',
      price: 100,
      originalPrice: 120,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 46,
      name: 'Muffin',
      weight: '300 g',
      price: 200,
      originalPrice: 220,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 47,
      name: 'Doughnut',
      weight: '150 g',
      price: 80,
      originalPrice: 100,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 48,
      name: 'Pastry',
      weight: '200 g',
      price: 120,
      originalPrice: 150,
      discount: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 49,
      name: 'Bagel',
      weight: '100 g',
      price: 50,
      originalPrice: 60,
      discount: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 50,
      name: 'Brownie',
      weight: '250 g',
      price: 200,
      originalPrice: 250,
      discount: 15,
      image: 'https://via.placeholder.com/150',
    },
  ];



  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="hero-section">
          <h1>Welcome to QuickCart</h1>
          <p>Find the best groceries here!</p>
        </div>
        <div className="product-categories">
          <h2>Shop by Category</h2>
          <div className="categories">
            <div className="category" onClick={() => scrollToSection(fruitsSectionRef)}>Fruits</div>
            <div className="category" onClick={() => scrollToSection(dairySectionRef)}>Dairy</div>
            <div className="category" onClick={() => scrollToSection(bakerySectionRef)}>Bakery</div>
          </div>
        </div>
        <div className="product-list">
          <h2>Featured Products</h2>
          <div className="products">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div ref={fruitsSectionRef} className="product-list">
          <h2>Fruits</h2>
          <div className="products">
            {fruitProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div ref={dairySectionRef} className="product-list">
          <h2>Dairy</h2>
          <div className="products">
            {dairyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div ref={bakerySectionRef} className="product-list">
          <h2>Bakery</h2>
          <div className="products">
            {bakeryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        {showScroll && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <img src={upArrow} alt="Scroll to top" />
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;