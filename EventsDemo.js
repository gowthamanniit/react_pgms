import React from "react";
/*function MyComp()
{
    const myFunction=()=>
    {
        //alert("this is button click event, when user click the button");
        document.getElementById("div1").innerHTML="Button Clicked Event";
        //document.write("<h1>This is button click event</h1>");        
    }
    return (
            <>            
            <button onClick={myFunction}>Clickme</button>
            <div id="div1"></div>
            </>
    );
}
export default MyComp;*/
/*
class MyComp extends React.Component
{
    render()
    {
       const myFunction=()=>
        {
        //alert("this is button click event, when user click the button");
        document.getElementById("div1").innerHTML="Button Clicked Event";
        //document.write("<h1>This is button click event</h1>");        
        }
        return(
            <>
            <button onClick={myFunction}>Clickme</button>
            <button onClick={()=>alert('hai')}>clickme-show-alert</button>
            <div id="div1"></div>            
            </>
        );
    }
}
export default MyComp;
*/
// button click event with arg or parameter passing
/*
class MyComp extends React.Component
{
    render()
    {
       const myFunction=(a,b)=>
        {
        //alert("this is button click event, when user click the button");
        document.getElementById("div1").innerHTML="Button Clicked Event "+(a+b);
        //document.write("<h1>This is button click event</h1>");        
        }
        return(
            <>
            <button onClick={()=>myFunction(23,45)}>Clickme</button>            
            <div id="div1"></div>            
            </>
        );
    }
}
export default MyComp;
*/
// React find : Event
class MyComp extends React.Component
{
    render()
    {
       const myFunction=(a,b)=>
        {
            //alert("this is button click event, when user click the button");
            document.getElementById("div1").innerHTML="Event name is :"+b.type;
            //document.write("<h1>This is button click event</h1>");        
        }
        return(
            <>            
            <button onDoubleClick={(event)=>myFunction(22,event)}>double click</button>            
            <button onClick={(event)=>myFunction(123,event)}>onclick it supports enter and space key</button>            
            <button onMouseEnter={(event)=>myFunction(123,event)}>onmouseenter</button>            
            <button onMouseUp={(event)=>myFunction(123,event)}>onmouseup-don't support space & enter key</button>            
            <button onMouseDown={(event)=>myFunction(123,event)}>onmouseDown</button>                        
            <div id="div1"></div>            
            </>
        );
    }
}
export default MyComp;