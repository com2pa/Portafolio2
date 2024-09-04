import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Resumen from '../pages/Resumen'

export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/conoceme' element={<About/>}/>
            <Route path='/proyectos' element={<Project/>}/>
            {/* <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> */}
            <Route path="/resumen" element={<Resumen />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root