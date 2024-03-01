import { useState } from 'react';
import { useEffect } from 'react';
import Board from './components/Board.jsx';
// import Card from './components/Card.jsx';
import Scoreboard from './components/Scoreboard.jsx';

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
  - If card hasn't been previously picked (not in selectedCards state arr)
    - add card (cardId?) to selectedCards
    - increment score
    - if score is greater than bestScore, reassign bestScore to score
    - randomize order of cards in cards
  - If card has been picked (in card state arr)
    - reset score to 0

*/

function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState([]);
	const [selectedCardIds, setSelectedCardIds] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_g39u0sKEyFkWAMiW54U7CtWb3v81pkuWAhIXUfbPA1g19r2r0n7VFA21j9MsDHDy'
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const filteredData = data.map((data) => {
					return { id: data.id, url: data.url };
				});
				setCards(filteredData);
			});
	}, [selectedCardIds]);

	return (
		<>
			<Scoreboard score={score} bestScore={bestScore} />
			<Board
				cards={cards}
				// selectedCardIds={selectedCardIds}
				// setSelectedCardIds={setSelectedCardIds}
				setBestScore={setBestScore}
				setScore={setScore}
			/>
		</>
	);
}

export default App;
