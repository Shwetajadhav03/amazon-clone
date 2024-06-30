(function() {
    self.getServiceWorkerGlobalClientConfigData = function() {
        try {
            return JSON.parse(decodeURIComponent("%7B%22deviceProperties%22:%7B%22appType%22:%22web%22,%22deviceType%22:%22desktop%22%7D,%22marketplaceProperties%22:%7B%22countryCode%22:%22in%22,%22marketplaceName%22:%22Amazon.in%22,%22obfuscatedMarketplaceId%22:%22A21TJRUUN4KGV%22%7D,%22namespaces%22:%7B%22in-latency%22:%7B%22lightsaber-web%22:%7B%22data%22:%7B%22clientEnabled%22:true%7D%7D,%22lightsaber-mshop%22:%7B%22data%22:%7B%22clientEnabled%22:true%7D%7D%7D,%22lightsaber-rule-levers%22:%7B%22buyagain-mshop-android%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22cart-mobile-web%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22search-mshop-android%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22detail-mobile-web%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22detail-mshop-android%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22homepage-mobile-web%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22checkout-mshop-android%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22cart-mshop-android%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22buyagain-mobile-web%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22amazonpayhome-mshop-android%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22checkout-mobile-web%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22homepage-mshop-android%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22amazonpayhome-mobile-web%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D,%22search-mobile-web%22:%7B%22data%22:%7B%22ruleEnabled%22:true%7D%7D%7D%7D%7D"))
        } catch (e) {}
    }
}
)();
;;;var AUI_JS_DEBUG = !1;
(function() {
    var n = this && this.__extends || function() {
        var a = function(b, c) {
            a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return a(b, c)
        };
        return function(b, c) {
            function d() {
                this.constructor = b
            }
            if ("function" !== typeof c && null !== c)
                throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
            a(b, c);
            b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
            new d)
        }
    }(), k = function(a) {
        function b(b, d, e, f) {
            d = a.call(this, d || b) || this;
            d.name = "RuntimeConfig".concat(b, "Error");
            d.attribution = e || "AmazonServiceWorkerRuntimeConfigClientLib";
            d.logLevel = f;
            return d
        }
        n(b, a);
        return b
    }(Error), l = [], f, m = function(a) {
        self.$TM && "function" === typeof self.$TM.error ? self.$TM.error(a) : (l.push(a),
        f || (f = setInterval(function() {
            self.$TM && "function" === typeof self.$TM.error && (l.forEach(function(a) {
                self.$TM.error(a)
            }),
            clearInterval(f),
            f = void 0)
        }, 50)))
    }, e = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            if ("object" === typeof a && null !== a && void 0 !== a[d])
                a = a[d];
            else
                return
        }
        return a
    }, p = function(a) {
        a = e(a, ["namespaces"]);
        if (!a || "object" !== typeof a)
            return !1;
        for (var b in a) {
            var c = e(a, [b]);
            if (!c || "object" !== typeof c)
                return !1;
            for (var d in c) {
                var h = e(c, [d]);
                if (!h || "object" !== typeof h)
                    return !1
            }
        }
        return !0
    }, q = {
        android: /^\d+(\.\d+){3}$/,
        ios: /^\d+(\.\d+){2}$/
    }, g = function(a, b) {
        return a && "string" === typeof a && b && "string" === typeof b && (b = q[b.toLowerCase()]) && b.test(a) ? !0 : !1
    }, r = function(a, b) {
        if ("mshop" === b) {
            a = e(a, ["mshopProperties"]);
            if (!a || "object" !== typeof a)
                return !1;
            b = e(a, ["appStage"]);
            if (!b || "string" !== typeof b)
                return !1;
            b = e(a, ["appVersion"]);
            if (!b || "string" !== typeof b)
                return !1;
            a = e(a, ["osName"]);
            if (!a || "string" !== typeof a || !g(b, a))
                return !1
        }
        return !0
    }, t = function(a) {
        a = e(a, ["marketplaceProperties"]);
        if (!a || "object" !== typeof a)
            return !1;
        var b = e(a, ["obfuscatedMarketplaceId"]);
        if (!b || "string" !== typeof b)
            return !1;
        b = e(a, ["marketplaceName"]);
        if (!b || "string" !== typeof b)
            return !1;
        a = e(a, ["countryCode"]);
        return !!a && "string" === typeof a
    }, u = function() {
        function a(a) {
            this._mShopPropertiesData = a
        }
        a.prototype.getAppStage = function() {
            return this._mShopPropertiesData.appStage
        }
        ;
        a.prototype.getAppVersion = function() {
            return this._mShopPropertiesData.appVersion
        }
        ;
        a.prototype.getOsName = function() {
            return this._mShopPropertiesData.osName
        }
        ;
        a.prototype.compareVersion = function(a) {
            var b = this.getAppVersion()
              , d = this.getOsName();
            a: {
                if (!g(b, d) || !g(a, d))
                    throw b = new k("InvalidAppVersionComparison","Error: version [".concat(b, "] or [").concat(a, "] for OS [").concat(d, "] is invalid")),
                    m(b),
                    b;
                b = b.split(".").map(Number).slice(0, 3);
                a = a.split(".").map(Number).slice(0, 3);
                for (d = 0; 3 > d; d++) {
                    var e = b[d] - a[d];
                    if (0 !== e) {
                        b = e;
                        break a
                    }
                }
                b = 0
            }
            return b
        }
        ;
        return a
    }(), v = function() {
        function a(a) {
            this._devicePropertiesData = a;
            this._mShopProperties = this._createMShopProperties()
        }
        a.prototype.getAppType = function() {
            return this._devicePropertiesData.appType
        }
        ;
        a.prototype.getDeviceType = function() {
            return this._devicePropertiesData.deviceType
        }
        ;
        a.prototype.getMShopProperties = function() {
            return this._mShopProperties
        }
        ;
        a.prototype._createMShopProperties = function() {
            if ("mshop" === this.getAppType()) {
                var a = this._devicePropertiesData.mshopProperties;
                return a ? new u(a) : void 0
            }
        }
        ;
        return a
    }(), w = function() {
        function a(a) {
            this.featurePropertiesConfig = a
        }
        a.prototype.getData = function() {
            return this.featurePropertiesConfig.data
        }
        ;
        return a
    }(), x = function() {
        function a(a) {
            this._marketplacePropertiesData = a
        }
        a.prototype.getCountryCode = function() {
            return this._marketplacePropertiesData.countryCode
        }
        ;
        a.prototype.getMarketplaceId = function() {
            return this._marketplacePropertiesData.obfuscatedMarketplaceId
        }
        ;
        a.prototype.getMarketplaceName = function() {
            return this._marketplacePropertiesData.marketplaceName
        }
        ;
        return a
    }(), y = function() {
        function a(a) {
            this.deviceProperties = new v(a.deviceProperties);
            this.marketplaceProperties = new x(a.marketplaceProperties);
            this.namespacesData = a.namespaces
        }
        a.prototype.getDeviceProperties = function() {
            return this.deviceProperties
        }
        ;
        a.prototype.getMarketplaceProperties = function() {
            return this.marketplaceProperties
        }
        ;
        a.prototype.getFeatureProperties = function(a, c) {
            var b, e;
            return (a = null === (e = null === (b = this.namespacesData) || void 0 === b ? void 0 : b[a]) || void 0 === e ? void 0 : e[c]) ? new w(a) : void 0
        }
        ;
        return a
    }();
    self.$RuntimeConfig = new y(function() {
        if (self.getServiceWorkerGlobalClientConfigData && "function" === typeof self.getServiceWorkerGlobalClientConfigData) {
            var a = self.getServiceWorkerGlobalClientConfigData(), b;
            if (b = !!a)
                if ((b = e(a, ["deviceProperties"])) && "object" === typeof b) {
                    var c = e(b, ["appType"]);
                    if (c && "string" === typeof c) {
                        var d = e(b, ["deviceType"]);
                        b = d && "string" === typeof d ? r(b, c) : !1
                    } else
                        b = !1
                } else
                    b = !1;
            if (b && t(a) && p(a))
                return a
        }
        a = new k("InvalidConfigDataReceived","Missing runtime config data");
        m(a);
        throw a;
    }())
}
)();
var AUI_JS_DEBUG = !1;
(function() {
    var c = []
      , f = 0
      , d = function(a) {
        return function() {
            var b = f++;
            c.push([a, [].slice.call(arguments, 0), b, {
                time: Date.now()
            }]);
            return d(b)
        }
    }
      , e = function(a, b) {
        a = d(a);
        b && (a = a("instance", b));
        return a
    };
    e._s = c;
    this.csa = e
}
)();
var AUI_JS_DEBUG = !1;
(function() {
    var a = this && this.__assign || function() {
        a = Object.assign || function(e) {
            for (var b, c = 1, a = arguments.length; c < a; c++) {
                b = arguments[c];
                for (var d in b)
                    Object.prototype.hasOwnProperty.call(b, d) && (e[d] = b[d])
            }
            return e
        }
        ;
        return a.apply(this, arguments)
    }
      , g = a(a({}, {
        Application: "RetailServiceWorker"
    }), {
        "Events.SushiEndpoint": "https://unagi.amazon.in/1/events/com.amazon.csm.csa.prod"
    })
      , f = this && this.__assign || function() {
        f = Object.assign || function(e) {
            for (var b, c = 1, a = arguments.length; c < a; c++) {
                b = arguments[c];
                for (var d in b)
                    Object.prototype.hasOwnProperty.call(b, d) && (e[d] = b[d])
            }
            return e
        }
        ;
        return f.apply(this, arguments)
    }
    ;
    (function() {
        if (!g)
            throw Error("Could not initialize CSA config");
        var a = self.$RuntimeConfig.getMarketplaceProperties().getMarketplaceId();
        csa("Config", f(f({}, g), {
            ObfuscatedMarketplaceId: a
        }))
    }
    )()
}
)();
var AUI_JS_DEBUG = !1;
(function() {
    var F = self;
    (function(a) {
        function b(a, d) {
            return p(a, d)
        }
        function c(a, d) {
            var e = g[a] || {};
            t(e, d);
            g[a] = e;
            x++;
            m(u, 0)
        }
        function h(a, d, e) {
            var g = !0;
            d = f(d);
            e && e.buffered && (g = (y[a] || []).every(function(a) {
                return !1 !== d(a)
            }));
            return g ? (A[a] || (A[a] = []),
            A[a].push(d),
            function() {
                var e = A[a];
                e && e.splice(e.indexOf(d), 1)
            }
            ) : E
        }
        function k(a, d) {
            d = f(d);
            return a in G ? (d(G[a]),
            E) : h(a, function(a) {
                d(a);
                return !1
            })
        }
        function r(a, d) {
            p("Errors")("logError", a);
            if (v.DEBUG)
                throw d || a;
        }
        function l() {
            return Math.abs(4294967295 * Math.random() | 0).toString(36)
        }
        function f(a, d) {
            return function() {
                try {
                    return a.apply(this, arguments)
                } catch (C) {
                    r(C.message || C, C)
                }
            }
        }
        function m(d, e) {
            return a.setTimeout(f(d), e)
        }
        function u() {
            for (var a = 0; a < n.length; ) {
                var b = n[a]
                  , k = b[0]in g;
                if (!k && !z) {
                    e = n.length;
                    return
                }
                k ? (e = a,
                n.splice(a, 1),
                q(b)) : a++
            }
            d = x
        }
        function q(a) {
            var d = g[a[0]]
              , e = a[1]
              , b = e[0];
            if (!d || !d[b])
                return r("Undefined function: " + d + "/" + b);
            D = a[3];
            g[a[2]] = d[b].apply(d, e.slice(1)) || {};
            D = 0
        }
        function w() {
            z = 1;
            u()
        }
        function t(a, d) {
            B(d).forEach(function(e) {
                a[e] = d[e]
            })
        }
        var p = a.csa, v = {}, g = {}, n = a.csa._s, e = 0, x = 0, d = -1, D, z, A = {}, G = {}, y = {}, B = Object.keys, E = function() {};
        k("$beforeunload", w);
        c("Config", {
            instance: function(a) {
                t(v, a)
            }
        });
        p.plugin = f(function(a) {
            a(b)
        });
        b.config = v;
        b.register = c;
        b.on = h;
        b.once = k;
        b.blank = E;
        b.emit = function(a, d, e) {
            for (var g = A[a] || [], b = 0; b < g.length; )
                !1 === g[b](d) ? g.splice(b, 1) : b++;
            G[a] = d || {};
            e && e.buffered && (y[a] || (y[a] = []),
            100 <= y[a].length && y[a].shift(),
            y[a].push(d || {}))
        }
        ;
        b.UUID = function() {
            return [l(), l(), l(), l()].join("-")
        }
        ;
        b.time = function(a) {
            var d = D ? new Date(D.time) : new Date;
            return "ISO" === a ? d.toISOString() : d.getTime()
        }
        ;
        b.error = r;
        b.warn = function(a, d) {
            p("Errors")("logWarn", a);
            if (v.DEBUG)
                throw d || a;
        }
        ;
        b.exec = f;
        b.timeout = m;
        b.interval = function(d, e) {
            return a.setInterval(f(d), e)
        }
        ;
        b.global = a;
        a.csa._s.push = function(a) {
            a[0]in g && (!n.length || z) ? (q(a),
            n.length && d !== x && u()) : n.splice(e++, 0, a)
        }
        ;
        u();
        m(function() {
            m(w, v.SkipMissingPluginsTimeout || 5E3)
        }, 1)
    }
    )("undefined" !== typeof F ? F : global);
    csa.plugin(function(a) {
        var b = a.exec
          , c = a.global
          , h = a.on;
        a.raf = function(a) {
            if (c.requestAnimationFrame)
                return c.requestAnimationFrame(b(a))
        }
        ;
        a.on = function(b, c, l, f) {
            if (b && "function" === typeof b.addEventListener) {
                var m = a.exec(l);
                b.addEventListener(c, m, f);
                return function() {
                    b.removeEventListener(c, m, f)
                }
            }
            return "string" === typeof b ? h(b, c, l, f) : a.blank
        }
    });
    csa.plugin(function(a) {
        function b(b, c) {
            try {
                var f = a.global[b];
                r[c] = !!f;
                f = f || {}
            } catch (q) {
                f = {},
                r[c] = !1
            }
            return f
        }
        function c() {
            h || (h = b("localStorage", "local"));
            k || (k = b("sessionStorage", "session"))
        }
        var h, k, r = {}, l = a.exec;
        a.store = l(function(a, b, l) {
            c();
            l = l && l.session ? k : h;
            if (!a)
                return Object.keys(l);
            if (!b)
                return l[a];
            l[a] = b
        });
        a.storageSupport = l(function() {
            c();
            return r
        });
        a.deleteStored = l(function(a, b) {
            c();
            b = b && b.session ? k : h;
            if ("function" === typeof a)
                for (var f in b)
                    b.hasOwnProperty(f) && a(f, b[f]) && delete b[f];
            else
                delete b[a]
        })
    });
    csa.plugin(function(a) {
        a.types = {
            ovl: function(a) {
                var b = [];
                if (a)
                    for (var h in a)
                        a.hasOwnProperty(h) && b.push(a[h]);
                return b
            }
        }
    });
    csa.plugin(function(a) {
        function b(b) {
            return function(c) {
                a("Metrics", {
                    producerId: "csa",
                    dimensions: {
                        message: c
                    }
                })("recordMetric", b, 1)
            }
        }
        function c(b) {
            function c(c) {
                k = a.UUID();
                f = {
                    messageId: k,
                    schemaId: b.schemaId || "\x3cns\x3e.Error.6",
                    errorMessage: c.m || null,
                    attribution: c.attribution || null,
                    logLevel: "FATAL",
                    url: null,
                    file: null,
                    line: null,
                    column: null,
                    stack: c.s || [],
                    context: c.cinfo || {},
                    metadata: {}
                };
                c.logLevel && (f.logLevel = "" + c.logLevel);
                u.forEach(function(a) {
                    c[a] && (f.metadata[a] = c[a])
                });
                if ("INFO" === c.logLevel)
                    return f;
                Object.keys(q).forEach(function(a) {
                    if ("number" === typeof c[q[a]] || "string" === typeof c[q[a]])
                        f[a] = "" + c[q[a]]
                });
                return f
            }
            var k, f, m = a("Events", {
                producerId: b.producerId,
                lob: h.lob || "0"
            }), u = ["name", "type", "csm", "adb"], q = {
                url: "pageURL",
                file: "f",
                line: "l",
                column: "c"
            };
            this.log = function(a) {
                a: {
                    if (a)
                        for (f in a) {
                            var f = !1;
                            break a
                        }
                    f = !0
                }
                f || (f = b.logOptions || {
                    ent: {
                        page: ["pageType", "subPageType", "requestId"]
                    }
                },
                m("log", c(a), f))
            }
        }
        var h = a.config;
        h["KillSwitch.Errors"] || a.register("Errors", {
            instance: function(a) {
                return new c(a || {})
            },
            logError: b("jsError"),
            logWarn: b("jsWarn")
        })
    });
    csa.plugin(function(a) {
        function b(b, f, e) {
            v(f, function(g) {
                var d = "all" === e || (e || {})[g];
                g in b || (b[g] = {
                    version: 1,
                    id: f[g].id || a.UUID()
                });
                c(b[g], f[g], d)
            })
        }
        function c(b, c, e) {
            v(c, function(g) {
                var d = "string" !== typeof c[g] && "version" !== g ? a.error("Attribute is not of type string: " + g) : !0 === e || 1 === e ? !0 : "id" === g || -1 !== (e || []).indexOf(g);
                d && (b[g] = c[g])
            })
        }
        function h(a, b, e) {
            v(b, function(b) {
                b = a[b];
                if (b.schemaId) {
                    var d = {}
                      , g = {};
                    d.id = b.id;
                    d.producerId = b.producerId || e.producerId;
                    d.schemaId = b.schemaId;
                    d.version = b.version++;
                    d.attributes = g;
                    k(d, e);
                    c(g, b, 1);
                    r(g);
                    t("log", d)
                }
            })
        }
        function k(b, c) {
            var e = b.timestamp;
            "number" === typeof e && (e = (new Date(e)).toISOString());
            e = e || a.time("ISO");
            b.timestamp = e;
            b.messageId = b.messageId || a.UUID();
            b.application = q;
            b.obfuscatedMarketplaceId = f.ObfuscatedMarketplaceId || "UNKNOWN";
            b.schemaId = b.schemaId.replace("\x3cns\x3e", u);
            c && c.lob && (b.lob = c.lob)
        }
        function r(a) {
            delete a.version;
            delete a.schemaId;
            delete a.producerId
        }
        function l(c) {
            var g = {};
            this.log = function(e, f) {
                var d = {}
                  , h = (f || {}).ent;
                if (!e)
                    return a.error("The event cannot be undefined");
                if ("string" !== typeof e.schemaId)
                    return a.error("A valid schema id is required for the event");
                k(e, c);
                b(d, p, h);
                b(d, g, h);
                b(d, e.entities || {}, h);
                v(d, function(a) {
                    r(d[a])
                });
                e.producerId = c.producerId;
                e.entities = d;
                f && f.lob && (e.lob = f.lob);
                t("log", e, f)
            }
            ;
            this.setEntity = function(a) {
                w && delete a.session;
                b(g, a, "all");
                h(g, a, c)
            }
        }
        var f = a.config
          , m = (a.global.location || {}).host
          , u = f["Events.Namespace"] || "csa_other"
          , q = f.Application || "Other" + (m ? ":" + m : "")
          , w = f["Transport.AnonymizeRequests"] || !1
          , t = a("Transport")
          , p = {}
          , v = function(a, b) {
            Object.keys(a).forEach(b)
        };
        f["KillSwitch.Events"] || a.register("Events", {
            setEntity: function(c) {
                w && delete c.session;
                a.emit("$entities.set", c, {
                    buffered: 1
                });
                b(p, c, "all");
                h(p, c, {
                    producerId: "csa",
                    lob: f.lob || "0"
                })
            },
            removeEntity: function(a) {
                delete p[a]
            },
            instance: function(a) {
                return new l(a)
            }
        })
    });
    csa.plugin(function(a) {
        function b(a) {
            return "function" === typeof a
        }
        function c(a) {
            return a && "object" === typeof a
        }
        function h(a) {
            return "string" === typeof a || a instanceof String
        }
        function k(a, c, g, h) {
            var d = e && e[f[a] || "log"];
            m && m.TRACE && b(d) && d("[CSA:ServiceWorker] " + c, g, h);
            "le" === a ? x("logError", c + " " + g + " " + h) : "lw" === a && x("logWarn", c + " " + g + " " + h)
        }
        function r(a, c, e) {
            var d = a.clientId || (a.source || {}).id, f;
            k("i", "Got fetch-check message from clientId: ", d);
            d && n.clients && (f = n.clients.get(d).then(function(a) {
                a && b(a.postMessage) && (k("i", "Sending fetch-check success message back to clientId: ", d),
                a.postMessage({
                    client: d,
                    message: {
                        _messageType: e,
                        success: !0
                    }
                }))
            }));
            return f
        }
        function l(a) {
            var d = a.body && (h(a.body) ? a.body : JSON.stringify(a.body))
              , e = a.url
              , f = a.headers || v || {
                "Content-Type": a.type || p || "application/json; charset\x3dUTF-8"
            };
            k("i", "Got fetch message: ", e, d);
            if (d && e && b(n.fetch)) {
                if (u)
                    try {
                        var g = JSON.parse(d);
                        g.events && g.events.length && b(g.events.forEach) && g.events.forEach(function(a) {
                            c(a) && c(a.data) && (a = a.data,
                            "entities"in a && c(a.entities) ? a.entities.transport = {
                                type: "ServiceWorker"
                            } : "attributes"in a && c(a.attributes) && (a.attributes.transportType = "ServiceWorker"))
                        });
                        d = JSON.stringify(g)
                    } catch (B) {
                        k("e", "Failed to tag entities for fetch request payload: ", B)
                    }
                a = {
                    method: a.httpMethod || q || "POST",
                    body: d,
                    headers: f,
                    credentials: a.credentials || w || "include",
                    mode: a.mode || t || "cors"
                };
                var l = n.fetch(e, a).catch(function(a) {
                    k("e", "Failed to send fetch request: ", a)
                });
                k("i", "Sending fetch message: ", e, a)
            }
            return l
        }
        var f = {
            e: "error",
            le: "error",
            w: "warn",
            lw: "warn",
            i: "log"
        }
          , m = a.config || {}
          , u = m["ServiceWorker.Entities.Tag"]
          , q = m["ServiceWorker.HTTP.Method"]
          , w = m["ServiceWorker.HTTP.Credentials"]
          , t = m["ServiceWorker.HTTP.Mode"]
          , p = m["ServiceWorker.HTTP.Content-Type"]
          , v = m["ServiceWorker.HTTP.AllHeaders"]
          , g = a.global || {}
          , n = g.self
          , e = g.console;
        g = a.on;
        var x = a("Errors");
        n && (a.isSW = !0,
        g(n, "message", function(a) {
            if (a) {
                var c = a.data || {}
                  , d = c._messageType;
                if ("fetch" === d)
                    var e = l(c);
                else if ("fetch-check" === d)
                    e = r(a, c, d);
                else if ("config" === d) {
                    d = c.config;
                    c = c.replace;
                    if (d) {
                        if (c)
                            m = d;
                        else
                            for (var f in d)
                                d.hasOwnProperty(f) && (m[f] = d[f]);
                        k("i", "Config updated: ", m)
                    }
                    e = void 0
                } else
                    d && k("le", "Unknown event type:", d);
                e && b(a.waitUntil) && a.waitUntil(e)
            }
        }),
        g(n, "install", function(a) {
            a && b(a.waitUntil) && b(n.skipWaiting) && a.waitUntil(n.skipWaiting)
        }),
        g(n, "activate", function(a) {
            a && b(a.waitUntil) && n.clients && b(n.clients.claim) && a.waitUntil(n.clients.claim())
        }),
        a.register("ServiceWorker", {
            fetch: l
        }))
    });
    csa.plugin(function(a) {
        function b(a) {
            J = function(b, c, d) {
                if (b.post && (b = b.post(c))) {
                    b._messageType = "fetch";
                    if (g)
                        n("fetch", b);
                    else if (a)
                        a.postMessage(b);
                    else
                        return 0;
                    d();
                    return 1
                }
                return 0
            }
        }
        function c(a, c) {
            B(a, "message", function(a) {
                (a = ((a || {}).data || {}).message) && "fetch-check" === a._messageType && a.success && b(c)
            });
            c.postMessage({
                _messageType: "fetch-check"
            })
        }
        function h() {
            var a = A && A.serviceWorker;
            if (a) {
                var b = a.controller;
                b ? c(a, b) : (B(a, "controllerchange", function() {
                    var b = a.controller;
                    b && c(a, b)
                }),
                p && a.register(p))
            }
        }
        function k(b) {
            (a.store() || []).forEach(function(c) {
                if (0 === c.indexOf("csa.cajun."))
                    try {
                        var d = a.store(c);
                        a.deleteStored(c);
                        JSON.parse(d).forEach(b)
                    } catch (M) {
                        a.error(M)
                    }
            })
        }
        function r(b) {
            if (864E5 < a.time() - +new Date(b.timestamp))
                return a.warn("Event is too old: " + b);
            x < w && (b.messageId in e || (e[b.messageId] = b,
            x++),
            "function" === typeof b.__merge && b.__merge(e[b.messageId]),
            !H && q && (b = C,
            C = Math.min(b * K, L),
            H = y(l, b)))
        }
        function l() {
            d.forEach(function(a) {
                var b = [];
                F(e).forEach(function(c) {
                    c = e[c];
                    a.accepts(c) && b.push(c)
                });
                b.length && (a.chunks ? a.chunks(b).forEach(function(b) {
                    f(a, b)
                }) : f(a, b))
            });
            e = {};
            H = 0
        }
        function f(b, c) {
            var d = a.UUID()
              , e = function() {
                a.deleteStored("csa.cajun." + d)
            };
            a.store("csa.cajun." + d, JSON.stringify(c));
            [J, m, u].some(function(a) {
                try {
                    return a(b, c, e)
                } catch (N) {}
            })
        }
        function m(a, b, c) {
            var d = z.navigator || {}
              , e = z.cordova || {};
            if (!d.sendBeacon || !a.post)
                return 0;
            a.preflight && e && "ios" === e.platformId && !D && ((new Image).src = a.preflight().url,
            D = 1);
            a = a.post(b);
            if (!a.type && d.sendBeacon(a.url, a.body))
                return c(),
                1
        }
        function u(b, c, d) {
            function e(a, b, c) {
                k.open("POST", a);
                k.withCredentials = !0;
                c && k.setRequestHeader("Content-Type", c);
                k.send(b)
            }
            if (!b.post)
                return 0;
            b = b.post(c);
            var f = b.url
              , g = b.body
              , h = b.type
              , k = new XMLHttpRequest
              , l = 0;
            k.onload = function() {
                299 > k.status ? d() : a.config["Transport.XHRRetries"] && 3 > l && (l++,
                y(function() {
                    e(f, g, h)
                }, l * t))
            }
            ;
            e(f, g, h);
            return 1
        }
        var q = 0, w = a.config["Transport.BufferSize"] || 2E3, t = a.config["Transport.RetryDelay"] || 1500, p = a.config["Transport.ServiceWorker.JSCodePath"], v = a.config["Transport.ServiceWorker.Enabled"], g = a.isSW, n = a("ServiceWorker"), e = {}, x = 0, d = [], D, z = a.global, A = z.navigator, G = z.document, y = a.timeout, B = a.on, E = a.once, F = z.Object.keys, I = a.config["Transport.FlushInterval"] || 5E3, C = I, K = a.config["Transport.FlushInterval.BackoffFactor"] || 1, L = a.config["Transport.FlushInterval.BackoffLimit"] || 3E4, H = 0, J = a.blank;
        F && (g ? b() : v && h(),
        E("$afterload", function() {
            q = 1;
            k(r);
            B(G, "visibilitychange", l, !1);
            l()
        }),
        E("$afterunload", function() {
            q = 1;
            l()
        }),
        B("$afterPageTransition", function() {
            x = 0;
            C = I
        }),
        a.register("Transport", {
            log: r,
            register: function(a) {
                d.push(a)
            }
        }))
    });
    csa.plugin(function(a) {
        var b = a.config["Events.SushiEndpoint"];
        a("Transport")("register", {
            accepts: function(a) {
                return a.schemaId
            },
            post: function(a) {
                a = a.map(function(a) {
                    return {
                        data: a
                    }
                });
                return {
                    url: b,
                    body: JSON.stringify({
                        events: a
                    })
                }
            },
            preflight: function() {
                var a = /\/\/(.*?)\//.exec(b), h;
                a && a[1] && (h = "https://" + a[1] + "/ping");
                return {
                    url: h
                }
            },
            chunks: function(a) {
                for (var b = []; 500 < a.length; )
                    b.push(a.splice(0, 500));
                b.push(a);
                return b
            }
        })
    });
    csa.plugin(function(a) {
        function b(b) {
            function k() {
                q = a.UUID();
                w = a.UUID();
                t = {}
            }
            var l = b.producerId, f = b.logger, m = f || a("Events", {
                producerId: l,
                lob: c.lob || "0"
            }), u = (b || {}).dimensions || {}, q, w, t = {}, p = -1;
            if (!l && !f)
                return a.error("Either a producer id or custom logger must be defined");
            this.recordMetric = function(a, c) {
                var f = b.logOptions || {
                    ent: {
                        page: ["pageType", "subPageType", "requestId"]
                    }
                };
                f.debugMetric = b.debugMetric;
                p !== h && (k(),
                p = h);
                m("log", {
                    messageId: q,
                    schemaId: b.schemaId || "\x3cns\x3e.Metric.4",
                    metrics: {},
                    dimensions: u,
                    __merge: function(b) {
                        b.metrics[a] = c
                    }
                }, f)
            }
            ;
            this.recordCounter = function(c, f) {
                var g = b.logOptions || {
                    ent: {
                        page: ["pageType", "subPageType", "requestId"]
                    }
                };
                if ("string" != typeof c || "number" != typeof f || !isFinite(f))
                    return a.error("Invalid type given for counter name or counter value: " + c + "/" + f);
                p !== h && (k(),
                p = h);
                c in t || (t[c] = {});
                var e = t[c];
                "f"in e || (e.f = f);
                e.c = (e.c || 0) + 1;
                e.s = (e.s || 0) + f;
                e.l = f;
                m("log", {
                    messageId: w,
                    schemaId: b.schemaId || "\x3cns\x3e.InternalCounters.3",
                    c: {},
                    __merge: function(a) {
                        c in a.c || (a.c[c] = {});
                        e.fs || (e.fs = 1,
                        a.c[c].f = e.f);
                        1 < e.c && (a.c[c].s = e.s,
                        a.c[c].l = e.l,
                        a.c[c].c = e.c)
                    }
                }, g)
            }
        }
        var c = a.config
          , h = 0;
        c["KillSwitch.Metrics"] || ((new b({
            producerId: "csa"
        })).recordMetric("baselineMetricEvent", 1),
        a.on("$beforePageTransition", function() {
            h++
        }),
        a.register("Metrics", {
            instance: function(a) {
                return new b(a || {})
            }
        }))
    });
    csa.plugin(function(a) {
        function b() {
            l = a.UUID()
        }
        function c(b) {
            b = b || {};
            var c = b.producerId
              , f = b.logger
              , k = f || a("Events", {
                producerId: c,
                lob: h.lob || "0"
            });
            if (!c && !f)
                return a.error("Either a producer id or custom logger must be defined");
            this.mark = function(c, f) {
                var h = ("undefined" === typeof f ? a.time() : f) - r;
                k("log", {
                    messageId: l,
                    schemaId: b.schemaId || "\x3cns\x3e.Timer.1",
                    markers: {},
                    __merge: function(a) {
                        a.markers[c] = h
                    }
                }, b.logOptions)
            }
        }
        var h = a.config, k = (a.global.performance || {}).timing, r = (k || {}).navigationStart || a.time(), l;
        k && (b(),
        a.on("$beforePageTransition", b),
        a.register("Timers", {
            instance: function(a) {
                return new c(a || {})
            }
        }))
    });
    csa.plugin(function(a) {
        a.emit("$afterload")
    })
}
)();
var AUI_JS_DEBUG = !1;
(function(I) {
    var J = this && this.__spreadArray || function(d, b, a) {
        if (a || 2 === arguments.length)
            for (var c = 0, e = b.length, h; c < e; c++)
                !h && c in b || (h || (h = Array.prototype.slice.call(b, 0, c)),
                h[c] = b[c]);
        return d.concat(h || Array.prototype.slice.call(b))
    }
    , K = function(d, b, a) {
        for (var c = [], e = 3; e < arguments.length; e++)
            c[e - 3] = arguments[e];
        A.isDebugVerbose && console.debug.apply(console, J(["%cServiceWorkerMetric%c%c".concat(d, "%c%c").concat(b, "%c ").concat(a), "background-color: #3333ff; color: #FFFFFF; padding: 5px", "color: auto", "background-color: #77ACA2; color: #FFFFFF; padding: 5px", "color: auto", "background-color: #F5F3BB; padding: 5px", "color: auto"], c, !1))
    }, L = Date.now(), l = function(d) {
        setTimeout(d, 0)
    }, x = function(d, b, a, c) {
        d.push(b);
        b = "function" === typeof c;
        for (a = Math.max(a, 0); d.length > a; ) {
            var e = d.shift();
            b && c(e)
        }
    }, v;
    (function(d) {
        d.format = function(b) {
            return "".concat("Telemetry", ":SW:").concat(b).toLowerCase()
        }
    }
    )(v || (v = {}));
    var m;
    (function(d) {
        d.isObject = function(b) {
            return !!b && "object" === typeof b && !Array.isArray(b)
        }
        ;
        d.isNonEmptyString = function(b) {
            return "string" === typeof b && 0 < b.length
        }
        ;
        d.matchesPattern = function(b, a) {
            return "string" === typeof b && a.test(b)
        }
        ;
        d.isAsciiString = function(b) {
            return "string" === typeof b && /^[\x00-\x7F]*$/.test(b)
        }
    }
    )(m || (m = {}));
    var M = this && this.__spreadArray || function(d, b, a) {
        if (a || 2 === arguments.length)
            for (var c = 0, e = b.length, h; c < e; c++)
                !h && c in b || (h || (h = Array.prototype.slice.call(b, 0, c)),
                h[c] = b[c]);
        return d.concat(h || Array.prototype.slice.call(b))
    }
    , n = function() {
        function d() {}
        d.prototype.print = function(b, a) {
            for (var c = [], e = 2; e < arguments.length; e++)
                c[e - 2] = arguments[e];
            K.apply(void 0, M([this.constructor.name, b, a], c, !1))
        }
        ;
        d.prototype.printCtor = function(b) {
            this.print("constructor", "\x3c\x3c\x3c %o", b)
        }
        ;
        return d
    }(), A;
    (function(d) {
        d.isDebug = AUI_JS_DEBUG;
        d.isDebugVerbose = d.isDebug && !1
    }
    )(A || (A = {}));
    var N = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }(), D = function(d) {
        function b(a, b, e, h) {
            b = d.call(this, b || a) || this;
            b.name = "Telemetry".concat(a, "Error");
            b.attribution = e || "AmazonServiceWorkerTelemetryClientLib";
            b.logLevel = h;
            return b
        }
        N(b, d);
        return b
    }(Error), r;
    (function(d) {
        d.create = function(b, a, c, e) {
            return new D(b.toString(),a,c,e)
        }
    }
    )(r || (r = {}));
    var z;
    (function(d) {
        d.USER_DENIED_PERMISSION = /The user denied permission to use Service Worker/i;
        d.SERVICE_WORKER_FETCH_API_FAILED = /^Failed to fetch$/i;
        d.NETWORK_ERROR = /network error/i
    }
    )(z || (z = {}));
    var B;
    (function(d) {
        d.isNonCustomerImpactingError = function(b) {
            var a;
            if (a = b instanceof Error || b instanceof ErrorEvent)
                b = b.message,
                a = m.matchesPattern(b, z.USER_DENIED_PERMISSION) || m.matchesPattern(b, z.SERVICE_WORKER_FETCH_API_FAILED) || m.matchesPattern(b, z.NETWORK_ERROR);
            return a
        }
    }
    )(B || (B = {}));
    var O = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }(), E = function(d) {
        function b(a, b, e) {
            var c = d.call(this) || this;
            c._swGlobal = a;
            c._messageCommand = b;
            c._clientMessageHandler = e;
            c._addClientMessageListener();
            return c
        }
        O(b, d);
        b.prototype._addClientMessageListener = function() {
            var a = this;
            this._swGlobal.addEventListener("message", function(b) {
                a._onMessageReceived(b)
            })
        }
        ;
        b.prototype._onMessageReceived = function(a) {
            if (a.origin === this._swGlobal.location.origin) {
                var b = a.source;
                b instanceof WindowClient && (a = a.data,
                m.isObject(a) && "retail_service_worker_messaging" === a.feature && a.command === this._messageCommand && this._clientMessageHandler(a, b))
            }
        }
        ;
        return b
    }(n), P = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }(), Q = function(d) {
        function b(a) {
            var b = d.call(this) || this;
            b._clientDataList = [];
            new E(a,"page_loaded",b._onClientLoaded.bind(b));
            return b
        }
        P(b, d);
        b.prototype.getRequestIDForClient = function(a) {
            return (a = this.getClientDataForClient(a)) ? a.requestID : void 0
        }
        ;
        b.prototype.getSessionIDForClient = function(a) {
            return (a = this.getClientDataForClient(a)) ? a.sessionID : void 0
        }
        ;
        b.prototype.getForesterURLForClient = function(a) {
            return (a = this.getClientDataForClient(a)) ? a.foresterURL : void 0
        }
        ;
        b.prototype.getClientDataForClient = function(a) {
            for (var b, e = 0; e < this._clientDataList.length; e++) {
                var h = this._clientDataList[e];
                if (h.clientID === a) {
                    b = h;
                    break
                }
            }
            return b
        }
        ;
        b.prototype._onClientLoaded = function(a, b) {
            if (!a.data || !m.isNonEmptyString(a.data.rid))
                throw r.create("InvalidPostbackDataOnPageLoad", "Incorrect postback data received on page load", void 0, "ERROR");
            this.print("processMessage", "Page loaded message received from client ".concat(b.id), a);
            this._saveClientData(a.data, b.id)
        }
        ;
        b.prototype._saveClientData = function(a, c) {
            x(this._clientDataList, {
                clientID: c,
                requestID: a.rid,
                sessionID: a.sid,
                marketplaceID: a.mid,
                foresterURL: a.furl,
                pageType: a.pty,
                subPageType: a.spty
            }, b._MAX_CLIENTS)
        }
        ;
        b._MAX_CLIENTS = 50;
        return b
    }(n), R = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }(), t = this && this.__awaiter || function(d, b, a, c) {
        function e(b) {
            return b instanceof a ? b : new a(function(a) {
                a(b)
            }
            )
        }
        return new (a || (a = Promise))(function(a, g) {
            function h(a) {
                try {
                    p(c.next(a))
                } catch (q) {
                    g(q)
                }
            }
            function k(a) {
                try {
                    p(c["throw"](a))
                } catch (q) {
                    g(q)
                }
            }
            function p(b) {
                b.done ? a(b.value) : e(b.value).then(h, k)
            }
            p((c = c.apply(d, b || [])).next())
        }
        )
    }
    , u = this && this.__generator || function(d, b) {
        function a(a) {
            return function(b) {
                return c([a, b])
            }
        }
        function c(a) {
            if (h)
                throw new TypeError("Generator is already executing.");
            for (; e; )
                try {
                    if (h = 1,
                    g && (f = a[0] & 2 ? g["return"] : a[0] ? g["throw"] || ((f = g["return"]) && f.call(g),
                    0) : g.next) && !(f = f.call(g, a[1])).done)
                        return f;
                    if (g = 0,
                    f)
                        a = [a[0] & 2, f.value];
                    switch (a[0]) {
                    case 0:
                    case 1:
                        f = a;
                        break;
                    case 4:
                        return e.label++,
                        {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        e.label++;
                        g = a[1];
                        a = [0];
                        continue;
                    case 7:
                        a = e.ops.pop();
                        e.trys.pop();
                        continue;
                    default:
                        if (!(f = e.trys,
                        f = 0 < f.length && f[f.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            e = 0;
                            continue
                        }
                        if (3 === a[0] && (!f || a[1] > f[0] && a[1] < f[3]))
                            e.label = a[1];
                        else if (6 === a[0] && e.label < f[1])
                            e.label = f[1],
                            f = a;
                        else if (f && e.label < f[2])
                            e.label = f[2],
                            e.ops.push(a);
                        else {
                            f[2] && e.ops.pop();
                            e.trys.pop();
                            continue
                        }
                    }
                    a = b.call(d, e)
                } catch (w) {
                    a = [6, w],
                    g = 0
                } finally {
                    h = f = 0
                }
            if (a[0] & 5)
                throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var e = {
            label: 0,
            sent: function() {
                if (f[0] & 1)
                    throw f[1];
                return f[1]
            },
            trys: [],
            ops: []
        }, h, g, f, k;
        return k = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        },
        "function" === typeof Symbol && (k[Symbol.iterator] = function() {
            return this
        }
        ),
        k
    }
    , S = function(d) {
        function b(a) {
            var c = d.call(this) || this;
            c._swGlobal = a;
            c._clientReadyList = [];
            c._bufferedCounters = [];
            c._bufferedTags = [];
            c._bufferedWeblabTriggers = [];
            c._bufferedInternalCounters = [];
            new E(a,b._POSTBACK_MESSAGE_COMMAND,c._onClientReady.bind(c));
            return c
        }
        R(b, d);
        b.prototype.count = function(a, c, e) {
            var h = this;
            void 0 === c && (c = 1);
            l(function() {
                return t(h, void 0, void 0, function() {
                    var h, d;
                    return u(this, function(f) {
                        switch (f.label) {
                        case 0:
                            return e ? [3, 2] : [4, this._logCounterWithoutClient(a, c)];
                        case 1:
                            return f.sent(),
                            [2];
                        case 2:
                            if (!this._isClientReady(e))
                                return this._bufferCounter({
                                    clientID: e,
                                    name: a,
                                    value: c
                                }),
                                [2];
                            f.label = 3;
                        case 3:
                            return f.trys.push([3, 5, , 6]),
                            [4, this._getClient(e)];
                        case 4:
                            return h = f.sent(),
                            this._postMessage(h, {
                                feature: b._POSTBACK_MESSAGE_FEATURE,
                                command: b._MESSAGING_COMMAND_COUNTER,
                                data: {
                                    name: a,
                                    value: c
                                }
                            }),
                            [3, 6];
                        case 5:
                            return d = f.sent(),
                            this.countInternal(v.format(b._CLIENT_UNAVAILABLE_COUNTER)),
                            this.print("counter", d.message),
                            [3, 6];
                        case 6:
                            return [2]
                        }
                    })
                })
            })
        }
        ;
        b.prototype.countInternal = function(a, c) {
            var e = this;
            void 0 === c && (c = 1);
            l(function() {
                return t(e, void 0, void 0, function() {
                    var e;
                    return u(this, function(h) {
                        switch (h.label) {
                        case 0:
                            return [4, this._getLastAvailableClient()];
                        case 1:
                            if (e = h.sent())
                                return this._postMessage(e, {
                                    feature: b._POSTBACK_MESSAGE_FEATURE,
                                    command: b._MESSAGING_COMMAND_COUNTER,
                                    data: {
                                        name: a,
                                        value: c
                                    }
                                }),
                                [2];
                            x(this._bufferedInternalCounters, {
                                name: a,
                                value: c
                            }, b._MAX_INTERNAL_COUNTERS);
                            return [2]
                        }
                    })
                })
            })
        }
        ;
        b.prototype.tag = function(a, c) {
            var e = this;
            l(function() {
                return t(e, void 0, void 0, function() {
                    var e, d;
                    return u(this, function(h) {
                        switch (h.label) {
                        case 0:
                            if (!this._isClientReady(c))
                                return this._bufferTag({
                                    clientID: c,
                                    name: a
                                }),
                                [2];
                            h.label = 1;
                        case 1:
                            return h.trys.push([1, 3, , 4]),
                            [4, this._getClient(c)];
                        case 2:
                            return e = h.sent(),
                            this._postMessage(e, {
                                feature: b._POSTBACK_MESSAGE_FEATURE,
                                command: b._MESSAGING_COMMAND_TAG,
                                data: {
                                    tag: a
                                }
                            }),
                            [3, 4];
                        case 3:
                            return d = h.sent(),
                            this.countInternal(v.format(b._CLIENT_UNAVAILABLE_COUNTER), 1),
                            this.print("tag", d.message),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    })
                })
            })
        }
        ;
        b.prototype.weblabTrigger = function(a, c, e) {
            var h = this;
            l(function() {
                return t(h, void 0, void 0, function() {
                    var h, d;
                    return u(this, function(f) {
                        switch (f.label) {
                        case 0:
                            if (!this._isClientReady(e))
                                return this._bufferWeblabTrigger({
                                    clientID: e,
                                    name: a,
                                    treatment: c
                                }),
                                [2];
                            f.label = 1;
                        case 1:
                            return f.trys.push([1, 3, , 4]),
                            [4, this._getClient(e)];
                        case 2:
                            return h = f.sent(),
                            this._postMessage(h, {
                                feature: b._POSTBACK_MESSAGE_FEATURE,
                                command: b._MESSAGING_COMMAND_WEBLAB_TRIGGER,
                                data: {
                                    weblab: a,
                                    treatment: c
                                }
                            }),
                            [3, 4];
                        case 3:
                            return d = f.sent(),
                            this.countInternal(v.format(b._CLIENT_UNAVAILABLE_COUNTER)),
                            this.print("weblabtrigger", d.message),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    })
                })
            })
        }
        ;
        b.prototype._isClientReady = function(a) {
            return -1 !== this._clientReadyList.indexOf(a)
        }
        ;
        b.prototype._onClientReady = function(a, c) {
            this.print("processMessage", "message ready event received from ".concat(c.id));
            x(this._clientReadyList, c.id, b._MAX_CLIENTS);
            this._flushMetricForClient(c)
        }
        ;
        b.prototype._flushMetricForClient = function(a) {
            var b = this;
            l(function() {
                b._drainBufferedCounter(a)
            });
            l(function() {
                b._drainBufferedTags(a)
            });
            l(function() {
                b._drainBufferedWeblabTriggers(a)
            });
            l(function() {
                b._drainBufferedInternalCounter(a)
            })
        }
        ;
        b.prototype._drainBufferedCounter = function(a) {
            for (var c = this, e = [], h = a.id, d = function(d) {
                var g = f._bufferedCounters[d];
                if (g.clientID && h !== g.clientID)
                    return e.push(g),
                    "continue";
                l(function() {
                    return t(c, void 0, void 0, function() {
                        return u(this, function(c) {
                            this._postMessage(a, {
                                feature: b._POSTBACK_MESSAGE_FEATURE,
                                command: b._MESSAGING_COMMAND_COUNTER,
                                data: {
                                    name: g.name,
                                    value: g.value
                                }
                            });
                            return [2]
                        })
                    })
                })
            }, f = this, k = 0; k < this._bufferedCounters.length; k++)
                d(k);
            this._bufferedCounters = e
        }
        ;
        b.prototype._drainBufferedTags = function(a) {
            for (var c = this, e = [], h = a.id, d = function(d) {
                var g = f._bufferedTags[d];
                if (h !== g.clientID)
                    return e.push(g),
                    "continue";
                l(function() {
                    return t(c, void 0, void 0, function() {
                        return u(this, function(c) {
                            this._postMessage(a, {
                                feature: b._POSTBACK_MESSAGE_FEATURE,
                                command: b._MESSAGING_COMMAND_TAG,
                                data: {
                                    tag: g.name
                                }
                            });
                            return [2]
                        })
                    })
                })
            }, f = this, k = 0; k < this._bufferedTags.length; k++)
                d(k);
            this._bufferedTags = e
        }
        ;
        b.prototype._drainBufferedWeblabTriggers = function(a) {
            for (var c = this, e = [], h = a.id, d = function(d) {
                var g = f._bufferedWeblabTriggers[d];
                if (h !== g.clientID)
                    return e.push(g),
                    "continue";
                l(function() {
                    return t(c, void 0, void 0, function() {
                        return u(this, function(c) {
                            this._postMessage(a, {
                                feature: b._POSTBACK_MESSAGE_FEATURE,
                                command: b._MESSAGING_COMMAND_WEBLAB_TRIGGER,
                                data: {
                                    weblab: g.name,
                                    treatment: g.treatment
                                }
                            });
                            return [2]
                        })
                    })
                })
            }, f = this, k = 0; k < this._bufferedWeblabTriggers.length; k++)
                d(k);
            this._bufferedWeblabTriggers = e
        }
        ;
        b.prototype._drainBufferedInternalCounter = function(a) {
            for (var c = this, e = function(e) {
                var d = h._bufferedInternalCounters[e];
                l(function() {
                    return t(c, void 0, void 0, function() {
                        return u(this, function(c) {
                            this._postMessage(a, {
                                feature: b._POSTBACK_MESSAGE_FEATURE,
                                command: b._MESSAGING_COMMAND_COUNTER,
                                data: {
                                    name: d.name,
                                    value: d.value
                                }
                            });
                            return [2]
                        })
                    })
                })
            }, h = this, d = 0; d < this._bufferedInternalCounters.length; d++)
                e(d);
            this._bufferedInternalCounters = []
        }
        ;
        b.prototype._bufferCounter = function(a) {
            var c = this;
            x(this._bufferedCounters, a, b._MAX_COUNTERS, function() {
                c.countInternal(v.format("counter:buffer:overflow"))
            })
        }
        ;
        b.prototype._bufferTag = function(a) {
            var c = this;
            x(this._bufferedTags, a, b._MAX_TAGS, function() {
                c.countInternal(v.format("tag:buffer:overflow"))
            })
        }
        ;
        b.prototype._bufferWeblabTrigger = function(a) {
            var c = this;
            x(this._bufferedWeblabTriggers, a, b._MAX_WEBLAB_TRIGGERS, function() {
                c.countInternal(v.format("weblabTrigger:buffer:overflow"))
            })
        }
        ;
        b.prototype._postMessage = function(a, b) {
            a.postMessage(b)
        }
        ;
        b.prototype._logCounterWithoutClient = function(a, c) {
            return t(this, void 0, void 0, function() {
                var e;
                return u(this, function(d) {
                    switch (d.label) {
                    case 0:
                        return [4, this._getLastAvailableClient()];
                    case 1:
                        if (e = d.sent())
                            return this._postMessage(e, {
                                feature: b._POSTBACK_MESSAGE_FEATURE,
                                command: b._MESSAGING_COMMAND_COUNTER,
                                data: {
                                    name: a,
                                    value: c
                                }
                            }),
                            [2];
                        this._bufferCounter({
                            clientID: void 0,
                            name: a,
                            value: c
                        });
                        return [2]
                    }
                })
            })
        }
        ;
        b.prototype._getLastAvailableClient = function() {
            return t(this, void 0, void 0, function() {
                var a, b, e, d;
                return u(this, function(c) {
                    switch (c.label) {
                    case 0:
                        b = a = this._clientReadyList.length - 1,
                        c.label = 1;
                    case 1:
                        if (!(0 <= b))
                            return [3, 6];
                        c.label = 2;
                    case 2:
                        return c.trys.push([2, 4, , 5]),
                        [4, this._getClient(this._clientReadyList[b])];
                    case 3:
                        return (e = c.sent()) ? [2, e] : [3, 5];
                    case 4:
                        return d = c.sent(),
                        this.print("Looking for last available client", d.message),
                        [3, 5];
                    case 5:
                        return b--,
                        [3, 1];
                    case 6:
                        return [2]
                    }
                })
            })
        }
        ;
        b.prototype._getClient = function(a) {
            return t(this, void 0, void 0, function() {
                var b;
                return u(this, function(c) {
                    switch (c.label) {
                    case 0:
                        return [4, this._swGlobal.clients.get(a)];
                    case 1:
                        if (b = c.sent())
                            return [2, b];
                        throw r.create("ClientNotFound", "Client ".concat(a, " not found"));
                    }
                })
            })
        }
        ;
        b._MAX_CLIENTS = 50;
        b._MAX_COUNTERS = 400;
        b._MAX_TAGS = 100;
        b._MAX_WEBLAB_TRIGGERS = 100;
        b._MAX_INTERNAL_COUNTERS = 50;
        b._POSTBACK_MESSAGE_FEATURE = "retail_service_worker_messaging";
        b._POSTBACK_MESSAGE_COMMAND = "client_messaging_ready";
        b._MESSAGING_COMMAND_COUNTER = "log_counter";
        b._MESSAGING_COMMAND_TAG = "log_tag";
        b._MESSAGING_COMMAND_WEBLAB_TRIGGER = "log_weblab_trigger";
        b._CLIENT_UNAVAILABLE_COUNTER = "client:unavailable";
        return b
    }(n), T = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }(), U = function(d) {
        function b(a) {
            var b = d.call(this) || this;
            b._clientPostback = new S(a);
            b._clientDataProvider = new Q(a);
            return b
        }
        T(b, d);
        b.prototype.getClientPostback = function() {
            return this._clientPostback
        }
        ;
        b.prototype.getClientDataProvider = function() {
            return this._clientDataProvider
        }
        ;
        return b
    }(n), V = function() {
        function d() {
            this._timingFilterSignatures = [":arrived:", ":flushed:", ":pageshellstaleness", "respond:before", "respond:after"]
        }
        d.prototype.getFilterSignatures = function() {
            return this._timingFilterSignatures
        }
        ;
        return d
    }(), W = function() {
        function d() {
            this._filterSignatures = []
        }
        d.prototype.addFilter = function(b) {
            var a;
            (a = this._filterSignatures).push.apply(a, b.getFilterSignatures())
        }
        ;
        d.prototype.filter = function(b) {
            return this._filterSignatures.some(function(a) {
                return -1 !== b.indexOf(a)
            })
        }
        ;
        return d
    }(), y;
    (function(d) {
        d.Mshop = "mshop";
        d.Mweb = "mweb";
        d.Desktop = "desktop"
    }
    )(y || (y = {}));
    var C;
    (C || (C = {})).INLatency = "in-latency";
    var X = function() {
        function d(b, a, c) {
            this._swGlobal = b;
            this._clientConfig = a;
            this._metricFilter = c;
            this._deviceType = this._resolveDeviceType();
            this._configureMetricFilter()
        }
        d.prototype.count = function(b, a) {
            this._metricFilter.filter(b) || (b = {
                schemaId: this._clientConfig.counterConfig.schemaId,
                deviceType: this._deviceType,
                counterName: b,
                counterValue: a.toString()
            },
            csa("Events", {
                producerId: this._clientConfig.counterConfig.producerId
            })("log", b))
        }
        ;
        d.prototype._resolveDeviceType = function() {
            if (!this._swGlobal.$RuntimeConfig)
                return y.Desktop;
            var b = this._swGlobal.$RuntimeConfig.getDeviceProperties();
            return "mshop" === b.getAppType() ? y.Mshop : "desktop" !== b.getDeviceType() ? y.Mweb : y.Desktop
        }
        ;
        d.prototype._configureMetricFilter = function() {
            this._metricFilter.addFilter(new V)
        }
        ;
        return d
    }()
      , Y = {
        counterConfig: {
            producerId: C.INLatency,
            schemaId: "ServiceWorkerTelemetry.Counter.3"
        }
    }
      , Z = function() {
        csa.plugin(function(d) {
            var b = d.config;
            d = ["Application", "Events.SushiEndpoint", "ObfuscatedMarketplaceId"];
            if (!b || "object" !== typeof b || !d.every(function(a) {
                return !!b[a]
            }))
                throw r.create("InvalidCSAConfiguration");
        })
    }
      , aa = /\(?([^\s]*):(\d+):(\d+)\)?/
      , ba = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , ca = function(d) {
        function b(a) {
            var b = d.call(this) || this;
            b.printCtor(arguments);
            b._defaultAttribution = a;
            return b
        }
        ba(b, d);
        b.prototype.generateErrorRecord = function(a, b, e, d) {
            var c = this._getError(a)
              , h = this._generateStackFrames(c);
            b = {
                m: this._getErrorMessage(c),
                name: c.name,
                logLevel: this._getErrorLogLevel(c, b),
                attribution: this._getErrorAttribution(c, e),
                s: h,
                t: Date.now() - L
            };
            if (a = a instanceof ErrorEvent ? this._getErrorLocationFromErrorEvent(a) : this._getErrorLocationFromStackFrames(h))
                b.f = a.fileName,
                b.l = a.lineNumber,
                b.c = a.colNumber;
            d && (b.cinfo = d);
            return b
        }
        ;
        b.prototype._getError = function(a) {
            return a instanceof ErrorEvent ? a.error : a
        }
        ;
        b.prototype._generateStackFrames = function(a) {
            var c = [];
            a = a.stack ? a.stack.trim() : "";
            if (!a)
                return c;
            a = a.split("\n");
            for (var e, d = 0; d < a.length && c.length < b.MAX_STACK_DEPTH; )
                (e = a[d++].trim()) && c.push(e);
            return c
        }
        ;
        b.prototype._getErrorMessage = function(a) {
            return (a = a.message.trim()) ? a : "Unknown Error"
        }
        ;
        b.prototype._getErrorLogLevel = function(a, b) {
            return b || a.logLevel || "FATAL"
        }
        ;
        b.prototype._getErrorAttribution = function(a, b) {
            return b || a.attribution || this._defaultAttribution
        }
        ;
        b.prototype._getErrorLocationFromErrorEvent = function(a) {
            return {
                fileName: a.filename,
                lineNumber: String(a.lineno),
                colNumber: String(a.colno)
            }
        }
        ;
        b.prototype._getErrorLocationFromStackFrames = function(a) {
            if ((a = (1 < a.length ? a[1] : "").match(aa)) && 4 === a.length)
                return {
                    fileName: a[1],
                    lineNumber: a[2],
                    colNumber: a[3]
                }
        }
        ;
        b.MAX_STACK_DEPTH = 20;
        return b
    }(n)
      , da = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , ea = function(d) {
        function b(a, b, e, h) {
            var c = d.call(this) || this;
            c._errorCount = 0;
            c.printCtor(arguments);
            c._swGlobal = a;
            c._foresterClient = e;
            c._foresterErrorRecordGenerator = new ca(b);
            c._clientDataProvider = h.getClientDataProvider();
            c._addGlobalErrorListener();
            c._startErrorCountResetTimer();
            return c
        }
        da(b, d);
        b.prototype.record = function(a, b, e, d, g) {
            this._isNotError(a) || this._hasErrorCountThresholdBreached() ? this.print("record", "ERROR NOT LOGGED. Received error is not valid or error threshold is breached.") : (this._errorCount++,
            !b && B.isNonCustomerImpactingError(a) && (b = "ERROR"),
            this._recordErrorForClient(a, b, e, d, g),
            this._logThresholdReached())
        }
        ;
        b.prototype._addGlobalErrorListener = function() {
            var a = this;
            this._swGlobal.addEventListener("error", function(b) {
                l(function() {
                    a.print("globalErrorListener", "error event captured", b);
                    a.record(b)
                })
            });
            this._swGlobal.addEventListener("unhandledrejection", function(b) {
                l(function() {
                    b.reason instanceof Error && (a.print("globalErrorListener", "promise rejection error captured", b),
                    a.record(b.reason))
                })
            })
        }
        ;
        b.prototype._startErrorCountResetTimer = function() {
            var a = this;
            setInterval(function() {
                a._errorCount = 0
            }, 1E3 * b.RESET_ERROR_COUNT_SECONDS)
        }
        ;
        b.prototype._recordErrorForClient = function(a, b, e, d, g) {
            if (g && (g.clientID || g.requestID)) {
                var c;
                g.clientID && (c = this._clientDataProvider.getClientDataForClient(g.clientID));
                g.requestID && (c ? c.requestID = g.requestID : c = {
                    clientID: g.clientID || "",
                    requestID: g.requestID
                });
                this._recordError(a, b, e, d, c)
            } else
                this._recordError(a, b, e, d)
        }
        ;
        b.prototype._recordError = function(a, b, e, d, g) {
            a = this._foresterErrorRecordGenerator.generateErrorRecord(a, b, e, d);
            this.print("recordError", "Generated error record", a);
            this._foresterClient.log(a, g);
            this._logToConsole(a)
        }
        ;
        b.prototype._logThresholdReached = function() {
            this._errorCount === b.MAX_ERROR_COUNT && this._recordError(r.create("ErrorRecordThresholdReached"))
        }
        ;
        b.prototype._isNotError = function(a) {
            return !(a instanceof Error || a instanceof ErrorEvent)
        }
        ;
        b.prototype._hasErrorCountThresholdBreached = function() {
            return this._errorCount >= b.MAX_ERROR_COUNT
        }
        ;
        b.prototype._logToConsole = function(a) {
            console.error("SW Telemetry trapped error %o", a)
        }
        ;
        b.MAX_ERROR_COUNT = 50;
        b.RESET_ERROR_COUNT_SECONDS = 60;
        return b
    }(n)
      , fa = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , ha = this && this.__awaiter || function(d, b, a, c) {
        function e(b) {
            return b instanceof a ? b : new a(function(a) {
                a(b)
            }
            )
        }
        return new (a || (a = Promise))(function(a, g) {
            function h(a) {
                try {
                    p(c.next(a))
                } catch (q) {
                    g(q)
                }
            }
            function k(a) {
                try {
                    p(c["throw"](a))
                } catch (q) {
                    g(q)
                }
            }
            function p(b) {
                b.done ? a(b.value) : e(b.value).then(h, k)
            }
            p((c = c.apply(d, b || [])).next())
        }
        )
    }
      , ia = this && this.__generator || function(d, b) {
        function a(a) {
            return function(b) {
                return c([a, b])
            }
        }
        function c(a) {
            if (h)
                throw new TypeError("Generator is already executing.");
            for (; e; )
                try {
                    if (h = 1,
                    g && (f = a[0] & 2 ? g["return"] : a[0] ? g["throw"] || ((f = g["return"]) && f.call(g),
                    0) : g.next) && !(f = f.call(g, a[1])).done)
                        return f;
                    if (g = 0,
                    f)
                        a = [a[0] & 2, f.value];
                    switch (a[0]) {
                    case 0:
                    case 1:
                        f = a;
                        break;
                    case 4:
                        return e.label++,
                        {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        e.label++;
                        g = a[1];
                        a = [0];
                        continue;
                    case 7:
                        a = e.ops.pop();
                        e.trys.pop();
                        continue;
                    default:
                        if (!(f = e.trys,
                        f = 0 < f.length && f[f.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            e = 0;
                            continue
                        }
                        if (3 === a[0] && (!f || a[1] > f[0] && a[1] < f[3]))
                            e.label = a[1];
                        else if (6 === a[0] && e.label < f[1])
                            e.label = f[1],
                            f = a;
                        else if (f && e.label < f[2])
                            e.label = f[2],
                            e.ops.push(a);
                        else {
                            f[2] && e.ops.pop();
                            e.trys.pop();
                            continue
                        }
                    }
                    a = b.call(d, e)
                } catch (w) {
                    a = [6, w],
                    g = 0
                } finally {
                    h = f = 0
                }
            if (a[0] & 5)
                throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var e = {
            label: 0,
            sent: function() {
                if (f[0] & 1)
                    throw f[1];
                return f[1]
            },
            trys: [],
            ops: []
        }, h, g, f, k;
        return k = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        },
        "function" === typeof Symbol && (k[Symbol.iterator] = function() {
            return this
        }
        ),
        k
    }
      , ja = function(d) {
        function b(a, b, e) {
            var c = d.call(this) || this;
            c._logQueue = [];
            c._retryCount = 0;
            c.printCtor(arguments);
            c._config = a;
            c._requestContextProvider = b;
            c._foresterRequest = e;
            return c
        }
        fa(b, d);
        b.prototype.log = function(a, b) {
            var c = this._requestContextProvider.getRequestID(b)
              , d = this._requestContextProvider.getSessionID(b);
            a = {
                r: c,
                s: d,
                m: this._config.marketplaceID,
                sn: this._config.siteName,
                c: this._config.channel,
                data: a
            };
            this.print("log", "Forester log created", a);
            this._send([a], b)
        }
        ;
        b.prototype._send = function(a, b) {
            var c = this
              , d = this._groupLogs(a);
            Object.keys(d).forEach(function(a) {
                c.print("send", "Sending data for group ".concat(a));
                void c._sendGroupedLog(d[a], b)
            })
        }
        ;
        b.prototype._groupLogs = function(a) {
            var b = {};
            a.forEach(function(a) {
                var c = a.r + a.s + a.m;
                b[c] || (b[c] = []);
                b[c].push(a)
            });
            return b
        }
        ;
        b.prototype._sendGroupedLog = function(a, b) {
            return ha(this, void 0, void 0, function() {
                var c, d, g, f;
                return ia(this, function(e) {
                    switch (e.label) {
                    case 0:
                        c = this._createPayload(a),
                        d = this._requestContextProvider.getForesterEndpoint(b),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        [4, this._foresterRequest.postLogs(d, c)];
                    case 2:
                        return e.sent(),
                        this._clearLogQueue(),
                        [3, 4];
                    case 3:
                        return g = e.sent(),
                        this.print("sendGroupLog", "error log posting failed", g),
                        (f = this._logQueue).push.apply(f, a),
                        void 0 === this._flushTimeoutID && this._scheduleRetry(),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ;
        b.prototype._createPayload = function(a) {
            a = this._buildPostBodyLog(a);
            try {
                var b = JSON.stringify(a);
                if (a.reqs) {
                    var e = {
                        csmCount: {
                            counter: "foresterPayloadSize",
                            t: 0,
                            value: b.length
                        }
                    };
                    e.csmCount.value += JSON.stringify(e).length;
                    a.reqs.push(e);
                    this.print("createPayload", "Payload generated", b);
                    b = JSON.stringify(a)
                }
                return b
            } catch (h) {
                throw new D("ForesterPayloadConversion","Error while converting forester log to payload: ".concat(h));
            }
        }
        ;
        b.prototype._buildPostBodyLog = function(a) {
            var b = []
              , e = a[0];
            a.forEach(function(a) {
                var c = {};
                c[a.c] = a.data;
                b.push(c)
            });
            return {
                rid: e.r,
                sid: e.s,
                mid: e.m,
                sn: e.sn,
                reqs: b
            }
        }
        ;
        b.prototype._clearLogQueue = function() {
            this._logQueue.length && this._flushLogs();
            this._retryCount = 0;
            this._clearFlushTimeout()
        }
        ;
        b.prototype._scheduleRetry = function() {
            var a = this;
            this._retryCount >= b.MAX_RETRY_COUNT || (this._flushTimeoutID = setTimeout(function() {
                a._flushLogs();
                a._clearFlushTimeout()
            }, b.DEFAULT_FLUSH_TIMEOUT_MS * Math.pow(2, this._retryCount)),
            this._retryCount++)
        }
        ;
        b.prototype._flushLogs = function() {
            var a = this;
            l(function() {
                a._logQueue.length && a._send(a._logQueue.splice(0))
            })
        }
        ;
        b.prototype._clearFlushTimeout = function() {
            "number" === typeof this._flushTimeoutID && clearTimeout(this._flushTimeoutID);
            this._flushTimeoutID = void 0
        }
        ;
        b.MAX_RETRY_COUNT = 5;
        b.DEFAULT_FLUSH_TIMEOUT_MS = 1E3;
        return b
    }(n)
      , ka = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , F = this && this.__awaiter || function(d, b, a, c) {
        function e(b) {
            return b instanceof a ? b : new a(function(a) {
                a(b)
            }
            )
        }
        return new (a || (a = Promise))(function(a, g) {
            function h(a) {
                try {
                    p(c.next(a))
                } catch (q) {
                    g(q)
                }
            }
            function k(a) {
                try {
                    p(c["throw"](a))
                } catch (q) {
                    g(q)
                }
            }
            function p(b) {
                b.done ? a(b.value) : e(b.value).then(h, k)
            }
            p((c = c.apply(d, b || [])).next())
        }
        )
    }
      , G = this && this.__generator || function(d, b) {
        function a(a) {
            return function(b) {
                return c([a, b])
            }
        }
        function c(a) {
            if (h)
                throw new TypeError("Generator is already executing.");
            for (; e; )
                try {
                    if (h = 1,
                    g && (f = a[0] & 2 ? g["return"] : a[0] ? g["throw"] || ((f = g["return"]) && f.call(g),
                    0) : g.next) && !(f = f.call(g, a[1])).done)
                        return f;
                    if (g = 0,
                    f)
                        a = [a[0] & 2, f.value];
                    switch (a[0]) {
                    case 0:
                    case 1:
                        f = a;
                        break;
                    case 4:
                        return e.label++,
                        {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        e.label++;
                        g = a[1];
                        a = [0];
                        continue;
                    case 7:
                        a = e.ops.pop();
                        e.trys.pop();
                        continue;
                    default:
                        if (!(f = e.trys,
                        f = 0 < f.length && f[f.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            e = 0;
                            continue
                        }
                        if (3 === a[0] && (!f || a[1] > f[0] && a[1] < f[3]))
                            e.label = a[1];
                        else if (6 === a[0] && e.label < f[1])
                            e.label = f[1],
                            f = a;
                        else if (f && e.label < f[2])
                            e.label = f[2],
                            e.ops.push(a);
                        else {
                            f[2] && e.ops.pop();
                            e.trys.pop();
                            continue
                        }
                    }
                    a = b.call(d, e)
                } catch (w) {
                    a = [6, w],
                    g = 0
                } finally {
                    h = f = 0
                }
            if (a[0] & 5)
                throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var e = {
            label: 0,
            sent: function() {
                if (f[0] & 1)
                    throw f[1];
                return f[1]
            },
            trys: [],
            ops: []
        }, h, g, f, k;
        return k = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        },
        "function" === typeof Symbol && (k[Symbol.iterator] = function() {
            return this
        }
        ),
        k
    }
      , la = function(d) {
        function b() {
            var a = d.call(this) || this;
            a.printCtor(arguments);
            return a
        }
        ka(b, d);
        b.prototype.triggerWeblab = function(a) {
            return F(this, void 0, void 0, function() {
                var b, e;
                return G(this, function(c) {
                    switch (c.label) {
                    case 0:
                        b = this._getWeblabTriggerOptions(),
                        c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]),
                        [4, fetch(a, b)];
                    case 2:
                        return c.sent(),
                        this.print("triggerWeblab", "Weblab triggered successfully"),
                        [3, 4];
                    case 3:
                        throw e = c.sent(),
                        this.print("triggerWeblab", "Weblab trigger failed", e),
                        e;
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ;
        b.prototype.postLogs = function(a, b) {
            return F(this, void 0, void 0, function() {
                var c, d, g;
                return G(this, function(e) {
                    switch (e.label) {
                    case 0:
                        c = this._getPostbackURL(a),
                        d = this._getRequestOptions(b),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        [4, fetch(c, d)];
                    case 2:
                        return e.sent(),
                        this.print("postLogs", "Forester logs posted successfully"),
                        [3, 4];
                    case 3:
                        throw g = e.sent(),
                        this.print("postMetrics", "Forester log request failed", g),
                        g;
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ;
        b.prototype._getPostbackURL = function(a) {
            return b.URL_ENDPOINT.replace("{{endpoint}}", a)
        }
        ;
        b.prototype._getRequestOptions = function(a) {
            return {
                method: "POST",
                mode: "no-cors",
                credentials: "include",
                body: a
            }
        }
        ;
        b.prototype._getWeblabTriggerOptions = function() {
            return {
                method: "GET",
                mode: "no-cors",
                credentials: "include"
            }
        }
        ;
        b.URL_ENDPOINT = "//{{endpoint}}/1/batch/1/OE/";
        return b
    }(n)
      , ma = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , na = function(d) {
        function b() {
            var a = d.call(this) || this;
            a._syntheticRequestID = b._generateRequestID();
            return a
        }
        ma(b, d);
        b._generateRequestID = function() {
            for (var a = "RSW"; 20 > a.length; )
                a += Math.floor(9007199254740991 * Math.random()).toString();
            return a.substring(0, 20)
        }
        ;
        b.prototype.getSyntheticRequestID = function() {
            return this._syntheticRequestID
        }
        ;
        return b
    }(n)
      , oa = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , pa = this && this.__awaiter || function(d, b, a, c) {
        function e(b) {
            return b instanceof a ? b : new a(function(a) {
                a(b)
            }
            )
        }
        return new (a || (a = Promise))(function(a, g) {
            function f(a) {
                try {
                    p(c.next(a))
                } catch (q) {
                    g(q)
                }
            }
            function h(a) {
                try {
                    p(c["throw"](a))
                } catch (q) {
                    g(q)
                }
            }
            function p(b) {
                b.done ? a(b.value) : e(b.value).then(f, h)
            }
            p((c = c.apply(d, b || [])).next())
        }
        )
    }
      , qa = this && this.__generator || function(d, b) {
        function a(a) {
            return function(b) {
                return c([a, b])
            }
        }
        function c(a) {
            if (h)
                throw new TypeError("Generator is already executing.");
            for (; e; )
                try {
                    if (h = 1,
                    g && (f = a[0] & 2 ? g["return"] : a[0] ? g["throw"] || ((f = g["return"]) && f.call(g),
                    0) : g.next) && !(f = f.call(g, a[1])).done)
                        return f;
                    if (g = 0,
                    f)
                        a = [a[0] & 2, f.value];
                    switch (a[0]) {
                    case 0:
                    case 1:
                        f = a;
                        break;
                    case 4:
                        return e.label++,
                        {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        e.label++;
                        g = a[1];
                        a = [0];
                        continue;
                    case 7:
                        a = e.ops.pop();
                        e.trys.pop();
                        continue;
                    default:
                        if (!(f = e.trys,
                        f = 0 < f.length && f[f.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            e = 0;
                            continue
                        }
                        if (3 === a[0] && (!f || a[1] > f[0] && a[1] < f[3]))
                            e.label = a[1];
                        else if (6 === a[0] && e.label < f[1])
                            e.label = f[1],
                            f = a;
                        else if (f && e.label < f[2])
                            e.label = f[2],
                            e.ops.push(a);
                        else {
                            f[2] && e.ops.pop();
                            e.trys.pop();
                            continue
                        }
                    }
                    a = b.call(d, e)
                } catch (w) {
                    a = [6, w],
                    g = 0
                } finally {
                    h = f = 0
                }
            if (a[0] & 5)
                throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var e = {
            label: 0,
            sent: function() {
                if (f[0] & 1)
                    throw f[1];
                return f[1]
            },
            trys: [],
            ops: []
        }, h, g, f, k;
        return k = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        },
        "function" === typeof Symbol && (k[Symbol.iterator] = function() {
            return this
        }
        ),
        k
    }
      , ra = function(d) {
        function b(a) {
            var c = d.call(this) || this;
            c.printCtor(arguments);
            c._swGlobal = a;
            void c._retrieveSessionIDFromCookieStore();
            c._syntheticSessionID = b._generateSyntheticSessionID();
            return c
        }
        oa(b, d);
        b._generateSyntheticSessionID = function() {
            for (var a = ""; 14 > a.length; )
                a += Math.floor(9007199254740991 * Math.random()).toString();
            return "000-".concat(a.substring(0, 7), "-").concat(a.substring(7, 14))
        }
        ;
        b.prototype.getSessionID = function() {
            return this._cachedSessionID || this._syntheticSessionID
        }
        ;
        b.prototype._retrieveSessionIDFromCookieStore = function() {
            return pa(this, void 0, void 0, function() {
                var a, b;
                return qa(this, function(c) {
                    switch (c.label) {
                    case 0:
                        if (!("cookieStore"in this._swGlobal && "get"in this._swGlobal.cookieStore))
                            return [2];
                        c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]),
                        [4, this._swGlobal.cookieStore.get("session-id")];
                    case 2:
                        return (a = c.sent()) && a.value && (this._cacheSessionID(a.value),
                        this.print("retrieveSessionIDFromCookieStore", "Retrieved session id from cookie store ".concat(this._cachedSessionID))),
                        [3, 4];
                    case 3:
                        return b = c.sent(),
                        this.print("retrieveSessionIDFromCookieStore", "Failed to retrieve cookie from cookie store", b),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ;
        b.prototype._cacheSessionID = function(a) {
            a && (this._cachedSessionID = a)
        }
        ;
        return b
    }(n)
      , sa = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , ta = function(d) {
        function b(a, b) {
            var c = d.call(this) || this;
            c.printCtor(arguments);
            c._swGlobal = a;
            c._config = b;
            c._requestIDGenerator = new na;
            c._sessionIDProvider = new ra(c._swGlobal);
            return c
        }
        sa(b, d);
        b.prototype.getRequestID = function(a) {
            return a && a.requestID ? a.requestID : this._requestIDGenerator.getSyntheticRequestID()
        }
        ;
        b.prototype.getSessionID = function(a) {
            return a && a.sessionID ? a.sessionID : this._sessionIDProvider.getSessionID()
        }
        ;
        b.prototype.getForesterEndpoint = function(a) {
            return a && a.foresterURL ? a.foresterURL : this._config.foresterEndpoint
        }
        ;
        return b
    }(n)
      , ua = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , va = function(d) {
        function b(a, b, e, h) {
            var c = d.call(this) || this;
            c._callCount = 0;
            c.printCtor(arguments);
            c._swGlobal = a;
            c._config = b;
            c._requestContextProvider = e;
            c._foresterRequest = h;
            c._startCallCounterResetTimer();
            return c
        }
        ua(b, d);
        b.prototype.trigger = function(a, c) {
            a = this._getValidWeblab(a);
            !a.length || this._callCount >= b.MAX_CALLS_COUNT || (this._callCount++,
            this._recordTrigger(a, c),
            this._logThresholdReached())
        }
        ;
        b.prototype._logThresholdReached = function() {
            this._callCount === b.MAX_CALLS_COUNT && this._swGlobal.$TM.error(r.create("WeblabTriggerThresholdReached"))
        }
        ;
        b.prototype._recordTrigger = function(a, c) {
            var d = this
              , h = ""
              , g = "";
            a.forEach(function(a) {
                g += d._encodeTrigger(a);
                h = d._getForesterWeblabEndpoint(g, c);
                h.length > b.MAX_FORESTER_URL_LENGTH && (d._flush(h),
                h = g = "")
            });
            h && this._flush(h)
        }
        ;
        b.prototype._flush = function(a) {
            try {
                this._foresterRequest.triggerWeblab(a),
                this._swGlobal.$TM.count(v.format("".concat(b.FORESTER_CLIENT_MODULE, ":SUCCESS")))
            } catch (c) {
                this._swGlobal.$TM.count(v.format("".concat(b.FORESTER_CLIENT_MODULE, ":FAILED")))
            }
        }
        ;
        b.prototype._getValidWeblab = function(a) {
            return a.filter(function(a) {
                var b = a.treatment;
                return m.isNonEmptyString(a.name) && m.isNonEmptyString(b)
            })
        }
        ;
        b.prototype._startCallCounterResetTimer = function() {
            var a = this;
            setInterval(function() {
                a._callCount = 0
            }, 1E3 * b.RESET_CALL_COUNT_SECONDS)
        }
        ;
        b.prototype._encodeTrigger = function(a) {
            var b = a.treatment;
            return encodeURIComponent(",wl\x3d".concat(a.name, "/").concat(b))
        }
        ;
        b.prototype._getForesterWeblabEndpoint = function(a, c) {
            var d = this._config.foresterEndpoint
              , h = this._config.marketplaceID
              , g = this._requestContextProvider.getSessionID();
            return "//".concat(d, "/1/remote-weblab-triggers/1/OE/") + "".concat(h, ":").concat(g, ":").concat(c, "$s:") + "wl-client-id\x3d".concat(b.FORESTER_CLIENT_ID) + "".concat(a, ":1234")
        }
        ;
        b.MAX_CALLS_COUNT = 200;
        b.RESET_CALL_COUNT_SECONDS = 60;
        b.MAX_FORESTER_URL_LENGTH = 2E3;
        b.FORESTER_CLIENT_ID = "CSMTrigger";
        b.FORESTER_CLIENT_MODULE = "FORESTER-WEBLAB";
        return b
    }(n)
      , wa = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , xa = function(d) {
        function b(a, b) {
            var c = d.call(this) || this;
            c.printCtor(arguments);
            var h = new ta(a,b)
              , g = new la;
            c._foresterLogClient = new ja(b,h,g);
            c._foresterWeblabClient = new va(a,b,h,g);
            return c
        }
        wa(b, d);
        b.prototype.log = function(a, b) {
            this._foresterLogClient.log(a, b)
        }
        ;
        b.prototype.trigger = function(a, b) {
            this._foresterWeblabClient.trigger(a, b)
        }
        ;
        return b
    }(n)
      , ya = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , za = function(d) {
        function b(a, b, e) {
            var c = d.call(this) || this;
            c._clientPostback = a.getClientPostback();
            c._csaClient = b;
            c._foresterClient = e;
            return c
        }
        ya(b, d);
        b.prototype.count = function(a, b, d) {
            void 0 === b && (b = 1);
            this._clientPostback.count(a, b, d);
            this._csaClient.count(a, b)
        }
        ;
        b.prototype.tag = function(a, b) {
            this._clientPostback.tag(a, b)
        }
        ;
        b.prototype.mark = function(a, b, d) {
            var c = performance.now();
            this.count(a, c - b, d)
        }
        ;
        b.prototype.triggerWeblab = function(a, b) {
            var c = this;
            if (!m.isNonEmptyString(b))
                throw r.create("ClientIDMissing", "Client id missing for triggering weblab via page");
            a.forEach(function(a) {
                c._clientPostback.weblabTrigger(a.name, a.treatment, b)
            })
        }
        ;
        b.prototype.triggerWeblabFromWorker = function(a, b) {
            if (!m.isNonEmptyString(b))
                throw r.create("RequestIDMissing", "Request id missing for triggering weblab via page");
            this._foresterClient.trigger(a, b)
        }
        ;
        return b
    }(n)
      , Aa = this && this.__extends || function() {
        var d = function(b, a) {
            d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return d(b, a)
        };
        return function(b, a) {
            function c() {
                this.constructor = b
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            d(b, a);
            b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype,
            new c)
        }
    }()
      , Ba = function(d) {
        function b(a, b, e) {
            var c = d.call(this) || this;
            c.printCtor(arguments);
            c._swGlobal = a;
            c._errorRecorder = b;
            c._metricRecorder = e;
            c._attachTelemetryToGlobalContext();
            return c
        }
        Aa(b, d);
        b.prototype.count = function(a, b, d) {
            var c = this;
            if (!m.isAsciiString(a))
                throw r.create("NonASCIICharacters", "Counter name contains non-ASCII characters ".concat(a));
            l(function() {
                var e = d && m.isNonEmptyString(d.clientID) ? d.clientID : void 0;
                c._metricRecorder.count(a, b, e)
            })
        }
        ;
        b.prototype.tag = function(a, b) {
            var c = this;
            if (!b || !m.isNonEmptyString(b.clientID))
                throw r.create("ClientIDMissing", "Client id missing for tag ".concat(a));
            l(function() {
                c._metricRecorder.tag(a, b.clientID)
            })
        }
        ;
        b.prototype.trigger = function(a, b) {
            var c = this;
            l(function() {
                var d = Array.isArray(a) ? a : [a];
                b.requestID ? c._metricRecorder.triggerWeblabFromWorker(d, b.requestID) : c._metricRecorder.triggerWeblab(d, b.clientID)
            })
        }
        ;
        b.prototype.mark = function(a, b, d) {
            var c = this;
            l(function() {
                var e = d && m.isNonEmptyString(d.clientID) ? d.clientID : void 0;
                c._metricRecorder.mark(a, b, e)
            })
        }
        ;
        b.prototype.error = function(a, b, d, h, g) {
            var c = this;
            l(function() {
                c._errorRecorder.record(a, b, d, h, g)
            })
        }
        ;
        b.prototype._attachTelemetryToGlobalContext = function() {
            this._swGlobal.$TM = this
        }
        ;
        return b
    }(n)
      , H = !1
      , Ca = function(d) {
        if (!d || "object" !== typeof d)
            throw r.create("InvalidForesterConfiguration");
        ["channel", "foresterEndpoint", "marketplaceID", "siteName", "attribution"].forEach(function(b) {
            b = d[b];
            if ("string" !== typeof b || !b.length)
                throw r.create("InvalidForesterConfiguration");
        })
    };
    I.init = function(d) {
        if (H)
            throw r.create("DuplicateLibraryInitialization");
        Ca(d.foresterConfig);
        Z();
        var b = d.swGlobal || self
          , a = d.foresterConfig;
        d = new xa(b,a);
        var c = new U(b);
        a = new ea(b,a.attribution,d,c);
        var e = new W;
        e = new X(b,Y,e);
        d = new za(c,e,d);
        new Ba(b,a,d);
        H = !0
    }
}
)(this.ServiceWorkerTelemetry = this.ServiceWorkerTelemetry || {});
var AUI_JS_DEBUG = !1;
(function(c) {
    var a = this && this.__assign || function() {
        a = Object.assign || function(a) {
            for (var b, d = 1, c = arguments.length; d < c; d++) {
                b = arguments[d];
                for (var e in b)
                    Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
            }
            return a
        }
        ;
        return a.apply(this, arguments)
    }
      , f = a({
        marketplaceID: "A21TJRUUN4KGV",
        foresterEndpoint: "fls-eu.amazon.in"
    }, {
        channel: "jserr-rw",
        attribution: "RetailServiceWorker",
        siteName: self.location.hostname
    });
    c.foresterConfig = f
}
)(this.ServiceWorkerTelemetryConfiguration = this.ServiceWorkerTelemetryConfiguration || {});
(function() {
    (function(Ac) {
        function Bc(f, b, a) {
            if (O.isDebugVerbose) {
                var e = a.value;
                a.value = function() {
                    for (var a = [], g = 0; g < arguments.length; g++)
                        a[g] = arguments[g];
                    g = this.constructor.name === f.constructor.name ? this.constructor.name : "".concat(this.constructor.name, " (").concat(f.constructor.name, ")");
                    H.print(g, b, "".concat("\x3c\x3c\x3c", " %o"), a);
                    H.rightShift();
                    a = e.apply(this, a);
                    H.leftShift();
                    H.print(g, b, "".concat("\x3e\x3e\x3e", " %o"), a);
                    return a
                }
                ;
                return a
            }
        }
        function k() {
            for (var f = [], b = 0; b < arguments.length; b++)
                f[b] = arguments[b];
            switch (f.length) {
            case 3:
                if ("number" !== typeof f[2])
                    return Bc(f[0], f[1], f[2]);
            default:
                throw r.create("UnsupportedLogDecorator");
            }
        }
        var wa;
        (function(f) {
            f.getMarketplaceProperties = function(b) {
                var a;
                if ("function" === typeof (null === (a = b.$RuntimeConfig) || void 0 === a ? void 0 : a.getMarketplaceProperties))
                    return b.$RuntimeConfig.getMarketplaceProperties()
            }
            ;
            f.getFeaturePropertiesData = function(b, a, e) {
                var c;
                if ("function" === typeof (null === (c = b.$RuntimeConfig) || void 0 === c ? void 0 : c.getFeatureProperties) && (b = b.$RuntimeConfig.getFeatureProperties(a, e),
                "function" === typeof (null === b || void 0 === b ? void 0 : b.getData)))
                    return b.getData()
            }
        }
        )(wa || (wa = {}));
        var T;
        (function(f) {
            f.isMShop = function() {
                return !1
            }
            ;
            f.getCountryCode = function(b) {
                b = wa.getMarketplaceProperties(b);
                if ("function" === typeof (null === b || void 0 === b ? void 0 : b.getCountryCode))
                    return b.getCountryCode()
            }
            ;
            f.isClientEnabled = function(b) {
                b = wa.getFeaturePropertiesData(b, "in-latency", "".concat("lightsaber", "-").concat("web"));
                return null === b || void 0 === b ? void 0 : b.clientEnabled
            }
        }
        )(T || (T = {}));
        var Cc = this && this.__read || function(f, b) {
            var a = "function" === typeof Symbol && f[Symbol.iterator];
            if (!a)
                return f;
            f = a.call(f);
            var e, c = [];
            try {
                for (; (void 0 === b || 0 < b--) && !(e = f.next()).done; )
                    c.push(e.value)
            } catch (h) {
                var g = {
                    error: h
                }
            } finally {
                try {
                    e && !e.done && (a = f["return"]) && a.call(f)
                } finally {
                    if (g)
                        throw g.error;
                }
            }
            return c
        }
        , u;
        (function(f) {
            var b = (b = "AmazonLightsaberServiceWorkerClientLib-1.0.1440.0".match(/^([^\-]+)\-((\w+\.\w+)(?:\.\w+)*)$/)) && b[1] && b[2] && b[3] ? b.slice(1) : ["unknown", "unknown", "unknown"];
            var a = Cc(b, 3);
            b = a[0];
            var e = a[1];
            a = a[2];
            f.NAMESPACE = "Lightsaber";
            f.NAMESPACE_UCASE = f.NAMESPACE.toUpperCase();
            f.NAMESPACE_LCASE = f.NAMESPACE.toLowerCase();
            f.NAMESPACE_SHORT = "lsbr";
            f.BRAZIL_NAME = b;
            f.FULL_VERSION = e;
            f.VERSION = a;
            f.HELP_LINK = "https://tiny.amazon.com/171he0ngb"
        }
        )(u || (u = {}));
        var ca;
        (function(f) {
            f.pushClamped = function(b, a, e, c) {
                b.push(a);
                a = "function" === typeof c;
                for (e = Math.max(e, 0); b.length > e; ) {
                    var g = b.shift();
                    a && c(g)
                }
            }
        }
        )(ca || (ca = {}));
        var xa;
        (function(f) {
            f.removeHeadersWithPrefix = function(b, a) {
                var e = new Headers(b);
                e.forEach(function(c, b) {
                    0 === b.indexOf(a) && e.delete(b)
                });
                return e
            }
            ;
            f.getCommonHTMLHeaders = function(b) {
                var a = new Headers({
                    "content-type": "text/html; charset\x3dutf-8",
                    "x-content-type-options": "nosniff",
                    "x-frame-options": "SAMEORIGIN",
                    "x-xss-protection": "1"
                });
                b && b.forEach(function(b, c) {
                    a.set(c, b)
                });
                return a
            }
        }
        )(xa || (xa = {}));
        var Dc = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
        , Ec = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
        , Fc = this && this.__read || function(f, b) {
            var a = "function" === typeof Symbol && f[Symbol.iterator];
            if (!a)
                return f;
            f = a.call(f);
            var e, c = [];
            try {
                for (; (void 0 === b || 0 < b--) && !(e = f.next()).done; )
                    c.push(e.value)
            } catch (h) {
                var g = {
                    error: h
                }
            } finally {
                try {
                    e && !e.done && (a = f["return"]) && a.call(f)
                } finally {
                    if (g)
                        throw g.error;
                }
            }
            return c
        }
        , Gc = this && this.__spreadArray || function(f, b, a) {
            if (a || 2 === arguments.length)
                for (var e = 0, c = b.length, g; e < c; e++)
                    !g && e in b || (g || (g = Array.prototype.slice.call(b, 0, e)),
                    g[e] = b[e]);
            return f.concat(g || Array.prototype.slice.call(b))
        }
        , U;
        (function(f) {
            var b = this;
            f.replaceAsync = function(a, e, c) {
                return Dc(b, void 0, void 0, function() {
                    var b, h;
                    return Ec(this, function(d) {
                        switch (d.label) {
                        case 0:
                            if ("function" !== typeof c)
                                return [2, a.replace(e, c)];
                            b = [];
                            a.replace(e, function(a) {
                                for (var e = [], d = 1; d < arguments.length; d++)
                                    e[d - 1] = arguments[d];
                                e = c.call.apply(c, Gc([void 0, a], Fc(e), !1));
                                b.push(e);
                                return ""
                            });
                            return [4, Promise.all(b)];
                        case 1:
                            return h = d.sent(),
                            [2, a.replace(e, function() {
                                return h.shift()
                            })]
                        }
                    })
                })
            }
            ;
            f.pad = function(a, b, c) {
                a = a.toString();
                return "function" === typeof a.padStart ? a.padStart(b, c) : a
            }
            ;
            f.generateRandomSequence = function(a, b) {
                for (var c = ""; c.length < a; )
                    c += Math.floor(9007199254740991 * Math.random()).toString(b);
                return c.substring(0, a)
            }
        }
        )(U || (U = {}));
        var Hc = this && this.__read || function(f, b) {
            var a = "function" === typeof Symbol && f[Symbol.iterator];
            if (!a)
                return f;
            f = a.call(f);
            var e, c = [];
            try {
                for (; (void 0 === b || 0 < b--) && !(e = f.next()).done; )
                    c.push(e.value)
            } catch (h) {
                var g = {
                    error: h
                }
            } finally {
                try {
                    e && !e.done && (a = f["return"]) && a.call(f)
                } finally {
                    if (g)
                        throw g.error;
                }
            }
            return c
        }
        , Ic = this && this.__spreadArray || function(f, b, a) {
            if (a || 2 === arguments.length)
                for (var e = 0, c = b.length, g; e < c; e++)
                    !g && e in b || (g || (g = Array.prototype.slice.call(b, 0, e)),
                    g[e] = b[e]);
            return f.concat(g || Array.prototype.slice.call(b))
        }
        , H;
        (function(f) {
            var b = 0
              , a = function() {
                var a = new Date
                  , c = U.pad(a.getHours(), 2, "0")
                  , b = U.pad(a.getMinutes(), 2, "0")
                  , h = U.pad(a.getSeconds(), 2, "0");
                a = U.pad(a.getMilliseconds(), 3, "0");
                return "".concat(c, ":").concat(b, ":").concat(h, ".").concat(a)
            };
            f.print = function(e, c, g) {
                for (var h = [], d = 3; d < arguments.length; d++)
                    h[d - 3] = arguments[d];
                O.isDebugVerbose && (d = "  ".repeat(b || 0),
                console.debug.apply(console, Ic(["%c".concat(a(), "%c%c").concat(u.NAMESPACE, "%c  ").concat(d, "%c").concat(e, "%c%c").concat(c, "%c ").concat(g), "background-color: #e1eaeb; color: #fff; padding: 5px 8px", "color: auto; font-weight: normal", "background-color: #3498db; color: #fff; padding: 5px 8px", "color: auto; font-weight: normal", "background-color: #f39c12; color: #fff; padding: 5px 8px", "color: auto; font-weight: normal", "background-color: #e1eaeb; padding: 5px 8px", "color: auto; font-weight: normal"], Hc(h), !1)))
            }
            ;
            f.rightShift = function() {
                return 25 >= b ? b++ : b
            }
            ;
            f.leftShift = function() {
                return 1 <= b ? b-- : b
            }
        }
        )(H || (H = {}));
        var Jc = function() {
            function f() {
                var b = this;
                this.promise = new Promise(function(a, e) {
                    b.resolve = a;
                    b.reject = e
                }
                )
            }
            f.prototype.resolveWith = function(b) {
                this.resolve(b)
            }
            ;
            f.prototype.rejectWith = function(b) {
                this.reject(b)
            }
            ;
            return f
        }(), Ea;
        (function(f) {
            var b = T.isMShop() ? "SMA" : "SW";
            f.format = function(a) {
                return "".concat(u.NAMESPACE, ":").concat(b, ":").concat(a).toLowerCase()
            }
        }
        )(Ea || (Ea = {}));
        var Kc = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }(), Lc = function(f) {
            function b(a, e, c, g, h) {
                c = f.call(this, b._getMessage(a, g, e, c)) || this;
                c.name = "".concat(u.NAMESPACE, "Error");
                c.code = a;
                c.data = e;
                c.logLevel = h;
                return c
            }
            Kc(b, f);
            b._getMessage = function(a, b, c, g) {
                b = b ? "- ".concat(b, ".") : "";
                if (void 0 !== c) {
                    var e = I.serialize(c);
                    "{}" === e && "function" === typeof c.toString && (e = c.toString());
                    b = "".concat(b, " Occurred with ").concat(e, ".").trim()
                }
                g && (c = g.stack ? "".concat(g.stack) : "".concat(g),
                b = "".concat(b, " Caused by ").concat(c).trim());
                return "".concat(a, " ").concat(b)
            }
            ;
            return b
        }(Error), r;
        (function(f) {
            f.create = function(b, a, e, c, g) {
                return new Lc(b.toString(),a,e,c,g)
            }
            ;
            f.wrap = function(b, a, e, c, g) {
                return b.hasOwnProperty("code") ? b : f.create(a, e, b, c, g)
            }
        }
        )(r || (r = {}));
        var A;
        (function(f) {
            f.matchesCode = function(b, a) {
                return b instanceof Error && b.hasOwnProperty("code") && b.code === a
            }
            ;
            f.matchesSignature = function(b, a) {
                return b instanceof Error && q.matchesPattern(b.message, a)
            }
        }
        )(A || (A = {}));
        var F;
        (function(f) {
            f.NETWORK_ERROR = /network error/i;
            f.FAILED_TO_FETCH = /failed to fetch/i;
            f.UNEXPECTED_INTERNAL_ERROR = /Unexpected internal error/i
        }
        )(F || (F = {}));
        var Ob = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
        , Pb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
        , Fa;
        (function(f) {
            var b = this;
            f.getResponseWithRelay = function(a) {
                return Ob(b, void 0, void 0, function() {
                    var b;
                    return Pb(this, function(c) {
                        switch (c.label) {
                        case 0:
                            if (!a.preloadResponse)
                                return [2, fetch(a.request)];
                            c.label = 1;
                        case 1:
                            return c.trys.push([1, 3, , 4]),
                            [4, a.preloadResponse];
                        case 2:
                            return (b = c.sent()) ? [2, b] : [2, fetch(a.request)];
                        case 3:
                            return c.sent(),
                            [2, fetch(a.request)];
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ;
            f.getResponseWithoutRelay = function(a) {
                return Ob(b, void 0, void 0, function() {
                    var b;
                    return Pb(this, function(c) {
                        switch (c.label) {
                        case 0:
                            if (!a.preloadResponse)
                                throw r.create("PreloadResponseUnsupported");
                            return [4, a.preloadResponse];
                        case 1:
                            b = c.sent();
                            if (!b)
                                throw r.create("PreloadResponseUnexpected");
                            return [2, b]
                        }
                    })
                })
            }
        }
        )(Fa || (Fa = {}));
        var Va = this && this.__assign || function() {
            Va = Object.assign || function(f) {
                for (var b, a = 1, e = arguments.length; a < e; a++) {
                    b = arguments[a];
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (f[c] = b[c])
                }
                return f
            }
            ;
            return Va.apply(this, arguments)
        }
        , Mc = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
        , Nc = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
        , la;
        (function(f) {
            f.shallow = function(b) {
                return Va({}, b)
            }
            ;
            (function(b) {
                var a = this;
                b.json = function(a) {
                    return JSON.parse(JSON.stringify(a))
                }
                ;
                b.structuredCloneAsync = function(b) {
                    return Mc(a, void 0, void 0, function() {
                        return Nc(this, function(a) {
                            return [2, new Promise(function(a) {
                                var c = new MessageChannel;
                                c.port1.postMessage(b);
                                c.port2.onmessage = function(c) {
                                    a(c.data)
                                }
                            }
                            )]
                        })
                    })
                }
            }
            )(f.deep || (f.deep = {}))
        }
        )(la || (la = {}));
        var Oc = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
        , Pc = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
        , R;
        (function(f) {
            var b = this;
            f.validateIsUsable = function(a) {
                if (!(a instanceof Response))
                    throw r.create("ResponseInvalid");
                if ("opaqueredirect" === a.type)
                    throw r.create("ResponseOpaqueRedirect");
                if (!(a.body instanceof ReadableStream))
                    throw r.create("ResponseBodyInvalid");
                if (a.bodyUsed || a.body.locked)
                    throw r.create("ResponseBodyUnusable");
            }
            ;
            f.validateIsOK = function(a) {
                if (!(a instanceof Response))
                    throw r.create("ResponseInvalid");
                if (!a.ok || 206 === a.status)
                    throw r.create("ResponseNotOK");
            }
            ;
            f.matchPatterns = function(a, e) {
                return Oc(b, void 0, void 0, function() {
                    var c;
                    return Pc(this, function(b) {
                        switch (b.label) {
                        case 0:
                            return f.validateIsUsable(a),
                            f.validateIsOK(a),
                            [4, a.text()];
                        case 1:
                            return c = b.sent(),
                            [2, e.map(function(a) {
                                return c.match(a)
                            })]
                        }
                    })
                })
            }
        }
        )(R || (R = {}));
        var I;
        (function(f) {
            f.serialize = function(b, a) {
                void 0 === a && (a = !1);
                try {
                    return a ? JSON.stringify(b, void 0, 4) : JSON.stringify(b)
                } catch (e) {
                    return H.print("SafeJSON", "encode", "JSON stringify failed, input\x3d".concat(b)),
                    "{}"
                }
            }
            ;
            f.deserialize = function(b) {
                try {
                    return JSON.parse(b)
                } catch (a) {
                    return H.print("SafeJSON", "decode", "JSON parse failed, input\x3d".concat(b)),
                    {}
                }
            }
        }
        )(I || (I = {}));
        var J;
        (function(f) {
            f.parse = function(b, a) {
                try {
                    return new URL(b,a)
                } catch (e) {
                    H.print("SafeURL", "parse", "URL parse failed, input\x3d".concat(b))
                }
            }
            ;
            f.encode = function(b) {
                return (b = f.parse(b)) ? b.href : void 0
            }
        }
        )(J || (J = {}));
        var K;
        (function(f) {
            f.encode = function(b) {
                return encodeURIComponent(b)
            }
            ;
            f.encodeRFC3986 = function(b) {
                return f.encode(b).replace(/[!'()*]/g, function(a) {
                    return "%".concat(a.charCodeAt(0).toString(16).toUpperCase())
                })
            }
            ;
            f.decode = function(b) {
                try {
                    return decodeURIComponent(b)
                } catch (a) {
                    H.print("SafeURIEncode", "decode", "decodeURIComponent failed, input\x3d".concat(b))
                }
            }
        }
        )(K || (K = {}));
        var Ga;
        (function(f) {
            f.onlyWordChars = function(b) {
                return b.replace(/[^\w]+/gim, "")
            }
        }
        )(Ga || (Ga = {}));
        var Qc = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
        , Rc = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
        , ma;
        (function(f) {
            var b = this;
            f.drain = function(a, e) {
                return Qc(b, void 0, void 0, function() {
                    var c, b;
                    return Rc(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return c = a.getReader(),
                            [4, c.read()];
                        case 1:
                            b = g.sent(),
                            g.label = 2;
                        case 2:
                            if (b.done)
                                return [3, 4];
                            e(b.value);
                            return [4, c.read()];
                        case 3:
                            return b = g.sent(),
                            [3, 2];
                        case 4:
                            return [2]
                        }
                    })
                })
            }
        }
        )(ma || (ma = {}));
        var Wa = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
        , Xa = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
        , t;
        (function(f) {
            var b = this;
            f.queueTask = function(a, b) {
                setTimeout(a, b || 0)
            }
            ;
            f.wait = function(a) {
                return Wa(b, void 0, void 0, function() {
                    return Xa(this, function(b) {
                        return [2, new Promise(function(c) {
                            setTimeout(c, a)
                        }
                        )]
                    })
                })
            }
            ;
            f.nextTask = function() {
                return Wa(b, void 0, void 0, function() {
                    return Xa(this, function(a) {
                        return [2, f.wait(0)]
                    })
                })
            }
            ;
            f.queueMicrotask = function(a) {
                Promise.resolve().then(function() {
                    a()
                })
            }
            ;
            f.nextMicrotask = function() {
                return Wa(b, void 0, void 0, function() {
                    return Xa(this, function(a) {
                        return [2, Promise.resolve()]
                    })
                })
            }
        }
        )(t || (t = {}));
        var G;
        (function(f) {
            f.getEpoch = function() {
                return Date.now()
            }
            ;
            f.getEpochSeconds = function(b) {
                void 0 === b && (b = f.getEpoch());
                return Math.round(b / 1E3)
            }
            ;
            f.getUTCDate = function(b) {
                void 0 === b && (b = f.getEpoch());
                return (new Date(b)).toUTCString()
            }
            ;
            f.getPerfNow = function() {
                return performance.now()
            }
        }
        )(G || (G = {}));
        var q;
        (function(f) {
            f.isObject = function(b) {
                return !!b && "object" === typeof b && !Array.isArray(b)
            }
            ;
            f.isNonEmptyString = function(b) {
                return "string" === typeof b && 0 < b.length
            }
            ;
            f.isPositiveInteger = function(b) {
                return "number" === typeof b && Math.floor(b) === b && 0 <= b && Infinity !== b
            }
            ;
            f.isFunction = function(b) {
                return "function" === typeof b
            }
            ;
            f.isBoolean = function(b) {
                return !0 === b || !1 === b
            }
            ;
            f.isNonEmptyArray = function(b) {
                return Array.isArray(b) && 0 < b.length
            }
            ;
            f.isOneOf = function(b, a) {
                return -1 !== a.indexOf(b)
            }
            ;
            f.isArrayWhereEvery = function(b, a) {
                return Array.isArray(b) && b.every(a)
            }
            ;
            f.isUndefinedOr = function(b, a) {
                return void 0 === b || a
            }
            ;
            f.matchesPattern = function(b, a) {
                return "string" === typeof b && a.test(b)
            }
            ;
            f.isURL = function(b) {
                return "string" === typeof b && !!J.parse(b)
            }
        }
        )(q || (q = {}));
        var B;
        (function(f) {
            var b = function(a, b, c) {
                return c ? "\x3c".concat(b, ' id\x3d"').concat(c, '"\x3e').concat(a, "\x3c/").concat(b, "\x3e") : "\x3c".concat(b, "\x3e").concat(a, "\x3c/").concat(b, "\x3e")
            };
            f.div = function(a, e) {
                return b(a, "div", e)
            }
            ;
            f.style = function(a, e) {
                return b(a, "style", e)
            }
            ;
            f.script = function(a, e, c) {
                if (!e)
                    return b("(function(){".concat(a, ";})();"), "script", c);
                e = I.serialize(e);
                e = K.encodeRFC3986(e);
                return b('(function(){var model\x3dJSON.parse(decodeURIComponent("'.concat(e, '"));').concat(a, ";})();"), "script", c)
            }
        }
        )(B || (B = {}));
        var Ya;
        (function(f) {
            f.escapeRegExp = function(b) {
                return b.replace(/[.*+?^${}()|[\]\\]/g, "\\$\x26")
            }
        }
        )(Ya || (Ya = {}));
        var Za;
        (function(f) {
            f.resolveAdsRedirects = function(b) {
                var a = J.parse(b);
                if (a && "/sspa/click" === a.pathname) {
                    var e = a.searchParams.get("url");
                    b = e ? (new URL(e,a)).href : b
                }
                return b
            }
        }
        )(Za || (Za = {}));
        var Sc = this && this.__read || function(f, b) {
            var a = "function" === typeof Symbol && f[Symbol.iterator];
            if (!a)
                return f;
            f = a.call(f);
            var e, c = [];
            try {
                for (; (void 0 === b || 0 < b--) && !(e = f.next()).done; )
                    c.push(e.value)
            } catch (h) {
                var g = {
                    error: h
                }
            } finally {
                try {
                    e && !e.done && (a = f["return"]) && a.call(f)
                } finally {
                    if (g)
                        throw g.error;
                }
            }
            return c
        }
        , Tc = this && this.__spreadArray || function(f, b, a) {
            if (a || 2 === arguments.length)
                for (var e = 0, c = b.length, g; e < c; e++)
                    !g && e in b || (g || (g = Array.prototype.slice.call(b, 0, e)),
                    g[e] = b[e]);
            return f.concat(g || Array.prototype.slice.call(b))
        }
        , v = function() {
            function f() {}
            f.prototype.log = function(b, a) {
                for (var e = [], c = 2; c < arguments.length; c++)
                    e[c - 2] = arguments[c];
                H.print.apply(H, Tc([this.constructor.name, b, a], Sc(e), !1))
            }
            ;
            f.prototype.logCtor = function(b) {
                this.log("constructor", "\x3c\x3c\x3c %o", b)
            }
            ;
            return f
        }(), O;
        (function(f) {
            f.isDebug = !1;
            f.isDebugVerbose = f.isDebug && !1
        }
        )(O || (O = {}));
        var Uc = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }(), V = this && this.__assign || function() {
            V = Object.assign || function(f) {
                for (var b, a = 1, e = arguments.length; a < e; a++) {
                    b = arguments[a];
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (f[c] = b[c])
                }
                return f
            }
            ;
            return V.apply(this, arguments)
        }
        , W = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
        , Qb = function(f) {
            function b(a, b) {
                var c = f.call(this) || this;
                c.logCtor(arguments);
                c._swGlobal = a;
                c._requireNavigationPreloadSupport = b.usePreloadResponseOnlyForServerResponseOnNavigations;
                c._logToPageProxy();
                return c
            }
            Uc(b, f);
            b.isCookieStoreSupported = function(a) {
                return "cookieStore"in a && "function" === typeof a.cookieStore.get
            }
            ;
            b.prototype.validate = function() {
                if (!this._isBasicOK())
                    throw r.create("UnsupportedBrowserContext");
                var a = this._getFeatureFailures();
                if (0 !== a.length)
                    throw r.create("APIUnsupported", {
                        failures: a
                    });
            }
            ;
            b.prototype.supports = function() {
                return this._isBasicOK() && this._isFeatureOK()
            }
            ;
            b.prototype._isBasicOK = function() {
                return 0 === this._getBasicFailures().length
            }
            ;
            b.prototype._isFeatureOK = function() {
                return 0 === this._getFeatureFailures().length
            }
            ;
            b.prototype._getBasicFailures = function() {
                var a = this._swGlobal
                  , b = {
                    Global: !!a,
                    ServiceWorkerGlobalScope: "ServiceWorkerGlobalScope"in a,
                    ServiceWorkerRegistration: "ServiceWorkerRegistration"in a,
                    Promise: "Promise"in a
                };
                return Object.keys(b).filter(function(a) {
                    return !b[a]
                })
            }
            ;
            b.prototype._getFeatureFailures = function() {
                var a = this._swGlobal
                  , b = {
                    URL: "URL"in a,
                    Headers: "Headers"in a,
                    Request: "Request"in a,
                    Response: "Response"in a,
                    ReadableStream: "ReadableStream"in a,
                    TextDecoder: "TextDecoder"in a,
                    TextEncoder: "TextEncoder"in a,
                    Uint8Array: "Uint8Array"in a,
                    caches: "caches"in a,
                    clients: "clients"in a,
                    WindowClient: "WindowClient"in a,
                    performance: "performance"in a,
                    Map: "Map"in a
                };
                b.Request && (b = V(V({}, b), {
                    RequestMethod: "method"in Request.prototype,
                    RequestMode: "mode"in Request.prototype,
                    RequestDestination: "destination"in Request.prototype,
                    RequestCredentials: "credentials"in Request.prototype,
                    RequestRedirect: "redirect"in Request.prototype,
                    RequestHeaders: "headers"in Request.prototype,
                    RequestIsHistoryNavigation: "isHistoryNavigation"in Request.prototype
                }));
                b.Response && (b = V(V({}, b), {
                    ResponseBody: "body"in Response.prototype,
                    ResponseType: "type"in Response.prototype,
                    ResponseHeaders: "headers"in Response.prototype,
                    ResponseRedirect: "function" === typeof Response.redirect
                }));
                this._requireNavigationPreloadSupport && (b = V(V({}, b), {
                    NavigationPreload: "NavigationPreloadManager"in a && "navigationPreload"in ServiceWorkerRegistration.prototype && "function" === typeof NavigationPreloadManager.prototype.getState && a.registration && a.registration.navigationPreload && a.registration.navigationPreload.getState()instanceof Promise
                }));
                return Object.keys(b).filter(function(a) {
                    return !b[a]
                })
            }
            ;
            b.prototype._logToPageProxy = function() {
                var a = this;
                this._isBasicOK() && this._swGlobal.addEventListener("aui-sw:page-proxy:feature-tags:request", function(b) {
                    b = b.detail.callback;
                    var c = [];
                    c.push("Version:".concat(u.VERSION));
                    c.push("Supported:".concat(a._isFeatureOK() ? "Yes" : "No"));
                    b(Promise.resolve(c.map(function(a) {
                        return Ea.format("Client:".concat(a))
                    })))
                })
            }
            ;
            W([k], b.prototype, "validate", null);
            W([k], b.prototype, "supports", null);
            W([k], b.prototype, "_isBasicOK", null);
            W([k], b.prototype, "_isFeatureOK", null);
            W([k], b.prototype, "_getBasicFailures", null);
            W([k], b.prototype, "_getFeatureFailures", null);
            W([k], b.prototype, "_logToPageProxy", null);
            W([k], b, "isCookieStoreSupported", null);
            return b
        }(v), na;
        (function(f) {
            f.create = function(b) {
                return {
                    timeOriginEpoch: G.getEpoch(),
                    timeOriginPerfNow: G.getPerfNow(),
                    clientId: b || "unknown",
                    errorContext: {
                        BuildVersion: u.FULL_VERSION
                    }
                }
            }
        }
        )(na || (na = {}));
        var Vc = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }(), D = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
        , L = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
        , E = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
        , $a = this && this.__read || function(f, b) {
            var a = "function" === typeof Symbol && f[Symbol.iterator];
            if (!a)
                return f;
            f = a.call(f);
            var e, c = [];
            try {
                for (; (void 0 === b || 0 < b--) && !(e = f.next()).done; )
                    c.push(e.value)
            } catch (h) {
                var g = {
                    error: h
                }
            } finally {
                try {
                    e && !e.done && (a = f["return"]) && a.call(f)
                } finally {
                    if (g)
                        throw g.error;
                }
            }
            return c
        }
        , Wc = function(f) {
            function b(a, e, c, g, h, d) {
                var n = f.call(this) || this;
                n.logCtor(arguments);
                n._swGlobal = a;
                n._metricsService = e;
                n._plugins = c;
                n._cacheFullName = "".concat(b._CACHE_NAME_PREFIX).concat(g);
                n._cacheFullNameWithVersion = "".concat(n._cacheFullName, "V").concat(h);
                n._errorLoggingScope = "CacheOperator:".concat(g);
                d && n._cleanupCache();
                t.queueMicrotask(function() {
                    return L(n, void 0, void 0, function() {
                        return E(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return [4, this._primeCache()];
                            case 1:
                                return a.sent(),
                                [2]
                            }
                        })
                    })
                });
                return n
            }
            Vc(b, f);
            b.prototype.read = function(a, b, c) {
                return L(this, void 0, void 0, function() {
                    var e, h, d, f, l, p;
                    return E(this, function(g) {
                        switch (g.label) {
                        case 0:
                            e = this._toInternalRequest(b),
                            h = la.shallow(c),
                            d = 0,
                            g.label = 1;
                        case 1:
                            if (!(d < this._plugins.length))
                                return [3, 4];
                            f = this._plugins[d];
                            return "function" !== typeof f.requestWillBeUsed ? [3, 3] : [4, f.requestWillBeUsed("read", e, h)];
                        case 2:
                            p = $a.apply(void 0, [g.sent(), 2]),
                            e = p[0],
                            h = p[1],
                            g.label = 3;
                        case 3:
                            return d++,
                            [3, 1];
                        case 4:
                            return [4, this._read(a, e, this._getInternalCacheQueryOptions())];
                        case 5:
                            l = g.sent(),
                            d = this._plugins.length - 1,
                            g.label = 6;
                        case 6:
                            if (!(0 <= d))
                                return [3, 9];
                            f = this._plugins[d];
                            return "function" !== typeof f.responseWillBeUsed ? [3, 8] : [4, f.responseWillBeUsed(e, l, h)];
                        case 7:
                            l = g.sent(),
                            g.label = 8;
                        case 8:
                            return d--,
                            [3, 6];
                        case 9:
                            return [2, l]
                        }
                    })
                })
            }
            ;
            b.prototype.write = function(a, b, c, g) {
                return L(this, void 0, void 0, function() {
                    var e, d, f, l, p, k, q;
                    return E(this, function(h) {
                        switch (h.label) {
                        case 0:
                            e = this._toInternalRequest(b),
                            d = this._cloneResponse(a, c),
                            f = la.shallow(g),
                            l = 0,
                            h.label = 1;
                        case 1:
                            if (!(l < this._plugins.length))
                                return [3, 7];
                            p = this._plugins[l];
                            return "function" !== typeof p.requestWillBeUsed ? [3, 3] : [4, p.requestWillBeUsed("write", e, f)];
                        case 2:
                            q = $a.apply(void 0, [h.sent(), 2]),
                            e = q[0],
                            f = q[1],
                            h.label = 3;
                        case 3:
                            return "function" !== typeof p.cacheWillUpdate ? [3, 5] : [4, p.cacheWillUpdate(e, d, f)];
                        case 4:
                            d = h.sent(),
                            h.label = 5;
                        case 5:
                            if (void 0 === d)
                                return this.log("write", "Cancelled by ".concat(p.getName(), ' plugin via "cacheWillUpdate" hook')),
                                [2];
                            h.label = 6;
                        case 6:
                            return l++,
                            [3, 1];
                        case 7:
                            return [4, this._read(a, e, this._getInternalCacheQueryOptions())];
                        case 8:
                            return k = h.sent(),
                            [4, this._write(a, e, d)];
                        case 9:
                            h.sent(),
                            l = this._plugins.length - 1,
                            h.label = 10;
                        case 10:
                            if (!(0 <= l))
                                return [3, 13];
                            p = this._plugins[l];
                            return "function" !== typeof p.cacheDidUpdate ? [3, 12] : [4, p.cacheDidUpdate(e, k, d, f)];
                        case 11:
                            h.sent(),
                            h.label = 12;
                        case 12:
                            return l--,
                            [3, 10];
                        case 13:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype.evict = function(a, b, c) {
                return L(this, void 0, void 0, function() {
                    var e, h, d, f, l, p, k;
                    return E(this, function(g) {
                        switch (g.label) {
                        case 0:
                            e = this._toInternalRequest(b),
                            h = la.shallow(c),
                            d = 0,
                            g.label = 1;
                        case 1:
                            if (!(d < this._plugins.length))
                                return [3, 4];
                            f = this._plugins[d];
                            return "function" !== typeof f.requestWillBeUsed ? [3, 3] : [4, f.requestWillBeUsed("evict", e, h)];
                        case 2:
                            k = $a.apply(void 0, [g.sent(), 2]),
                            e = k[0],
                            h = k[1],
                            g.label = 3;
                        case 3:
                            return d++,
                            [3, 1];
                        case 4:
                            return [4, this._read(a, e, this._getInternalCacheQueryOptions())];
                        case 5:
                            return l = g.sent(),
                            [4, this._evict(a, e, this._getInternalCacheQueryOptions())];
                        case 6:
                            p = g.sent();
                            if (!p)
                                return [2, p];
                            d = this._plugins.length - 1;
                            g.label = 7;
                        case 7:
                            if (!(0 <= d))
                                return [3, 10];
                            f = this._plugins[d];
                            return "function" !== typeof f.cacheDidUpdate ? [3, 9] : [4, f.cacheDidUpdate(e, l, void 0, h)];
                        case 8:
                            g.sent(),
                            g.label = 9;
                        case 9:
                            return d--,
                            [3, 7];
                        case 10:
                            return [2, p]
                        }
                    })
                })
            }
            ;
            b.prototype.exists = function(a, b, c) {
                return L(this, void 0, void 0, function() {
                    var e;
                    return E(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return [4, this.read(a, b, c)];
                        case 1:
                            return e = g.sent(),
                            [2, !!e]
                        }
                    })
                })
            }
            ;
            b.prototype._read = function(a, b, c) {
                return L(this, void 0, void 0, function() {
                    var e, h, d;
                    return E(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return g.trys.push([0, 2, , 3]),
                            [4, this._getCache(a)];
                        case 1:
                            return e = g.sent(),
                            [2, e.match(b, c)];
                        case 2:
                            throw h = g.sent(),
                            d = A.matchesSignature(h, F.NETWORK_ERROR),
                            this._metricsService.error(a, h, this._errorLoggingScope, d ? "ERROR" : void 0),
                            this._metricsService.countError(a, h, d ? "".concat("NetworkError", ":").concat(this._errorLoggingScope) : this._errorLoggingScope),
                            h;
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._write = function(a, b, c) {
                return L(this, void 0, void 0, function() {
                    var e, h, d, f, l;
                    return E(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return g.trys.push([0, 4, , 5]),
                            [4, t.nextTask()];
                        case 1:
                            g.sent();
                            if ("GET" !== b.method)
                                throw r.create("RequestMethodNotGet", {
                                    method: b.method
                                });
                            e = J.parse(b.url);
                            if (!e)
                                throw r.create("InvalidURL", {
                                    url: b.url
                                });
                            h = e.protocol;
                            if ("http:" !== h && "https:" !== h)
                                throw r.create("RequestURLSchemeNonHTTP", {
                                    scheme: h
                                });
                            R.validateIsUsable(c);
                            R.validateIsOK(c);
                            return [4, this._getCache(a)];
                        case 2:
                            return d = g.sent(),
                            [4, d.put(b, c)];
                        case 3:
                            return g.sent(),
                            [3, 5];
                        case 4:
                            throw f = g.sent(),
                            l = A.matchesSignature(f, F.NETWORK_ERROR),
                            this._metricsService.error(a, f, this._errorLoggingScope, l ? "ERROR" : void 0),
                            this._metricsService.countError(a, f, l ? "".concat("NetworkError", ":").concat(this._errorLoggingScope) : this._errorLoggingScope),
                            f;
                        case 5:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._evict = function(a, b, c) {
                return L(this, void 0, void 0, function() {
                    var e, h, d;
                    return E(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return g.trys.push([0, 3, , 4]),
                            [4, t.nextTask()];
                        case 1:
                            return g.sent(),
                            [4, this._getCache(a)];
                        case 2:
                            return e = g.sent(),
                            [2, e.delete(b, c)];
                        case 3:
                            throw h = g.sent(),
                            d = A.matchesSignature(h, F.NETWORK_ERROR),
                            this._metricsService.error(a, h, this._errorLoggingScope, d ? "ERROR" : void 0),
                            this._metricsService.countError(a, h, d ? "".concat("NetworkError", ":").concat(this._errorLoggingScope) : this._errorLoggingScope),
                            h;
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._getCache = function(a) {
                return L(this, void 0, void 0, function() {
                    var b, c, g;
                    return E(this, function(e) {
                        switch (e.label) {
                        case 0:
                            if (this._cache)
                                return [2, this._cache];
                            b = G.getPerfNow();
                            return [4, this._swGlobal.caches.open(this._cacheFullNameWithVersion)];
                        case 1:
                            return c = e.sent(),
                            g = "".concat(this._errorLoggingScope, ":CacheOpen"),
                            this._metricsService.mark(a, g, b),
                            this._metricsService.tag(a, g),
                            this._cache || (this._cache = c),
                            [2, this._cache]
                        }
                    })
                })
            }
            ;
            b.prototype._primeCache = function() {
                return L(this, void 0, void 0, function() {
                    var a, b, c, g, h, d;
                    return E(this, function(e) {
                        switch (e.label) {
                        case 0:
                            a = na.create(),
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]),
                            [4, this._getCache(a)];
                        case 2:
                            return e.sent(),
                            [3, 4];
                        case 3:
                            return b = e.sent(),
                            c = r.create("CacheOpen", {
                                cacheName: this._cacheFullNameWithVersion
                            }, b),
                            g = A.matchesSignature(b, F.UNEXPECTED_INTERNAL_ERROR),
                            h = A.matchesSignature(b, F.NETWORK_ERROR),
                            d = g || h,
                            this._metricsService.error(a, c, this._errorLoggingScope, d ? "ERROR" : void 0),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._cleanupCache = function() {
                var a = this
                  , b = function() {
                    return L(a, void 0, void 0, function() {
                        var a, b, e;
                        return E(this, function(c) {
                            switch (c.label) {
                            case 0:
                                return [4, this._swGlobal.caches.keys()];
                            case 1:
                                a = c.sent(),
                                b = 0,
                                c.label = 2;
                            case 2:
                                if (!(b < a.length))
                                    return [3, 5];
                                e = a[b];
                                return 0 !== e.indexOf(this._cacheFullName) || e === this._cacheFullNameWithVersion ? [3, 4] : [4, this._swGlobal.caches.delete(e)];
                            case 3:
                                c.sent(),
                                c.label = 4;
                            case 4:
                                return b++,
                                [3, 2];
                            case 5:
                                return [2]
                            }
                        })
                    })
                };
                this._swGlobal.addEventListener("activate", function(a) {
                    a.waitUntil(b())
                })
            }
            ;
            b.prototype._toInternalRequest = function(a) {
                a = K.encode("string" === typeof a ? a : a.url);
                a = "https://".concat(u.NAMESPACE_LCASE, "?key\x3d").concat(a);
                return new Request(a,{
                    method: "GET"
                })
            }
            ;
            b.prototype._cloneResponse = function(a, b) {
                try {
                    return b.clone()
                } catch (c) {
                    throw b = r.wrap(c, "ResponseClone"),
                    this._metricsService.error(a, b, this._errorLoggingScope),
                    this._metricsService.countError(a, b, this._errorLoggingScope),
                    b;
                }
            }
            ;
            b.prototype._getInternalCacheQueryOptions = function() {
                return {
                    ignoreMethod: !1,
                    ignoreSearch: !1,
                    ignoreVary: !0
                }
            }
            ;
            b._CACHE_NAME_PREFIX = u.NAMESPACE;
            D([k], b.prototype, "read", null);
            D([k], b.prototype, "write", null);
            D([k], b.prototype, "evict", null);
            D([k], b.prototype, "exists", null);
            D([k], b.prototype, "_read", null);
            D([k], b.prototype, "_write", null);
            D([k], b.prototype, "_evict", null);
            D([k], b.prototype, "_getCache", null);
            D([k], b.prototype, "_primeCache", null);
            D([k], b.prototype, "_cleanupCache", null);
            D([k], b.prototype, "_toInternalRequest", null);
            D([k], b.prototype, "_cloneResponse", null);
            D([k], b.prototype, "_getInternalCacheQueryOptions", null);
            return b
        }(v), ab;
        (function(f) {
            var b = /(?:^|(?:\s*,\s*))([^\x00-\x20\(\)<>@,;:\\"\/\[\]\?=\{\}\x7F]+)(?:=(?:([^\x00-\x20\(\)<>@,;:\\"\/\[\]\?=\{\}\x7F]+)|(?:"((?:[^"\\]|\\.)*)")))?/g;
            f.parseCacheControl = function(a) {
                var e = {};
                a = a.get("cache-control");
                if (!a)
                    return e;
                a.replace(b, function(a, b, h, d) {
                    a = h || d;
                    e[b] = a ? a.toLowerCase() : !0;
                    return ""
                });
                e["max-age"] && (a = parseInt(e["max-age"], 10),
                isNaN(a) ? delete e["max-age"] : e["max-age"] = a);
                return e
            }
            ;
            f.hasLightsaberNoStore = function(a) {
                return f.parseCacheControl(a.headers).hasOwnProperty("lightsaber-no-store")
            }
        }
        )(ab || (ab = {}));
        var Ha;
        (function(f) {
            var b = "x-amz-".concat(u.NAMESPACE_LCASE, "-");
            f.REQUEST_ID_OPF_HEADER = "x-amz-rid";
            f.getLibHeader = function(a) {
                return "".concat(b).concat(a).trim().toLowerCase()
            }
            ;
            f.getClientOnlyLibHeader = function(a) {
                return "".concat(b, "clientonly-").concat(a).trim().toLowerCase()
            }
            ;
            f.removeLibHeaders = function(a) {
                return xa.removeHeadersWithPrefix(a, b)
            }
        }
        )(Ha || (Ha = {}));
        var bb;
        (function(f) {
            var b = Ha.getLibHeader("client-version");
            f.appendClientVersion = function(a) {
                a.append(b, u.VERSION)
            }
        }
        )(bb || (bb = {}));
        var cb;
        (function(f) {
            f.getParamName = function() {
                return "lsskpint"
            }
            ;
            f.getParam = function(b) {
                return b.searchParams.get("lsskpint")
            }
            ;
            f.setParam = function(b, a) {
                b.searchParams.append("lsskpint", a)
            }
        }
        )(cb || (cb = {}));
        var x;
        (function(f) {
            f.cacheControl = ab;
            f.clientInfo = bb;
            f.shared = Ha;
            f.skipIntercept = cb
        }
        )(x || (x = {}));
        var Xc = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ya = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , db = function(f) {
            function b() {
                var a = f.call(this) || this;
                a.logCtor(arguments);
                return a
            }
            Xc(b, f);
            b.prototype.getName = function() {
                return this.NAME
            }
            ;
            b.prototype.getPrefixedHeaderName = function(a) {
                return x.shared.getClientOnlyLibHeader(a)
            }
            ;
            b.prototype.encodeHeaderValue = function(a) {
                return K.encode(I.serialize(a))
            }
            ;
            b.prototype.decodeHeaderValue = function(a) {
                return (a = K.decode(a)) ? I.deserialize(a) : void 0
            }
            ;
            b.prototype.updateResponseHeaders = function(a, b) {
                return new Response(a.body,{
                    headers: b,
                    status: a.status,
                    statusText: a.statusText
                })
            }
            ;
            ya([k], b.prototype, "getName", null);
            ya([k], b.prototype, "getPrefixedHeaderName", null);
            ya([k], b.prototype, "encodeHeaderValue", null);
            ya([k], b.prototype, "decodeHeaderValue", null);
            ya([k], b.prototype, "updateResponseHeaders", null);
            return b
        }(v)
          , Yc = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Ia = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Rb = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Sb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Zc = function(f) {
            function b() {
                var a = f.call(this) || this;
                a.NAME = "MaxAge";
                a.logCtor(arguments);
                a._header = "".concat(f.prototype.getPrefixedHeaderName.call(a, a.NAME));
                return a
            }
            Yc(b, f);
            b.prototype.cacheWillUpdate = function(a, b, c) {
                return Rb(this, void 0, void 0, function() {
                    var a, e;
                    return Sb(this, function(d) {
                        if (!b)
                            return [2, b];
                        a = {
                            startSeconds: this._getRequestStartTimestampSeconds(c),
                            deltaSeconds: this._getMaxAgeSeconds(c)
                        };
                        if (0 > a.startSeconds || 0 > a.deltaSeconds)
                            return [2];
                        e = new Headers(b.headers || {});
                        e.append(this._header, this.encodeHeaderValue(a));
                        return [2, this.updateResponseHeaders(b, e)]
                    })
                })
            }
            ;
            b.prototype.responseWillBeUsed = function(a, b, c) {
                return Rb(this, void 0, void 0, function() {
                    var a, c, e, f;
                    return Sb(this, function(d) {
                        if (!b)
                            return [2, b];
                        a = b.headers.get(this._header);
                        if (!a)
                            return [2];
                        c = this.decodeHeaderValue(a);
                        if (!c || "number" !== typeof c.startSeconds || "number" !== typeof c.deltaSeconds)
                            return [2];
                        e = c.startSeconds + c.deltaSeconds;
                        f = G.getEpochSeconds();
                        return e < f ? [2] : [2, b]
                    })
                })
            }
            ;
            b.prototype._getRequestStartTimestampSeconds = function(a) {
                return a && "number" === typeof a.requestStartTimestampSeconds ? a.requestStartTimestampSeconds : -1
            }
            ;
            b.prototype._getMaxAgeSeconds = function(a) {
                return a && "number" === typeof a.maxAgeSeconds ? a.maxAgeSeconds : -1
            }
            ;
            Ia([k], b.prototype, "cacheWillUpdate", null);
            Ia([k], b.prototype, "responseWillBeUsed", null);
            Ia([k], b.prototype, "_getRequestStartTimestampSeconds", null);
            Ia([k], b.prototype, "_getMaxAgeSeconds", null);
            return b
        }(db)
          , $c = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , eb = this && this.__assign || function() {
            eb = Object.assign || function(f) {
                for (var b, a = 1, e = arguments.length; a < e; a++) {
                    b = arguments[a];
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (f[c] = b[c])
                }
                return f
            }
            ;
            return eb.apply(this, arguments)
        }
          , za = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Tb = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Ub = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , ad = function(f) {
            function b() {
                var a = f.call(this) || this;
                a.NAME = "ValidationKeys";
                a.logCtor(arguments);
                a._header = "".concat(f.prototype.getPrefixedHeaderName.call(a, a.NAME));
                return a
            }
            $c(b, f);
            b.prototype.cacheWillUpdate = function(a, b, c) {
                return Tb(this, void 0, void 0, function() {
                    var a, e;
                    return Ub(this, function(d) {
                        if (!b)
                            return [2, b];
                        a = this._getKeysFromOptions(c);
                        e = new Headers(b.headers || {});
                        e.append(this._header, this.encodeHeaderValue(a));
                        return [2, this.updateResponseHeaders(b, e)]
                    })
                })
            }
            ;
            b.prototype.responseWillBeUsed = function(a, b, c) {
                return Tb(this, void 0, void 0, function() {
                    var a, e, d;
                    return Ub(this, function(g) {
                        if (!b)
                            return [2, b];
                        try {
                            return a = this._getKeysFromResponse(b),
                            e = this._getKeysFromOptions(c),
                            d = this._doKeysMatch(a, e),
                            [2, d ? b : void 0]
                        } catch (l) {}
                        return [2]
                    })
                })
            }
            ;
            b.prototype._getKeysFromOptions = function(a) {
                if (!a)
                    return {};
                var b = a.validationKeys;
                if ("object" !== typeof b || null === b)
                    return {};
                Object.keys(b).forEach(function(a) {
                    var c = b[a];
                    if (!("string" === typeof a && "string" === typeof c && 0 < a.length))
                        throw r.create("InvalidKeyPair", {
                            key: a,
                            value: c
                        }, void 0, "Key:value pairs must all be non-empty string:string");
                });
                return eb({}, b)
            }
            ;
            b.prototype._getKeysFromResponse = function(a) {
                a = a.headers.get(this._header);
                if (!a)
                    return {};
                var b = this.decodeHeaderValue(a);
                if (b)
                    return b;
                throw r.create("UnreadableHeader", {
                    key: this._header,
                    value: a
                });
            }
            ;
            b.prototype._doKeysMatch = function(a, b) {
                return Object.keys(a).every(function(c) {
                    return b.hasOwnProperty(c) && a[c] === b[c]
                })
            }
            ;
            za([k], b.prototype, "cacheWillUpdate", null);
            za([k], b.prototype, "responseWillBeUsed", null);
            za([k], b.prototype, "_getKeysFromOptions", null);
            za([k], b.prototype, "_getKeysFromResponse", null);
            za([k], b.prototype, "_doKeysMatch", null);
            return b
        }(db)
          , bd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , fb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , cd = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , dd = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , ed = function(f) {
            function b() {
                var a = f.call(this) || this;
                a.NAME = "Metadata";
                a.logCtor(arguments);
                a._header = "".concat(f.prototype.getPrefixedHeaderName.call(a, a.NAME));
                return a
            }
            bd(b, f);
            b.prototype.cacheWillUpdate = function(a, b, c) {
                return cd(this, void 0, void 0, function() {
                    var a, e;
                    return dd(this, function(d) {
                        if (!b)
                            return [2, b];
                        a = {
                            requestStartTimestampSeconds: this._getRequestStartTimestampSeconds(c),
                            attribution: this._getAttribution(c)
                        };
                        e = new Headers(b.headers || {});
                        e.append(this._header, this.encodeHeaderValue(a));
                        return [2, this.updateResponseHeaders(b, e)]
                    })
                })
            }
            ;
            b.prototype._getRequestStartTimestampSeconds = function(a) {
                return a && "number" === typeof a.requestStartTimestampSeconds ? a.requestStartTimestampSeconds : G.getEpochSeconds()
            }
            ;
            b.prototype._getAttribution = function(a) {
                return a && "string" === typeof a.attribution ? a.attribution : "unknown"
            }
            ;
            fb([k], b.prototype, "cacheWillUpdate", null);
            fb([k], b.prototype, "_getRequestStartTimestampSeconds", null);
            fb([k], b.prototype, "_getAttribution", null);
            return b
        }(db)
          , fd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , X = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Ja = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Ka = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , gd = function(f) {
            function b(a, b, c) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._initCacheOperators(a, b, c);
                return e
            }
            fd(b, f);
            b.prototype.read = function(a, b, c, g) {
                return Ja(this, void 0, void 0, function() {
                    return Ka(this, function(e) {
                        return [2, this._getCacheOperator(b).read(a, c, g)]
                    })
                })
            }
            ;
            b.prototype.write = function(a, b, c, g, h) {
                return Ja(this, void 0, void 0, function() {
                    return Ka(this, function(e) {
                        return [2, this._getCacheOperator(b).write(a, c, g, h)]
                    })
                })
            }
            ;
            b.prototype.evict = function(a, b, c, g) {
                return Ja(this, void 0, void 0, function() {
                    return Ka(this, function(e) {
                        return [2, this._getCacheOperator(b).evict(a, c, g)]
                    })
                })
            }
            ;
            b.prototype.exists = function(a, b, c, g) {
                return Ja(this, void 0, void 0, function() {
                    return Ka(this, function(e) {
                        return [2, this._getCacheOperator(b).exists(a, c, g)]
                    })
                })
            }
            ;
            b.prototype._getCacheOperator = function(a) {
                if (!this._cacheOperators[a])
                    throw r.create("UnrecognizedCacheName", {
                        name: a
                    });
                return this._cacheOperators[a]
            }
            ;
            b.prototype._initCacheOperators = function(a, b, c) {
                var e = this;
                this._validateNoDuplicateCaches(c);
                this._cacheOperators = {};
                c.forEach(function(c) {
                    var d = c.name
                      , g = c.version
                      , h = c.dontCleanOldVersions
                      , f = Array.isArray(c.plugins) ? c.plugins.map(function(a) {
                        return e._createPluginInstance(a)
                    }) : [];
                    e._cacheOperators[c.name] = new Wc(a,b,f,d,g,!h)
                })
            }
            ;
            b.prototype._createPluginInstance = function(a) {
                switch (a) {
                case "MaxAge":
                    return new Zc;
                case "ValidationKeys":
                    return new ad;
                case "Metadata":
                    return new ed;
                default:
                    throw r.create("UnrecognizedCachePlugin", {
                        name: a
                    });
                }
            }
            ;
            b.prototype._validateNoDuplicateCaches = function(a) {
                var b = {};
                a.forEach(function(a) {
                    if (b.hasOwnProperty(a.name))
                        throw r.create("DuplicateCacheName", {
                            name: a.name
                        });
                    b[a.name] = !0
                })
            }
            ;
            X([k], b.prototype, "read", null);
            X([k], b.prototype, "write", null);
            X([k], b.prototype, "evict", null);
            X([k], b.prototype, "exists", null);
            X([k], b.prototype, "_getCacheOperator", null);
            X([k], b.prototype, "_initCacheOperators", null);
            X([k], b.prototype, "_createPluginInstance", null);
            X([k], b.prototype, "_validateNoDuplicateCaches", null);
            return b
        }(v)
          , hd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , gb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Vb = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Wb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , La = function(f) {
            function b(a) {
                var b = f.call(this) || this;
                b._customerContextService = a;
                return b
            }
            hd(b, f);
            b.prototype.compute = function(a) {
                return Vb(this, void 0, void 0, function() {
                    var b, c, g, h, d = this;
                    return Wb(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return b = a.map(function(a) {
                                return d._getValueForKey(a)
                            }),
                            [4, Promise.all(b)];
                        case 1:
                            c = e.sent();
                            g = {};
                            for (h = 0; h < a.length; h++)
                                g[a[h]] = c[h];
                            return [2, g]
                        }
                    })
                })
            }
            ;
            b.prototype._getValueForKey = function(a) {
                return Vb(this, void 0, void 0, function() {
                    var b, c, g, h;
                    return Wb(this, function(d) {
                        switch (d.label) {
                        case 0:
                            b = a;
                            switch (b) {
                            case "clientlibversion":
                                return [3, 1];
                            case "session":
                                return [3, 2];
                            case "recognition":
                                return [3, 4];
                            case "language":
                                return [3, 6]
                            }
                            return [3, 8];
                        case 1:
                            return [2, u.VERSION];
                        case 2:
                            return [4, this._customerContextService.getSessionId()];
                        case 3:
                            return c = d.sent(),
                            [2, this._getValueOrUnknown(c)];
                        case 4:
                            return [4, this._customerContextService.getRecognition()];
                        case 5:
                            return g = d.sent(),
                            [2, this._getValueOrUnknown(g)];
                        case 6:
                            return [4, this._customerContextService.getLanguage()];
                        case 7:
                            return h = d.sent(),
                            [2, this._getValueOrUnknown(h)];
                        case 8:
                            throw r.create("UnrecognizedCacheValidationKey", {
                                key: a
                            });
                        }
                    })
                })
            }
            ;
            b.prototype._getValueOrUnknown = function(a) {
                return "string" === typeof a && 0 < a.length ? a : "unknown"
            }
            ;
            gb([k], b.prototype, "compute", null);
            gb([k], b.prototype, "_getValueForKey", null);
            gb([k], b.prototype, "_getValueOrUnknown", null);
            return b
        }(v)
          , id = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Xb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , jd = function(f) {
            function b() {
                return null !== f && f.apply(this, arguments) || this
            }
            id(b, f);
            b.prototype.stripRefMarkersFromPath = function(a) {
                return a.replace(/\/ref_?=[^\/]*/gi, "") || "/"
            }
            ;
            b.prototype.stripLanguageFolderFromPath = function(a) {
                return a.replace(/^\/\-\/[^\/]+/i, "") || "/"
            }
            ;
            Xb([k], b.prototype, "stripRefMarkersFromPath", null);
            Xb([k], b.prototype, "stripLanguageFolderFromPath", null);
            return b
        }(v)
          , kd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Yb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Zb = function(f) {
            function b(a, b, c) {
                void 0 === b && (b = !0);
                void 0 === c && (c = !0);
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._pattern = a;
                e._stripRefMarkers = b;
                e._stripLanguageFolder = c;
                return e
            }
            kd(b, f);
            b.prototype.match = function(a, b, c) {
                return (a = J.parse(a.url)) ? this._pattern.test(this._getNormalizedPath(a.pathname)) : !1
            }
            ;
            b.prototype._getNormalizedPath = function(a) {
                this._stripRefMarkers && (a = this.stripRefMarkersFromPath(a));
                this._stripLanguageFolder && (a = this.stripLanguageFolderFromPath(a));
                return a
            }
            ;
            Yb([k], b.prototype, "match", null);
            Yb([k], b.prototype, "_getNormalizedPath", null);
            return b
        }(jd)
          , ld = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Ma = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , hb = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , ib = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , jb = function(f) {
            function b(a, b, c) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._url = a;
                e._requestInit = b;
                e._libVersionHeader = c;
                return e
            }
            ld(b, f);
            b.prototype.getResponse = function() {
                return hb(this, void 0, void 0, function() {
                    var a, b;
                    return ib(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return c.trys.push([0, 2, , 3]),
                            [4, fetch(this._url, this._getRequestInit(this._requestInit))];
                        case 1:
                            return a = c.sent(),
                            [3, 3];
                        case 2:
                            throw b = c.sent(),
                            r.wrap(b, "FailedToFetch", {
                                url: this._url,
                                requestInit: this._requestInit
                            });
                        case 3:
                            if ("opaqueredirect" === a.type)
                                throw r.create("ResponseOpaqueRedirect", {
                                    url: a.url,
                                    status: a.status
                                });
                            if (!a.ok)
                                throw r.create("ResponseNotOK", {
                                    url: a.url,
                                    status: a.status
                                });
                            return [2, a]
                        }
                    })
                })
            }
            ;
            b.prototype.getResponseText = function() {
                return hb(this, void 0, void 0, function() {
                    var a;
                    return ib(this, function(b) {
                        switch (b.label) {
                        case 0:
                            return [4, this.getResponse()];
                        case 1:
                            return a = b.sent(),
                            [2, a.text()]
                        }
                    })
                })
            }
            ;
            b.prototype.getResponseJson = function() {
                return hb(this, void 0, void 0, function() {
                    var a, b, c;
                    return ib(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.getResponse()];
                        case 1:
                            a = e.sent(),
                            e.label = 2;
                        case 2:
                            return e.trys.push([2, 4, , 5]),
                            [4, a.json()];
                        case 3:
                            return b = e.sent(),
                            [3, 5];
                        case 4:
                            throw c = e.sent(),
                            r.wrap(c, "ResponseNotJSON", {
                                url: a.url
                            });
                        case 5:
                            return [2, b]
                        }
                    })
                })
            }
            ;
            b.prototype._getRequestInit = function(a) {
                a = a || {};
                a.method || (a.method = "GET");
                if (this._libVersionHeader) {
                    var b = new Headers(a.headers || {});
                    x.clientInfo.appendClientVersion(b);
                    a.headers = b
                }
                return a
            }
            ;
            Ma([k], b.prototype, "getResponse", null);
            Ma([k], b.prototype, "getResponseText", null);
            Ma([k], b.prototype, "getResponseJson", null);
            Ma([k], b.prototype, "_getRequestInit", null);
            return b
        }(v)
          , md = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Y = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , kb = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , lb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , nd = function(f) {
            function b(a, b, c, g) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._swGlobal = a;
                e._customerContextService = b;
                e._cacheService = c;
                e._metricsService = g;
                e._errorLoggingScope = "PrefetchExecutor";
                return e
            }
            md(b, f);
            b.prototype.prefetch = function(a, b, c) {
                return kb(this, void 0, void 0, function() {
                    var e, h, d, f, l, p, k, q, r, u, v, N, $b, w, x, y, z;
                    return lb(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return e = b.prefetch,
                            h = e.endpoint,
                            d = e.mode,
                            f = e.delay,
                            [4, t.wait(1E3 * f)];
                        case 1:
                            g.sent();
                            l = a.storage;
                            p = l.cacheName;
                            k = l.cacheKey;
                            q = l.validationKeys;
                            if ("cache-miss" !== d)
                                return [3, 5];
                            g.label = 2;
                        case 2:
                            return g.trys.push([2, 4, , 5]),
                            [4, this._exists(p, k, q, c)];
                        case 3:
                            return (r = g.sent()) ? [2, {
                                ok: !1,
                                exitCode: "Exists"
                            }] : [3, 5];
                        case 4:
                            return g.sent(),
                            [2, {
                                ok: !1,
                                exitCode: "CacheError"
                            }];
                        case 5:
                            return [4, this._hasPrefetchCredit()];
                        case 6:
                            u = g.sent();
                            if (!u)
                                return [2, {
                                    ok: !1,
                                    exitCode: "NoCredit"
                                }];
                            v = this._getPrefetchURL(h, a.name, b.label);
                            if (!v)
                                return [2, {
                                    ok: !1,
                                    exitCode: "InvalidURL"
                                }];
                            N = G.getEpochSeconds();
                            g.label = 7;
                        case 7:
                            return g.trys.push([7, 9, , 10]),
                            [4, (new jb(v,this._getPrefetchRequestInit())).getResponse()];
                        case 8:
                            return $b = g.sent(),
                            [2, {
                                ok: !0,
                                requestStartTimestampSeconds: N,
                                response: $b
                            }];
                        case 9:
                            return w = g.sent(),
                            x = A.matchesCode(w, "FailedToFetch"),
                            y = A.matchesSignature(w, F.NETWORK_ERROR),
                            this._metricsService.error(c, w, this._errorLoggingScope, x || y ? "ERROR" : void 0),
                            z = this._errorLoggingScope,
                            y ? z = "".concat("NetworkError", ":").concat(this._errorLoggingScope) : x && (z = "".concat("FailedToFetch", ":").concat(this._errorLoggingScope)),
                            this._metricsService.countError(c, w, z),
                            [2, {
                                ok: !1,
                                exitCode: "NetworkError"
                            }];
                        case 10:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._exists = function(a, b, c, g) {
                return kb(this, void 0, void 0, function() {
                    var e, d, f, l;
                    return lb(this, function(h) {
                        switch (h.label) {
                        case 0:
                            return d = (e = this._cacheService).exists,
                            f = [g, a, b],
                            l = {},
                            [4, (new La(this._customerContextService)).compute(c)];
                        case 1:
                            return [2, d.apply(e, f.concat([(l.validationKeys = h.sent(),
                            l)]))]
                        }
                    })
                })
            }
            ;
            b.prototype._hasPrefetchCredit = function() {
                return kb(this, void 0, void 0, function() {
                    return lb(this, function(a) {
                        return [2, !0]
                    })
                })
            }
            ;
            b.prototype._getPrefetchURL = function(a, e, c) {
                if (a = J.parse(a, this._swGlobal.location.href)) {
                    var g = this._getPageShellClass(a);
                    this._addQueryParam(a, b._QUERY_PARAM_PAGE_SHELL, g);
                    this._addQueryParam(a, b._QUERY_PARAM_CACHE_POP_RULE, e);
                    this._addQueryParam(a, b._QUERY_PARAM_CACHE_POP_RULE_TRIGGER, c);
                    this._addQueryParam(a, b._QUERY_PARAM_REF_TAG, this._getRefTag(g, e, c), !1);
                    return a.href
                }
            }
            ;
            b.prototype._addQueryParam = function(a, b, c, g) {
                void 0 === g && (g = !0);
                g && a.searchParams.delete(b);
                a.searchParams.append(b, c)
            }
            ;
            b.prototype._getPageShellClass = function(a) {
                a = a.searchParams.get(b._QUERY_PARAM_PAGE_SHELL);
                a || (a = b._PAGE_SHELL_TYPE_DEFAULT);
                return a
            }
            ;
            b.prototype._getRefTag = function(a, e, c) {
                return "".concat(b._REF_TAG_PREFIX, "_").concat(a.substr(0, 16).toLocaleLowerCase(), "_").concat(e.substr(0, 16).toLocaleLowerCase(), "_").concat(c.substr(0, 16).toLocaleLowerCase())
            }
            ;
            b.prototype._getPrefetchRequestInit = function() {
                return {
                    method: "GET",
                    mode: "same-origin",
                    credentials: "same-origin",
                    redirect: "error",
                    headers: {
                        accept: "text/html,application/xhtml+xml,*/*;q\x3d0.9"
                    }
                }
            }
            ;
            b._QUERY_PARAM_PAGE_SHELL = "ls_pg_sh";
            b._QUERY_PARAM_CACHE_POP_RULE = "ls_cp_rl";
            b._QUERY_PARAM_CACHE_POP_RULE_TRIGGER = "ls_cp_rl_tr";
            b._QUERY_PARAM_REF_TAG = "ref_";
            b._PAGE_SHELL_TYPE_DEFAULT = "default";
            b._REF_TAG_PREFIX = u.NAMESPACE_SHORT;
            Y([k], b.prototype, "prefetch", null);
            Y([k], b.prototype, "_exists", null);
            Y([k], b.prototype, "_hasPrefetchCredit", null);
            Y([k], b.prototype, "_getPrefetchURL", null);
            Y([k], b.prototype, "_addQueryParam", null);
            Y([k], b.prototype, "_getPageShellClass", null);
            Y([k], b.prototype, "_getRefTag", null);
            Y([k], b.prototype, "_getPrefetchRequestInit", null);
            return b
        }(v)
          , od = function(f) {
            return B.div([B.style('body,html{font-family:"Amazon Ember",Arial,sans-serif;background:#fff}.main{position:fixed;bottom:0;left:0;right:0;padding:50px 0;text-align:center}.main-image{width:50%}.subline{font-size:.75rem;color:#999;margin:10px 0}.button{display:block;font-size:1rem;padding:10px;width:80%;margin:10px auto;border:1px solid #ccc;border-radius:5px;box-shadow:0 3px 0 #ccc;background:#fff}.button:active{border-color:#12626d;background-color:#edfcff}.hidden{display:none}'), '\x3cdiv class\x3d"main hidden" id\x3d"fallback-content-container"\x3e\x3cimg class\x3d"main-image" src\x3d"data:image/jpeg;base64,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"\x3e\x3ch3 class\x3d"headline"\x3eOOPS!\x3c/h3\x3e\x3ch3 class\x3d"headline"\x3eSomething went wrong.\x3c/h3\x3e\x3cbutton class\x3d"button" id\x3d"try-again"\x3eTRY AGAIN\x3c/button\x3e\x3cp class\x3d"subline"\x3eCS2. Error occurred of type S-2.\x3c/div\x3e', B.script('!function(e,r){"use strict";var t\x3de.failingUrl,n\x3de.referrerUrl,o\x3de.errorCode,a\x3de.description,c\x3de.fallbackContentTimeout;r.setTimeout(function(){var e\x3ddocument.getElementById("fallback-content-container");if(e){var t\x3ddocument.getElementById("try-again");t\x26\x26t.addEventListener("click",function(){r.location.reload()}),e.classList.remove("hidden")}},c),r.appErrorWebAppInterface\x26\x26"function"\x3d\x3dtypeof r.appErrorWebAppInterface.showError\x26\x26(r.appErrorWebAppInterface.called\x3d!0,r.appErrorWebAppInterface.showError(t,o,a,n))}(model,window);', f)].join("\n"))
        }
          , pd = function(f) {
            return B.script('!function(e,t){"use strict";function n(e){t.ue\x26\x26"function"\x3d\x3dtypeof t.ue.tag\x26\x26t.ue.tag(e)}function a(e){return[o,"Page"].concat(e).join(":").toLowerCase()}var o\x3de.namespace;try{var c\x3de.globalObjectName,r\x3de.contentFragmentName,m\x3de.contentFragmentData;c\x26\x26(t[c]\x3dt[c]||{},t[c].contentFragments\x3dt[c].contentFragments||{},t[c].contentFragments[r]\x3dm);var g\x3d"lightsaber:content-fragment:model:"+r,l\x3d{bubbles:!0,cancelable:!1,detail:m},i\x3dnew CustomEvent(g,l);t.dispatchEvent(i);var u\x3dt.AmazonUIPageJS?t.AmazonUIPageJS:t.P;u\x26\x26"function"\x3d\x3dtypeof u.declare\x26\x26u.declare(g,m)}catch(s){n(a(["ContentFragment","Model","Fail"]))}}(model,window);', f)
        }
          , qd = function(f) {
            return B.script('!function(t,e){"use strict";function i(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function o(t){for(var e\x3ddocument.cookie?document.cookie.split(";"):[],o\x3d0;o\x3ce.length;o++){var n\x3de[o].trim().split("\x3d"),r\x3di(n[0]);if(t\x3d\x3d\x3dr){var u\x3dn.slice(1).join("\x3d");return i(u)}}}function n(t){return[s,"Page","CsmReset"].concat(t).join(":").toLowerCase()}function r(t){e.ue\x26\x26"function"\x3d\x3dtypeof e.ue.tag\x26\x26e.ue.tag(t)}function u(i,o){return e.csa\x26\x26"function"\x3d\x3dtypeof e.csa?(e.csa("Config",{"CacheDetection.RequestID":i}),e.csa("Events")("setEntity",{page:{requestId:i},session:{id:o}}),void r(n([t.attribution,"OK","CSA"]))):void r(n([t.attribution,"Fail","CSA"]))}function a(i,o){return e.ue\x26\x26"function"\x3d\x3dtypeof e.ue.reset?(e.ue.reset(i,o,s.toLowerCase()),"string"\x3d\x3dtypeof e.ue.oid\x26\x26e.ue.oid!\x3d\x3di\x26\x26(e.ue.oid\x3di),void r("T1"\x3d\x3d\x3dt.treatment?n([t.attribution,"OK","UE"]):n(["OK"]))):void r(n("T1"\x3d\x3d\x3dt.treatment?[t.attribution,"Fail","UE"]:["Fail","API"]))}var s\x3dt.namespace,c\x3dt.requestId;if(!c)return void r(n(["Fail","RID"]));var d\x3do("session-id");return d?(a(c,d),void u(c,d)):void r(n(["Fail","SID"]))}(model,window);', f)
        }
          , rd = function(f) {
            return B.div([B.style("#lightsaber-debug-info-container{display:none;padding:10px;background:#cfcfcf;border-top:1px solid #d6d6d6;position:fixed;bottom:0;left:0;right:0;max-height:300px;overflow:scroll;z-index:9999}#lightsaber-debug-info-learn-more{display:block;text-decoration:none}#lightsaber-debug-info-metadata-container{display:block;background:#d6d6d6;border:1px dashed #666;margin:10px 0 0;padding:10px;overflow:scroll}#lightsaber-debug-info-close-btn{position:absolute;top:10px;right:10px;cursor:pointer;color:#900}"), '\x3cdiv id\x3d"lightsaber-debug-info-container"\x3e\x3ch4 id\x3d"lightsaber-debug-info-title"\x3eLightsaber Debug Info\x3c/h4\x3e\x3ca id\x3d"lightsaber-debug-info-learn-more" href\x3d"#" target\x3d"_blank" rel\x3d"noopener noreferrer"\x3eLearn More\x3c/a\x3e\x3cpre id\x3d"lightsaber-debug-info-metadata-container"\x3e\x3c/pre\x3e\x3cdiv id\x3d"lightsaber-debug-info-close-btn"\x3e[X]\x3c/div\x3e\x3c/div\x3e', B.script('!function(e,t){"use strict";function n(e){console.debug("["+o+" Debug]",e)}var o\x3de.namespace,r\x3ddocument.querySelector("#lightsaber-debug-info-container"),i\x3ddocument.querySelector("#lightsaber-debug-info-metadata-container"),c\x3ddocument.querySelector("#lightsaber-debug-info-close-btn"),u\x3ddocument.querySelector("#lightsaber-debug-info-learn-more");if(!(r\x26\x26i\x26\x26c\x26\x26u))return void n("Encountered unexpected DOM issue for Debug Tool, exiting...");u.setAttribute("href",e.learnMoreLink);var l\x3dt[e.globalObjectName];i.textContent\x3de.globalObjectName+" \x3d "+JSON.stringify(l,void 0,2),c.addEventListener("click",function(){r.remove()}),r.style.display\x3d"block"}(model,window);', f)].join("\n"))
        }
          , sd = function(f) {
            return B.style(f.stylesheetContent)
        }
          , td = function(f) {
            return B.script('!function(e,t){"use strict";function a(e){t.ue\x26\x26"function"\x3d\x3dtypeof t.ue.tag\x26\x26t.ue.tag(e)}function n(e,a){t.ue\x26\x26"function"\x3d\x3dtypeof t.ue.count\x26\x26t.ue.count(e,a)}function i(e){return[r,"Page"].concat(e).join(":").toLowerCase()}var r\x3de.namespace;try{var c\x3d!!e.hit,o\x3de.meta,u\x3de.globalObjectName,f\x3de.pModulePrefix;u\x26\x26(t[u]\x3dt[u]||{},t[u].hit\x3dc,t[u].meta\x3do),t.P\x26\x26t.P.declare\x26\x26(t.P.declare(f+"hit",c),t.P.declare(f+"meta",o));var m\x3do.navigationRule,g\x3do.responseStrategy,l\x3do.fetchEventTimeOrigin,p\x3dt.performance\x26\x26(performance.timeOrigin||performance.timing.navigationStart);if(!(m\x26\x26g\x26\x26g.name\x26\x26l\x26\x26p))return;a(i(["Hit"]));var v\x3do.fetchEventTimeOrigin-p;n(i([m,g.name,"SWFetchDelta"]),v)}catch(d){a(i(["Metadata","Fail"]))}}(model,window);', f)
        }
          , ud = function(f) {
            return B.script('!function(e,a){"use strict";function n(e){try{var a\x3dnew URL(o),n\x3da.searchParams.get(s),r\x3dn?n+"_"+e:e;return a.searchParams.set(s,r),a.href}catch(t){return o}}function r(){m\x3d!0,c?a.location.replace(n("vlr")):a.location.assign(n("vla"))}function t(){var e\x3da.AmazonUIPageJS?a.AmazonUIPageJS:a.P,t\x3de\x26\x26"function"\x3d\x3dtypeof e.when;if(!t)return void r();var o\x3da.setTimeout(r,u);e.when("mash").execute(function(e){m||(a.clearTimeout(o),c?e.navstack.begin().replace({url:n("vmr")}).end():e.navigate({url:n("vmn")}))})}var o\x3de.url,c\x3de.replaceHistory,i\x3de.useMash,u\x3de.mashTimeout,s\x3de.tagParamName,m\x3d!1;i?t():r()}(model,window);', f)
        }
          , vd = function(f) {
            return B.script('!function(e,o){"use strict";if(o.performance\x26\x26o.ue\x26\x26"function"\x3d\x3dtypeof o.ue.count){var n\x3do.performance.now(),c\x3d[e.namespace,"Page"].concat(e.counter).join(":").toLowerCase();o.ue.count(c,n)}}(model,window);', f)
        }
          , ac = function(f) {
            return B.script('!function(e,t){"use strict";function n(e){return[a,"Page","PModule"].concat(e).join(":").toLowerCase()}function o(e,n){t.ue\x26\x26"function"\x3d\x3dtypeof t.ue.count\x26\x26t.ue.count(e,n)}function r(e){return"function"\x3d\x3dtypeof e}var a\x3de.namespace,s\x3dt.AmazonUIPageJS?t.AmazonUIPageJS:t.P;s\x26\x26"function"\x3d\x3dtypeof s.register\x26\x26e.markers.forEach(function(e){try{s.register(e),s.when(e).execute(function(){var n\x3d"lightsaber:page:pmodule:"+e;r(t.uex)\x26\x26t.uex("ld",n,{wb:1})})}catch(a){var u\x3da\x26\x26a.message\x26\x26"string"\x3d\x3dtypeof a.message\x26\x26r(a.message.toLowerCase)\x26\x26r(a.message.indexOf);if(u\x26\x26-1!\x3d\x3da.message.toLowerCase().indexOf("already registered"))return void o(n(["ReRegister",e]),1);throw a}})}(model,window);', f)
        }
          , wd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Na = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , xd = this && this.__awaiter || function(f, b, a, e) {
            function c(c) {
                return c instanceof a ? c : new a(function(a) {
                    a(c)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , yd = this && this.__generator || function(f, b) {
            function a(a) {
                return function(c) {
                    return e([a, c])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , da = function(f) {
            function b(a, b) {
                var c = f.call(this) || this;
                c.logCtor(arguments);
                c.eventOptions = a;
                c.metricsService = b;
                return c
            }
            wd(b, f);
            b.prototype.getResponse = function() {
                return xd(this, void 0, void 0, function() {
                    var a;
                    return yd(this, function(b) {
                        try {
                            return this.metricsService.count(this.eventOptions, "Transmog:Use:".concat(this.NAME)),
                            [2, this.transmog()]
                        } catch (c) {
                            throw a = r.wrap(c, "Transmog", void 0, 'Unexpected error while running "'.concat(this.NAME, '" transmog')),
                            this.metricsService.error(this.eventOptions, a, this.getErrorLoggingScope()),
                            this.metricsService.countError(this.eventOptions, a, this.getErrorLoggingScope()),
                            a;
                        }
                    })
                })
            }
            ;
            b.prototype.getInit = function(a, b, c) {
                void 0 === a && (a = 200);
                return {
                    status: a,
                    statusText: b,
                    headers: xa.getCommonHTMLHeaders(c)
                }
            }
            ;
            b.prototype.renderTemplate = function(a, b) {
                try {
                    var c = a(b).trim()
                } catch (g) {
                    a = r.wrap(g, "TemplateRender", {
                        view: a,
                        model: b
                    }, 'Template render failed while running "'.concat(this.NAME, '" transmog')),
                    this.metricsService.error(this.eventOptions, a, this.getErrorLoggingScope()),
                    this.metricsService.countError(this.eventOptions, a, this.getErrorLoggingScope()),
                    c = "\x3c!-- ".concat(a, " --\x3e")
                }
                return O.isDebug ? ["", "\x3c!-- ".concat(u.NAMESPACE, ":Feature:").concat(this.NAME, " --\x3e"), c, "\x3c!-- ".concat(u.NAMESPACE, ":EndFeature:").concat(this.NAME, " --\x3e"), ""].join("\n") : c
            }
            ;
            b.prototype.getErrorLoggingScope = function() {
                return "".concat(this.NAME, "ResponseTransmog")
            }
            ;
            Na([k], b.prototype, "getResponse", null);
            Na([k], b.prototype, "getInit", null);
            Na([k], b.prototype, "renderTemplate", null);
            Na([k], b.prototype, "getErrorLoggingScope", null);
            return b
        }(v)
          , zd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, c) {
                    a.__proto__ = c
                }
                || function(a, c) {
                    for (var b in c)
                        Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Oa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , mb = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , nb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Ad = function(f) {
            function b(a, b, c, g, h) {
                var d = f.call(this, a, b) || this;
                d.NAME = "ContentFragment";
                d.logCtor(arguments);
                d._name = c;
                d._serializableData = h;
                d._predefinedContent = g;
                d._textEncoder = new TextEncoder;
                return d
            }
            zd(b, f);
            b.prototype.transmog = function() {
                return mb(this, void 0, void 0, function() {
                    return nb(this, function(a) {
                        return [2, new Response(this._getOutputStream(),this.getInit())]
                    })
                })
            }
            ;
            b.prototype._getOutputStream = function() {
                var a = this;
                return new ReadableStream({
                    start: function(b) {
                        return mb(a, void 0, void 0, function() {
                            return nb(this, function(a) {
                                switch (a.label) {
                                case 0:
                                    return [4, this._toOutputStream(this._predefinedContent, b)];
                                case 1:
                                    return a.sent(),
                                    [4, this._toOutputStream(this._getWrappedSerializedData(), b)];
                                case 2:
                                    return a.sent(),
                                    b.close(),
                                    [2]
                                }
                            })
                        })
                    }
                })
            }
            ;
            b.prototype._toOutputStream = function(a, b) {
                return mb(this, void 0, void 0, function() {
                    var c;
                    return nb(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return "string" === typeof a ? (c = this._textEncoder.encode(a),
                            b.enqueue(c),
                            [2]) : a.body instanceof ReadableStream ? [4, ma.drain(a.body, function(a) {
                                b.enqueue(a)
                            })] : [2];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    })
                })
            }
            ;
            b.prototype._getWrappedSerializedData = function() {
                try {
                    var a = la.deep.json(this._serializableData)
                } catch (e) {
                    this.metricsService.countError(this.eventOptions, r.create("SerializationFailed"), this.getErrorLoggingScope()),
                    a = {}
                }
                return this.renderTemplate(pd, {
                    namespace: u.NAMESPACE,
                    globalObjectName: "$".concat(u.NAMESPACE),
                    contentFragmentName: this._name,
                    contentFragmentData: a
                })
            }
            ;
            Oa([k], b.prototype, "transmog", null);
            Oa([k], b.prototype, "_getOutputStream", null);
            Oa([k], b.prototype, "_toOutputStream", null);
            Oa([k], b.prototype, "_getWrappedSerializedData", null);
            return b
        }(da)
          , Bd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ob = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , oa = function(f) {
            function b(a, b, c, g) {
                void 0 === g && (g = !0);
                var e = f.call(this, a, b) || this;
                e.logCtor(arguments);
                R.validateIsUsable(c);
                g && R.validateIsOK(c);
                e._source = e._getClonedResponse(c);
                return e
            }
            Bd(b, f);
            b.prototype.getSource = function(a) {
                void 0 === a && (a = !1);
                if (!this._source)
                    throw r.create("ResponseInvalid");
                return a ? this._source : this._getClonedResponse(this._source)
            }
            ;
            b.prototype.getSourceInit = function() {
                if (!this._source)
                    throw r.create("ResponseInvalid");
                return this.getInit(this._source.status, this._source.statusText, this._source.headers)
            }
            ;
            b.prototype._getClonedResponse = function(a) {
                try {
                    return a.clone()
                } catch (e) {
                    throw a = r.wrap(e, "ResponseClone"),
                    this.metricsService.error(this.eventOptions, a, this.getErrorLoggingScope()),
                    this.metricsService.countError(this.eventOptions, a, this.getErrorLoggingScope()),
                    a;
                }
            }
            ;
            ob([k], b.prototype, "getSource", null);
            ob([k], b.prototype, "getSourceInit", null);
            ob([k], b.prototype, "_getClonedResponse", null);
            return b
        }(da)
          , Cd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , pb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Dd = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Ed = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Fd = function(f) {
            function b(a, b, c, g) {
                var e = f.call(this, a, b, c) || this;
                e.NAME = "EagerLoadJSMarker";
                e.markers = g;
                e.logCtor(arguments);
                return e
            }
            Cd(b, f);
            b.prototype.transmog = function() {
                return Dd(this, void 0, void 0, function() {
                    var a, b;
                    return Ed(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return a = this.getSource(),
                            [4, a.text()];
                        case 1:
                            return b = c.sent(),
                            [2, new Response(this._getHTML(b),this.getSourceInit())]
                        }
                    })
                })
            }
            ;
            b.prototype._getHTML = function(a) {
                a = this._replaceMarkers(a);
                return a += this.renderTemplate(ac, {
                    markers: this.markers.map(function(a) {
                        return "".concat(a, ".").concat(u.NAMESPACE_LCASE)
                    })
                })
            }
            ;
            b.prototype._replaceMarkers = function(a) {
                var b = this
                  , c = a;
                this.markers.forEach(function(a) {
                    try {
                        var e = new RegExp(Ya.escapeRegExp(b._getAUILoaderWithMarkerString(a)),"g");
                        c = c.replace(e, b._getAUILoaderWithMarkerString("".concat(a, ".").concat(u.NAMESPACE_LCASE)))
                    } catch (d) {
                        a = r.create("EagerLoadJSMarkerReplacementFailed", a, d),
                        b.metricsService.error(b.eventOptions, a, b.NAME)
                    }
                });
                return c
            }
            ;
            b.prototype._getAUILoaderWithMarkerString = function(a) {
                return b.AUI_JS_LOADER_PREFIX + a + b.AUI_JS_LOADER_SUFFIX
            }
            ;
            b.AUI_JS_LOADER_PREFIX = "(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('";
            b.AUI_JS_LOADER_SUFFIX = "').execute(function() {";
            pb([k], b.prototype, "transmog", null);
            pb([k], b.prototype, "_getHTML", null);
            pb([k], b.prototype, "_replaceMarkers", null);
            return b
        }(oa)
          , Gd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , bc = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , qb = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , rb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Hd = function(f) {
            function b(a, b, c) {
                var e = f.call(this, a, b, c) || this;
                e.NAME = "InlinedStylesheet";
                e.logCtor(arguments);
                return e
            }
            Gd(b, f);
            b.prototype.transmog = function() {
                return qb(this, void 0, void 0, function() {
                    var a, e, c, g, h, d = this;
                    return rb(this, function(f) {
                        switch (f.label) {
                        case 0:
                            return a = this.getSource(),
                            [4, a.text()];
                        case 1:
                            e = f.sent(),
                            f.label = 2;
                        case 2:
                            return f.trys.push([2, 4, , 5]),
                            [4, U.replaceAsync(e, b.NEEDLE_PATTERN, function(a, b) {
                                return qb(d, void 0, void 0, function() {
                                    return rb(this, function(a) {
                                        return [2, this._getInlinedStyles(b)]
                                    })
                                })
                            })];
                        case 3:
                            return c = f.sent(),
                            [3, 5];
                        case 4:
                            return g = f.sent(),
                            h = A.matchesCode(g, "FailedToFetch"),
                            this.metricsService.error(this.eventOptions, g, this.getErrorLoggingScope(), h ? "ERROR" : void 0),
                            this.metricsService.countError(this.eventOptions, g, h ? "".concat("FailedToFetch", ":").concat(this.getErrorLoggingScope()) : this.getErrorLoggingScope()),
                            c = e,
                            [3, 5];
                        case 5:
                            return [2, new Response(c,this.getSourceInit())]
                        }
                    })
                })
            }
            ;
            b.prototype._getInlinedStyles = function(a) {
                return qb(this, void 0, void 0, function() {
                    var b;
                    return rb(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, (new jb(a)).getResponseText()];
                        case 1:
                            return b = c.sent(),
                            [2, this.renderTemplate(sd, {
                                stylesheetUrl: a,
                                stylesheetContent: b
                            })]
                        }
                    })
                })
            }
            ;
            b.NEEDLE_PATTERN = /<link.+rel="stylesheet".+href="([^"]+)".*\/>/gi;
            bc([k], b.prototype, "transmog", null);
            bc([k], b.prototype, "_getInlinedStyles", null);
            return b
        }(oa)
          , Id = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , cc = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Jd = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Kd = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Ld = function(f) {
            function b(a, b, c) {
                var e = f.call(this, a, b, c) || this;
                e.NAME = "ShoppingPortalLoadJSMarker";
                e.logCtor(arguments);
                return e
            }
            Id(b, f);
            b.prototype.transmog = function() {
                return Jd(this, void 0, void 0, function() {
                    var a, b;
                    return Kd(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return a = this.getSource(),
                            [4, a.text()];
                        case 1:
                            return b = c.sent(),
                            [2, new Response(this._getHTML(b),this.getSourceInit())]
                        }
                    })
                })
            }
            ;
            b.prototype._getHTML = function(a) {
                a = a.replace(b.LOAD_JS_PATTERN, b.LOAD_JS_REPLACER).replace(b.CRIT_LOAD_JS_PATTERN, b.CRIT_LOAD_JS_REPLACER);
                return a += this.renderTemplate(ac, {
                    markers: [b.LOAD_JS_REPLACER, b.CRIT_LOAD_JS_REPLACER]
                })
            }
            ;
            b.LOAD_JS_PATTERN = /\bsp\.load\.js\b/g;
            b.LOAD_JS_REPLACER = "sp.load.js.".concat(u.NAMESPACE_LCASE);
            b.CRIT_LOAD_JS_PATTERN = /\bsp\.load\.critical\.js\b/g;
            b.CRIT_LOAD_JS_REPLACER = "sp.load.critical.js.".concat(u.NAMESPACE_LCASE);
            cc([k], b.prototype, "transmog", null);
            cc([k], b.prototype, "_getHTML", null);
            return b
        }(oa)
          , Md = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , sb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Nd = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Od = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Pd = function(f) {
            function b(a, b, c) {
                var e = f.call(this, a, b, c) || this;
                e.NAME = "SyntheticRequestId";
                e.logCtor(arguments);
                return e
            }
            Md(b, f);
            b.prototype.transmog = function() {
                return Nd(this, void 0, void 0, function() {
                    var a, e, c, g, h, d;
                    return Od(this, function(f) {
                        switch (f.label) {
                        case 0:
                            a = this.getSource();
                            e = a.headers.get(x.shared.REQUEST_ID_OPF_HEADER);
                            if (!e)
                                return [2, new Response(a.body,this.getSourceInit())];
                            c = "".concat(b.SYNTHETIC_PREFIX).concat(U.generateRandomSequence(b.SEQUENCE_LENGTH, b.SEQUENCE_RADIX)).toUpperCase();
                            return [4, a.text()];
                        case 1:
                            return g = f.sent(),
                            h = this._getHTML(g, e, c),
                            d = this._getResponseInit(e, c),
                            [2, new Response(h,d)]
                        }
                    })
                })
            }
            ;
            b.prototype._getHTML = function(a, b, c) {
                b = new RegExp("".concat(b),"g");
                return a.replace(b, c)
            }
            ;
            b.prototype._getResponseInit = function(a, b) {
                var c = this.getSourceInit();
                c.headers instanceof Headers && (c.headers.append(x.shared.getLibHeader("original-rid"), a),
                c.headers.delete(x.shared.REQUEST_ID_OPF_HEADER),
                c.headers.append(x.shared.REQUEST_ID_OPF_HEADER, b));
                return c
            }
            ;
            b.SYNTHETIC_PREFIX = u.NAMESPACE_UCASE;
            b.SEQUENCE_LENGTH = 20 - b.SYNTHETIC_PREFIX.length;
            b.SEQUENCE_RADIX = 36;
            sb([k], b.prototype, "transmog", null);
            sb([k], b.prototype, "_getHTML", null);
            sb([k], b.prototype, "_getResponseInit", null);
            return b
        }(oa)
          , Qd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Rd = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Sd = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Td = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , dc = function(f) {
            function b(a, b, c) {
                var e = f.call(this, a, b) || this;
                e.NAME = "DebugInfo";
                e.logCtor(arguments);
                e._pageUrl = c;
                return e
            }
            Qd(b, f);
            b.prototype.transmog = function() {
                return Sd(this, void 0, void 0, function() {
                    var a, b, c;
                    return Td(this, function(e) {
                        a = J.parse(this._pageUrl);
                        b = "".concat(u.NAMESPACE_LCASE, "Debug");
                        c = !!a && a.searchParams.has(b) && O.isDebug;
                        return [2, new Response(c ? this.renderTemplate(rd, {
                            namespace: u.NAMESPACE,
                            globalObjectName: "$".concat(u.NAMESPACE),
                            learnMoreLink: u.HELP_LINK
                        }) : "",this.getInit())]
                    })
                })
            }
            ;
            Rd([k], b.prototype, "transmog", null);
            return b
        }(da)
          , Ud = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ea = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , tb = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , ub = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , ec = function(f) {
            function b(a, b, c, g, h, d, n) {
                var e = f.call(this, a, b, c) || this;
                e.logCtor(arguments);
                e.needle = g;
                e.needleLength = g.length;
                e.needleHeaderKey = h;
                e.inclusive = d;
                e.needleWasFound = !1;
                e.buffer = "";
                e._drainBufferAtEnd = n;
                e._textEncoder = new TextEncoder;
                e._textDecoder = new TextDecoder("utf-8",{
                    fatal: !0
                });
                return e
            }
            Ud(b, f);
            b.prototype.transmog = function() {
                return tb(this, void 0, void 0, function() {
                    var a, b;
                    return ub(this, function(c) {
                        a = this.getSource();
                        b = a.body;
                        return [2, new Response(this._getOutputStream(b),this._getResponseInit())]
                    })
                })
            }
            ;
            b.prototype.decode = function(a) {
                return this._textDecoder.decode(a, {
                    stream: !0
                })
            }
            ;
            b.prototype.encode = function(a) {
                return this._textEncoder.encode(a)
            }
            ;
            b.prototype.scan = function(a) {
                return a.indexOf(this.needle)
            }
            ;
            b.prototype._getOutputStream = function(a) {
                var b = this;
                return new ReadableStream({
                    start: function(c) {
                        return tb(b, void 0, void 0, function() {
                            return ub(this, function(b) {
                                switch (b.label) {
                                case 0:
                                    return [4, this._toOutputStream(a, c)];
                                case 1:
                                    return b.sent(),
                                    [2]
                                }
                            })
                        })
                    }
                })
            }
            ;
            b.prototype._toOutputStream = function(a, b) {
                return tb(this, void 0, void 0, function() {
                    var c, e, h, d = this;
                    return ub(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return g.trys.push([0, 2, , 3]),
                            [4, ma.drain(a, function(a) {
                                d.processChunk(b, a)
                            })];
                        case 1:
                            g.sent();
                            this._drainBufferAtEnd && (b.enqueue(this.encode(this.buffer)),
                            this.buffer = "");
                            if (!this.needleWasFound)
                                throw r.create("StreamTransformMissingDelimiter");
                            b.close();
                            return [3, 3];
                        case 2:
                            return c = g.sent(),
                            e = r.wrap(c, "StreamTransform", void 0, 'Stream processing failed while running "'.concat(this.NAME, '" transmog')),
                            h = A.matchesSignature(c, F.NETWORK_ERROR),
                            this.metricsService.error(this.eventOptions, e, this.getErrorLoggingScope(), h ? "ERROR" : void 0),
                            this.metricsService.countError(this.eventOptions, e, h ? "".concat("NetworkError", ":").concat(this.getErrorLoggingScope()) : this.getErrorLoggingScope()),
                            b.error(e),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._getResponseInit = function() {
                var a = this.getSourceInit();
                if (!this.needleHeaderKey)
                    return a;
                var b = new Headers(a.headers || {});
                b.append(x.shared.getClientOnlyLibHeader(this.needleHeaderKey), K.encode(this.needle));
                a.headers = b;
                return a
            }
            ;
            ea([k], b.prototype, "transmog", null);
            ea([k], b.prototype, "decode", null);
            ea([k], b.prototype, "encode", null);
            ea([k], b.prototype, "scan", null);
            ea([k], b.prototype, "_getOutputStream", null);
            ea([k], b.prototype, "_toOutputStream", null);
            ea([k], b.prototype, "_getResponseInit", null);
            return b
        }(oa)
          , Vd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Wd = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Xd = function(f) {
            function b(a, b, c, g, h) {
                void 0 === h && (h = !1);
                var d = f.call(this, a, b, c, g, void 0, h, !1) || this;
                d.NAME = "AfterSingleDelimiter";
                d.logCtor(arguments);
                return d
            }
            Vd(b, f);
            b.prototype.processChunk = function(a, b) {
                if (this.needleWasFound)
                    a.enqueue(b);
                else {
                    b = this.decode(b);
                    b = this.buffer + b;
                    var c = this.scan(b);
                    -1 === c ? this.buffer = b.slice(-this.needleLength + 1) : (b = b.slice(this.inclusive ? c : c + this.needleLength),
                    a.enqueue(this.encode(b)),
                    this.buffer = "",
                    this.needleWasFound = !0)
                }
            }
            ;
            Wd([k], b.prototype, "processChunk", null);
            return b
        }(ec)
          , Yd = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Zd = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , $d = function(f) {
            function b(a, b, c, g, h, d) {
                void 0 === d && (d = !0);
                var e = f.call(this, a, b, c, g, h, d, !0) || this;
                e.NAME = "BeforeSingleDelimiter";
                e.logCtor(arguments);
                return e
            }
            Yd(b, f);
            b.prototype.processChunk = function(a, b) {
                if (!this.needleWasFound) {
                    b = this.decode(b);
                    b = this.buffer + b;
                    var c = this.scan(b);
                    -1 === c ? (c = b.substring(0, b.length - this.needleLength + 1),
                    a.enqueue(this.encode(c)),
                    this.buffer = b.slice(-this.needleLength + 1)) : (b = b.substring(0, this.inclusive ? c + this.needleLength : c),
                    a.enqueue(this.encode(b)),
                    this.buffer = "",
                    this.needleWasFound = !0)
                }
            }
            ;
            Zd([k], b.prototype, "processChunk", null);
            return b
        }(ec)
          , ae = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , fc = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , be = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , ce = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , de = function(f) {
            function b(a, b, c, g, h, d) {
                var e = f.call(this, a, b) || this;
                e.NAME = "AppError";
                e.logCtor(arguments);
                e._failingUrl = c;
                e._errorCode = g;
                e._description = h;
                e._referrerUrl = d;
                return e
            }
            ae(b, f);
            b.prototype.transmog = function() {
                return be(this, void 0, void 0, function() {
                    return ce(this, function(a) {
                        return [2, new Response(this.renderTemplate(od, {
                            failingUrl: this._getSafeUrl(this._failingUrl),
                            errorCode: this._errorCode,
                            description: this._description,
                            referrerUrl: this._getSafeUrl(this._referrerUrl),
                            fallbackContentTimeout: b.HTML_FALLBACK_UI_TIMEOUT
                        }),this.getInit())]
                    })
                })
            }
            ;
            b.prototype._getSafeUrl = function(a) {
                return a ? J.encode(a) || "unknown" : ""
            }
            ;
            b.HTML_FALLBACK_UI_TIMEOUT = 500;
            fc([k], b.prototype, "transmog", null);
            fc([k], b.prototype, "_getSafeUrl", null);
            return b
        }(da)
          , ee = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , fe = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , ge = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , he = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , ie = function(f) {
            function b(a, b, c, g) {
                var e = f.call(this, a, b, c, !1) || this;
                e.NAME = "CSMTokens";
                e.logCtor(arguments);
                e._attribution = g;
                return e
            }
            ee(b, f);
            b.prototype.transmog = function() {
                return ge(this, void 0, void 0, function() {
                    var a, b, c;
                    return he(this, function(e) {
                        a = this.getSource();
                        b = a.headers.get(x.shared.REQUEST_ID_OPF_HEADER);
                        b || (c = r.create("RequestIdHeaderMissing"),
                        this.metricsService.error(this.eventOptions, c, this.getErrorLoggingScope()),
                        this.metricsService.countError(this.eventOptions, c, this.getErrorLoggingScope()));
                        this.eventOptions.errorContext.CSMTokensOPFRequestID = b || "unknown";
                        return [2, new Response(this.renderTemplate(qd, {
                            namespace: u.NAMESPACE,
                            requestId: b,
                            attribution: this._attribution,
                            treatment: "C"
                        }),this.getInit())]
                    })
                })
            }
            ;
            fe([k], b.prototype, "transmog", null);
            return b
        }(oa)
          , je = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ke = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , le = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , me = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , gc = function(f) {
            function b(a, b, c, g, h) {
                var d = f.call(this, a, b) || this;
                d.NAME = "PageMetadata";
                d.logCtor(arguments);
                d._navigationRuleName = c;
                d._responseStrategy = g;
                d._responseStrategyDetails = h;
                return d
            }
            je(b, f);
            b.prototype.transmog = function() {
                return le(this, void 0, void 0, function() {
                    return me(this, function(a) {
                        return [2, new Response(this.renderTemplate(td, {
                            namespace: u.NAMESPACE,
                            hit: !0,
                            meta: {
                                fetchEventTimeOrigin: this.eventOptions.timeOriginEpoch,
                                navigationRule: this._navigationRuleName,
                                responseStrategy: {
                                    name: this._responseStrategy,
                                    details: this._responseStrategyDetails
                                },
                                clientLib: {
                                    version: u.VERSION
                                }
                            },
                            globalObjectName: "$".concat(u.NAMESPACE),
                            pModulePrefix: "".concat(u.NAMESPACE_LCASE, "-")
                        }),this.getInit())]
                    })
                })
            }
            ;
            ke([k], b.prototype, "transmog", null);
            return b
        }(da)
          , ne = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , oe = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , pe = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , qe = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , re = function(f) {
            function b(a, b, c) {
                var e = f.call(this, a, b) || this;
                e.NAME = "PerformanceCounter";
                e.logCtor(arguments);
                e._counter = c;
                return e
            }
            ne(b, f);
            b.prototype.transmog = function() {
                return pe(this, void 0, void 0, function() {
                    return qe(this, function(a) {
                        return [2, new Response(this.renderTemplate(vd, {
                            namespace: u.NAMESPACE,
                            counter: this._counter
                        }),this.getInit())]
                    })
                })
            }
            ;
            oe([k], b.prototype, "transmog", null);
            return b
        }(da)
          , se = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , vb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , te = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , ue = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , ve = function(f) {
            function b(a, b, c, g, h, d) {
                var e = f.call(this, a, b) || this;
                e.NAME = "PageNavigate";
                e.logCtor(arguments);
                e._targetUrl = c;
                e._useHTTPStatusCodesForRedirects = g;
                e._replaceHistory = h;
                e._skipIntercept = d;
                return e
            }
            se(b, f);
            b.prototype.transmog = function() {
                return te(this, void 0, void 0, function() {
                    return ue(this, function(a) {
                        return [2, this._useHTTPStatusCodesForRedirects ? Response.redirect(this._getTargetURL(), b.HTTP_REDIRECT_STATUS_CODE) : new Response(this.renderTemplate(ud, {
                            useMash: T.isMShop(),
                            mashTimeout: b.MASH_READY_TIMEOUT,
                            url: this._getTargetURL(),
                            replaceHistory: this._replaceHistory,
                            tagParamName: this._getSkipInterceptParamName()
                        }),this.getInit())]
                    })
                })
            }
            ;
            b.prototype._getTargetURL = function() {
                var a = J.parse(this._targetUrl);
                if (!a)
                    throw a = r.create("InvalidURL", {
                        targetUrl: this._targetUrl
                    }),
                    this.metricsService.error(this.eventOptions, a, this.getErrorLoggingScope()),
                    this.metricsService.countError(this.eventOptions, a, this.getErrorLoggingScope()),
                    a;
                "string" === typeof this._skipIntercept && this._skipIntercept.length && x.skipIntercept.setParam(a, this._skipIntercept);
                return a.href
            }
            ;
            b.prototype._getSkipInterceptParamName = function() {
                return x.skipIntercept.getParamName()
            }
            ;
            b.HTTP_REDIRECT_STATUS_CODE = 302;
            b.MASH_READY_TIMEOUT = 3E3;
            vb([k], b.prototype, "transmog", null);
            vb([k], b.prototype, "_getTargetURL", null);
            vb([k], b.prototype, "_getSkipInterceptParamName", null);
            return b
        }(da)
          , we = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , wb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , hc = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , ic = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , xe = this && this.__read || function(f, b) {
            var a = "function" === typeof Symbol && f[Symbol.iterator];
            if (!a)
                return f;
            f = a.call(f);
            var e, c = [];
            try {
                for (; (void 0 === b || 0 < b--) && !(e = f.next()).done; )
                    c.push(e.value)
            } catch (h) {
                var g = {
                    error: h
                }
            } finally {
                try {
                    e && !e.done && (a = f["return"]) && a.call(f)
                } finally {
                    if (g)
                        throw g.error;
                }
            }
            return c
        }
          , ye = function(f) {
            function b(a, b, c) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._customerContextService = a;
                e._cacheService = b;
                e._metricsService = c;
                e._errorLoggingScope = "CacheWriter";
                return e
            }
            we(b, f);
            b.prototype.write = function(a, b, c) {
                return hc(this, void 0, void 0, function() {
                    var e, h, d, f, l, p, k, q, r, t, u, N;
                    return ic(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return g.trys.push([0, 3, , 4]),
                            e = b.storage,
                            h = e.cacheName,
                            d = e.cacheKey,
                            f = e.maxAge,
                            l = e.validationKeys,
                            [4, Promise.all([this._getTransmoggedResponse(a, b.transmogs, c), (new La(this._customerContextService)).compute(l)])];
                        case 1:
                            return p = xe.apply(void 0, [g.sent(), 2]),
                            k = p[0],
                            q = p[1],
                            [4, this._cacheService.write(c.eventOptions, h, d, k, {
                                maxAgeSeconds: f,
                                requestStartTimestampSeconds: c.requestStartTimestampSeconds,
                                attribution: c.attribution,
                                validationKeys: q
                            })];
                        case 2:
                            return g.sent(),
                            [3, 4];
                        case 3:
                            throw r = g.sent(),
                            t = A.matchesSignature(r, F.FAILED_TO_FETCH),
                            u = A.matchesSignature(r, F.NETWORK_ERROR),
                            N = t || u || !1,
                            this._metricsService.error(c.eventOptions, r, this._errorLoggingScope, N ? "ERROR" : void 0),
                            this._metricsService.countError(c.eventOptions, r, t ? "".concat("FailedToFetch", ":").concat(this._errorLoggingScope) : u ? "".concat("NetworkError", ":").concat(this._errorLoggingScope) : this._errorLoggingScope),
                            r;
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._getTransmoggedResponse = function(a, b, c) {
                return hc(this, void 0, void 0, function() {
                    var e, h;
                    return ic(this, function(d) {
                        switch (d.label) {
                        case 0:
                            if (!b)
                                return [2, a];
                            e = a;
                            h = 0;
                            d.label = 1;
                        case 1:
                            return h < b.length ? [4, this._getTransmog(e, b[h], c).getResponse()] : [3, 4];
                        case 2:
                            e = d.sent(),
                            d.label = 3;
                        case 3:
                            return h++,
                            [3, 1];
                        case 4:
                            return [2, e]
                        }
                    })
                })
            }
            ;
            b.prototype._getTransmog = function(a, b, c) {
                switch (b.name) {
                case "BeforeSingleDelimiter":
                    return new $d(c.eventOptions,this._metricsService,a,b.delimiter,b.delimiterKey,b.inclusive);
                case "EagerLoadJSMarker":
                    return new Fd(c.eventOptions,this._metricsService,a,b.markers);
                case "InlinedStylesheet":
                    return new Hd(c.eventOptions,this._metricsService,a);
                case "ShoppingPortalLoadJSMarker":
                    return new Ld(c.eventOptions,this._metricsService,a);
                case "SyntheticRequestId":
                    return new Pd(c.eventOptions,this._metricsService,a);
                default:
                    throw r.create("UnrecognizedTransmog", b);
                }
            }
            ;
            wb([k], b.prototype, "write", null);
            wb([k], b.prototype, "_getTransmoggedResponse", null);
            wb([k], b.prototype, "_getTransmog", null);
            return b
        }(v)
          , ze = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Aa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , jc = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , kc = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , lc = function(f) {
            function b(a, b, c, g) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e.cacheService = b;
                e.metricsService = c;
                e.cachePopulationRules = g;
                e.cacheWriter = new ye(a,b,c);
                return e
            }
            ze(b, f);
            b.prototype.logTagAndCount = function(a, b, c, g, h) {
                g = "CachePop:".concat(this.NAME, ":").concat(g);
                a = "".concat(g, ":").concat(a.name, ":").concat(b.label);
                this.metricsService.count(c, g, h);
                this.metricsService.count(c, a, h);
                this.metricsService.tag(c, a)
            }
            ;
            b.prototype.logMark = function(a, b, c, g) {
                g = "CachePop:".concat(this.NAME, ":").concat(g);
                a = "".concat(g, ":").concat(a.name, ":").concat(b.label);
                this.metricsService.mark(c, a)
            }
            ;
            b.prototype.isResponseValidForCaching = function(a, b) {
                return jc(this, void 0, void 0, function() {
                    var c;
                    return kc(this, function(e) {
                        switch (e.label) {
                        case 0:
                            try {
                                R.validateIsUsable(a),
                                R.validateIsOK(a)
                            } catch (h) {
                                return [2, {
                                    valid: !1,
                                    reason: "Unusable"
                                }]
                            }
                            return x.cacheControl.hasLightsaberNoStore(a) ? [2, {
                                valid: !1,
                                reason: "NoStore"
                            }] : (c = this._skipCachingAXModeContent(b)) ? [4, this._isAXModeContent(a)] : [3, 2];
                        case 1:
                            c = e.sent(),
                            e.label = 2;
                        case 2:
                            return c ? [2, {
                                valid: !1,
                                reason: "AXModeContent"
                            }] : [2, {
                                valid: !0
                            }]
                        }
                    })
                })
            }
            ;
            b.prototype._skipCachingAXModeContent = function(a) {
                return !!(a.flags || {}).dontCacheAXModeContent
            }
            ;
            b.prototype._isAXModeContent = function(a) {
                return jc(this, void 0, void 0, function() {
                    var b, c;
                    return kc(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return b = [/ue_sid\s*=\s*['"]000-0000000-8675309['"]/gi, /\/1\/batch\/1\/OP\/[A-Z0-9]+:000-0000000-8675309:/gi],
                            [4, R.matchPatterns(a.clone(), b)];
                        case 1:
                            return c = e.sent(),
                            [2, !c.every(function(a) {
                                return null === a
                            })]
                        }
                    })
                })
            }
            ;
            Aa([k], b.prototype, "logTagAndCount", null);
            Aa([k], b.prototype, "logMark", null);
            Aa([k], b.prototype, "isResponseValidForCaching", null);
            Aa([k], b.prototype, "_skipCachingAXModeContent", null);
            Aa([k], b.prototype, "_isAXModeContent", null);
            return b
        }(v)
          , Ae = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , xb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Be = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Ce = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , De = function(f) {
            function b(a, b, c, g, h) {
                var d = f.call(this, b, c, g, h) || this;
                d.NAME = "Prefetch";
                d.logCtor(arguments);
                d._prefetchExecutor = new nd(a,b,c,g);
                return d
            }
            Ae(b, f);
            b.prototype.run = function(a) {
                var b = this
                  , c = a.detail.eventOptions
                  , g = this._getMatchingRulesForTrigger(a);
                c.errorContext.CachePopulationRulesForPrefetchOnRouteTrigger = I.serialize(g);
                g.forEach(function(e) {
                    var d = e.rule
                      , g = e.trigger;
                    t.queueTask(function() {
                        return Be(b, void 0, void 0, function() {
                            var b, e;
                            return Ce(this, function(h) {
                                switch (h.label) {
                                case 0:
                                    return this.logTagAndCount(d, g, c, "Intent"),
                                    [4, this._prefetchExecutor.prefetch(d, g, a.detail.eventOptions)];
                                case 1:
                                    return b = h.sent(),
                                    b.ok ? [4, this.isResponseValidForCaching(b.response, d)] : (this.logTagAndCount(d, g, c, "Fail:".concat(b.exitCode)),
                                    [2]);
                                case 2:
                                    e = h.sent();
                                    if (!e.valid)
                                        return this.logTagAndCount(d, g, c, "Fail:Invalid:".concat(e.reason)),
                                        [2];
                                    this.logTagAndCount(d, g, c, "Write");
                                    h.label = 3;
                                case 3:
                                    return h.trys.push([3, 5, , 6]),
                                    [4, this.cacheWriter.write(b.response, d, {
                                        eventOptions: a.detail.eventOptions,
                                        requestStartTimestampSeconds: b.requestStartTimestampSeconds,
                                        attribution: g.label
                                    })];
                                case 4:
                                    return h.sent(),
                                    this.logTagAndCount(d, g, c, "Success"),
                                    [3, 6];
                                case 5:
                                    return h.sent(),
                                    this.logTagAndCount(d, g, c, "Fail:Write"),
                                    [3, 6];
                                case 6:
                                    return [2]
                                }
                            })
                        })
                    })
                })
            }
            ;
            b.prototype._getMatchingRulesForTrigger = function(a) {
                var b = this
                  , c = [];
                this.cachePopulationRules.forEach(function(e) {
                    for (var g = 0; g < e.triggers.length; g++) {
                        var d = e.triggers[g];
                        if ("PrefetchOnRoute" === d.name && b._createPrefetchOnRouteMatcher(d).match(a.detail.request)) {
                            c.push({
                                rule: e,
                                trigger: d
                            });
                            break
                        }
                    }
                });
                return c
            }
            ;
            b.prototype._createPrefetchOnRouteMatcher = function(a) {
                switch (a.routeMatcher.name) {
                case "URLPathRoute":
                    return a = a.routeMatcher,
                    new Zb(a.pattern,a.stripRefMarkers,a.stripLanguageFolder);
                default:
                    throw r.create("UnrecognizedRouteMatcher", a.routeMatcher);
                }
            }
            ;
            xb([k], b.prototype, "run", null);
            xb([k], b.prototype, "_getMatchingRulesForTrigger", null);
            xb([k], b.prototype, "_createPrefetchOnRouteMatcher", null);
            return b
        }(lc)
          , Ee = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , mc = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Fe = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Ge = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , He = function(f) {
            function b(a, b, c, g) {
                var e = f.call(this, a, b, c, g) || this;
                e.NAME = "ResponseRuleNavigationUpdate";
                e.logCtor(arguments);
                return e
            }
            Ee(b, f);
            b.prototype.run = function(a) {
                var b = this
                  , c = a.detail
                  , g = c.eventOptions
                  , h = c.serverResponse;
                a = this._getMatchingRulesForTrigger(a);
                g.errorContext.CachePopulationRulesForResponseRuleNavigationUpdateTrigger = I.serialize(a);
                a.forEach(function(a) {
                    var c = a.rule
                      , d = a.trigger;
                    b.logMark(c, d, g, "Trigger:Start");
                    t.queueTask(function() {
                        return Fe(b, void 0, void 0, function() {
                            var a;
                            return Ge(this, function(b) {
                                switch (b.label) {
                                case 0:
                                    return this.logTagAndCount(c, d, g, "Intent"),
                                    [4, this.isResponseValidForCaching(h, c)];
                                case 1:
                                    a = b.sent();
                                    if (!a.valid)
                                        return this.logTagAndCount(c, d, g, "Fail:Invalid:".concat(a.reason)),
                                        [2];
                                    b.label = 2;
                                case 2:
                                    return b.trys.push([2, 4, , 5]),
                                    this.logMark(c, d, g, "Write:Start"),
                                    [4, this.cacheWriter.write(h.clone(), c, {
                                        eventOptions: g,
                                        requestStartTimestampSeconds: G.getEpochSeconds(g.timeOriginEpoch),
                                        attribution: d.label
                                    })];
                                case 3:
                                    return b.sent(),
                                    this.logMark(c, d, g, "Write:Success"),
                                    this.logTagAndCount(c, d, g, "Success"),
                                    [3, 5];
                                case 4:
                                    return b.sent(),
                                    this.logMark(c, d, g, "Write:Fail"),
                                    this.logTagAndCount(c, d, g, "Fail:Write"),
                                    [3, 5];
                                case 5:
                                    return [2]
                                }
                            })
                        })
                    })
                })
            }
            ;
            b.prototype._getMatchingRulesForTrigger = function(a) {
                var b = [];
                this.cachePopulationRules.forEach(function(c) {
                    for (var e = 0; e < c.triggers.length; e++) {
                        var h = c.triggers[e];
                        if ("ResponseRuleNavigationUpdate" === h.name && h.responseRuleName === a.detail.ruleName) {
                            b.push({
                                rule: c,
                                trigger: h
                            });
                            break
                        }
                    }
                });
                return b
            }
            ;
            mc([k], b.prototype, "run", null);
            mc([k], b.prototype, "_getMatchingRulesForTrigger", null);
            return b
        }(lc)
          , Ie = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Je = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Ke = function(f) {
            function b(a, b, c, g, h, d) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._responseRuleNavigationUpdateTrigger = new He(b,c,g,d);
                e._prefetchOnRouteTrigger = new De(a,b,c,g,d);
                h.subscribe("ResponseRuleNavigation", e);
                h.subscribe("Navigation", e);
                return e
            }
            Ie(b, f);
            b.prototype.notifyEvent = function(a) {
                switch (a.name) {
                case "ResponseRuleNavigation":
                    this._responseRuleNavigationUpdateTrigger.run(a);
                    break;
                case "Navigation":
                    this._prefetchOnRouteTrigger.run(a)
                }
            }
            ;
            Je([k], b.prototype, "notifyEvent", null);
            return b
        }(v)
          , Le = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , fa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , nc = function(f) {
            function b(a) {
                var b = f.call(this) || this;
                b._entries = new Map;
                b.logCtor(arguments);
                b._maxEntries = a;
                return b
            }
            Le(b, f);
            b.prototype.get = function(a) {
                return this._entries.get(a)
            }
            ;
            b.prototype.set = function(a, b) {
                this.evict();
                this._entries.set(a, b)
            }
            ;
            b.prototype.delete = function(a) {
                return this._entries.delete(a)
            }
            ;
            b.prototype.has = function(a) {
                return this._entries.has(a)
            }
            ;
            b.prototype.size = function() {
                return this._entries.size
            }
            ;
            b.prototype.full = function() {
                return this._entries.size >= this._maxEntries
            }
            ;
            b.prototype.keys = function() {
                return this._entries.keys()
            }
            ;
            fa([k], b.prototype, "get", null);
            fa([k], b.prototype, "set", null);
            fa([k], b.prototype, "delete", null);
            fa([k], b.prototype, "has", null);
            fa([k], b.prototype, "size", null);
            fa([k], b.prototype, "full", null);
            fa([k], b.prototype, "keys", null);
            return b
        }(v)
          , Me = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Ne = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Oe = this && this.__values || function(f) {
            var b = "function" === typeof Symbol && Symbol.iterator
              , a = b && f[b]
              , e = 0;
            if (a)
                return a.call(f);
            if (f && "number" === typeof f.length)
                return {
                    next: function() {
                        f && e >= f.length && (f = void 0);
                        return {
                            value: f && f[e++],
                            done: !f
                        }
                    }
                };
            throw new TypeError(b ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
          , yb = function(f) {
            function b(a) {
                var b = f.call(this, a) || this;
                b.logCtor(arguments);
                return b
            }
            Me(b, f);
            b.prototype.evict = function() {
                var a;
                try {
                    for (var b = Oe(f.prototype.keys.call(this)), c = b.next(); !c.done; c = b.next()) {
                        var g = c.value;
                        if (!f.prototype.full.call(this))
                            break;
                        f.prototype.delete.call(this, g)
                    }
                } catch (d) {
                    var h = {
                        error: d
                    }
                } finally {
                    try {
                        c && !c.done && (a = b.return) && a.call(b)
                    } finally {
                        if (h)
                            throw h.error;
                    }
                }
            }
            ;
            Ne([k], b.prototype, "evict", null);
            return b
        }(nc)
          , Pe = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , zb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Qe = this && this.__values || function(f) {
            var b = "function" === typeof Symbol && Symbol.iterator
              , a = b && f[b]
              , e = 0;
            if (a)
                return a.call(f);
            if (f && "number" === typeof f.length)
                return {
                    next: function() {
                        f && e >= f.length && (f = void 0);
                        return {
                            value: f && f[e++],
                            done: !f
                        }
                    }
                };
            throw new TypeError(b ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
          , Re = function(f) {
            function b(a) {
                var b = f.call(this, a) || this;
                b.logCtor(arguments);
                return b
            }
            Pe(b, f);
            b.prototype.get = function(a) {
                var b = f.prototype.get.call(this, a);
                if (b)
                    return this.set(a, b),
                    b
            }
            ;
            b.prototype.set = function(a, b) {
                f.prototype.delete.call(this, a);
                f.prototype.set.call(this, a, b)
            }
            ;
            b.prototype.evict = function() {
                var a;
                try {
                    for (var b = Qe(f.prototype.keys.call(this)), c = b.next(); !c.done; c = b.next()) {
                        var g = c.value;
                        if (!f.prototype.full.call(this))
                            break;
                        f.prototype.delete.call(this, g)
                    }
                } catch (d) {
                    var h = {
                        error: d
                    }
                } finally {
                    try {
                        c && !c.done && (a = b.return) && a.call(b)
                    } finally {
                        if (h)
                            throw h.error;
                    }
                }
            }
            ;
            zb([k], b.prototype, "get", null);
            zb([k], b.prototype, "set", null);
            zb([k], b.prototype, "evict", null);
            return b
        }(nc)
          , Se = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Te = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , oc = function(f) {
            function b(a) {
                var b = f.call(this) || this;
                b.logCtor(arguments);
                b.eventBus = a;
                return b
            }
            Se(b, f);
            b.prototype.notify = function(a, b, c) {
                this.accepts(a, b) && this.publish(a, b, c)
            }
            ;
            Te([k], b.prototype, "notify", null);
            return b
        }(v)
          , Ue = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Ab = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Ve = function(f) {
            function b(a) {
                var e = f.call(this, a) || this;
                e.logCtor(arguments);
                e._readyStore = new yb(b._MAX_CLIENTS);
                return e
            }
            Ue(b, f);
            b.prototype.isClientReady = function(a) {
                return this._readyStore.has(a)
            }
            ;
            b.prototype.accepts = function(a, b) {
                return !(!b || "retail_service_worker_messaging" !== b.feature || "client_messaging_ready" !== b.command)
            }
            ;
            b.prototype.publish = function(a, b, c) {
                this._readyStore.set(a.id, !0);
                this.eventBus.publish({
                    name: "ClientReady",
                    detail: {
                        eventOptions: c
                    }
                })
            }
            ;
            b._MAX_CLIENTS = 50;
            Ab([k], b.prototype, "isClientReady", null);
            Ab([k], b.prototype, "accepts", null);
            Ab([k], b.prototype, "publish", null);
            return b
        }(oc)
          , We = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , pc = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Xe = function(f) {
            function b(a) {
                var b = f.call(this, a) || this;
                b.logCtor(arguments);
                return b
            }
            We(b, f);
            b.prototype.accepts = function(a, b) {
                return !(!b || "lightsaber" !== b.feature || "rendering_hints" !== b.command || !b.options || "object" !== typeof b.options)
            }
            ;
            b.prototype.publish = function(a, b, c) {
                this.eventBus.publish({
                    name: "RenderingHints",
                    detail: {
                        eventOptions: c,
                        options: b.options
                    }
                })
            }
            ;
            pc([k], b.prototype, "accepts", null);
            pc([k], b.prototype, "publish", null);
            return b
        }(oc)
          , Ye = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , pa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , qc = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , rc = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Ze = function(f) {
            function b(a, b) {
                var c = f.call(this) || this;
                c.logCtor(arguments);
                c._swGlobal = a;
                c._clientReadyPublisher = new Ve(b);
                c._renderingHintsPublisher = new Xe(b);
                c._listenForClientMessages();
                return c
            }
            Ye(b, f);
            b.prototype.isClientReady = function(a) {
                return this._clientReadyPublisher.isClientReady(a)
            }
            ;
            b.prototype.getClient = function(a) {
                return qc(this, void 0, void 0, function() {
                    var b;
                    return rc(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, this._swGlobal.clients.get(a)];
                        case 1:
                            if (b = c.sent())
                                return [2, b];
                            throw r.create("ClientNotFound", {
                                clientId: a
                            });
                        }
                    })
                })
            }
            ;
            b.prototype.postMessageToClient = function(a, b) {
                a.postMessage(b)
            }
            ;
            b.prototype.postMessageToClientById = function(a, b) {
                return qc(this, void 0, void 0, function() {
                    var c;
                    return rc(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.getClient(a)];
                        case 1:
                            return c = e.sent(),
                            this.postMessageToClient(c, b),
                            [2]
                        }
                    })
                })
            }
            ;
            b.prototype._listenForClientMessages = function() {
                var a = this;
                this._swGlobal.addEventListener("message", function(b) {
                    if (a._filter(b)) {
                        var c = b.source
                          , e = b.data
                          , h = na.create(c.id);
                        [a._clientReadyPublisher, a._renderingHintsPublisher].forEach(function(a) {
                            a.notify(c, e, h)
                        })
                    }
                })
            }
            ;
            b.prototype._filter = function(a) {
                return a.origin === this._swGlobal.location.origin && a.source instanceof WindowClient && "string" === typeof a.source.id
            }
            ;
            pa([k], b.prototype, "isClientReady", null);
            pa([k], b.prototype, "getClient", null);
            pa([k], b.prototype, "postMessageToClient", null);
            pa([k], b.prototype, "postMessageToClientById", null);
            pa([k], b.prototype, "_listenForClientMessages", null);
            pa([k], b.prototype, "_filter", null);
            return b
        }(v)
          , $e = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Pa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Qa = function(f) {
            function b() {
                return null !== f && f.apply(this, arguments) || this
            }
            $e(b, f);
            b.prototype.filter = function(a) {
                var b = this;
                return a.filter(function(a) {
                    var c = b.isValid(a);
                    c || b.log("filter", "Invalid:", a);
                    return c
                })
            }
            ;
            b.prototype.isValidRouteMatcher = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isUndefinedOr
                  , h = q.isBoolean;
                if (!b(a) || !c(a.name))
                    return !1;
                switch (a.name) {
                case "URLPathRoute":
                    return a.pattern instanceof RegExp && g(a.stripRefMarkers, h(a.stripRefMarkers)) && g(a.stripLanguageFolder, h(a.stripLanguageFolder));
                default:
                    return !1
                }
            }
            ;
            b.prototype.isValidValidationKeys = function(a) {
                var b = q.isArrayWhereEvery
                  , c = q.isOneOf;
                return b(a, function(a) {
                    return c(a, ["language", "recognition", "session", "clientlibversion"])
                })
            }
            ;
            b.prototype.isValidForHeaderField = function(a) {
                var b = q.matchesPattern;
                return b(a, /^[\w\-]+$/)
            }
            ;
            Pa([k], b.prototype, "filter", null);
            Pa([k], b.prototype, "isValidRouteMatcher", null);
            Pa([k], b.prototype, "isValidValidationKeys", null);
            Pa([k], b.prototype, "isValidForHeaderField", null);
            return b
        }(v)
          , af = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , bf = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , cf = function(f) {
            function b() {
                return null !== f && f.apply(this, arguments) || this
            }
            af(b, f);
            b.prototype.isValid = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isPositiveInteger
                  , h = q.isUndefinedOr
                  , d = q.isBoolean
                  , f = q.isOneOf
                  , l = q.isArrayWhereEvery;
                return b(a) && c(a.name) && g(a.version) && h(a.dontCleanOldVersions, d(a.dontCleanOldVersions)) && h(a.plugins, l(a.plugins, function(a) {
                    return f(a, ["MaxAge", "ValidationKeys", "Metadata"])
                }))
            }
            ;
            bf([k], b.prototype, "isValid", null);
            return b
        }(Qa)
          , df = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ef = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , ff = function(f) {
            function b() {
                return null !== f && f.apply(this, arguments) || this
            }
            df(b, f);
            b.prototype.isValid = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isURL;
                return b(a) && c(a.name) && g(a.url)
            }
            ;
            ef([k], b.prototype, "isValid", null);
            return b
        }(Qa)
          , gf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , qa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , hf = function(f) {
            function b() {
                return null !== f && f.apply(this, arguments) || this
            }
            gf(b, f);
            b.prototype.isValid = function(a) {
                var b = this
                  , c = q.isObject
                  , g = q.isNonEmptyString
                  , h = q.isNonEmptyArray
                  , d = q.isUndefinedOr
                  , f = q.isArrayWhereEvery;
                return c(a) && g(a.name) && h(a.triggers) && f(a.triggers, function(a) {
                    return b._isValidTrigger(a)
                }) && d(a.transmogs, f(a.transmogs, function(a) {
                    return b._isValidTransmog(a)
                })) && this._isValidStorage(a.storage) && this._isValidFlags(a.flags)
            }
            ;
            b.prototype._isValidTrigger = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString;
                if (!b(a) || !c(a.name) || !c(a.label))
                    return !1;
                switch (a.name) {
                case "ResponseRuleNavigationUpdate":
                    return c(a.responseRuleName);
                case "PrefetchOnRoute":
                    return this.isValidRouteMatcher(a.routeMatcher) && this._isValidPrefetch(a.prefetch);
                default:
                    return !1
                }
            }
            ;
            b.prototype._isValidPrefetch = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isOneOf
                  , h = q.isPositiveInteger;
                return b(a) && c(a.endpoint) && g(a.mode, ["cache-miss", "always"]) && h(a.delay)
            }
            ;
            b.prototype._isValidTransmog = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isUndefinedOr
                  , h = q.isBoolean
                  , d = q.isArrayWhereEvery
                  , f = q.isNonEmptyArray;
                if (!b(a) || !c(a.name))
                    return !1;
                switch (a.name) {
                case "BeforeSingleDelimiter":
                    return c(a.delimiter) && this.isValidForHeaderField(a.delimiterKey) && g(a.inclusive, h(a.inclusive));
                case "EagerLoadJSMarker":
                    return f(a.markers) && d(a.markers, c);
                case "InlinedStylesheet":
                case "ShoppingPortalLoadJSMarker":
                case "SyntheticRequestId":
                    return !0;
                default:
                    return !1
                }
            }
            ;
            b.prototype._isValidStorage = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isPositiveInteger;
                return b(a) && c(a.cacheName) && c(a.cacheKey) && g(a.maxAge) && this.isValidValidationKeys(a.validationKeys)
            }
            ;
            b.prototype._isValidFlags = function(a) {
                var b = q.isObject
                  , c = q.isUndefinedOr
                  , g = q.isArrayWhereEvery
                  , h = q.isOneOf
                  , d = q.isBoolean;
                return c(a, b(a) && g(Object.keys(a), function(a) {
                    return h(a, ["dontCacheAXModeContent"])
                }) && c(a.dontCacheAXModeContent, d(a.dontCacheAXModeContent)))
            }
            ;
            qa([k], b.prototype, "isValid", null);
            qa([k], b.prototype, "_isValidTrigger", null);
            qa([k], b.prototype, "_isValidPrefetch", null);
            qa([k], b.prototype, "_isValidTransmog", null);
            qa([k], b.prototype, "_isValidStorage", null);
            qa([k], b.prototype, "_isValidFlags", null);
            return b
        }(Qa)
          , jf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ra = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , kf = function(f) {
            function b() {
                return null !== f && f.apply(this, arguments) || this
            }
            jf(b, f);
            b.prototype.isValid = function(a) {
                var b = this
                  , c = q.isObject
                  , g = q.isNonEmptyString
                  , h = q.isNonEmptyArray
                  , d = q.isUndefinedOr
                  , f = q.isBoolean
                  , l = q.isArrayWhereEvery;
                return c(a) && g(a.name) && h(a.routeMatchers) && l(a.routeMatchers, function(a) {
                    return b.isValidRouteMatcher(a)
                }) && h(a.levers) && l(a.levers, function(a) {
                    return b._isValidRuleLever(a)
                }) && d(a.weblabTriggers, l(a.weblabTriggers, function(a) {
                    return b._isValidWeblabTrigger(a)
                })) && f(a.respond) && this._isValidResponseStrategy(a.responseStrategy)
            }
            ;
            b.prototype._isValidRuleLever = function(a) {
                var b = q.isNonEmptyString;
                return b(a)
            }
            ;
            b.prototype._isValidWeblabTrigger = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString;
                return b(a) && c(a.name) && c(a.treatment)
            }
            ;
            b.prototype._isValidResponseStrategy = function(a) {
                var b = this
                  , c = q.isObject
                  , g = q.isNonEmptyString
                  , h = q.isUndefinedOr
                  , d = q.isBoolean
                  , f = q.isArrayWhereEvery
                  , l = q.isOneOf;
                if (!c(a) || !g(a.name))
                    return !1;
                switch (a.name) {
                case "SingleDelimiter":
                    return f(a.pageShells, function(a) {
                        return g(a.cacheName) && g(a.cacheKey) && b.isValidValidationKeys(a.validationKeys) && b.isValidForHeaderField(a.delimiterKey) && b._isValidSkeleton(a.skeleton)
                    }) && h(a.noPageShell, c(a.noPageShell) && this._isValidSkeleton(a.noPageShell.skeleton)) && h(a.preloads, f(a.preloads, function(a) {
                        return b._isValidPreload(a)
                    })) && h(a.flags, c(a.flags) && f(Object.keys(a.flags), function(b) {
                        var c = a.flags[b];
                        return l(b, ["passthrough", "flushFullOnMissingDelimiter"]) && h(c, d(c))
                    }));
                case "FullPage":
                    return c(a.cachedPage) && g(a.cachedPage.cacheName) && g(a.cachedPage.cacheKey) && this.isValidValidationKeys(a.cachedPage.validationKeys) && h(a.flags, c(a.flags) && f(Object.keys(a.flags), function(b) {
                        var c = a.flags[b];
                        return l(b, ["skipReload", "skipNonAppStarts"]) && h(c, d(c))
                    }));
                default:
                    return !1
                }
            }
            ;
            b.prototype._isValidSkeleton = function(a) {
                var b = this
                  , c = q.isObject
                  , g = q.isBoolean
                  , h = q.isNonEmptyString
                  , d = q.isPositiveInteger
                  , f = q.isUndefinedOr
                  , l = q.isOneOf
                  , p = q.isArrayWhereEvery;
                return f(a, !!a && c(a) && h(a.name) && f(a.prewarm, l(a.prewarm, ["http-cache", "memory", "none"])) && f(a.race, g(a.race)) && f(a.data, c(a.data)) && c(a.hooks) && p(Object.keys(a.hooks), function(c) {
                    return b._isValidSkeletonHook(a.hooks[c])
                }) && c(a.hooks.remove) && c(a.hooks.remove.whenAny) && d(a.hooks.remove.whenAny.timeout))
            }
            ;
            b.prototype._isValidSkeletonHook = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isPositiveInteger
                  , h = q.isOneOf
                  , d = q.isArrayWhereEvery
                  , f = function(a) {
                    return b(a) && c(a.value) && g(a.delay)
                };
                return d(Object.keys(a), function(b) {
                    var e = a[b];
                    return h(b, ["whenAny"]) && d(Object.keys(e), function(a) {
                        var b = e[a];
                        return "timeout" === a && g(b) || h(a, ["domEvent", "auiModule", "idMatches", "selectorMatches"]) && (c(b) || f(b) || d(b, function(a) {
                            return c(a) || f(a)
                        }))
                    })
                })
            }
            ;
            b.prototype._isValidPreload = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isOneOf
                  , h = q.isUndefinedOr;
                return b(a) && c(a.purpose) && h(a.attribution, c(a.attribution)) && g(a.as, ["script", "style", "font", "image"]) && h(a.fetchPriority, g(a.fetchPriority, ["high", "low", "auto"])) && (c(a.href) || c(a.hrefFromHint))
            }
            ;
            ra([k], b.prototype, "isValid", null);
            ra([k], b.prototype, "_isValidRuleLever", null);
            ra([k], b.prototype, "_isValidWeblabTrigger", null);
            ra([k], b.prototype, "_isValidResponseStrategy", null);
            ra([k], b.prototype, "_isValidSkeleton", null);
            ra([k], b.prototype, "_isValidSkeletonHook", null);
            return b
        }(Qa)
          , lf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Z = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Bb = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Cb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , mf = function(f) {
            function b(a, e, c) {
                var g = f.call(this) || this;
                g._computed = {};
                g.logCtor(arguments);
                g._metricsService = a;
                g._errorLoggingScope = "ContentFragmentService";
                g._memoryCache = new Re(b._MAX_MEMORY_CACHE_ENTRIES);
                g._init(c, e);
                return g
            }
            lf(b, f);
            b.prototype.render = function(a, b, c) {
                return Bb(this, void 0, void 0, function() {
                    var e, h;
                    return Cb(this, function(d) {
                        switch (d.label) {
                        case 0:
                            return e = this._getContentFragmentConfig(b),
                            e ? (h = this._fetchFromMemory(e.name)) ? [3, 2] : [4, this._fetchFromNetwork(a, e)] : [2];
                        case 1:
                            h = d.sent(),
                            d.label = 2;
                        case 2:
                            return h ? [2, (new Ad(a,this._metricsService,b,h,c)).getResponse()] : [2]
                        }
                    })
                })
            }
            ;
            b.prototype.prewarm = function(a, b, c) {
                var e = this
                  , h = this._getContentFragmentConfig(b);
                if (h)
                    switch (c) {
                    case "http-cache":
                    case "memory":
                        t.queueTask(function() {
                            return Bb(e, void 0, void 0, function() {
                                var d;
                                return Cb(this, function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return [4, this._fetchFromNetwork(a, h, !0)];
                                    case 1:
                                        return d = e.sent(),
                                        "memory" === c && this._cacheInMemory(b, d),
                                        [2]
                                    }
                                })
                            })
                        })
                    }
            }
            ;
            b.prototype.notifyEvent = function(a) {
                switch (a.name) {
                case "ContentFragmentSpeculation":
                    this.prewarm(a.detail.eventOptions, a.detail.name, a.detail.prewarm)
                }
            }
            ;
            b.prototype._fetchFromNetwork = function(a, b, c) {
                void 0 === c && (c = !1);
                return Bb(this, void 0, void 0, function() {
                    var e;
                    return Cb(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return g.trys.push([0, 2, , 3]),
                            [4, (new jb(b.url)).getResponse()];
                        case 1:
                            return [2, g.sent()];
                        case 2:
                            return e = g.sent(),
                            this._metricsService.countError(a, e, c ? "".concat(this._errorLoggingScope, ":Prewarming") : this._errorLoggingScope),
                            [2];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._fetchFromMemory = function(a) {
                return (a = this._memoryCache.get(a)) ? a.clone() : void 0
            }
            ;
            b.prototype._cacheInMemory = function(a, b) {
                b && this._memoryCache.set(a, b)
            }
            ;
            b.prototype._getContentFragmentConfig = function(a) {
                return this._computed[a]
            }
            ;
            b.prototype._init = function(a, b) {
                var c = this;
                a.forEach(function(a) {
                    c._computed[a.name] = a
                });
                b.subscribe("ContentFragmentSpeculation", this)
            }
            ;
            b._MAX_MEMORY_CACHE_ENTRIES = 100;
            Z([k], b.prototype, "render", null);
            Z([k], b.prototype, "prewarm", null);
            Z([k], b.prototype, "notifyEvent", null);
            Z([k], b.prototype, "_fetchFromNetwork", null);
            Z([k], b.prototype, "_fetchFromMemory", null);
            Z([k], b.prototype, "_cacheInMemory", null);
            Z([k], b.prototype, "_getContentFragmentConfig", null);
            Z([k], b.prototype, "_init", null);
            return b
        }(v)
          , nf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , sc = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , tc = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , uc = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , of = function(f) {
            function b(a) {
                var b = f.call(this) || this;
                b._swGlobal = a;
                return b
            }
            nf(b, f);
            b.prototype.getCookie = function(a) {
                return tc(this, void 0, void 0, function() {
                    return uc(this, function(b) {
                        if (!Qb.isCookieStoreSupported(this._swGlobal))
                            throw r.create("UnsupportedCookieStoreAPI", {
                                cookie: a
                            }, void 0, void 0, "WARN");
                        return [2, this._swGlobal.cookieStore.get(a)]
                    })
                })
            }
            ;
            b.prototype.getCookieValue = function(a) {
                return tc(this, void 0, void 0, function() {
                    var b;
                    return uc(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, this.getCookie(a)];
                        case 1:
                            return b = c.sent(),
                            [2, b && b.value ? b.value : void 0]
                        }
                    })
                })
            }
            ;
            sc([k], b.prototype, "getCookie", null);
            sc([k], b.prototype, "getCookieValue", null);
            return b
        }(v)
          , pf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Ba = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Db = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Eb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , qf = function(f) {
            function b(a) {
                var b = f.call(this) || this;
                b._cookieProvider = new of(a);
                if (a = T.getCountryCode(a))
                    b._countryCode = a.toLowerCase();
                return b
            }
            pf(b, f);
            b.prototype.getSessionId = function() {
                return Db(this, void 0, void 0, function() {
                    return Eb(this, function(a) {
                        try {
                            return [2, this._cookieProvider.getCookieValue("session-id")]
                        } catch (e) {
                            throw r.create("FailedToRetrieveSessionIdCookie", void 0, e);
                        }
                    })
                })
            }
            ;
            b.prototype.getRecognition = function() {
                return Db(this, void 0, void 0, function() {
                    var a;
                    return Eb(this, function(b) {
                        try {
                            if (!this._countryCode)
                                throw r.create("CountryCodeNotFound");
                            a = this._getRecognitionCookieName();
                            return [2, this._cookieProvider.getCookieValue(a)]
                        } catch (c) {
                            throw r.create("FailedToRetrieveRecognitionCookie", void 0, c);
                        }
                    })
                })
            }
            ;
            b.prototype.getLanguage = function() {
                return Db(this, void 0, void 0, function() {
                    var a;
                    return Eb(this, function(b) {
                        try {
                            if (!this._countryCode)
                                throw r.create("CountryCodeNotFound");
                            a = this._getLanguageCookieName();
                            return [2, this._cookieProvider.getCookieValue(a)]
                        } catch (c) {
                            throw r.create("FailedToRetrieveLanguageCookie", void 0, c);
                        }
                    })
                })
            }
            ;
            b.prototype._getRecognitionCookieName = function() {
                return this._isUSMarketplace() ? "x-main" : "x-acb".concat(this._countryCode)
            }
            ;
            b.prototype._getLanguageCookieName = function() {
                return this._isUSMarketplace() ? "lc-main" : "lc-acb".concat(this._countryCode)
            }
            ;
            b.prototype._isUSMarketplace = function() {
                return this._countryCode === b.US_COUNTRY_CODE
            }
            ;
            b.US_COUNTRY_CODE = "us";
            Ba([k], b.prototype, "getSessionId", null);
            Ba([k], b.prototype, "getRecognition", null);
            Ba([k], b.prototype, "getLanguage", null);
            Ba([k], b.prototype, "_getRecognitionCookieName", null);
            Ba([k], b.prototype, "_getLanguageCookieName", null);
            return b
        }(v)
          , rf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , sa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , sf = function(f) {
            function b() {
                var a = f.call(this) || this;
                a.logCtor(arguments);
                a._subscriptionsByEvents = {};
                a._subscriptionCount = 0;
                return a
            }
            rf(b, f);
            b.prototype.publish = function(a) {
                var b = this
                  , c = this._subscriptionsByEvents[this._getInternalEventName(a.name)];
                c && Object.keys(c).forEach(function(e) {
                    var g = c[e];
                    g.once && b.unsubscribe(e);
                    b._notify(a, g)
                })
            }
            ;
            b.prototype.subscribe = function(a, b, c, g) {
                void 0 === c && (c = "async");
                a = this._getInternalEventName(a);
                var e = this._getUniqueSubscriptionId();
                b = {
                    subscriptionId: e,
                    mode: c,
                    subscriber: b,
                    once: g
                };
                this._subscriptionsByEvents.hasOwnProperty(a) || (this._subscriptionsByEvents[a] = {});
                this._subscriptionsByEvents[a][e] = b;
                return e
            }
            ;
            b.prototype.unsubscribe = function(a) {
                var b = this;
                Object.keys(this._subscriptionsByEvents).forEach(function(c) {
                    var e = b._subscriptionsByEvents[c];
                    Object.keys(e).forEach(function(b) {
                        b === a && delete e[b]
                    })
                })
            }
            ;
            b.prototype._notify = function(a, b) {
                var c = function() {
                    b.subscriber.notifyEvent(a)
                };
                "sync" === b.mode ? c() : t.queueTask(c)
            }
            ;
            b.prototype._getUniqueSubscriptionId = function() {
                return "".concat(this._subscriptionCount++)
            }
            ;
            b.prototype._getInternalEventName = function(a) {
                return "".concat(u.NAMESPACE, ":").concat(a)
            }
            ;
            sa([k], b.prototype, "publish", null);
            sa([k], b.prototype, "subscribe", null);
            sa([k], b.prototype, "unsubscribe", null);
            sa([k], b.prototype, "_notify", null);
            sa([k], b.prototype, "_getUniqueSubscriptionId", null);
            sa([k], b.prototype, "_getInternalEventName", null);
            return b
        }(v)
          , tf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , uf = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , vf = function(f) {
            function b(a, b, c) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e.swGlobal = a;
                e.metricsService = b;
                e.eventBus = c;
                e._initFetchHandling();
                return e
            }
            tf(b, f);
            b.prototype._initFetchHandling = function() {
                var a = this;
                this.swGlobal.addEventListener("fetch", function(b) {
                    if (a.filter(b)) {
                        var c = na.create(b.resultingClientId);
                        a.handle(c, b);
                        a.publishEvent(c, b)
                    }
                })
            }
            ;
            uf([k], b.prototype, "_initFetchHandling", null);
            return b
        }(v)
          , wf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Ra = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , xf = function(f) {
            function b(a, b, c, g, h) {
                var d = f.call(this, a, c, g) || this;
                d.logCtor(arguments);
                d._requireNavigationPreloadSupport = h.usePreloadResponseOnlyForServerResponseOnNavigations;
                d._navigationResponseService = b;
                return d
            }
            wf(b, f);
            b.prototype.filter = function(a) {
                a = a.request;
                var b = a.destination
                  , c = a.method
                  , g = a.isHistoryNavigation;
                return "navigate" === a.mode && "document" === b && "GET" === c && !g
            }
            ;
            b.prototype.handle = function(a, b) {
                this._shouldSkipInterception(a, b) || this._navigationResponseService.respond(a, b)
            }
            ;
            b.prototype.publishEvent = function(a, b) {
                this.eventBus.publish({
                    name: "Navigation",
                    detail: {
                        request: b.request,
                        eventOptions: a
                    }
                })
            }
            ;
            b.prototype._shouldSkipInterception = function(a, b) {
                return this._hasSkipInterceptionUrlSubstring(a, b) || this._hasSkipInterceptUrlParam(a, b) || this._requiresButDoesNotSupportNavigationPreload(b)
            }
            ;
            b.prototype._hasSkipInterceptionUrlSubstring = function(a, b) {
                var c = this;
                (b = -1 < b.request.url.indexOf("lx_bd")) && t.queueTask(function() {
                    var b = Ga.onlyWordChars("lx_bd").substr(0, 50);
                    c.metricsService.tag(a, "".concat("SkipIntercept", ":").concat(b))
                });
                return b
            }
            ;
            b.prototype._hasSkipInterceptUrlParam = function(a, b) {
                var c = this
                  , e = (b = J.parse(b.request.url)) ? x.skipIntercept.getParam(b) : "NoURL";
                e && t.queueTask(function() {
                    var b = Ga.onlyWordChars(e).substr(0, 50);
                    c.metricsService.tag(a, "SkipIntercept");
                    c.metricsService.tag(a, "".concat("SkipIntercept", ":").concat(b))
                });
                return !!e
            }
            ;
            b.prototype._requiresButDoesNotSupportNavigationPreload = function(a) {
                return this._requireNavigationPreloadSupport && !a.preloadResponse
            }
            ;
            Ra([k], b.prototype, "handle", null);
            Ra([k], b.prototype, "publishEvent", null);
            Ra([k], b.prototype, "_hasSkipInterceptUrlParam", null);
            Ra([k], b.prototype, "_requiresButDoesNotSupportNavigationPreload", null);
            return b
        }(vf)
          , yf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , w = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , P = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Q = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , zf = function(f) {
            function b(a, b) {
                var c = f.call(this) || this;
                c.logCtor(arguments);
                c.reset();
                b.subscribe("ClientReady", c);
                c._clientMessagingService = a;
                return c
            }
            yf(b, f);
            b.prototype.reset = function() {
                this._bufferedCounters = [];
                this._bufferedTags = [];
                this._bufferedErrors = [];
                this._bufferedWeblabTriggers = []
            }
            ;
            b.prototype.counter = function(a, b, c) {
                var e = this;
                this._clientMessagingService.isClientReady(a) ? t.queueTask(function() {
                    return P(e, void 0, void 0, function() {
                        var e, d;
                        return Q(this, function(g) {
                            switch (g.label) {
                            case 0:
                                return g.trys.push([0, 2, , 3]),
                                [4, this._getClient(a)];
                            case 1:
                                return e = g.sent(),
                                this._postCounter(e, b, c),
                                [3, 3];
                            case 2:
                                return d = g.sent(),
                                this.log("counter", d.message),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        })
                    })
                }) : this._bufferCounter(a, b, c)
            }
            ;
            b.prototype.tag = function(a, b) {
                var c = this;
                this._clientMessagingService.isClientReady(a) ? t.queueTask(function() {
                    return P(c, void 0, void 0, function() {
                        var c, e;
                        return Q(this, function(d) {
                            switch (d.label) {
                            case 0:
                                return d.trys.push([0, 2, , 3]),
                                [4, this._getClient(a)];
                            case 1:
                                return c = d.sent(),
                                this._postTag(c, b),
                                [3, 3];
                            case 2:
                                return e = d.sent(),
                                this.log("tag", e.message),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        })
                    })
                }) : this._bufferTag(a, b)
            }
            ;
            b.prototype.error = function(a, b, c, g) {
                var e = this;
                this._clientMessagingService.isClientReady(a) ? t.queueTask(function() {
                    return P(e, void 0, void 0, function() {
                        var d, e;
                        return Q(this, function(h) {
                            switch (h.label) {
                            case 0:
                                return h.trys.push([0, 2, , 3]),
                                [4, this._getClient(a)];
                            case 1:
                                return d = h.sent(),
                                this._postError(d, b, c, g),
                                [3, 3];
                            case 2:
                                return e = h.sent(),
                                this.log("tag", e.message),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        })
                    })
                }) : this._bufferError(a, b, c, g)
            }
            ;
            b.prototype.weblabTrigger = function(a, b, c) {
                var e = this;
                this._clientMessagingService.isClientReady(a) ? t.queueTask(function() {
                    return P(e, void 0, void 0, function() {
                        var e, d;
                        return Q(this, function(g) {
                            switch (g.label) {
                            case 0:
                                return g.trys.push([0, 2, , 3]),
                                [4, this._getClient(a)];
                            case 1:
                                return e = g.sent(),
                                this._postWeblabTrigger(e, b, c),
                                [3, 3];
                            case 2:
                                return d = g.sent(),
                                this.log("weblabtrigger", d.message),
                                [3, 3];
                            case 3:
                                return [2]
                            }
                        })
                    })
                }) : this._bufferWeblabTrigger(a, b, c)
            }
            ;
            b.prototype.notifyEvent = function(a) {
                var b = this;
                switch (a.name) {
                case "ClientReady":
                    t.queueTask(function() {
                        return P(b, void 0, void 0, function() {
                            var b, e, h, d = this;
                            return Q(this, function(c) {
                                switch (c.label) {
                                case 0:
                                    return c.trys.push([0, 2, , 3]),
                                    b = a.detail.eventOptions.clientId,
                                    [4, this._getClient(b)];
                                case 1:
                                    return e = c.sent(),
                                    t.queueTask(function() {
                                        d._drainBufferedCounters(e)
                                    }),
                                    t.queueTask(function() {
                                        d._drainBufferedTags(e)
                                    }),
                                    t.queueTask(function() {
                                        d._drainBufferedErrors(e)
                                    }),
                                    t.queueTask(function() {
                                        d._drainBufferedWeblabTriggers(e)
                                    }),
                                    [3, 3];
                                case 2:
                                    return h = c.sent(),
                                    this.log("notifyEvent", h.message),
                                    [3, 3];
                                case 3:
                                    return [2]
                                }
                            })
                        })
                    })
                }
            }
            ;
            b.prototype._bufferCounter = function(a, e, c) {
                ca.pushClamped(this._bufferedCounters, {
                    clientId: a,
                    name: e,
                    value: c
                }, b._MAX_COUNTERS)
            }
            ;
            b.prototype._bufferTag = function(a, e) {
                ca.pushClamped(this._bufferedTags, {
                    clientId: a,
                    name: e
                }, b._MAX_TAGS)
            }
            ;
            b.prototype._bufferError = function(a, e, c, g) {
                ca.pushClamped(this._bufferedErrors, {
                    clientId: a,
                    message: e,
                    attribution: c,
                    level: g
                }, b._MAX_ERRORS)
            }
            ;
            b.prototype._bufferWeblabTrigger = function(a, e, c) {
                ca.pushClamped(this._bufferedWeblabTriggers, {
                    clientId: a,
                    name: e,
                    treatment: c
                }, b._MAX_WEBLAB_TRIGGERS)
            }
            ;
            b.prototype._drainBufferedCounters = function(a) {
                for (var b = this, c = [], g = function(d) {
                    var e = h._bufferedCounters[d];
                    if (a.id !== e.clientId)
                        return c.push(e),
                        "continue";
                    t.queueTask(function() {
                        return P(b, void 0, void 0, function() {
                            return Q(this, function(b) {
                                this._postCounter(a, e.name, e.value);
                                return [2]
                            })
                        })
                    })
                }, h = this, d = 0; d < this._bufferedCounters.length; d++)
                    g(d);
                this._bufferedCounters = c
            }
            ;
            b.prototype._drainBufferedTags = function(a) {
                for (var b = this, c = [], g = function(d) {
                    var e = h._bufferedTags[d];
                    if (a.id !== e.clientId)
                        return c.push(e),
                        "continue";
                    t.queueTask(function() {
                        return P(b, void 0, void 0, function() {
                            return Q(this, function(b) {
                                this._postTag(a, e.name);
                                return [2]
                            })
                        })
                    })
                }, h = this, d = 0; d < this._bufferedTags.length; d++)
                    g(d);
                this._bufferedTags = c
            }
            ;
            b.prototype._drainBufferedErrors = function(a) {
                for (var b = this, c = [], g = function(d) {
                    var e = h._bufferedErrors[d];
                    if (a.id !== e.clientId)
                        return c.push(e),
                        "continue";
                    t.queueTask(function() {
                        return P(b, void 0, void 0, function() {
                            return Q(this, function(b) {
                                this._postError(a, e.message, e.attribution, e.level);
                                return [2]
                            })
                        })
                    })
                }, h = this, d = 0; d < this._bufferedErrors.length; d++)
                    g(d);
                this._bufferedErrors = c
            }
            ;
            b.prototype._drainBufferedWeblabTriggers = function(a) {
                for (var b = this, c = [], g = function(d) {
                    var e = h._bufferedWeblabTriggers[d];
                    if (a.id !== e.clientId)
                        return c.push(e),
                        "continue";
                    t.queueTask(function() {
                        return P(b, void 0, void 0, function() {
                            return Q(this, function(b) {
                                this._postWeblabTrigger(a, e.name, e.treatment);
                                return [2]
                            })
                        })
                    })
                }, h = this, d = 0; d < this._bufferedWeblabTriggers.length; d++)
                    g(d);
                this._bufferedWeblabTriggers = c
            }
            ;
            b.prototype._postCounter = function(a, b, c) {
                b = this._createClientCounterMessage(b, c);
                this._postMessageToClient(a, b)
            }
            ;
            b.prototype._postTag = function(a, b) {
                b = this._createClientTagMessage(b);
                this._postMessageToClient(a, b)
            }
            ;
            b.prototype._postError = function(a, b, c, g) {
                b = this._createClientErrorMessage(b, c, g);
                this._postMessageToClient(a, b)
            }
            ;
            b.prototype._postWeblabTrigger = function(a, b, c) {
                b = this._createClientWeblabTriggerMessage(b, c);
                this._postMessageToClient(a, b)
            }
            ;
            b.prototype._createClientCounterMessage = function(a, e) {
                return {
                    feature: b._MESSAGING_FEATURE,
                    command: b._MESSAGING_COMMAND_COUNTER,
                    data: {
                        name: a,
                        value: e
                    }
                }
            }
            ;
            b.prototype._createClientTagMessage = function(a) {
                return {
                    feature: b._MESSAGING_FEATURE,
                    command: b._MESSAGING_COMMAND_TAG,
                    data: {
                        tag: a
                    }
                }
            }
            ;
            b.prototype._createClientErrorMessage = function(a, e, c) {
                return {
                    feature: b._MESSAGING_FEATURE,
                    command: b._MESSAGING_COMMAND_ERROR,
                    data: {
                        message: a,
                        attribution: e,
                        level: c
                    }
                }
            }
            ;
            b.prototype._createClientWeblabTriggerMessage = function(a, e) {
                return {
                    feature: b._MESSAGING_FEATURE,
                    command: b._MESSAGING_COMMAND_WEBLAB_TRIGGER,
                    data: {
                        weblab: a,
                        treatment: e
                    }
                }
            }
            ;
            b.prototype._postMessageToClient = function(a, b) {
                this._clientMessagingService.postMessageToClient(a, b)
            }
            ;
            b.prototype._getClient = function(a) {
                return P(this, void 0, void 0, function() {
                    return Q(this, function(b) {
                        return [2, this._clientMessagingService.getClient(a)]
                    })
                })
            }
            ;
            b._MAX_COUNTERS = 400;
            b._MAX_TAGS = 100;
            b._MAX_ERRORS = 100;
            b._MAX_WEBLAB_TRIGGERS = 100;
            b._MESSAGING_FEATURE = "retail_service_worker_messaging";
            b._MESSAGING_COMMAND_COUNTER = "log_counter";
            b._MESSAGING_COMMAND_TAG = "log_tag";
            b._MESSAGING_COMMAND_ERROR = "log_error";
            b._MESSAGING_COMMAND_WEBLAB_TRIGGER = "log_weblab_trigger";
            w([k], b.prototype, "reset", null);
            w([k], b.prototype, "counter", null);
            w([k], b.prototype, "tag", null);
            w([k], b.prototype, "error", null);
            w([k], b.prototype, "weblabTrigger", null);
            w([k], b.prototype, "notifyEvent", null);
            w([k], b.prototype, "_bufferCounter", null);
            w([k], b.prototype, "_bufferTag", null);
            w([k], b.prototype, "_bufferError", null);
            w([k], b.prototype, "_bufferWeblabTrigger", null);
            w([k], b.prototype, "_drainBufferedCounters", null);
            w([k], b.prototype, "_drainBufferedTags", null);
            w([k], b.prototype, "_drainBufferedErrors", null);
            w([k], b.prototype, "_drainBufferedWeblabTriggers", null);
            w([k], b.prototype, "_postCounter", null);
            w([k], b.prototype, "_postTag", null);
            w([k], b.prototype, "_postWeblabTrigger", null);
            w([k], b.prototype, "_createClientCounterMessage", null);
            w([k], b.prototype, "_createClientTagMessage", null);
            w([k], b.prototype, "_createClientErrorMessage", null);
            w([k], b.prototype, "_createClientWeblabTriggerMessage", null);
            w([k], b.prototype, "_postMessageToClient", null);
            w([k], b.prototype, "_getClient", null);
            return b
        }(v)
          , Af = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Fb = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Bf = function(f) {
            function b() {
                var a = f.call(this) || this;
                a.logCtor(arguments);
                a._ready = new yb(b._MAX_CLIENTS);
                return a
            }
            Af(b, f);
            b.prototype.isReady = function(a) {
                return this._ready.has(a)
            }
            ;
            b.prototype.markReady = function(a, b) {
                !this.isReady(a) && q.isNonEmptyString(b) && this._ready.set(a, b)
            }
            ;
            b.prototype.getRequestIdForClient = function(a) {
                var b = this._ready.get(a);
                if (b)
                    return b;
                throw r.create("RequestIdMissingInStore", {
                    clientId: a
                });
            }
            ;
            b._MAX_CLIENTS = 50;
            Fb([k], b.prototype, "isReady", null);
            Fb([k], b.prototype, "markReady", null);
            Fb([k], b.prototype, "getRequestIdForClient", null);
            return b
        }(v)
          , Cf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ta = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Gb = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Hb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Df = function(f) {
            function b(a, b) {
                var c = f.call(this) || this;
                c.logCtor(arguments);
                c._globalTelemetryClient = a;
                c._requestIdReadyStore = new Bf;
                c.reset();
                b.subscribe("RequestIdAvailable", c);
                return c
            }
            Cf(b, f);
            b.prototype.reset = function() {
                this._bufferedWeblabTriggers = []
            }
            ;
            b.prototype.weblabTrigger = function(a, b, c) {
                var e = this;
                this._requestIdReadyStore.isReady(a) ? t.queueTask(function() {
                    return Gb(e, void 0, void 0, function() {
                        var e, d;
                        return Hb(this, function(g) {
                            try {
                                e = this._requestIdReadyStore.getRequestIdForClient(a),
                                d = [{
                                    name: b,
                                    treatment: c
                                }],
                                this._postWeblabTrigger(a, d, e)
                            } catch (l) {
                                this.log("weblabtrigger", l.message)
                            }
                            return [2]
                        })
                    })
                }) : this._bufferWeblabTrigger(a, b, c)
            }
            ;
            b.prototype.notifyEvent = function(a) {
                var b = this;
                switch (a.name) {
                case "RequestIdAvailable":
                    t.queueTask(function() {
                        return Gb(b, void 0, void 0, function() {
                            var b, e, h, d = this;
                            return Hb(this, function(c) {
                                try {
                                    b = a.detail.eventOptions.clientId,
                                    e = a.detail.requestId,
                                    this._requestIdReadyStore.markReady(b, e),
                                    h = this._requestIdReadyStore.getRequestIdForClient(b),
                                    t.queueTask(function() {
                                        d._drainBufferedWeblabTriggers(b, h)
                                    })
                                } catch (l) {
                                    this.log("notifyEvent", l.message)
                                }
                                return [2]
                            })
                        })
                    })
                }
            }
            ;
            b.prototype._bufferWeblabTrigger = function(a, e, c) {
                ca.pushClamped(this._bufferedWeblabTriggers, {
                    clientId: a,
                    name: e,
                    treatment: c
                }, b._MAX_WEBLAB_TRIGGERS)
            }
            ;
            b.prototype._drainBufferedWeblabTriggers = function(a, b) {
                for (var c = this, e = [], h = [], d = 0; d < this._bufferedWeblabTriggers.length; d++) {
                    var f = this._bufferedWeblabTriggers[d];
                    a !== f.clientId ? e.push(f) : h.push({
                        name: f.name,
                        treatment: f.treatment
                    })
                }
                0 < h.length && t.queueTask(function() {
                    return Gb(c, void 0, void 0, function() {
                        return Hb(this, function(c) {
                            this._postWeblabTrigger(a, h, b);
                            return [2]
                        })
                    })
                });
                this._bufferedWeblabTriggers = e
            }
            ;
            b.prototype._postWeblabTrigger = function(a, b, c) {
                this._globalTelemetryClient && q.isFunction(this._globalTelemetryClient.trigger) && this._globalTelemetryClient.trigger(b, {
                    clientID: a,
                    requestID: c
                })
            }
            ;
            b._MAX_WEBLAB_TRIGGERS = 100;
            ta([k], b.prototype, "reset", null);
            ta([k], b.prototype, "weblabTrigger", null);
            ta([k], b.prototype, "notifyEvent", null);
            ta([k], b.prototype, "_bufferWeblabTrigger", null);
            ta([k], b.prototype, "_drainBufferedWeblabTriggers", null);
            ta([k], b.prototype, "_postWeblabTrigger", null);
            return b
        }(v)
          , Ef = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ha = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Ff = function(f) {
            function b(a, b, c) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._clientPostbacks = new zf(b,c);
                e._clientPostbacks.reset();
                a.$TM && (e._globalTelemetryClient = a.$TM,
                e._telemetryTriggers = new Df(e._globalTelemetryClient,c),
                e._telemetryTriggers.reset());
                return e
            }
            Ef(b, f);
            b.prototype.count = function(a, b, c) {
                var e = this;
                void 0 === c && (c = 1);
                t.queueTask(function() {
                    var g = e._getFormattedName(b);
                    e._globalTelemetryClient && q.isFunction(e._globalTelemetryClient.count) ? e._globalTelemetryClient.count(g, c, {
                        clientID: a.clientId
                    }) : e._clientPostbacks.counter(a.clientId, g, c)
                })
            }
            ;
            b.prototype.mark = function(a, b, c) {
                var e = G.getPerfNow();
                this.count(a, b, e - (c ? c : a.timeOriginPerfNow))
            }
            ;
            b.prototype.tag = function(a, b) {
                var c = this;
                t.queueTask(function() {
                    var e = c._getFormattedName(b);
                    c._clientPostbacks.tag(a.clientId, e)
                })
            }
            ;
            b.prototype.error = function(a, b, c, g) {
                var e = this;
                t.queueTask(function() {
                    if (e._globalTelemetryClient && q.isFunction(e._globalTelemetryClient.error)) {
                        var d = u.BRAZIL_NAME + (c ? ":".concat(c) : "")
                          , h = null !== g && void 0 !== g ? g : b.logLevel || "FATAL"
                          , f = Object.keys(a.errorContext).map(function(b) {
                            return "".concat(b, " \x3d ").concat(a.errorContext[b])
                        }).join("\n\n");
                        e._globalTelemetryClient.error(b, h, d, f)
                    } else
                        e.countError(a, r.create("MissingDependencyTelemetry"))
                })
            }
            ;
            b.prototype.countError = function(a, b, c) {
                var e = this;
                t.queueTask(function() {
                    var g = b.code
                      , d = b.name;
                    d = g ? "".concat(d, ":").concat(g) : d;
                    d = c ? "".concat(d, ":").concat(c) : d;
                    e.count(a, "Error:".concat(d), 1)
                })
            }
            ;
            b.prototype.weblabTrigger = function(a, b, c, g) {
                var e = this;
                void 0 === g && (g = !1);
                t.queueTask(function() {
                    g && e._telemetryTriggers ? (e._telemetryTriggers.weblabTrigger(a.clientId, b, c),
                    e.count(a, "triggerintent:direct:".concat(b, ":").concat(c))) : (e._clientPostbacks.weblabTrigger(a.clientId, b, c),
                    e.count(a, "triggerintent:ue:".concat(b, ":").concat(c)))
                })
            }
            ;
            b.prototype._getFormattedName = function(a) {
                return Ea.format(a)
            }
            ;
            ha([k], b.prototype, "count", null);
            ha([k], b.prototype, "mark", null);
            ha([k], b.prototype, "tag", null);
            ha([k], b.prototype, "error", null);
            ha([k], b.prototype, "countError", null);
            ha([k], b.prototype, "weblabTrigger", null);
            ha([k], b.prototype, "_getFormattedName", null);
            return b
        }(v)
          , Gf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Sa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Ib = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Jb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, n;
            return n = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n
        }
          , Hf = function(f) {
            function b(a, e) {
                var c = f.call(this) || this;
                c.logCtor(arguments);
                c._metricsService = e;
                c._store = new yb(b._MAX_HINT_TARGETS);
                c._errorLoggingScope = "NavigationContentHintsStore";
                return c
            }
            Gf(b, f);
            b.prototype.read = function(a, b) {
                return Ib(this, void 0, void 0, function() {
                    var c, e, h;
                    return Jb(this, function(d) {
                        switch (d.label) {
                        case 0:
                            return d.trys.push([0, 2, , 3]),
                            [4, this._getCustomerContext()];
                        case 1:
                            return c = d.sent(),
                            [2, this._readFromStore(b, c)];
                        case 2:
                            return e = d.sent(),
                            h = A.matchesSignature(e, F.NETWORK_ERROR),
                            A.matchesCode(e, "UnsupportedCookieStoreAPI") || this._metricsService.error(a, r.create("RenderingHintsReadFailed", {
                                target: b
                            }, e), this._errorLoggingScope, h ? "ERROR" : void 0),
                            [2, {}];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype.write = function(a, b, c, g) {
                return Ib(this, void 0, void 0, function() {
                    var e, d, f, l;
                    return Jb(this, function(h) {
                        switch (h.label) {
                        case 0:
                            return h.trys.push([0, 2, , 3]),
                            [4, this._getCustomerContext()];
                        case 1:
                            return e = h.sent(),
                            d = Za.resolveAdsRedirects(b),
                            this._writeToStore(d, c, g, e),
                            [3, 3];
                        case 2:
                            f = h.sent();
                            l = A.matchesSignature(f, F.NETWORK_ERROR);
                            if (A.matchesCode(f, "UnsupportedCookieStoreAPI"))
                                return [2];
                            this._metricsService.error(a, r.create("RenderingHintsWriteFailed", {
                                target: b
                            }, f), this._errorLoggingScope, l ? "ERROR" : void 0);
                            return [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ;
            b.prototype._readFromStore = function(a, b) {
                var c = this._store.get(a) || {}
                  , e = {};
                Object.keys(c).filter(function(a) {
                    return Object.keys(c[a].validity).every(function(d) {
                        return c[a].validity[d] === b[d]
                    })
                }).forEach(function(a) {
                    var b = c[a];
                    e[a] = {
                        value: b.value,
                        source: b.source
                    }
                });
                return e
            }
            ;
            b.prototype._writeToStore = function(a, b, c, g) {
                var e = this._store.get(a) || {};
                Object.keys(b).forEach(function(a) {
                    e[a] = {
                        value: b[a],
                        validity: g,
                        source: c
                    }
                });
                this._store.set(a, e)
            }
            ;
            b.prototype._getCustomerContext = function() {
                return Ib(this, void 0, void 0, function() {
                    return Jb(this, function(a) {
                        return [2, {
                            session: "unknown",
                            recognition: "unknown",
                            language: "unknown"
                        }]
                    })
                })
            }
            ;
            b._MAX_HINT_TARGETS = 500;
            Sa([k], b.prototype, "write", null);
            Sa([k], b.prototype, "_readFromStore", null);
            Sa([k], b.prototype, "_writeToStore", null);
            Sa([k], b.prototype, "_getCustomerContext", null);
            return b
        }(v)
          , If = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Kb = this && this.__assign || function() {
            Kb = Object.assign || function(f) {
                for (var b, a = 1, e = arguments.length; a < e; a++) {
                    b = arguments[a];
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (f[c] = b[c])
                }
                return f
            }
            ;
            return Kb.apply(this, arguments)
        }
          , Ta = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Lb = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Mb = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }
            ),
            k
        }
          , Jf = function(f) {
            function b(a, b, c) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._navigationContentHintsStore = new Hf(a,b);
                c.subscribe("RenderingHints", e);
                return e
            }
            If(b, f);
            b.prototype.getHints = function(a, b) {
                return Lb(this, void 0, void 0, function() {
                    var c;
                    return Mb(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this._navigationContentHintsStore.read(a, b)];
                        case 1:
                            return c = e.sent(),
                            [2, Kb({}, c)]
                        }
                    })
                })
            }
            ;
            b.prototype.getHintsDataOnly = function(a, b) {
                return Lb(this, void 0, void 0, function() {
                    var c, e;
                    return Mb(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return [4, this.getHints(a, b)];
                        case 1:
                            return c = g.sent(),
                            e = {},
                            Object.keys(c).forEach(function(a) {
                                e[a] = c[a].value
                            }),
                            [2, e]
                        }
                    })
                })
            }
            ;
            b.prototype.notifyEvent = function(a) {
                var b = this;
                "RenderingHints" === a.name && a.detail && this._filterValidRenderingHintsEventOptions(a.detail.options).forEach(function(c) {
                    switch (c.nature) {
                    case "speculated_navigation_content":
                        t.queueTask(function() {
                            return Lb(b, void 0, void 0, function() {
                                return Mb(this, function(b) {
                                    switch (b.label) {
                                    case 0:
                                        return [4, this._navigationContentHintsStore.write(a.detail.eventOptions, c.target, c.data, c.source)];
                                    case 1:
                                        return b.sent(),
                                        [2]
                                    }
                                })
                            })
                        });
                        break;
                    default:
                        b.log("notifyEvent", "Ignoring hint with unknown nature: ".concat(c.nature))
                    }
                })
            }
            ;
            b.prototype._filterValidRenderingHintsEventOptions = function(a) {
                var b = q.isObject
                  , c = q.isNonEmptyString
                  , g = q.isOneOf;
                return a.filter(function(a) {
                    return b(a) && g(a.nature, ["speculated_navigation_content"]) && c(a.target) && b(a.data) && b(a.source)
                })
            }
            ;
            Ta([k], b.prototype, "getHints", null);
            Ta([k], b.prototype, "getHintsDataOnly", null);
            Ta([k], b.prototype, "notifyEvent", null);
            Ta([k], b.prototype, "_filterValidRenderingHintsEventOptions", null);
            return b
        }(v)
          , Kf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , ia = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Lf = function(f) {
            function b(a, b, c, g) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._eventOptions = b;
                e._metricsService = a;
                e._responseStrategyName = c;
                e._responseRuleName = g;
                e._errorLoggingScope = "".concat(e._responseStrategyName, "ResponseStrategy");
                return e
            }
            Kf(b, f);
            b.prototype.getMetricName = function(a) {
                return "".concat(this._responseRuleName, ":").concat(this._responseStrategyName, ":").concat(a)
            }
            ;
            b.prototype.logCount = function(a, b) {
                this._metricsService.count(this._eventOptions, this.getMetricName(a), b)
            }
            ;
            b.prototype.logMark = function(a) {
                this._metricsService.mark(this._eventOptions, this.getMetricName(a))
            }
            ;
            b.prototype.logTag = function(a) {
                this._metricsService.tag(this._eventOptions, this.getMetricName(a))
            }
            ;
            b.prototype.logTagAndCount = function(a) {
                this.logTag(a);
                this.logCount(a)
            }
            ;
            b.prototype.logCountError = function(a) {
                this._metricsService.countError(this._eventOptions, a, this._errorLoggingScope)
            }
            ;
            b.prototype.logError = function(a, b) {
                this._metricsService.error(this._eventOptions, a, this._errorLoggingScope, b)
            }
            ;
            ia([k], b.prototype, "getMetricName", null);
            ia([k], b.prototype, "logCount", null);
            ia([k], b.prototype, "logMark", null);
            ia([k], b.prototype, "logTag", null);
            ia([k], b.prototype, "logTagAndCount", null);
            ia([k], b.prototype, "logCountError", null);
            ia([k], b.prototype, "logError", null);
            return b
        }(v)
          , Mf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , aa = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , ua = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , va = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }
            ),
            k
        }
          , vc = function(f) {
            function b(a, b, c, g) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._metricsService = a;
                e._metricsHelper = b;
                e._responseRuleName = g;
                e._eventBus = c;
                return e
            }
            Mf(b, f);
            b.prototype.fetchServerResponse = function(a, b) {
                return ua(this, void 0, void 0, function() {
                    return va(this, function(c) {
                        return [2, b ? Fa.getResponseWithoutRelay(a) : Fa.getResponseWithRelay(a)]
                    })
                })
            }
            ;
            b.prototype.readServerResponse = function(a, b, c, g, h, d) {
                void 0 === g && (g = "unknown");
                return ua(this, void 0, void 0, function() {
                    var e, f, k, m;
                    return va(this, function(l) {
                        switch (l.label) {
                        case 0:
                            return l.trys.push([0, 2, , 3]),
                            [4, c];
                        case 1:
                            return e = l.sent(),
                            [3, 3];
                        case 2:
                            f = l.sent();
                            if (A.matchesCode(f, "PreloadResponseUnexpected")) {
                                this._logError(f);
                                if (!d)
                                    throw f;
                                return [2, this._getReloadBypassFallbackContent(a, b, h, "prx_".concat(g))]
                            }
                            if (A.matchesCode(f, "PreloadResponseUnsupported")) {
                                this._logError(f);
                                if (!d)
                                    throw f;
                                return [2, this._getErrorFallbackContent(a, b, h, "pru_".concat(g))]
                            }
                            k = r.create("FailedToFetch", void 0, f);
                            this._logError(k, "ERROR");
                            if (!d)
                                throw k;
                            return [2, this._getErrorFallbackContent(a, b, h, "flf_".concat(g))];
                        case 3:
                            if (!(e instanceof Response)) {
                                m = r.create("ResponseInvalid");
                                this._logError(m);
                                if (!d)
                                    throw m;
                                return [2, this._getErrorFallbackContent(a, b, h, "riv_".concat(g))]
                            }
                            if ("opaqueredirect" === e.type)
                                return [2, h ? {
                                    unrecoverable: !0,
                                    parseable: !1,
                                    response: e
                                } : this._getReloadBypassFallbackContent(a, b, h, "opr_".concat(g))];
                            this._extractAndPublishRequestId(b, e);
                            return 200 !== e.status ? [2, {
                                unrecoverable: !1,
                                parseable: !1,
                                response: e
                            }] : [2, {
                                unrecoverable: !1,
                                parseable: !0,
                                response: e
                            }]
                        }
                    })
                })
            }
            ;
            b.prototype._getErrorFallbackContent = function(a, b, c, g) {
                return ua(this, void 0, void 0, function() {
                    var e, d;
                    return va(this, function(h) {
                        switch (h.label) {
                        case 0:
                            if (!T.isMShop())
                                return [3, 2];
                            d = {
                                unrecoverable: !0,
                                parseable: !1
                            };
                            return [4, this._getAppErrorFragment(a, b)];
                        case 1:
                            return e = (d.response = h.sent(),
                            d),
                            [3, 3];
                        case 2:
                            e = this._getReloadBypassFallbackContent(a, b, c, g),
                            h.label = 3;
                        case 3:
                            return [2, e]
                        }
                    })
                })
            }
            ;
            b.prototype._getReloadBypassFallbackContent = function(a, b, c, g) {
                return ua(this, void 0, void 0, function() {
                    var e;
                    return va(this, function(d) {
                        switch (d.label) {
                        case 0:
                            return e = {
                                unrecoverable: !0,
                                parseable: !1
                            },
                            [4, this._getReloadBypassFragment(a, b, c, g)];
                        case 1:
                            return [2, (e.response = d.sent(),
                            e)]
                        }
                    })
                })
            }
            ;
            b.prototype._getAppErrorFragment = function(a, b) {
                return ua(this, void 0, void 0, function() {
                    return va(this, function(c) {
                        this._metricsHelper.logCount("Emit:AppErrorFragment");
                        return [2, (new de(b,this._metricsService,a.request.url,"-1","net::ERR_FAILED",a.request.referrer)).getResponse()]
                    })
                })
            }
            ;
            b.prototype._getReloadBypassFragment = function(a, b, c, g) {
                return ua(this, void 0, void 0, function() {
                    return va(this, function(e) {
                        this._metricsHelper.logCount("Emit:ReloadFragment");
                        return [2, (new ve(b,this._metricsService,a.request.url,c,!0,"erf_".concat(this._responseRuleName, "_").concat(g))).getResponse()]
                    })
                })
            }
            ;
            b.prototype._logError = function(a, b) {
                var c = this;
                t.queueTask(function() {
                    c._metricsHelper.logError(a, b);
                    c._metricsHelper.logCountError(a)
                })
            }
            ;
            b.prototype._extractAndPublishRequestId = function(a, b) {
                var c = this
                  , e = b.headers.get(x.shared.REQUEST_ID_OPF_HEADER);
                e && q.isNonEmptyString(e) ? t.queueTask(function() {
                    c._eventBus.publish({
                        name: "RequestIdAvailable",
                        detail: {
                            eventOptions: a,
                            requestId: e
                        }
                    })
                }) : this._metricsHelper.logCount("RIDHeader:Missing")
            }
            ;
            aa([k], b.prototype, "fetchServerResponse", null);
            aa([k], b.prototype, "readServerResponse", null);
            aa([k], b.prototype, "_getErrorFallbackContent", null);
            aa([k], b.prototype, "_getReloadBypassFallbackContent", null);
            aa([k], b.prototype, "_getAppErrorFragment", null);
            aa([k], b.prototype, "_getReloadBypassFragment", null);
            aa([k], b.prototype, "_logError", null);
            aa([k], b.prototype, "_extractAndPublishRequestId", null);
            return b
        }(v)
          , Nf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Nb = this && this.__assign || function() {
            Nb = Object.assign || function(f) {
                for (var b, a = 1, e = arguments.length; a < e; a++) {
                    b = arguments[a];
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (f[c] = b[c])
                }
                return f
            }
            ;
            return Nb.apply(this, arguments)
        }
          , ba = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , wc = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , xc = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }
            ),
            k
        }
          , Of = function(f) {
            function b(a, b, c, g, h) {
                var d = f.call(this) || this;
                d.logCtor(arguments);
                d._renderingHintsService = a;
                d._metricsHelper = b;
                d._event = c;
                d._eventOptions = g;
                d._preloadConfig = h || [];
                return d
            }
            Nf(b, f);
            b.prototype.getHeadersWithPreload = function(a) {
                return wc(this, void 0, void 0, function() {
                    var b, c;
                    return xc(this, function(e) {
                        switch (e.label) {
                        case 0:
                            if (!this._preloadConfig.length)
                                return [2, a];
                            b = [];
                            c = [];
                            this._sortConfig(b, c);
                            return c.length ? [4, this._resolveHints(b, c)] : [2, this._getOutputHeaders(b, a)];
                        case 1:
                            return e.sent(),
                            [2, this._getOutputHeaders(b, a)]
                        }
                    })
                })
            }
            ;
            b.prototype.hasPreload = function() {
                return 0 < this._preloadConfig.length
            }
            ;
            b.prototype._sortConfig = function(a, b) {
                this._preloadConfig.forEach(function(c) {
                    "href"in c ? a.push(c) : "hrefFromHint"in c && b.push(c)
                })
            }
            ;
            b.prototype._resolveHints = function(a, b) {
                return wc(this, void 0, void 0, function() {
                    var c, e = this;
                    return xc(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return [4, this._renderingHintsService.getHints(this._eventOptions, this._event.request.url)];
                        case 1:
                            return c = g.sent(),
                            b.forEach(function(b) {
                                var d = b.purpose
                                  , g = b.attribution
                                  , h = b.hrefFromHint
                                  , f = b.as;
                                b = b.fetchPriority;
                                if (c.hasOwnProperty(h)) {
                                    var k = J.parse(String(c[h].value));
                                    k ? a.push({
                                        purpose: d,
                                        href: k.href,
                                        as: f,
                                        fetchPriority: b,
                                        attribution: e._getAttribution(g, c[h].source)
                                    }) : e._metricsHelper.logCountError(r.create("PreloadHintInvalidURL"))
                                } else
                                    e._metricsHelper.logCount("PreloadHintMissing")
                            }),
                            [2]
                        }
                    })
                })
            }
            ;
            b.prototype._getOutputHeaders = function(a, e) {
                var c = this
                  , g = new Headers(e)
                  , h = {};
                a.forEach(function(a) {
                    h[a.href] ? c.log("_getOutputHeaders", "Preload with same URL already issued, ignoring: ".concat(a.href)) : (h[a.href] = !0,
                    g.append(b._PRELOAD_HEADER_NAME, c._getLinkHeaderValue(a)),
                    g.append(b._SERVER_TIMING_HEADER_NAME, c._getServerTimingHeaderValue(a)))
                });
                return g
            }
            ;
            b.prototype._getLinkHeaderValue = function(a) {
                var b = a.as
                  , c = a.fetchPriority;
                a = "\x3c".concat(a.href, '\x3e; rel\x3d"preload"; as\x3d"').concat(b, '"');
                c && (a = "".concat(a, '; fetchpriority\x3d"').concat(c, '"'));
                return a
            }
            ;
            b.prototype._getServerTimingHeaderValue = function(a) {
                a = I.serialize(Nb({
                    role: b._SERVER_TIME_RECORD_ROLE
                }, a));
                return "".concat(u.NAMESPACE_LCASE, ';desc\x3d"').concat(K.encodeRFC3986(a), '"')
            }
            ;
            b.prototype._getAttribution = function(a, b) {
                return [a, b && b.pty].filter(q.isNonEmptyString).join(":").toLowerCase()
            }
            ;
            b._PRELOAD_HEADER_NAME = "Link";
            b._SERVER_TIMING_HEADER_NAME = "Server-Timing";
            b._SERVER_TIME_RECORD_ROLE = "rendering-hints/preload";
            ba([k], b.prototype, "getHeadersWithPreload", null);
            ba([k], b.prototype, "hasPreload", null);
            ba([k], b.prototype, "_sortConfig", null);
            ba([k], b.prototype, "_resolveHints", null);
            ba([k], b.prototype, "_getOutputHeaders", null);
            ba([k], b.prototype, "_getLinkHeaderValue", null);
            ba([k], b.prototype, "_getServerTimingHeaderValue", null);
            ba([k], b.prototype, "_getAttribution", null);
            return b
        }(v)
          , Pf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Qf = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Rf = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Sf = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }
            ),
            k
        }
          , yc = function(f) {
            function b(a, b, c, g, h, d, k, l, p) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e.name = a;
                e.customerContextService = b;
                e.cacheService = c;
                e.metricsService = g;
                e.contentFragmentService = h;
                e.renderingHintsService = d;
                e.eventBus = k;
                e.eventOptions = l;
                e.responseRuleName = p;
                e.metricsHelper = new Lf(g,l,e.name,p);
                return e
            }
            Pf(b, f);
            b.prototype.getResponse = function() {
                return Rf(this, void 0, void 0, function() {
                    var a = this;
                    return Sf(this, function(b) {
                        t.queueTask(function() {
                            a.metricsHelper.logTagAndCount("Execute")
                        });
                        return [2, this.build()]
                    })
                })
            }
            ;
            Qf([k], b.prototype, "getResponse", null);
            return b
        }(v)
          , Tf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Ca = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , Uf = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , Vf = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }
            ),
            k
        }
          , Wf = function(f) {
            function b(a, b, c, g, h, d) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._customerContextService = a;
                e._cacheService = b;
                e._metricsHelper = c;
                e._eventBus = g;
                e._eventOptions = h;
                e._responseRuleName = d;
                return e
            }
            Tf(b, f);
            b.prototype.getCachedPageFromCache = function(a) {
                return Uf(this, void 0, void 0, function() {
                    var b, c, g, f, d, k, l;
                    return Vf(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return b = a.cacheName,
                            c = a.cacheKey,
                            g = a.validationKeys,
                            d = (f = this._cacheService).read,
                            k = [this._eventOptions, b, c],
                            l = {},
                            [4, (new La(this._customerContextService)).compute(g)];
                        case 1:
                            return [2, d.apply(f, k.concat([(l.validationKeys = e.sent(),
                            l)]))]
                        }
                    })
                })
            }
            ;
            b.prototype.getFilteredCachedPageHeaders = function(a) {
                return x.shared.removeLibHeaders(a.headers)
            }
            ;
            b.prototype.getCachedPageMetadata = function(a) {
                return (a = (a = (a = a.headers.get(x.shared.getClientOnlyLibHeader("metadata"))) ? K.decode(a) : void 0) ? I.deserialize(a) : void 0) ? {
                    attribution: a.attribution || "unknown",
                    staleness: "number" === typeof a.requestStartTimestampSeconds ? G.getEpochSeconds(this._eventOptions.timeOriginEpoch) - a.requestStartTimestampSeconds : void 0
                } : {
                    attribution: "unknown"
                }
            }
            ;
            b.prototype.queueCachedPageMetadataMetrics = function(a) {
                var b = this;
                t.queueTask(function() {
                    var c = b.getCachedPageMetadata(a);
                    b._metricsHelper.logTagAndCount("CachePopAttribution:".concat(c.attribution));
                    c.staleness && b._metricsHelper.logCount("CachedPageStaleness", c.staleness)
                })
            }
            ;
            b.prototype.queueCachedPageUpdate = function(a, b) {
                var c = this;
                t.queueTask(function() {
                    c._metricsHelper.logCount("Queue:CachedPageUpdate");
                    c._metricsHelper.logCount("Queue:CachedPageUpdate:".concat(b ? "OnHit" : "OnMiss"));
                    c._eventBus.publish({
                        name: "ResponseRuleNavigation",
                        detail: {
                            eventOptions: c._eventOptions,
                            serverResponse: a,
                            ruleName: c._responseRuleName
                        }
                    })
                })
            }
            ;
            Ca([k], b.prototype, "getCachedPageFromCache", null);
            Ca([k], b.prototype, "getFilteredCachedPageHeaders", null);
            Ca([k], b.prototype, "getCachedPageMetadata", null);
            Ca([k], b.prototype, "queueCachedPageMetadataMetrics", null);
            Ca([k], b.prototype, "queueCachedPageUpdate", null);
            return b
        }(v)
          , Xf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , S = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , ja = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        l(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        l(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function l(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                l((e = e.apply(f, b || [])).next())
            }
            )
        }
          , ka = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }
            ),
            k
        }
          , Yf = function(f) {
            function b(a, b, c, g, h, d, k, l, p, m, q) {
                var e = f.call(this, "FullPage", a, b, c, g, h, d, l, m) || this;
                e.logCtor(arguments);
                e._event = k;
                e._usePreloadResponseOnly = p;
                e._cachedPageConfig = q;
                e._cachedPageController = new Wf(a,b,e.metricsHelper,d,l,m);
                e._serverResponseController = new vc(c,e.metricsHelper,d,m);
                return e
            }
            Xf(b, f);
            b.prototype.build = function() {
                return ja(this, void 0, void 0, function() {
                    var a, b, c, g, f, d = this;
                    return ka(this, function(e) {
                        switch (e.label) {
                        case 0:
                            a = this._serverResponseController.fetchServerResponse(this._event, this._usePreloadResponseOnly),
                            this.metricsHelper.logMark("Query:CachedPage"),
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]),
                            [4, this._cachedPageController.getCachedPageFromCache(this._cachedPageConfig)];
                        case 2:
                            return b = e.sent(),
                            [3, 4];
                        case 3:
                            return c = e.sent(),
                            t.queueTask(function() {
                                d.metricsHelper.logError(c);
                                d.metricsHelper.logCountError(c);
                                d.metricsHelper.logTagAndCount("CachedPageCacheMiss:CacheError")
                            }),
                            [3, 4];
                        case 4:
                            return this.metricsHelper.logMark("Arrived:CachedPage"),
                            t.queueTask(function() {
                                d.metricsHelper.logTagAndCount("CachedPageCache".concat(b ? "Hit" : "Miss"))
                            }),
                            b ? (this._cachedPageController.queueCachedPageMetadataMetrics(b),
                            [2, this._getCachedPageAssembledResponse(b, a)]) : [4, this._serverResponseController.readServerResponse(this._event, this.eventOptions, a, "fprs", !0, !0)];
                        case 5:
                            return g = e.sent(),
                            this.metricsHelper.logMark("Arrived:ServerResponse"),
                            g.parseable && (f = g.response.clone(),
                            this._cachedPageController.queueCachedPageUpdate(f, !1)),
                            [2, g.response]
                        }
                    })
                })
            }
            ;
            b.prototype._getCachedPageAssembledResponse = function(a, b) {
                return ja(this, void 0, void 0, function() {
                    return ka(this, function(c) {
                        return [2, new Response(this._getAssembledResponseOutputStream(a, b),this._getAssembledResponseInit(a))]
                    })
                })
            }
            ;
            b.prototype._getAssembledResponseInit = function(a) {
                return {
                    status: 200,
                    statusText: "OK",
                    headers: this._cachedPageController.getFilteredCachedPageHeaders(a)
                }
            }
            ;
            b.prototype._getAssembledResponseOutputStream = function(a, b) {
                var c = this;
                return new ReadableStream({
                    start: function(e) {
                        return ja(c, void 0, void 0, function() {
                            var c, d, g, f, k, m, q, r, t, u, N, v;
                            return ka(this, function(h) {
                                switch (h.label) {
                                case 0:
                                    c = new Jc,
                                    this._event.waitUntil(c.promise),
                                    h.label = 1;
                                case 1:
                                    return h.trys.push([1, 13, 14, 15]),
                                    d = this._toOutputStream("CachedPage", a, e),
                                    g = this._serverResponseController.readServerResponse(this._event, this.eventOptions, b, "fprs", !1, !0),
                                    [4, d];
                                case 2:
                                    return h.sent(),
                                    f = this._toOutputStream,
                                    k = ["PageMetadata"],
                                    [4, this._getPageMetadataFragment(a)];
                                case 3:
                                    return [4, f.apply(this, k.concat([h.sent(), e]))];
                                case 4:
                                    h.sent();
                                    if (!O.isDebug)
                                        return [3, 7];
                                    m = this._toOutputStream;
                                    q = ["DebugInfo"];
                                    return [4, this._getDebugInfoFragment()];
                                case 5:
                                    return [4, m.apply(this, q.concat([h.sent(), e]))];
                                case 6:
                                    h.sent(),
                                    h.label = 7;
                                case 7:
                                    return [4, g];
                                case 8:
                                    return r = h.sent(),
                                    t = r.unrecoverable,
                                    u = r.parseable,
                                    N = r.response,
                                    this.metricsHelper.logMark("Arrived:ServerResponse"),
                                    "opaqueredirect" !== N.type ? [3, 10] : [4, this._toOutputStream("ServerResponse", N, e)];
                                case 9:
                                    return h.sent(),
                                    e.close(),
                                    [2];
                                case 10:
                                    e.close();
                                    this.metricsHelper.logTagAndCount("ServerResponseStatus:".concat(N.status));
                                    if (t || !u)
                                        return [3, 12];
                                    this._cachedPageController.queueCachedPageUpdate(N, !0);
                                    return [4, this._drainResponseClone(N)];
                                case 11:
                                    h.sent(),
                                    h.label = 12;
                                case 12:
                                    return [3, 15];
                                case 13:
                                    throw v = h.sent(),
                                    e.close(),
                                    this.metricsHelper.logError(v),
                                    this.metricsHelper.logCountError(v),
                                    v;
                                case 14:
                                    return c.resolveWith(),
                                    [7];
                                case 15:
                                    return [2]
                                }
                            })
                        })
                    }
                })
            }
            ;
            b.prototype._drainResponseClone = function(a) {
                return ja(this, void 0, void 0, function() {
                    var b;
                    return ka(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return b = a.clone(),
                            [4, b.text()];
                        case 1:
                            return c.sent(),
                            [2]
                        }
                    })
                })
            }
            ;
            b.prototype._toOutputStream = function(a, b, c) {
                return ja(this, void 0, void 0, function() {
                    var e = this;
                    return ka(this, function(g) {
                        switch (g.label) {
                        case 0:
                            if (!(b.body instanceof ReadableStream))
                                throw r.create("ResponseBodyInvalid");
                            return [4, ma.drain(b.body, function(a) {
                                e._processChunk(a, c)
                            })];
                        case 1:
                            return g.sent(),
                            this.metricsHelper.logMark("Flushed:".concat(a)),
                            [2]
                        }
                    })
                })
            }
            ;
            b.prototype._processChunk = function(a, b) {
                b.enqueue(a)
            }
            ;
            b.prototype._getPageMetadataFragment = function(a) {
                return ja(this, void 0, void 0, function() {
                    var b, c;
                    return ka(this, function(e) {
                        b = this._cachedPageController.getCachedPageMetadata(a);
                        c = {
                            attribution: b.attribution,
                            staleness: b.staleness
                        };
                        return [2, (new gc(this.eventOptions,this.metricsService,this.responseRuleName,this.name,c)).getResponse()]
                    })
                })
            }
            ;
            b.prototype._getDebugInfoFragment = function() {
                return ja(this, void 0, void 0, function() {
                    return ka(this, function(a) {
                        return [2, (new dc(this.eventOptions,this.metricsService,this._event.request.url)).getResponse()]
                    })
                })
            }
            ;
            S([k], b.prototype, "build", null);
            S([k], b.prototype, "_getCachedPageAssembledResponse", null);
            S([k], b.prototype, "_getAssembledResponseInit", null);
            S([k], b.prototype, "_getAssembledResponseOutputStream", null);
            S([k], b.prototype, "_drainResponseClone", null);
            S([k], b.prototype, "_toOutputStream", null);
            S([k], b.prototype, "_processChunk", null);
            S([k], b.prototype, "_getPageMetadataFragment", null);
            S([k], b.prototype, "_getDebugInfoFragment", null);
            return b
        }(yc)
          , Zf = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Da = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , $f = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        k(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        k(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function k(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                k((e = e.apply(f, b || [])).next())
            }
            )
        }
          , ag = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }
            ),
            k
        }
          , bg = function(f) {
            function b(a, b, c, g, h, d) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e._customerContextService = a;
                e._cacheService = b;
                e._metricsHelper = c;
                e._eventBus = g;
                e._eventOptions = h;
                e._responseRuleName = d;
                return e
            }
            Zf(b, f);
            b.prototype.getPageShellFromCache = function(a) {
                return $f(this, void 0, void 0, function() {
                    var b, c, g, f, d, k, l, p, m, q, r, u, v = this;
                    return ag(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return b = a.cacheName,
                            c = a.cacheKey,
                            g = a.validationKeys,
                            f = a.delimiterKey,
                            d = a.skeleton,
                            p = (l = this._cacheService).read,
                            m = [this._eventOptions, b, c],
                            u = {},
                            [4, (new La(this._customerContextService)).compute(g)];
                        case 1:
                            return [4, p.apply(l, m.concat([(u.validationKeys = e.sent(),
                            u)]))];
                        case 2:
                            k = e.sent();
                            if (!k)
                                return [2];
                            r = (q = k.headers.get(x.shared.getClientOnlyLibHeader(f))) ? K.decode(q) : void 0;
                            return r ? [2, {
                                delimiter: r,
                                response: k,
                                skeleton: d
                            }] : (t.queueTask(function() {
                                v._metricsHelper.logTagAndCount("PageShellCacheMiss:Delimiter")
                            }),
                            [2])
                        }
                    })
                })
            }
            ;
            b.prototype.getFilteredPageShellHeaders = function(a) {
                return x.shared.removeLibHeaders(a.headers)
            }
            ;
            b.prototype.getPageShellMetadata = function(a) {
                return (a = (a = (a = a.headers.get(x.shared.getClientOnlyLibHeader("metadata"))) ? K.decode(a) : void 0) ? I.deserialize(a) : void 0) ? {
                    attribution: a.attribution || "unknown",
                    staleness: "number" === typeof a.requestStartTimestampSeconds ? G.getEpochSeconds(this._eventOptions.timeOriginEpoch) - a.requestStartTimestampSeconds : void 0
                } : {
                    attribution: "unknown"
                }
            }
            ;
            b.prototype.queuePageShellMetadataMetrics = function(a) {
                var b = this;
                t.queueTask(function() {
                    var c = b.getPageShellMetadata(a);
                    b._metricsHelper.logTagAndCount("CachePopAttribution:".concat(c.attribution));
                    c.staleness && b._metricsHelper.logCount("PageShellStaleness", c.staleness)
                })
            }
            ;
            b.prototype.queuePageShellUpdate = function(a, b) {
                var c = this;
                t.queueTask(function() {
                    c._metricsHelper.logCount("Queue:PageShellUpdate");
                    c._metricsHelper.logCount("Queue:PageShellUpdate:".concat(b ? "OnHit" : "OnMiss"));
                    c._eventBus.publish({
                        name: "ResponseRuleNavigation",
                        detail: {
                            eventOptions: c._eventOptions,
                            serverResponse: a,
                            ruleName: c._responseRuleName
                        }
                    })
                })
            }
            ;
            Da([k], b.prototype, "getPageShellFromCache", null);
            Da([k], b.prototype, "getFilteredPageShellHeaders", null);
            Da([k], b.prototype, "getPageShellMetadata", null);
            Da([k], b.prototype, "queuePageShellMetadataMetrics", null);
            Da([k], b.prototype, "queuePageShellUpdate", null);
            return b
        }(v)
          , cg = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , C = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , y = this && this.__awaiter || function(f, b, a, e) {
            function c(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                }
                )
            }
            return new (a || (a = Promise))(function(a, h) {
                function d(a) {
                    try {
                        k(e.next(a))
                    } catch (m) {
                        h(m)
                    }
                }
                function g(a) {
                    try {
                        k(e["throw"](a))
                    } catch (m) {
                        h(m)
                    }
                }
                function k(b) {
                    b.done ? a(b.value) : c(b.value).then(d, g)
                }
                k((e = e.apply(f, b || [])).next())
            }
            )
        }
          , z = this && this.__generator || function(f, b) {
            function a(a) {
                return function(b) {
                    return e([a, b])
                }
            }
            function e(a) {
                if (g)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (g = 1,
                        h && (d = a[0] & 2 ? h["return"] : a[0] ? h["throw"] || ((d = h["return"]) && d.call(h),
                        0) : h.next) && !(d = d.call(h, a[1])).done)
                            return d;
                        if (h = 0,
                        d)
                            a = [a[0] & 2, d.value];
                        switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys,
                            d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3]))
                                c.label = a[1];
                            else if (6 === a[0] && c.label < d[1])
                                c.label = d[1],
                                d = a;
                            else if (d && c.label < d[2])
                                c.label = d[2],
                                c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                        }
                        a = b.call(f, c)
                    } catch (p) {
                        a = [6, p],
                        h = 0
                    } finally {
                        g = d = 0
                    }
                if (a[0] & 5)
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                label: 0,
                sent: function() {
                    if (d[0] & 1)
                        throw d[1];
                    return d[1]
                },
                trys: [],
                ops: []
            }, g, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            },
            "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }
            ),
            k
        }
          , dg = function(f) {
            function b(a, b, c, g, h, d, k, l, p, m, q, r, t, u) {
                var e = f.call(this, "SingleDelimiter", a, b, c, g, h, d, l, m) || this;
                e.logCtor(arguments);
                e._event = k;
                e._usePreloadResponseOnly = p;
                e._pageShellsConfig = q;
                e._noPageShellConfig = r || {};
                e._flags = u || {};
                e._pageShellController = new bg(a,b,e.metricsHelper,d,l,m);
                e._serverResponseController = new vc(c,e.metricsHelper,d,m);
                e._preloadController = new Of(h,e.metricsHelper,k,l,t);
                return e
            }
            cg(b, f);
            b.prototype.build = function() {
                return y(this, void 0, void 0, function() {
                    var a, b, c = this;
                    return z(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return a = this._serverResponseController.fetchServerResponse(this._event, this._usePreloadResponseOnly),
                            t.queueTask(function() {
                                c.metricsHelper.logTagAndCount("Passthrough:".concat(!!c._flags.passthrough))
                            }),
                            this._flags.passthrough ? [3, 2] : [4, this._getPageShell(this._pageShellsConfig)];
                        case 1:
                            if (b = e.sent())
                                return [2, this._getPageShellAssembledResponse(b, a)];
                            if (this._noPageShellConfig.skeleton || this._preloadController.hasPreload())
                                return [2, this._getNoPageShellAssembledResponse(this._noPageShellConfig, a)];
                            e.label = 2;
                        case 2:
                            return [2, this._getNonAssembledResponse(a)]
                        }
                    })
                })
            }
            ;
            b.prototype._getPageShell = function(a) {
                return y(this, void 0, void 0, function() {
                    var b, c, g, f = this;
                    return z(this, function(d) {
                        switch (d.label) {
                        case 0:
                            this.metricsHelper.logMark("Query:PageShell"),
                            c = 0,
                            d.label = 1;
                        case 1:
                            if (!(c < a.length))
                                return [3, 6];
                            d.label = 2;
                        case 2:
                            return d.trys.push([2, 4, , 5]),
                            [4, this._pageShellController.getPageShellFromCache(a[c])];
                        case 3:
                            return (b = d.sent()) ? [3, 6] : [3, 5];
                        case 4:
                            return g = d.sent(),
                            t.queueTask(function() {
                                var a = A.matchesCode(g, "NetworkError");
                                f.metricsHelper.logError(g, a ? "ERROR" : void 0);
                                f.metricsHelper.logCountError(g);
                                f.metricsHelper.logTagAndCount("PageShellCacheMiss:CacheError")
                            }),
                            [3, 5];
                        case 5:
                            return c++,
                            [3, 1];
                        case 6:
                            return this.metricsHelper.logMark("Arrived:PageShell"),
                            t.queueTask(function() {
                                f.metricsHelper.logTagAndCount("PageShellCache".concat(b ? "Hit" : "Miss"))
                            }),
                            b && this._pageShellController.queuePageShellMetadataMetrics(b.response),
                            [2, b]
                        }
                    })
                })
            }
            ;
            b.prototype._getNonAssembledResponse = function(a) {
                return y(this, void 0, void 0, function() {
                    var b, c, g, f = this;
                    return z(this, function(d) {
                        switch (d.label) {
                        case 0:
                            return [4, this._serverResponseController.readServerResponse(this._event, this.eventOptions, a, "sdrsm", !0, !0)];
                        case 1:
                            return b = d.sent(),
                            this.metricsHelper.logMark("Arrived:ServerResponse"),
                            c = [],
                            this._flags.passthrough && c.push(function() {
                                return y(f, void 0, void 0, function() {
                                    return z(this, function(a) {
                                        switch (a.label) {
                                        case 0:
                                            return [4, this._getPageShell(this._pageShellsConfig)];
                                        case 1:
                                            return a.sent(),
                                            [2]
                                        }
                                    })
                                })
                            }),
                            b.parseable && (g = b.response.clone(),
                            c.push(function() {
                                return y(f, void 0, void 0, function() {
                                    return z(this, function(a) {
                                        this._pageShellController.queuePageShellUpdate(g, !1);
                                        return [2]
                                    })
                                })
                            })),
                            t.queueTask(function() {
                                return y(f, void 0, void 0, function() {
                                    var a;
                                    return z(this, function(b) {
                                        switch (b.label) {
                                        case 0:
                                            a = 0,
                                            b.label = 1;
                                        case 1:
                                            return a < c.length ? [4, c[a]()] : [3, 4];
                                        case 2:
                                            b.sent(),
                                            b.label = 3;
                                        case 3:
                                            return a++,
                                            [3, 1];
                                        case 4:
                                            return [2]
                                        }
                                    })
                                })
                            }),
                            this.metricsHelper.logTagAndCount("Response:Success"),
                            [2, b.response]
                        }
                    })
                })
            }
            ;
            b.prototype._getPageShellAssembledResponse = function(a, b) {
                return y(this, void 0, void 0, function() {
                    var c, e;
                    return z(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return c = this._getPageShellAssembledResponseOutputStream(a, b),
                            [4, this._getPageShellAssembledResponseInit(a)];
                        case 1:
                            return e = g.sent(),
                            [2, new Response(c,e)]
                        }
                    })
                })
            }
            ;
            b.prototype._getNoPageShellAssembledResponse = function(a, b) {
                return y(this, void 0, void 0, function() {
                    var c, e;
                    return z(this, function(g) {
                        switch (g.label) {
                        case 0:
                            return c = this._getNoPageShellAssembledResponseOutputStream(a, b),
                            [4, this._getNoPageShellAssembledResponseInit()];
                        case 1:
                            return e = g.sent(),
                            [2, new Response(c,e)]
                        }
                    })
                })
            }
            ;
            b.prototype._getPageShellAssembledResponseInit = function(a) {
                return y(this, void 0, void 0, function() {
                    var b;
                    return z(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, this._preloadController.getHeadersWithPreload(this._pageShellController.getFilteredPageShellHeaders(a.response))];
                        case 1:
                            return b = c.sent(),
                            [2, {
                                status: 200,
                                statusText: "OK",
                                headers: b
                            }]
                        }
                    })
                })
            }
            ;
            b.prototype._getNoPageShellAssembledResponseInit = function() {
                return y(this, void 0, void 0, function() {
                    var a;
                    return z(this, function(b) {
                        switch (b.label) {
                        case 0:
                            return [4, this._preloadController.getHeadersWithPreload(xa.getCommonHTMLHeaders())];
                        case 1:
                            return a = b.sent(),
                            [2, {
                                status: 200,
                                statusText: "OK",
                                headers: a
                            }]
                        }
                    })
                })
            }
            ;
            b.prototype._getPageShellAssembledResponseOutputStream = function(a, b) {
                var c = this;
                return new ReadableStream({
                    start: function(e) {
                        return y(c, void 0, void 0, function() {
                            var c, d, g, f, k, m, q, r, t, u, v, w, x, y, B, C, F, G, D, H, I, J, K, L, E, M;
                            return z(this, function(h) {
                                switch (h.label) {
                                case 0:
                                    c = !0,
                                    h.label = 1;
                                case 1:
                                    return h.trys.push([1, 25, , 26]),
                                    d = this._toOutputStream("PageShell", a.response, e),
                                    g = this._serverResponseController.readServerResponse(this._event, this.eventOptions, b, "sdrs", !1, !0),
                                    f = this._getSkeletonFragment(a, g),
                                    [4, d];
                                case 2:
                                    return h.sent(),
                                    [4, f];
                                case 3:
                                    return (k = h.sent()) ? [4, this._toOutputStream("Skeleton", k, e)] : [3, 5];
                                case 4:
                                    h.sent(),
                                    h.label = 5;
                                case 5:
                                    return m = this._toOutputStream,
                                    q = ["ShellRenderPerfCounter"],
                                    [4, this._getPerfCounterFragment(this.metricsHelper.getMetricName("ShellRender"))];
                                case 6:
                                    return [4, m.apply(this, q.concat([h.sent(), e]))];
                                case 7:
                                    return h.sent(),
                                    [4, g];
                                case 8:
                                    return r = h.sent(),
                                    t = r.unrecoverable,
                                    u = r.parseable,
                                    v = r.response,
                                    this.metricsHelper.logMark("Arrived:ServerResponse"),
                                    t ? [4, this._toOutputStream("ServerResponse", v, e)] : [3, 10];
                                case 9:
                                    return h.sent(),
                                    e.close(),
                                    [2];
                                case 10:
                                    return w = this._getCSMTokensFragment(a.response, v),
                                    x = this._getPageMetadataFragment(a.response, v),
                                    y = u ? this._getAfterDelimiterFragment(a, v) : Promise.resolve(v.clone()),
                                    B = this._toOutputStream,
                                    C = ["CSMTokens"],
                                    [4, w];
                                case 11:
                                    return [4, B.apply(this, C.concat([h.sent(), e]))];
                                case 12:
                                    return h.sent(),
                                    F = this._toOutputStream,
                                    G = ["PageMetadata"],
                                    [4, x];
                                case 13:
                                    return [4, F.apply(this, G.concat([h.sent(), e]))];
                                case 14:
                                    h.sent(),
                                    D = !1,
                                    h.label = 15;
                                case 15:
                                    return h.trys.push([15, 18, , 21]),
                                    H = this._toOutputStream,
                                    I = ["AfterDelimiter"],
                                    [4, y];
                                case 16:
                                    return [4, H.apply(this, I.concat([h.sent(), e]))];
                                case 17:
                                    return h.sent(),
                                    [3, 21];
                                case 18:
                                    J = h.sent();
                                    if (!A.matchesCode(J, "StreamTransformMissingDelimiter"))
                                        return [3, 20];
                                    c = !1;
                                    D = !0;
                                    this.metricsHelper.logTagAndCount("MissingDelimiter");
                                    return this._flags.flushFullOnMissingDelimiter ? [4, this._toOutputStream("MissingDelimiterFallback", v.clone(), e)] : [3, 20];
                                case 19:
                                    h.sent(),
                                    h.label = 20;
                                case 20:
                                    return [3, 21];
                                case 21:
                                    if (!O.isDebug)
                                        return [3, 24];
                                    K = this._toOutputStream;
                                    L = ["DebugInfo"];
                                    return [4, this._getDebugInfoFragment()];
                                case 22:
                                    return [4, K.apply(this, L.concat([h.sent(), e]))];
                                case 23:
                                    h.sent(),
                                    h.label = 24;
                                case 24:
                                    e.close();
                                    this.metricsHelper.logTagAndCount("ServerResponseStatus:".concat(v.status));
                                    c && this.metricsHelper.logTagAndCount("Response:Success");
                                    if (!u || D)
                                        return [2];
                                    this._pageShellController.queuePageShellUpdate(v, !0);
                                    return [3, 26];
                                case 25:
                                    throw E = h.sent(),
                                    e.close(),
                                    M = A.matchesCode(E, "NetworkError"),
                                    this.metricsHelper.logError(E, M ? "ERROR" : void 0),
                                    this.metricsHelper.logCountError(E),
                                    E;
                                case 26:
                                    return [2]
                                }
                            })
                        })
                    }
                })
            }
            ;
            b.prototype._getNoPageShellAssembledResponseOutputStream = function(a, b) {
                var c = this;
                return new ReadableStream({
                    start: function(e) {
                        return y(c, void 0, void 0, function() {
                            var c, d, g, f, k, m, q, r, t, u, v;
                            return z(this, function(h) {
                                switch (h.label) {
                                case 0:
                                    return h.trys.push([0, 9, , 10]),
                                    c = this._serverResponseController.readServerResponse(this._event, this.eventOptions, b, "sdrsn", !1, !0),
                                    d = this._getSkeletonFragment(a, c),
                                    [4, d];
                                case 1:
                                    return (g = h.sent()) ? [4, this._toOutputStream("Skeleton", g, e)] : [3, 3];
                                case 2:
                                    h.sent(),
                                    h.label = 3;
                                case 3:
                                    return [4, c];
                                case 4:
                                    return f = h.sent(),
                                    k = f.unrecoverable,
                                    m = f.parseable,
                                    q = f.response,
                                    this.metricsHelper.logMark("Arrived:ServerResponse"),
                                    [4, this._toOutputStream("ServerResponse", q.clone(), e)];
                                case 5:
                                    h.sent();
                                    if (k)
                                        return e.close(),
                                        [2];
                                    if (!O.isDebug)
                                        return [3, 8];
                                    r = this._toOutputStream;
                                    t = ["DebugInfo"];
                                    return [4, this._getDebugInfoFragment()];
                                case 6:
                                    return [4, r.apply(this, t.concat([h.sent(), e]))];
                                case 7:
                                    h.sent(),
                                    h.label = 8;
                                case 8:
                                    e.close();
                                    this.metricsHelper.logTagAndCount("ServerResponseStatus:".concat(q.status));
                                    this.metricsHelper.logTagAndCount("Response:Success");
                                    if (!m)
                                        return [2];
                                    this._pageShellController.queuePageShellUpdate(q, !1);
                                    return [3, 10];
                                case 9:
                                    throw u = h.sent(),
                                    e.close(),
                                    v = A.matchesCode(u, "NetworkError"),
                                    this.metricsHelper.logError(u, v ? "ERROR" : void 0),
                                    this.metricsHelper.logCountError(u),
                                    u;
                                case 10:
                                    return [2]
                                }
                            })
                        })
                    }
                })
            }
            ;
            b.prototype._toOutputStream = function(a, b, c) {
                return y(this, void 0, void 0, function() {
                    var e = this;
                    return z(this, function(g) {
                        switch (g.label) {
                        case 0:
                            if (!(b.body instanceof ReadableStream))
                                throw r.create("ResponseBodyInvalid");
                            return [4, ma.drain(b.body, function(a) {
                                e._processChunk(a, c)
                            })];
                        case 1:
                            return g.sent(),
                            this.metricsHelper.logMark("Flushed:".concat(a)),
                            [2]
                        }
                    })
                })
            }
            ;
            b.prototype._processChunk = function(a, b) {
                b.enqueue(a)
            }
            ;
            b.prototype._getSkeletonFragment = function(a, b) {
                return y(this, void 0, void 0, function() {
                    var c, e, f, d, k, l, p, m;
                    return z(this, function(g) {
                        switch (g.label) {
                        case 0:
                            c = a.skeleton;
                            if (!c)
                                return [2];
                            f = e = c.data || {};
                            return [4, this.renderingHintsService.getHintsDataOnly(this.eventOptions, this._event.request.url)];
                        case 1:
                            return f.hints = g.sent(),
                            d = c.hooks,
                            k = this.contentFragmentService.render(this.eventOptions, c.name, {
                                data: e,
                                hooks: d
                            }),
                            c.race ? [4, Promise.race([k, b])] : [3, 3];
                        case 2:
                            return p = g.sent(),
                            [3, 5];
                        case 3:
                            return [4, k];
                        case 4:
                            p = g.sent(),
                            g.label = 5;
                        case 5:
                            return l = p,
                            m = l instanceof Response,
                            this.metricsHelper.logMark("Arrived:Skeleton"),
                            this.metricsHelper.logTag("Skeleton:Race:".concat(!!c.race)),
                            this.metricsHelper.logTag("Skeleton:Render:".concat(m)),
                            [2, m ? l : void 0]
                        }
                    })
                })
            }
            ;
            b.prototype._getCSMTokensFragment = function(a, b) {
                return y(this, void 0, void 0, function() {
                    var c;
                    return z(this, function(e) {
                        c = this._pageShellController.getPageShellMetadata(a);
                        return [2, (new ie(this.eventOptions,this.metricsService,b,c.attribution)).getResponse()]
                    })
                })
            }
            ;
            b.prototype._getPageMetadataFragment = function(a, b) {
                return y(this, void 0, void 0, function() {
                    var c, e, f, d, k, l, p;
                    return z(this, function(g) {
                        c = this._pageShellController.getPageShellMetadata(a);
                        e = b.ok;
                        f = b.type;
                        d = b.status;
                        k = b.redirected;
                        l = b.headers.get(x.shared.REQUEST_ID_OPF_HEADER);
                        p = {
                            attribution: c.attribution,
                            staleness: c.staleness,
                            serverResponse: {
                                ok: e,
                                type: f,
                                status: d,
                                redirected: k,
                                requestId: l
                            }
                        };
                        return [2, (new gc(this.eventOptions,this.metricsService,this.responseRuleName,this.name,p)).getResponse()]
                    })
                })
            }
            ;
            b.prototype._getPerfCounterFragment = function(a) {
                return y(this, void 0, void 0, function() {
                    return z(this, function(b) {
                        return [2, (new re(this.eventOptions,this.metricsService,a)).getResponse()]
                    })
                })
            }
            ;
            b.prototype._getAfterDelimiterFragment = function(a, b) {
                return y(this, void 0, void 0, function() {
                    return z(this, function(c) {
                        return [2, (new Xd(this.eventOptions,this.metricsService,b,a.delimiter)).getResponse()]
                    })
                })
            }
            ;
            b.prototype._getDebugInfoFragment = function() {
                return y(this, void 0, void 0, function() {
                    return z(this, function(a) {
                        return [2, (new dc(this.eventOptions,this.metricsService,this._event.request.url)).getResponse()]
                    })
                })
            }
            ;
            C([k], b.prototype, "build", null);
            C([k], b.prototype, "_getPageShellAssembledResponse", null);
            C([k], b.prototype, "_getNoPageShellAssembledResponse", null);
            C([k], b.prototype, "_getPageShellAssembledResponseInit", null);
            C([k], b.prototype, "_getNoPageShellAssembledResponseInit", null);
            C([k], b.prototype, "_getPageShellAssembledResponseOutputStream", null);
            C([k], b.prototype, "_getNoPageShellAssembledResponseOutputStream", null);
            C([k], b.prototype, "_toOutputStream", null);
            C([k], b.prototype, "_processChunk", null);
            C([k], b.prototype, "_getSkeletonFragment", null);
            C([k], b.prototype, "_getCSMTokensFragment", null);
            C([k], b.prototype, "_getPageMetadataFragment", null);
            C([k], b.prototype, "_getPerfCounterFragment", null);
            C([k], b.prototype, "_getAfterDelimiterFragment", null);
            C([k], b.prototype, "_getDebugInfoFragment", null);
            return b
        }(yc)
          , eg = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , fg = function(f) {
            function b(a, b, c, g, h, d) {
                var e = f.call(this) || this;
                e.logCtor(arguments);
                e.customerContextService = a;
                e.cacheService = b;
                e.metricsService = c;
                e.contentFragmentService = g;
                e.renderingHintsService = h;
                e.eventBus = d;
                return e
            }
            eg(b, f);
            return b
        }(v)
          , gg = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , M = this && this.__decorate || function(f, b, a, e) {
            var c = arguments.length, g = 3 > c ? b : null === e ? e = Object.getOwnPropertyDescriptor(b, a) : e, h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                g = Reflect.decorate(f, b, a, e);
            else
                for (var d = f.length - 1; 0 <= d; d--)
                    if (h = f[d])
                        g = (3 > c ? h(g) : 3 < c ? h(b, a, g) : h(b, a)) || g;
            return 3 < c && g && Object.defineProperty(b, a, g),
            g
        }
          , hg = this && this.__read || function(f, b) {
            var a = "function" === typeof Symbol && f[Symbol.iterator];
            if (!a)
                return f;
            f = a.call(f);
            var e, c = [];
            try {
                for (; (void 0 === b || 0 < b--) && !(e = f.next()).done; )
                    c.push(e.value)
            } catch (h) {
                var g = {
                    error: h
                }
            } finally {
                try {
                    e && !e.done && (a = f["return"]) && a.call(f)
                } finally {
                    if (g)
                        throw g.error;
                }
            }
            return c
        }
          , ig = function(f) {
            function b(a, b, c, g, h, d, k, l, p) {
                var e = f.call(this, b, c, g, h, d, k) || this;
                e.logCtor(arguments);
                e._swGlobal = a;
                e._usePreloadResponseOnlyForServerResponseOnNavigations = p.usePreloadResponseOnlyForServerResponseOnNavigations;
                e._errorLoggingScope = "NavigationResponseService";
                e._initNavigationRules(l);
                e._speculateContentFragmentUsage();
                return e
            }
            gg(b, f);
            b.prototype.respond = function(a, b) {
                try {
                    for (var c = 0; c < this._navigationRules.length; c++) {
                        var e = this._navigationRules[c];
                        if (this._doesRuleMatch(e.routeMatchers, a, b)) {
                            a.errorContext.NavigationResponseRule = e.src;
                            a.errorContext.NavigationURL = b.request.url;
                            var f = e.name;
                            if (!e.leversEnabled) {
                                this._logTag(a, "Levers", !1, f);
                                break
                            }
                            this._triggerWeblabs(e.weblabs, a);
                            if (!e.respond) {
                                this._logTag(a, "Respond", !1, f);
                                break
                            }
                            var d = this._createResponseStrategy(f, e.strategy, a, b);
                            this._logMark(a, !0, f);
                            b.respondWith(d.getResponse());
                            this._logMark(a, !1, f);
                            this._logTag(a, "Respond", !0, f);
                            break
                        }
                    }
                } catch (n) {
                    throw this.metricsService.error(a, n, this._errorLoggingScope),
                    this.metricsService.countError(a, n, this._errorLoggingScope),
                    n;
                }
            }
            ;
            b.prototype._initNavigationRules = function(a) {
                var b = this;
                this._navigationRules = a.map(function(a) {
                    return {
                        name: a.name,
                        routeMatchers: a.routeMatchers.map(function(a) {
                            return b._createRouteMatcher(a)
                        }),
                        leversEnabled: b._resolveLevers(a.levers),
                        weblabs: a.weblabTriggers,
                        respond: a.respond,
                        strategy: a.responseStrategy,
                        src: I.serialize(a)
                    }
                })
            }
            ;
            b.prototype._speculateContentFragmentUsage = function() {
                var a = this;
                this._navigationRules.forEach(function(b) {
                    switch (b.strategy.name) {
                    case "SingleDelimiter":
                        b.strategy.pageShells.forEach(function(b) {
                            b.skeleton && a._publishSpeculatedContentFragmentUsage(b.skeleton)
                        }),
                        b.strategy.noPageShell && b.strategy.noPageShell.skeleton && a._publishSpeculatedContentFragmentUsage(b.strategy.noPageShell.skeleton)
                    }
                })
            }
            ;
            b.prototype._publishSpeculatedContentFragmentUsage = function(a) {
                var b = a.name;
                a = a.prewarm;
                this.eventBus.publish({
                    name: "ContentFragmentSpeculation",
                    detail: {
                        eventOptions: na.create(),
                        name: b,
                        prewarm: a
                    }
                })
            }
            ;
            b.prototype._doesRuleMatch = function(a, b, c) {
                for (var e = 0; e < a.length; e++)
                    if (a[e].match(c.request, c, b))
                        return !0;
                return !1
            }
            ;
            b.prototype._createRouteMatcher = function(a) {
                switch (a.name) {
                case "URLPathRoute":
                    return new Zb(a.pattern,a.stripRefMarkers,a.stripLanguageFolder);
                default:
                    throw r.create("UnrecognizedRouteMatcher", a);
                }
            }
            ;
            b.prototype._resolveLevers = function(a) {
                var e = this;
                return a && 0 !== a.length ? a.reduce(function(a, f) {
                    f = f.split(b.RULE_LEVER_SEPARATOR);
                    if (2 !== f.length)
                        return !1;
                    f = hg(f, 2);
                    f = wa.getFeaturePropertiesData(e._swGlobal, f[0], f[1]);
                    return a && !0 === (null === f || void 0 === f ? void 0 : f.ruleEnabled)
                }, !0) : !1
            }
            ;
            b.prototype._createResponseStrategy = function(a, b, c, f) {
                switch (b.name) {
                case "SingleDelimiter":
                    return new dg(this.customerContextService,this.cacheService,this.metricsService,this.contentFragmentService,this.renderingHintsService,this.eventBus,f,c,this._usePreloadResponseOnlyForServerResponseOnNavigations,a,b.pageShells,b.noPageShell,b.preloads,b.flags);
                case "FullPage":
                    return new Yf(this.customerContextService,this.cacheService,this.metricsService,this.contentFragmentService,this.renderingHintsService,this.eventBus,f,c,this._usePreloadResponseOnlyForServerResponseOnNavigations,a,b.cachedPage);
                default:
                    throw r.create("UnrecognizedResponseStrategy", b);
                }
            }
            ;
            b.prototype._triggerWeblabs = function(a, b) {
                var c = this;
                a && t.queueTask(function() {
                    a.forEach(function(a) {
                        c.metricsService.weblabTrigger(b, a.name, a.treatment, a.directTrigger)
                    })
                })
            }
            ;
            b.prototype._logTag = function(a, b, c, f) {
                var e = this;
                t.queueTask(function() {
                    var d = c ? "Active" : "Inactive";
                    e.metricsService.tag(a, "".concat(b, ":").concat(d));
                    e.metricsService.tag(a, "".concat(b, ":").concat(d, ":").concat(f))
                })
            }
            ;
            b.prototype._logMark = function(a, b, c) {
                b = b ? "Before" : "After";
                this.metricsService.mark(a, "Respond:".concat(b));
                this.metricsService.mark(a, "Respond:".concat(b, ":").concat(c))
            }
            ;
            b.RULE_LEVER_SEPARATOR = "::";
            M([k], b.prototype, "respond", null);
            M([k], b.prototype, "_initNavigationRules", null);
            M([k], b.prototype, "_speculateContentFragmentUsage", null);
            M([k], b.prototype, "_publishSpeculatedContentFragmentUsage", null);
            M([k], b.prototype, "_doesRuleMatch", null);
            M([k], b.prototype, "_createRouteMatcher", null);
            M([k], b.prototype, "_resolveLevers", null);
            M([k], b.prototype, "_createResponseStrategy", null);
            M([k], b.prototype, "_triggerWeblabs", null);
            M([k], b.prototype, "_logTag", null);
            M([k], b.prototype, "_logMark", null);
            return b
        }(fg)
          , jg = this && this.__extends || function() {
            var f = function(b, a) {
                f = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                }
                ;
                return f(b, a)
            };
            return function(b, a) {
                function e() {
                    this.constructor = b
                }
                if ("function" !== typeof a && null !== a)
                    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                f(b, a);
                b.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype,
                new e)
            }
        }()
          , Ua = this && this.__assign || function() {
            Ua = Object.assign || function(f) {
                for (var b, a = 1, e = arguments.length; a < e; a++) {
                    b = arguments[a];
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) && (f[c] = b[c])
                }
                return f
            }
            ;
            return Ua.apply(this, arguments)
        }
          , zc = !1
          , kg = function(f) {
            function b(a) {
                var b = f.call(this) || this;
                b.logCtor(arguments);
                b._checkAlreadyStarted();
                b._logDebugInfo(a);
                var c = b._getGlobal(a)
                  , g = b._getFlags(a);
                if (!b._isSupported(c, g) || !b._isClientEnabled(c))
                    return b;
                var h = b._getConfig(a);
                b._startServices(c, g, h);
                return b
            }
            jg(b, f);
            b.prototype._checkAlreadyStarted = function() {
                if (zc)
                    throw r.create("DuplicateLibraryInitialization");
                zc = !0
            }
            ;
            b.prototype._logDebugInfo = function(a) {
                O.isDebugVerbose && this.log("_logDebugInfo", "Lib Init", {
                    startTimeSeconds: G.getEpochSeconds(),
                    libInfo: u,
                    options: a
                })
            }
            ;
            b.prototype._getGlobal = function(a) {
                return a.serviceWorkerGlobal || self
            }
            ;
            b.prototype._getFlags = function(a) {
                var b = {
                    usePreloadResponseOnlyForServerResponseOnNavigations: T.isMShop()
                };
                return Ua(Ua({}, b), a.flags)
            }
            ;
            b.prototype._getConfig = function(a) {
                a = a.configuration;
                if (!(a && Array.isArray(a.caches) && Array.isArray(a.cachePopulationRules) && Array.isArray(a.navigationResponseRules)))
                    throw r.create("InvalidInitializationConfiguration", {
                        config: a
                    });
                return {
                    caches: (new cf).filter(a.caches),
                    cachePopulationRules: (new hf).filter(a.cachePopulationRules),
                    navigationResponseRules: (new kf).filter(a.navigationResponseRules),
                    contentFragments: (new ff).filter(a.contentFragments)
                }
            }
            ;
            b.prototype._isSupported = function(a, b) {
                a = new Qb(a,b);
                try {
                    return a.validate(),
                    !0
                } catch (c) {
                    return this.log("_isSupported", "".concat(c)),
                    !1
                }
            }
            ;
            b.prototype._isClientEnabled = function(a) {
                a = T.isClientEnabled(a);
                if (void 0 === a)
                    throw r.create("RuntimeConfigMissing");
                return a
            }
            ;
            b.prototype._startServices = function(a, b, c) {
                var e = new sf
                  , f = new Ze(a,e)
                  , d = new qf(a);
                f = new Ff(a,f,e);
                var k = new gd(a,f,c.caches)
                  , l = new mf(f,e,c.contentFragments)
                  , p = new Jf(d,f,e);
                l = new ig(a,d,k,f,l,p,e,c.navigationResponseRules,b);
                new Ke(a,d,k,f,e,c.cachePopulationRules);
                new xf(a,l,f,e,b)
            }
            ;
            return b
        }(v);
        Ac.init = function(f) {
            new kg(f)
        }
    }
    )(this.Lightsaber = this.Lightsaber || {})
}
)();
(function(c) {
    var d = []
      , e = []
      , f = []
      , g = []
      , b = function(a, b) {
        Array.isArray(b) && a.push.apply(a, b.filter(function(a) {
            return !!a
        }))
    };
    c.register = function(a) {
        b(d, a.caches);
        b(e, a.cachePopulationRules);
        b(f, a.navigationResponseRules);
        b(g, a.contentFragments)
    }
    ;
    c.getConfig = function() {
        return {
            caches: d,
            cachePopulationRules: e,
            navigationResponseRules: f,
            contentFragments: g
        }
    }
}
)(this.LightsaberConfiguration = this.LightsaberConfiguration || {});
(function() {
    LightsaberConfiguration.register({
        caches: [{
            name: "PageShell",
            version: 3,
            plugins: ["MaxAge", "ValidationKeys", "Metadata"]
        }, {
            name: "CachedPage",
            version: 1,
            plugins: ["MaxAge", "ValidationKeys", "Metadata"]
        }]
    })
}
)();
(function() {
    var e = function() {
        try {
            var d = JSON.parse(decodeURIComponent("%5B%7B%22name%22%3A%22search.mweb.common.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F-qairnevLZvnwdf.html%3FLightsaberSkeleton%3Dsearch.mweb.common.wave-pulse%22%7D%2C%7B%22name%22%3A%22search.mweb.common.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F_sNTDh_t6l2QyVn.html%3FLightsaberSkeleton%3Dsearch.mweb.common.static%22%7D%2C%7B%22name%22%3A%22search.mweb.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FzKTPqiG_ArbzDzh.html%3FLightsaberSkeleton%3Dsearch.mweb.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22search.mweb.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FnCjxeHRLhn_QQ7Z.html%3FLightsaberSkeleton%3Dsearch.mweb.common.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22search.mweb.common.no-page-shell.mobile-tags-fixed.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fm6uXcyp2qM_2l1r.html%3FLightsaberSkeleton%3Dsearch.mweb.common.no-page-shell.mobile-tags-fixed.wave-pulse%22%7D%2C%7B%22name%22%3A%22search.mweb.common.no-page-shell.mobile-tags-fixed.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FJJiHWfr0vhMvetW.html%3FLightsaberSkeleton%3Dsearch.mweb.common.no-page-shell.mobile-tags-fixed.static%22%7D%2C%7B%22name%22%3A%22search.app.common.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FxXFG6jZV79gIs3P.html%3FLightsaberSkeleton%3Dsearch.app.common.wave-pulse%22%7D%2C%7B%22name%22%3A%22search.app.common.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fyt3-GP0nl57lScQ.html%3FLightsaberSkeleton%3Dsearch.app.common.static%22%7D%2C%7B%22name%22%3A%22search.app.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fowl5xqIQ5MIHraG.html%3FLightsaberSkeleton%3Dsearch.app.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22search.app.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F3UFmXbcMOwwRPhs.html%3FLightsaberSkeleton%3Dsearch.app.common.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22search.app.common.no-page-shell.mobile-tags-fixed.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FLchTkopsnkbfZgt.html%3FLightsaberSkeleton%3Dsearch.app.common.no-page-shell.mobile-tags-fixed.wave-pulse%22%7D%2C%7B%22name%22%3A%22search.app.common.no-page-shell.mobile-tags-fixed.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Flz8FgAbjYUDPpQz.html%3FLightsaberSkeleton%3Dsearch.app.common.no-page-shell.mobile-tags-fixed.static%22%7D%2C%7B%22name%22%3A%22homepage.app.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FEm_hNJrYMYqXfvr.html%3FLightsaberSkeleton%3Dhomepage.app.common.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22dummy.nav.parameters.test.detail.mweb.common.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fjct2h975jAOlUFO.html%3FLightsaberSkeleton%3Ddummy.nav.parameters.test.detail.mweb.common.static%22%7D%2C%7B%22name%22%3A%22dummy.nav.parameters.test.detail.mweb.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F2l89RZGrdHGd6b3.html%3FLightsaberSkeleton%3Ddummy.nav.parameters.test.detail.mweb.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FPqoS3vvF5soxrxu.html%3FLightsaberSkeleton%3Ddetail.mweb.common.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F52-85LZc82Fwbdg.html%3FLightsaberSkeleton%3Ddetail.mweb.common.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F1NkVZNv2KrYZi1C.html%3FLightsaberSkeleton%3Ddetail.mweb.common.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FXWiFNOhLQLO4m9C.html%3FLightsaberSkeleton%3Ddetail.mweb.common.static%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.no-page-shell.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FlwGl9F-jEOb1T1H.html%3FLightsaberSkeleton%3Ddetail.mweb.common.no-page-shell.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F3eQcQRZov2NxuJi.html%3FLightsaberSkeleton%3Ddetail.mweb.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.no-page-shell.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FCQneIfgpKs-ObOW.html%3FLightsaberSkeleton%3Ddetail.mweb.common.no-page-shell.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.no-page-shell.t0-reset.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FHITnxRBYzhP5Jrd.html%3FLightsaberSkeleton%3Ddetail.mweb.common.no-page-shell.t0-reset.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.no-page-shell.t0-reset.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F573C_-ngtGrrq1k.html%3FLightsaberSkeleton%3Ddetail.mweb.common.no-page-shell.t0-reset.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.no-page-shell.t0-reset.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F5P1h5Nr8O6CMLpy.html%3FLightsaberSkeleton%3Ddetail.mweb.common.no-page-shell.t0-reset.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.no-page-shell.t0-reset.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FN0_qNlSN0JOWDru.html%3FLightsaberSkeleton%3Ddetail.mweb.common.no-page-shell.t0-reset.static%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FSvx1DxArQYP68-A.html%3FLightsaberSkeleton%3Ddetail.mweb.common.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F_nnAdWlp2ktZr_s.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FP9sccpfCbDWtBNS.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FBAwmAwhLv4KQZv7.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F8aCC4nLqVwAb00o.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.static%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.no-page-shell.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F5r89BhDL3YXzhzL.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.no-page-shell.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FQTIiejWROIe8gXb.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.no-page-shell.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FK7ejEcb_TB_scRm.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.no-page-shell.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Foa9aZZXZ0Iq7w_a.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.no-page-shell.mobile-tags-fixed.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FtHhmwJmA3vpSV3-.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.no-page-shell.mobile-tags-fixed.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.no-page-shell.mobile-tags-fixed.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F9IvewVp3AXJs7Ow.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.no-page-shell.mobile-tags-fixed.static%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.no-page-shell.mobile-tags-fixed.move-nodes-title-meta-to-head.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F7lJqVfHyKqL55GN.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.no-page-shell.mobile-tags-fixed.move-nodes-title-meta-to-head.static%22%7D%2C%7B%22name%22%3A%22detail.mweb.common.V2.move-nodes-title-meta-to-head.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FVooZgwNHLH6TZ8T.html%3FLightsaberSkeleton%3Ddetail.mweb.common.V2.move-nodes-title-meta-to-head.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FUMBJi_D0RMANaYJ.html%3FLightsaberSkeleton%3Ddetail.app.common.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.app.common.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Ftm6Uiam0azxfrwc.html%3FLightsaberSkeleton%3Ddetail.app.common.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.app.common.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FP9P2VNRVKSvSnJ7.html%3FLightsaberSkeleton%3Ddetail.app.common.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.app.common.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FExmDuK0rxaa7txV.html%3FLightsaberSkeleton%3Ddetail.app.common.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.no-page-shell.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F_hNaDmj3a74QrWt.html%3FLightsaberSkeleton%3Ddetail.app.common.no-page-shell.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.app.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FDTpngC4A5qpOKUy.html%3FLightsaberSkeleton%3Ddetail.app.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.app.common.no-page-shell.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FpypHt2iD85DGPBt.html%3FLightsaberSkeleton%3Ddetail.app.common.no-page-shell.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.app.common.no-page-shell.t0-reset.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F1ketXCJAcQ3iG6Q.html%3FLightsaberSkeleton%3Ddetail.app.common.no-page-shell.t0-reset.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.app.common.no-page-shell.t0-reset.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FxQhZP3jbwU5Moef.html%3FLightsaberSkeleton%3Ddetail.app.common.no-page-shell.t0-reset.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.app.common.no-page-shell.t0-reset.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FibwymnYXuHFsczL.html%3FLightsaberSkeleton%3Ddetail.app.common.no-page-shell.t0-reset.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.app.common.no-page-shell.t0-reset.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FNOk-cyZCOivlCCr.html%3FLightsaberSkeleton%3Ddetail.app.common.no-page-shell.t0-reset.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FsDTK6BBwxiKOST4.html%3FLightsaberSkeleton%3Ddetail.app.common.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fg6vdVhHYBxH2Ati.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FvhG11nQUSSvey07.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F-FdEOOsbFPs70kA.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fum-8zdXLc3x0KV5.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.wave-vertical%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F5ZXNzx0IFbYUK58.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.wave-vertical%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F1deNsXXurN2R9Id.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.wave-horizontal%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FeQfVlFdtw1u22q-.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.wave-horizontal%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FY8X8hCajQ2s-j9z.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.mobile-tags-fixed.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F133PLQlL401cR91.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.mobile-tags-fixed.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.mobile-tags-fixed.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FQjnVfBcSyr1HrJ0.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.mobile-tags-fixed.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.mobile-tags-fixed.move-nodes-title-meta-to-head.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F2LbAPdBrhwn733Y.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.mobile-tags-fixed.move-nodes-title-meta-to-head.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.mobile-tags-fixed.move-nodes-title-meta-to-head.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FzFwwjlsh9OtluXj.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.mobile-tags-fixed.move-nodes-title-meta-to-head.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.no-page-shell.mobile-tags-fixed.bb-move-nodes-title-meta-to-head.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FFNaZI9YuTSOjKJs.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.no-page-shell.mobile-tags-fixed.bb-move-nodes-title-meta-to-head.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.move-nodes-title-meta-to-head.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FY6-6Bol3k-tSEXA.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.move-nodes-title-meta-to-head.wave-pulse%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.move-nodes-title-meta-to-head.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FTzoUDH9KOhbhdO9.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.move-nodes-title-meta-to-head.static%22%7D%2C%7B%22name%22%3A%22detail.app.common.V2.bb-move-nodes-title-meta-to-head.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F7VtdCoUjfK3mHs1.html%3FLightsaberSkeleton%3Ddetail.app.common.V2.bb-move-nodes-title-meta-to-head.static%22%7D%2C%7B%22name%22%3A%22checkout.mweb.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FY3ar-ZDNU3uMb8j.html%3FLightsaberSkeleton%3Dcheckout.mweb.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22checkout.mweb.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FTq4So4c2cDqz5wY.html%3FLightsaberSkeleton%3Dcheckout.mweb.common.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22checkout.mweb.common.no-page-shell.spinner%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fn49YVZn9WipBwag.html%3FLightsaberSkeleton%3Dcheckout.mweb.common.no-page-shell.spinner%22%7D%2C%7B%22name%22%3A%22checkout.app.common.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F4fteZ4uPOBzqeAz.html%3FLightsaberSkeleton%3Dcheckout.app.common.wave-pulse%22%7D%2C%7B%22name%22%3A%22checkout.app.common.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FXljgGEbby018u-P.html%3FLightsaberSkeleton%3Dcheckout.app.common.static%22%7D%2C%7B%22name%22%3A%22checkout.app.common.spinner%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fm3xrjvO_TmUocdR.html%3FLightsaberSkeleton%3Dcheckout.app.common.spinner%22%7D%2C%7B%22name%22%3A%22checkout.app.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FG6-c9ZaDLlw9C-C.html%3FLightsaberSkeleton%3Dcheckout.app.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22checkout.app.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F2R9nY-Mhk3srpBB.html%3FLightsaberSkeleton%3Dcheckout.app.common.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22checkout.app.common.no-page-shell.spinner%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FpPfFsYV8uB59CvZ.html%3FLightsaberSkeleton%3Dcheckout.app.common.no-page-shell.spinner%22%7D%2C%7B%22name%22%3A%22cart.mweb.common.page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F76e_CEGx7JPi1Pd.html%3FLightsaberSkeleton%3Dcart.mweb.common.page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22cart.mweb.common.page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fgzp7r2QagdR9zaB.html%3FLightsaberSkeleton%3Dcart.mweb.common.page-shell.static%22%7D%2C%7B%22name%22%3A%22cart.mweb.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Fmi_wtoBHCwoX_zc.html%3FLightsaberSkeleton%3Dcart.mweb.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22cart.mweb.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2Ffn6uwsLj45AIhKo.html%3FLightsaberSkeleton%3Dcart.mweb.common.no-page-shell.static%22%7D%2C%7B%22name%22%3A%22cart.app.common.page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F8qK8prbMUr1wiNJ.html%3FLightsaberSkeleton%3Dcart.app.common.page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22cart.app.common.page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FylqiEMheOrKP99W.html%3FLightsaberSkeleton%3Dcart.app.common.page-shell.static%22%7D%2C%7B%22name%22%3A%22cart.app.common.no-page-shell.wave-pulse%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2FRBS17DIMaahTdAm.html%3FLightsaberSkeleton%3Dcart.app.common.no-page-shell.wave-pulse%22%7D%2C%7B%22name%22%3A%22cart.app.common.no-page-shell.static%22%2C%22url%22%3A%22https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsash%2F5ztN6IF7BuN_uqh.html%3FLightsaberSkeleton%3Dcart.app.common.no-page-shell.static%22%7D%5D"))
        } catch (g) {
            d = []
        }
        return {
            contentFragments: (this && this.__spreadArray || function(d, b, e) {
                if (e || 2 === arguments.length)
                    for (var a = 0, f = b.length, c; a < f; a++)
                        !c && a in b || (c || (c = Array.prototype.slice.call(b, 0, a)),
                        c[a] = b[a]);
                return d.concat(c || Array.prototype.slice.call(b))
            }
            )([], d, !0)
        }
    }();
    LightsaberConfiguration.register(e)
}
)();
(function() {
    LightsaberConfiguration.register({
        cachePopulationRules: [void 0],
        navigationResponseRules: [void 0]
    })
}
)();
(function() {
    LightsaberConfiguration.register({
        cachePopulationRules: [void 0],
        navigationResponseRules: [void 0]
    })
}
)();
var AUI_JS_DEBUG = !1;
(function(a) {
    a.init = function() {}
}
)(this.LightsaberShadow = this.LightsaberShadow || {});
(function() {}
)();
var WPN_CL_PNAFV = "AmazonWebPushNotificationsClientLib-1.0.6614.0"
  , AUI_JS_DEBUG = !1;
(function(a) {
    a.init = function(a) {}
}
)(this.WebPushNotifications = this.WebPushNotifications || {});
var AUI_JS_DEBUG = !1;
(function() {
    var e = this && this.__extends || function() {
        var b = function(c, a) {
            b = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, b) {
                a.__proto__ = b
            }
            || function(a, b) {
                for (var c in b)
                    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            ;
            return b(c, a)
        };
        return function(c, a) {
            function d() {
                this.constructor = c
            }
            if ("function" !== typeof a && null !== a)
                throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
            b(c, a);
            c.prototype = null === a ? Object.create(a) : (d.prototype = a.prototype,
            new d)
        }
    }();
    (function(b) {
        function c(a) {
            a = b.call(this, a) || this;
            Object.setPrototypeOf(a, c.prototype);
            return a
        }
        e(c, b);
        return c
    }
    )(Error);
    self.addEventListener("install", function(b) {
        AUI_JS_DEBUG && console.log("[SW] ".concat("Installed"));
        b.waitUntil(self.skipWaiting())
    });
    self.addEventListener("activate", function(b) {
        AUI_JS_DEBUG && console.log("[SW] ".concat("Activated"));
        b.waitUntil(self.clients.claim())
    })
}
)();
