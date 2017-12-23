const { BrowserWindow, app } = require("electron");
const updateWindowOptions = require("../../");

app.on("ready", () => {
  const browserWindow = new BrowserWindow({ movable: true });

  browserWindow.setMovable(false);
  // Is the same as
  updateWindowOptions(browserWindow, { movable: false });
  // But this is the same format as
  // new BrowserWindow(/* this */);
});
