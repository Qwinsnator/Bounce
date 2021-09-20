  class nummer extends Bal {
  nummer;

  //constructor(_newX, _newY, _speedX, _speedY, _nummer) {
    //super(_x, _y, _speedX, _speedY);
    //this.nummer = _nummer;
  //}

  // toont de bal
  show() {
    fill(0,0,0);
    ellipse(this.x, this.y, 50, 50);
    fill(255,255,255);
    ellipse(this.x, this.y, 45, 45);
    textSize(25);
    fill(0,0,0);
    text("8",this.x-5, this.y+5);
  }
    

}