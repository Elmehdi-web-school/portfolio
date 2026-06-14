import { Navbar } from './components/Navbar'
import { BackgroundEffects } from './components/BackgroundEffects'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-text dark:bg-theme-dark-bg dark:text-theme-dark-text font-inter scroll-smooth">
      <BackgroundEffects />
      <Navbar />
      <Home />
    </div>
  )
}

export default App
