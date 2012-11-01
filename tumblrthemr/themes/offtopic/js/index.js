(function(){

var app = {

	start: function () {

		window.addEventListener('resize', this.onResize);
		
	},

	onResize: function () {
		/*var container = $('.title');
		var text = container.find('.text');
		container.toggleClass('absolute', (container.width()*0.7 > text.width()));*/
	}

}

app.start();
})();