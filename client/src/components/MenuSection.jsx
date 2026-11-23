export default function MenuSection() {
  return (
    <section className="py-24 md:py-32 bg-light">
      <div className="container mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Menu</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            We offer a wide variety of dishes from local and international cuisines.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Food Card 1 */}
          <div className="bg-white rounded-2xl overflow-shadow p-6 hover:shadow-lg transition-shadow">
            <div className="h-48 w-full rounded-xl mb-4" style={{ backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <span className="text-xl">🍕</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Margherita Pizza</h3>
            <p className="text-gray-500 text-sm mb-3">Classic Italian pizza with fresh mozzarella and tomatoes</p>
            <div className="flex justify-between items-baseline">
              <span className="text-primary font-bold text-lg">$12.99</span>
              <button
                className="text-primary hover:text-secondary transition-colors text-sm"
                onClick={() => alert('Added to cart')}
              >
                +
              </button>
            </div>
          </div>
          {/* Food Card 2 */}
          <div className="bg-white rounded-2xl overflow-shadow p-6 hover:shadow-lg transition-shadow">
            <div className="h-48 w-full rounded-xl mb-4" style={{ backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <span className="text-xl">🍣</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sushi Roll</h3>
            <p className="text-gray-500 text-sm mb-3">Fresh fish and vegetables with rice</p>
            <div className="flex justify-between items-baseline">
              <span className="text-primary font-bold text-lg">$14.99</span>
              <button
                className="text-primary hover:text-secondary transition-colors text-sm"
                onClick={() => alert('Added to cart')}
              >
                +
              </button>
            </div>
          </div>
          {/* Food Card 3 */}
          <div className="bg-white rounded-2xl overflow-shadow p-6 hover:shadow-lg transition-shadow">
            <div className="h-48 w-full rounded-xl mb-4" style={{ backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <span className="text-xl">🍝</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Spaghetti Carbonara</h3>
            <p className="text-gray-500 text-sm mb-3">Creamy pasta with egg, cheese, and pancetta</p>
            <div className="flex justify-between items-baseline">
              <span className="text-primary font-bold text-lg">$13.99</span>
              <button
                className="text-primary hover:text-secondary transition-colors text-sm"
                onClick={() => alert('Added to cart')}
              >
                +
              </button>
            </div>
          </div>
          {/* Food Card 4 */}
          <div className="bg-white rounded-2xl overflow-shadow p-6 hover:shadow-lg transition-shadow">
            <div className="h-48 w-full rounded-xl mb-4" style={{ backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <span className="text-xl">🍱</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Bento Box</h3>
            <p className="text-gray-500 text-sm mb-3">Japanese meal with rice, fish, and vegetables</p>
            <div className="flex justify-between items-baseline">
              <span className="text-primary font-bold text-lg">$15.99</span>
              <button
                className="text-primary hover:text-secondary transition-colors text-sm"
                onClick={() => alert('Added to cart')}
              >
                +
              </button>
            </div>
          </div>
          {/* Food Card 5 */}
          <div className="bg-white rounded-2xl overflow-shadow p-6 hover:shadow-lg transition-shadow">
            <div className="h-48 w-full rounded-xl mb-4" style={{ backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <span className="text-xl">🍔</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Cheeseburger</h3>
            <p className="text-gray-500 text-sm mb-3">Quarter pounder with cheese, lettuce, and tomato</p>
            <div className="flex justify-between items-baseline">
              <span className="text-primary font-bold text-lg">$11.99</span>
              <button
                className="text-primary hover:text-secondary transition-colors text-sm"
                onClick={() => alert('Added to cart')}
              >
                +
              </button>
            </div>
          </div>
          {/* Food Card 6 */}
          <div className="bg-white rounded-2xl overflow-shadow p-6 hover:shadow-lg transition-shadow">
            <div className="h-48 w-full rounded-xl mb-4" style={{ backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              <span className="text-xl">🍨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Ice Cream</h3>
            <p className="text-gray-500 text-sm mb-3">Assorted flavors and toppings</p>
            <div className="flex justify-between items-baseline">
              <span className="text-primary font-bold text-lg">$4.99</span>
              <button
                className="text-primary hover:text-secondary transition-colors text-sm"
                onClick={() => alert('Added to cart')}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}