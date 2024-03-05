import '../styles/Card.css';
import PropTypes from 'prop-types';

function Card({ card, selectCard }) {
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

Card.propTypes = {
	card: PropTypes.object,
	selectCard: PropTypes.func,
};

export default Card;
