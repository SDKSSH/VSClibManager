// @ts-nocheck
const vscode = require("vscode")

module.exports = class LibItem extends vscode.TreeItem{
    constructor(json, icon, type) {
        super(json.name, vscode.TreeItemCollapsibleState);
        this.description = json.version;
        this.json = json
        this.iconPath = {
            "light" : icon,
            "dark" : icon
        }
        this.type = type;
    }

    command = {
        command: "extension.viewlibrary",
        title: "View Library",
        arguments: [this.json, this.type]
    }
}