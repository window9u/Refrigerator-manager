import EditItem from "./EditItem";
import TableItem from "./TableItem";
import { useState } from "react";

export default function Table({
  category,
  ingredients,
  onCreate,
  onDelete,
  onEdit,
}) {
  const [isEdit, setIsEdit] = useState(Array(ingredients.length).fill(false));

  const onIsEdit = (i) => {
    const newEdit = isEdit.slice();
    newEdit[i] = !newEdit[i];
    console.log(isEdit[i]);
    setIsEdit(newEdit);
  };

  return (
    <div class="card">
      <header class="card-header">
        <div className="column is-8">
          <p class="card-header-title">{category}</p>
        </div>
        <div className="column is-4">
          <button class="button">sort by Date</button>
        </div>
      </header>
      <div class="card-content">
        <div class="content">
          {ingredients.map((ingredient, index) =>
            isEdit[index] ? (
              <EditItem
                key={ingredient.id}
                data={ingredient}
                isEdit={onIsEdit}
                index={index}
                onEdit={onEdit}
              />
            ) : (
              <TableItem
                key={ingredient.id}
                data={ingredient}
                onDelete={onDelete}
                isEdit={onIsEdit}
                index={index}
              />
            )
          )}
          <div class="box">add Ingredents</div>
        </div>
      </div>
    </div>
  );
}
