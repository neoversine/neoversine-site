import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShuffleLoader2 from './components/basic/SpecialLoader/ShuffleLoader2'

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'))
const LabsPage = lazy(() => import('./pages/LabsPage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))
const DetailsPage = lazy(() => import('./pages/DetailsPage'))
const OurWorks = lazy(() => import('./pages/OurWorks'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ShuffleLoader2 />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/labs' element={<LabsPage />} />
          <Route path='/lab/:id' element={<DetailsPage />} />
          <Route path='/our-works' element={<OurWorks />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/coming-soon' element={<ComingSoon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
