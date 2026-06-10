import { useState } from "react";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import GalleryPage from "./pages/GalleryPage";
import './index.css'

import CheckoutPage from "./pages/CheckoutPage";
import type { CartItem, Product } from "./types";

export default function App() {
 const [activeLink, setActiveLink] = useState('Home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setShowCart(true);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setShowCart(false);
    setActiveLink('Checkout');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        activeLink={activeLink} 
        setActiveLink={setActiveLink}
        cartCount={cartCount}
        setShowCart={setShowCart}
      />
      
      <CartSidebar 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {activeLink === 'Home' && <HomePage onAddToCart={handleAddToCart} setActiveLink={setActiveLink} />}
      {activeLink === 'Shop' && <ShopPage onAddToCart={handleAddToCart} />}
      {activeLink === 'Gallery' && <GalleryPage />}
      {activeLink === 'Checkout' && <CheckoutPage cart={cart} onRemove={handleRemoveFromCart} />}

      <Footer setActiveLink={setActiveLink} />
    </div>
  );
}
