import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Portfolio } from './pages/Portfolio'
import { Contato } from './pages/Contato'
import { Art1 } from './pages/Art1'
import { Art2 } from './pages/Art2'
import { Art3 } from './pages/Art3'
import { Art4 } from './pages/Art4'
import { Art5 } from './pages/Art5'
import { Art6 } from './pages/Art6'

export function Router() {
  return(
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path='/Art1' element={<Art1/>}/>
        <Route path='/Art2' element={<Art2/>}/>
        <Route path='/Art3' element={<Art3/>}/>
        <Route path='/Art4' element={<Art4/>}/>
        <Route path='/Art5' element={<Art5/>}/>
        <Route path='/Art6' element={<Art6/>}/>
      </Routes>

      

      <Footer />
    </BrowserRouter>
  )
}