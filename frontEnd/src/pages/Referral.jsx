import React, {useState} from 'react'
import "./Doc-Styles.css"

const Referral = () => {
    const[values, setValues] = useState({
        first_name: ' ',
        last_name: ' ',
        address: ' ',
        description: ' ',
        reason: ' ',
        yORn: ' ',
        referral_F_name: ' ',
        referral_relationship: ' ',
        email: ' ',
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
        <h1> Medical Clinic Services Referral Form </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="Enter First Name" name="firstname" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Enter Last Name" name="lastname" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="address">Address</label>
            <input type="text" placeholder="Enter Address" name="address" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="description">Brief description of your mental health</label>
            <input type="text" placeholder="Enter Discription" name="description" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="reason">The Reason of referral</label>
            <input type="text" placeholder="Enter Reason" name="reason" required
            onChange={(e) => handleChanges(e)}/>

<           label htmlFor="y/n">Do Tey have a contact person in case of urgent mental health issues?</label>
            <input type="radio" name="y/n" required 
            onChange={(e) => handleChanges(e)}/> Yes
            <input type="radio" name="y/n" required
            onChange={(e) => handleChanges(e)}/> No

            <label htmlFor="referral_name">Referrer's Full Name</label>
            <input type="text" placeholder="Enter First Name" name="referral_name" required
            onChange={(e) => handleChanges(e)}/>
            <input type="text" placeholder="Enter Last Name" name="referral_name" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="referral_relationship">Referrer's relationship to the referred individual:</label>
            <input type="radio" name="referral_relationship" required 
            onChange={(e) => handleChanges(e)}/> Family Member/Friend
            <input type="radio" name="referral_relationship" required
            onChange={(e) => handleChanges(e)}/> Healthcare Professional
            <input type="radio" name="referral_relationship" required
            onChange={(e) => handleChanges(e)}/> Other

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Email" name="email" required
            onChange={(e) => handleChanges(e)}/>

            <button> Reset </button>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Referral
