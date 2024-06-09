import './App.css'
import { RecordForm } from './components/RecordForm/RecordForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-5">
          <RecordForm />
        </div>
        <div className="col-md-7">
          listing componnet
        </div>
      </div>
    </div>
  )
}

export default App
