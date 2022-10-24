// @ts-nocheck
const vscode = require("vscode")

module.exports = {RustPanel: class {
        constructor(panel) {
            this.panel = panel
            this.disposables = []
        }

        dispose(){
            this.panel.dispose()
            while(this.disposables.length){
                const disposable = this.disposables.pop()
                if(disposable){
                    disposable.dispose()
                }
            }
        }
    },
    render : () => {
        if(this.currentPanel){
            this.currentPanel.panel.reveal(vscode.ViewColumn.One)
        }else{
            const panel = vscode.window.createWebviewPanel("rustpanel", "Rust - Library", vscode.ViewColumn.One, {
                
            })
            const pp = new this.RustPanel(panel)
            pp.panel.onDidDispose(() => {
                this.currentPanel = undefined
                pp.dispose()
            }, null, pp.disposables)
            this.currentPanel = pp
        }
    },
    currentPanel: null,
    webView: (json) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${json.name} - Rust</title>
            </head>
            <body>
        `
    }
}
