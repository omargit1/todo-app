export default class Case {

    _num
    _color
    _isActive

    constructor() {
        this._num = -1
        this._color = ''
        this._isActive = false
    }


    get num() {
        return this._num
    }

    set num(val) {
        this._num = val
    }

    get color() {
        return this._color
    }

    set color(val) {
        this._color = val
    }

    get isActive() {
        return this._isActive
    }

    set isActive(val) {
        this._isActive = val
    }
}