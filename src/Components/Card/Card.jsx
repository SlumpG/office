import React,{useContext} from "react";
import { useParams } from "react-router";
import EmployeesContext from "../../Variables/Variables ";
import './Card.css'


const Card = () => {
  const Employees = useContext(EmployeesContext).data;
    const {id}= useParams()
    const thisEmployee = Employees.find((e)=> e.id == id);
    
  return <div className='card'>
      <h1>name: {thisEmployee.name} </h1>
      <h1>last name: {thisEmployee.lastName}</h1>
      <h1>age: {thisEmployee.age} </h1>
      <h1>phone: {thisEmployee.phone}</h1>
      <h1>email: {thisEmployee.email}</h1>
  </div>;
};

export default Card;
