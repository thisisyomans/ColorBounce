var decision = Phaser.Math.Between(0, 2);

var skytiles;
var basetiles;

var toptile;
var midtile;
var midtile2;
var bottile;

var topx;
var midx;
var midx2;
var botx;

var topy = Phaser.Math.Between(75, 150);
var midy = Phaser.Math.Between(250, 350);
var midy2 = Phaser.Math.Between(250, 350);
var boty = Phaser.Math.Between(450, 550);

var midRotSpeed = Phaser.Math.Between(10, 100) / 100;
var midRotSpeed2 = Phaser.Math.Between(10, 100) / 100;
var player;
var keys;

if (decision > 1) {
	topx = Phaser.Math.Between(400, 590);
	midx = Phaser.Math.Between(525, 700);
	midx2 = Phaser.Math.Between(100, 275);
	botx = Phaser.Math.Between(210, 400);
} else if (decision <= 1) {
	topx = Phaser.Math.Between(210, 400);
	midx = Phaser.Math.Between(100, 275);
	midx2 = Phaser.Math.Between(525, 700);
	botx = Phaser.Math.Between(400, 590);
}

class GameScreen extends Phaser.Scene {
	constructor() {
  		super("GameScreen");
	}

	preload() {
		this.load.image("sky", "assets/images/sky.png");
		this.load.image("hollowtile", "assets/images/phaserplattile2.png");
		this.load.image("solidtile", "assets/images/phaserplattile.png");
		this.load.image("sprite1", "assets/images/phaserplatsprite.png");
		this.load.image("sprite2", "assets/images/phaserplatsprite2.png");
	}

	create() {
		this.add.image(400, 300, "sky").setTint(0xff0000);

		basetiles = this.physics.add.staticGroup();
		basetiles.create(400, 580, "solidtile").setScale(4).refreshBody();

		keys = this.input.keyboard.createCursorKeys();

		skytiles = this.physics.add.staticGroup();
		toptile = skytiles.create(topx, topy, "hollowtile").setScale(2).refreshBody();
		midtile = skytiles.create(midx, midy, "hollowtile").setScale(1).refreshBody();
		midtile2 = skytiles.create(midx2, midy2, "hollowtile").setScale(1).refreshBody();
		bottile = skytiles.create(botx, boty, "hollowtile").setScale(2).refreshBody();
	
		player = this.physics.add.sprite(400, 300, 'sprite1');
		player.setBounce(0.2);
		player.setCollideWorldBounds(true);
	}

	update() {
		midtile.angle += midRotSpeed;
		midtile2.angle += midRotSpeed2;
		/*if(cursors.left.isDown){
			player.setVelocityX(-160);
			player.anims.play('left', true);
		} else if(cursors.right.isDown){
			player.setVelocityX(160);
			player.anims.play('right', true);
		}else{
			player.setVelocityX(0);
			player.anims.play('turn');
		}
		if (cursors.up.isDown && player.body.touching.down){
			player.setVelocityY(-305);
		}*/
	}
}
