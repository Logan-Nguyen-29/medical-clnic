import React, {useEffect,useState} from 'react';
import axios from 'axios';
import StaffID from './StaffID'

const Profile = () => {

  const [profile, setProfile] = useState([])

  useEffect(()=> {
      axios.get('http://localhost:3000/backend/profile')
      .then(result => {
          if(result.data.Status) {
              setProfile(result.data.Result);
          } else {
              alert(result.data.Error)
          }
      }).catch(err => console.log(err))
  }, [])

  return (
    <div className="px-5 mt-3">
      <div className="d-incline justify-content-center">
      <h3>Staff~Profile</h3>
        <div><StaffID /> 
        <div className='d-flex justify-content-center'>
        <div className = "staffs">
        <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>availabeMon</th>
              <th>availabeTue</th>
              <th>availabeWeb</th>
              <th>availabeThu</th>
              <th>availabeFri</th>
            </tr>
          </thead>
          <tbody>
            {profile.map((p) => (
              <tr key={p._id}>
                <td>{p.employee_ID}</td>
                <td>{p.first_name} {p.last_name}</td>
                <td>{p.email}</td>
                <td>{p.address}</td>
                <td>{p.phone}</td>
                <td>{p.availabilityMon}</td>
                <td>{p.availabilityTue}</td>
                <td>{p.availabilityWed}</td>
                <td>{p.availabilityThu}</td>
                <td>{p.availabilityFri}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            </div>
        </div>
        </div>
        </div>
        </div>

  )
}

export default Profile