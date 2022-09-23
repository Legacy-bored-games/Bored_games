import React from "react";

//Styled Components
import { StyledDropdownMenu, StyledList, StyledListItem } from "./styles/DropdownMenu.styled";

//ReactRouter
import { NavLink } from "react-router-dom";

function DropdownMenu(items, multiSelect = false) {

    //Close menu when menu item is clicked
    // const [isOpen, setIsOpen] = React.useState(false);

    // function toggleMenu() {
    //     setIsOpen(prevIsOpen => !prevIsOpen)
    // };

    // function closeMenu() {
    //     setIsOpen(false)
    // };

    return (
        <StyledDropdownMenu>
            <StyledList>
                <NavLink
                    to="/signup"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <StyledListItem>
                        Sign up
                    </StyledListItem>
                </NavLink>
                <NavLink
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <StyledListItem>
                        Login
                    </StyledListItem>
                </NavLink>
                <NavLink
                    to="/session/host-new"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <StyledListItem>
                        Host board game session
                    </StyledListItem>
                </NavLink>
            </StyledList>
        </StyledDropdownMenu>
    )
}

export default DropdownMenu;