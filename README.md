# rhythm.wordpress.starter-theme

A WordPress starter theme incorporating the _s starter theme, bootstrap-sass, bourbon, grunt and Font Awesome

## Requirements
node.js [nodejs.org](http://nodejs.org/ "Node JS")

sass >= 3.3.0 [sass-lang.com](http://sass-lang.com/ "SASS"), which is a dependency for sourcemaps.  Refer to grunt-contrib-sass documentation: [grunt-contrib-sass on github](https://github.com/gruntjs/grunt-contrib-sass#sourcemap)

grunt [gruntjs.com](http://gruntjs.com/ "SASS")

_s
===

Hi. I'm a starter theme called `_s`, or `underscores`, if you like. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

* A just right amount of lean, well-commented, modern, HTML5 templates.
* A helpful 404 template.
* A sample custom header implementation in `inc/custom-header.php` that can be activated by uncommenting one line in `functions.php` and adding the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/extras.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts/` for a sidebar on either side of your content.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Getting Started with _s
-------------------------

If you want to keep it simple, head over to http://underscores.me and generate your `_s` based theme from there. You just input the name of the theme you want to create, click the "Generate" button, and you get your ready-to-awesomize starter theme.

If you want to set things up manually, download `_s` from GitHub. The first thing you want to do is copy the `_s` directory and change the name to something else (like, say, `your_theme`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'_s'` (inside single quotations) to capture the text domain.
2. Search for `_s_` to capture all the function names.
3. Search for `Text Domain: _s` in style.css.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks.
5. Search for `_s-` to capture prefixed handles.

OR

* Search for: `'_s'` and replace with: `'your_theme'`
* Search for: `_s_` and replace with: `your_theme_`
* Search for: `Text Domain: _s` and replace with: `Text Domain: your_theme` in style.css.
* Search for: <code>&nbsp;_s</code> and replace with: <code>&nbsp;your_theme</code>
* Search for: `_s-` and replace with: `your_theme-`

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!


Getting started with the rhythm.wordpress.starter-theme
========================================================
Upload the theme to your wp-content/themes folder

Activate the theme

Open a terminal and execute:

	cd your-site/wp-content/themes/theme-name

Install the required node packages by running this command in the root of your theme folder:

	npm install

Once the modules are installed run:

	grunt

You will now be up and running.

