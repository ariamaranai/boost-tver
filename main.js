{
  let o = Object;
  o.freeze = a => a;
  o.isFrozen = () => 0;
  o.defineProperties(HTMLImageElement.prototype, {
    onerror: {},
    onload: {},
    src: {}
  });
}
