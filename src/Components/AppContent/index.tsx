import React from 'react';
import { Container } from './styles'

export interface AppContentProps {
    children: React.ReactNode
}

export const AppContent: React.FC<AppContentProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}