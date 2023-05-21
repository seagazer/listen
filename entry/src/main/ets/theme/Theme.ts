export class Theme {
    colorPrimary: string
    colorSecondary: string
    colorAction: string

    constructor(colorPrimary: string, colorSecondary: string, colorAction: string = "#ccc6c6c6") {
        this.colorPrimary = colorPrimary
        this.colorSecondary = colorSecondary
        this.colorAction = colorAction
    }
}

export const DEFAULT_THEME = new Theme("#ff000000", "#ff9b9b9b")