import Entry from "./entry"

export default class ChartModel {
    title: string
    description?: string
    type: "percentage" | "currency" | string
    data: Array<{ [key: string]: string | Entry | undefined }>

    constructor(title: string, description: string, type: "percentage" | "currency" | string, data: Array<{ [key: string]: string | Entry | undefined }>) {
        this.title = title
        this.description = description
        this.type = type
        this.data = data
    }
}
