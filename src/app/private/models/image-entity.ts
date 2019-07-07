export class ImageEntity {
    constructor(public fileName: string, public mimeType: string, public publicUri: string = null) {}
}