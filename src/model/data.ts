import Entry from "./entry"

export default class Data {
    title: string
    description?: string
    type?: "circle" | "line" | string
    data: Array<Entry>

    constructor(title: string, description: string, type: 'circle' | 'line' | string = 'line', data: Array<Entry>) {
        this.title = title
        this.description = description
        this.data = data
        this.type = type
    }
}
