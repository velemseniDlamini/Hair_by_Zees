import React, { useState } from "react";

const CheckoutPage = ({ cart, onRemove }) => {
const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = total;

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace with your business WhatsApp number in international format without '+' (e.g. 27712345678)
    const businessNumber = '27712345678';

    const itemsText = cart.map(item => `- ${item.name} x${item.quantity} : R${item.price}`).join('\n');

    const message = `New order from ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}, ${formData.city}, ${formData.zipCode}\n\nOrder details:\n${itemsText}\n\nTotal: R${grandTotal.toFixed(2)}\n\nPlease confirm and process this order.`;

    const url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Checkout</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Phone</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Address</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">City</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">ZIP Code</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b">
                    <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg responsive-img" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-pink-600 font-semibold text-sm">R{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Total</span>
                  <span className="text-pink-600">R{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
