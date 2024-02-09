import NavItem from "./NavItem"

export default function SideBar(){
    const navNames=["Home", "menu","table"];
    return <div id="sidebar">
        <ul>
        {navNames.map( (name)=>(<NavItem key={name} path={name}/>))}

        </ul>
    </div>
}