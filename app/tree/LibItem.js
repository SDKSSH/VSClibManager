// @ts-nocheck
const vscode = require("vscode")

module.exports = class LibItem extends vscode.TreeItem{
    constructor(json, icon) {
        super(json.name, vscode.TreeItemCollapsibleState);
        this.description = json.version;
        this.json = json
        this.iconPath = {
            "light" : icon,
            "dark" : icon
        }
    }

    command = {
        command: "extension.openextension",
        title: "Open Extension",
        arguments: [this.json]
    }
}