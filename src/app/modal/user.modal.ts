export interface UserInfo {
    firstname: string;
    lastname: string;
    email: string;
    dateOfBirth: string;
    password: string;
}

export class UserInfoDto implements UserInfo {
    constructor(public firstname = '', public lastname = '', public email = null, public dateOfBirth = null, public password = null) {

    }
}
