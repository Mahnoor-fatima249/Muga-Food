export default function FoodCard({ food }) {
  return (
    <div className="bg-white rounded-2xl overflow-shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="h-48 w-full rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: '#eee' }}>
        <span className="text-xl">{food.image || '🍽️'}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{food.name}</h3>
      <p className="text-gray-500 text-sm mb-3">{food.description}</p>
      <div className="flex justify-between items-baseline">
        <span className="text-primary font-bold text-lg">${food.price}</span>
        <button
          className="text-primary hover:text-secondary transition-colors text-sm"
          onClick={() => alert('Add to order')}
        >
          +
        </button>
      </div>
    </div>
  )
}