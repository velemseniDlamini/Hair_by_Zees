import React from "react";
import { X } from "lucide-react";

const CartSidebar = ({ isOpen, onClose, cart, onRemove, onCheckout }) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/30 md:items-center">
      <div className="absolute inset-0" onClick={onClose} />
      <aside className="relative w-full max-w-md bg-white p-6 shadow-2xl overflow-y-auto h-full md:h-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X className="h-6 w-6" />
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is currently empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-start justify-between gap-4 p-4 border rounded-xl">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.quantity} x R{item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-pink-600 hover:text-pink-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>R{total.toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="mt-5 w-full rounded-xl bg-pink-600 px-4 py-3 text-white transition hover:bg-pink-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartSidebar;
