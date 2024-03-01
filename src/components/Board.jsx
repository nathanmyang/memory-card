import Card from './Card.jsx';

export default function Board({
	cards,
	selectedCardIds,
	setScore,
	setBestScore,
}) {
	return (
		<div>
			{cards.map((card) => {
				return <Card card={card} />;
			})}
		</div>
	);
}
