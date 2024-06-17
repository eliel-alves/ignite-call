import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  '::-webkit-scrollbar': {
    width: 6,
  },

  /* Track */
  '::-webkit-scrollbar-track': {
    background: '$gray800',
    borderRadius: 20,
  },

  /* Handle */
  '::-webkit-scrollbar-thumb': {
    background: '$gray500',
    borderRadius: 12,
  },

  /* Handle on hover */
  '::-webkit-scrollbar-thumb:hover': {
    background: '$gray500',
  },
})
