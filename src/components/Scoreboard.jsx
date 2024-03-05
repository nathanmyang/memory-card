import PropTypes from 'prop-types';

function Scoreboard({ score, bestScore }) {
	return (
		<div>
			<h1>Cat Memory Game</h1>
			<p>Score: {score}</p>
			<p>Best Score: {bestScore}</p>
			<p>
				Click an image of a unique cat to score points! If you select a
				cat that was previously chosen, you lose.
			</p>
		</div>
	);
}

Scoreboard.propTypes = {
	score: PropTypes.num,
	bestScore: PropTypes.num,
};

export default Scoreboard;
