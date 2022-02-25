import React from "react";
/*class Testcons extends React.Component
{
    constructor()
    {
        super();
        this.state={
                    rno:1001,                                        
                    name:'gowthaman',
                    mark:100
                    };
    }
    render()
    {
        return <h2>This is constructor {this.state.name} {this.state.mark}</h2>;
    }
}*/
// constructor with argument passing (props in constructor)
/*
class Testcons extends React.Component
{
    constructor(props)
    {
        super(props);        
        //additional
        this.state={
                    myname:props.name,
                    myage:props.age
                  }        
    }
    render()
    {
        return <h2>Hello {this.props.name} {this.props.age} {this.state.myname} {this.state.myage}</h2>;
    }
}
export default Testcons;
*/
//React class component state
/*
class Testcons extends React.Component
{
    constructor()
    {
        super();        
        //additional
        this.state={
                    rno:1001,
                    name:'ajay',
                    mark:55            
                    }        
    }
    render()
    {
        return <h2>{this.state.rno}-------{this.state.name}----- {this.state.mark}</h2>;
    }
}
export default Testcons;
*/
// CHANGING the state object or update
//=====================================
/*
class Testcons extends React.Component
{
    constructor()
    {
        super();        
        this.state={
                    rno:1001,
                    name:'ajay',
                    mark:55            
                    }        
    }
    chnageMark=()=>    
    {
        this.setState({mark:100});
        //this.setState({mark:this.state.mark+50});
    }
    render()
    {
        return(
            <>
         <h2>{this.state.rno}-------{this.state.name}----- {this.state.mark}</h2>
         <button type="button" onClick={this.chnageMark}>Change mark</button>
            </>
        );
    }
}
export default Testcons;
*/
// React life cycle components
// 1.mountin 2.updating 3.unmounting
//1.mounting- i) constructor,ii)getderivedstatefromprops,iii)render,iv)componentdidmount
//ii. getderivedstatefromprops
/*
class Testcons extends React.Component
{
    constructor(props)
    {
        super(props);        
        this.state={
                    rno:1001,
                    name:'ajay',
                    mark:21    
                    }        
    }
    /*static getDerivedStateFromProps(props, state) {
        return {mark: props.mymark };
      }*/
/*
     componentDidMount(){
        setTimeout(() => {
            this.setState({mark: 200})
          }, 5000)
    }

    render()
    {
        return(
            <>
         <h2>{this.state.rno}-------{this.state.name}----- {this.state.mark}</h2>
         
            </>
        );
    }
}
export default Testcons;

// 2.updating(5 types of methods)
// i. getDerivedStateFromProps
/*
class Testcons extends React.Component
{
    constructor(props)
    {
        super(props);        
        this.state={
                    rno:1001,
                    name:'ajay',
                    mark:21    
                    }        
    }
/*   static getDerivedStateFromProps(props, state) {
        return {mark: props.mymark };
      }*/
      /*
      shouldComponentUpdate()
      {
          return true; // default true
      }
      
      changeMark=()=>    
    {
        this.setState({mark:200});
        //this.setState({mark:this.state.mark+50});
    } 
    changeName=()=>    
    {
        this.setState({name:'thimothi'});
        //this.setState({mark:this.state.mark+50});
    } 

    render()
    {
        return(
            <>
         <h2>{this.state.rno}-------{this.state.name}----- {this.state.mark}</h2>
         <button type="button" onClick={this.changeMark}>Change mark</button>
         <button type="button" onClick={this.changeName}>Change Name</button>
            </>
        );
    }
}
export default Testcons;*/

//4.getsnapshotbeforeupdate
/*
class Testcons extends React.Component
{
    constructor(props)
    {
        super(props);        
        this.state={
                    rno:1001,
                    name:'ajay',
                    mark:21    
                    }        
    }
getSnapshotBeforeUpdate(prevProps,prevState)
    {
document.getElementById("div1").innerHTML="befor update :"+prevState.mark;
    }
 
    componentDidMount()
    {
        setTimeout(() => {
            this.setState({mark: 100})
          }, 2000)
    }  
    componentDidUpdate()
    {
        document.getElementById("div2").innerHTML="after update :"+this.state.mark;
    }
 

    render()
    {
        return(
            <>
         <h2>{this.state.rno}-------{this.state.name}----- {this.state.mark}</h2>
        <div id="div1"></div>
         <div id="div2"></div>
            </>
        );
    }
}
export default Testcons;
*/
// 3.unmounting

class Child extends React.Component
{
    componentWillUnmount()
    {
    alert("component will unmounted");
    }
    render()
    {
    return <h1>this is unmounting</h1>;
    }
}
class Testcons extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={show:true};
    }
    delHeader=()=>
    {
        this.setState({show:false});
    }
    render()
    {
        let myheader;
        if(this.state.show==true)
        {
            myheader=<Child/>;
        }

        return(
            <>
                {myheader}
                <button type="button" onClick={this.delHeader}>Clickme</button>
            </>
        );
    }

}
export default Testcons;