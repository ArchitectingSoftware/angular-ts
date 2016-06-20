


class UserInfoController {
    private name: string;

    
    constructor(userService) {
        this.name = userService.getName();
    }
}
UserInfoController.$inject = ['userService'];

export default UserInfoController;
