'use strict';

const userFormOne = new UserForm();
userFormOne.loginFormCallback = (data) => {
    ApiConnector.login(data, response) => {
        if(success === true) {
            location.reload();
        } else {
            userFormOne.setLoginErrorMessage(message);
        }
    }
};

userFormOne.registerFormCallback = (data) => {
    ApiConnector.register(data, response) => {
        if(success === true) {
            location.reload();
        } else {
            userFormOne.setRegisterErrorMessage(message);
        }
    }
};