/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
type Children = any[] | any

export function createElement(tag: any, props: { [key: string]: any }, ...children: Children[]): HTMLElement {
    if (typeof tag === 'function') {
        return tag(props, ...children)
    }
    const element = document.createElement(tag)

    Object.entries(props || {}).forEach(([name, value]) => {
        if (name.startsWith('on') && name.toLowerCase() in window)
            element.addEventListener(name.toLowerCase().substring(2), value)
        else element.setAttribute(name, value.toString())
    })

    children.forEach(child => {
        appendChild(element, child)
    })

    return element
}

function appendChild(parent: HTMLElement, child: Children): void {
    if (Array.isArray(child))
        child.forEach(nestedChild => appendChild(parent, nestedChild))
    else
        parent.appendChild(child.nodeType ? child : document.createTextNode(child))
}

export function createFragment(props: { [id: string]: string }, ...children: Children[]): Children[] {
    return children
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any
        }
    }
}
