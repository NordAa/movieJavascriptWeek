var movies = {
	"Willow": {
		"Name": "Willow",
		"YouTubeId": "v=uzn2izehkno"
	},
	"UP": {
		"Title": "Up",
		"YouTubeId": "ORFWdXl_zJ4"
	},
  	 "Lord of the Rings": {
		"Title": "Lord of the Rings",
		"YouTubeId": "V75dMMIW2B4 "
	},
  	"The Princess Bride": {
  		"Title": "The princess bride",
        		"YouTubeId": "WNNUcHRiPS8"
	},
	"Alice in Wonderland": {
		"Title": "Alice in Wonderland",
		"YouTubeId": "P_IVeP3i7B0"
	},
	"Indiana Jones": {
		"Name": "Indiana Jones",
		"YouTubeId": "v=Rh_BJXG1-44"
	},
};



let youtube = {
	getIdFromUrl: function (videoIdOrUrl) {
		if (videoIdOrUrl.indexOf('http') === 0) {
			return videoIdOrUrl.split('v=')[1];
		}
		else {
			
			return videoIdOrUrl;
		}
	},

	generateThumbnailUrl: function(videoIdOrUrl) {
		return 'http://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
	},

	generateEmbedUrl: function (videoIdOrUrl) {
		return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIdOrUrl);
	}
};

let url = 'http://www.omdbapi.com/?t=lord+of+the+rings&apikey=dab96338';

fetch(url)
	.then(response => {
		return response();
	})
	.then(data => {
		data.forEach(movie => {
			const movieCard = document.createElement('div');
			movieCard.setAttribute('class', 'movieCard');

			const 
		})
	})

