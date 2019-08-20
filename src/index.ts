export interface FlexAppsMenuItem {
    name: string;
    icon: string;
    url: string;
}

export class FlexAppsMenu {

    private flexAppsMenuOpen: boolean = false;
    private appsMenuImage: string = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNTE1Zjc1O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMwNyAtMjcpIj48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMi41IiBjeT0iMi41IiByPSIyLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMjcgMjcpIi8+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMi41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE3IDI3KSIvPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIyLjUiIGN5PSIyLjUiIHI9IjIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwNyAyNykiLz48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMi41IiBjeT0iMi41IiByPSIyLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMjcgMzcpIi8+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMi41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE3IDM3KSIvPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIyLjUiIGN5PSIyLjUiIHI9IjIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwNyAzNykiLz48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMi41IiBjeT0iMi41IiByPSIyLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMjcgNDcpIi8+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMi41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzE3IDQ3KSIvPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIyLjUiIGN5PSIyLjUiIHI9IjIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwNyA0NykiLz48L2c+PC9zdmc+';

    constructor(customAppsMenuImage?: string) {
        this.appsMenuImage = customAppsMenuImage || this.appsMenuImage;
    }

    public renderAppsMenu = (apps: FlexAppsMenuItem[]) => {
        if (!apps || apps.length === 0) {
            throw 'Must have apps to render!';
        }

        const componentToInsert = document.getElementById('flex-apps-menu-container');

        if (!componentToInsert) {
            throw 'Element with id *flex-apps-menu-container* was not found!';
        }

        // in case already rendered, clean all childs
        while (componentToInsert.firstChild) {
            componentToInsert.removeChild(componentToInsert.firstChild);
        }

        document.addEventListener('click', () => {
            this.displayNone();
            this.flexAppsMenuOpen = false;
        });

        this.createMenuApps(componentToInsert);

        const modal = this.createModalApps(apps);
        componentToInsert.appendChild(modal);
    }

    private createMenuApps = (componentToInsert: HTMLElement) => {
        const image = document.createElement('img');
        image.className = 'flex-menu-apps'
        image.src = this.appsMenuImage;

        image.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toogleApps();
        });

        componentToInsert.appendChild(image);
    };

    private createModalApps = (apps: FlexAppsMenuItem[]) => {
        const modalApp = document.createElement('div');
        modalApp.id = 'flex-apps-menu-modal';

        const setinha = document.createElement('div');
        setinha.id = 'flex-apps-menu-modal-point';

        modalApp.appendChild(setinha);
        modalApp.addEventListener('click', (e) => e.stopPropagation());

        for (const app of apps) {
            modalApp.appendChild(this.createIcon(app));
        }

        return modalApp;
    };

    private createIcon = (app: FlexAppsMenuItem) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');

        div.className = 'wrap-flex-menu-item';
        img.src = app.icon;
        span.innerText = app.name;

        div.addEventListener('click', () => window.open(app.url, '_blank', 'noopener'));
        div.appendChild(img);
        div.appendChild(span);

        return div;
    };

    private displayVisible = () => {
        const element = document.getElementById('flex-apps-menu-modal');
        if (element) {
            element.style.visibility = 'unset';
            const right = element.offsetWidth / 2 - 12;
            element.style.right = `-${right}px`;
        }
    };

    private displayNone = () => {
        const element = document.getElementById('flex-apps-menu-modal');
        if (element) {
            element.style.visibility = 'hidden';
        }
    };

    private toogleApps = () => {
        if (this.flexAppsMenuOpen) {
            console.debug('closing....');
            this.displayNone();
        } else {
            console.debug('opening....');
            this.displayVisible();
        }

        this.flexAppsMenuOpen = !this.flexAppsMenuOpen;
    };
}
