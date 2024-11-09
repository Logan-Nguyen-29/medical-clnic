import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Form = () => {
  const [form, setForm] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/backend/form')
        .then(result => {
            if(result.data.Status) {
                setForm(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Form Document</h3>
      </div>
      <Link to="/Referral" className='btn btn-info'>Referral Form</Link>
      <Link to="/Report" className='btn btn-info'>Report Form</Link>
      <Link to="/PatientContact" className='btn btn-info'>Contact Form</Link>
      <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Form</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        form.map(c => (
                          <tr key={c._id}>
                              <td>{c.formName}</td>
                          </tr> 
 
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Form
