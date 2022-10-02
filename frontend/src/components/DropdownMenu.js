import React from 'react'

//Styled Components
import {
  StyledDropdownMenu,
  StyledList,
  StyledListItem,
} from './styles/DropdownMenu.styled'

//ReactRouter
import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function DropdownMenu({ setIsOpen }) {

	 //!Xenia: user can close drop down menu when is clicked outside menu
  let menuRef = useRef()
 
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])


  return (
    <StyledDropdownMenu ref={menuRef}>
      <StyledList>
        <NavLink
          to='/signup'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <StyledListItem>Sign up</StyledListItem>
        </NavLink>
        <NavLink
          to='/login'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <StyledListItem>Login</StyledListItem>
        </NavLink>
        <NavLink
          to='/session/host-new'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <StyledListItem>Host board game session</StyledListItem>
        </NavLink>
      </StyledList>
    </StyledDropdownMenu>
  )
}

export default DropdownMenu
