#Farm Build Nutrient Calculator Prototype

This project is a prototype application to show the complete cycle of development, test and qa in farm build project.


## Getting Started

To get you started simply download this repository using "Download Zip" on the right side of this page. Unzip the downloaded folder and navigate to "app > examples" and open "milk-sold.html"
in a browser (preferably chrome or firefox).

If you want to run tests you need to clone the Farm Build Nutrient Calculator Prototype repository and follow the rest of this instruction.

### Prerequisites

You need git to clone the Farm Build Nutrient Calculator Prototype repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test Farm Build Nutrient Calculator Prototype. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone Farm Build Nutrient Calculator Prototype

Clone the Farm Build Nutrient Calculator Prototype repository using [git]:

```git clone https://github.com/angular/farm-build-nutrient-calculator.git```

```cd farm-build-nutrient-calculator```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
Farm Build Nutrient Calculator Prototype changes this location through the `.bowerrc` file.

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/examples/milk-sold.html`.

[![Build Status](https://api.travis-ci.org/SpatialVision/farm-build-nutrient-calculator.svg?branch=master)](https://travis-ci.org/SpatialVision/farm-build-nutrient-calculator)
