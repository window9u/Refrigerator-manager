import TableItem from "./TableItem";
export default function Table({
  category,
  ingredients,
  onCreate,
  onDelete,
  onEdit,
}) {
  return (
    <div class="card">
      <header class="card-header">
        <div className="column is-8">
          <p class="card-header-title">{category}</p>
        </div>
        <div className="column is-4">
          <button class="button">add ingredient</button>
        </div>
      </header>
      <div class="card-content">
        <div class="content">
          {ingredients.map((ingredient) => (
            <TableItem
              key={ingredient.id}
              data={ingredient}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
