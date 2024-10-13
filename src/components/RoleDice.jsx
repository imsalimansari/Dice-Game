import styled from 'styled-components';

const RoleDice = ({ rollDice, currentDice }) => {


  

  return (
    <DiceContainer>
      <div className='dice' onClick= {rollDice} >
      <img src={`/dice/dice_${currentDice}.png`} alt="dice-1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer =styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }
`;