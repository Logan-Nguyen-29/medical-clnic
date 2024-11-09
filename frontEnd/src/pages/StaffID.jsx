import React, {useEffect,useState} from 'react';
import axios from 'axios';
import ID from '../assets/OfficeStaffLady.jpg';
import './StaffID.css';

function StaffID(){

    const [staffID, setStaffID] = useState([])

  useEffect(()=> {
      axios.get('http://localhost:3000/backend/staffID')
      .then(result => {
          if(result.data.Status) {
              setStaffID(result.data.Result);
          } else {
              alert(result.data.Error)
          }
      }).catch(err => console.log(err))
  }, [])

    return(
        <div className = "ID">
            <img className = "ID-image" src={ID} alt = "Office-Staff-ID"></img>
            <tbody>
            {staffID.map((s) => (
            <tr key={s._id}>
            <h2 className = "ID-name"> <td>{s.first_name} {s.last_name}</td> </h2> 
            <p className = "ID-text"> <td>{s.employee_ID}</td> </p>
            <p className = "ID-text1"> <td> OfficeStaff</td> </p>
            </tr>
            ))}</tbody>
        </div>
    )
}

export default StaffID;