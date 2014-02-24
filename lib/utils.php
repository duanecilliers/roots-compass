<?php
/**
 * Utility functions
 */
function add_filters($tags, $function) {
	foreach($tags as $tag) {
		add_filter($tag, $function);
	}
}

function is_element_empty($element) {
	$element = trim($element);
	return empty($element) ? false : true;
}

function is_dev_mode() {
	if ( defined( 'WP_ENV' ) && WP_ENV == 'development' ) {
		return true;
	} else {
		return false;
	}
}
