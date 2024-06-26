import { Box, Text, styled } from '@ignite-ui/react'

export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    marginTop: '$2',
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
