import {FaTrashAlt, FaPencilAlt} from 'react-icons/fa';

const ToDo = (props) => {
    return(
        <div className='todooutput'>
            {/*Checkbox da Tarefa*/}
            <input type="checkbox" readOnly checked={props.active} onClick={() => props.onCheck(props.index)} />
            {/*Texto da tarefa*/}
            <p style={{ textDecoration: props.active? 'line-through': 'none', color: props.active? '#52FF00':'white'}}>{props.text}</p>

            <div className="todooButtons">
                {/*Botão de Editar*/}
                <button className='editbutton' style={{backgroundColor: '#948FD1', border:'none'}}
                        onClick={()=>props.onEdit(props.index)}
                >
                    <FaPencilAlt color="white"/>
                </button>

                {/*Botão de Deletar*/}
                <button className="deletebutton" style={{backgroundColor: '#948FD1', border:'none'}}
                        onClick={()=>props.onRemove(props.index)}
                >
                    <FaTrashAlt color="white"/>
                </button>
            </div>
        </div>
    )
}

export default ToDo;