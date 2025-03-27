// lib/fonts.js
import localFont from 'next/font/local'

export const fonteTitulo = localFont({
  src: '/Dune_Rise.ttf',
  display: 'swap',
  variable: '--font-titulo'
})

export const fonteBotao = localFont({
    src: '/Oxanium-Regular.ttf',
    display: 'swap',
    variable: '--font-botao'
  })