# electron-update-window-options

This library allows you to update the electron window options after it's already been created using the constructor options format.

```js
updateWindowOptions(browserWindow, { movable: false });
```

is the same as

```js
new BrowserWindow({ movable: false });
```

But you can use this function after it's created

# Examples/Usage

```js
const { BrowserWindow, app } = require("electron");
const updateWindowOptions = require("electron-update-window-options");

app.on("ready", () => {
  const browserWindow = new BrowserWindow({ movable: true });

  browserWindow.setMovable(false);
  // Is the same as
  updateWindowOptions(browserWindow, { movable: false });
  // But this is the same format as
  // new BrowserWindow(/* this */);
});
```
