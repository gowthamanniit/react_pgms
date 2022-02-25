import React from "react"
class Mycomponent extends React.Component
{
    render()
    {
        return(
            <div>
             <h2>Welcome to HTML</h2>
             <h1>Welcome to ALL</h1>
             </div>
             );
    }
}
class Myderive extends Mycomponent
{
    render()
    {
              return(
                  <>
                    <Mycomponent/>
                    <h2>This is derive class</h2>
                    <Mycomponent/>
                   </>
                   );
    }
}
export default Myderive;
