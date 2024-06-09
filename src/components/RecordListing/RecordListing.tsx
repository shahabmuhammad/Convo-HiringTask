import './RecordListing.css'


export const RecordListing = () => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-lg-3"></div>
                <div className="col-lg-8">
                    <input type="text" className='form-control form-control-lg' placeholder='Search the record...' />
                </div>
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
                            <button className="btn btn-success">Most Upvoted</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-success">Most Recent</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>

            <div className="container list">
                <div className="table-responsive scrolling-table">
                    <table className="table">
                        <thead >
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Upvotes</th>
                                <th scope="col">Date</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@johndoe</td>
                                <td>
                                    <button type='button' className='btn btn-success btn-sm'>View</button>
                                    <button type='button' className='btn btn-primary btn-sm mx-2'>Edit</button>
                                    <button type='button' className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
