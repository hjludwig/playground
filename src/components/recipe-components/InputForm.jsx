import React, { useState } from "react";

const InputForm = ({ getUrl, value, onChange }) => {
    // const [value, setValue] = useState("");

    return (
        <>
            <h1>Enter a recipe URL</h1>
            <form onSubmit={getUrl}>
                <input
                    type="text"
                    name="url"
                    id="recipe-url"
                    value={value}
                    onChange={onChange}
                />
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </>
    );
};

export default InputForm;
