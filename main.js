{
  let o = Object;
  o.freeze = a => a;
  o.isFrozen = () => 0;
  o.defineProperty(self, "trustedTypes", {
    get: () => {}
  });
  o.prototype.hasOwnProperty.call = (a, b) => b in a;
  let none = o.seal(0);
  Image = function () {
    return none;
  }
  o.defineProperty(HTMLScriptElement.prototype, "src", {
    set (a) {
      a != "/doubleserve.js?adname=x" &&
      a != "https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js" &&
      a.slice(12, 18) != "google" &&
        Element.prototype.setAttribute.call(this, "src", a)
    }
  });
}