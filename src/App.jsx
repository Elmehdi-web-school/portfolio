import { Navbar } from './components/Navbar'
import { BackgroundEffects } from './components/BackgroundEffects'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-inter scroll-smooth">
      <BackgroundEffects />
      <Navbar />
      <Home />
    </div>
  )
}

export default App
