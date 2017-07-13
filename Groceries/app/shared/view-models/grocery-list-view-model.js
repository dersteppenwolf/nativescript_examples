var config = require("../../shared/config");
var firebase = require("nativescript-plugin-firebase");
var ObservableArray = require("data/observable-array").ObservableArray;

function indexOf_firebase(item) {
    var match = -1;
    this.forEach(function (loopItem, index) {
        if (loopItem.id === item.key) {
            match = index;
        }
    });
    return match;
}
function indexOf_local(item) {
    var match = -1;
    this.forEach(function (loopItem, index) {
        if (loopItem.id === item.id) {
            match = index;
        }
    });
    return match;
}

function GroceryListViewModel(items) {
    var viewModel = new ObservableArray(items);
    viewModel.indexOf_firebase = indexOf_firebase;
    viewModel.indexOf_local = indexOf_local;

    var listeners = null;
    var path = "";

    viewModel.load = function () {

        var onChildEvent = function (result) {
            var matches = [];

            if (result.type === "ChildAdded") {
                if (result.value.UID === config.uid) {
                    viewModel.push({
                        name: result.value.name,
                        qty: result.value.quantity,
                        id: result.key
                    });
                    viewModel.sort(function (a, b) {
                        var nameA = a.name.toUpperCase();
                        var nameB = b.name.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    });
                }
            } else if (result.type === "ChildRemoved") {
                matches.push(result);
                matches.forEach(function (match) {
                    var index = viewModel.indexOf_firebase(match);
                    viewModel.splice(index, 1);
                });
            } else if (result.type === "ChildChanged") {
                matches.push(result);
                matches.forEach(function (match) {
                    var index = viewModel.indexOf_firebase(match);
                    viewModel.getItem(index).name = result.value.Name;
                    viewModel.refresh();
                });
            }

        };

        return firebase.addChildEventListener(onChildEvent, "/Groceries").then(
            function (listenerWrapper) {
                console.log("firebase.addChildEventListener added");
                path = listenerWrapper.path;
                listeners = listenerWrapper.listeners;
            },
            function (error) {
                console.log("firebase.addChildEventListener error: " + error);
            }
        )
    };

    viewModel.refresh = function () {
        var data = viewModel.splice(viewModel.length - 1, 1);
        viewModel.push(data);
    };

    viewModel.empty = function () {
        while (viewModel.length) {
            viewModel.pop();
        }
    };

    viewModel.add = function (grocery, qty) {
        return firebase.push('/Groceries', {
            'name': grocery,
            'quantity': qty,
            'UID': config.uid
        });
    };

    viewModel.delete = function (index) {
        var id = viewModel.getItem(index).id;
        return firebase.remove("/Groceries/" + id);
    };

    viewModel.logOut = function () {
        //viewModel.empty();
        firebase.removeEventListeners(listeners, path);
        return firebase.logout();
    }
    return viewModel;
}

module.exports = GroceryListViewModel;
