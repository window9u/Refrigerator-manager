export default function TableItem({ data, isEdit, index, onDelete }) {
  return (
    <div class="box">
      <div class="columns">
        <div class="columns column is-8 tableItem">
          <div class="column is-4">{data.name}</div>
          <div class="column is-4">{data.quantity}</div>
          <div class="column is-4">{data.consumableDate}</div>
        </div>
        <div class="column is-4 tableItem">
          <button class="button is-small is-info">Select</button>
          <button
            class="button is-small is-primary"
            onClick={() => {
              isEdit(index);
            }}
          >
            Edit
          </button>
          <button
            class="button is-small is-danger"
            onClick={() => {
              onDelete(data);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
