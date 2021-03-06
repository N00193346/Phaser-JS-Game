console.log("Enemy class");

class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    //Enemy properties
    this.body.setSize(this.width, this.height - 10);
    this.body.offset.y = 9;
    this.setScale(2);
    this.health = 3;
    this.alive = true;
    this.speed = 60;
    this.detectionZone = 30;


    this.distanceAway = function (a, b) { return Math.abs(a - b); }

    //Animation states
    scene.anims.create({
      key: "rightE",
      frames: scene.anims.generateFrameNumbers("enemy", { start: 1, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: "standE",
      frames: [{ key: "enemy", frame: 1 }],
      frameRate: 10,
    });
  }



  //Enemy will track the x and y value give
  trackPlayer(x, y) {

    //Detect within a certain distance *not used*
    // if ((this.distanceAway(x,this.x) < this.detectionZone) || (this.distanceAway(y,this.y)  < this.detectionZone) || (this.distanceAway(this.x,x) < -this.detectionZone) || (this.distanceAway(this.y,y)  < this.detectionZone)){
    // console.log("Player detected!")
   
    if (this.health > 0) {
      //If the player above
      if (y < this.y) {
        this.setVelocityY(-this.speed);
        this.anims.play("rightE", true);
        this.setScale(2, 2);
        this.setOffset(0, 10)
      }

      //if the player is below
      if (y > this.y) {
        this.setVelocityY(this.speed);
        this.anims.play("rightE", true);
        this.setScale(2, 2);
        this.setOffset(0, 10)
      }
      //If the player is to the left
      if (x < this.x) {
        this.setVelocityX(-this.speed);
        this.anims.play("rightE", true);
        this.setScale(-2, 2);
        this.setOffset(15, 10)

      }
      //if the player is to the right
      if (x > this.x) {
        this.setVelocityX(this.speed);
        this.anims.play("rightE", true);
        this.setScale(2, 2);
        this.setOffset(0, 10)
      }
    }
  }
}

