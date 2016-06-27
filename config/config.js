/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		/*{
			module: 'snow',
		},*/
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'MMM-wordnik',
			position: 'top_center',
			config: {
				api_key: '8fce757be11a058bd300d0005530d53996753bb5204b43808'
			}
		},
		{
			module: 'calendar',
			//header: 'US Holidays',
			header: 'Upcoming Events',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
						//url: 'webcal://calendar.google.com/calendar/ical/hoang.justin@gmail.com/public/basic.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'helloworld',
			position: 'bottom_right',
			
			config: {
				text: 'Los Angeles, CA'
			}
		},
		{
			module: 'currentweather',
			position: 'bottom_right',
			config: {
				location: 'Los Angeles',
				locationID: '',  //ID from bulk.openweather.org/sample/
				appid: 'b4eeeb1513bf82e73510925b64c64683'
			}
		},
		{
			module: 'wuforecast',
			position: 'bottom_right',

			config: {
			location: 'CA/Los_Angeles',
			appid: '7330ea4ff86091ae'
			}
		},
		{
			module: 'helloworld',
			position: 'top_right',
			
			config: {
				text: 'Riverside, CA'
			}
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Riverside, CA',
				locationID: '',  //ID from bulk.openweather.org/sample/
				appid: 'b4eeeb1513bf82e73510925b64c64683'
			}
		},
		{
			module: 'wuforecast',
			position: 'top_right',

			config: {
			location: 'CA/Riverside',
			appid: '7330ea4ff86091ae'
			}
		},
		{
    			module: 'MMM-Traffic',
  			position: 'top_left',
    			classes: '', //optional, default is 'bright medium', only applies to commute info not route_name
    			
			config: {
				api_key: 'AIzaSyDFdOxqX4TKohX66q2PrtN9C0hixg21PAo',
				mode: 'walking',
				origin: '1 Pentland Way, Riverside, CA 92507',
				destination: '1156 Hinderaker Hall, Riverside, CA 92507',
				route_name: 'Glen Mor to Hinderaker',
				changeColor: true,
				showGreen: true,
				limitYellow: 5, //Greater than 5% of journey time due to traffic
				limitRed: 20, //Greater than 20% of journey time due to traffic
				traffic_model: 'pessimistic',
        			interval: 120000 //2 minutes
    				}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "CNN Latest",
						url: "http://rss.cnn.com/rss/cnn_latest.rss"
					},
					{
						title: "Los Angeles Times",
						url: "http://latimes.com/rss2.0.xml"
					},
					{
						title: "CNN Top Stories",
						url: "http://rss.cnn.com/rss/cnn_topstories.rss"
					},
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "BBC News",
						url: "http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml?edition=uk"
					},
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'ping',
			position: 'bottom_left',
			classes: 'small dimmed',
			config: {
				showAlways: 'true',
				updateInterval: '10',
				animationSpeed: '1',
			}
		},
		{
			module: 'mmm-systemtemperature',
			position: 'bottom_left',
			classes: 'small dimmed',
			config: {
				prependString: 'System temperature is: ',
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
