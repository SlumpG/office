import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MyRouter from './Components/MyRouter/MyRouter';
import { BrowserRouter as  Router } from 'react-router-dom';
import {EmployeesProvider} from './Variables/Variables '


function App() {
 

  const [EmployeesArray, setEmployeesArray] = useState([
    { name: "shlomo" ,lastName:'gagu',dateOfBirth:'1995',phone:'055-5555555', email: "email@gmail.com" ,id:'0' },
    { name: "yoni" ,lastName:'bitow',dateOfBirth:'1992',phone:'055-5555555', email: "email@gmail.com" ,id:'1' },
    { name: "yosef" ,lastName:'sahalo',dateOfBirth:'1997',phone:'055-5555555', email: "email@gmail.com" ,id:'2' },
    { name: "zoro" ,lastName:'roronoa',dateOfBirth:'1997',phone:'055-5555555', email: "email@gmail.com" ,id:'3' },
    { name: "ussop" ,lastName:'gagu2',dateOfBirth:'1999',phone:'055-5555555', email: "email@gmail.com" ,id:'4' },
    { name: "fanki" ,lastName:'gagu3',dateOfBirth:'1990',phone:'055-5555555', email: "email@gmail.com" ,id:'5' },
    { name: "chooper" ,lastName:'gagu4',dateOfBirth:'1993',phone:'055-5555555', email: "email@gmail.com" ,id:'6' },
    { name: "luffy" ,lastName:'gagu5',dateOfBirth:'1995',phone:'055-5555555', email: "email@gmail.com" ,id:'7' },
    { name: "brook" ,lastName:'gagu6',dateOfBirth:'1996',phone:'055-5555555', email: "email@gmail.com" ,id:'8' },
    { name: "sanji" ,lastName:'gagu7',dateOfBirth:'1991',phone:'055-5555555', email: "email@gmail.com" ,id:'9' },
  ]);

  const providerOptions = {
    data:EmployeesArray,
    setData:(value)=>setEmployeesArray(value),
  }

  return (
    <div className="App">
    
      <EmployeesProvider value={providerOptions}>
      <Router>
       <Header />
      <MyRouter />
      </Router>
      <Footer />
      </EmployeesProvider>
      
    </div>
  );
}

export default App;
