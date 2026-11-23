export default function OrderForm() {
  return (
    <section className="py-24 md:py-32 bg-light">
      <div className="container mx-auto px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">Place Your Order</h2>
          <p className="text-gray-600 text-lg">
            Select your favorite items and checkout securely.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left panel - Menu selection */}
          <div className="bg-white rounded-2xl p-6 h-full">
            <h3 className="text-xl font-bold text-primary mb-4">Select Items</h3>
            <div className="space-y-4">
              {/* Sample food items */}
              <div key="1" className="p-4 border rounded-lg hover:bg-primary/5 transition-colors">
                <h4 className="font-medium">Margherita Pizza</h4>
                <p className="text-sm text-gray-500">$12.99</p>
                <button
                  className="mt-2 w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-secondary transition-colors"
                >
                  Add to Order
                </button>
              </div>
              <div key="2" className="p-4 border rounded-lg hover:bg-primary/5 transition-colors">
                <h4 className="font-medium">Sushi Roll</h4>
                <p className="text-sm text-gray-500">$14.99</p>
                <button
                  className="mt-2 w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-secondary transition-colors"
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
          
          {/* Right panel - Order summary */}
          <div className="bg-white rounded-2xl p-6 h-full">
            <h3 className="text-xl font-bold text-primary mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div>
                <span className="text-primary">Margherita Pizza</span>
                <span className="ml-auto">$12.99</span>
              </div>
              <div>
                <span className="text-primary">Sushi Roll</span>
                <span className="ml-auto">$14.99</span>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-medium">Total</h4>
                <h3 className="text-xl font-bold text-primary">$27.98</h3>
              </div>
            </div>
            <button
              className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg mt-6 hover:bg-secondary transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}