//	WORD & LETTERS CONSTRUCTOR

var constructor = function (string) {

	this.length = string.split("").length;

	this.letters = [];

	for (var i = 0; i < this.length; i++) {
		this.letters[i] = {
			value: string.split("")[i],
			display: "_",
			hide: function() {this.display = "_";},
			show: function() {this.display = this.value;}
		}
	}
	
	this.hide = function() {
		for (var i = 0; i < this.length; i++) {
			this.letters[i].hide();
		}
	}

	this.show = function() {
		for (var i = 0; i < this.length; i++) {
			this.letters[i].show();
		}
	}

	this.print = function() {
		var output = "\n";
		for (var i = 0; i < this.length; i++) {
			output += this.letters[i].display;
		}
		console.log(output);
	}

}

module.exports = constructor;