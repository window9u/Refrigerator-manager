export default function TableItem({ data, onEdit, onDelete }) {
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-8 tableItem">{data.name + data.quantity}</div>
        <div className="column is-4 tableItem">
          <button className="button is-small is-info">Select</button>
          <button
            className="button is-small is-primary"
            onClick={() => {
              onEdit(data);
            }}
          >
            Edit
          </button>
          <button
            className="button is-small is-danger"
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
