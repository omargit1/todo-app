export default class Name {
    title
    first
    last

    constructor() {
        this.title = ''
        this.first = ''
        this.last = ''
    }

    get title() {
        return this.title
    }

    set title(val) {
        this.title = val
    }

    get first() {
        return this.first
    }

    set last(val) {
        this.last = val
    }


}