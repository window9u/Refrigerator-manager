export default function TableItem() {
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-8">tableitem content</div>
        <div className="column is-4">
          <button className="button is-small is-info">Select</button>
          <button className="button is-small is-primary">Edit</button>
          <button className="button is-small is-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
