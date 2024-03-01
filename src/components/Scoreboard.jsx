export default function Scoreboard({ score, bestScore }) {
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
