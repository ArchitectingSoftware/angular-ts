// 3rd party modules
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';


import * as angular from "angular";
import * as angularUiBootstrap from 'angular-ui-bootstrap';

//routes
import app from './app/app';
import components from './app/components/components';
import common from './app/common/common';
import services from './app/services/services.module';



angular.module('main', [
    angularUiBootstrap, app, components, common, services
]);

console.log("DBG: pre-bootstrap");
angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});
console.log("DBG: post-bootstrap");