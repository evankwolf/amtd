import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { RouterProvider } from 'react-router-dom'

import router from './routes'

import './App.css'

library.add(fas)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
