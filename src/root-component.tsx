// import { MDCIconButtonToggle } from '@material/icon-button'
// import { MDCSwitch } from '@material/switch'
// import { MDCSlider } from '@material/slider'
// import { MDCTextField } from '@material/textfield'
// import { MDCRipple } from '@material/ripple'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement, createFragment } from './framework/jsx'
import { Component } from './framework/component'

export class RootComponent extends Component {
    constructor() {
        super()
        this.setElement(
            <div class="mdc-typography--headline1">
                Hello World!
            </div>
        )
    }
}