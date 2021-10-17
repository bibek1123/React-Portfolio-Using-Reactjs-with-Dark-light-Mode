import Intro from './components/intro/Intro'
import About from './components/about/About'
import Product from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import Footer from "./components/footer/Footer";
import { ThemeContext } from './context'
import { useContext } from 'react'
const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222" : 'white', color:darkMode && "white"}}>
      <Toggle />
      <Intro />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
