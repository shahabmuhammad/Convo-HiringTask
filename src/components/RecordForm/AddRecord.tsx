import './AddRecord.css'
import { useForm } from 'react-hook-form'
import { IRecord } from '../../models/Record.model'
import { RecordContext } from '../../App'
import { useContext, useState } from 'react'


export const AddRecord = () => {
  const recordContext = useContext(RecordContext)
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IRecord>()
  const [isloading, setIsloading] = useState<boolean>(false)

  const onSubmit = (data: IRecord) => {
    setIsloading(true)
    if (isValid) {
      data = { ...data, id: Date.now() }
      recordContext?.recordDispatch({ type: 'ADD_RECORD', payload: data })
      setIsloading(false)
      reset()
    }
    else {
      setIsloading(false)
    }
  }

  return (
    <div className="row record-form mt-5" onSubmit={handleSubmit(onSubmit)}>
      <form>
        <p className='fw-bold mt-2'>Add Record</p>
        <div className="col-md-12 mt-3">
          <input type="text" className='form-control form-control-lg' placeholder='Enter title...' {...register('title', { required: true })} />
          {errors.title?.type == 'required' && <p className='text-danger'> Title field is required.</p>}
        </div>
        <div className="col-md-12 mt-3">
          <input type="number" className='form-control form-control-lg' placeholder='Enter upvotes number between 0 to 100...' {...register('upvotes', { required: true, min: 0, max: 100 })} />
          {errors.upvotes?.type == 'required' && <p className='text-danger'>upVotes field is required.</p>}
          {(errors.upvotes?.type == 'min' || errors.upvotes?.type == 'max') && <p className='text-danger'>upVotes value must between 0 and 100.</p>}

        </div>
        <div className="col-md-12 mt-3">
          <input type="date" className="form-control form-control-lg" placeholder='Enter Date' {...register('date', { required: true })} />
          {errors.date?.type == 'required' && <p className='text-danger'>Date field is required.</p>}
        </div>
        <button className="btn btn-success btn-lg fw-bold col-12 mt-3 mb-3" type='submit' >{isloading ? 'Adding...' : 'Add Data'}</button>
      </form>
    </div>
  )
}
