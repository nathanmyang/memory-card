import { useState } from 'react';
import { useEffect } from 'react';
import Board from './components/Board.jsx';
import Scoreboard from './components/Scoreboard.jsx';

function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState([]);
	const [selectedCardIds, setSelectedCardIds] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_g39u0sKEyFkWAMiW54U7CtWb3v81pkuWAhIXUfbPA1g19r2r0n7VFA21j9MsDHDy'
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
	}, []);

	function randomizeBoard() {
		const randomized = [...cards];
		for (let i = randomized.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = randomized[i];
			randomized[i] = randomized[j];
			randomized[j] = temp;
		}
		setCards(randomized);
	}

	function selectCard(card) {
		if (selectedCardIds.find((id) => id === card.id)) {
			setScore(0);
			setSelectedCardIds([]);
		} else {
			let newScore = score + 1;
			setScore(newScore);
			setSelectedCardIds([...selectedCardIds, card.id]);

			if (newScore > bestScore) {
				setBestScore(newScore);
			}
		}
		randomizeBoard();
	}

	return (
		<>
			<Scoreboard score={score} bestScore={bestScore} />
			<Board cards={cards} selectCard={selectCard} />
		</>
	);
}

export default App;
