# Titan Calc

TitanCalc is a skills calculator for the classic game Titan Quest.

## Overview

Titan Calc was written in 2007 with the original release of the game to help players map out builds of their characters before progressing in the game.  Since the apps first release there have been several offshoots for mods and games updates which allows both this site and Titan Quest to live on.

## Developer Information

The code for the application was originally a mixture of a ASP (not ASP.net) website and pure JavaScript.  Since the desire was not to have a datastore attached to the site everything is managed via QueryStrings when saving and loading builds.

With the migration of the site to a new host, updates were made to no longer utilize ASP. While the site now uses some more modern technologies such as Babel and Webpack, the core is, well, a mess of non compliant HTML and JavaScript.

That said, it isn't too bad to make updates too and honestly it would need to be rewritten from the ground up in order to take full advantage of newer technology.

## Code Updates

To make code changes you will need Node.js and NPM.

Download the code to your local machine.

```git clone https://github.com/hansenwebco/titan-calc.git```

Install the NPM packages associated with the project with:

```npm install```

To run the site in debug mode use, this will build the JavaScript for the site and launch a debug session with hot reloading in place in your default browser.

```npm run dev```

The site HTML content can be found in the ```/public``` folder.

The site JS and CSS can be found in the ```/src``` folder.

When build the packaged js/css will be put in ```/public/dist/```

## Live Site

The site is hosted at : [https://www.titancalc.com](https://www.titancalc.com)