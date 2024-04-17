import { BrowserRouter as Router , Route, Routes, BrowserRouter } from 'react-router-dom'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import Maincmp from './component/Maincmp'
import Blogs from './component/Blogs'
import Contact from './component/Contact'
import Cources from './component/cources'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
        <Route path='/' element={<Maincmp />}/>
        <Route path='/contact' element={<Contact  />}/>
        <Route path='/cources' element={<Cources  />}/>

    </Routes>
    <Footer  />
    </BrowserRouter>
    </>
  )
}

export default App