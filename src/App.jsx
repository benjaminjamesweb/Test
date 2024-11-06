import { useRoutes } from 'react-router-dom'
import './App.css'

function App() {

  let element = useRoutes(
    [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/crypto/:coin',
        element: <CryptoDetailPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  )

  return element;
}

export default App
