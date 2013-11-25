'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var fs = require('fs');
var _ = require('lodash');


var WebcomponentsGenerator = module.exports = function WebcomponentsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);


  var file = getComponents();
  this.webComponents = file.webComponents;

  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install'],
      skipMessage: options['skip-install-message']
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(WebcomponentsGenerator, yeoman.generators.Base);

WebcomponentsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  //console.log(this.webComponents);
  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      type: 'checkbox',
      name: 'webcom',
      message: 'Which Web Components do you want to Try, my sexy friend ;) ?  -- (.)_(.) . Boobshere',
      choices: this.webComponents,
    },{
      type: 'checkbox',
      name: 'features',
      message: 'Do you  want a piece of this?',
      choices: [{
        name: 'Bootstrap for Sass',
        value: 'compassBootstrap',
        checked: true
      }]
    }
  ];

  this.prompt(prompts, function (answers) {
    var features = answers.features;

    function hasFeature(feat) { return features.indexOf(feat) !== -1; }

    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.compassBootstrap = hasFeature('compassBootstrap');

     var selected = [];
     var webcomps = this.webComponents;
    _(answers.webcom).forEach(function(answ, indx){
       selected.push((_.filter(webcomps, { value: answ }))[0]);
    });

    this.selectedComponents = selected;

    cb();
  }.bind(this));
};


WebcomponentsGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

WebcomponentsGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

WebcomponentsGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

WebcomponentsGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

WebcomponentsGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

WebcomponentsGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

WebcomponentsGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

WebcomponentsGenerator.prototype.h5bp = function h5bp() {
  this.copy('favicon.ico', 'app/favicon.ico');
  this.copy('404.html', 'app/404.html');
  this.copy('robots.txt', 'app/robots.txt');
  this.copy('htaccess', 'app/.htaccess');
};

WebcomponentsGenerator.prototype.mainStylesheet = function mainStylesheet() {
  if (this.compassBootstrap) {
    this.copy('main.scss', 'app/styles/main.scss');
  } else {
    this.copy('main.css', 'app/styles/main.css');
  }
};

WebcomponentsGenerator.prototype.mainJs = function mainJs() {
  this.copy('main.js', 'app/scripts/main.js');
};

WebcomponentsGenerator.prototype.writeIndex = function writeIndex() {

  this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
  this.indexFile = this.engine(this.indexFile, this);
  this.indexFile = this.appendScripts(this.indexFile, 'scripts/main.js', [
    'scripts/main.js'
  ]);

  if (this.compassBootstrap) {
    // wire Twitter Bootstrap plugins
    this.indexFile = this.appendScripts(this.indexFile, 'scripts/plugins.js', [
      'bower_components/sass-bootstrap/js/affix.js',
      'bower_components/sass-bootstrap/js/alert.js',
      'bower_components/sass-bootstrap/js/dropdown.js',
      'bower_components/sass-bootstrap/js/tooltip.js',
      'bower_components/sass-bootstrap/js/modal.js',
      'bower_components/sass-bootstrap/js/transition.js',
      'bower_components/sass-bootstrap/js/button.js',
      'bower_components/sass-bootstrap/js/popover.js',
      'bower_components/sass-bootstrap/js/carousel.js',
      'bower_components/sass-bootstrap/js/scrollspy.js',
      'bower_components/sass-bootstrap/js/collapse.js',
      'bower_components/sass-bootstrap/js/tab.js'
    ]);
  }

};

WebcomponentsGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.write('app/index.html', this.indexFile);

};

function getComponents (){
 return {
  "webComponents" : [
    {
      "src" : "bower_components/ninja-presentation/src/ninja-presentation.html",
      "value": "ninja-presentation",
      "version" : "~0.1.1",
      "name": "Ninja Presentations (They are great)",
      "checked": true,
      "info" : "https://github.com/viniciusalmeida/ninja-presentation"
    },
     {
      "src" : "bower_components/x-pokemon/x-pokemon.html",
      "value": "x-pokemon",
      "version" : "*",
      "name": "x-pokemon :o displays a pokemon",
      "checked": false,
      "info": "https://github.com/passy/x-pokemon"
    }
  ]}
}
///http://customelements.io/