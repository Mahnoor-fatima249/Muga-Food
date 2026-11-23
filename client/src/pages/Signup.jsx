import { useState } from 'react'
import Header from '../components/Header'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/users/signup', { name, email, password })
      if (response.data.success) {
        window.location.href = '/login'
      } else {
        setError(response.data.message || 'Signup failed')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-dark text-white flex items-center justify-center p-4">
      <div className="bg-white/20 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
        <h1 className="text-4xl font-bold mb-6">Create Account</h1>
        
        {error && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
              minlength={6}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-primary py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8">
          <p className="text-sm text-white/70">
            Already have an account? <a href="/login" className="text-white/80 hover underline font-medium">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  )
}