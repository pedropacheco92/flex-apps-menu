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
// let flexAppsMenuOpen = false;
// const iconSettings =
//     'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy4yMyIgaGVpZ2h0PSIxNy4yMyIgdmlld0JveD0iMCAwIDE3LjIzIDE3LjIzIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO3N0cm9rZTojYTNhYWI1O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoxLjIzcHg7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTUxMC4xNjYsMTI0My4xNDVhNS45LDUuOSwwLDAsMC0uMjQ4LS42LDEuMDM2LDEuMDM2LDAsMCwxLS4wMTQtLjg4bC41NjItMS4yM2EuNTYuNTYsMCwwLDAtLjExNC0uNjI5bC0uNjE5LS42MTlhLjU2LjU2LDAsMCwwLS42MjktLjExNGwtMS4yNTkuNTc0YTEuMDMyLDEuMDMyLDAsMCwxLS44NjQtLjAwNmMtLjE3Ni0uMDgyLS4zNTctLjE1NS0uNTQxLS4yMjFhMS4wMzIsMS4wMzIsMCwwLDEtLjYyNy0uNjA5bC0uNDc0LTEuMjY4YS41NjEuNTYxLDAsMCwwLS41MjYtLjM2NWgtLjg3NWEuNTYxLjU2MSwwLDAsMC0uNTI2LjM2NWwtLjQ4NCwxLjNhMS4wMzIsMS4wMzIsMCwwLDEtLjYxNC42MDVxLS4yNzYuMS0uNTM4LjIyNmExLjAzMiwxLjAzMiwwLDAsMS0uODc2LjAxM2wtMS4yMzEtLjU2MWEuNTYuNTYsMCwwLDAtLjYzLjExM2wtLjYxOS42MTlhLjU2LjU2LDAsMCwwLS4xMTQuNjNsLjU3NCwxLjI1OWExLjAzOCwxLjAzOCwwLDAsMS0uMDA4Ljg2OGMtLjA3LjE1Mi0uMTM1LjMwNy0uMTkzLjQ2NmExLjAzMiwxLjAzMiwwLDAsMS0uNjA3LjYxOGwtMS4zLjQ4NGEuNTYxLjU2MSwwLDAsMC0uMzY1LjUyNnYuODc1YS41NjMuNTYzLDAsMCwwLC4zNjUuNTI2bDEuMjY4LjQ3M2ExLjAzMiwxLjAzMiwwLDAsMSwuNjEuNjI3cS4xLjI3Ny4yMjEuNTQxYTEuMDMxLDEuMDMxLDAsMCwxLC4wMDYuODY0bC0uNTc0LDEuMjU5YS41Ni41NiwwLDAsMCwuMTE0LjYzbC42MTkuNjE5YS41Ni41NiwwLDAsMCwuNjMuMTE0bDEuMjMtLjU2MWExLjAzNywxLjAzNywwLDAsMSwuODguMDE0LDUuOTIyLDUuOTIyLDAsMCwwLC42LjI0OCwxLjAzNSwxLjAzNSwwLDAsMSwuNjMuNjEybC40NzQsMS4yNjdhLjU2MS41NjEsMCwwLDAsLjUyNi4zNjVoLjg3NWEuNTYuNTYsMCwwLDAsLjUyNi0uMzY1bC40ODQtMS4zYTEuMDMzLDEuMDMzLDAsMCwxLC42MTUtLjYwN3EuMjc2LS4xLjUzOC0uMjI2YTEuMDMzLDEuMDMzLDAsMCwxLC44NzYtLjAxM2wxLjIzMS41NjFhLjU2LjU2LDAsMCwwLC42My0uMTE0bC42MTktLjYxOWEuNTYuNTYsMCwwLDAsLjExNC0uNjNsLS41NzQtMS4yNTlhMS4wMzYsMS4wMzYsMCwwLDEsLjAwOC0uODY3Yy4wNzEtLjE1My4xMzUtLjMwOC4xOTMtLjQ2NmExLjAzNiwxLjAzNiwwLDAsMSwuNjA3LS42MThsMS4zLS40ODRhLjU2MS41NjEsMCwwLDAsLjM2NS0uNTI2di0uODc1YS41NjEuNTYxLDAsMCwwLS4zNjUtLjUyNmwtMS4yNjctLjQ3M0ExLjAzNywxLjAzNywwLDAsMSwxNTEwLjE2NiwxMjQzLjE0NVptLTUuNzU2LDUuMjMyYTMuMiwzLjIsMCwxLDEsMy4yLTMuMkEzLjIsMy4yLDAsMCwxLDE1MDQuNDEsMTI0OC4zNzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ5NS43OTUgLTEyMzYuNTYyKSIvPjwvc3ZnPg==';
// const iconAtestados =
//     'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMC4xMzkiIHZpZXdCb3g9IjAgMCAyMCAzMC4xMzkiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiM1MTVmNzU7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wMDEpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTUwNC4zMyw1NDguMTc4SDQ4Ni43ODNhLjM4Mi4zODIsMCwxLDEsMC0uNzY0SDUwNC4zM2ExLjMxLDEuMzEsMCwwLDAsMS4zMDctMS4zMDhWNTE4LjQyYS4zODEuMzgxLDAsMCwxLC43NjMsMGgwdjI3LjY4NkEyLjA3NiwyLjA3NiwwLDAsMSw1MDQuMzMsNTQ4LjE3OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00ODYuNCAtNTE4LjA0KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNDg2Ljc4MSw1NDcuOTY2YS4zODEuMzgxLDAsMCwxLS4zODEtLjM4MWgwVjUyMC4xMTFhMi4wNzcsMi4wNzcsMCwwLDEsMi4wNy0yLjA3MWgxNy40NDJhLjM4MS4zODEsMCwxLDEsMCwuNzYzSDQ4OC40N2ExLjMxMSwxLjMxMSwwLDAsMC0xLjMwOCwxLjMwOHYyNy40NzRhLjM4MS4zODEsMCwwLDEtLjM4MS4zODFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDg2LjQgLTUxOC4wNCkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTQ5Ny4yMSw1NTIuNDE5bC00LjM3LTQuMTg4LDEuNDMyLTEuMzcyLDIuOTM4LDIuODIsNS43ODQtNS41NDMsMS40MzIsMS4zNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDg4LjYzMSAtNTI3LjA4OCkiLz48L2c+PC9zdmc+';
// const iconAgendamentos =
//     'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNTE1Zjc1O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI4OSAtOTApIj48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjIwLjg0MiIgaGVpZ2h0PSIyLjgyMiIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyODkuNTc5IDkwLjU3OSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTUxNS42ODQsMTA2OS4yNUg0OTguMzE2YTIuMzE4LDIuMzE4LDAsMCwxLTIuMzE2LTIuMzE2di0xNy4zNjhhMi4zMTgsMi4zMTgsMCwwLDEsMi4zMTYtMi4zMTZoMTcuMzY4YTIuMzE4LDIuMzE4LDAsMCwxLDIuMzE2LDIuMzE2djE3LjM2OEEyLjMxOCwyLjMxOCwwLDAsMSw1MTUuNjg0LDEwNjkuMjVabS0xNy4zNjgtMjAuODQyYTEuMTU5LDEuMTU5LDAsMCwwLTEuMTU4LDEuMTU4djE3LjM2OGExLjE1OSwxLjE1OSwwLDAsMCwxLjE1OCwxLjE1OGgxNy4zNjhhMS4xNTksMS4xNTksMCwwLDAsMS4xNTgtMS4xNTh2LTE3LjM2OGExLjE1OSwxLjE1OSwwLDAsMC0xLjE1OC0xLjE1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc5MyAtOTU3LjI1KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNTI2LjMyMiwxMDczLjg2NGgtMi4zODhhLjQzNC40MzQsMCwwLDEsMC0uODY4aDIuMzg4YS40MzQuNDM0LDAsMSwxLDAsLjg2OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4MS40MjEgLTk2OC4wOSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTUyNi4zMjIsMTA2Mi44NzJoLTIuMzg4YS40MzQuNDM0LDAsMSwxLDAtLjg2OGgyLjM4OGEuNDM0LjQzNCwwLDEsMSwwLC44NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3ODEuNDIxIC05NjMuNDYyKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNTE2LjkyMSwxMDczLjg2NGgtNS4xNzVhLjQzNC40MzQsMCwwLDEsMC0uODY4aDUuMTc1YS40MzQuNDM0LDAsMCwxLDAsLjg2OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4Ni41NTMgLTk2OC4wOSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTUxNi45MjEsMTA2Mi44NzJoLTUuMTc1YS40MzQuNDM0LDAsMCwxLDAtLjg2OGg1LjE3NWEuNDM0LjQzNCwwLDEsMSwwLC44NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3ODYuNTUzIC05NjMuNDYyKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNTA1LjU3OSwxMDczLjg2NEg1MDEuMzFhLjQzNC40MzQsMCwxLDEsMC0uODY4aDQuMjY5YS40MzQuNDM0LDAsMCwxLDAsLjg2OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc5MC45NDcgLTk2OC4wOSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTUwNS41NzksMTA2Mi44NzJINTAxLjMxYS40MzQuNDM0LDAsMSwxLDAtLjg2OGg0LjI2OWEuNDM0LjQzNCwwLDEsMSwwLC44NjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTAuOTQ3IC05NjMuNDYyKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNTIwLjY4NCwxMDc0LjgwOWEuNDM0LjQzNCwwLDAsMS0uNDM0LS40MzR2LTcuOTg4YS40MzQuNDM0LDAsMSwxLC44NjgsMHY3Ljk4OEEuNDM0LjQzNCwwLDAsMSw1MjAuNjg0LDEwNzQuODA5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzgyLjc4OSAtOTY1LjEyNCkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTUwOC42ODQsMTA3NC44MDlhLjQzNC40MzQsMCwwLDEtLjQzNC0uNDM0di03Ljk4OGEuNDM0LjQzNCwwLDAsMSwuODY4LDB2Ny45ODhBLjQzNC40MzQsMCwwLDEsNTA4LjY4NCwxMDc0LjgwOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4Ny44NDIgLTk2NS4xMjQpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik01MjAuNjg0LDEwNjAuMDI5YS40MzQuNDM0LDAsMCwxLS40MzQtLjQzNHYtMy45MWEuNDM0LjQzNCwwLDEsMSwuODY4LDB2My45MUEuNDM0LjQzNCwwLDAsMSw1MjAuNjg0LDEwNjAuMDI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzgyLjc4OSAtOTYwLjYxOCkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTUwOC42ODQsMTA2MC4wMjlhLjQzNC40MzQsMCwwLDEtLjQzNC0uNDM0di0zLjkxYS40MzQuNDM0LDAsMSwxLC44NjgsMHYzLjkxQS40MzQuNDM0LDAsMCwxLDUwOC42ODQsMTA2MC4wMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3ODcuODQyIC05NjAuNjE4KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNTEyLjksMTA2OC43ODJhLjU4MS41ODEsMCwwLDEtLjQ0MS0uMmwtMS4zMTYtMS41NDFhLjU3OS41NzksMCwxLDEsLjg4LS43NTJsLjg1NywxLDEuNzEyLTIuMTg0YS41NzkuNTc5LDAsMSwxLC45MTEuNzEzbC0yLjE0OCwyLjc0MmEuNTguNTgsMCwwLDEtLjQ0My4yMjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3ODYuNjgxIC05NjQuNjc0KSIvPjwvZz48L3N2Zz4=';
// const iconBoteria =
//     'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4wNTEiIGhlaWdodD0iMjMuOTQ2IiB2aWV3Qm94PSIwIDAgMjQuMDUxIDIzLjk0NiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNi45MzgsMjIuMzQyaC0zLjlBMy41NCwzLjU0LDAsMCwxLDkuNSwxOC44MDdWMTcuMTE5YTMuNTQsMy41NCwwLDAsMSwzLjUzNi0zLjUzNmgxLjY4N2EzLjU0LDMuNTQsMCwwLDEsMy41MzYsMy41MzZ2My45QTEuMzIzLDEuMzIzLDAsMCwxLDE2LjkzOCwyMi4zNDJabS0zLjktNy41OTNhMi4zNzMsMi4zNzMsMCwwLDAtMi4zNywyLjM3djEuNjg3YTIuMzczLDIuMzczLDAsMCwwLDIuMzcsMi4zN2gzLjlhLjE1Ni4xNTYsMCwwLDAsLjE1NS0uMTU2di0zLjlhMi4zNzMsMi4zNzMsMCwwLDAtMi4zNy0yLjM3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuNSAtMTMuNTgzKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjguNTgxLDMzLjk4NWgtNC40M2ExLjMyMywxLjMyMywwLDAsMS0xLjMyMS0xLjMyMVYyOC4yMzVhMS4zMjMsMS4zMjMsMCwwLDEsMS4zMjEtMS4zMjFoNC40M0ExLjMyMiwxLjMyMiwwLDAsMSwyOS45LDI4LjIzNXY0LjQyOUExLjMyMiwxLjMyMiwwLDAsMSwyOC41ODEsMzMuOTg1Wm0tNC40My01LjkwNmEuMTU1LjE1NSwwLDAsMC0uMTU1LjE1NnY0LjQyOWEuMTU1LjE1NSwwLDAsMCwuMTU1LjE1Nmg0LjQzYS4xNTYuMTU2LDAsMCwwLC4xNTYtLjE1NlYyOC4yMzVhLjE1Ni4xNTYsMCwwLDAtLjE1Ni0uMTU2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjM5MyAtMTguNDc2KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTQuODksNDYuMzM3SDEzLjJBMy41NCwzLjU0LDAsMCwxLDkuNjY3LDQyLjhWNDEuMTE0QTMuNTQsMy41NCwwLDAsMSwxMy4yLDM3LjU3OGgzLjlBMS4zMjIsMS4zMjIsMCwwLDEsMTguNDI1LDM4Ljl2My45QTMuNTQsMy41NCwwLDAsMSwxNC44OSw0Ni4zMzdaTTEzLjIsMzguNzQzYTIuMzczLDIuMzczLDAsMCwwLTIuMzcsMi4zN1Y0Mi44YTIuMzczLDIuMzczLDAsMCwwLDIuMzcsMi4zN0gxNC44OWEyLjM3MywyLjM3MywwLDAsMCwyLjM3LTIuMzdWMzguOWEuMTU2LjE1NiwwLDAsMC0uMTU2LS4xNTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS41NjEgLTIyLjM5MSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTM4LjcxOCwyMi4zNDJoLTMuOWExLjMyMiwxLjMyMiwwLDAsMS0xLjMyMS0xLjMyMXYtMy45YTMuNTQsMy41NCwwLDAsMSwzLjUzNi0zLjUzNmgxLjY4N2EzLjU0LDMuNTQsMCwwLDEsMy41MzYsMy41MzZ2MS42ODdBMy41NCwzLjU0LDAsMCwxLDM4LjcxOCwyMi4zNDJabS0xLjY4Ny03LjU5M2EyLjM3MywyLjM3MywwLDAsMC0yLjM3LDIuMzd2My45YS4xNTYuMTU2LDAsMCwwLC4xNTYuMTU2aDMuOWEyLjM3MywyLjM3MywwLDAsMCwyLjM3LTIuMzdWMTcuMTE5YTIuMzczLDIuMzczLDAsMCwwLTIuMzctMi4zN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOC4zMDggLTEzLjU4MykiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTM4Ljg4NSw0Ni4zMzdIMzcuMkEzLjU0LDMuNTQsMCwwLDEsMzMuNjYxLDQyLjhWMzguOWExLjMyMywxLjMyMywwLDAsMSwxLjMyMS0xLjMyMWgzLjlhMy41NCwzLjU0LDAsMCwxLDMuNTM2LDMuNTM2VjQyLjhBMy41NCwzLjU0LDAsMCwxLDM4Ljg4NSw0Ni4zMzdabS0zLjktNy41OTRhLjE1Ni4xNTYsMCwwLDAtLjE1NS4xNTZ2My45YTIuMzczLDIuMzczLDAsMCwwLDIuMzcsMi4zN2gxLjY4N2EyLjM3MywyLjM3MywwLDAsMCwyLjM3LTIuMzdWNDEuMTE0YTIuMzczLDIuMzczLDAsMCwwLTIuMzctMi4zN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOC4zNjkgLTIyLjM5MSkiLz48L2c+PC9zdmc+';
