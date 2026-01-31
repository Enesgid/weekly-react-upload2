import { useState } from "react";
import Items from './items.jsx';
function Codes() {
    const[item ,setItem] = useState('');
    const [list ,setList] = useState(['eat','sleep','code']);
    const [remove ,setRemove] =useState(false);

    // onchange for input

    function addChange(e) {
        const newItem = e.target.value;
        setItem(newItem)
    }
    // add button code
    function addItems() {
        setList( 
            (prev)=>{
            return[...prev,item]      
           } 
        )
        setItem('')
    }
    // delete button codes

        function removetext(id) {
       setRemove('')
        setList(
            prevItem=>{
                return prevItem.filter(
                    (item,index)=>{
                        return(
                            index !== id
                        )
                    }
                )
            }
        )
        
    }
    // set time and automatically update itself
    const t= new Date().toLocaleTimeString();
    const [time,setTime] =useState(t);
    const date = new Date().getFullYear();
    function updateTime() {
        const newTime =new Date().toLocaleTimeString();
        setTime(newTime)
    }
    setInterval(updateTime,1000)
    
//  html tags
    return(
        <div className="container">
            <div className="header">
                <h1>To-Do List</h1>
                <h3>{time}</h3>
            </div>
            <div className="form">
                <input type="text" value={item} onChange={addChange} 
                    placeholder="what will you be doing"
                /> <span onClick={addItems}>Add</span>

                <ol>
                    {list.map((listItem,index)=>{
                        return( <>
                          <Items
                        key = {index}
                        id = {index}
                        text ={listItem}
                        delete = {removetext}
                        remove ={remove}
                        />
                           
                        </>
                     
                        )
                    })}
                </ol>
            </div>
            <footer>
                <h4>copyrite {date}</h4>
            </footer>
        </div>
    )
}
export default Codes;