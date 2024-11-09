const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const router = express.Router();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let referrals = []; //This will store referrals in memory

const db = {
    users: [
        {   id: 12345678, 
            F_name: "John",
            L_name: "Doe", 
            phone: 8325559878, 
            email: "John_OfficeStaff@gmail.com", 
            address:"123 Main St, Houston, Tx, 77002", 
            role: "OfficeStaff"
        },],

    patient: [
        {MedId: 12345678, F_name: "Emily", L_name: "Johnson", 
        age: "30", gender: "Female", birthday: "1994-06-15", 
        address: "123 Main St", city: "Houston", state: "Tx", 
        zippcode: 77002, email: "emily.johnson@example.com",  },
    ],

    medicalHistory: [
        {MedId: 12345678, condition: "Hypertension", treatment: "Lifesyle change", 
        medication: "Lisinopril", bloodType: "AB", allergies: "None", doctor: "Dr. Smith"},
     ],

    medicalRecord: [
        {MedId: 12345678, height: 65, weight: 150, 
        sex: "Female", allergies: "None", 
        emergencyContactInfo: "John Johnson, 555-987-6543"},
   ],

    schedule:[
        {id: 12345678, availableMon: "All Dday", availableTue: "All Dday", availableWeb: "All Dday", availableThu: "All Dday", availableFri: "All Dday",
        startTime: "9:00 AM", endTime: "11:00 AM", location: "Conference Room"},
        {id: 23456789, availableMon: "All Dday", availableTue: "All Dday", availableWeb: "All Dday", availableThu: "All Dday", availableFri: "All Dday",
        startTime: "10:00 AM", endTime: "12:00 PM", location: "Meeting Room"},
        {id: 34567891, availableMon: "All Dday", availableTue: "All Dday", availableWeb: "All Dday", availableThu: "All Dday", availableFri: "All Dday",
        startTime: "11:00 AM", endTime: "1:00 PM", location: "Office"},
    ]
    
};

// Session
const sessions ={};


// [Get] /backend/staff & patient
app.get("/backend/staffs", (req, res) => {
    res.json(db.users);
});

app.get("/backend/patient", (req, res) => {
    res.json(db.patient);
});
//medicalrecord
app.get("/backend/medicalrecord", (req, res) => {
    res.json(db.medicalRecord);
});

app.get("/backend/medicalhistory", (req, res) => {
    res.json(db.medicalHistory);
});

//schedule
app.get("/backend/schedule", (req, res) => {
    res.json(db.schedule);
});

app.post("/backend/auth/login", (req, res) => {
    const {email, phone } = req.body;
    console.log(email, phone);
    res.json({});
})

//patient

router.post('/add_employee', (req, res) => {
    const sql = `INSERT INTO employee 
    (name,email,password, address, salary,image, category_id) 
    VALUES (?)`;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        const values = [
            req.body.id,
            req.body.name,
            req.body.email,
            req.body.address,
            req.body.phone
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Status: false, Error: err})
            return res.json({Status: true})
        })
    })
})

router.get('/patient', (req, res) => {
    const sql = "SELECT * FROM patient";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

router.put('/edit_patient/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE patient 
        set name = ?, email = ?, salary = ?, address = ?, category_id = ? 
        Where id = ?`
    const values = [
        req.body.id,
        req.body.name,
        req.body.email,
        req.body.address,
        req.body.phone
    ]
    con.query(sql,[...values, id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})
router.get('/patient_count', (req, res) => {
    const sql = "select count(id) as patient from patient";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.delete('/delete_patient/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from patient where id = ?"
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})
//profile
router.get('/backend/profile', (req, res) => {
    const sql = "SELECT * FROM officestaff";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})
 
router.post('/backend/add_profile', (req, res) => {
    const sql = "INSERT INTO form (`name`) VALUES (?)"
    con.query(sql, [req.body.profile], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true})
    })
})

//staffID
router.get('/backend/staffID/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM officestaff WHERE id =?"
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//form
router.get('/backend/form', (req, res) => {
    const sql = "SELECT * FROM form";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})
 
router.post('/backend/add_form', (req, res) => {
    const sql = "INSERT INTO form (`name`) VALUES (?)"
    con.query(sql, [req.body.form], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true})
    })
})
 //Logout
 app.get("/backend/auth/logout", (req, res) => {
    res.json({});
})
router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Sever side rendering (SSR)
// Client side rendering (CSR)