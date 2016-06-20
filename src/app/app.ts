import * as angular from 'angular';
import 'angular-ui-router';

import AppComponent from './app.component';


const app = angular
	.module('main.app', [ 'ui.router' ])
	.component('app', AppComponent)
	.config(($urlRouterProvider, $stateProvider, $locationProvider) => {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('app', {
				abstract: true,
				template: '<app></app>'
			});

		$locationProvider.html5Mode(true);
	})
	.name;

export default app;
