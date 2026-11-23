import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MenuSection from '../components/MenuSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MenuSection />
      <Footer />
    </div>
  )
}