import controller from './app.controller';

//import  "./app.tpl.html!text";

console.log("DBG: pre-app");
const AppComponent:ng.IComponentOptions = {
    controller: controller,
    template: require('./app.tpl.html')
};
console.log("DBG: post-app");

export default AppComponent;
