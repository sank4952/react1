// import React, { useState } from "react";
// import axios from "axios"
// const Register = () => {
//   const [data, setData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     rollno:"",
//     password: "",
//     college: "",
//     department: "",
//     codeattend: 0,
//     aptattend: 0,
//     year: 0,
//     aptsolved: 0,
//     codesolved: 0,
//     code1r: 0,
//     code2r: 0,
//     code3r: 0,
//     code4r: 0,
//     codewin: 0,
//     apt1r: 0,
//     apt2r: 0,
//     apt3r: 0,
//     apt4r: 0,
//     apt5r: 0,
//     aptwinr: 0,
//     marks:0,
//     percentage:0,
//   });

//   const handleSubmit = (e) => {
//      e.preventDefault();
//      console.log(data);
//       registerUser(data);
//   };
//   const registerUser = async (userData) => {
//     try {
//       const response = await axios.post('http://localhost:5008/register', userData);
//       alert("Registered")
//       return response.data;
//     } catch (error) {
//       alert("Not Registered")
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <div class="container-fluid">
//     <div class="row">
//     <div class="col-md-2"></div>
//     <div class="col-md-4 col-sm-8 card">
//       <div class="card-body">
//         <h1 class="card-title">Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//           <div class="form-group">
//             <label class="label">Firstname:</label>
//             <input
//               type="text"
//               name="firstname"
//               value={data.firstname}
//               onChange={(e) => setData({ ...data, firstname: e.target.value })}
//               class="form-control"
//             />
//           </div>
//           <div class="form-group">
//             <label class="label">Lastname:</label>
//             <input
//               type="text"
//               name="lastname"
//               value={data.lastname}
//               onChange={(e) => setData({ ...data, lastname: e.target.value })}
//               class="form-control"
//             />
//           </div>
//           <div class="form-group">
//             <label class="label">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={(e) => setData({ ...data, email: e.target.value })}
//               class="form-control"
//             />
//           </div>
//           <div class="form-group">
//             <label class="label">Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={data.password}
//               onChange={(e) => setData({ ...data, password: e.target.value })}
//               class="form-control"
//             />
//           </div>
//           <button type="submit" class="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from 'react';
import './register.css'; // Import your CSS file
import axios from "axios";
const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    rollno:"",
    password: "",
    college: "",
    department: "",
    codeattend: 0,
    aptattend: 0,
    year: 0,
    aptsolved: 0,
    codesolved: 0,
    code1r: 0,
    code2r: 0,
    code3r: 0,
    code4r: 0,
    codewin: 0,
    apt1r: 0,
    apt2r: 0,
    apt3r: 0,
    apt4r: 0,
    apt5r: 0,
    aptwinr: 0,
    marks:0,
    percentage:0,
  });

  const handleSubmit = (e) => {
         e.preventDefault();
         console.log(data);
          registerUser(data);
      };
      const registerUser = async (userData) => {
        try {
          const response = await axios.post('http://localhost:5008/register', userData);
          alert("Registered")
          return response.data;
        } catch (error) {
          alert("Not Registered")
          console.error('Error registering user:', error);
        }
      };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card registration-card">
            <div className="card-body">
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstname">Firstname:</label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    name="firstname"
                    value={data.firstname}
                    onChange={(e) => setData({ ...data, firstname: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Lastname:</label>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    name="lastname"
                    value={data.lastname}
                    onChange={(e) => setData({ ...data, lastname: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rollno">Roll Number:</label>
                  <input
                    type="text"
                    id="rollno"
                    className="form-control"
                    name="rollno"
                    value={data.rollno}
                    onChange={(e) => setData({ ...data, rollno: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="college">College:</label>
                  <input
                    type="text"
                    id="college"
                    className="form-control"
                    name="college"
                    value={data.college}
                    onChange={(e) => setData({ ...data, college: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="department">Department:</label>
                  <input
                    type="text"
                    id="department"
                    className="form-control"
                    name="department"
                    value={data.department}
                    onChange={(e) => setData({ ...data, department: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Register;
