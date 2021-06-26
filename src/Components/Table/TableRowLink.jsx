import React from "react";
import { Link } from "react-router-dom";
const TableRowLink = ({ Employees }) => {
  const EmployeesArrayKeys = Object.keys(Employees[0]);
  const dateYear = new Date().getFullYear();
  return (
    <>
      {Employees.map((employee, index1) => {
        return (
          
          <tr className="showMeNow" id={employee.id} key={index1}>
            
            {EmployeesArrayKeys.map((key, index2) => {
              if (key === "dateOfBirth") {
                return <td key={index2}>{dateYear - employee[key]}</td> ;
              } else if (key === "phone" || key === "email") {
                return (
                 
                      <td className="OnHover">
                        {key} {employee[key]}
                      </td>
                 );
              } else {
                return <td key={index2}><Link style={{color:'black'}} to={`/Card/${employee.id}`}>{employee[key]}</Link></td>;
              }
            })}
          </tr> 
          );
      })}
    </>
  );
};

export default TableRowLink;
