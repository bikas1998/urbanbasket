import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
export function CartPage() {
  const { cart, clearCart, removeFromCart, updateQuantity, totalPrice } =
    useCart();
  const items = Object.values(cart);

  if (items.length === 0)
    return (
      <main className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="mt-4">Add some products from the products page.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-4 py-2 bg-slate-800 hover:bg-slate-600 text-white rounded"
        >
          Browse Products
        </Link>
      </main>
    );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border rounded p-4 bg-white"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
            <div className="flex-1">
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-slate-600">Price: ₹{item.price}</div>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 cursor-pointer py-1 border rounded"
                >
                  -
                </button>
                <div className="px-3 py-1 border rounded">{item.quantity}</div>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 cursor-pointer py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="font-semibold">
                ₹{parseFloat(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm cursor-pointer px-3 py-1 border rounded text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white border rounded flex items-center justify-between">
        <div className="text-lg">Total</div>
        <div className="text-xl font-semibold">
          ₹{parseFloat(totalPrice).toFixed(2)}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => clearCart()}
          className="mt-6 px-6 py-3 bg-slate-800 text-white rounded hover:bg-slate-600 cursor-pointer"
        >
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}
