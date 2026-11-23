import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Order() {
  const [items, setItems] = useState([
    { id: 1, name: 'Margherita Pizza', price: 12.99, quantity: 1 },
    { id: 2, name: 'Sushi Roll', price: 14.99, quantity: 1 },
  ])
  const [total, setTotal] = useState(27.98)
  const [orderStatus, setOrderStatus] = useState('pending')
  const [paymentMethod, setPaymentMethod] = useState('cash')

  const calculateTotal = () => {
    const sum = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    setTotal(sum)
    return sum
  }

  const handleAdd = (id) => {
    setItems(prev => {
      const item = prev.find(i => i.id === id)
      if (item) {
        item.quantity += 1
      }
      return [...prev]
    })
    setTotal(prev => prev + items.find(i => i.id === id)?.price ?? 0)
  }

  const handleRemove = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
    setTotal(prev => prev - items.find(i => i.id === id)?.price ?? 0)
  }

  const placeOrder = async () => {
    if (items.length === 0) {
      alert('Please add items to your order first')
      return
    }

    const orderData = {
      items: items.map(item => ({
        food: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount: calculateTotal(),
      paymentMethod: paymentMethod,
      deliveryAddress: '123 Main Street, City, Country',
    }

    try {
      const response = await axios.post('/api/orders', orderData)
      setOrderStatus(response.data.order.status)
      alert(`Order placed successfully! Order ID: ${response.data.order._id}`)
      // Reset order
      setItems([])
      setTotal(0)
      setPaymentMethod('cash')
    } catch (err) {
      alert('Failed to place order. Please try again.')
      console.error(err)
    }
  }

  return (
    <div>
      <Header />
      <section className="py-24 md:py-32 bg-light">
        <div className="container mx-auto px-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-primary mb-6">My Order</h2>
            <p className="text-gray-600 text-lg">
              Review your order before checkout.
            </p>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Order Items</h3>
            {items.length === 0 ? (
              <p className="text-gray-500 text-sm">No items added yet</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-gray-500">×{item.quantity}</span>
                    </div>
                    <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <h4 className="font-medium text-sm">Total</h4>
                  <h3 className="text-xl font-bold text-primary">${calculateTotal().toFixed(2)}</h3>
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div>
              <h4 className="font-bold text-primary mb-3">Payment Method</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod('cash')}
                    className="w-4 h-4 rounded border-gray-600 focus:ring-primary"
                  />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod('card')}
                    className="w-4 h-4 rounded border-gray-600 focus:ring-primary"
                  />
                  <span>Credit/Debit Card</span>
                </label>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">Delivery Address</h4>
              <p className="text-sm text-gray-600">
                123 Main Street, City, Country
              </p>
            </div>
          </div>

          {/* Order Tracking Section */}
          {orderStatus && orderStatus !== 'pending' && (
            <div className="bg-white rounded-2xl p-8 mb-12 shadow">
              <h3 className="text-2xl font-bold text-primary mb-6">Order Tracking</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span>Order Placed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">2</div>
                  <span>Confirmed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span>Preparing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">4</div>
                  <span>Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">5</div>
                  <span>Delivered</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Your order is currently: <span className="font-medium text-primary">{orderStatus}</span>
              </p>
            </div>
          )}

          {/* Checkout Button */}
          <button
            onClick={placeOrder}
            className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-colors mb-8"
            disabled={items.length === 0}
          >
            {items.length > 0 ? 'Place Order' : 'Add Items First'}
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}