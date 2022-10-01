import { Route, Routes } from 'react-router-dom'

import { RestaurantsPage } from '../components'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path='/stats' element={<div>hola</div>} />

      {/* JournalApp */}
      <Route path='/*' element={<RestaurantsPage />} />
    </Routes>
  )
}
