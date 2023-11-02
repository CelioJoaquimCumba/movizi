import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/Router'


function App() {

  return (
    <div className=" w-full min-w-screen h-full min-h-screen flex justify-center items-start ">
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
