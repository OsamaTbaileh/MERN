import react, { useState } from "react";

const Display = (props) => {
    return (
    <>
        {props.color.map((box) => (<p key={box.x} style={{ backgroundColor: box.y,
                height: "200px",
                width: "200px",
                display: "inline-block",
                margin: "15px",
                border: "1px solid black"
                }}
            ></p>
        ))}
    </>
    );
};

export default Display;