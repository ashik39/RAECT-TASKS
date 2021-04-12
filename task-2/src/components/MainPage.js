import React, { useState } from 'react'

function MainPage(){
    const [input,setInput] = useState('')
    const [data,setData] = useState([])
    //const [updatedData,setUpdatedData] = useState([])
    const [inputError,setInputError] = useState('')
    const [dataError,setDataError] = useState('')
    function setValue(e){
        setInput(e.target.value)
    }

    function append(){

        if(input.trim() === ""){
            setInputError("*Input cant be blank")
        }
        else if(!/^[a-zA-z0-9]{2,25}$/.test(input)){
            setInputError("Invalid input, Kindly check it");
        }
        else{
            setData([...data, 
                {id : data.length , value : input}])
        }
        

    }

    function remove(index){
        console.log(index)
        let message =  window.confirm("Remove Data?");
        console.log(message)
        if(message === true){
            
            //delete data[index.value];
            // delete data[index];  
            //data.filter((item) => item.index !== index);
            //const newList = data.splice(index,index-1);
            return data.splice(index,1)

            //setData()
            //return data;
            //setUpdatedData([...updatedData, newData]);
            //setData(data.splice(index,1));
        }
        if(data === []){
            setDataError("NO DATA")
        }
    }


    return(
        <div className="Border">
            <h5 className="color">{inputError}</h5>

            <div className="input-group mb-3">
                <input type="text" value={input} onChange={setValue} className="form-control width" placeholder="Type here"/>
                <button type='submit' onClick = {() => append()} className="btn btn-primary"> ADD </button>
            </div>
            
            <br/>
            <h4>DATA LIST</h4>
            <h5 className="color">{dataError}</h5>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.value} &nbsp;&nbsp;<button className="btn btn-primary" onClick={()=>remove(item.id)}>REMOVE</button><br/></li>
                ))}
            </ul>
        </div>
    )

}


// {data.filter(item => item.id !== 60).map(filteredItem => (
//     <li>
//       {filteredItem.value}
//     </li>
//   ))}
export default MainPage