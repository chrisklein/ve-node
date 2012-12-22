curl(
  {
  	baseUrl: 'javascripts',
    paths: {
  		curl: 'lib/curl.0.7.3/curl',
      'templates': '../templates'
  	},
  },

  // Load non AMD modules
  [
  	"js!lib/underscore1.4.3/underscore-min.js",
  	"js!lib/backbone0.9.9/backbone-min.js"
  ])

  // Load you main that kicks everything off
  .next(["main"])

  // Start main when loaded
  .then(function(main) {
     main.start()
  }
);