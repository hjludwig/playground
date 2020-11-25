import React, { useState, useEffect } from "react";

const Cards = () => {
    // const [theCards, setTheCards] = useState([]);

    useEffect(() => {
        console.log("render");
        for (let i = 0; i >= 20; i++) {
            console.log("loop");
        }
    });

    return <h1>Howdy</h1>;
};

export default Cards;
