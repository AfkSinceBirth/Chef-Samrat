import React, { forwardRef } from "react";

const IngredientsList = forwardRef((props, ref) => {
    const ingredientsListItems = props.ingredientsList.map((e) => <li key={e}>{e}</li>);

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>
            {props.ingredientsList.length > 3 ? (
                <div className="get-recipe-container" ref={ref}>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.fun}>Get a recipe</button>
                </div>
            ) : null}
        </section>
    );
});

export default IngredientsList;
