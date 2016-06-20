class AboutController implements ng.IComponentController{
    private lists: string[];

    constructor() {
        this.lists = ['test', 'test', 'test2'];
    }
}

export default AboutController;
