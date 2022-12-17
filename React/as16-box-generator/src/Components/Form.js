import react, { useState } from "react";

const Form = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
    };

    return (
        
        <form onSubmit={handleSubmit} className="App" >
            <h1>Color</h1>
            <input
                type="text"
                rows="4"
                cols="50"
                placeholder="Write the color here."
                onChange={(e) => setColor(e.target.value)}
                value={color}
            ></input>

            <input type="submit" value="Add Box" />

        </form>
    );
};

export default Form;