var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var UserViewModel = require("../../shared/view-models/user-view-model");
//var user = new UserViewModel();
//for easier Development:
var user = new UserViewModel({
    email: "username@domain.com",
    password: "password"
});

var page;
var email;

exports.loaded = function (args) {
    page = args.object;
    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }


    page.bindingContext = user;
    user.init();
};

exports.signIn = function () {
    user.login()
        .catch(function (error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function () {
            var topmost = frameModule.topmost();
            topmost.navigate("views/list/list");
        });
};

exports.register = function () {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
