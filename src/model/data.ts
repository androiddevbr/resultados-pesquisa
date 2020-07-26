import Entry from "./entry"

export default class Data {
    title: string
    description?: string
    data: Array<Entry>

    constructor(title: string, description: string, data: Array<Entry>) {
        this.title = title
        this.description = description
        this.data = data
    }
}
