export default class Task {


    _id
    _label
    _status



    constructor() {
        this._id = -1
        this._label = ''
        this._status = ''
    }

    get id() {
        return this._id
    }
    set id(val) {
        this._id = val
    }

    get label() {
        return this._label
    }
    set label(val) {
        this._label = val
    }

    get status() {
        return this._status
    }

    set status(val) {
        this._status = val
    }
}