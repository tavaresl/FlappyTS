class Game {

	constructor() {	
		this.init();
	}

	init() : void {
		const gameArea = document.getElementById('game_area');
		const gameCanvas = document.createElement('canvas');

		gameCanvas.id = 'game_canvas';
		gameCanvas.width = 800;
		gameCanvas.height = 600;

		gameArea.insertBefore(gameCanvas, gameArea.firstChild);
	}
}

export default Game;