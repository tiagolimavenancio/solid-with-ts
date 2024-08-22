export interface IWindow {
  open(): boolean;
  close(): boolean;
}

export class CarWindow implements IWindow {
  open() {
    return true;
  }

  close() {
    return false;
  }
}

export class WindowSwitch {
  private isOn = false;

  constructor(private window: IWindow) {}

  onPress() {
    if (this.isOn) {
      this.window.close();
      this.isOn = false;
    } else {
      this.window.open();
      this.isOn = true;
    }
  }
}
