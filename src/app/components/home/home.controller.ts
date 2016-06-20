import {UserService} from '../../services/user.service';
//import '../../services/services.module';



class HomeController {
    //static $inject = ['userService'];
    private test: string;

    
    constructor(userService: UserService) {
        this.test = 'test';
        
        userService.getData().then((d) => {
            d.forEach( (item) => {
                console.log(item.avatar,item.name,item.content);
            })
            console.log("HERE",d)   
        });
    }
}

export default HomeController;
