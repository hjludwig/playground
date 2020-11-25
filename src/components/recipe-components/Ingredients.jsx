import React from "react";

const Ingredients = ({ ingredients }) => {
    let id = 0;
    return (
        <section className="ingredients">
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map(ingredient => {
                    return <li key={id++}>{ingredient}</li>;
                })}
            </ul>
        </section>
    );
};

export default Ingredients;
