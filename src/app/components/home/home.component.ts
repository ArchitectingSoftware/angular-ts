import controller from './home.controller';

const HomeComponent : ng.IComponentOptions= {
    controller,
    template: require('./home.tpl.html'),
    bindings: {
		  name: '<'
	  }
};

export default HomeComponent;
