import './App.css'
import { RecordForm } from './components/RecordForm/RecordForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecordListing } from './components/RecordListing/RecordListing';

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-5">
          <RecordForm />
        </div>
        <div className="col-lg-7">
          <RecordListing />
        </div>
      </div>
    </div>
  )
}

export default App
