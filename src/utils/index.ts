const windowWidth = window.innerWidth - 40
const windowHeight = window.innerHeight - 80

const getRandomPosition = () => {
	const seed = Math.random()

	const x = seed > 0.6 ? windowWidth - Math.random() * windowWidth / 2 : Math.random() * windowWidth
	let y = 0

	if (x < 40 || x > 800) {
		y = (1 - Math.random() / 2) * windowHeight
	} else if (x < 800) {
		if (Math.random() < 0.4) {
			y = windowHeight - 150 * Math.random()
		} else {
			y = 150 * Math.random()
		}
	}

	return {
		x,
		y
	}
}

const getRandomSize = () => {
	const random = Math.random()

	if (random > 0.9) {
		return 200
	}

	if (random > 0.6) {
		return 120
	}

	return 80
}

const getRandomColor = () => {
	const colorList = ['#D34658', '#E18CAA', '#C7488E', '#A33E7D', "#851A60"]
	return colorList[Math.floor(Math.random() * colorList.length)]
}

export const getParticles = (numberOfParticles: number) => {
	const particles: { position: { x: number, y: number }, size: number, color: string }[] = []

	for (let i = 0; i < numberOfParticles; i++) {
		const randomPosition = getRandomPosition()
		const size = getRandomSize()
		console.log(randomPosition, size)

		if (particles.find(particle => Math.abs(particle.position.x - randomPosition.x) < size + 20 && Math.abs(particle.position.y - randomPosition.y) < size + 20)) {
			i--
			continue
		}
		particles.push({
			position: randomPosition,
			size,
			color: getRandomColor()
		})
	}

	return particles
}

