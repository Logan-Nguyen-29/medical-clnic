import React, {useEffect,useState} from 'react';
import axios from 'axios';
import "./OfficeStaffEmployee.css";

const OfficeStaffEmployee = () => {
    const [staffs,setStaff] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get("http://localhost:3000/backend/staffs");
                setStaff(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    return (
        <div>
        <div className = "staffs">
            {staffs.map(staff => (
                <div key={staff.id} className="staff">
                    <h3>{staff.F_name} {staff.L_name}</h3>
                    <p>Position: {staff.role}</p>
                    <p>Email: {staff.email}</p>
                    <p>Phone: {staff.phone}</p>
                    <p>Address: {staff.address}</p>
                </div>
            ))}
        </div>
        </div>
    )
}
export default OfficeStaffEmployee;