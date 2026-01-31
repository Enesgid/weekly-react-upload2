
function Items(props) {


    return (
        <div id="lists">
            <li
            >{props.text}</li>
            { <span id="span" onClick={()=>{props.delete(props.id)}}> remove </span> }
           
        </div>

    );
}
export default Items;