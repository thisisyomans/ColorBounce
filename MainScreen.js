var playbutton;
var title;

class MainScreen extends Phaser.Scene {
		constructor(){
			super('MainScreen');
		}

		preload(){
			this.load.image('sky', 'assets/images/sky.png');
			this.load.image('playbutton', 'assets/images/whiteplaybutton.png');
		}

		create(){
      this.add.image(400, 300, 'sky').setTint(0xff0000);
      title = this.add.text(230, 200, 'IDK WTF', { fontSize: '75px', color: '#ffffff', fontFamily: 'Courier New' });
			playbutton = this.add.image(400, 350, 'playbutton').setScale(0.50);
      //title.setInteractive();
      playbutton.setInteractive();
      playbutton.on('pointerout', function(event){
        playbutton.alpha = 1;
      }, this);
      playbutton.on('pointerover', function(event){
        playbutton.alpha = 0.6;
      }, this);
      playbutton.on('pointerdown', function(event){
        playbutton.alpha = 0.25;
        this.scene.start('GameScreen');
			}, this);
		}

		update(){
		}
}
