export class Component {
    element?: HTMLElement

    protected setElement(element: HTMLElement): void {
        this.element = element
    }

    public getElement(): HTMLElement {
        if (!this.element) {
            throw new Error('element is null')
        }

        return this.element
    }

    public destory(): void {
        this.getElement().remove()
    }
}