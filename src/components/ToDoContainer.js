import { useState } from 'react';
import {FaPlus} from 'react-icons/fa';
import ToDo from './ToDo';

const ToDoContainer = () => {
    const [ToDos, setToDos] = useState([]);
    const [input, setInput] = useState("");

    let inputtext = document.getElementById('inputtext');
    
    const handleToDo = (text) => {
        if(text.length>0){
            setToDos([...ToDos, {text: text, active: false}])
        }
        inputtext.value = '';
        inputtext.classList.remove('coloredit');
        setInput('');
    }

    const handleCheck = (index) => {
        const newToDos = [...ToDos]
        newToDos[index].active = !newToDos[index].active;
        setToDos(newToDos);
    }

    function handleRemove(index){
        const newToDos = [...ToDos]
        newToDos.splice(index, 1)
        setToDos(newToDos);
    }

    function handleEdit(index){
        const newToDos = [...ToDos];
        let selectedItem = newToDos[index].text;
        handleRemove(index);
        inputtext.value = selectedItem;
        inputtext.classList.add('coloredit');
    }

    return(
        <div className="container">
            <div className="inputinfo">
                <input id='inputtext' type="text" placeholder="Write here" onChange={(e) => setInput(e.target.value)}/>
                <button onClick={() => {handleToDo(input)}}><FaPlus/></button>
            </div>
            <div className="options">
                {
                    ToDos.map((ToDos, index) => (
                        <ToDo  text={ToDos.text}
                                index = {index} 
                                active={ToDos.active} 
                                edit={ToDos.edit} 
                                key={index} 
                                onRemove={handleRemove} 
                                onCheck={handleCheck} 
                                onEdit={handleEdit}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ToDoContainer;