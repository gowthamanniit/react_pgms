import {useState} from 'react'
/*
function AjayHooksForms()
{
    const [name,setName]=useState("Ajay-default Text");
    const myfuntochange=(event)=>{
        setName(event.target.value);
    }
   const showfun=(event)=>
    {
        event.preventDefault(); // don't refresh
        alert(name);
    }
    return(
        <>
        <h1>React Form using React Hooks</h1>
        <form onSubmit={showfun}>
            <label>ENter User Name:
                <input type="text" value={name} onChange={myfuntochange}></input>
            </label>
            <input type="submit"></input>
            </form>
        </>    
    );
}
export default AjayHooksForms;
*/

function AjayHooksForms()
{
    const [address,setAddress]=useState("karur\ntrichy");
    const [address1,setAddress1]=useState("");
    const myfuntochange=(event)=>{
        setAddress(event.target.value);
    }
    const myfuntochange1=(event)=>{
        setAddress1("");
    }
   const showfun=(event)=>
    {
        event.preventDefault(); // don't refresh
        //setAddress1(event.target.value);
        //alert(address1);
        alert("test");
        setAddress1(address);
    }
    return(
        <>
        <h1>React Form using React Hooks</h1>
        <form onSubmit={showfun}>
            <table border="3"> 
                <tr>
                    <td>
            <label>ENter Your Address:</label>
            </td>
            <td>
            <textarea rows="7"  value={address} onChange={myfuntochange}></textarea>
            </td>
            <td>
            <input type="submit"></input>
            </td>
            <tr>
                <td>
                <textarea rows="7"  value={address1} onChange={myfuntochange1}></textarea>
                </td>
            </tr>
            </tr>
            </table>
            </form>
        </>    
    );
}
export default AjayHooksForms;
