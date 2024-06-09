import React from 'react';
import { IRecord } from '../../models/Record.model';

export const RecordTable: React.FC<{ records: IRecord[] | undefined; searchTerm: string; sortBy: string }> = ({ records, searchTerm, sortBy }) => {
    const sortedRecords = records?.slice().sort((a, b) => {
        switch (sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'upvotes':
                return b.upvotes - a.upvotes; 
            case 'date':
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            default:
                return 0;
        }
    });

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
                                <button type="button" className="btn btn-primary btn-sm mx-2">Edit</button>
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
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
