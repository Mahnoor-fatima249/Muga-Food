import { useState } from 'react'
import Header from '../components/Header'

export default function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  })
  const [orders, setOrders] = useState([
    { id: 1, date: 'Nov 20, 2024', items: 2, total: '$27.98' },
    { id: 2, date: 'Nov 15, 2024', items: 1, total: '$14.99' },
  ])

  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="py-24 md:py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            {/* User Info Card */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow">
              <h2 className="text-2xl font-bold text-primary mb-4">My Profile</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 text-sm">Name</p>
                  <p className="text-lg font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="text-lg font-medium">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Orders History */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Order History</h2>
              {orders.length === 0 ? (
                <p className="text-gray-500 text-sm">No orders yet</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <span className="font-medium">{order.items} items</span>
                        <span className="text-primary font-bold">{order.total}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">Order placed on {order.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}