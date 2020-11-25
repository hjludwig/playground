import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const Recipe = ({ recipe, setRecipe, url }) => {
    const fetchRecipe = async () => {
        const response = await fetch(
            "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
            {
                method: "POST",
                headers: {
                    "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
                    "x-rapidapi-key":
                        "992b03d53amsh18d77b4123d807cp1eccf7jsnb06fb80a46d6",
                    "content-type": "text/plain",
                    accept: "text/plain",
                },
                body: url,
            }
        );
        const data = await response.json();
        setRecipe(data[0]);
    };

    useEffect(() => {
        fetchRecipe();
    }, []);
    console.log(recipe);
    if (!recipe) {
        console.log("No recipe...");
        return (
            <>
                <h2>Loading...</h2>
            </>
        );
    }
    const { name, ingredients, images, description, instructions } = recipe;
    return (
        <section className="recipe">
            <header>
                <img src={images[0]} alt={name} />
                <h2>{name}</h2>
                <p>{description}</p>
            </header>
            <Ingredients ingredients={ingredients} />
            <Instructions instructions={instructions[0].steps} />
        </section>
    );
};

export default Recipe;
