import { useContext } from "react";
import { IngredientDispatchContext } from "../ingredientContext";

export default function TableItem({ data }) {
  const ingredientActions = useContext(IngredientDispatchContext);

  return (
    <div class="box">
      <div class="columns">
        <div class="columns column is-8 tableItem">
          <div class="column is-4">{data.name}</div>
          <div class="column is-4">{data.quantity}</div>
          <div class="column is-4">{data.consumableDate}</div>
        </div>
        <div class="column is-4 tableItem">
          <button
            class="button is-small is-primary"
            onClick={() => {
              ingredientActions.handleEdit(data.id);
            }}
          >
            Edit
          </button>
          <button
            class="button is-small is-danger"
            onClick={() => {
              ingredientActions.handleDelete(data.id);
            }}
          >
            Delete
          </button>
          <button
            class="button is-small is-info"
            onClick={() => {
              ingredientActions.handleSelect(data.id);
            }}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
