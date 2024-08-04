/*! For license information please see main.876a3dec.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          i = n(853);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          p = {};
        function m(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(h, e) &&
                      (f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          I = Symbol.for("react.context"),
          x = Symbol.for("react.forward_ref"),
          R = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var j,
          U = Object.assign;
        function M(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || "";
            }
          return "\n" + j + e;
        }
        var F = !1;
        function z(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  s = a.length - 1;
                1 <= o && 0 <= s && i[o] !== a[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (i[o] !== a[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || i[o] !== a[s])) {
                        var l = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case _:
              return "StrictMode";
            case R:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case I:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case x:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function $(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return U({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Y(e, t) {
          X(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return U({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ae(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var he = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (he.hasOwnProperty(e) && he[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(he).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]);
          });
        });
        var ve = U(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ee = null,
          _e = null;
        function Ce(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = Si(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          Ee ? (_e ? _e.push(e) : (_e = [e])) : (Ee = e);
        }
        function Ie() {
          if (Ee) {
            var e = Ee,
              t = _e;
            if (((_e = Ee = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function xe(e, t) {
          return e(t);
        }
        function Re() {}
        var Pe = !1;
        function Oe(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return xe(e, t, n);
          } finally {
            (Pe = !1), (null !== Ee || null !== _e) && (Re(), Ie());
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Si(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ce) {
            Ae = !1;
          }
        function De(e, t, n, r, i, a, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Ue = null,
          Me = !1,
          Fe = null,
          ze = {
            onError: function (e) {
              (je = !0), (Ue = e);
            },
          };
        function Be(e, t, n, r, i, a, o, s, l) {
          (je = !1), (Ue = null), De.apply(ze, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Ve(e) !== e) throw Error(a(188));
        }
        function qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return We(i), e;
                    if (o === r) return We(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var s = !1, l = i.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = i), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var $e = i.unstable_scheduleCallback,
          Ge = i.unstable_cancelCallback,
          Je = i.unstable_shouldYield,
          Qe = i.unstable_requestPaint,
          Xe = i.unstable_now,
          Ye = i.unstable_getCurrentPriorityLevel,
          Ze = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~i;
            0 !== s ? (r = dt(s)) : 0 !== (a &= o) && (r = dt(a));
          } else 0 !== (o = n & ~i) ? (r = dt(o)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (a = t & -t) || (16 === i && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function ht(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          kt,
          Et,
          _t,
          Ct,
          Tt = !1,
          It = [],
          xt = null,
          Rt = null,
          Pt = null,
          Ot = new Map(),
          Nt = new Map(),
          At = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              xt = null;
              break;
            case "dragenter":
            case "dragleave":
              Rt = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function jt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function Ut(e) {
          var t = yi(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function zt() {
          (Tt = !1),
            null !== xt && Mt(xt) && (xt = null),
            null !== Rt && Mt(Rt) && (Rt = null),
            null !== Pt && Mt(Pt) && (Pt = null),
            Ot.forEach(Ft),
            Nt.forEach(Ft);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, zt)));
        }
        function Vt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < It.length) {
            Bt(It[0], e);
            for (var n = 1; n < It.length; n++) {
              var r = It[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== xt && Bt(xt, e),
              null !== Rt && Bt(Rt, e),
              null !== Pt && Bt(Pt, e),
              Ot.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Ut(n), null === n.blockedOn && At.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Wt = !0;
        function qt(e, t, n, r) {
          var i = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), $t(e, t, n, r);
          } finally {
            (bt = i), (Ht.transition = a);
          }
        }
        function Kt(e, t, n, r) {
          var i = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), $t(e, t, n, r);
          } finally {
            (bt = i), (Ht.transition = a);
          }
        }
        function $t(e, t, n, r) {
          if (Wt) {
            var i = Jt(e, t, n, r);
            if (null === i) Wr(e, t, r, Gt, n), Dt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (xt = jt(xt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Rt = jt(Rt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Pt = jt(Pt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return Ot.set(a, jt(Ot.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      Nt.set(a, jt(Nt.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Dt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && St(a),
                  null === (a = Jt(e, t, n, r)) && Wr(e, t, r, Gt, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Jt(e, t, n, r) {
          if (((Gt = null), null !== (e = yi((e = Se(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ye()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Yt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Yt,
            r = n.length,
            i = "value" in Xt ? Xt.value : Xt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (Zt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            U(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = U({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          hn = U({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          pn = an(hn),
          mn = an(U({}, hn, { dataTransfer: 0 })),
          gn = an(U({}, dn, { relatedTarget: 0 })),
          vn = an(
            U({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = U({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(U({}, un, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return _n;
        }
        var Tn = U({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          In = an(Tn),
          xn = an(
            U({}, hn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Rn = an(
            U({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Pn = an(
            U({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = U({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = an(On),
          An = [9, 13, 27, 32],
          Ln = c && "CompositionEvent" in window,
          Dn = null;
        c && "documentMode" in document && (Dn = document.documentMode);
        var jn = c && "TextEvent" in window && !Dn,
          Un = c && (!Ln || (Dn && 8 < Dn && 11 >= Dn)),
          Mn = String.fromCharCode(32),
          Fn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function qn(e, t, n, r) {
          Te(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          $n = null;
        function Gn(e) {
          Mr(e, 0);
        }
        function Jn(e) {
          if ($(wi(e))) return e;
        }
        function Qn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Yn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Yn = Zn;
          } else Yn = !1;
          Xn = Yn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), ($n = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn($n)) {
            var t = [];
            qn(t, $n, e, Se(e)), Oe(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), ($n = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn($n);
        }
        function ar(e, t) {
          if ("click" === e) return Jn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!d.call(t, i) || !sr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !e.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== G(r) ||
            ("selectionStart" in (r = gr) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = Kr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          Er = {},
          _r = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Er[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Tr = Cr("animationend"),
          Ir = Cr("animationiteration"),
          xr = Cr("animationstart"),
          Rr = Cr("transitionend"),
          Pr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Nr(e, t) {
          Pr.set(e, t), l(t, [e]);
        }
        for (var Ar = 0; Ar < Or.length; Ar++) {
          var Lr = Or[Ar];
          Nr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Nr(Tr, "onAnimationEnd"),
          Nr(Ir, "onAnimationIteration"),
          Nr(xr, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(Rr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          jr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Dr)
          );
        function Ur(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, s, l, u) {
              if ((Be.apply(this, arguments), je)) {
                if (!je) throw Error(a(198));
                var c = Ue;
                (je = !1), (Ue = null), Me || ((Me = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && i.isPropagationStopped()))
                    break e;
                  Ur(i, s, u), (a = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && i.isPropagationStopped())
                  )
                    break e;
                  Ur(i, s, u), (a = l);
                }
            }
          }
          if (Me) throw ((e = Fe), (Me = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[mi];
          void 0 === n && (n = t[mi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (jr.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), zr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Qt(t)) {
            case 1:
              var i = qt;
              break;
            case 4:
              i = Kt;
              break;
            default:
              i = $t;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = yi(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = a = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = a,
              i = Se(n),
              o = [];
            e: {
              var s = Pr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = In;
                    break;
                  case "focusin":
                    (u = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Rn;
                    break;
                  case Tr:
                  case Ir:
                  case xr:
                    l = vn;
                    break;
                  case Rr:
                    l = Pn;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = xn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var m = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== m &&
                      ((h = m),
                      null !== f &&
                        null != (m = Ne(p, f)) &&
                        c.push(qr(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, i)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!yi(u) && !u[pi])) &&
                  (l || s) &&
                  ((s =
                    i.window === i
                      ? i
                      : (s = i.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? yi(u)
                          : null) &&
                        (u !== (d = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = pn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = xn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : wi(l)),
                  (h = null == u ? s : wi(u)),
                  ((s = new c(m, p + "leave", l, n, i)).target = d),
                  (s.relatedTarget = h),
                  (m = null),
                  yi(i) === r &&
                    (((c = new c(f, p + "enter", u, n, i)).target = h),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, p = 0, h = c = l; h; h = $r(h)) p++;
                    for (h = 0, m = f; m; m = $r(m)) h++;
                    for (; 0 < p - h; ) (c = $r(c)), p--;
                    for (; 0 < h - p; ) (f = $r(f)), h--;
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = $r(c)), (f = $r(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Gr(o, s, l, c, !1),
                  null !== u && null !== d && Gr(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? wi(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Qn;
              else if (Wn(s))
                if (Xn) g = or;
                else {
                  g = ir;
                  var v = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? qn(o, g, n, i)
                  : (v && v(e, s, r),
                    "focusout" === e &&
                      (v = s._wrapperState) &&
                      v.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (v = r ? wi(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, i);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, i);
              }
              var y;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? zn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Un &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (y = en())
                    : ((Yt = "value" in (Xt = i) ? Xt.value : Xt.textContent),
                      (Vn = !0))),
                0 < (v = Kr(r, b)).length &&
                  ((b = new wn(b, e, null, n, i)),
                  o.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = jn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!Ln && zn(e, t))
                          ? ((e = en()), (Zt = Yt = Xt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Un && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((i = new wn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Mr(o, t);
          });
        }
        function qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Ne(e, n)) && r.unshift(qr(e, a, i)),
              null != (a = Ne(e, t)) && r.push(qr(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function $r(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              i
                ? null != (l = Ne(n, a)) && o.unshift(qr(n, l, s))
                : i || (null != (l = Ne(n, a)) && o.push(qr(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Jr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace(Qr, "");
        }
        function Yr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ai
              ? function (e) {
                  return ai.resolve(null).then(e).catch(si);
                }
              : ri;
        function si(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function li(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Vt(t);
        }
        function ui(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var di = Math.random().toString(36).slice(2),
          fi = "__reactFiber$" + di,
          hi = "__reactProps$" + di,
          pi = "__reactContainer$" + di,
          mi = "__reactEvents$" + di,
          gi = "__reactListeners$" + di,
          vi = "__reactHandles$" + di;
        function yi(e) {
          var t = e[fi];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pi] || n[fi])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[fi])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[fi] || e[pi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function Si(e) {
          return e[hi] || null;
        }
        var ki = [],
          Ei = -1;
        function _i(e) {
          return { current: e };
        }
        function Ci(e) {
          0 > Ei || ((e.current = ki[Ei]), (ki[Ei] = null), Ei--);
        }
        function Ti(e, t) {
          Ei++, (ki[Ei] = e.current), (e.current = t);
        }
        var Ii = {},
          xi = _i(Ii),
          Ri = _i(!1),
          Pi = Ii;
        function Oi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ii;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Ni(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ai() {
          Ci(Ri), Ci(xi);
        }
        function Li(e, t, n) {
          if (xi.current !== Ii) throw Error(a(168));
          Ti(xi, t), Ti(Ri, n);
        }
        function Di(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(a(108, H(e) || "Unknown", i));
          return U({}, n, r);
        }
        function ji(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ii),
            (Pi = xi.current),
            Ti(xi, e),
            Ti(Ri, Ri.current),
            !0
          );
        }
        function Ui(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Di(e, t, Pi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ci(Ri),
              Ci(xi),
              Ti(xi, e))
            : Ci(Ri),
            Ti(Ri, n);
        }
        var Mi = null,
          Fi = !1,
          zi = !1;
        function Bi(e) {
          null === Mi ? (Mi = [e]) : Mi.push(e);
        }
        function Vi() {
          if (!zi && null !== Mi) {
            zi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Mi;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Mi = null), (Fi = !1);
            } catch (i) {
              throw (null !== Mi && (Mi = Mi.slice(e + 1)), $e(Ze, Vi), i);
            } finally {
              (bt = t), (zi = !1);
            }
          }
          return null;
        }
        var Hi = [],
          Wi = 0,
          qi = null,
          Ki = 0,
          $i = [],
          Gi = 0,
          Ji = null,
          Qi = 1,
          Xi = "";
        function Yi(e, t) {
          (Hi[Wi++] = Ki), (Hi[Wi++] = qi), (qi = e), (Ki = t);
        }
        function Zi(e, t, n) {
          ($i[Gi++] = Qi), ($i[Gi++] = Xi), ($i[Gi++] = Ji), (Ji = e);
          var r = Qi;
          e = Xi;
          var i = 32 - ot(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - ot(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Qi = (1 << (32 - ot(t) + i)) | (n << i) | r),
              (Xi = a + e);
          } else (Qi = (1 << a) | (n << i) | r), (Xi = e);
        }
        function ea(e) {
          null !== e.return && (Yi(e, 1), Zi(e, 1, 0));
        }
        function ta(e) {
          for (; e === qi; )
            (qi = Hi[--Wi]), (Hi[Wi] = null), (Ki = Hi[--Wi]), (Hi[Wi] = null);
          for (; e === Ji; )
            (Ji = $i[--Gi]),
              ($i[Gi] = null),
              (Xi = $i[--Gi]),
              ($i[Gi] = null),
              (Qi = $i[--Gi]),
              ($i[Gi] = null);
        }
        var na = null,
          ra = null,
          ia = !1,
          aa = null;
        function oa(e, t) {
          var n = Ou(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (na = e), (ra = ui(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ji ? { id: Qi, overflow: Xi } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ou(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (na = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function la(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ua(e) {
          if (ia) {
            var t = ra;
            if (t) {
              var n = t;
              if (!sa(e, t)) {
                if (la(e)) throw Error(a(418));
                t = ui(n.nextSibling);
                var r = na;
                t && sa(e, t)
                  ? oa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e));
              }
            } else {
              if (la(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          na = e;
        }
        function da(e) {
          if (e !== na) return !1;
          if (!ia) return ca(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ra))
          ) {
            if (la(e)) throw (fa(), Error(a(418)));
            for (; t; ) oa(e, t), (t = ui(t.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ra = ui(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? ui(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fa() {
          for (var e = ra; e; ) e = ui(e.nextSibling);
        }
        function ha() {
          (ra = na = null), (ia = !1);
        }
        function pa(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var ma = w.ReactCurrentBatchConfig;
        function ga(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function va(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ya(e) {
          return (0, e._init)(e._payload);
        }
        function ba(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Au(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === E
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === N &&
                    ya(a) === t.type))
              ? (((r = i(t, n.props)).ref = ga(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = ga(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Du(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Uu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = ga(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Mu(t, e.mode, n)).return = e), t;
                case N:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Du(t, e.mode, n, null)).return = e), t;
              va(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === i ? u(e, t, n, r) : null;
                case k:
                  return n.key === i ? c(e, t, n, r) : null;
                case N:
                  return h(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== i ? null : d(e, t, n, r, null);
              va(e, n);
            }
            return null;
          }
          function p(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case N:
                  return p(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || D(r))
                return d(t, (e = e.get(n) || null), r, i, null);
              va(t, r);
            }
            return null;
          }
          function m(i, a, s, l) {
            for (
              var u = null, c = null, d = a, m = (a = 0), g = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = h(i, d, s[m], l);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(i, d),
                (a = o(v, a, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === s.length) return n(i, d), ia && Yi(i, m), u;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(i, s[m], l)) &&
                  ((a = o(d, a, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ia && Yi(i, m), u;
            }
            for (d = r(i, d); m < s.length; m++)
              null !== (g = p(d, i, m, s[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (a = o(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Yi(i, m),
              u
            );
          }
          function g(i, s, l, u) {
            var c = D(l);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var d = (c = null), m = s, g = (s = 0), v = null, y = l.next();
              null !== m && !y.done;
              g++, y = l.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = h(i, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(i, m),
                (s = o(b, s, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(i, m), ia && Yi(i, g), c;
            if (null === m) {
              for (; !y.done; g++, y = l.next())
                null !== (y = f(i, y.value, u)) &&
                  ((s = o(y, s, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return ia && Yi(i, g), c;
            }
            for (m = r(i, m); !y.done; g++, y = l.next())
              null !== (y = p(m, i, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (s = o(y, s, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Yi(i, g),
              c
            );
          }
          return function e(r, a, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === E &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case S:
                  e: {
                    for (var u = o.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === E) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === N &&
                            ya(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = ga(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === E
                      ? (((a = Du(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = a))
                      : (((l = Lu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l
                        )).ref = ga(r, a, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case k:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Mu(o, r.mode, l)).return = r), (r = a);
                  }
                  return s(r);
                case N:
                  return e(r, a, (c = o._init)(o._payload), l);
              }
              if (te(o)) return m(r, a, o, l);
              if (D(o)) return g(r, a, o, l);
              va(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Uu(o, r.mode, l)).return = r), (r = a)),
                s(r))
              : n(r, a);
          };
        }
        var wa = ba(!0),
          Sa = ba(!1),
          ka = _i(null),
          Ea = null,
          _a = null,
          Ca = null;
        function Ta() {
          Ca = _a = Ea = null;
        }
        function Ia(e) {
          var t = ka.current;
          Ci(ka), (e._currentValue = t);
        }
        function xa(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ra(e, t) {
          (Ea = e),
            (Ca = _a = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null));
        }
        function Pa(e) {
          var t = e._currentValue;
          if (Ca !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === _a)
            ) {
              if (null === Ea) throw Error(a(308));
              (_a = e), (Ea.dependencies = { lanes: 0, firstContext: e });
            } else _a = _a.next = e;
          return t;
        }
        var Oa = null;
        function Na(e) {
          null === Oa ? (Oa = [e]) : Oa.push(e);
        }
        function Aa(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Na(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            La(e, r)
          );
        }
        function La(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Da = !1;
        function ja(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ua(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ma(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Fa(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & xl))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              La(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Na(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            La(e, n)
          );
        }
        function za(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ba(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Va(e, t, n, r) {
          var i = e.updateQueue;
          Da = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (a = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var d = i.baseState;
            for (o = 0, c = u = l = null, s = a; ; ) {
              var f = s.lane,
                h = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = s;
                  switch (((f = t), (h = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(h, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = m.payload)
                              ? p.call(h, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = U({}, d, f);
                      break e;
                    case 2:
                      Da = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = i.effects) ? (i.effects = [s]) : f.push(s));
              } else
                (h = {
                  eventTime: h,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
                  (o |= f);
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (i.lastBaseUpdate = f),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (i.baseState = l),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === a && (i.shared.lanes = 0);
            (jl |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Ha(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var Wa = {},
          qa = _i(Wa),
          Ka = _i(Wa),
          $a = _i(Wa);
        function Ga(e) {
          if (e === Wa) throw Error(a(174));
          return e;
        }
        function Ja(e, t) {
          switch ((Ti($a, t), Ti(Ka, e), Ti(qa, Wa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ci(qa), Ti(qa, t);
        }
        function Qa() {
          Ci(qa), Ci(Ka), Ci($a);
        }
        function Xa(e) {
          Ga($a.current);
          var t = Ga(qa.current),
            n = le(t, e.type);
          t !== n && (Ti(Ka, e), Ti(qa, n));
        }
        function Ya(e) {
          Ka.current === e && (Ci(qa), Ci(Ka));
        }
        var Za = _i(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++)
            to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = w.ReactCurrentDispatcher,
          io = w.ReactCurrentBatchConfig,
          ao = 0,
          oo = null,
          so = null,
          lo = null,
          uo = !1,
          co = !1,
          fo = 0,
          ho = 0;
        function po() {
          throw Error(a(321));
        }
        function mo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function go(e, t, n, r, i, o) {
          if (
            ((ao = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Zo : es),
            (e = n(r, i)),
            co)
          ) {
            o = 0;
            do {
              if (((co = !1), (fo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (lo = so = null),
                (t.updateQueue = null),
                (ro.current = ts),
                (e = n(r, i));
            } while (co);
          }
          if (
            ((ro.current = Yo),
            (t = null !== so && null !== so.next),
            (ao = 0),
            (lo = so = oo = null),
            (uo = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function vo() {
          var e = 0 !== fo;
          return (fo = 0), e;
        }
        function yo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e), lo
          );
        }
        function bo() {
          if (null === so) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = so.next;
          var t = null === lo ? oo.memoizedState : lo.next;
          if (null !== t) (lo = t), (so = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (so = e).memoizedState,
              baseState: so.baseState,
              baseQueue: so.baseQueue,
              queue: so.queue,
              next: null,
            }),
              null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e);
          }
          return lo;
        }
        function wo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function So(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = so,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var s = i.next;
              (i.next = o.next), (o.next = s);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((ao & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (s = r)) : (u = u.next = f),
                  (oo.lanes |= d),
                  (jl |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (bs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (o = i.lane), (oo.lanes |= o), (jl |= o), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ko(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = (i = i.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== i);
            sr(o, t.memoizedState) || (bs = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Eo() {}
        function _o(e, t) {
          var n = oo,
            r = bo(),
            i = t(),
            o = !sr(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (bs = !0)),
            (r = r.queue),
            jo(Io.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== lo && 1 & lo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Oo(9, To.bind(null, n, r, i, t), void 0, null),
              null === Rl)
            )
              throw Error(a(349));
            0 !== (30 & ao) || Co(n, t, i);
          }
          return i;
        }
        function Co(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function To(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), xo(t) && Ro(e);
        }
        function Io(e, t, n) {
          return n(function () {
            xo(t) && Ro(e);
          });
        }
        function xo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ro(e) {
          var t = La(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Po(e) {
          var t = yo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Go.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function Oo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function No() {
          return bo().memoizedState;
        }
        function Ao(e, t, n, r) {
          var i = yo();
          (oo.flags |= e),
            (i.memoizedState = Oo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Lo(e, t, n, r) {
          var i = bo();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== so) {
            var o = so.memoizedState;
            if (((a = o.destroy), null !== r && mo(r, o.deps)))
              return void (i.memoizedState = Oo(t, n, a, r));
          }
          (oo.flags |= e), (i.memoizedState = Oo(1 | t, n, a, r));
        }
        function Do(e, t) {
          return Ao(8390656, 8, e, t);
        }
        function jo(e, t) {
          return Lo(2048, 8, e, t);
        }
        function Uo(e, t) {
          return Lo(4, 2, e, t);
        }
        function Mo(e, t) {
          return Lo(4, 4, e, t);
        }
        function Fo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function zo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Lo(4, 4, Fo.bind(null, t, e), n)
          );
        }
        function Bo() {}
        function Vo(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ho(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wo(e, t, n) {
          return 0 === (21 & ao)
            ? (e.baseState && ((e.baseState = !1), (bs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (oo.lanes |= n), (jl |= n), (e.baseState = !0)),
              t);
        }
        function qo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = io.transition;
          io.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (io.transition = r);
          }
        }
        function Ko() {
          return bo().memoizedState;
        }
        function $o(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Jo(e))
          )
            Qo(t, n);
          else if (null !== (n = Aa(e, t, n, r))) {
            nu(n, e, r, eu()), Xo(n, t, r);
          }
        }
        function Go(e, t, n) {
          var r = tu(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Jo(e)) Qo(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), sr(s, o))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((i.next = i), Na(t))
                      : ((i.next = l.next), (l.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (u) {}
            null !== (n = Aa(e, t, i, r)) &&
              (nu(n, e, r, (i = eu())), Xo(n, t, r));
          }
        }
        function Jo(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Qo(e, t) {
          co = uo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xo(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Yo = {
            readContext: Pa,
            useCallback: po,
            useContext: po,
            useEffect: po,
            useImperativeHandle: po,
            useInsertionEffect: po,
            useLayoutEffect: po,
            useMemo: po,
            useReducer: po,
            useRef: po,
            useState: po,
            useDebugValue: po,
            useDeferredValue: po,
            useTransition: po,
            useMutableSource: po,
            useSyncExternalStore: po,
            useId: po,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: Pa,
            useCallback: function (e, t) {
              return (yo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Pa,
            useEffect: Do,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ao(4194308, 4, Fo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ao(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ao(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = $o.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yo().memoizedState = e);
            },
            useState: Po,
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              return (yo().memoizedState = e);
            },
            useTransition: function () {
              var e = Po(!1),
                t = e[0];
              return (
                (e = qo.bind(null, e[1])), (yo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                i = yo();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Rl)) throw Error(a(349));
                0 !== (30 & ao) || Co(r, t, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (i.queue = o),
                Do(Io.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Oo(9, To.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yo(),
                t = Rl.identifierPrefix;
              if (ia) {
                var n = Xi;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Qi & ~(1 << (32 - ot(Qi) - 1))).toString(32) + n)),
                  0 < (n = fo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ho++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Pa,
            useCallback: Vo,
            useContext: Pa,
            useEffect: jo,
            useImperativeHandle: zo,
            useInsertionEffect: Uo,
            useLayoutEffect: Mo,
            useMemo: Ho,
            useReducer: So,
            useRef: No,
            useState: function () {
              return So(wo);
            },
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              return Wo(bo(), so.memoizedState, e);
            },
            useTransition: function () {
              return [So(wo)[0], bo().memoizedState];
            },
            useMutableSource: Eo,
            useSyncExternalStore: _o,
            useId: Ko,
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Pa,
            useCallback: Vo,
            useContext: Pa,
            useEffect: jo,
            useImperativeHandle: zo,
            useInsertionEffect: Uo,
            useLayoutEffect: Mo,
            useMemo: Ho,
            useReducer: ko,
            useRef: No,
            useState: function () {
              return ko(wo);
            },
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              var t = bo();
              return null === so
                ? (t.memoizedState = e)
                : Wo(t, so.memoizedState, e);
            },
            useTransition: function () {
              return [ko(wo)[0], bo().memoizedState];
            },
            useMutableSource: Eo,
            useSyncExternalStore: _o,
            useId: Ko,
            unstable_isNewReconciler: !1,
          };
        function ns(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = U({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rs(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : U({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var is = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              i = tu(e),
              a = Ma(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Fa(e, a, i)) && (nu(t, e, i, r), za(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              i = tu(e),
              a = Ma(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Fa(e, a, i)) && (nu(t, e, i, r), za(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              i = Ma(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = Fa(e, i, r)) && (nu(t, e, r, n), za(t, e, r));
          },
        };
        function as(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(i, a);
        }
        function os(e, t, n) {
          var r = !1,
            i = Ii,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Pa(a))
              : ((i = Ni(t) ? Pi : xi.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oi(e, i)
                  : Ii)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = is),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ss(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && is.enqueueReplaceState(t, t.state, null);
        }
        function ls(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ja(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = Pa(a))
            : ((a = Ni(t) ? Pi : xi.current), (i.context = Oi(e, a))),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (rs(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && is.enqueueReplaceState(i, i.state, null),
              Va(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function us(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function cs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fs = "function" === typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          ((n = Ma(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wl || ((Wl = !0), (ql = r)), ds(0, t);
            }),
            n
          );
        }
        function ps(e, t, n) {
          (n = Ma(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                ds(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                ds(0, t),
                  "function" !== typeof r &&
                    (null === Kl ? (Kl = new Set([this])) : Kl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function gs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vs(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ma(-1, 1)).tag = 2), Fa(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var ys = w.ReactCurrentOwner,
          bs = !1;
        function ws(e, t, n, r) {
          t.child = null === e ? Sa(t, null, n, r) : wa(t, e.child, n, r);
        }
        function Ss(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            Ra(t, i),
            (r = go(e, t, n, r, a, i)),
            (n = vo()),
            null === e || bs
              ? (ia && n && ea(t), (t.flags |= 1), ws(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Ws(e, t, i))
          );
        }
        function ks(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Nu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Es(e, t, a, r, i));
          }
          if (((a = e.child), 0 === (e.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return Ws(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Au(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Es(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (lr(a, r) && e.ref === t.ref) {
              if (((bs = !1), (t.pendingProps = r = a), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Ws(e, t, i);
              0 !== (131072 & e.flags) && (bs = !0);
            }
          }
          return Ts(e, t, n, r, i);
        }
        function _s(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ti(Al, Nl),
                (Nl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ti(Al, Nl),
                  (Nl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Ti(Al, Nl),
                (Nl |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ti(Al, Nl),
              (Nl |= r);
          return ws(e, t, i, n), t.child;
        }
        function Cs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ts(e, t, n, r, i) {
          var a = Ni(n) ? Pi : xi.current;
          return (
            (a = Oi(t, a)),
            Ra(t, i),
            (n = go(e, t, n, r, a, i)),
            (r = vo()),
            null === e || bs
              ? (ia && r && ea(t), (t.flags |= 1), ws(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Ws(e, t, i))
          );
        }
        function Is(e, t, n, r, i) {
          if (Ni(n)) {
            var a = !0;
            ji(t);
          } else a = !1;
          if ((Ra(t, i), null === t.stateNode))
            Hs(e, t), os(t, n, r), ls(t, n, r, i), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Pa(u))
              : (u = Oi(t, (u = Ni(n) ? Pi : xi.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && ss(t, o, r, u)),
              (Da = !1);
            var f = t.memoizedState;
            (o.state = f),
              Va(t, r, o, i),
              (l = t.memoizedState),
              s !== r || f !== l || Ri.current || Da
                ? ("function" === typeof c &&
                    (rs(t, n, c, r), (l = t.memoizedState)),
                  (s = Da || as(t, n, s, r, f, l, u))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ua(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ns(t.type, s)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Pa(l))
                : (l = Oi(t, (l = Ni(n) ? Pi : xi.current)));
            var h = n.getDerivedStateFromProps;
            (c =
              "function" === typeof h ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== d || f !== l) && ss(t, o, r, l)),
              (Da = !1),
              (f = t.memoizedState),
              (o.state = f),
              Va(t, r, o, i);
            var p = t.memoizedState;
            s !== d || f !== p || Ri.current || Da
              ? ("function" === typeof h &&
                  (rs(t, n, h, r), (p = t.memoizedState)),
                (u = Da || as(t, n, u, r, f, p, l) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = l),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return xs(e, t, n, r, a, i);
        }
        function xs(e, t, n, r, i, a) {
          Cs(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return i && Ui(t, n, !1), Ws(e, t, a);
          (r = t.stateNode), (ys.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = wa(t, e.child, null, a)),
                (t.child = wa(t, null, s, a)))
              : ws(e, t, s, a),
            (t.memoizedState = r.state),
            i && Ui(t, n, !0),
            t.child
          );
        }
        function Rs(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Li(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Li(0, t.context, !1),
            Ja(e, t.containerInfo);
        }
        function Ps(e, t, n, r, i) {
          return ha(), pa(i), (t.flags |= 256), ws(e, t, n, r), t.child;
        }
        var Os,
          Ns,
          As,
          Ls,
          Ds = { dehydrated: null, treeContext: null, retryLane: 0 };
        function js(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Us(e, t, n) {
          var r,
            i = t.pendingProps,
            o = Za.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ti(Za, 1 & o),
            null === e)
          )
            return (
              ua(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = i.children),
                  (e = i.fallback),
                  s
                    ? ((i = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & i) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = ju(l, i, 0, null)),
                      (e = Du(e, i, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = js(n)),
                      (t.memoizedState = Ds),
                      e)
                    : Ms(t, l))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, i, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fs(e, t, s, (r = cs(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (i = t.mode),
                    (r = ju(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((o = Du(o, i, s, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && wa(t, e.child, null, s),
                    (t.child.memoizedState = js(s)),
                    (t.memoizedState = Ds),
                    o);
              if (0 === (1 & t.mode)) return Fs(e, t, s, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Fs(e, t, s, (r = cs((o = Error(a(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), bs || l)) {
                if (null !== (r = Rl)) {
                  switch (s & -s) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | s)) ? 0 : i) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), La(e, i), nu(r, e, i, -1));
                }
                return mu(), Fs(e, t, s, (r = cs(Error(a(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Iu.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ra = ui(i.nextSibling)),
                  (na = t),
                  (ia = !0),
                  (aa = null),
                  null !== e &&
                    (($i[Gi++] = Qi),
                    ($i[Gi++] = Xi),
                    ($i[Gi++] = Ji),
                    (Qi = e.id),
                    (Xi = e.overflow),
                    (Ji = t)),
                  (t = Ms(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, i, r, o, n);
          if (s) {
            (s = i.fallback), (l = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: i.children };
            return (
              0 === (1 & l) && t.child !== o
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = u),
                  (t.deletions = null))
                : ((i = Au(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Au(r, s))
                : ((s = Du(s, l, n, null)).flags |= 2),
              (s.return = t),
              (i.return = t),
              (i.sibling = s),
              (t.child = i),
              (i = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? js(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ds),
              i
            );
          }
          return (
            (e = (s = e.child).sibling),
            (i = Au(s, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function Ms(e, t) {
          return (
            ((t = ju(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fs(e, t, n, r) {
          return (
            null !== r && pa(r),
            wa(t, e.child, null, n),
            ((e = Ms(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function zs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xa(e.return, t, n);
        }
        function Bs(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Vs(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((ws(e, t, r.children, n), 0 !== (2 & (r = Za.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zs(e, n, t);
                else if (19 === e.tag) zs(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ti(Za, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === eo(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Bs(t, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === eo(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Bs(t, !0, n, null, a);
                break;
              case "together":
                Bs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (jl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Au((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Au(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function qs(e, t) {
          if (!ia)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ks(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function $s(e, t, n) {
          var r = t.pendingProps;
          switch ((ta(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ks(t), null;
            case 1:
            case 17:
              return Ni(t.type) && Ai(), Ks(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Qa(),
                Ci(Ri),
                Ci(xi),
                no(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (da(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== aa && (ou(aa), (aa = null)))),
                Ns(e, t),
                Ks(t),
                null
              );
            case 5:
              Ya(t);
              var i = Ga($a.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                As(e, t, n, r, i),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Ks(t), null;
                }
                if (((e = Ga(qa.current)), da(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fi] = t), (r[hi] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Dr.length; i++) Fr(Dr[i], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Q(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, o), Fr("invalid", r);
                  }
                  for (var l in (ye(n, o), (i = null), o))
                    if (o.hasOwnProperty(l)) {
                      var u = o[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Yr(r.textContent, u, e),
                            (i = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Yr(r.textContent, u, e),
                            (i = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      K(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[fi] = t),
                    (e[hi] = r),
                    Os(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Dr.length; i++) Fr(Dr[i], e);
                        i = r;
                        break;
                      case "source":
                        Fr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (i = r);
                        break;
                      case "details":
                        Fr("toggle", e), (i = r);
                        break;
                      case "input":
                        Q(e, r), (i = J(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = U({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), Fr("invalid", e);
                    }
                    for (o in (ye(n, i), (u = i)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Fr("scroll", e)
                              : null != c && b(e, o, c, l));
                      }
                    switch (n) {
                      case "input":
                        K(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        K(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ks(t), null;
            case 6:
              if (e && null != t.stateNode) Ls(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = Ga($a.current)), Ga(qa.current), da(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fi] = t),
                    (o = r.nodeValue !== n) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fi] = t),
                    (t.stateNode = r);
              }
              return Ks(t), null;
            case 13:
              if (
                (Ci(Za),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fa(), ha(), (t.flags |= 98560), (o = !1);
                else if (((o = da(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[fi] = t;
                  } else
                    ha(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ks(t), (o = !1);
                } else null !== aa && (ou(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Za.current)
                        ? 0 === Ll && (Ll = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ks(t),
                  null);
            case 4:
              return (
                Qa(),
                Ns(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                Ks(t),
                null
              );
            case 10:
              return Ia(t.type._context), Ks(t), null;
            case 19:
              if ((Ci(Za), null === (o = t.memoizedState))) return Ks(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) qs(o, !1);
                else {
                  if (0 !== Ll || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = eo(e))) {
                        for (
                          t.flags |= 128,
                            qs(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ti(Za, (1 & Za.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > Vl &&
                    ((t.flags |= 128),
                    (r = !0),
                    qs(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      qs(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !ia)
                    )
                      return Ks(t), null;
                  } else
                    2 * Xe() - o.renderingStartTime > Vl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      qs(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = Za.current),
                  Ti(Za, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ks(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Nl) &&
                    (Ks(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ks(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Gs(e, t) {
          switch ((ta(t), t.tag)) {
            case 1:
              return (
                Ni(t.type) && Ai(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Qa(),
                Ci(Ri),
                Ci(xi),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Ya(t), null;
            case 13:
              if (
                (Ci(Za),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ci(Za), null;
            case 4:
              return Qa(), null;
            case 10:
              return Ia(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Os = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ns = function () {}),
          (As = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), Ga(qa.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (i = J(e, i)), (r = J(e, r)), (o = []);
                  break;
                case "select":
                  (i = U({}, i, { value: void 0 })),
                    (r = U({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var l = i[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            o || l === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ls = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Js = !1,
          Qs = !1,
          Xs = "function" === typeof WeakSet ? WeakSet : Set,
          Ys = null;
        function Zs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                _u(e, t, r);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (r) {
            _u(e, t, r);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && el(t, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function il(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function al(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), al(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fi],
              delete t[hi],
              delete t[mi],
              delete t[gi],
              delete t[vi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ol(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ol(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var cl = null,
          dl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Qs || Zs(n, t);
            case 6:
              var r = cl,
                i = dl;
              (cl = null),
                fl(e, t, n),
                (dl = i),
                null !== (cl = r) &&
                  (dl
                    ? ((e = cl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cl.removeChild(n.stateNode));
              break;
            case 18:
              null !== cl &&
                (dl
                  ? ((e = cl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? li(e.parentNode, n)
                      : 1 === e.nodeType && li(e, n),
                    Vt(e))
                  : li(cl, n.stateNode));
              break;
            case 4:
              (r = cl),
                (i = dl),
                (cl = n.stateNode.containerInfo),
                (dl = !0),
                fl(e, t, n),
                (cl = r),
                (dl = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Qs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      el(n, t, o),
                    (i = i.next);
                } while (i !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !Qs &&
                (Zs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  _u(n, t, s);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Qs = (r = Qs) || null !== n.memoizedState),
                  fl(e, t, n),
                  (Qs = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function pl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xs()),
              t.forEach(function (t) {
                var r = xu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (cl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (cl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === cl) throw Error(a(160));
                hl(o, s, i), (cl = null), (dl = !1);
                var u = i.alternate;
                null !== u && (u.return = null), (i.return = null);
              } catch (c) {
                _u(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), vl(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (g) {
                  _u(e, e.return, g);
                }
                try {
                  nl(5, e, e.return);
                } catch (g) {
                  _u(e, e.return, g);
                }
              }
              break;
            case 1:
              ml(t, e), vl(e), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                vl(e),
                512 & r && null !== n && Zs(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  fe(i, "");
                } catch (g) {
                  _u(e, e.return, g);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      X(i, o),
                      be(l, s);
                    var c = be(l, o);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? ge(i, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(i, f)
                        : "children" === d
                        ? fe(i, f)
                        : b(i, d, f, c);
                    }
                    switch (l) {
                      case "input":
                        Y(i, o);
                        break;
                      case "textarea":
                        ae(i, o);
                        break;
                      case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? ne(i, !!o.multiple, p, !1)
                          : h !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(i, !!o.multiple, o.defaultValue, !0)
                              : ne(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[hi] = o;
                  } catch (g) {
                    _u(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), vl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                  i.nodeValue = o;
                } catch (g) {
                  _u(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                vl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (g) {
                  _u(e, e.return, g);
                }
              break;
            case 4:
            default:
              ml(t, e), vl(e);
              break;
            case 13:
              ml(t, e),
                vl(e),
                8192 & (i = e.child).flags &&
                  ((o = null !== i.memoizedState),
                  (i.stateNode.isHidden = o),
                  !o ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Bl = Xe())),
                4 & r && pl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Qs = (c = Qs) || d), ml(t, e), (Qs = c))
                  : ml(t, e),
                vl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Ys = e, d = e.child; null !== d; ) {
                    for (f = Ys = d; null !== Ys; ) {
                      switch (((p = (h = Ys).child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, h, h.return);
                          break;
                        case 1:
                          Zs(h, h.return);
                          var m = h.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = h), (n = h.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              _u(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zs(h, h.return);
                          break;
                        case 22:
                          if (null !== h.memoizedState) {
                            Sl(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = h), (Ys = p)) : Sl(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (i = f.stateNode),
                          c
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((l = f.stateNode),
                              (s =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (g) {
                        _u(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        _u(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), vl(e), 4 & r && pl(e);
            case 21:
          }
        }
        function vl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ol(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (fe(i, ""), (r.flags &= -33)),
                    ul(e, sl(e), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ll(e, sl(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              _u(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yl(e, t, n) {
          (Ys = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Ys; ) {
            var i = Ys,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Js;
              if (!o) {
                var s = i.alternate,
                  l = (null !== s && null !== s.memoizedState) || Qs;
                s = Js;
                var u = Qs;
                if (((Js = o), (Qs = l) && !u))
                  for (Ys = i; null !== Ys; )
                    (l = (o = Ys).child),
                      22 === o.tag && null !== o.memoizedState
                        ? kl(i)
                        : null !== l
                        ? ((l.return = o), (Ys = l))
                        : kl(i);
                for (; null !== a; ) (Ys = a), bl(a, t, n), (a = a.sibling);
                (Ys = i), (Js = s), (Qs = u);
              }
              wl(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), (Ys = a))
                : wl(e);
          }
        }
        function wl(e) {
          for (; null !== Ys; ) {
            var t = Ys;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qs || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Qs)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ns(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ha(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ha(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Vt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Qs || (512 & t.flags && il(t));
              } catch (h) {
                _u(t, t.return, h);
              }
            }
            if (t === e) {
              Ys = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ys = n);
              break;
            }
            Ys = t.return;
          }
        }
        function Sl(e) {
          for (; null !== Ys; ) {
            var t = Ys;
            if (t === e) {
              Ys = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ys = n);
              break;
            }
            Ys = t.return;
          }
        }
        function kl(e) {
          for (; null !== Ys; ) {
            var t = Ys;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (l) {
                    _u(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      _u(t, i, l);
                    }
                  }
                  var a = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    _u(t, a, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    _u(t, o, l);
                  }
              }
            } catch (l) {
              _u(t, t.return, l);
            }
            if (t === e) {
              Ys = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Ys = s);
              break;
            }
            Ys = t.return;
          }
        }
        var El,
          _l = Math.ceil,
          Cl = w.ReactCurrentDispatcher,
          Tl = w.ReactCurrentOwner,
          Il = w.ReactCurrentBatchConfig,
          xl = 0,
          Rl = null,
          Pl = null,
          Ol = 0,
          Nl = 0,
          Al = _i(0),
          Ll = 0,
          Dl = null,
          jl = 0,
          Ul = 0,
          Ml = 0,
          Fl = null,
          zl = null,
          Bl = 0,
          Vl = 1 / 0,
          Hl = null,
          Wl = !1,
          ql = null,
          Kl = null,
          $l = !1,
          Gl = null,
          Jl = 0,
          Ql = 0,
          Xl = null,
          Yl = -1,
          Zl = 0;
        function eu() {
          return 0 !== (6 & xl) ? Xe() : -1 !== Yl ? Yl : (Yl = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & xl) && 0 !== Ol
            ? Ol & -Ol
            : null !== ma.transition
            ? (0 === Zl && (Zl = mt()), Zl)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Qt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ql) throw ((Ql = 0), (Xl = null), Error(a(185)));
          vt(e, n, r),
            (0 !== (2 & xl) && e === Rl) ||
              (e === Rl && (0 === (2 & xl) && (Ul |= n), 4 === Ll && su(e, Ol)),
              ru(e, r),
              1 === n &&
                0 === xl &&
                0 === (1 & t.mode) &&
                ((Vl = Xe() + 500), Fi && Vi()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                s = 1 << o,
                l = i[o];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (i[o] = ht(s, t))
                : l <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Rl ? Ol : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fi = !0), Bi(e);
                  })(lu.bind(null, e))
                : Bi(lu.bind(null, e)),
                oi(function () {
                  0 === (6 & xl) && Vi();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ru(n, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function iu(e, t) {
          if (((Yl = -1), (Zl = 0), 0 !== (6 & xl))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Rl ? Ol : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var i = xl;
            xl |= 2;
            var o = pu();
            for (
              (Rl === e && Ol === t) ||
              ((Hl = null), (Vl = Xe() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (l) {
                hu(e, l);
              }
            Ta(),
              (Cl.current = o),
              (xl = i),
              null !== Pl ? (t = 0) : ((Rl = null), (Ol = 0), (t = Ll));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = pt(e)) && ((r = i), (t = au(e, i))),
              1 === t)
            )
              throw ((n = Dl), fu(e, 0), su(e, r), ru(e, Xe()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!sr(a(), i)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (o = pt(e)) &&
                    ((r = o), (t = au(e, o))),
                  1 === t))
              )
                throw ((n = Dl), fu(e, 0), su(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Su(e, zl, Hl);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Bl + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(Su.bind(null, e, zl, Hl), t);
                    break;
                  }
                  Su(e, zl, Hl);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > i && (i = s), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _l(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(Su.bind(null, e, zl, Hl), r);
                    break;
                  }
                  Su(e, zl, Hl);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? iu.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Fl;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = zl), (zl = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === zl ? (zl = e) : zl.push.apply(zl, e);
        }
        function su(e, t) {
          for (
            t &= ~Ml,
              t &= ~Ul,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lu(e) {
          if (0 !== (6 & xl)) throw Error(a(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Dl), fu(e, 0), su(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, zl, Hl),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = xl;
          xl |= 1;
          try {
            return e(t);
          } finally {
            0 === (xl = n) && ((Vl = Xe() + 500), Fi && Vi());
          }
        }
        function cu(e) {
          null !== Gl && 0 === Gl.tag && 0 === (6 & xl) && ku();
          var t = xl;
          xl |= 1;
          var n = Il.transition,
            r = bt;
          try {
            if (((Il.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Il.transition = n), 0 === (6 & (xl = t)) && Vi();
          }
        }
        function du() {
          (Nl = Al.current), Ci(Al);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Pl))
            for (n = Pl.return; null !== n; ) {
              var r = n;
              switch ((ta(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ai();
                  break;
                case 3:
                  Qa(), Ci(Ri), Ci(xi), no();
                  break;
                case 5:
                  Ya(r);
                  break;
                case 4:
                  Qa();
                  break;
                case 13:
                case 19:
                  Ci(Za);
                  break;
                case 10:
                  Ia(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Rl = e),
            (Pl = e = Au(e.current, null)),
            (Ol = Nl = t),
            (Ll = 0),
            (Dl = null),
            (Ml = Ul = jl = 0),
            (zl = Fl = null),
            null !== Oa)
          ) {
            for (t = 0; t < Oa.length; t++)
              if (null !== (r = (n = Oa[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            Oa = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Pl;
            try {
              if ((Ta(), (ro.current = Yo), uo)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                uo = !1;
              }
              if (
                ((ao = 0),
                (lo = so = oo = null),
                (co = !1),
                (fo = 0),
                (Tl.current = null),
                null === n || null === n.return)
              ) {
                (Ll = 1), (Dl = t), (Pl = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Ol),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var h = d.alternate;
                    h
                      ? ((d.updateQueue = h.updateQueue),
                        (d.memoizedState = h.memoizedState),
                        (d.lanes = h.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = gs(s);
                  if (null !== p) {
                    (p.flags &= -257),
                      vs(p, s, l, 0, t),
                      1 & p.mode && ms(o, c, t),
                      (u = c);
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ms(o, c, t), mu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (ia && 1 & l.mode) {
                  var v = gs(s);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vs(v, s, l, 0, t),
                      pa(us(u, l));
                    break e;
                  }
                }
                (o = u = us(u, l)),
                  4 !== Ll && (Ll = 2),
                  null === Fl ? (Fl = [o]) : Fl.push(o),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Ba(o, hs(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Kl || !Kl.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Ba(o, ps(o, l, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wu(n);
            } catch (w) {
              (t = w), Pl === n && null !== n && (Pl = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var e = Cl.current;
          return (Cl.current = Yo), null === e ? Yo : e;
        }
        function mu() {
          (0 !== Ll && 3 !== Ll && 2 !== Ll) || (Ll = 4),
            null === Rl ||
              (0 === (268435455 & jl) && 0 === (268435455 & Ul)) ||
              su(Rl, Ol);
        }
        function gu(e, t) {
          var n = xl;
          xl |= 2;
          var r = pu();
          for ((Rl === e && Ol === t) || ((Hl = null), fu(e, t)); ; )
            try {
              vu();
              break;
            } catch (i) {
              hu(e, i);
            }
          if ((Ta(), (xl = n), (Cl.current = r), null !== Pl))
            throw Error(a(261));
          return (Rl = null), (Ol = 0), Ll;
        }
        function vu() {
          for (; null !== Pl; ) bu(Pl);
        }
        function yu() {
          for (; null !== Pl && !Je(); ) bu(Pl);
        }
        function bu(e) {
          var t = El(e.alternate, e, Nl);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Pl = t),
            (Tl.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = $s(n, t, Nl))) return void (Pl = n);
            } else {
              if (null !== (n = Gs(n, t)))
                return (n.flags &= 32767), void (Pl = n);
              if (null === e) return (Ll = 6), void (Pl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Pl = t);
            Pl = t = e;
          } while (null !== t);
          0 === Ll && (Ll = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            i = Il.transition;
          try {
            (Il.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Gl);
                if (0 !== (6 & xl)) throw Error(a(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - ot(n),
                        a = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === Rl && ((Pl = Rl = null), (Ol = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    $l ||
                    (($l = !0),
                    Ru(tt, function () {
                      return ku(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Il.transition), (Il.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = xl;
                  (xl |= 4),
                    (Tl.current = null),
                    (function (e, t) {
                      if (((ei = Wt), hr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                h = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== i && 3 !== f.nodeType) ||
                                    (l = s + i),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (h = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (h === n && ++c === i && (l = s),
                                    h === o && ++d === r && (u = s),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  h = (f = h).parentNode;
                                }
                                f = p;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Ys = t;
                        null !== Ys;

                      )
                        if (
                          ((e = (t = Ys).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ys = e);
                        else
                          for (; null !== Ys; ) {
                            t = Ys;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ns(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (S) {
                              _u(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ys = e);
                              break;
                            }
                            Ys = t.return;
                          }
                      (m = tl), (tl = !1);
                    })(e, n),
                    gl(n, e),
                    pr(ti),
                    (Wt = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    yl(n, e, i),
                    Qe(),
                    (xl = l),
                    (bt = s),
                    (Il.transition = o);
                } else e.current = n;
                if (
                  ($l && (($l = !1), (Gl = e), (Jl = i)),
                  (o = e.pendingLanes),
                  0 === o && (Kl = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]),
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                if (Wl) throw ((Wl = !1), (e = ql), (ql = null), e);
                0 !== (1 & Jl) && 0 !== e.tag && ku(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Xl
                      ? Ql++
                      : ((Ql = 0), (Xl = e))
                    : (Ql = 0),
                  Vi();
              })(e, t, n, r);
          } finally {
            (Il.transition = i), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Gl) {
            var e = wt(Jl),
              t = Il.transition,
              n = bt;
            try {
              if (((Il.transition = null), (bt = 16 > e ? 16 : e), null === Gl))
                var r = !1;
              else {
                if (((e = Gl), (Gl = null), (Jl = 0), 0 !== (6 & xl)))
                  throw Error(a(331));
                var i = xl;
                for (xl |= 4, Ys = e.current; null !== Ys; ) {
                  var o = Ys,
                    s = o.child;
                  if (0 !== (16 & Ys.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Ys = c; null !== Ys; ) {
                          var d = Ys;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Ys = f);
                          else
                            for (; null !== Ys; ) {
                              var h = (d = Ys).sibling,
                                p = d.return;
                              if ((al(d), d === c)) {
                                Ys = null;
                                break;
                              }
                              if (null !== h) {
                                (h.return = p), (Ys = h);
                                break;
                              }
                              Ys = p;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Ys = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Ys = s);
                  else
                    e: for (; null !== Ys; ) {
                      if (0 !== (2048 & (o = Ys).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Ys = y);
                        break e;
                      }
                      Ys = o.return;
                    }
                }
                var b = e.current;
                for (Ys = b; null !== Ys; ) {
                  var w = (s = Ys).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Ys = w);
                  else
                    e: for (s = b; null !== Ys; ) {
                      if (0 !== (2048 & (l = Ys).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (k) {
                          _u(l, l.return, k);
                        }
                      if (l === s) {
                        Ys = null;
                        break e;
                      }
                      var S = l.sibling;
                      if (null !== S) {
                        (S.return = l.return), (Ys = S);
                        break e;
                      }
                      Ys = l.return;
                    }
                }
                if (
                  ((xl = i),
                  Vi(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Il.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = Fa(e, (t = hs(0, (t = us(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function _u(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Kl || !Kl.has(r)))
                ) {
                  (t = Fa(t, (e = ps(t, (e = us(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Rl === e &&
              (Ol & n) === n &&
              (4 === Ll ||
              (3 === Ll && (130023424 & Ol) === Ol && 500 > Xe() - Bl)
                ? fu(e, 0)
                : (Ml |= n)),
            ru(e, t);
        }
        function Tu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = La(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function Iu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tu(e, n);
        }
        function xu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Tu(e, n);
        }
        function Ru(e, t) {
          return $e(e, t);
        }
        function Pu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ou(e, t, n, r) {
          return new Pu(e, t, n, r);
        }
        function Nu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Au(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Lu(e, t, n, r, i, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Nu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case E:
                return Du(n.children, i, o, t);
              case _:
                (s = 8), (i |= 8);
                break;
              case C:
                return (
                  ((e = Ou(12, n, t, 2 | i)).elementType = C), (e.lanes = o), e
                );
              case R:
                return (
                  ((e = Ou(13, n, t, i)).elementType = R), (e.lanes = o), e
                );
              case P:
                return (
                  ((e = Ou(19, n, t, i)).elementType = P), (e.lanes = o), e
                );
              case A:
                return ju(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      s = 10;
                      break e;
                    case I:
                      s = 9;
                      break e;
                    case x:
                      s = 11;
                      break e;
                    case O:
                      s = 14;
                      break e;
                    case N:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ou(s, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Du(e, t, n, r) {
          return ((e = Ou(7, e, r, t)).lanes = n), e;
        }
        function ju(e, t, n, r) {
          return (
            ((e = Ou(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Uu(e, t, n) {
          return ((e = Ou(6, e, null, t)).lanes = n), e;
        }
        function Mu(e, t, n) {
          return (
            ((t = Ou(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zu(e, t, n, r, i, a, o, s, l) {
          return (
            (e = new Fu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Ou(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            ja(a),
            e
          );
        }
        function Bu(e) {
          if (!e) return Ii;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ni(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ni(n)) return Di(e, n, t);
          }
          return t;
        }
        function Vu(e, t, n, r, i, a, o, s, l) {
          return (
            ((e = zu(n, r, !0, e, 0, a, 0, s, l)).context = Bu(null)),
            (n = e.current),
            ((a = Ma((r = eu()), (i = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Fa(n, a, i),
            (e.current.lanes = i),
            vt(e, i, r),
            ru(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var i = t.current,
            a = eu(),
            o = tu(i);
          return (
            (n = Bu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ma(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fa(i, t, o)) && (nu(e, i, o, a), za(e, i, o)),
            o
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ku(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        El = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ri.current) bs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rs(t), ha();
                        break;
                      case 5:
                        Xa(t);
                        break;
                      case 1:
                        Ni(t.type) && ji(t);
                        break;
                      case 4:
                        Ja(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Ti(ka, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ti(Za, 1 & Za.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Us(e, t, n)
                            : (Ti(Za, 1 & Za.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        Ti(Za, 1 & Za.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Ti(Za, Za.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), _s(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              bs = 0 !== (131072 & e.flags);
            }
          else (bs = !1), ia && 0 !== (1048576 & t.flags) && Zi(t, Ki, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hs(e, t), (e = t.pendingProps);
              var i = Oi(t, xi.current);
              Ra(t, n), (i = go(null, t, r, e, i, n));
              var o = vo();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ni(r) ? ((o = !0), ji(t)) : (o = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    ja(t),
                    (i.updater = is),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    ls(t, r, e, n),
                    (t = xs(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ia && o && ea(t),
                    ws(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hs(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Nu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === x) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ns(r, e)),
                  i)
                ) {
                  case 0:
                    t = Ts(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Is(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Ss(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ks(null, t, r, ns(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ts(e, t, r, (i = t.elementType === r ? i : ns(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Is(e, t, r, (i = t.elementType === r ? i : ns(r, i)), n)
              );
            case 3:
              e: {
                if ((Rs(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (i = (o = t.memoizedState).element),
                  Ua(e, t),
                  Va(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ps(e, t, r, n, (i = us(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Ps(e, t, r, n, (i = us(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    ra = ui(t.stateNode.containerInfo.firstChild),
                      na = t,
                      ia = !0,
                      aa = null,
                      n = Sa(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === i)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  ws(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xa(t),
                null === e && ua(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = i.children),
                ni(r, i)
                  ? (s = null)
                  : null !== o && ni(r, o) && (t.flags |= 32),
                Cs(e, t),
                ws(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ua(t), null;
            case 13:
              return Us(e, t, n);
            case 4:
              return (
                Ja(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wa(t, null, r, n)) : ws(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ss(e, t, r, (i = t.elementType === r ? i : ns(r, i)), n)
              );
            case 7:
              return ws(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ws(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = i.value),
                  Ti(ka, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === i.children && !Ri.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ma(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              xa(o.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(a(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          xa(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                ws(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Ra(t, n),
                (r = r((i = Pa(i)))),
                (t.flags |= 1),
                ws(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = ns((r = t.type), t.pendingProps)),
                ks(e, t, r, (i = ns(r.type, i)), n)
              );
            case 15:
              return Es(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : ns(r, i)),
                Hs(e, t),
                (t.tag = 1),
                Ni(r) ? ((e = !0), ji(t)) : (e = !1),
                Ra(t, n),
                os(t, r, i),
                ls(t, r, i, n),
                xs(null, t, r, !0, e, n)
              );
            case 19:
              return Vs(e, t, n);
            case 22:
              return _s(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var $u =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gu(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Qu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Yu() {}
        function Zu(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var s = i;
              i = function () {
                var e = Wu(o);
                s.call(e);
              };
            }
            Hu(t, o, e, i);
          } else
            o = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Wu(o);
                    a.call(e);
                  };
                }
                var o = Vu(t, r, e, 0, null, !1, 0, "", Yu);
                return (
                  (e._reactRootContainer = o),
                  (e[pi] = o.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Wu(l);
                  s.call(e);
                };
              }
              var l = zu(e, 0, !1, null, 0, !1, 0, "", Yu);
              return (
                (e._reactRootContainer = l),
                (e[pi] = l.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Hu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, i, r);
          return Wu(o);
        }
        (Ju.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Hu(e, t, null, null);
          }),
          (Ju.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Hu(null, e, null, null);
                }),
                  (t[pi] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Ut(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Xe()),
                    0 === (6 & xl) && ((Vl = Xe() + 500), Vi()));
                }
                break;
              case 13:
                cu(function () {
                  var t = La(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Ku(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = La(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Ku(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = La(e, t);
              if (null !== n) nu(n, e, t, eu());
              Ku(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Y(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = Si(r);
                      if (!i) throw Error(a(90));
                      $(r), Y(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (xe = uu),
          (Re = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [bi, wi, Si, Te, Ie, uu],
          },
          tc = {
            findFiberByHostInstance: yi,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (it = rc.inject(nc)), (at = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Qu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Qu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              i = $u;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = zu(e, 1, !1, null, 0, n, 0, r, i)),
              (e[pi] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(a(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Qu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = "",
              s = $u;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Vu(t, null, e, 1, null != n ? n : null, i, 0, o, s)),
              (e[pi] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(a(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: s.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          E = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var i,
            a = {},
            o = null,
            s = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, i) && !_.hasOwnProperty(i) && (a[i] = t[i]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (i in (l = e.defaultProps)) void 0 === a[i] && (a[i] = l[i]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: a,
            _owner: E.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var I = /\/+/g;
        function x(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function R(e, t, i, a, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === a ? "." + x(l, 0) : a),
              S(o)
                ? ((i = ""),
                  null != e && (i = e.replace(I, "$&/") + "/"),
                  R(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (T(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(I, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), S(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + x((s = e[u]), u);
              l += R(s, t, i, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (h && e[h]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += R((s = s.value), t, i, (c = a + x(s, u++)), o);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            R(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          A = { transition: null },
          L = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: E,
          };
        function D() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.act = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = m({}, e.props),
              a = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = E.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !_.hasOwnProperty(u) &&
                  (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              i.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: i,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = D),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < i && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < i && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), A(k);
            else {
              var t = r(c);
              null !== t && L(S, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), y(T), (T = -1)), (p = !0);
          var a = h;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !R()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (h = f.priorityLevel);
                var s = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(u) && i(u),
                  w(n);
              } else i(u);
              f = r(u);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(c);
              null !== d && L(S, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (h = a), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          _ = !1,
          C = null,
          T = -1,
          I = 5,
          x = -1;
        function R() {
          return !(t.unstable_now() - x < I);
        }
        function P() {
          if (null !== C) {
            var e = t.unstable_now();
            x = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? E() : ((_ = !1), (C = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            N = O.port2;
          (O.port1.onmessage = P),
            (E = function () {
              N.postMessage(null);
            });
        } else
          E = function () {
            v(P, 0);
          };
        function A(e) {
          (C = e), _ || ((_ = !0), E());
        }
        function L(e, n) {
          T = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), A(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (I = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(T), (T = -1)) : (g = !0), L(S, a - o)))
                : ((e.sortIndex = s), n(u, e), m || p || ((m = !0), A(k))),
              e
            );
          }),
          (t.unstable_shouldYield = R),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, i) {
        if ((1 & i && (r = this(r)), 8 & i)) return r;
        if ("object" === typeof r && r) {
          if (4 & i && r.__esModule) return r;
          if (16 & i && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & i && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach((e) => (o[e] = () => r[e]));
        return (o.default = () => r), n.d(a, o), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".195a2d9f.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "jira-clone:";
      n.l = (r, i, a, o) => {
        if (e[r]) e[r].push(i);
        else {
          var s, l;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + a
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + a),
            (s.src = r)),
            (e[r] = [i]);
          var f = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(h);
              var i = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                i && i.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            h = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = f.bind(null, s.onerror)),
            (s.onload = f.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise((n, r) => (i = e[t] = [n, r]));
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              s = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = a),
                    (s.request = o),
                    i[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var i,
            a,
            o = r[0],
            s = r[1],
            l = r[2],
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (l) l(n);
          }
          for (t && t(r); u < o.length; u++)
            (a = o[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkjira_clone = self.webpackChunkjira_clone || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = {};
  n.r(r),
    n.d(r, {
      hasBrowserEnv: () => Dt,
      hasStandardBrowserEnv: () => jt,
      hasStandardBrowserWebWorkerEnv: () => Mt,
      origin: () => Ft,
    });
  var i,
    a = n(43),
    o = n.t(a, 2),
    s = n(391),
    l = n(950),
    u = n.t(l, 2);
  function c() {
    return (
      (c = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      c.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(i || (i = {}));
  const d = "popstate";
  function f(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function h(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function p(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function m(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      c(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? v(t) : t,
        {
          state: n,
          key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function g(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function v(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function y(e, t, n, r) {
    void 0 === r && (r = {});
    let { window: a = document.defaultView, v5Compat: o = !1 } = r,
      s = a.history,
      l = i.Pop,
      u = null,
      h = v();
    function v() {
      return (s.state || { idx: null }).idx;
    }
    function y() {
      l = i.Pop;
      let e = v(),
        t = null == e ? null : e - h;
      (h = e), u && u({ action: l, location: w.location, delta: t });
    }
    function b(e) {
      let t =
          "null" !== a.location.origin ? a.location.origin : a.location.href,
        n = "string" === typeof e ? e : g(e);
      return (
        (n = n.replace(/ $/, "%20")),
        f(
          t,
          "No window.location.(origin|href) available to create URL for href: " +
            n
        ),
        new URL(n, t)
      );
    }
    null == h && ((h = 0), s.replaceState(c({}, s.state, { idx: h }), ""));
    let w = {
      get action() {
        return l;
      },
      get location() {
        return e(a, s);
      },
      listen(e) {
        if (u) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(d, y),
          (u = e),
          () => {
            a.removeEventListener(d, y), (u = null);
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: b,
      encodeLocation(e) {
        let t = b(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        l = i.Push;
        let r = m(w.location, e, t);
        n && n(r, e), (h = v() + 1);
        let c = p(r, h),
          d = w.createHref(r);
        try {
          s.pushState(c, "", d);
        } catch (f) {
          if (f instanceof DOMException && "DataCloneError" === f.name) throw f;
          a.location.assign(d);
        }
        o && u && u({ action: l, location: w.location, delta: 1 });
      },
      replace: function (e, t) {
        l = i.Replace;
        let r = m(w.location, e, t);
        n && n(r, e), (h = v());
        let a = p(r, h),
          c = w.createHref(r);
        s.replaceState(a, "", c),
          o && u && u({ action: l, location: w.location, delta: 0 });
      },
      go: (e) => s.go(e),
    };
    return w;
  }
  var b;
  !(function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(b || (b = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function w(e, t, n) {
    return void 0 === n && (n = "/"), S(e, t, n, !1);
  }
  function S(e, t, n, r) {
    let i = D(("string" === typeof t ? v(t) : t).pathname || "/", n);
    if (null == i) return null;
    let a = k(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(a);
    let o = null;
    for (let s = 0; null == o && s < a.length; ++s) {
      let e = L(i);
      o = N(a[s], e, r);
    }
    return o;
  }
  function k(e, t, n, r) {
    void 0 === t && (t = []),
      void 0 === n && (n = []),
      void 0 === r && (r = "");
    let i = (e, i, a) => {
      let o = {
        relativePath: void 0 === a ? e.path || "" : a,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: i,
        route: e,
      };
      o.relativePath.startsWith("/") &&
        (f(
          o.relativePath.startsWith(r),
          'Absolute route path "' +
            o.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (o.relativePath = o.relativePath.slice(r.length)));
      let s = z([r, o.relativePath]),
        l = n.concat(o);
      e.children &&
        e.children.length > 0 &&
        (f(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            s +
            '".'
        ),
        k(e.children, t, l, s)),
        (null != e.path || e.index) &&
          t.push({ path: s, score: O(s, e.index), routesMeta: l });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let r of E(e.path)) i(e, t, r);
        else i(e, t);
      }),
      t
    );
  }
  function E(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      i = n.endsWith("?"),
      a = n.replace(/\?$/, "");
    if (0 === r.length) return i ? [a, ""] : [a];
    let o = E(r.join("/")),
      s = [];
    return (
      s.push(...o.map((e) => ("" === e ? a : [a, e].join("/")))),
      i && s.push(...o),
      s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  const _ = /^:[\w-]+$/,
    C = 3,
    T = 2,
    I = 1,
    x = 10,
    R = -2,
    P = (e) => "*" === e;
  function O(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(P) && (r += R),
      t && (r += T),
      n
        .filter((e) => !P(e))
        .reduce((e, t) => e + (_.test(t) ? C : "" === t ? I : x), r)
    );
  }
  function N(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      i = {},
      a = "/",
      o = [];
    for (let s = 0; s < r.length; ++s) {
      let e = r[s],
        l = s === r.length - 1,
        u = "/" === a ? t : t.slice(a.length) || "/",
        c = A(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
          u
        ),
        d = e.route;
      if (
        (!c &&
          l &&
          n &&
          !r[r.length - 1].route.index &&
          (c = A(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            u
          )),
        !c)
      )
        return null;
      Object.assign(i, c.params),
        o.push({
          params: i,
          pathname: z([a, c.pathname]),
          pathnameBase: B(z([a, c.pathnameBase])),
          route: d,
        }),
        "/" !== c.pathnameBase && (a = z([a, c.pathnameBase]));
    }
    return o;
  }
  function A(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        h(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, "/*") +
            '".'
        );
        let r = [],
          i =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (i += "\\/*$")
          : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))");
        let a = new RegExp(i, t ? void 0 : "i");
        return [a, r];
      })(e.path, e.caseSensitive, e.end),
      i = t.match(n);
    if (!i) return null;
    let a = i[0],
      o = a.replace(/(.)\/+$/, "$1"),
      s = i.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: i } = t;
        if ("*" === r) {
          let e = s[n] || "";
          o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const l = s[n];
        return (e[r] = i && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: a,
      pathnameBase: o,
      pattern: e,
    };
  }
  function L(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        h(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            t +
            ")."
        ),
        e
      );
    }
  }
  function D(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function j(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified `to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the `to." +
      n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function U(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function M(e, t) {
    let n = U(e);
    return t
      ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
      : n.map((e) => e.pathnameBase);
  }
  function F(e, t, n, r) {
    let i;
    void 0 === r && (r = !1),
      "string" === typeof e
        ? (i = v(e))
        : ((i = c({}, e)),
          f(
            !i.pathname || !i.pathname.includes("?"),
            j("?", "pathname", "search", i)
          ),
          f(
            !i.pathname || !i.pathname.includes("#"),
            j("#", "pathname", "hash", i)
          ),
          f(!i.search || !i.search.includes("#"), j("#", "search", "hash", i)));
    let a,
      o = "" === e || "" === i.pathname,
      s = o ? "/" : i.pathname;
    if (null == s) a = n;
    else {
      let e = t.length - 1;
      if (!r && s.startsWith("..")) {
        let t = s.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        i.pathname = t.join("/");
      }
      a = e >= 0 ? t[e] : "/";
    }
    let l = (function (e, t) {
        void 0 === t && (t = "/");
        let {
            pathname: n,
            search: r = "",
            hash: i = "",
          } = "string" === typeof e ? v(e) : e,
          a = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: a, search: V(r), hash: H(i) };
      })(i, a),
      u = s && "/" !== s && s.endsWith("/"),
      d = (o || "." === s) && n.endsWith("/");
    return l.pathname.endsWith("/") || (!u && !d) || (l.pathname += "/"), l;
  }
  const z = (e) => e.join("/").replace(/\/\/+/g, "/"),
    B = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    V = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    H = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  Error;
  function W(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  const q = ["post", "put", "patch", "delete"],
    K = (new Set(q), ["get", ...q]);
  new Set(K), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function $() {
    return (
      ($ = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      $.apply(this, arguments)
    );
  }
  const G = a.createContext(null);
  const J = a.createContext(null);
  const Q = a.createContext(null);
  const X = a.createContext(null);
  const Y = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const Z = a.createContext(null);
  function ee() {
    return null != a.useContext(X);
  }
  function te() {
    return ee() || f(!1), a.useContext(X).location;
  }
  function ne(e) {
    a.useContext(Q).static || a.useLayoutEffect(e);
  }
  function re() {
    let { isDataRoute: e } = a.useContext(Y);
    return e
      ? (function () {
          let { router: e } = he(de.UseNavigateStable),
            t = me(fe.UseNavigateStable),
            n = a.useRef(!1);
          return (
            ne(() => {
              n.current = !0;
            }),
            a.useCallback(
              function (r, i) {
                void 0 === i && (i = {}),
                  n.current &&
                    ("number" === typeof r
                      ? e.navigate(r)
                      : e.navigate(r, $({ fromRouteId: t }, i)));
              },
              [e, t]
            )
          );
        })()
      : (function () {
          ee() || f(!1);
          let e = a.useContext(G),
            { basename: t, future: n, navigator: r } = a.useContext(Q),
            { matches: i } = a.useContext(Y),
            { pathname: o } = te(),
            s = JSON.stringify(M(i, n.v7_relativeSplatPath)),
            l = a.useRef(!1);
          return (
            ne(() => {
              l.current = !0;
            }),
            a.useCallback(
              function (n, i) {
                if ((void 0 === i && (i = {}), !l.current)) return;
                if ("number" === typeof n) return void r.go(n);
                let a = F(n, JSON.parse(s), o, "path" === i.relative);
                null == e &&
                  "/" !== t &&
                  (a.pathname = "/" === a.pathname ? t : z([t, a.pathname])),
                  (i.replace ? r.replace : r.push)(a, i.state, i);
              },
              [t, r, s, o, e]
            )
          );
        })();
  }
  function ie(e, t) {
    let { relative: n } = void 0 === t ? {} : t,
      { future: r } = a.useContext(Q),
      { matches: i } = a.useContext(Y),
      { pathname: o } = te(),
      s = JSON.stringify(M(i, r.v7_relativeSplatPath));
    return a.useMemo(() => F(e, JSON.parse(s), o, "path" === n), [e, s, o, n]);
  }
  function ae(e, t, n, r) {
    ee() || f(!1);
    let { navigator: o } = a.useContext(Q),
      { matches: s } = a.useContext(Y),
      l = s[s.length - 1],
      u = l ? l.params : {},
      c = (l && l.pathname, l ? l.pathnameBase : "/");
    l && l.route;
    let d,
      h = te();
    if (t) {
      var p;
      let e = "string" === typeof t ? v(t) : t;
      "/" === c ||
        (null == (p = e.pathname) ? void 0 : p.startsWith(c)) ||
        f(!1),
        (d = e);
    } else d = h;
    let m = d.pathname || "/",
      g = m;
    if ("/" !== c) {
      let e = c.replace(/^\//, "").split("/");
      g = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let y = w(e, { pathname: g });
    let b = ce(
      y &&
        y.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: z([
              c,
              o.encodeLocation
                ? o.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? c
                : z([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
    return t && b
      ? a.createElement(
          X.Provider,
          {
            value: {
              location: $(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                d
              ),
              navigationType: i.Pop,
            },
          },
          b
        )
      : b;
  }
  function oe() {
    let e = (function () {
        var e;
        let t = a.useContext(Z),
          n = pe(fe.UseRouteError),
          r = me(fe.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = W(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      i = { padding: "0.5rem", backgroundColor: r };
    return a.createElement(
      a.Fragment,
      null,
      a.createElement("h2", null, "Unexpected Application Error!"),
      a.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? a.createElement("pre", { style: i }, n) : null,
      null
    );
  }
  const se = a.createElement(oe, null);
  class le extends a.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        ("idle" !== t.revalidation && "idle" === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return void 0 !== this.state.error
        ? a.createElement(
            Y.Provider,
            { value: this.props.routeContext },
            a.createElement(Z.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function ue(e) {
    let { routeContext: t, match: n, children: r } = e,
      i = a.useContext(G);
    return (
      i &&
        i.static &&
        i.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (i.staticContext._deepestRenderedBoundaryId = n.route.id),
      a.createElement(Y.Provider, { value: t }, r)
    );
  }
  function ce(e, t, n, r) {
    var i;
    if (
      (void 0 === t && (t = []),
      void 0 === n && (n = null),
      void 0 === r && (r = null),
      null == e)
    ) {
      var o;
      if (null == (o = n) || !o.errors) return null;
      e = n.matches;
    }
    let s = e,
      l = null == (i = n) ? void 0 : i.errors;
    if (null != l) {
      let e = s.findIndex(
        (e) => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])
      );
      e >= 0 || f(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
    }
    let u = !1,
      c = -1;
    if (n && r && r.v7_partialHydration)
      for (let a = 0; a < s.length; a++) {
        let e = s[a];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (c = a),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            i =
              e.route.loader &&
              void 0 === t[e.route.id] &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || i) {
            (u = !0), (s = c >= 0 ? s.slice(0, c + 1) : [s[0]]);
            break;
          }
        }
      }
    return s.reduceRight((e, r, i) => {
      let o,
        d = !1,
        f = null,
        h = null;
      var p;
      n &&
        ((o = l && r.route.id ? l[r.route.id] : void 0),
        (f = r.route.errorElement || se),
        u &&
          (c < 0 && 0 === i
            ? ((p = "route-fallback"),
              !1 || ge[p] || (ge[p] = !0),
              (d = !0),
              (h = null))
            : c === i &&
              ((d = !0), (h = r.route.hydrateFallbackElement || null))));
      let m = t.concat(s.slice(0, i + 1)),
        g = () => {
          let t;
          return (
            (t = o
              ? f
              : d
              ? h
              : r.route.Component
              ? a.createElement(r.route.Component, null)
              : r.route.element
              ? r.route.element
              : e),
            a.createElement(ue, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === i)
        ? a.createElement(le, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: o,
            children: g(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : g();
    }, null);
  }
  var de = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(de || {}),
    fe = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(fe || {});
  function he(e) {
    let t = a.useContext(G);
    return t || f(!1), t;
  }
  function pe(e) {
    let t = a.useContext(J);
    return t || f(!1), t;
  }
  function me(e) {
    let t = (function () {
        let e = a.useContext(Y);
        return e || f(!1), e;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || f(!1), n.route.id;
  }
  const ge = {};
  o.startTransition;
  function ve(e) {
    let { to: t, replace: n, state: r, relative: i } = e;
    ee() || f(!1);
    let { future: o, static: s } = a.useContext(Q),
      { matches: l } = a.useContext(Y),
      { pathname: u } = te(),
      c = re(),
      d = F(t, M(l, o.v7_relativeSplatPath), u, "path" === i),
      h = JSON.stringify(d);
    return (
      a.useEffect(
        () => c(JSON.parse(h), { replace: n, state: r, relative: i }),
        [c, h, i, n, r]
      ),
      null
    );
  }
  function ye(e) {
    f(!1);
  }
  function be(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: o = i.Pop,
      navigator: s,
      static: l = !1,
      future: u,
    } = e;
    ee() && f(!1);
    let c = t.replace(/^\/*/, "/"),
      d = a.useMemo(
        () => ({
          basename: c,
          navigator: s,
          static: l,
          future: $({ v7_relativeSplatPath: !1 }, u),
        }),
        [c, u, s, l]
      );
    "string" === typeof r && (r = v(r));
    let {
        pathname: h = "/",
        search: p = "",
        hash: m = "",
        state: g = null,
        key: y = "default",
      } = r,
      b = a.useMemo(() => {
        let e = D(h, c);
        return null == e
          ? null
          : {
              location: { pathname: e, search: p, hash: m, state: g, key: y },
              navigationType: o,
            };
      }, [c, h, p, m, g, y, o]);
    return null == b
      ? null
      : a.createElement(
          Q.Provider,
          { value: d },
          a.createElement(X.Provider, { children: n, value: b })
        );
  }
  function we(e) {
    let { children: t, location: n } = e;
    return ae(Se(t), n);
  }
  new Promise(() => {});
  a.Component;
  function Se(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let i = [...t, r];
        if (e.type === a.Fragment)
          return void n.push.apply(n, Se(e.props.children, i));
        e.type !== ye && f(!1), e.props.index && e.props.children && f(!1);
        let o = {
          id: e.props.id || i.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (o.children = Se(e.props.children, i)), n.push(o);
      }),
      n
    );
  }
  function ke() {
    return (
      (ke = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      ke.apply(this, arguments)
    );
  }
  function Ee(e, t) {
    if (null == e) return {};
    var n,
      r,
      i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
  }
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  const _e = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ];
  try {
    window.__reactRouterVersion = "6";
  } catch (Pl) {}
  new Map();
  const Ce = o.startTransition;
  u.flushSync, o.useId;
  function Te(e) {
    let { basename: t, children: n, future: r, window: i } = e,
      o = a.useRef();
    var s;
    null == o.current &&
      (o.current =
        (void 0 === (s = { window: i, v5Compat: !0 }) && (s = {}),
        y(
          function (e, t) {
            let { pathname: n, search: r, hash: i } = e.location;
            return m(
              "",
              { pathname: n, search: r, hash: i },
              (t.state && t.state.usr) || null,
              (t.state && t.state.key) || "default"
            );
          },
          function (e, t) {
            return "string" === typeof t ? t : g(t);
          },
          null,
          s
        )));
    let l = o.current,
      [u, c] = a.useState({ action: l.action, location: l.location }),
      { v7_startTransition: d } = r || {},
      f = a.useCallback(
        (e) => {
          d && Ce ? Ce(() => c(e)) : c(e);
        },
        [c, d]
      );
    return (
      a.useLayoutEffect(() => l.listen(f), [l, f]),
      a.createElement(be, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: l,
        future: r,
      })
    );
  }
  const Ie =
      "undefined" !== typeof window &&
      "undefined" !== typeof window.document &&
      "undefined" !== typeof window.document.createElement,
    xe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Re = a.forwardRef(function (e, t) {
      let n,
        {
          onClick: r,
          relative: i,
          reloadDocument: o,
          replace: s,
          state: l,
          target: u,
          to: c,
          preventScrollReset: d,
          unstable_viewTransition: h,
        } = e,
        p = Ee(e, _e),
        { basename: m } = a.useContext(Q),
        v = !1;
      if ("string" === typeof c && xe.test(c) && ((n = c), Ie))
        try {
          let e = new URL(window.location.href),
            t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
            n = D(t.pathname, m);
          t.origin === e.origin && null != n
            ? (c = n + t.search + t.hash)
            : (v = !0);
        } catch (Pl) {}
      let y = (function (e, t) {
          let { relative: n } = void 0 === t ? {} : t;
          ee() || f(!1);
          let { basename: r, navigator: i } = a.useContext(Q),
            { hash: o, pathname: s, search: l } = ie(e, { relative: n }),
            u = s;
          return (
            "/" !== r && (u = "/" === s ? r : z([r, s])),
            i.createHref({ pathname: u, search: l, hash: o })
          );
        })(c, { relative: i }),
        b = (function (e, t) {
          let {
              target: n,
              replace: r,
              state: i,
              preventScrollReset: o,
              relative: s,
              unstable_viewTransition: l,
            } = void 0 === t ? {} : t,
            u = re(),
            c = te(),
            d = ie(e, { relative: s });
          return a.useCallback(
            (t) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(t, n)
              ) {
                t.preventDefault();
                let n = void 0 !== r ? r : g(c) === g(d);
                u(e, {
                  replace: n,
                  state: i,
                  preventScrollReset: o,
                  relative: s,
                  unstable_viewTransition: l,
                });
              }
            },
            [c, u, d, r, i, n, e, o, s, l]
          );
        })(c, {
          replace: s,
          state: l,
          target: u,
          preventScrollReset: d,
          relative: i,
          unstable_viewTransition: h,
        });
      return a.createElement(
        "a",
        ke({}, p, {
          href: n || y,
          onClick:
            v || o
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || b(e);
                },
          ref: t,
          target: u,
        })
      );
    });
  var Pe, Oe;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Pe || (Pe = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(Oe || (Oe = {}));
  function Ne(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: Ae } = Object.prototype,
    { getPrototypeOf: Le } = Object,
    De =
      ((je = Object.create(null)),
      (e) => {
        const t = Ae.call(e);
        return je[t] || (je[t] = t.slice(8, -1).toLowerCase());
      });
  var je;
  const Ue = (e) => ((e = e.toLowerCase()), (t) => De(t) === e),
    Me = (e) => (t) => typeof t === e,
    { isArray: Fe } = Array,
    ze = Me("undefined");
  const Be = Ue("ArrayBuffer");
  const Ve = Me("string"),
    He = Me("function"),
    We = Me("number"),
    qe = (e) => null !== e && "object" === typeof e,
    Ke = (e) => {
      if ("object" !== De(e)) return !1;
      const t = Le(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    $e = Ue("Date"),
    Ge = Ue("File"),
    Je = Ue("Blob"),
    Qe = Ue("FileList"),
    Xe = Ue("URLSearchParams"),
    [Ye, Ze, et, tt] = ["ReadableStream", "Request", "Response", "Headers"].map(
      Ue
    );
  function nt(e, t) {
    let n,
      r,
      { allOwnKeys: i = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== e && "undefined" !== typeof e)
      if (("object" !== typeof e && (e = [e]), Fe(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else {
        const r = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
          a = r.length;
        let o;
        for (n = 0; n < a; n++) (o = r[n]), t.call(null, e[o], o, e);
      }
  }
  function rt(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      i = n.length;
    for (; i-- > 0; ) if (((r = n[i]), t === r.toLowerCase())) return r;
    return null;
  }
  const it =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
        ? self
        : "undefined" !== typeof window
        ? window
        : global,
    at = (e) => !ze(e) && e !== it;
  const ot =
    ((st = "undefined" !== typeof Uint8Array && Le(Uint8Array)),
    (e) => st && e instanceof st);
  var st;
  const lt = Ue("HTMLFormElement"),
    ut = ((e) => {
      let { hasOwnProperty: t } = e;
      return (e, n) => t.call(e, n);
    })(Object.prototype),
    ct = Ue("RegExp"),
    dt = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      nt(n, (n, i) => {
        let a;
        !1 !== (a = t(n, i, e)) && (r[i] = a || n);
      }),
        Object.defineProperties(e, r);
    },
    ft = "abcdefghijklmnopqrstuvwxyz",
    ht = "0123456789",
    pt = { DIGIT: ht, ALPHA: ft, ALPHA_DIGIT: ft + ft.toUpperCase() + ht };
  const mt = Ue("AsyncFunction"),
    gt = {
      isArray: Fe,
      isArrayBuffer: Be,
      isBuffer: function (e) {
        return (
          null !== e &&
          !ze(e) &&
          null !== e.constructor &&
          !ze(e.constructor) &&
          He(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" === typeof FormData && e instanceof FormData) ||
            (He(e.append) &&
              ("formdata" === (t = De(e)) ||
                ("object" === t &&
                  He(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && Be(e.buffer)),
          t
        );
      },
      isString: Ve,
      isNumber: We,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: qe,
      isPlainObject: Ke,
      isReadableStream: Ye,
      isRequest: Ze,
      isResponse: et,
      isHeaders: tt,
      isUndefined: ze,
      isDate: $e,
      isFile: Ge,
      isBlob: Je,
      isRegExp: ct,
      isFunction: He,
      isStream: (e) => qe(e) && He(e.pipe),
      isURLSearchParams: Xe,
      isTypedArray: ot,
      isFileList: Qe,
      forEach: nt,
      merge: function e() {
        const { caseless: t } = (at(this) && this) || {},
          n = {},
          r = (r, i) => {
            const a = (t && rt(n, i)) || i;
            Ke(n[a]) && Ke(r)
              ? (n[a] = e(n[a], r))
              : Ke(r)
              ? (n[a] = e({}, r))
              : Fe(r)
              ? (n[a] = r.slice())
              : (n[a] = r);
          };
        for (let i = 0, a = arguments.length; i < a; i++)
          arguments[i] && nt(arguments[i], r);
        return n;
      },
      extend: function (e, t, n) {
        let { allOwnKeys: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          nt(
            t,
            (t, r) => {
              n && He(t) ? (e[r] = Ne(t, n)) : (e[r] = t);
            },
            { allOwnKeys: r }
          ),
          e
        );
      },
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let i, a, o;
        const s = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
            (o = i[a]),
              (r && !r(o, e, t)) || s[o] || ((t[o] = e[o]), (s[o] = !0));
          e = !1 !== n && Le(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: De,
      kindOfTest: Ue,
      endsWith: (e, t, n) => {
        (e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (Fe(e)) return e;
        let t = e.length;
        if (!We(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: lt,
      hasOwnProperty: ut,
      hasOwnProp: ut,
      reduceDescriptors: dt,
      freezeMethods: (e) => {
        dt(e, (t, n) => {
          if (He(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          He(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return Fe(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: rt,
      global: it,
      isContextDefined: at,
      ALPHABET: pt,
      generateString: function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : pt.ALPHA_DIGIT,
          n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          He(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (qe(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const i = Fe(e) ? [] : {};
                return (
                  nt(e, (e, t) => {
                    const a = n(e, r + 1);
                    !ze(a) && (i[t] = a);
                  }),
                  (t[r] = void 0),
                  i
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: mt,
      isThenable: (e) => e && (qe(e) || He(e)) && He(e.then) && He(e.catch),
    };
  function vt(e, t, n, r, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && (this.response = i);
  }
  gt.inherits(vt, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: gt.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const yt = vt.prototype,
    bt = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    bt[e] = { value: e };
  }),
    Object.defineProperties(vt, bt),
    Object.defineProperty(yt, "isAxiosError", { value: !0 }),
    (vt.from = (e, t, n, r, i, a) => {
      const o = Object.create(yt);
      return (
        gt.toFlatObject(
          e,
          o,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        vt.call(o, e.message, t, n, r, i),
        (o.cause = e),
        (o.name = e.name),
        a && Object.assign(o, a),
        o
      );
    });
  const wt = vt;
  function St(e) {
    return gt.isPlainObject(e) || gt.isArray(e);
  }
  function kt(e) {
    return gt.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Et(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = kt(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
  const _t = gt.toFlatObject(gt, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const Ct = function (e, t, n) {
    if (!gt.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = gt.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !gt.isUndefined(t[e]);
        }
      )).metaTokens,
      i = n.visitor || u,
      a = n.dots,
      o = n.indexes,
      s =
        (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
        gt.isSpecCompliantForm(t);
    if (!gt.isFunction(i)) throw new TypeError("visitor must be a function");
    function l(e) {
      if (null === e) return "";
      if (gt.isDate(e)) return e.toISOString();
      if (!s && gt.isBlob(e))
        throw new wt("Blob is not supported. Use a Buffer instead.");
      return gt.isArrayBuffer(e) || gt.isTypedArray(e)
        ? s && "function" === typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function u(e, n, i) {
      let s = e;
      if (e && !i && "object" === typeof e)
        if (gt.endsWith(n, "{}"))
          (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (gt.isArray(e) &&
            (function (e) {
              return gt.isArray(e) && !e.some(St);
            })(e)) ||
          ((gt.isFileList(e) || gt.endsWith(n, "[]")) && (s = gt.toArray(e)))
        )
          return (
            (n = kt(n)),
            s.forEach(function (e, r) {
              !gt.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === o ? Et([n], r, a) : null === o ? n : n + "[]",
                  l(e)
                );
            }),
            !1
          );
      return !!St(e) || (t.append(Et(i, n, a), l(e)), !1);
    }
    const c = [],
      d = Object.assign(_t, {
        defaultVisitor: u,
        convertValue: l,
        isVisitable: St,
      });
    if (!gt.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!gt.isUndefined(n)) {
          if (-1 !== c.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          c.push(n),
            gt.forEach(n, function (n, a) {
              !0 ===
                (!(gt.isUndefined(n) || null === n) &&
                  i.call(t, n, gt.isString(a) ? a.trim() : a, r, d)) &&
                e(n, r ? r.concat(a) : [a]);
            }),
            c.pop();
        }
      })(e),
      t
    );
  };
  function Tt(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function It(e, t) {
    (this._pairs = []), e && Ct(e, this, t);
  }
  const xt = It.prototype;
  (xt.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (xt.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, Tt);
          }
        : Tt;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  const Rt = It;
  function Pt(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function Ot(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || Pt,
      i = n && n.serialize;
    let a;
    if (
      ((a = i
        ? i(t, n)
        : gt.isURLSearchParams(t)
        ? t.toString()
        : new Rt(t, n).toString(r)),
      a)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
    }
    return e;
  }
  const Nt = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        gt.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    At = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Lt = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" !== typeof URLSearchParams ? URLSearchParams : Rt,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Dt = "undefined" !== typeof window && "undefined" !== typeof document,
    jt =
      ((Ut = "undefined" !== typeof navigator && navigator.product),
      Dt && ["ReactNative", "NativeScript", "NS"].indexOf(Ut) < 0);
  var Ut;
  const Mt =
      "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    Ft = (Dt && window.location.href) || "http://localhost",
    zt = { ...r, ...Lt };
  const Bt = function (e) {
    function t(e, n, r, i) {
      let a = e[i++];
      if ("__proto__" === a) return !0;
      const o = Number.isFinite(+a),
        s = i >= e.length;
      if (((a = !a && gt.isArray(r) ? r.length : a), s))
        return gt.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !o;
      (r[a] && gt.isObject(r[a])) || (r[a] = []);
      return (
        t(e, n, r[a], i) &&
          gt.isArray(r[a]) &&
          (r[a] = (function (e) {
            const t = {},
              n = Object.keys(e);
            let r;
            const i = n.length;
            let a;
            for (r = 0; r < i; r++) (a = n[r]), (t[a] = e[a]);
            return t;
          })(r[a])),
        !o
      );
    }
    if (gt.isFormData(e) && gt.isFunction(e.entries)) {
      const n = {};
      return (
        gt.forEachEntry(e, (e, r) => {
          t(
            (function (e) {
              return gt
                .matchAll(/\w+|\[(\w*)]/g, e)
                .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
            })(e),
            r,
            n,
            0
          );
        }),
        n
      );
    }
    return null;
  };
  const Vt = {
    transitional: At,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          i = gt.isObject(e);
        i && gt.isHTMLForm(e) && (e = new FormData(e));
        if (gt.isFormData(e)) return r ? JSON.stringify(Bt(e)) : e;
        if (
          gt.isArrayBuffer(e) ||
          gt.isBuffer(e) ||
          gt.isStream(e) ||
          gt.isFile(e) ||
          gt.isBlob(e) ||
          gt.isReadableStream(e)
        )
          return e;
        if (gt.isArrayBufferView(e)) return e.buffer;
        if (gt.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        let a;
        if (i) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return Ct(
                e,
                new zt.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, n, r) {
                      return zt.isNode && gt.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : r.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((a = gt.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return Ct(
              a ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer
            );
          }
        }
        return i || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (gt.isString(e))
                try {
                  return (t || JSON.parse)(e), gt.trim(e);
                } catch (Pl) {
                  if ("SyntaxError" !== Pl.name) throw Pl;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || Vt.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (gt.isResponse(e) || gt.isReadableStream(e)) return e;
        if (e && gt.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (Pl) {
            if (n) {
              if ("SyntaxError" === Pl.name)
                throw wt.from(
                  Pl,
                  wt.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw Pl;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: zt.classes.FormData, Blob: zt.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  gt.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Vt.headers[e] = {};
  });
  const Ht = Vt,
    Wt = gt.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    qt = Symbol("internals");
  function Kt(e) {
    return e && String(e).trim().toLowerCase();
  }
  function $t(e) {
    return !1 === e || null == e ? e : gt.isArray(e) ? e.map($t) : String(e);
  }
  function Gt(e, t, n, r, i) {
    return gt.isFunction(r)
      ? r.call(this, t, n)
      : (i && (t = n),
        gt.isString(t)
          ? gt.isString(r)
            ? -1 !== t.indexOf(r)
            : gt.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0);
  }
  class Jt {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function i(e, t, n) {
        const i = Kt(t);
        if (!i) throw new Error("header name must be a non-empty string");
        const a = gt.findKey(r, i);
        (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) &&
          (r[a || t] = $t(e));
      }
      const a = (e, t) => gt.forEach(e, (e, n) => i(e, n, t));
      if (gt.isPlainObject(e) || e instanceof this.constructor) a(e, t);
      else if (
        gt.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        a(
          ((e) => {
            const t = {};
            let n, r, i;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  (i = e.indexOf(":")),
                    (n = e.substring(0, i).trim().toLowerCase()),
                    (r = e.substring(i + 1).trim()),
                    !n ||
                      (t[n] && Wt[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r));
                }),
              t
            );
          })(e),
          t
        );
      else if (gt.isHeaders(e)) for (const [o, s] of e.entries()) i(s, o, n);
      else null != e && i(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = Kt(e))) {
        const n = gt.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (gt.isFunction(t)) return t.call(this, e, n);
          if (gt.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = Kt(e))) {
        const n = gt.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !Gt(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function i(e) {
        if ((e = Kt(e))) {
          const i = gt.findKey(n, e);
          !i || (t && !Gt(0, n[i], i, t)) || (delete n[i], (r = !0));
        }
      }
      return gt.isArray(e) ? e.forEach(i) : i(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const i = t[n];
        (e && !Gt(0, this[i], i, e, !0)) || (delete this[i], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        gt.forEach(this, (r, i) => {
          const a = gt.findKey(n, i);
          if (a) return (t[a] = $t(r)), void delete t[i];
          const o = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(i)
            : String(i).trim();
          o !== i && delete t[i], (t[o] = $t(r)), (n[o] = !0);
        }),
        this
      );
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.constructor.concat(this, ...t);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        gt.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && gt.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((e) => {
          let [t, n] = e;
          return t + ": " + n;
        })
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e) {
      const t = new this(e);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
        i < n;
        i++
      )
        r[i - 1] = arguments[i];
      return r.forEach((e) => t.set(e)), t;
    }
    static accessor(e) {
      const t = (this[qt] = this[qt] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = Kt(e);
        t[r] ||
          (!(function (e, t) {
            const n = gt.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, i) {
                  return this[r].call(this, t, e, n, i);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return gt.isArray(e) ? e.forEach(r) : r(e), this;
    }
  }
  Jt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    gt.reduceDescriptors(Jt.prototype, (e, t) => {
      let { value: n } = e,
        r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => n,
        set(e) {
          this[r] = e;
        },
      };
    }),
    gt.freezeMethods(Jt);
  const Qt = Jt;
  function Xt(e, t) {
    const n = this || Ht,
      r = t || n,
      i = Qt.from(r.headers);
    let a = r.data;
    return (
      gt.forEach(e, function (e) {
        a = e.call(n, a, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      a
    );
  }
  function Yt(e) {
    return !(!e || !e.__CANCEL__);
  }
  function Zt(e, t, n) {
    wt.call(this, null == e ? "canceled" : e, wt.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  gt.inherits(Zt, wt, { __CANCEL__: !0 });
  const en = Zt;
  function tn(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new wt(
            "Request failed with status code " + n.status,
            [wt.ERR_BAD_REQUEST, wt.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        )
      : e(n);
  }
  const nn = function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let i,
      a = 0,
      o = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (s) {
        const l = Date.now(),
          u = r[o];
        i || (i = l), (n[a] = s), (r[a] = l);
        let c = o,
          d = 0;
        for (; c !== a; ) (d += n[c++]), (c %= e);
        if (((a = (a + 1) % e), a === o && (o = (o + 1) % e), l - i < t))
          return;
        const f = u && l - u;
        return f ? Math.round((1e3 * d) / f) : void 0;
      }
    );
  };
  const rn = function (e, t) {
      let n = 0;
      const r = 1e3 / t;
      let i = null;
      return function () {
        const t = !0 === this,
          a = Date.now();
        if (t || a - n > r)
          return (
            i && (clearTimeout(i), (i = null)),
            (n = a),
            e.apply(null, arguments)
          );
        i ||
          (i = setTimeout(
            () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
            r - (a - n)
          ));
      };
    },
    an = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        r = 0;
      const i = nn(50, 250);
      return rn((n) => {
        const a = n.loaded,
          o = n.lengthComputable ? n.total : void 0,
          s = a - r,
          l = i(s);
        r = a;
        const u = {
          loaded: a,
          total: o,
          progress: o ? a / o : void 0,
          bytes: s,
          rate: l || void 0,
          estimated: l && o && a <= o ? (o - a) / l : void 0,
          event: n,
          lengthComputable: null != o,
        };
        (u[t ? "download" : "upload"] = !0), e(u);
      }, n);
    },
    on = zt.hasStandardBrowserEnv
      ? (function () {
          const e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement("a");
          let n;
          function r(n) {
            let r = n;
            return (
              e && (t.setAttribute("href", r), (r = t.href)),
              t.setAttribute("href", r),
              {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname:
                  "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
              }
            );
          }
          return (
            (n = r(window.location.href)),
            function (e) {
              const t = gt.isString(e) ? r(e) : e;
              return t.protocol === n.protocol && t.host === n.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    sn = zt.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, i, a) {
            const o = [e + "=" + encodeURIComponent(t)];
            gt.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
              gt.isString(r) && o.push("path=" + r),
              gt.isString(i) && o.push("domain=" + i),
              !0 === a && o.push("secure"),
              (document.cookie = o.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function ln(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const un = (e) => (e instanceof Qt ? { ...e } : e);
  function cn(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n) {
      return gt.isPlainObject(e) && gt.isPlainObject(t)
        ? gt.merge.call({ caseless: n }, e, t)
        : gt.isPlainObject(t)
        ? gt.merge({}, t)
        : gt.isArray(t)
        ? t.slice()
        : t;
    }
    function i(e, t, n) {
      return gt.isUndefined(t)
        ? gt.isUndefined(e)
          ? void 0
          : r(void 0, e, n)
        : r(e, t, n);
    }
    function a(e, t) {
      if (!gt.isUndefined(t)) return r(void 0, t);
    }
    function o(e, t) {
      return gt.isUndefined(t)
        ? gt.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function s(n, i, a) {
      return a in t ? r(n, i) : a in e ? r(void 0, n) : void 0;
    }
    const l = {
      url: a,
      method: a,
      data: a,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: s,
      headers: (e, t) => i(un(e), un(t), !0),
    };
    return (
      gt.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const a = l[r] || i,
          o = a(e[r], t[r], r);
        (gt.isUndefined(o) && a !== s) || (n[r] = o);
      }),
      n
    );
  }
  const dn = (e) => {
      const t = cn({}, e);
      let n,
        {
          data: r,
          withXSRFToken: i,
          xsrfHeaderName: a,
          xsrfCookieName: o,
          headers: s,
          auth: l,
        } = t;
      if (
        ((t.headers = s = Qt.from(s)),
        (t.url = Ot(ln(t.baseURL, t.url), e.params, e.paramsSerializer)),
        l &&
          s.set(
            "Authorization",
            "Basic " +
              btoa(
                (l.username || "") +
                  ":" +
                  (l.password ? unescape(encodeURIComponent(l.password)) : "")
              )
          ),
        gt.isFormData(r))
      )
        if (zt.hasStandardBrowserEnv || zt.hasStandardBrowserWebWorkerEnv)
          s.setContentType(void 0);
        else if (!1 !== (n = s.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(";")
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          s.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
      if (
        zt.hasStandardBrowserEnv &&
        (i && gt.isFunction(i) && (i = i(t)), i || (!1 !== i && on(t.url)))
      ) {
        const e = a && o && sn.read(o);
        e && s.set(a, e);
      }
      return t;
    },
    fn =
      "undefined" !== typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = dn(e);
          let i = r.data;
          const a = Qt.from(r.headers).normalize();
          let o,
            { responseType: s } = r;
          function l() {
            r.cancelToken && r.cancelToken.unsubscribe(o),
              r.signal && r.signal.removeEventListener("abort", o);
          }
          let u = new XMLHttpRequest();
          function c() {
            if (!u) return;
            const r = Qt.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            );
            tn(
              function (e) {
                t(e), l();
              },
              function (e) {
                n(e), l();
              },
              {
                data:
                  s && "text" !== s && "json" !== s
                    ? u.response
                    : u.responseText,
                status: u.status,
                statusText: u.statusText,
                headers: r,
                config: e,
                request: u,
              }
            ),
              (u = null);
          }
          u.open(r.method.toUpperCase(), r.url, !0),
            (u.timeout = r.timeout),
            "onloadend" in u
              ? (u.onloadend = c)
              : (u.onreadystatechange = function () {
                  u &&
                    4 === u.readyState &&
                    (0 !== u.status ||
                      (u.responseURL &&
                        0 === u.responseURL.indexOf("file:"))) &&
                    setTimeout(c);
                }),
            (u.onabort = function () {
              u &&
                (n(new wt("Request aborted", wt.ECONNABORTED, r, u)),
                (u = null));
            }),
            (u.onerror = function () {
              n(new wt("Network Error", wt.ERR_NETWORK, r, u)), (u = null);
            }),
            (u.ontimeout = function () {
              let e = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const t = r.transitional || At;
              r.timeoutErrorMessage && (e = r.timeoutErrorMessage),
                n(
                  new wt(
                    e,
                    t.clarifyTimeoutError ? wt.ETIMEDOUT : wt.ECONNABORTED,
                    r,
                    u
                  )
                ),
                (u = null);
            }),
            void 0 === i && a.setContentType(null),
            "setRequestHeader" in u &&
              gt.forEach(a.toJSON(), function (e, t) {
                u.setRequestHeader(t, e);
              }),
            gt.isUndefined(r.withCredentials) ||
              (u.withCredentials = !!r.withCredentials),
            s && "json" !== s && (u.responseType = r.responseType),
            "function" === typeof r.onDownloadProgress &&
              u.addEventListener("progress", an(r.onDownloadProgress, !0)),
            "function" === typeof r.onUploadProgress &&
              u.upload &&
              u.upload.addEventListener("progress", an(r.onUploadProgress)),
            (r.cancelToken || r.signal) &&
              ((o = (t) => {
                u &&
                  (n(!t || t.type ? new en(null, e, u) : t),
                  u.abort(),
                  (u = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(o),
              r.signal &&
                (r.signal.aborted
                  ? o()
                  : r.signal.addEventListener("abort", o)));
          const d = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          d && -1 === zt.protocols.indexOf(d)
            ? n(
                new wt("Unsupported protocol " + d + ":", wt.ERR_BAD_REQUEST, e)
              )
            : u.send(i || null);
        });
      },
    hn = (e, t) => {
      let n,
        r = new AbortController();
      const i = function (e) {
        if (!n) {
          (n = !0), o();
          const t = e instanceof Error ? e : this.reason;
          r.abort(
            t instanceof wt ? t : new en(t instanceof Error ? t.message : t)
          );
        }
      };
      let a =
        t &&
        setTimeout(() => {
          i(new wt("timeout ".concat(t, " of ms exceeded"), wt.ETIMEDOUT));
        }, t);
      const o = () => {
        e &&
          (a && clearTimeout(a),
          (a = null),
          e.forEach((e) => {
            e &&
              (e.removeEventListener
                ? e.removeEventListener("abort", i)
                : e.unsubscribe(i));
          }),
          (e = null));
      };
      e.forEach(
        (e) => e && e.addEventListener && e.addEventListener("abort", i)
      );
      const { signal: s } = r;
      return (
        (s.unsubscribe = o),
        [
          s,
          () => {
            a && clearTimeout(a), (a = null);
          },
        ]
      );
    },
    pn = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        i = 0;
      for (; i < n; ) (r = i + t), yield e.slice(i, r), (i = r);
    },
    mn = (e, t, n, r, i) => {
      const a = (async function* (e, t, n) {
        for await (const r of e)
          yield* pn(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
      })(e, t, i);
      let o = 0;
      return new ReadableStream(
        {
          type: "bytes",
          async pull(e) {
            const { done: t, value: i } = await a.next();
            if (t) return e.close(), void r();
            let s = i.byteLength;
            n && n((o += s)), e.enqueue(new Uint8Array(i));
          },
          cancel: (e) => (r(e), a.return()),
        },
        { highWaterMark: 2 }
      );
    },
    gn = (e, t) => {
      const n = null != e;
      return (r) =>
        setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
    },
    vn =
      "function" === typeof fetch &&
      "function" === typeof Request &&
      "function" === typeof Response,
    yn = vn && "function" === typeof ReadableStream,
    bn =
      vn &&
      ("function" === typeof TextEncoder
        ? ((wn = new TextEncoder()), (e) => wn.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
  var wn;
  const Sn =
      yn &&
      (() => {
        let e = !1;
        const t = new Request(zt.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      })(),
    kn =
      yn &&
      !!(() => {
        try {
          return gt.isReadableStream(new Response("").body);
        } catch (e) {}
      })(),
    En = { stream: kn && ((e) => e.body) };
  var _n;
  vn &&
    ((_n = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !En[e] &&
        (En[e] = gt.isFunction(_n[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new wt(
                "Response type '".concat(e, "' is not supported"),
                wt.ERR_NOT_SUPPORT,
                n
              );
            });
    }));
  const Cn = async (e, t) => {
      const n = gt.toFiniteNumber(e.getContentLength());
      return null == n
        ? (async (e) =>
            null == e
              ? 0
              : gt.isBlob(e)
              ? e.size
              : gt.isSpecCompliantForm(e)
              ? (await new Request(e).arrayBuffer()).byteLength
              : gt.isArrayBufferView(e)
              ? e.byteLength
              : (gt.isURLSearchParams(e) && (e += ""),
                gt.isString(e) ? (await bn(e)).byteLength : void 0))(t)
        : n;
    },
    Tn = {
      http: null,
      xhr: fn,
      fetch:
        vn &&
        (async (e) => {
          let {
            url: t,
            method: n,
            data: r,
            signal: i,
            cancelToken: a,
            timeout: o,
            onDownloadProgress: s,
            onUploadProgress: l,
            responseType: u,
            headers: c,
            withCredentials: d = "same-origin",
            fetchOptions: f,
          } = dn(e);
          u = u ? (u + "").toLowerCase() : "text";
          let h,
            p,
            [m, g] = i || a || o ? hn([i, a], o) : [];
          const v = () => {
            !h &&
              setTimeout(() => {
                m && m.unsubscribe();
              }),
              (h = !0);
          };
          let y;
          try {
            if (
              l &&
              Sn &&
              "get" !== n &&
              "head" !== n &&
              0 !== (y = await Cn(c, r))
            ) {
              let e,
                n = new Request(t, { method: "POST", body: r, duplex: "half" });
              gt.isFormData(r) &&
                (e = n.headers.get("content-type")) &&
                c.setContentType(e),
                n.body && (r = mn(n.body, 65536, gn(y, an(l)), null, bn));
            }
            gt.isString(d) || (d = d ? "cors" : "omit"),
              (p = new Request(t, {
                ...f,
                signal: m,
                method: n.toUpperCase(),
                headers: c.normalize().toJSON(),
                body: r,
                duplex: "half",
                withCredentials: d,
              }));
            let i = await fetch(p);
            const a = kn && ("stream" === u || "response" === u);
            if (kn && (s || a)) {
              const e = {};
              ["status", "statusText", "headers"].forEach((t) => {
                e[t] = i[t];
              });
              const t = gt.toFiniteNumber(i.headers.get("content-length"));
              i = new Response(
                mn(i.body, 65536, s && gn(t, an(s, !0)), a && v, bn),
                e
              );
            }
            u = u || "text";
            let o = await En[gt.findKey(En, u) || "text"](i, e);
            return (
              !a && v(),
              g && g(),
              await new Promise((t, n) => {
                tn(t, n, {
                  data: o,
                  headers: Qt.from(i.headers),
                  status: i.status,
                  statusText: i.statusText,
                  config: e,
                  request: p,
                });
              })
            );
          } catch (b) {
            if ((v(), b && "TypeError" === b.name && /fetch/i.test(b.message)))
              throw Object.assign(
                new wt("Network Error", wt.ERR_NETWORK, e, p),
                { cause: b.cause || b }
              );
            throw wt.from(b, b && b.code, e, p);
          }
        }),
    };
  gt.forEach(Tn, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (Pl) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const In = (e) => "- ".concat(e),
    xn = (e) => gt.isFunction(e) || null === e || !1 === e,
    Rn = (e) => {
      e = gt.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let a = 0; a < t; a++) {
        let t;
        if (
          ((n = e[a]),
          (r = n),
          !xn(n) && ((r = Tn[(t = String(n)).toLowerCase()]), void 0 === r))
        )
          throw new wt("Unknown adapter '".concat(t, "'"));
        if (r) break;
        i[t || "#" + a] = r;
      }
      if (!r) {
        const e = Object.entries(i).map((e) => {
          let [t, n] = e;
          return (
            "adapter ".concat(t, " ") +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        let n = t
          ? e.length > 1
            ? "since :\n" + e.map(In).join("\n")
            : " " + In(e[0])
          : "as no adapter specified";
        throw new wt(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function Pn(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new en(null, e);
  }
  function On(e) {
    Pn(e),
      (e.headers = Qt.from(e.headers)),
      (e.data = Xt.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return Rn(e.adapter || Ht.adapter)(e).then(
      function (t) {
        return (
          Pn(e),
          (t.data = Xt.call(e, e.transformResponse, t)),
          (t.headers = Qt.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          Yt(t) ||
            (Pn(e),
            t &&
              t.response &&
              ((t.response.data = Xt.call(e, e.transformResponse, t.response)),
              (t.response.headers = Qt.from(t.response.headers)))),
          Promise.reject(t)
        );
      }
    );
  }
  const Nn = "1.7.2",
    An = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      An[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const Ln = {};
  An.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.7.2] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, i, a) => {
      if (!1 === e)
        throw new wt(
          r(i, " has been removed" + (t ? " in " + t : "")),
          wt.ERR_DEPRECATED
        );
      return (
        t &&
          !Ln[i] &&
          ((Ln[i] = !0),
          console.warn(
            r(
              i,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, i, a)
      );
    };
  };
  const Dn = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e)
          throw new wt("options must be an object", wt.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let i = r.length;
        for (; i-- > 0; ) {
          const a = r[i],
            o = t[a];
          if (o) {
            const t = e[a],
              n = void 0 === t || o(t, a, e);
            if (!0 !== n)
              throw new wt(
                "option " + a + " must be " + n,
                wt.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new wt("Unknown option " + a, wt.ERR_BAD_OPTION);
        }
      },
      validators: An,
    },
    jn = Dn.validators;
  class Un {
    constructor(e) {
      (this.defaults = e),
        (this.interceptors = { request: new Nt(), response: new Nt() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error) {
          let e;
          Error.captureStackTrace
            ? Error.captureStackTrace((e = {}))
            : (e = new Error());
          const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? t &&
                !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                (n.stack += "\n" + t)
              : (n.stack = t);
          } catch (Pl) {}
        }
        throw n;
      }
    }
    _request(e, t) {
      "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = cn(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: i } = t;
      void 0 !== n &&
        Dn.assertOptions(
          n,
          {
            silentJSONParsing: jn.transitional(jn.boolean),
            forcedJSONParsing: jn.transitional(jn.boolean),
            clarifyTimeoutError: jn.transitional(jn.boolean),
          },
          !1
        ),
        null != r &&
          (gt.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Dn.assertOptions(
                r,
                { encode: jn.function, serialize: jn.function },
                !0
              )),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase());
      let a = i && gt.merge(i.common, i[t.method]);
      i &&
        gt.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete i[e];
          }
        ),
        (t.headers = Qt.concat(a, i));
      const o = [];
      let s = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((s = s && e.synchronous), o.unshift(e.fulfilled, e.rejected));
      });
      const l = [];
      let u;
      this.interceptors.response.forEach(function (e) {
        l.push(e.fulfilled, e.rejected);
      });
      let c,
        d = 0;
      if (!s) {
        const e = [On.bind(this), void 0];
        for (
          e.unshift.apply(e, o),
            e.push.apply(e, l),
            c = e.length,
            u = Promise.resolve(t);
          d < c;

        )
          u = u.then(e[d++], e[d++]);
        return u;
      }
      c = o.length;
      let f = t;
      for (d = 0; d < c; ) {
        const e = o[d++],
          t = o[d++];
        try {
          f = e(f);
        } catch (h) {
          t.call(this, h);
          break;
        }
      }
      try {
        u = On.call(this, f);
      } catch (h) {
        return Promise.reject(h);
      }
      for (d = 0, c = l.length; d < c; ) u = u.then(l[d++], l[d++]);
      return u;
    }
    getUri(e) {
      return Ot(
        ln((e = cn(this.defaults, e)).baseURL, e.url),
        e.params,
        e.paramsSerializer
      );
    }
  }
  gt.forEach(["delete", "get", "head", "options"], function (e) {
    Un.prototype[e] = function (t, n) {
      return this.request(
        cn(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
    gt.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, i) {
          return this.request(
            cn(i || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      (Un.prototype[e] = t()), (Un.prototype[e + "Form"] = t(!0));
    });
  const Mn = Un;
  class Fn {
    constructor(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, i) {
          n.reason || ((n.reason = new en(e, r, i)), t(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
        ? this._listeners.push(e)
        : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    static source() {
      let e;
      return {
        token: new Fn(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const zn = Fn;
  const Bn = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Bn).forEach((e) => {
    let [t, n] = e;
    Bn[n] = t;
  });
  const Vn = Bn;
  const Hn = (function e(t) {
    const n = new Mn(t),
      r = Ne(Mn.prototype.request, n);
    return (
      gt.extend(r, Mn.prototype, n, { allOwnKeys: !0 }),
      gt.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(cn(t, n));
      }),
      r
    );
  })(Ht);
  (Hn.Axios = Mn),
    (Hn.CanceledError = en),
    (Hn.CancelToken = zn),
    (Hn.isCancel = Yt),
    (Hn.VERSION = Nn),
    (Hn.toFormData = Ct),
    (Hn.AxiosError = wt),
    (Hn.Cancel = Hn.CanceledError),
    (Hn.all = function (e) {
      return Promise.all(e);
    }),
    (Hn.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Hn.isAxiosError = function (e) {
      return gt.isObject(e) && !0 === e.isAxiosError;
    }),
    (Hn.mergeConfig = cn),
    (Hn.AxiosHeaders = Qt),
    (Hn.formToJSON = (e) => Bt(gt.isHTMLForm(e) ? new FormData(e) : e)),
    (Hn.getAdapter = Rn),
    (Hn.HttpStatusCode = Vn),
    (Hn.default = Hn);
  const Wn = Hn;
  var qn = n(579);
  const Kn = (e) => {
      let {
        onClick: t,
        backgroundColor: n = "gold",
        color: r = "black",
        title: i,
        borderRadius: a = 10,
      } = e;
      return (0, qn.jsx)("button", {
        onClick: (e) => (null === t || void 0 === t ? void 0 : t(e)),
        style: {
          color: r,
          backgroundColor: n,
          border: "none",
          outline: "none",
          borderRadius: a,
          minWidth: 50,
          minHeight: 20,
          padding: 10,
          fontWeight: 700,
        },
        children: i,
      });
    },
    $n = function (e) {
      const t = [];
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r);
        i < 128
          ? (t[n++] = i)
          : i < 2048
          ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
          : 55296 === (64512 & i) &&
            r + 1 < e.length &&
            56320 === (64512 & e.charCodeAt(r + 1))
          ? ((i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r))),
            (t[n++] = (i >> 18) | 240),
            (t[n++] = ((i >> 12) & 63) | 128),
            (t[n++] = ((i >> 6) & 63) | 128),
            (t[n++] = (63 & i) | 128))
          : ((t[n++] = (i >> 12) | 224),
            (t[n++] = ((i >> 6) & 63) | 128),
            (t[n++] = (63 & i) | 128));
      }
      return t;
    },
    Gn = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: "function" === typeof atob,
      encodeByteArray(e, t) {
        if (!Array.isArray(e))
          throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
          r = [];
        for (let i = 0; i < e.length; i += 3) {
          const t = e[i],
            a = i + 1 < e.length,
            o = a ? e[i + 1] : 0,
            s = i + 2 < e.length,
            l = s ? e[i + 2] : 0,
            u = t >> 2,
            c = ((3 & t) << 4) | (o >> 4);
          let d = ((15 & o) << 2) | (l >> 6),
            f = 63 & l;
          s || ((f = 64), a || (d = 64)), r.push(n[u], n[c], n[d], n[f]);
        }
        return r.join("");
      },
      encodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t
          ? btoa(e)
          : this.encodeByteArray($n(e), t);
      },
      decodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t
          ? atob(e)
          : (function (e) {
              const t = [];
              let n = 0,
                r = 0;
              for (; n < e.length; ) {
                const i = e[n++];
                if (i < 128) t[r++] = String.fromCharCode(i);
                else if (i > 191 && i < 224) {
                  const a = e[n++];
                  t[r++] = String.fromCharCode(((31 & i) << 6) | (63 & a));
                } else if (i > 239 && i < 365) {
                  const a =
                    (((7 & i) << 18) |
                      ((63 & e[n++]) << 12) |
                      ((63 & e[n++]) << 6) |
                      (63 & e[n++])) -
                    65536;
                  (t[r++] = String.fromCharCode(55296 + (a >> 10))),
                    (t[r++] = String.fromCharCode(56320 + (1023 & a)));
                } else {
                  const a = e[n++],
                    o = e[n++];
                  t[r++] = String.fromCharCode(
                    ((15 & i) << 12) | ((63 & a) << 6) | (63 & o)
                  );
                }
              }
              return t.join("");
            })(this.decodeStringToByteArray(e, t));
      },
      decodeStringToByteArray(e, t) {
        this.init_();
        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
          r = [];
        for (let i = 0; i < e.length; ) {
          const t = n[e.charAt(i++)],
            a = i < e.length ? n[e.charAt(i)] : 0;
          ++i;
          const o = i < e.length ? n[e.charAt(i)] : 64;
          ++i;
          const s = i < e.length ? n[e.charAt(i)] : 64;
          if ((++i, null == t || null == a || null == o || null == s))
            throw new Jn();
          const l = (t << 2) | (a >> 4);
          if ((r.push(l), 64 !== o)) {
            const e = ((a << 4) & 240) | (o >> 2);
            if ((r.push(e), 64 !== s)) {
              const e = ((o << 6) & 192) | s;
              r.push(e);
            }
          }
        }
        return r;
      },
      init_() {
        if (!this.byteToCharMap_) {
          (this.byteToCharMap_ = {}),
            (this.charToByteMap_ = {}),
            (this.byteToCharMapWebSafe_ = {}),
            (this.charToByteMapWebSafe_ = {});
          for (let e = 0; e < this.ENCODED_VALS.length; e++)
            (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
              (this.charToByteMap_[this.byteToCharMap_[e]] = e),
              (this.byteToCharMapWebSafe_[e] =
                this.ENCODED_VALS_WEBSAFE.charAt(e)),
              (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
              e >= this.ENCODED_VALS_BASE.length &&
                ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
                (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
        }
      },
    };
  class Jn extends Error {
    constructor() {
      super(...arguments), (this.name = "DecodeBase64StringError");
    }
  }
  const Qn = function (e) {
      return (function (e) {
        const t = $n(e);
        return Gn.encodeByteArray(t, !0);
      })(e).replace(/\./g, "");
    },
    Xn = function (e) {
      try {
        return Gn.decodeString(e, !0);
      } catch (Pl) {
        console.error("base64Decode failed: ", Pl);
      }
      return null;
    };
  const Yn = () =>
      (function () {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof n.g) return n.g;
        throw new Error("Unable to locate global object.");
      })().__FIREBASE_DEFAULTS__,
    Zn = () => {
      try {
        return (
          Yn() ||
          (() => {
            if ("undefined" === typeof process) return;
            const e = {
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.__FIREBASE_DEFAULTS__;
            return e ? JSON.parse(e) : void 0;
          })() ||
          (() => {
            if ("undefined" === typeof document) return;
            let e;
            try {
              e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
            } catch (Pl) {
              return;
            }
            const t = e && Xn(e[1]);
            return t && JSON.parse(t);
          })()
        );
      } catch (Pl) {
        return void console.info(
          "Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(Pl)
        );
      }
    },
    er = (e) => {
      var t, n;
      return null ===
        (n = null === (t = Zn()) || void 0 === t ? void 0 : t.emulatorHosts) ||
        void 0 === n
        ? void 0
        : n[e];
    },
    tr = () => {
      var e;
      return null === (e = Zn()) || void 0 === e ? void 0 : e.config;
    },
    nr = (e) => {
      var t;
      return null === (t = Zn()) || void 0 === t ? void 0 : t["_".concat(e)];
    };
  class rr {
    constructor() {
      (this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((e, t) => {
          (this.resolve = e), (this.reject = t);
        }));
    }
    wrapCallback(e) {
      return (t, n) => {
        t ? this.reject(t) : this.resolve(n),
          "function" === typeof e &&
            (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n));
      };
    }
  }
  function ir() {
    return "undefined" !== typeof navigator &&
      "string" === typeof navigator.userAgent
      ? navigator.userAgent
      : "";
  }
  class ar extends Error {
    constructor(e, t, n) {
      super(t),
        (this.code = e),
        (this.customData = n),
        (this.name = "FirebaseError"),
        Object.setPrototypeOf(this, ar.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, or.prototype.create);
    }
  }
  class or {
    constructor(e, t, n) {
      (this.service = e), (this.serviceName = t), (this.errors = n);
    }
    create(e) {
      const t = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
        n = "".concat(this.service, "/").concat(e),
        r = this.errors[e],
        i = r
          ? (function (e, t) {
              return e.replace(sr, (e, n) => {
                const r = t[n];
                return null != r ? String(r) : "<".concat(n, "?>");
              });
            })(r, t)
          : "Error",
        a = "".concat(this.serviceName, ": ").concat(i, " (").concat(n, ").");
      return new ar(n, a, t);
    }
  }
  const sr = /\{\$([^}]+)}/g;
  function lr(e, t) {
    if (e === t) return !0;
    const n = Object.keys(e),
      r = Object.keys(t);
    for (const i of n) {
      if (!r.includes(i)) return !1;
      const n = e[i],
        a = t[i];
      if (ur(n) && ur(a)) {
        if (!lr(n, a)) return !1;
      } else if (n !== a) return !1;
    }
    for (const i of r) if (!n.includes(i)) return !1;
    return !0;
  }
  function ur(e) {
    return null !== e && "object" === typeof e;
  }
  function cr(e) {
    const t = [];
    for (const [n, r] of Object.entries(e))
      Array.isArray(r)
        ? r.forEach((e) => {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
          })
        : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    return t.length ? "&" + t.join("&") : "";
  }
  function dr(e) {
    const t = {};
    return (
      e
        .replace(/^\?/, "")
        .split("&")
        .forEach((e) => {
          if (e) {
            const [n, r] = e.split("=");
            t[decodeURIComponent(n)] = decodeURIComponent(r);
          }
        }),
      t
    );
  }
  function fr(e) {
    const t = e.indexOf("?");
    if (!t) return "";
    const n = e.indexOf("#", t);
    return e.substring(t, n > 0 ? n : void 0);
  }
  class hr {
    constructor(e, t) {
      (this.observers = []),
        (this.unsubscribes = []),
        (this.observerCount = 0),
        (this.task = Promise.resolve()),
        (this.finalized = !1),
        (this.onNoObservers = t),
        this.task
          .then(() => {
            e(this);
          })
          .catch((e) => {
            this.error(e);
          });
    }
    next(e) {
      this.forEachObserver((t) => {
        t.next(e);
      });
    }
    error(e) {
      this.forEachObserver((t) => {
        t.error(e);
      }),
        this.close(e);
    }
    complete() {
      this.forEachObserver((e) => {
        e.complete();
      }),
        this.close();
    }
    subscribe(e, t, n) {
      let r;
      if (void 0 === e && void 0 === t && void 0 === n)
        throw new Error("Missing Observer.");
      (r = (function (e, t) {
        if ("object" !== typeof e || null === e) return !1;
        for (const n of t) if (n in e && "function" === typeof e[n]) return !0;
        return !1;
      })(e, ["next", "error", "complete"])
        ? e
        : { next: e, error: t, complete: n }),
        void 0 === r.next && (r.next = pr),
        void 0 === r.error && (r.error = pr),
        void 0 === r.complete && (r.complete = pr);
      const i = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(() => {
            try {
              this.finalError ? r.error(this.finalError) : r.complete();
            } catch (Pl) {}
          }),
        this.observers.push(r),
        i
      );
    }
    unsubscribeOne(e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        (this.observerCount -= 1),
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }
    forEachObserver(e) {
      if (!this.finalized)
        for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }
    sendOne(e, t) {
      this.task.then(() => {
        if (void 0 !== this.observers && void 0 !== this.observers[e])
          try {
            t(this.observers[e]);
          } catch (Pl) {
            "undefined" !== typeof console &&
              console.error &&
              console.error(Pl);
          }
      });
    }
    close(e) {
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(() => {
          (this.observers = void 0), (this.onNoObservers = void 0);
        }));
    }
  }
  function pr() {}
  function mr(e) {
    return e && e._delegate ? e._delegate : e;
  }
  class gr {
    constructor(e, t, n) {
      (this.name = e),
        (this.instanceFactory = t),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY"),
        (this.onInstanceCreated = null);
    }
    setInstantiationMode(e) {
      return (this.instantiationMode = e), this;
    }
    setMultipleInstances(e) {
      return (this.multipleInstances = e), this;
    }
    setServiceProps(e) {
      return (this.serviceProps = e), this;
    }
    setInstanceCreatedCallback(e) {
      return (this.onInstanceCreated = e), this;
    }
  }
  const vr = "[DEFAULT]";
  class yr {
    constructor(e, t) {
      (this.name = e),
        (this.container = t),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map());
    }
    get(e) {
      const t = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(t)) {
        const e = new rr();
        if (
          (this.instancesDeferred.set(t, e),
          this.isInitialized(t) || this.shouldAutoInitialize())
        )
          try {
            const n = this.getOrInitializeService({ instanceIdentifier: t });
            n && e.resolve(n);
          } catch (Pl) {}
      }
      return this.instancesDeferred.get(t).promise;
    }
    getImmediate(e) {
      var t;
      const n = this.normalizeInstanceIdentifier(
          null === e || void 0 === e ? void 0 : e.identifier
        ),
        r =
          null !== (t = null === e || void 0 === e ? void 0 : e.optional) &&
          void 0 !== t &&
          t;
      if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
        if (r) return null;
        throw Error("Service ".concat(this.name, " is not available"));
      }
      try {
        return this.getOrInitializeService({ instanceIdentifier: n });
      } catch (Pl) {
        if (r) return null;
        throw Pl;
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(e) {
      if (e.name !== this.name)
        throw Error(
          "Mismatching Component "
            .concat(e.name, " for Provider ")
            .concat(this.name, ".")
        );
      if (this.component)
        throw Error(
          "Component for ".concat(this.name, " has already been provided")
        );
      if (((this.component = e), this.shouldAutoInitialize())) {
        if (
          (function (e) {
            return "EAGER" === e.instantiationMode;
          })(e)
        )
          try {
            this.getOrInitializeService({ instanceIdentifier: vr });
          } catch (Pl) {}
        for (const [e, t] of this.instancesDeferred.entries()) {
          const n = this.normalizeInstanceIdentifier(e);
          try {
            const e = this.getOrInitializeService({ instanceIdentifier: n });
            t.resolve(e);
          } catch (Pl) {}
        }
      }
    }
    clearInstance() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vr;
      this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e);
    }
    async delete() {
      const e = Array.from(this.instances.values());
      await Promise.all([
        ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
        ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
      ]);
    }
    isComponentSet() {
      return null != this.component;
    }
    isInitialized() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vr;
      return this.instances.has(e);
    }
    getOptions() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vr;
      return this.instancesOptions.get(e) || {};
    }
    initialize() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const { options: t = {} } = e,
        n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
      if (this.isInitialized(n))
        throw Error(
          "".concat(this.name, "(").concat(n, ") has already been initialized")
        );
      if (!this.isComponentSet())
        throw Error(
          "Component ".concat(this.name, " has not been registered yet")
        );
      const r = this.getOrInitializeService({
        instanceIdentifier: n,
        options: t,
      });
      for (const [i, a] of this.instancesDeferred.entries()) {
        n === this.normalizeInstanceIdentifier(i) && a.resolve(r);
      }
      return r;
    }
    onInit(e, t) {
      var n;
      const r = this.normalizeInstanceIdentifier(t),
        i =
          null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
            ? n
            : new Set();
      i.add(e), this.onInitCallbacks.set(r, i);
      const a = this.instances.get(r);
      return (
        a && e(a, r),
        () => {
          i.delete(e);
        }
      );
    }
    invokeOnInitCallbacks(e, t) {
      const n = this.onInitCallbacks.get(t);
      if (n)
        for (const i of n)
          try {
            i(e, t);
          } catch (r) {}
    }
    getOrInitializeService(e) {
      let { instanceIdentifier: t, options: n = {} } = e,
        r = this.instances.get(t);
      if (
        !r &&
        this.component &&
        ((r = this.component.instanceFactory(this.container, {
          instanceIdentifier: ((i = t), i === vr ? void 0 : i),
          options: n,
        })),
        this.instances.set(t, r),
        this.instancesOptions.set(t, n),
        this.invokeOnInitCallbacks(r, t),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, t, r);
        } catch (a) {}
      var i;
      return r || null;
    }
    normalizeInstanceIdentifier() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vr;
      return this.component ? (this.component.multipleInstances ? e : vr) : e;
    }
    shouldAutoInitialize() {
      return (
        !!this.component && "EXPLICIT" !== this.component.instantiationMode
      );
    }
  }
  class br {
    constructor(e) {
      (this.name = e), (this.providers = new Map());
    }
    addComponent(e) {
      const t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw new Error(
          "Component "
            .concat(e.name, " has already been registered with ")
            .concat(this.name)
        );
      t.setComponent(e);
    }
    addOrOverwriteComponent(e) {
      this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e);
    }
    getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e);
      const t = new yr(e, this);
      return this.providers.set(e, t), t;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  }
  const wr = [];
  var Sr;
  !(function (e) {
    (e[(e.DEBUG = 0)] = "DEBUG"),
      (e[(e.VERBOSE = 1)] = "VERBOSE"),
      (e[(e.INFO = 2)] = "INFO"),
      (e[(e.WARN = 3)] = "WARN"),
      (e[(e.ERROR = 4)] = "ERROR"),
      (e[(e.SILENT = 5)] = "SILENT");
  })(Sr || (Sr = {}));
  const kr = {
      debug: Sr.DEBUG,
      verbose: Sr.VERBOSE,
      info: Sr.INFO,
      warn: Sr.WARN,
      error: Sr.ERROR,
      silent: Sr.SILENT,
    },
    Er = Sr.INFO,
    _r = {
      [Sr.DEBUG]: "log",
      [Sr.VERBOSE]: "log",
      [Sr.INFO]: "info",
      [Sr.WARN]: "warn",
      [Sr.ERROR]: "error",
    },
    Cr = function (e, t) {
      if (t < e.logLevel) return;
      const n = new Date().toISOString(),
        r = _r[t];
      if (!r)
        throw new Error(
          "Attempted to log a message with an invalid logType (value: ".concat(
            t,
            ")"
          )
        );
      for (
        var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), o = 2;
        o < i;
        o++
      )
        a[o - 2] = arguments[o];
      console[r]("[".concat(n, "]  ").concat(e.name, ":"), ...a);
    };
  class Tr {
    constructor(e) {
      (this.name = e),
        (this._logLevel = Er),
        (this._logHandler = Cr),
        (this._userLogHandler = null),
        wr.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(e) {
      if (!(e in Sr))
        throw new TypeError(
          'Invalid value "'.concat(e, '" assigned to `logLevel`')
        );
      this._logLevel = e;
    }
    setLogLevel(e) {
      this._logLevel = "string" === typeof e ? kr[e] : e;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(e) {
      if ("function" !== typeof e)
        throw new TypeError(
          "Value assigned to `logHandler` must be a function"
        );
      this._logHandler = e;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(e) {
      this._userLogHandler = e;
    }
    debug() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Sr.DEBUG, ...t),
        this._logHandler(this, Sr.DEBUG, ...t);
    }
    log() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Sr.VERBOSE, ...t),
        this._logHandler(this, Sr.VERBOSE, ...t);
    }
    info() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Sr.INFO, ...t),
        this._logHandler(this, Sr.INFO, ...t);
    }
    warn() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Sr.WARN, ...t),
        this._logHandler(this, Sr.WARN, ...t);
    }
    error() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Sr.ERROR, ...t),
        this._logHandler(this, Sr.ERROR, ...t);
    }
  }
  const Ir = (e, t) => t.some((t) => e instanceof t);
  let xr, Rr;
  const Pr = new WeakMap(),
    Or = new WeakMap(),
    Nr = new WeakMap(),
    Ar = new WeakMap(),
    Lr = new WeakMap();
  let Dr = {
    get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if ("done" === t) return Or.get(e);
        if ("objectStoreNames" === t) return e.objectStoreNames || Nr.get(e);
        if ("store" === t)
          return n.objectStoreNames[1]
            ? void 0
            : n.objectStore(n.objectStoreNames[0]);
      }
      return Mr(e[t]);
    },
    set: (e, t, n) => ((e[t] = n), !0),
    has: (e, t) =>
      (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
      t in e,
  };
  function jr(e) {
    return e !== IDBDatabase.prototype.transaction ||
      "objectStoreNames" in IDBTransaction.prototype
      ? (
          Rr ||
          (Rr = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
          ])
        ).includes(e)
        ? function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return e.apply(Fr(this), n), Mr(Pr.get(this));
          }
        : function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return Mr(e.apply(Fr(this), n));
          }
      : function (t) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          const a = e.call(Fr(this), t, ...r);
          return Nr.set(a, t.sort ? t.sort() : [t]), Mr(a);
        };
  }
  function Ur(e) {
    return "function" === typeof e
      ? jr(e)
      : (e instanceof IDBTransaction &&
          (function (e) {
            if (Or.has(e)) return;
            const t = new Promise((t, n) => {
              const r = () => {
                  e.removeEventListener("complete", i),
                    e.removeEventListener("error", a),
                    e.removeEventListener("abort", a);
                },
                i = () => {
                  t(), r();
                },
                a = () => {
                  n(e.error || new DOMException("AbortError", "AbortError")),
                    r();
                };
              e.addEventListener("complete", i),
                e.addEventListener("error", a),
                e.addEventListener("abort", a);
            });
            Or.set(e, t);
          })(e),
        Ir(
          e,
          xr ||
            (xr = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
        )
          ? new Proxy(e, Dr)
          : e);
  }
  function Mr(e) {
    if (e instanceof IDBRequest)
      return (function (e) {
        const t = new Promise((t, n) => {
          const r = () => {
              e.removeEventListener("success", i),
                e.removeEventListener("error", a);
            },
            i = () => {
              t(Mr(e.result)), r();
            },
            a = () => {
              n(e.error), r();
            };
          e.addEventListener("success", i), e.addEventListener("error", a);
        });
        return (
          t
            .then((t) => {
              t instanceof IDBCursor && Pr.set(t, e);
            })
            .catch(() => {}),
          Lr.set(t, e),
          t
        );
      })(e);
    if (Ar.has(e)) return Ar.get(e);
    const t = Ur(e);
    return t !== e && (Ar.set(e, t), Lr.set(t, e)), t;
  }
  const Fr = (e) => Lr.get(e);
  const zr = ["get", "getKey", "getAll", "getAllKeys", "count"],
    Br = ["put", "add", "delete", "clear"],
    Vr = new Map();
  function Hr(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t) return;
    if (Vr.get(t)) return Vr.get(t);
    const n = t.replace(/FromIndex$/, ""),
      r = t !== n,
      i = Br.includes(n);
    if (
      !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
      (!i && !zr.includes(n))
    )
      return;
    const a = async function (e) {
      const t = this.transaction(e, i ? "readwrite" : "readonly");
      let a = t.store;
      for (
        var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1;
        l < o;
        l++
      )
        s[l - 1] = arguments[l];
      return (
        r && (a = a.index(s.shift())),
        (await Promise.all([a[n](...s), i && t.done]))[0]
      );
    };
    return Vr.set(t, a), a;
  }
  Dr = ((e) => ({
    ...e,
    get: (t, n, r) => Hr(t, n) || e.get(t, n, r),
    has: (t, n) => !!Hr(t, n) || e.has(t, n),
  }))(Dr);
  class Wr {
    constructor(e) {
      this.container = e;
    }
    getPlatformInfoString() {
      return this.container
        .getProviders()
        .map((e) => {
          if (
            (function (e) {
              const t = e.getComponent();
              return (
                "VERSION" === (null === t || void 0 === t ? void 0 : t.type)
              );
            })(e)
          ) {
            const t = e.getImmediate();
            return "".concat(t.library, "/").concat(t.version);
          }
          return null;
        })
        .filter((e) => e)
        .join(" ");
    }
  }
  const qr = "@firebase/app",
    Kr = "0.10.8",
    $r = new Tr("@firebase/app"),
    Gr = "@firebase/app-compat",
    Jr = "@firebase/analytics-compat",
    Qr = "@firebase/analytics",
    Xr = "@firebase/app-check-compat",
    Yr = "@firebase/app-check",
    Zr = "@firebase/auth",
    ei = "@firebase/auth-compat",
    ti = "@firebase/database",
    ni = "@firebase/database-compat",
    ri = "@firebase/functions",
    ii = "@firebase/functions-compat",
    ai = "@firebase/installations",
    oi = "@firebase/installations-compat",
    si = "@firebase/messaging",
    li = "@firebase/messaging-compat",
    ui = "@firebase/performance",
    ci = "@firebase/performance-compat",
    di = "@firebase/remote-config",
    fi = "@firebase/remote-config-compat",
    hi = "@firebase/storage",
    pi = "@firebase/storage-compat",
    mi = "@firebase/firestore",
    gi = "@firebase/vertexai-preview",
    vi = "@firebase/firestore-compat",
    yi = "firebase",
    bi = "[DEFAULT]",
    wi = {
      [qr]: "fire-core",
      [Gr]: "fire-core-compat",
      [Qr]: "fire-analytics",
      [Jr]: "fire-analytics-compat",
      [Yr]: "fire-app-check",
      [Xr]: "fire-app-check-compat",
      [Zr]: "fire-auth",
      [ei]: "fire-auth-compat",
      [ti]: "fire-rtdb",
      [ni]: "fire-rtdb-compat",
      [ri]: "fire-fn",
      [ii]: "fire-fn-compat",
      [ai]: "fire-iid",
      [oi]: "fire-iid-compat",
      [si]: "fire-fcm",
      [li]: "fire-fcm-compat",
      [ui]: "fire-perf",
      [ci]: "fire-perf-compat",
      [di]: "fire-rc",
      [fi]: "fire-rc-compat",
      [hi]: "fire-gcs",
      [pi]: "fire-gcs-compat",
      [mi]: "fire-fst",
      [vi]: "fire-fst-compat",
      [gi]: "fire-vertex",
      "fire-js": "fire-js",
      [yi]: "fire-js-all",
    },
    Si = new Map(),
    ki = new Map(),
    Ei = new Map();
  function _i(e, t) {
    try {
      e.container.addComponent(t);
    } catch (Pl) {
      $r.debug(
        "Component "
          .concat(t.name, " failed to register with FirebaseApp ")
          .concat(e.name),
        Pl
      );
    }
  }
  function Ci(e) {
    const t = e.name;
    if (Ei.has(t))
      return (
        $r.debug(
          "There were multiple attempts to register component ".concat(t, ".")
        ),
        !1
      );
    Ei.set(t, e);
    for (const n of Si.values()) _i(n, e);
    for (const n of ki.values()) _i(n, e);
    return !0;
  }
  function Ti(e, t) {
    const n = e.container
      .getProvider("heartbeat")
      .getImmediate({ optional: !0 });
    return n && n.triggerHeartbeat(), e.container.getProvider(t);
  }
  function Ii(e) {
    return void 0 !== e.settings;
  }
  const xi = new or("app", "Firebase", {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  });
  class Ri {
    constructor(e, t, n) {
      (this._isDeleted = !1),
        (this._options = Object.assign({}, e)),
        (this._config = Object.assign({}, t)),
        (this._name = t.name),
        (this._automaticDataCollectionEnabled =
          t.automaticDataCollectionEnabled),
        (this._container = n),
        this.container.addComponent(new gr("app", () => this, "PUBLIC"));
    }
    get automaticDataCollectionEnabled() {
      return this.checkDestroyed(), this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(e) {
      this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
    }
    get name() {
      return this.checkDestroyed(), this._name;
    }
    get options() {
      return this.checkDestroyed(), this._options;
    }
    get config() {
      return this.checkDestroyed(), this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(e) {
      this._isDeleted = e;
    }
    checkDestroyed() {
      if (this.isDeleted)
        throw xi.create("app-deleted", { appName: this._name });
    }
  }
  const Pi = "10.12.5";
  function Oi(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = e;
    if ("object" !== typeof t) {
      t = { name: t };
    }
    const r = Object.assign(
        { name: bi, automaticDataCollectionEnabled: !1 },
        t
      ),
      i = r.name;
    if ("string" !== typeof i || !i)
      throw xi.create("bad-app-name", { appName: String(i) });
    if ((n || (n = tr()), !n)) throw xi.create("no-options");
    const a = Si.get(i);
    if (a) {
      if (lr(n, a.options) && lr(r, a.config)) return a;
      throw xi.create("duplicate-app", { appName: i });
    }
    const o = new br(i);
    for (const l of Ei.values()) o.addComponent(l);
    const s = new Ri(n, r, o);
    return Si.set(i, s), s;
  }
  function Ni(e, t, n) {
    var r;
    let i = null !== (r = wi[e]) && void 0 !== r ? r : e;
    n && (i += "-".concat(n));
    const a = i.match(/\s|\//),
      o = t.match(/\s|\//);
    if (a || o) {
      const e = [
        'Unable to register library "'
          .concat(i, '" with version "')
          .concat(t, '":'),
      ];
      return (
        a &&
          e.push(
            'library name "'.concat(
              i,
              '" contains illegal characters (whitespace or "/")'
            )
          ),
        a && o && e.push("and"),
        o &&
          e.push(
            'version name "'.concat(
              t,
              '" contains illegal characters (whitespace or "/")'
            )
          ),
        void $r.warn(e.join(" "))
      );
    }
    Ci(
      new gr(
        "".concat(i, "-version"),
        () => ({ library: i, version: t }),
        "VERSION"
      )
    );
  }
  const Ai = "firebase-heartbeat-database",
    Li = 1,
    Di = "firebase-heartbeat-store";
  let ji = null;
  function Ui() {
    return (
      ji ||
        (ji = (function (e, t) {
          let {
            blocked: n,
            upgrade: r,
            blocking: i,
            terminated: a,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
          const o = indexedDB.open(e, t),
            s = Mr(o);
          return (
            r &&
              o.addEventListener("upgradeneeded", (e) => {
                r(
                  Mr(o.result),
                  e.oldVersion,
                  e.newVersion,
                  Mr(o.transaction),
                  e
                );
              }),
            n &&
              o.addEventListener("blocked", (e) =>
                n(e.oldVersion, e.newVersion, e)
              ),
            s
              .then((e) => {
                a && e.addEventListener("close", () => a()),
                  i &&
                    e.addEventListener("versionchange", (e) =>
                      i(e.oldVersion, e.newVersion, e)
                    );
              })
              .catch(() => {}),
            s
          );
        })(Ai, Li, {
          upgrade: (e, t) => {
            if (0 === t)
              try {
                e.createObjectStore(Di);
              } catch (Pl) {
                console.warn(Pl);
              }
          },
        }).catch((e) => {
          throw xi.create("idb-open", { originalErrorMessage: e.message });
        })),
      ji
    );
  }
  async function Mi(e, t) {
    try {
      const n = (await Ui()).transaction(Di, "readwrite"),
        r = n.objectStore(Di);
      await r.put(t, Fi(e)), await n.done;
    } catch (Pl) {
      if (Pl instanceof ar) $r.warn(Pl.message);
      else {
        const t = xi.create("idb-set", {
          originalErrorMessage:
            null === Pl || void 0 === Pl ? void 0 : Pl.message,
        });
        $r.warn(t.message);
      }
    }
  }
  function Fi(e) {
    return "".concat(e.name, "!").concat(e.options.appId);
  }
  class zi {
    constructor(e) {
      (this.container = e), (this._heartbeatsCache = null);
      const t = this.container.getProvider("app").getImmediate();
      (this._storage = new Vi(t)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((e) => ((this._heartbeatsCache = e), e)));
    }
    async triggerHeartbeat() {
      var e, t;
      const n = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        r = Bi();
      if (
        (null !=
          (null === (e = this._heartbeatsCache) || void 0 === e
            ? void 0
            : e.heartbeats) ||
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          null !=
            (null === (t = this._heartbeatsCache) || void 0 === t
              ? void 0
              : t.heartbeats))) &&
        this._heartbeatsCache.lastSentHeartbeatDate !== r &&
        !this._heartbeatsCache.heartbeats.some((e) => e.date === r)
      )
        return (
          this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((e) => {
              const t = new Date(e.date).valueOf();
              return Date.now() - t <= 2592e6;
            })),
          this._storage.overwrite(this._heartbeatsCache)
        );
    }
    async getHeartbeatsHeader() {
      var e;
      if (
        (null === this._heartbeatsCache && (await this._heartbeatsCachePromise),
        null ==
          (null === (e = this._heartbeatsCache) || void 0 === e
            ? void 0
            : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length)
      )
        return "";
      const t = Bi(),
        { heartbeatsToSend: n, unsentEntries: r } = (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1024;
          const n = [];
          let r = e.slice();
          for (const i of e) {
            const e = n.find((e) => e.agent === i.agent);
            if (e) {
              if ((e.dates.push(i.date), Hi(n) > t)) {
                e.dates.pop();
                break;
              }
            } else if (
              (n.push({ agent: i.agent, dates: [i.date] }), Hi(n) > t)
            ) {
              n.pop();
              break;
            }
            r = r.slice(1);
          }
          return { heartbeatsToSend: n, unsentEntries: r };
        })(this._heartbeatsCache.heartbeats),
        i = Qn(JSON.stringify({ version: 2, heartbeats: n }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = t),
        r.length > 0
          ? ((this._heartbeatsCache.heartbeats = r),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        i
      );
    }
  }
  function Bi() {
    return new Date().toISOString().substring(0, 10);
  }
  class Vi {
    constructor(e) {
      (this.app = e),
        (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
    }
    async runIndexedDBEnvironmentCheck() {
      return (
        !!(function () {
          try {
            return "object" === typeof indexedDB;
          } catch (Pl) {
            return !1;
          }
        })() &&
        new Promise((e, t) => {
          try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
              i = self.indexedDB.open(r);
            (i.onsuccess = () => {
              i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
            }),
              (i.onupgradeneeded = () => {
                n = !1;
              }),
              (i.onerror = () => {
                var e;
                t(
                  (null === (e = i.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (n) {
            t(n);
          }
        })
          .then(() => !0)
          .catch(() => !1)
      );
    }
    async read() {
      if (await this._canUseIndexedDBPromise) {
        const e = await (async function (e) {
          try {
            const t = (await Ui()).transaction(Di),
              n = await t.objectStore(Di).get(Fi(e));
            return await t.done, n;
          } catch (Pl) {
            if (Pl instanceof ar) $r.warn(Pl.message);
            else {
              const t = xi.create("idb-get", {
                originalErrorMessage:
                  null === Pl || void 0 === Pl ? void 0 : Pl.message,
              });
              $r.warn(t.message);
            }
          }
        })(this.app);
        return (null === e || void 0 === e ? void 0 : e.heartbeats)
          ? e
          : { heartbeats: [] };
      }
      return { heartbeats: [] };
    }
    async overwrite(e) {
      var t;
      if (await this._canUseIndexedDBPromise) {
        const n = await this.read();
        return Mi(this.app, {
          lastSentHeartbeatDate:
            null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
              ? t
              : n.lastSentHeartbeatDate,
          heartbeats: e.heartbeats,
        });
      }
    }
    async add(e) {
      var t;
      if (await this._canUseIndexedDBPromise) {
        const n = await this.read();
        return Mi(this.app, {
          lastSentHeartbeatDate:
            null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
              ? t
              : n.lastSentHeartbeatDate,
          heartbeats: [...n.heartbeats, ...e.heartbeats],
        });
      }
    }
  }
  function Hi(e) {
    return Qn(JSON.stringify({ version: 2, heartbeats: e })).length;
  }
  var Wi;
  (Wi = ""),
    Ci(new gr("platform-logger", (e) => new Wr(e), "PRIVATE")),
    Ci(new gr("heartbeat", (e) => new zi(e), "PRIVATE")),
    Ni(qr, Kr, Wi),
    Ni(qr, Kr, "esm2017"),
    Ni("fire-js", "");
  Ni("firebase", "10.12.5", "app");
  function qi(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
      var i = 0;
      for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    }
    return n;
  }
  Object.create;
  Object.create;
  "function" === typeof SuppressedError && SuppressedError;
  function Ki() {
    return {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    };
  }
  const $i = Ki,
    Gi = new or("auth", "Firebase", {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    }),
    Ji = new Tr("@firebase/auth");
  function Qi(e) {
    if (Ji.logLevel <= Sr.ERROR) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      Ji.error("Auth (".concat(Pi, "): ").concat(e), ...n);
    }
  }
  function Xi(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    throw na(e, ...n);
  }
  function Yi(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return na(e, ...n);
  }
  function Zi(e, t, n) {
    const r = Object.assign(Object.assign({}, $i()), { [t]: n });
    return new or("auth", "Firebase", r).create(t, { appName: e.name });
  }
  function ea(e) {
    return Zi(
      e,
      "operation-not-supported-in-this-environment",
      "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
    );
  }
  function ta(e, t, n) {
    if (!(t instanceof n))
      throw (
        (n.name !== t.constructor.name && Xi(e, "argument-error"),
        Zi(
          e,
          "argument-error",
          "Type of ".concat(
            t.constructor.name,
            " does not match expected instance."
          ) + "Did you pass a reference from a different Auth SDK?"
        ))
      );
  }
  function na(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    if ("string" !== typeof e) {
      const t = n[0],
        r = [...n.slice(1)];
      return r[0] && (r[0].appName = e.name), e._errorFactory.create(t, ...r);
    }
    return Gi.create(e, ...n);
  }
  function ra(e, t) {
    if (!e) {
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
        i < n;
        i++
      )
        r[i - 2] = arguments[i];
      throw na(t, ...r);
    }
  }
  function ia(e) {
    const t = "INTERNAL ASSERTION FAILED: " + e;
    throw (Qi(t), new Error(t));
  }
  function aa(e, t) {
    e || ia(t);
  }
  function oa() {
    var e;
    return (
      ("undefined" !== typeof self &&
        (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
      ""
    );
  }
  function sa() {
    return "http:" === la() || "https:" === la();
  }
  function la() {
    var e;
    return (
      ("undefined" !== typeof self &&
        (null === (e = self.location) || void 0 === e ? void 0 : e.protocol)) ||
      null
    );
  }
  function ua() {
    return (
      !(
        "undefined" !== typeof navigator &&
        navigator &&
        "onLine" in navigator &&
        "boolean" === typeof navigator.onLine &&
        (sa() ||
          (function () {
            const e =
              "object" === typeof chrome
                ? chrome.runtime
                : "object" === typeof browser
                ? browser.runtime
                : void 0;
            return "object" === typeof e && void 0 !== e.id;
          })() ||
          "connection" in navigator)
      ) || navigator.onLine
    );
  }
  class ca {
    constructor(e, t) {
      (this.shortDelay = e),
        (this.longDelay = t),
        aa(t > e, "Short delay should be less than long delay!"),
        (this.isMobile =
          ("undefined" !== typeof window &&
            !!(window.cordova || window.phonegap || window.PhoneGap) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ir())) ||
          ("object" === typeof navigator &&
            "ReactNative" === navigator.product));
    }
    get() {
      return ua()
        ? this.isMobile
          ? this.longDelay
          : this.shortDelay
        : Math.min(5e3, this.shortDelay);
    }
  }
  function da(e, t) {
    aa(e.emulator, "Emulator should always be set here");
    const { url: n } = e.emulator;
    return t ? "".concat(n).concat(t.startsWith("/") ? t.slice(1) : t) : n;
  }
  class fa {
    static initialize(e, t, n) {
      (this.fetchImpl = e),
        t && (this.headersImpl = t),
        n && (this.responseImpl = n);
    }
    static fetch() {
      return this.fetchImpl
        ? this.fetchImpl
        : "undefined" !== typeof self && "fetch" in self
        ? self.fetch
        : "undefined" !== typeof globalThis && globalThis.fetch
        ? globalThis.fetch
        : "undefined" !== typeof fetch
        ? fetch
        : void ia(
            "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
    static headers() {
      return this.headersImpl
        ? this.headersImpl
        : "undefined" !== typeof self && "Headers" in self
        ? self.Headers
        : "undefined" !== typeof globalThis && globalThis.Headers
        ? globalThis.Headers
        : "undefined" !== typeof Headers
        ? Headers
        : void ia(
            "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
    static response() {
      return this.responseImpl
        ? this.responseImpl
        : "undefined" !== typeof self && "Response" in self
        ? self.Response
        : "undefined" !== typeof globalThis && globalThis.Response
        ? globalThis.Response
        : "undefined" !== typeof Response
        ? Response
        : void ia(
            "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
  }
  const ha = {
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_PASSWORD: "wrong-password",
      MISSING_PASSWORD: "missing-password",
      INVALID_LOGIN_CREDENTIALS: "invalid-credential",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_REQ_TYPE: "internal-error",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      PASSWORD_DOES_NOT_MEET_REQUIREMENTS:
        "password-does-not-meet-requirements",
      INVALID_CODE: "invalid-verification-code",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_SESSION_INFO: "missing-verification-id",
      SESSION_EXPIRED: "code-expired",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
      RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
      MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
      INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
      INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
      MISSING_CLIENT_TYPE: "missing-client-type",
      MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
      INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
      INVALID_REQ_TYPE: "invalid-req-type",
    },
    pa = new ca(3e4, 6e4);
  function ma(e, t) {
    return e.tenantId && !t.tenantId
      ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
      : t;
  }
  async function ga(e, t, n, r) {
    return va(
      e,
      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
      async () => {
        let i = {},
          a = {};
        r && ("GET" === t ? (a = r) : (i = { body: JSON.stringify(r) }));
        const o = cr(Object.assign({ key: e.config.apiKey }, a)).slice(1),
          s = await e._getAdditionalHeaders();
        return (
          (s["Content-Type"] = "application/json"),
          e.languageCode && (s["X-Firebase-Locale"] = e.languageCode),
          fa.fetch()(
            ba(e, e.config.apiHost, n, o),
            Object.assign(
              { method: t, headers: s, referrerPolicy: "no-referrer" },
              i
            )
          )
        );
      }
    );
  }
  async function va(e, t, n) {
    e._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, ha), t);
    try {
      const t = new Sa(e),
        i = await Promise.race([n(), t.promise]);
      t.clearNetworkTimeout();
      const a = await i.json();
      if ("needConfirmation" in a)
        throw ka(e, "account-exists-with-different-credential", a);
      if (i.ok && !("errorMessage" in a)) return a;
      {
        const t = i.ok ? a.errorMessage : a.error.message,
          [n, o] = t.split(" : ");
        if ("FEDERATED_USER_ID_ALREADY_LINKED" === n)
          throw ka(e, "credential-already-in-use", a);
        if ("EMAIL_EXISTS" === n) throw ka(e, "email-already-in-use", a);
        if ("USER_DISABLED" === n) throw ka(e, "user-disabled", a);
        const s = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
        if (o) throw Zi(e, s, o);
        Xi(e, s);
      }
    } catch (Pl) {
      if (Pl instanceof ar) throw Pl;
      Xi(e, "network-request-failed", { message: String(Pl) });
    }
  }
  async function ya(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    const a = await ga(e, t, n, r, i);
    return (
      "mfaPendingCredential" in a &&
        Xi(e, "multi-factor-auth-required", { _serverResponse: a }),
      a
    );
  }
  function ba(e, t, n, r) {
    const i = "".concat(t).concat(n, "?").concat(r);
    return e.config.emulator
      ? da(e.config, i)
      : "".concat(e.config.apiScheme, "://").concat(i);
  }
  function wa(e) {
    switch (e) {
      case "ENFORCE":
        return "ENFORCE";
      case "AUDIT":
        return "AUDIT";
      case "OFF":
        return "OFF";
      default:
        return "ENFORCEMENT_STATE_UNSPECIFIED";
    }
  }
  class Sa {
    constructor(e) {
      (this.auth = e),
        (this.timer = null),
        (this.promise = new Promise((e, t) => {
          this.timer = setTimeout(
            () => t(Yi(this.auth, "network-request-failed")),
            pa.get()
          );
        }));
    }
    clearNetworkTimeout() {
      clearTimeout(this.timer);
    }
  }
  function ka(e, t, n) {
    const r = { appName: e.name };
    n.email && (r.email = n.email),
      n.phoneNumber && (r.phoneNumber = n.phoneNumber);
    const i = Yi(e, t, r);
    return (i.customData._tokenResponse = n), i;
  }
  function Ea(e) {
    return void 0 !== e && void 0 !== e.enterprise;
  }
  class _a {
    constructor(e) {
      if (
        ((this.siteKey = ""),
        (this.recaptchaEnforcementState = []),
        void 0 === e.recaptchaKey)
      )
        throw new Error("recaptchaKey undefined");
      (this.siteKey = e.recaptchaKey.split("/")[3]),
        (this.recaptchaEnforcementState = e.recaptchaEnforcementState);
    }
    getProviderEnforcementState(e) {
      if (
        !this.recaptchaEnforcementState ||
        0 === this.recaptchaEnforcementState.length
      )
        return null;
      for (const t of this.recaptchaEnforcementState)
        if (t.provider && t.provider === e) return wa(t.enforcementState);
      return null;
    }
    isProviderEnabled(e) {
      return (
        "ENFORCE" === this.getProviderEnforcementState(e) ||
        "AUDIT" === this.getProviderEnforcementState(e)
      );
    }
  }
  async function Ca(e, t) {
    return ga(e, "GET", "/v2/recaptchaConfig", ma(e, t));
  }
  async function Ta(e, t) {
    return ga(e, "POST", "/v1/accounts:lookup", t);
  }
  function Ia(e) {
    if (e)
      try {
        const t = new Date(Number(e));
        if (!isNaN(t.getTime())) return t.toUTCString();
      } catch (Pl) {}
  }
  function xa(e) {
    return 1e3 * Number(e);
  }
  function Ra(e) {
    const [t, n, r] = e.split(".");
    if (void 0 === t || void 0 === n || void 0 === r)
      return Qi("JWT malformed, contained fewer than 3 sections"), null;
    try {
      const e = Xn(n);
      return e
        ? JSON.parse(e)
        : (Qi("Failed to decode base64 JWT payload"), null);
    } catch (Pl) {
      return (
        Qi(
          "Caught error parsing JWT payload as JSON",
          null === Pl || void 0 === Pl ? void 0 : Pl.toString()
        ),
        null
      );
    }
  }
  function Pa(e) {
    const t = Ra(e);
    return (
      ra(t, "internal-error"),
      ra("undefined" !== typeof t.exp, "internal-error"),
      ra("undefined" !== typeof t.iat, "internal-error"),
      Number(t.exp) - Number(t.iat)
    );
  }
  async function Oa(e, t) {
    if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
      return t;
    try {
      return await t;
    } catch (Pl) {
      throw (
        (Pl instanceof ar &&
          (function (e) {
            let { code: t } = e;
            return (
              t === "auth/".concat("user-disabled") ||
              t === "auth/".concat("user-token-expired")
            );
          })(Pl) &&
          e.auth.currentUser === e &&
          (await e.auth.signOut()),
        Pl)
      );
    }
  }
  class Na {
    constructor(e) {
      (this.user = e),
        (this.isRunning = !1),
        (this.timerId = null),
        (this.errorBackoff = 3e4);
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule());
    }
    _stop() {
      this.isRunning &&
        ((this.isRunning = !1),
        null !== this.timerId && clearTimeout(this.timerId));
    }
    getInterval(e) {
      var t;
      if (e) {
        const e = this.errorBackoff;
        return (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), e;
      }
      {
        this.errorBackoff = 3e4;
        const e =
          (null !== (t = this.user.stsTokenManager.expirationTime) &&
          void 0 !== t
            ? t
            : 0) -
          Date.now() -
          3e5;
        return Math.max(0, e);
      }
    }
    schedule() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!this.isRunning) return;
      const t = this.getInterval(e);
      this.timerId = setTimeout(async () => {
        await this.iteration();
      }, t);
    }
    async iteration() {
      try {
        await this.user.getIdToken(!0);
      } catch (Pl) {
        return void (
          (null === Pl || void 0 === Pl ? void 0 : Pl.code) ===
            "auth/".concat("network-request-failed") && this.schedule(!0)
        );
      }
      this.schedule();
    }
  }
  class Aa {
    constructor(e, t) {
      (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
    }
    _initializeTime() {
      (this.lastSignInTime = Ia(this.lastLoginAt)),
        (this.creationTime = Ia(this.createdAt));
    }
    _copy(e) {
      (this.createdAt = e.createdAt),
        (this.lastLoginAt = e.lastLoginAt),
        this._initializeTime();
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
    }
  }
  async function La(e) {
    var t;
    const n = e.auth,
      r = await e.getIdToken(),
      i = await Oa(e, Ta(n, { idToken: r }));
    ra(
      null === i || void 0 === i ? void 0 : i.users.length,
      n,
      "internal-error"
    );
    const a = i.users[0];
    e._notifyReloadListener(a);
    const o = (
        null === (t = a.providerUserInfo) || void 0 === t ? void 0 : t.length
      )
        ? Da(a.providerUserInfo)
        : [],
      s =
        ((l = e.providerData),
        (u = o),
        [
          ...l.filter((e) => !u.some((t) => t.providerId === e.providerId)),
          ...u,
        ]);
    var l, u;
    const c = e.isAnonymous,
      d =
        !(e.email && a.passwordHash) &&
        !(null === s || void 0 === s ? void 0 : s.length),
      f = !!c && d,
      h = {
        uid: a.localId,
        displayName: a.displayName || null,
        photoURL: a.photoUrl || null,
        email: a.email || null,
        emailVerified: a.emailVerified || !1,
        phoneNumber: a.phoneNumber || null,
        tenantId: a.tenantId || null,
        providerData: s,
        metadata: new Aa(a.createdAt, a.lastLoginAt),
        isAnonymous: f,
      };
    Object.assign(e, h);
  }
  function Da(e) {
    return e.map((e) => {
      var { providerId: t } = e,
        n = qi(e, ["providerId"]);
      return {
        providerId: t,
        uid: n.rawId || "",
        displayName: n.displayName || null,
        email: n.email || null,
        phoneNumber: n.phoneNumber || null,
        photoURL: n.photoUrl || null,
      };
    });
  }
  class ja {
    constructor() {
      (this.refreshToken = null),
        (this.accessToken = null),
        (this.expirationTime = null);
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
    }
    updateFromServerResponse(e) {
      ra(e.idToken, "internal-error"),
        ra("undefined" !== typeof e.idToken, "internal-error"),
        ra("undefined" !== typeof e.refreshToken, "internal-error");
      const t =
        "expiresIn" in e && "undefined" !== typeof e.expiresIn
          ? Number(e.expiresIn)
          : Pa(e.idToken);
      this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
    }
    updateFromIdToken(e) {
      ra(0 !== e.length, "internal-error");
      const t = Pa(e);
      this.updateTokensAndExpiration(e, null, t);
    }
    async getToken(e) {
      return (arguments.length > 1 &&
        void 0 !== arguments[1] &&
        arguments[1]) ||
        !this.accessToken ||
        this.isExpired
        ? (ra(this.refreshToken, e, "user-token-expired"),
          this.refreshToken
            ? (await this.refresh(e, this.refreshToken), this.accessToken)
            : null)
        : this.accessToken;
    }
    clearRefreshToken() {
      this.refreshToken = null;
    }
    async refresh(e, t) {
      const {
        accessToken: n,
        refreshToken: r,
        expiresIn: i,
      } = await (async function (e, t) {
        const n = await va(e, {}, async () => {
          const n = cr({ grant_type: "refresh_token", refresh_token: t }).slice(
              1
            ),
            { tokenApiHost: r, apiKey: i } = e.config,
            a = ba(e, r, "/v1/token", "key=".concat(i)),
            o = await e._getAdditionalHeaders();
          return (
            (o["Content-Type"] = "application/x-www-form-urlencoded"),
            fa.fetch()(a, { method: "POST", headers: o, body: n })
          );
        });
        return {
          accessToken: n.access_token,
          expiresIn: n.expires_in,
          refreshToken: n.refresh_token,
        };
      })(e, t);
      this.updateTokensAndExpiration(n, r, Number(i));
    }
    updateTokensAndExpiration(e, t, n) {
      (this.refreshToken = t || null),
        (this.accessToken = e || null),
        (this.expirationTime = Date.now() + 1e3 * n);
    }
    static fromJSON(e, t) {
      const { refreshToken: n, accessToken: r, expirationTime: i } = t,
        a = new ja();
      return (
        n &&
          (ra("string" === typeof n, "internal-error", { appName: e }),
          (a.refreshToken = n)),
        r &&
          (ra("string" === typeof r, "internal-error", { appName: e }),
          (a.accessToken = r)),
        i &&
          (ra("number" === typeof i, "internal-error", { appName: e }),
          (a.expirationTime = i)),
        a
      );
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime,
      };
    }
    _assign(e) {
      (this.accessToken = e.accessToken),
        (this.refreshToken = e.refreshToken),
        (this.expirationTime = e.expirationTime);
    }
    _clone() {
      return Object.assign(new ja(), this.toJSON());
    }
    _performRefresh() {
      return ia("not implemented");
    }
  }
  function Ua(e, t) {
    ra("string" === typeof e || "undefined" === typeof e, "internal-error", {
      appName: t,
    });
  }
  class Ma {
    constructor(e) {
      var { uid: t, auth: n, stsTokenManager: r } = e,
        i = qi(e, ["uid", "auth", "stsTokenManager"]);
      (this.providerId = "firebase"),
        (this.proactiveRefresh = new Na(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = t),
        (this.auth = n),
        (this.stsTokenManager = r),
        (this.accessToken = r.accessToken),
        (this.displayName = i.displayName || null),
        (this.email = i.email || null),
        (this.emailVerified = i.emailVerified || !1),
        (this.phoneNumber = i.phoneNumber || null),
        (this.photoURL = i.photoURL || null),
        (this.isAnonymous = i.isAnonymous || !1),
        (this.tenantId = i.tenantId || null),
        (this.providerData = i.providerData ? [...i.providerData] : []),
        (this.metadata = new Aa(
          i.createdAt || void 0,
          i.lastLoginAt || void 0
        ));
    }
    async getIdToken(e) {
      const t = await Oa(this, this.stsTokenManager.getToken(this.auth, e));
      return (
        ra(t, this.auth, "internal-error"),
        this.accessToken !== t &&
          ((this.accessToken = t),
          await this.auth._persistUserIfCurrent(this),
          this.auth._notifyListenersIfCurrent(this)),
        t
      );
    }
    getIdTokenResult(e) {
      return (async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = mr(e),
          r = await n.getIdToken(t),
          i = Ra(r);
        ra(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
        const a = "object" === typeof i.firebase ? i.firebase : void 0,
          o = null === a || void 0 === a ? void 0 : a.sign_in_provider;
        return {
          claims: i,
          token: r,
          authTime: Ia(xa(i.auth_time)),
          issuedAtTime: Ia(xa(i.iat)),
          expirationTime: Ia(xa(i.exp)),
          signInProvider: o || null,
          signInSecondFactor:
            (null === a || void 0 === a ? void 0 : a.sign_in_second_factor) ||
            null,
        };
      })(this, e);
    }
    reload() {
      return (async function (e) {
        const t = mr(e);
        await La(t),
          await t.auth._persistUserIfCurrent(t),
          t.auth._notifyListenersIfCurrent(t);
      })(this);
    }
    _assign(e) {
      this !== e &&
        (ra(this.uid === e.uid, this.auth, "internal-error"),
        (this.displayName = e.displayName),
        (this.photoURL = e.photoURL),
        (this.email = e.email),
        (this.emailVerified = e.emailVerified),
        (this.phoneNumber = e.phoneNumber),
        (this.isAnonymous = e.isAnonymous),
        (this.tenantId = e.tenantId),
        (this.providerData = e.providerData.map((e) => Object.assign({}, e))),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager));
    }
    _clone(e) {
      const t = new Ma(
        Object.assign(Object.assign({}, this), {
          auth: e,
          stsTokenManager: this.stsTokenManager._clone(),
        })
      );
      return t.metadata._copy(this.metadata), t;
    }
    _onReload(e) {
      ra(!this.reloadListener, this.auth, "internal-error"),
        (this.reloadListener = e),
        this.reloadUserInfo &&
          (this._notifyReloadListener(this.reloadUserInfo),
          (this.reloadUserInfo = null));
    }
    _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
      e.idToken &&
        e.idToken !== this.stsTokenManager.accessToken &&
        (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
        t && (await La(this)),
        await this.auth._persistUserIfCurrent(this),
        n && this.auth._notifyListenersIfCurrent(this);
    }
    async delete() {
      if (Ii(this.auth.app)) return Promise.reject(ea(this.auth));
      const e = await this.getIdToken();
      return (
        await Oa(
          this,
          (async function (e, t) {
            return ga(e, "POST", "/v1/accounts:delete", t);
          })(this.auth, { idToken: e })
        ),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
      );
    }
    toJSON() {
      return Object.assign(
        Object.assign(
          {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((e) => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
          },
          this.metadata.toJSON()
        ),
        { apiKey: this.auth.config.apiKey, appName: this.auth.name }
      );
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || "";
    }
    static _fromJSON(e, t) {
      var n, r, i, a, o, s, l, u;
      const c = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
        d = null !== (r = t.email) && void 0 !== r ? r : void 0,
        f = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0,
        h = null !== (a = t.photoURL) && void 0 !== a ? a : void 0,
        p = null !== (o = t.tenantId) && void 0 !== o ? o : void 0,
        m = null !== (s = t._redirectEventId) && void 0 !== s ? s : void 0,
        g = null !== (l = t.createdAt) && void 0 !== l ? l : void 0,
        v = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0,
        {
          uid: y,
          emailVerified: b,
          isAnonymous: w,
          providerData: S,
          stsTokenManager: k,
        } = t;
      ra(y && k, e, "internal-error");
      const E = ja.fromJSON(this.name, k);
      ra("string" === typeof y, e, "internal-error"),
        Ua(c, e.name),
        Ua(d, e.name),
        ra("boolean" === typeof b, e, "internal-error"),
        ra("boolean" === typeof w, e, "internal-error"),
        Ua(f, e.name),
        Ua(h, e.name),
        Ua(p, e.name),
        Ua(m, e.name),
        Ua(g, e.name),
        Ua(v, e.name);
      const _ = new Ma({
        uid: y,
        auth: e,
        email: d,
        emailVerified: b,
        displayName: c,
        isAnonymous: w,
        photoURL: h,
        phoneNumber: f,
        tenantId: p,
        stsTokenManager: E,
        createdAt: g,
        lastLoginAt: v,
      });
      return (
        S &&
          Array.isArray(S) &&
          (_.providerData = S.map((e) => Object.assign({}, e))),
        m && (_._redirectEventId = m),
        _
      );
    }
    static async _fromIdTokenResponse(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const r = new ja();
      r.updateFromServerResponse(t);
      const i = new Ma({
        uid: t.localId,
        auth: e,
        stsTokenManager: r,
        isAnonymous: n,
      });
      return await La(i), i;
    }
    static async _fromGetAccountInfoResponse(e, t, n) {
      const r = t.users[0];
      ra(void 0 !== r.localId, "internal-error");
      const i = void 0 !== r.providerUserInfo ? Da(r.providerUserInfo) : [],
        a =
          !(r.email && r.passwordHash) &&
          !(null === i || void 0 === i ? void 0 : i.length),
        o = new ja();
      o.updateFromIdToken(n);
      const s = new Ma({
          uid: r.localId,
          auth: e,
          stsTokenManager: o,
          isAnonymous: a,
        }),
        l = {
          uid: r.localId,
          displayName: r.displayName || null,
          photoURL: r.photoUrl || null,
          email: r.email || null,
          emailVerified: r.emailVerified || !1,
          phoneNumber: r.phoneNumber || null,
          tenantId: r.tenantId || null,
          providerData: i,
          metadata: new Aa(r.createdAt, r.lastLoginAt),
          isAnonymous:
            !(r.email && r.passwordHash) &&
            !(null === i || void 0 === i ? void 0 : i.length),
        };
      return Object.assign(s, l), s;
    }
  }
  const Fa = new Map();
  function za(e) {
    aa(e instanceof Function, "Expected a class definition");
    let t = Fa.get(e);
    return t
      ? (aa(t instanceof e, "Instance stored in cache mismatched with class"),
        t)
      : ((t = new e()), Fa.set(e, t), t);
  }
  class Ba {
    constructor() {
      (this.type = "NONE"), (this.storage = {});
    }
    async _isAvailable() {
      return !0;
    }
    async _set(e, t) {
      this.storage[e] = t;
    }
    async _get(e) {
      const t = this.storage[e];
      return void 0 === t ? null : t;
    }
    async _remove(e) {
      delete this.storage[e];
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  Ba.type = "NONE";
  const Va = Ba;
  function Ha(e, t, n) {
    return "firebase".concat(":", e, ":").concat(t, ":").concat(n);
  }
  class Wa {
    constructor(e, t, n) {
      (this.persistence = e), (this.auth = t), (this.userKey = n);
      const { config: r, name: i } = this.auth;
      (this.fullUserKey = Ha(this.userKey, r.apiKey, i)),
        (this.fullPersistenceKey = Ha("persistence", r.apiKey, i)),
        (this.boundEventHandler = t._onStorageEvent.bind(t)),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(e) {
      return this.persistence._set(this.fullUserKey, e.toJSON());
    }
    async getCurrentUser() {
      const e = await this.persistence._get(this.fullUserKey);
      return e ? Ma._fromJSON(this.auth, e) : null;
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
      return this.persistence._set(
        this.fullPersistenceKey,
        this.persistence.type
      );
    }
    async setPersistence(e) {
      if (this.persistence === e) return;
      const t = await this.getCurrentUser();
      return (
        await this.removeCurrentUser(),
        (this.persistence = e),
        t ? this.setCurrentUser(t) : void 0
      );
    }
    delete() {
      this.persistence._removeListener(
        this.fullUserKey,
        this.boundEventHandler
      );
    }
    static async create(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "authUser";
      if (!t.length) return new Wa(za(Va), e, n);
      const r = (
        await Promise.all(
          t.map(async (e) => {
            if (await e._isAvailable()) return e;
          })
        )
      ).filter((e) => e);
      let i = r[0] || za(Va);
      const a = Ha(n, e.config.apiKey, e.name);
      let o = null;
      for (const u of t)
        try {
          const t = await u._get(a);
          if (t) {
            const n = Ma._fromJSON(e, t);
            u !== i && (o = n), (i = u);
            break;
          }
        } catch (l) {}
      const s = r.filter((e) => e._shouldAllowMigration);
      return i._shouldAllowMigration && s.length
        ? ((i = s[0]),
          o && (await i._set(a, o.toJSON())),
          await Promise.all(
            t.map(async (e) => {
              if (e !== i)
                try {
                  await e._remove(a);
                } catch (l) {}
            })
          ),
          new Wa(i, e, n))
        : new Wa(i, e, n);
    }
  }
  function qa(e) {
    const t = e.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
      return "Opera";
    if (Ja(t)) return "IEMobile";
    if (t.includes("msie") || t.includes("trident/")) return "IE";
    if (t.includes("edge/")) return "Edge";
    if (Ka(t)) return "Firefox";
    if (t.includes("silk/")) return "Silk";
    if (Xa(t)) return "Blackberry";
    if (Ya(t)) return "Webos";
    if ($a(t)) return "Safari";
    if ((t.includes("chrome/") || Ga(t)) && !t.includes("edge/"))
      return "Chrome";
    if (Qa(t)) return "Android";
    {
      const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
        n = e.match(t);
      if (2 === (null === n || void 0 === n ? void 0 : n.length)) return n[1];
    }
    return "Other";
  }
  function Ka() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir();
    return /firefox\//i.test(e);
  }
  function $a() {
    const e = (
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir()
    ).toLowerCase();
    return (
      e.includes("safari/") &&
      !e.includes("chrome/") &&
      !e.includes("crios/") &&
      !e.includes("android")
    );
  }
  function Ga() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir();
    return /crios\//i.test(e);
  }
  function Ja() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir();
    return /iemobile/i.test(e);
  }
  function Qa() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir();
    return /android/i.test(e);
  }
  function Xa() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir();
    return /blackberry/i.test(e);
  }
  function Ya() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir();
    return /webos/i.test(e);
  }
  function Za() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir();
    return (
      /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
    );
  }
  function eo() {
    return (
      (function () {
        const e = ir();
        return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
      })() && 10 === document.documentMode
    );
  }
  function to() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir();
    return (
      Za(e) || Qa(e) || Ya(e) || Xa(e) || /windows phone/i.test(e) || Ja(e)
    );
  }
  function no(e) {
    let t,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    switch (e) {
      case "Browser":
        t = qa(ir());
        break;
      case "Worker":
        t = "".concat(qa(ir()), "-").concat(e);
        break;
      default:
        t = e;
    }
    const r = n.length ? n.join(",") : "FirebaseCore-web";
    return "".concat(t, "/", "JsCore", "/").concat(Pi, "/").concat(r);
  }
  class ro {
    constructor(e) {
      (this.auth = e), (this.queue = []);
    }
    pushCallback(e, t) {
      const n = (t) =>
        new Promise((n, r) => {
          try {
            n(e(t));
          } catch (Pl) {
            r(Pl);
          }
        });
      (n.onAbort = t), this.queue.push(n);
      const r = this.queue.length - 1;
      return () => {
        this.queue[r] = () => Promise.resolve();
      };
    }
    async runMiddleware(e) {
      if (this.auth.currentUser === e) return;
      const t = [];
      try {
        for (const n of this.queue) await n(e), n.onAbort && t.push(n.onAbort);
      } catch (Pl) {
        t.reverse();
        for (const r of t)
          try {
            r();
          } catch (n) {}
        throw this.auth._errorFactory.create("login-blocked", {
          originalMessage: null === Pl || void 0 === Pl ? void 0 : Pl.message,
        });
      }
    }
  }
  class io {
    constructor(e) {
      var t, n, r, i;
      const a = e.customStrengthOptions;
      (this.customStrengthOptions = {}),
        (this.customStrengthOptions.minPasswordLength =
          null !== (t = a.minPasswordLength) && void 0 !== t ? t : 6),
        a.maxPasswordLength &&
          (this.customStrengthOptions.maxPasswordLength = a.maxPasswordLength),
        void 0 !== a.containsLowercaseCharacter &&
          (this.customStrengthOptions.containsLowercaseLetter =
            a.containsLowercaseCharacter),
        void 0 !== a.containsUppercaseCharacter &&
          (this.customStrengthOptions.containsUppercaseLetter =
            a.containsUppercaseCharacter),
        void 0 !== a.containsNumericCharacter &&
          (this.customStrengthOptions.containsNumericCharacter =
            a.containsNumericCharacter),
        void 0 !== a.containsNonAlphanumericCharacter &&
          (this.customStrengthOptions.containsNonAlphanumericCharacter =
            a.containsNonAlphanumericCharacter),
        (this.enforcementState = e.enforcementState),
        "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState &&
          (this.enforcementState = "OFF"),
        (this.allowedNonAlphanumericCharacters =
          null !==
            (r =
              null === (n = e.allowedNonAlphanumericCharacters) || void 0 === n
                ? void 0
                : n.join("")) && void 0 !== r
            ? r
            : ""),
        (this.forceUpgradeOnSignin =
          null !== (i = e.forceUpgradeOnSignin) && void 0 !== i && i),
        (this.schemaVersion = e.schemaVersion);
    }
    validatePassword(e) {
      var t, n, r, i, a, o;
      const s = { isValid: !0, passwordPolicy: this };
      return (
        this.validatePasswordLengthOptions(e, s),
        this.validatePasswordCharacterOptions(e, s),
        s.isValid &&
          (s.isValid =
            null === (t = s.meetsMinPasswordLength) || void 0 === t || t),
        s.isValid &&
          (s.isValid =
            null === (n = s.meetsMaxPasswordLength) || void 0 === n || n),
        s.isValid &&
          (s.isValid =
            null === (r = s.containsLowercaseLetter) || void 0 === r || r),
        s.isValid &&
          (s.isValid =
            null === (i = s.containsUppercaseLetter) || void 0 === i || i),
        s.isValid &&
          (s.isValid =
            null === (a = s.containsNumericCharacter) || void 0 === a || a),
        s.isValid &&
          (s.isValid =
            null === (o = s.containsNonAlphanumericCharacter) ||
            void 0 === o ||
            o),
        s
      );
    }
    validatePasswordLengthOptions(e, t) {
      const n = this.customStrengthOptions.minPasswordLength,
        r = this.customStrengthOptions.maxPasswordLength;
      n && (t.meetsMinPasswordLength = e.length >= n),
        r && (t.meetsMaxPasswordLength = e.length <= r);
    }
    validatePasswordCharacterOptions(e, t) {
      let n;
      this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
      for (let r = 0; r < e.length; r++)
        (n = e.charAt(r)),
          this.updatePasswordCharacterOptionsStatuses(
            t,
            n >= "a" && n <= "z",
            n >= "A" && n <= "Z",
            n >= "0" && n <= "9",
            this.allowedNonAlphanumericCharacters.includes(n)
          );
    }
    updatePasswordCharacterOptionsStatuses(e, t, n, r, i) {
      this.customStrengthOptions.containsLowercaseLetter &&
        (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
        this.customStrengthOptions.containsUppercaseLetter &&
          (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)),
        this.customStrengthOptions.containsNumericCharacter &&
          (e.containsNumericCharacter || (e.containsNumericCharacter = r)),
        this.customStrengthOptions.containsNonAlphanumericCharacter &&
          (e.containsNonAlphanumericCharacter ||
            (e.containsNonAlphanumericCharacter = i));
    }
  }
  class ao {
    constructor(e, t, n, r) {
      (this.app = e),
        (this.heartbeatServiceProvider = t),
        (this.appCheckServiceProvider = n),
        (this.config = r),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new so(this)),
        (this.idTokenSubscription = new so(this)),
        (this.beforeStateQueue = new ro(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = Gi),
        (this._agentRecaptchaConfig = null),
        (this._tenantRecaptchaConfigs = {}),
        (this._projectPasswordPolicy = null),
        (this._tenantPasswordPolicies = {}),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = e.name),
        (this.clientVersion = r.sdkClientVersion);
    }
    _initializeWithPersistence(e, t) {
      return (
        t && (this._popupRedirectResolver = za(t)),
        (this._initializationPromise = this.queue(async () => {
          var n, r;
          if (
            !this._deleted &&
            ((this.persistenceManager = await Wa.create(this, e)),
            !this._deleted)
          ) {
            if (
              null === (n = this._popupRedirectResolver) || void 0 === n
                ? void 0
                : n._shouldInitProactively
            )
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch (Pl) {}
            await this.initializeCurrentUser(t),
              (this.lastNotifiedUid =
                (null === (r = this.currentUser) || void 0 === r
                  ? void 0
                  : r.uid) || null),
              this._deleted || (this._isInitialized = !0);
          }
        })),
        this._initializationPromise
      );
    }
    async _onStorageEvent() {
      if (this._deleted) return;
      const e = await this.assertedPersistence.getCurrentUser();
      return this.currentUser || e
        ? this.currentUser && e && this.currentUser.uid === e.uid
          ? (this._currentUser._assign(e),
            void (await this.currentUser.getIdToken()))
          : void (await this._updateCurrentUser(e, !0))
        : void 0;
    }
    async initializeCurrentUserFromIdToken(e) {
      try {
        const t = await Ta(this, { idToken: e }),
          n = await Ma._fromGetAccountInfoResponse(this, t, e);
        await this.directlySetCurrentUser(n);
      } catch (t) {
        console.warn(
          "FirebaseServerApp could not login user with provided authIdToken: ",
          t
        ),
          await this.directlySetCurrentUser(null);
      }
    }
    async initializeCurrentUser(e) {
      var t;
      if (Ii(this.app)) {
        const e = this.app.settings.authIdToken;
        return e
          ? new Promise((t) => {
              setTimeout(() =>
                this.initializeCurrentUserFromIdToken(e).then(t, t)
              );
            })
          : this.directlySetCurrentUser(null);
      }
      const n = await this.assertedPersistence.getCurrentUser();
      let r = n,
        i = !1;
      if (e && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager();
        const n =
            null === (t = this.redirectUser) || void 0 === t
              ? void 0
              : t._redirectEventId,
          a = null === r || void 0 === r ? void 0 : r._redirectEventId,
          o = await this.tryRedirectSignIn(e);
        (n && n !== a) ||
          !(null === o || void 0 === o ? void 0 : o.user) ||
          ((r = o.user), (i = !0));
      }
      if (!r) return this.directlySetCurrentUser(null);
      if (!r._redirectEventId) {
        if (i)
          try {
            await this.beforeStateQueue.runMiddleware(r);
          } catch (Pl) {
            (r = n),
              this._popupRedirectResolver._overrideRedirectResult(this, () =>
                Promise.reject(Pl)
              );
          }
        return r
          ? this.reloadAndSetCurrentUserOrClear(r)
          : this.directlySetCurrentUser(null);
      }
      return (
        ra(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser &&
        this.redirectUser._redirectEventId === r._redirectEventId
          ? this.directlySetCurrentUser(r)
          : this.reloadAndSetCurrentUserOrClear(r)
      );
    }
    async tryRedirectSignIn(e) {
      let t = null;
      try {
        t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
      } catch (Pl) {
        await this._setRedirectUser(null);
      }
      return t;
    }
    async reloadAndSetCurrentUserOrClear(e) {
      try {
        await La(e);
      } catch (Pl) {
        if (
          (null === Pl || void 0 === Pl ? void 0 : Pl.code) !==
          "auth/".concat("network-request-failed")
        )
          return this.directlySetCurrentUser(null);
      }
      return this.directlySetCurrentUser(e);
    }
    useDeviceLanguage() {
      this.languageCode = (function () {
        if ("undefined" === typeof navigator) return null;
        const e = navigator;
        return (e.languages && e.languages[0]) || e.language || null;
      })();
    }
    async _delete() {
      this._deleted = !0;
    }
    async updateCurrentUser(e) {
      if (Ii(this.app)) return Promise.reject(ea(this));
      const t = e ? mr(e) : null;
      return (
        t &&
          ra(
            t.auth.config.apiKey === this.config.apiKey,
            this,
            "invalid-user-token"
          ),
        this._updateCurrentUser(t && t._clone(this))
      );
    }
    async _updateCurrentUser(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!this._deleted)
        return (
          e && ra(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
          t || (await this.beforeStateQueue.runMiddleware(e)),
          this.queue(async () => {
            await this.directlySetCurrentUser(e), this.notifyAuthListeners();
          })
        );
    }
    async signOut() {
      return Ii(this.app)
        ? Promise.reject(ea(this))
        : (await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this._popupRedirectResolver) &&
            (await this._setRedirectUser(null)),
          this._updateCurrentUser(null, !0));
    }
    setPersistence(e) {
      return Ii(this.app)
        ? Promise.reject(ea(this))
        : this.queue(async () => {
            await this.assertedPersistence.setPersistence(za(e));
          });
    }
    _getRecaptchaConfig() {
      return null == this.tenantId
        ? this._agentRecaptchaConfig
        : this._tenantRecaptchaConfigs[this.tenantId];
    }
    async validatePassword(e) {
      this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
      const t = this._getPasswordPolicyInternal();
      return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
        ? Promise.reject(
            this._errorFactory.create(
              "unsupported-password-policy-schema-version",
              {}
            )
          )
        : t.validatePassword(e);
    }
    _getPasswordPolicyInternal() {
      return null === this.tenantId
        ? this._projectPasswordPolicy
        : this._tenantPasswordPolicies[this.tenantId];
    }
    async _updatePasswordPolicy() {
      const e = await (async function (e) {
          return ga(
            e,
            "GET",
            "/v2/passwordPolicy",
            ma(
              e,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            )
          );
        })(this),
        t = new io(e);
      null === this.tenantId
        ? (this._projectPasswordPolicy = t)
        : (this._tenantPasswordPolicies[this.tenantId] = t);
    }
    _getPersistence() {
      return this.assertedPersistence.persistence.type;
    }
    _updateErrorMap(e) {
      this._errorFactory = new or("auth", "Firebase", e());
    }
    onAuthStateChanged(e, t, n) {
      return this.registerStateListener(this.authStateSubscription, e, t, n);
    }
    beforeAuthStateChanged(e, t) {
      return this.beforeStateQueue.pushCallback(e, t);
    }
    onIdTokenChanged(e, t, n) {
      return this.registerStateListener(this.idTokenSubscription, e, t, n);
    }
    authStateReady() {
      return new Promise((e, t) => {
        if (this.currentUser) e();
        else {
          const n = this.onAuthStateChanged(() => {
            n(), e();
          }, t);
        }
      });
    }
    async revokeAccessToken(e) {
      if (this.currentUser) {
        const t = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: e,
          idToken: await this.currentUser.getIdToken(),
        };
        null != this.tenantId && (t.tenantId = this.tenantId),
          await (async function (e, t) {
            return ga(e, "POST", "/v2/accounts:revokeToken", ma(e, t));
          })(this, t);
      }
    }
    toJSON() {
      var e;
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser:
          null === (e = this._currentUser) || void 0 === e
            ? void 0
            : e.toJSON(),
      };
    }
    async _setRedirectUser(e, t) {
      const n = await this.getOrInitRedirectPersistenceManager(t);
      return null === e ? n.removeCurrentUser() : n.setCurrentUser(e);
    }
    async getOrInitRedirectPersistenceManager(e) {
      if (!this.redirectPersistenceManager) {
        const t = (e && za(e)) || this._popupRedirectResolver;
        ra(t, this, "argument-error"),
          (this.redirectPersistenceManager = await Wa.create(
            this,
            [za(t._redirectPersistence)],
            "redirectUser"
          )),
          (this.redirectUser =
            await this.redirectPersistenceManager.getCurrentUser());
      }
      return this.redirectPersistenceManager;
    }
    async _redirectUserForId(e) {
      var t, n;
      return (
        this._isInitialized && (await this.queue(async () => {})),
        (null === (t = this._currentUser) || void 0 === t
          ? void 0
          : t._redirectEventId) === e
          ? this._currentUser
          : (null === (n = this.redirectUser) || void 0 === n
              ? void 0
              : n._redirectEventId) === e
          ? this.redirectUser
          : null
      );
    }
    async _persistUserIfCurrent(e) {
      if (e === this.currentUser)
        return this.queue(async () => this.directlySetCurrentUser(e));
    }
    _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners();
    }
    _key() {
      return ""
        .concat(this.config.authDomain, ":")
        .concat(this.config.apiKey, ":")
        .concat(this.name);
    }
    _startProactiveRefresh() {
      (this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh();
    }
    _stopProactiveRefresh() {
      (this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh();
    }
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      var e, t;
      if (!this._isInitialized) return;
      this.idTokenSubscription.next(this.currentUser);
      const n =
        null !==
          (t =
            null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) &&
        void 0 !== t
          ? t
          : null;
      this.lastNotifiedUid !== n &&
        ((this.lastNotifiedUid = n),
        this.authStateSubscription.next(this.currentUser));
    }
    registerStateListener(e, t, n, r) {
      if (this._deleted) return () => {};
      const i = "function" === typeof t ? t : t.next.bind(t);
      let a = !1;
      const o = this._isInitialized
        ? Promise.resolve()
        : this._initializationPromise;
      if (
        (ra(o, this, "internal-error"),
        o.then(() => {
          a || i(this.currentUser);
        }),
        "function" === typeof t)
      ) {
        const i = e.addObserver(t, n, r);
        return () => {
          (a = !0), i();
        };
      }
      {
        const n = e.addObserver(t);
        return () => {
          (a = !0), n();
        };
      }
    }
    async directlySetCurrentUser(e) {
      this.currentUser &&
        this.currentUser !== e &&
        this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        (this.currentUser = e),
        e
          ? await this.assertedPersistence.setCurrentUser(e)
          : await this.assertedPersistence.removeCurrentUser();
    }
    queue(e) {
      return (this.operations = this.operations.then(e, e)), this.operations;
    }
    get assertedPersistence() {
      return (
        ra(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
      );
    }
    _logFramework(e) {
      e &&
        !this.frameworks.includes(e) &&
        (this.frameworks.push(e),
        this.frameworks.sort(),
        (this.clientVersion = no(
          this.config.clientPlatform,
          this._getFrameworks()
        )));
    }
    _getFrameworks() {
      return this.frameworks;
    }
    async _getAdditionalHeaders() {
      var e;
      const t = { "X-Client-Version": this.clientVersion };
      this.app.options.appId &&
        (t["X-Firebase-gmpid"] = this.app.options.appId);
      const n = await (null ===
        (e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) ||
      void 0 === e
        ? void 0
        : e.getHeartbeatsHeader());
      n && (t["X-Firebase-Client"] = n);
      const r = await this._getAppCheckToken();
      return r && (t["X-Firebase-AppCheck"] = r), t;
    }
    async _getAppCheckToken() {
      var e;
      const t = await (null ===
        (e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) ||
      void 0 === e
        ? void 0
        : e.getToken());
      return (
        (null === t || void 0 === t ? void 0 : t.error) &&
          (function (e) {
            if (Ji.logLevel <= Sr.WARN) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              Ji.warn("Auth (".concat(Pi, "): ").concat(e), ...n);
            }
          })("Error while retrieving App Check token: ".concat(t.error)),
        null === t || void 0 === t ? void 0 : t.token
      );
    }
  }
  function oo(e) {
    return mr(e);
  }
  class so {
    constructor(e) {
      (this.auth = e),
        (this.observer = null),
        (this.addObserver = (function (e, t) {
          const n = new hr(e, t);
          return n.subscribe.bind(n);
        })((e) => (this.observer = e)));
    }
    get next() {
      return (
        ra(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
      );
    }
  }
  let lo = {
    async loadJS() {
      throw new Error("Unable to load external scripts");
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: "",
  };
  function uo(e) {
    return lo.loadJS(e);
  }
  function co(e) {
    return "__".concat(e).concat(Math.floor(1e6 * Math.random()));
  }
  class fo {
    constructor(e) {
      (this.type = "recaptcha-enterprise"), (this.auth = oo(e));
    }
    async verify() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "verify",
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      function n(t, n, r) {
        const i = window.grecaptcha;
        Ea(i)
          ? i.enterprise.ready(() => {
              i.enterprise
                .execute(t, { action: e })
                .then((e) => {
                  n(e);
                })
                .catch(() => {
                  n("NO_RECAPTCHA");
                });
            })
          : r(Error("No reCAPTCHA enterprise script loaded."));
      }
      return new Promise((e, r) => {
        (async function (e) {
          if (!t) {
            if (null == e.tenantId && null != e._agentRecaptchaConfig)
              return e._agentRecaptchaConfig.siteKey;
            if (
              null != e.tenantId &&
              void 0 !== e._tenantRecaptchaConfigs[e.tenantId]
            )
              return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
          }
          return new Promise(async (t, n) => {
            Ca(e, {
              clientType: "CLIENT_TYPE_WEB",
              version: "RECAPTCHA_ENTERPRISE",
            })
              .then((r) => {
                if (void 0 !== r.recaptchaKey) {
                  const n = new _a(r);
                  return (
                    null == e.tenantId
                      ? (e._agentRecaptchaConfig = n)
                      : (e._tenantRecaptchaConfigs[e.tenantId] = n),
                    t(n.siteKey)
                  );
                }
                n(new Error("recaptcha Enterprise site key undefined"));
              })
              .catch((e) => {
                n(e);
              });
          });
        })(this.auth)
          .then((i) => {
            if (!t && Ea(window.grecaptcha)) n(i, e, r);
            else {
              if ("undefined" === typeof window)
                return void r(
                  new Error("RecaptchaVerifier is only supported in browser")
                );
              let t = lo.recaptchaEnterpriseScript;
              0 !== t.length && (t += i),
                uo(t)
                  .then(() => {
                    n(i, e, r);
                  })
                  .catch((e) => {
                    r(e);
                  });
            }
          })
          .catch((e) => {
            r(e);
          });
      });
    }
  }
  async function ho(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    const i = new fo(e);
    let a;
    try {
      a = await i.verify(n);
    } catch (s) {
      a = await i.verify(n, !0);
    }
    const o = Object.assign({}, t);
    return (
      r
        ? Object.assign(o, { captchaResp: a })
        : Object.assign(o, { captchaResponse: a }),
      Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
      Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
      o
    );
  }
  async function po(e, t, n, r) {
    var i;
    if (
      null === (i = e._getRecaptchaConfig()) || void 0 === i
        ? void 0
        : i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
    ) {
      const i = await ho(e, t, n, "getOobCode" === n);
      return r(e, i);
    }
    return r(e, t).catch(async (i) => {
      if (i.code === "auth/".concat("missing-recaptcha-token")) {
        console.log(
          "".concat(
            n,
            " is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow."
          )
        );
        const i = await ho(e, t, n, "getOobCode" === n);
        return r(e, i);
      }
      return Promise.reject(i);
    });
  }
  function mo(e, t, n) {
    const r = oo(e);
    ra(r._canInitEmulator, r, "emulator-config-failed"),
      ra(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
    const i = !!(null === n || void 0 === n ? void 0 : n.disableWarnings),
      a = go(t),
      { host: o, port: s } = (function (e) {
        const t = go(e),
          n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
        if (!n) return { host: "", port: null };
        const r = n[2].split("@").pop() || "",
          i = /^(\[[^\]]+\])(:|$)/.exec(r);
        if (i) {
          const e = i[1];
          return { host: e, port: vo(r.substr(e.length + 1)) };
        }
        {
          const [e, t] = r.split(":");
          return { host: e, port: vo(t) };
        }
      })(t),
      l = null === s ? "" : ":".concat(s);
    (r.config.emulator = { url: "".concat(a, "//").concat(o).concat(l, "/") }),
      (r.settings.appVerificationDisabledForTesting = !0),
      (r.emulatorConfig = Object.freeze({
        host: o,
        port: s,
        protocol: a.replace(":", ""),
        options: Object.freeze({ disableWarnings: i }),
      })),
      i ||
        (function () {
          function e() {
            const e = document.createElement("p"),
              t = e.style;
            (e.innerText =
              "Running in emulator mode. Do not use with production credentials."),
              (t.position = "fixed"),
              (t.width = "100%"),
              (t.backgroundColor = "#ffffff"),
              (t.border = ".1em solid #000000"),
              (t.color = "#b50000"),
              (t.bottom = "0px"),
              (t.left = "0px"),
              (t.margin = "0px"),
              (t.zIndex = "10000"),
              (t.textAlign = "center"),
              e.classList.add("firebase-emulator-warning"),
              document.body.appendChild(e);
          }
          "undefined" !== typeof console &&
            "function" === typeof console.info &&
            console.info(
              "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
            );
          "undefined" !== typeof window &&
            "undefined" !== typeof document &&
            ("loading" === document.readyState
              ? window.addEventListener("DOMContentLoaded", e)
              : e());
        })();
  }
  function go(e) {
    const t = e.indexOf(":");
    return t < 0 ? "" : e.substr(0, t + 1);
  }
  function vo(e) {
    if (!e) return null;
    const t = Number(e);
    return isNaN(t) ? null : t;
  }
  class yo {
    constructor(e, t) {
      (this.providerId = e), (this.signInMethod = t);
    }
    toJSON() {
      return ia("not implemented");
    }
    _getIdTokenResponse(e) {
      return ia("not implemented");
    }
    _linkToIdToken(e, t) {
      return ia("not implemented");
    }
    _getReauthenticationResolver(e) {
      return ia("not implemented");
    }
  }
  async function bo(e, t) {
    return ga(e, "POST", "/v1/accounts:signUp", t);
  }
  async function wo(e, t) {
    return ya(e, "POST", "/v1/accounts:signInWithPassword", ma(e, t));
  }
  class So extends yo {
    constructor(e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      super("password", n),
        (this._email = e),
        (this._password = t),
        (this._tenantId = r);
    }
    static _fromEmailAndPassword(e, t) {
      return new So(e, t, "password");
    }
    static _fromEmailAndCode(e, t) {
      return new So(
        e,
        t,
        "emailLink",
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
      );
    }
    toJSON() {
      return {
        email: this._email,
        password: this._password,
        signInMethod: this.signInMethod,
        tenantId: this._tenantId,
      };
    }
    static fromJSON(e) {
      const t = "string" === typeof e ? JSON.parse(e) : e;
      if (
        (null === t || void 0 === t ? void 0 : t.email) &&
        (null === t || void 0 === t ? void 0 : t.password)
      ) {
        if ("password" === t.signInMethod)
          return this._fromEmailAndPassword(t.email, t.password);
        if ("emailLink" === t.signInMethod)
          return this._fromEmailAndCode(t.email, t.password, t.tenantId);
      }
      return null;
    }
    async _getIdTokenResponse(e) {
      switch (this.signInMethod) {
        case "password":
          return po(
            e,
            {
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB",
            },
            "signInWithPassword",
            wo
          );
        case "emailLink":
          return (async function (e, t) {
            return ya(e, "POST", "/v1/accounts:signInWithEmailLink", ma(e, t));
          })(e, { email: this._email, oobCode: this._password });
        default:
          Xi(e, "internal-error");
      }
    }
    async _linkToIdToken(e, t) {
      switch (this.signInMethod) {
        case "password":
          return po(
            e,
            {
              idToken: t,
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB",
            },
            "signUpPassword",
            bo
          );
        case "emailLink":
          return (async function (e, t) {
            return ya(e, "POST", "/v1/accounts:signInWithEmailLink", ma(e, t));
          })(e, { idToken: t, email: this._email, oobCode: this._password });
        default:
          Xi(e, "internal-error");
      }
    }
    _getReauthenticationResolver(e) {
      return this._getIdTokenResponse(e);
    }
  }
  async function ko(e, t) {
    return ya(e, "POST", "/v1/accounts:signInWithIdp", ma(e, t));
  }
  class Eo extends yo {
    constructor() {
      super(...arguments), (this.pendingToken = null);
    }
    static _fromParams(e) {
      const t = new Eo(e.providerId, e.signInMethod);
      return (
        e.idToken || e.accessToken
          ? (e.idToken && (t.idToken = e.idToken),
            e.accessToken && (t.accessToken = e.accessToken),
            e.nonce && !e.pendingToken && (t.nonce = e.nonce),
            e.pendingToken && (t.pendingToken = e.pendingToken))
          : e.oauthToken && e.oauthTokenSecret
          ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
          : Xi("argument-error"),
        t
      );
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod,
      };
    }
    static fromJSON(e) {
      const t = "string" === typeof e ? JSON.parse(e) : e,
        { providerId: n, signInMethod: r } = t,
        i = qi(t, ["providerId", "signInMethod"]);
      if (!n || !r) return null;
      const a = new Eo(n, r);
      return (
        (a.idToken = i.idToken || void 0),
        (a.accessToken = i.accessToken || void 0),
        (a.secret = i.secret),
        (a.nonce = i.nonce),
        (a.pendingToken = i.pendingToken || null),
        a
      );
    }
    _getIdTokenResponse(e) {
      return ko(e, this.buildRequest());
    }
    _linkToIdToken(e, t) {
      const n = this.buildRequest();
      return (n.idToken = t), ko(e, n);
    }
    _getReauthenticationResolver(e) {
      const t = this.buildRequest();
      return (t.autoCreate = !1), ko(e, t);
    }
    buildRequest() {
      const e = { requestUri: "http://localhost", returnSecureToken: !0 };
      if (this.pendingToken) e.pendingToken = this.pendingToken;
      else {
        const t = {};
        this.idToken && (t.id_token = this.idToken),
          this.accessToken && (t.access_token = this.accessToken),
          this.secret && (t.oauth_token_secret = this.secret),
          (t.providerId = this.providerId),
          this.nonce && !this.pendingToken && (t.nonce = this.nonce),
          (e.postBody = cr(t));
      }
      return e;
    }
  }
  const _o = { USER_NOT_FOUND: "user-not-found" };
  class Co extends yo {
    constructor(e) {
      super("phone", "phone"), (this.params = e);
    }
    static _fromVerification(e, t) {
      return new Co({ verificationId: e, verificationCode: t });
    }
    static _fromTokenResponse(e, t) {
      return new Co({ phoneNumber: e, temporaryProof: t });
    }
    _getIdTokenResponse(e) {
      return (async function (e, t) {
        return ya(e, "POST", "/v1/accounts:signInWithPhoneNumber", ma(e, t));
      })(e, this._makeVerificationRequest());
    }
    _linkToIdToken(e, t) {
      return (async function (e, t) {
        const n = await ya(
          e,
          "POST",
          "/v1/accounts:signInWithPhoneNumber",
          ma(e, t)
        );
        if (n.temporaryProof)
          throw ka(e, "account-exists-with-different-credential", n);
        return n;
      })(e, Object.assign({ idToken: t }, this._makeVerificationRequest()));
    }
    _getReauthenticationResolver(e) {
      return (async function (e, t) {
        return ya(
          e,
          "POST",
          "/v1/accounts:signInWithPhoneNumber",
          ma(e, Object.assign(Object.assign({}, t), { operation: "REAUTH" })),
          _o
        );
      })(e, this._makeVerificationRequest());
    }
    _makeVerificationRequest() {
      const {
        temporaryProof: e,
        phoneNumber: t,
        verificationId: n,
        verificationCode: r,
      } = this.params;
      return e && t
        ? { temporaryProof: e, phoneNumber: t }
        : { sessionInfo: n, code: r };
    }
    toJSON() {
      const e = { providerId: this.providerId };
      return (
        this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
        this.params.temporaryProof &&
          (e.temporaryProof = this.params.temporaryProof),
        this.params.verificationCode &&
          (e.verificationCode = this.params.verificationCode),
        this.params.verificationId &&
          (e.verificationId = this.params.verificationId),
        e
      );
    }
    static fromJSON(e) {
      "string" === typeof e && (e = JSON.parse(e));
      const {
        verificationId: t,
        verificationCode: n,
        phoneNumber: r,
        temporaryProof: i,
      } = e;
      return n || t || r || i
        ? new Co({
            verificationId: t,
            verificationCode: n,
            phoneNumber: r,
            temporaryProof: i,
          })
        : null;
    }
  }
  class To {
    constructor(e) {
      var t, n, r, i, a, o;
      const s = dr(fr(e)),
        l = null !== (t = s.apiKey) && void 0 !== t ? t : null,
        u = null !== (n = s.oobCode) && void 0 !== n ? n : null,
        c = (function (e) {
          switch (e) {
            case "recoverEmail":
              return "RECOVER_EMAIL";
            case "resetPassword":
              return "PASSWORD_RESET";
            case "signIn":
              return "EMAIL_SIGNIN";
            case "verifyEmail":
              return "VERIFY_EMAIL";
            case "verifyAndChangeEmail":
              return "VERIFY_AND_CHANGE_EMAIL";
            case "revertSecondFactorAddition":
              return "REVERT_SECOND_FACTOR_ADDITION";
            default:
              return null;
          }
        })(null !== (r = s.mode) && void 0 !== r ? r : null);
      ra(l && u && c, "argument-error"),
        (this.apiKey = l),
        (this.operation = c),
        (this.code = u),
        (this.continueUrl =
          null !== (i = s.continueUrl) && void 0 !== i ? i : null),
        (this.languageCode =
          null !== (a = s.languageCode) && void 0 !== a ? a : null),
        (this.tenantId = null !== (o = s.tenantId) && void 0 !== o ? o : null);
    }
    static parseLink(e) {
      const t = (function (e) {
        const t = dr(fr(e)).link,
          n = t ? dr(fr(t)).deep_link_id : null,
          r = dr(fr(e)).deep_link_id;
        return (r ? dr(fr(r)).link : null) || r || n || t || e;
      })(e);
      try {
        return new To(t);
      } catch (n) {
        return null;
      }
    }
  }
  class Io {
    constructor() {
      this.providerId = Io.PROVIDER_ID;
    }
    static credential(e, t) {
      return So._fromEmailAndPassword(e, t);
    }
    static credentialWithLink(e, t) {
      const n = To.parseLink(t);
      return (
        ra(n, "argument-error"), So._fromEmailAndCode(e, n.code, n.tenantId)
      );
    }
  }
  (Io.PROVIDER_ID = "password"),
    (Io.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
    (Io.EMAIL_LINK_SIGN_IN_METHOD = "emailLink");
  class xo {
    constructor(e) {
      (this.providerId = e),
        (this.defaultLanguageCode = null),
        (this.customParameters = {});
    }
    setDefaultLanguage(e) {
      this.defaultLanguageCode = e;
    }
    setCustomParameters(e) {
      return (this.customParameters = e), this;
    }
    getCustomParameters() {
      return this.customParameters;
    }
  }
  class Ro extends xo {
    constructor() {
      super(...arguments), (this.scopes = []);
    }
    addScope(e) {
      return this.scopes.includes(e) || this.scopes.push(e), this;
    }
    getScopes() {
      return [...this.scopes];
    }
  }
  class Po extends Ro {
    constructor() {
      super("facebook.com");
    }
    static credential(e) {
      return Eo._fromParams({
        providerId: Po.PROVIDER_ID,
        signInMethod: Po.FACEBOOK_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return Po.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Po.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t || !("oauthAccessToken" in t)) return null;
      if (!t.oauthAccessToken) return null;
      try {
        return Po.credential(t.oauthAccessToken);
      } catch (n) {
        return null;
      }
    }
  }
  (Po.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
    (Po.PROVIDER_ID = "facebook.com");
  class Oo extends Ro {
    constructor() {
      super("google.com"), this.addScope("profile");
    }
    static credential(e, t) {
      return Eo._fromParams({
        providerId: Oo.PROVIDER_ID,
        signInMethod: Oo.GOOGLE_SIGN_IN_METHOD,
        idToken: e,
        accessToken: t,
      });
    }
    static credentialFromResult(e) {
      return Oo.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Oo.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { oauthIdToken: n, oauthAccessToken: r } = t;
      if (!n && !r) return null;
      try {
        return Oo.credential(n, r);
      } catch (i) {
        return null;
      }
    }
  }
  (Oo.GOOGLE_SIGN_IN_METHOD = "google.com"), (Oo.PROVIDER_ID = "google.com");
  class No extends Ro {
    constructor() {
      super("github.com");
    }
    static credential(e) {
      return Eo._fromParams({
        providerId: No.PROVIDER_ID,
        signInMethod: No.GITHUB_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return No.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return No.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t || !("oauthAccessToken" in t)) return null;
      if (!t.oauthAccessToken) return null;
      try {
        return No.credential(t.oauthAccessToken);
      } catch (n) {
        return null;
      }
    }
  }
  (No.GITHUB_SIGN_IN_METHOD = "github.com"), (No.PROVIDER_ID = "github.com");
  class Ao extends Ro {
    constructor() {
      super("twitter.com");
    }
    static credential(e, t) {
      return Eo._fromParams({
        providerId: Ao.PROVIDER_ID,
        signInMethod: Ao.TWITTER_SIGN_IN_METHOD,
        oauthToken: e,
        oauthTokenSecret: t,
      });
    }
    static credentialFromResult(e) {
      return Ao.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Ao.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { oauthAccessToken: n, oauthTokenSecret: r } = t;
      if (!n || !r) return null;
      try {
        return Ao.credential(n, r);
      } catch (i) {
        return null;
      }
    }
  }
  (Ao.TWITTER_SIGN_IN_METHOD = "twitter.com"), (Ao.PROVIDER_ID = "twitter.com");
  class Lo {
    constructor(e) {
      (this.user = e.user),
        (this.providerId = e.providerId),
        (this._tokenResponse = e._tokenResponse),
        (this.operationType = e.operationType);
    }
    static async _fromIdTokenResponse(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const i = await Ma._fromIdTokenResponse(e, n, r),
        a = Do(n);
      return new Lo({
        user: i,
        providerId: a,
        _tokenResponse: n,
        operationType: t,
      });
    }
    static async _forOperation(e, t, n) {
      await e._updateTokensIfNecessary(n, !0);
      const r = Do(n);
      return new Lo({
        user: e,
        providerId: r,
        _tokenResponse: n,
        operationType: t,
      });
    }
  }
  function Do(e) {
    return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
  }
  class jo extends ar {
    constructor(e, t, n, r) {
      var i;
      super(t.code, t.message),
        (this.operationType = n),
        (this.user = r),
        Object.setPrototypeOf(this, jo.prototype),
        (this.customData = {
          appName: e.name,
          tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
          _serverResponse: t.customData._serverResponse,
          operationType: n,
        });
    }
    static _fromErrorAndOperation(e, t, n, r) {
      return new jo(e, t, n, r);
    }
  }
  function Uo(e, t, n, r) {
    return (
      "reauthenticate" === t
        ? n._getReauthenticationResolver(e)
        : n._getIdTokenResponse(e)
    ).catch((n) => {
      if (n.code === "auth/".concat("multi-factor-auth-required"))
        throw jo._fromErrorAndOperation(e, n, t, r);
      throw n;
    });
  }
  async function Mo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const r = await Oa(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
    return Lo._forOperation(e, "link", r);
  }
  async function Fo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const { auth: r } = e;
    if (Ii(r.app)) return Promise.reject(ea(r));
    const i = "reauthenticate";
    try {
      const a = await Oa(e, Uo(r, i, t, e), n);
      ra(a.idToken, r, "internal-error");
      const o = Ra(a.idToken);
      ra(o, r, "internal-error");
      const { sub: s } = o;
      return ra(e.uid === s, r, "user-mismatch"), Lo._forOperation(e, i, a);
    } catch (Pl) {
      throw (
        ((null === Pl || void 0 === Pl ? void 0 : Pl.code) ===
          "auth/".concat("user-not-found") && Xi(r, "user-mismatch"),
        Pl)
      );
    }
  }
  async function zo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (Ii(e.app)) return Promise.reject(ea(e));
    const r = "signIn",
      i = await Uo(e, r, t),
      a = await Lo._fromIdTokenResponse(e, r, i);
    return n || (await e._updateCurrentUser(a.user)), a;
  }
  new WeakMap();
  const Bo = "__sak";
  class Vo {
    constructor(e, t) {
      (this.storageRetriever = e), (this.type = t);
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem(Bo, "1"),
            this.storage.removeItem(Bo),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      } catch (e) {
        return Promise.resolve(!1);
      }
    }
    _set(e, t) {
      return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
    }
    _get(e) {
      const t = this.storage.getItem(e);
      return Promise.resolve(t ? JSON.parse(t) : null);
    }
    _remove(e) {
      return this.storage.removeItem(e), Promise.resolve();
    }
    get storage() {
      return this.storageRetriever();
    }
  }
  class Ho extends Vo {
    constructor() {
      super(() => window.localStorage, "LOCAL"),
        (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.safariLocalStorageNotSynced =
          (function () {
            const e = ir();
            return $a(e) || Za(e);
          })() &&
          (function () {
            try {
              return !(!window || window === window.top);
            } catch (Pl) {
              return !1;
            }
          })()),
        (this.fallbackToPolling = to()),
        (this._shouldAllowMigration = !0);
    }
    forAllChangedKeys(e) {
      for (const t of Object.keys(this.listeners)) {
        const n = this.storage.getItem(t),
          r = this.localCache[t];
        n !== r && e(t, r, n);
      }
    }
    onStorageEvent(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!e.key)
        return void this.forAllChangedKeys((e, t, n) => {
          this.notifyListeners(e, n);
        });
      const n = e.key;
      if (
        (t ? this.detachListener() : this.stopPolling(),
        this.safariLocalStorageNotSynced)
      ) {
        const r = this.storage.getItem(n);
        if (e.newValue !== r)
          null !== e.newValue
            ? this.storage.setItem(n, e.newValue)
            : this.storage.removeItem(n);
        else if (this.localCache[n] === e.newValue && !t) return;
      }
      const r = () => {
          const e = this.storage.getItem(n);
          (t || this.localCache[n] !== e) && this.notifyListeners(n, e);
        },
        i = this.storage.getItem(n);
      eo() && i !== e.newValue && e.newValue !== e.oldValue
        ? setTimeout(r, 10)
        : r();
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      const n = this.listeners[e];
      if (n) for (const r of Array.from(n)) r(t ? JSON.parse(t) : t);
    }
    startPolling() {
      this.stopPolling(),
        (this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((e, t, n) => {
            this.onStorageEvent(
              new StorageEvent("storage", { key: e, oldValue: t, newValue: n }),
              !0
            );
          });
        }, 1e3));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    attachListener() {
      window.addEventListener("storage", this.boundEventHandler);
    }
    detachListener() {
      window.removeEventListener("storage", this.boundEventHandler);
    }
    _addListener(e, t) {
      0 === Object.keys(this.listeners).length &&
        (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] ||
          ((this.listeners[e] = new Set()),
          (this.localCache[e] = this.storage.getItem(e))),
        this.listeners[e].add(t);
    }
    _removeListener(e, t) {
      this.listeners[e] &&
        (this.listeners[e].delete(t),
        0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length &&
          (this.detachListener(), this.stopPolling());
    }
    async _set(e, t) {
      await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
    }
    async _get(e) {
      const t = await super._get(e);
      return (this.localCache[e] = JSON.stringify(t)), t;
    }
    async _remove(e) {
      await super._remove(e), delete this.localCache[e];
    }
  }
  Ho.type = "LOCAL";
  const Wo = Ho;
  class qo extends Vo {
    constructor() {
      super(() => window.sessionStorage, "SESSION");
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  qo.type = "SESSION";
  const Ko = qo;
  class $o {
    constructor(e) {
      (this.eventTarget = e),
        (this.handlersMap = {}),
        (this.boundEventHandler = this.handleEvent.bind(this));
    }
    static _getInstance(e) {
      const t = this.receivers.find((t) => t.isListeningto(e));
      if (t) return t;
      const n = new $o(e);
      return this.receivers.push(n), n;
    }
    isListeningto(e) {
      return this.eventTarget === e;
    }
    async handleEvent(e) {
      const t = e,
        { eventId: n, eventType: r, data: i } = t.data,
        a = this.handlersMap[r];
      if (!(null === a || void 0 === a ? void 0 : a.size)) return;
      t.ports[0].postMessage({ status: "ack", eventId: n, eventType: r });
      const o = Array.from(a).map(async (e) => e(t.origin, i)),
        s = await (function (e) {
          return Promise.all(
            e.map(async (e) => {
              try {
                return { fulfilled: !0, value: await e };
              } catch (t) {
                return { fulfilled: !1, reason: t };
              }
            })
          );
        })(o);
      t.ports[0].postMessage({
        status: "done",
        eventId: n,
        eventType: r,
        response: s,
      });
    }
    _subscribe(e, t) {
      0 === Object.keys(this.handlersMap).length &&
        this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set()),
        this.handlersMap[e].add(t);
    }
    _unsubscribe(e, t) {
      this.handlersMap[e] && t && this.handlersMap[e].delete(t),
        (t && 0 !== this.handlersMap[e].size) || delete this.handlersMap[e],
        0 === Object.keys(this.handlersMap).length &&
          this.eventTarget.removeEventListener(
            "message",
            this.boundEventHandler
          );
    }
  }
  function Go() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
      n = "";
    for (let r = 0; r < t; r++) n += Math.floor(10 * Math.random());
    return e + n;
  }
  $o.receivers = [];
  class Jo {
    constructor(e) {
      (this.target = e), (this.handlers = new Set());
    }
    removeMessageHandler(e) {
      e.messageChannel &&
        (e.messageChannel.port1.removeEventListener("message", e.onMessage),
        e.messageChannel.port1.close()),
        this.handlers.delete(e);
    }
    async _send(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
      const r =
        "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
      if (!r) throw new Error("connection_unavailable");
      let i, a;
      return new Promise((o, s) => {
        const l = Go("", 20);
        r.port1.start();
        const u = setTimeout(() => {
          s(new Error("unsupported_event"));
        }, n);
        (a = {
          messageChannel: r,
          onMessage(e) {
            const t = e;
            if (t.data.eventId === l)
              switch (t.data.status) {
                case "ack":
                  clearTimeout(u),
                    (i = setTimeout(() => {
                      s(new Error("timeout"));
                    }, 3e3));
                  break;
                case "done":
                  clearTimeout(i), o(t.data.response);
                  break;
                default:
                  clearTimeout(u),
                    clearTimeout(i),
                    s(new Error("invalid_response"));
              }
          },
        }),
          this.handlers.add(a),
          r.port1.addEventListener("message", a.onMessage),
          this.target.postMessage({ eventType: e, eventId: l, data: t }, [
            r.port2,
          ]);
      }).finally(() => {
        a && this.removeMessageHandler(a);
      });
    }
  }
  function Qo() {
    return window;
  }
  function Xo() {
    return (
      "undefined" !== typeof Qo().WorkerGlobalScope &&
      "function" === typeof Qo().importScripts
    );
  }
  const Yo = "firebaseLocalStorageDb",
    Zo = "firebaseLocalStorage",
    es = "fbase_key";
  class ts {
    constructor(e) {
      this.request = e;
    }
    toPromise() {
      return new Promise((e, t) => {
        this.request.addEventListener("success", () => {
          e(this.request.result);
        }),
          this.request.addEventListener("error", () => {
            t(this.request.error);
          });
      });
    }
  }
  function ns(e, t) {
    return e.transaction([Zo], t ? "readwrite" : "readonly").objectStore(Zo);
  }
  function rs() {
    const e = indexedDB.open(Yo, 1);
    return new Promise((t, n) => {
      e.addEventListener("error", () => {
        n(e.error);
      }),
        e.addEventListener("upgradeneeded", () => {
          const t = e.result;
          try {
            t.createObjectStore(Zo, { keyPath: es });
          } catch (Pl) {
            n(Pl);
          }
        }),
        e.addEventListener("success", async () => {
          const n = e.result;
          n.objectStoreNames.contains(Zo)
            ? t(n)
            : (n.close(),
              await (function () {
                const e = indexedDB.deleteDatabase(Yo);
                return new ts(e).toPromise();
              })(),
              t(await rs()));
        });
    });
  }
  async function is(e, t, n) {
    const r = ns(e, !0).put({ [es]: t, value: n });
    return new ts(r).toPromise();
  }
  function as(e, t) {
    const n = ns(e, !0).delete(t);
    return new ts(n).toPromise();
  }
  class os {
    constructor() {
      (this.type = "LOCAL"),
        (this._shouldAllowMigration = !0),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.pendingWrites = 0),
        (this.receiver = null),
        (this.sender = null),
        (this.serviceWorkerReceiverAvailable = !1),
        (this.activeServiceWorker = null),
        (this._workerInitializationPromise =
          this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {}
          ));
    }
    async _openDb() {
      return this.db || (this.db = await rs()), this.db;
    }
    async _withRetries(e) {
      let t = 0;
      for (;;)
        try {
          const t = await this._openDb();
          return await e(t);
        } catch (Pl) {
          if (t++ > 3) throw Pl;
          this.db && (this.db.close(), (this.db = void 0));
        }
    }
    async initializeServiceWorkerMessaging() {
      return Xo() ? this.initializeReceiver() : this.initializeSender();
    }
    async initializeReceiver() {
      (this.receiver = $o._getInstance(Xo() ? self : null)),
        this.receiver._subscribe("keyChanged", async (e, t) => ({
          keyProcessed: (await this._poll()).includes(t.key),
        })),
        this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]);
    }
    async initializeSender() {
      var e, t;
      if (
        ((this.activeServiceWorker = await (async function () {
          if (
            !(null === navigator || void 0 === navigator
              ? void 0
              : navigator.serviceWorker)
          )
            return null;
          try {
            return (await navigator.serviceWorker.ready).active;
          } catch (e) {
            return null;
          }
        })()),
        !this.activeServiceWorker)
      )
        return;
      this.sender = new Jo(this.activeServiceWorker);
      const n = await this.sender._send("ping", {}, 800);
      n &&
        (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) &&
        (null === (t = n[0]) || void 0 === t
          ? void 0
          : t.value.includes("keyChanged")) &&
        (this.serviceWorkerReceiverAvailable = !0);
    }
    async notifyServiceWorker(e) {
      if (
        this.sender &&
        this.activeServiceWorker &&
        (function () {
          var e;
          return (
            (null ===
              (e =
                null === navigator || void 0 === navigator
                  ? void 0
                  : navigator.serviceWorker) || void 0 === e
              ? void 0
              : e.controller) || null
          );
        })() === this.activeServiceWorker
      )
        try {
          await this.sender._send(
            "keyChanged",
            { key: e },
            this.serviceWorkerReceiverAvailable ? 800 : 50
          );
        } catch (t) {}
    }
    async _isAvailable() {
      try {
        if (!indexedDB) return !1;
        const e = await rs();
        return await is(e, Bo, "1"), await as(e, Bo), !0;
      } catch (e) {}
      return !1;
    }
    async _withPendingWrite(e) {
      this.pendingWrites++;
      try {
        await e();
      } finally {
        this.pendingWrites--;
      }
    }
    async _set(e, t) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((n) => is(n, e, t)),
          (this.localCache[e] = t),
          this.notifyServiceWorker(e)
        )
      );
    }
    async _get(e) {
      const t = await this._withRetries((t) =>
        (async function (e, t) {
          const n = ns(e, !1).get(t),
            r = await new ts(n).toPromise();
          return void 0 === r ? null : r.value;
        })(t, e)
      );
      return (this.localCache[e] = t), t;
    }
    async _remove(e) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((t) => as(t, e)),
          delete this.localCache[e],
          this.notifyServiceWorker(e)
        )
      );
    }
    async _poll() {
      const e = await this._withRetries((e) => {
        const t = ns(e, !1).getAll();
        return new ts(t).toPromise();
      });
      if (!e) return [];
      if (0 !== this.pendingWrites) return [];
      const t = [],
        n = new Set();
      if (0 !== e.length)
        for (const { fbase_key: r, value: i } of e)
          n.add(r),
            JSON.stringify(this.localCache[r]) !== JSON.stringify(i) &&
              (this.notifyListeners(r, i), t.push(r));
      for (const r of Object.keys(this.localCache))
        this.localCache[r] &&
          !n.has(r) &&
          (this.notifyListeners(r, null), t.push(r));
      return t;
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      const n = this.listeners[e];
      if (n) for (const r of Array.from(n)) r(t);
    }
    startPolling() {
      this.stopPolling(),
        (this.pollTimer = setInterval(async () => this._poll(), 800));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    _addListener(e, t) {
      0 === Object.keys(this.listeners).length && this.startPolling(),
        this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
        this.listeners[e].add(t);
    }
    _removeListener(e, t) {
      this.listeners[e] &&
        (this.listeners[e].delete(t),
        0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length && this.stopPolling();
    }
  }
  os.type = "LOCAL";
  const ss = os;
  co("rcb"), new ca(3e4, 6e4);
  const ls = "recaptcha";
  async function us(e, t, n) {
    var r;
    const i = await n.verify();
    try {
      let a;
      if (
        (ra("string" === typeof i, e, "argument-error"),
        ra(n.type === ls, e, "argument-error"),
        (a = "string" === typeof t ? { phoneNumber: t } : t),
        "session" in a)
      ) {
        const t = a.session;
        if ("phoneNumber" in a) {
          ra("enroll" === t.type, e, "internal-error");
          const n = await (function (e, t) {
            return ga(e, "POST", "/v2/accounts/mfaEnrollment:start", ma(e, t));
          })(e, {
            idToken: t.credential,
            phoneEnrollmentInfo: {
              phoneNumber: a.phoneNumber,
              recaptchaToken: i,
            },
          });
          return n.phoneSessionInfo.sessionInfo;
        }
        {
          ra("signin" === t.type, e, "internal-error");
          const n =
            (null === (r = a.multiFactorHint) || void 0 === r
              ? void 0
              : r.uid) || a.multiFactorUid;
          ra(n, e, "missing-multi-factor-info");
          const o = await (function (e, t) {
            return ga(e, "POST", "/v2/accounts/mfaSignIn:start", ma(e, t));
          })(e, {
            mfaPendingCredential: t.credential,
            mfaEnrollmentId: n,
            phoneSignInInfo: { recaptchaToken: i },
          });
          return o.phoneResponseInfo.sessionInfo;
        }
      }
      {
        const { sessionInfo: t } = await (async function (e, t) {
          return ga(e, "POST", "/v1/accounts:sendVerificationCode", ma(e, t));
        })(e, { phoneNumber: a.phoneNumber, recaptchaToken: i });
        return t;
      }
    } finally {
      n._reset();
    }
  }
  class cs {
    constructor(e) {
      (this.providerId = cs.PROVIDER_ID), (this.auth = oo(e));
    }
    verifyPhoneNumber(e, t) {
      return us(this.auth, e, mr(t));
    }
    static credential(e, t) {
      return Co._fromVerification(e, t);
    }
    static credentialFromResult(e) {
      const t = e;
      return cs.credentialFromTaggedObject(t);
    }
    static credentialFromError(e) {
      return cs.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { phoneNumber: n, temporaryProof: r } = t;
      return n && r ? Co._fromTokenResponse(n, r) : null;
    }
  }
  function ds(e, t) {
    return t
      ? za(t)
      : (ra(e._popupRedirectResolver, e, "argument-error"),
        e._popupRedirectResolver);
  }
  (cs.PROVIDER_ID = "phone"), (cs.PHONE_SIGN_IN_METHOD = "phone");
  class fs extends yo {
    constructor(e) {
      super("custom", "custom"), (this.params = e);
    }
    _getIdTokenResponse(e) {
      return ko(e, this._buildIdpRequest());
    }
    _linkToIdToken(e, t) {
      return ko(e, this._buildIdpRequest(t));
    }
    _getReauthenticationResolver(e) {
      return ko(e, this._buildIdpRequest());
    }
    _buildIdpRequest(e) {
      const t = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: !0,
        returnIdpCredential: !0,
      };
      return e && (t.idToken = e), t;
    }
  }
  function hs(e) {
    return zo(e.auth, new fs(e), e.bypassAuthState);
  }
  function ps(e) {
    const { auth: t, user: n } = e;
    return ra(n, t, "internal-error"), Fo(n, new fs(e), e.bypassAuthState);
  }
  async function ms(e) {
    const { auth: t, user: n } = e;
    return ra(n, t, "internal-error"), Mo(n, new fs(e), e.bypassAuthState);
  }
  class gs {
    constructor(e, t, n, r) {
      let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      (this.auth = e),
        (this.resolver = n),
        (this.user = r),
        (this.bypassAuthState = i),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(t) ? t : [t]);
    }
    execute() {
      return new Promise(async (e, t) => {
        this.pendingPromise = { resolve: e, reject: t };
        try {
          (this.eventManager = await this.resolver._initialize(this.auth)),
            await this.onExecution(),
            this.eventManager.registerConsumer(this);
        } catch (Pl) {
          this.reject(Pl);
        }
      });
    }
    async onAuthEvent(e) {
      const {
        urlResponse: t,
        sessionId: n,
        postBody: r,
        tenantId: i,
        error: a,
        type: o,
      } = e;
      if (a) return void this.reject(a);
      const s = {
        auth: this.auth,
        requestUri: t,
        sessionId: n,
        tenantId: i || void 0,
        postBody: r || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState,
      };
      try {
        this.resolve(await this.getIdpTask(o)(s));
      } catch (Pl) {
        this.reject(Pl);
      }
    }
    onError(e) {
      this.reject(e);
    }
    getIdpTask(e) {
      switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
          return hs;
        case "linkViaPopup":
        case "linkViaRedirect":
          return ms;
        case "reauthViaPopup":
        case "reauthViaRedirect":
          return ps;
        default:
          Xi(this.auth, "internal-error");
      }
    }
    resolve(e) {
      aa(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp();
    }
    reject(e) {
      aa(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
      this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp();
    }
  }
  const vs = new ca(2e3, 1e4);
  class ys extends gs {
    constructor(e, t, n, r, i) {
      super(e, t, r, i),
        (this.provider = n),
        (this.authWindow = null),
        (this.pollId = null),
        ys.currentPopupAction && ys.currentPopupAction.cancel(),
        (ys.currentPopupAction = this);
    }
    async executeNotNull() {
      const e = await this.execute();
      return ra(e, this.auth, "internal-error"), e;
    }
    async onExecution() {
      aa(1 === this.filter.length, "Popup operations only handle one event");
      const e = Go();
      (this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        e
      )),
        (this.authWindow.associatedEvent = e),
        this.resolver._originValidation(this.auth).catch((e) => {
          this.reject(e);
        }),
        this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
          e || this.reject(Yi(this.auth, "web-storage-unsupported"));
        }),
        this.pollUserCancellation();
    }
    get eventId() {
      var e;
      return (
        (null === (e = this.authWindow) || void 0 === e
          ? void 0
          : e.associatedEvent) || null
      );
    }
    cancel() {
      this.reject(Yi(this.auth, "cancelled-popup-request"));
    }
    cleanUp() {
      this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        (this.authWindow = null),
        (this.pollId = null),
        (ys.currentPopupAction = null);
    }
    pollUserCancellation() {
      const e = () => {
        var t, n;
        (
          null ===
            (n =
              null === (t = this.authWindow) || void 0 === t
                ? void 0
                : t.window) || void 0 === n
            ? void 0
            : n.closed
        )
          ? (this.pollId = window.setTimeout(() => {
              (this.pollId = null),
                this.reject(Yi(this.auth, "popup-closed-by-user"));
            }, 8e3))
          : (this.pollId = window.setTimeout(e, vs.get()));
      };
      e();
    }
  }
  ys.currentPopupAction = null;
  const bs = "pendingRedirect",
    ws = new Map();
  class Ss extends gs {
    constructor(e, t) {
      super(
        e,
        [
          "signInViaRedirect",
          "linkViaRedirect",
          "reauthViaRedirect",
          "unknown",
        ],
        t,
        void 0,
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
      ),
        (this.eventId = null);
    }
    async execute() {
      let e = ws.get(this.auth._key());
      if (!e) {
        try {
          const t = await (async function (e, t) {
              const n = _s(t),
                r = Es(e);
              if (!(await r._isAvailable())) return !1;
              const i = "true" === (await r._get(n));
              return await r._remove(n), i;
            })(this.resolver, this.auth),
            n = t ? await super.execute() : null;
          e = () => Promise.resolve(n);
        } catch (Pl) {
          e = () => Promise.reject(Pl);
        }
        ws.set(this.auth._key(), e);
      }
      return (
        this.bypassAuthState ||
          ws.set(this.auth._key(), () => Promise.resolve(null)),
        e()
      );
    }
    async onAuthEvent(e) {
      if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
      if ("unknown" !== e.type) {
        if (e.eventId) {
          const t = await this.auth._redirectUserForId(e.eventId);
          if (t) return (this.user = t), super.onAuthEvent(e);
          this.resolve(null);
        }
      } else this.resolve(null);
    }
    async onExecution() {}
    cleanUp() {}
  }
  function ks(e, t) {
    ws.set(e._key(), t);
  }
  function Es(e) {
    return za(e._redirectPersistence);
  }
  function _s(e) {
    return Ha(bs, e.config.apiKey, e.name);
  }
  async function Cs(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (Ii(e.app)) return Promise.reject(ea(e));
    const r = oo(e),
      i = ds(r, t),
      a = new Ss(r, i, n),
      o = await a.execute();
    return (
      o &&
        !n &&
        (delete o.user._redirectEventId,
        await r._persistUserIfCurrent(o.user),
        await r._setRedirectUser(null, t)),
      o
    );
  }
  class Ts {
    constructor(e) {
      (this.auth = e),
        (this.cachedEventUids = new Set()),
        (this.consumers = new Set()),
        (this.queuedRedirectEvent = null),
        (this.hasHandledPotentialRedirect = !1),
        (this.lastProcessedEventTime = Date.now());
    }
    registerConsumer(e) {
      this.consumers.add(e),
        this.queuedRedirectEvent &&
          this.isEventForConsumer(this.queuedRedirectEvent, e) &&
          (this.sendToConsumer(this.queuedRedirectEvent, e),
          this.saveEventToCache(this.queuedRedirectEvent),
          (this.queuedRedirectEvent = null));
    }
    unregisterConsumer(e) {
      this.consumers.delete(e);
    }
    onEvent(e) {
      if (this.hasEventBeenHandled(e)) return !1;
      let t = !1;
      return (
        this.consumers.forEach((n) => {
          this.isEventForConsumer(e, n) &&
            ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
        }),
        this.hasHandledPotentialRedirect ||
          !(function (e) {
            switch (e.type) {
              case "signInViaRedirect":
              case "linkViaRedirect":
              case "reauthViaRedirect":
                return !0;
              case "unknown":
                return xs(e);
              default:
                return !1;
            }
          })(e) ||
          ((this.hasHandledPotentialRedirect = !0),
          t || ((this.queuedRedirectEvent = e), (t = !0))),
        t
      );
    }
    sendToConsumer(e, t) {
      var n;
      if (e.error && !xs(e)) {
        const r =
          (null === (n = e.error.code) || void 0 === n
            ? void 0
            : n.split("auth/")[1]) || "internal-error";
        t.onError(Yi(this.auth, r));
      } else t.onAuthEvent(e);
    }
    isEventForConsumer(e, t) {
      const n = null === t.eventId || (!!e.eventId && e.eventId === t.eventId);
      return t.filter.includes(e.type) && n;
    }
    hasEventBeenHandled(e) {
      return (
        Date.now() - this.lastProcessedEventTime >= 6e5 &&
          this.cachedEventUids.clear(),
        this.cachedEventUids.has(Is(e))
      );
    }
    saveEventToCache(e) {
      this.cachedEventUids.add(Is(e)),
        (this.lastProcessedEventTime = Date.now());
    }
  }
  function Is(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId]
      .filter((e) => e)
      .join("-");
  }
  function xs(e) {
    let { type: t, error: n } = e;
    return (
      "unknown" === t &&
      (null === n || void 0 === n ? void 0 : n.code) ===
        "auth/".concat("no-auth-event")
    );
  }
  const Rs = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    Ps = /^https?/;
  async function Os(e) {
    if (e.config.emulator) return;
    const { authorizedDomains: t } = await (async function (e) {
      return ga(
        e,
        "GET",
        "/v1/projects",
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      );
    })(e);
    for (const r of t)
      try {
        if (Ns(r)) return;
      } catch (n) {}
    Xi(e, "unauthorized-domain");
  }
  function Ns(e) {
    const t = oa(),
      { protocol: n, hostname: r } = new URL(t);
    if (e.startsWith("chrome-extension://")) {
      const i = new URL(e);
      return "" === i.hostname && "" === r
        ? "chrome-extension:" === n &&
            e.replace("chrome-extension://", "") ===
              t.replace("chrome-extension://", "")
        : "chrome-extension:" === n && i.hostname === r;
    }
    if (!Ps.test(n)) return !1;
    if (Rs.test(e)) return r === e;
    const i = e.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
  }
  const As = new ca(3e4, 6e4);
  function Ls() {
    const e = Qo().___jsl;
    if (null === e || void 0 === e ? void 0 : e.H)
      for (const t of Object.keys(e.H))
        if (
          ((e.H[t].r = e.H[t].r || []),
          (e.H[t].L = e.H[t].L || []),
          (e.H[t].r = [...e.H[t].L]),
          e.CP)
        )
          for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
  function Ds(e) {
    return new Promise((t, n) => {
      var r, i, a;
      function o() {
        Ls(),
          gapi.load("gapi.iframes", {
            callback: () => {
              t(gapi.iframes.getContext());
            },
            ontimeout: () => {
              Ls(), n(Yi(e, "network-request-failed"));
            },
            timeout: As.get(),
          });
      }
      if (
        null ===
          (i = null === (r = Qo().gapi) || void 0 === r ? void 0 : r.iframes) ||
        void 0 === i
          ? void 0
          : i.Iframe
      )
        t(gapi.iframes.getContext());
      else {
        if (!(null === (a = Qo().gapi) || void 0 === a ? void 0 : a.load)) {
          const t = co("iframefcb");
          return (
            (Qo()[t] = () => {
              gapi.load ? o() : n(Yi(e, "network-request-failed"));
            }),
            uo("".concat(lo.gapiScript, "?onload=").concat(t)).catch((e) =>
              n(e)
            )
          );
        }
        o();
      }
    }).catch((e) => {
      throw ((js = null), e);
    });
  }
  let js = null;
  const Us = new ca(5e3, 15e3),
    Ms = "__/auth/iframe",
    Fs = "emulator/auth/iframe",
    zs = {
      style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px",
      },
      "aria-hidden": "true",
      tabindex: "-1",
    },
    Bs = new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"],
    ]);
  function Vs(e) {
    const t = e.config;
    ra(t.authDomain, e, "auth-domain-config-required");
    const n = t.emulator
        ? da(t, Fs)
        : "https://".concat(e.config.authDomain, "/").concat(Ms),
      r = { apiKey: t.apiKey, appName: e.name, v: Pi },
      i = Bs.get(e.config.apiHost);
    i && (r.eid = i);
    const a = e._getFrameworks();
    return (
      a.length && (r.fw = a.join(",")), "".concat(n, "?").concat(cr(r).slice(1))
    );
  }
  async function Hs(e) {
    const t = await (function (e) {
        return (js = js || Ds(e)), js;
      })(e),
      n = Qo().gapi;
    return (
      ra(n, e, "internal-error"),
      t.open(
        {
          where: document.body,
          url: Vs(e),
          messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: zs,
          dontclear: !0,
        },
        (t) =>
          new Promise(async (n, r) => {
            await t.restyle({ setHideOnLeave: !1 });
            const i = Yi(e, "network-request-failed"),
              a = Qo().setTimeout(() => {
                r(i);
              }, Us.get());
            function o() {
              Qo().clearTimeout(a), n(t);
            }
            t.ping(o).then(o, () => {
              r(i);
            });
          })
      )
    );
  }
  const Ws = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  };
  class qs {
    constructor(e) {
      (this.window = e), (this.associatedEvent = null);
    }
    close() {
      if (this.window)
        try {
          this.window.close();
        } catch (Pl) {}
    }
  }
  function Ks(e, t, n) {
    let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
      i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
    const a = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
      o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let s = "";
    const l = Object.assign(Object.assign({}, Ws), {
        width: r.toString(),
        height: i.toString(),
        top: a,
        left: o,
      }),
      u = ir().toLowerCase();
    n && (s = Ga(u) ? "_blank" : n),
      Ka(u) && ((t = t || "http://localhost"), (l.scrollbars = "yes"));
    const c = Object.entries(l).reduce((e, t) => {
      let [n, r] = t;
      return "".concat(e).concat(n, "=").concat(r, ",");
    }, "");
    if (
      (function () {
        var e;
        return (
          Za(
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ir()
          ) &&
          !!(null === (e = window.navigator) || void 0 === e
            ? void 0
            : e.standalone)
        );
      })(u) &&
      "_self" !== s
    )
      return (
        (function (e, t) {
          const n = document.createElement("a");
          (n.href = e), (n.target = t);
          const r = document.createEvent("MouseEvent");
          r.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            1,
            0,
            0,
            0,
            0,
            !1,
            !1,
            !1,
            !1,
            1,
            null
          ),
            n.dispatchEvent(r);
        })(t || "", s),
        new qs(null)
      );
    const d = window.open(t || "", s, c);
    ra(d, e, "popup-blocked");
    try {
      d.focus();
    } catch (Pl) {}
    return new qs(d);
  }
  const $s = "__/auth/handler",
    Gs = "emulator/auth/handler",
    Js = encodeURIComponent("fac");
  async function Qs(e, t, n, r, i, a) {
    ra(e.config.authDomain, e, "auth-domain-config-required"),
      ra(e.config.apiKey, e, "invalid-api-key");
    const o = {
      apiKey: e.config.apiKey,
      appName: e.name,
      authType: n,
      redirectUrl: r,
      v: Pi,
      eventId: i,
    };
    if (t instanceof xo) {
      t.setDefaultLanguage(e.languageCode),
        (o.providerId = t.providerId || ""),
        (function (e) {
          for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
          return !0;
        })(t.getCustomParameters()) ||
          (o.customParameters = JSON.stringify(t.getCustomParameters()));
      for (const [e, t] of Object.entries(a || {})) o[e] = t;
    }
    if (t instanceof Ro) {
      const e = t.getScopes().filter((e) => "" !== e);
      e.length > 0 && (o.scopes = e.join(","));
    }
    e.tenantId && (o.tid = e.tenantId);
    const s = o;
    for (const c of Object.keys(s)) void 0 === s[c] && delete s[c];
    const l = await e._getAppCheckToken(),
      u = l ? "#".concat(Js, "=").concat(encodeURIComponent(l)) : "";
    return ""
      .concat(
        (function (e) {
          let { config: t } = e;
          if (!t.emulator)
            return "https://".concat(t.authDomain, "/").concat($s);
          return da(t, Gs);
        })(e),
        "?"
      )
      .concat(cr(s).slice(1))
      .concat(u);
  }
  const Xs = "webStorageSupport";
  const Ys = class {
    constructor() {
      (this.eventManagers = {}),
        (this.iframes = {}),
        (this.originValidationPromises = {}),
        (this._redirectPersistence = Ko),
        (this._completeRedirectFn = Cs),
        (this._overrideRedirectResult = ks);
    }
    async _openPopup(e, t, n, r) {
      var i;
      aa(
        null === (i = this.eventManagers[e._key()]) || void 0 === i
          ? void 0
          : i.manager,
        "_initialize() not called before _openPopup()"
      );
      return Ks(e, await Qs(e, t, n, oa(), r), Go());
    }
    async _openRedirect(e, t, n, r) {
      await this._originValidation(e);
      return (
        (function (e) {
          Qo().location.href = e;
        })(await Qs(e, t, n, oa(), r)),
        new Promise(() => {})
      );
    }
    _initialize(e) {
      const t = e._key();
      if (this.eventManagers[t]) {
        const { manager: e, promise: n } = this.eventManagers[t];
        return e
          ? Promise.resolve(e)
          : (aa(n, "If manager is not set, promise should be"), n);
      }
      const n = this.initAndGetManager(e);
      return (
        (this.eventManagers[t] = { promise: n }),
        n.catch(() => {
          delete this.eventManagers[t];
        }),
        n
      );
    }
    async initAndGetManager(e) {
      const t = await Hs(e),
        n = new Ts(e);
      return (
        t.register(
          "authEvent",
          (t) => {
            ra(
              null === t || void 0 === t ? void 0 : t.authEvent,
              e,
              "invalid-auth-event"
            );
            return { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" };
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        ),
        (this.eventManagers[e._key()] = { manager: n }),
        (this.iframes[e._key()] = t),
        n
      );
    }
    _isIframeWebStorageSupported(e, t) {
      this.iframes[e._key()].send(
        Xs,
        { type: Xs },
        (n) => {
          var r;
          const i =
            null === (r = null === n || void 0 === n ? void 0 : n[0]) ||
            void 0 === r
              ? void 0
              : r[Xs];
          void 0 !== i && t(!!i), Xi(e, "internal-error");
        },
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      );
    }
    _originValidation(e) {
      const t = e._key();
      return (
        this.originValidationPromises[t] ||
          (this.originValidationPromises[t] = Os(e)),
        this.originValidationPromises[t]
      );
    }
    get _shouldInitProactively() {
      return to() || $a() || Za();
    }
  };
  var Zs = "@firebase/auth",
    el = "1.7.6";
  class tl {
    constructor(e) {
      (this.auth = e), (this.internalListeners = new Map());
    }
    getUid() {
      var e;
      return (
        this.assertAuthConfigured(),
        (null === (e = this.auth.currentUser) || void 0 === e
          ? void 0
          : e.uid) || null
      );
    }
    async getToken(e) {
      if (
        (this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        !this.auth.currentUser)
      )
        return null;
      return { accessToken: await this.auth.currentUser.getIdToken(e) };
    }
    addAuthTokenListener(e) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
      const t = this.auth.onIdTokenChanged((t) => {
        e(
          (null === t || void 0 === t
            ? void 0
            : t.stsTokenManager.accessToken) || null
        );
      });
      this.internalListeners.set(e, t), this.updateProactiveRefresh();
    }
    removeAuthTokenListener(e) {
      this.assertAuthConfigured();
      const t = this.internalListeners.get(e);
      t &&
        (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
    }
    assertAuthConfigured() {
      ra(
        this.auth._initializationPromise,
        "dependent-sdk-initialized-before-auth"
      );
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh();
    }
  }
  const nl = nr("authIdTokenMaxAge") || 300;
  let rl = null;
  var il;
  (lo = {
    loadJS: (e) =>
      new Promise((t, n) => {
        const r = document.createElement("script");
        r.setAttribute("src", e),
          (r.onload = t),
          (r.onerror = (e) => {
            const t = Yi("internal-error");
            (t.customData = e), n(t);
          }),
          (r.type = "text/javascript"),
          (r.charset = "UTF-8"),
          (function () {
            var e, t;
            return null !==
              (t =
                null === (e = document.getElementsByTagName("head")) ||
                void 0 === e
                  ? void 0
                  : e[0]) && void 0 !== t
              ? t
              : document;
          })().appendChild(r);
      }),
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript:
      "https://www.google.com/recaptcha/enterprise.js?render=",
  }),
    (il = "Browser"),
    Ci(
      new gr(
        "auth",
        (e, t) => {
          let { options: n } = t;
          const r = e.getProvider("app").getImmediate(),
            i = e.getProvider("heartbeat"),
            a = e.getProvider("app-check-internal"),
            { apiKey: o, authDomain: s } = r.options;
          ra(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
          const l = {
              apiKey: o,
              authDomain: s,
              clientPlatform: il,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: no(il),
            },
            u = new ao(r, i, a, l);
          return (
            (function (e, t) {
              const n =
                  (null === t || void 0 === t ? void 0 : t.persistence) || [],
                r = (Array.isArray(n) ? n : [n]).map(za);
              (null === t || void 0 === t ? void 0 : t.errorMap) &&
                e._updateErrorMap(t.errorMap),
                e._initializeWithPersistence(
                  r,
                  null === t || void 0 === t ? void 0 : t.popupRedirectResolver
                );
            })(u, n),
            u
          );
        },
        "PUBLIC"
      )
        .setInstantiationMode("EXPLICIT")
        .setInstanceCreatedCallback((e, t, n) => {
          e.getProvider("auth-internal").initialize();
        })
    ),
    Ci(
      new gr(
        "auth-internal",
        (e) => ((e) => new tl(e))(oo(e.getProvider("auth").getImmediate())),
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Ni(
      Zs,
      el,
      (function (e) {
        switch (e) {
          case "Node":
            return "node";
          case "ReactNative":
            return "rn";
          case "Worker":
            return "webworker";
          case "Cordova":
            return "cordova";
          case "WebExtension":
            return "web-extension";
          default:
            return;
        }
      })(il)
    ),
    Ni(Zs, el, "esm2017");
  const al = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : bi;
              const t = Si.get(e);
              if (!t && e === bi && tr()) return Oi();
              if (!t) throw xi.create("no-app", { appName: e });
              return t;
            })();
      const t = Ti(e, "auth");
      if (t.isInitialized()) return t.getImmediate();
      const n = (function (e, t) {
          const n = Ti(e, "auth");
          if (n.isInitialized()) {
            const e = n.getImmediate();
            if (lr(n.getOptions(), null !== t && void 0 !== t ? t : {}))
              return e;
            Xi(e, "already-initialized");
          }
          return n.initialize({ options: t });
        })(e, { popupRedirectResolver: Ys, persistence: [ss, Wo, Ko] }),
        r = nr("authTokenSyncURL");
      if (r && "boolean" === typeof isSecureContext && isSecureContext) {
        const e = new URL(r, location.origin);
        if (location.origin === e.origin) {
          const t =
            ((i = e.toString()),
            async (e) => {
              const t = e && (await e.getIdTokenResult()),
                n =
                  t &&
                  (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
              if (n && n > nl) return;
              const r = null === t || void 0 === t ? void 0 : t.token;
              rl !== r &&
                ((rl = r),
                await fetch(i, {
                  method: r ? "POST" : "DELETE",
                  headers: r ? { Authorization: "Bearer ".concat(r) } : {},
                }));
            });
          !(function (e, t, n) {
            mr(e).beforeAuthStateChanged(t, n);
          })(n, t, () => t(n.currentUser)),
            (function (e, t, n, r) {
              mr(e).onIdTokenChanged(t, n, r);
            })(n, (e) => t(e));
        }
      }
      var i;
      const a = er("auth");
      return a && mo(n, "http://".concat(a)), n;
    })(
      Oi({
        apiKey: "AIzaSyDkOvrSQ0Z8HvtOZELLTLSXKm4IPqzR4bI",
        authDomain: "jira-clone-3636c.firebaseapp.com",
        projectId: "jira-clone-3636c",
        storageBucket: "jira-clone-3636c.appspot.com",
        messagingSenderId: "800256845702",
        appId: "1:800256845702:web:935f09a67a9fb33e00ae07",
      })
    ),
    ol = (0, a.createContext)({
      isAuthenticated: !1,
      user: { name: "", id: "", refreshToken: "", accessToken: "" },
      login: () => {},
      logout: () => {},
      googleSignIn: () => {},
      googleSignOut: () => {},
    }),
    sl = (e) => {
      let { children: t } = e;
      const [n, r] = (0, a.useState)(!1),
        [i, o] = (0, a.useState)({
          name: "",
          id: "",
          refreshToken: "",
          accessToken: "",
        }),
        s = () => {
          !(function (e) {
            mr(e).signOut();
          })(al);
        };
      return (0, qn.jsx)(ol.Provider, {
        value: {
          isAuthenticated: n,
          login: () => r(!0),
          logout: () => {
            s(),
              r(!1),
              o({ name: "", id: "", refreshToken: "", accessToken: "" });
          },
          user: i,
          setUser: o,
          googleSignIn: () => {
            const e = new Oo();
            (async function (e, t, n) {
              if (Ii(e.app))
                return Promise.reject(
                  Yi(e, "operation-not-supported-in-this-environment")
                );
              const r = oo(e);
              ta(e, t, xo);
              const i = ds(r, n);
              return new ys(r, "signInViaPopup", t, i).executeNotNull();
            })(al, e).then((e) => {
              r(!0);
            });
          },
          googleSignOut: s,
        },
        children: t,
      });
    },
    ll = () => (0, a.useContext)(ol);
  function ul(e) {
    const { login: t, setUser: n, googleSignIn: r } = ll(),
      i = re(),
      o = (0, a.useRef)(),
      s = (0, a.useRef)();
    return (0, qn.jsxs)("div", {
      style: { width: 350, margin: "auto" },
      children: [
        (0, qn.jsx)("h2", {
          style: { color: "#4575ED", marginBottom: 10 },
          children: "Login",
        }),
        (0, qn.jsxs)("div", {
          style: { border: "2px solid #4575ED", borderRadius: 8, padding: 12 },
          children: [
            (0, qn.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 15,
                marginTop: 10,
              },
              children: [
                (0, qn.jsx)("input", {
                  type: "email",
                  placeholder: "Email",
                  ref: o,
                  style: { padding: 5 },
                }),
                (0, qn.jsx)("input", {
                  type: "password",
                  placeholder: "Password",
                  ref: s,
                  style: { padding: 5 },
                }),
                (0, qn.jsx)(Kn, {
                  onClick: (e) => {
                    e.preventDefault(),
                      Wn.post(
                        "https://jira-clone-api-zeta.vercel.app/api/users/login",
                        { email: o.current.value, password: s.current.value }
                      ).then(
                        (e) => {
                          n(e.data), t(), i("/dashboard");
                        },
                        (e) => {
                          console.log(e);
                        }
                      );
                  },
                  backgroundColor: "#4575ED",
                  color: "white",
                  title: "Login",
                  borderRadius: 2,
                }),
              ],
            }),
            (0, qn.jsxs)("p", {
              style: { fontSize: 12, fontWeight: 600, textAlign: "center" },
              children: [
                "Don't have an account?",
                (0, qn.jsxs)(Re, {
                  to: "/register",
                  style: { textDecoration: "none" },
                  children: [
                    " ",
                    (0, qn.jsx)("span", {
                      className: "linkgreen",
                      children: "SignUp",
                    }),
                  ],
                }),
              ],
            }),
            (0, qn.jsx)("div", {
              style: { textAlign: "center", width: "100%" },
              children: (0, qn.jsx)(Kn, {
                onClick: r,
                backgroundColor: "#4575ED",
                color: "white",
                title: "Login with Google",
                borderRadius: 6,
              }),
            }),
          ],
        }),
      ],
    });
  }
  function cl(e) {
    const [t, n] = (0, a.useState)(!1),
      r = (0, a.useRef)(),
      i = (0, a.useRef)(),
      o = (0, a.useRef)(),
      s = (0, a.useRef)(),
      l = (0, a.useRef)();
    return (0, qn.jsxs)("div", {
      style: { width: 350, margin: "auto" },
      children: [
        (0, qn.jsx)("h2", {
          style: { color: "#4575ED", marginBottom: 10 },
          children: "SignUp",
        }),
        (0, qn.jsxs)("div", {
          style: { border: "2px solid #4575ED", borderRadius: 8, padding: 12 },
          children: [
            (0, qn.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 15,
                marginTop: 10,
              },
              children: [
                (0, qn.jsx)("input", {
                  type: "text",
                  placeholder: "First Name",
                  ref: i,
                  style: { padding: 5 },
                }),
                (0, qn.jsx)("input", {
                  type: "text",
                  placeholder: "Last Name",
                  ref: r,
                  style: { padding: 5 },
                }),
                (0, qn.jsx)("input", {
                  type: "email",
                  placeholder: "Email",
                  ref: o,
                  style: { padding: 5 },
                }),
                (0, qn.jsx)("input", {
                  type: "password",
                  placeholder: "Password",
                  ref: s,
                  style: { padding: 5 },
                }),
                (0, qn.jsx)("input", {
                  type: "password",
                  placeholder: "Confirm Password",
                  ref: l,
                  style: { padding: 5 },
                }),
                t
                  ? (0, qn.jsx)("p", {
                      style: { margin: 0, fontSize: 12, color: "red" },
                      children: "Password doesn't match",
                    })
                  : (0, qn.jsx)(qn.Fragment, {}),
                (0, qn.jsx)(Kn, {
                  onClick: (e) => {
                    s !== l && n(!0),
                      e.preventDefault(),
                      Wn.post(
                        "https://jira-clone-api-zeta.vercel.app/api/users/register",
                        {
                          fname: i.current.value,
                          lname: r.current.value,
                          email: o.current.value,
                          password: s.current.value,
                        }
                      ).then(
                        (e) => {
                          console.log(e), e && localStorage.setItem("id2", "");
                        },
                        (e) => {
                          console.log(e);
                        }
                      );
                  },
                  backgroundColor: "#4575ED",
                  color: "white",
                  title: "SignUp",
                  borderRadius: 2,
                }),
              ],
            }),
            (0, qn.jsxs)("p", {
              style: { fontSize: 12, fontWeight: 600, textAlign: "center" },
              children: [
                "Already have an account?",
                (0, qn.jsxs)(Re, {
                  to: "/login",
                  style: { textDecoration: "none" },
                  children: [
                    " ",
                    (0, qn.jsx)("span", {
                      className: "linkgreen",
                      children: "Login",
                    }),
                  ],
                }),
              ],
            }),
            (0, qn.jsx)("div", {
              style: { textAlign: "center", width: "100%" },
              children: (0, qn.jsx)(Kn, {
                onClick: () => {},
                backgroundColor: "#4575ED",
                color: "white",
                title: "Signup with Google",
                borderRadius: 6,
              }),
            }),
          ],
        }),
      ],
    });
  }
  const dl = (e) => {
    let { id: t, children: n, parentColumn: r } = e;
    return (0, qn.jsx)("div", {
      draggable: !0,
      onDragStart: (e) => {
        console.log(r);
        const n = JSON.stringify({ id: t, parentColumn: r });
        e.dataTransfer.setData("application/json", n),
          (e.dataTransfer.effectAllowed = "move");
      },
      style: { cursor: "move" },
      children: n,
    });
  };
  class fl extends Error {}
  function hl(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
      case 0:
        break;
      case 2:
        t += "==";
        break;
      case 3:
        t += "=";
        break;
      default:
        throw new Error("base64 string is not of the correct length");
    }
    try {
      return (function (e) {
        return decodeURIComponent(
          atob(e).replace(/(.)/g, (e, t) => {
            let n = t.charCodeAt(0).toString(16).toUpperCase();
            return n.length < 2 && (n = "0" + n), "%" + n;
          })
        );
      })(t);
    } catch (n) {
      return atob(t);
    }
  }
  function pl(e, t) {
    if ("string" !== typeof e)
      throw new fl("Invalid token specified: must be a string");
    t || (t = {});
    const n = !0 === t.header ? 0 : 1,
      r = e.split(".")[n];
    if ("string" !== typeof r)
      throw new fl("Invalid token specified: missing part #".concat(n + 1));
    let i;
    try {
      i = hl(r);
    } catch (Pl) {
      throw new fl(
        "Invalid token specified: invalid base64 for part #"
          .concat(n + 1, " (")
          .concat(Pl.message, ")")
      );
    }
    try {
      return JSON.parse(i);
    } catch (Pl) {
      throw new fl(
        "Invalid token specified: invalid json for part #"
          .concat(n + 1, " (")
          .concat(Pl.message, ")")
      );
    }
  }
  fl.prototype.name = "InvalidTokenError";
  const ml = async () => {
      let {
        user: { accessToken: e, refreshToken: t },
        isAuthenticated: n,
      } = ll();
      const r = re(),
        i = Wn.create({ baseURL: "" });
      if (!n) return r("/login"), Promise.reject();
      var a;
      n &&
        !e &&
        (e = await (null === (a = al.currentUser) || void 0 === a
          ? void 0
          : a.getIdToken()));
      let o = e;
      return (
        i.interceptors.request.use(
          async (e) => {
            return (
              1e3 * pl(o).exp < new Date().getTime() &&
                (console.log("new access built"),
                (o = (
                  await (async (e) => {
                    try {
                      const t = await Wn.post(
                        `${process.env.REACT_APP_SERVER}/users/refresh`,
                        {
                          token: e,
                        }
                      );
                      return console.log(t.data), t.data;
                    } catch (t) {}
                  })(t)
                ).accessToken)),
              o && (e.headers.Authorization = "Bearer ".concat(o)),
              e
            );
          },
          (e) => Promise.reject(e)
        ),
        i
      );
    },
    gl = (e) => {
      let { accessToken: t, refreshToken: n } = e;
      const r = Wn.create({ baseURL: "" });
      let i = t;
      return (
        r.interceptors.request.use(
          async (e) => {
            return (
              1e3 * pl(i).exp < new Date().getTime() &&
                (console.log("new access built"),
                (i = await (async (e) => {
                  try {
                    return (
                      await Wn.post(
                        `${process.env.REACT_APP_SERVER}/users/refresh`,
                        { token: e }
                      )
                    ).data;
                  } catch (t) {}
                })(n).accessToken)),
              i && (e.headers.Authorization = "Bearer ".concat(i)),
              e
            );
          },
          (e) => Promise.reject(e)
        ),
        r
      );
    },
    vl = (0, a.createContext)({ handleDrop: () => {}, data: void 0 }),
    yl = (e) => {
      let { children: t } = e;
      const { user: n } = ll(),
        [r, i] = (0, a.useState)([]),
        o = async (e) => {
          await gl(n)
            .post(
              "https://jira-clone-api-zeta.vercel.app/api/posts/updateTask",
              e
            )
            .then((e) => {});
        };
      return (0, qn.jsx)(vl.Provider, {
        value: {
          data: r,
          handleDrop: (e) => {
            var t;
            let { id: n, parentColumn: a, currentColumn: s } = e;
            o({
              ...(null === r ||
              void 0 === r ||
              null === (t = r[a]) ||
              void 0 === t
                ? void 0
                : t[n]),
              status: s,
            }),
              i((e) => {
                var t, r, i;
                const o = e.map((e) => [...e]),
                  l =
                    null === o ||
                    void 0 === o ||
                    null === (t = o[a]) ||
                    void 0 === t
                      ? void 0
                      : t[n];
                return (
                  null === o ||
                    void 0 === o ||
                    null === (r = o[a]) ||
                    void 0 === r ||
                    r.splice(n, 1),
                  null === o ||
                    void 0 === o ||
                    null === (i = o[s]) ||
                    void 0 === i ||
                    i.push(l),
                  o
                );
              });
          },
          setData: i,
          fetchUserTasks: async () => {
            await gl(n)
              .get("https://jira-clone-api-zeta.vercel.app/api/posts/userTasks")
              .then((e) => {
                const t = [[], [], []];
                for (let n = 0; n < e.data.length; n++) {
                  const r = e.data[n];
                  t[r.status || 0].push(r);
                }
                i(t);
              });
          },
        },
        children: t,
      });
    },
    bl = () => (0, a.useContext)(vl),
    wl = (e) => {
      let { close: t, id: n, parentColumn: r, data: i } = e;
      const o = (0, a.useRef)(),
        s = (0, a.useRef)(),
        { setData: l } = bl(),
        u = ml();
      return (0, qn.jsxs)("div", {
        style: {
          padding: 5,
          borderRadius: 8,
          width: 350,
          height: "80dvh",
          display: "flex",
          flexDirection: "column",
        },
        children: [
          (0, qn.jsx)("div", {
            style: { fontSize: 18, fontWeight: 700 },
            children: "Edit Task",
          }),
          (0, qn.jsx)("div", {
            style: { fontSize: 14, marginTop: 28 },
            children: "Title",
          }),
          (0, qn.jsx)("input", {
            type: "text",
            ref: o,
            defaultValue: null === i || void 0 === i ? void 0 : i.title,
            style: {
              padding: 5,
              width: "95%",
              marginTop: 5,
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
            },
          }),
          (0, qn.jsx)("div", {
            style: { fontSize: 14, marginTop: 28 },
            children: "Description",
          }),
          (0, qn.jsx)("input", {
            type: "text",
            ref: s,
            defaultValue: null === i || void 0 === i ? void 0 : i.description,
            style: {
              padding: 5,
              width: "95%",
              marginTop: 5,
              border: "none",
              outline: "none",
              borderBottom: "1px solid black",
            },
          }),
          (0, qn.jsxs)("div", {
            style: {
              display: "flex",
              marginTop: "auto",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: 6,
            },
            children: [
              (0, qn.jsx)(Kn, {
                title: "Edit",
                borderRadius: 6,
                backgroundColor: "#F1F2F4",
                onClick: async () => {
                  await u
                    .post(
                      "https://jira-clone-api-zeta.vercel.app/api/posts/updateTask",
                      {
                        title: o.current.value,
                        description: s.current.value,
                        _id: null === i || void 0 === i ? void 0 : i._id,
                      }
                    )
                    .then((e) => {
                      console.log(e.data),
                        l((t) => {
                          const i = t.map((e) => [...e]);
                          return (i[r][n] = e.data), i;
                        }),
                        t();
                    });
                },
              }),
              (0, qn.jsx)(Kn, {
                title: "Cancel",
                onClick: t,
                borderRadius: 6,
                backgroundColor: "#CCCFD5",
              }),
            ],
          }),
        ],
      });
    },
    Sl = (e) => {
      let { close: t, data: n } = e;
      return (0, qn.jsxs)("div", {
        style: {
          padding: 5,
          borderRadius: 8,
          width: 350,
          height: "80dvh",
          display: "flex",
          flexDirection: "column",
        },
        children: [
          (0, qn.jsx)("div", {
            style: { fontSize: 20, fontWeight: 700 },
            children: "Task Details",
          }),
          (0, qn.jsxs)("div", {
            style: { fontSize: 18, fontWeight: 600, marginTop: 20 },
            children: [
              "Title : ",
              null === n || void 0 === n ? void 0 : n.title,
            ],
          }),
          (0, qn.jsxs)("div", {
            style: {
              fontSize: 14,
              marginTop: 18,
              fontWeight: 600,
              color: "#000a",
            },
            children: [
              "Description: ",
              null === n || void 0 === n ? void 0 : n.description,
            ],
          }),
          (0, qn.jsxs)("div", {
            style: {
              fontSize: 14,
              marginTop: 18,
              fontWeight: 600,
              color: "#0008",
            },
            children: [
              "Created at: ",
              new Date(
                null === n || void 0 === n ? void 0 : n.createdAt
              ).toUTCString(),
            ],
          }),
          (0, qn.jsx)("div", {
            style: {
              display: "flex",
              marginTop: "auto",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: 6,
            },
            children: (0, qn.jsx)(Kn, {
              title: "Close",
              onClick: t,
              borderRadius: 6,
              backgroundColor: "#3057DF",
              color: "white",
            }),
          }),
        ],
      });
    },
    kl = (e) => {
      let { data: t, id: n, parentColumn: r } = e;
      const i = ml(),
        { setData: o } = bl(),
        [s, l] = (0, a.useState)();
      return (0, qn.jsxs)(qn.Fragment, {
        children: [
          !!s && (0, qn.jsx)("dialog", { open: !0, children: s }),
          (0, qn.jsx)(dl, {
            id: n,
            parentColumn: r,
            children: (0, qn.jsxs)("div", {
              style: { background: "#D9E6FC", padding: 10, borderRadius: 8 },
              children: [
                (0, qn.jsx)("div", {
                  style: { fontSize: 18, fontWeight: 700 },
                  children: null === t || void 0 === t ? void 0 : t.title,
                }),
                (0, qn.jsx)("div", {
                  style: { fontSize: 14, marginTop: 8 },
                  children: null === t || void 0 === t ? void 0 : t.description,
                }),
                (0, qn.jsxs)("div", {
                  style: { fontSize: 14, marginTop: 35 },
                  children: [
                    "Created at: ",
                    new Date(
                      null === t || void 0 === t ? void 0 : t.createdAt
                    ).toUTCString(),
                  ],
                }),
                (0, qn.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: 10,
                    marginTop: 10,
                    justifyContent: "flex-end",
                  },
                  children: [
                    (0, qn.jsx)(Kn, {
                      onClick: async () => {
                        await i
                          .post(
                            "https://jira-clone-api-zeta.vercel.app/api/posts/deleteTask",
                            { _id: null === t || void 0 === t ? void 0 : t._id }
                          )
                          .then((e) => {
                            o((e) => {
                              var t;
                              const i = e.map((e) => [...e]);
                              return (
                                null === i ||
                                  void 0 === i ||
                                  null === (t = i[r]) ||
                                  void 0 === t ||
                                  t.splice(n, 1),
                                i
                              );
                            });
                          });
                      },
                      backgroundColor: "#E66E6B",
                      title: "Delete",
                      color: "white",
                    }),
                    (0, qn.jsx)(Kn, {
                      backgroundColor: "#6698F2",
                      title: "Edit",
                      color: "white",
                      onClick: () => {
                        l(
                          (0, qn.jsx)(wl, {
                            close: () => l(void 0),
                            id: n,
                            parentColumn: r,
                            data: t,
                          })
                        );
                      },
                    }),
                    (0, qn.jsx)(Kn, {
                      onClick: () =>
                        l((0, qn.jsx)(Sl, { close: () => l(void 0), data: t })),
                      backgroundColor: "#4575ED",
                      title: "View Details",
                      color: "white",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    },
    El = (e) => {
      let { onDrop: t, children: n, id: r } = e;
      return (0, qn.jsx)("div", {
        onDragOver: (e) => {
          e.preventDefault(), (e.dataTransfer.dropEffect = "move");
        },
        onDrop: (e) => {
          const n = e.dataTransfer.getData("application/json"),
            i = JSON.parse(n);
          console.log(i), t({ ...i, currentColumn: r });
        },
        style: { display: "flex", flex: 1, minHeight: "100px" },
        children: n,
      });
    },
    _l = (e) => {
      let { data: t, columnId: n, title: r } = e;
      const { handleDrop: i } = bl();
      return (0, qn.jsx)(El, {
        id: n,
        onDrop: i,
        children: (0, qn.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
            background: "white",
            border: "1px solid #E7E9EC",
            padding: 10,
            minWidth: 350,
            minHeight: 400,
            borderRadius: "10px",
          },
          children: [
            (0, qn.jsx)("div", {
              style: {
                color: "white",
                background: "#6698F2",
                padding: "8px 12px",
                fontWeight: 700,
                borderRadius: 5,
              },
              children: r,
            }),
            null === t || void 0 === t
              ? void 0
              : t.map((e, t) =>
                  (0, qn.jsx)(
                    kl,
                    { data: e, id: t, parentColumn: n },
                    "task-".concat(n, "-").concat(t, "}")
                  )
                ),
          ],
        }),
      });
    },
    Cl = (e) => {
      let { close: t } = e;
      const n = (0, a.useRef)(),
        r = (0, a.useRef)(),
        { setData: i } = bl(),
        o = ml();
      return (0, qn.jsxs)("div", {
        style: {
          padding: 5,
          borderRadius: 8,
          width: 350,
          height: "80dvh",
          display: "flex",
          flexDirection: "column",
        },
        children: [
          (0, qn.jsx)("div", {
            style: { fontSize: 18, fontWeight: 700 },
            children: "Title",
          }),
          (0, qn.jsx)("input", {
            type: "text",
            ref: n,
            style: {
              padding: 5,
              width: "95%",
              marginTop: 20,
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
            },
          }),
          (0, qn.jsx)("div", {
            style: { fontSize: 14, marginTop: 28 },
            children: "Description",
          }),
          (0, qn.jsx)("input", {
            type: "text",
            ref: r,
            style: {
              padding: 5,
              width: "95%",
              marginTop: 20,
              border: "none",
              outline: "none",
              borderBottom: "1px solid black",
            },
          }),
          (0, qn.jsxs)("div", {
            style: {
              display: "flex",
              marginTop: "auto",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: 6,
            },
            children: [
              (0, qn.jsx)(Kn, {
                title: "Add",
                borderRadius: 6,
                backgroundColor: "#F1F2F4",
                onClick: async () => {
                  await o
                    .post(
                      "https://jira-clone-api-zeta.vercel.app/api/posts/setpost",
                      { title: n.current.value, description: r.current.value }
                    )
                    .then((e) => {
                      i((t) => {
                        var n;
                        const r = t.map((e) => [...e]);
                        return (
                          null === r ||
                            void 0 === r ||
                            null === (n = r[0]) ||
                            void 0 === n ||
                            n.push(e.data),
                          r
                        );
                      }),
                        t();
                    });
                },
              }),
              (0, qn.jsx)(Kn, {
                title: "Cancel",
                onClick: t,
                borderRadius: 6,
                backgroundColor: "#CCCFD5",
              }),
            ],
          }),
        ],
      });
    };
  function Tl(e) {
    const { data: t, fetchUserTasks: n } = bl(),
      {
        user: { accessToken: r },
      } = ll(),
      [i, o] = (0, a.useState)();
    return (
      (0, a.useEffect)(() => {
        console.log("first"), r && n(r);
      }, [r]),
      (0, qn.jsxs)("div", {
        className: "Loginandregister mt-3",
        children: [
          !!i && (0, qn.jsx)("dialog", { open: !0, children: i }),
          (0, qn.jsx)("div", {
            style: { marginLeft: 150, marginBlock: 20 },
            children: (0, qn.jsx)(Kn, {
              title: "Add Task",
              backgroundColor: "#4575ED",
              color: "white",
              onClick: () => {
                o((0, qn.jsx)(Cl, { close: () => o(void 0) }));
              },
            }),
          }),
          (0, qn.jsxs)("div", {
            style: {
              display: "flex",
              gap: 15,
              justifyContent: "center",
              marginTop: 20,
              flexWrap: "wrap",
              marginInline: 150,
            },
            children: [
              (0, qn.jsx)(_l, {
                data: null === t || void 0 === t ? void 0 : t[0],
                columnId: 0,
                title: "TODO",
              }),
              (0, qn.jsx)(_l, {
                data: null === t || void 0 === t ? void 0 : t[1],
                columnId: 1,
                title: "IN PROGRESS",
              }),
              (0, qn.jsx)(_l, {
                data: null === t || void 0 === t ? void 0 : t[2],
                columnId: 2,
                title: "DONE",
              }),
            ],
          }),
        ],
      })
    );
  }
  function Il(e) {
    const { isAuthenticated: t, logout: n } = ll(),
      r = re();
    return (0, qn.jsx)("div", {
      children: (0, qn.jsxs)("nav", {
        style: {
          display: "flex",
          background: "#4575ED",
          padding: 15,
          justifyContent: "space-between",
        },
        children: [
          (0, qn.jsx)(Kn, {
            title: "Github Repo",
            backgroundColor: "white",
            onClick: () =>
              window.open(
                "https://github.com/Lakshay-art/jira-clone",
                "_blanc"
              ),
          }),
          t
            ? (0, qn.jsx)(Kn, {
                title: "Logout",
                backgroundColor: "#E66E6B",
                color: "#fff",
                onClick: () => {
                  n(), r("/login");
                },
              })
            : (0, qn.jsx)(Kn, {
                title: "Login",
                backgroundColor: "#fff8",
                onClick: () => {
                  r("/login");
                },
              }),
        ],
      }),
    });
  }
  const xl = function () {
      const { isAuthenticated: e, setUser: t, login: n } = ll();
      return (
        (0, a.useEffect)(() => {
          !(function (e, t, n, r) {
            mr(e).onAuthStateChanged(t, n, r);
          })(al, (e) => {
            e &&
              Wn.post(
                "https://jira-clone-api-zeta.vercel.app/api/users/glogin",
                { googleAuthData: e }
              ).then((e) => {
                t(null === e || void 0 === e ? void 0 : e.data), n();
              });
          });
        }, []),
        (0, qn.jsx)("div", {
          className: "App",
          children: (0, qn.jsxs)(Te, {
            children: [
              (0, qn.jsx)(Il, {}),
              (0, qn.jsxs)(we, {
                children: [
                  (0, qn.jsx)(ye, {
                    path: "/",
                    element: (0, qn.jsx)(ve, { to: "/dashboard" }),
                  }),
                  (0, qn.jsx)(ye, {
                    path: "/login",
                    element: (0, qn.jsx)(ul, {}),
                  }),
                  (0, qn.jsx)(ye, {
                    path: "/dashboard",
                    element: e
                      ? (0, qn.jsx)(yl, { children: (0, qn.jsx)(Tl, {}) })
                      : (0, qn.jsx)(ve, { to: "/login" }),
                  }),
                  (0, qn.jsx)(ye, {
                    path: "/register",
                    element: (0, qn.jsx)(cl, {}),
                  }),
                ],
              }),
            ],
          }),
        })
      );
    },
    Rl = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(453)
          .then(n.bind(n, 453))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: i, getLCP: a, getTTFB: o } = t;
            n(e), r(e), i(e), a(e), o(e);
          });
    };
  s.createRoot(document.getElementById("root")).render(
    (0, qn.jsx)(a.StrictMode, {
      children: (0, qn.jsx)(sl, { children: (0, qn.jsx)(xl, {}) }),
    })
  ),
    Rl();
})();
//# sourceMappingURL=main.876a3dec.js.map
