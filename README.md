# generator-webcomponents [![Build Status](https://secure.travis-ci.org/rafinskipg/generator-webcomponents.png?branch=master)](https://travis-ci.org/rafinskipg/generator-webcomponents)

A generator for testing existing webcomponents with [Yeoman](http://yeoman.io).

This generator allows you to easy download the third party components from customelements.io and try them.

![](http://www.image-upload.net/di/MO2F/screen.png)

![](http://customelements.io/img/logo.png)![](http://customelements.io/img/logo.png)![](http://customelements.io/img/logo.png)

## I want to play, Right now!

Run
`````
npm install -g generator-webcomponents
``````
And then
``````
yo webcomponents
``````

Voilá!

### List of webcomponents
*Actually we are integrating the components from customelement.io! Help contributing! *
* [ninja-presentation](https://github.com/viniciusalmeida/ninja-presentation)
* [x-pokemon](https://github.com/passy/x-pokemon)

![](http://customelements.io/img/logo.png)![](http://customelements.io/img/logo.png)![](http://customelements.io/img/logo.png)

## What are webcomponents?

Basically they are pieces of html with hidden javascript code, that allows you to include only the HTML and have full functional elements.

Here is a list of articles related to webcomponents :

[Building webapps with yeoman and polymer - By Addy Osmani](http://www.html5rocks.com/en/tutorials/webcomponents/yeoman/?redirect_from_locale=es)

[w3c webcomponents spec](http://www.w3.org/TR/2013/WD-components-intro-20130606/)

## RoadMap for contributions

We need the following basics to deliver a 1.0.0 version:

* Adding all the components from customelements.io
* Display a snippet with the code of the selected components you downloaded.
* Add more doocumentation

### Didn't understand a sh*t? : What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-webcomponents from npm, run:

```
$ npm install -g generator-webcomponents
```

Finally, initiate the generator:

```
$ yo webcomponents
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
