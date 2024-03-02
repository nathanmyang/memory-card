import '../styles/Card.css';

export default function Card({ card, selectCard }) {
	return (
		<div>
			<img
				onClick={() => selectCard(card)}
				className='img'
				src={card.url}
			></img>
		</div>
	);
}
