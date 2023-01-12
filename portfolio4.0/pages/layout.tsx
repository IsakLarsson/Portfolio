import { Container } from '@chakra-ui/react'
import { css } from '@emotion/core'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => {
    return <Container>{children}</Container>
}
