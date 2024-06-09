import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer, useState } from 'react';

import { AddRecord } from './components/RecordForm/AddRecord'
import { RecordListing } from './components/RecordListing/RecordListing';
import { ACTIONS, IRecord, IRecordContext, IRecordState } from './models/Record.model';

export const RecordContext = React.createContext<IRecordContext | null>(null);
const initialState: IRecordState = {
  records: []
};

const recordReducer = (state: IRecordState = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_RECORD:
      const newRecord: IRecord = { ...action.payload };
      return { ...state, records: [...state.records, newRecord] };

    case ACTIONS.UPDATE_RECORD:
      const updatedRecordIndex = state.records.findIndex(
        (record) => record.id === action.payload.id
      );
      if (updatedRecordIndex !== -1) {
        const updatedRecords = [...state.records];
        updatedRecords[updatedRecordIndex] = { ...action.payload };
        return { ...state, records: updatedRecords };
      }
      return state;

    default:
      return state;
  }
};


function App() {
  const [recordState, dispatch] = useReducer(recordReducer, initialState)
  const [selectedRecord, setSelectedRecord] = useState<IRecord | null>(null);

  return (
    <RecordContext.Provider value={{
      recordState: recordState, recordDispatch: dispatch, selectedRecord,
      setSelectedRecord
    }}>
      <div className='container'>
        <div className="row">
          <div className="col-lg-5">
            <AddRecord />
          </div>
          <div className="col-lg-7">
            <RecordListing />
          </div>
        </div>
      </div>
    </RecordContext.Provider>
  )
}

export default App
