// Only the first require.config({}) is used in grunt-contrib-requirejs mainConfigFile
// Use this only for r.js build configuration
// @link https://github.com/jrburke/r.js/blob/master/build/example.build.js#L27
require.config({

});

// Load bower scripts into paths object
// Require.js looks in the /assets/js dir by default
var paths = {
	main: 'assets/js/_main',
	bootstrapAffix: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix',
	bootstrapAlert: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert',
	bootstrapButton: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button',
	bootstrapCarousel: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel',
	bootstrapCollapse: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse',
	bootstrapDropdown: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown',
	bootstrapPopover: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover',
	bootstrapScrollspy: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy',
	bootstrapTab: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab',
	bootstrapTooltip: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip',
	bootstrapTransition: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition',
	bootstrapModal: 'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal'
};

// push jQuery onto paths object if not already enqueued by some plugin
if (typeof jQuery === 'function') {
	define('jquery', function () { return jQuery; });
}
else {
	paths.jquery = 'bower_components/jquery/dist/jquery.min';
}

require.config({
	paths: paths,
	shim: {
		// bootstrapAffix: { deps: ['jquery'] },
		// bootstrapAlert: { deps: ['jquery'] },
		// bootstrapButton: { deps: ['jquery'] },
		// bootstrapCarousel: { deps: ['jquery'] },
		// bootstrapCollapse: { deps: ['jquery', 'bootstrapTransition'] },
		// bootstrapPopover: { deps: ['jquery', 'bootstrapTooltip'] },
		// bootstrapScrollspy: { deps: ['jquery'] },
		// bootstrapTab: { deps: ['jquery'] },
		// bootstrapTooltip: { deps: ['jquery'] },
		// bootstrapTransition: { deps: ['jquery'] },
		// bootstrapTypeahead: { deps: ['jquery'] }
	}
});

console.log('testing');
require(['jquery', 'main'], function ($) {
	console.log('It is working sir :)');
});
