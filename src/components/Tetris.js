import React from 'react'

import { createStage } from './../gameHelpers'
import {StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris =() => (
    <StyledTetrisWrapper>
        <StyledTetris>
        <Stage stage={createStage()}/>
        <aside>
                <Display text = 'Score' />
                <Display text = 'Rows' />
                <Display text = 'Level' />
            <StartButton />
        </aside>    
        </StyledTetris>
    </StyledTetrisWrapper>
)

export default Tetris