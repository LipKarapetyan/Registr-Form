import { useState } from "react";


function RegistrationForm() {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const[gender,setGender]=useState("")
    const[password,setPasword]=useState("")
    const [repeatPassword, setRepeatPassword] = useState("");

    function sub(e) {
        e.preventDefault()
        if (!firstName || !lastName) {
            alert('Please enter your first name and last name.')
          } else if (email.indexOf('@') === -1) {
            alert("Please enter a valid email address.")
          } else if (password.length < 8) {
            alert("Password should be at least 8 characters long.")
          } else if (password !== repeatPassword) {
            alert("Passwords do not match.")
          } else {
            
           
            alert('You have successfully registered.');
          }
    }

    return (
        <div className="con">
          <h2 className="text-red-500">Registration Form</h2>
         
          <form onSubmit={sub} className="flex flex-col gap-px" >
            <label>
              First Name:
              <input  
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email-adres:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
                Enter  Age:
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <br />
            <label>
              Gender:
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPasword(e.target.value)}
              />
            </label>
            <br />
            <label>
              Repeat Password:
              <input
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit" className="bg-blue-500">Submit</button>
          </form>
        </div>
      );

}

export default RegistrationForm