# vscode-yaml-validator README

This is a port of the YAML validator from the triggermail_sublimetext_plugin. It functions similarly, run the 'Triggermail YAML Validate' command from the command palette to validate the current file you have open.

This extension is not on VS Code Marketplace and must be packaged and installed locally on your machine. Here are the steps:

1. make sure you have VS Code updated
2. git clone to your machine
3. run `npm i && npm i -g vsce` in command line of the directory (vsce is the vs code extension packaging cli tool)
4. run `vsce package` in command line
5. copy the resulting .vsix file to `~/.vscode/extensions` or just run `code --install-extension [vsixfile]`. if neither work you can manually install an extension by ```Click the ... at the top-right corner of the Extensions pane and select "Install from VSIX..." on the menu that appears.```
6. to run the validator, open the command palette (command + shift + p) on the current .yaml file you have open and run the `Triggermail YAML Validate` command.
