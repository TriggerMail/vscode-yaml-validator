# vscode-yaml-validator README

This is a port of the YAML validator from the triggermail_sublimetext_plugin. It functions similarly, run the 'Triggermail YAML Validate' command from the command palette to validate the current file you have open.

This extension is not on VSCode Marketplace and must be packaged and installed locally on your machine. Here are the steps:

1.  git clone to your machine
2.  `npm i`
3.  `vsce package`
4.  copy the resulting .vsix file to `~/.vscode/extensions` or just run `code --install-extension [vsixfile]`
