{
  let o = Object;
  o.freeze = a => a;
  o.isFrozen = () => 0;
  o.defineProperties(self, {
    dataLayer: { value: 0 },
    trustedTypes: { get: () => {} }
  });

  let p = o.prototype;
  p.hasOwnProperty = function (a) { return a in this }
  p.hasOwnProperty.call = (a, b) => b in a;

  (p = Element.prototype).addEventListener = function (a, b, c) {
    switch (a) {
      case "MozTransitionEnd":
      case "animationcancel":
      case "animationend":
      case "animationiteration":
      case "animationstart":
      case "auxclick":
      case "contextmenu":
      case "compositionend":
      case "compositionstart":
      case "compositionupdate":
      case "copy":
      case "cut":
      case "dblclick":
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
      case "encrypted":
      case "error":
      case "focusin":
      case "focusout":
      case "gotpointercapture":
      case "invalid":
      case "languagechange":
      case "lostpointercapture":
/*
      case "mouseenter":
      case "mouseleave":
      case "mouseout":
      case "mouseover":
*/
      case "mozfullscreenchange":
      case "mozTransitionEnd":
      case "msTransitionEnd":
      case "paste":
      case "pointercancel":
      case "pointerdown":
      case "pointerenter":
      case "pointerleave":
      case "pointerver":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "stalled":
      case "touchcancel":
      case "touchend":
      case "touchleave":
      case "touchmove":
      case "touchstart":
      case "visibilitychange":
      case "volumechange":
      case "webkitTransitionEnd":
      case "webkitbeginfullscreen":
      case "webkitendfullscreen":
      case "webkitpresentationmodechanged":
        return 0;
      default:
        return EventTarget.prototype.addEventListener.call(this, a, b, c);
    }
  }
  o.defineProperties(HTMLScriptElement.prototype, {
    src: {
      set (a) {
        a != "/doubleserve.js?adname=x" &&
        a != "https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js" &&
        a.slice(12, 18) != "google" &&
          p.setAttribute.call(this, "src", a)
      }
    },
    onerror: { set: () => 0 },
    timeout: { set: () => 0 }
  });

  let none = o.seal(0);
  Image = function () { return none }

  let d = document;
  d.lastChild.className = "dark";
  d.addEventListener("DOMContentLoaded", () =>
    d.head.appendChild(d.createElement('script')).src = "//cdn.ic.tver.jp/js/integralCoreCommon.js"
  );
}