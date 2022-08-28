import './App.css';
import CreateGrid from './components/CreateGrid';
import RollingDice from './images/dice.gif';
import StaticDice from './images/static-dice-icon.jpg'
import toast, { Toaster } from 'react-hot-toast';
import {
  GRID_SIZE,
  defaultPositionMessage,
} from './config/globalConfig';
import {
  getRandomDiceValue,
  getDiceImage,
  getAvatarImage,
} from './utils/helperFunctions';
import { useState } from 'react';

function App() {
  const [position, setPosition] = useState(0);
  const [isDiceRolling, toggleDiceRollingStatus] = useState(false);
  const [currentDiceValue, setCurrentDiceValue] = useState(0);
  const [positionMessage, setPositionMessage] = useState();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [hasGameEnded, setHasGameEnded] = useState(false);

  // handlers
  const styles = {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
  };
  function toggleDiceRoll(status) {
    toggleDiceRollingStatus(status);
    const image = document.getElementById('diceImage');
    image.src = RollingDice;
    setTimeout(() => {
      toggleDiceRollingStatus(false);
      const diceValue = getRandomDiceValue();
      if (diceValue === 6 && !isGameStarted) {
        setIsGameStarted(true);
        setPosition(1);
        toast(`Wohooh!! Let's begin the Game`, {
          icon: '🎲',
          style: styles,
        });
      } else if (diceValue === 6) {
        toast('Hurray! You just rolled 6', {
          icon: '🥳',
          style: styles,
        });
      }
      if (isGameStarted) {
        let latestPosition;
        if (position + diceValue > 100) {
          latestPosition = position;
          setPosition(latestPosition);
          setPositionMessage('No change in the position, since the position is exceeding the step:100')
        } else {
          latestPosition = position + diceValue;
          setPosition(latestPosition);
          if (latestPosition === 100) {
            setHasGameEnded(true);
            toast('You won the Game!', {
              icon: '🏆',
              style: styles,
            });
            // const elem = document.getElementById("restartButton");
            // elem.scrollTop = elem.scrollHeight;
            const image = document.getElementById('diceImage');
            image.src = StaticDice;
            return;
          }
          setPosition(latestPosition);
          setPositionMessage('');
        }
      }
        setCurrentDiceValue(diceValue);
        try {
          const image = document.getElementById('diceImage');
          image.src = getDiceImage(diceValue);
          image.style.transform = "scale(0.5)";
          image.style.marginLeft = "35px";
        } catch (error) {
          console.log('cannot find dice element in the DOM');
        }
    }, 2000);
  }

  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="board" >
        <CreateGrid
          gridSize={GRID_SIZE}
          position={position}
          avatar={getAvatarImage()}
        />
      </div>
      <div className='dice'>
        {/* BEGIN - Div to display the dice images based on the status of hte dice (ROLL, Display Number, Idle) */}
        <h2>Snakes And Ladders - Single Player Game</h2>
        <div
          className="diceElement">
          <img
            id='diceImage'
            alt='dice'
            src={StaticDice}
            height={300}
            width={400}
          />
        </div>
        {/* END - Div to display the dice images based on the status of hte dice (ROLL, Display Number, Idle) */}
        {/* BEGIN - ROll the Dice Button */}
        <div className='rollDice'>
          <button
            onClick={() => toggleDiceRoll(true)}
          >
            Roll the Dice
          </button>
        </div>
        {/* END - ROll the Dice Button */}
        {/* BEGIN - Div to show hte status of the player position */}
        <div>
        {isGameStarted ?
            <h4 className='successMessage'>Current Position : {position}</h4>
            :
            <h4 className='infoMessage'>{defaultPositionMessage}</h4>
          }
          {currentDiceValue === 6 ? <h1 className='successMessage'>Hurray!! 6 it is</h1> : null}
          {hasGameEnded ?
            <div className='centreAlignDiv'>
              <h2 className='successMessage'>
                WINNER !!! You won the Game.
              </h2>
              <button
                id='restartButton'
                onClick={() => {
                  window.location.reload();
                }}
              >Start a New Game</button>
            </div> : null
          }
        </div>
        {/* END - Div to show hte status of the player position */}
      </div>
    </div>
  );
}

export default App;
