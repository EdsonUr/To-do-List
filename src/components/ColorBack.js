const ColorBack = ({colorValue, setColorValue}) => {
    return(
        <div>
            <input className="colorbutton" 
                    onChange={(e) => setColorValue(e.target.value)}
                    type="text"
                    placeholder="Choose the background color" 
            />
        </div>
    )
}

export default ColorBack;