import React from "react";
import "./Form.css";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from 'emailjs-com'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function sendEmail(e) {
  emailjs.sendForm('service_b0fghyi', 'template_8bcydpm', e.target, 'user_vrsa1EUJYBb7LyP4dXJTa')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}


const Form = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  }
    return (
   
      <form className='Form' onSubmit={sendEmail}>
              <label htmlFor="">
              <TextField name='firstName'   type="text"  label='Your first name...'  id="outlined-textarea"
            multiline
            variant="outlined"/>
              </label>
              <label htmlFor="">
              <TextField name='lastName'   type="text" label='Your first last name...'  id="outlined-textarea"
            multiline
            variant="outlined" />
              </label>
              <label htmlFor="">
              <TextField name='age'   type="text" label='Please enter your Age...' id="outlined-textarea"
            multiline
            variant="outlined"/>
              </label>
              <label htmlFor="">
              <TextField name='email'   type="text" label='Example@email.com' id="outlined-textarea"
            multiline
            variant="outlined"/>
              </label>

              <label htmlFor="">
         
                  <TextField name="Massge"   id="" cols="30" rows="10" label='Your Massge Goes Here...'
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"/>
              </label>
              <button type='submit'>SEND</button>
      </form>
    );
  };


export default Form;
