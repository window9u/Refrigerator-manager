import {NavLink} from "react-router-dom"

export default function NavItem({path}){
    return(
    <nav class="menu-label">
        <NavLink to={`/${path}`} >
            {path}
        </NavLink>
    </nav>)
}