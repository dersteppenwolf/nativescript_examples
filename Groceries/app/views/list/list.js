var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");
var GroceryListViewModel = require("../../shared/view-models/grocery-list-view-model");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var socialShare = require("nativescript-social-share");
var swipeDelete = require("../../shared/utils/ios-swipe-delete");

var page;
var groceryList = new GroceryListViewModel([]);
var pageData = new observableModule.fromObject({
    groceryList: groceryList,
    grocery: "",
    quantity: ""
});



exports.loaded = function (args) {

    page = args.object;

    if (page.ios) {
        var listView = page.getViewById("groceryList");
        swipeDelete.enable(listView, function (index) {
            groceryList.delete(index);
        });
    }


    var listView = page.getViewById("groceryList");
    page.bindingContext = pageData;

    groceryList.empty();
    pageData.set("isLoading", true);
    groceryList.load().then(function () {
        pageData.set("isLoading", false);
        listView.animate({
            opacity: 1,
            duration: 1000
        });
    });
};

exports.add = function () {
    // Check for empty submissions
    if (pageData.get("grocery").trim() === "") {
        dialogsModule.alert({
            message: "Ingrese un comestible",
            okButtonText: "OK"
        });
        return;
    }
    if (pageData.get("quantity").trim() === "") {
        dialogsModule.alert({
            message: "Ingrese una cantidad",
            okButtonText: "OK"
        });
        return;
    }

    // Dismiss the keyboard
    page.getViewById("grocery").dismissSoftInput();
    groceryList.add(pageData.get("grocery"), pageData.get("quantity"))
        .catch(function () {
            dialogsModule.alert({
                message: "Se presentó un error añadiendo el elemento",
                okButtonText: "OK"
            });
        });

    // Empty the input field
    pageData.set("grocery", "");
    pageData.set("quantity", "");
};

exports.share = function () {
    var list = [];
    for (var i = 0, size = groceryList.length; i < size; i++) {
        list.push(groceryList.getItem(i).name + "(" + groceryList.getItem(i).qty + ")");
    }
    var listString = list.join(", ").trim();
    socialShare.shareText(listString);
};

exports.delete = function (args) {
    var item = args.view.bindingContext;
    var index = groceryList.indexOf_local(item);
    groceryList.delete(index);
};

exports.goToSearch = function () {
    var topmost = frameModule.topmost();
    //topmost.navigate("views/register/search");
    console.log("Probando lanzamiento búsqueda");
}

exports.logOut = function () {
    console.log(groceryList.logOut());
    var navigationEntry = {
        moduleName: "views/login/login",
        clearHistory: true
    };
    var topmost = frameModule.topmost();
    topmost.navigate(navigationEntry);
}
