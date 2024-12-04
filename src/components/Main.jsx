import React, { useState, useEffect, useRef } from "react";
import HFRecipe from "./HFRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../HuggingFaceApi";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef(null);

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredients");
        setIngredients((prev) => [...prev, newIngredient]);
        event.target.reset();
    }

    async function getRecipe() {
        setRecipe("Getting a suitable recipe ...");
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    useEffect(() => {
        if (recipeSection.current !== null && recipe !== "") {
            recipeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe]);

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={addIngredient}>
                <input
                    type="text"
                    aria-label="Add ingredients"
                    name="ingredients"
                    placeholder="e.g. Bell pepper"
                    required
                />
                <button type="Submit">Add Ingredient</button>
            </form>

            {ingredients.length > 0 ? (
                <IngredientsList
                    ref={recipeSection}
                    ingredientsList={ingredients}
                    fun={getRecipe}
                />
            ) : null}

            {ingredients.length < 4 && ingredients.length >= 0 ? (
                <h4>Add atleast 4 ingredients to generate a recipe</h4>
            ) : null}

            {recipe ? <HFRecipe recipe={recipe} /> : null}
        </main>
    );
}
