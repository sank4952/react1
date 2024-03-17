import React  from "react";
import './dashboard.css';
const Dash = (props) => {
  //console.log(props.datafromparent);
  const { rollno,lastname,college,department,code1r,code2r,code3r,code4r,codewin,apt1r,apt2r,apt3r,apt4r,aptwinr,} = props.datafromparent.userData;
  console.log(props.datafromparent.userData);
  //console.log(adityarank);
  const adityarank=props.datafromparent.adityarank;
  const collegerank=props.datafromparent.collegerank;
  const departmentrank=props.datafromparent.departmentrank;
  const classRank=props.datafromparent.classRank;
  console.log(props.datafromparent.classRank);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 data">
          <div className="col-md-12 pcard">
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE</h3>
            <hr></hr>
            <br></br>
            <h2>    Name: {lastname}</h2>
            <br></br>
            <h2>    ROll: {rollno}</h2 >
            <br></br>
            <h2>College : {college}</h2>
            <br></br>
            <h2>Department : {department}</h2>
          </div>
        </div>
        <div className="col-md-6 mycode">
           <img  className ="tech" src="tech.png"/>
          <div className="col-md-10 coding">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CODING CONTEST</h1>
            <hr></hr>
            <div className="codeside"> 
            {/* <h3>Registered</h3> */}
            <br></br>
            <h3>Qualified Round One :&nbsp;{code1r}</h3>
            <br></br>
            <h3>Qualified Round Two : {code2r}</h3>
            <br></br>
            <h3>Qualified Round Three : {code3r}</h3>
            <br></br>
            <h3>Qualified Round Four : {code4r}</h3>
            <br></br>
            <h3>Contests Won : {codewin}</h3>
            </div>
          </div>
          <div className="col-md-10 aptitude">
          <h1> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;APT LOGIC</h1>
          <hr></hr>
            {/* <h3>Registered</h3> */}
            <br></br>
            <h3>Qualified Round One :&nbsp;{apt1r}</h3>
            <br></br>
            <h3>Qualified Round Two : {apt2r}</h3>
            <br></br>
            <h3>Qualified Round Three : {apt3r}</h3>
            <br></br>
            <h3>Qualified Round Four : {apt4r}</h3>
            <br></br>
            <h3>Contests Won : {aptwinr}</h3>
          </div>
        </div>
        <div className="col-md-3 rank">
          <div className=" col-md-5 aditya mycardtop">
            <h1>ADITYA &nbsp;&nbsp;Rank</h1>
            <hr></hr>
            <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{adityarank} </h2>
          </div>
          <div className=" col-md-5 aditya mycardtop">
            <h1>CAMPUS &nbsp;&nbsp;&nbsp;Rank</h1>
            <hr></hr>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{collegerank}</h2>
          </div>
          <div className=" col-md-5 aditya mycardtop">
            <h2>Department &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rank</h2>
            <hr></hr>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{departmentrank}</h1>
          </div>
          <div className=" col-md-5 aditya mycardtop">
            <h1>&nbsp;&nbsp;&nbsp;CLASS &nbsp;&nbsp;&nbsp;&nbsp;Rank</h1>
            <hr></hr>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{classRank}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dash;
