import NavComponent from './nav.component';

const nav = angular
	.module('main.app.common.nav', [])
	.component('navBar', NavComponent)
	.name;

export default nav;
