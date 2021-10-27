// import React, {useEffect, useState} from "react";
// import { useParams } from "react-router";
// import "../App.css";
// import productData from "../Employees.json";
// import AddUser from "./AddUser/AddUser";
// import "./Employees.css";

// function Main() {
//     const [data, setData] = useState([])
//     const {form}=useParams()

//     console.log(form);

// //   useEffect(() => {
// //     fetch("http://localhost:8085/api/employee")
// //     .then((response) => response.json()).then(data=>{
// //       setData(data)
// //     }).catch((err)=>console.log(err))
// //   }, [])

//   const handelOnDelete=(name)=>{
//     //TO DO delete logic
//   }


//   return (
//       <div className="main">
//     <div className="employeeList">
//       {data &&
//         data.map((item) => (
//           <li>
//             {item.firstName} {item.lastName}
//             <div onClick={()=>handelOnDelete(item.username)}>&nbsp;&nbsp;X</div>
//           </li>
//         ))}
//     </div>
//     <AddUser/>
//     </div>
//   );
// }

// export default Main;
