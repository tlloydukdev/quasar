export interface CreateEventProps {
  bubbles?: Boolean;
  cancelable?: Boolean;
}

export interface EventOptions {
  passive?: Boolean;
  capture?: Boolean;
}

export interface ListenOpts {
  hasPassive: Boolean;
  passive?: EventOptions;
  notPassive?: EventOptions;
  passiveCapture?: EventOptions;
  notPassiveCapture?: EventOptions;
}

export namespace event {
  const listenOpts: ListenOpts;
  function leftClick(evt: any): Element;
  function middleClick(evt: any): boolean;
  function rightClick(evt: any): boolean;
  function position(evt: any): { top: Number; left: Number };
  function getEventPath(evt: any): any | any[];
  function getMouseWheelDistance(evt: any): {x: Number; y: Number };
  function stop(evt: any): void;
  function prevent(evt: any): void;
  function stopAndPrevent(evt: any): void;
  function preventDraggable(el: Element, status: Boolean): void;
  function create(name: String, opts?: CreateEventProps): any;
}
