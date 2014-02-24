require.config({
	// Make all requires relative to /.
	baseUrl: '/',

	// Map components to nice paths.
	paths: {
		jquery: 'bower_components/jquery/dist/jquery.min',
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
	},

	// Load non-AMD dependencies.
	shim: {
		bootstrapAffix: { deps: ['jquery'] },
		bootstrapAlert: { deps: ['jquery'] },
		bootstrapButton: { deps: ['jquery'] },
		bootstrapCarousel: { deps: ['jquery'] },
		bootstrapCollapse: { deps: ['jquery', 'bootstrapTransition'] },
		bootstrapPopover: { deps: ['jquery', 'bootstrapTooltip'] },
		bootstrapScrollspy: { deps: ['jquery'] },
		bootstrapTab: { deps: ['jquery'] },
		bootstrapTooltip: { deps: ['jquery'] },
		bootstrapTransition: { deps: ['jquery'] },
		bootstrapTypeahead: { deps: ['jquery'] }
	}
});
