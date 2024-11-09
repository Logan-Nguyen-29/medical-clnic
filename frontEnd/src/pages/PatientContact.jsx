import React, {useState} from 'react'
import "./Doc-Styles.css"

const PatientContact = () => {

    const[values, setValues] = useState({
        first_name: ' ',
        last_name: ' ',
        date_of_birth: ' ',
        gender: ' ',
        address: ' ',
        city: ' ',
        state: ' ',
        zipcode: ' ',
        email: ' ',
        phone: ' ',
        emergency_contact_info: ' ',
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

  return (
    <div className="container">
        <h1> Patient Contact Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="Enter First Name" name="firstname" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Enter Last Name" name="lastname" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="D.o.B">Date Of Birth</label>
            <input type="text" placeholder="Enter Date of Birth" name="D.o.B" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="gender">Gender</label>
            <input type="radio" name="gender" required 
            onChange={(e) => handleChanges(e)}/> Male
            <input type="radio" name="gender" required
            onChange={(e) => handleChanges(e)}/> Female
            <input type="radio" name="gender" required
            onChange={(e) => handleChanges(e)}/> Other

            <label htmlFor="address">Street Address</label>
            <input type="text" placeholder="Enter Address" name="address" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="city">City</label>
            <input type="text" placeholder="Enter City" name="city" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="state">State</label>
            <input type="text" placeholder="Enter State" name="state" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" placeholder="Enter Zip Code" name="zipcode" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Email" name="email" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder="Enter Cell Phone #" name="phone" required
            onChange={(e) => handleChanges(e)}/>

            
            <label htmlFor="emergency contact">Emergency Contact</label>
            <input type="text" placeholder="Enter emergency name & phone number" name="emergency contact" required
            onChange={(e) => handleChanges(e)}/>

            <button> Reset </button>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default PatientContact
