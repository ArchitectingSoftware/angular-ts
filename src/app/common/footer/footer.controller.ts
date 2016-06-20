class FooterController implements ng.IComponentController{

    private year : number;
	constructor() {
        this.year = new Date().getFullYear();  
    }
}

export default FooterController;
