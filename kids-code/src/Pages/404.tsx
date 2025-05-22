import { useState, useEffect } from "react";

function Errorpath() {
	const text = "Platform 9¾ not found. Please check your URL.";
	const [scrollingText, setScrollingText] = useState("");
	const [showButton, setShowButton] = useState(false);
	const [particles, setParticles] = useState([
		{ x: 17, y: 28 },
		{ x: 72, y: 39 },
		{ x: 34, y: 84 },
		{ x: 55, y: 7 },
	]);

	useEffect(() => {
		let counter = 1;
		const myInterval = setInterval(() => {
			if (counter <= text.length) {
				setScrollingText(text.slice(0, counter++));
			} else {
				clearInterval(myInterval);
			}
		}, 80);
	}, []);

	useEffect(() => {
		const flyStar = setInterval(() => {
			setParticles((prevParticles) =>
				prevParticles.map((particle) => {
					if (particle.y > 96) {
						return { y: 0, x: particle.x };
					}
					return { x: particle.x, y: particle.y + 1 };
				}),
			);
		}, 70);
		return () => clearInterval(flyStar);
	}, []);

	return (
		<div className="bg-[var(--color-primary)] min-h-screen flex items-center justify-center relative">
			{particles.map((particle, index) => (
				<div
					className="absolute"
					key={index}
					style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
				>
					⭐
				</div>
			))}

			<div className="text-center">
				<h1 className="text-4xl lilita-one-regular mb-4 text-[var(--color-text)]">
					{scrollingText}
				</h1>
				<p className="font-['Sniglet'] text-lg mb-4">
					Or click on them &#128578;
				</p>

				<button
					type="button"
					onClick={() => setShowButton(true)}
					className="bg-transparent cursor-pointer"
				>
					<img
						className="w-170 rounded-lg border-2 mx-auto"
						src="./equipe-wcs.webp"
						alt="Formateurs Wild Code School"
					/>
				</button>

				{showButton && (
					<button
						type="button"
						className="bg-[#eebefa] border-2 border-[var(--color-secondary)] cursor-pointer rounded-lg p-2 font-['Sniglet'] mt-4 block mx-auto"
					>
						<a href="/">Retour à la page d'accueil &#128521;</a>
					</button>
				)}
			</div>
		</div>
	);
}

export default Errorpath;
