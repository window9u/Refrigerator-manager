import CreateItem from "./CreateItem";
import EditItem from "./EditItem";
import TableItem from "./TableItem";
import { useState } from "react";

export default function Table({ category, ingredients }) {
  const [isCreate, setIsCreate] = useState(true);
  const [selectedOption, setSelectedOption] = useState("sort by date"); // Default value
  const sortedData = () => {
    if (selectedOption === "sort by date") {
      return ingredients.sort(
        (a, b) => new Date(a.consumableDate) - new Date(b.consumableDate)
      );
    } else {
      return ingredients.sort((a, b) => a.name.localeCompare(b.name));
    }
  };
  const handleSort = (event) => {
    setSelectedOption(event.target.value);
  };

  const onIsCreate = () => {
    setIsCreate(!isCreate);
  };
  const onIsEdit = (id) => {};
  return (
    <div class="card">
      <header class="card-header">
        <div class="column is-8">
          <p class="card-header-title">{category}</p>
        </div>
        <div class="column is-4">
          <div class="select">
            <select value={selectedOption} onChange={handleSort}>
              <option>sort by date</option>
              <option>sort by name</option>
            </select>
          </div>
        </div>
      </header>
      <div class="card-content">
        <div class="content">
          {sortedData().map((ingredient) =>
            ingredient.edit ? (
              <EditItem
                key={ingredient.id}
                data={ingredient}
                isEdit={onIsEdit}
              />
            ) : (
              <TableItem
                key={ingredient.id}
                data={ingredient}
                isEdit={onIsEdit}
              />
            )
          )}
          {isCreate ? (
            <button class="button" onClick={onIsCreate}>
              add ingredients
            </button>
          ) : (
            <CreateItem
              isCreate={onIsCreate}
              data={{
                name: "",
                quantity: "",
                consumableDate: "",
                category: category,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
