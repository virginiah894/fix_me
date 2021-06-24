
const validation = (values) =>{
    let errors ={};
    if (!values.fullname){
        errors.fullname = "Name is Required."
    }
    if (!values.email){
        errors.email = "Email is Required."
    } else if (!/\S+@\S+\. \S+/.test(values.email)){
        errors.email = "Email is invalid."
    }
    if(!values.password){
        errors.password = "Password is required."
    } else if (values.password.length < 5){
        errors.password = "Password Must have more than 5 characters"
    } 
    return errors;



};
export default validation;