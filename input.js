function Input() {
	this.keys = new Array();
	
	this.leftPressed = false;
	this.upPressed = false;
	this.rightPressed = false;
	this.downPressed = false;

	this.keyup = function(e) {
		if(e.keyCode == 37)
			this.leftPressed = false;
		if(e.keyCode == 38)
			this.upPressed = false;
		if(e.keyCode == 39)
			this.rightPressed = false;
		if(e.keyCode == 40)
			this.downPressed = false;
	}

	this.keydown = function(e) {
		if(e.keyCode == 37)
			this.leftPressed = true;
		if(e.keyCode == 38)
			this.upPressed = true;
		if(e.keyCode == 39)
			this.rightPressed = true;
		if(e.keyCode == 40)
			this.downPressed = true;
	}
}