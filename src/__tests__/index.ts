import electronUpdateWindowOptions from "../";

it("changes browser window", () => {
  const mock = {
    setAlwaysOnTop: jest.fn()
  };
  electronUpdateWindowOptions(mock as any, { alwaysOnTop: true });
  expect(mock.setAlwaysOnTop.mock.calls[0]).toEqual([true]);
});

describe("multiple argument options", () => {
  it("changes browser window", () => {
    const mock = {
      setPosition: jest.fn()
    };
    electronUpdateWindowOptions(mock as any, { x: 4, y: 2 });
    expect(mock.setPosition.mock.calls[0]).toEqual([4, 2]);
  });

  it("throws when not paired", () => {
    const filler = {
      setPosition: () => undefined
    };
    expect(() => {
      electronUpdateWindowOptions(filler as any, { y: 4 });
    }).toThrowErrorMatchingSnapshot();
  });
});
