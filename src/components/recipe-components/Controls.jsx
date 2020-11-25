import React from "react";

const Controls = ({ saveRecipe, addNewRecipe }) => {
    return (
        <section>
            <button className="save" type="button" onClick={saveRecipe}>
                Save Recipe
            </button>
            <button className="new" type="button" onClick={addNewRecipe}>
                Add New Recipe
            </button>
        </section>
    );
};

export default Controls;
