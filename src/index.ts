import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

import { mutiArgOptionMap, optionMap } from "./options";

export default function electronUpdateWindowOptions(
  browserWindow: BrowserWindow,
  options: BrowserWindowConstructorOptions
) {
  Object.entries(options).forEach(([inputKey, inputValue]) => {
    const func = optionMap[inputKey];
    if (func) {
      func(browserWindow, inputValue);
    }
  });

  // Multi argument options
  mutiArgOptionMap.forEach(specialOption => {
    const optionArgs = specialOption[0];

    const propertyKeys: string[] = [];
    const propertyValues: any[] = [];

    // Find all arguments
    optionArgs.forEach(propertyKey => {
      const propertyValue: any = (options as any)[propertyKey];
      if (propertyValue) {
        propertyKeys.push(propertyKey);
        propertyValues.push(propertyValue);
      }
    });
    // If no arguments are found then just return
    if (propertyKeys.length === 0) {
      return;
    }
    // If all arguments weren't found
    if (propertyKeys.length !== optionArgs.length) {
      throw new TypeError(
        `"${
          propertyKeys[0]
        }" is missing its pair(s). You must have ${optionArgs.map(
          value => `"${value}"`
        )}`
      );
    }
    specialOption[1](browserWindow, ...propertyValues);
  });
}
