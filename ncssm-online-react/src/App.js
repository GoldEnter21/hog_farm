import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateUser from './components/admin-page/CreateUser';
import ShowUserList from './components/admin-page/ShowUserList';
import ShowUserDetails from './components/ShowUserDetails';
import UpdateUserInfo from './components/admin-page/UpdateUserInfo';
import Auth from './components/Auth';
import ShowHomePage from './components/public-page/ShowHomePage';
import ShowMap2 from './components/public-page/ShowMap2Page';
import Navbar from './components/navbar/navbar';
import About from './components/public-page/About';
import MyAccount from './components/public-page/MyAccount';
import Credits from './components/public-page/Credits';

/**
 * @author Anwar, Sheerabdhi, Tejas 
 * @returns the website
 */
const App = () => {
  return (
    <Router>
        <div className="App">
        <div className="bg">
          <Navbar />
        </div>
        </div>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowHomePage />} />
          <Route path='/map2' element={<ShowMap2 />} />
          <Route path='/about' element={<About />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/credits' element={<Credits />} />
          <Route path="/sus" element={<ShowUserList />} />
          <Route element={<Auth allowedRoles={["Ad"]} />} >
            <Route path='/edit-user/:id' element={<UpdateUserInfo />} />
            <Route path='/show-user/:id' element={<ShowUserDetails />} />
            <Route path='/create-user' element={<CreateUser />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import "./App.css";
// import { useState } from "react";
// import Papa from "papaparse";
// import axios from "axios";

// function App() {
//   // State to store parsed data
//   const [parsedData, setParsedData] = useState([]);

//   //State to store table Column name
//   const [tableRows, setTableRows] = useState([]);

//   //State to store the values
//   const [values, setValues] = useState([]);

//   const changeHandler = (event) => {
//     const valuesArray = [];
//     // Passing file data (event.target.files[0]) to parse using Papa.parse
//     Papa.parse(event.target.files[0], {
//       header: false,
//       skipEmptyLines: true,
//       complete: function (results) {
//         const rowsArray = [];

//         // Iterating data to get column name and their values
//         results.data.map((d) => {
//           rowsArray.push(Object.keys(d));
//           valuesArray.push(Object.values(d));
//         });

//         // Parsed Data Response in array format
//         setParsedData(results.data);

//         // Filtered Column Names
//         setTableRows(rowsArray[0]);

//         // Filtered Values
//         setValues(valuesArray);
//       },
//     });
//   };

//   const handle = async (e) => {
//     e.preventDefault();
//     for (var i = 0; i < values.length; i++) {
//       await axios.get(`https://express-backend.fly.dev/api/users/${values[i]}`)
//       .then((res) => {
//         axios.put(`https://express-backend.fly.dev/api/users/${values[i]}`, {playerTarget: values[i+1][0]})
//         axios.put(`https://express-backend.fly.dev/api/users/${values[i]}`, {prospectiveTarget: values[i+1][0]})
//         console.log(res.data.firstName + " " + res.data.lastName)
//       }) 
//     }
//   }
  

//   return (
//     <div>
//       {/* File Uploader */}
//       <input
//         type="file"
//         name="file"
//         onChange={changeHandler}
//         accept=".csv"
//         style={{ display: "block", margin: "10px auto" }}
//       />
//       <input
//         type="file"
//         name="file"
//         onChange={handle}
//         accept=".csv"
//         style={{ display: "block", margin: "10px auto" }}
//       />
//       <br />
//       <br />
//       {/* Table */}
//       <table>
//         <thead>
//           <tr>
//             {tableRows.map((rows, index) => {
//               return <th key={index}>{rows}</th>;
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {values.map((value, index) => {
//             return (
//               <tr key={index}>
//                 {value.map((val, i) => {
//                   return <td key={i}>{val}</td>;
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;