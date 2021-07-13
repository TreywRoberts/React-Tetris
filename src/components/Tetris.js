import React, { useState } from 'react'

import { createStage, checkCollision } from '../gameHelpers'




import {StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

import { UsePlayer } from './../hooks/usePlayer'
import { useStage } from '../hooks/useStage'
import { useInterval } from '../hooks/useInterval'
import { useGameStatus } from '../hooks/useGameStatus'

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'
import BackgroundButton from './BackgroundButton'
import HighScore, { checkHighScore, showHighScores } from './HighScore'
import PortfolioButton from './PortfolioButton'

const Tetris =() => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    const [background, setBackground] = useState('Space')

    const [player, updatedPlayerPos, resetPlayer, playerRotate] = UsePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);


    console.log('re-render')

    const movePlayer = dir =>{
        if (!checkCollision(player, stage, {x: dir, y: 0})){
            updatedPlayerPos({ x: dir, y: 0});
        }
    }
    
    const startGame = () =>{
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }
      

    const drop = () =>{
        if (rows > (level + 1) * 10){
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);
        }
        if(!checkCollision(player, stage, {x: 0, y: 1})){
            updatedPlayerPos ({x: 0, y: 1, collided: false})
        } else {
            if (player.pos.y < 1){
               console.log('Game Over')
               setGameOver(true)
               setDropTime(null) 
               checkHighScore(score)
               showHighScores();
            }
            updatedPlayerPos({ x: 0, y: 0, collided: true})
        }
    }

    const keyUp = ({ keyCode }) => {
        if(!gameOver){
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    const dropPlayer = () =>{
        setDropTime(null);
        drop();

    }
    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode ===39) {
                movePlayer(1)
            } else if (keyCode === 40) {
                dropPlayer();
            } else if (keyCode === 38) {
                playerRotate(stage, 1)
            }
        }

    }

    const onClick = () =>{
        if (background === 'Space'){
            setBackground('Ocean')
        } else {
            setBackground('Space')
        }
    }
    useInterval(()=>{
        drop();
    }, dropTime)

    
    return(
        <StyledTetrisWrapper 
        background={background}
        role='button' 
        tabIndex ='0' 
        onKeyDown={e => move(e)} 
        onKeyUp={keyUp}>
            <StyledTetris background={background}>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <div>
                            <Display gameOver={gameOver} text='Game Over'/>
                            <Display text = {`Score ${score}`} />
                        </div>
                    ) : (
                        <div>
                            <Display text = {`Score ${score}`} />
                            <Display text = {`Rows ${rows}`} />
                            <Display text = {`Level ${level}`} />
                        </div>
                        )}
                    <StartButton callback={startGame} />
                    <BackgroundButton background={background} onClick={onClick} />
                    <PortfolioButton />
                </aside>    
                <aside>
                    <HighScore />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris