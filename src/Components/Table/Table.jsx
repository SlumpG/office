import React, { useContext, useState } from "react";
import TableContent from "./TableContent";
import EmployeesArr from "../../Variables/Variables ";
import "./Table.css";

const Table = () => {
  const Employees = useContext(EmployeesArr).data;
  const setEmployees = useContext(EmployeesArr).setData;
  const [newEmployee, setNewEmployee] = useState({});

  function onChange(e) {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  }

  function onClick() {
    setEmployees([...Employees, newEmployee]);
  }
  return (
    <div className="tableContainer">
         <table className='Table'>
        <thead>
          <tr>
            <th>name</th>
            <th>last name</th>
            <th>date of birth</th>
          </tr>
        </thead>
        <tbody>
          <TableContent Employees={Employees} />
        </tbody>
      </table>
      <table>
      
          <tr>
            <td>
              <input
                name="name"
                type="text"
                placeholder="Name Here.."
                onChange={onChange}
              />
            </td>
            <td>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name Here.."
                onChange={onChange}
              />
            </td>
            <td>
              <input
                name="dateOfBirth"
                type="text"
                placeholder="Date Of Birth here.."
                onChange={onChange}
              />
            </td>
            <td>
              <input
                name="phone"
                type="text"
                placeholder="Phone Number Here.."
                onChange={onChange}
              />
            </td>
            <td>
              <input
                name="email"
                type="text"
                placeholder="Example@email.com"
                onChange={onChange}
              />
            </td>
          </tr>
    
      </table>
      <button className="button" onClick={onClick}>
        Add To Table
      </button>
      
    </div>
  );
};

export default Table;
