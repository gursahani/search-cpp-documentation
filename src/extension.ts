/**
 * File: extension.ts
 * Created at: 03/30/19, 01:54:00
 * Created by: Kunal Gursahani
 * Last Modified: 03/31/19, 02:10:47 
 * ------
 * Description: 
 * CPP search documentation
 * 
 */


import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('docs.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'docs',
        'Search CPP Documentation',
        
        {viewColumn:vscode.ViewColumn.Beside,
        preserveFocus:false},
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      );
      vscode.window.setStatusBarMessage("Search cpp reference");
      panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CPP Documentation</title>
    <style>
        body, html
          {
            margin: 0; padding: 0; height: 100%; overflow: hidden; background-color: #fff;
          }
      </style>
</head>
<body>    
<iframe src="http://www.cppreference.com/" width="100%" height="100%" ></iframe>
</body>
</html>`;
}