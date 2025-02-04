{
  let o = Object;
  o.freeze = a => a;
  o.isFrozen = () => 0;

  let setter = { set: () => 0 };
  o.defineProperties(HTMLImageElement.prototype, {
    onerror: setter,
    onload: setter,
    src: setter
  });
}