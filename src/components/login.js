// import React, { useState } from "react";
// import Dash from "./dash"

// function Login() {
//   const [data, setData] = useState({
//     rollno: "", // Change from "email" to "rollno"
//     password: "",
//   });
//   const [classRank,setclank]=useState(null);
//   const [adityarank,setrank]=useState(null);
//   const [collegerank,setcrank]=useState(null);
//   const [userData, setUserData] = useState(null);
//   const [departmentrank, setdrank] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//    console.log(data);

//     try {
//       const response = await fetch('http://localhost:5008/login', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const result = await response.json();
//       if (result.success) {
//         setclank(result.classRank);
//         setdrank(result.departmentrank);
//         setrank(result.adityarank);
//         setUserData(result.user);
//         setcrank(result.collegerank);
//         setAuthenticated(true);
//       } else {
//         alert('Authentication failed');
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };

//   return (
//     <div>
//       {
//         authenticated ? (
//           <Dash datafromparent={{userData,adityarank,collegerank,departmentrank,classRank}} />
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <label>Roll Number</label> {/* Change label from "Email" to "Roll Number" */}
//             <input
//               placeholder="Enter roll number" // Change placeholder from "Enter email" to "Enter roll number"
//               type="text"
//               name="rollno" // Change from "email" to "rollno"
//               value={data.rollno} // Change from "email" to "rollno"
//               onChange={(e) => setData({ ...data, rollno: e.target.value })} // Change from "email" to "rollno"
//             />
//             <br />
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={data.password}
//               onChange={(e) => setData({ ...data, password: e.target.value })}
//             />
//             <br />
//             <input type="submit" value="Submit" />
//           </form>
//         )
//       }
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Dash from "./dash";
import "./login.css";


function Login() {
  const [data, setData] = useState({
    rollno: '',
    password: '',
  });

  const [classRank, setClRank] = useState(null);
  const [adityarank, setRank] = useState(null);
  const [collegerank, setCRank] = useState(null);
  const [userData, setUserData] = useState(null);
  const [departmentrank, setDRank] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await fetch('http://localhost:5008/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result.success) {
        setClRank(result.classRank);
        setDRank(result.departmentrank);
        setRank(result.adityarank);
        setUserData(result.user);
        setCRank(result.collegerank);
        setAuthenticated(true);
      } else {
        alert('Authentication failed');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="container-fluid mt-5 d-flex justify-content-center align-items-center">
      {authenticated ? (
        // Your existing Dash component
        <Dash datafromparent={{userData,adityarank,collegerank,departmentrank,classRank}} />
      ) : (
        <Card className="login-card">
          <CardBody>
            <CardTitle tag="h5">Login</CardTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="rollno">Roll Number</Label>
                <Input
                  type="text"
                  name="rollno"
                  id="rollno"
                  placeholder="Enter roll number"
                  value={data.rollno}
                  onChange={(e) => setData({ ...data, rollno: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

export default Login;
