import ToDoContainer from "./ToDoContainer";
import ColorBack from "./ColorBack";
import {useState} from 'react'

const Content = () => {
    const [colorValue, setColorValue] = useState('');

    return(
        <main style={{backgroundColor: colorValue}}>
            <ToDoContainer/>
            <ColorBack colorValue={colorValue} setColorValue={setColorValue}/>
        </main>
    )
}

Content.defaultProps = {
    colorValue: '#625C71',
}


export default Content;