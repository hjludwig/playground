import React from "react";

const Instructions = ({ instructions }) => {
    let id = 0;
    return (
        <section className="instructions">
            <h3>Instructions</h3>
            <ul>
                {instructions.map(instruction => {
                    return <li key={id++}>{instruction}</li>;
                })}
            </ul>
        </section>
    );
};

export default Instructions;
