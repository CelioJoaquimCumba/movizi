import './App.css'
import { DatePicker } from './components/molecules/DatePicker'

function App() {

  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <div className='w-full bg-white p-4 flex justify-center'>
        <DatePicker/>
      </div>
    </div>
  )
}

export default App
