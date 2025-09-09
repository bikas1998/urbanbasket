import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import UrbanBasket from "../assets/UrbanBasket.png";
export function Header() {
  const { totalItems } = useCart();
  return (
    <header className="bg-gray-200 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 py-1 flex items-center justify-between bg-slate-800">
        <Link
          to="/"
          className="text-xl font-semibold flex items-center text-neutral-100"
        >
          <img
            src={UrbanBasket}
            className="w-18 h-16"
            alt="ecommerce logo"
            srcset=""
          />
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-xl text-neutral-100">
            Products
          </Link>
          <Link
            to="/cart"
            className="relative px-3 py-2 text-stone-50 rounded-md flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
