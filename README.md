# App Inspector for Sencha
Google Chrome™ Dev Tools extension for debugging Sencha™ applications.

[![Available on Chrome Store](https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png)](https://chrome.google.com/webstore/detail/app-inspector-for-sencha/pbeapidedgdpniokbedbfbaacglkceae)

Read more on the Sencha blog:

* [Announcing App Inspector 2.0](http://www.sencha.com/blog/app-inspector-for-sencha-touch-and-ext-js-developers/)

## Features

* Creates a new section on Dev Tools elements panel displaying properties of a given component if they match the selected DOM node.
* Creates a new Sencha panel with a variety of debugging utilities for the Sencha Touch and Ext JS frameworks

## Architecture
This Chrome extension has 3 pieces:

* background: a page that works on the background and coordinates communication between tabs and the inspector
* devtools: bootstrap the dev tools extension, adding panels on the element tab and the new Sencha tab
* inspector: the App Inspector itself. It's rendered in an iframe inside dev tools

Read more on:

* [Getting Started: Building a Chrome Extension](http://developer.chrome.com/extensions/getstarted.html).
* [chrome.devtools.* APIs](http://developer.chrome.com/extensions/devtools.html)
* [chrome.devtools.panels](http://developer.chrome.com/extensions/devtools_panels.html)
* [Build Chrome Apps with Sencha](http://developer.chrome.com/apps/sencha_framework.html)

## Known Issues
There are some APIs from Dev Tools that are not fully exposed, so the App Inspector uses some work arounds:

* Component highlighting is executed manually via CSS
* DOM modifications (add/remove/move components) do not reflect automatically on the App Inspector, which is why we have "reload" buttons.

## Contributing
This is a community project, so feel free to fork it. Pull requests with bug fixes and new features are welcomed!

Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines.

The UI for the Sencha panel is built using:

* Sencha Ext JS 5.0.x
* Sencha Cmd 5.x

View the documentation for the Chrome-wrapped utilities under /docs/ in your browser.

## Install & Build

This project relies on *npm* and [Grunt](GruntJS.md) to build locally.
 * Run **npm install** to install all Node.js dependencies from *package.json*

## Debugging

Debugging a Chrome Extension can be very tricky.
 * [Debug a Chrome DevTools Panel](http://codemadesimple.wordpress.com/2012/11/15/debug-chrome-dev-tools-panel/)