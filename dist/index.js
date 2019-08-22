"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlexAppsMenu = /** @class */ (function () {
    function FlexAppsMenu(customAppsMenuImage) {
        var _this = this;
        this.flexAppsMenuOpen = false;
        this.appsMenuImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNTE1Zjc1O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMwNyAtMjcpIj48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMi41IiBjeT0iMi41IiByPSIyLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMjcgMjcpIi8+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMi41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE3IDI3KSIvPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIyLjUiIGN5PSIyLjUiIHI9IjIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwNyAyNykiLz48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMi41IiBjeT0iMi41IiByPSIyLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMjcgMzcpIi8+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMi41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE3IDM3KSIvPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIyLjUiIGN5PSIyLjUiIHI9IjIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwNyAzNykiLz48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMi41IiBjeT0iMi41IiByPSIyLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMjcgNDcpIi8+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMi41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE3IDQ3KSIvPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIyLjUiIGN5PSIyLjUiIHI9IjIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwNyA0NykiLz48L2c+PC9zdmc+';
        this.renderAppsMenu = function (apps) {
            if (!apps || apps.length === 0) {
                throw 'Must have apps to render!';
            }
            var componentToInsert = document.getElementById('flex-apps-menu-container');
            if (!componentToInsert) {
                throw 'Element with id *flex-apps-menu-container* was not found!';
            }
            // in case already rendered, clean all childs
            while (componentToInsert.firstChild) {
                componentToInsert.removeChild(componentToInsert.firstChild);
            }
            document.addEventListener('click', function () {
                _this.displayNone();
                _this.flexAppsMenuOpen = false;
            });
            _this.createMenuApps(componentToInsert);
            var modal = _this.createModalApps(apps);
            componentToInsert.appendChild(modal);
        };
        this.createMenuApps = function (componentToInsert) {
            var image = document.createElement('img');
            image.className = 'flex-menu-apps';
            image.src = _this.appsMenuImage;
            image.addEventListener('click', function (e) {
                e.stopPropagation();
                _this.toogleApps();
            });
            componentToInsert.appendChild(image);
        };
        this.createModalApps = function (apps) {
            var modalApp = document.createElement('div');
            modalApp.id = 'flex-apps-menu-modal';
            var setinha = document.createElement('div');
            setinha.id = 'flex-apps-menu-modal-point';
            modalApp.appendChild(setinha);
            modalApp.addEventListener('click', function (e) { return e.stopPropagation(); });
            for (var _i = 0, apps_1 = apps; _i < apps_1.length; _i++) {
                var app = apps_1[_i];
                modalApp.appendChild(_this.createIcon(app));
            }
            return modalApp;
        };
        this.createIcon = function (app) {
            var div = document.createElement('div');
            var img = document.createElement('img');
            var span = document.createElement('span');
            div.className = 'wrap-flex-menu-item';
            img.src = app.icon;
            span.innerText = app.name;
            div.addEventListener('click', function () { return window.open(app.url, '_blank', 'noopener'); });
            div.appendChild(img);
            div.appendChild(span);
            return div;
        };
        this.displayVisible = function () {
            var element = document.getElementById('flex-apps-menu-modal');
            if (element) {
                element.style.visibility = 'unset';
                var right = element.offsetWidth / 2 - 12;
                element.style.right = "-" + right + "px";
            }
        };
        this.displayNone = function () {
            var element = document.getElementById('flex-apps-menu-modal');
            if (element) {
                element.style.visibility = 'hidden';
            }
        };
        this.toogleApps = function () {
            if (_this.flexAppsMenuOpen) {
                console.debug('closing....');
                _this.displayNone();
            }
            else {
                console.debug('opening....');
                _this.displayVisible();
            }
            _this.flexAppsMenuOpen = !_this.flexAppsMenuOpen;
        };
        this.appsMenuImage = customAppsMenuImage || this.appsMenuImage;
    }
    return FlexAppsMenu;
}());
exports.FlexAppsMenu = FlexAppsMenu;
