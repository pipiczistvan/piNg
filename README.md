# piNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## First time build

After you downloaded the sources you should run a `yarn install` in order to download the project dependencies.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build individual libraries

Run `ng build <library-name>` to build a library from the projects folder. The generated results will appear in the dist folder.

## Publish library on private npm proxy registry
piNg is in development phase, so in order to use its libraries as npm dependencies, you need to publish them on a registry. 

The default registry is https://registry.npmjs.org/ which is the official npm registry. You can only publish there public packages for free, so I recommend to use an alternative solution in development phase.

You can use Verdaccio which is a lightweight npm proxy registry running on your own machine.

### Install Verdaccio
To install Verdaccio follow these steps, or read the [official guide](https://verdaccio.org/docs/en/installation).
* Run `npm install -g verdaccio`
* Verdaccio will listen on localhost, if you want to change it edit `~/.config/verdaccio/config.yaml` file: </br>
`listen`</br>
&nbsp;`- 0.0.0.0:4873`
* Run `verdaccio`

### Configure your project to use Verdaccio as npm registry
For simplicity I will use my local verdaccio's address, but you have to change it to your own!
#### Publish
For publishing you have 2 ways to set your registry:
* Use `--registry=http://rsptn.ddns.net:4441` when you run ANY npm command.
* Specify it in the library's `package.json` file:</br>
`"publishConfig": {`</br>
&nbsp;&nbsp;&nbsp;&nbsp;`"registry": "http://rsptn.ddns.net:4441"`</br>
`}`

Now that the registry is set you can publish the package by following the next steps:
* Navigate to repository's root folder
* Run `ng build <library_name>`
* Run `cd ./dist/<library_name>`
* Create a new user with `npm adduser --registry http://rsptn.ddns.net:4441`, or login with `npm login --registry http://rsptn.ddns.net:4441`
* Run `npm publish --registry http://rsptn.ddns.net:4441`

#### Install
You have to create a `.npmrc` where you run the npm commands, and add the following line into it:</br>
`registry=http://rsptn.ddns.net:4441`
