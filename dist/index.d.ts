export interface FlexAppsMenuItem {
    name: string;
    icon: string;
    url: string;
}
export declare class FlexAppsMenu {
    private flexAppsMenuOpen;
    private appsMenuImage;
    constructor(customAppsMenuImage?: string);
    renderAppsMenu: (apps: FlexAppsMenuItem[]) => void;
    private createMenuApps;
    private createModalApps;
    private createIcon;
    private displayVisible;
    private displayNone;
    private toogleApps;
}
