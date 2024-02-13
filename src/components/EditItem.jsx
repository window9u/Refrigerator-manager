import { useState } from "react";

export default function EditItem({ data, isEdit, index, onEdit }) {
  const [ingredient, setIngredients] = useState(data);
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
          <div class="column is-4">{data.quantity}</div>
          <div class="column is-4">{data.consumableDate}</div>
        </div>
        <div class="column is-4 tableItem">
          <button
            class="button is-small is-primary"
            onClick={() => {
              onEdit(ingredient);
              isEdit(index);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
