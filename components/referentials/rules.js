export default function getRules() {

    return {
        required: val => !!val || 'Required field'
    }
}