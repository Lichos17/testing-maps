import { RestaurantContextProvider } from './contexts'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <RestaurantContextProvider>
      <AppRouter />
    </RestaurantContextProvider>
  )
}

export default App
