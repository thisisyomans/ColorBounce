var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'thisiscanvas',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 300},
			debug: false
		}
	},
	scene: [MainScreen, GameScreen, EndingScreen]
};

var game = new Phaser.Game(config);
