/* 

// single array implementation

function DisplayAll(props)
{
    return <li> {props.show} </li>;
}

function LoopWork()
{
    const myarr=["gowthaman","karur","livewire","user","data"];
    return(
        <>
            <h1>Looping - it will perform using map array method</h1>
            <ol type="A">
            {myarr.map((name1) => <DisplayAll show={name1}/>)}
            </ol>
        </>
    );
}
export default LoopWork;
*/
// array inside objects (json) - main purpose key : value pair work

function DisplayHeading()
{
    return <tr><th>Roll Number</th><th>Student Name</th><th>Mark</th></tr>
}
function DisplayAll(props)
{
    return <tr> <td>{props.rno} </td><td> {props.name} </td><td> {props.mark} </td></tr>;
}

function LoopWork()
{
    const myarr=[
        {
            rno:1,
            name:"gowthaman",
            mark:88
        },
        {
            rno:2,
            name:"ajay",
            mark:77
        },
        {
            rno:3,
            name:"thimothi",
            mark:89
        },
        {
            rno:3,
            name:"thimothi",
            mark:89
        },
        {
            rno:3,
            name:"thimothi",
            mark:89
        },
        {
            rno:3,
            name:"thimothi",
            mark:89
        },
        {
            rno:3,
            name:"thimothi",
            mark:89
        }
    ];

    return(
        <>
            <h1>Looping - it will perform using map array method (key:value)</h1>
        <table border="4">
            <DisplayHeading/>
            {myarr.map((myvar) => <DisplayAll rno={myvar.rno}  name={myvar.name}  mark={myvar.mark}/>)}
        </table>
        </>
    );
}
export default LoopWork;




