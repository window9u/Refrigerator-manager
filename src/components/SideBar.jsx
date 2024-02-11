import NavItem from "./NavItem";

export default function SideBar() {
  const navNames = ["Home", "menu", "table"];
  return (
    <div id="sidebar">
      <p class="menu-label">refrigerator</p>
      <ul class="menu-list">
        <NavItem path="Home" />
        <NavItem path="generate menu" />
        <NavItem path="meal schedule table" />
      </ul>
    </div>
  );
}
