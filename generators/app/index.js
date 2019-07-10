'use strict';

var path      = require('path')
  , generators    = require('yeoman-generator')
  , yosay     = require('yosay');
var GuestGenerator = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.desc('Generate Service Fabric container application template');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to Celebal Tech Service Fabric Container application generator.'
    ));


    var prompts = [{
      type: 'input'
    , name: 'projName'
    , message: 'Name of your application:'
    , default: this.config.get('projName')
    , validate: function (input) {
        return input ? true : false;
      }
    },
    {
      type: 'input'
    , name: 'registryName'
    , message: 'Input the container registry name:'
    , default: this.config.get('registryName')
    , validate: function (input) {
        return input ? true : false;
      }
    },
      {
        type: 'input'
      , name: 'registryusername'
      , message: 'Input the container registry Username:'
      , default: this.config.get('registryusername')
      , validate: function (input) {
          return input ? true : false;
        }
      },
    {
      type: 'input'
    , name: 'registrypassword'
    , message: 'Input the container registry password:'
    , default: this.config.get('registrypassword')
    , validate: function (input) {
        return input ? true : false;
      }
    // },
    // {
    //   type: 'input'
    // , name: 'count'
    // , message: 'How many Services do you want:'
    // , default: this.config.get('count')
    // , validate: function (input) {
    //     return input ? true : false;
      // }
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.projName = this.props.projName.trim();
      this.props.registryName = this.props.registryName.trim();
      this.props.registryusername = this.props.registryusername.trim();
          this.props.registrypassword = this.props.registrypassword.trim();
        //  this.props.count = this.props.count.trim();
      this.config.set(props);

      done();
    }.bind(this));
  },

  writing: function() {
    var isAddNewService = false;
    this.composeWith('azuresfcontainer:guestcontainer', {
            options: { isAddNewService: isAddNewService }
    });
  },

  end: function () {
    this.config.save();
    //this is for Add Service
    var nodeFs = require('fs');
    if (nodeFs.statSync(path.join(this.destinationRoot(), '.yo-rc.json')).isFile()) {
        nodeFs.createReadStream(path.join(this.destinationRoot(), '.yo-rc.json')).pipe(nodeFs.createWriteStream(path.join(this.destinationRoot(), this.props.projName, '.yo-rc.json')));
    }

  }
});

module.exports = GuestGenerator;
