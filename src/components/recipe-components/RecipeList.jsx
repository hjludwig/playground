import React from "react";

const RecipeList = ({ archive }) => {
    return (
        <section>
            <h2>Saved Recipes</h2>
            {archive.map(recipe => {
                return <h4> {recipe.name}</h4>;
            })}
        </section>
    );
};

export default RecipeList;
