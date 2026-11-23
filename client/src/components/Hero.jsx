export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary to-secondary text-white py-24 md:py-32 relative">
      <div className="container mx-auto px-8 max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Delicious Food Delivered to Your Door
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Order from your favorite restaurants and get fresh, hot meals delivered
          in minutes.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/menu'}
            className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            View Menu
          </button>
          <button
            className="bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Track Order
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full opacity-20" />
    </section>
  )
}