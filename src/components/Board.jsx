import '../styles/Board.css';
import Card from './Card.jsx';
import PropTypes from 'prop-types';

function Board({ cards, selectCard }) {
	return (
		<div id='board'>
			{cards.map((card) => {
				return (
					<Card key={card.id} card={card} selectCard={selectCard} />
				);
			})}
		</div>
	);
}

Board.propTypes = {
	cards: PropTypes.array,
	selectCard: PropTypes.func,
};

export default Board;
