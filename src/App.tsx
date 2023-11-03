import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/Router'
import { AuthUserProvider } from './firebase/auth'


function App() {

  return (
  <AuthUserProvider>
      <div className=" w-full min-w-screen h-full min-h-screen flex justify-center items-start ">
        <RouterProvider router={router}/>
      </div>
  </AuthUserProvider>
  )
}

export default App
