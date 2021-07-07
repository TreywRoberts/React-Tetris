import React from 'react'

import { StyledStartButton } from './styles/StyledStartButton'

const BackgroundButton =({onClick, background}) => (
    <StyledStartButton onClick={onClick}>{background}</StyledStartButton>
)

export default BackgroundButton