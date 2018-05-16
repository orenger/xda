export interface MenuResponse {
    menuName: string;
    menuPath: string;
    forMainUserOnly: boolean;
    hasSubMenus: boolean;
    subMenus: Array<MenuResponse>;
}