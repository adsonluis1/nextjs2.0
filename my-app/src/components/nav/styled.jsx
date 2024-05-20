'use client'
import styled from 'styled-components'

export const Nav = styled.nav `
    background-color: black;
    display: flex;
    flex-grow: row;
    gap: 8px;
    padding: 8px;
    width: 100vw;
`

export const Link = styled.a`

    color: white;
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;

    &:hover{
        background-color: rgb(80, 80, 80);
    }

    &.active{
        background-color: aqua;
    }
` 


