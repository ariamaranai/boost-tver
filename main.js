{
  let o = Object;
  o.freeze = a => a;
  o.isFrozen = () => 0;

  o.defineProperty(self, "trustedTypes", {
    get: () => {}
  });
  
  let setter = { set: () => 0 };
  o.defineProperties(HTMLImageElement.prototype, {
    onerror: setter,
    onload: setter,
    src: setter
  });
  o.defineProperties(HTMLScriptElement.prototype, {
    onerror: setter,
    src: {
      set (a) {
        a != "/doubleserve.js?adname=x" &&
        a != "https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js" &&
        a.slice(12, 18) != "google" &&
          Element.prototype.setAttribute.call(this, "src", a)
      }
    }
  })
}