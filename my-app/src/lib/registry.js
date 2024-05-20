'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManage, createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
  }
`

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}