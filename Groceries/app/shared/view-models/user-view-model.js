var config = require("../../shared/config");
var firebase = require("nativescript-plugin-firebase");
var observableModule = require("data/observable");
var validator = require("email-validator");

function User(info) {
    info = info || {};

    // You can add properties to observables on creation
    var viewModel = new observableModule.fromObject({
        email: info.email || "",
        password: info.password || ""
    });

    viewModel.init = function () {
        firebase.init({
            url: config.apiUrl,
            persist: true
        }).then(
            function (instance) {
                console.log("firebase.init done");
            },
            function (error) {
                console.log("firebase.init error: " + error);
            }
            );
        firebase.keepInSync(
            '/Groceries', // which path in your Firebase needs to be kept in sync?
            true      // set to false to disable this feature again
        ).then(
            function () {
                console.log("firebase.keepInSync is ON for /Groceries");
            },
            function (error) {
                console.log("firebase.keepInSync error: " + error);
            }
            );
    };

    viewModel.login = function () {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: viewModel.get("email"),
                password: viewModel.get("password")
            }
        }).then(
            function (response) {
                config.uid = response.uid
                return response;
            });
    };

    viewModel.register = function () {
        return firebase.createUser({
            email: viewModel.get("email"),
            password: viewModel.get("password")
        }).then(
            function (response) {
                console.log(response);
                return response;
            }
            );
    };

    return viewModel;
}

module.exports = User;
