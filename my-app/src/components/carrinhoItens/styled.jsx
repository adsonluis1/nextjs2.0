'use client'
import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    flex-grow: row;
    width: clamp(300px,100%,800px);
    border-radius: 8px;
    gap: 10px;
    background-color: rgb(81, 81, 81);
`

export const DivCompras = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    width: 100%;
    height: 150px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid white;
`

export const Img = styled.img`
    height: 100%;
`

export const DivChild = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8%;
`

export const H2  = styled.h2`
    font-size: 1.4em;
    color: white;
`

export const Button = styled.button`
    padding: 2px;
    font-weight: bolder;
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        transition: .5s;
        background-color: rgb(220, 220, 220);
        color: white;
    }
`