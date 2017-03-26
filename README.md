# Angular CLI Frontend
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://travis-ci.org/tarlepp/angular-cli-frontend.png?branch=master)](https://travis-ci.org/tarlepp/angular-cli-frontend)
[![codecov](https://codecov.io/gh/tarlepp/angular-cli-frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/tarlepp/angular-cli-frontend)
[![Dependency Status](https://david-dm.org/tarlepp/angular-cli-frontend.svg)](https://david-dm.org/tarlepp/angular-cli-frontend)
[![devDependency Status](https://david-dm.org/tarlepp/angular-cli-frontend/dev-status.svg)](https://david-dm.org/tarlepp/angular-cli-frontend#info=devDependencies)

## Table of Contents
 * [What is this?](#what-is-this)
 * [Used libraries, guides, etc.](#used-libraries-guides-etc)
   * [Libraries](#libraries)
   * [Guides](#guides)
   * [Other resources](#other-resources)
 * [Installation, configure and usage](#installation-configure-and-usage)
   * [Preconditions](#preconditions)
   * [Installation](#installation)
   * [Configuration](#configuration)
 * [Backend for this application](#backend-for-this-application)
   * [Endpoints / actions:](#endpoints--actions)
   * [JWT handling](#jwt-handling)
   * [CORS support](#cors-support)
   * [Example backend](#example-backend)
 * [Development](#development)
 * [Tests](#tests)
   * [Unit tests](#unit-tests)
   * [e2e tests](#e2e-tests)
 * [Build](#build)
 * [Author](#author)
 * [License](#license)

## What is this?
"Simple" frontend application for "generic" REST backend which uses JWT to authenticate users.
 
This is built with Angular-CLI tool.

## Used libraries, guides, etc.

### Libraries
 * [Angular](https://github.com/angular/angular)
 * [Material Design components for Angular](https://github.com/angular/material2)
 * [angular2-jwt](https://github.com/auth0/angular2-jwt)
 * [Angular-CLI](https://github.com/angular/angular-cli)
 
### Guides
 * [Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
 
### Other resources
 * [Material design](https://www.google.com/design/spec/material-design/)
 * [JSON Web Tokens](https://jwt.io/)

## Installation, configure and usage
### Preconditions
First of all you have to install `npm` and `node.js` to your box - note that `NodeJS 6+` is required. See following links to help you with installation:
* [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
* [Node Version Manager](https://github.com/creationix/nvm#installation)

### Installation
First of all you have to install ```npm``` and ```node.js``` to your box. Installation instructions can
be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). 

Note that ```node.js 7.x``` is required.

```bash
$ git clone https://github.com/tarlepp/angular-cli-frontend.git
$ cd angular-cli-frontend

# install the project's dependencies
$ npm install

# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn
```

### Configuration
See ```/src/env_example.js``` file and copy it to ```/src/env.js``` file and make
necessary changes to it.

## Backend for this application
This application relies that your backend implements following functionality.

### Endpoints / actions:
1) POST _your_backend_url_/auth/getToken
 * Request payload ```{"username": "some_username", "password": "some_password"}```
 * Response ```{"token": "JWT hash", "refresh_token": "Refresh token hash"}```
2) GET _your_backend_url_/auth/profile

### JWT handling
Your backend must support JWT on authenticate and authorization. After successfully login each request will contain ```Authorization: Bearer JsonWebTokenHere``` header which your backend much validate.

Also note that actual JsonWebToken must contain ```roles``` attribute which is an array that contains user roles. These roles must match with [userRoles.js](./src/core/auth/constants/userRoles.js) definitions.

Example of decoded JsonWebToken:
```json
{
  "exp": 1474307796,
  "username": "admin",
  "ip": "xxx.xxx.xxx.xxx",
  "agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.113 Safari/537.36",
  "checksum": "8939095afa51a37861b8e0fb4812d3ad893af2aec7604a25e29afe836e588678640ebaa6e001062274b2d2a97f20528771a43b0022e37eaebdefb7d0caa28d5c",
  "roles": [
    "ROLE_ROOT",
    "ROLE_ADMIN",
    "ROLE_USER",
    "ROLE_LOGGED"
  ],
  "firstname": "Arnold",
  "surname": "Administrator",
  "email": "arnold@administrator.com",
  "iat": "1474221396"
}
```

### CORS support
Your backend should have CORS enabled if you're going to host back- and frontend in different domains.

### Example backend
You can find simple backend solution [here](https://github.com/tarlepp/symfony-backend) which implements all required for this frontend application.

## Development
To start developing in the project run:

```bash
$ npm start
# OR
$ ng serve
```

Then head to `http://localhost:4200` in your browser.

## Tests

### Unit tests
To run tests run:
```bash
$ npm test
# OR
$ ng test
```

### e2e tests
To run tests run:
```bash
$ npm run e2e
# OR
$ ng e2e
```

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Author
Tarmo Leppänen

## License
[The MIT License (MIT)](LICENSE)

Copyright (c) 2017 Tarmo Leppänen
