import { useState } from "react";
import { IngredientDispatchContext } from "../ingredientContext";
import { useContext } from "react";
export default function EditItem({ data }) {
  const [ingredient, setIngredients] = useState(data);
  const ingredientActions = useContext(IngredientDispatchContext);
  const handleChange = (e) => {
    setIngredients({ ...ingredient, [e.target.name]: e.target.value });
  };

  return (
    <div class="box">
      <div class="columns">
        <div class="columns column is-8 tableItem">
          <div class="column is-4">
            <input
              class="input"
              placeholder="food name"
              name="name"
              value={ingredient.name}
              onChange={handleChange}
            />
          </div>
          <div class="column is-4">
            <input
              class="input"
              placeholder="quantity"
              name="quantity"
              value={ingredient.quantity}
              onChange={handleChange}
            />
          </div>
          <div class="column is-4">
            <input
              class="input"
              placeholder="consumable date"
              name="consumableDate"
              value={ingredient.consumableDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="column is-4 tableItem">
          <button
            class="button is-small is-primary"
            onClick={() => {
              ingredientActions.handleUpdate(ingredient);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
