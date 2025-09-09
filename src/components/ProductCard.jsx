export function ProductCard({ product, onAdd }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white flex flex-col">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-medium text-sm mb-2">{product.title}</h3>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-lg font-semibold">₹{product.price}</div>
          <button
            onClick={onAdd}
            className="px-3 py-1 cursor-pointer bg-slate-700 text-white rounded hover:bg-slate-900 text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
