export class Page {

    private subPages: Array<Page>;

    constructor(
        private pageName: string,
        private pagePath: string,
        private pageOrder: number) {
        this.subPages = new Array<Page>();
    }

    public getPageName(): string {
        return this.pageName;
    }
    public getPagePath(): string {
        return this.pagePath;
    }
    public getPageOrdeR(): number {
        return this.pageOrder;
    }
    public getSubPages(): Array<Page> {
        return this.subPages;
    }
    public setSubPages(value: Array<Page>) {
        this.subPages = value;
    }

}