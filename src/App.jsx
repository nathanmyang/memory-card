// import { useState } from 'react';

/*
• Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far. 
• There should be a function that displays the cards in a random order anytime a user clicks one.
• Be sure to invoke that function when the component mounts.
• You also need a handful of cards that display images and possibly informational text. These cards and texts need to be fetched from an external API. You can use anything from Giphy to a Pokemon API.
*/

/*
Components needed:
Scoreboard
- Header that contains: Title, description of game, and scoreboard that displays current score and "Best Score"
Board
- Component that contains: Card components
Cards
- Individual cards that display: Images and informational text

*/

/*
State
App
- state: [score, setScore], [bestScore, setBestScore], [cards, setCards], [selectedCards, setSelectedCards]

useEffect
- make API call to retrieve [x] number of img + name of Pokemon. Store that in cards.

Functions needed
- onClick(card)
  - If card hasn't been previously picked (not in cards state arr)
    - add card (cardId?) to selectedCards
    - increment score
    - if score is greater than bestScore, reassign bestScore to score
    - randomize order of cards in cards
  - If card has been picked (in card state arr)
    - reset score to 0
  - If score is equal to 12 (or max score)
    - display win screen

*/
function App() {
	return (
		<>
			<h1>Hello World</h1>
		</>
	);
}

export default App;
