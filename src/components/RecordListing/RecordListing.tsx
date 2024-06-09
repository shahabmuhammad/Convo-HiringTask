import { useContext, useState } from 'react'
import { RecordContext } from '../../App'
import './RecordListing.css'
import { RecordTable } from '../RecordTable/RecordTable'


export const RecordListing = () => {
    const recordContext = useContext(RecordContext)
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'date' | 'upvotes'>('upvotes')



    const filteredRecords = recordContext?.recordState.records?.filter((record) => {
        const searchTextLower = searchTerm.toLowerCase();
        return (
            record.title.toLowerCase().includes(searchTextLower) ||
            record.upvotes.toString().includes(searchTextLower) ||
            record.date.toString().includes(searchTextLower)
        );
    });


    return (
        <>
            <div className="row mt-3">
                <div className="col-lg-3"></div>
                <div className="col-lg-8">
                    <input
                        type="text"
                        className='form-control form-control-lg'
                        placeholder='Search the record...'
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />                </div>
                <div className="col-lg-1"></div>
            </div>
            <div className="row my-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-3">
                            <p>Sort By:</p>
                        </div>
                        <div className="col-5">
                            <button
                                className={`btn btn-success ${sortBy === 'upvotes' ? 'active' : ''}`}
                                onClick={() => setSortBy('upvotes')}
                            >
                                Most Upvoted
                            </button>
                        </div>
                        <div className="col-4">
                            <button
                                className={`btn btn-success ${sortBy === 'date' ? 'active' : ''}`}
                                onClick={() => setSortBy('date')}
                            >
                                Most Recent
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>

            <div className="container list">
                <div className="table-responsive scrolling-table">
                    <RecordTable
                        records={filteredRecords}
                        searchTerm={searchTerm}
                        sortBy={sortBy}
                        setSelectedRecord={recordContext?.setSelectedRecord!}
                    />
                </div>
            </div>
        </>
    )
}
