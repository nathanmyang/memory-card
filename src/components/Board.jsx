import '../styles/Board.css';
import Card from './Card.jsx';

export default function Board({ cards, selectCard }) {
	return (
		<div id='board'>
			{cards.map((card) => {
				return <Card card={card} selectCard={selectCard} />;
			})}
		</div>
	);
}
