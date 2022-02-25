/*
function LoginFunction()
{
function validatefun()
    {
        var uname=document.getElementById("un").value;
        var pword=document.getElementById("pw").value;
        alert(uname);
        alert(pword);
        if(uname==pword)
        {
            //alert("correct user");              
            document.getElementById("res").innerHTML="correct user";
        }
        else
        {
            //alert("invalid user");
            document.getElementById("res").innerHTML="Invalid user";
        }        
    }

    const v=(
        <>
        
        <label>Enter User Name:
                <input type="text" id="un"></input>
                </label>    
        <label>Enter Password:
                <input type="password" id="pw"></input>
                </label>    
            <br></br>
            <button onClick={validatefun}>Login</button>            
            <h1>Result===========:</h1>
            <div id="res"></div>
        

        
        </>
    );
    return(
        <>
        {v}        
        </>    
    );
}
export default LoginFunction;
*/
// Handling Forms
/*
import { useState } from "react";
function LoginFunction()
{
    const[name,setName]=useState("gowthaman");
    const handleSubmit = (event) => {
        event.preventDefault();  // page without refresh
        alert('The name you entered was: '+name);
      }
return(
    <>
    <form onSubmit={handleSubmit}>
    <h1>React forms handling Events</h1>
    <label>Enter Your Name:
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}></input>
    </label>
    <input type="submit"></input>
    </form>
    </>
);
}
export default LoginFunction;
*/
// text area
/*
import { useState } from "react";
function LoginFunction() {

    const [address, setTextarea] = useState("The content of a textarea goes in the value attribute-default text area");
  
    const handleChange = (event) => {
      setTextarea(event.target.value)
    }
    function gowtham()
    {
        alert(address);
    }
  
    return (
      <form onSubmit={gowtham}>
        <textarea value={address} onChange={handleChange} />
        <input type="submit"></input>
      </form>
    )
  }
  export default LoginFunction;
  */
 /*
  import { useState } from "react";
  function LoginFunction() {
        const [myname, setmyname] = useState("gowthaman");  
      const handleChange = (event) => {
          
        setmyname(event.target.value)
      }
      function gowthamfun(event)
      {          
          event.preventDefault(); // page without refresh 
          alert(myname);
      }    
      return (
        <form onSubmit={gowthamfun}>
        <select value={myname} onChange={handleChange}>
        <option value="gow">Gow</option>
        <option value="gowthaman">Gowthaman</option>
        <option value="ajay">Ajay</option>
        <option value="thimothi">Thimothi</option>
      </select>          
          <input type="submit"></input>
        </form>
      )
    }
    export default LoginFunction;
  */
 // multiple input values

 import { useState } from "react";

function LoginFunction() {
  const [inputs, setInputs] = useState({username:"ggggg",age:19});  // here usestate is object (multiple)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(inputs);
    //console.log(inputs);
    alert(inputs.age);
    alert(inputs.username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
export default LoginFunction;
