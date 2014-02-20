# Roots Compass Theme

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Roots Compass is a fork of [Roots](https://github.com/roots/roots) a WordPress starter theme based on [HTML5 Boilerplate](http://html5boilerplate.com/) & [Bootstrap](http://getbootstrap.com/) that will help you make better themes.

* Original: [https://github.com/roots/roots](https://github.com/roots/roots)
* Source: [https://github.com/duanecilliers/roots-compass](https://github.com/duanecilliers/roots-compass)
* Twitter: [@retlehs](https://twitter.com/duanecilliers)

## Installation

Clone the git repo - `git clone git://github.com/roots/roots.git` - or [download it](https://github.com/duanecilliers/roots-compass/zipball/master) and then rename the directory to the name of your theme or website. [Install Grunt](http://gruntjs.com/getting-started), and then install the dependencies contained in `package.json` by running the following from the theme directory:

```
npm install
```

Reference the [theme activation](http://roots.io/roots-101/#theme-activation) documentation to understand everything that happens once you activate Roots.

## Theme Development

After you've installed Grunt and ran `npm install` from the theme root, use `grunt watch` to watch for updates to your SASS and JS files and Grunt will automatically re-build as you write your code.

## Configuration

Edit `lib/config.php` to enable or disable support for various theme functions and to define constants that are used throughout the theme.

Edit `lib/init.php` to setup custom navigation menus and post thumbnail sizes.

## Documentation

### [Roots Docs](http://roots.io/docs/)

* [Roots 101](http://roots.io/roots-101/) — A guide to installing Roots, the files and theme organization
* [Theme Wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/) — Learn all about the theme wrapper
* [Roots Sidebar](http://roots.io/the-roots-sidebar/) — Understand how to display or hide the sidebar in Roots

## Features

[All Roots features](https://github.com/roots/roots#features) plus some extra stuff:

* Package management with Bower
* Automatically compile Sass
* LiveReload the browser (with extension)
* AMD file and module loader with Require.js (not recommended for publicly released themes due to the way WordPress enqueues scripts and styles)
* Automated custom lean Modernizr builds
* Automatically autoprefix CSS. Uses the Can I Use database
* Automatically lint, concatenate and minify your JavaScript (with source maps)
* Automatically versions your styles and scripts with an md5 hash (rev the filename, [some proxies will never cache an asset if it has a querystring](http://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/.)
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)

## Contributing

Please note that this is a fork of [Roots](https://github.com/roots/roots). I am happy to help where I can, specifically where this theme differs from Roots.

Everyone is welcome to help [contribute](CONTRIBUTING.md) and improve this project. There are several ways you can contribute:

* Reporting issues (please read [issue guidelines](https://github.com/necolas/issue-guidelines))
* Suggesting new features
* Writing or refactoring code
* Fixing [issues](https://github.com/duanecilliers/roots-compass/issues)
* Replying to questions on the [forum](http://discourse.roots.io/)

## Support

Use the [Roots Discourse](http://discourse.roots.io/) to ask questions and get support.
