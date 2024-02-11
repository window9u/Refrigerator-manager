import TableItem from "./TableItem";
export default function Table() {
  return (
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">source</p>
      </header>
      <div class="card-content">
        <div class="content">
          <TableItem />
          <TableItem />
        </div>
      </div>
    </div>
  );
}
