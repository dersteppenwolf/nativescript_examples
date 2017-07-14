var config = require("../../shared/config");
var firebase = require("nativescript-plugin-firebase");
var observableModule = require("data/observable");
var validator = require("email-validator");

// Remover después
var frameModule = require("ui/frame");

function User(info) {
    info = info || {};
    var logged = false;

    // You can add properties to observables on creation
    var viewModel = new observableModule.fromObject({
        email: info.email || "",
        password: info.password || ""
    });

    viewModel.init = function (callback) {
        firebase.init({
            url: config.apiUrl,
            persist: true,
            onAuthStateChanged: function (data) { // optional but useful to immediately re-logon the user when he re-visits your app
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn) {
                    console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
                    config.uid = data.user.uid;
                    logged = true;
                }
                else {
                    logged = false;
                }
                // Notificación de ejecución
                callback();
            }
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
        callback();
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
                config.uid = response.uid;
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

    viewModel.checkLogged = function () {
        return logged;
    }

    return viewModel;
}

module.exports = User;
