import  React, { useState } from 'react';
import SignUpForm from './SignupForm';
import SignupFormSuccess from './SignupFormSuccess';

 const Form =()=>{
     const [FormIsSubmitted, setFormIsSubmitted] = useState(false);
     const submitForm = () =>{
         setFormIsSubmitted(true);
     };
     return (
         <div>

             {!FormIsSubmitted ? (
             <SignUpForm submitForm = {submitForm }/>
             ): (
             <SignupFormSuccess/>
             )}

        </div>
     );
 };

 export default Form;