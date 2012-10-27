function Bot(x, y) {
	this.x = x;
	this.y = y;

	function getGridCell() {
		return {x: this.x % 64, y: this.y % 64};
	}
}