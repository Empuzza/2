var mainState = {
	preload: function(){
		game.load.image("square","bitmap.png");
		//wrzucanie obrazków, zdjęć, audio (pliki)
	},

	cerate: function(){
		game.stage.backround = '#ff359d';
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.square = game.add.sprite(100,400, "square");
		game.physics.anable(this.square);//fizyka dotyczy sprita square
		this.bird.body.gravity.y = 1000;

		

		//ustawianie obiektw które pojawią się starcie gry

	},

	upload: function(){
		//modyfikacje w czasie

	},
};

var game = new Phaser.Game(500,500)
game.state.add('main', mainState);
game.state.start('main');