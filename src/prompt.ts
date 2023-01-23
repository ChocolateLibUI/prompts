import "./container.scss"
import { Base, defineElement } from "@chocolatelibui/core"
import { events, forDocuments } from "@chocolatelibui/document"

export class Container extends Base {
    /**Returns the name used to define the element */
    static elementName() {
        return 'container';
    }
    /**Returns the namespace override for the element*/
    static elementNameSpace() {
        return 'chocolatelibui-prompts';
    }

    constructor() {
        super();
    }

    /**Returns the zindex of the context menu container default is 999999999 */
    get zIndex() {
        return parseInt(this.style.zIndex);
    }

    /**Changes z index of the context menu container, this should always be the highest element of the dom */
    set zIndex(z: number) {
        this.style.zIndex = String(z);
    }
}
defineElement(Container);

events.on('documentAdded', (e) => {
    (<any>e.data)["@chocolatelibui/prompts"] = e.data.documentElement.appendChild(new Container);
});
forDocuments((doc) => {
    (<any>doc)["@chocolatelibui/prompts"] = doc.documentElement.appendChild(new Container);
})