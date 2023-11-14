function Wall(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h, this.col);
  }//end display
}//end Wall
