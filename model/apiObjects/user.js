import Name from "./name"

export default class User {
    id
    first_name
    last_name
    avatar
    email


    constructor() {
        this.id = -1
        this.first_name = ''
        this.last_name = ''
        this.avatar = ''
        this.email = ''
    }

    get id() {
        return this.id
    }

    set id(val) {
        this.id = val
    }

    get first_name() {
        return this.first_name
    }

    set last_name(val) {
        this.last_name = val
    }

    get email() {
        return this.email
    }

    set email(val) {
        this.email = val
    }

}