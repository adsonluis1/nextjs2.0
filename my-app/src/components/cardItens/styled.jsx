'use client'
import styled from 'styled-components'

export const divConteiner = styled.div` 
    display: flex;
    flex-direction: column;
    background-color: rgb(81, 81, 81);
    color: white;
    border-radius: 8px 8px 0px 0px;
    padding: 8px;
    width: 250px;
    height: 350px;
`

export const img = styled.img`
    width: 100%;
    height: 50%;
    border-radius: 8px 8px 0px 0px;
`

export const divChild = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    gap: 15px;
`

export const heading = styled.h2`
`

export const price = styled.p`
    font-weight: bold;
    font-size: 1.5em;
`

export const radioQuant = styled.input`
    width: 50%;
`

export const input = styled.input`
    margin-top: 15px;
    width: 90%;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;
`