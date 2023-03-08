# GrapesJS Google Material Icons Plugin

[![npm](https://img.shields.io/npm/v/grapesjs-google-material-icons.svg)](https://www.npmjs.com/package/grapesjs-google-material-icons)


This is a plugin for [GrapesJS](https://grapesjs.com/), a free and open-source web builder that allows you to create web pages using a simple drag-and-drop interface. The GrapesJS Google Icons Plugin lets you easily select and replace icons in your web pages with Google icons.

## Getting Started

To use this plugin, you'll need to have GrapesJS installed in your project. Once you have GrapesJS set up, you can install the GrapesJS Google Material Icons Plugin by running the following command:

```bash
    npm install grapesjs-google-material-icons
    
    Or

    yarn add grapesjs-google-material-icons
```

After installing the plugin, you can add it to your GrapesJS instance like this:

```bash
    grapesjs.init({
      ...
      plugins: ['gjs-google-material-icons'],
      pluginsOpts: {
        'gjs-google-material-icons': {}
      },
      ...
    });
```

## How to Use

Once you have the plugin installed and added to your GrapesJS instance, you can start using it to select and replace icons in your web pages.

To select an icon, simply drag and drop a block onto the canvas, and then double click on icon. This will open a dialog box with a list of Google icons that you can choose from. Select the icon you want, and the plugin will replace the existing icon with the new one. Note that the plugin currently only works if you have added the Google Material Icons font to your project, but support for SVG icons is coming soon.

## Contributing
If you find a bug or have a feature request, please create an issue on the GitHub repository for this plugin. Pull requests are also welcome!

## License
This plugin is released under the MIT License.