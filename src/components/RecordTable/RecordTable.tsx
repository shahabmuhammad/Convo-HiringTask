import React, { useContext } from 'react';
import { ACTIONS, IRecord, IRecordContext } from '../../models/Record.model';
import { RecordContext } from '../../App';

interface RecordTableProps {
    records: IRecord[] | undefined;
    searchTerm: string;
    sortBy: 'date' | 'upvotes';
    recordContext: IRecordContext | null // Function to update selected record
}

export const RecordTable: React.FC<RecordTableProps> = ({ records, searchTerm, sortBy, recordContext }) => {
    const sortedRecords = records?.slice().sort((a, b) => {
        switch (sortBy) {
            case 'upvotes':
                return b.upvotes - a.upvotes; 
            case 'date':
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            default:
                return 0;
        }
    });

    const handleEditClick = (record:IRecord) => {
        recordContext?.setSelectedRecord(record); 
    };
    
    const handleDeleteClick = (record:IRecord)=>{
        recordContext?.recordDispatch({type: ACTIONS.REMOVE_RECORD, payload: record})
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Upvotes</th>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {sortedRecords!?.length > 0 ? (
                    sortedRecords?.map((record) => (
                        <tr key={record.id}>
                            <td>{record.title}</td>
                            <td>{record.upvotes}</td>
                            <td>{record.date}</td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm">View</button>
                                <button type="button" className="btn btn-primary btn-sm mx-2" onClick={() => handleEditClick(record)}>Edit</button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(record)}>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} className="text-center">No Record found.</td>
                    </tr>
                )}

            </tbody>
        </table>
    );
};
