/* global Log, Module, moment */

/* Magic Mirror
 * Module: Compliments
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("compliments",{

	// Module config defaults.
	defaults: {
		compliments: {
			morning: [
				"Good morning, handsome!",
				"Enjoy your day!",
				"How was your sleep?",
				"Another day, another hustle.",
				"Start your morning right, have your day be great",
				"You are enough.",
				"Your smile is contagious.",
				"You're more helpful than you realize",
				"What may be small for you, may be huge for someone else.",
				"Everybody has tough times, only people like you get out of them."
			],
			afternoon: [
				"Hello, beauty!",
				"You look sexy!",
				"Looking good today!",
				"Tough times come and go, you will become greater.",
				"When you make up your mind, you will succeed.",
				"You bring inspiration to many.",
				"You are making a difference.",
				"You bring out the best in people.",
				"I bet you sweat glitter.",
				"You were cooler before hipsters."
			],
			evening: [
				"Wow, you look hot!",
				"You look nice!",
				"Hi, sexy!",
				"You're a candle in the darkness.",
				"You could survive the purge.",
				"Any team would be lucky to have you on it.",
				"Babies and small animals probably love you.",
				"There is ordinary and then there is you.",
				"You're better than a unicorn, because you're real.",
				"You're truly special.",
				"You're a gift to those around you."
			]
		},
		updateInterval: 30000,
		fadeSpeed: 4000
	},

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastComplimentIndex = -1;

		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	/* randomIndex(compliments)
	 * Generate a random index for a list of compliments.
	 *
	 * argument compliments Array<String> - Array with compliments.
	 *
	 * return Number - Random index.
	 */
	randomIndex: function(compliments) {
		if (compliments.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * compliments.length);
		};

		var complimentIndex = generate();

		while (complimentIndex === this.lastComplimentIndex) {
			complimentIndex = generate();
		}

		this.lastComplimentIndex = complimentIndex;

		return complimentIndex;
	},

	/* complimentArray()
	 * Retrieve an array of compliments for the time of the day.
	 *
	 * return compliments Array<String> - Array with compliments for the time of the day.
	 */
	complimentArray: function() {
		var hour = moment().hour();

		if (hour >= 3 && hour < 12) {
			return this.config.compliments.morning;
		} else if (hour >= 12 && hour < 17) {
			return this.config.compliments.afternoon;
		} else {
			return this.config.compliments.evening;
		}
	},

	/* complimentArray()
	 * Retrieve a random compliment.
	 *
	 * return compliment string - A compliment.
	 */
	randomCompliment: function() {
		var compliments = this.complimentArray();
		var index = this.randomIndex(compliments);

		return compliments[index];
	},

	// Override dom generator.
	getDom: function() {
		var complimentText = this.randomCompliment();

		var compliment = document.createTextNode(complimentText);
		var wrapper = document.createElement("div");
		wrapper.className = "thin xlarge bright";
		wrapper.appendChild(compliment);

		return wrapper;
	}

});
