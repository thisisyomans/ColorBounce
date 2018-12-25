class scene1 extends Phaser.Scene{
  constructor(){
    super({key: "scene1"});
  }

  var bombs;

  preload(){
    this.load.image('bomb', 'assets/images/bomg.png');
  }

  create(){
    bombs = this.physics.add.group();
    bombs.create(300, 200, 'bomb');
  }

  update(){

  }
}

/*skytiles.forEach(function(p) {
  game.physics.enable(p, Phaser.Physics.ARCADE);
  p.body.allowGravity = false;
  p.body.immovable = true;

  var t = this.add.tween(p.position);
  t.to({ x: p.position.x - 100 }, 2000, Phaser.Easing.Linear.None, true, 0, -1, true);
}, this);*/

/*toptile.addMotionPath([
  { x: "+100", xSpeed: 2000, xEase: "Sine.easeIn", y: "+0", ySpeed: 2000, yEase: "Linear" },
  { x: "-100", xSpeed: 2000, xEase: "Sine.easeOut", y: "-0", ySpeed: 2000, yEase: "Linear" }
]);*/
