'use strict';

//Формы авторизации, регистрации
const userFormOne = new UserForm();
userFormOne.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        if(response.success) {
            location.reload();
        } else {
            userFormOne.setLoginErrorMessage(response.error);
        }
    })
};

userFormOne.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
        if(response.success) {
            location.reload();
        } else {
            userFormOne.setRegisterErrorMessage(response.error);
        }
    })
};