'use strict';
//Личный кабинет

//1. Выход из личного кабинета (сделано)
const logoutButtonOne = new LogoutButton();
logoutButtonOne.action = () => {
    ApiConnector.logout((response) => {
        if (response.success) {
            location.reload();
        }
    });
};

//2.Получение информации о пользователе (сделано)
ApiConnector.current((response) => {
    if(response.success) {
        ProfileWidget.showProfile(response.data);
    }
});

 //3.Получение текущих курсов валюты (почти, не идет интервал)
const ratesBoardOne = new RatesBoard();
const period = () => {
    ApiConnector.getStocks(response => {
        if(response.success) {
            ratesBoardOne.clearTable();
            ratesBoardOne.fillTable(response.data);
        }
    })
}
period();
setInterval(period, 60000);

//4. Операции с деньгами
//4.1 Пополнение баланса (не работет setMessage)
const moneyManagerOne = new MoneyManager();
moneyManagerOne.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, (response) => {
        if(response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManagerOne.setMessage();
        }
    })
};

//4.2 конвертирование валюты
moneyManagerOne.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, (response) => {
        if(response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManagerOne.setMessage();
        }
    })
};

//4.3 перевод валюты
moneyManagerOne.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, (response) => {
        if(response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManagerOne.setMessage();
        }
    })
};