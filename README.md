[![Build Status](https://api.travis-ci.org/SpatialVision/farm-build-nutrient-calculator.svg?branch=master)](https://travis-ci.org/SpatialVision/farm-build-nutrient-calculator)

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

## Testing

There are two kinds of tests in the Farm Build Nutrient Calculator Prototype application: Unit tests and End to End tests.

### Running Unit Tests

The Farm Build Nutrient Calculator Prototype app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._spec.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

### End to end testing

The Farm Build Nutrient Calculator Prototype app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `protractor-conf.js`
* the end-to-end tests are found in `milk-sold-e2e.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

In addition, since Protractor is built upon WebDriver we need to install this.  The Farm Build Nutrient Calculator Prototype
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests.
Farm Build Nutrient Calculator Prototype project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

[![Build Status](https://api.travis-ci.org/SpatialVision/farm-build-nutrient-calculator.svg?branch=master)](https://travis-ci.org/SpatialVision/farm-build-nutrient-calculator)
