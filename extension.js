// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');
const querystring = require('querystring');
const fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-yaml" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('vscode-yaml.validateYAML', async function () {
        // The code you place here will be executed every time your command is executed
        try {
            // Display a message box to the user
            vscode.window.showInformationMessage('Validating YAML file...');

            let file_name = vscode.window.activeTextEditor.document.fileName;

            if (!file_name) {
                vscode.window.showErrorMessage('You must provide a template path.');
                return;
            } else if (!file_name.endsWith('.yaml')) {
                vscode.window.showErrorMessage(`Not a YAML file: ${file_name}`);
                return;
            } else if (!fs.existsSync(file_name)) {
                vscode.window.showErrorMessage('File does not exist.');
                return;
            }

            let split = file_name.split('/');
            let partnerIdx = split.length - 2;
            let partner = split[partnerIdx];

            let editor = vscode.window.activeTextEditor;
            let yumli_file;

            if (editor) {
                let document = editor.document;
                yumli_file = document.getText();
            }

            const payload = {
                yumli_file,
                partner,
                file_name,
            };

            const response = await axios.post(
                'https://www.triggermail.io/api/yumli/validate_yumli',
                querystring.stringify(payload).replace(/%20/g, '+')
            );

            if (response.status === 200) {
                vscode.window.showInformationMessage('YAYYY Valid!');
                return response;
            }
        } catch (e) {
            console.log('caught an error:', e.response.data);
            vscode.window.showErrorMessage(e.response.data.text);
        }
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
