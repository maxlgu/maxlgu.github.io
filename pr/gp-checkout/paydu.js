window['denylistedDomainsHashedValueListForGpayButtonWithCardInfo'] = [-718583466, -651407173, 1501053020, 1270931793];
window['whitelistedDomainsHashedValueListForGpayButtonWithCardInfo'] = [1432838318];
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "PaymentHandlerLaunchPayjs"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "PaymentHandlerDynamicUpdatesLaunchPayjs"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnablePopupForChromeAndroid"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "DisableNativeReadyToPayCheckForPaymentHandler"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "DisablePaymentRequest"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnablePaymentRequest"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnableLoadPaymentDataTimeout"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnableOfferCallback"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "EnablePaymentMethodCallback"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a = this || self;
var b = ["google", "payments", "api", "UseCanMakePaymentResultFromPayjs"],
    c = window || a;
b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
for (var d; b.length && (d = b.shift());) b.length ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = !0;
(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ca = function(a) {
            if (!(a instanceof Array)) {
                a = ba(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        da = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ea = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        n = ea(this),
        p = function(a, b) {
            if (b) a: {
                var c = n;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && da(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    p("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    var fa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    p("Object.assign", function(a) {
        return a || fa
    });
    p("Promise", function(a) {
        function b() {
            this.S = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.Ab = function(g) {
            if (null == this.S) {
                this.S = [];
                var h = this;
                this.Bb(function() {
                    h.fc()
                })
            }
            this.S.push(g)
        };
        var d = n.setTimeout;
        b.prototype.Bb = function(g) {
            d(g, 0)
        };
        b.prototype.fc = function() {
            for (; this.S && this.S.length;) {
                var g = this.S;
                this.S = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (m) {
                        this.ac(m)
                    }
                }
            }
            this.S = null
        };
        b.prototype.ac = function(g) {
            this.Bb(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.qa = 0;
            this.X = void 0;
            this.oa = [];
            this.Ib = !1;
            var h = this.cb();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        e.prototype.cb = function() {
            function g(m) {
                return function(q) {
                    l || (l = !0, m.call(h, q))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.tc),
                reject: g(this.qb)
            }
        };
        e.prototype.tc = function(g) {
            if (g === this) this.qb(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.wc(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.sc(g) : this.Gb(g)
            }
        };
        e.prototype.sc = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.qb(l);
                return
            }
            "function" == typeof h ? this.xc(h, g) : this.Gb(g)
        };
        e.prototype.qb = function(g) {
            this.Tb(2, g)
        };
        e.prototype.Gb = function(g) {
            this.Tb(1, g)
        };
        e.prototype.Tb = function(g, h) {
            if (0 != this.qa) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.qa);
            this.qa = g;
            this.X = h;
            2 === this.qa && this.uc();
            this.hc()
        };
        e.prototype.uc = function() {
            var g = this;
            d(function() {
                if (g.lc()) {
                    var h = n.console;
                    "undefined" !==
                    typeof h && h.error(g.X)
                }
            }, 1)
        };
        e.prototype.lc = function() {
            if (this.Ib) return !1;
            var g = n.CustomEvent,
                h = n.Event,
                l = n.dispatchEvent;
            if ("undefined" === typeof l) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = n.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.X;
            return l(g)
        };
        e.prototype.hc = function() {
            if (null != this.oa) {
                for (var g = 0; g < this.oa.length; ++g) f.Ab(this.oa[g]);
                this.oa = null
            }
        };
        var f = new b;
        e.prototype.wc = function(g) {
            var h = this.cb();
            g.Ma(h.resolve, h.reject)
        };
        e.prototype.xc = function(g, h) {
            var l = this.cb();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.then = function(g, h) {
            function l(x, D) {
                return "function" == typeof x ? function(ha) {
                    try {
                        m(x(ha))
                    } catch (L) {
                        q(L)
                    }
                } : D
            }
            var m, q, F = new e(function(x, D) {
                m = x;
                q = D
            });
            this.Ma(l(g, m), l(h, q));
            return F
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Ma = function(g, h) {
            function l() {
                switch (m.qa) {
                    case 1:
                        g(m.X);
                        break;
                    case 2:
                        h(m.X);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.qa);
                }
            }
            var m = this;
            null == this.oa ? f.Ab(l) : this.oa.push(l);
            this.Ib = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, l) {
                for (var m = ba(g), q = m.next(); !q.done; q = m.next()) c(q.value).Ma(h, l)
            })
        };
        e.all = function(g) {
            var h = ba(g),
                l = h.next();
            return l.done ? c([]) : new e(function(m, q) {
                function F(ha) {
                    return function(L) {
                        x[ha] = L;
                        D--;
                        0 == D && m(x)
                    }
                }
                var x = [],
                    D = 0;
                do x.push(void 0), D++, c(l.value).Ma(F(x.length -
                    1), q), l = h.next(); while (!l.done)
            })
        };
        return e
    });
    var r = this || self,
        ia = function(a, b) {
            a = a.split(".");
            var c = window || r;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        },
        ja = function() {},
        t = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        ka = function(a) {
            var b = t(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" ==
                b
        },
        la = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ma = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        na = function(a, b, c) {
            na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
            return na.apply(null, arguments)
        },
        oa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Xa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.dd = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        pa = function(a) {
            return a
        };

    function qa(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, qa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    oa(qa, Error);
    qa.prototype.name = "CustomError";
    var ra = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        qa.call(this, c + a[d])
    };
    oa(ra, qa);
    ra.prototype.name = "AssertionError";
    var sa = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else a && (e += ": " + a, f = b);
            throw new ra("" + e, f || []);
        },
        v = function(a, b, c) {
            a || sa("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        ta = function(a, b) {
            throw new ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        ua = function(a, b, c) {
            "number" !== typeof a && sa("Expected number but got %s: %s.", [t(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        va = function(a, b, c) {
            "string" !== typeof a && sa("Expected string but got %s: %s.",
                [t(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        wa = function(a, b, c) {
            u(a) || sa("Expected object but got %s: %s.", [t(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
    var w = function(a, b) {
        this.vb = a === xa && b || "";
        this.Xb = ya
    };
    w.prototype.za = !0;
    w.prototype.xa = function() {
        return this.vb
    };
    w.prototype.toString = function() {
        return "Const{" + this.vb + "}"
    };
    var y = function(a) {
            if (a instanceof w && a.constructor === w && a.Xb === ya) return a.vb;
            ta("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        z = function(a) {
            return new w(xa, a)
        },
        ya = {},
        xa = {};
    var za = {
            Ub: "PAYMENT_AUTHORIZATION",
            Vb: "SHIPPING_ADDRESS",
            Wb: "SHIPPING_OPTION",
            Zc: "UNKNOWN_INTENT"
        },
        Aa = {
            Dc: "CANARY",
            Mc: "LOCAL",
            Sc: "PREPROD",
            Tc: "PRODUCTION",
            Uc: "SANDBOX",
            Wc: "TEST",
            Xc: "TIN"
        },
        Ba = {
            Ec: "CARD",
            Yc: "TOKENIZED_CARD",
            ad: "UPI"
        },
        Ca = {
            Fc: "CRYPTOGRAM_3DS",
            Qc: "PAN_ONLY"
        },
        Da = {
            Ic: "ESTIMATED",
            Kc: "FINAL",
            Oc: "NOT_CURRENTLY_KNOWN"
        },
        Ea = {
            SHORT: "short",
            Nc: "long",
            Rc: "plain",
            Cc: "buy",
            Hc: "donate"
        },
        Fa = {
            Gc: "default",
            Bc: "black",
            bd: "white"
        },
        Ga = {
            Vc: "static",
            Jc: "fill"
        },
        Ha = {
            en: 152,
            ar: 189,
            bg: 163,
            ca: 182,
            cs: 192,
            da: 154,
            de: 183,
            el: 178,
            es: 183,
            et: 147,
            fi: 148,
            fr: 183,
            hr: 157,
            id: 186,
            it: 182,
            ja: 148,
            ko: 137,
            ms: 186,
            nl: 167,
            no: 158,
            pl: 182,
            pt: 193,
            ru: 206,
            sk: 157,
            sl: 211,
            sr: 146,
            sv: 154,
            th: 146,
            tr: 161,
            uk: 207,
            zh: 156
        },
        Ia = {
            en: 177,
            ar: 166,
            bg: 199,
            ca: 164,
            cs: 203,
            da: 171,
            de: 179,
            el: 161,
            es: 165,
            et: 150,
            fi: 167,
            fr: 213,
            hr: 180,
            id: 224,
            it: 159,
            ja: 167,
            ko: 137,
            ms: 194,
            nl: 183,
            no: 171,
            pl: 236,
            pt: 173,
            ru: 311,
            sk: 176,
            sl: 228,
            sr: 172,
            sv: 178,
            th: 161,
            tr: 179,
            uk: 239,
            zh: 156
        },
        Ja = z('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" height="36px" width="130px"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="2" y1="10.5" x2="2" y2="29.5" style="stroke: #d9d9d9; stroke-width:2"></line><image x="11" y="6" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_grey600_36dp.png"></image><text x="52" y="25.5" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #5F6368">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>'),
        Ka = z('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" height="36px" width="130px"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="2" y1="10.5" x2="2" y2="29.5" style="stroke: #5F6368; stroke-width:2"></line><image x="11" y="6" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_white_36dp.png"></image><text x="52" y="25.5" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #FFFFFF">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>'),
        La = z('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" viewBox="0 0 130 36"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="8" y1="7" x2="8" y2="26" style="stroke: #d9d9d9; stroke-width:2"></line><image x="16" y="2.5" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_grey600_36dp.png"></image><text x="57" y="22" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #5f6368">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>'),
        Ma = z('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" viewBox="0 0 130 36"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="8" y1="7" x2="8" y2="26" style="stroke: #5f6368; stroke-width:2"></line><image x="16" y="2.5" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_white_36dp.png"></image><text x="57" y="22" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #fff">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>');

    function A(a, b) {
        b = void 0 === b ? document : b;
        var c = document.createElement("style");
        c.type = "text/css";
        c.textContent = a;
        if (b instanceof HTMLDocument) document.head.appendChild(c);
        else if (b instanceof ShadowRoot) b.appendChild(c);
        else throw Error("Parameter 'buttonRootNode' should be either document or a shadowroot.");
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Na = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

    function Oa(a) {
        for (var b = Array(36), c = 0, d, e = 0; 36 > e; e++) 8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-" : 14 == e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = Na[19 == e ? d & 3 | 8 : d]);
        return b.join("") + "." + a
    }

    function Pa(a) {
        for (var b = 1; b < arguments.length; b++) a = Qa(a, arguments[b]);
        return a
    }

    function Qa(a, b) {
        if ("object" !== typeof b || null === b) return a;
        for (var c in b) b.hasOwnProperty(c) && void 0 !== b[c] && (null == b[c] ? a[c] = null : null == a[c] || "object" !== typeof a[c] || "object" !== typeof b[c] || Array.isArray(b[c]) || Array.isArray(a[c]) ? a[c] = b[c] : Qa(a[c], b[c]));
        return a
    }

    function Ra() {
        var a = Sa,
            b = 0,
            c;
        if (0 == a.length) return b;
        for (c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            b = (b << 5) - b + d;
            b &= b
        }
        return b
    }

    function B(a) {
        console.error("DEVELOPER_ERROR in " + a.ia + ": " + a.errorMessage)
    };
    var Ta = Array.prototype.indexOf ? function(a, b) {
            v(null != a.length);
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ua = Array.prototype.forEach ? function(a, b, c) {
            v(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Va = Array.prototype.map ?
        function(a, b) {
            v(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        };

    function Wa(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Xa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    var Ya = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Za = /&/g,
        $a = /</g,
        ab = />/g,
        bb = /"/g,
        cb = /'/g,
        db = /\x00/g,
        eb = /[\x00&<>"']/,
        C = function(a, b) {
            return -1 != a.indexOf(b)
        },
        fb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var E;
    a: {
        var gb = r.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                E = hb;
                break a
            }
        }
        E = ""
    };
    var ib = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        jb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        kb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < jb.length; f++) c = jb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var lb, mb = function() {
        if (void 0 === lb) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) try {
                a = b.createPolicy("goog#html", {
                    createHTML: pa,
                    createScript: pa,
                    createScriptURL: pa
                })
            } catch (c) {
                r.console && r.console.error(c.message)
            }
            lb = a
        }
        return lb
    };
    var ob = function(a, b) {
        this.ob = b === nb ? a : ""
    };
    k = ob.prototype;
    k.za = !0;
    k.xa = function() {
        return this.ob.toString()
    };
    k.gb = !0;
    k.wa = function() {
        return 1
    };
    k.toString = function() {
        return "TrustedResourceUrl{" + this.ob + "}"
    };
    var pb = function(a) {
            if (a instanceof ob && a.constructor === ob) return a.ob;
            ta("expected object of type TrustedResourceUrl, got '" + a + "' of type " + t(a));
            return "type_error:TrustedResourceUrl"
        },
        tb = function(a, b) {
            var c = y(a);
            if (!qb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(rb, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof
                w ? y(d) : encodeURIComponent(String(d))
            });
            return sb(a)
        },
        rb = /%{(\w+)}/g,
        qb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        nb = {},
        sb = function(a) {
            var b = mb();
            a = b ? b.createScriptURL(a) : a;
            return new ob(a, nb)
        };
    var G = function(a, b) {
        this.nb = b === ub ? a : ""
    };
    k = G.prototype;
    k.za = !0;
    k.xa = function() {
        return this.nb.toString()
    };
    k.gb = !0;
    k.wa = function() {
        return 1
    };
    k.toString = function() {
        return "SafeUrl{" + this.nb + "}"
    };
    var vb = function(a) {
            if (a instanceof G && a.constructor === G) return a.nb;
            ta("expected object of type SafeUrl, got '" + a + "' of type " + t(a));
            return "type_error:SafeUrl"
        },
        wb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        ub = {};
    var yb = function(a, b, c) {
        this.mb = c === xb ? a : "";
        this.ec = b
    };
    k = yb.prototype;
    k.gb = !0;
    k.wa = function() {
        return this.ec
    };
    k.za = !0;
    k.xa = function() {
        return this.mb.toString()
    };
    k.toString = function() {
        return "SafeHtml{" + this.mb + "}"
    };
    var zb = function(a) {
            if (a instanceof yb && a.constructor === yb) return a.mb;
            ta("expected object of type SafeHtml, got '" + a + "' of type " + t(a));
            return "type_error:SafeHtml"
        },
        Bb = function(a) {
            if (a instanceof yb) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.gb && (c = a.wa());
            a = b && a.za ? a.xa() : String(a);
            eb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Za, "&amp;")), -1 != a.indexOf("<") && (a = a.replace($a, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(ab, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(bb, "&quot;")), -1 != a.indexOf("'") &&
                (a = a.replace(cb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(db, "&#0;")));
            return Ab(a, c)
        },
        Db = function(a) {
            var b = Bb(Cb),
                c = b.wa(),
                d = [],
                e = function(f) {
                    Array.isArray(f) ? Ua(f, e) : (f = Bb(f), d.push(zb(f).toString()), f = f.wa(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            Ua(a, e);
            return Ab(d.join(zb(b).toString()), c)
        },
        Eb = function(a) {
            return Db(Array.prototype.slice.call(arguments))
        },
        xb = {},
        Ab = function(a, b) {
            var c = mb();
            a = c ? c.createHTML(a) : a;
            return new yb(a, b, xb)
        },
        Cb = new yb(r.trustedTypes && r.trustedTypes.emptyHTML || "", 0, xb),
        Fb =
        Ab("<br>", 0);
    var Gb = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Hb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            if ("undefined" === typeof document) return !1;
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild) return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = zb(Cb);
            return !b.parentElement
        }),
        Ib = function(a, b) {
            if (a.tagName && Gb[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
                a.tagName + ".");
            if (Hb())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = zb(b)
        },
        Jb = function(a, b) {
            a: {
                try {
                    var c = a && a.ownerDocument,
                        d = c && (c.defaultView || c.parentWindow);
                    d = d || r;
                    if (d.Element && d.Location) {
                        var e = d;
                        break a
                    }
                } catch (g) {}
                e = null
            }
            if (e && "undefined" != typeof e.HTMLIFrameElement && (!a || !(a instanceof e.HTMLIFrameElement) && (a instanceof e.Location || a instanceof e.Element))) {
                if (u(a)) try {
                    var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
                } catch (g) {
                    f = "<object could not be stringified>"
                } else f =
                    void 0 === a ? "undefined" : null === a ? "null" : typeof a;
                ta("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLIFrameElement", f)
            }
            a.src = pb(b).toString()
        },
        Kb = function(a, b, c, d) {
            a instanceof G || a instanceof G || (a = "object" == typeof a && a.za ? a.xa() : String(a), v(wb.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez"), a = new G(a, ub));
            b = b || r;
            c = c instanceof w ? y(c) : c || "";
            return void 0 !== d ? b.open(vb(a), c, d, void 0) : b.open(vb(a), c)
        };
    var Lb = function() {
            return "transition".replace(/\-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })
        },
        Mb = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
    var Nb = function(a) {
        Nb[" "](a);
        return a
    };
    Nb[" "] = ja;
    var Ob = C(E, "Opera"),
        H = C(E, "Trident") || C(E, "MSIE"),
        Pb = C(E, "Edge"),
        Qb = C(E, "Gecko") && !(C(E.toLowerCase(), "webkit") && !C(E, "Edge")) && !(C(E, "Trident") || C(E, "MSIE")) && !C(E, "Edge"),
        Rb = C(E.toLowerCase(), "webkit") && !C(E, "Edge"),
        Sb = function() {
            var a = r.document;
            return a ? a.documentMode : void 0
        },
        Tb;
    a: {
        var Ub = "",
            Vb = function() {
                var a = E;
                if (Qb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Pb) return /Edge\/([\d\.]+)/.exec(a);
                if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Rb) return /WebKit\/(\S+)/.exec(a);
                if (Ob) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Vb && (Ub = Vb ? Vb[1] : "");
        if (H) {
            var Wb = Sb();
            if (null != Wb && Wb > parseFloat(Ub)) {
                Tb = String(Wb);
                break a
            }
        }
        Tb = Ub
    }
    var Xb = Tb,
        Yb = {},
        Zb;
    if (r.document && H) {
        var $b = Sb();
        Zb = $b ? $b : parseInt(Xb, 10) || void 0
    } else Zb = void 0;
    var ac = Zb;
    var bc = function(a) {
        var b = Va(arguments, y).join(""),
            c = z("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced.");
        va(y(c), "must provide justification");
        v(!/^[\s\xa0]*$/.test(y(c)), "must provide non-empty justification");
        b = Ab(b, null);
        c = document;
        var d = "DIV";
        "application/xhtml+xml" === c.contentType && (d = d.toLowerCase());
        d = c.createElement(d);
        H ? (Ib(d, Eb(Fb, b)), d.removeChild(v(d.firstChild))) : Ib(d, b);
        if (1 == d.childNodes.length) b = d.removeChild(v(d.firstChild));
        else
            for (b =
                c.createDocumentFragment(); d.firstChild;) b.appendChild(d.firstChild);
        return b
    };
    var cc = "StopIteration" in r ? r.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        dc = function() {};
    dc.prototype.next = function() {
        throw cc;
    };
    dc.prototype.Yb = function() {
        return this
    };
    var ec = function(a, b) {
        this.H = {};
        this.j = [];
        this.Ha = this.f = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    k = ec.prototype;
    k.K = function() {
        fc(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.H[this.j[b]]);
        return a
    };
    k.V = function() {
        fc(this);
        return this.j.concat()
    };
    k.ta = function(a) {
        return gc(this.H, a)
    };
    k.clear = function() {
        this.H = {};
        this.Ha = this.f = this.j.length = 0
    };
    k.remove = function(a) {
        return gc(this.H, a) ? (delete this.H[a], this.f--, this.Ha++, this.j.length > 2 * this.f && fc(this), !0) : !1
    };
    var fc = function(a) {
        if (a.f != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                gc(a.H, d) && (a.j[c++] = d);
                b++
            }
            a.j.length = c
        }
        if (a.f != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length;) d = a.j[b], gc(e, d) || (a.j[c++] = d, e[d] = 1), b++;
            a.j.length = c
        }
    };
    k = ec.prototype;
    k.get = function(a, b) {
        return gc(this.H, a) ? this.H[a] : b
    };
    k.set = function(a, b) {
        gc(this.H, a) || (this.f++, this.j.push(a), this.Ha++);
        this.H[a] = b
    };
    k.addAll = function(a) {
        if (a instanceof ec)
            for (var b = a.V(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    k.forEach = function(a, b) {
        for (var c = this.V(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new ec(this)
    };
    k.Yb = function(a) {
        fc(this);
        var b = 0,
            c = this.Ha,
            d = this,
            e = new dc;
        e.next = function() {
            if (c != d.Ha) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) throw cc;
            var f = d.j[b++];
            return a ? f : d.H[f]
        };
        return e
    };
    var gc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var hc = function(a) {
            if (a.K && "function" == typeof a.K) return a.K();
            if ("string" === typeof a) return a.split("");
            if (ka(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        },
        ic = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (ka(a) || "string" === typeof a) Ua(a, b, c);
            else {
                if (a.V && "function" == typeof a.V) var d = a.V();
                else if (a.K && "function" == typeof a.K) d = void 0;
                else if (ka(a) || "string" === typeof a) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else
                    for (f in d = [], e = 0, a) d[e++] = f;
                e = hc(a);
                f = e.length;
                for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
            }
        };
    var jc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        kc = function(a) {
            var b = a.match(jc);
            a = b[1];
            var c = b[3];
            b = b[4];
            var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b));
            return d
        },
        lc = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
    var I = function(a) {
        this.N = this.ha = this.Y = "";
        this.b = null;
        this.J = this.L = "";
        this.B = this.jc = !1;
        if (a instanceof I) {
            this.B = a.B;
            mc(this, a.Y);
            var b = a.ha;
            J(this);
            this.ha = b;
            b = a.N;
            J(this);
            this.N = b;
            nc(this, a.b);
            b = a.L;
            J(this);
            this.L = b;
            oc(this, a.D.clone());
            a = a.J;
            J(this);
            this.J = a
        } else a && (b = String(a).match(jc)) ? (this.B = !1, mc(this, b[1] || "", !0), a = b[2] || "", J(this), this.ha = pc(a), a = b[3] || "", J(this), this.N = pc(a, !0), nc(this, b[4]), a = b[5] || "", J(this), this.L = pc(a, !0), oc(this, b[6] || "", !0), a = b[7] || "", J(this), this.J = pc(a)) : (this.B = !1, this.D = new K(null, this.B))
    };
    I.prototype.toString = function() {
        var a = [],
            b = this.Y;
        b && a.push(qc(b, rc, !0), ":");
        var c = this.N;
        if (c || "file" == b) a.push("//"), (b = this.ha) && a.push(qc(b, rc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.b, null != c && a.push(":", String(c));
        if (c = this.L) this.N && "/" != c.charAt(0) && a.push("/"), a.push(qc(c, "/" == c.charAt(0) ? sc : tc, !0));
        (c = this.D.toString()) && a.push("?", c);
        (c = this.J) && a.push("#", qc(c, uc));
        return a.join("")
    };
    I.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.Y;
        c ? mc(b, a.Y) : c = !!a.ha;
        if (c) {
            var d = a.ha;
            J(b);
            b.ha = d
        } else c = !!a.N;
        c ? (d = a.N, J(b), b.N = d) : c = null != a.b;
        d = a.L;
        if (c) nc(b, a.b);
        else if (c = !!a.L) {
            if ("/" != d.charAt(0))
                if (this.N && !this.L) d = "/" + d;
                else {
                    var e = b.L.lastIndexOf("/"); - 1 != e && (d = b.L.substr(0, e + 1) + d)
                } e = d;
            if (".." == e || "." == e) d = "";
            else if (C(e, "./") || C(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length ||
                        1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (J(b), b.L = d) : c = "" !== a.D.toString();
        c ? oc(b, a.D.clone()) : c = !!a.J;
        c && (a = a.J, J(b), b.J = a);
        return b
    };
    I.prototype.clone = function() {
        return new I(this)
    };
    var mc = function(a, b, c) {
            J(a);
            a.Y = c ? pc(b, !0) : b;
            a.Y && (a.Y = a.Y.replace(/:$/, ""))
        },
        nc = function(a, b) {
            J(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.b = b
            } else a.b = null
        },
        oc = function(a, b, c) {
            J(a);
            b instanceof K ? (a.D = b, a.D.tb(a.B)) : (c || (b = qc(b, vc)), a.D = new K(b, a.B))
        };
    I.prototype.getQuery = function() {
        return this.D.toString()
    };
    var wc = function(a, b, c) {
        J(a);
        a.D.set(b, c)
    };
    I.prototype.removeParameter = function(a) {
        J(this);
        this.D.remove(a);
        return this
    };
    var J = function(a) {
        if (a.jc) throw Error("Tried to modify a read-only Uri");
    };
    I.prototype.tb = function(a) {
        this.B = a;
        this.D && this.D.tb(a)
    };
    var pc = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        qc = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, xc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        xc = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        rc = /[#\/\?@]/g,
        tc = /[#\?:]/g,
        sc = /[#\?]/g,
        vc = /[#\?@]/g,
        uc = /#/g,
        K = function(a, b) {
            this.f = this.c = null;
            this.v = a || null;
            this.B = !!b
        },
        M = function(a) {
            a.c || (a.c = new ec, a.f = 0, a.v && lc(a.v, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g,
                    " ")), c)
            }))
        };
    k = K.prototype;
    k.add = function(a, b) {
        M(this);
        this.v = null;
        a = yc(this, a);
        var c = this.c.get(a);
        c || this.c.set(a, c = []);
        c.push(b);
        this.f = ua(this.f) + 1;
        return this
    };
    k.remove = function(a) {
        M(this);
        a = yc(this, a);
        return this.c.ta(a) ? (this.v = null, this.f = ua(this.f) - this.c.get(a).length, this.c.remove(a)) : !1
    };
    k.clear = function() {
        this.c = this.v = null;
        this.f = 0
    };
    k.ta = function(a) {
        M(this);
        a = yc(this, a);
        return this.c.ta(a)
    };
    k.forEach = function(a, b) {
        M(this);
        this.c.forEach(function(c, d) {
            Ua(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.V = function() {
        M(this);
        for (var a = this.c.K(), b = this.c.V(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.K = function(a) {
        M(this);
        var b = [];
        if ("string" === typeof a) this.ta(a) && (b = Wa(b, this.c.get(yc(this, a))));
        else {
            a = this.c.K();
            for (var c = 0; c < a.length; c++) b = Wa(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        M(this);
        this.v = null;
        a = yc(this, a);
        this.ta(a) && (this.f = ua(this.f) - this.c.get(a).length);
        this.c.set(a, [b]);
        this.f = ua(this.f) + 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.K(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.v) return this.v;
        if (!this.c) return "";
        for (var a = [], b = this.c.V(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.K(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.v = a.join("&")
    };
    k.clone = function() {
        var a = new K;
        a.v = this.v;
        this.c && (a.c = this.c.clone(), a.f = this.f);
        return a
    };
    var yc = function(a, b) {
        b = String(b);
        a.B && (b = b.toLowerCase());
        return b
    };
    K.prototype.tb = function(a) {
        a && !this.B && (M(this), this.v = null, this.c.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < b.length && (this.v = null, this.c.set(yc(this, d), Xa(b)), this.f = ua(this.f) + b.length))
        }, this));
        this.B = a
    };
    K.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) ic(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };
    var zc = [],
        Ac = [],
        Sa = window.location.hostname,
        Bc = window.whitelistedDomainsHashedValueListForGpayButtonWithCardInfo || [],
        Cc = window.denylistedDomainsHashedValueListForGpayButtonWithCardInfo || [];

    function Dc(a) {
        Ac.includes(a.buttonRootNode || document) || (A("\n  .gpay-card-info-container {\n    padding: 0;\n    position: relative;\n    min-width: 240px;\n    height: 40px;\n    min-height: 40px;\n    border-radius: 4px;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n    cursor: pointer;\n    border: 0px;\n  }\n\n  .gpay-card-info-container.black,\n  .gpay-card-info-animation-container.black {\n    background-color: #000;\n    box-shadow: none;\n  }\n\n  .gpay-card-info-container.white,\n  .gpay-card-info-animation-container.white {\n    background-color: #fff;\n  }\n\n  .gpay-card-info-container.black.active {\n    background-color: #5f6368;\n  }\n\n  .gpay-card-info-container.black.hover,\n  .gpay-card-info-animation-container.black.hover {\n    background-color: #3c4043;\n  }\n\n  .gpay-card-info-container.white.active {\n    background-color: #fff;\n  }\n\n  .gpay-card-info-container.white.focus {\n    box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;\n  }\n\n  .gpay-card-info-container.white.hover,\n  .gpay-card-info-animation-container.white.hover {\n    background-color: #f8f8f8;\n  }\n\n  .gpay-card-info-iframe {\n    border: 0;\n    display: block;\n    height: 40px;\n    margin: auto;\n    max-width: 100%;\n    width: 240px;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-iframe{\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 100%;\n  }\n\n  .gpay-card-info-container-fill,\n    .gpay-card-info-container-fill > .gpay-card-info-container{\n    width: 100%;\n    height: inherit;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-placeholder-container{\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding-top: 3px;\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-placeholder-svg-container{\n    position: relative;\n    width: 60%;\n    height: inherit;\n    max-height: 80%;\n    margin-right: -20%;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-placeholder-svg-container > svg {\n    position: absolute;\n    left: 0;\n    height: 100%;\n    max-width: 100%;\n  }\n", a.buttonRootNode),
            A('\n  .gpay-card-info-animation-container {\n    display: flex;\n    width:100%;\n    position: absolute;\n    z-index: 100;\n    height: 40px;\n    border-radius: 4px;\n  }\n\n  .gpay-card-info-placeholder-container {\n    display: flex;\n    width: 240px;\n    height: 100%;\n    margin: auto;\n  }\n\n  .gpay-card-info-animated-progress-bar-container {\n    display: flex;\n    box-sizing: border-box;\n    position: absolute;\n    width: 100%;\n  }\n\n  .gpay-card-info-animated-progress-bar {\n    border-radius: 4px 4px 0px 0px;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-name: gpayProgressFill;\n    animation-timing-function: cubic-bezier(0.97, 0.33, 1, 1);\n    background: #caccce;\n    width: 100%;\n    height: 3px;\n    max-height: 3px;\n  }\n\n  .gpay-card-info-animated-progress-bar-indicator {\n    border-radius: 4px 4px 0px 0px;\n    max-width: 20px;\n    min-width: 20px;\n    height: 3px;\n    max-height: 3px;\n    background: linear-gradient(to right, #caccce 30%, #acaeaf 60%);\n    animation-delay: 0.5s;\n    animation-duration: 1.7s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: gpayPlaceHolderShimmer;\n  }\n\n  .gpay-card-info-iframe-fade-in {\n    animation-fill-mode: forwards;\n    animation-duration: 0.6s;\n    animation-name: gpayIframeFadeIn;\n  }\n\n  .gpay-card-info-animation-container-fade-out {\n    animation-fill-mode: forwards;\n    animation-duration: 0.6s;\n    animation-name: gpayPlaceHolderFadeOut;\n  }\n\n  .gpay-card-info-animation-gpay-logo {\n    margin: 13px 7px 0px  39px;\n    background-origin: content-box;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 17px;\n    max-height: 17px;\n    max-width: 41px;\n    min-width: 41px;\n  }\n\n  .gpay-card-info-animation-gpay-logo.black {\n    background-image: url("https://www.gstatic.com/instantbuy/svg/dark_gpay.svg");\n  }\n\n  .gpay-card-info-animation-gpay-logo.white {\n    background-image: url("https://www.gstatic.com/instantbuy/svg/light_gpay.svg");\n  }\n\n  @keyframes gpayPlaceHolderShimmer{\n    0% {\n      margin-left: 0px;\n    }\n    100% {\n      margin-left: calc(100% - 20px);\n    }\n  }\n\n  @keyframes gpayIframeFadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n  }\n\n  @keyframes gpayPlaceHolderFadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n  }\n\n  @keyframes gpayProgressFill {\n    from {\n      width: 0;\n    }\n    to {\n      width: 100%;\n    }\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-animation-container{\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .gpay-card-info-container-fill .gpay-card-info-animation-gpay-logo{\n    background-position: right;\n    margin: 0 0 0 0;\n    max-width: none;\n    width: 25%;\n    height:inherit;\n    max-height: 50%;\n  }\n',
                a.buttonRootNode), Ac.push(a.buttonRootNode || document));
        var b = Ec(a),
            c = "white" == a.buttonColor ? "white" : "black",
            d = document.createElement("button");
        Fc(d);
        d.setAttribute("class", (-1658203989 === Ra() ? "gpay-button" : "") + " gpay-card-info-container " + b);
        var e = document.createElement("div");
        e.setAttribute("class", "gpay-card-info-animation-container " + c);
        b = document.createElement("div");
        b.setAttribute("class", "gpay-card-info-placeholder-container");
        var f = document.createElement("div");
        f.setAttribute("class", "gpay-card-info-animation-gpay-logo " +
            c);
        var g = bc("white" == a.buttonColor ? Ja : Ka);
        c = document.createElement("div");
        c.setAttribute("class", "gpay-card-info-animated-progress-bar-container");
        var h = document.createElement("div");
        h.setAttribute("class", "gpay-card-info-animated-progress-bar");
        var l = document.createElement("div");
        l.setAttribute("class", "gpay-card-info-animated-progress-bar-indicator");
        h.appendChild(l);
        b.appendChild(f);
        "fill" !== a.buttonSizeMode ? b.appendChild(g) : (f = bc("white" == a.buttonColor ? La : Ma), g = document.createElement("div"), g.appendChild(f),
            g.setAttribute("class", "gpay-card-info-placeholder-svg-container"), b.appendChild(g));
        c.appendChild(h);
        e.appendChild(b);
        e.appendChild(c);
        Gc(e);
        d.appendChild(e);
        var m = document.createElement("iframe");
        m.setAttribute("class", "gpay-card-info-iframe");
        m.setAttribute("scrolling", "no");
        b = new I("https://pay.google.com/gp/p/generate_gpay_btn_img");
        wc(b, "buttonColor", a.buttonColor);
        wc(b, "browserLocale", Hc());
        wc(b, "buttonSizeMode", a.buttonSizeMode);
        m.setAttribute("src", b.toString());
        m.onload = function() {
            m.classList.add("gpay-card-info-iframe-fade-in");
            e.classList.add("gpay-card-info-animation-container-fade-out")
        };
        a.onClick && d.addEventListener("click", a.onClick);
        Gc(d);
        d.appendChild(m);
        b = document.createElement("div");
        "fill" === a.buttonSizeMode && b.setAttribute("class", "gpay-card-info-container-fill");
        b.appendChild(d);
        return b
    }

    function Gc(a) {
        ["mouseover", "mouseout"].map(function(b) {
            a.addEventListener(b, function(c) {
                a.classList.toggle("hover", "mouseover" == c.type);
                var d = document.querySelector(".gpay-card-info-animation-container");
                null !== d && d.classList.toggle("hover", "mouseover" == c.type)
            })
        });
        ["mousedown", "mouseup", "mouseout"].map(function(b) {
            a.addEventListener(b, function(c) {
                a.classList.toggle("active", "mousedown" == c.type)
            })
        });
        ["focus", "blur"].map(function(b) {
            a.addEventListener(b, function(c) {
                a.classList.toggle("focus", "focus" ==
                    c.type)
            })
        })
    }

    function Fc(a) {
        a.setAttribute("type", "button");
        a.setAttribute("aria-label", "Google Pay")
    }

    function Ec(a) {
        var b = "white";
        "white" !== a.buttonColor && (b = "black");
        var c = a.buttonType || "buy";
        "buy" === a.buttonType ? c = "buy long" : "plain" === a.buttonType && (c = "plain short");
        return b + " " + c
    }

    function Hc() {
        var a = navigator.language || navigator.jd || "en";
        "en" != a && (a = a.substring(0, 2), Ha[a] || (a = "en"));
        return a
    };
    var Ic = function() {
        this.Ac = N.contentWindow
    };
    Ic.prototype.postMessage = function(a, b) {
        this.Ac.postMessage(a, b)
    };
    var Jc = {
            $c: 0,
            Lc: 1,
            Ub: 2,
            Vb: 3,
            Wb: 4,
            Pc: 5
        },
        N = null,
        Kc = null,
        O = null,
        Lc = null,
        Mc = Date.now(),
        Nc = null,
        Oc = !1,
        Pc = !1,
        Qc = [],
        Sc = function() {
            Rc({}, 11, ["canMakePaymentForPaymentHandlerResponse"], function(a) {
                Oc = a.data.canMakePaymentForPaymentHandlerResponse
            })
        },
        Rc = function(a, b, c, d) {
            function e(f) {
                var g;
                a: {
                    for (g = 0; g < c.length; g++)
                        if (f.data[c[g]]) {
                            g = !0;
                            break a
                        } g = !1
                }
                g && (d(f), window.removeEventListener("message", e))
            }
            window.addEventListener("message", e);
            a = Object.assign({
                eventType: b
            }, a);
            P(a)
        },
        P = function(a) {
            if (Pc && Kc) {
                a = Object.assign({
                    buyFlowActivityMode: Nc,
                    googleTransactionId: Lc,
                    originTimeMs: Mc
                }, a);
                if ("CANARY" == O) var b = "https://ibfe-canary.corp.google.com";
                else b = "https://pay", "SANDBOX" == O ? b += ".sandbox" : "PREPROD" == O && (b += "-preprod.sandbox"), b += ".google.com";
                Kc.postMessage(a, b)
            } else Qc.push(a)
        },
        Tc = function() {
            Pc = !0;
            Qc.forEach(function(a) {
                P(a)
            });
            Qc.length = 0
        };
    (function() {
        if (!N) {
            var a = window.gpayInitParams || {};
            O = a.environment || "PRODUCTION";
            N = document.createElement("iframe");
            Jb(N, tb(z(("CANARY" == O ? "https://ibfe-canary.corp" : "https://pay") + ("PREPROD" == O ? "-preprod.sandbox" : "SANDBOX" == O ? ".sandbox" : "") + ".google.com/gp/p/ui/payframe?origin=%{windowOrigin}&mid=%{merchantId}"), {
                windowOrigin: window.location.origin,
                merchantId: a.merchantInfo && a.merchantInfo.merchantId || ""
            }));
            P({
                eventType: 15,
                clientLatencyStartMs: Date.now()
            });
            Sc();
            N.height = "0";
            N.width = "0";
            N.style.display =
                "none";
            N.style.visibility = "hidden";
            N.setAttribute("allowpaymentrequest", !0);
            N.onload = function() {
                Kc = new Ic;
                P({
                    eventType: 17,
                    clientLatencyStartMs: Date.now()
                });
                P({
                    eventType: 16,
                    clientLatencyStartMs: Date.now()
                });
                Tc()
            };
            document.body ? document.body.appendChild(N) : document.addEventListener("DOMContentLoaded", function() {
                document.body.appendChild(N)
            })
        }
    })();
    var Uc = function() {},
        Vc = function(a, b) {
            return new Promise(function(c, d) {
                setTimeout(function() {
                    d({
                        reason: "OTHER_ERROR",
                        intent: a,
                        message: "REQUEST_TIMEOUT"
                    })
                }, b)
            })
        },
        Wc = function(a, b) {
            return {
                error: {
                    reason: a.reason || "OTHER_ERROR",
                    intent: a.intent || b,
                    message: a.message
                }
            }
        },
        Xc = function(a, b, c) {
            B({
                ia: "loadPaymentData",
                errorMessage: "An error occurred in call back, please try to avoid this by setting structured error in callback response"
            });
            a && P({
                eventType: b,
                merchantCallbackInfo: {
                    callbackTrigger: c || 0
                }
            })
        };
    Uc.prototype.Lb = function(a, b) {
        return {
            modifiers: [{
                supportedMethods: ["https://google.com/pay"],
                data: b
            }]
        }
    };
    Uc.prototype.Qa = function(a, b) {
        return {
            type: a,
            data: b
        }
    };
    var Yc = function(a, b, c, d) {
            return Promise.resolve(Promise.race([Vc("PAYMENT_AUTHORIZATION", c), b.onPaymentAuthorized(a)])).then(function(e) {
                return d("paymentAuthorizationResponse", e)
            }, function(e) {
                Xc("REQUEST_TIMEOUT" === e.message, 27, 2);
                return d("paymentAuthorizationResponse", Wc(e, "PAYMENT_AUTHORIZATION"))
            })
        },
        Zc = function(a, b, c, d) {
            return Promise.resolve(Promise.race([Vc(a.callbackTrigger in za ? za[a.callbackTrigger] : "UNKNOWN_INTENT", c), b.onPaymentDataChanged(a)])).then(function(e) {
                return d("paymentDataCallbackResponse",
                    e)
            }, function(e) {
                Xc("REQUEST_TIMEOUT" === e.message, 26, Jc[a.callbackTrigger]);
                return d("paymentDataCallbackResponse", Wc(e, a.callbackTrigger || "UNKNOWN_INTENT"))
            })
        };
    var ad = function() {
        var a = window.document,
            b = this;
        this.Fb = a;
        this.O = a.createElement("gpay-graypane");
        $c(this.O, {
            "z-index": 2147483647,
            display: "none",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            "background-color": "rgba(32, 33, 36, .6)"
        });
        this.Ta = null;
        this.O.addEventListener("click", function() {
            if (b.Ta) try {
                b.Ta.focus()
            } catch (c) {}
        })
    };
    ad.prototype.show = function(a) {
        this.Ta = a || null;
        this.Fb.body.appendChild(this.O);
        $c(this.O, {
            display: "block",
            opacity: 0
        });
        return bd(this.O, {
            opacity: 1
        })
    };
    var cd = function(a) {
        a.Ta = null;
        a.O.parentElement && bd(a.O, {
            opacity: 0
        }).then(function() {
            $c(a.O, {
                display: "none"
            });
            a.Fb.body.removeChild(a.O)
        })
    };

    function $c(a, b) {
        for (var c in b) a.style.setProperty(c, b[c].toString(), "important")
    }

    function bd(a, b) {
        var c = a.ownerDocument.defaultView,
            d = a.style.transition || "";
        return (new Promise(function(e) {
            c.setTimeout(function() {
                c.setTimeout(e, 300);
                $c(a, Object.assign({
                    transition: "transform 300ms ease-out, opacity 300ms ease-out"
                }, b))
            })
        })).then(function() {
            $c(a, Object.assign({
                transition: d
            }, b))
        })
    };
    var dd = function(a) {
        this.l = a;
        this.kb = this.lb = this.s = this.aa = null;
        this.fa = 3E4
    };
    k = dd.prototype;
    k.pb = function(a) {
        this.s = a
    };
    k.Ba = function(a) {
        this.aa = a
    };
    k.A = function(a) {
        var b = ed(a);
        return new Promise(function(c) {
            (void 0 != b.hasEnrolledInstrument ? b.hasEnrolledInstrument() : b.canMakePayment()).then(function(d) {
                window.sessionStorage.setItem("google.payments.api.storage.isreadytopay.result", d.toString());
                var e = {
                    result: d
                };
                2 <= a.apiVersion && a.existingPaymentMethodRequired && (e.paymentMethodPresent = d);
                c(e)
            }).catch(function() {
                window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result") ? c({
                        result: "true" == window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result")
                    }) :
                    c({
                        result: !1
                    })
            })
        })
    };
    k.M = function(a) {
        ed(a, this.l, a.transactionInfo.currencyCode, a.transactionInfo.totalPrice)
    };
    k.R = function(a) {
        fd(this, a)
    };
    var ed = function(a, b, c, d) {
            var e = {};
            a && (e = JSON.parse(JSON.stringify(a)));
            e.apiVersion || (e.apiVersion = 1);
            e.swg && (e.allowedPaymentMethods = ["CARD"]);
            b && "TEST" == b && (e.environment = b);
            return new PaymentRequest([{
                supportedMethods: ["https://google.com/pay"],
                data: e
            }], {
                total: {
                    label: "Estimated Total Price",
                    amount: {
                        currency: c || "USD",
                        value: d || "0"
                    }
                }
            })
        },
        fd = function(a, b) {
            b = ed(b, a.l, b.transactionInfo && b.transactionInfo.currencyCode || void 0, b.transactionInfo && b.transactionInfo.totalPrice || void 0);
            b.onpaymentmethodchange =
                function(c) {
                    var d = new Uc;
                    d = c.methodDetails.callbackTrigger ? Zc(c.methodDetails, a.s, a.fa, d.Lb) : Yc(c.methodDetails, a.s, a.fa, d.Lb);
                    c.updateWith(d)
                };
            a.aa(b.show().then(function(c) {
                google.payments.api.LogInternally && console.log("payment response", c);
                c.complete("success");
                return c.details.statusCode ? (google.payments.api.LogInternally && console.log("status code", c.details.gd), {
                    error: c.details
                }) : c.details
            }).catch(function(c) {
                google.payments.api.LogInternally && console.log("payment response with err", c);
                c.statusCode =
                    "CANCELED";
                throw c;
            }))
        };
    var gd = ["SHIPPING_ADDRESS", "SHIPPING_OPTION"];

    function hd(a) {
        if (2 <= a.apiVersion) {
            var b = id(a);
            if (b && 1 == b.length && "CRYPTOGRAM_3DS" == b[0]) return !0
        }
        return 1 == a.allowedPaymentMethods.length && "TOKENIZED_CARD" == a.allowedPaymentMethods[0]
    }

    function jd(a, b) {
        return 2 <= a.apiVersion && (a = id(a)) && a.includes(b) ? !0 : !1
    }

    function kd() {
        var a = window.location.hostname,
            b = a.length - 11;
        return 0 <= b && a.indexOf(".google.com", b) == b || void 0 === window.isSecureContext ? null : window.isSecureContext ? null : "Google Pay APIs should be called in secure context!"
    }

    function ld(a) {
        if (a.environment && !Object.values(Aa).includes(a.environment)) throw Error("Parameter environment in PaymentsClientOptions can optionally be set to PRODUCTION, otherwise it defaults to TEST.");
    }

    function md(a) {
        if (!a) return "isReadyToPayRequest must be set!";
        if (nd(a)) return "UPI not supported";
        if (2 <= a.apiVersion) {
            if (!("apiVersionMinor" in a)) return "apiVersionMinor must be set!";
            if (!a.allowedPaymentMethods || !Array.isArray(a.allowedPaymentMethods) || 0 == a.allowedPaymentMethods.length) return "for v2 allowedPaymentMethods must be set to an array containing a list of accepted payment methods";
            for (var b = 0; b < a.allowedPaymentMethods.length; b++) {
                var c = a.allowedPaymentMethods[b];
                if ("CARD" == c.type) {
                    if (!c.parameters) return "Field parameters must be setup in each allowedPaymentMethod";
                    var d = c.parameters.allowedCardNetworks;
                    if (!d || !Array.isArray(d) || 0 == d.length) return "allowedCardNetworks must be setup in parameters for type CARD";
                    c = c.parameters.allowedAuthMethods;
                    if (!c || !Array.isArray(c) || 0 == c.length || !c.every(od)) return "allowedAuthMethods must be setup in parameters for type 'CARD'  and must contain 'CRYPTOGRAM_3DS' and/or 'PAN_ONLY'"
                }
            }
        } else if (!a.allowedPaymentMethods || !Array.isArray(a.allowedPaymentMethods) || 0 == a.allowedPaymentMethods.length || !a.allowedPaymentMethods.every(pd)) return "allowedPaymentMethods must be set to an array containing 'CARD' and/or 'TOKENIZED_CARD'!";
        return null
    }

    function pd(a) {
        return Object.values(Ba).includes(a)
    }

    function od(a) {
        return Object.values(Ca).includes(a)
    }

    function qd(a) {
        if (!a) return "paymentDataRequest must be set!";
        if (nd(a)) return "UPI not supported";
        if (a.swg) return (a = a.swg) ? a.skuId && a.publicationId ? null : "Both skuId and publicationId must be provided" : "Swg parameters must be provided";
        if (a.transactionInfo)
            if (a.transactionInfo.currencyCode) {
                if (!a.transactionInfo.totalPriceStatus || !Object.values(Da).includes(a.transactionInfo.totalPriceStatus)) return "totalPriceStatus in transactionInfo must be set to one of NOT_CURRENTLY_KNOWN, ESTIMATED or FINAL!";
                if ("NOT_CURRENTLY_KNOWN" !==
                    a.transactionInfo.totalPriceStatus && !a.transactionInfo.totalPrice) return "totalPrice in transactionInfo must be set when totalPriceStatus is ESTIMATED or FINAL!"
            } else return "currencyCode in transactionInfo must be set!";
        else return "transactionInfo must be set!";
        var b = nd(a);
        if (b) {
            if (!b.parameters) return "parameters must be set in allowedPaymentMethod!";
            b = b.parameters;
            if (b.payeeVpa)
                if (b.payeeName)
                    if (b.referenceUrl) {
                        if (!b.mcc) return "mcc in allowedPaymentMethod parameters must be set!";
                        if (!b.transactionReferenceId) return "transactionReferenceId in allowedPaymentMethod parameters must be set!"
                    } else return "referenceUrl in allowedPaymentMethod parameters must be set!";
            else return "payeeName in allowedPaymentMethod parameters must be set!";
            else return "payeeVpa in allowedPaymentMethod parameters must be set!";
            if ("INR" !== a.transactionInfo.currencyCode) return "currencyCode in transactionInfo must be set to INR!";
            if ("FINAL" !== a.transactionInfo.totalPriceStatus) return "totalPriceStatus in transactionInfo must be set to FINAL!";
            if (!a.transactionInfo.transactionNote) return "transactionNote in transactionInfo must be set!"
        }
        return null
    }

    function nd(a) {
        return 2 > a.apiVersion || !a.allowedPaymentMethods ? null : rd(a, "UPI")
    }

    function sd(a, b) {
        if (a.callbackIntents && !b) return "paymentDataCallbacks must be set";
        if (a.callbackIntents.includes("PAYMENT_AUTHORIZATION") !== !!b.onPaymentAuthorized) return "Both PAYMENT_AUTHORIZATION intent and onPaymentAuthorized must be set";
        var c = gd.slice();
        google.payments.api.EnableOfferCallback && c.push("OFFER");
        google.payments.api.EnablePaymentMethodCallback && c.push("PAYMENT_METHOD");
        return !!c.filter(function(d) {
                return a.callbackIntents.includes(d)
            }).length !== !!b.onPaymentDataChanged ? "onPaymentDataChanged callback must be set if any of " +
            (c + " callback intent is set.") : null
    }

    function id(a) {
        return a.allowedPaymentMethods && (a = rd(a, "CARD")) && a.parameters ? a.parameters.allowedAuthMethods : null
    }

    function rd(a, b) {
        for (var c = 0; c < a.allowedPaymentMethods.length; c++) {
            var d = a.allowedPaymentMethods[c];
            if (d.type == b) return d
        }
        return null
    };
    var ud = function(a, b) {
            var c = td.transition;
            if (!c) {
                var d = Lb();
                c = d;
                void 0 === a.style[d] && (d = (Rb ? "Webkit" : Qb ? "Moz" : H ? "ms" : Ob ? "O" : null) + Mb(d), void 0 !== a.style[d] && (c = d));
                td.transition = c
            }
            c && (a.style[c] = b)
        },
        td = {};
    var vd = function(a, b) {
        Array.isArray(b) || (b = [b]);
        v(0 < b.length, "At least one Css3Property should be specified.");
        b = Va(b, function(c) {
            if ("string" === typeof c) return c;
            wa(c, "Expected css3 property to be an object.");
            var d = c.pc + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
            v(c.pc && "number" === typeof c.duration && c.timing && "number" === typeof c.delay, "Unexpected css3 property value: %s", d);
            return d
        });
        ud(a, b.join(","))
    };
    var wd = function() {
        this.Na = this.Na;
        this.Sa = this.Sa
    };
    wd.prototype.Na = !1;
    wd.prototype.dispose = function() {
        this.Na || (this.Na = !0, this.ua())
    };
    wd.prototype.ua = function() {
        if (this.Sa)
            for (; this.Sa.length;) this.Sa.shift()()
    };
    var Q = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.ea = !1
    };
    Q.prototype.stopPropagation = function() {
        this.ea = !0
    };
    Q.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var xd = Object.freeze || function(a) {
        return a
    };
    var yd;
    (yd = !H) || (yd = 9 <= Number(ac));
    var zd = yd,
        Ad;
    if (Ad = H) {
        var Bd;
        if (Object.prototype.hasOwnProperty.call(Yb, "9")) Bd = Yb["9"];
        else {
            for (var Cd = 0, Dd = Ya(String(Xb)).split("."), Ed = Ya("9").split("."), Fd = Math.max(Dd.length, Ed.length), Gd = 0; 0 == Cd && Gd < Fd; Gd++) {
                var Hd = Dd[Gd] || "",
                    Id = Ed[Gd] || "";
                do {
                    var Jd = /(\d*)(\D*)(.*)/.exec(Hd) || ["", "", "", ""],
                        Kd = /(\d*)(\D*)(.*)/.exec(Id) || ["", "", "", ""];
                    if (0 == Jd[0].length && 0 == Kd[0].length) break;
                    Cd = fb(0 == Jd[1].length ? 0 : parseInt(Jd[1], 10), 0 == Kd[1].length ? 0 : parseInt(Kd[1], 10)) || fb(0 == Jd[2].length, 0 == Kd[2].length) || fb(Jd[2], Kd[2]);
                    Hd = Jd[3];
                    Id = Kd[3]
                } while (0 == Cd)
            }
            Bd = Yb["9"] = 0 <= Cd
        }
        Ad = !Bd
    }
    var Ld = Ad,
        Md = function() {
            if (!r.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                r.addEventListener("test", ja, b), r.removeEventListener("test", ja, b)
            } catch (c) {}
            return a
        }();
    var R = function(a, b) {
        Q.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.va = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget =
                b;
            if (b = a.relatedTarget) {
                if (Qb) {
                    a: {
                        try {
                            Nb(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (b = null)
                }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = Rb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Rb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
                this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Nd[a.pointerType] || "";
            this.state = a.state;
            this.va = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    oa(R, Q);
    var Nd = xd({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    R.prototype.stopPropagation = function() {
        R.Xa.stopPropagation.call(this);
        this.va.stopPropagation ? this.va.stopPropagation() : this.va.cancelBubble = !0
    };
    R.prototype.preventDefault = function() {
        R.Xa.preventDefault.call(this);
        var a = this.va;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ld) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Od = "closure_listenable_" + (1E6 * Math.random() | 0),
        Pd = 0;
    var Qd = function(a, b, c, d, e) {
            this.listener = a;
            this.Ua = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Oa = e;
            this.key = ++Pd;
            this.pa = this.La = !1
        },
        Rd = function(a) {
            a.pa = !0;
            a.listener = null;
            a.Ua = null;
            a.src = null;
            a.Oa = null
        };
    var S = function(a) {
        this.src = a;
        this.o = {};
        this.Ga = 0
    };
    S.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.o[f];
        a || (a = this.o[f] = [], this.Ga++);
        var g = Sd(a, b, d, e); - 1 < g ? (b = a[g], c || (b.La = !1)) : (b = new Qd(b, this.src, f, !!d, e), b.La = c, a.push(b));
        return b
    };
    S.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.o)) return !1;
        var e = this.o[a];
        b = Sd(e, b, c, d);
        return -1 < b ? (Rd(e[b]), v(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.o[a], this.Ga--), !0) : !1
    };
    var Td = function(a, b) {
        var c = b.type;
        if (c in a.o) {
            var d = a.o[c],
                e = Ta(d, b),
                f;
            if (f = 0 <= e) v(null != d.length), Array.prototype.splice.call(d, e, 1);
            f && (Rd(b), 0 == a.o[c].length && (delete a.o[c], a.Ga--))
        }
    };
    S.prototype.eb = function(a, b, c, d) {
        a = this.o[a.toString()];
        var e = -1;
        a && (e = Sd(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    S.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return ib(this.o, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var Sd = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.pa && f.listener == b && f.capture == !!c && f.Oa == d) return e
        }
        return -1
    };
    var Ud = "closure_lm_" + (1E6 * Math.random() | 0),
        Vd = {},
        Wd = 0,
        Yd = function(a, b, c, d, e) {
            if (d && d.once) Xd(a, b, c, d, e);
            else if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Yd(a, b[f], c, d, e);
            else c = Zd(c), a && a[Od] ? (d = u(d) ? !!d.capture : !!d, $d(a), a.G.add(String(b), c, !1, d, e)) : ae(a, b, c, !1, d, e)
        },
        ae = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = u(e) ? !!e.capture : !!e,
                h = be(a);
            h || (a[Ud] = h = new S(a));
            c = h.add(b, c, d, g, f);
            if (!c.Ua) {
                d = ce();
                c.Ua = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) Md || (e = g), void 0 === e &&
                    (e = !1), a.addEventListener(b.toString(), d, e);
                else if (a.attachEvent) a.attachEvent(de(b.toString()), d);
                else if (a.addListener && a.removeListener) v("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Wd++
            }
        },
        ce = function() {
            var a = ee,
                b = zd ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Xd = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Xd(a,
                    b[f], c, d, e);
            else c = Zd(c), a && a[Od] ? a.G.add(String(b), c, !0, u(d) ? !!d.capture : !!d, e) : ae(a, b, c, !0, d, e)
        },
        fe = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) fe(a, b[f], c, d, e);
            else d = u(d) ? !!d.capture : !!d, c = Zd(c), a && a[Od] ? a.G.remove(String(b), c, d, e) : a && (a = be(a)) && (b = a.eb(b, c, d, e)) && ge(b)
        },
        ge = function(a) {
            if ("number" !== typeof a && a && !a.pa) {
                var b = a.src;
                if (b && b[Od]) Td(b.G, a);
                else {
                    var c = a.type,
                        d = a.Ua;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(de(c), d) :
                        b.addListener && b.removeListener && b.removeListener(d);
                    Wd--;
                    (c = be(b)) ? (Td(c, a), 0 == c.Ga && (c.src = null, b[Ud] = null)) : Rd(a)
                }
            }
        },
        de = function(a) {
            return a in Vd ? Vd[a] : Vd[a] = "on" + a
        },
        ie = function(a, b, c, d) {
            var e = !0;
            if (a = be(a))
                if (b = a.o[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.pa && (f = he(f, d), e = e && !1 !== f)
                    }
            return e
        },
        he = function(a, b) {
            var c = a.listener,
                d = a.Oa || a.src;
            a.La && ge(a);
            return c.call(d, b)
        },
        ee = function(a, b) {
            if (a.pa) return !0;
            if (!zd) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c =
                            r, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        } b = c
                }
                d = b;
                b = new R(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.ea && 0 <= e; e--) {
                        b.currentTarget = d[e];
                        var f = ie(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.ea && e < d.length; e++) b.currentTarget = d[e],
                    f = ie(d[e], a, !1, b),
                    c = c && f
                }
                return c
            }
            return he(a, new R(b, this))
        },
        be = function(a) {
            a = a[Ud];
            return a instanceof S ? a : null
        },
        je = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Zd = function(a) {
            v(a, "Listener can not be null.");
            if ("function" === typeof a) return a;
            v(a.handleEvent, "An object listener must have handleEvent method.");
            a[je] || (a[je] = function(b) {
                return a.handleEvent(b)
            });
            return a[je]
        };
    var T = function() {
        wd.call(this);
        this.G = new S(this);
        this.Zb = this;
        this.jb = null
    };
    oa(T, wd);
    T.prototype[Od] = !0;
    T.prototype.addEventListener = function(a, b, c, d) {
        Yd(this, a, b, c, d)
    };
    T.prototype.removeEventListener = function(a, b, c, d) {
        fe(this, a, b, c, d)
    };
    T.prototype.dispatchEvent = function(a) {
        $d(this);
        var b = this.jb;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.jb) c.push(b), v(1E3 > ++d, "infinite loop")
        }
        b = this.Zb;
        d = a.type || a;
        if ("string" === typeof a) a = new Q(a, b);
        else if (a instanceof Q) a.target = a.target || b;
        else {
            var e = a;
            a = new Q(d, b);
            kb(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.ea && 0 <= f; f--) {
                var g = a.currentTarget = c[f];
                e = ke(g, d, !0, a) && e
            }
        a.ea || (g = a.currentTarget = b, e = ke(g, d, !0, a) && e, a.ea || (e = ke(g, d, !1, a) && e));
        if (c)
            for (f = 0; !a.ea && f < c.length; f++) g = a.currentTarget = c[f], e = ke(g, d,
                !1, a) && e;
        return e
    };
    T.prototype.ua = function() {
        T.Xa.ua.call(this);
        if (this.G) {
            var a = this.G,
                b = 0,
                c;
            for (c in a.o) {
                for (var d = a.o[c], e = 0; e < d.length; e++) ++b, Rd(d[e]);
                delete a.o[c];
                a.Ga--
            }
        }
        this.jb = null
    };
    var ke = function(a, b, c, d) {
        b = a.G.o[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.pa && g.capture == c) {
                var h = g.listener,
                    l = g.Oa || g.src;
                g.La && Td(a.G, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    T.prototype.eb = function(a, b, c, d) {
        return this.G.eb(String(a), b, c, d)
    };
    T.prototype.hasListener = function(a, b) {
        return this.G.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    var $d = function(a) {
        v(a.G, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var le = function(a, b) {
        T.call(this);
        this.Pa = a || 1;
        this.Fa = b || r;
        this.Db = na(this.zc, this);
        this.Jb = Date.now()
    };
    oa(le, T);
    k = le.prototype;
    k.enabled = !1;
    k.I = null;
    k.setInterval = function(a) {
        this.Pa = a;
        this.I && this.enabled ? (this.stop(), this.start()) : this.I && this.stop()
    };
    k.zc = function() {
        if (this.enabled) {
            var a = Date.now() - this.Jb;
            0 < a && a < .8 * this.Pa ? this.I = this.Fa.setTimeout(this.Db, this.Pa - a) : (this.I && (this.Fa.clearTimeout(this.I), this.I = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    k.start = function() {
        this.enabled = !0;
        this.I || (this.I = this.Fa.setTimeout(this.Db, this.Pa), this.Jb = Date.now())
    };
    k.stop = function() {
        this.enabled = !1;
        this.I && (this.Fa.clearTimeout(this.I), this.I = null)
    };
    k.ua = function() {
        le.Xa.ua.call(this);
        this.stop();
        delete this.Fa
    };
    /*

     Copyright 2017 The Web Activities Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var me = function(a, b, c, d, e, f) {
        this.code = a;
        this.data = "ok" == a ? b : null;
        this.mode = c;
        this.origin = d;
        this.ib = e;
        this.vc = f;
        this.ok = "ok" == a;
        this.error = "failed" == a ? Error(String(b) || "") : null
    };

    function ne(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substring(0, b)
    }

    function oe(a) {
        return a ? (/^[?#]/.test(a) ? a.slice(1) : a).split("&").reduce(function(b, c) {
            var d = c.split("=");
            c = decodeURIComponent(d[0] || "");
            d = decodeURIComponent(d[1] || "");
            c && (b[c] = d);
            return b
        }, {}) : {}
    }

    function pe(a) {
        var b = {
            requestId: a.requestId,
            returnUrl: a.Sb,
            args: a.$b
        };
        void 0 !== a.origin && (b.origin = a.origin);
        void 0 !== a.ib && (b.originVerified = a.ib);
        return JSON.stringify(b)
    }

    function qe(a, b, c) {
        if (b.ok) c(b);
        else {
            var d;
            if (!(d = b.error)) {
                d = null;
                if ("function" == typeof a.DOMException) {
                    a = a.DOMException;
                    try {
                        d = new a("AbortError", "AbortError")
                    } catch (e) {}
                }
                d || (d = Error("AbortError"), d.name = "AbortError", d.code = 20)
            }
            a = d;
            a.cd = b;
            c(Promise.reject(a))
        }
    }

    function re(a) {
        a = a.navigator;
        return /Trident|MSIE|IEMobile/i.test(a && a.userAgent)
    }

    function se(a) {
        setTimeout(function() {
            throw a;
        })
    }
    var U = function(a, b, c) {
        this.a = a;
        this.wb = b;
        this.u = c;
        this.rc = !0;
        this.xb = null;
        this.yb = !1;
        this.U = this.Ra = this.W = this.b = null;
        this.Cb = this.ic.bind(this)
    };
    U.prototype.connect = function(a) {
        if (this.W) throw Error("already connected");
        this.W = a;
        this.a.addEventListener("message", this.Cb)
    };
    U.prototype.disconnect = function() {
        if (this.W && (this.W = null, this.b && (te(this.b), this.b = null), this.a.removeEventListener("message", this.Cb), this.U)) {
            for (var a in this.U) {
                var b = this.U[a];
                b.port1 && te(b.port1);
                b.port2 && te(b.port2)
            }
            this.U = null
        }
    };
    U.prototype.isConnected = function() {
        return null != this.u
    };
    var ue = function(a) {
            a.W && !a.xb && (a.xb = "function" == typeof a.wb ? a.wb() : a.wb);
            return a.xb
        },
        ve = function(a) {
            if (null == a.u) throw Error("not connected");
            return a.u
        },
        xe = function(a, b) {
            var c = null;
            a.yb && "function" == typeof a.a.MessageChannel && (c = new a.a.MessageChannel);
            c ? (V(a, "start", b, [c.port2]), we(a, c.port1)) : V(a, "start", b)
        },
        V = function(a, b, c, d) {
            c = {
                sentinel: "__ACTIVITIES__",
                cmd: b,
                payload: c || null
            };
            if (a.b) a.b.postMessage(c, d || void 0);
            else {
                var e = ue(a);
                if (!e) throw Error("not connected");
                a = "connect" == b ? null != a.u ? a.u :
                    "*" : ve(a);
                e.postMessage(c, a, d || void 0)
            }
        },
        ye = function(a, b) {
            a.U || (a.U = {});
            var c = a.U[b];
            if (!c) {
                var d;
                c = new Promise(function(e) {
                    d = e
                });
                c = {
                    port1: null,
                    port2: null,
                    Rb: d,
                    promise: c
                };
                a.U[b] = c
            }
            return c
        },
        we = function(a, b) {
            a.b && te(a.b);
            a.b = b;
            a.b.onmessage = function(c) {
                var d = c.data,
                    e = d && d.cmd;
                d = d && d.payload || null;
                e && a.na(e, d, c)
            }
        };
    U.prototype.ic = function(a) {
        if (!this.rc || ue(this) == a.source) {
            var b = a.data;
            if (b && "__ACTIVITIES__" == b.sentinel) {
                var c = b.cmd;
                if (!this.b || "connect" == c || "start" == c) {
                    var d = a.origin;
                    b = b.payload || null;
                    null == this.u && "start" == c && (this.u = d);
                    null == this.u && a.source && ue(this) == a.source && (this.u = d);
                    d == this.u && this.na(c, b, a)
                }
            }
        }
    };
    U.prototype.na = function(a, b, c) {
        "connect" == a ? (this.b && (te(this.b), this.b = null), this.yb = b && b.acceptsChannel || !1, this.W(a, b)) : "start" == a ? ((c = c.ports && c.ports[0]) && we(this, c), this.W(a, b)) : "msg" == a ? null != this.Ra && null != b && this.Ra(b) : "cnget" == a ? (b = b.name || "", a = ye(this, b), a.port1 || (c = new this.a.MessageChannel, a.port1 = c.port1, a.port2 = c.port2, a.Rb(a.port1)), a.port2 && (V(this, "cnset", {
            name: b
        }, [a.port2]), a.port2 = null)) : "cnset" == a ? (a = c.ports[0], b = ye(this, b.name), b.port1 = a, b.Rb(a)) : this.W(a, b)
    };

    function te(a) {
        try {
            a.close()
        } catch (b) {}
    }
    var ze = function(a, b, c) {
        var d = this;
        this.ya = a;
        this.Za = b;
        this.Ja = c || null;
        this.a = this.ya.ownerDocument.defaultView;
        this.u = kc(pb(b).toString());
        this.sa = null;
        this.bb = new Promise(function(e) {
            d.sa = e
        });
        this.Va = null;
        new Promise(function(e) {
            d.Va = e
        });
        this.F = null;
        this.Wa = new Promise(function(e) {
            d.F = e
        });
        this.Qb = this.Mb = null;
        this.g = new U(this.a, function() {
            return d.ya.contentWindow
        }, this.u)
    };
    k = ze.prototype;
    k.connect = function() {
        var a = this.ya;
        if ("isConnected" in a) a = a.isConnected;
        else {
            var b = a.ownerDocument && a.ownerDocument.documentElement;
            a = b && b.contains(a) || !1
        }
        if (!a) throw Error("iframe must be in DOM");
        this.g.connect(this.na.bind(this));
        Jb(this.ya, this.Za);
        return this.bb
    };
    k.disconnect = function() {
        this.g.disconnect()
    };
    k.Ia = function() {
        return this.Wa
    };
    k.fb = function() {
        return this.ya.contentWindow || null
    };
    k.message = function(a) {
        V(this.g, "msg", a)
    };
    k.onMessage = function(a) {
        this.g.Ra = a
    };
    k.na = function(a, b) {
        "connect" == a ? (xe(this.g, this.Ja), this.sa()) : "result" == a ? this.F && (a = b.code, b = new me(a, "failed" == a ? Error(b.data || "") : b.data, "iframe", ve(this.g), !0, !0), qe(this.a, b, this.F), this.F = null, V(this.g, "close"), this.disconnect()) : "ready" == a ? this.Va && (this.Va(), this.Va = null) : "resize" == a && (this.Qb = b.height, this.Mb && this.Mb(this.Qb))
    };
    var Ae = function(a, b, c, d, e, f) {
        var g = this,
            h = d && y(d);
        if (!h || "_blank" != h && "_top" != h && "_" == h[0]) throw Error('The only allowed targets are "_blank", "_top" and name targets');
        this.a = a;
        this.qc = b;
        this.Za = c;
        this.nc = d;
        this.Ja = e || null;
        this.ba = f || {};
        this.sa = null;
        this.bb = new Promise(function(l) {
            g.sa = l
        });
        this.F = null;
        this.Wa = new Promise(function(l) {
            g.F = l
        });
        this.g = this.P = this.Z = null
    };
    k = Ae.prototype;
    k.open = function() {
        return Be(this)
    };
    k.disconnect = function() {
        this.P && (this.P.stop(), this.P = null);
        this.g && (this.g.disconnect(), this.g = null);
        if (this.Z) {
            try {
                this.Z.close()
            } catch (a) {}
            this.Z = null
        }
        this.F = null
    };
    k.fb = function() {
        return this.Z
    };
    k.Ia = function() {
        return this.Wa
    };
    k.message = function(a) {
        V(this.g, "msg", a)
    };
    k.onMessage = function(a) {
        this.g.Ra = a
    };
    var Be = function(a) {
            var b = Ce(a),
                c = a.Za;
            if (!a.ba.fd) {
                var d = pe({
                    requestId: a.qc,
                    Sb: a.ba.Sb || ne(a.a.location.href),
                    $b: a.Ja
                });
                c = c + (-1 == c.indexOf("#") ? "#" : "&") + encodeURIComponent("__WA__") + "=" + encodeURIComponent(d)
            }
            d = a.nc;
            "_top" != y(d) && re(a.a) && (d = z("_top"));
            try {
                var e = Kb(c, a.a, d, b)
            } catch (f) {}
            if (!e && "_top" != y(d) && !a.ba.ed) {
                d = z("_top");
                try {
                    e = Kb(c, a.a, d)
                } catch (f) {}
            }
            e ? (a.Z = e, "_top" != y(d) && De(a)) : Ee(a, Error("failed to open window"));
            return a.Wa.catch(function() {})
        },
        Ce = function(a) {
            var b = a.a.screen,
                c = b.availWidth ||
                b.width,
                d = b.availHeight || b.height,
                e = a.a == a.a.top;
            var f = a.a.navigator;
            f = /Edge/i.test(f && f.userAgent);
            c = Math.max(c - (e && a.a.outerWidth > a.a.innerWidth ? Math.min(100, a.a.outerWidth - a.a.innerWidth) : f ? 100 : 0), .5 * c);
            var g = Math.max(d - (e && a.a.outerHeight > a.a.innerHeight ? Math.min(100, a.a.outerHeight - a.a.innerHeight) : f ? 100 : 0), .5 * d);
            d = Math.floor(Math.min(600, .9 * c));
            e = Math.floor(Math.min(600, .9 * g));
            a.ba.width && (d = Math.min(a.ba.width, c));
            a.ba.height && (e = Math.min(a.ba.height, g));
            a = Math.floor((b.width - d) / 2);
            b = Math.floor((b.height -
                e) / 2);
            c = {
                height: e,
                width: d,
                resizable: "yes",
                scrollbars: "yes"
            };
            f || (c.left = a, c.top = b);
            f = "";
            for (var h in c) f && (f += ","), f += h + "=" + c[h];
            return f
        },
        De = function(a) {
            a.P = new le(500);
            a.P.addEventListener("tick", function() {
                Fe(a, !0)
            });
            a.P.start();
            a.g = new U(a.a, a.Z, null);
            a.g.connect(a.na.bind(a))
        },
        Fe = function(a, b) {
            if (!a.Z || a.Z.closed) a.P && (a.P.stop(), a.P = null), a.a.setTimeout(function() {
                try {
                    a.X("canceled", null)
                } catch (c) {
                    Ee(a, c)
                }
            }, b ? 3E3 : 0)
        },
        Ee = function(a, b) {
            a.F && a.F(Promise.reject(b));
            a.disconnect()
        };
    Ae.prototype.X = function(a, b) {
        if (this.F) {
            var c = this.g.isConnected();
            a = new me(a, b, "popup", c ? ve(this.g) : kc(this.Za), c, c);
            qe(this.a, a, this.F);
            this.F = null
        }
        this.g && V(this.g, "close");
        this.disconnect()
    };
    Ae.prototype.na = function(a, b) {
        var c = this;
        "connect" == a ? (xe(this.g, this.Ja), this.sa()) : "result" == a ? (a = b.code, this.X(a, "failed" == a ? Error(b.data || "") : b.data)) : "check" == a && this.a.setTimeout(function() {
            return Fe(c)
        }, 200)
    };
    var Ge = function(a, b, c, d, e) {
        this.a = a;
        this.cc = b;
        this.dc = c;
        this.u = d;
        this.yc = e
    };
    Ge.prototype.Ia = function() {
        var a = this,
            b = new me(this.cc, this.dc, "redirect", this.u, this.yc, !1);
        return new Promise(function(c) {
            qe(a.a, b, c)
        })
    };
    var He = function() {
            var a = window,
                b = this;
            this.version = "1.23";
            this.a = a;
            this.J = a.location.hash;
            this.rb = {};
            this.sb = {};
            this.Ob = null;
            new Promise(function(c) {
                b.Ob = c
            })
        },
        Ie = function(a, b, c) {
            var d = new ze(a, b, c);
            return d.connect().then(function() {
                return d
            })
        };
    He.prototype.open = function(a, b, c, d, e) {
        return {
            hd: Je(this, a, b, c, d, e).fb()
        }
    };
    var Ke = function(a, b, c, d, e) {
        var f = Je(a, "GPAY", b, c, d, e);
        return f.bb.then(function() {
            return f
        })
    };
    He.prototype.Ba = function(a, b) {
        var c = this.rb[a];
        c || (c = [], this.rb[a] = c);
        c.push(b);
        c = this.sb[a];
        if (!c && this.J) {
            try {
                var d = this.a,
                    e = oe(this.J).__WA_RES__;
                if (e) {
                    var f = JSON.parse(e);
                    if (f && f.requestId == a) {
                        var g = d.location.hash;
                        if (g) {
                            var h = encodeURIComponent("__WA_RES__") + "=";
                            e = -1;
                            do
                                if (e = g.indexOf(h, e), -1 != e) {
                                    var l = 0 < e ? g.substring(e - 1, e) : "";
                                    if ("" == l || "?" == l || "#" == l || "&" == l) {
                                        var m = g.indexOf("&", e + 1); - 1 == m && (m = g.length);
                                        g = g.substring(0, e) + g.substring(m + 1)
                                    } else e++
                                } while (-1 != e && e < g.length)
                        }
                        var q = g;
                        q = q || "";
                        if (q !=
                            d.location.hash && d.history && d.history.replaceState) try {
                            d.history.replaceState(d.history.state, "", q)
                        } catch (L) {}
                        var F = f.code,
                            x = f.data,
                            D = f.origin,
                            ha = d.document.referrer && kc(d.document.referrer);
                        c = new Ge(d, F, x, D, D == ha)
                    } else c = null
                } else c = null
            } catch (L) {
                se(L), this.Ob(L)
            }
            c && (this.sb[a] = c)
        }(a = c) && Le(a, b)
    };
    var Je = function(a, b, c, d, e, f) {
            var g = new Ae(a.a, b, c, d, e, f);
            g.open().then(function() {
                Me(a, b, g)
            });
            return g
        },
        Le = function(a, b) {
            Promise.resolve().then(function() {
                b(a)
            })
        },
        Me = function(a, b, c) {
            var d = a.rb[b];
            d && d.forEach(function(e) {
                Le(c, e)
            });
            a.sb[b] = c
        };
    var W = function(a, b, c, d) {
        this.l = a;
        this.$a = b || !1;
        this.zb = c || new He;
        this.Hb = new ad;
        this.Da = this.aa = null;
        this.ub = !1;
        this.Eb = this.b = null;
        this.Pb = d || null;
        this.kb = this.lb = this.s = this.Ea = null;
        this.fa = 3E4;
        this.$a && (A("\n.google-payments-dialog {\n    animation: none 0s ease 0s 1 normal none running;\n    background: none 0 0 / auto repeat scroll padding-box border-box #fff;\n    background-blend-mode: normal;\n    border: 0 none #333;\n    border-radius: 8px 8px 0 0;\n    border-collapse: separate;\n    bottom: 0;\n    box-shadow: #808080 0 3px 0 0, #808080 0 0 22px;\n    box-sizing: border-box;\n    letter-spacing: normal;\n    max-height: 100%;\n    overflow: visible;\n    position: fixed;\n    width: 100%;\n    z-index: 2147483647;\n    -webkit-appearance: none;\n    left: 0;\n}\n@media (min-width: 480px) {\n  .google-payments-dialog {\n    width: 480px !important;\n    left: -240px !important;\n    margin-left: calc(100vw - 100vw / 2) !important;\n  }\n}\n.google-payments-dialogContainer {\n  background-color: rgba(0,0,0,0.26);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n}\n.iframeContainer {\n  -webkit-overflow-scrolling: touch;\n}\n"),
            A("\n.google-payments-dialogCenter {\n  animation: none 0s ease 0s 1 normal none running;\n  background-blend-mode: normal;\n  background: none 0 0 / auto repeat scroll padding-box border-box #fff;\n  border-collapse: separate;\n  border-radius: 8px;\n  border: 0px none #333;\n  bottom: auto;\n  box-shadow: #808080 0 0 22px;\n  box-sizing: border-box;\n  left: -240px;\n  letter-spacing: normal;\n  margin-left: calc(100vw - 100vw / 2) !important;\n  max-height: 90%;\n  overflow: visible;\n  position: absolute;\n  top: 100%;\n  transform: scale(0.8);\n  width: 480px;\n  z-index: 2147483647;\n  -webkit-appearance: none;\n}\n@media (min-height: 667px) {\n  .google-payments-dialogCenter {\n    max-height: 600px;\n  }\n}\n.google-payments-activeContainer {\n  top: 50%;\n  transform: scale(1.0) translateY(-50%);\n}\n"))
    };
    W.prototype.Ba = function(a) {
        this.aa || (this.aa = a, this.zb.Ba("GPAY", this.mc.bind(this)))
    };
    W.prototype.mc = function(a) {
        var b = this;
        cd(this.Hb);
        this.aa(a.Ia().then(function(c) {
            if ("TIN" != b.l && c.origin != Ne(b)) throw Error("channel mismatch");
            var d = c.data;
            if (d.redirectEncryptedCallbackData) return Nc = 3, Oe(b, d.redirectEncryptedCallbackData).then(function(e) {
                var f = Object.assign({}, d);
                delete f.redirectEncryptedCallbackData;
                return Object.assign(f, e)
            });
            if (!c.ib || !c.vc) throw Error("channel mismatch");
            return d
        }, function(c) {
            var d = c.message;
            c = c.message;
            try {
                c = JSON.parse(d.substring(7))
            } catch (e) {}
            c.statusCode &&
                -1 == ["DEVELOPER_ERROR", "MERCHANT_ACCOUNT_ERROR"].indexOf(c.statusCode) && (c = {
                    statusCode: "CANCELED"
                });
            "AbortError" == c && (c = {
                statusCode: "CANCELED"
            });
            return Promise.reject(c)
        }))
    };
    var Oe = function(a, b) {
        return new Promise(function(c, d) {
            var e = Pe(a),
                f = new XMLHttpRequest;
            f.open("POST", e, !0);
            "withCredentials" in f && (f.withCredentials = !0);
            f.onreadystatechange = function() {
                if (!(2 > f.readyState))
                    if (100 > f.status || 599 < f.status) f.onreadystatechange = null, d(Error("Unknown HTTP status " + f.status));
                    else if (4 == f.readyState) try {
                    c(JSON.parse(f.responseText))
                } catch (g) {
                    d(g)
                }
            };
            f.onerror = function() {
                d(Error("Network failure"))
            };
            f.onabort = function() {
                d(Error("Request aborted"))
            };
            f.send(b)
        })
    };
    W.prototype.A = function(a) {
        var b = this;
        return new Promise(function(c, d) {
            if (hd(a)) c({
                result: !1
            });
            else {
                var e = window.navigator.userAgent,
                    f = 0 < e.indexOf("OPA/") && 0 < e.indexOf("AppleWebKit"),
                    g = 0 < e.indexOf("FxiOS"),
                    h = 0 < e.indexOf("Instagram"),
                    l = 0 < e.indexOf("FB_IAB"),
                    m = 0 < e.indexOf("AndroidMapsWebView");
                if ((0 < e.indexOf("GSA/") && 0 < e.indexOf("Safari") || f || g || h || l || m) && !b.$a) c({
                    result: !1
                });
                else {
                    g = !1;
                    if (google.payments.api.ReadyToPayAdditionalBrowsers) {
                        if (0 < e.indexOf("UCMini")) {
                            c({
                                result: !1
                            });
                            return
                        }
                        g = 0 < e.indexOf("OPT") ||
                            0 < e.indexOf("UCBrowser")
                    }
                    var q = 0 < e.indexOf("Chrome") || 0 < e.indexOf("Firefox") || 0 < e.indexOf("Safari") || g || f;
                    q && 2 <= a.apiVersion && a.existingPaymentMethodRequired ? (a.environment = b.l, Rc(a, 6, ["isReadyToPayResponse", "isReadyToPayError"], function(F) {
                        var x = {
                            result: q
                        };
                        a.existingPaymentMethodRequired && (F.data.isReadyToPayError ? d({
                            statusCode: "DEVELOPER_ERROR",
                            statusMessage: "Ready to pay error. Cause : " + F.data.isReadyToPayError
                        }) : x.paymentMethodPresent = "READY_TO_PAY" == F.data.isReadyToPayResponse);
                        c(x)
                    })) : c({
                        result: q
                    })
                }
            }
        })
    };
    W.prototype.M = function(a) {
        if (this.$a) {
            this.ra(a);
            var b = Qe(this, a),
                c = Re(this, b.container, b.iframe, a);
            this.Da = {
                container: b.container,
                iframe: b.iframe,
                request: a,
                dataPromise: c
            }
        }
    };
    W.prototype.R = function(a) {
        var b = this;
        a.swg || a.apiVersion || (a.apiVersion = 1);
        if (a.forceRedirect && this.s) throw Error("Callback is not supported in redirect mode");
        a.environment = this.l;
        this.ra(a);
        if (this.$a) {
            Nc = 1;
            if (this.Da) {
                var c = this.Da;
                var d = this.Da.dataPromise;
                this.Da = null
            } else c = Qe(this, a), d = Re(this, c.container, c.iframe, a);
            Se(this, c.container, c.iframe, a);
            history.pushState({}, "", window.location.href);
            var e = function(f) {
                f.preventDefault();
                f = c;
                f.container.parentNode && (b.Eb(Promise.reject({
                        errorCode: "CANCELED"
                    })),
                    Te(f.container, f.iframe), b.b && b.b.disconnect());
                window.removeEventListener("popstate", e)
            };
            window.addEventListener("popstate", e);
            a = new Promise(function(f) {
                b.Eb = f
            });
            this.aa(Promise.race([d, a]))
        } else return Nc = a.forceRedirect ? 3 : 2, Ke(this.zb, "TIN" == this.l ? "/ui/pay" : Ne(this) + "/gp/p/ui/pay", a.forceRedirect ? z("_top") : z("gp-js-popup"), a, Ue(a)).then(function(f) {
            var g = new Uc;
            b.Hb.show(f && f.fb());
            f.onMessage(function(h) {
                "partialPaymentDataCallback" == h.type ? b.lb = Zc(h.data, b.s, b.fa, g.Qa).then(function(l) {
                        return f.message(l)
                    }) :
                    "fullPaymentDataCallback" == h.type && (b.kb = Yc(h.data, b.s, b.fa, g.Qa).then(function(l) {
                        f.message(l)
                    }))
            })
        })
    };
    var Ue = function(a) {
        var b = {
            width: 600,
            height: 600
        };
        a.forceRedirect || a.swg || (b.disableRedirectFallback = !0);
        return b
    };
    W.prototype.pb = function(a) {
        this.s = a
    };
    var Ne = function(a) {
            return "LOCAL" == a.l ? "" : "https://" + ("PREPROD" == a.l ? "pay-preprod.sandbox" : "SANDBOX" == a.l ? "pay.sandbox" : "CANARY" == a.l ? "ibfe-canary.corp" : "pay") + ".google.com"
        },
        Pe = function(a) {
            var b = Ne(a) + "/gp/p/apis/buyflow/process";
            a.Pb && (b += "?rk=" + encodeURIComponent(a.Pb));
            return b
        },
        Ve = function(a, b) {
            var c = window.location.origin,
                d = z("https://pay.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
            if ("CANARY" == a) d = z("https://ibfe-canary.corp.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
            else if ("SANDBOX" == a || "PREPROD" == a) d = z("https://pay" + ("PREPROD" == a ? "-preprod" : "") + ".sandbox.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
            return tb(d, {
                coordinationToken: void 0 === b ? "" : b,
                origin: c
            })
        },
        Te = function(a, b) {
            We(b, "all 250ms ease 0s");
            b.height = "0px";
            setTimeout(function() {
                a.parentNode && a.parentNode.removeChild(a)
            }, 250)
        },
        Qe = function(a, b) {
            b = b.i && b.i.renderContainerCenter ? "google-payments-dialogCenter" : "google-payments-dialog";
            var c = document.createElement("div");
            c.classList.add("google-payments-dialogContainer");
            var d = document.createElement("div");
            d.classList.add("iframeContainer");
            var e = document.createElement("iframe");
            e.classList.add(b);
            e.setAttribute("frameborder", "0");
            e.setAttribute("scrolling", "no");
            d.appendChild(e);
            c.appendChild(d);
            document.body.appendChild(c);
            b = {
                container: c,
                iframe: e
            };
            c = b.iframe;
            d = b.container;
            d.addEventListener("click", na(a.bc, a, b));
            d.style.display = "none";
            c.style.display = "none";
            c.height = "0px";
            We(c, "all 250ms ease 0s");
            a.ub = !1;
            return b
        };
    W.prototype.bc = function(a) {
        a.container.parentNode && history.back()
    };
    var Se = function(a, b, c, d) {
            b.style.display = "block";
            c.style.display = "block";
            setTimeout(function() {
                c.height = "280px";
                d.i && d.i.renderContainerCenter && c.classList.add("google-payments-activeContainer");
                setTimeout(function() {
                    a.ub = !0;
                    a.Ea && (We(c, a.Ea.transition), c.height = a.Ea.height, a.Ea = null)
                }, 250)
            }, 1)
        },
        We = function(a, b) {
            vd(a, b);
            a.style.setProperty("-webkit-transition", b)
        },
        Re = function(a, b, c, d) {
            d.swg || d.apiVersion || (d.apiVersion = 1);
            var e = "";
            d.i && d.i.coordinationToken && (e = d.i.coordinationToken);
            d.environment =
                a.l;
            var f;
            e = Ve(a.l, e);
            return Ie(c, e, d).then(function(g) {
                a.b = g;
                var h = new Uc;
                g.onMessage(function(l) {
                    "partialPaymentDataCallback" == l.type ? a.lb = Zc(l.data, a.s, a.fa, h.Qa).then(function(m) {
                        return g.message(m)
                    }) : "fullPaymentDataCallback" == l.type ? a.kb = Yc(l.data, a.s, a.fa, h.Qa).then(function(m) {
                        return g.message(m)
                    }) : "resize" == l.type && (a.ub ? (f || (f = Date.now()), Date.now() < f + 250 ? We(c, l.transition + ", height 250ms") : We(c, l.transition), c.height = l.height) : a.Ea = {
                        height: l.height,
                        transition: l.transition
                    })
                });
                return g.Ia()
            }).then(function(g) {
                Te(b,
                    c);
                history.back();
                return g.data
            }, function(g) {
                Te(b, c);
                history.back();
                return Promise.reject(g)
            })
        };
    W.prototype.ra = function(a) {
        var b = {
            startTimeMs: Date.now()
        };
        a.i = a.i ? Object.assign(b, a.i) : b
    };
    var Xe = "actions.google.com amp-actions.sandbox.google.com amp-actions-staging.sandbox.google.com amp-actions-autopush.sandbox.google.com payments.developers.google.com payments.google.com".split(" "),
        Y = function(a, b, c, d) {
            this.hb = b;
            ld(a);
            this.Kb = null;
            this.l = a.environment || "TEST";
            Ye || (Ye = -1 != Xe.indexOf(window.location.hostname) && a.i && a.i.googleTransactionId ? a.i.googleTransactionId : Oa(this.l));
            this.C = a;
            a.paymentDataCallback && (a.paymentDataCallbacks = {
                onPaymentDataChanged: a.paymentDataCallback
            });
            this.s =
                null;
            this.m = new Ze(a, c);
            this.$ = new W(this.l, c, d, a.i && a.i.redirectKey);
            this.ka = 5;
            this.T = null;
            b = this.m.mode;
            this.ma = 5 === b || 4 === b ? new dd(this.l) : this.$;
            a.paymentDataCallbacks && (this.s = a.paymentDataCallbacks, this.ma.pb(a.paymentDataCallbacks), this.$.pb(a.paymentDataCallbacks));
            this.$.Ba(this.Nb.bind(this));
            this.ma.Ba(this.Nb.bind(this));
            Nc = b;
            Lc = Ye;
            P({
                eventType: 9,
                clientLatencyStartMs: Date.now(),
                buyFlowActivityReason: this.m.h,
                softwareInfo: X(this)
            });
            window.addEventListener("message", function(e) {
                -1 != Xe.indexOf(window.location.hostname) &&
                    "logPaymentData" === e.data.name && P(e.data.data)
            })
        },
        Ye, X = function(a) {
            return a.C.merchantInfo && a.C.merchantInfo.softwareInfo ? a.C.merchantInfo.softwareInfo : null
        };
    Y.prototype.A = function(a) {
        var b = this;
        if (a) {
            var c = {};
            this.C.environment && (c.environment = this.C.environment);
            this.C.merchantInfo && (c.merchantInfo = this.C.merchantInfo);
            this.C.i && (c.i = this.C.i);
            a = Object.assign({}, c, a)
        }
        var d = Date.now(),
            e = [].concat(ca(this.m.h));
        P({
            eventType: 12,
            clientLatencyStartMs: d,
            buyFlowActivityReason: e,
            softwareInfo: X(this)
        });
        var f = kd() || md(a);
        if (f) return new Promise(function(h, l) {
            B({
                ia: "isReadyToPay",
                errorMessage: f
            });
            P({
                eventType: 0,
                buyFlowActivityReason: e,
                error: 2,
                softwareInfo: X(b)
            });
            l({
                statusCode: "DEVELOPER_ERROR",
                statusMessage: f
            })
        });
        var g = [].concat(ca(this.m.h));
        return $e(this, a, g).then(function(h) {
            P({
                eventType: 0,
                clientLatencyStartMs: d,
                isReadyToPayApiResponse: h,
                buyFlowActivityReason: g,
                softwareInfo: X(b)
            });
            return h
        }).catch(function(h) {
            if (h.statusCode) {
                var l = h.statusCode;
                l = "INTERNAL_ERROR" == l ? 1 : "DEVELOPER_ERROR" == l ? 2 : "MERCHANT_ACCOUNT_ERROR" == l ? 4 : "UNSUPPORTED_API_VERSION" == l ? 5 : "BUYER_CANCEL" == l ? 6 : 0
            } else l = 1;
            P({
                eventType: 0,
                buyFlowActivityReason: g,
                error: l,
                softwareInfo: X(b)
            });
            throw h;
        })
    };
    var $e = function(a, b, c) {
            if (google.payments.api.DisableNativeReadyToPayCheckForPaymentHandler ? 4 === a.m.mode && !af(b) : a.m.Ya && !af(b)) {
                if (2 <= b.apiVersion) return bf(a, b, c);
                var d = a.$.A(b),
                    e = a.ma.A(b);
                if (hd(b) && !a.m.ga) return c.push(6), e;
                c.push(7);
                return e.then(function() {
                    return d
                })
            }
            return a.$.A(b)
        },
        bf = function(a, b, c) {
            var d = Promise.resolve({
                result: !1
            });
            b.existingPaymentMethodRequired && (d = Promise.resolve({
                result: !1,
                paymentMethodPresent: !1
            }));
            var e = d;
            if (jd(b, "CRYPTOGRAM_3DS")) {
                e = JSON.parse(JSON.stringify(b));
                for (var f =
                        0; f < e.allowedPaymentMethods.length; f++) "CARD" == e.allowedPaymentMethods[f].type && (e.allowedPaymentMethods[f].parameters.allowedAuthMethods = ["CRYPTOGRAM_3DS"]);
                c.push(8);
                e = a.ma.A(e)
            }
            var g = d;
            jd(b, "PAN_ONLY") && (c.push(9), g = a.$.A(b));
            return a.m.ga ? (c.push(99), e.then(function() {
                return g
            })) : e.then(function(h) {
                return 1 == (h && h.result) ? h : g
            })
        };
    k = Y.prototype;
    k.M = function(a) {
        var b = kd() || qd(a);
        b ? B({
            ia: "prefetchPaymentData",
            errorMessage: b
        }) : (this.ra(a), this.m.Ya && !af(a) ? this.ma.M(a) : this.$.M(a))
    };
    k.Aa = function() {};
    k.R = function(a) {
        var b = this,
            c = [].concat(ca(this.m.h)),
            d = function() {
                return P({
                    eventType: 5,
                    buyFlowActivityReason: c.length ? c : [99],
                    softwareInfo: X(b),
                    buttonInfo: b.T
                })
            },
            e = kd() || qd(a);
        this.ka = a && a.swg ? 6 : 5;
        if (e) this.hb(new Promise(function(l, m) {
            P({
                eventType: 1,
                error: 2,
                buyFlowMode: b.ka,
                softwareInfo: X(b),
                buttonInfo: b.T
            });
            B({
                ia: "loadPaymentData",
                errorMessage: e
            });
            m({
                statusCode: "DEVELOPER_ERROR",
                statusMessage: e
            })
        })), d();
        else {
            if (this.s || a.callbackIntents) {
                var f = sd(a, this.s);
                if (f) {
                    this.hb(new Promise(function(l, m) {
                        P({
                            eventType: 1,
                            error: 2,
                            buyFlowMode: b.ka,
                            softwareInfo: X(b),
                            buttonInfo: b.T
                        });
                        B({
                            ia: "loadPaymentData",
                            errorMessage: f
                        });
                        m({
                            statusCode: "DEVELOPER_ERROR",
                            statusMessage: f
                        })
                    }));
                    d();
                    return
                }
            }
            this.Kb = Date.now();
            var g = cf(this.m, a, c),
                h = 5 === g || 4 === g ? this.ma : this.$;
            g !== this.m.mode && (Nc = g);
            this.ra(a);
            d();
            h.R(a)
        }
    };
    k.la = function(a) {
        a = void 0 === a ? {} : a;
        var b = 0,
            c = 0;
        switch (a.buttonType) {
            case "short":
                b = 1;
                break;
            case "long":
                b = 2;
                break;
            case "plain":
                b = 3;
                break;
            case "buy":
                b = 4;
                break;
            case "donate":
                b = 5
        }
        switch (a.buttonSizeMode) {
            case "static":
                c = 1;
                break;
            case "fill":
                c = 2
        }
        var d = void 0 === a.buttonRootNode ? 0 : 3;
        a.buttonRootNode instanceof ShadowRoot ? d = 1 : a.buttonRootNode instanceof HTMLDocument && (d = 2);
        this.T = {
            buttonType: b,
            buttonSizeMode: c,
            buttonRootNode: d
        };
        a = void 0 === a ? {} : a;
        Object.values(Ea).includes(a.buttonType) || (a.buttonType = "long");
        Object.values(Ga).includes(a.buttonSizeMode) || (a.buttonSizeMode = "static");
        b = a;
        c = Bc.includes(Ra());
        d = Cc.includes(Ra());
        if ((google.payments.api.EnableDynamicGpayButtonForTesting || google.payments.api.EnableDynamicGpayButton || c) && !d && "short" !== b.buttonType && "plain" !== b.buttonType) a = Dc(a);
        else {
            zc.includes(a.buttonRootNode || document) || (A("\n.gpay-button {\n  background-origin: content-box;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border: 0px;\n  border-radius: 4px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  cursor: pointer;\n  height: 40px;\n  min-height: 40px;\n  padding: 11px 24px;\n}\n\n.gpay-button.black {\n  background-color: #000;\n  box-shadow: none;\n  padding: 12px 24px 10px;\n}\n\n.gpay-button.white {\n  background-color: #fff;\n}\n\n.gpay-button.short, .gpay-button.plain {\n  min-width: 90px;\n  width: 160px;\n}\n\n.gpay-button.black.short, .gpay-button.black.plain {\n  background-image: url(https://www.gstatic.com/instantbuy/svg/dark_gpay.svg);\n}\n\n.gpay-button.white.short, .gpay-button.white.plain {\n  background-image: url(https://www.gstatic.com/instantbuy/svg/light_gpay.svg);\n}\n\n.gpay-button.black.active {\n  background-color: #5f6368;\n}\n\n.gpay-button.black.hover {\n  background-color: #3c4043;\n}\n\n.gpay-button.white.active {\n  background-color: #fff;\n}\n\n.gpay-button.white.focus {\n  box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;\n}\n\n.gpay-button.white.hover {\n  background-color: #f8f8f8;\n}\n\n.gpay-button-fill, .gpay-button-fill > .gpay-button.white, .gpay-button-fill > .gpay-button.black {\n  width: 100%;\n  height: inherit;\n}\n\n.gpay-button-fill > .gpay-button.white,\n  .gpay-button-fill > .gpay-button.black {\n    padding: 11px 15%;\n}\n\n",
                a.buttonRootNode), b = Hc(), c = window.navigator.userAgent, c = google.payments.api.EnablePngExtensionForButton && 0 < c.indexOf("Safari") && (0 < c.indexOf("iPhone") || 0 < c.indexOf("iPad")) ? "png" : "svg", A("\n    .gpay-button.long, .gpay-button.buy {\n      min-width: " + Ha[b] + "px;\n      width: 240px;\n    }\n\n    .gpay-button.donate {\n      min-width: " + Ia[b] + "px;\n      width: 240px;\n    }\n\n    .gpay-button.white.long, .gpay-button.white.buy {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/light/" +
                b + "." + c + ");\n    }\n\n    .gpay-button.black.long, .gpay-button.black.buy {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/dark/" + b + "." + c + ");\n    }\n\n    .gpay-button.white.donate {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/light/donate/" + b + "." + c + ");\n    }\n\n    .gpay-button.black.donate {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/dark/donate/" + b + "." + c + ");\n    }", a.buttonRootNode), zc.push(a.buttonRootNode || document));
            b =
                document.createElement("button");
            Fc(b);
            Object.values(Fa).includes(a.buttonColor) || (a.buttonColor = "default");
            "default" == a.buttonColor && (a.buttonColor = "black");
            b.setAttribute("class", "gpay-button " + Ec(a));
            Gc(b);
            if (a.onClick) b.addEventListener("click", a.onClick);
            else throw Error("Parameter 'onClick' must be set.");
            c = document.createElement("div");
            "fill" === a.buttonSizeMode && c.setAttribute("class", "gpay-button-fill");
            c.appendChild(b);
            a = c
        }
        P({
            eventType: 2,
            clientLatencyStartMs: Date.now(),
            buyFlowActivityReason: this.m.h,
            softwareInfo: X(this),
            buttonInfo: this.T
        });
        return a
    };
    k.Nb = function(a) {
        var b = this;
        a = a.then(function(c) {
            google.payments.api.LogInternally && console.log("payment data", c);
            if (c.error) {
                var d = Error();
                d.statusCode = c.error.statusCode;
                d.statusMessage = c.error.statusMessage;
                B({
                    ia: "loadPaymentData",
                    errorMessage: d.statusMessage
                });
                throw d;
            }
            return c
        });
        a.then(function(c) {
            google.payments.api.LogInternally && console.log("payment data resolve to ", c);
            P({
                eventType: 1,
                clientLatencyStartMs: b.Kb,
                buyFlowMode: b.ka,
                buyFlowActivityReason: b.m.h,
                softwareInfo: X(b),
                buttonInfo: b.T
            })
        }).catch(function(c) {
            google.payments.api.LogInternally &&
                console.log("payment data has error", c);
            c.errorCode ? P({
                eventType: 1,
                error: c.errorCode,
                buyFlowMode: b.ka,
                buyFlowActivityReason: b.m.h,
                softwareInfo: X(b),
                buttonInfo: b.T
            }) : P({
                eventType: 1,
                error: 6,
                buyFlowMode: b.ka,
                buyFlowActivityReason: b.m.h,
                softwareInfo: X(b),
                buttonInfo: b.T
            })
        });
        this.hb(a)
    };
    k.ra = function(a) {
        var b = {
            googleTransactionId: Ye,
            usingPayJs: !0
        };
        a.i = a.i ? Object.assign(b, a.i) : b;
        a.i.firstPartyMerchantIdentifier && delete a.i.firstPartyMerchantIdentifier;
        this.C.i && this.C.i.firstPartyMerchantIdentifier && (a.i.firstPartyMerchantIdentifier = this.C.i.firstPartyMerchantIdentifier)
    };
    Y.prototype.createButton = Y.prototype.la;
    Y.prototype.loadPaymentData = Y.prototype.R;
    Y.prototype.notifyAvailableOffers = Y.prototype.Aa;
    Y.prototype.prefetchPaymentData = Y.prototype.M;
    Y.prototype.isReadyToPay = Y.prototype.A;
    var df = null,
        Ze = function(a, b) {
            b = void 0 === b ? !1 : b;
            this.ab = a;
            this.h = [];
            this.ga = ef(this);
            this.Ya = ff(this);
            this.mode = 2;
            b ? (this.h = [38], this.mode = 1) : this.Ya && this.ga ? this.mode = 5 : this.Ya && (this.mode = 4);
            this.ab.paymentDataCallbacks && this.h.push(1)
        },
        af = function(a) {
            return !0 === (a.i && a.i.disableNative)
        },
        cf = function(a, b, c) {
            if (2 === a.mode || 1 === a.mode) return a.mode;
            if (af(b)) return c.push(3), 2;
            if (google.payments.api.UseCanMakePaymentResultFromPayjs) {
                if (a.ga && !df) return c.push(40), 2
            } else if (a.ga && !Oc) return c.push(4),
                2;
            return a.ga && b.swg ? (c.push(5), 2) : a.mode
        },
        ef = function(a) {
            if (null != window.navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i)) return a.h.push(37), !1;
            var b = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
            if (!("PaymentRequest" in window && null != b && 70 <= Number(b[1]) && "Google Inc." == window.navigator.vendor)) return a.h.push(36), !1;
            a.h.push(98);
            return "undefined" != typeof google && google.payments.api.PaymentHandlerLaunchPayjs ? a.ab.paymentDataCallbacks && (a.h.push(97), !google.payments.api.PaymentHandlerDynamicUpdatesLaunchPayjs) ?
                (a.h.push(39), !1) : !0 : (a.h.push(33), !1)
        },
        ff = function(a) {
            if (!window.PaymentRequest) return a.h.push(41), !1;
            var b = -1 !== window.navigator.userAgent.indexOf("OPT/"),
                c = -1 !== window.navigator.userAgent.indexOf("SamsungBrowser/");
            if (-1 !== window.navigator.userAgent.indexOf("OPR/") || b || c) return a.h.push(35), !1;
            if (a.ga) return !0;
            if (google.payments.api.DisablePaymentRequest && !google.payments.api.EnablePaymentRequest) return a.h.push(3), !1;
            b = window.navigator.userAgent.match(/Android/i);
            c = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
            (b = null != b && "PaymentRequest" in window && "Google Inc." == window.navigator.vendor && null != c && 59 <= Number(c[1])) || a.h.push(34);
            return b
        };
    ia("google.payments.api.PaymentsAsyncClient", Y);
    Y.prototype.isReadyToPay = Y.prototype.A;
    Y.prototype.prefetchPaymentData = Y.prototype.M;
    Y.prototype.loadPaymentData = Y.prototype.R;
    Y.prototype.createButton = Y.prototype.la;
    Y.prototype.notifyAvailableOffers = Y.prototype.Aa;
    var Z = function(a, b) {
        a = void 0 === a ? {} : a;
        this.kc = Pa({}, window.gpayMerchantIdFromUrl ? {
            merchantInfo: {
                merchantId: window.gpayMerchantIdFromUrl
            }
        } : {}, window.gpayInitParams, a);
        this.Ka = new Y(this.kc, this.oc.bind(this), b);
        this.Ca = null
    };
    k = Z.prototype;
    k.oc = function(a) {
        this.Ca(a)
    };
    k.A = function(a) {
        return this.Ka.A(a)
    };
    k.M = function(a) {
        this.Ka.M(a)
    };
    k.Aa = function() {};
    k.R = function(a) {
        var b = this;
        google.payments.api.EnablePwgTestExperiment && console.log("ZOMBIEMONKEYATEMYBRAIN");
        return (new Promise(function(c) {
            if (b.Ca) throw Error("This method can only be called one at a time.");
            b.Ca = c;
            b.Ka.R(a)
        })).then(function(c) {
            b.Ca = null;
            return c
        }, function(c) {
            b.Ca = null;
            throw c;
        })
    };
    k.la = function(a) {
        a = void 0 === a ? {} : a;
        return this.Ka.la(a)
    };
    Z.prototype.createButton = Z.prototype.la;
    Z.prototype.loadPaymentData = Z.prototype.R;
    Z.prototype.notifyAvailableOffers = Z.prototype.Aa;
    Z.prototype.prefetchPaymentData = Z.prototype.M;
    Z.prototype.isReadyToPay = Z.prototype.A;
    ia("google.payments.api.PaymentsClient", Z);
    Z.prototype.isReadyToPay = Z.prototype.A;
    Z.prototype.prefetchPaymentData = Z.prototype.M;
    Z.prototype.loadPaymentData = Z.prototype.R;
    Z.prototype.createButton = Z.prototype.la;
    Z.prototype.notifyAvailableOffers = Z.prototype.Aa;
    google.payments.api.UseCanMakePaymentResultFromPayjs && (new PaymentRequest([{
        supportedMethods: ["https://google.com/pay"]
    }], {
        total: {
            label: "Estimated Total Price",
            amount: {
                currency: "USD",
                value: "10"
            }
        }
    })).canMakePayment().then(function(a) {
        return df = a
    }).catch(function() {
        return df = !1
    });
}).call(this);
