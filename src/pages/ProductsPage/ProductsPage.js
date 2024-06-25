import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductsPage.css';

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('');

  const sampleProducts = [
    { id: 1, name: 'Fortune Suji', weight: '500 g', price: 35, originalPrice: 39, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719329216/fortune-suji_l8euwo.webp' },
    { id: 2, name: 'Parle-G', weight: '250 g', price: 25, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719329356/parle_5_1_xr5eom.png' },
    { id: 3, name: 'Cat Food', weight: '1 kg', price: 192, originalPrice: 199, discount: 3, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719329476/whiskas_gfpoee.avif' },
    { id: 4, name: 'Whisper Ultra-XL', weight: '15 piece', price: 160, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719329521/295813_15-whisper-choice-ultra-sanitary-pads-with-fresh-flower-scent-protects-from-stains-xl_eugcec.webp' },
    { id: 5, name: 'Tata Agni Tea', weight: '250 g', price: 55, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719329579/tata_agni_wyuhbb.jpg' },
    { id: 6, name: 'Fortune Oil', weight: '1 ltr', price: 121, originalPrice: 137, discount: 11, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719329660/fortune-oil_half1r.webp' },
    { id: 7, name: 'Duracell', weight: 'Pack of 4', price: 167, originalPrice: 190, discount: 12, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719329758/duracell_epxues.webp' },
    { id: 8, name: 'Coriander Leaves', weight: '150 g', price: 51, originalPrice: 64, discount: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719330049/63e13864-439e-43cb-bafb-e317c10bc452_hutgou.webp' },
    { id: 9, name: 'Britannia White Bread', weight: '350 g', price: 38, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719330198/77eeb22f-9060-4bdf-b644-257dfd7787e9_v6dtba.webp' },
    { id: 10, name: 'Lays Cream & Onion', weight: '50 g', price: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719330624/5f0841c2-ad9e-48c3-8177-ef0148f5a74a_feer1g.webp' },
    { id: 11, name: 'iD Malabar Parota', weight: '500 g', price: 80, originalPrice: 90, discount: 2, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719330811/947de279-9ff0-4d73-ab2c-a4d21922afca_zmaxcj.webp' },
    { id: 12, name: 'Satyam Rawa', weight: '500 g', price: 38, originalPrice: 39, discount: 2, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719330863/3e3a5ab5-74b9-44f9-bc42-bd494eb575e6_q6mgtp.webp' },
    { id: 13, name: 'Nescafe Classic', weight: '45 g', price: 185, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719330988/723f6584-6e5b-44fc-a62d-9ee10415de6f_atv8kt.webp' },
    { id: 14, name: 'Coca-Cola', weight: '750 ml', price: 45, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331024/f64aa80e-f2d0-4420-911b-d2b57d57d690_dmjgxy.webp' },
    { id: 15, name: 'Sprite', weight: '750 ml', price: 45, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331085/45201a92-4f5c-46af-b113-6a9db79ccb3f_q2dyse.webp' },
    { id: 16, name: 'Colgate Toothpaste', weight: '200 g', price: 131, originalPrice: 135, discount: 2, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331166/2022136b-556c-4ca0-8a0a-beba429df753_kcjdda.webp' },
    { id: 17, name: 'Cauliflower', weight: '1 pc (Approx. 400g - 600g)', price: 45, originalPrice: 56, discount: 19, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331289/af020da0-7869-478d-ae7e-8e9912435c39_xj3x9b.webp' },
    { id: 18, name: 'Chings Dark Soy Sauce', weight: '210 g', price: 60, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331326/7681cc7f-bac3-432f-b1aa-a5e171041dda_l8cgzb.webp' },
    { id: 19, name: 'Lemon', weight: '250 g', price: 56, originalPrice: 70, discount: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331421/5850a333-545b-46de-9d62-3858b59afabc_ma5sha.webp' },
    { id: 20, name: 'Kitkat Minis', weight: '126 g', price: 120, originalPrice: 149, discount: 19, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331501/adf2be8b-0e00-4066-b545-3c2c07e3a5df_fuhgcq.webp' },
    { id: 21, name: 'Apple', weight: '1 kg', price: 150, originalPrice: 200, discount: 25, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331539/e923ad8f-92ee-4a73-ba87-04f5c55a7792_t6nt4z.webp' },
    { id: 22, name: 'Banana', weight: '1 kg', price: 50, originalPrice: 60, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331573/4f93e761-4e02-48d0-8e95-d4fb64dc2b26_ontqnw.webp' },
    { id: 23, name: 'Orange', weight: '1 kg', price: 120, originalPrice: 140, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331634/fc72d59b-9aab-4fe3-a8b7-20b27c7292cf_jdnkur.webp' },
    { id: 24, name: 'Grapes', weight: '500 g', price: 90, originalPrice: 100, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331668/0cbeabe7-310c-425a-ab79-51a091d03d8c_kwzwpl.webp' },
    { id: 25, name: 'Mango', weight: '1 kg', price: 200, originalPrice: 250, discount: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331763/5e3c24f6-7ad5-4b4d-948c-6d87cb5c3bed_yodaww.webp' },
    { id: 26, name: 'Pineapple', weight: '1 piece', price: 80, originalPrice: 100, discount: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331790/87920d83-35e2-47f8-8ef2-685fc4a9b7ea_ioxfg7.webp' },
    { id: 27, name: 'Strawberry', weight: '250 g', price: 150, originalPrice: 180, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331886/ebd4deb64c74e2f1246626d5a290274d_iyqeez.png' },
    { id: 28, name: 'Blueberry', weight: '200 g', price: 200, originalPrice: 220, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331932/5480ec102c8fa7e92ea61bd219a20494_emly6w.jpg' },
    { id: 29, name: 'Watermelon', weight: '1 piece', price: 60, originalPrice: 80, discount: 25, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331964/53fe7ec1-340d-4d13-a374-02536082dd0f_uvb3vs.webp' },
    { id: 30, name: 'Papaya', weight: '1 piece', price: 45, originalPrice: 50, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719331995/e2c2939f-b7c1-43ab-a2af-b5e439e225d5_p7tt2k.webp' },
    { id: 31, name: 'Amul Milk', weight: '1 liter', price: 60, originalPrice: 70, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332188/26ae6bac-124d-4bd2-aac8-1f6c4cd5b339_dqyxho.webp' },
    { id: 32, name: 'Amul Butter', weight: '500 g', price: 250, originalPrice: 300, discount: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332231/e9526a7d-9688-4e92-886f-cc861eb70100_pqfzax.webp' },
    { id: 33, name: 'Amul Cheese', weight: '250 g', price: 200, originalPrice: 220, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332326/4f83c417-d43e-4b6d-b74c-c9e1fba9e04e_yowinf.webp' },
    { id: 34, name: 'Epigamia Yogurt', weight: '500 g', price: 80, originalPrice: 100, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332322/3c8ccfb9-fbda-4c01-80ff-0eee36941fcf_hvz1ea.webp' },
    { id: 35, name: 'Amul Paneer', weight: '250 g', price: 120, originalPrice: 140, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332330/3c4fabe6-d20a-433d-b035-d045e9552fd6_ks9auc.webp' },
    { id: 36, name: 'Amul Cream', weight: '200 ml', price: 70, originalPrice: 80, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332473/f4a35e11-313c-4cba-aba0-770c645456e0_xfui3p.webp' },
    { id: 37, name: 'Amul Ghee', weight: '500 g', price: 450, originalPrice: 500, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332478/fe6ab311-7e15-4045-ba42-9eda381cb989_wiqs2s.webp' },
    { id: 38, name: 'Nestle Everyday', weight: '1 kg', price: 400, originalPrice: 450, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332517/d734bdb4-55bc-4202-b05f-7a4d405ae314_sqjpfj.webp' },
    { id: 39, name: 'Amul Masti Dahi', weight: '1 kg', price: 50, originalPrice: 60, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332521/026ac1de-412f-4ea9-b7f8-6171b16005d0_upxy0v.webp' },
    { id: 40, name: 'Amul Masti Chaas', weight: '1 liter', price: 40, originalPrice: 50, discount: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719332526/86773a46-52fc-4284-bd95-efa4068fe336_t4nftx.webp' },
    { id: 41, name: 'White Bread', weight: '500 g', price: 40, originalPrice: 50, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334563/034cffa8-3b61-4ef3-a3e8-8042cfa86c40_gp2hr4.webp' },
    { id: 42, name: 'English Bun', weight: '250 g', price: 30, originalPrice: 40, discount: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334607/92f39973-22bf-4989-b7a3-da9abc86bfe2_pfdezx.webp' },
    { id: 43, name: 'Chocochip Cake', weight: '1 kg', price: 500, originalPrice: 600, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334646/4038ee69-af58-4eb2-b53e-a64bd009bd67_f1gf0g.webp' },
    { id: 44, name: 'Chocolate Cookies', weight: '500 g', price: 150, originalPrice: 180, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334795/9c882bef-bb86-45d6-9bd4-4b17c1f4911b_chtaez.webp' },
    { id: 45, name: 'Butter Croissant', weight: '200 g', price: 100, originalPrice: 120, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334800/d7d8fa30-66f6-4981-b05b-167cfd698caa_jfgdtn.webp' },
    { id: 46, name: 'Muffin', weight: '300 g', price: 200, originalPrice: 220, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334807/1d310247-731f-4604-8ac2-b42230a6f20c_whktf1.webp' },
    { id: 47, name: 'Doughnut', weight: '150 g', price: 80, originalPrice: 100, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334772/assorted-pile-of-colorful-delicious-donut-isolated-on-a-transparent-background-png_qimyiy.webp' },
    { id: 48, name: 'Pastry', weight: '200 g', price: 120, originalPrice: 150, discount: 20, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334823/yummy-mango-pastry_qaffud.png' },
    { id: 49, name: 'Bagel', weight: '100 g', price: 50, originalPrice: 60, discount: 10, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334832/pngtree-bagels-cutout-png-file-png-image_9193142_wzxca8.png' },
    { id: 50, name: 'Brownie', weight: '250 g', price: 200, originalPrice: 250, discount: 15, image: 'https://res.cloudinary.com/dplera1gb/image/upload/v1719334836/ed77c055-290e-49d6-926c-d023f0ed78ae_a8cqnw.webp' }
  ];

  const sortProducts = (products, option) => {
    switch (option) {
      case 'price-high-low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'price-low-high':
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = sortProducts(sampleProducts, sortOption);

  return (
    <>
      <Header />
      <div className="products-page">
        <h1 className="products-title">All Products</h1>
        <div className="filter-container">
          <select className="filter-dropdown" onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
        <div className="products-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
