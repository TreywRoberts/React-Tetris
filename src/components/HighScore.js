import React, { useEffect } from 'react'

import { StyledHighScore } from './styles/StyledHighScore'

    const NO_OF_HIGH_SCORES = 10;
    const HIGH_SCORES = 'highScores';

    const highScoreString = localStorage.getItem(HIGH_SCORES);
    const highScores = JSON.parse(highScoreString) ?? [];

export function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
    
    if (score > lowestScore) {
      saveHighScore(score, highScores);
    }
  }

  export function saveHighScore(score, highScores) {
    const name = prompt('You got a highscore! Enter name:');
    const newScore = { score, name };
    
    // 1. Add to list
    highScores.push(newScore);
  
    // 2. Sort the list
    highScores.sort((a, b) => b.score - a.score);
    
    // 3. Select new list
    highScores.splice(NO_OF_HIGH_SCORES);
    
    // 4. Save to local storage
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
  };

  export function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const highScoreList = document.getElementById(HIGH_SCORES);
    
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.name} - ${score.score}`)
      .join('');
  }


const HighScore =() => {
    useEffect(()=>{
        showHighScores()
    }, [])
    return(
        <StyledHighScore> 
        <h2>HIGH SCORES</h2>
            <ol id='highScores'> </ol> 
    </StyledHighScore>
        )
    }

export default HighScore

  