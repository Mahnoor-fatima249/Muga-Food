import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

export default function Menu() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch foods from backend
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('/api/foods')
        setFoods(response.data)
      } catch (err) {
        console.error('Failed to fetch foods:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchFoods()
  }, [])

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    setSearch('') // Reset search when category changes
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredFoods = foods.length > 0 ? foods.filter(food => {
    const matchesCategory = category === 'all' || food.category === category
    const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  }) : []

  return (
    <div>
      <Header />
      <section className="py-24 md:py-32 bg-light">
        <div className="container mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Menu</h2>
            <p className="text-gray-600 text-lg">
              Browse our delicious selection of dishes.
            </p>
          </div>

          {/* Category Filters */}
          <div className="grid grid-cols-3 gap-2 mb-8">
            <button
              onClick={() => handleCategoryChange('all')}
              className={category === 'all' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary py-2 rounded'}
            >
              All
            </button>
            <button
              onClick={() => handleCategoryChange('main')}
              className={category === 'main' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary py-2 rounded'}
            >
              Main
            </button>
            <button
              onClick={() => handleCategoryChange('dessert')}
              className={category === 'dessert' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary py-2 rounded'}
            >
              Dessert
            </button>
          </div>

          {/* Search bar */}
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 5.3a1 1 0 0 1 1.68-1.18l6.88 2.12a1 1 0 0 1 .32 1.83l-6.88 2.12a1 1 0 0 1-1.18-.32zM18 6a1 1 0 0 0-2 0 1 1 0 0 0 0 2h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H18zM7 6a1 1 0 0 0-2 0 1 1 0 0 0 0 2H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H7zM12 18a1 1 0 0 1 0-2 1 1 0 0 1 0 2zm0-12a1 1 0 0 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            <input
              type="text"
              placeholder="Search foods..."
              onChange={(e) => handleSearchChange(e)}
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 mx-auto border-b-primary"></div>
                <p className="mt-4 text-gray-600">Loading menu...</p>
              </div>
            ) : filteredFoods.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600">No foods found matching your criteria.</p>
              </div>
            ) : filteredFoods.map((food) => (
              <div key={food._id} className="bg-white rounded-2xl overflow-shadow p-6 hover:shadow-lg transition-shadow">
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
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}