import React, { useState, useEffect } from "react";
import Controls from "./recipe-components/Controls";
import InputForm from "./recipe-components/InputForm";
import Recipe from "./recipe-components/Recipe";
import RecipeList from "./recipe-components/RecipeList";

const RecipeApp = () => {
    const [url, setUrl] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle Forms
    const getUrl = e => {
        // Get the URL from the input
        e.preventDefault();
        setUrl(value);
        setIsSubmitted(true);
    };
    const onChange = e => {
        setValue(e.target.value);
    };
    const [value, setValue] = useState("");

    const [recipe, setRecipe] = useState();
    const [archive, setArchive] = useState([]);

    const saveRecipe = () => {
        if (archive.includes(recipe)) {
            console.log("already added");
        } else {
            setArchive([...archive, recipe]);
        }
        console.log("archive:", archive);
    };
    const addNewRecipe = () => {
        setIsSubmitted(false);
        setRecipe();
    };
    if (!isSubmitted) {
        return (
            <InputForm
                url={url}
                getUrl={getUrl}
                onChange={onChange}
                value={value}
                setValue={setValue}
            />
        );
    }
    return (
        <main>
            <RecipeList archive={archive} />
            <Recipe recipe={recipe} setRecipe={setRecipe} url={url} />
            <Controls saveRecipe={saveRecipe} addNewRecipe={addNewRecipe} />
        </main>
    );
};

export default RecipeApp;
