var playbutton;

class EndingScreen extends Phaser.Scene {
		constructor(){
			super('EndingScreen');
		}
		preload(){

		}
		create(){
			this.add.image(400, 300, 'sky').setTint(0xff0000);
			this.add.text(230, 200, 'You Lose!', {
				fontSize: '75px',
				color: '#ffffff',
				fontFamily: 'Courier New'
			});
			this.add.text(230, 300, 'Click the button below to restart!', {
				fontSize: '75px',
				color: '#ffffff',
				fontFamily: 'Courier New'
			});
		}
		update(){

		}
}
