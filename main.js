{
  let o = Object;
  o.freeze = a => a;
  o.isFrozen = () => 0;
  o.defineProperties(self, {
    dataLayer: { value: 0 },
    trustedTypes: { get: () => {} }
  });
  o.prototype.hasOwnProperty.call = (a, b) => b in a;
  o.defineProperties(HTMLScriptElement.prototype, {
    src: {
      set (a) {
        a != "/doubleserve.js?adname=x" &&
        a != "https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js" &&
        a.slice(12, 18) != "google" &&
          Element.prototype.setAttribute.call(this, "src", a)
      }
    },
    onerror: { set: () => 0 },
    timeout: { set: () => 0 }
  });

  let none = o.seal(0);
  Image = function () { return none }

  let d = document;
  d.addEventListener("DOMContentLoaded", () => {
    d.head.appendChild(d.createElement('script')).src = "//cdn.ic.tver.jp/js/integralCoreCommon.js"
  });
}