

# generator-azuresfcontainer
> Yeoman generator for Azure Service Fabric Container projects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-azuresfcontainer using [npm](https://www.npmjs.com/) (we assume you have pre-installed [npm](https://www.npmjs.com/) and [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-azuresfcontainer
```
The commands might ask for root access. Please run them with ```sudo```, if needed.

Then generate your new project:

```bash
yo azuresfcontainer
```

You can have a look at our [documentation](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-deploy-container-linux#packaging-a-docker-container-with-yeoman) to understand how can you deploy the generated Service Fabric container application


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT
Copyright (c) Microsoft Corporation. All rights reserved.


# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Steps to contribute

Once you have figured out all the legalities above, you can follow the steps below - 

* Create a fork of this [repository](https://github.com/Azure/generator-azuresfcontainer)
* Git clone the forked repository to your development box
* Make the changes
* You can update your local Yeo using ```npm link``` (or ```sudo npm link``` as required) at the project root-level
* Create a new project with ```yo azuresfcontainer``` (ensure it picks Yeo node-module bits from your local changes)
* Validate that changes are working as expected and not breaking anything regressively - following the steps mentioned in the [documentation](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-deploy-container-linux#packaging-a-docker-container-with-yeoman) by creating and deploying the generated project on a Service Fabric cluster
* Raise a pull request and share with us 

## Debugging generator using vscode

* Open the repository's root folder in VScode.
* Run the command ```which yo``` and update the program's value in launch.json if it does not match with yours.
* Press F5 to start debugging.
