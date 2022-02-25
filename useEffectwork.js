/*
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(10);

  // Similar to componentDidMount and componentDidUpdate:
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      //(change count incrmenet and save see effect--> output count start from last count)
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;
*/
// using class using component did update or mount (change count incrmenet and save see effect--> output count start from 0)
/*
import React  from "react";
class Example extends React.Component 
{
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }  
    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
      }    
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 2 })}>
            Click me
          </button>
        </div>
      );
    }
  }
  export default Example;
  */
  import React, { useState, useEffect } from 'react';

  function Example() {
    const [count, setCount] = useState(1);
  
    // Similar to componentDidMount and componentDidUpdate:
    
    useEffect(() => {
      // Update the document title using the browser API
      setTimeout(() => {
        document.title = `You clicked ${count} times`;
      }, 1000);
      
    },[]);   // if we put empty array --> it will execute only one time
  
    return (
      <div>
        <p>You clicked {count} times</p>
         {/*(change count incrmenet and save see effect--> output count start from last count) */}
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  export default Example;
  