! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 249)
}({
    179: function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var n = function(e, t) {
                        var n = e[1] || "",
                            i = e[3];
                        if (!i) return n;
                        if (t && "function" == typeof btoa) {
                            var r = (o = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                                a = i.sources.map(function(e) {
                                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                                });
                            return [n].concat(a).concat([r]).join("\n")
                        }
                        var o;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var a = this[r][0];
                    "number" == typeof a && (i[a] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var o = e[r];
                    "number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o))
                }
            }, t
        }
    },
    180: function(e, t, n) {
        var i, r, a = {},
            o = (i = function() {
                return window && document && document.all && !window.atob
            }, function() {
                return void 0 === r && (r = i.apply(this, arguments)), r
            }),
            s = function(e) {
                var t = {};
                return function(e) {
                    return void 0 === t[e] && (t[e] = function(e) {
                        return document.querySelector(e)
                    }.call(this, e)), t[e]
                }
            }(),
            l = null,
            u = 0,
            d = [],
            c = n(181);

        function p(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n],
                    r = a[i.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
                    for (; o < i.parts.length; o++) r.parts.push(y(i.parts[o], t))
                } else {
                    var s = [];
                    for (o = 0; o < i.parts.length; o++) s.push(y(i.parts[o], t));
                    a[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function h(e, t) {
            for (var n = [], i = {}, r = 0; r < e.length; r++) {
                var a = e[r],
                    o = t.base ? a[0] + t.base : a[0],
                    s = {
                        css: a[1],
                        media: a[2],
                        sourceMap: a[3]
                    };
                i[o] ? i[o].parts.push(s) : n.push(i[o] = {
                    id: o,
                    parts: [s]
                })
            }
            return n
        }

        function f(e, t) {
            var n = s(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = d[d.length - 1];
            if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), d.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }

        function m(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = d.indexOf(e);
            t >= 0 && d.splice(t, 1)
        }

        function v(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", g(t, e.attrs), f(e, t), t
        }

        function g(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }

        function y(e, t) {
            var n, i, r, a;
            if (t.transform && e.css) {
                if (!(a = t.transform(e.css))) return function() {};
                e.css = a
            }
            if (t.singleton) {
                var o = u++;
                n = l || (l = v(t)), i = w.bind(null, n, o, !1), r = w.bind(null, n, o, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                var t = document.createElement("link");
                return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", g(t, e.attrs), f(e, t), t
            }(t), i = function(e, t, n) {
                var i = n.css,
                    r = n.sourceMap,
                    a = void 0 === t.convertToAbsoluteUrls && r;
                (t.convertToAbsoluteUrls || a) && (i = c(i));
                r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var o = new Blob([i], {
                        type: "text/css"
                    }),
                    s = e.href;
                e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
            }.bind(null, n, t), r = function() {
                m(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = v(t), i = function(e, t) {
                var n = t.css,
                    i = t.media;
                i && e.setAttribute("media", i);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), r = function() {
                m(n)
            });
            return i(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        i(e = t)
                    } else r()
                }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = h(e, t);
            return p(n, t),
                function(e) {
                    for (var i = [], r = 0; r < n.length; r++) {
                        var o = n[r];
                        (s = a[o.id]).refs--, i.push(s)
                    }
                    e && p(h(e, t), t);
                    for (r = 0; r < i.length; r++) {
                        var s;
                        if (0 === (s = i[r]).refs) {
                            for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                            delete a[s.id]
                        }
                    }
                }
        };
        var k, b = (k = [], function(e, t) {
            return k[e] = t, k.filter(Boolean).join("\n")
        });

        function w(e, t, n, i) {
            var r = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, r);
            else {
                var a = document.createTextNode(r),
                    o = e.childNodes;
                o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
            }
        }
    },
    181: function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
                i = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var r, a = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a) ? e : (r = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : i + a.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
            })
        }
    },
    249: function(e, t, n) {
        e.exports = n(250)
    },
    250: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        n(251);
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
        var r = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.options = _.merge({
                        type: null,
                        multiple: !1,
                        route: "admin.file_manager.index",
                        title: trans("media::media.file_manager.title"),
                        message: trans("media::messages.image_has_been_added")
                    }, t), this.events = {}, this.frame = this.getFrame(), this.appendModalToBody(), this.openFrame()
                }
                return i(e, [{
                    key: "on",
                    value: function(e, t) {
                        this.events[e] = t
                    }
                }, {
                    key: "getFrame",
                    value: function() {
                        var e = route(this.options.route, {
                            type: this.options.type,
                            multiple: this.options.multiple
                        });
                        return $('<iframe class="file-manager-iframe" frameborder="0" src="' + e + '"></iframe>')
                    }
                }, {
                    key: "appendModalToBody",
                    value: function() {
                        1 !== $(".media-picker-modal").length && $("body").append(this.getModal())
                    }
                }, {
                    key: "openFrame",
                    value: function() {
                        var e = this;
                        this.showModal(), this.frame.on("load", function() {
                            e.selectMedia()
                        })
                    }
                }, {
                    key: "showModal",
                    value: function() {
                        var e = $(".media-picker-modal").modal("show");
                        this.setFrameHeight(), this.setModalTitle(e), this.setModalBody(e), this.closeModalOnEsc(e)
                    }
                }, {
                    key: "setFrameHeight",
                    value: function() {
                        this.frame.css("height", .8 * window.innerHeight)
                    }
                }, {
                    key: "setModalTitle",
                    value: function(e) {
                        e.find(".modal-title").text(this.options.title)
                    }
                }, {
                    key: "setModalBody",
                    value: function(e) {
                        e.find(".modal-body").html(this.frame)
                    }
                }, {
                    key: "closeModalOnEsc",
                    value: function(e) {
                        var t = this;
                        $(document).on("keydown", function(t) {
                            27 === t.keyCode && e.modal("hide")
                        }), this.frame.on("load keydown", function() {
                            t.frame.contents().on("keydown", function(t) {
                                27 === t.keyCode && e.modal("hide")
                            })
                        })
                    }
                }, {
                    key: "selectMedia",
                    value: function() {
                        var e = this;
                        this.frame.contents().find(".table").on("click", ".select-media", function(t) {
                            t.preventDefault(), e.events.select(t.currentTarget.dataset), e.options.multiple ? e.options.message && notify("success", e.options.message, {
                                context: e.frame.contents()
                            }) : $(".media-picker-modal").modal("hide")
                        })
                    }
                }, {
                    key: "getModal",
                    value: function() {
                        return '\n            <div class="media-picker-modal modal fade" role="dialog">\n                <div class="modal-dialog clearfix">\n                    <div class="modal-content col-md-10 col-sm-11 clearfix">\n                        <div class="row">\n                            <div class="modal-header">\n                                <a type="button" class="close" data-dismiss="modal">&times;</a>\n                                <h4 class="modal-title"></h4>\n                            </div>\n\n                            <div class="modal-body"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        '
                    }
                }]), e
            }(),
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }();
        var o = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), $(".image-picker").on("click", function(e) {
                        t.pickImage(e)
                    }), this.sortable(), this.removeImageEventListener()
                }
                return a(e, [{
                    key: "pickImage",
                    value: function(e) {
                        var t = this,
                            n = e.currentTarget.dataset.inputName,
                            i = e.currentTarget.hasAttribute("data-multiple");
                            var type = "";
                            if(n == "files[base_image]") type="image"; 
                        new r({
                            type: type,
                            multiple: i
                        }).on("select", function(r) {
                            t.addImage(n, r, i, e.currentTarget, type)
                        })
                    }
                }, {
                    key: "addImage",
                    value: function(e, t, n, i, type) {
                        var r = this.getTemplate(e, t, type);
                        if (n) {
                            var a = $(i).next(".multiple-images");
                            a.find(".image-holder.placeholder").remove(), a.find(".image-list").append(r)
                        } else $(i).siblings(".single-image").html(r)
                    }
                }, {
                    key: "getTemplate",
                    value: function(e, t, type) {
                        if(type == "") return $('\n <h4>"'+t.filename+'"</h4> \n <button type="button" class="btn remove-image"></button>\n                <input type="hidden" name="' + e + '" value="' + t.id + '">\n ')
                        return $('\n            <div class="image-holder">\n                <img src="' + t.path + '">\n                <button type="button" class="btn remove-image"></button>\n                <input type="hidden" name="' + e + '" value="' + t.id + '">\n            </div>\n        ')
                    }
                }, {
                    key: "sortable",
                    value: function() {
                        var e = $(".image-list");
                        e.length > 0 && Sortable.create(e[0], {
                            animation: 150
                        })
                    }
                }, {
                    key: "removeImageEventListener",
                    value: function() {
                        var e = this;
                        $(".image-holder-wrapper").on("click", ".remove-image", function(t) {
                            t.preventDefault(), console.log(t.currentTarget.dataset);
                            var n = $(t.currentTarget).closest(".image-holder-wrapper");
                            1 === n.find(".image-holder").length && n.html(e.getImagePlaceholder(t.currentTarget.dataset.inputName)), $(t.currentTarget).parent().remove()
                        })
                    }
                }, {
                    key: "getImagePlaceholder",
                    value: function(e) {
                        return '\n            <div class="image-holder placeholder cursor-auto">\n                <i class="fa fa-picture-o"></i>\n                <input type="hidden" name="' + e + '">\n            </div>\n        '
                    }
                }]), e
            }(),
            s = n(253),
            l = n.n(s),
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }();
        var d = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l.a.autoDiscover = !1, this.dropzone = new l.a(".dropzone", {
                    url: route("admin.media.store"),
                    autoProcessQueue: !0,
                    maxFilesize: FleetCart.maxFileSize
                }), this.dropzone.on("sending", this.sending), this.dropzone.on("success", this.success), this.dropzone.on("error", this.error)
            }
            return u(e, [{
                key: "sending",
                value: function(e, t) {
                    t.timeout = 36e5, $(".alert-danger").remove()
                }
            }, {
                key: "success",
                value: function() {
                    0 === this.getUploadingFiles().length && 0 === this.getQueuedFiles().length && setTimeout(DataTable.reload, 1e3, "#media-table .table")
                }
            }, {
                key: "error",
                value: function(e, t) {
                    $(".dz-progress").css("z-index", 1), $(e.previewElement).find(".dz-error-message").text(t.message)
                }
            }]), e
        }();
        window.MediaPicker = r, 0 !== $(".image-picker").length && new o, 0 !== $(".dropzone").length && new d
    },
    251: function(e, t, n) {
        var i = n(252);
        "string" == typeof i && (i = [
            [e.i, i, ""]
        ]);
        var r = {
            transform: void 0
        };
        n(180)(i, r);
        i.locals && (e.exports = i.locals)
    },
    252: function(e, t, n) {
        (e.exports = n(179)(!1)).push([e.i, ".file-manager-iframe{width:100%;vertical-align:bottom}.file-manager{background:#f9f9f9;margin-top:20px}.file-manager #notification-toast{bottom:0}.file-manager .dataTable .btn{padding:10px 16px 8px}.file-manager .dataTable .btn>i{margin-top:5px}.media-picker-modal{padding-right:0!important;z-index:1050}.media-picker-modal>i{margin-right:5px}.media-picker-modal .modal-dialog{width:auto;margin:25px auto}.media-picker-modal .modal-content{margin:auto;float:none;border:1px solid #d2d6de;border-radius:3px}.media-picker-modal .modal-header{padding:6px 15px;background:#f1f1f1}.media-picker-modal .modal-header>.close{margin-top:5px;-webkit-text-stroke:0;transition:.2s}.media-picker-modal .modal-body{background:#f9f9f9;padding:15px 0}.media-picker-modal .modal.fade .modal-dialog{transform:scale(.8);opacity:0;transition:.2s ease-in-out}.media-picker-modal .modal.fade .modal-dialog.in .modal-dialog{transform:scale(1);opacity:1}@media screen and (max-width:767px){.media-picker-modal .modal-dialog{margin:10px}}", ""])
    },
    253: function(e, t, n) {
        "use strict";
        (function(e) {
            var t = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }();

            function n(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function() {
                    function e() {
                        i(this, e)
                    }
                    return t(e, [{
                        key: "on",
                        value: function(e, t) {
                            return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            this._callbacks = this._callbacks || {};
                            var t = this._callbacks[e];
                            if (t) {
                                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                                for (var a = 0, o = o = t;;) {
                                    if (a >= o.length) break;
                                    o[a++].apply(this, i)
                                }
                            }
                            return this
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
                            var n = this._callbacks[e];
                            if (!n) return this;
                            if (1 === arguments.length) return delete this._callbacks[e], this;
                            for (var i = 0; i < n.length; i++) {
                                if (n[i] === t) {
                                    n.splice(i, 1);
                                    break
                                }
                            }
                            return this
                        }
                    }]), e
                }(),
                a = function(e) {
                    function a(e, t) {
                        i(this, a);
                        var r, o = n(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this)),
                            s = void 0;
                        if (o.element = e, o.version = a.version, o.defaultOptions.previewTemplate = o.defaultOptions.previewTemplate.replace(/\n*/g, ""), o.clickableElements = [], o.listeners = [], o.files = [], "string" == typeof o.element && (o.element = document.querySelector(o.element)), !o.element || null == o.element.nodeType) throw new Error("Invalid dropzone element.");
                        if (o.element.dropzone) throw new Error("Dropzone already attached.");
                        a.instances.push(o), o.element.dropzone = o;
                        var l, u = null != (r = a.optionsForElement(o.element)) ? r : {};
                        if (o.options = a.extend({}, o.defaultOptions, u, null != t ? t : {}), o.options.forceFallback || !a.isBrowserSupported()) return l = o.options.fallback.call(o), n(o, l);
                        if (null == o.options.url && (o.options.url = o.element.getAttribute("action")), !o.options.url) throw new Error("No URL provided.");
                        if (o.options.acceptedFiles && o.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                        if (o.options.uploadMultiple && o.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
                        return o.options.acceptedMimeTypes && (o.options.acceptedFiles = o.options.acceptedMimeTypes, delete o.options.acceptedMimeTypes), null != o.options.renameFilename && (o.options.renameFile = function(e) {
                            return o.options.renameFilename.call(o, e.name, e)
                        }), o.options.method = o.options.method.toUpperCase(), (s = o.getExistingFallback()) && s.parentNode && s.parentNode.removeChild(s), !1 !== o.options.previewsContainer && (o.options.previewsContainer ? o.previewsContainer = a.getElement(o.options.previewsContainer, "previewsContainer") : o.previewsContainer = o.element), o.options.clickable && (!0 === o.options.clickable ? o.clickableElements = [o.element] : o.clickableElements = a.getElements(o.options.clickable, "clickable")), o.init(), o
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(a, r), t(a, null, [{
                        key: "initClass",
                        value: function() {
                            this.prototype.Emitter = r, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype.defaultOptions = {
                                url: null,
                                method: "post",
                                withCredentials: !1,
                                timeout: 3e4,
                                parallelUploads: 2,
                                uploadMultiple: !1,
                                chunking: !1,
                                forceChunking: !1,
                                chunkSize: 2e6,
                                parallelChunkUploads: !1,
                                retryChunks: !1,
                                retryChunksLimit: 3,
                                maxFilesize: 256,
                                paramName: "file",
                                createImageThumbnails: !0,
                                maxThumbnailFilesize: 10,
                                thumbnailWidth: 120,
                                thumbnailHeight: 120,
                                thumbnailMethod: "crop",
                                resizeWidth: null,
                                resizeHeight: null,
                                resizeMimeType: null,
                                resizeQuality: .8,
                                resizeMethod: "contain",
                                filesizeBase: 1e3,
                                maxFiles: null,
                                headers: null,
                                clickable: !0,
                                ignoreHiddenFiles: !0,
                                acceptedFiles: null,
                                acceptedMimeTypes: null,
                                autoProcessQueue: !0,
                                autoQueue: !0,
                                addRemoveLinks: !1,
                                previewsContainer: null,
                                hiddenInputContainer: "body",
                                capture: null,
                                renameFilename: null,
                                renameFile: null,
                                forceFallback: !1,
                                dictDefaultMessage: "Drop files here to upload",
                                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                                dictInvalidFileType: "You can't upload files of this type.",
                                dictResponseError: "Server responded with {{statusCode}} code.",
                                dictCancelUpload: "Cancel upload",
                                dictUploadCanceled: "Upload canceled.",
                                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                                dictRemoveFile: "Remove file",
                                dictRemoveFileConfirmation: null,
                                dictMaxFilesExceeded: "You can not upload any more files.",
                                dictFileSizeUnits: {
                                    tb: "TB",
                                    gb: "GB",
                                    mb: "MB",
                                    kb: "KB",
                                    b: "b"
                                },
                                init: function() {},
                                params: function(e, t, n) {
                                    if (n) return {
                                        dzuuid: n.file.upload.uuid,
                                        dzchunkindex: n.index,
                                        dztotalfilesize: n.file.size,
                                        dzchunksize: this.options.chunkSize,
                                        dztotalchunkcount: n.file.upload.totalChunkCount,
                                        dzchunkbyteoffset: n.index * this.options.chunkSize
                                    }
                                },
                                accept: function(e, t) {
                                    return t()
                                },
                                chunksUploaded: function(e, t) {
                                    t()
                                },
                                fallback: function() {
                                    var e = void 0;
                                    this.element.className = this.element.className + " dz-browser-not-supported";
                                    for (var t = 0, n = n = this.element.getElementsByTagName("div");;) {
                                        if (t >= n.length) break;
                                        var i = n[t++];
                                        if (/(^| )dz-message($| )/.test(i.className)) {
                                            e = i, i.className = "dz-message";
                                            break
                                        }
                                    }
                                    e || (e = a.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e));
                                    var r = e.getElementsByTagName("span")[0];
                                    return r && (null != r.textContent ? r.textContent = this.options.dictFallbackMessage : null != r.innerText && (r.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
                                },
                                resize: function(e, t, n, i) {
                                    var r = {
                                            srcX: 0,
                                            srcY: 0,
                                            srcWidth: e.width,
                                            srcHeight: e.height
                                        },
                                        a = e.width / e.height;
                                    null == t && null == n ? (t = r.srcWidth, n = r.srcHeight) : null == t ? t = n * a : null == n && (n = t / a);
                                    var o = (t = Math.min(t, r.srcWidth)) / (n = Math.min(n, r.srcHeight));
                                    if (r.srcWidth > t || r.srcHeight > n)
                                        if ("crop" === i) a > o ? (r.srcHeight = e.height, r.srcWidth = r.srcHeight * o) : (r.srcWidth = e.width, r.srcHeight = r.srcWidth / o);
                                        else {
                                            if ("contain" !== i) throw new Error("Unknown resizeMethod '" + i + "'");
                                            a > o ? n = t / a : t = n * a
                                        }
                                    return r.srcX = (e.width - r.srcWidth) / 2, r.srcY = (e.height - r.srcHeight) / 2, r.trgWidth = t, r.trgHeight = n, r
                                },
                                transformFile: function(e, t) {
                                    return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
                                },
                                previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                                drop: function(e) {
                                    return this.element.classList.remove("dz-drag-hover")
                                },
                                dragstart: function(e) {},
                                dragend: function(e) {
                                    return this.element.classList.remove("dz-drag-hover")
                                },
                                dragenter: function(e) {
                                    return this.element.classList.add("dz-drag-hover")
                                },
                                dragover: function(e) {
                                    return this.element.classList.add("dz-drag-hover")
                                },
                                dragleave: function(e) {
                                    return this.element.classList.remove("dz-drag-hover")
                                },
                                paste: function(e) {},
                                reset: function() {
                                    return this.element.classList.remove("dz-started")
                                },
                                addedfile: function(e) {
                                    var t = this;
                                    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                                        e.previewElement = a.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement);
                                        for (var n = 0, i = i = e.previewElement.querySelectorAll("[data-dz-name]");;) {
                                            if (n >= i.length) break;
                                            var r = i[n++];
                                            r.textContent = e.name
                                        }
                                        for (var o = 0, s = s = e.previewElement.querySelectorAll("[data-dz-size]"); !(o >= s.length);)(r = s[o++]).innerHTML = this.filesize(e.size);
                                        this.options.addRemoveLinks && (e._removeLink = a.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink));
                                        for (var l = function(n) {
                                                return n.preventDefault(), n.stopPropagation(), e.status === a.UPLOADING ? a.confirm(t.options.dictCancelUploadConfirmation, function() {
                                                    return t.removeFile(e)
                                                }) : t.options.dictRemoveFileConfirmation ? a.confirm(t.options.dictRemoveFileConfirmation, function() {
                                                    return t.removeFile(e)
                                                }) : t.removeFile(e)
                                            }, u = 0, d = d = e.previewElement.querySelectorAll("[data-dz-remove]");;) {
                                            if (u >= d.length) break;
                                            d[u++].addEventListener("click", l)
                                        }
                                    }
                                },
                                removedfile: function(e) {
                                    return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
                                },
                                thumbnail: function(e, t) {
                                    if (e.previewElement) {
                                        e.previewElement.classList.remove("dz-file-preview");
                                        for (var n = 0, i = i = e.previewElement.querySelectorAll("[data-dz-thumbnail]");;) {
                                            if (n >= i.length) break;
                                            var r = i[n++];
                                            r.alt = e.name, r.src = t
                                        }
                                        return setTimeout(function() {
                                            return e.previewElement.classList.add("dz-image-preview")
                                        }, 1)
                                    }
                                },
                                error: function(e, t) {
                                    if (e.previewElement) {
                                        e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error);
                                        for (var n = 0, i = i = e.previewElement.querySelectorAll("[data-dz-errormessage]");;) {
                                            if (n >= i.length) break;
                                            i[n++].textContent = t
                                        }
                                    }
                                },
                                errormultiple: function() {},
                                processing: function(e) {
                                    if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.textContent = this.options.dictCancelUpload
                                },
                                processingmultiple: function() {},
                                uploadprogress: function(e, t, n) {
                                    if (e.previewElement)
                                        for (var i = 0, r = r = e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;) {
                                            if (i >= r.length) break;
                                            var a = r[i++];
                                            "PROGRESS" === a.nodeName ? a.value = t : a.style.width = t + "%"
                                        }
                                },
                                totaluploadprogress: function() {},
                                sending: function() {},
                                sendingmultiple: function() {},
                                success: function(e) {
                                    if (e.previewElement) return e.previewElement.classList.add("dz-success")
                                },
                                successmultiple: function() {},
                                canceled: function(e) {
                                    return this.emit("error", e, this.options.dictUploadCanceled)
                                },
                                canceledmultiple: function() {},
                                complete: function(e) {
                                    if (e._removeLink && (e._removeLink.textContent = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete")
                                },
                                completemultiple: function() {},
                                maxfilesexceeded: function() {},
                                maxfilesreached: function() {},
                                queuecomplete: function() {},
                                addedfiles: function() {}
                            }, this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
                        }
                    }, {
                        key: "extend",
                        value: function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                            for (var r = 0, a = a = n;;) {
                                if (r >= a.length) break;
                                var o = a[r++];
                                for (var s in o) {
                                    var l = o[s];
                                    e[s] = l
                                }
                            }
                            return e
                        }
                    }]), t(a, [{
                        key: "getAcceptedFiles",
                        value: function() {
                            return this.files.filter(function(e) {
                                return e.accepted
                            }).map(function(e) {
                                return e
                            })
                        }
                    }, {
                        key: "getRejectedFiles",
                        value: function() {
                            return this.files.filter(function(e) {
                                return !e.accepted
                            }).map(function(e) {
                                return e
                            })
                        }
                    }, {
                        key: "getFilesWithStatus",
                        value: function(e) {
                            return this.files.filter(function(t) {
                                return t.status === e
                            }).map(function(e) {
                                return e
                            })
                        }
                    }, {
                        key: "getQueuedFiles",
                        value: function() {
                            return this.getFilesWithStatus(a.QUEUED)
                        }
                    }, {
                        key: "getUploadingFiles",
                        value: function() {
                            return this.getFilesWithStatus(a.UPLOADING)
                        }
                    }, {
                        key: "getAddedFiles",
                        value: function() {
                            return this.getFilesWithStatus(a.ADDED)
                        }
                    }, {
                        key: "getActiveFiles",
                        value: function() {
                            return this.files.filter(function(e) {
                                return e.status === a.UPLOADING || e.status === a.QUEUED
                            }).map(function(e) {
                                return e
                            })
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = this;
                            if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(a.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length) {
                                ! function t() {
                                    return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null === e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null !== e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null !== e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function() {
                                        var n = e.hiddenFileInput.files;
                                        if (n.length)
                                            for (var i = 0, r = r = n; !(i >= r.length);) {
                                                var a = r[i++];
                                                e.addFile(a)
                                            }
                                        return e.emit("addedfiles", n), t()
                                    })
                                }()
                            }
                            this.URL = null !== window.URL ? window.URL : window.webkitURL;
                            for (var t = 0, n = n = this.events;;) {
                                if (t >= n.length) break;
                                var i = n[t++];
                                this.on(i, this.options[i])
                            }
                            this.on("uploadprogress", function() {
                                return e.updateTotalUploadProgress()
                            }), this.on("removedfile", function() {
                                return e.updateTotalUploadProgress()
                            }), this.on("canceled", function(t) {
                                return e.emit("complete", t)
                            }), this.on("complete", function(t) {
                                if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout(function() {
                                    return e.emit("queuecomplete")
                                }, 0)
                            });
                            var r = function(e) {
                                return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
                            };
                            return this.listeners = [{
                                element: this.element,
                                events: {
                                    dragstart: function(t) {
                                        return e.emit("dragstart", t)
                                    },
                                    dragenter: function(t) {
                                        return r(t), e.emit("dragenter", t)
                                    },
                                    dragover: function(t) {
                                        var n = void 0;
                                        try {
                                            n = t.dataTransfer.effectAllowed
                                        } catch (e) {}
                                        return t.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", r(t), e.emit("dragover", t)
                                    },
                                    dragleave: function(t) {
                                        return e.emit("dragleave", t)
                                    },
                                    drop: function(t) {
                                        return r(t), e.drop(t)
                                    },
                                    dragend: function(t) {
                                        return e.emit("dragend", t)
                                    }
                                }
                            }], this.clickableElements.forEach(function(t) {
                                return e.listeners.push({
                                    element: t,
                                    events: {
                                        click: function(n) {
                                            return (t !== e.element || n.target === e.element || a.elementInside(n.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0
                                        }
                                    }
                                })
                            }), this.enable(), this.options.init.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, a.instances.splice(a.instances.indexOf(this), 1)
                        }
                    }, {
                        key: "updateTotalUploadProgress",
                        value: function() {
                            var e = void 0,
                                t = 0,
                                n = 0;
                            if (this.getActiveFiles().length) {
                                for (var i = 0, r = r = this.getActiveFiles();;) {
                                    if (i >= r.length) break;
                                    var a = r[i++];
                                    t += a.upload.bytesSent, n += a.upload.total
                                }
                                e = 100 * t / n
                            } else e = 100;
                            return this.emit("totaluploadprogress", e, n, t)
                        }
                    }, {
                        key: "_getParamName",
                        value: function(e) {
                            return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "")
                        }
                    }, {
                        key: "_renameFile",
                        value: function(e) {
                            return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
                        }
                    }, {
                        key: "getFallbackForm",
                        value: function() {
                            var e, t = void 0;
                            if (e = this.getExistingFallback()) return e;
                            var n = '<div class="dz-fallback">';
                            this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>';
                            var i = a.createElement(n);
                            return "FORM" !== this.element.tagName ? (t = a.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')).appendChild(i) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : i
                        }
                    }, {
                        key: "getExistingFallback",
                        value: function() {
                            for (var e = function(e) {
                                    for (var t = 0, n = n = e;;) {
                                        if (t >= n.length) break;
                                        var i = n[t++];
                                        if (/(^| )fallback($| )/.test(i.className)) return i
                                    }
                                }, t = ["div", "form"], n = 0; n < t.length; n++) {
                                var i, r = t[n];
                                if (i = e(this.element.getElementsByTagName(r))) return i
                            }
                        }
                    }, {
                        key: "setupEventListeners",
                        value: function() {
                            return this.listeners.map(function(e) {
                                return function() {
                                    var t = [];
                                    for (var n in e.events) {
                                        var i = e.events[n];
                                        t.push(e.element.addEventListener(n, i, !1))
                                    }
                                    return t
                                }()
                            })
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function() {
                            return this.listeners.map(function(e) {
                                return function() {
                                    var t = [];
                                    for (var n in e.events) {
                                        var i = e.events[n];
                                        t.push(e.element.removeEventListener(n, i, !1))
                                    }
                                    return t
                                }()
                            })
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            var e = this;
                            return this.clickableElements.forEach(function(e) {
                                return e.classList.remove("dz-clickable")
                            }), this.removeEventListeners(), this.disabled = !0, this.files.map(function(t) {
                                return e.cancelUpload(t)
                            })
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            return delete this.disabled, this.clickableElements.forEach(function(e) {
                                return e.classList.add("dz-clickable")
                            }), this.setupEventListeners()
                        }
                    }, {
                        key: "filesize",
                        value: function(e) {
                            var t = 0,
                                n = "b";
                            if (e > 0) {
                                for (var i = ["tb", "gb", "mb", "kb", "b"], r = 0; r < i.length; r++) {
                                    var a = i[r];
                                    if (e >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                                        t = e / Math.pow(this.options.filesizeBase, 4 - r), n = a;
                                        break
                                    }
                                }
                                t = Math.round(10 * t) / 10
                            }
                            return "<strong>" + t + "</strong> " + this.options.dictFileSizeUnits[n]
                        }
                    }, {
                        key: "_updateMaxFilesReachedClass",
                        value: function() {
                            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
                        }
                    }, {
                        key: "drop",
                        value: function(e) {
                            if (e.dataTransfer) {
                                this.emit("drop", e);
                                for (var t = [], n = 0; n < e.dataTransfer.files.length; n++) t[n] = e.dataTransfer.files[n];
                                if (this.emit("addedfiles", t), t.length) {
                                    var i = e.dataTransfer.items;
                                    i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(t)
                                }
                            }
                        }
                    }, {
                        key: "paste",
                        value: function(e) {
                            if (null != (void 0 !== (t = null != e ? e.clipboardData : void 0) && null !== t ? function(e) {
                                    return e.items
                                }(t) : void 0)) {
                                var t;
                                this.emit("paste", e);
                                var n = e.clipboardData.items;
                                return n.length ? this._addFilesFromItems(n) : void 0
                            }
                        }
                    }, {
                        key: "handleFiles",
                        value: function(e) {
                            for (var t = 0, n = n = e;;) {
                                if (t >= n.length) break;
                                var i = n[t++];
                                this.addFile(i)
                            }
                        }
                    }, {
                        key: "_addFilesFromItems",
                        value: function(e) {
                            var t = this;
                            return function() {
                                for (var n = [], i = 0, r = r = e;;) {
                                    if (i >= r.length) break;
                                    var a, o = r[i++];
                                    null != o.webkitGetAsEntry && (a = o.webkitGetAsEntry()) ? a.isFile ? n.push(t.addFile(o.getAsFile())) : a.isDirectory ? n.push(t._addFilesFromDirectory(a, a.name)) : n.push(void 0) : null != o.getAsFile && (null == o.kind || "file" === o.kind) ? n.push(t.addFile(o.getAsFile())) : n.push(void 0)
                                }
                                return n
                            }()
                        }
                    }, {
                        key: "_addFilesFromDirectory",
                        value: function(e, t) {
                            var n = this,
                                i = e.createReader(),
                                r = function(e) {
                                    return t = console, n = "log", i = function(t) {
                                        return t.log(e)
                                    }, void 0 !== t && null !== t && "function" == typeof t[n] ? i(t, n) : void 0;
                                    var t, n, i
                                };
                            return function e() {
                                return i.readEntries(function(i) {
                                    if (i.length > 0) {
                                        for (var r = 0, a = a = i; !(r >= a.length);) {
                                            var o = a[r++];
                                            o.isFile ? o.file(function(e) {
                                                if (!n.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = t + "/" + e.name, n.addFile(e)
                                            }) : o.isDirectory && n._addFilesFromDirectory(o, t + "/" + o.name)
                                        }
                                        e()
                                    }
                                    return null
                                }, r)
                            }()
                        }
                    }, {
                        key: "accept",
                        value: function(e, t) {
                            return e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : a.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType)
                        }
                    }, {
                        key: "addFile",
                        value: function(e) {
                            var t = this;
                            return e.upload = {
                                uuid: a.uuidv4(),
                                progress: 0,
                                total: e.size,
                                bytesSent: 0,
                                filename: this._renameFile(e),
                                chunked: this.options.chunking && (this.options.forceChunking || e.size > this.options.chunkSize),
                                totalChunkCount: Math.ceil(e.size / this.options.chunkSize)
                            }, this.files.push(e), e.status = a.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function(n) {
                                return n ? (e.accepted = !1, t._errorProcessing([e], n)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass()
                            })
                        }
                    }, {
                        key: "enqueueFiles",
                        value: function(e) {
                            for (var t = 0, n = n = e;;) {
                                if (t >= n.length) break;
                                var i = n[t++];
                                this.enqueueFile(i)
                            }
                            return null
                        }
                    }, {
                        key: "enqueueFile",
                        value: function(e) {
                            var t = this;
                            if (e.status !== a.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                            if (e.status = a.QUEUED, this.options.autoProcessQueue) return setTimeout(function() {
                                return t.processQueue()
                            }, 0)
                        }
                    }, {
                        key: "_enqueueThumbnail",
                        value: function(e) {
                            var t = this;
                            if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(function() {
                                return t._processThumbnailQueue()
                            }, 0)
                        }
                    }, {
                        key: "_processThumbnailQueue",
                        value: function() {
                            var e = this;
                            if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                                this._processingThumbnail = !0;
                                var t = this._thumbnailQueue.shift();
                                return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function(n) {
                                    return e.emit("thumbnail", t, n), e._processingThumbnail = !1, e._processThumbnailQueue()
                                })
                            }
                        }
                    }, {
                        key: "removeFile",
                        value: function(e) {
                            if (e.status === a.UPLOADING && this.cancelUpload(e), this.files = o(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset")
                        }
                    }, {
                        key: "removeAllFiles",
                        value: function(e) {
                            null == e && (e = !1);
                            for (var t = 0, n = n = this.files.slice();;) {
                                if (t >= n.length) break;
                                var i = n[t++];
                                (i.status !== a.UPLOADING || e) && this.removeFile(i)
                            }
                            return null
                        }
                    }, {
                        key: "resizeImage",
                        value: function(e, t, n, i, r) {
                            var o = this;
                            return this.createThumbnail(e, t, n, i, !1, function(t, n) {
                                if (null == n) return r(e);
                                var i = o.options.resizeMimeType;
                                null == i && (i = e.type);
                                var s = n.toDataURL(i, o.options.resizeQuality);
                                return "image/jpeg" !== i && "image/jpg" !== i || (s = u.restore(e.dataURL, s)), r(a.dataURItoBlob(s))
                            })
                        }
                    }, {
                        key: "createThumbnail",
                        value: function(e, t, n, i, r, a) {
                            var o = this,
                                s = new FileReader;
                            return s.onload = function() {
                                if (e.dataURL = s.result, "image/svg+xml" !== e.type) return o.createThumbnailFromUrl(e, t, n, i, r, a);
                                null != a && a(s.result)
                            }, s.readAsDataURL(e)
                        }
                    }, {
                        key: "createThumbnailFromUrl",
                        value: function(e, t, n, i, r, a, o) {
                            var s = this,
                                u = document.createElement("img");
                            return o && (u.crossOrigin = o), u.onload = function() {
                                var o = function(e) {
                                    return e(1)
                                };
                                return "undefined" != typeof EXIF && null !== EXIF && r && (o = function(e) {
                                    return EXIF.getData(u, function() {
                                        return e(EXIF.getTag(this, "Orientation"))
                                    })
                                }), o(function(r) {
                                    e.width = u.width, e.height = u.height;
                                    var o = s.options.resize.call(s, e, t, n, i),
                                        d = document.createElement("canvas"),
                                        c = d.getContext("2d");
                                    switch (d.width = o.trgWidth, d.height = o.trgHeight, r > 4 && (d.width = o.trgHeight, d.height = o.trgWidth), r) {
                                        case 2:
                                            c.translate(d.width, 0), c.scale(-1, 1);
                                            break;
                                        case 3:
                                            c.translate(d.width, d.height), c.rotate(Math.PI);
                                            break;
                                        case 4:
                                            c.translate(0, d.height), c.scale(1, -1);
                                            break;
                                        case 5:
                                            c.rotate(.5 * Math.PI), c.scale(1, -1);
                                            break;
                                        case 6:
                                            c.rotate(.5 * Math.PI), c.translate(0, -d.height);
                                            break;
                                        case 7:
                                            c.rotate(.5 * Math.PI), c.translate(d.width, -d.height), c.scale(-1, 1);
                                            break;
                                        case 8:
                                            c.rotate(-.5 * Math.PI), c.translate(-d.width, 0)
                                    }
                                    l(c, u, null != o.srcX ? o.srcX : 0, null != o.srcY ? o.srcY : 0, o.srcWidth, o.srcHeight, null != o.trgX ? o.trgX : 0, null != o.trgY ? o.trgY : 0, o.trgWidth, o.trgHeight);
                                    var p = d.toDataURL("image/png");
                                    if (null != a) return a(p, d)
                                })
                            }, null != a && (u.onerror = a), u.src = e.dataURL
                        }
                    }, {
                        key: "processQueue",
                        value: function() {
                            var e = this.options.parallelUploads,
                                t = this.getUploadingFiles().length,
                                n = t;
                            if (!(t >= e)) {
                                var i = this.getQueuedFiles();
                                if (i.length > 0) {
                                    if (this.options.uploadMultiple) return this.processFiles(i.slice(0, e - t));
                                    for (; n < e;) {
                                        if (!i.length) return;
                                        this.processFile(i.shift()), n++
                                    }
                                }
                            }
                        }
                    }, {
                        key: "processFile",
                        value: function(e) {
                            return this.processFiles([e])
                        }
                    }, {
                        key: "processFiles",
                        value: function(e) {
                            for (var t = 0, n = n = e;;) {
                                if (t >= n.length) break;
                                var i = n[t++];
                                i.processing = !0, i.status = a.UPLOADING, this.emit("processing", i)
                            }
                            return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
                        }
                    }, {
                        key: "_getFilesWithXhr",
                        value: function(e) {
                            return this.files.filter(function(t) {
                                return t.xhr === e
                            }).map(function(e) {
                                return e
                            })
                        }
                    }, {
                        key: "cancelUpload",
                        value: function(e) {
                            if (e.status === a.UPLOADING) {
                                for (var t = this._getFilesWithXhr(e.xhr), n = 0, i = i = t;;) {
                                    if (n >= i.length) break;
                                    i[n++].status = a.CANCELED
                                }
                                void 0 !== e.xhr && e.xhr.abort();
                                for (var r = 0, o = o = t;;) {
                                    if (r >= o.length) break;
                                    var s = o[r++];
                                    this.emit("canceled", s)
                                }
                                this.options.uploadMultiple && this.emit("canceledmultiple", t)
                            } else e.status !== a.ADDED && e.status !== a.QUEUED || (e.status = a.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                            if (this.options.autoProcessQueue) return this.processQueue()
                        }
                    }, {
                        key: "resolveOption",
                        value: function(e) {
                            if ("function" == typeof e) {
                                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                return e.apply(this, n)
                            }
                            return e
                        }
                    }, {
                        key: "uploadFile",
                        value: function(e) {
                            return this.uploadFiles([e])
                        }
                    }, {
                        key: "uploadFiles",
                        value: function(e) {
                            var t = this;
                            this._transformFiles(e, function(n) {
                                if (e[0].upload.chunked) {
                                    var i = e[0],
                                        r = n[0];
                                    i.upload.chunks = [];
                                    var o = function() {
                                        for (var n = 0; void 0 !== i.upload.chunks[n];) n++;
                                        if (!(n >= i.upload.totalChunkCount)) {
                                            0;
                                            var o = n * t.options.chunkSize,
                                                s = Math.min(o + t.options.chunkSize, i.size),
                                                l = {
                                                    name: t._getParamName(0),
                                                    data: r.webkitSlice ? r.webkitSlice(o, s) : r.slice(o, s),
                                                    filename: i.upload.filename,
                                                    chunkIndex: n
                                                };
                                            i.upload.chunks[n] = {
                                                file: i,
                                                index: n,
                                                dataBlock: l,
                                                status: a.UPLOADING,
                                                progress: 0,
                                                retries: 0
                                            }, t._uploadData(e, [l])
                                        }
                                    };
                                    if (i.upload.finishedChunkUpload = function(n) {
                                            var r = !0;
                                            n.status = a.SUCCESS, n.dataBlock = null;
                                            for (var s = 0; s < i.upload.totalChunkCount; s++) {
                                                if (void 0 === i.upload.chunks[s]) return o();
                                                i.upload.chunks[s].status !== a.SUCCESS && (r = !1)
                                            }
                                            r && t.options.chunksUploaded(i, function() {
                                                t._finished(e, "", null)
                                            })
                                        }, t.options.parallelChunkUploads)
                                        for (var s = 0; s < i.upload.totalChunkCount; s++) o();
                                    else o()
                                } else {
                                    for (var l = [], u = 0; u < e.length; u++) l[u] = {
                                        name: t._getParamName(u),
                                        data: n[u],
                                        filename: e[u].upload.filename
                                    };
                                    t._uploadData(e, l)
                                }
                            })
                        }
                    }, {
                        key: "_getChunk",
                        value: function(e, t) {
                            for (var n = 0; n < e.upload.totalChunkCount; n++)
                                if (void 0 !== e.upload.chunks[n] && e.upload.chunks[n].xhr === t) return e.upload.chunks[n]
                        }
                    }, {
                        key: "_uploadData",
                        value: function(e, t) {
                            for (var n = this, i = new XMLHttpRequest, r = 0, o = o = e;;) {
                                if (r >= o.length) break;
                                o[r++].xhr = i
                            }
                            e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = i);
                            var s = this.resolveOption(this.options.method, e),
                                l = this.resolveOption(this.options.url, e);
                            i.open(s, l, !0), i.timeout = this.resolveOption(this.options.timeout, e), i.withCredentials = !!this.options.withCredentials, i.onload = function(t) {
                                n._finishedUploading(e, i, t)
                            }, i.onerror = function() {
                                n._handleUploadError(e, i)
                            }, (null != i.upload ? i.upload : i).onprogress = function(t) {
                                return n._updateFilesUploadProgress(e, i, t)
                            };
                            var u = {
                                Accept: "application/json",
                                "Cache-Control": "no-cache",
                                "X-Requested-With": "XMLHttpRequest"
                            };
                            for (var d in this.options.headers && a.extend(u, this.options.headers), u) {
                                var c = u[d];
                                c && i.setRequestHeader(d, c)
                            }
                            var p = new FormData;
                            if (this.options.params) {
                                var h = this.options.params;
                                for (var f in "function" == typeof h && (h = h.call(this, e, i, e[0].upload.chunked ? this._getChunk(e[0], i) : null)), h) {
                                    var m = h[f];
                                    p.append(f, m)
                                }
                            }
                            for (var v = 0, g = g = e;;) {
                                if (v >= g.length) break;
                                var y = g[v++];
                                this.emit("sending", y, i, p)
                            }
                            this.options.uploadMultiple && this.emit("sendingmultiple", e, i, p), this._addFormElementData(p);
                            for (var k = 0; k < t.length; k++) {
                                var b = t[k];
                                p.append(b.name, b.data, b.filename)
                            }
                            this.submitRequest(i, p, e)
                        }
                    }, {
                        key: "_transformFiles",
                        value: function(e, t) {
                            for (var n = this, i = [], r = 0, a = function(a) {
                                    n.options.transformFile.call(n, e[a], function(n) {
                                        i[a] = n, ++r === e.length && t(i)
                                    })
                                }, o = 0; o < e.length; o++) a(o)
                        }
                    }, {
                        key: "_addFormElementData",
                        value: function(e) {
                            if ("FORM" === this.element.tagName)
                                for (var t = 0, n = n = this.element.querySelectorAll("input, textarea, select, button");;) {
                                    if (t >= n.length) break;
                                    var i = n[t++],
                                        r = i.getAttribute("name"),
                                        a = i.getAttribute("type");
                                    if (a && (a = a.toLowerCase()), void 0 !== r && null !== r)
                                        if ("SELECT" === i.tagName && i.hasAttribute("multiple"))
                                            for (var o = 0, s = s = i.options;;) {
                                                if (o >= s.length) break;
                                                var l = s[o++];
                                                l.selected && e.append(r, l.value)
                                            } else(!a || "checkbox" !== a && "radio" !== a || i.checked) && e.append(r, i.value)
                                }
                        }
                    }, {
                        key: "_updateFilesUploadProgress",
                        value: function(e, t, n) {
                            var i = void 0;
                            if (void 0 !== n) {
                                if (i = 100 * n.loaded / n.total, e[0].upload.chunked) {
                                    var r = e[0],
                                        a = this._getChunk(r, t);
                                    a.progress = i, a.total = n.total, a.bytesSent = n.loaded;
                                    r.upload.progress = 0, r.upload.total = 0, r.upload.bytesSent = 0;
                                    for (var o = 0; o < r.upload.totalChunkCount; o++) void 0 !== r.upload.chunks[o] && void 0 !== r.upload.chunks[o].progress && (r.upload.progress += r.upload.chunks[o].progress, r.upload.total += r.upload.chunks[o].total, r.upload.bytesSent += r.upload.chunks[o].bytesSent);
                                    r.upload.progress = r.upload.progress / r.upload.totalChunkCount
                                } else
                                    for (var s = 0, l = l = e;;) {
                                        if (s >= l.length) break;
                                        var u = l[s++];
                                        u.upload.progress = i, u.upload.total = n.total, u.upload.bytesSent = n.loaded
                                    }
                                for (var d = 0, c = c = e;;) {
                                    if (d >= c.length) break;
                                    var p = c[d++];
                                    this.emit("uploadprogress", p, p.upload.progress, p.upload.bytesSent)
                                }
                            } else {
                                var h = !0;
                                i = 100;
                                for (var f = 0, m = m = e;;) {
                                    if (f >= m.length) break;
                                    var v = m[f++];
                                    100 === v.upload.progress && v.upload.bytesSent === v.upload.total || (h = !1), v.upload.progress = i, v.upload.bytesSent = v.upload.total
                                }
                                if (h) return;
                                for (var g = 0, y = y = e;;) {
                                    if (g >= y.length) break;
                                    var k = y[g++];
                                    this.emit("uploadprogress", k, i, k.upload.bytesSent)
                                }
                            }
                        }
                    }, {
                        key: "_finishedUploading",
                        value: function(e, t, n) {
                            var i = void 0;
                            if (e[0].status !== a.CANCELED && 4 === t.readyState) {
                                if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (i = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try {
                                    i = JSON.parse(i)
                                } catch (e) {
                                    n = e, i = "Invalid JSON response from server."
                                }
                                this._updateFilesUploadProgress(e), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t)) : this._finished(e, i, n) : this._handleUploadError(e, t, i)
                            }
                        }
                    }, {
                        key: "_handleUploadError",
                        value: function(e, t, n) {
                            if (e[0].status !== a.CANCELED) {
                                if (e[0].upload.chunked && this.options.retryChunks) {
                                    var i = this._getChunk(e[0], t);
                                    if (i.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [i.dataBlock]);
                                    console.warn("Retried this chunk too often. Giving up.")
                                }
                                for (var r = 0, o = o = e;;) {
                                    if (r >= o.length) break;
                                    o[r++];
                                    this._errorProcessing(e, n || this.options.dictResponseError.replace("{{statusCode}}", t.status), t)
                                }
                            }
                        }
                    }, {
                        key: "submitRequest",
                        value: function(e, t, n) {
                            e.send(t)
                        }
                    }, {
                        key: "_finished",
                        value: function(e, t, n) {
                            for (var i = 0, r = r = e;;) {
                                if (i >= r.length) break;
                                var o = r[i++];
                                o.status = a.SUCCESS, this.emit("success", o, t, n), this.emit("complete", o)
                            }
                            if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
                        }
                    }, {
                        key: "_errorProcessing",
                        value: function(e, t, n) {
                            for (var i = 0, r = r = e;;) {
                                if (i >= r.length) break;
                                var o = r[i++];
                                o.status = a.ERROR, this.emit("error", o, t, n), this.emit("complete", o)
                            }
                            if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
                        }
                    }], [{
                        key: "uuidv4",
                        value: function() {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                                var t = 16 * Math.random() | 0;
                                return ("x" === e ? t : 3 & t | 8).toString(16)
                            })
                        }
                    }]), a
                }();
            a.initClass(), a.version = "5.4.0", a.options = {}, a.optionsForElement = function(e) {
                return e.getAttribute("id") ? a.options[s(e.getAttribute("id"))] : void 0
            }, a.instances = [], a.forElement = function(e) {
                if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return e.dropzone
            }, a.autoDiscover = !0, a.discover = function() {
                var e = void 0;
                if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
                else {
                    e = [];
                    var t = function(t) {
                        return function() {
                            for (var n = [], i = 0, r = r = t;;) {
                                if (i >= r.length) break;
                                var a = r[i++];
                                /(^| )dropzone($| )/.test(a.className) ? n.push(e.push(a)) : n.push(void 0)
                            }
                            return n
                        }()
                    };
                    t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"))
                }
                return function() {
                    for (var t = [], n = 0, i = i = e;;) {
                        if (n >= i.length) break;
                        var r = i[n++];
                        !1 !== a.optionsForElement(r) ? t.push(new a(r)) : t.push(void 0)
                    }
                    return t
                }()
            }, a.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], a.isBrowserSupported = function() {
                var e = !0;
                if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                    if ("classList" in document.createElement("a"))
                        for (var t = 0, n = n = a.blacklistedBrowsers;;) {
                            if (t >= n.length) break;
                            n[t++].test(navigator.userAgent) && (e = !1)
                        } else e = !1;
                    else e = !1;
                return e
            }, a.dataURItoBlob = function(e) {
                for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), r = new Uint8Array(i), a = 0, o = t.length, s = 0 <= o; s ? a <= o : a >= o; s ? a++ : a--) r[a] = t.charCodeAt(a);
                return new Blob([i], {
                    type: n
                })
            };
            var o = function(e, t) {
                    return e.filter(function(e) {
                        return e !== t
                    }).map(function(e) {
                        return e
                    })
                },
                s = function(e) {
                    return e.replace(/[\-_](\w)/g, function(e) {
                        return e.charAt(1).toUpperCase()
                    })
                };
            a.createElement = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.childNodes[0]
            }, a.elementInside = function(e, t) {
                if (e === t) return !0;
                for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1
            }, a.getElement = function(e, t) {
                var n = void 0;
                if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), null == n) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
                return n
            }, a.getElements = function(e, t) {
                var n = void 0,
                    i = void 0;
                if (e instanceof Array) {
                    i = [];
                    try {
                        for (var r = 0, a = a = e; !(r >= a.length);) n = a[r++], i.push(this.getElement(n, t))
                    } catch (e) {
                        i = null
                    }
                } else if ("string" == typeof e) {
                    i = [];
                    for (var o = 0, s = s = document.querySelectorAll(e); !(o >= s.length);) n = s[o++], i.push(n)
                } else null != e.nodeType && (i = [e]);
                if (null == i || !i.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
                return i
            }, a.confirm = function(e, t, n) {
                return window.confirm(e) ? t() : null != n ? n() : void 0
            }, a.isValidFile = function(e, t) {
                if (!t) return !0;
                t = t.split(",");
                for (var n = e.type, i = n.replace(/\/.*$/, ""), r = 0, a = a = t;;) {
                    if (r >= a.length) break;
                    var o = a[r++];
                    if ("." === (o = o.trim()).charAt(0)) {
                        if (-1 !== e.name.toLowerCase().indexOf(o.toLowerCase(), e.name.length - o.length)) return !0
                    } else if (/\/\*$/.test(o)) {
                        if (i === o.replace(/\/.*$/, "")) return !0
                    } else if (n === o) return !0
                }
                return !1
            }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(e) {
                return this.each(function() {
                    return new a(this, e)
                })
            }), void 0 !== e && null !== e ? e.exports = a : window.Dropzone = a, a.ADDED = "added", a.QUEUED = "queued", a.ACCEPTED = a.QUEUED, a.UPLOADING = "uploading", a.PROCESSING = a.UPLOADING, a.CANCELED = "canceled", a.ERROR = "error", a.SUCCESS = "success";
            var l = function(e, t, n, i, r, a, o, s, l, u) {
                    var d = function(e) {
                        e.naturalWidth;
                        var t = e.naturalHeight,
                            n = document.createElement("canvas");
                        n.width = 1, n.height = t;
                        var i = n.getContext("2d");
                        i.drawImage(e, 0, 0);
                        for (var r = i.getImageData(1, 0, 1, t).data, a = 0, o = t, s = t; s > a;) 0 === r[4 * (s - 1) + 3] ? o = s : a = s, s = o + a >> 1;
                        var l = s / t;
                        return 0 === l ? 1 : l
                    }(t);
                    return e.drawImage(t, n, i, r, a, o, s, l, u / d)
                },
                u = function() {
                    function e() {
                        i(this, e)
                    }
                    return t(e, null, [{
                        key: "initClass",
                        value: function() {
                            this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        }
                    }, {
                        key: "encode64",
                        value: function(e) {
                            for (var t = "", n = void 0, i = void 0, r = "", a = void 0, o = void 0, s = void 0, l = "", u = 0; a = (n = e[u++]) >> 2, o = (3 & n) << 4 | (i = e[u++]) >> 4, s = (15 & i) << 2 | (r = e[u++]) >> 6, l = 63 & r, isNaN(i) ? s = l = 64 : isNaN(r) && (l = 64), t = t + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(l), n = i = r = "", a = o = s = l = "", u < e.length;);
                            return t
                        }
                    }, {
                        key: "restore",
                        value: function(e, t) {
                            if (!e.match("data:image/jpeg;base64,")) return t;
                            var n = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                                i = this.slice2Segments(n),
                                r = this.exifManipulation(t, i);
                            return "data:image/jpeg;base64," + this.encode64(r)
                        }
                    }, {
                        key: "exifManipulation",
                        value: function(e, t) {
                            var n = this.getExifArray(t),
                                i = this.insertExif(e, n);
                            return new Uint8Array(i)
                        }
                    }, {
                        key: "getExifArray",
                        value: function(e) {
                            for (var t = void 0, n = 0; n < e.length;) {
                                if (255 === (t = e[n])[0] & 225 === t[1]) return t;
                                n++
                            }
                            return []
                        }
                    }, {
                        key: "insertExif",
                        value: function(e, t) {
                            var n = e.replace("data:image/jpeg;base64,", ""),
                                i = this.decode64(n),
                                r = i.indexOf(255, 3),
                                a = i.slice(0, r),
                                o = i.slice(r),
                                s = a;
                            return s = (s = s.concat(t)).concat(o)
                        }
                    }, {
                        key: "slice2Segments",
                        value: function(e) {
                            for (var t = 0, n = [];;) {
                                if (255 === e[t] & 218 === e[t + 1]) break;
                                if (255 === e[t] & 216 === e[t + 1]) t += 2;
                                else {
                                    var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
                                        r = e.slice(t, i);
                                    n.push(r), t = i
                                }
                                if (t > e.length) break
                            }
                            return n
                        }
                    }, {
                        key: "decode64",
                        value: function(e) {
                            var t = void 0,
                                n = void 0,
                                i = "",
                                r = void 0,
                                a = void 0,
                                o = "",
                                s = 0,
                                l = [];
                            for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(s++)) << 2 | (r = this.KEY_STR.indexOf(e.charAt(s++))) >> 4, n = (15 & r) << 4 | (a = this.KEY_STR.indexOf(e.charAt(s++))) >> 2, i = (3 & a) << 6 | (o = this.KEY_STR.indexOf(e.charAt(s++))), l.push(t), 64 !== a && l.push(n), 64 !== o && l.push(i), t = n = i = "", r = a = o = "", s < e.length;);
                            return l
                        }
                    }]), e
                }();
            u.initClass();
            a._autoDiscoverFunction = function() {
                    if (a.autoDiscover) return a.discover()
                },
                function(e, t) {
                    var n = !1,
                        i = !0,
                        r = e.document,
                        a = r.documentElement,
                        o = r.addEventListener ? "addEventListener" : "attachEvent",
                        s = r.addEventListener ? "removeEventListener" : "detachEvent",
                        l = r.addEventListener ? "" : "on",
                        u = function i(a) {
                            if ("readystatechange" !== a.type || "complete" === r.readyState) return ("load" === a.type ? e : r)[s](l + a.type, i, !1), !n && (n = !0) ? t.call(e, a.type || a) : void 0
                        };
                    if ("complete" !== r.readyState) {
                        if (r.createEventObject && a.doScroll) {
                            try {
                                i = !e.frameElement
                            } catch (e) {}
                            i && function e() {
                                try {
                                    a.doScroll("left")
                                } catch (t) {
                                    return void setTimeout(e, 50)
                                }
                                return u("poll")
                            }()
                        }
                        r[o](l + "DOMContentLoaded", u, !1), r[o](l + "readystatechange", u, !1), e[o](l + "load", u, !1)
                    }
                }(window, a._autoDiscoverFunction)
        }).call(t, n(6)(e))
    },
    6: function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }
});