!(function(e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function(t) {
              return e[t];
            }.bind(null, r),
          );
      return i;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 80));
})({
  0: function(e, t, n) {
    'use strict';
    (function(e, i) {
      var r;
      n.d(t, 'a', function() {
        return g;
      }),
        n.d(t, 'd', function() {
          return y;
        }),
        n.d(t, 'b', function() {
          return T;
        }),
        n.d(t, 'c', function() {
          return k;
        }),
        n.d(t, 'e', function() {
          return S;
        });
      let o = !1,
        a = !1,
        s = !1,
        l = !1,
        h = !1,
        c = !1,
        d = !1,
        u = void 0,
        p = 'en',
        m = void 0,
        f = void 0;
      const g = 'object' == typeof self ? self : 'object' == typeof e ? e : {};
      let b = void 0;
      void 0 !== g.vscode && void 0 !== g.vscode.process
        ? (b = g.vscode.process)
        : void 0 !== i && (b = i);
      const _ =
          'string' ==
            typeof (null === (r = null == b ? void 0 : b.versions) ||
            void 0 === r
              ? void 0
              : r.electron) && 'renderer' === b.type,
        v = _ && (null == b ? void 0 : b.sandboxed);
      (() => {
        if (v) return 'bypassHeatCheck';
        const e = null == b ? void 0 : b.env.VSCODE_BROWSER_CODE_LOADING;
      })();
      if ('object' != typeof navigator || _)
        if ('object' == typeof b) {
          (o = 'win32' === b.platform),
            (a = 'darwin' === b.platform),
            (s = 'linux' === b.platform),
            (l = s && !!b.env.SNAP && !!b.env.SNAP_REVISION),
            (u = 'en'),
            (p = 'en');
          const e = b.env.VSCODE_NLS_CONFIG;
          if (e)
            try {
              const t = JSON.parse(e),
                n = t.availableLanguages['*'];
              (u = t.locale), (p = n || 'en'), (m = t._translationsConfigFile);
            } catch (e) {}
          h = !0;
        } else console.error('Unable to resolve platform.');
      else
        (f = navigator.userAgent),
          (o = f.indexOf('Windows') >= 0),
          (a = f.indexOf('Macintosh') >= 0),
          (d =
            (f.indexOf('Macintosh') >= 0 ||
              f.indexOf('iPad') >= 0 ||
              f.indexOf('iPhone') >= 0) &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0),
          (s = f.indexOf('Linux') >= 0),
          (c = !0),
          (u = navigator.language),
          (p = u);
      let w = 0;
      a ? (w = 1) : o ? (w = 3) : s && (w = 2);
      const y = o,
        T = a,
        k = c,
        S = (function() {
          if (g.setImmediate) return g.setImmediate.bind(g);
          if ('function' == typeof g.postMessage && !g.importScripts) {
            let e = [];
            g.addEventListener('message', t => {
              if (t.data && t.data.vscodeSetImmediateId)
                for (let n = 0, i = e.length; n < i; n++) {
                  const i = e[n];
                  if (i.id === t.data.vscodeSetImmediateId)
                    return e.splice(n, 1), void i.callback();
                }
            });
            let t = 0;
            return n => {
              const i = ++t;
              e.push({ id: i, callback: n }),
                g.postMessage({ vscodeSetImmediateId: i }, '*');
            };
          }
          if ('function' == typeof (null == b ? void 0 : b.nextTick))
            return b.nextTick.bind(b);
          const e = Promise.resolve();
          return t => e.then(t);
        })();
    }.call(this, n(7), n(2)));
  },
  1: function(e, t, n) {
    'use strict';
    (function(e) {
      n.d(t, 'a', function() {
        return o;
      }),
        n.d(t, 'b', function() {
          return a;
        }),
        n.d(t, 'c', function() {
          return s;
        });
      var i = n(0);
      let r;
      if (void 0 !== i.a.vscode && void 0 !== i.a.vscode.process) {
        const e = i.a.vscode.process;
        r = {
          get platform() {
            return e.platform;
          },
          get env() {
            return e.env;
          },
          cwd: () => e.cwd(),
          nextTick: e => Object(i.e)(e),
        };
      } else
        r =
          void 0 !== e
            ? {
                get platform() {
                  return e.platform;
                },
                get env() {
                  return e.env;
                },
                cwd: () => e.env.VSCODE_CWD || e.cwd(),
                nextTick: t => e.nextTick(t),
              }
            : {
                get platform() {
                  return i.d ? 'win32' : i.b ? 'darwin' : 'linux';
                },
                nextTick: e => Object(i.e)(e),
                get env() {
                  return {};
                },
                cwd: () => '/',
              };
      const o = r.cwd,
        a = r.env,
        s = r.platform;
    }.call(this, n(2)));
  },
  2: function(e, t) {
    var n,
      i,
      r = (e.exports = {});
    function o() {
      throw new Error('setTimeout has not been defined');
    }
    function a() {
      throw new Error('clearTimeout has not been defined');
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function() {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        i = 'function' == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        i = a;
      }
    })();
    var l,
      h = [],
      c = !1,
      d = -1;
    function u() {
      c &&
        l &&
        ((c = !1), l.length ? (h = l.concat(h)) : (d = -1), h.length && p());
    }
    function p() {
      if (!c) {
        var e = s(u);
        c = !0;
        for (var t = h.length; t; ) {
          for (l = h, h = []; ++d < t; ) l && l[d].run();
          (d = -1), (t = h.length);
        }
        (l = null),
          (c = !1),
          (function(e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === a || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
      }
    }
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function f() {}
    (r.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      h.push(new m(e, t)), 1 !== h.length || c || s(p);
    }),
      (m.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (r.title = 'browser'),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ''),
      (r.versions = {}),
      (r.on = f),
      (r.addListener = f),
      (r.once = f),
      (r.off = f),
      (r.removeListener = f),
      (r.removeAllListeners = f),
      (r.emit = f),
      (r.prependListener = f),
      (r.prependOnceListener = f),
      (r.listeners = function(e) {
        return [];
      }),
      (r.binding = function(e) {
        throw new Error('process.binding is not supported');
      }),
      (r.cwd = function() {
        return '/';
      }),
      (r.chdir = function(e) {
        throw new Error('process.chdir is not supported');
      }),
      (r.umask = function() {
        return 0;
      });
  },
  28: function(e, t, n) {
    'use strict';
    (function(e) {
      var i;
      n.d(t, 'a', function() {
        return r;
      }),
        (i = (() => {
          var t = {
              470: t => {
                function n(e) {
                  if ('string' != typeof e)
                    throw new TypeError(
                      'Path must be a string. Received ' + JSON.stringify(e),
                    );
                }
                function i(e, t) {
                  for (
                    var n, i = '', r = 0, o = -1, a = 0, s = 0;
                    s <= e.length;
                    ++s
                  ) {
                    if (s < e.length) n = e.charCodeAt(s);
                    else {
                      if (47 === n) break;
                      n = 47;
                    }
                    if (47 === n) {
                      if (o === s - 1 || 1 === a);
                      else if (o !== s - 1 && 2 === a) {
                        if (
                          i.length < 2 ||
                          2 !== r ||
                          46 !== i.charCodeAt(i.length - 1) ||
                          46 !== i.charCodeAt(i.length - 2)
                        )
                          if (i.length > 2) {
                            var l = i.lastIndexOf('/');
                            if (l !== i.length - 1) {
                              -1 === l
                                ? ((i = ''), (r = 0))
                                : (r =
                                    (i = i.slice(0, l)).length -
                                    1 -
                                    i.lastIndexOf('/')),
                                (o = s),
                                (a = 0);
                              continue;
                            }
                          } else if (2 === i.length || 1 === i.length) {
                            (i = ''), (r = 0), (o = s), (a = 0);
                            continue;
                          }
                        t &&
                          (i.length > 0 ? (i += '/..') : (i = '..'), (r = 2));
                      } else
                        i.length > 0
                          ? (i += '/' + e.slice(o + 1, s))
                          : (i = e.slice(o + 1, s)),
                          (r = s - o - 1);
                      (o = s), (a = 0);
                    } else 46 === n && -1 !== a ? ++a : (a = -1);
                  }
                  return i;
                }
                var r = {
                  resolve: function() {
                    for (
                      var t, r = '', o = !1, a = arguments.length - 1;
                      a >= -1 && !o;
                      a--
                    ) {
                      var s;
                      a >= 0
                        ? (s = arguments[a])
                        : (void 0 === t && (t = e.cwd()), (s = t)),
                        n(s),
                        0 !== s.length &&
                          ((r = s + '/' + r), (o = 47 === s.charCodeAt(0)));
                    }
                    return (
                      (r = i(r, !o)),
                      o
                        ? r.length > 0
                          ? '/' + r
                          : '/'
                        : r.length > 0
                        ? r
                        : '.'
                    );
                  },
                  normalize: function(e) {
                    if ((n(e), 0 === e.length)) return '.';
                    var t = 47 === e.charCodeAt(0),
                      r = 47 === e.charCodeAt(e.length - 1);
                    return (
                      0 !== (e = i(e, !t)).length || t || (e = '.'),
                      e.length > 0 && r && (e += '/'),
                      t ? '/' + e : e
                    );
                  },
                  isAbsolute: function(e) {
                    return n(e), e.length > 0 && 47 === e.charCodeAt(0);
                  },
                  join: function() {
                    if (0 === arguments.length) return '.';
                    for (var e, t = 0; t < arguments.length; ++t) {
                      var i = arguments[t];
                      n(i),
                        i.length > 0 &&
                          (void 0 === e ? (e = i) : (e += '/' + i));
                    }
                    return void 0 === e ? '.' : r.normalize(e);
                  },
                  relative: function(e, t) {
                    if ((n(e), n(t), e === t)) return '';
                    if ((e = r.resolve(e)) === (t = r.resolve(t))) return '';
                    for (
                      var i = 1;
                      i < e.length && 47 === e.charCodeAt(i);
                      ++i
                    );
                    for (
                      var o = e.length, a = o - i, s = 1;
                      s < t.length && 47 === t.charCodeAt(s);
                      ++s
                    );
                    for (
                      var l = t.length - s, h = a < l ? a : l, c = -1, d = 0;
                      d <= h;
                      ++d
                    ) {
                      if (d === h) {
                        if (l > h) {
                          if (47 === t.charCodeAt(s + d))
                            return t.slice(s + d + 1);
                          if (0 === d) return t.slice(s + d);
                        } else
                          a > h &&
                            (47 === e.charCodeAt(i + d)
                              ? (c = d)
                              : 0 === d && (c = 0));
                        break;
                      }
                      var u = e.charCodeAt(i + d);
                      if (u !== t.charCodeAt(s + d)) break;
                      47 === u && (c = d);
                    }
                    var p = '';
                    for (d = i + c + 1; d <= o; ++d)
                      (d !== o && 47 !== e.charCodeAt(d)) ||
                        (0 === p.length ? (p += '..') : (p += '/..'));
                    return p.length > 0
                      ? p + t.slice(s + c)
                      : ((s += c), 47 === t.charCodeAt(s) && ++s, t.slice(s));
                  },
                  _makeLong: function(e) {
                    return e;
                  },
                  dirname: function(e) {
                    if ((n(e), 0 === e.length)) return '.';
                    for (
                      var t = e.charCodeAt(0),
                        i = 47 === t,
                        r = -1,
                        o = !0,
                        a = e.length - 1;
                      a >= 1;
                      --a
                    )
                      if (47 === (t = e.charCodeAt(a))) {
                        if (!o) {
                          r = a;
                          break;
                        }
                      } else o = !1;
                    return -1 === r
                      ? i
                        ? '/'
                        : '.'
                      : i && 1 === r
                      ? '//'
                      : e.slice(0, r);
                  },
                  basename: function(e, t) {
                    if (void 0 !== t && 'string' != typeof t)
                      throw new TypeError('"ext" argument must be a string');
                    n(e);
                    var i,
                      r = 0,
                      o = -1,
                      a = !0;
                    if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                      if (t.length === e.length && t === e) return '';
                      var s = t.length - 1,
                        l = -1;
                      for (i = e.length - 1; i >= 0; --i) {
                        var h = e.charCodeAt(i);
                        if (47 === h) {
                          if (!a) {
                            r = i + 1;
                            break;
                          }
                        } else
                          -1 === l && ((a = !1), (l = i + 1)),
                            s >= 0 &&
                              (h === t.charCodeAt(s)
                                ? -1 == --s && (o = i)
                                : ((s = -1), (o = l)));
                      }
                      return (
                        r === o ? (o = l) : -1 === o && (o = e.length),
                        e.slice(r, o)
                      );
                    }
                    for (i = e.length - 1; i >= 0; --i)
                      if (47 === e.charCodeAt(i)) {
                        if (!a) {
                          r = i + 1;
                          break;
                        }
                      } else -1 === o && ((a = !1), (o = i + 1));
                    return -1 === o ? '' : e.slice(r, o);
                  },
                  extname: function(e) {
                    n(e);
                    for (
                      var t = -1,
                        i = 0,
                        r = -1,
                        o = !0,
                        a = 0,
                        s = e.length - 1;
                      s >= 0;
                      --s
                    ) {
                      var l = e.charCodeAt(s);
                      if (47 !== l)
                        -1 === r && ((o = !1), (r = s + 1)),
                          46 === l
                            ? -1 === t
                              ? (t = s)
                              : 1 !== a && (a = 1)
                            : -1 !== t && (a = -1);
                      else if (!o) {
                        i = s + 1;
                        break;
                      }
                    }
                    return -1 === t ||
                      -1 === r ||
                      0 === a ||
                      (1 === a && t === r - 1 && t === i + 1)
                      ? ''
                      : e.slice(t, r);
                  },
                  format: function(e) {
                    if (null === e || 'object' != typeof e)
                      throw new TypeError(
                        'The "pathObject" argument must be of type Object. Received type ' +
                          typeof e,
                      );
                    return (function(e, t) {
                      var n = t.dir || t.root,
                        i = t.base || (t.name || '') + (t.ext || '');
                      return n ? (n === t.root ? n + i : n + '/' + i) : i;
                    })(0, e);
                  },
                  parse: function(e) {
                    n(e);
                    var t = { root: '', dir: '', base: '', ext: '', name: '' };
                    if (0 === e.length) return t;
                    var i,
                      r = e.charCodeAt(0),
                      o = 47 === r;
                    o ? ((t.root = '/'), (i = 1)) : (i = 0);
                    for (
                      var a = -1,
                        s = 0,
                        l = -1,
                        h = !0,
                        c = e.length - 1,
                        d = 0;
                      c >= i;
                      --c
                    )
                      if (47 !== (r = e.charCodeAt(c)))
                        -1 === l && ((h = !1), (l = c + 1)),
                          46 === r
                            ? -1 === a
                              ? (a = c)
                              : 1 !== d && (d = 1)
                            : -1 !== a && (d = -1);
                      else if (!h) {
                        s = c + 1;
                        break;
                      }
                    return (
                      -1 === a ||
                      -1 === l ||
                      0 === d ||
                      (1 === d && a === l - 1 && a === s + 1)
                        ? -1 !== l &&
                          (t.base = t.name =
                            0 === s && o ? e.slice(1, l) : e.slice(s, l))
                        : (0 === s && o
                            ? ((t.name = e.slice(1, a)),
                              (t.base = e.slice(1, l)))
                            : ((t.name = e.slice(s, a)),
                              (t.base = e.slice(s, l))),
                          (t.ext = e.slice(a, l))),
                      s > 0 ? (t.dir = e.slice(0, s - 1)) : o && (t.dir = '/'),
                      t
                    );
                  },
                  sep: '/',
                  delimiter: ':',
                  win32: null,
                  posix: null,
                };
                (r.posix = r), (t.exports = r);
              },
              447: (t, n, i) => {
                var r;
                if (
                  (i.r(n),
                  i.d(n, { URI: () => f, Utils: () => x }),
                  'object' == typeof e)
                )
                  r = 'win32' === e.platform;
                else if ('object' == typeof navigator) {
                  var o = navigator.userAgent;
                  r = o.indexOf('Windows') >= 0;
                }
                var a,
                  s,
                  l =
                    ((a = function(e, t) {
                      return (a =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function(e, t) {
                            e.__proto__ = t;
                          }) ||
                        function(e, t) {
                          for (var n in t)
                            Object.prototype.hasOwnProperty.call(t, n) &&
                              (e[n] = t[n]);
                        })(e, t);
                    }),
                    function(e, t) {
                      function n() {
                        this.constructor = e;
                      }
                      a(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((n.prototype = t.prototype), new n()));
                    }),
                  h = /^\w[\w\d+.-]*$/,
                  c = /^\//,
                  d = /^\/\//,
                  u = '',
                  p = '/',
                  m = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                  f = (function() {
                    function e(e, t, n, i, r, o) {
                      void 0 === o && (o = !1),
                        'object' == typeof e
                          ? ((this.scheme = e.scheme || u),
                            (this.authority = e.authority || u),
                            (this.path = e.path || u),
                            (this.query = e.query || u),
                            (this.fragment = e.fragment || u))
                          : ((this.scheme = (function(e, t) {
                              return e || t ? e : 'file';
                            })(e, o)),
                            (this.authority = t || u),
                            (this.path = (function(e, t) {
                              switch (e) {
                                case 'https':
                                case 'http':
                                case 'file':
                                  t ? t[0] !== p && (t = p + t) : (t = p);
                              }
                              return t;
                            })(this.scheme, n || u)),
                            (this.query = i || u),
                            (this.fragment = r || u),
                            (function(e, t) {
                              if (!e.scheme && t)
                                throw new Error(
                                  '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                                    e.authority +
                                    '", path: "' +
                                    e.path +
                                    '", query: "' +
                                    e.query +
                                    '", fragment: "' +
                                    e.fragment +
                                    '"}',
                                );
                              if (e.scheme && !h.test(e.scheme))
                                throw new Error(
                                  '[UriError]: Scheme contains illegal characters.',
                                );
                              if (e.path)
                                if (e.authority) {
                                  if (!c.test(e.path))
                                    throw new Error(
                                      '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
                                    );
                                } else if (d.test(e.path))
                                  throw new Error(
                                    '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
                                  );
                            })(this, o));
                    }
                    return (
                      (e.isUri = function(t) {
                        return (
                          t instanceof e ||
                          (!!t &&
                            'string' == typeof t.authority &&
                            'string' == typeof t.fragment &&
                            'string' == typeof t.path &&
                            'string' == typeof t.query &&
                            'string' == typeof t.scheme &&
                            'function' == typeof t.fsPath &&
                            'function' == typeof t.with &&
                            'function' == typeof t.toString)
                        );
                      }),
                      Object.defineProperty(e.prototype, 'fsPath', {
                        get: function() {
                          return y(this, !1);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.with = function(e) {
                        if (!e) return this;
                        var t = e.scheme,
                          n = e.authority,
                          i = e.path,
                          r = e.query,
                          o = e.fragment;
                        return (
                          void 0 === t
                            ? (t = this.scheme)
                            : null === t && (t = u),
                          void 0 === n
                            ? (n = this.authority)
                            : null === n && (n = u),
                          void 0 === i
                            ? (i = this.path)
                            : null === i && (i = u),
                          void 0 === r
                            ? (r = this.query)
                            : null === r && (r = u),
                          void 0 === o
                            ? (o = this.fragment)
                            : null === o && (o = u),
                          t === this.scheme &&
                          n === this.authority &&
                          i === this.path &&
                          r === this.query &&
                          o === this.fragment
                            ? this
                            : new b(t, n, i, r, o)
                        );
                      }),
                      (e.parse = function(e, t) {
                        void 0 === t && (t = !1);
                        var n = m.exec(e);
                        return n
                          ? new b(
                              n[2] || u,
                              S(n[4] || u),
                              S(n[5] || u),
                              S(n[7] || u),
                              S(n[9] || u),
                              t,
                            )
                          : new b(u, u, u, u, u);
                      }),
                      (e.file = function(e) {
                        var t = u;
                        if (
                          (r && (e = e.replace(/\\/g, p)),
                          e[0] === p && e[1] === p)
                        ) {
                          var n = e.indexOf(p, 2);
                          -1 === n
                            ? ((t = e.substring(2)), (e = p))
                            : ((t = e.substring(2, n)),
                              (e = e.substring(n) || p));
                        }
                        return new b('file', t, e, u, u);
                      }),
                      (e.from = function(e) {
                        return new b(
                          e.scheme,
                          e.authority,
                          e.path,
                          e.query,
                          e.fragment,
                        );
                      }),
                      (e.prototype.toString = function(e) {
                        return void 0 === e && (e = !1), T(this, e);
                      }),
                      (e.prototype.toJSON = function() {
                        return this;
                      }),
                      (e.revive = function(t) {
                        if (t) {
                          if (t instanceof e) return t;
                          var n = new b(t);
                          return (
                            (n._formatted = t.external),
                            (n._fsPath = t._sep === g ? t.fsPath : null),
                            n
                          );
                        }
                        return t;
                      }),
                      e
                    );
                  })(),
                  g = r ? 1 : void 0,
                  b = (function(e) {
                    function t() {
                      var t = (null !== e && e.apply(this, arguments)) || this;
                      return (t._formatted = null), (t._fsPath = null), t;
                    }
                    return (
                      l(t, e),
                      Object.defineProperty(t.prototype, 'fsPath', {
                        get: function() {
                          return (
                            this._fsPath || (this._fsPath = y(this, !1)),
                            this._fsPath
                          );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (t.prototype.toString = function(e) {
                        return (
                          void 0 === e && (e = !1),
                          e
                            ? T(this, !0)
                            : (this._formatted ||
                                (this._formatted = T(this, !1)),
                              this._formatted)
                        );
                      }),
                      (t.prototype.toJSON = function() {
                        var e = { $mid: 1 };
                        return (
                          this._fsPath &&
                            ((e.fsPath = this._fsPath), (e._sep = g)),
                          this._formatted && (e.external = this._formatted),
                          this.path && (e.path = this.path),
                          this.scheme && (e.scheme = this.scheme),
                          this.authority && (e.authority = this.authority),
                          this.query && (e.query = this.query),
                          this.fragment && (e.fragment = this.fragment),
                          e
                        );
                      }),
                      t
                    );
                  })(f),
                  _ =
                    (((s = {})[58] = '%3A'),
                    (s[47] = '%2F'),
                    (s[63] = '%3F'),
                    (s[35] = '%23'),
                    (s[91] = '%5B'),
                    (s[93] = '%5D'),
                    (s[64] = '%40'),
                    (s[33] = '%21'),
                    (s[36] = '%24'),
                    (s[38] = '%26'),
                    (s[39] = '%27'),
                    (s[40] = '%28'),
                    (s[41] = '%29'),
                    (s[42] = '%2A'),
                    (s[43] = '%2B'),
                    (s[44] = '%2C'),
                    (s[59] = '%3B'),
                    (s[61] = '%3D'),
                    (s[32] = '%20'),
                    s);
                function v(e, t) {
                  for (var n = void 0, i = -1, r = 0; r < e.length; r++) {
                    var o = e.charCodeAt(r);
                    if (
                      (o >= 97 && o <= 122) ||
                      (o >= 65 && o <= 90) ||
                      (o >= 48 && o <= 57) ||
                      45 === o ||
                      46 === o ||
                      95 === o ||
                      126 === o ||
                      (t && 47 === o)
                    )
                      -1 !== i &&
                        ((n += encodeURIComponent(e.substring(i, r))),
                        (i = -1)),
                        void 0 !== n && (n += e.charAt(r));
                    else {
                      void 0 === n && (n = e.substr(0, r));
                      var a = _[o];
                      void 0 !== a
                        ? (-1 !== i &&
                            ((n += encodeURIComponent(e.substring(i, r))),
                            (i = -1)),
                          (n += a))
                        : -1 === i && (i = r);
                    }
                  }
                  return (
                    -1 !== i && (n += encodeURIComponent(e.substring(i))),
                    void 0 !== n ? n : e
                  );
                }
                function w(e) {
                  for (var t = void 0, n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    35 === i || 63 === i
                      ? (void 0 === t && (t = e.substr(0, n)), (t += _[i]))
                      : void 0 !== t && (t += e[n]);
                  }
                  return void 0 !== t ? t : e;
                }
                function y(e, t) {
                  var n;
                  return (
                    (n =
                      e.authority && e.path.length > 1 && 'file' === e.scheme
                        ? '//' + e.authority + e.path
                        : 47 === e.path.charCodeAt(0) &&
                          ((e.path.charCodeAt(1) >= 65 &&
                            e.path.charCodeAt(1) <= 90) ||
                            (e.path.charCodeAt(1) >= 97 &&
                              e.path.charCodeAt(1) <= 122)) &&
                          58 === e.path.charCodeAt(2)
                        ? t
                          ? e.path.substr(1)
                          : e.path[1].toLowerCase() + e.path.substr(2)
                        : e.path),
                    r && (n = n.replace(/\//g, '\\')),
                    n
                  );
                }
                function T(e, t) {
                  var n = t ? w : v,
                    i = '',
                    r = e.scheme,
                    o = e.authority,
                    a = e.path,
                    s = e.query,
                    l = e.fragment;
                  if (
                    (r && ((i += r), (i += ':')),
                    (o || 'file' === r) && ((i += p), (i += p)),
                    o)
                  ) {
                    var h = o.indexOf('@');
                    if (-1 !== h) {
                      var c = o.substr(0, h);
                      (o = o.substr(h + 1)),
                        -1 === (h = c.indexOf(':'))
                          ? (i += n(c, !1))
                          : ((i += n(c.substr(0, h), !1)),
                            (i += ':'),
                            (i += n(c.substr(h + 1), !1))),
                        (i += '@');
                    }
                    -1 === (h = (o = o.toLowerCase()).indexOf(':'))
                      ? (i += n(o, !1))
                      : ((i += n(o.substr(0, h), !1)), (i += o.substr(h)));
                  }
                  if (a) {
                    if (
                      a.length >= 3 &&
                      47 === a.charCodeAt(0) &&
                      58 === a.charCodeAt(2)
                    )
                      (d = a.charCodeAt(1)) >= 65 &&
                        d <= 90 &&
                        (a =
                          '/' +
                          String.fromCharCode(d + 32) +
                          ':' +
                          a.substr(3));
                    else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
                      var d;
                      (d = a.charCodeAt(0)) >= 65 &&
                        d <= 90 &&
                        (a = String.fromCharCode(d + 32) + ':' + a.substr(2));
                    }
                    i += n(a, !0);
                  }
                  return (
                    s && ((i += '?'), (i += n(s, !1))),
                    l && ((i += '#'), (i += t ? l : v(l, !1))),
                    i
                  );
                }
                var k = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
                function S(e) {
                  return e.match(k)
                    ? e.replace(k, function(e) {
                        return (function e(t) {
                          try {
                            return decodeURIComponent(t);
                          } catch (n) {
                            return t.length > 3
                              ? t.substr(0, 3) + e(t.substr(3))
                              : t;
                          }
                        })(e);
                      })
                    : e;
                }
                var x,
                  L = i(470),
                  C = function() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                      e += arguments[t].length;
                    var i = Array(e),
                      r = 0;
                    for (t = 0; t < n; t++)
                      for (
                        var o = arguments[t], a = 0, s = o.length;
                        a < s;
                        a++, r++
                      )
                        i[r] = o[a];
                    return i;
                  },
                  E = L.posix || L;
                !(function(e) {
                  (e.joinPath = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    return e.with({ path: E.join.apply(E, C([e.path], t)) });
                  }),
                    (e.resolvePath = function(e) {
                      for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                      var i = e.path || '/';
                      return e.with({ path: E.resolve.apply(E, C([i], t)) });
                    }),
                    (e.dirname = function(e) {
                      var t = E.dirname(e.path);
                      return 1 === t.length && 46 === t.charCodeAt(0)
                        ? e
                        : e.with({ path: t });
                    }),
                    (e.basename = function(e) {
                      return E.basename(e.path);
                    }),
                    (e.extname = function(e) {
                      return E.extname(e.path);
                    });
                })(x || (x = {}));
              },
            },
            n = {};
          function i(e) {
            if (n[e]) return n[e].exports;
            var r = (n[e] = { exports: {} });
            return t[e](r, r.exports, i), r.exports;
          }
          return (
            (i.d = (e, t) => {
              for (var n in t)
                i.o(t, n) &&
                  !i.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
            (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (i.r = e => {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            i(447)
          );
        })());
      const { URI: r, Utils: o } = i;
    }.call(this, n(2)));
  },
  6: function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'initialize', function() {
        return Pt;
      });
    const i = new (class {
      constructor() {
        (this.listeners = []),
          (this.unexpectedErrorHandler = function(e) {
            setTimeout(() => {
              if (e.stack) throw new Error(e.message + '\n\n' + e.stack);
              throw e;
            }, 0);
          });
      }
      emit(e) {
        this.listeners.forEach(t => {
          t(e);
        });
      }
      onUnexpectedError(e) {
        this.unexpectedErrorHandler(e), this.emit(e);
      }
      onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e);
      }
    })();
    function r(e) {
      a(e) || i.onUnexpectedError(e);
    }
    function o(e) {
      if (e instanceof Error) {
        let { name: t, message: n } = e;
        return {
          $isError: !0,
          name: t,
          message: n,
          stack: e.stacktrace || e.stack,
        };
      }
      return e;
    }
    function a(e) {
      return (
        e instanceof Error && 'Canceled' === e.name && 'Canceled' === e.message
      );
    }
    var s;
    !(function(e) {
      e.is = function(e) {
        return (
          e && 'object' == typeof e && 'function' == typeof e[Symbol.iterator]
        );
      };
      const t = Object.freeze([]);
      (e.empty = function() {
        return t;
      }),
        (e.single = function*(e) {
          yield e;
        }),
        (e.from = function(e) {
          return e || t;
        }),
        (e.isEmpty = function(e) {
          return !e || !0 === e[Symbol.iterator]().next().done;
        }),
        (e.first = function(e) {
          return e[Symbol.iterator]().next().value;
        }),
        (e.some = function(e, t) {
          for (const n of e) if (t(n)) return !0;
          return !1;
        }),
        (e.find = function(e, t) {
          for (const n of e) if (t(n)) return n;
        }),
        (e.filter = function*(e, t) {
          for (const n of e) t(n) && (yield n);
        }),
        (e.map = function*(e, t) {
          let n = 0;
          for (const i of e) yield t(i, n++);
        }),
        (e.concat = function*(...e) {
          for (const t of e) for (const e of t) yield e;
        }),
        (e.concatNested = function*(e) {
          for (const t of e) for (const e of t) yield e;
        }),
        (e.reduce = function(e, t, n) {
          let i = n;
          for (const n of e) i = t(i, n);
          return i;
        }),
        (e.slice = function*(e, t, n = e.length) {
          for (
            t < 0 && (t += e.length),
              n < 0 ? (n += e.length) : n > e.length && (n = e.length);
            t < n;
            t++
          )
            yield e[t];
        }),
        (e.consume = function(t, n = Number.POSITIVE_INFINITY) {
          const i = [];
          if (0 === n) return [i, t];
          const r = t[Symbol.iterator]();
          for (let t = 0; t < n; t++) {
            const t = r.next();
            if (t.done) return [i, e.empty()];
            i.push(t.value);
          }
          return [i, { [Symbol.iterator]: () => r }];
        }),
        (e.equals = function(e, t, n = (e, t) => e === t) {
          const i = e[Symbol.iterator](),
            r = t[Symbol.iterator]();
          for (;;) {
            const e = i.next(),
              t = r.next();
            if (e.done !== t.done) return !1;
            if (e.done) return !0;
            if (!n(e.value, t.value)) return !1;
          }
        });
    })(s || (s = {}));
    let l = null;
    function h(e) {
      l && l.markTracked(e);
    }
    function c(e) {
      return l ? (l.trackDisposable(e), e) : e;
    }
    class d extends Error {
      constructor(e) {
        super(
          `Encountered errors while disposing of store. Errors: [${e.join(
            ', ',
          )}]`,
        ),
          (this.errors = e);
      }
    }
    function u(e) {
      if (s.is(e)) {
        let t = [];
        for (const n of e)
          if (n) {
            h(n);
            try {
              n.dispose();
            } catch (e) {
              t.push(e);
            }
          }
        if (1 === t.length) throw t[0];
        if (t.length > 1) throw new d(t);
        return Array.isArray(e) ? [] : e;
      }
      if (e) return h(e), e.dispose(), e;
    }
    function p(...e) {
      return (
        e.forEach(h),
        (function(e) {
          const t = c({
            dispose: () => {
              h(t), e();
            },
          });
          return t;
        })(() => u(e))
      );
    }
    class m {
      constructor() {
        (this._toDispose = new Set()), (this._isDisposed = !1);
      }
      dispose() {
        this._isDisposed || (h(this), (this._isDisposed = !0), this.clear());
      }
      clear() {
        try {
          u(this._toDispose.values());
        } finally {
          this._toDispose.clear();
        }
      }
      add(e) {
        if (!e) return e;
        if (e === this)
          throw new Error('Cannot register a disposable on itself!');
        return (
          h(e),
          this._isDisposed
            ? m.DISABLE_DISPOSED_WARNING ||
              console.warn(
                new Error(
                  'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!',
                ).stack,
              )
            : this._toDispose.add(e),
          e
        );
      }
    }
    m.DISABLE_DISPOSED_WARNING = !1;
    class f {
      constructor() {
        (this._store = new m()), c(this);
      }
      dispose() {
        h(this), this._store.dispose();
      }
      _register(e) {
        if (e === this)
          throw new Error('Cannot register a disposable on itself!');
        return this._store.add(e);
      }
    }
    f.None = Object.freeze({ dispose() {} });
    var g = n(0);
    function b(e) {
      const t = [];
      for (const n of (function(e) {
        let t = [],
          n = Object.getPrototypeOf(e);
        for (; Object.prototype !== n; )
          (t = t.concat(Object.getOwnPropertyNames(n))),
            (n = Object.getPrototypeOf(n));
        return t;
      })(e))
        'function' == typeof e[n] && t.push(n);
      return t;
    }
    function _(e, t) {
      const n = e =>
        function() {
          const n = Array.prototype.slice.call(arguments, 0);
          return t(e, n);
        };
      let i = {};
      for (const t of e) i[t] = n(t);
      return i;
    }
    class v {
      constructor(e) {
        (this._workerId = -1),
          (this._handler = e),
          (this._lastSentReq = 0),
          (this._pendingReplies = Object.create(null));
      }
      setWorkerId(e) {
        this._workerId = e;
      }
      sendMessage(e, t) {
        let n = String(++this._lastSentReq);
        return new Promise((i, r) => {
          (this._pendingReplies[n] = { resolve: i, reject: r }),
            this._send({
              vsWorker: this._workerId,
              req: n,
              method: e,
              args: t,
            });
        });
      }
      handleMessage(e) {
        e &&
          e.vsWorker &&
          ((-1 !== this._workerId && e.vsWorker !== this._workerId) ||
            this._handleMessage(e));
      }
      _handleMessage(e) {
        if (e.seq) {
          let t = e;
          if (!this._pendingReplies[t.seq])
            return void console.warn('Got reply to unknown seq');
          let n = this._pendingReplies[t.seq];
          if ((delete this._pendingReplies[t.seq], t.err)) {
            let e = t.err;
            return (
              t.err.$isError &&
                ((e = new Error()),
                (e.name = t.err.name),
                (e.message = t.err.message),
                (e.stack = t.err.stack)),
              void n.reject(e)
            );
          }
          return void n.resolve(t.res);
        }
        let t = e,
          n = t.req;
        this._handler.handleMessage(t.method, t.args).then(
          e => {
            this._send({
              vsWorker: this._workerId,
              seq: n,
              res: e,
              err: void 0,
            });
          },
          e => {
            e.detail instanceof Error && (e.detail = o(e.detail)),
              this._send({
                vsWorker: this._workerId,
                seq: n,
                res: void 0,
                err: o(e),
              });
          },
        );
      }
      _send(e) {
        let t = [];
        if (e.req) {
          const n = e;
          for (let e = 0; e < n.args.length; e++)
            n.args[e] instanceof ArrayBuffer && t.push(n.args[e]);
        } else {
          const n = e;
          n.res instanceof ArrayBuffer && t.push(n.res);
        }
        this._handler.sendMessage(e, t);
      }
    }
    class w {
      constructor(e, t) {
        (this._requestHandlerFactory = t),
          (this._requestHandler = null),
          (this._protocol = new v({
            sendMessage: (t, n) => {
              e(t, n);
            },
            handleMessage: (e, t) => this._handleMessage(e, t),
          }));
      }
      onmessage(e) {
        this._protocol.handleMessage(e);
      }
      _handleMessage(e, t) {
        if ('$initialize' === e) return this.initialize(t[0], t[1], t[2], t[3]);
        if (
          !this._requestHandler ||
          'function' != typeof this._requestHandler[e]
        )
          return Promise.reject(
            new Error('Missing requestHandler or method: ' + e),
          );
        try {
          return Promise.resolve(
            this._requestHandler[e].apply(this._requestHandler, t),
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }
      initialize(e, t, n, i) {
        this._protocol.setWorkerId(e);
        const r = _(i, (e, t) => this._protocol.sendMessage(e, t));
        return this._requestHandlerFactory
          ? ((this._requestHandler = this._requestHandlerFactory(r)),
            Promise.resolve(b(this._requestHandler)))
          : (t &&
              (void 0 !== t.baseUrl && delete t.baseUrl,
              void 0 !== t.paths && void 0 !== t.paths.vs && delete t.paths.vs,
              void 0 !== typeof t.trustedTypesPolicy &&
                delete t.trustedTypesPolicy,
              (t.catchError = !0),
              self.require.config(t)),
            new Promise((e, t) => {
              self.require(
                [n],
                n => {
                  (this._requestHandler = n.create(r)),
                    this._requestHandler
                      ? e(b(this._requestHandler))
                      : t(new Error('No RequestHandler!'));
                },
                t,
              );
            }));
      }
    }
    class y {
      constructor(e, t, n, i) {
        (this.originalStart = e),
          (this.originalLength = t),
          (this.modifiedStart = n),
          (this.modifiedLength = i);
      }
      getOriginalEnd() {
        return this.originalStart + this.originalLength;
      }
      getModifiedEnd() {
        return this.modifiedStart + this.modifiedLength;
      }
    }
    function T(e) {
      return 55296 <= e && e <= 56319;
    }
    function k(e) {
      return 56320 <= e && e <= 57343;
    }
    function S(e, t) {
      return t - 56320 + ((e - 55296) << 10) + 65536;
    }
    String.fromCharCode(65279);
    class x {
      constructor() {
        this._data = JSON.parse(
          '[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]',
        );
      }
      static getInstance() {
        return x._INSTANCE || (x._INSTANCE = new x()), x._INSTANCE;
      }
      getGraphemeBreakType(e) {
        if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4;
        if (e < 127) return 0;
        const t = this._data,
          n = t.length / 3;
        let i = 1;
        for (; i <= n; )
          if (e < t[3 * i]) i *= 2;
          else {
            if (!(e > t[3 * i + 1])) return t[3 * i + 2];
            i = 2 * i + 1;
          }
        return 0;
      }
    }
    function L(e, t) {
      return ((t << 5) - t + e) | 0;
    }
    function C(e, t) {
      t = L(149417, t);
      for (let n = 0, i = e.length; n < i; n++) t = L(e.charCodeAt(n), t);
      return t;
    }
    function E(e, t, n = 32) {
      const i = n - t;
      return ((e << t) | ((~((1 << i) - 1) & e) >>> i)) >>> 0;
    }
    function A(e, t = 0, n = e.byteLength, i = 0) {
      for (let r = 0; r < n; r++) e[t + r] = i;
    }
    function M(e, t = 32) {
      return e instanceof ArrayBuffer
        ? Array.from(new Uint8Array(e))
            .map(e => e.toString(16).padStart(2, '0'))
            .join('')
        : (function(e, t, n = '0') {
            for (; e.length < t; ) e = n + e;
            return e;
          })((e >>> 0).toString(16), t / 4);
    }
    x._INSTANCE = null;
    class R {
      constructor() {
        (this._h0 = 1732584193),
          (this._h1 = 4023233417),
          (this._h2 = 2562383102),
          (this._h3 = 271733878),
          (this._h4 = 3285377520),
          (this._buff = new Uint8Array(67)),
          (this._buffDV = new DataView(this._buff.buffer)),
          (this._buffLen = 0),
          (this._totalLen = 0),
          (this._leftoverHighSurrogate = 0),
          (this._finished = !1);
      }
      update(e) {
        const t = e.length;
        if (0 === t) return;
        const n = this._buff;
        let i,
          r,
          o = this._buffLen,
          a = this._leftoverHighSurrogate;
        for (
          0 !== a
            ? ((i = a), (r = -1), (a = 0))
            : ((i = e.charCodeAt(0)), (r = 0));
          ;

        ) {
          let s = i;
          if (T(i)) {
            if (!(r + 1 < t)) {
              a = i;
              break;
            }
            {
              const t = e.charCodeAt(r + 1);
              k(t) ? (r++, (s = S(i, t))) : (s = 65533);
            }
          } else k(i) && (s = 65533);
          if (((o = this._push(n, o, s)), r++, !(r < t))) break;
          i = e.charCodeAt(r);
        }
        (this._buffLen = o), (this._leftoverHighSurrogate = a);
      }
      _push(e, t, n) {
        return (
          n < 128
            ? (e[t++] = n)
            : n < 2048
            ? ((e[t++] = 192 | ((1984 & n) >>> 6)),
              (e[t++] = 128 | ((63 & n) >>> 0)))
            : n < 65536
            ? ((e[t++] = 224 | ((61440 & n) >>> 12)),
              (e[t++] = 128 | ((4032 & n) >>> 6)),
              (e[t++] = 128 | ((63 & n) >>> 0)))
            : ((e[t++] = 240 | ((1835008 & n) >>> 18)),
              (e[t++] = 128 | ((258048 & n) >>> 12)),
              (e[t++] = 128 | ((4032 & n) >>> 6)),
              (e[t++] = 128 | ((63 & n) >>> 0))),
          t >= 64 &&
            (this._step(),
            (t -= 64),
            (this._totalLen += 64),
            (e[0] = e[64]),
            (e[1] = e[65]),
            (e[2] = e[66])),
          t
        );
      }
      digest() {
        return (
          this._finished ||
            ((this._finished = !0),
            this._leftoverHighSurrogate &&
              ((this._leftoverHighSurrogate = 0),
              (this._buffLen = this._push(this._buff, this._buffLen, 65533))),
            (this._totalLen += this._buffLen),
            this._wrapUp()),
          M(this._h0) + M(this._h1) + M(this._h2) + M(this._h3) + M(this._h4)
        );
      }
      _wrapUp() {
        (this._buff[this._buffLen++] = 128),
          A(this._buff, this._buffLen),
          this._buffLen > 56 && (this._step(), A(this._buff));
        const e = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1),
          this._buffDV.setUint32(60, e % 4294967296, !1),
          this._step();
      }
      _step() {
        const e = R._bigBlock32,
          t = this._buffDV;
        for (let n = 0; n < 64; n += 4) e.setUint32(n, t.getUint32(n, !1), !1);
        for (let t = 64; t < 320; t += 4)
          e.setUint32(
            t,
            E(
              e.getUint32(t - 12, !1) ^
                e.getUint32(t - 32, !1) ^
                e.getUint32(t - 56, !1) ^
                e.getUint32(t - 64, !1),
              1,
            ),
            !1,
          );
        let n,
          i,
          r,
          o = this._h0,
          a = this._h1,
          s = this._h2,
          l = this._h3,
          h = this._h4;
        for (let t = 0; t < 80; t++)
          t < 20
            ? ((n = (a & s) | (~a & l)), (i = 1518500249))
            : t < 40
            ? ((n = a ^ s ^ l), (i = 1859775393))
            : t < 60
            ? ((n = (a & s) | (a & l) | (s & l)), (i = 2400959708))
            : ((n = a ^ s ^ l), (i = 3395469782)),
            (r = (E(o, 5) + n + h + i + e.getUint32(4 * t, !1)) & 4294967295),
            (h = l),
            (l = s),
            (s = E(a, 30)),
            (a = o),
            (o = r);
        (this._h0 = (this._h0 + o) & 4294967295),
          (this._h1 = (this._h1 + a) & 4294967295),
          (this._h2 = (this._h2 + s) & 4294967295),
          (this._h3 = (this._h3 + l) & 4294967295),
          (this._h4 = (this._h4 + h) & 4294967295);
      }
    }
    R._bigBlock32 = new DataView(new ArrayBuffer(320));
    class I {
      constructor(e) {
        this.source = e;
      }
      getElements() {
        const e = this.source,
          t = new Int32Array(e.length);
        for (let n = 0, i = e.length; n < i; n++) t[n] = e.charCodeAt(n);
        return t;
      }
    }
    function U(e, t, n) {
      return new W(new I(e), new I(t)).ComputeDiff(n).changes;
    }
    class N {
      static Assert(e, t) {
        if (!e) throw new Error(t);
      }
    }
    class H {
      static Copy(e, t, n, i, r) {
        for (let o = 0; o < r; o++) n[i + o] = e[t + o];
      }
      static Copy2(e, t, n, i, r) {
        for (let o = 0; o < r; o++) n[i + o] = e[t + o];
      }
    }
    class z {
      constructor() {
        (this.m_changes = []),
          (this.m_originalStart = 1073741824),
          (this.m_modifiedStart = 1073741824),
          (this.m_originalCount = 0),
          (this.m_modifiedCount = 0);
      }
      MarkNextChange() {
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
          this.m_changes.push(
            new y(
              this.m_originalStart,
              this.m_originalCount,
              this.m_modifiedStart,
              this.m_modifiedCount,
            ),
          ),
          (this.m_originalCount = 0),
          (this.m_modifiedCount = 0),
          (this.m_originalStart = 1073741824),
          (this.m_modifiedStart = 1073741824);
      }
      AddOriginalElement(e, t) {
        (this.m_originalStart = Math.min(this.m_originalStart, e)),
          (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
          this.m_originalCount++;
      }
      AddModifiedElement(e, t) {
        (this.m_originalStart = Math.min(this.m_originalStart, e)),
          (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
          this.m_modifiedCount++;
      }
      getChanges() {
        return (
          (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
            this.MarkNextChange(),
          this.m_changes
        );
      }
      getReverseChanges() {
        return (
          (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
            this.MarkNextChange(),
          this.m_changes.reverse(),
          this.m_changes
        );
      }
    }
    class W {
      constructor(e, t, n = null) {
        this.ContinueProcessingPredicate = n;
        const [i, r, o] = W._getElements(e),
          [a, s, l] = W._getElements(t);
        (this._hasStrings = o && l),
          (this._originalStringElements = i),
          (this._originalElementsOrHash = r),
          (this._modifiedStringElements = a),
          (this._modifiedElementsOrHash = s),
          (this.m_forwardHistory = []),
          (this.m_reverseHistory = []);
      }
      static _isStringArray(e) {
        return e.length > 0 && 'string' == typeof e[0];
      }
      static _getElements(e) {
        const t = e.getElements();
        if (W._isStringArray(t)) {
          const e = new Int32Array(t.length);
          for (let n = 0, i = t.length; n < i; n++) e[n] = C(t[n], 0);
          return [t, e, !0];
        }
        return t instanceof Int32Array
          ? [[], t, !1]
          : [[], new Int32Array(t), !1];
      }
      ElementsAreEqual(e, t) {
        return (
          this._originalElementsOrHash[e] === this._modifiedElementsOrHash[t] &&
          (!this._hasStrings ||
            this._originalStringElements[e] === this._modifiedStringElements[t])
        );
      }
      OriginalElementsAreEqual(e, t) {
        return (
          this._originalElementsOrHash[e] === this._originalElementsOrHash[t] &&
          (!this._hasStrings ||
            this._originalStringElements[e] === this._originalStringElements[t])
        );
      }
      ModifiedElementsAreEqual(e, t) {
        return (
          this._modifiedElementsOrHash[e] === this._modifiedElementsOrHash[t] &&
          (!this._hasStrings ||
            this._modifiedStringElements[e] === this._modifiedStringElements[t])
        );
      }
      ComputeDiff(e) {
        return this._ComputeDiff(
          0,
          this._originalElementsOrHash.length - 1,
          0,
          this._modifiedElementsOrHash.length - 1,
          e,
        );
      }
      _ComputeDiff(e, t, n, i, r) {
        const o = [!1];
        let a = this.ComputeDiffRecursive(e, t, n, i, o);
        return (
          r && (a = this.PrettifyChanges(a)), { quitEarly: o[0], changes: a }
        );
      }
      ComputeDiffRecursive(e, t, n, i, r) {
        for (r[0] = !1; e <= t && n <= i && this.ElementsAreEqual(e, n); )
          e++, n++;
        for (; t >= e && i >= n && this.ElementsAreEqual(t, i); ) t--, i--;
        if (e > t || n > i) {
          let r;
          return (
            n <= i
              ? (N.Assert(
                  e === t + 1,
                  'originalStart should only be one more than originalEnd',
                ),
                (r = [new y(e, 0, n, i - n + 1)]))
              : e <= t
              ? (N.Assert(
                  n === i + 1,
                  'modifiedStart should only be one more than modifiedEnd',
                ),
                (r = [new y(e, t - e + 1, n, 0)]))
              : (N.Assert(
                  e === t + 1,
                  'originalStart should only be one more than originalEnd',
                ),
                N.Assert(
                  n === i + 1,
                  'modifiedStart should only be one more than modifiedEnd',
                ),
                (r = [])),
            r
          );
        }
        const o = [0],
          a = [0],
          s = this.ComputeRecursionPoint(e, t, n, i, o, a, r),
          l = o[0],
          h = a[0];
        if (null !== s) return s;
        if (!r[0]) {
          const o = this.ComputeDiffRecursive(e, l, n, h, r);
          let a = [];
          return (
            (a = r[0]
              ? [new y(l + 1, t - (l + 1) + 1, h + 1, i - (h + 1) + 1)]
              : this.ComputeDiffRecursive(l + 1, t, h + 1, i, r)),
            this.ConcatenateChanges(o, a)
          );
        }
        return [new y(e, t - e + 1, n, i - n + 1)];
      }
      WALKTRACE(e, t, n, i, r, o, a, s, l, h, c, d, u, p, m, f, g, b) {
        let _ = null,
          v = null,
          w = new z(),
          T = t,
          k = n,
          S = u[0] - f[0] - i,
          x = -1073741824,
          L = this.m_forwardHistory.length - 1;
        do {
          const t = S + e;
          t === T || (t < k && l[t - 1] < l[t + 1])
            ? ((p = (c = l[t + 1]) - S - i),
              c < x && w.MarkNextChange(),
              (x = c),
              w.AddModifiedElement(c + 1, p),
              (S = t + 1 - e))
            : ((p = (c = l[t - 1] + 1) - S - i),
              c < x && w.MarkNextChange(),
              (x = c - 1),
              w.AddOriginalElement(c, p + 1),
              (S = t - 1 - e)),
            L >= 0 &&
              ((e = (l = this.m_forwardHistory[L])[0]),
              (T = 1),
              (k = l.length - 1));
        } while (--L >= -1);
        if (((_ = w.getReverseChanges()), b[0])) {
          let e = u[0] + 1,
            t = f[0] + 1;
          if (null !== _ && _.length > 0) {
            const n = _[_.length - 1];
            (e = Math.max(e, n.getOriginalEnd())),
              (t = Math.max(t, n.getModifiedEnd()));
          }
          v = [new y(e, d - e + 1, t, m - t + 1)];
        } else {
          (w = new z()),
            (T = o),
            (k = a),
            (S = u[0] - f[0] - s),
            (x = 1073741824),
            (L = g
              ? this.m_reverseHistory.length - 1
              : this.m_reverseHistory.length - 2);
          do {
            const e = S + r;
            e === T || (e < k && h[e - 1] >= h[e + 1])
              ? ((p = (c = h[e + 1] - 1) - S - s),
                c > x && w.MarkNextChange(),
                (x = c + 1),
                w.AddOriginalElement(c + 1, p + 1),
                (S = e + 1 - r))
              : ((p = (c = h[e - 1]) - S - s),
                c > x && w.MarkNextChange(),
                (x = c),
                w.AddModifiedElement(c + 1, p + 1),
                (S = e - 1 - r)),
              L >= 0 &&
                ((r = (h = this.m_reverseHistory[L])[0]),
                (T = 1),
                (k = h.length - 1));
          } while (--L >= -1);
          v = w.getChanges();
        }
        return this.ConcatenateChanges(_, v);
      }
      ComputeRecursionPoint(e, t, n, i, r, o, a) {
        let s = 0,
          l = 0,
          h = 0,
          c = 0,
          d = 0,
          u = 0;
        e--,
          n--,
          (r[0] = 0),
          (o[0] = 0),
          (this.m_forwardHistory = []),
          (this.m_reverseHistory = []);
        const p = t - e + (i - n),
          m = p + 1,
          f = new Int32Array(m),
          g = new Int32Array(m),
          b = i - n,
          _ = t - e,
          v = e - n,
          w = t - i,
          T = (_ - b) % 2 == 0;
        (f[b] = e), (g[_] = t), (a[0] = !1);
        for (let k = 1; k <= p / 2 + 1; k++) {
          let p = 0,
            S = 0;
          (h = this.ClipDiagonalBound(b - k, k, b, m)),
            (c = this.ClipDiagonalBound(b + k, k, b, m));
          for (let e = h; e <= c; e += 2) {
            (s =
              e === h || (e < c && f[e - 1] < f[e + 1])
                ? f[e + 1]
                : f[e - 1] + 1),
              (l = s - (e - b) - v);
            const n = s;
            for (; s < t && l < i && this.ElementsAreEqual(s + 1, l + 1); )
              s++, l++;
            if (
              ((f[e] = s),
              s + l > p + S && ((p = s), (S = l)),
              !T && Math.abs(e - _) <= k - 1 && s >= g[e])
            )
              return (
                (r[0] = s),
                (o[0] = l),
                n <= g[e] && k <= 1448
                  ? this.WALKTRACE(
                      b,
                      h,
                      c,
                      v,
                      _,
                      d,
                      u,
                      w,
                      f,
                      g,
                      s,
                      t,
                      r,
                      l,
                      i,
                      o,
                      T,
                      a,
                    )
                  : null
              );
          }
          const x = (p - e + (S - n) - k) / 2;
          if (
            null !== this.ContinueProcessingPredicate &&
            !this.ContinueProcessingPredicate(p, x)
          )
            return (
              (a[0] = !0),
              (r[0] = p),
              (o[0] = S),
              x > 0 && k <= 1448
                ? this.WALKTRACE(
                    b,
                    h,
                    c,
                    v,
                    _,
                    d,
                    u,
                    w,
                    f,
                    g,
                    s,
                    t,
                    r,
                    l,
                    i,
                    o,
                    T,
                    a,
                  )
                : (e++, n++, [new y(e, t - e + 1, n, i - n + 1)])
            );
          (d = this.ClipDiagonalBound(_ - k, k, _, m)),
            (u = this.ClipDiagonalBound(_ + k, k, _, m));
          for (let p = d; p <= u; p += 2) {
            (s =
              p === d || (p < u && g[p - 1] >= g[p + 1])
                ? g[p + 1] - 1
                : g[p - 1]),
              (l = s - (p - _) - w);
            const m = s;
            for (; s > e && l > n && this.ElementsAreEqual(s, l); ) s--, l--;
            if (((g[p] = s), T && Math.abs(p - b) <= k && s <= f[p]))
              return (
                (r[0] = s),
                (o[0] = l),
                m >= f[p] && k <= 1448
                  ? this.WALKTRACE(
                      b,
                      h,
                      c,
                      v,
                      _,
                      d,
                      u,
                      w,
                      f,
                      g,
                      s,
                      t,
                      r,
                      l,
                      i,
                      o,
                      T,
                      a,
                    )
                  : null
              );
          }
          if (k <= 1447) {
            let e = new Int32Array(c - h + 2);
            (e[0] = b - h + 1),
              H.Copy2(f, h, e, 1, c - h + 1),
              this.m_forwardHistory.push(e),
              (e = new Int32Array(u - d + 2)),
              (e[0] = _ - d + 1),
              H.Copy2(g, d, e, 1, u - d + 1),
              this.m_reverseHistory.push(e);
          }
        }
        return this.WALKTRACE(
          b,
          h,
          c,
          v,
          _,
          d,
          u,
          w,
          f,
          g,
          s,
          t,
          r,
          l,
          i,
          o,
          T,
          a,
        );
      }
      PrettifyChanges(e) {
        for (let t = 0; t < e.length; t++) {
          const n = e[t],
            i =
              t < e.length - 1
                ? e[t + 1].originalStart
                : this._originalElementsOrHash.length,
            r =
              t < e.length - 1
                ? e[t + 1].modifiedStart
                : this._modifiedElementsOrHash.length,
            o = n.originalLength > 0,
            a = n.modifiedLength > 0;
          for (
            ;
            n.originalStart + n.originalLength < i &&
            n.modifiedStart + n.modifiedLength < r &&
            (!o ||
              this.OriginalElementsAreEqual(
                n.originalStart,
                n.originalStart + n.originalLength,
              )) &&
            (!a ||
              this.ModifiedElementsAreEqual(
                n.modifiedStart,
                n.modifiedStart + n.modifiedLength,
              ));

          )
            n.originalStart++, n.modifiedStart++;
          let s = [null];
          t < e.length - 1 &&
            this.ChangesOverlap(e[t], e[t + 1], s) &&
            ((e[t] = s[0]), e.splice(t + 1, 1), t--);
        }
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t];
          let i = 0,
            r = 0;
          if (t > 0) {
            const n = e[t - 1];
            (i = n.originalStart + n.originalLength),
              (r = n.modifiedStart + n.modifiedLength);
          }
          const o = n.originalLength > 0,
            a = n.modifiedLength > 0;
          let s = 0,
            l = this._boundaryScore(
              n.originalStart,
              n.originalLength,
              n.modifiedStart,
              n.modifiedLength,
            );
          for (let e = 1; ; e++) {
            const t = n.originalStart - e,
              h = n.modifiedStart - e;
            if (t < i || h < r) break;
            if (o && !this.OriginalElementsAreEqual(t, t + n.originalLength))
              break;
            if (a && !this.ModifiedElementsAreEqual(h, h + n.modifiedLength))
              break;
            const c =
              (t === i && h === r ? 5 : 0) +
              this._boundaryScore(t, n.originalLength, h, n.modifiedLength);
            c > l && ((l = c), (s = e));
          }
          (n.originalStart -= s), (n.modifiedStart -= s);
          const h = [null];
          t > 0 &&
            this.ChangesOverlap(e[t - 1], e[t], h) &&
            ((e[t - 1] = h[0]), e.splice(t, 1), t++);
        }
        if (this._hasStrings)
          for (let t = 1, n = e.length; t < n; t++) {
            const n = e[t - 1],
              i = e[t],
              r = i.originalStart - n.originalStart - n.originalLength,
              o = n.originalStart,
              a = i.originalStart + i.originalLength,
              s = a - o,
              l = n.modifiedStart,
              h = i.modifiedStart + i.modifiedLength,
              c = h - l;
            if (r < 5 && s < 20 && c < 20) {
              const e = this._findBetterContiguousSequence(o, s, l, c, r);
              if (e) {
                const [t, o] = e;
                (t === n.originalStart + n.originalLength &&
                  o === n.modifiedStart + n.modifiedLength) ||
                  ((n.originalLength = t - n.originalStart),
                  (n.modifiedLength = o - n.modifiedStart),
                  (i.originalStart = t + r),
                  (i.modifiedStart = o + r),
                  (i.originalLength = a - i.originalStart),
                  (i.modifiedLength = h - i.modifiedStart));
              }
            }
          }
        return e;
      }
      _findBetterContiguousSequence(e, t, n, i, r) {
        if (t < r || i < r) return null;
        const o = e + t - r + 1,
          a = n + i - r + 1;
        let s = 0,
          l = 0,
          h = 0;
        for (let t = e; t < o; t++)
          for (let e = n; e < a; e++) {
            const n = this._contiguousSequenceScore(t, e, r);
            n > 0 && n > s && ((s = n), (l = t), (h = e));
          }
        return s > 0 ? [l, h] : null;
      }
      _contiguousSequenceScore(e, t, n) {
        let i = 0;
        for (let r = 0; r < n; r++) {
          if (!this.ElementsAreEqual(e + r, t + r)) return 0;
          i += this._originalStringElements[e + r].length;
        }
        return i;
      }
      _OriginalIsBoundary(e) {
        return (
          e <= 0 ||
          e >= this._originalElementsOrHash.length - 1 ||
          (this._hasStrings && /^\s*$/.test(this._originalStringElements[e]))
        );
      }
      _OriginalRegionIsBoundary(e, t) {
        if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1))
          return !0;
        if (t > 0) {
          const n = e + t;
          if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n))
            return !0;
        }
        return !1;
      }
      _ModifiedIsBoundary(e) {
        return (
          e <= 0 ||
          e >= this._modifiedElementsOrHash.length - 1 ||
          (this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]))
        );
      }
      _ModifiedRegionIsBoundary(e, t) {
        if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1))
          return !0;
        if (t > 0) {
          const n = e + t;
          if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n))
            return !0;
        }
        return !1;
      }
      _boundaryScore(e, t, n, i) {
        return (
          (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) +
          (this._ModifiedRegionIsBoundary(n, i) ? 1 : 0)
        );
      }
      ConcatenateChanges(e, t) {
        let n = [];
        if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e;
        if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
          const i = new Array(e.length + t.length - 1);
          return (
            H.Copy(e, 0, i, 0, e.length - 1),
            (i[e.length - 1] = n[0]),
            H.Copy(t, 1, i, e.length, t.length - 1),
            i
          );
        }
        {
          const n = new Array(e.length + t.length);
          return (
            H.Copy(e, 0, n, 0, e.length), H.Copy(t, 0, n, e.length, t.length), n
          );
        }
      }
      ChangesOverlap(e, t, n) {
        if (
          (N.Assert(
            e.originalStart <= t.originalStart,
            'Left change is not less than or equal to right change',
          ),
          N.Assert(
            e.modifiedStart <= t.modifiedStart,
            'Left change is not less than or equal to right change',
          ),
          e.originalStart + e.originalLength >= t.originalStart ||
            e.modifiedStart + e.modifiedLength >= t.modifiedStart)
        ) {
          const i = e.originalStart;
          let r = e.originalLength;
          const o = e.modifiedStart;
          let a = e.modifiedLength;
          return (
            e.originalStart + e.originalLength >= t.originalStart &&
              (r = t.originalStart + t.originalLength - e.originalStart),
            e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
              (a = t.modifiedStart + t.modifiedLength - e.modifiedStart),
            (n[0] = new y(i, r, o, a)),
            !0
          );
        }
        return (n[0] = null), !1;
      }
      ClipDiagonalBound(e, t, n, i) {
        if (e >= 0 && e < i) return e;
        const r = t % 2 == 0;
        if (e < 0) {
          return r === (n % 2 == 0) ? 0 : 1;
        }
        return r === ((i - n - 1) % 2 == 0) ? i - 1 : i - 2;
      }
    }
    var O = n(1);
    class D extends Error {
      constructor(e, t, n) {
        let i;
        'string' == typeof t && 0 === t.indexOf('not ')
          ? ((i = 'must not be'), (t = t.replace(/^not /, '')))
          : (i = 'must be');
        const r = -1 !== e.indexOf('.') ? 'property' : 'argument';
        let o = `The "${e}" ${r} ${i} of type ${t}`;
        (o += '. Received type ' + typeof n),
          super(o),
          (this.code = 'ERR_INVALID_ARG_TYPE');
      }
    }
    function P(e, t) {
      if ('string' != typeof e) throw new D(t, 'string', e);
    }
    function q(e) {
      return 47 === e || 92 === e;
    }
    function F(e) {
      return 47 === e;
    }
    function B(e) {
      return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
    }
    function j(e, t, n, i) {
      let r = '',
        o = 0,
        a = -1,
        s = 0,
        l = 0;
      for (let h = 0; h <= e.length; ++h) {
        if (h < e.length) l = e.charCodeAt(h);
        else {
          if (i(l)) break;
          l = 47;
        }
        if (i(l)) {
          if (a === h - 1 || 1 === s);
          else if (2 === s) {
            if (
              r.length < 2 ||
              2 !== o ||
              46 !== r.charCodeAt(r.length - 1) ||
              46 !== r.charCodeAt(r.length - 2)
            ) {
              if (r.length > 2) {
                const e = r.lastIndexOf(n);
                -1 === e
                  ? ((r = ''), (o = 0))
                  : ((r = r.slice(0, e)),
                    (o = r.length - 1 - r.lastIndexOf(n))),
                  (a = h),
                  (s = 0);
                continue;
              }
              if (0 !== r.length) {
                (r = ''), (o = 0), (a = h), (s = 0);
                continue;
              }
            }
            t && ((r += r.length > 0 ? n + '..' : '..'), (o = 2));
          } else
            r.length > 0
              ? (r += `${n}${e.slice(a + 1, h)}`)
              : (r = e.slice(a + 1, h)),
              (o = h - a - 1);
          (a = h), (s = 0);
        } else 46 === l && -1 !== s ? ++s : (s = -1);
      }
      return r;
    }
    function G(e, t) {
      if (null === t || 'object' != typeof t)
        throw new D('pathObject', 'Object', t);
      const n = t.dir || t.root,
        i = t.base || `${t.name || ''}${t.ext || ''}`;
      return n ? (n === t.root ? `${n}${i}` : `${n}${e}${i}`) : i;
    }
    const V = {
        resolve(...e) {
          let t = '',
            n = '',
            i = !1;
          for (let r = e.length - 1; r >= -1; r--) {
            let o;
            if (r >= 0) {
              if (((o = e[r]), P(o, 'path'), 0 === o.length)) continue;
            } else
              0 === t.length
                ? (o = O.a())
                : ((o = O.b['=' + t] || O.a()),
                  (void 0 === o ||
                    (o.slice(0, 2).toLowerCase() !== t.toLowerCase() &&
                      92 === o.charCodeAt(2))) &&
                    (o = t + '\\'));
            const a = o.length;
            let s = 0,
              l = '',
              h = !1;
            const c = o.charCodeAt(0);
            if (1 === a) q(c) && ((s = 1), (h = !0));
            else if (q(c))
              if (((h = !0), q(o.charCodeAt(1)))) {
                let e = 2,
                  t = e;
                for (; e < a && !q(o.charCodeAt(e)); ) e++;
                if (e < a && e !== t) {
                  const n = o.slice(t, e);
                  for (t = e; e < a && q(o.charCodeAt(e)); ) e++;
                  if (e < a && e !== t) {
                    for (t = e; e < a && !q(o.charCodeAt(e)); ) e++;
                    (e !== a && e === t) ||
                      ((l = `\\\\${n}\\${o.slice(t, e)}`), (s = e));
                  }
                }
              } else s = 1;
            else
              B(c) &&
                58 === o.charCodeAt(1) &&
                ((l = o.slice(0, 2)),
                (s = 2),
                a > 2 && q(o.charCodeAt(2)) && ((h = !0), (s = 3)));
            if (l.length > 0)
              if (t.length > 0) {
                if (l.toLowerCase() !== t.toLowerCase()) continue;
              } else t = l;
            if (i) {
              if (t.length > 0) break;
            } else if (
              ((n = `${o.slice(s)}\\${n}`), (i = h), h && t.length > 0)
            )
              break;
          }
          return (n = j(n, !i, '\\', q)), i ? `${t}\\${n}` : `${t}${n}` || '.';
        },
        normalize(e) {
          P(e, 'path');
          const t = e.length;
          if (0 === t) return '.';
          let n,
            i = 0,
            r = !1;
          const o = e.charCodeAt(0);
          if (1 === t) return F(o) ? '\\' : e;
          if (q(o))
            if (((r = !0), q(e.charCodeAt(1)))) {
              let r = 2,
                o = r;
              for (; r < t && !q(e.charCodeAt(r)); ) r++;
              if (r < t && r !== o) {
                const a = e.slice(o, r);
                for (o = r; r < t && q(e.charCodeAt(r)); ) r++;
                if (r < t && r !== o) {
                  for (o = r; r < t && !q(e.charCodeAt(r)); ) r++;
                  if (r === t) return `\\\\${a}\\${e.slice(o)}\\`;
                  r !== o && ((n = `\\\\${a}\\${e.slice(o, r)}`), (i = r));
                }
              }
            } else i = 1;
          else
            B(o) &&
              58 === e.charCodeAt(1) &&
              ((n = e.slice(0, 2)),
              (i = 2),
              t > 2 && q(e.charCodeAt(2)) && ((r = !0), (i = 3)));
          let a = i < t ? j(e.slice(i), !r, '\\', q) : '';
          return (
            0 !== a.length || r || (a = '.'),
            a.length > 0 && q(e.charCodeAt(t - 1)) && (a += '\\'),
            void 0 === n ? (r ? '\\' + a : a) : r ? `${n}\\${a}` : `${n}${a}`
          );
        },
        isAbsolute(e) {
          P(e, 'path');
          const t = e.length;
          if (0 === t) return !1;
          const n = e.charCodeAt(0);
          return (
            q(n) ||
            (t > 2 && B(n) && 58 === e.charCodeAt(1) && q(e.charCodeAt(2)))
          );
        },
        join(...e) {
          if (0 === e.length) return '.';
          let t, n;
          for (let i = 0; i < e.length; ++i) {
            const r = e[i];
            P(r, 'path'),
              r.length > 0 && (void 0 === t ? (t = n = r) : (t += '\\' + r));
          }
          if (void 0 === t) return '.';
          let i = !0,
            r = 0;
          if ('string' == typeof n && q(n.charCodeAt(0))) {
            ++r;
            const e = n.length;
            e > 1 &&
              q(n.charCodeAt(1)) &&
              (++r, e > 2 && (q(n.charCodeAt(2)) ? ++r : (i = !1)));
          }
          if (i) {
            for (; r < t.length && q(t.charCodeAt(r)); ) r++;
            r >= 2 && (t = '\\' + t.slice(r));
          }
          return V.normalize(t);
        },
        relative(e, t) {
          if ((P(e, 'from'), P(t, 'to'), e === t)) return '';
          const n = V.resolve(e),
            i = V.resolve(t);
          if (n === i) return '';
          if ((e = n.toLowerCase()) === (t = i.toLowerCase())) return '';
          let r = 0;
          for (; r < e.length && 92 === e.charCodeAt(r); ) r++;
          let o = e.length;
          for (; o - 1 > r && 92 === e.charCodeAt(o - 1); ) o--;
          const a = o - r;
          let s = 0;
          for (; s < t.length && 92 === t.charCodeAt(s); ) s++;
          let l = t.length;
          for (; l - 1 > s && 92 === t.charCodeAt(l - 1); ) l--;
          const h = l - s,
            c = a < h ? a : h;
          let d = -1,
            u = 0;
          for (; u < c; u++) {
            const n = e.charCodeAt(r + u);
            if (n !== t.charCodeAt(s + u)) break;
            92 === n && (d = u);
          }
          if (u !== c) {
            if (-1 === d) return i;
          } else {
            if (h > c) {
              if (92 === t.charCodeAt(s + u)) return i.slice(s + u + 1);
              if (2 === u) return i.slice(s + u);
            }
            a > c &&
              (92 === e.charCodeAt(r + u) ? (d = u) : 2 === u && (d = 3)),
              -1 === d && (d = 0);
          }
          let p = '';
          for (u = r + d + 1; u <= o; ++u)
            (u !== o && 92 !== e.charCodeAt(u)) ||
              (p += 0 === p.length ? '..' : '\\..');
          return (
            (s += d),
            p.length > 0
              ? `${p}${i.slice(s, l)}`
              : (92 === i.charCodeAt(s) && ++s, i.slice(s, l))
          );
        },
        toNamespacedPath(e) {
          if ('string' != typeof e) return e;
          if (0 === e.length) return '';
          const t = V.resolve(e);
          if (t.length <= 2) return e;
          if (92 === t.charCodeAt(0)) {
            if (92 === t.charCodeAt(1)) {
              const e = t.charCodeAt(2);
              if (63 !== e && 46 !== e) return '\\\\?\\UNC\\' + t.slice(2);
            }
          } else if (
            B(t.charCodeAt(0)) &&
            58 === t.charCodeAt(1) &&
            92 === t.charCodeAt(2)
          )
            return '\\\\?\\' + t;
          return e;
        },
        dirname(e) {
          P(e, 'path');
          const t = e.length;
          if (0 === t) return '.';
          let n = -1,
            i = 0;
          const r = e.charCodeAt(0);
          if (1 === t) return q(r) ? e : '.';
          if (q(r)) {
            if (((n = i = 1), q(e.charCodeAt(1)))) {
              let r = 2,
                o = r;
              for (; r < t && !q(e.charCodeAt(r)); ) r++;
              if (r < t && r !== o) {
                for (o = r; r < t && q(e.charCodeAt(r)); ) r++;
                if (r < t && r !== o) {
                  for (o = r; r < t && !q(e.charCodeAt(r)); ) r++;
                  if (r === t) return e;
                  r !== o && (n = i = r + 1);
                }
              }
            }
          } else
            B(r) &&
              58 === e.charCodeAt(1) &&
              ((n = t > 2 && q(e.charCodeAt(2)) ? 3 : 2), (i = n));
          let o = -1,
            a = !0;
          for (let n = t - 1; n >= i; --n)
            if (q(e.charCodeAt(n))) {
              if (!a) {
                o = n;
                break;
              }
            } else a = !1;
          if (-1 === o) {
            if (-1 === n) return '.';
            o = n;
          }
          return e.slice(0, o);
        },
        basename(e, t) {
          void 0 !== t && P(t, 'ext'), P(e, 'path');
          let n,
            i = 0,
            r = -1,
            o = !0;
          if (
            (e.length >= 2 &&
              B(e.charCodeAt(0)) &&
              58 === e.charCodeAt(1) &&
              (i = 2),
            void 0 !== t && t.length > 0 && t.length <= e.length)
          ) {
            if (t === e) return '';
            let a = t.length - 1,
              s = -1;
            for (n = e.length - 1; n >= i; --n) {
              const l = e.charCodeAt(n);
              if (q(l)) {
                if (!o) {
                  i = n + 1;
                  break;
                }
              } else
                -1 === s && ((o = !1), (s = n + 1)),
                  a >= 0 &&
                    (l === t.charCodeAt(a)
                      ? -1 == --a && (r = n)
                      : ((a = -1), (r = s)));
            }
            return (
              i === r ? (r = s) : -1 === r && (r = e.length), e.slice(i, r)
            );
          }
          for (n = e.length - 1; n >= i; --n)
            if (q(e.charCodeAt(n))) {
              if (!o) {
                i = n + 1;
                break;
              }
            } else -1 === r && ((o = !1), (r = n + 1));
          return -1 === r ? '' : e.slice(i, r);
        },
        extname(e) {
          P(e, 'path');
          let t = 0,
            n = -1,
            i = 0,
            r = -1,
            o = !0,
            a = 0;
          e.length >= 2 &&
            58 === e.charCodeAt(1) &&
            B(e.charCodeAt(0)) &&
            (t = i = 2);
          for (let s = e.length - 1; s >= t; --s) {
            const t = e.charCodeAt(s);
            if (q(t)) {
              if (!o) {
                i = s + 1;
                break;
              }
            } else
              -1 === r && ((o = !1), (r = s + 1)),
                46 === t
                  ? -1 === n
                    ? (n = s)
                    : 1 !== a && (a = 1)
                  : -1 !== n && (a = -1);
          }
          return -1 === n ||
            -1 === r ||
            0 === a ||
            (1 === a && n === r - 1 && n === i + 1)
            ? ''
            : e.slice(n, r);
        },
        format: G.bind(null, '\\'),
        parse(e) {
          P(e, 'path');
          const t = { root: '', dir: '', base: '', ext: '', name: '' };
          if (0 === e.length) return t;
          const n = e.length;
          let i = 0,
            r = e.charCodeAt(0);
          if (1 === n)
            return q(r)
              ? ((t.root = t.dir = e), t)
              : ((t.base = t.name = e), t);
          if (q(r)) {
            if (((i = 1), q(e.charCodeAt(1)))) {
              let t = 2,
                r = t;
              for (; t < n && !q(e.charCodeAt(t)); ) t++;
              if (t < n && t !== r) {
                for (r = t; t < n && q(e.charCodeAt(t)); ) t++;
                if (t < n && t !== r) {
                  for (r = t; t < n && !q(e.charCodeAt(t)); ) t++;
                  t === n ? (i = t) : t !== r && (i = t + 1);
                }
              }
            }
          } else if (B(r) && 58 === e.charCodeAt(1)) {
            if (n <= 2) return (t.root = t.dir = e), t;
            if (((i = 2), q(e.charCodeAt(2)))) {
              if (3 === n) return (t.root = t.dir = e), t;
              i = 3;
            }
          }
          i > 0 && (t.root = e.slice(0, i));
          let o = -1,
            a = i,
            s = -1,
            l = !0,
            h = e.length - 1,
            c = 0;
          for (; h >= i; --h)
            if (((r = e.charCodeAt(h)), q(r))) {
              if (!l) {
                a = h + 1;
                break;
              }
            } else
              -1 === s && ((l = !1), (s = h + 1)),
                46 === r
                  ? -1 === o
                    ? (o = h)
                    : 1 !== c && (c = 1)
                  : -1 !== o && (c = -1);
          return (
            -1 !== s &&
              (-1 === o || 0 === c || (1 === c && o === s - 1 && o === a + 1)
                ? (t.base = t.name = e.slice(a, s))
                : ((t.name = e.slice(a, o)),
                  (t.base = e.slice(a, s)),
                  (t.ext = e.slice(o, s)))),
            (t.dir = a > 0 && a !== i ? e.slice(0, a - 1) : t.root),
            t
          );
        },
        sep: '\\',
        delimiter: ';',
        win32: null,
        posix: null,
      },
      K = {
        resolve(...e) {
          let t = '',
            n = !1;
          for (let i = e.length - 1; i >= -1 && !n; i--) {
            const r = i >= 0 ? e[i] : O.a();
            P(r, 'path'),
              0 !== r.length &&
                ((t = `${r}/${t}`), (n = 47 === r.charCodeAt(0)));
          }
          return (t = j(t, !n, '/', F)), n ? '/' + t : t.length > 0 ? t : '.';
        },
        normalize(e) {
          if ((P(e, 'path'), 0 === e.length)) return '.';
          const t = 47 === e.charCodeAt(0),
            n = 47 === e.charCodeAt(e.length - 1);
          return 0 === (e = j(e, !t, '/', F)).length
            ? t
              ? '/'
              : n
              ? './'
              : '.'
            : (n && (e += '/'), t ? '/' + e : e);
        },
        isAbsolute: e => (P(e, 'path'), e.length > 0 && 47 === e.charCodeAt(0)),
        join(...e) {
          if (0 === e.length) return '.';
          let t;
          for (let n = 0; n < e.length; ++n) {
            const i = e[n];
            P(i, 'path'),
              i.length > 0 && (void 0 === t ? (t = i) : (t += '/' + i));
          }
          return void 0 === t ? '.' : K.normalize(t);
        },
        relative(e, t) {
          if ((P(e, 'from'), P(t, 'to'), e === t)) return '';
          if ((e = K.resolve(e)) === (t = K.resolve(t))) return '';
          const n = e.length,
            i = n - 1,
            r = t.length - 1,
            o = i < r ? i : r;
          let a = -1,
            s = 0;
          for (; s < o; s++) {
            const n = e.charCodeAt(1 + s);
            if (n !== t.charCodeAt(1 + s)) break;
            47 === n && (a = s);
          }
          if (s === o)
            if (r > o) {
              if (47 === t.charCodeAt(1 + s)) return t.slice(1 + s + 1);
              if (0 === s) return t.slice(1 + s);
            } else
              i > o &&
                (47 === e.charCodeAt(1 + s) ? (a = s) : 0 === s && (a = 0));
          let l = '';
          for (s = 1 + a + 1; s <= n; ++s)
            (s !== n && 47 !== e.charCodeAt(s)) ||
              (l += 0 === l.length ? '..' : '/..');
          return `${l}${t.slice(1 + a)}`;
        },
        toNamespacedPath: e => e,
        dirname(e) {
          if ((P(e, 'path'), 0 === e.length)) return '.';
          const t = 47 === e.charCodeAt(0);
          let n = -1,
            i = !0;
          for (let t = e.length - 1; t >= 1; --t)
            if (47 === e.charCodeAt(t)) {
              if (!i) {
                n = t;
                break;
              }
            } else i = !1;
          return -1 === n
            ? t
              ? '/'
              : '.'
            : t && 1 === n
            ? '//'
            : e.slice(0, n);
        },
        basename(e, t) {
          void 0 !== t && P(t, 'ext'), P(e, 'path');
          let n,
            i = 0,
            r = -1,
            o = !0;
          if (void 0 !== t && t.length > 0 && t.length <= e.length) {
            if (t === e) return '';
            let a = t.length - 1,
              s = -1;
            for (n = e.length - 1; n >= 0; --n) {
              const l = e.charCodeAt(n);
              if (47 === l) {
                if (!o) {
                  i = n + 1;
                  break;
                }
              } else
                -1 === s && ((o = !1), (s = n + 1)),
                  a >= 0 &&
                    (l === t.charCodeAt(a)
                      ? -1 == --a && (r = n)
                      : ((a = -1), (r = s)));
            }
            return (
              i === r ? (r = s) : -1 === r && (r = e.length), e.slice(i, r)
            );
          }
          for (n = e.length - 1; n >= 0; --n)
            if (47 === e.charCodeAt(n)) {
              if (!o) {
                i = n + 1;
                break;
              }
            } else -1 === r && ((o = !1), (r = n + 1));
          return -1 === r ? '' : e.slice(i, r);
        },
        extname(e) {
          P(e, 'path');
          let t = -1,
            n = 0,
            i = -1,
            r = !0,
            o = 0;
          for (let a = e.length - 1; a >= 0; --a) {
            const s = e.charCodeAt(a);
            if (47 !== s)
              -1 === i && ((r = !1), (i = a + 1)),
                46 === s
                  ? -1 === t
                    ? (t = a)
                    : 1 !== o && (o = 1)
                  : -1 !== t && (o = -1);
            else if (!r) {
              n = a + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === i ||
            0 === o ||
            (1 === o && t === i - 1 && t === n + 1)
            ? ''
            : e.slice(t, i);
        },
        format: G.bind(null, '/'),
        parse(e) {
          P(e, 'path');
          const t = { root: '', dir: '', base: '', ext: '', name: '' };
          if (0 === e.length) return t;
          const n = 47 === e.charCodeAt(0);
          let i;
          n ? ((t.root = '/'), (i = 1)) : (i = 0);
          let r = -1,
            o = 0,
            a = -1,
            s = !0,
            l = e.length - 1,
            h = 0;
          for (; l >= i; --l) {
            const t = e.charCodeAt(l);
            if (47 !== t)
              -1 === a && ((s = !1), (a = l + 1)),
                46 === t
                  ? -1 === r
                    ? (r = l)
                    : 1 !== h && (h = 1)
                  : -1 !== r && (h = -1);
            else if (!s) {
              o = l + 1;
              break;
            }
          }
          if (-1 !== a) {
            const i = 0 === o && n ? 1 : o;
            -1 === r || 0 === h || (1 === h && r === a - 1 && r === o + 1)
              ? (t.base = t.name = e.slice(i, a))
              : ((t.name = e.slice(i, r)),
                (t.base = e.slice(i, a)),
                (t.ext = e.slice(r, a)));
          }
          return o > 0 ? (t.dir = e.slice(0, o - 1)) : n && (t.dir = '/'), t;
        },
        sep: '/',
        delimiter: ':',
        win32: null,
        posix: null,
      };
    (K.win32 = V.win32 = V), (K.posix = V.posix = K);
    'win32' === O.c ? V.normalize : K.normalize,
      'win32' === O.c ? V.resolve : K.resolve,
      'win32' === O.c ? V.relative : K.relative,
      'win32' === O.c ? V.dirname : K.dirname,
      'win32' === O.c ? V.basename : K.basename,
      'win32' === O.c ? V.extname : K.extname,
      'win32' === O.c ? V.sep : K.sep;
    const Y = /^\w[\w\d+.-]*$/,
      $ = /^\//,
      X = /^\/\//;
    function J(e, t) {
      if (!e.scheme && t)
        throw new Error(
          `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`,
        );
      if (e.scheme && !Y.test(e.scheme))
        throw new Error('[UriError]: Scheme contains illegal characters.');
      if (e.path)
        if (e.authority) {
          if (!$.test(e.path))
            throw new Error(
              '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
            );
        } else if (X.test(e.path))
          throw new Error(
            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
          );
    }
    const Q = '/',
      Z = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class ee {
      constructor(e, t, n, i, r, o = !1) {
        'object' == typeof e
          ? ((this.scheme = e.scheme || ''),
            (this.authority = e.authority || ''),
            (this.path = e.path || ''),
            (this.query = e.query || ''),
            (this.fragment = e.fragment || ''))
          : ((this.scheme = (function(e, t) {
              return e || t ? e : 'file';
            })(e, o)),
            (this.authority = t || ''),
            (this.path = (function(e, t) {
              switch (e) {
                case 'https':
                case 'http':
                case 'file':
                  t ? t[0] !== Q && (t = Q + t) : (t = Q);
              }
              return t;
            })(this.scheme, n || '')),
            (this.query = i || ''),
            (this.fragment = r || ''),
            J(this, o));
      }
      static isUri(e) {
        return (
          e instanceof ee ||
          (!!e &&
            'string' == typeof e.authority &&
              'string' == typeof e.fragment &&
              'string' == typeof e.path &&
              'string' == typeof e.query &&
              'string' == typeof e.scheme &&
              'string' == typeof e.fsPath &&
              'function' == typeof e.with &&
              'function' == typeof e.toString)
        );
      }
      get fsPath() {
        return ae(this, !1);
      }
      with(e) {
        if (!e) return this;
        let { scheme: t, authority: n, path: i, query: r, fragment: o } = e;
        return (
          void 0 === t ? (t = this.scheme) : null === t && (t = ''),
          void 0 === n ? (n = this.authority) : null === n && (n = ''),
          void 0 === i ? (i = this.path) : null === i && (i = ''),
          void 0 === r ? (r = this.query) : null === r && (r = ''),
          void 0 === o ? (o = this.fragment) : null === o && (o = ''),
          t === this.scheme &&
          n === this.authority &&
          i === this.path &&
          r === this.query &&
          o === this.fragment
            ? this
            : new ne(t, n, i, r, o)
        );
      }
      static parse(e, t = !1) {
        const n = Z.exec(e);
        return n
          ? new ne(
              n[2] || '',
              he(n[4] || ''),
              he(n[5] || ''),
              he(n[7] || ''),
              he(n[9] || ''),
              t,
            )
          : new ne('', '', '', '', '');
      }
      static file(e) {
        let t = '';
        if ((g.d && (e = e.replace(/\\/g, Q)), e[0] === Q && e[1] === Q)) {
          const n = e.indexOf(Q, 2);
          -1 === n
            ? ((t = e.substring(2)), (e = Q))
            : ((t = e.substring(2, n)), (e = e.substring(n) || Q));
        }
        return new ne('file', t, e, '', '');
      }
      static from(e) {
        const t = new ne(e.scheme, e.authority, e.path, e.query, e.fragment);
        return J(t, !0), t;
      }
      static joinPath(e, ...t) {
        if (!e.path)
          throw new Error(
            '[UriError]: cannot call joinPath on URI without path',
          );
        let n;
        return (
          (n =
            g.d && 'file' === e.scheme
              ? ee.file(V.join(ae(e, !0), ...t)).path
              : K.join(e.path, ...t)),
          e.with({ path: n })
        );
      }
      toString(e = !1) {
        return se(this, e);
      }
      toJSON() {
        return this;
      }
      static revive(e) {
        if (e) {
          if (e instanceof ee) return e;
          {
            const t = new ne(e);
            return (
              (t._formatted = e.external),
              (t._fsPath = e._sep === te ? e.fsPath : null),
              t
            );
          }
        }
        return e;
      }
    }
    const te = g.d ? 1 : void 0;
    class ne extends ee {
      constructor() {
        super(...arguments), (this._formatted = null), (this._fsPath = null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = ae(this, !1)), this._fsPath;
      }
      toString(e = !1) {
        return e
          ? se(this, !0)
          : (this._formatted || (this._formatted = se(this, !1)),
            this._formatted);
      }
      toJSON() {
        const e = { $mid: 1 };
        return (
          this._fsPath && ((e.fsPath = this._fsPath), (e._sep = te)),
          this._formatted && (e.external = this._formatted),
          this.path && (e.path = this.path),
          this.scheme && (e.scheme = this.scheme),
          this.authority && (e.authority = this.authority),
          this.query && (e.query = this.query),
          this.fragment && (e.fragment = this.fragment),
          e
        );
      }
    }
    const ie = {
      58: '%3A',
      47: '%2F',
      63: '%3F',
      35: '%23',
      91: '%5B',
      93: '%5D',
      64: '%40',
      33: '%21',
      36: '%24',
      38: '%26',
      39: '%27',
      40: '%28',
      41: '%29',
      42: '%2A',
      43: '%2B',
      44: '%2C',
      59: '%3B',
      61: '%3D',
      32: '%20',
    };
    function re(e, t) {
      let n = void 0,
        i = -1;
      for (let r = 0; r < e.length; r++) {
        const o = e.charCodeAt(r);
        if (
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          45 === o ||
          46 === o ||
          95 === o ||
          126 === o ||
          (t && 47 === o)
        )
          -1 !== i && ((n += encodeURIComponent(e.substring(i, r))), (i = -1)),
            void 0 !== n && (n += e.charAt(r));
        else {
          void 0 === n && (n = e.substr(0, r));
          const t = ie[o];
          void 0 !== t
            ? (-1 !== i &&
                ((n += encodeURIComponent(e.substring(i, r))), (i = -1)),
              (n += t))
            : -1 === i && (i = r);
        }
      }
      return (
        -1 !== i && (n += encodeURIComponent(e.substring(i))),
        void 0 !== n ? n : e
      );
    }
    function oe(e) {
      let t = void 0;
      for (let n = 0; n < e.length; n++) {
        const i = e.charCodeAt(n);
        35 === i || 63 === i
          ? (void 0 === t && (t = e.substr(0, n)), (t += ie[i]))
          : void 0 !== t && (t += e[n]);
      }
      return void 0 !== t ? t : e;
    }
    function ae(e, t) {
      let n;
      return (
        (n =
          e.authority && e.path.length > 1 && 'file' === e.scheme
            ? `//${e.authority}${e.path}`
            : 47 === e.path.charCodeAt(0) &&
              ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
              58 === e.path.charCodeAt(2)
            ? t
              ? e.path.substr(1)
              : e.path[1].toLowerCase() + e.path.substr(2)
            : e.path),
        g.d && (n = n.replace(/\//g, '\\')),
        n
      );
    }
    function se(e, t) {
      const n = t ? oe : re;
      let i = '',
        { scheme: r, authority: o, path: a, query: s, fragment: l } = e;
      if (
        (r && ((i += r), (i += ':')),
        (o || 'file' === r) && ((i += Q), (i += Q)),
        o)
      ) {
        let e = o.indexOf('@');
        if (-1 !== e) {
          const t = o.substr(0, e);
          (o = o.substr(e + 1)),
            (e = t.indexOf(':')),
            -1 === e
              ? (i += n(t, !1))
              : ((i += n(t.substr(0, e), !1)),
                (i += ':'),
                (i += n(t.substr(e + 1), !1))),
            (i += '@');
        }
        (o = o.toLowerCase()),
          (e = o.indexOf(':')),
          -1 === e
            ? (i += n(o, !1))
            : ((i += n(o.substr(0, e), !1)), (i += o.substr(e)));
      }
      if (a) {
        if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) {
          const e = a.charCodeAt(1);
          e >= 65 &&
            e <= 90 &&
            (a = `/${String.fromCharCode(e + 32)}:${a.substr(3)}`);
        } else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
          const e = a.charCodeAt(0);
          e >= 65 &&
            e <= 90 &&
            (a = `${String.fromCharCode(e + 32)}:${a.substr(2)}`);
        }
        i += n(a, !0);
      }
      return (
        s && ((i += '?'), (i += n(s, !1))),
        l && ((i += '#'), (i += t ? l : re(l, !1))),
        i
      );
    }
    const le = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function he(e) {
      return e.match(le)
        ? e.replace(le, e =>
            (function e(t) {
              try {
                return decodeURIComponent(t);
              } catch (n) {
                return t.length > 3 ? t.substr(0, 3) + e(t.substr(3)) : t;
              }
            })(e),
          )
        : e;
    }
    class ce {
      constructor(e, t) {
        (this.lineNumber = e), (this.column = t);
      }
      with(e = this.lineNumber, t = this.column) {
        return e === this.lineNumber && t === this.column ? this : new ce(e, t);
      }
      delta(e = 0, t = 0) {
        return this.with(this.lineNumber + e, this.column + t);
      }
      equals(e) {
        return ce.equals(this, e);
      }
      static equals(e, t) {
        return (
          (!e && !t) ||
          (!!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column)
        );
      }
      isBefore(e) {
        return ce.isBefore(this, e);
      }
      static isBefore(e, t) {
        return (
          e.lineNumber < t.lineNumber ||
          (!(t.lineNumber < e.lineNumber) && e.column < t.column)
        );
      }
      isBeforeOrEqual(e) {
        return ce.isBeforeOrEqual(this, e);
      }
      static isBeforeOrEqual(e, t) {
        return (
          e.lineNumber < t.lineNumber ||
          (!(t.lineNumber < e.lineNumber) && e.column <= t.column)
        );
      }
      static compare(e, t) {
        let n = 0 | e.lineNumber,
          i = 0 | t.lineNumber;
        if (n === i) {
          return (0 | e.column) - (0 | t.column);
        }
        return n - i;
      }
      clone() {
        return new ce(this.lineNumber, this.column);
      }
      toString() {
        return '(' + this.lineNumber + ',' + this.column + ')';
      }
      static lift(e) {
        return new ce(e.lineNumber, e.column);
      }
      static isIPosition(e) {
        return (
          e && 'number' == typeof e.lineNumber && 'number' == typeof e.column
        );
      }
    }
    class de {
      constructor(e, t, n, i) {
        e > n || (e === n && t > i)
          ? ((this.startLineNumber = n),
            (this.startColumn = i),
            (this.endLineNumber = e),
            (this.endColumn = t))
          : ((this.startLineNumber = e),
            (this.startColumn = t),
            (this.endLineNumber = n),
            (this.endColumn = i));
      }
      isEmpty() {
        return de.isEmpty(this);
      }
      static isEmpty(e) {
        return (
          e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn
        );
      }
      containsPosition(e) {
        return de.containsPosition(this, e);
      }
      static containsPosition(e, t) {
        return (
          !(
            t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber
          ) &&
          !(t.lineNumber === e.startLineNumber && t.column < e.startColumn) &&
            !(t.lineNumber === e.endLineNumber && t.column > e.endColumn)
        );
      }
      containsRange(e) {
        return de.containsRange(this, e);
      }
      static containsRange(e, t) {
        return (
          !(
            t.startLineNumber < e.startLineNumber ||
            t.endLineNumber < e.startLineNumber
          ) &&
          !(
            t.startLineNumber > e.endLineNumber ||
            t.endLineNumber > e.endLineNumber
          ) &&
            !(
              t.startLineNumber === e.startLineNumber &&
              t.startColumn < e.startColumn
            ) &&
              !(
                t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn
              )
        );
      }
      strictContainsRange(e) {
        return de.strictContainsRange(this, e);
      }
      static strictContainsRange(e, t) {
        return (
          !(
            t.startLineNumber < e.startLineNumber ||
            t.endLineNumber < e.startLineNumber
          ) &&
          !(
            t.startLineNumber > e.endLineNumber ||
            t.endLineNumber > e.endLineNumber
          ) &&
            !(
              t.startLineNumber === e.startLineNumber &&
              t.startColumn <= e.startColumn
            ) &&
              !(
                t.endLineNumber === e.endLineNumber &&
                t.endColumn >= e.endColumn
              )
        );
      }
      plusRange(e) {
        return de.plusRange(this, e);
      }
      static plusRange(e, t) {
        let n, i, r, o;
        return (
          t.startLineNumber < e.startLineNumber
            ? ((n = t.startLineNumber), (i = t.startColumn))
            : t.startLineNumber === e.startLineNumber
            ? ((n = t.startLineNumber),
              (i = Math.min(t.startColumn, e.startColumn)))
            : ((n = e.startLineNumber), (i = e.startColumn)),
          t.endLineNumber > e.endLineNumber
            ? ((r = t.endLineNumber), (o = t.endColumn))
            : t.endLineNumber === e.endLineNumber
            ? ((r = t.endLineNumber), (o = Math.max(t.endColumn, e.endColumn)))
            : ((r = e.endLineNumber), (o = e.endColumn)),
          new de(n, i, r, o)
        );
      }
      intersectRanges(e) {
        return de.intersectRanges(this, e);
      }
      static intersectRanges(e, t) {
        let n = e.startLineNumber,
          i = e.startColumn,
          r = e.endLineNumber,
          o = e.endColumn,
          a = t.startLineNumber,
          s = t.startColumn,
          l = t.endLineNumber,
          h = t.endColumn;
        return (
          n < a ? ((n = a), (i = s)) : n === a && (i = Math.max(i, s)),
          r > l ? ((r = l), (o = h)) : r === l && (o = Math.min(o, h)),
          n > r || (n === r && i > o) ? null : new de(n, i, r, o)
        );
      }
      equalsRange(e) {
        return de.equalsRange(this, e);
      }
      static equalsRange(e, t) {
        return (
          !!e &&
          !!t &&
          e.startLineNumber === t.startLineNumber &&
          e.startColumn === t.startColumn &&
          e.endLineNumber === t.endLineNumber &&
          e.endColumn === t.endColumn
        );
      }
      getEndPosition() {
        return de.getEndPosition(this);
      }
      static getEndPosition(e) {
        return new ce(e.endLineNumber, e.endColumn);
      }
      getStartPosition() {
        return de.getStartPosition(this);
      }
      static getStartPosition(e) {
        return new ce(e.startLineNumber, e.startColumn);
      }
      toString() {
        return (
          '[' +
          this.startLineNumber +
          ',' +
          this.startColumn +
          ' -> ' +
          this.endLineNumber +
          ',' +
          this.endColumn +
          ']'
        );
      }
      setEndPosition(e, t) {
        return new de(this.startLineNumber, this.startColumn, e, t);
      }
      setStartPosition(e, t) {
        return new de(e, t, this.endLineNumber, this.endColumn);
      }
      collapseToStart() {
        return de.collapseToStart(this);
      }
      static collapseToStart(e) {
        return new de(
          e.startLineNumber,
          e.startColumn,
          e.startLineNumber,
          e.startColumn,
        );
      }
      static fromPositions(e, t = e) {
        return new de(e.lineNumber, e.column, t.lineNumber, t.column);
      }
      static lift(e) {
        return e
          ? new de(
              e.startLineNumber,
              e.startColumn,
              e.endLineNumber,
              e.endColumn,
            )
          : null;
      }
      static isIRange(e) {
        return (
          e &&
          'number' == typeof e.startLineNumber &&
          'number' == typeof e.startColumn &&
          'number' == typeof e.endLineNumber &&
          'number' == typeof e.endColumn
        );
      }
      static areIntersectingOrTouching(e, t) {
        return (
          !(
            e.endLineNumber < t.startLineNumber ||
            (e.endLineNumber === t.startLineNumber &&
              e.endColumn < t.startColumn)
          ) &&
          !(
            t.endLineNumber < e.startLineNumber ||
            (t.endLineNumber === e.startLineNumber &&
              t.endColumn < e.startColumn)
          )
        );
      }
      static areIntersecting(e, t) {
        return (
          !(
            e.endLineNumber < t.startLineNumber ||
            (e.endLineNumber === t.startLineNumber &&
              e.endColumn <= t.startColumn)
          ) &&
          !(
            t.endLineNumber < e.startLineNumber ||
            (t.endLineNumber === e.startLineNumber &&
              t.endColumn <= e.startColumn)
          )
        );
      }
      static compareRangesUsingStarts(e, t) {
        if (e && t) {
          const n = 0 | e.startLineNumber,
            i = 0 | t.startLineNumber;
          if (n === i) {
            const n = 0 | e.startColumn,
              i = 0 | t.startColumn;
            if (n === i) {
              const n = 0 | e.endLineNumber,
                i = 0 | t.endLineNumber;
              if (n === i) {
                return (0 | e.endColumn) - (0 | t.endColumn);
              }
              return n - i;
            }
            return n - i;
          }
          return n - i;
        }
        return (e ? 1 : 0) - (t ? 1 : 0);
      }
      static compareRangesUsingEnds(e, t) {
        return e.endLineNumber === t.endLineNumber
          ? e.endColumn === t.endColumn
            ? e.startLineNumber === t.startLineNumber
              ? e.startColumn - t.startColumn
              : e.startLineNumber - t.startLineNumber
            : e.endColumn - t.endColumn
          : e.endLineNumber - t.endLineNumber;
      }
      static spansMultipleLines(e) {
        return e.endLineNumber > e.startLineNumber;
      }
    }
    function ue(e, t, n, i) {
      return new W(e, t, n).ComputeDiff(i);
    }
    class pe {
      constructor(e) {
        const t = [],
          n = [];
        for (let i = 0, r = e.length; i < r; i++)
          (t[i] = _e(e[i], 1)), (n[i] = ve(e[i], 1));
        (this.lines = e), (this._startColumns = t), (this._endColumns = n);
      }
      getElements() {
        const e = [];
        for (let t = 0, n = this.lines.length; t < n; t++)
          e[t] = this.lines[t].substring(
            this._startColumns[t] - 1,
            this._endColumns[t] - 1,
          );
        return e;
      }
      getStartLineNumber(e) {
        return e + 1;
      }
      getEndLineNumber(e) {
        return e + 1;
      }
      createCharSequence(e, t, n) {
        const i = [],
          r = [],
          o = [];
        let a = 0;
        for (let s = t; s <= n; s++) {
          const t = this.lines[s],
            n = e ? this._startColumns[s] : 1,
            l = e ? this._endColumns[s] : t.length + 1;
          for (let e = n; e < l; e++)
            (i[a] = t.charCodeAt(e - 1)), (r[a] = s + 1), (o[a] = e), a++;
        }
        return new me(i, r, o);
      }
    }
    class me {
      constructor(e, t, n) {
        (this._charCodes = e), (this._lineNumbers = t), (this._columns = n);
      }
      getElements() {
        return this._charCodes;
      }
      getStartLineNumber(e) {
        return this._lineNumbers[e];
      }
      getStartColumn(e) {
        return this._columns[e];
      }
      getEndLineNumber(e) {
        return this._lineNumbers[e];
      }
      getEndColumn(e) {
        return this._columns[e] + 1;
      }
    }
    class fe {
      constructor(e, t, n, i, r, o, a, s) {
        (this.originalStartLineNumber = e),
          (this.originalStartColumn = t),
          (this.originalEndLineNumber = n),
          (this.originalEndColumn = i),
          (this.modifiedStartLineNumber = r),
          (this.modifiedStartColumn = o),
          (this.modifiedEndLineNumber = a),
          (this.modifiedEndColumn = s);
      }
      static createFromDiffChange(e, t, n) {
        let i, r, o, a, s, l, h, c;
        return (
          0 === e.originalLength
            ? ((i = 0), (r = 0), (o = 0), (a = 0))
            : ((i = t.getStartLineNumber(e.originalStart)),
              (r = t.getStartColumn(e.originalStart)),
              (o = t.getEndLineNumber(e.originalStart + e.originalLength - 1)),
              (a = t.getEndColumn(e.originalStart + e.originalLength - 1))),
          0 === e.modifiedLength
            ? ((s = 0), (l = 0), (h = 0), (c = 0))
            : ((s = n.getStartLineNumber(e.modifiedStart)),
              (l = n.getStartColumn(e.modifiedStart)),
              (h = n.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1)),
              (c = n.getEndColumn(e.modifiedStart + e.modifiedLength - 1))),
          new fe(i, r, o, a, s, l, h, c)
        );
      }
    }
    class ge {
      constructor(e, t, n, i, r) {
        (this.originalStartLineNumber = e),
          (this.originalEndLineNumber = t),
          (this.modifiedStartLineNumber = n),
          (this.modifiedEndLineNumber = i),
          (this.charChanges = r);
      }
      static createFromDiffResult(e, t, n, i, r, o, a) {
        let s,
          l,
          h,
          c,
          d = void 0;
        if (
          (0 === t.originalLength
            ? ((s = n.getStartLineNumber(t.originalStart) - 1), (l = 0))
            : ((s = n.getStartLineNumber(t.originalStart)),
              (l = n.getEndLineNumber(t.originalStart + t.originalLength - 1))),
          0 === t.modifiedLength
            ? ((h = i.getStartLineNumber(t.modifiedStart) - 1), (c = 0))
            : ((h = i.getStartLineNumber(t.modifiedStart)),
              (c = i.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1))),
          o &&
            t.originalLength > 0 &&
            t.originalLength < 20 &&
            t.modifiedLength > 0 &&
            t.modifiedLength < 20 &&
            r())
        ) {
          const o = n.createCharSequence(
              e,
              t.originalStart,
              t.originalStart + t.originalLength - 1,
            ),
            s = i.createCharSequence(
              e,
              t.modifiedStart,
              t.modifiedStart + t.modifiedLength - 1,
            );
          let l = ue(o, s, r, !0).changes;
          a &&
            (l = (function(e) {
              if (e.length <= 1) return e;
              const t = [e[0]];
              let n = t[0];
              for (let i = 1, r = e.length; i < r; i++) {
                const r = e[i],
                  o = r.originalStart - (n.originalStart + n.originalLength),
                  a = r.modifiedStart - (n.modifiedStart + n.modifiedLength);
                Math.min(o, a) < 3
                  ? ((n.originalLength =
                      r.originalStart + r.originalLength - n.originalStart),
                    (n.modifiedLength =
                      r.modifiedStart + r.modifiedLength - n.modifiedStart))
                  : (t.push(r), (n = r));
              }
              return t;
            })(l)),
            (d = []);
          for (let e = 0, t = l.length; e < t; e++)
            d.push(fe.createFromDiffChange(l[e], o, s));
        }
        return new ge(s, l, h, c, d);
      }
    }
    class be {
      constructor(e, t, n) {
        (this.shouldComputeCharChanges = n.shouldComputeCharChanges),
          (this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges),
          (this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace),
          (this.shouldMakePrettyDiff = n.shouldMakePrettyDiff),
          (this.originalLines = e),
          (this.modifiedLines = t),
          (this.original = new pe(e)),
          (this.modified = new pe(t)),
          (this.continueLineDiff = we(n.maxComputationTime)),
          (this.continueCharDiff = we(
            0 === n.maxComputationTime
              ? 0
              : Math.min(n.maxComputationTime, 5e3),
          ));
      }
      computeDiff() {
        if (
          1 === this.original.lines.length &&
          0 === this.original.lines[0].length
        )
          return 1 === this.modified.lines.length &&
            0 === this.modified.lines[0].length
            ? { quitEarly: !1, changes: [] }
            : {
                quitEarly: !1,
                changes: [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.lines.length,
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0,
                      },
                    ],
                  },
                ],
              };
        if (
          1 === this.modified.lines.length &&
          0 === this.modified.lines[0].length
        )
          return {
            quitEarly: !1,
            changes: [
              {
                originalStartLineNumber: 1,
                originalEndLineNumber: this.original.lines.length,
                modifiedStartLineNumber: 1,
                modifiedEndLineNumber: 1,
                charChanges: [
                  {
                    modifiedEndColumn: 0,
                    modifiedEndLineNumber: 0,
                    modifiedStartColumn: 0,
                    modifiedStartLineNumber: 0,
                    originalEndColumn: 0,
                    originalEndLineNumber: 0,
                    originalStartColumn: 0,
                    originalStartLineNumber: 0,
                  },
                ],
              },
            ],
          };
        const e = ue(
            this.original,
            this.modified,
            this.continueLineDiff,
            this.shouldMakePrettyDiff,
          ),
          t = e.changes,
          n = e.quitEarly;
        if (this.shouldIgnoreTrimWhitespace) {
          const e = [];
          for (let n = 0, i = t.length; n < i; n++)
            e.push(
              ge.createFromDiffResult(
                this.shouldIgnoreTrimWhitespace,
                t[n],
                this.original,
                this.modified,
                this.continueCharDiff,
                this.shouldComputeCharChanges,
                this.shouldPostProcessCharChanges,
              ),
            );
          return { quitEarly: n, changes: e };
        }
        const i = [];
        let r = 0,
          o = 0;
        for (let e = -1, n = t.length; e < n; e++) {
          const a = e + 1 < n ? t[e + 1] : null,
            s = a ? a.originalStart : this.originalLines.length,
            l = a ? a.modifiedStart : this.modifiedLines.length;
          for (; r < s && o < l; ) {
            const e = this.originalLines[r],
              t = this.modifiedLines[o];
            if (e !== t) {
              {
                let n = _e(e, 1),
                  a = _e(t, 1);
                for (; n > 1 && a > 1; ) {
                  if (e.charCodeAt(n - 2) !== t.charCodeAt(a - 2)) break;
                  n--, a--;
                }
                (n > 1 || a > 1) &&
                  this._pushTrimWhitespaceCharChange(
                    i,
                    r + 1,
                    1,
                    n,
                    o + 1,
                    1,
                    a,
                  );
              }
              {
                let n = ve(e, 1),
                  a = ve(t, 1);
                const s = e.length + 1,
                  l = t.length + 1;
                for (; n < s && a < l; ) {
                  if (e.charCodeAt(n - 1) !== e.charCodeAt(a - 1)) break;
                  n++, a++;
                }
                (n < s || a < l) &&
                  this._pushTrimWhitespaceCharChange(
                    i,
                    r + 1,
                    n,
                    s,
                    o + 1,
                    a,
                    l,
                  );
              }
            }
            r++, o++;
          }
          a &&
            (i.push(
              ge.createFromDiffResult(
                this.shouldIgnoreTrimWhitespace,
                a,
                this.original,
                this.modified,
                this.continueCharDiff,
                this.shouldComputeCharChanges,
                this.shouldPostProcessCharChanges,
              ),
            ),
            (r += a.originalLength),
            (o += a.modifiedLength));
        }
        return { quitEarly: n, changes: i };
      }
      _pushTrimWhitespaceCharChange(e, t, n, i, r, o, a) {
        if (this._mergeTrimWhitespaceCharChange(e, t, n, i, r, o, a)) return;
        let s = void 0;
        this.shouldComputeCharChanges && (s = [new fe(t, n, t, i, r, o, r, a)]),
          e.push(new ge(t, t, r, r, s));
      }
      _mergeTrimWhitespaceCharChange(e, t, n, i, r, o, a) {
        const s = e.length;
        if (0 === s) return !1;
        const l = e[s - 1];
        return (
          0 !== l.originalEndLineNumber &&
          0 !== l.modifiedEndLineNumber &&
          l.originalEndLineNumber + 1 === t &&
            l.modifiedEndLineNumber + 1 === r &&
            ((l.originalEndLineNumber = t),
            (l.modifiedEndLineNumber = r),
            this.shouldComputeCharChanges &&
              l.charChanges &&
              l.charChanges.push(new fe(t, n, t, i, r, o, r, a)),
            !0)
        );
      }
    }
    function _e(e, t) {
      const n = (function(e) {
        for (let t = 0, n = e.length; t < n; t++) {
          const n = e.charCodeAt(t);
          if (32 !== n && 9 !== n) return t;
        }
        return -1;
      })(e);
      return -1 === n ? t : n + 1;
    }
    function ve(e, t) {
      const n = (function(e, t = e.length - 1) {
        for (let n = t; n >= 0; n--) {
          const t = e.charCodeAt(n);
          if (32 !== t && 9 !== t) return n;
        }
        return -1;
      })(e);
      return -1 === n ? t : n + 2;
    }
    function we(e) {
      if (0 === e) return () => !0;
      const t = Date.now();
      return () => Date.now() - t < e;
    }
    function ye(e) {
      return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
    }
    function Te(e) {
      return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
    }
    class ke {
      constructor(e, t) {
        (this.index = e), (this.remainder = t);
      }
    }
    class Se {
      constructor(e) {
        (this.values = e),
          (this.prefixSum = new Uint32Array(e.length)),
          (this.prefixSumValidIndex = new Int32Array(1)),
          (this.prefixSumValidIndex[0] = -1);
      }
      insertValues(e, t) {
        e = Te(e);
        const n = this.values,
          i = this.prefixSum,
          r = t.length;
        return (
          0 !== r &&
          ((this.values = new Uint32Array(n.length + r)),
          this.values.set(n.subarray(0, e), 0),
          this.values.set(n.subarray(e), e + r),
          this.values.set(t, e),
          e - 1 < this.prefixSumValidIndex[0] &&
            (this.prefixSumValidIndex[0] = e - 1),
          (this.prefixSum = new Uint32Array(this.values.length)),
          this.prefixSumValidIndex[0] >= 0 &&
            this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
          !0)
        );
      }
      changeValue(e, t) {
        return (
          (e = Te(e)),
          (t = Te(t)),
          this.values[e] !== t &&
            ((this.values[e] = t),
            e - 1 < this.prefixSumValidIndex[0] &&
              (this.prefixSumValidIndex[0] = e - 1),
            !0)
        );
      }
      removeValues(e, t) {
        (e = Te(e)), (t = Te(t));
        const n = this.values,
          i = this.prefixSum;
        if (e >= n.length) return !1;
        let r = n.length - e;
        return (
          t >= r && (t = r),
          0 !== t &&
            ((this.values = new Uint32Array(n.length - t)),
            this.values.set(n.subarray(0, e), 0),
            this.values.set(n.subarray(e + t), e),
            (this.prefixSum = new Uint32Array(this.values.length)),
            e - 1 < this.prefixSumValidIndex[0] &&
              (this.prefixSumValidIndex[0] = e - 1),
            this.prefixSumValidIndex[0] >= 0 &&
              this.prefixSum.set(
                i.subarray(0, this.prefixSumValidIndex[0] + 1),
              ),
            !0)
        );
      }
      getTotalValue() {
        return 0 === this.values.length
          ? 0
          : this._getAccumulatedValue(this.values.length - 1);
      }
      getAccumulatedValue(e) {
        return e < 0 ? 0 : ((e = Te(e)), this._getAccumulatedValue(e));
      }
      _getAccumulatedValue(e) {
        if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
        let t = this.prefixSumValidIndex[0] + 1;
        0 === t && ((this.prefixSum[0] = this.values[0]), t++),
          e >= this.values.length && (e = this.values.length - 1);
        for (let n = t; n <= e; n++)
          this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
        return (
          (this.prefixSumValidIndex[0] = Math.max(
            this.prefixSumValidIndex[0],
            e,
          )),
          this.prefixSum[e]
        );
      }
      getIndexOf(e) {
        (e = Math.floor(e)), this.getTotalValue();
        let t = 0,
          n = this.values.length - 1,
          i = 0,
          r = 0,
          o = 0;
        for (; t <= n; )
          if (
            ((i = (t + (n - t) / 2) | 0),
            (r = this.prefixSum[i]),
            (o = r - this.values[i]),
            e < o)
          )
            n = i - 1;
          else {
            if (!(e >= r)) break;
            t = i + 1;
          }
        return new ke(i, e - o);
      }
    }
    const xe = (function(e = '') {
      let t = '(-?\\d*\\.\\d\\w*)|([^';
      for (const n of '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?')
        e.indexOf(n) >= 0 || (t += '\\' + n);
      return (t += '\\s]+)'), new RegExp(t, 'g');
    })();
    const Le = { maxLen: 1e3, windowSize: 15, timeBudget: 150 };
    function Ce(e, t, n, i) {
      let r;
      for (; (r = e.exec(t)); ) {
        const t = r.index || 0;
        if (t <= n && e.lastIndex >= n) return r;
        if (i > 0 && t > i) return null;
      }
      return null;
    }
    class Ee {
      constructor(e) {
        let t = ye(e);
        (this._defaultValue = t),
          (this._asciiMap = Ee._createAsciiMap(t)),
          (this._map = new Map());
      }
      static _createAsciiMap(e) {
        let t = new Uint8Array(256);
        for (let n = 0; n < 256; n++) t[n] = e;
        return t;
      }
      set(e, t) {
        let n = ye(t);
        e >= 0 && e < 256 ? (this._asciiMap[e] = n) : this._map.set(e, n);
      }
      get(e) {
        return e >= 0 && e < 256
          ? this._asciiMap[e]
          : this._map.get(e) || this._defaultValue;
      }
    }
    class Ae {
      constructor(e, t, n) {
        const i = new Uint8Array(e * t);
        for (let r = 0, o = e * t; r < o; r++) i[r] = n;
        (this._data = i), (this.rows = e), (this.cols = t);
      }
      get(e, t) {
        return this._data[e * this.cols + t];
      }
      set(e, t, n) {
        this._data[e * this.cols + t] = n;
      }
    }
    class Me {
      constructor(e) {
        let t = 0,
          n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
          let [r, o, a] = e[i];
          o > t && (t = o), r > n && (n = r), a > n && (n = a);
        }
        t++, n++;
        let i = new Ae(n, t, 0);
        for (let t = 0, n = e.length; t < n; t++) {
          let [n, r, o] = e[t];
          i.set(n, r, o);
        }
        (this._states = i), (this._maxCharCode = t);
      }
      nextState(e, t) {
        return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
      }
    }
    let Re = null;
    let Ie = null;
    class Ue {
      static _createLink(e, t, n, i, r) {
        let o = r - 1;
        do {
          const n = t.charCodeAt(o);
          if (2 !== e.get(n)) break;
          o--;
        } while (o > i);
        if (i > 0) {
          const e = t.charCodeAt(i - 1),
            n = t.charCodeAt(o);
          ((40 === e && 41 === n) ||
            (91 === e && 93 === n) ||
            (123 === e && 125 === n)) &&
            o--;
        }
        return {
          range: {
            startLineNumber: n,
            startColumn: i + 1,
            endLineNumber: n,
            endColumn: o + 2,
          },
          url: t.substring(i, o + 1),
        };
      }
      static computeLinks(
        e,
        t = (function() {
          return (
            null === Re &&
              (Re = new Me([
                [1, 104, 2],
                [1, 72, 2],
                [1, 102, 6],
                [1, 70, 6],
                [2, 116, 3],
                [2, 84, 3],
                [3, 116, 4],
                [3, 84, 4],
                [4, 112, 5],
                [4, 80, 5],
                [5, 115, 9],
                [5, 83, 9],
                [5, 58, 10],
                [6, 105, 7],
                [6, 73, 7],
                [7, 108, 8],
                [7, 76, 8],
                [8, 101, 9],
                [8, 69, 9],
                [9, 58, 10],
                [10, 47, 11],
                [11, 47, 12],
              ])),
            Re
          );
        })(),
      ) {
        const n = (function() {
          if (null === Ie) {
            Ie = new Ee(0);
            const e =
              ' \t<>\'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…';
            for (let t = 0; t < e.length; t++) Ie.set(e.charCodeAt(t), 1);
            const t = '.,;';
            for (let e = 0; e < t.length; e++) Ie.set(t.charCodeAt(e), 2);
          }
          return Ie;
        })();
        let i = [];
        for (let r = 1, o = e.getLineCount(); r <= o; r++) {
          const o = e.getLineContent(r),
            a = o.length;
          let s = 0,
            l = 0,
            h = 0,
            c = 1,
            d = !1,
            u = !1,
            p = !1,
            m = !1;
          for (; s < a; ) {
            let e = !1;
            const a = o.charCodeAt(s);
            if (13 === c) {
              let t;
              switch (a) {
                case 40:
                  (d = !0), (t = 0);
                  break;
                case 41:
                  t = d ? 0 : 1;
                  break;
                case 91:
                  (p = !0), (u = !0), (t = 0);
                  break;
                case 93:
                  (p = !1), (t = u ? 0 : 1);
                  break;
                case 123:
                  (m = !0), (t = 0);
                  break;
                case 125:
                  t = m ? 0 : 1;
                  break;
                case 39:
                  t = 34 === h || 96 === h ? 0 : 1;
                  break;
                case 34:
                  t = 39 === h || 96 === h ? 0 : 1;
                  break;
                case 96:
                  t = 39 === h || 34 === h ? 0 : 1;
                  break;
                case 42:
                  t = 42 === h ? 1 : 0;
                  break;
                case 124:
                  t = 124 === h ? 1 : 0;
                  break;
                case 32:
                  t = p ? 0 : 1;
                  break;
                default:
                  t = n.get(a);
              }
              1 === t && (i.push(Ue._createLink(n, o, r, l, s)), (e = !0));
            } else if (12 === c) {
              let t;
              91 === a ? ((u = !0), (t = 0)) : (t = n.get(a)),
                1 === t ? (e = !0) : (c = 13);
            } else (c = t.nextState(c, a)), 0 === c && (e = !0);
            e && ((c = 1), (d = !1), (u = !1), (m = !1), (l = s + 1), (h = a)),
              s++;
          }
          13 === c && i.push(Ue._createLink(n, o, r, l, a));
        }
        return i;
      }
    }
    class Ne {
      constructor() {
        this._defaultValueSet = [
          ['true', 'false'],
          ['True', 'False'],
          [
            'Private',
            'Public',
            'Friend',
            'ReadOnly',
            'Partial',
            'Protected',
            'WriteOnly',
          ],
          ['public', 'protected', 'private'],
        ];
      }
      navigateValueSet(e, t, n, i, r) {
        if (e && t) {
          let n = this.doNavigateValueSet(t, r);
          if (n) return { range: e, value: n };
        }
        if (n && i) {
          let e = this.doNavigateValueSet(i, r);
          if (e) return { range: n, value: e };
        }
        return null;
      }
      doNavigateValueSet(e, t) {
        let n = this.numberReplace(e, t);
        return null !== n ? n : this.textReplace(e, t);
      }
      numberReplace(e, t) {
        let n = Math.pow(10, e.length - (e.lastIndexOf('.') + 1)),
          i = Number(e),
          r = parseFloat(e);
        return isNaN(i) || isNaN(r) || i !== r
          ? null
          : 0 !== i || t
          ? ((i = Math.floor(i * n)), (i += t ? n : -n), String(i / n))
          : null;
      }
      textReplace(e, t) {
        return this.valueSetsReplace(this._defaultValueSet, e, t);
      }
      valueSetsReplace(e, t, n) {
        let i = null;
        for (let r = 0, o = e.length; null === i && r < o; r++)
          i = this.valueSetReplace(e[r], t, n);
        return i;
      }
      valueSetReplace(e, t, n) {
        let i = e.indexOf(t);
        return i >= 0
          ? ((i += n ? 1 : -1),
            i < 0 ? (i = e.length - 1) : (i %= e.length),
            e[i])
          : null;
      }
    }
    Ne.INSTANCE = new Ne();
    class He {
      constructor(e) {
        (this.element = e),
          (this.next = He.Undefined),
          (this.prev = He.Undefined);
      }
    }
    He.Undefined = new He(void 0);
    class ze {
      constructor() {
        (this._first = He.Undefined),
          (this._last = He.Undefined),
          (this._size = 0);
      }
      get size() {
        return this._size;
      }
      isEmpty() {
        return this._first === He.Undefined;
      }
      clear() {
        let e = this._first;
        for (; e !== He.Undefined; ) {
          const t = e.next;
          (e.prev = He.Undefined), (e.next = He.Undefined), (e = t);
        }
        (this._first = He.Undefined),
          (this._last = He.Undefined),
          (this._size = 0);
      }
      unshift(e) {
        return this._insert(e, !1);
      }
      push(e) {
        return this._insert(e, !0);
      }
      _insert(e, t) {
        const n = new He(e);
        if (this._first === He.Undefined) (this._first = n), (this._last = n);
        else if (t) {
          const e = this._last;
          (this._last = n), (n.prev = e), (e.next = n);
        } else {
          const e = this._first;
          (this._first = n), (n.next = e), (e.prev = n);
        }
        this._size += 1;
        let i = !1;
        return () => {
          i || ((i = !0), this._remove(n));
        };
      }
      shift() {
        if (this._first !== He.Undefined) {
          const e = this._first.element;
          return this._remove(this._first), e;
        }
      }
      pop() {
        if (this._last !== He.Undefined) {
          const e = this._last.element;
          return this._remove(this._last), e;
        }
      }
      _remove(e) {
        if (e.prev !== He.Undefined && e.next !== He.Undefined) {
          const t = e.prev;
          (t.next = e.next), (e.next.prev = t);
        } else
          e.prev === He.Undefined && e.next === He.Undefined
            ? ((this._first = He.Undefined), (this._last = He.Undefined))
            : e.next === He.Undefined
            ? ((this._last = this._last.prev), (this._last.next = He.Undefined))
            : e.prev === He.Undefined &&
              ((this._first = this._first.next),
              (this._first.prev = He.Undefined));
        this._size -= 1;
      }
      *[Symbol.iterator]() {
        let e = this._first;
        for (; e !== He.Undefined; ) yield e.element, (e = e.next);
      }
    }
    const We = g.a.performance && 'function' == typeof g.a.performance.now;
    class Oe {
      constructor(e) {
        (this._highResolution = We && e),
          (this._startTime = this._now()),
          (this._stopTime = -1);
      }
      static create(e = !0) {
        return new Oe(e);
      }
      stop() {
        this._stopTime = this._now();
      }
      elapsed() {
        return -1 !== this._stopTime
          ? this._stopTime - this._startTime
          : this._now() - this._startTime;
      }
      _now() {
        return this._highResolution ? g.a.performance.now() : Date.now();
      }
    }
    var De;
    !(function(e) {
      function t(e) {
        return (t, n = null, i) => {
          let r,
            o = !1;
          return (
            (r = e(
              e => {
                if (!o) return r ? r.dispose() : (o = !0), t.call(n, e);
              },
              null,
              i,
            )),
            o && r.dispose(),
            r
          );
        };
      }
      function n(e, t) {
        return a((n, i = null, r) => e(e => n.call(i, t(e)), null, r));
      }
      function i(e, t) {
        return a((n, i = null, r) =>
          e(
            e => {
              t(e), n.call(i, e);
            },
            null,
            r,
          ),
        );
      }
      function r(e, t) {
        return a((n, i = null, r) => e(e => t(e) && n.call(i, e), null, r));
      }
      function o(e, t, i) {
        let r = i;
        return n(e, e => ((r = t(r, e)), r));
      }
      function a(e) {
        let t;
        const n = new qe({
          onFirstListenerAdd() {
            t = e(n.fire, n);
          },
          onLastListenerRemove() {
            t.dispose();
          },
        });
        return n.event;
      }
      function s(e, t, n = 100, i = !1, r) {
        let o,
          a = void 0,
          s = void 0,
          l = 0;
        const h = new qe({
          leakWarningThreshold: r,
          onFirstListenerAdd() {
            o = e(e => {
              l++,
                (a = t(a, e)),
                i && !s && (h.fire(a), (a = void 0)),
                clearTimeout(s),
                (s = setTimeout(() => {
                  const e = a;
                  (a = void 0),
                    (s = void 0),
                    (!i || l > 1) && h.fire(e),
                    (l = 0);
                }, n));
            });
          },
          onLastListenerRemove() {
            o.dispose();
          },
        });
        return h.event;
      }
      function l(e, t = (e, t) => e === t) {
        let n,
          i = !0;
        return r(e, e => {
          const r = i || !t(e, n);
          return (i = !1), (n = e), r;
        });
      }
      (e.None = () => f.None),
        (e.once = t),
        (e.map = n),
        (e.forEach = i),
        (e.filter = r),
        (e.signal = function(e) {
          return e;
        }),
        (e.any = function(...e) {
          return (t, n = null, i) =>
            p(...e.map(e => e(e => t.call(n, e), null, i)));
        }),
        (e.reduce = o),
        (e.snapshot = a),
        (e.debounce = s),
        (e.stopwatch = function(e) {
          const i = new Date().getTime();
          return n(t(e), e => new Date().getTime() - i);
        }),
        (e.latch = l),
        (e.split = function(t, n) {
          return [e.filter(t, n), e.filter(t, e => !n(e))];
        }),
        (e.buffer = function(e, t = !1, n = []) {
          let i = n.slice(),
            r = e(e => {
              i ? i.push(e) : a.fire(e);
            });
          const o = () => {
              i && i.forEach(e => a.fire(e)), (i = null);
            },
            a = new qe({
              onFirstListenerAdd() {
                r || (r = e(e => a.fire(e)));
              },
              onFirstListenerDidAdd() {
                i && (t ? setTimeout(o) : o());
              },
              onLastListenerRemove() {
                r && r.dispose(), (r = null);
              },
            });
          return a.event;
        });
      class h {
        constructor(e) {
          this.event = e;
        }
        map(e) {
          return new h(n(this.event, e));
        }
        forEach(e) {
          return new h(i(this.event, e));
        }
        filter(e) {
          return new h(r(this.event, e));
        }
        reduce(e, t) {
          return new h(o(this.event, e, t));
        }
        latch() {
          return new h(l(this.event));
        }
        debounce(e, t = 100, n = !1, i) {
          return new h(s(this.event, e, t, n, i));
        }
        on(e, t, n) {
          return this.event(e, t, n);
        }
        once(e, n, i) {
          return t(this.event)(e, n, i);
        }
      }
      (e.chain = function(e) {
        return new h(e);
      }),
        (e.fromNodeEventEmitter = function(e, t, n = e => e) {
          const i = (...e) => r.fire(n(...e)),
            r = new qe({
              onFirstListenerAdd: () => e.on(t, i),
              onLastListenerRemove: () => e.removeListener(t, i),
            });
          return r.event;
        }),
        (e.fromDOMEventEmitter = function(e, t, n = e => e) {
          const i = (...e) => r.fire(n(...e)),
            r = new qe({
              onFirstListenerAdd: () => e.addEventListener(t, i),
              onLastListenerRemove: () => e.removeEventListener(t, i),
            });
          return r.event;
        }),
        (e.fromPromise = function(e) {
          const t = new qe();
          let n = !1;
          return (
            e
              .then(void 0, () => null)
              .then(() => {
                n ? t.fire(void 0) : setTimeout(() => t.fire(void 0), 0);
              }),
            (n = !0),
            t.event
          );
        }),
        (e.toPromise = function(e) {
          return new Promise(n => t(e)(n));
        });
    })(De || (De = {}));
    class Pe {
      constructor(e) {
        (this._listenerCount = 0),
          (this._invocationCount = 0),
          (this._elapsedOverall = 0),
          (this._name = `${e}_${Pe._idPool++}`);
      }
      start(e) {
        (this._stopWatch = new Oe(!0)), (this._listenerCount = e);
      }
      stop() {
        if (this._stopWatch) {
          const e = this._stopWatch.elapsed();
          (this._elapsedOverall += e),
            (this._invocationCount += 1),
            console.info(
              `did FIRE ${this._name}: elapsed_ms: ${e.toFixed(5)}, listener: ${
                this._listenerCount
              } (elapsed_overall: ${this._elapsedOverall.toFixed(
                2,
              )}, invocations: ${this._invocationCount})`,
            ),
            (this._stopWatch = void 0);
        }
      }
    }
    Pe._idPool = 0;
    class qe {
      constructor(e) {
        var t;
        (this._disposed = !1),
          (this._options = e),
          (this._leakageMon = void 0),
          (this._perfMon = (null === (t = this._options) || void 0 === t
          ? void 0
          : t._profName)
            ? new Pe(this._options._profName)
            : void 0);
      }
      get event() {
        return (
          this._event ||
            (this._event = (e, t, n) => {
              var i;
              this._listeners || (this._listeners = new ze());
              const r = this._listeners.isEmpty();
              r &&
                this._options &&
                this._options.onFirstListenerAdd &&
                this._options.onFirstListenerAdd(this);
              const o = this._listeners.push(t ? [e, t] : e);
              r &&
                this._options &&
                this._options.onFirstListenerDidAdd &&
                this._options.onFirstListenerDidAdd(this),
                this._options &&
                  this._options.onListenerDidAdd &&
                  this._options.onListenerDidAdd(this, e, t);
              const a =
                null === (i = this._leakageMon) || void 0 === i
                  ? void 0
                  : i.check(this._listeners.size);
              let s;
              return (
                (s = {
                  dispose: () => {
                    if (
                      (a && a(),
                      (s.dispose = qe._noop),
                      !this._disposed &&
                        (o(),
                        this._options && this._options.onLastListenerRemove))
                    ) {
                      (this._listeners && !this._listeners.isEmpty()) ||
                        this._options.onLastListenerRemove(this);
                    }
                  },
                }),
                n instanceof m ? n.add(s) : Array.isArray(n) && n.push(s),
                s
              );
            }),
          this._event
        );
      }
      fire(e) {
        var t, n;
        if (this._listeners) {
          this._deliveryQueue || (this._deliveryQueue = new ze());
          for (let t of this._listeners) this._deliveryQueue.push([t, e]);
          for (
            null === (t = this._perfMon) ||
            void 0 === t ||
            t.start(this._deliveryQueue.size);
            this._deliveryQueue.size > 0;

          ) {
            const [e, t] = this._deliveryQueue.shift();
            try {
              'function' == typeof e ? e.call(void 0, t) : e[0].call(e[1], t);
            } catch (e) {
              r(e);
            }
          }
          null === (n = this._perfMon) || void 0 === n || n.stop();
        }
      }
      dispose() {
        var e, t, n, i, r;
        this._disposed ||
          ((this._disposed = !0),
          null === (e = this._listeners) || void 0 === e || e.clear(),
          null === (t = this._deliveryQueue) || void 0 === t || t.clear(),
          null ===
            (i =
              null === (n = this._options) || void 0 === n
                ? void 0
                : n.onLastListenerRemove) ||
            void 0 === i ||
            i.call(n),
          null === (r = this._leakageMon) || void 0 === r || r.dispose());
      }
    }
    qe._noop = function() {};
    const Fe = Object.freeze(function(e, t) {
      const n = setTimeout(e.bind(t), 0);
      return {
        dispose() {
          clearTimeout(n);
        },
      };
    });
    var Be, je;
    ((je = Be || (Be = {})).isCancellationToken = function(e) {
      return (
        e === je.None ||
        e === je.Cancelled ||
        e instanceof Ge ||
        (!(!e || 'object' != typeof e) &&
          'boolean' == typeof e.isCancellationRequested &&
          'function' == typeof e.onCancellationRequested)
      );
    }),
      (je.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: De.None,
      })),
      (je.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: Fe,
      }));
    class Ge {
      constructor() {
        (this._isCancelled = !1), (this._emitter = null);
      }
      cancel() {
        this._isCancelled ||
          ((this._isCancelled = !0),
          this._emitter && (this._emitter.fire(void 0), this.dispose()));
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        return this._isCancelled
          ? Fe
          : (this._emitter || (this._emitter = new qe()), this._emitter.event);
      }
      dispose() {
        this._emitter && (this._emitter.dispose(), (this._emitter = null));
      }
    }
    class Ve {
      constructor(e) {
        (this._token = void 0),
          (this._parentListener = void 0),
          (this._parentListener =
            e && e.onCancellationRequested(this.cancel, this));
      }
      get token() {
        return this._token || (this._token = new Ge()), this._token;
      }
      cancel() {
        this._token
          ? this._token instanceof Ge && this._token.cancel()
          : (this._token = Be.Cancelled);
      }
      dispose(e = !1) {
        e && this.cancel(),
          this._parentListener && this._parentListener.dispose(),
          this._token
            ? this._token instanceof Ge && this._token.dispose()
            : (this._token = Be.None);
      }
    }
    class Ke {
      constructor() {
        (this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null));
      }
      define(e, t) {
        (this._keyCodeToStr[e] = t), (this._strToKeyCode[t.toLowerCase()] = e);
      }
      keyCodeToStr(e) {
        return this._keyCodeToStr[e];
      }
      strToKeyCode(e) {
        return this._strToKeyCode[e.toLowerCase()] || 0;
      }
    }
    const Ye = new Ke(),
      $e = new Ke(),
      Xe = new Ke();
    var Je,
      Qe,
      Ze,
      et,
      tt,
      nt,
      it,
      rt,
      ot,
      at,
      st,
      lt,
      ht,
      ct,
      dt,
      ut,
      pt,
      mt,
      ft,
      gt,
      bt,
      _t,
      vt,
      wt,
      yt,
      Tt,
      kt,
      St,
      xt,
      Lt,
      Ct,
      Et,
      At,
      Mt,
      Rt,
      It;
    !(function() {
      function e(e, t, n = t, i = n) {
        Ye.define(e, t), $e.define(e, n), Xe.define(e, i);
      }
      e(0, 'unknown'),
        e(1, 'Backspace'),
        e(2, 'Tab'),
        e(3, 'Enter'),
        e(4, 'Shift'),
        e(5, 'Ctrl'),
        e(6, 'Alt'),
        e(7, 'PauseBreak'),
        e(8, 'CapsLock'),
        e(9, 'Escape'),
        e(10, 'Space'),
        e(11, 'PageUp'),
        e(12, 'PageDown'),
        e(13, 'End'),
        e(14, 'Home'),
        e(15, 'LeftArrow', 'Left'),
        e(16, 'UpArrow', 'Up'),
        e(17, 'RightArrow', 'Right'),
        e(18, 'DownArrow', 'Down'),
        e(19, 'Insert'),
        e(20, 'Delete'),
        e(21, '0'),
        e(22, '1'),
        e(23, '2'),
        e(24, '3'),
        e(25, '4'),
        e(26, '5'),
        e(27, '6'),
        e(28, '7'),
        e(29, '8'),
        e(30, '9'),
        e(31, 'A'),
        e(32, 'B'),
        e(33, 'C'),
        e(34, 'D'),
        e(35, 'E'),
        e(36, 'F'),
        e(37, 'G'),
        e(38, 'H'),
        e(39, 'I'),
        e(40, 'J'),
        e(41, 'K'),
        e(42, 'L'),
        e(43, 'M'),
        e(44, 'N'),
        e(45, 'O'),
        e(46, 'P'),
        e(47, 'Q'),
        e(48, 'R'),
        e(49, 'S'),
        e(50, 'T'),
        e(51, 'U'),
        e(52, 'V'),
        e(53, 'W'),
        e(54, 'X'),
        e(55, 'Y'),
        e(56, 'Z'),
        e(57, 'Meta'),
        e(58, 'ContextMenu'),
        e(59, 'F1'),
        e(60, 'F2'),
        e(61, 'F3'),
        e(62, 'F4'),
        e(63, 'F5'),
        e(64, 'F6'),
        e(65, 'F7'),
        e(66, 'F8'),
        e(67, 'F9'),
        e(68, 'F10'),
        e(69, 'F11'),
        e(70, 'F12'),
        e(71, 'F13'),
        e(72, 'F14'),
        e(73, 'F15'),
        e(74, 'F16'),
        e(75, 'F17'),
        e(76, 'F18'),
        e(77, 'F19'),
        e(78, 'NumLock'),
        e(79, 'ScrollLock'),
        e(80, ';', ';', 'OEM_1'),
        e(81, '=', '=', 'OEM_PLUS'),
        e(82, ',', ',', 'OEM_COMMA'),
        e(83, '-', '-', 'OEM_MINUS'),
        e(84, '.', '.', 'OEM_PERIOD'),
        e(85, '/', '/', 'OEM_2'),
        e(86, '`', '`', 'OEM_3'),
        e(110, 'ABNT_C1'),
        e(111, 'ABNT_C2'),
        e(87, '[', '[', 'OEM_4'),
        e(88, '\\', '\\', 'OEM_5'),
        e(89, ']', ']', 'OEM_6'),
        e(90, "'", "'", 'OEM_7'),
        e(91, 'OEM_8'),
        e(92, 'OEM_102'),
        e(93, 'NumPad0'),
        e(94, 'NumPad1'),
        e(95, 'NumPad2'),
        e(96, 'NumPad3'),
        e(97, 'NumPad4'),
        e(98, 'NumPad5'),
        e(99, 'NumPad6'),
        e(100, 'NumPad7'),
        e(101, 'NumPad8'),
        e(102, 'NumPad9'),
        e(103, 'NumPad_Multiply'),
        e(104, 'NumPad_Add'),
        e(105, 'NumPad_Separator'),
        e(106, 'NumPad_Subtract'),
        e(107, 'NumPad_Decimal'),
        e(108, 'NumPad_Divide');
    })(),
      (function(e) {
        (e.toString = function(e) {
          return Ye.keyCodeToStr(e);
        }),
          (e.fromString = function(e) {
            return Ye.strToKeyCode(e);
          }),
          (e.toUserSettingsUS = function(e) {
            return $e.keyCodeToStr(e);
          }),
          (e.toUserSettingsGeneral = function(e) {
            return Xe.keyCodeToStr(e);
          }),
          (e.fromUserSettings = function(e) {
            return $e.strToKeyCode(e) || Xe.strToKeyCode(e);
          });
      })(Je || (Je = {}));
    class Ut extends de {
      constructor(e, t, n, i) {
        super(e, t, n, i),
          (this.selectionStartLineNumber = e),
          (this.selectionStartColumn = t),
          (this.positionLineNumber = n),
          (this.positionColumn = i);
      }
      toString() {
        return (
          '[' +
          this.selectionStartLineNumber +
          ',' +
          this.selectionStartColumn +
          ' -> ' +
          this.positionLineNumber +
          ',' +
          this.positionColumn +
          ']'
        );
      }
      equalsSelection(e) {
        return Ut.selectionsEqual(this, e);
      }
      static selectionsEqual(e, t) {
        return (
          e.selectionStartLineNumber === t.selectionStartLineNumber &&
          e.selectionStartColumn === t.selectionStartColumn &&
          e.positionLineNumber === t.positionLineNumber &&
          e.positionColumn === t.positionColumn
        );
      }
      getDirection() {
        return this.selectionStartLineNumber === this.startLineNumber &&
          this.selectionStartColumn === this.startColumn
          ? 0
          : 1;
      }
      setEndPosition(e, t) {
        return 0 === this.getDirection()
          ? new Ut(this.startLineNumber, this.startColumn, e, t)
          : new Ut(e, t, this.startLineNumber, this.startColumn);
      }
      getPosition() {
        return new ce(this.positionLineNumber, this.positionColumn);
      }
      setStartPosition(e, t) {
        return 0 === this.getDirection()
          ? new Ut(e, t, this.endLineNumber, this.endColumn)
          : new Ut(this.endLineNumber, this.endColumn, e, t);
      }
      static fromPositions(e, t = e) {
        return new Ut(e.lineNumber, e.column, t.lineNumber, t.column);
      }
      static liftSelection(e) {
        return new Ut(
          e.selectionStartLineNumber,
          e.selectionStartColumn,
          e.positionLineNumber,
          e.positionColumn,
        );
      }
      static selectionsArrEqual(e, t) {
        if ((e && !t) || (!e && t)) return !1;
        if (!e && !t) return !0;
        if (e.length !== t.length) return !1;
        for (let n = 0, i = e.length; n < i; n++)
          if (!this.selectionsEqual(e[n], t[n])) return !1;
        return !0;
      }
      static isISelection(e) {
        return (
          e &&
          'number' == typeof e.selectionStartLineNumber &&
          'number' == typeof e.selectionStartColumn &&
          'number' == typeof e.positionLineNumber &&
          'number' == typeof e.positionColumn
        );
      }
      static createWithDirection(e, t, n, i, r) {
        return 0 === r ? new Ut(e, t, n, i) : new Ut(n, i, e, t);
      }
    }
    class Nt {
      constructor(e, t, n) {
        (this.offset = 0 | e), (this.type = t), (this.language = n);
      }
      toString() {
        return '(' + this.offset + ', ' + this.type + ')';
      }
    }
    !(function(e) {
      (e[(e.Unknown = 0)] = 'Unknown'),
        (e[(e.Disabled = 1)] = 'Disabled'),
        (e[(e.Enabled = 2)] = 'Enabled');
    })(Qe || (Qe = {})),
      (function(e) {
        (e[(e.KeepWhitespace = 1)] = 'KeepWhitespace'),
          (e[(e.InsertAsSnippet = 4)] = 'InsertAsSnippet');
      })(Ze || (Ze = {})),
      (function(e) {
        (e[(e.Method = 0)] = 'Method'),
          (e[(e.Function = 1)] = 'Function'),
          (e[(e.Constructor = 2)] = 'Constructor'),
          (e[(e.Field = 3)] = 'Field'),
          (e[(e.Variable = 4)] = 'Variable'),
          (e[(e.Class = 5)] = 'Class'),
          (e[(e.Struct = 6)] = 'Struct'),
          (e[(e.Interface = 7)] = 'Interface'),
          (e[(e.Module = 8)] = 'Module'),
          (e[(e.Property = 9)] = 'Property'),
          (e[(e.Event = 10)] = 'Event'),
          (e[(e.Operator = 11)] = 'Operator'),
          (e[(e.Unit = 12)] = 'Unit'),
          (e[(e.Value = 13)] = 'Value'),
          (e[(e.Constant = 14)] = 'Constant'),
          (e[(e.Enum = 15)] = 'Enum'),
          (e[(e.EnumMember = 16)] = 'EnumMember'),
          (e[(e.Keyword = 17)] = 'Keyword'),
          (e[(e.Text = 18)] = 'Text'),
          (e[(e.Color = 19)] = 'Color'),
          (e[(e.File = 20)] = 'File'),
          (e[(e.Reference = 21)] = 'Reference'),
          (e[(e.Customcolor = 22)] = 'Customcolor'),
          (e[(e.Folder = 23)] = 'Folder'),
          (e[(e.TypeParameter = 24)] = 'TypeParameter'),
          (e[(e.User = 25)] = 'User'),
          (e[(e.Issue = 26)] = 'Issue'),
          (e[(e.Snippet = 27)] = 'Snippet');
      })(et || (et = {})),
      (function(e) {
        e[(e.Deprecated = 1)] = 'Deprecated';
      })(tt || (tt = {})),
      (function(e) {
        (e[(e.Invoke = 0)] = 'Invoke'),
          (e[(e.TriggerCharacter = 1)] = 'TriggerCharacter'),
          (e[(e.TriggerForIncompleteCompletions = 2)] =
            'TriggerForIncompleteCompletions');
      })(nt || (nt = {})),
      (function(e) {
        (e[(e.EXACT = 0)] = 'EXACT'),
          (e[(e.ABOVE = 1)] = 'ABOVE'),
          (e[(e.BELOW = 2)] = 'BELOW');
      })(it || (it = {})),
      (function(e) {
        (e[(e.NotSet = 0)] = 'NotSet'),
          (e[(e.ContentFlush = 1)] = 'ContentFlush'),
          (e[(e.RecoverFromMarkers = 2)] = 'RecoverFromMarkers'),
          (e[(e.Explicit = 3)] = 'Explicit'),
          (e[(e.Paste = 4)] = 'Paste'),
          (e[(e.Undo = 5)] = 'Undo'),
          (e[(e.Redo = 6)] = 'Redo');
      })(rt || (rt = {})),
      (function(e) {
        (e[(e.LF = 1)] = 'LF'), (e[(e.CRLF = 2)] = 'CRLF');
      })(ot || (ot = {})),
      (function(e) {
        (e[(e.Text = 0)] = 'Text'),
          (e[(e.Read = 1)] = 'Read'),
          (e[(e.Write = 2)] = 'Write');
      })(at || (at = {})),
      (function(e) {
        (e[(e.None = 0)] = 'None'),
          (e[(e.Keep = 1)] = 'Keep'),
          (e[(e.Brackets = 2)] = 'Brackets'),
          (e[(e.Advanced = 3)] = 'Advanced'),
          (e[(e.Full = 4)] = 'Full');
      })(st || (st = {})),
      (function(e) {
        (e[(e.acceptSuggestionOnCommitCharacter = 0)] =
          'acceptSuggestionOnCommitCharacter'),
          (e[(e.acceptSuggestionOnEnter = 1)] = 'acceptSuggestionOnEnter'),
          (e[(e.accessibilitySupport = 2)] = 'accessibilitySupport'),
          (e[(e.accessibilityPageSize = 3)] = 'accessibilityPageSize'),
          (e[(e.ariaLabel = 4)] = 'ariaLabel'),
          (e[(e.autoClosingBrackets = 5)] = 'autoClosingBrackets'),
          (e[(e.autoClosingDelete = 6)] = 'autoClosingDelete'),
          (e[(e.autoClosingOvertype = 7)] = 'autoClosingOvertype'),
          (e[(e.autoClosingQuotes = 8)] = 'autoClosingQuotes'),
          (e[(e.autoIndent = 9)] = 'autoIndent'),
          (e[(e.automaticLayout = 10)] = 'automaticLayout'),
          (e[(e.autoSurround = 11)] = 'autoSurround'),
          (e[(e.codeLens = 12)] = 'codeLens'),
          (e[(e.codeLensFontFamily = 13)] = 'codeLensFontFamily'),
          (e[(e.codeLensFontSize = 14)] = 'codeLensFontSize'),
          (e[(e.colorDecorators = 15)] = 'colorDecorators'),
          (e[(e.columnSelection = 16)] = 'columnSelection'),
          (e[(e.comments = 17)] = 'comments'),
          (e[(e.contextmenu = 18)] = 'contextmenu'),
          (e[(e.copyWithSyntaxHighlighting = 19)] =
            'copyWithSyntaxHighlighting'),
          (e[(e.cursorBlinking = 20)] = 'cursorBlinking'),
          (e[(e.cursorSmoothCaretAnimation = 21)] =
            'cursorSmoothCaretAnimation'),
          (e[(e.cursorStyle = 22)] = 'cursorStyle'),
          (e[(e.cursorSurroundingLines = 23)] = 'cursorSurroundingLines'),
          (e[(e.cursorSurroundingLinesStyle = 24)] =
            'cursorSurroundingLinesStyle'),
          (e[(e.cursorWidth = 25)] = 'cursorWidth'),
          (e[(e.disableLayerHinting = 26)] = 'disableLayerHinting'),
          (e[(e.disableMonospaceOptimizations = 27)] =
            'disableMonospaceOptimizations'),
          (e[(e.domReadOnly = 28)] = 'domReadOnly'),
          (e[(e.dragAndDrop = 29)] = 'dragAndDrop'),
          (e[(e.emptySelectionClipboard = 30)] = 'emptySelectionClipboard'),
          (e[(e.extraEditorClassName = 31)] = 'extraEditorClassName'),
          (e[(e.fastScrollSensitivity = 32)] = 'fastScrollSensitivity'),
          (e[(e.find = 33)] = 'find'),
          (e[(e.fixedOverflowWidgets = 34)] = 'fixedOverflowWidgets'),
          (e[(e.folding = 35)] = 'folding'),
          (e[(e.foldingStrategy = 36)] = 'foldingStrategy'),
          (e[(e.foldingHighlight = 37)] = 'foldingHighlight'),
          (e[(e.unfoldOnClickAfterEndOfLine = 38)] =
            'unfoldOnClickAfterEndOfLine'),
          (e[(e.fontFamily = 39)] = 'fontFamily'),
          (e[(e.fontInfo = 40)] = 'fontInfo'),
          (e[(e.fontLigatures = 41)] = 'fontLigatures'),
          (e[(e.fontSize = 42)] = 'fontSize'),
          (e[(e.fontWeight = 43)] = 'fontWeight'),
          (e[(e.formatOnPaste = 44)] = 'formatOnPaste'),
          (e[(e.formatOnType = 45)] = 'formatOnType'),
          (e[(e.glyphMargin = 46)] = 'glyphMargin'),
          (e[(e.gotoLocation = 47)] = 'gotoLocation'),
          (e[(e.hideCursorInOverviewRuler = 48)] = 'hideCursorInOverviewRuler'),
          (e[(e.highlightActiveIndentGuide = 49)] =
            'highlightActiveIndentGuide'),
          (e[(e.hover = 50)] = 'hover'),
          (e[(e.inDiffEditor = 51)] = 'inDiffEditor'),
          (e[(e.inlineSuggest = 52)] = 'inlineSuggest'),
          (e[(e.letterSpacing = 53)] = 'letterSpacing'),
          (e[(e.lightbulb = 54)] = 'lightbulb'),
          (e[(e.lineDecorationsWidth = 55)] = 'lineDecorationsWidth'),
          (e[(e.lineHeight = 56)] = 'lineHeight'),
          (e[(e.lineNumbers = 57)] = 'lineNumbers'),
          (e[(e.lineNumbersMinChars = 58)] = 'lineNumbersMinChars'),
          (e[(e.linkedEditing = 59)] = 'linkedEditing'),
          (e[(e.links = 60)] = 'links'),
          (e[(e.matchBrackets = 61)] = 'matchBrackets'),
          (e[(e.minimap = 62)] = 'minimap'),
          (e[(e.mouseStyle = 63)] = 'mouseStyle'),
          (e[(e.mouseWheelScrollSensitivity = 64)] =
            'mouseWheelScrollSensitivity'),
          (e[(e.mouseWheelZoom = 65)] = 'mouseWheelZoom'),
          (e[(e.multiCursorMergeOverlapping = 66)] =
            'multiCursorMergeOverlapping'),
          (e[(e.multiCursorModifier = 67)] = 'multiCursorModifier'),
          (e[(e.multiCursorPaste = 68)] = 'multiCursorPaste'),
          (e[(e.occurrencesHighlight = 69)] = 'occurrencesHighlight'),
          (e[(e.overviewRulerBorder = 70)] = 'overviewRulerBorder'),
          (e[(e.overviewRulerLanes = 71)] = 'overviewRulerLanes'),
          (e[(e.padding = 72)] = 'padding'),
          (e[(e.parameterHints = 73)] = 'parameterHints'),
          (e[(e.peekWidgetDefaultFocus = 74)] = 'peekWidgetDefaultFocus'),
          (e[(e.definitionLinkOpensInPeek = 75)] = 'definitionLinkOpensInPeek'),
          (e[(e.quickSuggestions = 76)] = 'quickSuggestions'),
          (e[(e.quickSuggestionsDelay = 77)] = 'quickSuggestionsDelay'),
          (e[(e.readOnly = 78)] = 'readOnly'),
          (e[(e.renameOnType = 79)] = 'renameOnType'),
          (e[(e.renderControlCharacters = 80)] = 'renderControlCharacters'),
          (e[(e.renderIndentGuides = 81)] = 'renderIndentGuides'),
          (e[(e.renderFinalNewline = 82)] = 'renderFinalNewline'),
          (e[(e.renderLineHighlight = 83)] = 'renderLineHighlight'),
          (e[(e.renderLineHighlightOnlyWhenFocus = 84)] =
            'renderLineHighlightOnlyWhenFocus'),
          (e[(e.renderValidationDecorations = 85)] =
            'renderValidationDecorations'),
          (e[(e.renderWhitespace = 86)] = 'renderWhitespace'),
          (e[(e.revealHorizontalRightPadding = 87)] =
            'revealHorizontalRightPadding'),
          (e[(e.roundedSelection = 88)] = 'roundedSelection'),
          (e[(e.rulers = 89)] = 'rulers'),
          (e[(e.scrollbar = 90)] = 'scrollbar'),
          (e[(e.scrollBeyondLastColumn = 91)] = 'scrollBeyondLastColumn'),
          (e[(e.scrollBeyondLastLine = 92)] = 'scrollBeyondLastLine'),
          (e[(e.scrollPredominantAxis = 93)] = 'scrollPredominantAxis'),
          (e[(e.selectionClipboard = 94)] = 'selectionClipboard'),
          (e[(e.selectionHighlight = 95)] = 'selectionHighlight'),
          (e[(e.selectOnLineNumbers = 96)] = 'selectOnLineNumbers'),
          (e[(e.showFoldingControls = 97)] = 'showFoldingControls'),
          (e[(e.showUnused = 98)] = 'showUnused'),
          (e[(e.snippetSuggestions = 99)] = 'snippetSuggestions'),
          (e[(e.smartSelect = 100)] = 'smartSelect'),
          (e[(e.smoothScrolling = 101)] = 'smoothScrolling'),
          (e[(e.stickyTabStops = 102)] = 'stickyTabStops'),
          (e[(e.stopRenderingLineAfter = 103)] = 'stopRenderingLineAfter'),
          (e[(e.suggest = 104)] = 'suggest'),
          (e[(e.suggestFontSize = 105)] = 'suggestFontSize'),
          (e[(e.suggestLineHeight = 106)] = 'suggestLineHeight'),
          (e[(e.suggestOnTriggerCharacters = 107)] =
            'suggestOnTriggerCharacters'),
          (e[(e.suggestSelection = 108)] = 'suggestSelection'),
          (e[(e.tabCompletion = 109)] = 'tabCompletion'),
          (e[(e.tabIndex = 110)] = 'tabIndex'),
          (e[(e.unusualLineTerminators = 111)] = 'unusualLineTerminators'),
          (e[(e.useShadowDOM = 112)] = 'useShadowDOM'),
          (e[(e.useTabStops = 113)] = 'useTabStops'),
          (e[(e.wordSeparators = 114)] = 'wordSeparators'),
          (e[(e.wordWrap = 115)] = 'wordWrap'),
          (e[(e.wordWrapBreakAfterCharacters = 116)] =
            'wordWrapBreakAfterCharacters'),
          (e[(e.wordWrapBreakBeforeCharacters = 117)] =
            'wordWrapBreakBeforeCharacters'),
          (e[(e.wordWrapColumn = 118)] = 'wordWrapColumn'),
          (e[(e.wordWrapOverride1 = 119)] = 'wordWrapOverride1'),
          (e[(e.wordWrapOverride2 = 120)] = 'wordWrapOverride2'),
          (e[(e.wrappingIndent = 121)] = 'wrappingIndent'),
          (e[(e.wrappingStrategy = 122)] = 'wrappingStrategy'),
          (e[(e.showDeprecated = 123)] = 'showDeprecated'),
          (e[(e.inlayHints = 124)] = 'inlayHints'),
          (e[(e.editorClassName = 125)] = 'editorClassName'),
          (e[(e.pixelRatio = 126)] = 'pixelRatio'),
          (e[(e.tabFocusMode = 127)] = 'tabFocusMode'),
          (e[(e.layoutInfo = 128)] = 'layoutInfo'),
          (e[(e.wrappingInfo = 129)] = 'wrappingInfo');
      })(lt || (lt = {})),
      (function(e) {
        (e[(e.TextDefined = 0)] = 'TextDefined'),
          (e[(e.LF = 1)] = 'LF'),
          (e[(e.CRLF = 2)] = 'CRLF');
      })(ht || (ht = {})),
      (function(e) {
        (e[(e.LF = 0)] = 'LF'), (e[(e.CRLF = 1)] = 'CRLF');
      })(ct || (ct = {})),
      (function(e) {
        (e[(e.None = 0)] = 'None'),
          (e[(e.Indent = 1)] = 'Indent'),
          (e[(e.IndentOutdent = 2)] = 'IndentOutdent'),
          (e[(e.Outdent = 3)] = 'Outdent');
      })(dt || (dt = {})),
      (function(e) {
        (e[(e.Other = 0)] = 'Other'),
          (e[(e.Type = 1)] = 'Type'),
          (e[(e.Parameter = 2)] = 'Parameter');
      })(ut || (ut = {})),
      (function(e) {
        (e[(e.Automatic = 0)] = 'Automatic'),
          (e[(e.Explicit = 1)] = 'Explicit');
      })(pt || (pt = {})),
      (function(e) {
        (e[(e.DependsOnKbLayout = -1)] = 'DependsOnKbLayout'),
          (e[(e.Unknown = 0)] = 'Unknown'),
          (e[(e.Backspace = 1)] = 'Backspace'),
          (e[(e.Tab = 2)] = 'Tab'),
          (e[(e.Enter = 3)] = 'Enter'),
          (e[(e.Shift = 4)] = 'Shift'),
          (e[(e.Ctrl = 5)] = 'Ctrl'),
          (e[(e.Alt = 6)] = 'Alt'),
          (e[(e.PauseBreak = 7)] = 'PauseBreak'),
          (e[(e.CapsLock = 8)] = 'CapsLock'),
          (e[(e.Escape = 9)] = 'Escape'),
          (e[(e.Space = 10)] = 'Space'),
          (e[(e.PageUp = 11)] = 'PageUp'),
          (e[(e.PageDown = 12)] = 'PageDown'),
          (e[(e.End = 13)] = 'End'),
          (e[(e.Home = 14)] = 'Home'),
          (e[(e.LeftArrow = 15)] = 'LeftArrow'),
          (e[(e.UpArrow = 16)] = 'UpArrow'),
          (e[(e.RightArrow = 17)] = 'RightArrow'),
          (e[(e.DownArrow = 18)] = 'DownArrow'),
          (e[(e.Insert = 19)] = 'Insert'),
          (e[(e.Delete = 20)] = 'Delete'),
          (e[(e.KEY_0 = 21)] = 'KEY_0'),
          (e[(e.KEY_1 = 22)] = 'KEY_1'),
          (e[(e.KEY_2 = 23)] = 'KEY_2'),
          (e[(e.KEY_3 = 24)] = 'KEY_3'),
          (e[(e.KEY_4 = 25)] = 'KEY_4'),
          (e[(e.KEY_5 = 26)] = 'KEY_5'),
          (e[(e.KEY_6 = 27)] = 'KEY_6'),
          (e[(e.KEY_7 = 28)] = 'KEY_7'),
          (e[(e.KEY_8 = 29)] = 'KEY_8'),
          (e[(e.KEY_9 = 30)] = 'KEY_9'),
          (e[(e.KEY_A = 31)] = 'KEY_A'),
          (e[(e.KEY_B = 32)] = 'KEY_B'),
          (e[(e.KEY_C = 33)] = 'KEY_C'),
          (e[(e.KEY_D = 34)] = 'KEY_D'),
          (e[(e.KEY_E = 35)] = 'KEY_E'),
          (e[(e.KEY_F = 36)] = 'KEY_F'),
          (e[(e.KEY_G = 37)] = 'KEY_G'),
          (e[(e.KEY_H = 38)] = 'KEY_H'),
          (e[(e.KEY_I = 39)] = 'KEY_I'),
          (e[(e.KEY_J = 40)] = 'KEY_J'),
          (e[(e.KEY_K = 41)] = 'KEY_K'),
          (e[(e.KEY_L = 42)] = 'KEY_L'),
          (e[(e.KEY_M = 43)] = 'KEY_M'),
          (e[(e.KEY_N = 44)] = 'KEY_N'),
          (e[(e.KEY_O = 45)] = 'KEY_O'),
          (e[(e.KEY_P = 46)] = 'KEY_P'),
          (e[(e.KEY_Q = 47)] = 'KEY_Q'),
          (e[(e.KEY_R = 48)] = 'KEY_R'),
          (e[(e.KEY_S = 49)] = 'KEY_S'),
          (e[(e.KEY_T = 50)] = 'KEY_T'),
          (e[(e.KEY_U = 51)] = 'KEY_U'),
          (e[(e.KEY_V = 52)] = 'KEY_V'),
          (e[(e.KEY_W = 53)] = 'KEY_W'),
          (e[(e.KEY_X = 54)] = 'KEY_X'),
          (e[(e.KEY_Y = 55)] = 'KEY_Y'),
          (e[(e.KEY_Z = 56)] = 'KEY_Z'),
          (e[(e.Meta = 57)] = 'Meta'),
          (e[(e.ContextMenu = 58)] = 'ContextMenu'),
          (e[(e.F1 = 59)] = 'F1'),
          (e[(e.F2 = 60)] = 'F2'),
          (e[(e.F3 = 61)] = 'F3'),
          (e[(e.F4 = 62)] = 'F4'),
          (e[(e.F5 = 63)] = 'F5'),
          (e[(e.F6 = 64)] = 'F6'),
          (e[(e.F7 = 65)] = 'F7'),
          (e[(e.F8 = 66)] = 'F8'),
          (e[(e.F9 = 67)] = 'F9'),
          (e[(e.F10 = 68)] = 'F10'),
          (e[(e.F11 = 69)] = 'F11'),
          (e[(e.F12 = 70)] = 'F12'),
          (e[(e.F13 = 71)] = 'F13'),
          (e[(e.F14 = 72)] = 'F14'),
          (e[(e.F15 = 73)] = 'F15'),
          (e[(e.F16 = 74)] = 'F16'),
          (e[(e.F17 = 75)] = 'F17'),
          (e[(e.F18 = 76)] = 'F18'),
          (e[(e.F19 = 77)] = 'F19'),
          (e[(e.NumLock = 78)] = 'NumLock'),
          (e[(e.ScrollLock = 79)] = 'ScrollLock'),
          (e[(e.US_SEMICOLON = 80)] = 'US_SEMICOLON'),
          (e[(e.US_EQUAL = 81)] = 'US_EQUAL'),
          (e[(e.US_COMMA = 82)] = 'US_COMMA'),
          (e[(e.US_MINUS = 83)] = 'US_MINUS'),
          (e[(e.US_DOT = 84)] = 'US_DOT'),
          (e[(e.US_SLASH = 85)] = 'US_SLASH'),
          (e[(e.US_BACKTICK = 86)] = 'US_BACKTICK'),
          (e[(e.US_OPEN_SQUARE_BRACKET = 87)] = 'US_OPEN_SQUARE_BRACKET'),
          (e[(e.US_BACKSLASH = 88)] = 'US_BACKSLASH'),
          (e[(e.US_CLOSE_SQUARE_BRACKET = 89)] = 'US_CLOSE_SQUARE_BRACKET'),
          (e[(e.US_QUOTE = 90)] = 'US_QUOTE'),
          (e[(e.OEM_8 = 91)] = 'OEM_8'),
          (e[(e.OEM_102 = 92)] = 'OEM_102'),
          (e[(e.NUMPAD_0 = 93)] = 'NUMPAD_0'),
          (e[(e.NUMPAD_1 = 94)] = 'NUMPAD_1'),
          (e[(e.NUMPAD_2 = 95)] = 'NUMPAD_2'),
          (e[(e.NUMPAD_3 = 96)] = 'NUMPAD_3'),
          (e[(e.NUMPAD_4 = 97)] = 'NUMPAD_4'),
          (e[(e.NUMPAD_5 = 98)] = 'NUMPAD_5'),
          (e[(e.NUMPAD_6 = 99)] = 'NUMPAD_6'),
          (e[(e.NUMPAD_7 = 100)] = 'NUMPAD_7'),
          (e[(e.NUMPAD_8 = 101)] = 'NUMPAD_8'),
          (e[(e.NUMPAD_9 = 102)] = 'NUMPAD_9'),
          (e[(e.NUMPAD_MULTIPLY = 103)] = 'NUMPAD_MULTIPLY'),
          (e[(e.NUMPAD_ADD = 104)] = 'NUMPAD_ADD'),
          (e[(e.NUMPAD_SEPARATOR = 105)] = 'NUMPAD_SEPARATOR'),
          (e[(e.NUMPAD_SUBTRACT = 106)] = 'NUMPAD_SUBTRACT'),
          (e[(e.NUMPAD_DECIMAL = 107)] = 'NUMPAD_DECIMAL'),
          (e[(e.NUMPAD_DIVIDE = 108)] = 'NUMPAD_DIVIDE'),
          (e[(e.KEY_IN_COMPOSITION = 109)] = 'KEY_IN_COMPOSITION'),
          (e[(e.ABNT_C1 = 110)] = 'ABNT_C1'),
          (e[(e.ABNT_C2 = 111)] = 'ABNT_C2'),
          (e[(e.MAX_VALUE = 112)] = 'MAX_VALUE');
      })(mt || (mt = {})),
      (function(e) {
        (e[(e.Hint = 1)] = 'Hint'),
          (e[(e.Info = 2)] = 'Info'),
          (e[(e.Warning = 4)] = 'Warning'),
          (e[(e.Error = 8)] = 'Error');
      })(ft || (ft = {})),
      (function(e) {
        (e[(e.Unnecessary = 1)] = 'Unnecessary'),
          (e[(e.Deprecated = 2)] = 'Deprecated');
      })(gt || (gt = {})),
      (function(e) {
        (e[(e.Inline = 1)] = 'Inline'), (e[(e.Gutter = 2)] = 'Gutter');
      })(bt || (bt = {})),
      (function(e) {
        (e[(e.UNKNOWN = 0)] = 'UNKNOWN'),
          (e[(e.TEXTAREA = 1)] = 'TEXTAREA'),
          (e[(e.GUTTER_GLYPH_MARGIN = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (e[(e.GUTTER_LINE_NUMBERS = 3)] = 'GUTTER_LINE_NUMBERS'),
          (e[(e.GUTTER_LINE_DECORATIONS = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (e[(e.GUTTER_VIEW_ZONE = 5)] = 'GUTTER_VIEW_ZONE'),
          (e[(e.CONTENT_TEXT = 6)] = 'CONTENT_TEXT'),
          (e[(e.CONTENT_EMPTY = 7)] = 'CONTENT_EMPTY'),
          (e[(e.CONTENT_VIEW_ZONE = 8)] = 'CONTENT_VIEW_ZONE'),
          (e[(e.CONTENT_WIDGET = 9)] = 'CONTENT_WIDGET'),
          (e[(e.OVERVIEW_RULER = 10)] = 'OVERVIEW_RULER'),
          (e[(e.SCROLLBAR = 11)] = 'SCROLLBAR'),
          (e[(e.OVERLAY_WIDGET = 12)] = 'OVERLAY_WIDGET'),
          (e[(e.OUTSIDE_EDITOR = 13)] = 'OUTSIDE_EDITOR');
      })(_t || (_t = {})),
      (function(e) {
        (e[(e.TOP_RIGHT_CORNER = 0)] = 'TOP_RIGHT_CORNER'),
          (e[(e.BOTTOM_RIGHT_CORNER = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (e[(e.TOP_CENTER = 2)] = 'TOP_CENTER');
      })(vt || (vt = {})),
      (function(e) {
        (e[(e.Left = 1)] = 'Left'),
          (e[(e.Center = 2)] = 'Center'),
          (e[(e.Right = 4)] = 'Right'),
          (e[(e.Full = 7)] = 'Full');
      })(wt || (wt = {})),
      (function(e) {
        (e[(e.Off = 0)] = 'Off'),
          (e[(e.On = 1)] = 'On'),
          (e[(e.Relative = 2)] = 'Relative'),
          (e[(e.Interval = 3)] = 'Interval'),
          (e[(e.Custom = 4)] = 'Custom');
      })(yt || (yt = {})),
      (function(e) {
        (e[(e.None = 0)] = 'None'),
          (e[(e.Text = 1)] = 'Text'),
          (e[(e.Blocks = 2)] = 'Blocks');
      })(Tt || (Tt = {})),
      (function(e) {
        (e[(e.Smooth = 0)] = 'Smooth'), (e[(e.Immediate = 1)] = 'Immediate');
      })(kt || (kt = {})),
      (function(e) {
        (e[(e.Auto = 1)] = 'Auto'),
          (e[(e.Hidden = 2)] = 'Hidden'),
          (e[(e.Visible = 3)] = 'Visible');
      })(St || (St = {})),
      (function(e) {
        (e[(e.LTR = 0)] = 'LTR'), (e[(e.RTL = 1)] = 'RTL');
      })(xt || (xt = {})),
      (function(e) {
        (e[(e.Invoke = 1)] = 'Invoke'),
          (e[(e.TriggerCharacter = 2)] = 'TriggerCharacter'),
          (e[(e.ContentChange = 3)] = 'ContentChange');
      })(Lt || (Lt = {})),
      (function(e) {
        (e[(e.File = 0)] = 'File'),
          (e[(e.Module = 1)] = 'Module'),
          (e[(e.Namespace = 2)] = 'Namespace'),
          (e[(e.Package = 3)] = 'Package'),
          (e[(e.Class = 4)] = 'Class'),
          (e[(e.Method = 5)] = 'Method'),
          (e[(e.Property = 6)] = 'Property'),
          (e[(e.Field = 7)] = 'Field'),
          (e[(e.Constructor = 8)] = 'Constructor'),
          (e[(e.Enum = 9)] = 'Enum'),
          (e[(e.Interface = 10)] = 'Interface'),
          (e[(e.Function = 11)] = 'Function'),
          (e[(e.Variable = 12)] = 'Variable'),
          (e[(e.Constant = 13)] = 'Constant'),
          (e[(e.String = 14)] = 'String'),
          (e[(e.Number = 15)] = 'Number'),
          (e[(e.Boolean = 16)] = 'Boolean'),
          (e[(e.Array = 17)] = 'Array'),
          (e[(e.Object = 18)] = 'Object'),
          (e[(e.Key = 19)] = 'Key'),
          (e[(e.Null = 20)] = 'Null'),
          (e[(e.EnumMember = 21)] = 'EnumMember'),
          (e[(e.Struct = 22)] = 'Struct'),
          (e[(e.Event = 23)] = 'Event'),
          (e[(e.Operator = 24)] = 'Operator'),
          (e[(e.TypeParameter = 25)] = 'TypeParameter');
      })(Ct || (Ct = {})),
      (function(e) {
        e[(e.Deprecated = 1)] = 'Deprecated';
      })(Et || (Et = {})),
      (function(e) {
        (e[(e.Hidden = 0)] = 'Hidden'),
          (e[(e.Blink = 1)] = 'Blink'),
          (e[(e.Smooth = 2)] = 'Smooth'),
          (e[(e.Phase = 3)] = 'Phase'),
          (e[(e.Expand = 4)] = 'Expand'),
          (e[(e.Solid = 5)] = 'Solid');
      })(At || (At = {})),
      (function(e) {
        (e[(e.Line = 1)] = 'Line'),
          (e[(e.Block = 2)] = 'Block'),
          (e[(e.Underline = 3)] = 'Underline'),
          (e[(e.LineThin = 4)] = 'LineThin'),
          (e[(e.BlockOutline = 5)] = 'BlockOutline'),
          (e[(e.UnderlineThin = 6)] = 'UnderlineThin');
      })(Mt || (Mt = {})),
      (function(e) {
        (e[(e.AlwaysGrowsWhenTypingAtEdges = 0)] =
          'AlwaysGrowsWhenTypingAtEdges'),
          (e[(e.NeverGrowsWhenTypingAtEdges = 1)] =
            'NeverGrowsWhenTypingAtEdges'),
          (e[(e.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
          (e[(e.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter');
      })(Rt || (Rt = {})),
      (function(e) {
        (e[(e.None = 0)] = 'None'),
          (e[(e.Same = 1)] = 'Same'),
          (e[(e.Indent = 2)] = 'Indent'),
          (e[(e.DeepIndent = 3)] = 'DeepIndent');
      })(It || (It = {}));
    class Ht {
      static chord(e, t) {
        return (function(e, t) {
          return (e | (((65535 & t) << 16) >>> 0)) >>> 0;
        })(e, t);
      }
    }
    (Ht.CtrlCmd = 2048), (Ht.Shift = 1024), (Ht.Alt = 512), (Ht.WinCtrl = 256);
    var zt = function(e, t, n, i) {
      return new (n || (n = Promise))(function(r, o) {
        function a(e) {
          try {
            l(i.next(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function(e) {
                    e(t);
                  })).then(a, s);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    class Wt extends class {
      constructor(e, t, n, i) {
        (this._uri = e),
          (this._lines = t),
          (this._eol = n),
          (this._versionId = i),
          (this._lineStarts = null),
          (this._cachedTextValue = null);
      }
      dispose() {
        this._lines.length = 0;
      }
      get version() {
        return this._versionId;
      }
      getText() {
        return (
          null === this._cachedTextValue &&
            (this._cachedTextValue = this._lines.join(this._eol)),
          this._cachedTextValue
        );
      }
      onEvents(e) {
        e.eol &&
          e.eol !== this._eol &&
          ((this._eol = e.eol), (this._lineStarts = null));
        const t = e.changes;
        for (const e of t)
          this._acceptDeleteRange(e.range),
            this._acceptInsertText(
              new ce(e.range.startLineNumber, e.range.startColumn),
              e.text,
            );
        (this._versionId = e.versionId), (this._cachedTextValue = null);
      }
      _ensureLineStarts() {
        if (!this._lineStarts) {
          const e = this._eol.length,
            t = this._lines.length,
            n = new Uint32Array(t);
          for (let i = 0; i < t; i++) n[i] = this._lines[i].length + e;
          this._lineStarts = new Se(n);
        }
      }
      _setLineText(e, t) {
        (this._lines[e] = t),
          this._lineStarts &&
            this._lineStarts.changeValue(
              e,
              this._lines[e].length + this._eol.length,
            );
      }
      _acceptDeleteRange(e) {
        if (e.startLineNumber !== e.endLineNumber)
          this._setLineText(
            e.startLineNumber - 1,
            this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) +
              this._lines[e.endLineNumber - 1].substring(e.endColumn - 1),
          ),
            this._lines.splice(
              e.startLineNumber,
              e.endLineNumber - e.startLineNumber,
            ),
            this._lineStarts &&
              this._lineStarts.removeValues(
                e.startLineNumber,
                e.endLineNumber - e.startLineNumber,
              );
        else {
          if (e.startColumn === e.endColumn) return;
          this._setLineText(
            e.startLineNumber - 1,
            this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) +
              this._lines[e.startLineNumber - 1].substring(e.endColumn - 1),
          );
        }
      }
      _acceptInsertText(e, t) {
        if (0 === t.length) return;
        let n = t.split(/\r\n|\r|\n/);
        if (1 === n.length)
          return void this._setLineText(
            e.lineNumber - 1,
            this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
              n[0] +
              this._lines[e.lineNumber - 1].substring(e.column - 1),
          );
        (n[n.length - 1] += this._lines[e.lineNumber - 1].substring(
          e.column - 1,
        )),
          this._setLineText(
            e.lineNumber - 1,
            this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0],
          );
        let i = new Uint32Array(n.length - 1);
        for (let t = 1; t < n.length; t++)
          this._lines.splice(e.lineNumber + t - 1, 0, n[t]),
            (i[t - 1] = n[t].length + this._eol.length);
        this._lineStarts && this._lineStarts.insertValues(e.lineNumber, i);
      }
    } {
      get uri() {
        return this._uri;
      }
      get eol() {
        return this._eol;
      }
      getValue() {
        return this.getText();
      }
      getLinesContent() {
        return this._lines.slice(0);
      }
      getLineCount() {
        return this._lines.length;
      }
      getLineContent(e) {
        return this._lines[e - 1];
      }
      getWordAtPosition(e, t) {
        let n = (function e(t, n, i, r, o = Le) {
          if (i.length > o.maxLen) {
            let a = t - o.maxLen / 2;
            return (
              a < 0 ? (a = 0) : (r += a),
              e(t, n, (i = i.substring(a, t + o.maxLen / 2)), r, o)
            );
          }
          const a = Date.now(),
            s = t - 1 - r;
          let l = -1,
            h = null;
          for (let e = 1; !(Date.now() - a >= o.timeBudget); e++) {
            const t = s - o.windowSize * e;
            n.lastIndex = Math.max(0, t);
            const r = Ce(n, i, s, l);
            if (!r && h) break;
            if (((h = r), t <= 0)) break;
            l = t;
          }
          if (h) {
            let e = {
              word: h[0],
              startColumn: r + 1 + h.index,
              endColumn: r + 1 + h.index + h[0].length,
            };
            return (n.lastIndex = 0), e;
          }
          return null;
        })(
          e.column,
          (function(e) {
            let t = xe;
            if (e && e instanceof RegExp)
              if (e.global) t = e;
              else {
                let n = 'g';
                e.ignoreCase && (n += 'i'),
                  e.multiline && (n += 'm'),
                  e.unicode && (n += 'u'),
                  (t = new RegExp(e.source, n));
              }
            return (t.lastIndex = 0), t;
          })(t),
          this._lines[e.lineNumber - 1],
          0,
        );
        return n
          ? new de(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn)
          : null;
      }
      words(e) {
        const t = this._lines,
          n = this._wordenize.bind(this);
        let i = 0,
          r = '',
          o = 0,
          a = [];
        return {
          *[Symbol.iterator]() {
            for (;;)
              if (o < a.length) {
                const e = r.substring(a[o].start, a[o].end);
                (o += 1), yield e;
              } else {
                if (!(i < t.length)) break;
                (r = t[i]), (a = n(r, e)), (o = 0), (i += 1);
              }
          },
        };
      }
      getLineWords(e, t) {
        let n = this._lines[e - 1],
          i = this._wordenize(n, t),
          r = [];
        for (const e of i)
          r.push({
            word: n.substring(e.start, e.end),
            startColumn: e.start + 1,
            endColumn: e.end + 1,
          });
        return r;
      }
      _wordenize(e, t) {
        const n = [];
        let i;
        for (t.lastIndex = 0; (i = t.exec(e)) && 0 !== i[0].length; )
          n.push({ start: i.index, end: i.index + i[0].length });
        return n;
      }
      getValueInRange(e) {
        if ((e = this._validateRange(e)).startLineNumber === e.endLineNumber)
          return this._lines[e.startLineNumber - 1].substring(
            e.startColumn - 1,
            e.endColumn - 1,
          );
        let t = this._eol,
          n = e.startLineNumber - 1,
          i = e.endLineNumber - 1,
          r = [];
        r.push(this._lines[n].substring(e.startColumn - 1));
        for (let e = n + 1; e < i; e++) r.push(this._lines[e]);
        return r.push(this._lines[i].substring(0, e.endColumn - 1)), r.join(t);
      }
      offsetAt(e) {
        return (
          (e = this._validatePosition(e)),
          this._ensureLineStarts(),
          this._lineStarts.getAccumulatedValue(e.lineNumber - 2) +
            (e.column - 1)
        );
      }
      positionAt(e) {
        (e = Math.floor(e)), (e = Math.max(0, e)), this._ensureLineStarts();
        let t = this._lineStarts.getIndexOf(e),
          n = this._lines[t.index].length;
        return {
          lineNumber: 1 + t.index,
          column: 1 + Math.min(t.remainder, n),
        };
      }
      _validateRange(e) {
        const t = this._validatePosition({
            lineNumber: e.startLineNumber,
            column: e.startColumn,
          }),
          n = this._validatePosition({
            lineNumber: e.endLineNumber,
            column: e.endColumn,
          });
        return t.lineNumber !== e.startLineNumber ||
          t.column !== e.startColumn ||
          n.lineNumber !== e.endLineNumber ||
          n.column !== e.endColumn
          ? {
              startLineNumber: t.lineNumber,
              startColumn: t.column,
              endLineNumber: n.lineNumber,
              endColumn: n.column,
            }
          : e;
      }
      _validatePosition(e) {
        if (!ce.isIPosition(e)) throw new Error('bad position');
        let { lineNumber: t, column: n } = e,
          i = !1;
        if (t < 1) (t = 1), (n = 1), (i = !0);
        else if (t > this._lines.length)
          (t = this._lines.length),
            (n = this._lines[t - 1].length + 1),
            (i = !0);
        else {
          let e = this._lines[t - 1].length + 1;
          n < 1 ? ((n = 1), (i = !0)) : n > e && ((n = e), (i = !0));
        }
        return i ? { lineNumber: t, column: n } : e;
      }
    }
    class Ot {
      constructor(e, t) {
        (this._host = e),
          (this._models = Object.create(null)),
          (this._foreignModuleFactory = t),
          (this._foreignModule = null);
      }
      dispose() {
        this._models = Object.create(null);
      }
      _getModel(e) {
        return this._models[e];
      }
      _getModels() {
        let e = [];
        return (
          Object.keys(this._models).forEach(t => e.push(this._models[t])), e
        );
      }
      acceptNewModel(e) {
        this._models[e.url] = new Wt(
          ee.parse(e.url),
          e.lines,
          e.EOL,
          e.versionId,
        );
      }
      acceptModelChanged(e, t) {
        if (!this._models[e]) return;
        this._models[e].onEvents(t);
      }
      acceptRemovedModel(e) {
        this._models[e] && delete this._models[e];
      }
      computeDiff(e, t, n, i) {
        return zt(this, void 0, void 0, function*() {
          const r = this._getModel(e),
            o = this._getModel(t);
          if (!r || !o) return null;
          const a = r.getLinesContent(),
            s = o.getLinesContent(),
            l = new be(a, s, {
              shouldComputeCharChanges: !0,
              shouldPostProcessCharChanges: !0,
              shouldIgnoreTrimWhitespace: n,
              shouldMakePrettyDiff: !0,
              maxComputationTime: i,
            }).computeDiff(),
            h = !(l.changes.length > 0) && this._modelsAreIdentical(r, o);
          return { quitEarly: l.quitEarly, identical: h, changes: l.changes };
        });
      }
      _modelsAreIdentical(e, t) {
        const n = e.getLineCount();
        if (n !== t.getLineCount()) return !1;
        for (let i = 1; i <= n; i++) {
          if (e.getLineContent(i) !== t.getLineContent(i)) return !1;
        }
        return !0;
      }
      computeMoreMinimalEdits(e, t) {
        return zt(this, void 0, void 0, function*() {
          const n = this._getModel(e);
          if (!n) return t;
          const i = [];
          let r = void 0;
          t = t.slice(0).sort((e, t) => {
            if (e.range && t.range)
              return de.compareRangesUsingStarts(e.range, t.range);
            return (e.range ? 0 : 1) - (t.range ? 0 : 1);
          });
          for (let { range: e, text: o, eol: a } of t) {
            if (('number' == typeof a && (r = a), de.isEmpty(e) && !o))
              continue;
            const t = n.getValueInRange(e);
            if (((o = o.replace(/\r\n|\n|\r/g, n.eol)), t === o)) continue;
            if (Math.max(o.length, t.length) > Ot._diffLimit) {
              i.push({ range: e, text: o });
              continue;
            }
            const s = U(t, o, !1),
              l = n.offsetAt(de.lift(e).getStartPosition());
            for (const e of s) {
              const t = n.positionAt(l + e.originalStart),
                r = n.positionAt(l + e.originalStart + e.originalLength),
                a = {
                  text: o.substr(e.modifiedStart, e.modifiedLength),
                  range: {
                    startLineNumber: t.lineNumber,
                    startColumn: t.column,
                    endLineNumber: r.lineNumber,
                    endColumn: r.column,
                  },
                };
              n.getValueInRange(a.range) !== a.text && i.push(a);
            }
          }
          return (
            'number' == typeof r &&
              i.push({
                eol: r,
                text: '',
                range: {
                  startLineNumber: 0,
                  startColumn: 0,
                  endLineNumber: 0,
                  endColumn: 0,
                },
              }),
            i
          );
        });
      }
      computeLinks(e) {
        return zt(this, void 0, void 0, function*() {
          let t = this._getModel(e);
          return t
            ? (function(e) {
                return e &&
                  'function' == typeof e.getLineCount &&
                  'function' == typeof e.getLineContent
                  ? Ue.computeLinks(e)
                  : [];
              })(t)
            : null;
        });
      }
      textualSuggest(e, t, n, i) {
        return zt(this, void 0, void 0, function*() {
          const r = new Oe(!0),
            o = new RegExp(n, i),
            a = new Set();
          e: for (let n of e) {
            const e = this._getModel(n);
            if (e)
              for (let n of e.words(o))
                if (
                  n !== t &&
                  isNaN(Number(n)) &&
                  (a.add(n), a.size > Ot._suggestionsLimit)
                )
                  break e;
          }
          return { words: Array.from(a), duration: r.elapsed() };
        });
      }
      computeWordRanges(e, t, n, i) {
        return zt(this, void 0, void 0, function*() {
          let r = this._getModel(e);
          if (!r) return Object.create(null);
          const o = new RegExp(n, i),
            a = Object.create(null);
          for (let e = t.startLineNumber; e < t.endLineNumber; e++) {
            let t = r.getLineWords(e, o);
            for (const n of t) {
              if (!isNaN(Number(n.word))) continue;
              let t = a[n.word];
              t || ((t = []), (a[n.word] = t)),
                t.push({
                  startLineNumber: e,
                  startColumn: n.startColumn,
                  endLineNumber: e,
                  endColumn: n.endColumn,
                });
            }
          }
          return a;
        });
      }
      navigateValueSet(e, t, n, i, r) {
        return zt(this, void 0, void 0, function*() {
          let o = this._getModel(e);
          if (!o) return null;
          let a = new RegExp(i, r);
          t.startColumn === t.endColumn &&
            (t = {
              startLineNumber: t.startLineNumber,
              startColumn: t.startColumn,
              endLineNumber: t.endLineNumber,
              endColumn: t.endColumn + 1,
            });
          let s = o.getValueInRange(t),
            l = o.getWordAtPosition(
              { lineNumber: t.startLineNumber, column: t.startColumn },
              a,
            );
          if (!l) return null;
          let h = o.getValueInRange(l);
          return Ne.INSTANCE.navigateValueSet(t, s, l, h, n);
        });
      }
      loadForeignModule(e, t, n) {
        let i = {
          host: _(n, (e, t) => this._host.fhr(e, t)),
          getMirrorModels: () => this._getModels(),
        };
        return this._foreignModuleFactory
          ? ((this._foreignModule = this._foreignModuleFactory(i, t)),
            Promise.resolve(b(this._foreignModule)))
          : Promise.reject(new Error('Unexpected usage'));
      }
      fmr(e, t) {
        if (!this._foreignModule || 'function' != typeof this._foreignModule[e])
          return Promise.reject(
            new Error('Missing requestHandler or method: ' + e),
          );
        try {
          return Promise.resolve(
            this._foreignModule[e].apply(this._foreignModule, t),
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }
    }
    (Ot._diffLimit = 1e5),
      (Ot._suggestionsLimit = 1e4),
      'function' == typeof importScripts &&
        (g.a.monaco = {
          editor: void 0,
          languages: void 0,
          CancellationTokenSource: Ve,
          Emitter: qe,
          KeyCode: mt,
          KeyMod: Ht,
          Position: ce,
          Range: de,
          Selection: Ut,
          SelectionDirection: xt,
          MarkerSeverity: ft,
          MarkerTag: gt,
          Uri: ee,
          Token: Nt,
        });
    let Dt = !1;
    function Pt(e) {
      if (Dt) return;
      Dt = !0;
      const t = new w(
        e => {
          self.postMessage(e);
        },
        t => new Ot(t, e),
      );
      self.onmessage = e => {
        t.onmessage(e.data);
      };
    }
    self.onmessage = e => {
      Dt || Pt(null);
    };
  },
  7: function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  80: function(e, t, n) {
    'use strict';
    n.r(t);
    var i,
      r,
      o,
      a,
      s,
      l,
      h,
      c,
      d,
      u,
      p,
      m,
      f,
      g,
      b,
      _,
      v,
      w,
      y,
      T,
      k,
      S,
      x,
      L,
      C,
      E,
      A = n(6);
    function M(e, t) {
      return 0 === t.length
        ? e
        : e.replace(/\{(\d+)\}/g, function(e, n) {
            var i = n[0];
            return void 0 !== t[i] ? t[i] : e;
          });
    }
    function R(e, t) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      return M(t, n);
    }
    function I(e) {
      return R;
    }
    !(function(e) {
      (e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647);
    })(i || (i = {})),
      (function(e) {
        (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647);
      })(r || (r = {})),
      (function(e) {
        (e.create = function(e, t) {
          return (
            e === Number.MAX_VALUE && (e = r.MAX_VALUE),
            t === Number.MAX_VALUE && (t = r.MAX_VALUE),
            { line: e, character: t }
          );
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.objectLiteral(t) &&
              ue.uinteger(t.line) &&
              ue.uinteger(t.character)
            );
          });
      })(o || (o = {})),
      (function(e) {
        (e.create = function(e, t, n, i) {
          if (
            ue.uinteger(e) &&
            ue.uinteger(t) &&
            ue.uinteger(n) &&
            ue.uinteger(i)
          )
            return { start: o.create(e, t), end: o.create(n, i) };
          if (o.is(e) && o.is(t)) return { start: e, end: t };
          throw new Error(
            'Range#create called with invalid arguments[' +
              e +
              ', ' +
              t +
              ', ' +
              n +
              ', ' +
              i +
              ']',
          );
        }),
          (e.is = function(e) {
            var t = e;
            return ue.objectLiteral(t) && o.is(t.start) && o.is(t.end);
          });
      })(a || (a = {})),
      (function(e) {
        (e.create = function(e, t) {
          return { uri: e, range: t };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) &&
              a.is(t.range) &&
              (ue.string(t.uri) || ue.undefined(t.uri))
            );
          });
      })(s || (s = {})),
      (function(e) {
        (e.create = function(e, t, n, i) {
          return {
            targetUri: e,
            targetRange: t,
            targetSelectionRange: n,
            originSelectionRange: i,
          };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) &&
              a.is(t.targetRange) &&
              ue.string(t.targetUri) &&
              (a.is(t.targetSelectionRange) ||
                ue.undefined(t.targetSelectionRange)) &&
              (a.is(t.originSelectionRange) ||
                ue.undefined(t.originSelectionRange))
            );
          });
      })(l || (l = {})),
      (function(e) {
        (e.create = function(e, t, n, i) {
          return { red: e, green: t, blue: n, alpha: i };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.numberRange(t.red, 0, 1) &&
              ue.numberRange(t.green, 0, 1) &&
              ue.numberRange(t.blue, 0, 1) &&
              ue.numberRange(t.alpha, 0, 1)
            );
          });
      })(h || (h = {})),
      (function(e) {
        (e.create = function(e, t) {
          return { range: e, color: t };
        }),
          (e.is = function(e) {
            var t = e;
            return a.is(t.range) && h.is(t.color);
          });
      })(c || (c = {})),
      (function(e) {
        (e.create = function(e, t, n) {
          return { label: e, textEdit: t, additionalTextEdits: n };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.string(t.label) &&
              (ue.undefined(t.textEdit) || w.is(t)) &&
              (ue.undefined(t.additionalTextEdits) ||
                ue.typedArray(t.additionalTextEdits, w.is))
            );
          });
      })(d || (d = {})),
      (function(e) {
        (e.Comment = 'comment'), (e.Imports = 'imports'), (e.Region = 'region');
      })(u || (u = {})),
      (function(e) {
        (e.create = function(e, t, n, i, r) {
          var o = { startLine: e, endLine: t };
          return (
            ue.defined(n) && (o.startCharacter = n),
            ue.defined(i) && (o.endCharacter = i),
            ue.defined(r) && (o.kind = r),
            o
          );
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.uinteger(t.startLine) &&
              ue.uinteger(t.startLine) &&
              (ue.undefined(t.startCharacter) ||
                ue.uinteger(t.startCharacter)) &&
              (ue.undefined(t.endCharacter) || ue.uinteger(t.endCharacter)) &&
              (ue.undefined(t.kind) || ue.string(t.kind))
            );
          });
      })(p || (p = {})),
      (function(e) {
        (e.create = function(e, t) {
          return { location: e, message: t };
        }),
          (e.is = function(e) {
            var t = e;
            return ue.defined(t) && s.is(t.location) && ue.string(t.message);
          });
      })(m || (m = {})),
      (function(e) {
        (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
      })(f || (f = {})),
      (function(e) {
        (e.Unnecessary = 1), (e.Deprecated = 2);
      })(g || (g = {})),
      (function(e) {
        e.is = function(e) {
          var t = e;
          return null != t && ue.string(t.href);
        };
      })(b || (b = {})),
      (function(e) {
        (e.create = function(e, t, n, i, r, o) {
          var a = { range: e, message: t };
          return (
            ue.defined(n) && (a.severity = n),
            ue.defined(i) && (a.code = i),
            ue.defined(r) && (a.source = r),
            ue.defined(o) && (a.relatedInformation = o),
            a
          );
        }),
          (e.is = function(e) {
            var t,
              n = e;
            return (
              ue.defined(n) &&
              a.is(n.range) &&
              ue.string(n.message) &&
              (ue.number(n.severity) || ue.undefined(n.severity)) &&
              (ue.integer(n.code) ||
                ue.string(n.code) ||
                ue.undefined(n.code)) &&
              (ue.undefined(n.codeDescription) ||
                ue.string(
                  null === (t = n.codeDescription) || void 0 === t
                    ? void 0
                    : t.href,
                )) &&
              (ue.string(n.source) || ue.undefined(n.source)) &&
              (ue.undefined(n.relatedInformation) ||
                ue.typedArray(n.relatedInformation, m.is))
            );
          });
      })(_ || (_ = {})),
      (function(e) {
        (e.create = function(e, t) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
          var r = { title: e, command: t };
          return ue.defined(n) && n.length > 0 && (r.arguments = n), r;
        }),
          (e.is = function(e) {
            var t = e;
            return ue.defined(t) && ue.string(t.title) && ue.string(t.command);
          });
      })(v || (v = {})),
      (function(e) {
        (e.replace = function(e, t) {
          return { range: e, newText: t };
        }),
          (e.insert = function(e, t) {
            return { range: { start: e, end: e }, newText: t };
          }),
          (e.del = function(e) {
            return { range: e, newText: '' };
          }),
          (e.is = function(e) {
            var t = e;
            return ue.objectLiteral(t) && ue.string(t.newText) && a.is(t.range);
          });
      })(w || (w = {})),
      (function(e) {
        (e.create = function(e, t, n) {
          var i = { label: e };
          return (
            void 0 !== t && (i.needsConfirmation = t),
            void 0 !== n && (i.description = n),
            i
          );
        }),
          (e.is = function(e) {
            var t = e;
            return (
              void 0 !== t &&
              ue.objectLiteral(t) &&
              ue.string(t.label) &&
              (ue.boolean(t.needsConfirmation) ||
                void 0 === t.needsConfirmation) &&
              (ue.string(t.description) || void 0 === t.description)
            );
          });
      })(y || (y = {})),
      (function(e) {
        e.is = function(e) {
          return 'string' == typeof e;
        };
      })(T || (T = {})),
      (function(e) {
        (e.replace = function(e, t, n) {
          return { range: e, newText: t, annotationId: n };
        }),
          (e.insert = function(e, t, n) {
            return { range: { start: e, end: e }, newText: t, annotationId: n };
          }),
          (e.del = function(e, t) {
            return { range: e, newText: '', annotationId: t };
          }),
          (e.is = function(e) {
            var t = e;
            return w.is(t) && (y.is(t.annotationId) || T.is(t.annotationId));
          });
      })(k || (k = {})),
      (function(e) {
        (e.create = function(e, t) {
          return { textDocument: e, edits: t };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) && H.is(t.textDocument) && Array.isArray(t.edits)
            );
          });
      })(S || (S = {})),
      (function(e) {
        (e.create = function(e, t, n) {
          var i = { kind: 'create', uri: e };
          return (
            void 0 === t ||
              (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
              (i.options = t),
            void 0 !== n && (i.annotationId = n),
            i
          );
        }),
          (e.is = function(e) {
            var t = e;
            return (
              t &&
              'create' === t.kind &&
              ue.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  ue.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    ue.boolean(t.options.ignoreIfExists)))) &&
              (void 0 === t.annotationId || T.is(t.annotationId))
            );
          });
      })(x || (x = {})),
      (function(e) {
        (e.create = function(e, t, n, i) {
          var r = { kind: 'rename', oldUri: e, newUri: t };
          return (
            void 0 === n ||
              (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
              (r.options = n),
            void 0 !== i && (r.annotationId = i),
            r
          );
        }),
          (e.is = function(e) {
            var t = e;
            return (
              t &&
              'rename' === t.kind &&
              ue.string(t.oldUri) &&
              ue.string(t.newUri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  ue.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    ue.boolean(t.options.ignoreIfExists)))) &&
              (void 0 === t.annotationId || T.is(t.annotationId))
            );
          });
      })(L || (L = {})),
      (function(e) {
        (e.create = function(e, t, n) {
          var i = { kind: 'delete', uri: e };
          return (
            void 0 === t ||
              (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
              (i.options = t),
            void 0 !== n && (i.annotationId = n),
            i
          );
        }),
          (e.is = function(e) {
            var t = e;
            return (
              t &&
              'delete' === t.kind &&
              ue.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.recursive ||
                  ue.boolean(t.options.recursive)) &&
                  (void 0 === t.options.ignoreIfNotExists ||
                    ue.boolean(t.options.ignoreIfNotExists)))) &&
              (void 0 === t.annotationId || T.is(t.annotationId))
            );
          });
      })(C || (C = {})),
      (function(e) {
        e.is = function(e) {
          var t = e;
          return (
            t &&
            (void 0 !== t.changes || void 0 !== t.documentChanges) &&
            (void 0 === t.documentChanges ||
              t.documentChanges.every(function(e) {
                return ue.string(e.kind)
                  ? x.is(e) || L.is(e) || C.is(e)
                  : S.is(e);
              }))
          );
        };
      })(E || (E = {}));
    var U,
      N,
      H,
      z,
      W,
      O,
      D,
      P,
      q,
      F,
      B,
      j,
      G,
      V,
      K,
      Y,
      $,
      X,
      J,
      Q,
      Z,
      ee,
      te,
      ne,
      ie,
      re,
      oe,
      ae,
      se,
      le,
      he = (function() {
        function e(e, t) {
          (this.edits = e), (this.changeAnnotations = t);
        }
        return (
          (e.prototype.insert = function(e, t, n) {
            var i, r;
            if (
              (void 0 === n
                ? (i = w.insert(e, t))
                : T.is(n)
                ? ((r = n), (i = k.insert(e, t, n)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (r = this.changeAnnotations.manage(n)),
                  (i = k.insert(e, t, r))),
              this.edits.push(i),
              void 0 !== r)
            )
              return r;
          }),
          (e.prototype.replace = function(e, t, n) {
            var i, r;
            if (
              (void 0 === n
                ? (i = w.replace(e, t))
                : T.is(n)
                ? ((r = n), (i = k.replace(e, t, n)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (r = this.changeAnnotations.manage(n)),
                  (i = k.replace(e, t, r))),
              this.edits.push(i),
              void 0 !== r)
            )
              return r;
          }),
          (e.prototype.delete = function(e, t) {
            var n, i;
            if (
              (void 0 === t
                ? (n = w.del(e))
                : T.is(t)
                ? ((i = t), (n = k.del(e, t)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (i = this.changeAnnotations.manage(t)),
                  (n = k.del(e, i))),
              this.edits.push(n),
              void 0 !== i)
            )
              return i;
          }),
          (e.prototype.add = function(e) {
            this.edits.push(e);
          }),
          (e.prototype.all = function() {
            return this.edits;
          }),
          (e.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          }),
          (e.prototype.assertChangeAnnotations = function(e) {
            if (void 0 === e)
              throw new Error(
                'Text edit change is not configured to manage change annotations.',
              );
          }),
          e
        );
      })(),
      ce = (function() {
        function e(e) {
          (this._annotations = void 0 === e ? Object.create(null) : e),
            (this._counter = 0),
            (this._size = 0);
        }
        return (
          (e.prototype.all = function() {
            return this._annotations;
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function() {
              return this._size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.manage = function(e, t) {
            var n;
            if (
              (T.is(e) ? (n = e) : ((n = this.nextId()), (t = e)),
              void 0 !== this._annotations[n])
            )
              throw new Error('Id ' + n + ' is already in use.');
            if (void 0 === t)
              throw new Error('No annotation provided for id ' + n);
            return (this._annotations[n] = t), this._size++, n;
          }),
          (e.prototype.nextId = function() {
            return this._counter++, this._counter.toString();
          }),
          e
        );
      })();
    !(function() {
      function e(e) {
        var t = this;
        (this._textEditChanges = Object.create(null)),
          void 0 !== e
            ? ((this._workspaceEdit = e),
              e.documentChanges
                ? ((this._changeAnnotations = new ce(e.changeAnnotations)),
                  (e.changeAnnotations = this._changeAnnotations.all()),
                  e.documentChanges.forEach(function(e) {
                    if (S.is(e)) {
                      var n = new he(e.edits, t._changeAnnotations);
                      t._textEditChanges[e.textDocument.uri] = n;
                    }
                  }))
                : e.changes &&
                  Object.keys(e.changes).forEach(function(n) {
                    var i = new he(e.changes[n]);
                    t._textEditChanges[n] = i;
                  }))
            : (this._workspaceEdit = {});
      }
      Object.defineProperty(e.prototype, 'edit', {
        get: function() {
          return (
            this.initDocumentChanges(),
            void 0 !== this._changeAnnotations &&
              (0 === this._changeAnnotations.size
                ? (this._workspaceEdit.changeAnnotations = void 0)
                : (this._workspaceEdit.changeAnnotations = this._changeAnnotations.all())),
            this._workspaceEdit
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
        (e.prototype.getTextEditChange = function(e) {
          if (H.is(e)) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.',
              );
            var t = { uri: e.uri, version: e.version };
            if (!(i = this._textEditChanges[t.uri])) {
              var n = { textDocument: t, edits: (r = []) };
              this._workspaceEdit.documentChanges.push(n),
                (i = new he(r, this._changeAnnotations)),
                (this._textEditChanges[t.uri] = i);
            }
            return i;
          }
          if ((this.initChanges(), void 0 === this._workspaceEdit.changes))
            throw new Error(
              'Workspace edit is not configured for normal text edit changes.',
            );
          var i;
          if (!(i = this._textEditChanges[e])) {
            var r = [];
            (this._workspaceEdit.changes[e] = r),
              (i = new he(r)),
              (this._textEditChanges[e] = i);
          }
          return i;
        }),
        (e.prototype.initDocumentChanges = function() {
          void 0 === this._workspaceEdit.documentChanges &&
            void 0 === this._workspaceEdit.changes &&
            ((this._changeAnnotations = new ce()),
            (this._workspaceEdit.documentChanges = []),
            (this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()));
        }),
        (e.prototype.initChanges = function() {
          void 0 === this._workspaceEdit.documentChanges &&
            void 0 === this._workspaceEdit.changes &&
            (this._workspaceEdit.changes = Object.create(null));
        }),
        (e.prototype.createFile = function(e, t, n) {
          if (
            (this.initDocumentChanges(),
            void 0 === this._workspaceEdit.documentChanges)
          )
            throw new Error(
              'Workspace edit is not configured for document changes.',
            );
          var i, r, o;
          if (
            (y.is(t) || T.is(t) ? (i = t) : (n = t),
            void 0 === i
              ? (r = x.create(e, n))
              : ((o = T.is(i) ? i : this._changeAnnotations.manage(i)),
                (r = x.create(e, n, o))),
            this._workspaceEdit.documentChanges.push(r),
            void 0 !== o)
          )
            return o;
        }),
        (e.prototype.renameFile = function(e, t, n, i) {
          if (
            (this.initDocumentChanges(),
            void 0 === this._workspaceEdit.documentChanges)
          )
            throw new Error(
              'Workspace edit is not configured for document changes.',
            );
          var r, o, a;
          if (
            (y.is(n) || T.is(n) ? (r = n) : (i = n),
            void 0 === r
              ? (o = L.create(e, t, i))
              : ((a = T.is(r) ? r : this._changeAnnotations.manage(r)),
                (o = L.create(e, t, i, a))),
            this._workspaceEdit.documentChanges.push(o),
            void 0 !== a)
          )
            return a;
        }),
        (e.prototype.deleteFile = function(e, t, n) {
          if (
            (this.initDocumentChanges(),
            void 0 === this._workspaceEdit.documentChanges)
          )
            throw new Error(
              'Workspace edit is not configured for document changes.',
            );
          var i, r, o;
          if (
            (y.is(t) || T.is(t) ? (i = t) : (n = t),
            void 0 === i
              ? (r = C.create(e, n))
              : ((o = T.is(i) ? i : this._changeAnnotations.manage(i)),
                (r = C.create(e, n, o))),
            this._workspaceEdit.documentChanges.push(r),
            void 0 !== o)
          )
            return o;
        });
    })();
    !(function(e) {
      (e.create = function(e) {
        return { uri: e };
      }),
        (e.is = function(e) {
          var t = e;
          return ue.defined(t) && ue.string(t.uri);
        });
    })(U || (U = {})),
      (function(e) {
        (e.create = function(e, t) {
          return { uri: e, version: t };
        }),
          (e.is = function(e) {
            var t = e;
            return ue.defined(t) && ue.string(t.uri) && ue.integer(t.version);
          });
      })(N || (N = {})),
      (function(e) {
        (e.create = function(e, t) {
          return { uri: e, version: t };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) &&
              ue.string(t.uri) &&
              (null === t.version || ue.integer(t.version))
            );
          });
      })(H || (H = {})),
      (function(e) {
        (e.create = function(e, t, n, i) {
          return { uri: e, languageId: t, version: n, text: i };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) &&
              ue.string(t.uri) &&
              ue.string(t.languageId) &&
              ue.integer(t.version) &&
              ue.string(t.text)
            );
          });
      })(z || (z = {})),
      (function(e) {
        (e.PlainText = 'plaintext'), (e.Markdown = 'markdown');
      })(W || (W = {})),
      (function(e) {
        e.is = function(t) {
          var n = t;
          return n === e.PlainText || n === e.Markdown;
        };
      })(W || (W = {})),
      (function(e) {
        e.is = function(e) {
          var t = e;
          return ue.objectLiteral(e) && W.is(t.kind) && ue.string(t.value);
        };
      })(O || (O = {})),
      (function(e) {
        (e.Text = 1),
          (e.Method = 2),
          (e.Function = 3),
          (e.Constructor = 4),
          (e.Field = 5),
          (e.Variable = 6),
          (e.Class = 7),
          (e.Interface = 8),
          (e.Module = 9),
          (e.Property = 10),
          (e.Unit = 11),
          (e.Value = 12),
          (e.Enum = 13),
          (e.Keyword = 14),
          (e.Snippet = 15),
          (e.Color = 16),
          (e.File = 17),
          (e.Reference = 18),
          (e.Folder = 19),
          (e.EnumMember = 20),
          (e.Constant = 21),
          (e.Struct = 22),
          (e.Event = 23),
          (e.Operator = 24),
          (e.TypeParameter = 25);
      })(D || (D = {})),
      (function(e) {
        (e.PlainText = 1), (e.Snippet = 2);
      })(P || (P = {})),
      (function(e) {
        e.Deprecated = 1;
      })(q || (q = {})),
      (function(e) {
        (e.create = function(e, t, n) {
          return { newText: e, insert: t, replace: n };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              t && ue.string(t.newText) && a.is(t.insert) && a.is(t.replace)
            );
          });
      })(F || (F = {})),
      (function(e) {
        (e.asIs = 1), (e.adjustIndentation = 2);
      })(B || (B = {})),
      (function(e) {
        e.create = function(e) {
          return { label: e };
        };
      })(j || (j = {})),
      (function(e) {
        e.create = function(e, t) {
          return { items: e || [], isIncomplete: !!t };
        };
      })(G || (G = {})),
      (function(e) {
        (e.fromPlainText = function(e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.string(t) ||
              (ue.objectLiteral(t) &&
                ue.string(t.language) &&
                ue.string(t.value))
            );
          });
      })(V || (V = {})),
      (function(e) {
        e.is = function(e) {
          var t = e;
          return (
            !!t &&
            ue.objectLiteral(t) &&
            (O.is(t.contents) ||
              V.is(t.contents) ||
              ue.typedArray(t.contents, V.is)) &&
            (void 0 === e.range || a.is(e.range))
          );
        };
      })(K || (K = {})),
      (function(e) {
        e.create = function(e, t) {
          return t ? { label: e, documentation: t } : { label: e };
        };
      })(Y || (Y = {})),
      (function(e) {
        e.create = function(e, t) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
          var r = { label: e };
          return (
            ue.defined(t) && (r.documentation = t),
            ue.defined(n) ? (r.parameters = n) : (r.parameters = []),
            r
          );
        };
      })($ || ($ = {})),
      (function(e) {
        (e.Text = 1), (e.Read = 2), (e.Write = 3);
      })(X || (X = {})),
      (function(e) {
        e.create = function(e, t) {
          var n = { range: e };
          return ue.number(t) && (n.kind = t), n;
        };
      })(J || (J = {})),
      (function(e) {
        (e.File = 1),
          (e.Module = 2),
          (e.Namespace = 3),
          (e.Package = 4),
          (e.Class = 5),
          (e.Method = 6),
          (e.Property = 7),
          (e.Field = 8),
          (e.Constructor = 9),
          (e.Enum = 10),
          (e.Interface = 11),
          (e.Function = 12),
          (e.Variable = 13),
          (e.Constant = 14),
          (e.String = 15),
          (e.Number = 16),
          (e.Boolean = 17),
          (e.Array = 18),
          (e.Object = 19),
          (e.Key = 20),
          (e.Null = 21),
          (e.EnumMember = 22),
          (e.Struct = 23),
          (e.Event = 24),
          (e.Operator = 25),
          (e.TypeParameter = 26);
      })(Q || (Q = {})),
      (function(e) {
        e.Deprecated = 1;
      })(Z || (Z = {})),
      (function(e) {
        e.create = function(e, t, n, i, r) {
          var o = { name: e, kind: t, location: { uri: i, range: n } };
          return r && (o.containerName = r), o;
        };
      })(ee || (ee = {})),
      (function(e) {
        (e.create = function(e, t, n, i, r, o) {
          var a = { name: e, detail: t, kind: n, range: i, selectionRange: r };
          return void 0 !== o && (a.children = o), a;
        }),
          (e.is = function(e) {
            var t = e;
            return (
              t &&
              ue.string(t.name) &&
              ue.number(t.kind) &&
              a.is(t.range) &&
              a.is(t.selectionRange) &&
              (void 0 === t.detail || ue.string(t.detail)) &&
              (void 0 === t.deprecated || ue.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children)) &&
              (void 0 === t.tags || Array.isArray(t.tags))
            );
          });
      })(te || (te = {})),
      (function(e) {
        (e.Empty = ''),
          (e.QuickFix = 'quickfix'),
          (e.Refactor = 'refactor'),
          (e.RefactorExtract = 'refactor.extract'),
          (e.RefactorInline = 'refactor.inline'),
          (e.RefactorRewrite = 'refactor.rewrite'),
          (e.Source = 'source'),
          (e.SourceOrganizeImports = 'source.organizeImports'),
          (e.SourceFixAll = 'source.fixAll');
      })(ne || (ne = {})),
      (function(e) {
        (e.create = function(e, t) {
          var n = { diagnostics: e };
          return null != t && (n.only = t), n;
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) &&
              ue.typedArray(t.diagnostics, _.is) &&
              (void 0 === t.only || ue.typedArray(t.only, ue.string))
            );
          });
      })(ie || (ie = {})),
      (function(e) {
        (e.create = function(e, t, n) {
          var i = { title: e },
            r = !0;
          return (
            'string' == typeof t
              ? ((r = !1), (i.kind = t))
              : v.is(t)
              ? (i.command = t)
              : (i.edit = t),
            r && void 0 !== n && (i.kind = n),
            i
          );
        }),
          (e.is = function(e) {
            var t = e;
            return (
              t &&
              ue.string(t.title) &&
              (void 0 === t.diagnostics ||
                ue.typedArray(t.diagnostics, _.is)) &&
              (void 0 === t.kind || ue.string(t.kind)) &&
              (void 0 !== t.edit || void 0 !== t.command) &&
              (void 0 === t.command || v.is(t.command)) &&
              (void 0 === t.isPreferred || ue.boolean(t.isPreferred)) &&
              (void 0 === t.edit || E.is(t.edit))
            );
          });
      })(re || (re = {})),
      (function(e) {
        (e.create = function(e, t) {
          var n = { range: e };
          return ue.defined(t) && (n.data = t), n;
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) &&
              a.is(t.range) &&
              (ue.undefined(t.command) || v.is(t.command))
            );
          });
      })(oe || (oe = {})),
      (function(e) {
        (e.create = function(e, t) {
          return { tabSize: e, insertSpaces: t };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) &&
              ue.uinteger(t.tabSize) &&
              ue.boolean(t.insertSpaces)
            );
          });
      })(ae || (ae = {})),
      (function(e) {
        (e.create = function(e, t, n) {
          return { range: e, target: t, data: n };
        }),
          (e.is = function(e) {
            var t = e;
            return (
              ue.defined(t) &&
              a.is(t.range) &&
              (ue.undefined(t.target) || ue.string(t.target))
            );
          });
      })(se || (se = {})),
      (function(e) {
        (e.create = function(e, t) {
          return { range: e, parent: t };
        }),
          (e.is = function(t) {
            var n = t;
            return (
              void 0 !== n &&
              a.is(n.range) &&
              (void 0 === n.parent || e.is(n.parent))
            );
          });
      })(le || (le = {}));
    var de;
    !(function(e) {
      (e.create = function(e, t, n, i) {
        return new pe(e, t, n, i);
      }),
        (e.is = function(e) {
          var t = e;
          return !!(
            ue.defined(t) &&
            ue.string(t.uri) &&
            (ue.undefined(t.languageId) || ue.string(t.languageId)) &&
            ue.uinteger(t.lineCount) &&
            ue.func(t.getText) &&
            ue.func(t.positionAt) &&
            ue.func(t.offsetAt)
          );
        }),
        (e.applyEdits = function(e, t) {
          for (
            var n = e.getText(),
              i = (function e(t, n) {
                if (t.length <= 1) return t;
                var i = (t.length / 2) | 0,
                  r = t.slice(0, i),
                  o = t.slice(i);
                e(r, n), e(o, n);
                var a = 0,
                  s = 0,
                  l = 0;
                for (; a < r.length && s < o.length; ) {
                  var h = n(r[a], o[s]);
                  t[l++] = h <= 0 ? r[a++] : o[s++];
                }
                for (; a < r.length; ) t[l++] = r[a++];
                for (; s < o.length; ) t[l++] = o[s++];
                return t;
              })(t, function(e, t) {
                var n = e.range.start.line - t.range.start.line;
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n;
              }),
              r = n.length,
              o = i.length - 1;
            o >= 0;
            o--
          ) {
            var a = i[o],
              s = e.offsetAt(a.range.start),
              l = e.offsetAt(a.range.end);
            if (!(l <= r)) throw new Error('Overlapping edit');
            (n = n.substring(0, s) + a.newText + n.substring(l, n.length)),
              (r = s);
          }
          return n;
        });
    })(de || (de = {}));
    var ue,
      pe = (function() {
        function e(e, t, n, i) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = i),
            (this._lineOffsets = void 0);
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function() {
              return this._uri;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function() {
              return this._languageId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function() {
              return this._version;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.getText = function(e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function(e, t) {
            (this._content = e.text),
              (this._version = t),
              (this._lineOffsets = void 0);
          }),
          (e.prototype.getLineOffsets = function() {
            if (void 0 === this._lineOffsets) {
              for (
                var e = [], t = this._content, n = !0, i = 0;
                i < t.length;
                i++
              ) {
                n && (e.push(i), (n = !1));
                var r = t.charAt(i);
                (n = '\r' === r || '\n' === r),
                  '\r' === r &&
                    i + 1 < t.length &&
                    '\n' === t.charAt(i + 1) &&
                    i++;
              }
              n && t.length > 0 && e.push(t.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              i = t.length;
            if (0 === i) return o.create(0, e);
            for (; n < i; ) {
              var r = Math.floor((n + i) / 2);
              t[r] > e ? (i = r) : (n = r + 1);
            }
            var a = n - 1;
            return o.create(a, e - t[a]);
          }),
          (e.prototype.offsetAt = function(e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, i), n);
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })();
    !(function(e) {
      var t = Object.prototype.toString;
      (e.defined = function(e) {
        return void 0 !== e;
      }),
        (e.undefined = function(e) {
          return void 0 === e;
        }),
        (e.boolean = function(e) {
          return !0 === e || !1 === e;
        }),
        (e.string = function(e) {
          return '[object String]' === t.call(e);
        }),
        (e.number = function(e) {
          return '[object Number]' === t.call(e);
        }),
        (e.numberRange = function(e, n, i) {
          return '[object Number]' === t.call(e) && n <= e && e <= i;
        }),
        (e.integer = function(e) {
          return (
            '[object Number]' === t.call(e) &&
            -2147483648 <= e &&
            e <= 2147483647
          );
        }),
        (e.uinteger = function(e) {
          return '[object Number]' === t.call(e) && 0 <= e && e <= 2147483647;
        }),
        (e.func = function(e) {
          return '[object Function]' === t.call(e);
        }),
        (e.objectLiteral = function(e) {
          return null !== e && 'object' == typeof e;
        }),
        (e.typedArray = function(e, t) {
          return Array.isArray(e) && e.every(t);
        });
    })(ue || (ue = {}));
    var me,
      fe,
      ge,
      be,
      _e,
      ve = (function() {
        function e(e, t, n, i) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = i),
            (this._lineOffsets = void 0);
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function() {
              return this._uri;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function() {
              return this._languageId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function() {
              return this._version;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getText = function(e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function(t, n) {
            for (var i = 0, r = t; i < r.length; i++) {
              var o = r[i];
              if (e.isIncremental(o)) {
                var a = ye(o.range),
                  s = this.offsetAt(a.start),
                  l = this.offsetAt(a.end);
                this._content =
                  this._content.substring(0, s) +
                  o.text +
                  this._content.substring(l, this._content.length);
                var h = Math.max(a.start.line, 0),
                  c = Math.max(a.end.line, 0),
                  d = this._lineOffsets,
                  u = we(o.text, !1, s);
                if (c - h === u.length)
                  for (var p = 0, m = u.length; p < m; p++) d[p + h + 1] = u[p];
                else
                  u.length < 1e4
                    ? d.splice.apply(d, [h + 1, c - h].concat(u))
                    : (this._lineOffsets = d = d
                        .slice(0, h + 1)
                        .concat(u, d.slice(c + 1)));
                var f = o.text.length - (l - s);
                if (0 !== f)
                  for (p = h + 1 + u.length, m = d.length; p < m; p++)
                    d[p] = d[p] + f;
              } else {
                if (!e.isFull(o))
                  throw new Error('Unknown change event received');
                (this._content = o.text), (this._lineOffsets = void 0);
              }
            }
            this._version = n;
          }),
          (e.prototype.getLineOffsets = function() {
            return (
              void 0 === this._lineOffsets &&
                (this._lineOffsets = we(this._content, !0)),
              this._lineOffsets
            );
          }),
          (e.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              i = t.length;
            if (0 === i) return { line: 0, character: e };
            for (; n < i; ) {
              var r = Math.floor((n + i) / 2);
              t[r] > e ? (i = r) : (n = r + 1);
            }
            var o = n - 1;
            return { line: o, character: e - t[o] };
          }),
          (e.prototype.offsetAt = function(e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, i), n);
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.isIncremental = function(e) {
            var t = e;
            return (
              null != t &&
              'string' == typeof t.text &&
              void 0 !== t.range &&
              (void 0 === t.rangeLength || 'number' == typeof t.rangeLength)
            );
          }),
          (e.isFull = function(e) {
            var t = e;
            return (
              null != t &&
              'string' == typeof t.text &&
              void 0 === t.range &&
              void 0 === t.rangeLength
            );
          }),
          e
        );
      })();
    function we(e, t, n) {
      void 0 === n && (n = 0);
      for (var i = t ? [n] : [], r = 0; r < e.length; r++) {
        var o = e.charCodeAt(r);
        (13 !== o && 10 !== o) ||
          (13 === o && r + 1 < e.length && 10 === e.charCodeAt(r + 1) && r++,
          i.push(n + r + 1));
      }
      return i;
    }
    function ye(e) {
      var t = e.start,
        n = e.end;
      return t.line > n.line || (t.line === n.line && t.character > n.character)
        ? { start: n, end: t }
        : e;
    }
    function Te(e) {
      var t = ye(e.range);
      return t !== e.range ? { newText: e.newText, range: t } : e;
    }
    !(function(e) {
      (e.create = function(e, t, n, i) {
        return new ve(e, t, n, i);
      }),
        (e.update = function(e, t, n) {
          if (e instanceof ve) return e.update(t, n), e;
          throw new Error(
            'TextDocument.update: document must be created by TextDocument.create',
          );
        }),
        (e.applyEdits = function(e, t) {
          for (
            var n = e.getText(),
              i = 0,
              r = [],
              o = 0,
              a = (function e(t, n) {
                if (t.length <= 1) return t;
                var i = (t.length / 2) | 0,
                  r = t.slice(0, i),
                  o = t.slice(i);
                e(r, n), e(o, n);
                var a = 0,
                  s = 0,
                  l = 0;
                for (; a < r.length && s < o.length; ) {
                  var h = n(r[a], o[s]);
                  t[l++] = h <= 0 ? r[a++] : o[s++];
                }
                for (; a < r.length; ) t[l++] = r[a++];
                for (; s < o.length; ) t[l++] = o[s++];
                return t;
              })(t.map(Te), function(e, t) {
                var n = e.range.start.line - t.range.start.line;
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n;
              });
            o < a.length;
            o++
          ) {
            var s = a[o],
              l = e.offsetAt(s.range.start);
            if (l < i) throw new Error('Overlapping edit');
            l > i && r.push(n.substring(i, l)),
              s.newText.length && r.push(s.newText),
              (i = e.offsetAt(s.range.end));
          }
          return r.push(n.substr(i)), r.join('');
        });
    })(me || (me = {})),
      (function(e) {
        (e[(e.StartCommentTag = 0)] = 'StartCommentTag'),
          (e[(e.Comment = 1)] = 'Comment'),
          (e[(e.EndCommentTag = 2)] = 'EndCommentTag'),
          (e[(e.StartTagOpen = 3)] = 'StartTagOpen'),
          (e[(e.StartTagClose = 4)] = 'StartTagClose'),
          (e[(e.StartTagSelfClose = 5)] = 'StartTagSelfClose'),
          (e[(e.StartTag = 6)] = 'StartTag'),
          (e[(e.EndTagOpen = 7)] = 'EndTagOpen'),
          (e[(e.EndTagClose = 8)] = 'EndTagClose'),
          (e[(e.EndTag = 9)] = 'EndTag'),
          (e[(e.DelimiterAssign = 10)] = 'DelimiterAssign'),
          (e[(e.AttributeName = 11)] = 'AttributeName'),
          (e[(e.AttributeValue = 12)] = 'AttributeValue'),
          (e[(e.StartDoctypeTag = 13)] = 'StartDoctypeTag'),
          (e[(e.Doctype = 14)] = 'Doctype'),
          (e[(e.EndDoctypeTag = 15)] = 'EndDoctypeTag'),
          (e[(e.Content = 16)] = 'Content'),
          (e[(e.Whitespace = 17)] = 'Whitespace'),
          (e[(e.Unknown = 18)] = 'Unknown'),
          (e[(e.Script = 19)] = 'Script'),
          (e[(e.Styles = 20)] = 'Styles'),
          (e[(e.EOS = 21)] = 'EOS');
      })(fe || (fe = {})),
      (function(e) {
        (e[(e.WithinContent = 0)] = 'WithinContent'),
          (e[(e.AfterOpeningStartTag = 1)] = 'AfterOpeningStartTag'),
          (e[(e.AfterOpeningEndTag = 2)] = 'AfterOpeningEndTag'),
          (e[(e.WithinDoctype = 3)] = 'WithinDoctype'),
          (e[(e.WithinTag = 4)] = 'WithinTag'),
          (e[(e.WithinEndTag = 5)] = 'WithinEndTag'),
          (e[(e.WithinComment = 6)] = 'WithinComment'),
          (e[(e.WithinScriptContent = 7)] = 'WithinScriptContent'),
          (e[(e.WithinStyleContent = 8)] = 'WithinStyleContent'),
          (e[(e.AfterAttributeName = 9)] = 'AfterAttributeName'),
          (e[(e.BeforeAttributeValue = 10)] = 'BeforeAttributeValue');
      })(ge || (ge = {})),
      ((be || (be = {})).LATEST = {
        textDocument: {
          completion: {
            completionItem: { documentationFormat: [W.Markdown, W.PlainText] },
          },
          hover: { contentFormat: [W.Markdown, W.PlainText] },
        },
      }),
      (function(e) {
        (e[(e.Unknown = 0)] = 'Unknown'),
          (e[(e.File = 1)] = 'File'),
          (e[(e.Directory = 2)] = 'Directory'),
          (e[(e.SymbolicLink = 64)] = 'SymbolicLink');
      })(_e || (_e = {}));
    var ke = I(),
      Se = (function() {
        function e(e, t) {
          (this.source = e), (this.len = e.length), (this.position = t);
        }
        return (
          (e.prototype.eos = function() {
            return this.len <= this.position;
          }),
          (e.prototype.getSource = function() {
            return this.source;
          }),
          (e.prototype.pos = function() {
            return this.position;
          }),
          (e.prototype.goBackTo = function(e) {
            this.position = e;
          }),
          (e.prototype.goBack = function(e) {
            this.position -= e;
          }),
          (e.prototype.advance = function(e) {
            this.position += e;
          }),
          (e.prototype.goToEnd = function() {
            this.position = this.source.length;
          }),
          (e.prototype.nextChar = function() {
            return this.source.charCodeAt(this.position++) || 0;
          }),
          (e.prototype.peekChar = function(e) {
            return (
              void 0 === e && (e = 0),
              this.source.charCodeAt(this.position + e) || 0
            );
          }),
          (e.prototype.advanceIfChar = function(e) {
            return (
              e === this.source.charCodeAt(this.position) &&
              (this.position++, !0)
            );
          }),
          (e.prototype.advanceIfChars = function(e) {
            var t;
            if (this.position + e.length > this.source.length) return !1;
            for (t = 0; t < e.length; t++)
              if (this.source.charCodeAt(this.position + t) !== e[t]) return !1;
            return this.advance(t), !0;
          }),
          (e.prototype.advanceIfRegExp = function(e) {
            var t = this.source.substr(this.position).match(e);
            return t
              ? ((this.position = this.position + t.index + t[0].length), t[0])
              : '';
          }),
          (e.prototype.advanceUntilRegExp = function(e) {
            var t = this.source.substr(this.position).match(e);
            return t
              ? ((this.position = this.position + t.index), t[0])
              : (this.goToEnd(), '');
          }),
          (e.prototype.advanceUntilChar = function(e) {
            for (; this.position < this.source.length; ) {
              if (this.source.charCodeAt(this.position) === e) return !0;
              this.advance(1);
            }
            return !1;
          }),
          (e.prototype.advanceUntilChars = function(e) {
            for (; this.position + e.length <= this.source.length; ) {
              for (
                var t = 0;
                t < e.length &&
                this.source.charCodeAt(this.position + t) === e[t];
                t++
              );
              if (t === e.length) return !0;
              this.advance(1);
            }
            return this.goToEnd(), !1;
          }),
          (e.prototype.skipWhitespace = function() {
            return (
              this.advanceWhileChar(function(e) {
                return e === ze || e === We || e === Ue || e === He || e === Ne;
              }) > 0
            );
          }),
          (e.prototype.advanceWhileChar = function(e) {
            for (
              var t = this.position;
              this.position < this.len &&
              e(this.source.charCodeAt(this.position));

            )
              this.position++;
            return this.position - t;
          }),
          e
        );
      })(),
      xe = '!'.charCodeAt(0),
      Le = '-'.charCodeAt(0),
      Ce = '<'.charCodeAt(0),
      Ee = '>'.charCodeAt(0),
      Ae = '/'.charCodeAt(0),
      Me = '='.charCodeAt(0),
      Re = '"'.charCodeAt(0),
      Ie = "'".charCodeAt(0),
      Ue = '\n'.charCodeAt(0),
      Ne = '\r'.charCodeAt(0),
      He = '\f'.charCodeAt(0),
      ze = ' '.charCodeAt(0),
      We = '\t'.charCodeAt(0),
      Oe = { 'text/x-handlebars-template': !0, 'text/html': !0 };
    function De(e, t, n, i) {
      void 0 === t && (t = 0),
        void 0 === n && (n = ge.WithinContent),
        void 0 === i && (i = !1);
      var r,
        o,
        a,
        s,
        l,
        h = new Se(e, t),
        c = n,
        d = 0,
        u = fe.Unknown;
      function p() {
        return h.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase();
      }
      function m(e, t, n) {
        return (u = t), (d = e), (r = n), t;
      }
      return {
        scan: function() {
          var e = h.pos(),
            t = c,
            n = (function e() {
              var t,
                n = h.pos();
              if (h.eos()) return m(n, fe.EOS);
              switch (c) {
                case ge.WithinComment:
                  return h.advanceIfChars([Le, Le, Ee])
                    ? ((c = ge.WithinContent), m(n, fe.EndCommentTag))
                    : (h.advanceUntilChars([Le, Le, Ee]), m(n, fe.Comment));
                case ge.WithinDoctype:
                  return h.advanceIfChar(Ee)
                    ? ((c = ge.WithinContent), m(n, fe.EndDoctypeTag))
                    : (h.advanceUntilChar(Ee), m(n, fe.Doctype));
                case ge.WithinContent:
                  if (h.advanceIfChar(Ce)) {
                    if (!h.eos() && h.peekChar() === xe) {
                      if (h.advanceIfChars([xe, Le, Le]))
                        return (c = ge.WithinComment), m(n, fe.StartCommentTag);
                      if (h.advanceIfRegExp(/^!doctype/i))
                        return (c = ge.WithinDoctype), m(n, fe.StartDoctypeTag);
                    }
                    return h.advanceIfChar(Ae)
                      ? ((c = ge.AfterOpeningEndTag), m(n, fe.EndTagOpen))
                      : ((c = ge.AfterOpeningStartTag), m(n, fe.StartTagOpen));
                  }
                  return h.advanceUntilChar(Ce), m(n, fe.Content);
                case ge.AfterOpeningEndTag:
                  return p().length > 0
                    ? ((c = ge.WithinEndTag), m(n, fe.EndTag))
                    : h.skipWhitespace()
                    ? m(
                        n,
                        fe.Whitespace,
                        ke(
                          'error.unexpectedWhitespace',
                          'Tag name must directly follow the open bracket.',
                        ),
                      )
                    : ((c = ge.WithinEndTag),
                      h.advanceUntilChar(Ee),
                      n < h.pos()
                        ? m(
                            n,
                            fe.Unknown,
                            ke(
                              'error.endTagNameExpected',
                              'End tag name expected.',
                            ),
                          )
                        : e());
                case ge.WithinEndTag:
                  if (h.skipWhitespace()) return m(n, fe.Whitespace);
                  if (h.advanceIfChar(Ee))
                    return (c = ge.WithinContent), m(n, fe.EndTagClose);
                  if (i && h.peekChar() === Ce)
                    return (
                      (c = ge.WithinContent),
                      m(
                        n,
                        fe.EndTagClose,
                        ke(
                          'error.closingBracketMissing',
                          'Closing bracket missing.',
                        ),
                      )
                    );
                  t = ke(
                    'error.closingBracketExpected',
                    'Closing bracket expected.',
                  );
                  break;
                case ge.AfterOpeningStartTag:
                  return (
                    (a = p()),
                    (l = void 0),
                    (s = void 0),
                    a.length > 0
                      ? ((o = !1), (c = ge.WithinTag), m(n, fe.StartTag))
                      : h.skipWhitespace()
                      ? m(
                          n,
                          fe.Whitespace,
                          ke(
                            'error.unexpectedWhitespace',
                            'Tag name must directly follow the open bracket.',
                          ),
                        )
                      : ((c = ge.WithinTag),
                        h.advanceUntilChar(Ee),
                        n < h.pos()
                          ? m(
                              n,
                              fe.Unknown,
                              ke(
                                'error.startTagNameExpected',
                                'Start tag name expected.',
                              ),
                            )
                          : e())
                  );
                case ge.WithinTag:
                  return h.skipWhitespace()
                    ? ((o = !0), m(n, fe.Whitespace))
                    : o &&
                      (s = h
                        .advanceIfRegExp(/^[^\s"'></=\x00-\x0F\x7F\x80-\x9F]*/)
                        .toLowerCase()).length > 0
                    ? ((c = ge.AfterAttributeName),
                      (o = !1),
                      m(n, fe.AttributeName))
                    : h.advanceIfChars([Ae, Ee])
                    ? ((c = ge.WithinContent), m(n, fe.StartTagSelfClose))
                    : h.advanceIfChar(Ee)
                    ? ((c =
                        'script' === a
                          ? l && Oe[l]
                            ? ge.WithinContent
                            : ge.WithinScriptContent
                          : 'style' === a
                          ? ge.WithinStyleContent
                          : ge.WithinContent),
                      m(n, fe.StartTagClose))
                    : i && h.peekChar() === Ce
                    ? ((c = ge.WithinContent),
                      m(
                        n,
                        fe.StartTagClose,
                        ke(
                          'error.closingBracketMissing',
                          'Closing bracket missing.',
                        ),
                      ))
                    : (h.advance(1),
                      m(
                        n,
                        fe.Unknown,
                        ke(
                          'error.unexpectedCharacterInTag',
                          'Unexpected character in tag.',
                        ),
                      ));
                case ge.AfterAttributeName:
                  return h.skipWhitespace()
                    ? ((o = !0), m(n, fe.Whitespace))
                    : h.advanceIfChar(Me)
                    ? ((c = ge.BeforeAttributeValue), m(n, fe.DelimiterAssign))
                    : ((c = ge.WithinTag), e());
                case ge.BeforeAttributeValue:
                  if (h.skipWhitespace()) return m(n, fe.Whitespace);
                  var r = h.advanceIfRegExp(/^[^\s"'`=<>]+/);
                  if (r.length > 0)
                    return (
                      h.peekChar() === Ee &&
                        h.peekChar(-1) === Ae &&
                        (h.goBack(1), (r = r.substr(0, r.length - 1))),
                      'type' === s && (l = r),
                      (c = ge.WithinTag),
                      (o = !1),
                      m(n, fe.AttributeValue)
                    );
                  var d = h.peekChar();
                  return d === Ie || d === Re
                    ? (h.advance(1),
                      h.advanceUntilChar(d) && h.advance(1),
                      'type' === s &&
                        (l = h.getSource().substring(n + 1, h.pos() - 1)),
                      (c = ge.WithinTag),
                      (o = !1),
                      m(n, fe.AttributeValue))
                    : ((c = ge.WithinTag), (o = !1), e());
                case ge.WithinScriptContent:
                  for (var u = 1; !h.eos(); ) {
                    var f = h.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);
                    if (0 === f.length) return h.goToEnd(), m(n, fe.Script);
                    if ('\x3c!--' === f) 1 === u && (u = 2);
                    else if ('--\x3e' === f) u = 1;
                    else if ('/' !== f[1]) 2 === u && (u = 3);
                    else {
                      if (3 !== u) {
                        h.goBack(f.length);
                        break;
                      }
                      u = 2;
                    }
                  }
                  return (
                    (c = ge.WithinContent), n < h.pos() ? m(n, fe.Script) : e()
                  );
                case ge.WithinStyleContent:
                  return (
                    h.advanceUntilRegExp(/<\/style/i),
                    (c = ge.WithinContent),
                    n < h.pos() ? m(n, fe.Styles) : e()
                  );
              }
              return h.advance(1), (c = ge.WithinContent), m(n, fe.Unknown, t);
            })();
          return n === fe.EOS ||
            e !== h.pos() ||
            (i && (n === fe.StartTagClose || n === fe.EndTagClose))
            ? n
            : (console.log(
                'Scanner.scan has not advanced at offset ' +
                  e +
                  ', state before: ' +
                  t +
                  ' after: ' +
                  c,
              ),
              h.advance(1),
              m(e, fe.Unknown));
        },
        getTokenType: function() {
          return u;
        },
        getTokenOffset: function() {
          return d;
        },
        getTokenLength: function() {
          return h.pos() - d;
        },
        getTokenEnd: function() {
          return h.pos();
        },
        getTokenText: function() {
          return h.getSource().substring(d, h.pos());
        },
        getScannerState: function() {
          return c;
        },
        getTokenError: function() {
          return r;
        },
      };
    }
    function Pe(e, t) {
      var n = 0,
        i = e.length;
      if (0 === i) return 0;
      for (; n < i; ) {
        var r = Math.floor((n + i) / 2);
        t(e[r]) ? (i = r) : (n = r + 1);
      }
      return n;
    }
    var qe = [
      'area',
      'base',
      'br',
      'col',
      'embed',
      'hr',
      'img',
      'input',
      'keygen',
      'link',
      'menuitem',
      'meta',
      'param',
      'source',
      'track',
      'wbr',
    ];
    function Fe(e) {
      return (
        !!e &&
        (function(e, t, n) {
          for (var i = 0, r = e.length - 1; i <= r; ) {
            var o = ((i + r) / 2) | 0,
              a = n(e[o], t);
            if (a < 0) i = o + 1;
            else {
              if (!(a > 0)) return o;
              r = o - 1;
            }
          }
          return -(i + 1);
        })(qe, e.toLowerCase(), function(e, t) {
          return e.localeCompare(t);
        }) >= 0
      );
    }
    var Be = (function() {
      function e(e, t, n, i) {
        (this.start = e),
          (this.end = t),
          (this.children = n),
          (this.parent = i),
          (this.closed = !1);
      }
      return (
        Object.defineProperty(e.prototype, 'attributeNames', {
          get: function() {
            return this.attributes ? Object.keys(this.attributes) : [];
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.isSameTag = function(e) {
          return void 0 === this.tag
            ? void 0 === e
            : void 0 !== e &&
                this.tag.length === e.length &&
                this.tag.toLowerCase() === e;
        }),
        Object.defineProperty(e.prototype, 'firstChild', {
          get: function() {
            return this.children[0];
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'lastChild', {
          get: function() {
            return this.children.length
              ? this.children[this.children.length - 1]
              : void 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.findNodeBefore = function(e) {
          var t =
            Pe(this.children, function(t) {
              return e <= t.start;
            }) - 1;
          if (t >= 0) {
            var n = this.children[t];
            if (e > n.start) {
              if (e < n.end) return n.findNodeBefore(e);
              var i = n.lastChild;
              return i && i.end === n.end ? n.findNodeBefore(e) : n;
            }
          }
          return this;
        }),
        (e.prototype.findNodeAt = function(e) {
          var t =
            Pe(this.children, function(t) {
              return e <= t.start;
            }) - 1;
          if (t >= 0) {
            var n = this.children[t];
            if (e > n.start && e <= n.end) return n.findNodeAt(e);
          }
          return this;
        }),
        e
      );
    })();
    function je(e) {
      for (
        var t = De(e, void 0, void 0, !0),
          n = new Be(0, e.length, [], void 0),
          i = n,
          r = -1,
          o = void 0,
          a = null,
          s = t.scan();
        s !== fe.EOS;

      ) {
        switch (s) {
          case fe.StartTagOpen:
            var l = new Be(t.getTokenOffset(), e.length, [], i);
            i.children.push(l), (i = l);
            break;
          case fe.StartTag:
            i.tag = t.getTokenText();
            break;
          case fe.StartTagClose:
            i.parent &&
              ((i.end = t.getTokenEnd()),
              t.getTokenLength()
                ? ((i.startTagEnd = t.getTokenEnd()),
                  i.tag && Fe(i.tag) && ((i.closed = !0), (i = i.parent)))
                : (i = i.parent));
            break;
          case fe.StartTagSelfClose:
            i.parent &&
              ((i.closed = !0),
              (i.end = t.getTokenEnd()),
              (i.startTagEnd = t.getTokenEnd()),
              (i = i.parent));
            break;
          case fe.EndTagOpen:
            (r = t.getTokenOffset()), (o = void 0);
            break;
          case fe.EndTag:
            o = t.getTokenText().toLowerCase();
            break;
          case fe.EndTagClose:
            for (var h = i; !h.isSameTag(o) && h.parent; ) h = h.parent;
            if (h.parent) {
              for (; i !== h; ) (i.end = r), (i.closed = !1), (i = i.parent);
              (i.closed = !0),
                (i.endTagStart = r),
                (i.end = t.getTokenEnd()),
                (i = i.parent);
            }
            break;
          case fe.AttributeName:
            (a = t.getTokenText()),
              (c = i.attributes) || (i.attributes = c = {}),
              (c[a] = null);
            break;
          case fe.AttributeValue:
            var c,
              d = t.getTokenText();
            (c = i.attributes) && a && ((c[a] = d), (a = null));
        }
        s = t.scan();
      }
      for (; i.parent; ) (i.end = e.length), (i.closed = !1), (i = i.parent);
      return {
        roots: n.children,
        findNodeBefore: n.findNodeBefore.bind(n),
        findNodeAt: n.findNodeAt.bind(n),
      };
    }
    var Ge = {
      'Aacute;': 'Á',
      Aacute: 'Á',
      'aacute;': 'á',
      aacute: 'á',
      'Abreve;': 'Ă',
      'abreve;': 'ă',
      'ac;': '∾',
      'acd;': '∿',
      'acE;': '∾̳',
      'Acirc;': 'Â',
      Acirc: 'Â',
      'acirc;': 'â',
      acirc: 'â',
      'acute;': '´',
      acute: '´',
      'Acy;': 'А',
      'acy;': 'а',
      'AElig;': 'Æ',
      AElig: 'Æ',
      'aelig;': 'æ',
      aelig: 'æ',
      'af;': '⁡',
      'Afr;': '𝔄',
      'afr;': '𝔞',
      'Agrave;': 'À',
      Agrave: 'À',
      'agrave;': 'à',
      agrave: 'à',
      'alefsym;': 'ℵ',
      'aleph;': 'ℵ',
      'Alpha;': 'Α',
      'alpha;': 'α',
      'Amacr;': 'Ā',
      'amacr;': 'ā',
      'amalg;': '⨿',
      'AMP;': '&',
      AMP: '&',
      'amp;': '&',
      amp: '&',
      'And;': '⩓',
      'and;': '∧',
      'andand;': '⩕',
      'andd;': '⩜',
      'andslope;': '⩘',
      'andv;': '⩚',
      'ang;': '∠',
      'ange;': '⦤',
      'angle;': '∠',
      'angmsd;': '∡',
      'angmsdaa;': '⦨',
      'angmsdab;': '⦩',
      'angmsdac;': '⦪',
      'angmsdad;': '⦫',
      'angmsdae;': '⦬',
      'angmsdaf;': '⦭',
      'angmsdag;': '⦮',
      'angmsdah;': '⦯',
      'angrt;': '∟',
      'angrtvb;': '⊾',
      'angrtvbd;': '⦝',
      'angsph;': '∢',
      'angst;': 'Å',
      'angzarr;': '⍼',
      'Aogon;': 'Ą',
      'aogon;': 'ą',
      'Aopf;': '𝔸',
      'aopf;': '𝕒',
      'ap;': '≈',
      'apacir;': '⩯',
      'apE;': '⩰',
      'ape;': '≊',
      'apid;': '≋',
      'apos;': "'",
      'ApplyFunction;': '⁡',
      'approx;': '≈',
      'approxeq;': '≊',
      'Aring;': 'Å',
      Aring: 'Å',
      'aring;': 'å',
      aring: 'å',
      'Ascr;': '𝒜',
      'ascr;': '𝒶',
      'Assign;': '≔',
      'ast;': '*',
      'asymp;': '≈',
      'asympeq;': '≍',
      'Atilde;': 'Ã',
      Atilde: 'Ã',
      'atilde;': 'ã',
      atilde: 'ã',
      'Auml;': 'Ä',
      Auml: 'Ä',
      'auml;': 'ä',
      auml: 'ä',
      'awconint;': '∳',
      'awint;': '⨑',
      'backcong;': '≌',
      'backepsilon;': '϶',
      'backprime;': '‵',
      'backsim;': '∽',
      'backsimeq;': '⋍',
      'Backslash;': '∖',
      'Barv;': '⫧',
      'barvee;': '⊽',
      'Barwed;': '⌆',
      'barwed;': '⌅',
      'barwedge;': '⌅',
      'bbrk;': '⎵',
      'bbrktbrk;': '⎶',
      'bcong;': '≌',
      'Bcy;': 'Б',
      'bcy;': 'б',
      'bdquo;': '„',
      'becaus;': '∵',
      'Because;': '∵',
      'because;': '∵',
      'bemptyv;': '⦰',
      'bepsi;': '϶',
      'bernou;': 'ℬ',
      'Bernoullis;': 'ℬ',
      'Beta;': 'Β',
      'beta;': 'β',
      'beth;': 'ℶ',
      'between;': '≬',
      'Bfr;': '𝔅',
      'bfr;': '𝔟',
      'bigcap;': '⋂',
      'bigcirc;': '◯',
      'bigcup;': '⋃',
      'bigodot;': '⨀',
      'bigoplus;': '⨁',
      'bigotimes;': '⨂',
      'bigsqcup;': '⨆',
      'bigstar;': '★',
      'bigtriangledown;': '▽',
      'bigtriangleup;': '△',
      'biguplus;': '⨄',
      'bigvee;': '⋁',
      'bigwedge;': '⋀',
      'bkarow;': '⤍',
      'blacklozenge;': '⧫',
      'blacksquare;': '▪',
      'blacktriangle;': '▴',
      'blacktriangledown;': '▾',
      'blacktriangleleft;': '◂',
      'blacktriangleright;': '▸',
      'blank;': '␣',
      'blk12;': '▒',
      'blk14;': '░',
      'blk34;': '▓',
      'block;': '█',
      'bne;': '=⃥',
      'bnequiv;': '≡⃥',
      'bNot;': '⫭',
      'bnot;': '⌐',
      'Bopf;': '𝔹',
      'bopf;': '𝕓',
      'bot;': '⊥',
      'bottom;': '⊥',
      'bowtie;': '⋈',
      'boxbox;': '⧉',
      'boxDL;': '╗',
      'boxDl;': '╖',
      'boxdL;': '╕',
      'boxdl;': '┐',
      'boxDR;': '╔',
      'boxDr;': '╓',
      'boxdR;': '╒',
      'boxdr;': '┌',
      'boxH;': '═',
      'boxh;': '─',
      'boxHD;': '╦',
      'boxHd;': '╤',
      'boxhD;': '╥',
      'boxhd;': '┬',
      'boxHU;': '╩',
      'boxHu;': '╧',
      'boxhU;': '╨',
      'boxhu;': '┴',
      'boxminus;': '⊟',
      'boxplus;': '⊞',
      'boxtimes;': '⊠',
      'boxUL;': '╝',
      'boxUl;': '╜',
      'boxuL;': '╛',
      'boxul;': '┘',
      'boxUR;': '╚',
      'boxUr;': '╙',
      'boxuR;': '╘',
      'boxur;': '└',
      'boxV;': '║',
      'boxv;': '│',
      'boxVH;': '╬',
      'boxVh;': '╫',
      'boxvH;': '╪',
      'boxvh;': '┼',
      'boxVL;': '╣',
      'boxVl;': '╢',
      'boxvL;': '╡',
      'boxvl;': '┤',
      'boxVR;': '╠',
      'boxVr;': '╟',
      'boxvR;': '╞',
      'boxvr;': '├',
      'bprime;': '‵',
      'Breve;': '˘',
      'breve;': '˘',
      'brvbar;': '¦',
      brvbar: '¦',
      'Bscr;': 'ℬ',
      'bscr;': '𝒷',
      'bsemi;': '⁏',
      'bsim;': '∽',
      'bsime;': '⋍',
      'bsol;': '\\',
      'bsolb;': '⧅',
      'bsolhsub;': '⟈',
      'bull;': '•',
      'bullet;': '•',
      'bump;': '≎',
      'bumpE;': '⪮',
      'bumpe;': '≏',
      'Bumpeq;': '≎',
      'bumpeq;': '≏',
      'Cacute;': 'Ć',
      'cacute;': 'ć',
      'Cap;': '⋒',
      'cap;': '∩',
      'capand;': '⩄',
      'capbrcup;': '⩉',
      'capcap;': '⩋',
      'capcup;': '⩇',
      'capdot;': '⩀',
      'CapitalDifferentialD;': 'ⅅ',
      'caps;': '∩︀',
      'caret;': '⁁',
      'caron;': 'ˇ',
      'Cayleys;': 'ℭ',
      'ccaps;': '⩍',
      'Ccaron;': 'Č',
      'ccaron;': 'č',
      'Ccedil;': 'Ç',
      Ccedil: 'Ç',
      'ccedil;': 'ç',
      ccedil: 'ç',
      'Ccirc;': 'Ĉ',
      'ccirc;': 'ĉ',
      'Cconint;': '∰',
      'ccups;': '⩌',
      'ccupssm;': '⩐',
      'Cdot;': 'Ċ',
      'cdot;': 'ċ',
      'cedil;': '¸',
      cedil: '¸',
      'Cedilla;': '¸',
      'cemptyv;': '⦲',
      'cent;': '¢',
      cent: '¢',
      'CenterDot;': '·',
      'centerdot;': '·',
      'Cfr;': 'ℭ',
      'cfr;': '𝔠',
      'CHcy;': 'Ч',
      'chcy;': 'ч',
      'check;': '✓',
      'checkmark;': '✓',
      'Chi;': 'Χ',
      'chi;': 'χ',
      'cir;': '○',
      'circ;': 'ˆ',
      'circeq;': '≗',
      'circlearrowleft;': '↺',
      'circlearrowright;': '↻',
      'circledast;': '⊛',
      'circledcirc;': '⊚',
      'circleddash;': '⊝',
      'CircleDot;': '⊙',
      'circledR;': '®',
      'circledS;': 'Ⓢ',
      'CircleMinus;': '⊖',
      'CirclePlus;': '⊕',
      'CircleTimes;': '⊗',
      'cirE;': '⧃',
      'cire;': '≗',
      'cirfnint;': '⨐',
      'cirmid;': '⫯',
      'cirscir;': '⧂',
      'ClockwiseContourIntegral;': '∲',
      'CloseCurlyDoubleQuote;': '”',
      'CloseCurlyQuote;': '’',
      'clubs;': '♣',
      'clubsuit;': '♣',
      'Colon;': '∷',
      'colon;': ':',
      'Colone;': '⩴',
      'colone;': '≔',
      'coloneq;': '≔',
      'comma;': ',',
      'commat;': '@',
      'comp;': '∁',
      'compfn;': '∘',
      'complement;': '∁',
      'complexes;': 'ℂ',
      'cong;': '≅',
      'congdot;': '⩭',
      'Congruent;': '≡',
      'Conint;': '∯',
      'conint;': '∮',
      'ContourIntegral;': '∮',
      'Copf;': 'ℂ',
      'copf;': '𝕔',
      'coprod;': '∐',
      'Coproduct;': '∐',
      'COPY;': '©',
      COPY: '©',
      'copy;': '©',
      copy: '©',
      'copysr;': '℗',
      'CounterClockwiseContourIntegral;': '∳',
      'crarr;': '↵',
      'Cross;': '⨯',
      'cross;': '✗',
      'Cscr;': '𝒞',
      'cscr;': '𝒸',
      'csub;': '⫏',
      'csube;': '⫑',
      'csup;': '⫐',
      'csupe;': '⫒',
      'ctdot;': '⋯',
      'cudarrl;': '⤸',
      'cudarrr;': '⤵',
      'cuepr;': '⋞',
      'cuesc;': '⋟',
      'cularr;': '↶',
      'cularrp;': '⤽',
      'Cup;': '⋓',
      'cup;': '∪',
      'cupbrcap;': '⩈',
      'CupCap;': '≍',
      'cupcap;': '⩆',
      'cupcup;': '⩊',
      'cupdot;': '⊍',
      'cupor;': '⩅',
      'cups;': '∪︀',
      'curarr;': '↷',
      'curarrm;': '⤼',
      'curlyeqprec;': '⋞',
      'curlyeqsucc;': '⋟',
      'curlyvee;': '⋎',
      'curlywedge;': '⋏',
      'curren;': '¤',
      curren: '¤',
      'curvearrowleft;': '↶',
      'curvearrowright;': '↷',
      'cuvee;': '⋎',
      'cuwed;': '⋏',
      'cwconint;': '∲',
      'cwint;': '∱',
      'cylcty;': '⌭',
      'Dagger;': '‡',
      'dagger;': '†',
      'daleth;': 'ℸ',
      'Darr;': '↡',
      'dArr;': '⇓',
      'darr;': '↓',
      'dash;': '‐',
      'Dashv;': '⫤',
      'dashv;': '⊣',
      'dbkarow;': '⤏',
      'dblac;': '˝',
      'Dcaron;': 'Ď',
      'dcaron;': 'ď',
      'Dcy;': 'Д',
      'dcy;': 'д',
      'DD;': 'ⅅ',
      'dd;': 'ⅆ',
      'ddagger;': '‡',
      'ddarr;': '⇊',
      'DDotrahd;': '⤑',
      'ddotseq;': '⩷',
      'deg;': '°',
      deg: '°',
      'Del;': '∇',
      'Delta;': 'Δ',
      'delta;': 'δ',
      'demptyv;': '⦱',
      'dfisht;': '⥿',
      'Dfr;': '𝔇',
      'dfr;': '𝔡',
      'dHar;': '⥥',
      'dharl;': '⇃',
      'dharr;': '⇂',
      'DiacriticalAcute;': '´',
      'DiacriticalDot;': '˙',
      'DiacriticalDoubleAcute;': '˝',
      'DiacriticalGrave;': '`',
      'DiacriticalTilde;': '˜',
      'diam;': '⋄',
      'Diamond;': '⋄',
      'diamond;': '⋄',
      'diamondsuit;': '♦',
      'diams;': '♦',
      'die;': '¨',
      'DifferentialD;': 'ⅆ',
      'digamma;': 'ϝ',
      'disin;': '⋲',
      'div;': '÷',
      'divide;': '÷',
      divide: '÷',
      'divideontimes;': '⋇',
      'divonx;': '⋇',
      'DJcy;': 'Ђ',
      'djcy;': 'ђ',
      'dlcorn;': '⌞',
      'dlcrop;': '⌍',
      'dollar;': '$',
      'Dopf;': '𝔻',
      'dopf;': '𝕕',
      'Dot;': '¨',
      'dot;': '˙',
      'DotDot;': '⃜',
      'doteq;': '≐',
      'doteqdot;': '≑',
      'DotEqual;': '≐',
      'dotminus;': '∸',
      'dotplus;': '∔',
      'dotsquare;': '⊡',
      'doublebarwedge;': '⌆',
      'DoubleContourIntegral;': '∯',
      'DoubleDot;': '¨',
      'DoubleDownArrow;': '⇓',
      'DoubleLeftArrow;': '⇐',
      'DoubleLeftRightArrow;': '⇔',
      'DoubleLeftTee;': '⫤',
      'DoubleLongLeftArrow;': '⟸',
      'DoubleLongLeftRightArrow;': '⟺',
      'DoubleLongRightArrow;': '⟹',
      'DoubleRightArrow;': '⇒',
      'DoubleRightTee;': '⊨',
      'DoubleUpArrow;': '⇑',
      'DoubleUpDownArrow;': '⇕',
      'DoubleVerticalBar;': '∥',
      'DownArrow;': '↓',
      'Downarrow;': '⇓',
      'downarrow;': '↓',
      'DownArrowBar;': '⤓',
      'DownArrowUpArrow;': '⇵',
      'DownBreve;': '̑',
      'downdownarrows;': '⇊',
      'downharpoonleft;': '⇃',
      'downharpoonright;': '⇂',
      'DownLeftRightVector;': '⥐',
      'DownLeftTeeVector;': '⥞',
      'DownLeftVector;': '↽',
      'DownLeftVectorBar;': '⥖',
      'DownRightTeeVector;': '⥟',
      'DownRightVector;': '⇁',
      'DownRightVectorBar;': '⥗',
      'DownTee;': '⊤',
      'DownTeeArrow;': '↧',
      'drbkarow;': '⤐',
      'drcorn;': '⌟',
      'drcrop;': '⌌',
      'Dscr;': '𝒟',
      'dscr;': '𝒹',
      'DScy;': 'Ѕ',
      'dscy;': 'ѕ',
      'dsol;': '⧶',
      'Dstrok;': 'Đ',
      'dstrok;': 'đ',
      'dtdot;': '⋱',
      'dtri;': '▿',
      'dtrif;': '▾',
      'duarr;': '⇵',
      'duhar;': '⥯',
      'dwangle;': '⦦',
      'DZcy;': 'Џ',
      'dzcy;': 'џ',
      'dzigrarr;': '⟿',
      'Eacute;': 'É',
      Eacute: 'É',
      'eacute;': 'é',
      eacute: 'é',
      'easter;': '⩮',
      'Ecaron;': 'Ě',
      'ecaron;': 'ě',
      'ecir;': '≖',
      'Ecirc;': 'Ê',
      Ecirc: 'Ê',
      'ecirc;': 'ê',
      ecirc: 'ê',
      'ecolon;': '≕',
      'Ecy;': 'Э',
      'ecy;': 'э',
      'eDDot;': '⩷',
      'Edot;': 'Ė',
      'eDot;': '≑',
      'edot;': 'ė',
      'ee;': 'ⅇ',
      'efDot;': '≒',
      'Efr;': '𝔈',
      'efr;': '𝔢',
      'eg;': '⪚',
      'Egrave;': 'È',
      Egrave: 'È',
      'egrave;': 'è',
      egrave: 'è',
      'egs;': '⪖',
      'egsdot;': '⪘',
      'el;': '⪙',
      'Element;': '∈',
      'elinters;': '⏧',
      'ell;': 'ℓ',
      'els;': '⪕',
      'elsdot;': '⪗',
      'Emacr;': 'Ē',
      'emacr;': 'ē',
      'empty;': '∅',
      'emptyset;': '∅',
      'EmptySmallSquare;': '◻',
      'emptyv;': '∅',
      'EmptyVerySmallSquare;': '▫',
      'emsp;': ' ',
      'emsp13;': ' ',
      'emsp14;': ' ',
      'ENG;': 'Ŋ',
      'eng;': 'ŋ',
      'ensp;': ' ',
      'Eogon;': 'Ę',
      'eogon;': 'ę',
      'Eopf;': '𝔼',
      'eopf;': '𝕖',
      'epar;': '⋕',
      'eparsl;': '⧣',
      'eplus;': '⩱',
      'epsi;': 'ε',
      'Epsilon;': 'Ε',
      'epsilon;': 'ε',
      'epsiv;': 'ϵ',
      'eqcirc;': '≖',
      'eqcolon;': '≕',
      'eqsim;': '≂',
      'eqslantgtr;': '⪖',
      'eqslantless;': '⪕',
      'Equal;': '⩵',
      'equals;': '=',
      'EqualTilde;': '≂',
      'equest;': '≟',
      'Equilibrium;': '⇌',
      'equiv;': '≡',
      'equivDD;': '⩸',
      'eqvparsl;': '⧥',
      'erarr;': '⥱',
      'erDot;': '≓',
      'Escr;': 'ℰ',
      'escr;': 'ℯ',
      'esdot;': '≐',
      'Esim;': '⩳',
      'esim;': '≂',
      'Eta;': 'Η',
      'eta;': 'η',
      'ETH;': 'Ð',
      ETH: 'Ð',
      'eth;': 'ð',
      eth: 'ð',
      'Euml;': 'Ë',
      Euml: 'Ë',
      'euml;': 'ë',
      euml: 'ë',
      'euro;': '€',
      'excl;': '!',
      'exist;': '∃',
      'Exists;': '∃',
      'expectation;': 'ℰ',
      'ExponentialE;': 'ⅇ',
      'exponentiale;': 'ⅇ',
      'fallingdotseq;': '≒',
      'Fcy;': 'Ф',
      'fcy;': 'ф',
      'female;': '♀',
      'ffilig;': 'ﬃ',
      'fflig;': 'ﬀ',
      'ffllig;': 'ﬄ',
      'Ffr;': '𝔉',
      'ffr;': '𝔣',
      'filig;': 'ﬁ',
      'FilledSmallSquare;': '◼',
      'FilledVerySmallSquare;': '▪',
      'fjlig;': 'fj',
      'flat;': '♭',
      'fllig;': 'ﬂ',
      'fltns;': '▱',
      'fnof;': 'ƒ',
      'Fopf;': '𝔽',
      'fopf;': '𝕗',
      'ForAll;': '∀',
      'forall;': '∀',
      'fork;': '⋔',
      'forkv;': '⫙',
      'Fouriertrf;': 'ℱ',
      'fpartint;': '⨍',
      'frac12;': '½',
      frac12: '½',
      'frac13;': '⅓',
      'frac14;': '¼',
      frac14: '¼',
      'frac15;': '⅕',
      'frac16;': '⅙',
      'frac18;': '⅛',
      'frac23;': '⅔',
      'frac25;': '⅖',
      'frac34;': '¾',
      frac34: '¾',
      'frac35;': '⅗',
      'frac38;': '⅜',
      'frac45;': '⅘',
      'frac56;': '⅚',
      'frac58;': '⅝',
      'frac78;': '⅞',
      'frasl;': '⁄',
      'frown;': '⌢',
      'Fscr;': 'ℱ',
      'fscr;': '𝒻',
      'gacute;': 'ǵ',
      'Gamma;': 'Γ',
      'gamma;': 'γ',
      'Gammad;': 'Ϝ',
      'gammad;': 'ϝ',
      'gap;': '⪆',
      'Gbreve;': 'Ğ',
      'gbreve;': 'ğ',
      'Gcedil;': 'Ģ',
      'Gcirc;': 'Ĝ',
      'gcirc;': 'ĝ',
      'Gcy;': 'Г',
      'gcy;': 'г',
      'Gdot;': 'Ġ',
      'gdot;': 'ġ',
      'gE;': '≧',
      'ge;': '≥',
      'gEl;': '⪌',
      'gel;': '⋛',
      'geq;': '≥',
      'geqq;': '≧',
      'geqslant;': '⩾',
      'ges;': '⩾',
      'gescc;': '⪩',
      'gesdot;': '⪀',
      'gesdoto;': '⪂',
      'gesdotol;': '⪄',
      'gesl;': '⋛︀',
      'gesles;': '⪔',
      'Gfr;': '𝔊',
      'gfr;': '𝔤',
      'Gg;': '⋙',
      'gg;': '≫',
      'ggg;': '⋙',
      'gimel;': 'ℷ',
      'GJcy;': 'Ѓ',
      'gjcy;': 'ѓ',
      'gl;': '≷',
      'gla;': '⪥',
      'glE;': '⪒',
      'glj;': '⪤',
      'gnap;': '⪊',
      'gnapprox;': '⪊',
      'gnE;': '≩',
      'gne;': '⪈',
      'gneq;': '⪈',
      'gneqq;': '≩',
      'gnsim;': '⋧',
      'Gopf;': '𝔾',
      'gopf;': '𝕘',
      'grave;': '`',
      'GreaterEqual;': '≥',
      'GreaterEqualLess;': '⋛',
      'GreaterFullEqual;': '≧',
      'GreaterGreater;': '⪢',
      'GreaterLess;': '≷',
      'GreaterSlantEqual;': '⩾',
      'GreaterTilde;': '≳',
      'Gscr;': '𝒢',
      'gscr;': 'ℊ',
      'gsim;': '≳',
      'gsime;': '⪎',
      'gsiml;': '⪐',
      'GT;': '>',
      GT: '>',
      'Gt;': '≫',
      'gt;': '>',
      gt: '>',
      'gtcc;': '⪧',
      'gtcir;': '⩺',
      'gtdot;': '⋗',
      'gtlPar;': '⦕',
      'gtquest;': '⩼',
      'gtrapprox;': '⪆',
      'gtrarr;': '⥸',
      'gtrdot;': '⋗',
      'gtreqless;': '⋛',
      'gtreqqless;': '⪌',
      'gtrless;': '≷',
      'gtrsim;': '≳',
      'gvertneqq;': '≩︀',
      'gvnE;': '≩︀',
      'Hacek;': 'ˇ',
      'hairsp;': ' ',
      'half;': '½',
      'hamilt;': 'ℋ',
      'HARDcy;': 'Ъ',
      'hardcy;': 'ъ',
      'hArr;': '⇔',
      'harr;': '↔',
      'harrcir;': '⥈',
      'harrw;': '↭',
      'Hat;': '^',
      'hbar;': 'ℏ',
      'Hcirc;': 'Ĥ',
      'hcirc;': 'ĥ',
      'hearts;': '♥',
      'heartsuit;': '♥',
      'hellip;': '…',
      'hercon;': '⊹',
      'Hfr;': 'ℌ',
      'hfr;': '𝔥',
      'HilbertSpace;': 'ℋ',
      'hksearow;': '⤥',
      'hkswarow;': '⤦',
      'hoarr;': '⇿',
      'homtht;': '∻',
      'hookleftarrow;': '↩',
      'hookrightarrow;': '↪',
      'Hopf;': 'ℍ',
      'hopf;': '𝕙',
      'horbar;': '―',
      'HorizontalLine;': '─',
      'Hscr;': 'ℋ',
      'hscr;': '𝒽',
      'hslash;': 'ℏ',
      'Hstrok;': 'Ħ',
      'hstrok;': 'ħ',
      'HumpDownHump;': '≎',
      'HumpEqual;': '≏',
      'hybull;': '⁃',
      'hyphen;': '‐',
      'Iacute;': 'Í',
      Iacute: 'Í',
      'iacute;': 'í',
      iacute: 'í',
      'ic;': '⁣',
      'Icirc;': 'Î',
      Icirc: 'Î',
      'icirc;': 'î',
      icirc: 'î',
      'Icy;': 'И',
      'icy;': 'и',
      'Idot;': 'İ',
      'IEcy;': 'Е',
      'iecy;': 'е',
      'iexcl;': '¡',
      iexcl: '¡',
      'iff;': '⇔',
      'Ifr;': 'ℑ',
      'ifr;': '𝔦',
      'Igrave;': 'Ì',
      Igrave: 'Ì',
      'igrave;': 'ì',
      igrave: 'ì',
      'ii;': 'ⅈ',
      'iiiint;': '⨌',
      'iiint;': '∭',
      'iinfin;': '⧜',
      'iiota;': '℩',
      'IJlig;': 'Ĳ',
      'ijlig;': 'ĳ',
      'Im;': 'ℑ',
      'Imacr;': 'Ī',
      'imacr;': 'ī',
      'image;': 'ℑ',
      'ImaginaryI;': 'ⅈ',
      'imagline;': 'ℐ',
      'imagpart;': 'ℑ',
      'imath;': 'ı',
      'imof;': '⊷',
      'imped;': 'Ƶ',
      'Implies;': '⇒',
      'in;': '∈',
      'incare;': '℅',
      'infin;': '∞',
      'infintie;': '⧝',
      'inodot;': 'ı',
      'Int;': '∬',
      'int;': '∫',
      'intcal;': '⊺',
      'integers;': 'ℤ',
      'Integral;': '∫',
      'intercal;': '⊺',
      'Intersection;': '⋂',
      'intlarhk;': '⨗',
      'intprod;': '⨼',
      'InvisibleComma;': '⁣',
      'InvisibleTimes;': '⁢',
      'IOcy;': 'Ё',
      'iocy;': 'ё',
      'Iogon;': 'Į',
      'iogon;': 'į',
      'Iopf;': '𝕀',
      'iopf;': '𝕚',
      'Iota;': 'Ι',
      'iota;': 'ι',
      'iprod;': '⨼',
      'iquest;': '¿',
      iquest: '¿',
      'Iscr;': 'ℐ',
      'iscr;': '𝒾',
      'isin;': '∈',
      'isindot;': '⋵',
      'isinE;': '⋹',
      'isins;': '⋴',
      'isinsv;': '⋳',
      'isinv;': '∈',
      'it;': '⁢',
      'Itilde;': 'Ĩ',
      'itilde;': 'ĩ',
      'Iukcy;': 'І',
      'iukcy;': 'і',
      'Iuml;': 'Ï',
      Iuml: 'Ï',
      'iuml;': 'ï',
      iuml: 'ï',
      'Jcirc;': 'Ĵ',
      'jcirc;': 'ĵ',
      'Jcy;': 'Й',
      'jcy;': 'й',
      'Jfr;': '𝔍',
      'jfr;': '𝔧',
      'jmath;': 'ȷ',
      'Jopf;': '𝕁',
      'jopf;': '𝕛',
      'Jscr;': '𝒥',
      'jscr;': '𝒿',
      'Jsercy;': 'Ј',
      'jsercy;': 'ј',
      'Jukcy;': 'Є',
      'jukcy;': 'є',
      'Kappa;': 'Κ',
      'kappa;': 'κ',
      'kappav;': 'ϰ',
      'Kcedil;': 'Ķ',
      'kcedil;': 'ķ',
      'Kcy;': 'К',
      'kcy;': 'к',
      'Kfr;': '𝔎',
      'kfr;': '𝔨',
      'kgreen;': 'ĸ',
      'KHcy;': 'Х',
      'khcy;': 'х',
      'KJcy;': 'Ќ',
      'kjcy;': 'ќ',
      'Kopf;': '𝕂',
      'kopf;': '𝕜',
      'Kscr;': '𝒦',
      'kscr;': '𝓀',
      'lAarr;': '⇚',
      'Lacute;': 'Ĺ',
      'lacute;': 'ĺ',
      'laemptyv;': '⦴',
      'lagran;': 'ℒ',
      'Lambda;': 'Λ',
      'lambda;': 'λ',
      'Lang;': '⟪',
      'lang;': '⟨',
      'langd;': '⦑',
      'langle;': '⟨',
      'lap;': '⪅',
      'Laplacetrf;': 'ℒ',
      'laquo;': '«',
      laquo: '«',
      'Larr;': '↞',
      'lArr;': '⇐',
      'larr;': '←',
      'larrb;': '⇤',
      'larrbfs;': '⤟',
      'larrfs;': '⤝',
      'larrhk;': '↩',
      'larrlp;': '↫',
      'larrpl;': '⤹',
      'larrsim;': '⥳',
      'larrtl;': '↢',
      'lat;': '⪫',
      'lAtail;': '⤛',
      'latail;': '⤙',
      'late;': '⪭',
      'lates;': '⪭︀',
      'lBarr;': '⤎',
      'lbarr;': '⤌',
      'lbbrk;': '❲',
      'lbrace;': '{',
      'lbrack;': '[',
      'lbrke;': '⦋',
      'lbrksld;': '⦏',
      'lbrkslu;': '⦍',
      'Lcaron;': 'Ľ',
      'lcaron;': 'ľ',
      'Lcedil;': 'Ļ',
      'lcedil;': 'ļ',
      'lceil;': '⌈',
      'lcub;': '{',
      'Lcy;': 'Л',
      'lcy;': 'л',
      'ldca;': '⤶',
      'ldquo;': '“',
      'ldquor;': '„',
      'ldrdhar;': '⥧',
      'ldrushar;': '⥋',
      'ldsh;': '↲',
      'lE;': '≦',
      'le;': '≤',
      'LeftAngleBracket;': '⟨',
      'LeftArrow;': '←',
      'Leftarrow;': '⇐',
      'leftarrow;': '←',
      'LeftArrowBar;': '⇤',
      'LeftArrowRightArrow;': '⇆',
      'leftarrowtail;': '↢',
      'LeftCeiling;': '⌈',
      'LeftDoubleBracket;': '⟦',
      'LeftDownTeeVector;': '⥡',
      'LeftDownVector;': '⇃',
      'LeftDownVectorBar;': '⥙',
      'LeftFloor;': '⌊',
      'leftharpoondown;': '↽',
      'leftharpoonup;': '↼',
      'leftleftarrows;': '⇇',
      'LeftRightArrow;': '↔',
      'Leftrightarrow;': '⇔',
      'leftrightarrow;': '↔',
      'leftrightarrows;': '⇆',
      'leftrightharpoons;': '⇋',
      'leftrightsquigarrow;': '↭',
      'LeftRightVector;': '⥎',
      'LeftTee;': '⊣',
      'LeftTeeArrow;': '↤',
      'LeftTeeVector;': '⥚',
      'leftthreetimes;': '⋋',
      'LeftTriangle;': '⊲',
      'LeftTriangleBar;': '⧏',
      'LeftTriangleEqual;': '⊴',
      'LeftUpDownVector;': '⥑',
      'LeftUpTeeVector;': '⥠',
      'LeftUpVector;': '↿',
      'LeftUpVectorBar;': '⥘',
      'LeftVector;': '↼',
      'LeftVectorBar;': '⥒',
      'lEg;': '⪋',
      'leg;': '⋚',
      'leq;': '≤',
      'leqq;': '≦',
      'leqslant;': '⩽',
      'les;': '⩽',
      'lescc;': '⪨',
      'lesdot;': '⩿',
      'lesdoto;': '⪁',
      'lesdotor;': '⪃',
      'lesg;': '⋚︀',
      'lesges;': '⪓',
      'lessapprox;': '⪅',
      'lessdot;': '⋖',
      'lesseqgtr;': '⋚',
      'lesseqqgtr;': '⪋',
      'LessEqualGreater;': '⋚',
      'LessFullEqual;': '≦',
      'LessGreater;': '≶',
      'lessgtr;': '≶',
      'LessLess;': '⪡',
      'lesssim;': '≲',
      'LessSlantEqual;': '⩽',
      'LessTilde;': '≲',
      'lfisht;': '⥼',
      'lfloor;': '⌊',
      'Lfr;': '𝔏',
      'lfr;': '𝔩',
      'lg;': '≶',
      'lgE;': '⪑',
      'lHar;': '⥢',
      'lhard;': '↽',
      'lharu;': '↼',
      'lharul;': '⥪',
      'lhblk;': '▄',
      'LJcy;': 'Љ',
      'ljcy;': 'љ',
      'Ll;': '⋘',
      'll;': '≪',
      'llarr;': '⇇',
      'llcorner;': '⌞',
      'Lleftarrow;': '⇚',
      'llhard;': '⥫',
      'lltri;': '◺',
      'Lmidot;': 'Ŀ',
      'lmidot;': 'ŀ',
      'lmoust;': '⎰',
      'lmoustache;': '⎰',
      'lnap;': '⪉',
      'lnapprox;': '⪉',
      'lnE;': '≨',
      'lne;': '⪇',
      'lneq;': '⪇',
      'lneqq;': '≨',
      'lnsim;': '⋦',
      'loang;': '⟬',
      'loarr;': '⇽',
      'lobrk;': '⟦',
      'LongLeftArrow;': '⟵',
      'Longleftarrow;': '⟸',
      'longleftarrow;': '⟵',
      'LongLeftRightArrow;': '⟷',
      'Longleftrightarrow;': '⟺',
      'longleftrightarrow;': '⟷',
      'longmapsto;': '⟼',
      'LongRightArrow;': '⟶',
      'Longrightarrow;': '⟹',
      'longrightarrow;': '⟶',
      'looparrowleft;': '↫',
      'looparrowright;': '↬',
      'lopar;': '⦅',
      'Lopf;': '𝕃',
      'lopf;': '𝕝',
      'loplus;': '⨭',
      'lotimes;': '⨴',
      'lowast;': '∗',
      'lowbar;': '_',
      'LowerLeftArrow;': '↙',
      'LowerRightArrow;': '↘',
      'loz;': '◊',
      'lozenge;': '◊',
      'lozf;': '⧫',
      'lpar;': '(',
      'lparlt;': '⦓',
      'lrarr;': '⇆',
      'lrcorner;': '⌟',
      'lrhar;': '⇋',
      'lrhard;': '⥭',
      'lrm;': '‎',
      'lrtri;': '⊿',
      'lsaquo;': '‹',
      'Lscr;': 'ℒ',
      'lscr;': '𝓁',
      'Lsh;': '↰',
      'lsh;': '↰',
      'lsim;': '≲',
      'lsime;': '⪍',
      'lsimg;': '⪏',
      'lsqb;': '[',
      'lsquo;': '‘',
      'lsquor;': '‚',
      'Lstrok;': 'Ł',
      'lstrok;': 'ł',
      'LT;': '<',
      LT: '<',
      'Lt;': '≪',
      'lt;': '<',
      lt: '<',
      'ltcc;': '⪦',
      'ltcir;': '⩹',
      'ltdot;': '⋖',
      'lthree;': '⋋',
      'ltimes;': '⋉',
      'ltlarr;': '⥶',
      'ltquest;': '⩻',
      'ltri;': '◃',
      'ltrie;': '⊴',
      'ltrif;': '◂',
      'ltrPar;': '⦖',
      'lurdshar;': '⥊',
      'luruhar;': '⥦',
      'lvertneqq;': '≨︀',
      'lvnE;': '≨︀',
      'macr;': '¯',
      macr: '¯',
      'male;': '♂',
      'malt;': '✠',
      'maltese;': '✠',
      'Map;': '⤅',
      'map;': '↦',
      'mapsto;': '↦',
      'mapstodown;': '↧',
      'mapstoleft;': '↤',
      'mapstoup;': '↥',
      'marker;': '▮',
      'mcomma;': '⨩',
      'Mcy;': 'М',
      'mcy;': 'м',
      'mdash;': '—',
      'mDDot;': '∺',
      'measuredangle;': '∡',
      'MediumSpace;': ' ',
      'Mellintrf;': 'ℳ',
      'Mfr;': '𝔐',
      'mfr;': '𝔪',
      'mho;': '℧',
      'micro;': 'µ',
      micro: 'µ',
      'mid;': '∣',
      'midast;': '*',
      'midcir;': '⫰',
      'middot;': '·',
      middot: '·',
      'minus;': '−',
      'minusb;': '⊟',
      'minusd;': '∸',
      'minusdu;': '⨪',
      'MinusPlus;': '∓',
      'mlcp;': '⫛',
      'mldr;': '…',
      'mnplus;': '∓',
      'models;': '⊧',
      'Mopf;': '𝕄',
      'mopf;': '𝕞',
      'mp;': '∓',
      'Mscr;': 'ℳ',
      'mscr;': '𝓂',
      'mstpos;': '∾',
      'Mu;': 'Μ',
      'mu;': 'μ',
      'multimap;': '⊸',
      'mumap;': '⊸',
      'nabla;': '∇',
      'Nacute;': 'Ń',
      'nacute;': 'ń',
      'nang;': '∠⃒',
      'nap;': '≉',
      'napE;': '⩰̸',
      'napid;': '≋̸',
      'napos;': 'ŉ',
      'napprox;': '≉',
      'natur;': '♮',
      'natural;': '♮',
      'naturals;': 'ℕ',
      'nbsp;': ' ',
      nbsp: ' ',
      'nbump;': '≎̸',
      'nbumpe;': '≏̸',
      'ncap;': '⩃',
      'Ncaron;': 'Ň',
      'ncaron;': 'ň',
      'Ncedil;': 'Ņ',
      'ncedil;': 'ņ',
      'ncong;': '≇',
      'ncongdot;': '⩭̸',
      'ncup;': '⩂',
      'Ncy;': 'Н',
      'ncy;': 'н',
      'ndash;': '–',
      'ne;': '≠',
      'nearhk;': '⤤',
      'neArr;': '⇗',
      'nearr;': '↗',
      'nearrow;': '↗',
      'nedot;': '≐̸',
      'NegativeMediumSpace;': '​',
      'NegativeThickSpace;': '​',
      'NegativeThinSpace;': '​',
      'NegativeVeryThinSpace;': '​',
      'nequiv;': '≢',
      'nesear;': '⤨',
      'nesim;': '≂̸',
      'NestedGreaterGreater;': '≫',
      'NestedLessLess;': '≪',
      'NewLine;': '\n',
      'nexist;': '∄',
      'nexists;': '∄',
      'Nfr;': '𝔑',
      'nfr;': '𝔫',
      'ngE;': '≧̸',
      'nge;': '≱',
      'ngeq;': '≱',
      'ngeqq;': '≧̸',
      'ngeqslant;': '⩾̸',
      'nges;': '⩾̸',
      'nGg;': '⋙̸',
      'ngsim;': '≵',
      'nGt;': '≫⃒',
      'ngt;': '≯',
      'ngtr;': '≯',
      'nGtv;': '≫̸',
      'nhArr;': '⇎',
      'nharr;': '↮',
      'nhpar;': '⫲',
      'ni;': '∋',
      'nis;': '⋼',
      'nisd;': '⋺',
      'niv;': '∋',
      'NJcy;': 'Њ',
      'njcy;': 'њ',
      'nlArr;': '⇍',
      'nlarr;': '↚',
      'nldr;': '‥',
      'nlE;': '≦̸',
      'nle;': '≰',
      'nLeftarrow;': '⇍',
      'nleftarrow;': '↚',
      'nLeftrightarrow;': '⇎',
      'nleftrightarrow;': '↮',
      'nleq;': '≰',
      'nleqq;': '≦̸',
      'nleqslant;': '⩽̸',
      'nles;': '⩽̸',
      'nless;': '≮',
      'nLl;': '⋘̸',
      'nlsim;': '≴',
      'nLt;': '≪⃒',
      'nlt;': '≮',
      'nltri;': '⋪',
      'nltrie;': '⋬',
      'nLtv;': '≪̸',
      'nmid;': '∤',
      'NoBreak;': '⁠',
      'NonBreakingSpace;': ' ',
      'Nopf;': 'ℕ',
      'nopf;': '𝕟',
      'Not;': '⫬',
      'not;': '¬',
      not: '¬',
      'NotCongruent;': '≢',
      'NotCupCap;': '≭',
      'NotDoubleVerticalBar;': '∦',
      'NotElement;': '∉',
      'NotEqual;': '≠',
      'NotEqualTilde;': '≂̸',
      'NotExists;': '∄',
      'NotGreater;': '≯',
      'NotGreaterEqual;': '≱',
      'NotGreaterFullEqual;': '≧̸',
      'NotGreaterGreater;': '≫̸',
      'NotGreaterLess;': '≹',
      'NotGreaterSlantEqual;': '⩾̸',
      'NotGreaterTilde;': '≵',
      'NotHumpDownHump;': '≎̸',
      'NotHumpEqual;': '≏̸',
      'notin;': '∉',
      'notindot;': '⋵̸',
      'notinE;': '⋹̸',
      'notinva;': '∉',
      'notinvb;': '⋷',
      'notinvc;': '⋶',
      'NotLeftTriangle;': '⋪',
      'NotLeftTriangleBar;': '⧏̸',
      'NotLeftTriangleEqual;': '⋬',
      'NotLess;': '≮',
      'NotLessEqual;': '≰',
      'NotLessGreater;': '≸',
      'NotLessLess;': '≪̸',
      'NotLessSlantEqual;': '⩽̸',
      'NotLessTilde;': '≴',
      'NotNestedGreaterGreater;': '⪢̸',
      'NotNestedLessLess;': '⪡̸',
      'notni;': '∌',
      'notniva;': '∌',
      'notnivb;': '⋾',
      'notnivc;': '⋽',
      'NotPrecedes;': '⊀',
      'NotPrecedesEqual;': '⪯̸',
      'NotPrecedesSlantEqual;': '⋠',
      'NotReverseElement;': '∌',
      'NotRightTriangle;': '⋫',
      'NotRightTriangleBar;': '⧐̸',
      'NotRightTriangleEqual;': '⋭',
      'NotSquareSubset;': '⊏̸',
      'NotSquareSubsetEqual;': '⋢',
      'NotSquareSuperset;': '⊐̸',
      'NotSquareSupersetEqual;': '⋣',
      'NotSubset;': '⊂⃒',
      'NotSubsetEqual;': '⊈',
      'NotSucceeds;': '⊁',
      'NotSucceedsEqual;': '⪰̸',
      'NotSucceedsSlantEqual;': '⋡',
      'NotSucceedsTilde;': '≿̸',
      'NotSuperset;': '⊃⃒',
      'NotSupersetEqual;': '⊉',
      'NotTilde;': '≁',
      'NotTildeEqual;': '≄',
      'NotTildeFullEqual;': '≇',
      'NotTildeTilde;': '≉',
      'NotVerticalBar;': '∤',
      'npar;': '∦',
      'nparallel;': '∦',
      'nparsl;': '⫽⃥',
      'npart;': '∂̸',
      'npolint;': '⨔',
      'npr;': '⊀',
      'nprcue;': '⋠',
      'npre;': '⪯̸',
      'nprec;': '⊀',
      'npreceq;': '⪯̸',
      'nrArr;': '⇏',
      'nrarr;': '↛',
      'nrarrc;': '⤳̸',
      'nrarrw;': '↝̸',
      'nRightarrow;': '⇏',
      'nrightarrow;': '↛',
      'nrtri;': '⋫',
      'nrtrie;': '⋭',
      'nsc;': '⊁',
      'nsccue;': '⋡',
      'nsce;': '⪰̸',
      'Nscr;': '𝒩',
      'nscr;': '𝓃',
      'nshortmid;': '∤',
      'nshortparallel;': '∦',
      'nsim;': '≁',
      'nsime;': '≄',
      'nsimeq;': '≄',
      'nsmid;': '∤',
      'nspar;': '∦',
      'nsqsube;': '⋢',
      'nsqsupe;': '⋣',
      'nsub;': '⊄',
      'nsubE;': '⫅̸',
      'nsube;': '⊈',
      'nsubset;': '⊂⃒',
      'nsubseteq;': '⊈',
      'nsubseteqq;': '⫅̸',
      'nsucc;': '⊁',
      'nsucceq;': '⪰̸',
      'nsup;': '⊅',
      'nsupE;': '⫆̸',
      'nsupe;': '⊉',
      'nsupset;': '⊃⃒',
      'nsupseteq;': '⊉',
      'nsupseteqq;': '⫆̸',
      'ntgl;': '≹',
      'Ntilde;': 'Ñ',
      Ntilde: 'Ñ',
      'ntilde;': 'ñ',
      ntilde: 'ñ',
      'ntlg;': '≸',
      'ntriangleleft;': '⋪',
      'ntrianglelefteq;': '⋬',
      'ntriangleright;': '⋫',
      'ntrianglerighteq;': '⋭',
      'Nu;': 'Ν',
      'nu;': 'ν',
      'num;': '#',
      'numero;': '№',
      'numsp;': ' ',
      'nvap;': '≍⃒',
      'nVDash;': '⊯',
      'nVdash;': '⊮',
      'nvDash;': '⊭',
      'nvdash;': '⊬',
      'nvge;': '≥⃒',
      'nvgt;': '>⃒',
      'nvHarr;': '⤄',
      'nvinfin;': '⧞',
      'nvlArr;': '⤂',
      'nvle;': '≤⃒',
      'nvlt;': '<⃒',
      'nvltrie;': '⊴⃒',
      'nvrArr;': '⤃',
      'nvrtrie;': '⊵⃒',
      'nvsim;': '∼⃒',
      'nwarhk;': '⤣',
      'nwArr;': '⇖',
      'nwarr;': '↖',
      'nwarrow;': '↖',
      'nwnear;': '⤧',
      'Oacute;': 'Ó',
      Oacute: 'Ó',
      'oacute;': 'ó',
      oacute: 'ó',
      'oast;': '⊛',
      'ocir;': '⊚',
      'Ocirc;': 'Ô',
      Ocirc: 'Ô',
      'ocirc;': 'ô',
      ocirc: 'ô',
      'Ocy;': 'О',
      'ocy;': 'о',
      'odash;': '⊝',
      'Odblac;': 'Ő',
      'odblac;': 'ő',
      'odiv;': '⨸',
      'odot;': '⊙',
      'odsold;': '⦼',
      'OElig;': 'Œ',
      'oelig;': 'œ',
      'ofcir;': '⦿',
      'Ofr;': '𝔒',
      'ofr;': '𝔬',
      'ogon;': '˛',
      'Ograve;': 'Ò',
      Ograve: 'Ò',
      'ograve;': 'ò',
      ograve: 'ò',
      'ogt;': '⧁',
      'ohbar;': '⦵',
      'ohm;': 'Ω',
      'oint;': '∮',
      'olarr;': '↺',
      'olcir;': '⦾',
      'olcross;': '⦻',
      'oline;': '‾',
      'olt;': '⧀',
      'Omacr;': 'Ō',
      'omacr;': 'ō',
      'Omega;': 'Ω',
      'omega;': 'ω',
      'Omicron;': 'Ο',
      'omicron;': 'ο',
      'omid;': '⦶',
      'ominus;': '⊖',
      'Oopf;': '𝕆',
      'oopf;': '𝕠',
      'opar;': '⦷',
      'OpenCurlyDoubleQuote;': '“',
      'OpenCurlyQuote;': '‘',
      'operp;': '⦹',
      'oplus;': '⊕',
      'Or;': '⩔',
      'or;': '∨',
      'orarr;': '↻',
      'ord;': '⩝',
      'order;': 'ℴ',
      'orderof;': 'ℴ',
      'ordf;': 'ª',
      ordf: 'ª',
      'ordm;': 'º',
      ordm: 'º',
      'origof;': '⊶',
      'oror;': '⩖',
      'orslope;': '⩗',
      'orv;': '⩛',
      'oS;': 'Ⓢ',
      'Oscr;': '𝒪',
      'oscr;': 'ℴ',
      'Oslash;': 'Ø',
      Oslash: 'Ø',
      'oslash;': 'ø',
      oslash: 'ø',
      'osol;': '⊘',
      'Otilde;': 'Õ',
      Otilde: 'Õ',
      'otilde;': 'õ',
      otilde: 'õ',
      'Otimes;': '⨷',
      'otimes;': '⊗',
      'otimesas;': '⨶',
      'Ouml;': 'Ö',
      Ouml: 'Ö',
      'ouml;': 'ö',
      ouml: 'ö',
      'ovbar;': '⌽',
      'OverBar;': '‾',
      'OverBrace;': '⏞',
      'OverBracket;': '⎴',
      'OverParenthesis;': '⏜',
      'par;': '∥',
      'para;': '¶',
      para: '¶',
      'parallel;': '∥',
      'parsim;': '⫳',
      'parsl;': '⫽',
      'part;': '∂',
      'PartialD;': '∂',
      'Pcy;': 'П',
      'pcy;': 'п',
      'percnt;': '%',
      'period;': '.',
      'permil;': '‰',
      'perp;': '⊥',
      'pertenk;': '‱',
      'Pfr;': '𝔓',
      'pfr;': '𝔭',
      'Phi;': 'Φ',
      'phi;': 'φ',
      'phiv;': 'ϕ',
      'phmmat;': 'ℳ',
      'phone;': '☎',
      'Pi;': 'Π',
      'pi;': 'π',
      'pitchfork;': '⋔',
      'piv;': 'ϖ',
      'planck;': 'ℏ',
      'planckh;': 'ℎ',
      'plankv;': 'ℏ',
      'plus;': '+',
      'plusacir;': '⨣',
      'plusb;': '⊞',
      'pluscir;': '⨢',
      'plusdo;': '∔',
      'plusdu;': '⨥',
      'pluse;': '⩲',
      'PlusMinus;': '±',
      'plusmn;': '±',
      plusmn: '±',
      'plussim;': '⨦',
      'plustwo;': '⨧',
      'pm;': '±',
      'Poincareplane;': 'ℌ',
      'pointint;': '⨕',
      'Popf;': 'ℙ',
      'popf;': '𝕡',
      'pound;': '£',
      pound: '£',
      'Pr;': '⪻',
      'pr;': '≺',
      'prap;': '⪷',
      'prcue;': '≼',
      'prE;': '⪳',
      'pre;': '⪯',
      'prec;': '≺',
      'precapprox;': '⪷',
      'preccurlyeq;': '≼',
      'Precedes;': '≺',
      'PrecedesEqual;': '⪯',
      'PrecedesSlantEqual;': '≼',
      'PrecedesTilde;': '≾',
      'preceq;': '⪯',
      'precnapprox;': '⪹',
      'precneqq;': '⪵',
      'precnsim;': '⋨',
      'precsim;': '≾',
      'Prime;': '″',
      'prime;': '′',
      'primes;': 'ℙ',
      'prnap;': '⪹',
      'prnE;': '⪵',
      'prnsim;': '⋨',
      'prod;': '∏',
      'Product;': '∏',
      'profalar;': '⌮',
      'profline;': '⌒',
      'profsurf;': '⌓',
      'prop;': '∝',
      'Proportion;': '∷',
      'Proportional;': '∝',
      'propto;': '∝',
      'prsim;': '≾',
      'prurel;': '⊰',
      'Pscr;': '𝒫',
      'pscr;': '𝓅',
      'Psi;': 'Ψ',
      'psi;': 'ψ',
      'puncsp;': ' ',
      'Qfr;': '𝔔',
      'qfr;': '𝔮',
      'qint;': '⨌',
      'Qopf;': 'ℚ',
      'qopf;': '𝕢',
      'qprime;': '⁗',
      'Qscr;': '𝒬',
      'qscr;': '𝓆',
      'quaternions;': 'ℍ',
      'quatint;': '⨖',
      'quest;': '?',
      'questeq;': '≟',
      'QUOT;': '"',
      QUOT: '"',
      'quot;': '"',
      quot: '"',
      'rAarr;': '⇛',
      'race;': '∽̱',
      'Racute;': 'Ŕ',
      'racute;': 'ŕ',
      'radic;': '√',
      'raemptyv;': '⦳',
      'Rang;': '⟫',
      'rang;': '⟩',
      'rangd;': '⦒',
      'range;': '⦥',
      'rangle;': '⟩',
      'raquo;': '»',
      raquo: '»',
      'Rarr;': '↠',
      'rArr;': '⇒',
      'rarr;': '→',
      'rarrap;': '⥵',
      'rarrb;': '⇥',
      'rarrbfs;': '⤠',
      'rarrc;': '⤳',
      'rarrfs;': '⤞',
      'rarrhk;': '↪',
      'rarrlp;': '↬',
      'rarrpl;': '⥅',
      'rarrsim;': '⥴',
      'Rarrtl;': '⤖',
      'rarrtl;': '↣',
      'rarrw;': '↝',
      'rAtail;': '⤜',
      'ratail;': '⤚',
      'ratio;': '∶',
      'rationals;': 'ℚ',
      'RBarr;': '⤐',
      'rBarr;': '⤏',
      'rbarr;': '⤍',
      'rbbrk;': '❳',
      'rbrace;': '}',
      'rbrack;': ']',
      'rbrke;': '⦌',
      'rbrksld;': '⦎',
      'rbrkslu;': '⦐',
      'Rcaron;': 'Ř',
      'rcaron;': 'ř',
      'Rcedil;': 'Ŗ',
      'rcedil;': 'ŗ',
      'rceil;': '⌉',
      'rcub;': '}',
      'Rcy;': 'Р',
      'rcy;': 'р',
      'rdca;': '⤷',
      'rdldhar;': '⥩',
      'rdquo;': '”',
      'rdquor;': '”',
      'rdsh;': '↳',
      'Re;': 'ℜ',
      'real;': 'ℜ',
      'realine;': 'ℛ',
      'realpart;': 'ℜ',
      'reals;': 'ℝ',
      'rect;': '▭',
      'REG;': '®',
      REG: '®',
      'reg;': '®',
      reg: '®',
      'ReverseElement;': '∋',
      'ReverseEquilibrium;': '⇋',
      'ReverseUpEquilibrium;': '⥯',
      'rfisht;': '⥽',
      'rfloor;': '⌋',
      'Rfr;': 'ℜ',
      'rfr;': '𝔯',
      'rHar;': '⥤',
      'rhard;': '⇁',
      'rharu;': '⇀',
      'rharul;': '⥬',
      'Rho;': 'Ρ',
      'rho;': 'ρ',
      'rhov;': 'ϱ',
      'RightAngleBracket;': '⟩',
      'RightArrow;': '→',
      'Rightarrow;': '⇒',
      'rightarrow;': '→',
      'RightArrowBar;': '⇥',
      'RightArrowLeftArrow;': '⇄',
      'rightarrowtail;': '↣',
      'RightCeiling;': '⌉',
      'RightDoubleBracket;': '⟧',
      'RightDownTeeVector;': '⥝',
      'RightDownVector;': '⇂',
      'RightDownVectorBar;': '⥕',
      'RightFloor;': '⌋',
      'rightharpoondown;': '⇁',
      'rightharpoonup;': '⇀',
      'rightleftarrows;': '⇄',
      'rightleftharpoons;': '⇌',
      'rightrightarrows;': '⇉',
      'rightsquigarrow;': '↝',
      'RightTee;': '⊢',
      'RightTeeArrow;': '↦',
      'RightTeeVector;': '⥛',
      'rightthreetimes;': '⋌',
      'RightTriangle;': '⊳',
      'RightTriangleBar;': '⧐',
      'RightTriangleEqual;': '⊵',
      'RightUpDownVector;': '⥏',
      'RightUpTeeVector;': '⥜',
      'RightUpVector;': '↾',
      'RightUpVectorBar;': '⥔',
      'RightVector;': '⇀',
      'RightVectorBar;': '⥓',
      'ring;': '˚',
      'risingdotseq;': '≓',
      'rlarr;': '⇄',
      'rlhar;': '⇌',
      'rlm;': '‏',
      'rmoust;': '⎱',
      'rmoustache;': '⎱',
      'rnmid;': '⫮',
      'roang;': '⟭',
      'roarr;': '⇾',
      'robrk;': '⟧',
      'ropar;': '⦆',
      'Ropf;': 'ℝ',
      'ropf;': '𝕣',
      'roplus;': '⨮',
      'rotimes;': '⨵',
      'RoundImplies;': '⥰',
      'rpar;': ')',
      'rpargt;': '⦔',
      'rppolint;': '⨒',
      'rrarr;': '⇉',
      'Rrightarrow;': '⇛',
      'rsaquo;': '›',
      'Rscr;': 'ℛ',
      'rscr;': '𝓇',
      'Rsh;': '↱',
      'rsh;': '↱',
      'rsqb;': ']',
      'rsquo;': '’',
      'rsquor;': '’',
      'rthree;': '⋌',
      'rtimes;': '⋊',
      'rtri;': '▹',
      'rtrie;': '⊵',
      'rtrif;': '▸',
      'rtriltri;': '⧎',
      'RuleDelayed;': '⧴',
      'ruluhar;': '⥨',
      'rx;': '℞',
      'Sacute;': 'Ś',
      'sacute;': 'ś',
      'sbquo;': '‚',
      'Sc;': '⪼',
      'sc;': '≻',
      'scap;': '⪸',
      'Scaron;': 'Š',
      'scaron;': 'š',
      'sccue;': '≽',
      'scE;': '⪴',
      'sce;': '⪰',
      'Scedil;': 'Ş',
      'scedil;': 'ş',
      'Scirc;': 'Ŝ',
      'scirc;': 'ŝ',
      'scnap;': '⪺',
      'scnE;': '⪶',
      'scnsim;': '⋩',
      'scpolint;': '⨓',
      'scsim;': '≿',
      'Scy;': 'С',
      'scy;': 'с',
      'sdot;': '⋅',
      'sdotb;': '⊡',
      'sdote;': '⩦',
      'searhk;': '⤥',
      'seArr;': '⇘',
      'searr;': '↘',
      'searrow;': '↘',
      'sect;': '§',
      sect: '§',
      'semi;': ';',
      'seswar;': '⤩',
      'setminus;': '∖',
      'setmn;': '∖',
      'sext;': '✶',
      'Sfr;': '𝔖',
      'sfr;': '𝔰',
      'sfrown;': '⌢',
      'sharp;': '♯',
      'SHCHcy;': 'Щ',
      'shchcy;': 'щ',
      'SHcy;': 'Ш',
      'shcy;': 'ш',
      'ShortDownArrow;': '↓',
      'ShortLeftArrow;': '←',
      'shortmid;': '∣',
      'shortparallel;': '∥',
      'ShortRightArrow;': '→',
      'ShortUpArrow;': '↑',
      'shy;': '­',
      shy: '­',
      'Sigma;': 'Σ',
      'sigma;': 'σ',
      'sigmaf;': 'ς',
      'sigmav;': 'ς',
      'sim;': '∼',
      'simdot;': '⩪',
      'sime;': '≃',
      'simeq;': '≃',
      'simg;': '⪞',
      'simgE;': '⪠',
      'siml;': '⪝',
      'simlE;': '⪟',
      'simne;': '≆',
      'simplus;': '⨤',
      'simrarr;': '⥲',
      'slarr;': '←',
      'SmallCircle;': '∘',
      'smallsetminus;': '∖',
      'smashp;': '⨳',
      'smeparsl;': '⧤',
      'smid;': '∣',
      'smile;': '⌣',
      'smt;': '⪪',
      'smte;': '⪬',
      'smtes;': '⪬︀',
      'SOFTcy;': 'Ь',
      'softcy;': 'ь',
      'sol;': '/',
      'solb;': '⧄',
      'solbar;': '⌿',
      'Sopf;': '𝕊',
      'sopf;': '𝕤',
      'spades;': '♠',
      'spadesuit;': '♠',
      'spar;': '∥',
      'sqcap;': '⊓',
      'sqcaps;': '⊓︀',
      'sqcup;': '⊔',
      'sqcups;': '⊔︀',
      'Sqrt;': '√',
      'sqsub;': '⊏',
      'sqsube;': '⊑',
      'sqsubset;': '⊏',
      'sqsubseteq;': '⊑',
      'sqsup;': '⊐',
      'sqsupe;': '⊒',
      'sqsupset;': '⊐',
      'sqsupseteq;': '⊒',
      'squ;': '□',
      'Square;': '□',
      'square;': '□',
      'SquareIntersection;': '⊓',
      'SquareSubset;': '⊏',
      'SquareSubsetEqual;': '⊑',
      'SquareSuperset;': '⊐',
      'SquareSupersetEqual;': '⊒',
      'SquareUnion;': '⊔',
      'squarf;': '▪',
      'squf;': '▪',
      'srarr;': '→',
      'Sscr;': '𝒮',
      'sscr;': '𝓈',
      'ssetmn;': '∖',
      'ssmile;': '⌣',
      'sstarf;': '⋆',
      'Star;': '⋆',
      'star;': '☆',
      'starf;': '★',
      'straightepsilon;': 'ϵ',
      'straightphi;': 'ϕ',
      'strns;': '¯',
      'Sub;': '⋐',
      'sub;': '⊂',
      'subdot;': '⪽',
      'subE;': '⫅',
      'sube;': '⊆',
      'subedot;': '⫃',
      'submult;': '⫁',
      'subnE;': '⫋',
      'subne;': '⊊',
      'subplus;': '⪿',
      'subrarr;': '⥹',
      'Subset;': '⋐',
      'subset;': '⊂',
      'subseteq;': '⊆',
      'subseteqq;': '⫅',
      'SubsetEqual;': '⊆',
      'subsetneq;': '⊊',
      'subsetneqq;': '⫋',
      'subsim;': '⫇',
      'subsub;': '⫕',
      'subsup;': '⫓',
      'succ;': '≻',
      'succapprox;': '⪸',
      'succcurlyeq;': '≽',
      'Succeeds;': '≻',
      'SucceedsEqual;': '⪰',
      'SucceedsSlantEqual;': '≽',
      'SucceedsTilde;': '≿',
      'succeq;': '⪰',
      'succnapprox;': '⪺',
      'succneqq;': '⪶',
      'succnsim;': '⋩',
      'succsim;': '≿',
      'SuchThat;': '∋',
      'Sum;': '∑',
      'sum;': '∑',
      'sung;': '♪',
      'Sup;': '⋑',
      'sup;': '⊃',
      'sup1;': '¹',
      sup1: '¹',
      'sup2;': '²',
      sup2: '²',
      'sup3;': '³',
      sup3: '³',
      'supdot;': '⪾',
      'supdsub;': '⫘',
      'supE;': '⫆',
      'supe;': '⊇',
      'supedot;': '⫄',
      'Superset;': '⊃',
      'SupersetEqual;': '⊇',
      'suphsol;': '⟉',
      'suphsub;': '⫗',
      'suplarr;': '⥻',
      'supmult;': '⫂',
      'supnE;': '⫌',
      'supne;': '⊋',
      'supplus;': '⫀',
      'Supset;': '⋑',
      'supset;': '⊃',
      'supseteq;': '⊇',
      'supseteqq;': '⫆',
      'supsetneq;': '⊋',
      'supsetneqq;': '⫌',
      'supsim;': '⫈',
      'supsub;': '⫔',
      'supsup;': '⫖',
      'swarhk;': '⤦',
      'swArr;': '⇙',
      'swarr;': '↙',
      'swarrow;': '↙',
      'swnwar;': '⤪',
      'szlig;': 'ß',
      szlig: 'ß',
      'Tab;': '\t',
      'target;': '⌖',
      'Tau;': 'Τ',
      'tau;': 'τ',
      'tbrk;': '⎴',
      'Tcaron;': 'Ť',
      'tcaron;': 'ť',
      'Tcedil;': 'Ţ',
      'tcedil;': 'ţ',
      'Tcy;': 'Т',
      'tcy;': 'т',
      'tdot;': '⃛',
      'telrec;': '⌕',
      'Tfr;': '𝔗',
      'tfr;': '𝔱',
      'there4;': '∴',
      'Therefore;': '∴',
      'therefore;': '∴',
      'Theta;': 'Θ',
      'theta;': 'θ',
      'thetasym;': 'ϑ',
      'thetav;': 'ϑ',
      'thickapprox;': '≈',
      'thicksim;': '∼',
      'ThickSpace;': '  ',
      'thinsp;': ' ',
      'ThinSpace;': ' ',
      'thkap;': '≈',
      'thksim;': '∼',
      'THORN;': 'Þ',
      THORN: 'Þ',
      'thorn;': 'þ',
      thorn: 'þ',
      'Tilde;': '∼',
      'tilde;': '˜',
      'TildeEqual;': '≃',
      'TildeFullEqual;': '≅',
      'TildeTilde;': '≈',
      'times;': '×',
      times: '×',
      'timesb;': '⊠',
      'timesbar;': '⨱',
      'timesd;': '⨰',
      'tint;': '∭',
      'toea;': '⤨',
      'top;': '⊤',
      'topbot;': '⌶',
      'topcir;': '⫱',
      'Topf;': '𝕋',
      'topf;': '𝕥',
      'topfork;': '⫚',
      'tosa;': '⤩',
      'tprime;': '‴',
      'TRADE;': '™',
      'trade;': '™',
      'triangle;': '▵',
      'triangledown;': '▿',
      'triangleleft;': '◃',
      'trianglelefteq;': '⊴',
      'triangleq;': '≜',
      'triangleright;': '▹',
      'trianglerighteq;': '⊵',
      'tridot;': '◬',
      'trie;': '≜',
      'triminus;': '⨺',
      'TripleDot;': '⃛',
      'triplus;': '⨹',
      'trisb;': '⧍',
      'tritime;': '⨻',
      'trpezium;': '⏢',
      'Tscr;': '𝒯',
      'tscr;': '𝓉',
      'TScy;': 'Ц',
      'tscy;': 'ц',
      'TSHcy;': 'Ћ',
      'tshcy;': 'ћ',
      'Tstrok;': 'Ŧ',
      'tstrok;': 'ŧ',
      'twixt;': '≬',
      'twoheadleftarrow;': '↞',
      'twoheadrightarrow;': '↠',
      'Uacute;': 'Ú',
      Uacute: 'Ú',
      'uacute;': 'ú',
      uacute: 'ú',
      'Uarr;': '↟',
      'uArr;': '⇑',
      'uarr;': '↑',
      'Uarrocir;': '⥉',
      'Ubrcy;': 'Ў',
      'ubrcy;': 'ў',
      'Ubreve;': 'Ŭ',
      'ubreve;': 'ŭ',
      'Ucirc;': 'Û',
      Ucirc: 'Û',
      'ucirc;': 'û',
      ucirc: 'û',
      'Ucy;': 'У',
      'ucy;': 'у',
      'udarr;': '⇅',
      'Udblac;': 'Ű',
      'udblac;': 'ű',
      'udhar;': '⥮',
      'ufisht;': '⥾',
      'Ufr;': '𝔘',
      'ufr;': '𝔲',
      'Ugrave;': 'Ù',
      Ugrave: 'Ù',
      'ugrave;': 'ù',
      ugrave: 'ù',
      'uHar;': '⥣',
      'uharl;': '↿',
      'uharr;': '↾',
      'uhblk;': '▀',
      'ulcorn;': '⌜',
      'ulcorner;': '⌜',
      'ulcrop;': '⌏',
      'ultri;': '◸',
      'Umacr;': 'Ū',
      'umacr;': 'ū',
      'uml;': '¨',
      uml: '¨',
      'UnderBar;': '_',
      'UnderBrace;': '⏟',
      'UnderBracket;': '⎵',
      'UnderParenthesis;': '⏝',
      'Union;': '⋃',
      'UnionPlus;': '⊎',
      'Uogon;': 'Ų',
      'uogon;': 'ų',
      'Uopf;': '𝕌',
      'uopf;': '𝕦',
      'UpArrow;': '↑',
      'Uparrow;': '⇑',
      'uparrow;': '↑',
      'UpArrowBar;': '⤒',
      'UpArrowDownArrow;': '⇅',
      'UpDownArrow;': '↕',
      'Updownarrow;': '⇕',
      'updownarrow;': '↕',
      'UpEquilibrium;': '⥮',
      'upharpoonleft;': '↿',
      'upharpoonright;': '↾',
      'uplus;': '⊎',
      'UpperLeftArrow;': '↖',
      'UpperRightArrow;': '↗',
      'Upsi;': 'ϒ',
      'upsi;': 'υ',
      'upsih;': 'ϒ',
      'Upsilon;': 'Υ',
      'upsilon;': 'υ',
      'UpTee;': '⊥',
      'UpTeeArrow;': '↥',
      'upuparrows;': '⇈',
      'urcorn;': '⌝',
      'urcorner;': '⌝',
      'urcrop;': '⌎',
      'Uring;': 'Ů',
      'uring;': 'ů',
      'urtri;': '◹',
      'Uscr;': '𝒰',
      'uscr;': '𝓊',
      'utdot;': '⋰',
      'Utilde;': 'Ũ',
      'utilde;': 'ũ',
      'utri;': '▵',
      'utrif;': '▴',
      'uuarr;': '⇈',
      'Uuml;': 'Ü',
      Uuml: 'Ü',
      'uuml;': 'ü',
      uuml: 'ü',
      'uwangle;': '⦧',
      'vangrt;': '⦜',
      'varepsilon;': 'ϵ',
      'varkappa;': 'ϰ',
      'varnothing;': '∅',
      'varphi;': 'ϕ',
      'varpi;': 'ϖ',
      'varpropto;': '∝',
      'vArr;': '⇕',
      'varr;': '↕',
      'varrho;': 'ϱ',
      'varsigma;': 'ς',
      'varsubsetneq;': '⊊︀',
      'varsubsetneqq;': '⫋︀',
      'varsupsetneq;': '⊋︀',
      'varsupsetneqq;': '⫌︀',
      'vartheta;': 'ϑ',
      'vartriangleleft;': '⊲',
      'vartriangleright;': '⊳',
      'Vbar;': '⫫',
      'vBar;': '⫨',
      'vBarv;': '⫩',
      'Vcy;': 'В',
      'vcy;': 'в',
      'VDash;': '⊫',
      'Vdash;': '⊩',
      'vDash;': '⊨',
      'vdash;': '⊢',
      'Vdashl;': '⫦',
      'Vee;': '⋁',
      'vee;': '∨',
      'veebar;': '⊻',
      'veeeq;': '≚',
      'vellip;': '⋮',
      'Verbar;': '‖',
      'verbar;': '|',
      'Vert;': '‖',
      'vert;': '|',
      'VerticalBar;': '∣',
      'VerticalLine;': '|',
      'VerticalSeparator;': '❘',
      'VerticalTilde;': '≀',
      'VeryThinSpace;': ' ',
      'Vfr;': '𝔙',
      'vfr;': '𝔳',
      'vltri;': '⊲',
      'vnsub;': '⊂⃒',
      'vnsup;': '⊃⃒',
      'Vopf;': '𝕍',
      'vopf;': '𝕧',
      'vprop;': '∝',
      'vrtri;': '⊳',
      'Vscr;': '𝒱',
      'vscr;': '𝓋',
      'vsubnE;': '⫋︀',
      'vsubne;': '⊊︀',
      'vsupnE;': '⫌︀',
      'vsupne;': '⊋︀',
      'Vvdash;': '⊪',
      'vzigzag;': '⦚',
      'Wcirc;': 'Ŵ',
      'wcirc;': 'ŵ',
      'wedbar;': '⩟',
      'Wedge;': '⋀',
      'wedge;': '∧',
      'wedgeq;': '≙',
      'weierp;': '℘',
      'Wfr;': '𝔚',
      'wfr;': '𝔴',
      'Wopf;': '𝕎',
      'wopf;': '𝕨',
      'wp;': '℘',
      'wr;': '≀',
      'wreath;': '≀',
      'Wscr;': '𝒲',
      'wscr;': '𝓌',
      'xcap;': '⋂',
      'xcirc;': '◯',
      'xcup;': '⋃',
      'xdtri;': '▽',
      'Xfr;': '𝔛',
      'xfr;': '𝔵',
      'xhArr;': '⟺',
      'xharr;': '⟷',
      'Xi;': 'Ξ',
      'xi;': 'ξ',
      'xlArr;': '⟸',
      'xlarr;': '⟵',
      'xmap;': '⟼',
      'xnis;': '⋻',
      'xodot;': '⨀',
      'Xopf;': '𝕏',
      'xopf;': '𝕩',
      'xoplus;': '⨁',
      'xotime;': '⨂',
      'xrArr;': '⟹',
      'xrarr;': '⟶',
      'Xscr;': '𝒳',
      'xscr;': '𝓍',
      'xsqcup;': '⨆',
      'xuplus;': '⨄',
      'xutri;': '△',
      'xvee;': '⋁',
      'xwedge;': '⋀',
      'Yacute;': 'Ý',
      Yacute: 'Ý',
      'yacute;': 'ý',
      yacute: 'ý',
      'YAcy;': 'Я',
      'yacy;': 'я',
      'Ycirc;': 'Ŷ',
      'ycirc;': 'ŷ',
      'Ycy;': 'Ы',
      'ycy;': 'ы',
      'yen;': '¥',
      yen: '¥',
      'Yfr;': '𝔜',
      'yfr;': '𝔶',
      'YIcy;': 'Ї',
      'yicy;': 'ї',
      'Yopf;': '𝕐',
      'yopf;': '𝕪',
      'Yscr;': '𝒴',
      'yscr;': '𝓎',
      'YUcy;': 'Ю',
      'yucy;': 'ю',
      'Yuml;': 'Ÿ',
      'yuml;': 'ÿ',
      yuml: 'ÿ',
      'Zacute;': 'Ź',
      'zacute;': 'ź',
      'Zcaron;': 'Ž',
      'zcaron;': 'ž',
      'Zcy;': 'З',
      'zcy;': 'з',
      'Zdot;': 'Ż',
      'zdot;': 'ż',
      'zeetrf;': 'ℨ',
      'ZeroWidthSpace;': '​',
      'Zeta;': 'Ζ',
      'zeta;': 'ζ',
      'Zfr;': 'ℨ',
      'zfr;': '𝔷',
      'ZHcy;': 'Ж',
      'zhcy;': 'ж',
      'zigrarr;': '⇝',
      'Zopf;': 'ℤ',
      'zopf;': '𝕫',
      'Zscr;': '𝒵',
      'zscr;': '𝓏',
      'zwj;': '‍',
      'zwnj;': '‌',
    };
    function Ve(e, t) {
      if (e.length < t.length) return !1;
      for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    function Ke(e, t) {
      for (var n = ''; t > 0; ) 1 == (1 & t) && (n += e), (e += e), (t >>>= 1);
      return n;
    }
    var Ye = 'a'.charCodeAt(0),
      $e = 'z'.charCodeAt(0),
      Xe = 'A'.charCodeAt(0),
      Je = 'Z'.charCodeAt(0),
      Qe = '0'.charCodeAt(0),
      Ze = '9'.charCodeAt(0);
    function et(e, t) {
      var n = e.charCodeAt(t);
      return (
        (Ye <= n && n <= $e) || (Xe <= n && n <= Je) || (Qe <= n && n <= Ze)
      );
    }
    function tt(e) {
      return void 0 !== e;
    }
    var nt = (function() {
      function e(e, t) {
        var n = this;
        (this.id = e),
          (this._tags = []),
          (this._tagMap = {}),
          (this._valueSetMap = {}),
          (this._tags = t.tags || []),
          (this._globalAttributes = t.globalAttributes || []),
          this._tags.forEach(function(e) {
            n._tagMap[e.name.toLowerCase()] = e;
          }),
          t.valueSets &&
            t.valueSets.forEach(function(e) {
              n._valueSetMap[e.name] = e.values;
            });
      }
      return (
        (e.prototype.isApplicable = function() {
          return !0;
        }),
        (e.prototype.getId = function() {
          return this.id;
        }),
        (e.prototype.provideTags = function() {
          return this._tags;
        }),
        (e.prototype.provideAttributes = function(e) {
          var t = [],
            n = function(e) {
              t.push(e);
            },
            i = this._tagMap[e.toLowerCase()];
          return (
            i && i.attributes.forEach(n), this._globalAttributes.forEach(n), t
          );
        }),
        (e.prototype.provideValues = function(e, t) {
          var n = this,
            i = [];
          t = t.toLowerCase();
          var r = function(e) {
              e.forEach(function(e) {
                e.name.toLowerCase() === t &&
                  (e.values &&
                    e.values.forEach(function(e) {
                      i.push(e);
                    }),
                  e.valueSet &&
                    n._valueSetMap[e.valueSet] &&
                    n._valueSetMap[e.valueSet].forEach(function(e) {
                      i.push(e);
                    }));
              });
            },
            o = this._tagMap[e.toLowerCase()];
          return o ? (r(o.attributes), r(this._globalAttributes), i) : [];
        }),
        e
      );
    })();
    function it(e, t, n) {
      void 0 === t && (t = {});
      var i = { kind: n ? 'markdown' : 'plaintext', value: '' };
      if (e.description && !1 !== t.documentation) {
        var r = (function(e) {
          if (e)
            return 'string' == typeof e
              ? { kind: 'markdown', value: e }
              : { kind: 'markdown', value: e.value };
        })(e.description);
        r && (i.value += r.value);
      }
      if (
        (e.references &&
          e.references.length > 0 &&
          !1 !== t.references &&
          (i.value.length && (i.value += '\n\n'),
          (i.value += n
            ? e.references
                .map(function(e) {
                  return '[' + e.name + '](' + e.url + ')';
                })
                .join(' | ')
            : e.references
                .map(function(e) {
                  return e.name + ': ' + e.url;
                })
                .join('\n'))),
        '' !== i.value)
      )
        return i;
    }
    var rt = function(e, t, n, i) {
        return new (n || (n = Promise))(function(r, o) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function(e) {
                      e(t);
                    })).then(a, s);
          }
          l((i = i.apply(e, t || [])).next());
        });
      },
      ot = function(e, t) {
        var n,
          i,
          r,
          o,
          a = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function() {
              return this;
            }),
          o
        );
        function s(o) {
          return function(s) {
            return (function(o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    i &&
                      (r =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((r = i.return) && r.call(i), 0)
                          : i.next) &&
                      !(r = r.call(i, o[1])).done)
                  )
                    return r;
                  switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                    case 0:
                    case 1:
                      r = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((r = a.trys),
                        (r = r.length > 0 && r[r.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < r[1]) {
                        (a.label = r[1]), (r = o);
                        break;
                      }
                      if (r && a.label < r[2]) {
                        (a.label = r[2]), a.ops.push(o);
                        break;
                      }
                      r[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  n = r = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      },
      at = (function() {
        function e(e) {
          (this.readDirectory = e), (this.atributeCompletions = []);
        }
        return (
          (e.prototype.onHtmlAttributeValue = function(e) {
            (function(e, t) {
              var n = ct[e];
              if (n)
                return 'string' == typeof n ? n === t : -1 !== n.indexOf(t);
              return !1;
            })(e.tag, e.attribute) && this.atributeCompletions.push(e);
          }),
          (e.prototype.computeCompletions = function(e, t) {
            return rt(this, void 0, void 0, function() {
              var n, i, r, o, s, l, h, c, d, u;
              return ot(this, function(p) {
                switch (p.label) {
                  case 0:
                    (n = { items: [], isIncomplete: !1 }),
                      (i = 0),
                      (r = this.atributeCompletions),
                      (p.label = 1);
                  case 1:
                    return i < r.length
                      ? ((o = r[i]),
                        (function(e) {
                          if (Ve(e, 'http') || Ve(e, 'https') || Ve(e, '//'))
                            return !1;
                          return !0;
                        })(
                          (s = (function(e) {
                            return Ve(e, "'") || Ve(e, '"')
                              ? e.slice(1, -1)
                              : e;
                          })(e.getText(o.range))),
                        )
                          ? '.' !== s && '..' !== s
                            ? [3, 2]
                            : ((n.isIncomplete = !0), [3, 4])
                          : [3, 4])
                      : [3, 5];
                  case 2:
                    return (
                      (l = (function(e, t, n) {
                        var i,
                          r = e.lastIndexOf('/');
                        if (-1 === r)
                          i = (function(e, t, n) {
                            var i = ht(e.start, t),
                              r = ht(e.end, n);
                            return a.create(i, r);
                          })(n, 1, -1);
                        else {
                          var o = t.slice(r + 1),
                            s = ht(n.end, -1 - o.length),
                            l = o.indexOf(' '),
                            h = void 0;
                          (h = -1 !== l ? ht(s, l) : ht(n.end, -1)),
                            (i = a.create(s, h));
                        }
                        return i;
                      })(o.value, s, o.range)),
                      [4, this.providePathSuggestions(o.value, l, e, t)]
                    );
                  case 3:
                    for (h = p.sent(), c = 0, d = h; c < d.length; c++)
                      (u = d[c]), n.items.push(u);
                    p.label = 4;
                  case 4:
                    return i++, [3, 1];
                  case 5:
                    return [2, n];
                }
              });
            });
          }),
          (e.prototype.providePathSuggestions = function(e, t, n, i) {
            return rt(this, void 0, void 0, function() {
              var r, o, a, s, l, h, c, d, u;
              return ot(this, function(p) {
                switch (p.label) {
                  case 0:
                    if (
                      ((r = e.substring(0, e.lastIndexOf('/') + 1)),
                      !(o = i.resolveReference(r || '.', n.uri)))
                    )
                      return [3, 4];
                    p.label = 1;
                  case 1:
                    return (
                      p.trys.push([1, 3, , 4]),
                      (a = []),
                      [4, this.readDirectory(o)]
                    );
                  case 2:
                    for (s = p.sent(), l = 0, h = s; l < h.length; l++)
                      (c = h[l]),
                        (d = c[0]),
                        (u = c[1]),
                        d.charCodeAt(0) !== st &&
                          a.push(lt(d, u === _e.Directory, t));
                    return [2, a];
                  case 3:
                    return p.sent(), [3, 4];
                  case 4:
                    return [2, []];
                }
              });
            });
          }),
          e
        );
      })(),
      st = '.'.charCodeAt(0);
    function lt(e, t, n) {
      return t
        ? {
            label: (e += '/'),
            kind: D.Folder,
            textEdit: w.replace(n, e),
            command: {
              title: 'Suggest',
              command: 'editor.action.triggerSuggest',
            },
          }
        : { label: e, kind: D.File, textEdit: w.replace(n, e) };
    }
    function ht(e, t) {
      return o.create(e.line, e.character + t);
    }
    var ct = {
        a: 'href',
        area: 'href',
        body: 'background',
        del: 'cite',
        form: 'action',
        frame: ['src', 'longdesc'],
        img: ['src', 'longdesc'],
        ins: 'cite',
        link: 'href',
        object: 'data',
        q: 'cite',
        script: 'src',
        audio: 'src',
        button: 'formaction',
        command: 'icon',
        embed: 'src',
        html: 'manifest',
        input: ['src', 'formaction'],
        source: 'src',
        track: 'src',
        video: ['src', 'poster'],
      },
      dt = function(e, t, n, i) {
        return new (n || (n = Promise))(function(r, o) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function(e) {
                      e(t);
                    })).then(a, s);
          }
          l((i = i.apply(e, t || [])).next());
        });
      },
      ut = function(e, t) {
        var n,
          i,
          r,
          o,
          a = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function() {
              return this;
            }),
          o
        );
        function s(o) {
          return function(s) {
            return (function(o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    i &&
                      (r =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((r = i.return) && r.call(i), 0)
                          : i.next) &&
                      !(r = r.call(i, o[1])).done)
                  )
                    return r;
                  switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                    case 0:
                    case 1:
                      r = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((r = a.trys),
                        (r = r.length > 0 && r[r.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < r[1]) {
                        (a.label = r[1]), (r = o);
                        break;
                      }
                      if (r && a.label < r[2]) {
                        (a.label = r[2]), a.ops.push(o);
                        break;
                      }
                      r[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  n = r = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      },
      pt = I(),
      mt = (function() {
        function e(e, t) {
          (this.lsOptions = e),
            (this.dataManager = t),
            (this.completionParticipants = []);
        }
        return (
          (e.prototype.setCompletionParticipants = function(e) {
            this.completionParticipants = e || [];
          }),
          (e.prototype.doComplete2 = function(e, t, n, i, r) {
            return dt(this, void 0, void 0, function() {
              var o, a, s, l;
              return ut(this, function(h) {
                switch (h.label) {
                  case 0:
                    if (
                      !this.lsOptions.fileSystemProvider ||
                      !this.lsOptions.fileSystemProvider.readDirectory
                    )
                      return [2, this.doComplete(e, t, n, r)];
                    (o = new at(
                      this.lsOptions.fileSystemProvider.readDirectory,
                    )),
                      (a = this.completionParticipants),
                      (this.completionParticipants = [o].concat(a)),
                      (s = this.doComplete(e, t, n, r)),
                      (h.label = 1);
                  case 1:
                    return (
                      h.trys.push([1, , 3, 4]), [4, o.computeCompletions(e, i)]
                    );
                  case 2:
                    return (
                      (l = h.sent()),
                      [
                        2,
                        {
                          isIncomplete: s.isIncomplete || l.isIncomplete,
                          items: l.items.concat(s.items),
                        },
                      ]
                    );
                  case 3:
                    return (this.completionParticipants = a), [7];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.doComplete = function(e, t, n, i) {
            var r = this._doComplete(e, t, n, i);
            return this.convertCompletionList(r);
          }),
          (e.prototype._doComplete = function(e, t, n, i) {
            var r = { isIncomplete: !1, items: [] },
              s = this.completionParticipants,
              l = this.dataManager.getDataProviders().filter(function(t) {
                return (
                  t.isApplicable(e.languageId) && (!i || !1 !== i[t.getId()])
                );
              }),
              h = this.doesSupportMarkdown(),
              c = e.getText(),
              d = e.offsetAt(t),
              u = n.findNodeBefore(d);
            if (!u) return r;
            var p,
              m = De(c, u.start),
              f = '';
            function g(t, n) {
              return (
                void 0 === n && (n = d),
                t > d && (t = d),
                { start: e.positionAt(t), end: e.positionAt(n) }
              );
            }
            function b(e, t) {
              var n = g(e, t);
              return (
                l.forEach(function(e) {
                  e.provideTags().forEach(function(e) {
                    r.items.push({
                      label: e.name,
                      kind: D.Property,
                      documentation: it(e, void 0, h),
                      textEdit: w.replace(n, e.name),
                      insertTextFormat: P.PlainText,
                    });
                  });
                }),
                r
              );
            }
            function _(e) {
              for (var t = e; t > 0; ) {
                var n = c.charAt(t - 1);
                if ('\n\r'.indexOf(n) >= 0) return c.substring(t, e);
                if (!ft(n)) return null;
                t--;
              }
              return c.substring(0, e);
            }
            function v(e, t, n) {
              void 0 === n && (n = d);
              var i = g(e, n),
                o = gt(c, n, ge.WithinEndTag, fe.EndTagClose) ? '' : '>',
                a = u;
              for (t && (a = a.parent); a; ) {
                var s = a.tag;
                if (s && (!a.closed || (a.endTagStart && a.endTagStart > d))) {
                  var p = {
                      label: '/' + s,
                      kind: D.Property,
                      filterText: '/' + s,
                      textEdit: w.replace(i, '/' + s + o),
                      insertTextFormat: P.PlainText,
                    },
                    m = _(a.start),
                    f = _(e - 1);
                  if (null !== m && null !== f && m !== f) {
                    var b = m + '</' + s + o;
                    (p.textEdit = w.replace(g(e - 1 - f.length), b)),
                      (p.filterText = f + '</' + s);
                  }
                  return r.items.push(p), r;
                }
                a = a.parent;
              }
              return (
                t ||
                  l.forEach(function(e) {
                    e.provideTags().forEach(function(e) {
                      r.items.push({
                        label: '/' + e.name,
                        kind: D.Property,
                        documentation: it(e, void 0, h),
                        filterText: '/' + e.name + o,
                        textEdit: w.replace(i, '/' + e.name + o),
                        insertTextFormat: P.PlainText,
                      });
                    });
                  }),
                r
              );
            }
            function y(t, n) {
              if (i && i.hideAutoCompleteProposals) return r;
              if (!Fe(n)) {
                var o = e.positionAt(t);
                r.items.push({
                  label: '</' + n + '>',
                  kind: D.Property,
                  filterText: '</' + n + '>',
                  textEdit: w.insert(o, '$0</' + n + '>'),
                  insertTextFormat: P.Snippet,
                });
              }
              return r;
            }
            function T(e, t) {
              return b(e, t), v(e, !0, t), r;
            }
            function k(e, t) {
              void 0 === t && (t = d);
              for (var i = d; i < t && '<' !== c[i]; ) i++;
              var o,
                a = c.substring(e, t),
                s = g(e, i),
                p = gt(c, t, ge.AfterAttributeName, fe.DelimiterAssign)
                  ? ''
                  : '="$1"',
                m =
                  ((o = Object.create(null)),
                  u.attributeNames.forEach(function(e) {
                    o[e] = !0;
                  }),
                  o);
              return (
                (m[a] = !1),
                l.forEach(function(e) {
                  e.provideAttributes(f).forEach(function(e) {
                    if (!m[e.name]) {
                      m[e.name] = !0;
                      var t,
                        n = e.name;
                      'v' !== e.valueSet &&
                        p.length &&
                        ((n += p),
                        (e.valueSet || 'style' === e.name) &&
                          (t = {
                            title: 'Suggest',
                            command: 'editor.action.triggerSuggest',
                          })),
                        r.items.push({
                          label: e.name,
                          kind: 'handler' === e.valueSet ? D.Function : D.Value,
                          documentation: it(e, void 0, h),
                          textEdit: w.replace(s, n),
                          insertTextFormat: P.Snippet,
                          command: t,
                        });
                    }
                  });
                }),
                (function(e, t) {
                  var i = {};
                  (i['data-'] = 'data-$1="$2"'),
                    n &&
                      n.roots.forEach(function(e) {
                        return (function e(n) {
                          n.attributeNames.forEach(function(e) {
                            !Ve(e, 'data-') ||
                              i[e] ||
                              t[e] ||
                              (i[e] = e + '="$1"');
                          }),
                            n.children.forEach(function(t) {
                              return e(t);
                            });
                        })(e);
                      });
                  Object.keys(i).forEach(function(t) {
                    return r.items.push({
                      label: t,
                      kind: D.Value,
                      textEdit: w.replace(e, i[t]),
                      insertTextFormat: P.Snippet,
                    });
                  });
                })(s, m),
                r
              );
            }
            function S(n, i) {
              var o, a, u, m;
              if (
                (void 0 === i && (i = d),
                d > n && d <= i && ((m = c[n]), /^["']*$/.test(m)))
              ) {
                var b = n + 1,
                  _ = i;
                i > n && c[i - 1] === c[n] && _--;
                var v = (function(e, t, n) {
                    for (; t > n && !ft(e[t - 1]); ) t--;
                    return t;
                  })(c, d, b),
                  y = (function(e, t, n) {
                    for (; t < n && !ft(e[t]); ) t++;
                    return t;
                  })(c, d, _);
                (o = g(v, y)),
                  (u = d >= b && d <= _ ? c.substring(b, d) : ''),
                  (a = !1);
              } else (o = g(n, i)), (u = c.substring(n, d)), (a = !0);
              if (s.length > 0)
                for (
                  var T = f.toLowerCase(),
                    k = p.toLowerCase(),
                    S = g(n, i),
                    x = 0,
                    L = s;
                  x < L.length;
                  x++
                ) {
                  var E = L[x];
                  E.onHtmlAttributeValue &&
                    E.onHtmlAttributeValue({
                      document: e,
                      position: t,
                      tag: T,
                      attribute: k,
                      value: u,
                      range: S,
                    });
                }
              return (
                l.forEach(function(e) {
                  e.provideValues(f, p).forEach(function(e) {
                    var t = a ? '"' + e.name + '"' : e.name;
                    r.items.push({
                      label: e.name,
                      filterText: t,
                      kind: D.Unit,
                      documentation: it(e, void 0, h),
                      textEdit: w.replace(o, t),
                      insertTextFormat: P.PlainText,
                    });
                  });
                }),
                C(),
                r
              );
            }
            function x(e) {
              return d === m.getTokenEnd() &&
                (A = m.scan()) === e &&
                m.getTokenOffset() === d
                ? m.getTokenEnd()
                : d;
            }
            function L() {
              for (var n = 0, i = s; n < i.length; n++) {
                var r = i[n];
                r.onHtmlContent &&
                  r.onHtmlContent({ document: e, position: t });
              }
              return C();
            }
            function C() {
              for (
                var e, n, i, s = d - 1, l = t.character;
                s >= 0 && et(c, s);

              )
                s--, l--;
              if (s >= 0 && '&' === c[s]) {
                var h = a.create(o.create(t.line, l - 1), t);
                for (var u in Ge)
                  if (
                    ((n = ';'),
                    (i = void 0),
                    (i = (e = u).length - n.length) > 0
                      ? e.lastIndexOf(n) === i
                      : 0 === i && e === n)
                  ) {
                    var p = '&' + u;
                    r.items.push({
                      label: p,
                      kind: D.Keyword,
                      documentation: pt(
                        'entity.propose',
                        "Character entity representing '" + Ge[u] + "'",
                      ),
                      textEdit: w.replace(h, p),
                      insertTextFormat: P.PlainText,
                    });
                  }
              }
              return r;
            }
            for (
              var E, A = m.scan();
              A !== fe.EOS && m.getTokenOffset() <= d;

            ) {
              switch (A) {
                case fe.StartTagOpen:
                  if (m.getTokenEnd() === d) {
                    var M = x(fe.StartTag);
                    return (
                      0 === t.line &&
                        ((E = void 0),
                        (E = g(d, M)),
                        r.items.push({
                          label: '!DOCTYPE',
                          kind: D.Property,
                          documentation: 'A preamble for an HTML document.',
                          textEdit: w.replace(E, '!DOCTYPE html>'),
                          insertTextFormat: P.PlainText,
                        })),
                      T(d, M)
                    );
                  }
                  break;
                case fe.StartTag:
                  if (m.getTokenOffset() <= d && d <= m.getTokenEnd())
                    return b(m.getTokenOffset(), m.getTokenEnd());
                  f = m.getTokenText();
                  break;
                case fe.AttributeName:
                  if (m.getTokenOffset() <= d && d <= m.getTokenEnd())
                    return k(m.getTokenOffset(), m.getTokenEnd());
                  p = m.getTokenText();
                  break;
                case fe.DelimiterAssign:
                  if (m.getTokenEnd() === d) {
                    M = x(fe.AttributeValue);
                    return S(d, M);
                  }
                  break;
                case fe.AttributeValue:
                  if (m.getTokenOffset() <= d && d <= m.getTokenEnd())
                    return S(m.getTokenOffset(), m.getTokenEnd());
                  break;
                case fe.Whitespace:
                  if (d <= m.getTokenEnd())
                    switch (m.getScannerState()) {
                      case ge.AfterOpeningStartTag:
                        return T(m.getTokenOffset(), x(fe.StartTag));
                      case ge.WithinTag:
                      case ge.AfterAttributeName:
                        return k(m.getTokenEnd());
                      case ge.BeforeAttributeValue:
                        return S(m.getTokenEnd());
                      case ge.AfterOpeningEndTag:
                        return v(m.getTokenOffset() - 1, !1);
                      case ge.WithinContent:
                        return L();
                    }
                  break;
                case fe.EndTagOpen:
                  if (d <= m.getTokenEnd())
                    return v(m.getTokenOffset() + 1, !1, x(fe.EndTag));
                  break;
                case fe.EndTag:
                  if (d <= m.getTokenEnd())
                    for (var R = m.getTokenOffset() - 1; R >= 0; ) {
                      var I = c.charAt(R);
                      if ('/' === I) return v(R, !1, m.getTokenEnd());
                      if (!ft(I)) break;
                      R--;
                    }
                  break;
                case fe.StartTagClose:
                  if (d <= m.getTokenEnd() && f) return y(m.getTokenEnd(), f);
                  break;
                case fe.Content:
                  if (d <= m.getTokenEnd()) return L();
                  break;
                default:
                  if (d <= m.getTokenEnd()) return r;
              }
              A = m.scan();
            }
            return r;
          }),
          (e.prototype.doTagComplete = function(e, t, n) {
            var i = e.offsetAt(t);
            if (i <= 0) return null;
            var r = e.getText().charAt(i - 1);
            if ('>' === r) {
              if (
                (a = n.findNodeBefore(i)) &&
                a.tag &&
                !Fe(a.tag) &&
                a.start < i &&
                (!a.endTagStart || a.endTagStart > i)
              )
                for (
                  var o = (s = De(e.getText(), a.start)).scan();
                  o !== fe.EOS && s.getTokenEnd() <= i;

                ) {
                  if (o === fe.StartTagClose && s.getTokenEnd() === i)
                    return '$0</' + a.tag + '>';
                  o = s.scan();
                }
            } else if ('/' === r) {
              for (
                var a = n.findNodeBefore(i);
                a && a.closed && !(a.endTagStart && a.endTagStart > i);

              )
                a = a.parent;
              if (a && a.tag) {
                var s;
                for (
                  o = (s = De(e.getText(), a.start)).scan();
                  o !== fe.EOS && s.getTokenEnd() <= i;

                ) {
                  if (o === fe.EndTagOpen && s.getTokenEnd() === i)
                    return a.tag + '>';
                  o = s.scan();
                }
              }
            }
            return null;
          }),
          (e.prototype.convertCompletionList = function(e) {
            return (
              this.doesSupportMarkdown() ||
                e.items.forEach(function(e) {
                  e.documentation &&
                    'string' != typeof e.documentation &&
                    (e.documentation = {
                      kind: 'plaintext',
                      value: e.documentation.value,
                    });
                }),
              e
            );
          }),
          (e.prototype.doesSupportMarkdown = function() {
            var e, t, n;
            if (!tt(this.supportsMarkdown)) {
              if (!tt(this.lsOptions.clientCapabilities))
                return (this.supportsMarkdown = !0), this.supportsMarkdown;
              var i =
                null ===
                  (n =
                    null ===
                      (t =
                        null ===
                          (e = this.lsOptions.clientCapabilities
                            .textDocument) || void 0 === e
                          ? void 0
                          : e.completion) || void 0 === t
                      ? void 0
                      : t.completionItem) || void 0 === n
                  ? void 0
                  : n.documentationFormat;
              this.supportsMarkdown =
                Array.isArray(i) && -1 !== i.indexOf(W.Markdown);
            }
            return this.supportsMarkdown;
          }),
          e
        );
      })();
    function ft(e) {
      return /^\s*$/.test(e);
    }
    function gt(e, t, n, i) {
      for (var r = De(e, t, n), o = r.scan(); o === fe.Whitespace; )
        o = r.scan();
      return o === i;
    }
    var bt,
      _t = I(),
      vt = (function() {
        function e(e, t) {
          (this.lsOptions = e), (this.dataManager = t);
        }
        return (
          (e.prototype.doHover = function(e, t, n, i) {
            var r = this.convertContents.bind(this),
              s = this.doesSupportMarkdown(),
              l = e.offsetAt(t),
              h = n.findNodeAt(l),
              c = e.getText();
            if (!h || !h.tag) return null;
            var d = this.dataManager.getDataProviders().filter(function(t) {
              return t.isApplicable(e.languageId);
            });
            function u(e, t, n) {
              for (
                var o = function(n) {
                    var o = null;
                    if (
                      (n.provideTags().forEach(function(n) {
                        if (n.name.toLowerCase() === e.toLowerCase()) {
                          var r = it(n, i, s);
                          r ||
                            (r = {
                              kind: s ? 'markdown' : 'plaintext',
                              value: '',
                            }),
                            (o = { contents: r, range: t });
                        }
                      }),
                      o)
                    )
                      return (o.contents = r(o.contents)), { value: o };
                  },
                  a = 0,
                  l = d;
                a < l.length;
                a++
              ) {
                var h = o(l[a]);
                if ('object' == typeof h) return h.value;
              }
              return null;
            }
            function p(t, n) {
              for (
                var i = De(e.getText(), n), r = i.scan();
                r !== fe.EOS &&
                (i.getTokenEnd() < l || (i.getTokenEnd() === l && r !== t));

              )
                r = i.scan();
              return r === t && l <= i.getTokenEnd()
                ? {
                    start: e.positionAt(i.getTokenOffset()),
                    end: e.positionAt(i.getTokenEnd()),
                  }
                : null;
            }
            if (h.endTagStart && l >= h.endTagStart) {
              var m = p(fe.EndTag, h.endTagStart);
              return m ? u(h.tag, m) : null;
            }
            var f = p(fe.StartTag, h.start);
            if (f) return u(h.tag, f);
            var g = p(fe.AttributeName, h.start);
            if (g)
              return (function(e, t, n) {
                for (
                  var o = function(o) {
                      var a = null;
                      if (
                        (o.provideAttributes(e).forEach(function(e) {
                          if (t === e.name && e.description) {
                            var r = it(e, i, s);
                            a = r ? { contents: r, range: n } : null;
                          }
                        }),
                        a)
                      )
                        return (a.contents = r(a.contents)), { value: a };
                    },
                    a = 0,
                    l = d;
                  a < l.length;
                  a++
                ) {
                  var h = o(l[a]);
                  if ('object' == typeof h) return h.value;
                }
                return null;
              })((v = h.tag), e.getText(g), g);
            var b = (function() {
              for (var e = l - 1, n = t.character; e >= 0 && et(c, e); )
                e--, n--;
              for (var i = e + 1, r = n; et(c, i); ) i++, r++;
              if (e >= 0 && '&' === c[e]) {
                return ';' === c[i]
                  ? a.create(o.create(t.line, n), o.create(t.line, r + 1))
                  : a.create(o.create(t.line, n), o.create(t.line, r));
              }
              return null;
            })();
            if (b)
              return (function(e, t) {
                var n = (function(e) {
                  var t = l - 1,
                    n = '&';
                  for (; t >= 0 && et(e, t); ) t--;
                  t += 1;
                  for (; et(e, t); ) (n += e[t]), (t += 1);
                  return (n += ';');
                })(e);
                for (var i in Ge) {
                  var o = null;
                  if (n === '&' + i) {
                    var a = Ge[i]
                        .charCodeAt(0)
                        .toString(16)
                        .toUpperCase(),
                      s = 'U+';
                    if (a.length < 4)
                      for (var h = 4 - a.length, c = 0; c < h; )
                        (s += '0'), (c += 1);
                    s += a;
                    var d = _t(
                      'entity.propose',
                      "Character entity representing '" +
                        Ge[i] +
                        "', unicode equivalent '" +
                        s +
                        "'",
                    );
                    o = d ? { contents: d, range: t } : null;
                  }
                  if (o) return (o.contents = r(o.contents)), o;
                }
                return null;
              })(c, b);
            var _ = p(fe.AttributeValue, h.start);
            if (_) {
              var v = h.tag,
                w = (function(e) {
                  if (e.length <= 1) return e.replace(/['"]/, '');
                  ("'" !== e[0] && '"' !== e[0]) || (e = e.slice(1));
                  ("'" !== e[e.length - 1] && '"' !== e[e.length - 1]) ||
                    (e = e.slice(0, -1));
                  return e;
                })(e.getText(_)),
                y = (function(t, n) {
                  for (
                    var i = De(e.getText(), t), r = i.scan(), o = void 0;
                    r !== fe.EOS && i.getTokenEnd() <= n;

                  )
                    (r = i.scan()) === fe.AttributeName &&
                      (o = i.getTokenText());
                  return o;
                })(h.start, e.offsetAt(_.start));
              if (y)
                return (function(e, t, n, o) {
                  for (
                    var a = function(a) {
                        var l = null;
                        if (
                          (a.provideValues(e, t).forEach(function(e) {
                            if (n === e.name && e.description) {
                              var t = it(e, i, s);
                              l = t ? { contents: t, range: o } : null;
                            }
                          }),
                          l)
                        )
                          return (l.contents = r(l.contents)), { value: l };
                      },
                      l = 0,
                      h = d;
                    l < h.length;
                    l++
                  ) {
                    var c = a(h[l]);
                    if ('object' == typeof c) return c.value;
                  }
                  return null;
                })(v, y, w, _);
            }
            return null;
          }),
          (e.prototype.convertContents = function(e) {
            if (!this.doesSupportMarkdown()) {
              if ('string' == typeof e) return e;
              if ('kind' in e) return { kind: 'plaintext', value: e.value };
              if (!Array.isArray(e)) return e.value;
              e.map(function(e) {
                return 'string' == typeof e ? e : e.value;
              });
            }
            return e;
          }),
          (e.prototype.doesSupportMarkdown = function() {
            var e, t, n;
            if (!tt(this.supportsMarkdown)) {
              if (!tt(this.lsOptions.clientCapabilities))
                return (this.supportsMarkdown = !0), this.supportsMarkdown;
              var i =
                null ===
                  (n =
                    null ===
                      (t =
                        null === (e = this.lsOptions.clientCapabilities) ||
                        void 0 === e
                          ? void 0
                          : e.textDocument) || void 0 === t
                      ? void 0
                      : t.hover) || void 0 === n
                  ? void 0
                  : n.contentFormat;
              this.supportsMarkdown =
                Array.isArray(i) && -1 !== i.indexOf(W.Markdown);
            }
            return this.supportsMarkdown;
          }),
          e
        );
      })();
    function wt(e, t) {
      return e;
    }
    !(function() {
      var e = [
          ,
          ,
          function(e) {
            function t(e) {
              (this.__parent = e),
                (this.__character_count = 0),
                (this.__indent_count = -1),
                (this.__alignment_count = 0),
                (this.__wrap_point_index = 0),
                (this.__wrap_point_character_count = 0),
                (this.__wrap_point_indent_count = -1),
                (this.__wrap_point_alignment_count = 0),
                (this.__items = []);
            }
            function n(e, t) {
              (this.__cache = ['']),
                (this.__indent_size = e.indent_size),
                (this.__indent_string = e.indent_char),
                e.indent_with_tabs ||
                  (this.__indent_string = new Array(e.indent_size + 1).join(
                    e.indent_char,
                  )),
                (t = t || ''),
                e.indent_level > 0 &&
                  (t = new Array(e.indent_level + 1).join(
                    this.__indent_string,
                  )),
                (this.__base_string = t),
                (this.__base_string_length = t.length);
            }
            function i(e, i) {
              (this.__indent_cache = new n(e, i)),
                (this.raw = !1),
                (this._end_with_newline = e.end_with_newline),
                (this.indent_size = e.indent_size),
                (this.wrap_line_length = e.wrap_line_length),
                (this.indent_empty_lines = e.indent_empty_lines),
                (this.__lines = []),
                (this.previous_line = null),
                (this.current_line = null),
                (this.next_line = new t(this)),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = !1),
                this.__add_outputline();
            }
            (t.prototype.clone_empty = function() {
              var e = new t(this.__parent);
              return (
                e.set_indent(this.__indent_count, this.__alignment_count), e
              );
            }),
              (t.prototype.item = function(e) {
                return e < 0
                  ? this.__items[this.__items.length + e]
                  : this.__items[e];
              }),
              (t.prototype.has_match = function(e) {
                for (var t = this.__items.length - 1; t >= 0; t--)
                  if (this.__items[t].match(e)) return !0;
                return !1;
              }),
              (t.prototype.set_indent = function(e, t) {
                this.is_empty() &&
                  ((this.__indent_count = e || 0),
                  (this.__alignment_count = t || 0),
                  (this.__character_count = this.__parent.get_indent_size(
                    this.__indent_count,
                    this.__alignment_count,
                  )));
              }),
              (t.prototype._set_wrap_point = function() {
                this.__parent.wrap_line_length &&
                  ((this.__wrap_point_index = this.__items.length),
                  (this.__wrap_point_character_count = this.__character_count),
                  (this.__wrap_point_indent_count = this.__parent.next_line.__indent_count),
                  (this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count));
              }),
              (t.prototype._should_wrap = function() {
                return (
                  this.__wrap_point_index &&
                  this.__character_count > this.__parent.wrap_line_length &&
                  this.__wrap_point_character_count >
                    this.__parent.next_line.__character_count
                );
              }),
              (t.prototype._allow_wrap = function() {
                if (this._should_wrap()) {
                  this.__parent.add_new_line();
                  var e = this.__parent.current_line;
                  return (
                    e.set_indent(
                      this.__wrap_point_indent_count,
                      this.__wrap_point_alignment_count,
                    ),
                    (e.__items = this.__items.slice(this.__wrap_point_index)),
                    (this.__items = this.__items.slice(
                      0,
                      this.__wrap_point_index,
                    )),
                    (e.__character_count +=
                      this.__character_count -
                      this.__wrap_point_character_count),
                    (this.__character_count = this.__wrap_point_character_count),
                    ' ' === e.__items[0] &&
                      (e.__items.splice(0, 1), (e.__character_count -= 1)),
                    !0
                  );
                }
                return !1;
              }),
              (t.prototype.is_empty = function() {
                return 0 === this.__items.length;
              }),
              (t.prototype.last = function() {
                return this.is_empty()
                  ? null
                  : this.__items[this.__items.length - 1];
              }),
              (t.prototype.push = function(e) {
                this.__items.push(e);
                var t = e.lastIndexOf('\n');
                -1 !== t
                  ? (this.__character_count = e.length - t)
                  : (this.__character_count += e.length);
              }),
              (t.prototype.pop = function() {
                var e = null;
                return (
                  this.is_empty() ||
                    ((e = this.__items.pop()),
                    (this.__character_count -= e.length)),
                  e
                );
              }),
              (t.prototype._remove_indent = function() {
                this.__indent_count > 0 &&
                  ((this.__indent_count -= 1),
                  (this.__character_count -= this.__parent.indent_size));
              }),
              (t.prototype._remove_wrap_indent = function() {
                this.__wrap_point_indent_count > 0 &&
                  (this.__wrap_point_indent_count -= 1);
              }),
              (t.prototype.trim = function() {
                for (; ' ' === this.last(); )
                  this.__items.pop(), (this.__character_count -= 1);
              }),
              (t.prototype.toString = function() {
                var e = '';
                return (
                  this.is_empty()
                    ? this.__parent.indent_empty_lines &&
                      (e = this.__parent.get_indent_string(this.__indent_count))
                    : ((e = this.__parent.get_indent_string(
                        this.__indent_count,
                        this.__alignment_count,
                      )),
                      (e += this.__items.join(''))),
                  e
                );
              }),
              (n.prototype.get_indent_size = function(e, t) {
                var n = this.__base_string_length;
                return (
                  (t = t || 0),
                  e < 0 && (n = 0),
                  (n += e * this.__indent_size),
                  (n += t)
                );
              }),
              (n.prototype.get_indent_string = function(e, t) {
                var n = this.__base_string;
                return (
                  (t = t || 0),
                  e < 0 && ((e = 0), (n = '')),
                  (t += e * this.__indent_size),
                  this.__ensure_cache(t),
                  (n += this.__cache[t])
                );
              }),
              (n.prototype.__ensure_cache = function(e) {
                for (; e >= this.__cache.length; ) this.__add_column();
              }),
              (n.prototype.__add_column = function() {
                var e = this.__cache.length,
                  t = 0,
                  n = '';
                this.__indent_size &&
                  e >= this.__indent_size &&
                  ((e -=
                    (t = Math.floor(e / this.__indent_size)) *
                    this.__indent_size),
                  (n = new Array(t + 1).join(this.__indent_string))),
                  e && (n += new Array(e + 1).join(' ')),
                  this.__cache.push(n);
              }),
              (i.prototype.__add_outputline = function() {
                (this.previous_line = this.current_line),
                  (this.current_line = this.next_line.clone_empty()),
                  this.__lines.push(this.current_line);
              }),
              (i.prototype.get_line_number = function() {
                return this.__lines.length;
              }),
              (i.prototype.get_indent_string = function(e, t) {
                return this.__indent_cache.get_indent_string(e, t);
              }),
              (i.prototype.get_indent_size = function(e, t) {
                return this.__indent_cache.get_indent_size(e, t);
              }),
              (i.prototype.is_empty = function() {
                return !this.previous_line && this.current_line.is_empty();
              }),
              (i.prototype.add_new_line = function(e) {
                return (
                  !(this.is_empty() || (!e && this.just_added_newline())) &&
                  (this.raw || this.__add_outputline(), !0)
                );
              }),
              (i.prototype.get_code = function(e) {
                this.trim(!0);
                var t = this.current_line.pop();
                t &&
                  ('\n' === t[t.length - 1] && (t = t.replace(/\n+$/g, '')),
                  this.current_line.push(t)),
                  this._end_with_newline && this.__add_outputline();
                var n = this.__lines.join('\n');
                return '\n' !== e && (n = n.replace(/[\n]/g, e)), n;
              }),
              (i.prototype.set_wrap_point = function() {
                this.current_line._set_wrap_point();
              }),
              (i.prototype.set_indent = function(e, t) {
                return (
                  (e = e || 0),
                  (t = t || 0),
                  this.next_line.set_indent(e, t),
                  this.__lines.length > 1
                    ? (this.current_line.set_indent(e, t), !0)
                    : (this.current_line.set_indent(), !1)
                );
              }),
              (i.prototype.add_raw_token = function(e) {
                for (var t = 0; t < e.newlines; t++) this.__add_outputline();
                this.current_line.set_indent(-1),
                  this.current_line.push(e.whitespace_before),
                  this.current_line.push(e.text),
                  (this.space_before_token = !1),
                  (this.non_breaking_space = !1),
                  (this.previous_token_wrapped = !1);
              }),
              (i.prototype.add_token = function(e) {
                this.__add_space_before_token(),
                  this.current_line.push(e),
                  (this.space_before_token = !1),
                  (this.non_breaking_space = !1),
                  (this.previous_token_wrapped = this.current_line._allow_wrap());
              }),
              (i.prototype.__add_space_before_token = function() {
                this.space_before_token &&
                  !this.just_added_newline() &&
                  (this.non_breaking_space || this.set_wrap_point(),
                  this.current_line.push(' '));
              }),
              (i.prototype.remove_indent = function(e) {
                for (var t = this.__lines.length; e < t; )
                  this.__lines[e]._remove_indent(), e++;
                this.current_line._remove_wrap_indent();
              }),
              (i.prototype.trim = function(e) {
                for (
                  e = void 0 !== e && e, this.current_line.trim();
                  e && this.__lines.length > 1 && this.current_line.is_empty();

                )
                  this.__lines.pop(),
                    (this.current_line = this.__lines[this.__lines.length - 1]),
                    this.current_line.trim();
                this.previous_line =
                  this.__lines.length > 1
                    ? this.__lines[this.__lines.length - 2]
                    : null;
              }),
              (i.prototype.just_added_newline = function() {
                return this.current_line.is_empty();
              }),
              (i.prototype.just_added_blankline = function() {
                return (
                  this.is_empty() ||
                  (this.current_line.is_empty() &&
                    this.previous_line.is_empty())
                );
              }),
              (i.prototype.ensure_empty_line_above = function(e, n) {
                for (var i = this.__lines.length - 2; i >= 0; ) {
                  var r = this.__lines[i];
                  if (r.is_empty()) break;
                  if (0 !== r.item(0).indexOf(e) && r.item(-1) !== n) {
                    this.__lines.splice(i + 1, 0, new t(this)),
                      (this.previous_line = this.__lines[
                        this.__lines.length - 2
                      ]);
                    break;
                  }
                  i--;
                }
              }),
              (e.exports.Output = i);
          },
          ,
          ,
          ,
          function(e) {
            function t(e, t) {
              (this.raw_options = n(e, t)),
                (this.disabled = this._get_boolean('disabled')),
                (this.eol = this._get_characters('eol', 'auto')),
                (this.end_with_newline = this._get_boolean('end_with_newline')),
                (this.indent_size = this._get_number('indent_size', 4)),
                (this.indent_char = this._get_characters('indent_char', ' ')),
                (this.indent_level = this._get_number('indent_level')),
                (this.preserve_newlines = this._get_boolean(
                  'preserve_newlines',
                  !0,
                )),
                (this.max_preserve_newlines = this._get_number(
                  'max_preserve_newlines',
                  32786,
                )),
                this.preserve_newlines || (this.max_preserve_newlines = 0),
                (this.indent_with_tabs = this._get_boolean(
                  'indent_with_tabs',
                  '\t' === this.indent_char,
                )),
                this.indent_with_tabs &&
                  ((this.indent_char = '\t'),
                  1 === this.indent_size && (this.indent_size = 4)),
                (this.wrap_line_length = this._get_number(
                  'wrap_line_length',
                  this._get_number('max_char'),
                )),
                (this.indent_empty_lines = this._get_boolean(
                  'indent_empty_lines',
                )),
                (this.templating = this._get_selection_list(
                  'templating',
                  [
                    'auto',
                    'none',
                    'django',
                    'erb',
                    'handlebars',
                    'php',
                    'smarty',
                  ],
                  ['auto'],
                ));
            }
            function n(e, t) {
              var n,
                r = {};
              for (n in (e = i(e))) n !== t && (r[n] = e[n]);
              if (t && e[t]) for (n in e[t]) r[n] = e[t][n];
              return r;
            }
            function i(e) {
              var t,
                n = {};
              for (t in e) {
                n[t.replace(/-/g, '_')] = e[t];
              }
              return n;
            }
            (t.prototype._get_array = function(e, t) {
              var n = this.raw_options[e],
                i = t || [];
              return (
                'object' == typeof n
                  ? null !== n &&
                    'function' == typeof n.concat &&
                    (i = n.concat())
                  : 'string' == typeof n && (i = n.split(/[^a-zA-Z0-9_\/\-]+/)),
                i
              );
            }),
              (t.prototype._get_boolean = function(e, t) {
                var n = this.raw_options[e];
                return void 0 === n ? !!t : !!n;
              }),
              (t.prototype._get_characters = function(e, t) {
                var n = this.raw_options[e],
                  i = t || '';
                return (
                  'string' == typeof n &&
                    (i = n
                      .replace(/\\r/, '\r')
                      .replace(/\\n/, '\n')
                      .replace(/\\t/, '\t')),
                  i
                );
              }),
              (t.prototype._get_number = function(e, t) {
                var n = this.raw_options[e];
                (t = parseInt(t, 10)), isNaN(t) && (t = 0);
                var i = parseInt(n, 10);
                return isNaN(i) && (i = t), i;
              }),
              (t.prototype._get_selection = function(e, t, n) {
                var i = this._get_selection_list(e, t, n);
                if (1 !== i.length)
                  throw new Error(
                    "Invalid Option Value: The option '" +
                      e +
                      "' can only be one of the following values:\n" +
                      t +
                      "\nYou passed in: '" +
                      this.raw_options[e] +
                      "'",
                  );
                return i[0];
              }),
              (t.prototype._get_selection_list = function(e, t, n) {
                if (!t || 0 === t.length)
                  throw new Error('Selection list cannot be empty.');
                if (((n = n || [t[0]]), !this._is_valid_selection(n, t)))
                  throw new Error('Invalid Default Value!');
                var i = this._get_array(e, n);
                if (!this._is_valid_selection(i, t))
                  throw new Error(
                    "Invalid Option Value: The option '" +
                      e +
                      "' can contain only the following values:\n" +
                      t +
                      "\nYou passed in: '" +
                      this.raw_options[e] +
                      "'",
                  );
                return i;
              }),
              (t.prototype._is_valid_selection = function(e, t) {
                return (
                  e.length &&
                  t.length &&
                  !e.some(function(e) {
                    return -1 === t.indexOf(e);
                  })
                );
              }),
              (e.exports.Options = t),
              (e.exports.normalizeOpts = i),
              (e.exports.mergeOpts = n);
          },
          ,
          function(e) {
            var t = RegExp.prototype.hasOwnProperty('sticky');
            function n(e) {
              (this.__input = e || ''),
                (this.__input_length = this.__input.length),
                (this.__position = 0);
            }
            (n.prototype.restart = function() {
              this.__position = 0;
            }),
              (n.prototype.back = function() {
                this.__position > 0 && (this.__position -= 1);
              }),
              (n.prototype.hasNext = function() {
                return this.__position < this.__input_length;
              }),
              (n.prototype.next = function() {
                var e = null;
                return (
                  this.hasNext() &&
                    ((e = this.__input.charAt(this.__position)),
                    (this.__position += 1)),
                  e
                );
              }),
              (n.prototype.peek = function(e) {
                var t = null;
                return (
                  (e = e || 0),
                  (e += this.__position) >= 0 &&
                    e < this.__input_length &&
                    (t = this.__input.charAt(e)),
                  t
                );
              }),
              (n.prototype.__match = function(e, n) {
                e.lastIndex = n;
                var i = e.exec(this.__input);
                return (
                  !i || (t && e.sticky) || (i.index !== n && (i = null)), i
                );
              }),
              (n.prototype.test = function(e, t) {
                return (
                  (t = t || 0),
                  (t += this.__position) >= 0 &&
                    t < this.__input_length &&
                    !!this.__match(e, t)
                );
              }),
              (n.prototype.testChar = function(e, t) {
                var n = this.peek(t);
                return (e.lastIndex = 0), null !== n && e.test(n);
              }),
              (n.prototype.match = function(e) {
                var t = this.__match(e, this.__position);
                return t ? (this.__position += t[0].length) : (t = null), t;
              }),
              (n.prototype.read = function(e, t, n) {
                var i,
                  r = '';
                return (
                  e && (i = this.match(e)) && (r += i[0]),
                  !t || (!i && e) || (r += this.readUntil(t, n)),
                  r
                );
              }),
              (n.prototype.readUntil = function(e, t) {
                var n,
                  i = this.__position;
                e.lastIndex = this.__position;
                var r = e.exec(this.__input);
                return (
                  r
                    ? ((i = r.index), t && (i += r[0].length))
                    : (i = this.__input_length),
                  (n = this.__input.substring(this.__position, i)),
                  (this.__position = i),
                  n
                );
              }),
              (n.prototype.readUntilAfter = function(e) {
                return this.readUntil(e, !0);
              }),
              (n.prototype.get_regexp = function(e, n) {
                var i = null,
                  r = 'g';
                return (
                  n && t && (r = 'y'),
                  'string' == typeof e && '' !== e
                    ? (i = new RegExp(e, r))
                    : e && (i = new RegExp(e.source, r)),
                  i
                );
              }),
              (n.prototype.get_literal_regexp = function(e) {
                return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
              }),
              (n.prototype.peekUntilAfter = function(e) {
                var t = this.__position,
                  n = this.readUntilAfter(e);
                return (this.__position = t), n;
              }),
              (n.prototype.lookBack = function(e) {
                var t = this.__position - 1;
                return (
                  t >= e.length &&
                  this.__input.substring(t - e.length, t).toLowerCase() === e
                );
              }),
              (e.exports.InputScanner = n);
          },
          ,
          ,
          ,
          ,
          function(e) {
            function t(e, t) {
              (e = 'string' == typeof e ? e : e.source),
                (t = 'string' == typeof t ? t : t.source),
                (this.__directives_block_pattern = new RegExp(
                  e + / beautify( \w+[:]\w+)+ /.source + t,
                  'g',
                )),
                (this.__directive_pattern = / (\w+)[:](\w+)/g),
                (this.__directives_end_ignore_pattern = new RegExp(
                  e + /\sbeautify\signore:end\s/.source + t,
                  'g',
                ));
            }
            (t.prototype.get_directives = function(e) {
              if (!e.match(this.__directives_block_pattern)) return null;
              var t = {};
              this.__directive_pattern.lastIndex = 0;
              for (var n = this.__directive_pattern.exec(e); n; )
                (t[n[1]] = n[2]), (n = this.__directive_pattern.exec(e));
              return t;
            }),
              (t.prototype.readIgnored = function(e) {
                return e.readUntilAfter(this.__directives_end_ignore_pattern);
              }),
              (e.exports.Directives = t);
          },
          ,
          function(e, t, n) {
            var i = n(16).Beautifier,
              r = n(17).Options;
            (e.exports = function(e, t) {
              return new i(e, t).beautify();
            }),
              (e.exports.defaultOptions = function() {
                return new r();
              });
          },
          function(e, t, n) {
            var i = n(17).Options,
              r = n(2).Output,
              o = n(8).InputScanner,
              a = new (0, n(13).Directives)(/\/\*/, /\*\//),
              s = /\r\n|[\r\n]/,
              l = /\r\n|[\r\n]/g,
              h = /\s/,
              c = /(?:\s|\n)+/g,
              d = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
              u = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
            function p(e, t) {
              (this._source_text = e || ''),
                (this._options = new i(t)),
                (this._ch = null),
                (this._input = null),
                (this.NESTED_AT_RULE = {
                  '@page': !0,
                  '@font-face': !0,
                  '@keyframes': !0,
                  '@media': !0,
                  '@supports': !0,
                  '@document': !0,
                }),
                (this.CONDITIONAL_GROUP_RULE = {
                  '@media': !0,
                  '@supports': !0,
                  '@document': !0,
                });
            }
            (p.prototype.eatString = function(e) {
              var t = '';
              for (this._ch = this._input.next(); this._ch; ) {
                if (((t += this._ch), '\\' === this._ch))
                  t += this._input.next();
                else if (-1 !== e.indexOf(this._ch) || '\n' === this._ch) break;
                this._ch = this._input.next();
              }
              return t;
            }),
              (p.prototype.eatWhitespace = function(e) {
                for (
                  var t = h.test(this._input.peek()), n = 0;
                  h.test(this._input.peek());

                )
                  (this._ch = this._input.next()),
                    e &&
                      '\n' === this._ch &&
                      (0 === n || n < this._options.max_preserve_newlines) &&
                      (n++, this._output.add_new_line(!0));
                return t;
              }),
              (p.prototype.foundNestedPseudoClass = function() {
                for (var e = 0, t = 1, n = this._input.peek(t); n; ) {
                  if ('{' === n) return !0;
                  if ('(' === n) e += 1;
                  else if (')' === n) {
                    if (0 === e) return !1;
                    e -= 1;
                  } else if (';' === n || '}' === n) return !1;
                  t++, (n = this._input.peek(t));
                }
                return !1;
              }),
              (p.prototype.print_string = function(e) {
                this._output.set_indent(this._indentLevel),
                  (this._output.non_breaking_space = !0),
                  this._output.add_token(e);
              }),
              (p.prototype.preserveSingleSpace = function(e) {
                e && (this._output.space_before_token = !0);
              }),
              (p.prototype.indent = function() {
                this._indentLevel++;
              }),
              (p.prototype.outdent = function() {
                this._indentLevel > 0 && this._indentLevel--;
              }),
              (p.prototype.beautify = function() {
                if (this._options.disabled) return this._source_text;
                var e = this._source_text,
                  t = this._options.eol;
                'auto' === t &&
                  ((t = '\n'), e && s.test(e || '') && (t = e.match(s)[0]));
                var n = (e = e.replace(l, '\n')).match(/^[\t ]*/)[0];
                (this._output = new r(this._options, n)),
                  (this._input = new o(e)),
                  (this._indentLevel = 0),
                  (this._nestedLevel = 0),
                  (this._ch = null);
                for (
                  var i,
                    p,
                    m = 0,
                    f = !1,
                    g = !1,
                    b = !1,
                    _ = !1,
                    v = !1,
                    w = this._ch;
                  (i = '' !== this._input.read(c)),
                    (p = w),
                    (this._ch = this._input.next()),
                    '\\' === this._ch &&
                      this._input.hasNext() &&
                      (this._ch += this._input.next()),
                    (w = this._ch),
                    this._ch;

                )
                  if ('/' === this._ch && '*' === this._input.peek()) {
                    this._output.add_new_line(), this._input.back();
                    var y = this._input.read(d),
                      T = a.get_directives(y);
                    T &&
                      'start' === T.ignore &&
                      (y += a.readIgnored(this._input)),
                      this.print_string(y),
                      this.eatWhitespace(!0),
                      this._output.add_new_line();
                  } else if ('/' === this._ch && '/' === this._input.peek())
                    (this._output.space_before_token = !0),
                      this._input.back(),
                      this.print_string(this._input.read(u)),
                      this.eatWhitespace(!0);
                  else if ('@' === this._ch)
                    if (
                      (this.preserveSingleSpace(i), '{' === this._input.peek())
                    )
                      this.print_string(this._ch + this.eatString('}'));
                    else {
                      this.print_string(this._ch);
                      var k = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
                      k.match(/[ :]$/) &&
                        ((k = this.eatString(': ').replace(/\s$/, '')),
                        this.print_string(k),
                        (this._output.space_before_token = !0)),
                        'extend' === (k = k.replace(/\s$/, ''))
                          ? (_ = !0)
                          : 'import' === k && (v = !0),
                        k in this.NESTED_AT_RULE
                          ? ((this._nestedLevel += 1),
                            k in this.CONDITIONAL_GROUP_RULE && (b = !0))
                          : f ||
                            0 !== m ||
                            -1 === k.indexOf(':') ||
                            ((g = !0), this.indent());
                    }
                  else
                    '#' === this._ch && '{' === this._input.peek()
                      ? (this.preserveSingleSpace(i),
                        this.print_string(this._ch + this.eatString('}')))
                      : '{' === this._ch
                      ? (g && ((g = !1), this.outdent()),
                        b
                          ? ((b = !1),
                            (f = this._indentLevel >= this._nestedLevel))
                          : (f = this._indentLevel >= this._nestedLevel - 1),
                        this._options.newline_between_rules &&
                          f &&
                          this._output.previous_line &&
                          '{' !== this._output.previous_line.item(-1) &&
                          this._output.ensure_empty_line_above('/', ','),
                        (this._output.space_before_token = !0),
                        'expand' === this._options.brace_style
                          ? (this._output.add_new_line(),
                            this.print_string(this._ch),
                            this.indent(),
                            this._output.set_indent(this._indentLevel))
                          : (this.indent(), this.print_string(this._ch)),
                        this.eatWhitespace(!0),
                        this._output.add_new_line())
                      : '}' === this._ch
                      ? (this.outdent(),
                        this._output.add_new_line(),
                        '{' === p && this._output.trim(!0),
                        (v = !1),
                        (_ = !1),
                        g && (this.outdent(), (g = !1)),
                        this.print_string(this._ch),
                        (f = !1),
                        this._nestedLevel && this._nestedLevel--,
                        this.eatWhitespace(!0),
                        this._output.add_new_line(),
                        this._options.newline_between_rules &&
                          !this._output.just_added_blankline() &&
                          '}' !== this._input.peek() &&
                          this._output.add_new_line(!0))
                      : ':' === this._ch
                      ? (!f && !b) ||
                        this._input.lookBack('&') ||
                        this.foundNestedPseudoClass() ||
                        this._input.lookBack('(') ||
                        _ ||
                        0 !== m
                        ? (this._input.lookBack(' ') &&
                            (this._output.space_before_token = !0),
                          ':' === this._input.peek()
                            ? ((this._ch = this._input.next()),
                              this.print_string('::'))
                            : this.print_string(':'))
                        : (this.print_string(':'),
                          g ||
                            ((g = !0),
                            (this._output.space_before_token = !0),
                            this.eatWhitespace(!0),
                            this.indent()))
                      : '"' === this._ch || "'" === this._ch
                      ? (this.preserveSingleSpace(i),
                        this.print_string(this._ch + this.eatString(this._ch)),
                        this.eatWhitespace(!0))
                      : ';' === this._ch
                      ? 0 === m
                        ? (g && (this.outdent(), (g = !1)),
                          (_ = !1),
                          (v = !1),
                          this.print_string(this._ch),
                          this.eatWhitespace(!0),
                          '/' !== this._input.peek() &&
                            this._output.add_new_line())
                        : (this.print_string(this._ch),
                          this.eatWhitespace(!0),
                          (this._output.space_before_token = !0))
                      : '(' === this._ch
                      ? this._input.lookBack('url')
                        ? (this.print_string(this._ch),
                          this.eatWhitespace(),
                          m++,
                          this.indent(),
                          (this._ch = this._input.next()),
                          ')' === this._ch ||
                          '"' === this._ch ||
                          "'" === this._ch
                            ? this._input.back()
                            : this._ch &&
                              (this.print_string(
                                this._ch + this.eatString(')'),
                              ),
                              m && (m--, this.outdent())))
                        : (this.preserveSingleSpace(i),
                          this.print_string(this._ch),
                          this.eatWhitespace(),
                          m++,
                          this.indent())
                      : ')' === this._ch
                      ? (m && (m--, this.outdent()),
                        this.print_string(this._ch))
                      : ',' === this._ch
                      ? (this.print_string(this._ch),
                        this.eatWhitespace(!0),
                        !this._options.selector_separator_newline ||
                        g ||
                        0 !== m ||
                        v
                          ? (this._output.space_before_token = !0)
                          : this._output.add_new_line())
                      : ('>' !== this._ch &&
                          '+' !== this._ch &&
                          '~' !== this._ch) ||
                        g ||
                        0 !== m
                      ? ']' === this._ch
                        ? this.print_string(this._ch)
                        : '[' === this._ch
                        ? (this.preserveSingleSpace(i),
                          this.print_string(this._ch))
                        : '=' === this._ch
                        ? (this.eatWhitespace(),
                          this.print_string('='),
                          h.test(this._ch) && (this._ch = ''))
                        : '!' !== this._ch || this._input.lookBack('\\')
                        ? (this.preserveSingleSpace(i),
                          this.print_string(this._ch))
                        : (this.print_string(' '), this.print_string(this._ch))
                      : this._options.space_around_combinator
                      ? ((this._output.space_before_token = !0),
                        this.print_string(this._ch),
                        (this._output.space_before_token = !0))
                      : (this.print_string(this._ch),
                        this.eatWhitespace(),
                        this._ch && h.test(this._ch) && (this._ch = ''));
                return this._output.get_code(t);
              }),
              (e.exports.Beautifier = p);
          },
          function(e, t, n) {
            var i = n(6).Options;
            function r(e) {
              i.call(this, e, 'css'),
                (this.selector_separator_newline = this._get_boolean(
                  'selector_separator_newline',
                  !0,
                )),
                (this.newline_between_rules = this._get_boolean(
                  'newline_between_rules',
                  !0,
                ));
              var t = this._get_boolean('space_around_selector_separator');
              this.space_around_combinator =
                this._get_boolean('space_around_combinator') || t;
              var n = this._get_selection_list('brace_style', [
                'collapse',
                'expand',
                'end-expand',
                'none',
                'preserve-inline',
              ]);
              this.brace_style = 'collapse';
              for (var r = 0; r < n.length; r++)
                'expand' !== n[r]
                  ? (this.brace_style = 'collapse')
                  : (this.brace_style = n[r]);
            }
            (r.prototype = new i()), (e.exports.Options = r);
          },
        ],
        t = {};
      var n = (function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var o = (t[i] = { exports: {} });
        return e[i](o, o.exports, n), o.exports;
      })(15);
      bt = n;
    })();
    var yt,
      Tt = bt;
    function kt(e, t, n) {
      var i = e.getText(),
        r = !0,
        s = 0,
        l = n.tabSize || 4;
      if (t) {
        for (var h = e.offsetAt(t.start), c = h; c > 0 && Et(i, c - 1); ) c--;
        0 === c || Ct(i, c - 1) ? (h = c) : c < h && (h = c + 1);
        for (var d = e.offsetAt(t.end), u = d; u < i.length && Et(i, u); ) u++;
        (u === i.length || Ct(i, u)) && (d = u),
          (t = a.create(e.positionAt(h), e.positionAt(d)));
        var p = i.substring(0, h);
        if (new RegExp(/.*[<][^>]*$/).test(p))
          return [{ range: t, newText: (i = i.substring(h, d)) }];
        if (((r = d === i.length), (i = i.substring(h, d)), 0 !== h)) {
          var m = e.offsetAt(o.create(t.start.line, 0));
          s = (function(e, t, n) {
            var i = t,
              r = 0,
              o = n.tabSize || 4;
            for (; i < e.length; ) {
              var a = e.charAt(i);
              if (' ' === a) r++;
              else {
                if ('\t' !== a) break;
                r += o;
              }
              i++;
            }
            return Math.floor(r / o);
          })(e.getText(), m, n);
        }
      } else t = a.create(o.create(0, 0), e.positionAt(i.length));
      var f = {
          indent_size: l,
          indent_char: n.insertSpaces ? ' ' : '\t',
          indent_empty_lines: St(n, 'indentEmptyLines', !1),
          wrap_line_length: St(n, 'wrapLineLength', 120),
          unformatted: xt(n, 'unformatted', void 0),
          content_unformatted: xt(n, 'contentUnformatted', void 0),
          indent_inner_html: St(n, 'indentInnerHtml', !1),
          preserve_newlines: St(n, 'preserveNewLines', !0),
          max_preserve_newlines: St(n, 'maxPreserveNewLines', 32786),
          indent_handlebars: St(n, 'indentHandlebars', !1),
          end_with_newline: r && St(n, 'endWithNewline', !1),
          extra_liners: xt(n, 'extraLiners', void 0),
          wrap_attributes: St(n, 'wrapAttributes', 'auto'),
          wrap_attributes_indent_size: St(
            n,
            'wrapAttributesIndentSize',
            void 0,
          ),
          eol: '\n',
          indent_scripts: St(n, 'indentScripts', 'normal'),
          templating: Lt(n, 'all'),
          unformatted_content_delimiter: St(
            n,
            'unformattedContentDelimiter',
            '',
          ),
        },
        g = (function(e, t) {
          return yt(e, t, wt, Tt);
        })(i.replace(/^\s+/, ''), f);
      if (s > 0) {
        var b = n.insertSpaces ? Ke(' ', l * s) : Ke('\t', s);
        (g = g.split('\n').join('\n' + b)),
          0 === t.start.character && (g = b + g);
      }
      return [{ range: t, newText: g }];
    }
    function St(e, t, n) {
      if (e && e.hasOwnProperty(t)) {
        var i = e[t];
        if (null !== i) return i;
      }
      return n;
    }
    function xt(e, t, n) {
      var i = St(e, t, null);
      return 'string' == typeof i
        ? i.length > 0
          ? i.split(',').map(function(e) {
              return e.trim().toLowerCase();
            })
          : []
        : n;
    }
    function Lt(e, t) {
      return !0 === St(e, 'templating', t) ? ['auto'] : ['none'];
    }
    function Ct(e, t) {
      return -1 !== '\r\n'.indexOf(e.charAt(t));
    }
    function Et(e, t) {
      return -1 !== ' \t'.indexOf(e.charAt(t));
    }
    !(function() {
      var e = [
          ,
          ,
          function(e) {
            function t(e) {
              (this.__parent = e),
                (this.__character_count = 0),
                (this.__indent_count = -1),
                (this.__alignment_count = 0),
                (this.__wrap_point_index = 0),
                (this.__wrap_point_character_count = 0),
                (this.__wrap_point_indent_count = -1),
                (this.__wrap_point_alignment_count = 0),
                (this.__items = []);
            }
            function n(e, t) {
              (this.__cache = ['']),
                (this.__indent_size = e.indent_size),
                (this.__indent_string = e.indent_char),
                e.indent_with_tabs ||
                  (this.__indent_string = new Array(e.indent_size + 1).join(
                    e.indent_char,
                  )),
                (t = t || ''),
                e.indent_level > 0 &&
                  (t = new Array(e.indent_level + 1).join(
                    this.__indent_string,
                  )),
                (this.__base_string = t),
                (this.__base_string_length = t.length);
            }
            function i(e, i) {
              (this.__indent_cache = new n(e, i)),
                (this.raw = !1),
                (this._end_with_newline = e.end_with_newline),
                (this.indent_size = e.indent_size),
                (this.wrap_line_length = e.wrap_line_length),
                (this.indent_empty_lines = e.indent_empty_lines),
                (this.__lines = []),
                (this.previous_line = null),
                (this.current_line = null),
                (this.next_line = new t(this)),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = !1),
                this.__add_outputline();
            }
            (t.prototype.clone_empty = function() {
              var e = new t(this.__parent);
              return (
                e.set_indent(this.__indent_count, this.__alignment_count), e
              );
            }),
              (t.prototype.item = function(e) {
                return e < 0
                  ? this.__items[this.__items.length + e]
                  : this.__items[e];
              }),
              (t.prototype.has_match = function(e) {
                for (var t = this.__items.length - 1; t >= 0; t--)
                  if (this.__items[t].match(e)) return !0;
                return !1;
              }),
              (t.prototype.set_indent = function(e, t) {
                this.is_empty() &&
                  ((this.__indent_count = e || 0),
                  (this.__alignment_count = t || 0),
                  (this.__character_count = this.__parent.get_indent_size(
                    this.__indent_count,
                    this.__alignment_count,
                  )));
              }),
              (t.prototype._set_wrap_point = function() {
                this.__parent.wrap_line_length &&
                  ((this.__wrap_point_index = this.__items.length),
                  (this.__wrap_point_character_count = this.__character_count),
                  (this.__wrap_point_indent_count = this.__parent.next_line.__indent_count),
                  (this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count));
              }),
              (t.prototype._should_wrap = function() {
                return (
                  this.__wrap_point_index &&
                  this.__character_count > this.__parent.wrap_line_length &&
                  this.__wrap_point_character_count >
                    this.__parent.next_line.__character_count
                );
              }),
              (t.prototype._allow_wrap = function() {
                if (this._should_wrap()) {
                  this.__parent.add_new_line();
                  var e = this.__parent.current_line;
                  return (
                    e.set_indent(
                      this.__wrap_point_indent_count,
                      this.__wrap_point_alignment_count,
                    ),
                    (e.__items = this.__items.slice(this.__wrap_point_index)),
                    (this.__items = this.__items.slice(
                      0,
                      this.__wrap_point_index,
                    )),
                    (e.__character_count +=
                      this.__character_count -
                      this.__wrap_point_character_count),
                    (this.__character_count = this.__wrap_point_character_count),
                    ' ' === e.__items[0] &&
                      (e.__items.splice(0, 1), (e.__character_count -= 1)),
                    !0
                  );
                }
                return !1;
              }),
              (t.prototype.is_empty = function() {
                return 0 === this.__items.length;
              }),
              (t.prototype.last = function() {
                return this.is_empty()
                  ? null
                  : this.__items[this.__items.length - 1];
              }),
              (t.prototype.push = function(e) {
                this.__items.push(e);
                var t = e.lastIndexOf('\n');
                -1 !== t
                  ? (this.__character_count = e.length - t)
                  : (this.__character_count += e.length);
              }),
              (t.prototype.pop = function() {
                var e = null;
                return (
                  this.is_empty() ||
                    ((e = this.__items.pop()),
                    (this.__character_count -= e.length)),
                  e
                );
              }),
              (t.prototype._remove_indent = function() {
                this.__indent_count > 0 &&
                  ((this.__indent_count -= 1),
                  (this.__character_count -= this.__parent.indent_size));
              }),
              (t.prototype._remove_wrap_indent = function() {
                this.__wrap_point_indent_count > 0 &&
                  (this.__wrap_point_indent_count -= 1);
              }),
              (t.prototype.trim = function() {
                for (; ' ' === this.last(); )
                  this.__items.pop(), (this.__character_count -= 1);
              }),
              (t.prototype.toString = function() {
                var e = '';
                return (
                  this.is_empty()
                    ? this.__parent.indent_empty_lines &&
                      (e = this.__parent.get_indent_string(this.__indent_count))
                    : ((e = this.__parent.get_indent_string(
                        this.__indent_count,
                        this.__alignment_count,
                      )),
                      (e += this.__items.join(''))),
                  e
                );
              }),
              (n.prototype.get_indent_size = function(e, t) {
                var n = this.__base_string_length;
                return (
                  (t = t || 0),
                  e < 0 && (n = 0),
                  (n += e * this.__indent_size),
                  (n += t)
                );
              }),
              (n.prototype.get_indent_string = function(e, t) {
                var n = this.__base_string;
                return (
                  (t = t || 0),
                  e < 0 && ((e = 0), (n = '')),
                  (t += e * this.__indent_size),
                  this.__ensure_cache(t),
                  (n += this.__cache[t])
                );
              }),
              (n.prototype.__ensure_cache = function(e) {
                for (; e >= this.__cache.length; ) this.__add_column();
              }),
              (n.prototype.__add_column = function() {
                var e = this.__cache.length,
                  t = 0,
                  n = '';
                this.__indent_size &&
                  e >= this.__indent_size &&
                  ((e -=
                    (t = Math.floor(e / this.__indent_size)) *
                    this.__indent_size),
                  (n = new Array(t + 1).join(this.__indent_string))),
                  e && (n += new Array(e + 1).join(' ')),
                  this.__cache.push(n);
              }),
              (i.prototype.__add_outputline = function() {
                (this.previous_line = this.current_line),
                  (this.current_line = this.next_line.clone_empty()),
                  this.__lines.push(this.current_line);
              }),
              (i.prototype.get_line_number = function() {
                return this.__lines.length;
              }),
              (i.prototype.get_indent_string = function(e, t) {
                return this.__indent_cache.get_indent_string(e, t);
              }),
              (i.prototype.get_indent_size = function(e, t) {
                return this.__indent_cache.get_indent_size(e, t);
              }),
              (i.prototype.is_empty = function() {
                return !this.previous_line && this.current_line.is_empty();
              }),
              (i.prototype.add_new_line = function(e) {
                return (
                  !(this.is_empty() || (!e && this.just_added_newline())) &&
                  (this.raw || this.__add_outputline(), !0)
                );
              }),
              (i.prototype.get_code = function(e) {
                this.trim(!0);
                var t = this.current_line.pop();
                t &&
                  ('\n' === t[t.length - 1] && (t = t.replace(/\n+$/g, '')),
                  this.current_line.push(t)),
                  this._end_with_newline && this.__add_outputline();
                var n = this.__lines.join('\n');
                return '\n' !== e && (n = n.replace(/[\n]/g, e)), n;
              }),
              (i.prototype.set_wrap_point = function() {
                this.current_line._set_wrap_point();
              }),
              (i.prototype.set_indent = function(e, t) {
                return (
                  (e = e || 0),
                  (t = t || 0),
                  this.next_line.set_indent(e, t),
                  this.__lines.length > 1
                    ? (this.current_line.set_indent(e, t), !0)
                    : (this.current_line.set_indent(), !1)
                );
              }),
              (i.prototype.add_raw_token = function(e) {
                for (var t = 0; t < e.newlines; t++) this.__add_outputline();
                this.current_line.set_indent(-1),
                  this.current_line.push(e.whitespace_before),
                  this.current_line.push(e.text),
                  (this.space_before_token = !1),
                  (this.non_breaking_space = !1),
                  (this.previous_token_wrapped = !1);
              }),
              (i.prototype.add_token = function(e) {
                this.__add_space_before_token(),
                  this.current_line.push(e),
                  (this.space_before_token = !1),
                  (this.non_breaking_space = !1),
                  (this.previous_token_wrapped = this.current_line._allow_wrap());
              }),
              (i.prototype.__add_space_before_token = function() {
                this.space_before_token &&
                  !this.just_added_newline() &&
                  (this.non_breaking_space || this.set_wrap_point(),
                  this.current_line.push(' '));
              }),
              (i.prototype.remove_indent = function(e) {
                for (var t = this.__lines.length; e < t; )
                  this.__lines[e]._remove_indent(), e++;
                this.current_line._remove_wrap_indent();
              }),
              (i.prototype.trim = function(e) {
                for (
                  e = void 0 !== e && e, this.current_line.trim();
                  e && this.__lines.length > 1 && this.current_line.is_empty();

                )
                  this.__lines.pop(),
                    (this.current_line = this.__lines[this.__lines.length - 1]),
                    this.current_line.trim();
                this.previous_line =
                  this.__lines.length > 1
                    ? this.__lines[this.__lines.length - 2]
                    : null;
              }),
              (i.prototype.just_added_newline = function() {
                return this.current_line.is_empty();
              }),
              (i.prototype.just_added_blankline = function() {
                return (
                  this.is_empty() ||
                  (this.current_line.is_empty() &&
                    this.previous_line.is_empty())
                );
              }),
              (i.prototype.ensure_empty_line_above = function(e, n) {
                for (var i = this.__lines.length - 2; i >= 0; ) {
                  var r = this.__lines[i];
                  if (r.is_empty()) break;
                  if (0 !== r.item(0).indexOf(e) && r.item(-1) !== n) {
                    this.__lines.splice(i + 1, 0, new t(this)),
                      (this.previous_line = this.__lines[
                        this.__lines.length - 2
                      ]);
                    break;
                  }
                  i--;
                }
              }),
              (e.exports.Output = i);
          },
          function(e) {
            e.exports.Token = function(e, t, n, i) {
              (this.type = e),
                (this.text = t),
                (this.comments_before = null),
                (this.newlines = n || 0),
                (this.whitespace_before = i || ''),
                (this.parent = null),
                (this.next = null),
                (this.previous = null),
                (this.opened = null),
                (this.closed = null),
                (this.directives = null);
            };
          },
          ,
          ,
          function(e) {
            function t(e, t) {
              (this.raw_options = n(e, t)),
                (this.disabled = this._get_boolean('disabled')),
                (this.eol = this._get_characters('eol', 'auto')),
                (this.end_with_newline = this._get_boolean('end_with_newline')),
                (this.indent_size = this._get_number('indent_size', 4)),
                (this.indent_char = this._get_characters('indent_char', ' ')),
                (this.indent_level = this._get_number('indent_level')),
                (this.preserve_newlines = this._get_boolean(
                  'preserve_newlines',
                  !0,
                )),
                (this.max_preserve_newlines = this._get_number(
                  'max_preserve_newlines',
                  32786,
                )),
                this.preserve_newlines || (this.max_preserve_newlines = 0),
                (this.indent_with_tabs = this._get_boolean(
                  'indent_with_tabs',
                  '\t' === this.indent_char,
                )),
                this.indent_with_tabs &&
                  ((this.indent_char = '\t'),
                  1 === this.indent_size && (this.indent_size = 4)),
                (this.wrap_line_length = this._get_number(
                  'wrap_line_length',
                  this._get_number('max_char'),
                )),
                (this.indent_empty_lines = this._get_boolean(
                  'indent_empty_lines',
                )),
                (this.templating = this._get_selection_list(
                  'templating',
                  [
                    'auto',
                    'none',
                    'django',
                    'erb',
                    'handlebars',
                    'php',
                    'smarty',
                  ],
                  ['auto'],
                ));
            }
            function n(e, t) {
              var n,
                r = {};
              for (n in (e = i(e))) n !== t && (r[n] = e[n]);
              if (t && e[t]) for (n in e[t]) r[n] = e[t][n];
              return r;
            }
            function i(e) {
              var t,
                n = {};
              for (t in e) {
                n[t.replace(/-/g, '_')] = e[t];
              }
              return n;
            }
            (t.prototype._get_array = function(e, t) {
              var n = this.raw_options[e],
                i = t || [];
              return (
                'object' == typeof n
                  ? null !== n &&
                    'function' == typeof n.concat &&
                    (i = n.concat())
                  : 'string' == typeof n && (i = n.split(/[^a-zA-Z0-9_\/\-]+/)),
                i
              );
            }),
              (t.prototype._get_boolean = function(e, t) {
                var n = this.raw_options[e];
                return void 0 === n ? !!t : !!n;
              }),
              (t.prototype._get_characters = function(e, t) {
                var n = this.raw_options[e],
                  i = t || '';
                return (
                  'string' == typeof n &&
                    (i = n
                      .replace(/\\r/, '\r')
                      .replace(/\\n/, '\n')
                      .replace(/\\t/, '\t')),
                  i
                );
              }),
              (t.prototype._get_number = function(e, t) {
                var n = this.raw_options[e];
                (t = parseInt(t, 10)), isNaN(t) && (t = 0);
                var i = parseInt(n, 10);
                return isNaN(i) && (i = t), i;
              }),
              (t.prototype._get_selection = function(e, t, n) {
                var i = this._get_selection_list(e, t, n);
                if (1 !== i.length)
                  throw new Error(
                    "Invalid Option Value: The option '" +
                      e +
                      "' can only be one of the following values:\n" +
                      t +
                      "\nYou passed in: '" +
                      this.raw_options[e] +
                      "'",
                  );
                return i[0];
              }),
              (t.prototype._get_selection_list = function(e, t, n) {
                if (!t || 0 === t.length)
                  throw new Error('Selection list cannot be empty.');
                if (((n = n || [t[0]]), !this._is_valid_selection(n, t)))
                  throw new Error('Invalid Default Value!');
                var i = this._get_array(e, n);
                if (!this._is_valid_selection(i, t))
                  throw new Error(
                    "Invalid Option Value: The option '" +
                      e +
                      "' can contain only the following values:\n" +
                      t +
                      "\nYou passed in: '" +
                      this.raw_options[e] +
                      "'",
                  );
                return i;
              }),
              (t.prototype._is_valid_selection = function(e, t) {
                return (
                  e.length &&
                  t.length &&
                  !e.some(function(e) {
                    return -1 === t.indexOf(e);
                  })
                );
              }),
              (e.exports.Options = t),
              (e.exports.normalizeOpts = i),
              (e.exports.mergeOpts = n);
          },
          ,
          function(e) {
            var t = RegExp.prototype.hasOwnProperty('sticky');
            function n(e) {
              (this.__input = e || ''),
                (this.__input_length = this.__input.length),
                (this.__position = 0);
            }
            (n.prototype.restart = function() {
              this.__position = 0;
            }),
              (n.prototype.back = function() {
                this.__position > 0 && (this.__position -= 1);
              }),
              (n.prototype.hasNext = function() {
                return this.__position < this.__input_length;
              }),
              (n.prototype.next = function() {
                var e = null;
                return (
                  this.hasNext() &&
                    ((e = this.__input.charAt(this.__position)),
                    (this.__position += 1)),
                  e
                );
              }),
              (n.prototype.peek = function(e) {
                var t = null;
                return (
                  (e = e || 0),
                  (e += this.__position) >= 0 &&
                    e < this.__input_length &&
                    (t = this.__input.charAt(e)),
                  t
                );
              }),
              (n.prototype.__match = function(e, n) {
                e.lastIndex = n;
                var i = e.exec(this.__input);
                return (
                  !i || (t && e.sticky) || (i.index !== n && (i = null)), i
                );
              }),
              (n.prototype.test = function(e, t) {
                return (
                  (t = t || 0),
                  (t += this.__position) >= 0 &&
                    t < this.__input_length &&
                    !!this.__match(e, t)
                );
              }),
              (n.prototype.testChar = function(e, t) {
                var n = this.peek(t);
                return (e.lastIndex = 0), null !== n && e.test(n);
              }),
              (n.prototype.match = function(e) {
                var t = this.__match(e, this.__position);
                return t ? (this.__position += t[0].length) : (t = null), t;
              }),
              (n.prototype.read = function(e, t, n) {
                var i,
                  r = '';
                return (
                  e && (i = this.match(e)) && (r += i[0]),
                  !t || (!i && e) || (r += this.readUntil(t, n)),
                  r
                );
              }),
              (n.prototype.readUntil = function(e, t) {
                var n,
                  i = this.__position;
                e.lastIndex = this.__position;
                var r = e.exec(this.__input);
                return (
                  r
                    ? ((i = r.index), t && (i += r[0].length))
                    : (i = this.__input_length),
                  (n = this.__input.substring(this.__position, i)),
                  (this.__position = i),
                  n
                );
              }),
              (n.prototype.readUntilAfter = function(e) {
                return this.readUntil(e, !0);
              }),
              (n.prototype.get_regexp = function(e, n) {
                var i = null,
                  r = 'g';
                return (
                  n && t && (r = 'y'),
                  'string' == typeof e && '' !== e
                    ? (i = new RegExp(e, r))
                    : e && (i = new RegExp(e.source, r)),
                  i
                );
              }),
              (n.prototype.get_literal_regexp = function(e) {
                return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
              }),
              (n.prototype.peekUntilAfter = function(e) {
                var t = this.__position,
                  n = this.readUntilAfter(e);
                return (this.__position = t), n;
              }),
              (n.prototype.lookBack = function(e) {
                var t = this.__position - 1;
                return (
                  t >= e.length &&
                  this.__input.substring(t - e.length, t).toLowerCase() === e
                );
              }),
              (e.exports.InputScanner = n);
          },
          function(e, t, n) {
            var i = n(8).InputScanner,
              r = n(3).Token,
              o = n(10).TokenStream,
              a = n(11).WhitespacePattern,
              s = { START: 'TK_START', RAW: 'TK_RAW', EOF: 'TK_EOF' },
              l = function(e, t) {
                (this._input = new i(e)),
                  (this._options = t || {}),
                  (this.__tokens = null),
                  (this._patterns = {}),
                  (this._patterns.whitespace = new a(this._input));
              };
            (l.prototype.tokenize = function() {
              var e;
              this._input.restart(), (this.__tokens = new o()), this._reset();
              for (
                var t = new r(s.START, ''), n = null, i = [], a = new o();
                t.type !== s.EOF;

              ) {
                for (e = this._get_next_token(t, n); this._is_comment(e); )
                  a.add(e), (e = this._get_next_token(t, n));
                a.isEmpty() || ((e.comments_before = a), (a = new o())),
                  (e.parent = n),
                  this._is_opening(e)
                    ? (i.push(n), (n = e))
                    : n &&
                      this._is_closing(e, n) &&
                      ((e.opened = n),
                      (n.closed = e),
                      (n = i.pop()),
                      (e.parent = n)),
                  (e.previous = t),
                  (t.next = e),
                  this.__tokens.add(e),
                  (t = e);
              }
              return this.__tokens;
            }),
              (l.prototype._is_first_token = function() {
                return this.__tokens.isEmpty();
              }),
              (l.prototype._reset = function() {}),
              (l.prototype._get_next_token = function(e, t) {
                this._readWhitespace();
                var n = this._input.read(/.+/g);
                return n
                  ? this._create_token(s.RAW, n)
                  : this._create_token(s.EOF, '');
              }),
              (l.prototype._is_comment = function(e) {
                return !1;
              }),
              (l.prototype._is_opening = function(e) {
                return !1;
              }),
              (l.prototype._is_closing = function(e, t) {
                return !1;
              }),
              (l.prototype._create_token = function(e, t) {
                return new r(
                  e,
                  t,
                  this._patterns.whitespace.newline_count,
                  this._patterns.whitespace.whitespace_before_token,
                );
              }),
              (l.prototype._readWhitespace = function() {
                return this._patterns.whitespace.read();
              }),
              (e.exports.Tokenizer = l),
              (e.exports.TOKEN = s);
          },
          function(e) {
            function t(e) {
              (this.__tokens = []),
                (this.__tokens_length = this.__tokens.length),
                (this.__position = 0),
                (this.__parent_token = e);
            }
            (t.prototype.restart = function() {
              this.__position = 0;
            }),
              (t.prototype.isEmpty = function() {
                return 0 === this.__tokens_length;
              }),
              (t.prototype.hasNext = function() {
                return this.__position < this.__tokens_length;
              }),
              (t.prototype.next = function() {
                var e = null;
                return (
                  this.hasNext() &&
                    ((e = this.__tokens[this.__position]),
                    (this.__position += 1)),
                  e
                );
              }),
              (t.prototype.peek = function(e) {
                var t = null;
                return (
                  (e = e || 0),
                  (e += this.__position) >= 0 &&
                    e < this.__tokens_length &&
                    (t = this.__tokens[e]),
                  t
                );
              }),
              (t.prototype.add = function(e) {
                this.__parent_token && (e.parent = this.__parent_token),
                  this.__tokens.push(e),
                  (this.__tokens_length += 1);
              }),
              (e.exports.TokenStream = t);
          },
          function(e, t, n) {
            var i = n(12).Pattern;
            function r(e, t) {
              i.call(this, e, t),
                t
                  ? (this._line_regexp = this._input.get_regexp(t._line_regexp))
                  : this.__set_whitespace_patterns('', ''),
                (this.newline_count = 0),
                (this.whitespace_before_token = '');
            }
            (r.prototype = new i()),
              (r.prototype.__set_whitespace_patterns = function(e, t) {
                (e += '\\t '),
                  (t += '\\n\\r'),
                  (this._match_pattern = this._input.get_regexp(
                    '[' + e + t + ']+',
                    !0,
                  )),
                  (this._newline_regexp = this._input.get_regexp(
                    '\\r\\n|[' + t + ']',
                  ));
              }),
              (r.prototype.read = function() {
                (this.newline_count = 0), (this.whitespace_before_token = '');
                var e = this._input.read(this._match_pattern);
                if (' ' === e) this.whitespace_before_token = ' ';
                else if (e) {
                  var t = this.__split(this._newline_regexp, e);
                  (this.newline_count = t.length - 1),
                    (this.whitespace_before_token = t[this.newline_count]);
                }
                return e;
              }),
              (r.prototype.matching = function(e, t) {
                var n = this._create();
                return n.__set_whitespace_patterns(e, t), n._update(), n;
              }),
              (r.prototype._create = function() {
                return new r(this._input, this);
              }),
              (r.prototype.__split = function(e, t) {
                e.lastIndex = 0;
                for (var n = 0, i = [], r = e.exec(t); r; )
                  i.push(t.substring(n, r.index)),
                    (n = r.index + r[0].length),
                    (r = e.exec(t));
                return (
                  n < t.length ? i.push(t.substring(n, t.length)) : i.push(''),
                  i
                );
              }),
              (e.exports.WhitespacePattern = r);
          },
          function(e) {
            function t(e, t) {
              (this._input = e),
                (this._starting_pattern = null),
                (this._match_pattern = null),
                (this._until_pattern = null),
                (this._until_after = !1),
                t &&
                  ((this._starting_pattern = this._input.get_regexp(
                    t._starting_pattern,
                    !0,
                  )),
                  (this._match_pattern = this._input.get_regexp(
                    t._match_pattern,
                    !0,
                  )),
                  (this._until_pattern = this._input.get_regexp(
                    t._until_pattern,
                  )),
                  (this._until_after = t._until_after));
            }
            (t.prototype.read = function() {
              var e = this._input.read(this._starting_pattern);
              return (
                (this._starting_pattern && !e) ||
                  (e += this._input.read(
                    this._match_pattern,
                    this._until_pattern,
                    this._until_after,
                  )),
                e
              );
            }),
              (t.prototype.read_match = function() {
                return this._input.match(this._match_pattern);
              }),
              (t.prototype.until_after = function(e) {
                var t = this._create();
                return (
                  (t._until_after = !0),
                  (t._until_pattern = this._input.get_regexp(e)),
                  t._update(),
                  t
                );
              }),
              (t.prototype.until = function(e) {
                var t = this._create();
                return (
                  (t._until_after = !1),
                  (t._until_pattern = this._input.get_regexp(e)),
                  t._update(),
                  t
                );
              }),
              (t.prototype.starting_with = function(e) {
                var t = this._create();
                return (
                  (t._starting_pattern = this._input.get_regexp(e, !0)),
                  t._update(),
                  t
                );
              }),
              (t.prototype.matching = function(e) {
                var t = this._create();
                return (
                  (t._match_pattern = this._input.get_regexp(e, !0)),
                  t._update(),
                  t
                );
              }),
              (t.prototype._create = function() {
                return new t(this._input, this);
              }),
              (t.prototype._update = function() {}),
              (e.exports.Pattern = t);
          },
          function(e) {
            function t(e, t) {
              (e = 'string' == typeof e ? e : e.source),
                (t = 'string' == typeof t ? t : t.source),
                (this.__directives_block_pattern = new RegExp(
                  e + / beautify( \w+[:]\w+)+ /.source + t,
                  'g',
                )),
                (this.__directive_pattern = / (\w+)[:](\w+)/g),
                (this.__directives_end_ignore_pattern = new RegExp(
                  e + /\sbeautify\signore:end\s/.source + t,
                  'g',
                ));
            }
            (t.prototype.get_directives = function(e) {
              if (!e.match(this.__directives_block_pattern)) return null;
              var t = {};
              this.__directive_pattern.lastIndex = 0;
              for (var n = this.__directive_pattern.exec(e); n; )
                (t[n[1]] = n[2]), (n = this.__directive_pattern.exec(e));
              return t;
            }),
              (t.prototype.readIgnored = function(e) {
                return e.readUntilAfter(this.__directives_end_ignore_pattern);
              }),
              (e.exports.Directives = t);
          },
          function(e, t, n) {
            var i = n(12).Pattern,
              r = { django: !1, erb: !1, handlebars: !1, php: !1, smarty: !1 };
            function o(e, t) {
              i.call(this, e, t),
                (this.__template_pattern = null),
                (this._disabled = Object.assign({}, r)),
                (this._excluded = Object.assign({}, r)),
                t &&
                  ((this.__template_pattern = this._input.get_regexp(
                    t.__template_pattern,
                  )),
                  (this._excluded = Object.assign(this._excluded, t._excluded)),
                  (this._disabled = Object.assign(
                    this._disabled,
                    t._disabled,
                  )));
              var n = new i(e);
              this.__patterns = {
                handlebars_comment: n
                  .starting_with(/{{!--/)
                  .until_after(/--}}/),
                handlebars_unescaped: n.starting_with(/{{{/).until_after(/}}}/),
                handlebars: n.starting_with(/{{/).until_after(/}}/),
                php: n.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
                erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
                django: n.starting_with(/{%/).until_after(/%}/),
                django_value: n.starting_with(/{{/).until_after(/}}/),
                django_comment: n.starting_with(/{#/).until_after(/#}/),
                smarty: n
                  .starting_with(/{(?=[^}{\s\n])/)
                  .until_after(/[^\s\n]}/),
                smarty_comment: n.starting_with(/{\*/).until_after(/\*}/),
                smarty_literal: n
                  .starting_with(/{literal}/)
                  .until_after(/{\/literal}/),
              };
            }
            (o.prototype = new i()),
              (o.prototype._create = function() {
                return new o(this._input, this);
              }),
              (o.prototype._update = function() {
                this.__set_templated_pattern();
              }),
              (o.prototype.disable = function(e) {
                var t = this._create();
                return (t._disabled[e] = !0), t._update(), t;
              }),
              (o.prototype.read_options = function(e) {
                var t = this._create();
                for (var n in r)
                  t._disabled[n] = -1 === e.templating.indexOf(n);
                return t._update(), t;
              }),
              (o.prototype.exclude = function(e) {
                var t = this._create();
                return (t._excluded[e] = !0), t._update(), t;
              }),
              (o.prototype.read = function() {
                var e = '';
                e = this._match_pattern
                  ? this._input.read(this._starting_pattern)
                  : this._input.read(
                      this._starting_pattern,
                      this.__template_pattern,
                    );
                for (var t = this._read_template(); t; )
                  this._match_pattern
                    ? (t += this._input.read(this._match_pattern))
                    : (t += this._input.readUntil(this.__template_pattern)),
                    (e += t),
                    (t = this._read_template());
                return (
                  this._until_after &&
                    (e += this._input.readUntilAfter(this._until_pattern)),
                  e
                );
              }),
              (o.prototype.__set_templated_pattern = function() {
                var e = [];
                this._disabled.php ||
                  e.push(this.__patterns.php._starting_pattern.source),
                  this._disabled.handlebars ||
                    e.push(this.__patterns.handlebars._starting_pattern.source),
                  this._disabled.erb ||
                    e.push(this.__patterns.erb._starting_pattern.source),
                  this._disabled.django ||
                    (e.push(this.__patterns.django._starting_pattern.source),
                    e.push(
                      this.__patterns.django_value._starting_pattern.source,
                    ),
                    e.push(
                      this.__patterns.django_comment._starting_pattern.source,
                    )),
                  this._disabled.smarty ||
                    e.push(this.__patterns.smarty._starting_pattern.source),
                  this._until_pattern && e.push(this._until_pattern.source),
                  (this.__template_pattern = this._input.get_regexp(
                    '(?:' + e.join('|') + ')',
                  ));
              }),
              (o.prototype._read_template = function() {
                var e = '',
                  t = this._input.peek();
                if ('<' === t) {
                  var n = this._input.peek(1);
                  this._disabled.php ||
                    this._excluded.php ||
                    '?' !== n ||
                    (e = e || this.__patterns.php.read()),
                    this._disabled.erb ||
                      this._excluded.erb ||
                      '%' !== n ||
                      (e = e || this.__patterns.erb.read());
                } else
                  '{' === t &&
                    (this._disabled.handlebars ||
                      this._excluded.handlebars ||
                      (e =
                        (e =
                          (e =
                            e || this.__patterns.handlebars_comment.read()) ||
                          this.__patterns.handlebars_unescaped.read()) ||
                        this.__patterns.handlebars.read()),
                    this._disabled.django ||
                      (this._excluded.django ||
                        this._excluded.handlebars ||
                        (e = e || this.__patterns.django_value.read()),
                      this._excluded.django ||
                        (e =
                          (e = e || this.__patterns.django_comment.read()) ||
                          this.__patterns.django.read())),
                    this._disabled.smarty ||
                      (this._disabled.django &&
                        this._disabled.handlebars &&
                        (e =
                          (e =
                            (e = e || this.__patterns.smarty_comment.read()) ||
                            this.__patterns.smarty_literal.read()) ||
                          this.__patterns.smarty.read())));
                return e;
              }),
              (e.exports.TemplatablePattern = o);
          },
          ,
          ,
          ,
          function(e, t, n) {
            var i = n(19).Beautifier,
              r = n(20).Options;
            (e.exports = function(e, t, n, r) {
              return new i(e, t, n, r).beautify();
            }),
              (e.exports.defaultOptions = function() {
                return new r();
              });
          },
          function(e, t, n) {
            var i = n(20).Options,
              r = n(2).Output,
              o = n(21).Tokenizer,
              a = n(21).TOKEN,
              s = /\r\n|[\r\n]/,
              l = /\r\n|[\r\n]/g,
              h = function(e, t) {
                (this.indent_level = 0),
                  (this.alignment_size = 0),
                  (this.max_preserve_newlines = e.max_preserve_newlines),
                  (this.preserve_newlines = e.preserve_newlines),
                  (this._output = new r(e, t));
              };
            (h.prototype.current_line_has_match = function(e) {
              return this._output.current_line.has_match(e);
            }),
              (h.prototype.set_space_before_token = function(e, t) {
                (this._output.space_before_token = e),
                  (this._output.non_breaking_space = t);
              }),
              (h.prototype.set_wrap_point = function() {
                this._output.set_indent(this.indent_level, this.alignment_size),
                  this._output.set_wrap_point();
              }),
              (h.prototype.add_raw_token = function(e) {
                this._output.add_raw_token(e);
              }),
              (h.prototype.print_preserved_newlines = function(e) {
                var t = 0;
                e.type !== a.TEXT &&
                  e.previous.type !== a.TEXT &&
                  (t = e.newlines ? 1 : 0),
                  this.preserve_newlines &&
                    (t =
                      e.newlines < this.max_preserve_newlines + 1
                        ? e.newlines
                        : this.max_preserve_newlines + 1);
                for (var n = 0; n < t; n++) this.print_newline(n > 0);
                return 0 !== t;
              }),
              (h.prototype.traverse_whitespace = function(e) {
                return (
                  !(!e.whitespace_before && !e.newlines) &&
                  (this.print_preserved_newlines(e) ||
                    (this._output.space_before_token = !0),
                  !0)
                );
              }),
              (h.prototype.previous_token_wrapped = function() {
                return this._output.previous_token_wrapped;
              }),
              (h.prototype.print_newline = function(e) {
                this._output.add_new_line(e);
              }),
              (h.prototype.print_token = function(e) {
                e.text &&
                  (this._output.set_indent(
                    this.indent_level,
                    this.alignment_size,
                  ),
                  this._output.add_token(e.text));
              }),
              (h.prototype.indent = function() {
                this.indent_level++;
              }),
              (h.prototype.get_full_indent = function(e) {
                return (e = this.indent_level + (e || 0)) < 1
                  ? ''
                  : this._output.get_indent_string(e);
              });
            var c = function(e, t) {
              var n = null,
                i = null;
              return t.closed
                ? ('script' === e
                    ? (n = 'text/javascript')
                    : 'style' === e && (n = 'text/css'),
                  (n =
                    (function(e) {
                      for (
                        var t = null, n = e.next;
                        n.type !== a.EOF && e.closed !== n;

                      ) {
                        if (n.type === a.ATTRIBUTE && 'type' === n.text) {
                          n.next &&
                            n.next.type === a.EQUALS &&
                            n.next.next &&
                            n.next.next.type === a.VALUE &&
                            (t = n.next.next.text);
                          break;
                        }
                        n = n.next;
                      }
                      return t;
                    })(t) || n).search('text/css') > -1
                    ? (i = 'css')
                    : n.search(
                        /module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/,
                      ) > -1
                    ? (i = 'javascript')
                    : n.search(/(text|application|dojo)\/(x-)?(html)/) > -1
                    ? (i = 'html')
                    : n.search(/test\/null/) > -1 && (i = 'null'),
                  i)
                : null;
            };
            function d(e, t) {
              return -1 !== t.indexOf(e);
            }
            function u(e, t, n) {
              (this.parent = e || null),
                (this.tag = t ? t.tag_name : ''),
                (this.indent_level = n || 0),
                (this.parser_token = t || null);
            }
            function p(e) {
              (this._printer = e), (this._current_frame = null);
            }
            function m(e, t, n, r) {
              (this._source_text = e || ''),
                (t = t || {}),
                (this._js_beautify = n),
                (this._css_beautify = r),
                (this._tag_stack = null);
              var o = new i(t, 'html');
              (this._options = o),
                (this._is_wrap_attributes_force =
                  'force' ===
                  this._options.wrap_attributes.substr(0, 'force'.length)),
                (this._is_wrap_attributes_force_expand_multiline =
                  'force-expand-multiline' === this._options.wrap_attributes),
                (this._is_wrap_attributes_force_aligned =
                  'force-aligned' === this._options.wrap_attributes),
                (this._is_wrap_attributes_aligned_multiple =
                  'aligned-multiple' === this._options.wrap_attributes),
                (this._is_wrap_attributes_preserve =
                  'preserve' ===
                  this._options.wrap_attributes.substr(0, 'preserve'.length)),
                (this._is_wrap_attributes_preserve_aligned =
                  'preserve-aligned' === this._options.wrap_attributes);
            }
            (p.prototype.get_parser_token = function() {
              return this._current_frame
                ? this._current_frame.parser_token
                : null;
            }),
              (p.prototype.record_tag = function(e) {
                var t = new u(
                  this._current_frame,
                  e,
                  this._printer.indent_level,
                );
                this._current_frame = t;
              }),
              (p.prototype._try_pop_frame = function(e) {
                var t = null;
                return (
                  e &&
                    ((t = e.parser_token),
                    (this._printer.indent_level = e.indent_level),
                    (this._current_frame = e.parent)),
                  t
                );
              }),
              (p.prototype._get_frame = function(e, t) {
                for (
                  var n = this._current_frame;
                  n && -1 === e.indexOf(n.tag);

                ) {
                  if (t && -1 !== t.indexOf(n.tag)) {
                    n = null;
                    break;
                  }
                  n = n.parent;
                }
                return n;
              }),
              (p.prototype.try_pop = function(e, t) {
                var n = this._get_frame([e], t);
                return this._try_pop_frame(n);
              }),
              (p.prototype.indent_to_tag = function(e) {
                var t = this._get_frame(e);
                t && (this._printer.indent_level = t.indent_level);
              }),
              (m.prototype.beautify = function() {
                if (this._options.disabled) return this._source_text;
                var e = this._source_text,
                  t = this._options.eol;
                'auto' === this._options.eol &&
                  ((t = '\n'), e && s.test(e) && (t = e.match(s)[0]));
                var n = (e = e.replace(l, '\n')).match(/^[\t ]*/)[0],
                  i = { text: '', type: '' },
                  r = new f(),
                  c = new h(this._options, n),
                  d = new o(e, this._options).tokenize();
                this._tag_stack = new p(c);
                for (var u = null, m = d.next(); m.type !== a.EOF; )
                  m.type === a.TAG_OPEN || m.type === a.COMMENT
                    ? (r = u = this._handle_tag_open(c, m, r, i))
                    : m.type === a.ATTRIBUTE ||
                      m.type === a.EQUALS ||
                      m.type === a.VALUE ||
                      (m.type === a.TEXT && !r.tag_complete)
                    ? (u = this._handle_inside_tag(c, m, r, d))
                    : m.type === a.TAG_CLOSE
                    ? (u = this._handle_tag_close(c, m, r))
                    : m.type === a.TEXT
                    ? (u = this._handle_text(c, m, r))
                    : c.add_raw_token(m),
                    (i = u),
                    (m = d.next());
                return c._output.get_code(t);
              }),
              (m.prototype._handle_tag_close = function(e, t, n) {
                var i = { text: t.text, type: t.type };
                return (
                  (e.alignment_size = 0),
                  (n.tag_complete = !0),
                  e.set_space_before_token(
                    t.newlines || '' !== t.whitespace_before,
                    !0,
                  ),
                  n.is_unformatted
                    ? e.add_raw_token(t)
                    : ('<' === n.tag_start_char &&
                        (e.set_space_before_token('/' === t.text[0], !0),
                        this._is_wrap_attributes_force_expand_multiline &&
                          n.has_wrapped_attrs &&
                          e.print_newline(!1)),
                      e.print_token(t)),
                  !n.indent_content ||
                    n.is_unformatted ||
                    n.is_content_unformatted ||
                    (e.indent(), (n.indent_content = !1)),
                  n.is_inline_element ||
                    n.is_unformatted ||
                    n.is_content_unformatted ||
                    e.set_wrap_point(),
                  i
                );
              }),
              (m.prototype._handle_inside_tag = function(e, t, n, i) {
                var r = n.has_wrapped_attrs,
                  o = { text: t.text, type: t.type };
                if (
                  (e.set_space_before_token(
                    t.newlines || '' !== t.whitespace_before,
                    !0,
                  ),
                  n.is_unformatted)
                )
                  e.add_raw_token(t);
                else if ('{' === n.tag_start_char && t.type === a.TEXT)
                  e.print_preserved_newlines(t)
                    ? ((t.newlines = 0), e.add_raw_token(t))
                    : e.print_token(t);
                else {
                  if (
                    (t.type === a.ATTRIBUTE
                      ? (e.set_space_before_token(!0), (n.attr_count += 1))
                      : (t.type === a.EQUALS ||
                          (t.type === a.VALUE &&
                            t.previous.type === a.EQUALS)) &&
                        e.set_space_before_token(!1),
                    t.type === a.ATTRIBUTE &&
                      '<' === n.tag_start_char &&
                      ((this._is_wrap_attributes_preserve ||
                        this._is_wrap_attributes_preserve_aligned) &&
                        (e.traverse_whitespace(t), (r = r || 0 !== t.newlines)),
                      this._is_wrap_attributes_force))
                  ) {
                    var s = n.attr_count > 1;
                    if (
                      this._is_wrap_attributes_force_expand_multiline &&
                      1 === n.attr_count
                    ) {
                      var l,
                        h = !0,
                        c = 0;
                      do {
                        if ((l = i.peek(c)).type === a.ATTRIBUTE) {
                          h = !1;
                          break;
                        }
                        c += 1;
                      } while (
                        c < 4 &&
                        l.type !== a.EOF &&
                        l.type !== a.TAG_CLOSE
                      );
                      s = !h;
                    }
                    s && (e.print_newline(!1), (r = !0));
                  }
                  e.print_token(t),
                    (r = r || e.previous_token_wrapped()),
                    (n.has_wrapped_attrs = r);
                }
                return o;
              }),
              (m.prototype._handle_text = function(e, t, n) {
                var i = { text: t.text, type: 'TK_CONTENT' };
                return (
                  n.custom_beautifier_name
                    ? this._print_custom_beatifier_text(e, t, n)
                    : n.is_unformatted || n.is_content_unformatted
                    ? e.add_raw_token(t)
                    : (e.traverse_whitespace(t), e.print_token(t)),
                  i
                );
              }),
              (m.prototype._print_custom_beatifier_text = function(e, t, n) {
                var i = this;
                if ('' !== t.text) {
                  var r,
                    o = t.text,
                    a = 1,
                    s = '',
                    l = '';
                  'javascript' === n.custom_beautifier_name &&
                  'function' == typeof this._js_beautify
                    ? (r = this._js_beautify)
                    : 'css' === n.custom_beautifier_name &&
                      'function' == typeof this._css_beautify
                    ? (r = this._css_beautify)
                    : 'html' === n.custom_beautifier_name &&
                      (r = function(e, t) {
                        return new m(
                          e,
                          t,
                          i._js_beautify,
                          i._css_beautify,
                        ).beautify();
                      }),
                    'keep' === this._options.indent_scripts
                      ? (a = 0)
                      : 'separate' === this._options.indent_scripts &&
                        (a = -e.indent_level);
                  var h = e.get_full_indent(a);
                  if (
                    ((o = o.replace(/\n[ \t]*$/, '')),
                    'html' !== n.custom_beautifier_name &&
                      '<' === o[0] &&
                      o.match(/^(<!--|<!\[CDATA\[)/))
                  ) {
                    var c = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(
                      o,
                    );
                    if (!c) return void e.add_raw_token(t);
                    (s = h + c[1] + '\n'),
                      (o = c[4]),
                      c[5] && (l = h + c[5]),
                      (o = o.replace(/\n[ \t]*$/, '')),
                      (c[2] || -1 !== c[3].indexOf('\n')) &&
                        (c = c[3].match(/[ \t]+$/)) &&
                        (t.whitespace_before = c[0]);
                  }
                  if (o)
                    if (r) {
                      var d = function() {
                        this.eol = '\n';
                      };
                      (d.prototype = this._options.raw_options),
                        (o = r(h + o, new d()));
                    } else {
                      var u = t.whitespace_before;
                      u &&
                        (o = o.replace(
                          new RegExp('\n(' + u + ')?', 'g'),
                          '\n',
                        )),
                        (o = h + o.replace(/\n/g, '\n' + h));
                    }
                  s && (o = o ? s + o + '\n' + l : s + l),
                    e.print_newline(!1),
                    o &&
                      ((t.text = o),
                      (t.whitespace_before = ''),
                      (t.newlines = 0),
                      e.add_raw_token(t),
                      e.print_newline(!0));
                }
              }),
              (m.prototype._handle_tag_open = function(e, t, n, i) {
                var r = this._get_tag_open_token(t);
                return (
                  (!n.is_unformatted && !n.is_content_unformatted) ||
                  n.is_empty_element ||
                  t.type !== a.TAG_OPEN ||
                  0 !== t.text.indexOf('</')
                    ? (e.traverse_whitespace(t),
                      this._set_tag_position(e, t, r, n, i),
                      r.is_inline_element || e.set_wrap_point(),
                      e.print_token(t))
                    : (e.add_raw_token(t),
                      (r.start_tag_token = this._tag_stack.try_pop(
                        r.tag_name,
                      ))),
                  (this._is_wrap_attributes_force_aligned ||
                    this._is_wrap_attributes_aligned_multiple ||
                    this._is_wrap_attributes_preserve_aligned) &&
                    (r.alignment_size = t.text.length + 1),
                  r.tag_complete ||
                    r.is_unformatted ||
                    (e.alignment_size = r.alignment_size),
                  r
                );
              });
            var f = function(e, t) {
              var n;
              ((this.parent = e || null),
              (this.text = ''),
              (this.type = 'TK_TAG_OPEN'),
              (this.tag_name = ''),
              (this.is_inline_element = !1),
              (this.is_unformatted = !1),
              (this.is_content_unformatted = !1),
              (this.is_empty_element = !1),
              (this.is_start_tag = !1),
              (this.is_end_tag = !1),
              (this.indent_content = !1),
              (this.multiline_content = !1),
              (this.custom_beautifier_name = null),
              (this.start_tag_token = null),
              (this.attr_count = 0),
              (this.has_wrapped_attrs = !1),
              (this.alignment_size = 0),
              (this.tag_complete = !1),
              (this.tag_start_char = ''),
              (this.tag_check = ''),
              t)
                ? ((this.tag_start_char = t.text[0]),
                  (this.text = t.text),
                  '<' === this.tag_start_char
                    ? ((n = t.text.match(/^<([^\s>]*)/)),
                      (this.tag_check = n ? n[1] : ''))
                    : ((n = t.text.match(/^{{(?:[\^]|#\*?)?([^\s}]+)/)),
                      (this.tag_check = n ? n[1] : ''),
                      '{{#>' === t.text &&
                        '>' === this.tag_check &&
                        null !== t.next &&
                        (this.tag_check = t.next.text)),
                  (this.tag_check = this.tag_check.toLowerCase()),
                  t.type === a.COMMENT && (this.tag_complete = !0),
                  (this.is_start_tag = '/' !== this.tag_check.charAt(0)),
                  (this.tag_name = this.is_start_tag
                    ? this.tag_check
                    : this.tag_check.substr(1)),
                  (this.is_end_tag =
                    !this.is_start_tag || (t.closed && '/>' === t.closed.text)),
                  (this.is_end_tag =
                    this.is_end_tag ||
                    ('{' === this.tag_start_char &&
                      (this.text.length < 3 ||
                        /[^#\^]/.test(this.text.charAt(2))))))
                : (this.tag_complete = !0);
            };
            (m.prototype._get_tag_open_token = function(e) {
              var t = new f(this._tag_stack.get_parser_token(), e);
              return (
                (t.alignment_size = this._options.wrap_attributes_indent_size),
                (t.is_end_tag =
                  t.is_end_tag || d(t.tag_check, this._options.void_elements)),
                (t.is_empty_element =
                  t.tag_complete || (t.is_start_tag && t.is_end_tag)),
                (t.is_unformatted =
                  !t.tag_complete && d(t.tag_check, this._options.unformatted)),
                (t.is_content_unformatted =
                  !t.is_empty_element &&
                  d(t.tag_check, this._options.content_unformatted)),
                (t.is_inline_element =
                  d(t.tag_name, this._options.inline) ||
                  '{' === t.tag_start_char),
                t
              );
            }),
              (m.prototype._set_tag_position = function(e, t, n, i, r) {
                if (
                  (n.is_empty_element ||
                    (n.is_end_tag
                      ? (n.start_tag_token = this._tag_stack.try_pop(
                          n.tag_name,
                        ))
                      : (this._do_optional_end_element(n) &&
                          (n.is_inline_element || e.print_newline(!1)),
                        this._tag_stack.record_tag(n),
                        ('script' !== n.tag_name && 'style' !== n.tag_name) ||
                          n.is_unformatted ||
                          n.is_content_unformatted ||
                          (n.custom_beautifier_name = c(n.tag_check, t)))),
                  d(n.tag_check, this._options.extra_liners) &&
                    (e.print_newline(!1),
                    e._output.just_added_blankline() || e.print_newline(!0)),
                  n.is_empty_element)
                ) {
                  if ('{' === n.tag_start_char && 'else' === n.tag_check)
                    this._tag_stack.indent_to_tag(['if', 'unless', 'each']),
                      (n.indent_content = !0),
                      e.current_line_has_match(/{{#if/) || e.print_newline(!1);
                  ('!--' === n.tag_name &&
                    r.type === a.TAG_CLOSE &&
                    i.is_end_tag &&
                    -1 === n.text.indexOf('\n')) ||
                    (n.is_inline_element ||
                      n.is_unformatted ||
                      e.print_newline(!1),
                    this._calcluate_parent_multiline(e, n));
                } else if (n.is_end_tag) {
                  var o = !1;
                  (o =
                    (o =
                      n.start_tag_token &&
                      n.start_tag_token.multiline_content) ||
                    (!n.is_inline_element &&
                      !(i.is_inline_element || i.is_unformatted) &&
                      !(r.type === a.TAG_CLOSE && n.start_tag_token === i) &&
                      'TK_CONTENT' !== r.type)),
                    (n.is_content_unformatted || n.is_unformatted) && (o = !1),
                    o && e.print_newline(!1);
                } else
                  (n.indent_content = !n.custom_beautifier_name),
                    '<' === n.tag_start_char &&
                      ('html' === n.tag_name
                        ? (n.indent_content = this._options.indent_inner_html)
                        : 'head' === n.tag_name
                        ? (n.indent_content = this._options.indent_head_inner_html)
                        : 'body' === n.tag_name &&
                          (n.indent_content = this._options.indent_body_inner_html)),
                    n.is_inline_element ||
                      n.is_unformatted ||
                      ('TK_CONTENT' === r.type && !n.is_content_unformatted) ||
                      e.print_newline(!1),
                    this._calcluate_parent_multiline(e, n);
              }),
              (m.prototype._calcluate_parent_multiline = function(e, t) {
                !t.parent ||
                  !e._output.just_added_newline() ||
                  ((t.is_inline_element || t.is_unformatted) &&
                    t.parent.is_inline_element) ||
                  (t.parent.multiline_content = !0);
              });
            var g = [
                'address',
                'article',
                'aside',
                'blockquote',
                'details',
                'div',
                'dl',
                'fieldset',
                'figcaption',
                'figure',
                'footer',
                'form',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'header',
                'hr',
                'main',
                'nav',
                'ol',
                'p',
                'pre',
                'section',
                'table',
                'ul',
              ],
              b = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video'];
            (m.prototype._do_optional_end_element = function(e) {
              var t = null;
              if (!e.is_empty_element && e.is_start_tag && e.parent) {
                if ('body' === e.tag_name)
                  t = t || this._tag_stack.try_pop('head');
                else if ('li' === e.tag_name)
                  t = t || this._tag_stack.try_pop('li', ['ol', 'ul']);
                else if ('dd' === e.tag_name || 'dt' === e.tag_name)
                  t =
                    (t = t || this._tag_stack.try_pop('dt', ['dl'])) ||
                    this._tag_stack.try_pop('dd', ['dl']);
                else if (
                  'p' === e.parent.tag_name &&
                  -1 !== g.indexOf(e.tag_name)
                ) {
                  var n = e.parent.parent;
                  (n && -1 !== b.indexOf(n.tag_name)) ||
                    (t = t || this._tag_stack.try_pop('p'));
                } else
                  'rp' === e.tag_name || 'rt' === e.tag_name
                    ? (t =
                        (t =
                          t ||
                          this._tag_stack.try_pop('rt', ['ruby', 'rtc'])) ||
                        this._tag_stack.try_pop('rp', ['ruby', 'rtc']))
                    : 'optgroup' === e.tag_name
                    ? (t = t || this._tag_stack.try_pop('optgroup', ['select']))
                    : 'option' === e.tag_name
                    ? (t =
                        t ||
                        this._tag_stack.try_pop('option', [
                          'select',
                          'datalist',
                          'optgroup',
                        ]))
                    : 'colgroup' === e.tag_name
                    ? (t = t || this._tag_stack.try_pop('caption', ['table']))
                    : 'thead' === e.tag_name
                    ? (t =
                        (t =
                          t || this._tag_stack.try_pop('caption', ['table'])) ||
                        this._tag_stack.try_pop('colgroup', ['table']))
                    : 'tbody' === e.tag_name || 'tfoot' === e.tag_name
                    ? (t =
                        (t =
                          (t =
                            (t =
                              t ||
                              this._tag_stack.try_pop('caption', ['table'])) ||
                            this._tag_stack.try_pop('colgroup', ['table'])) ||
                          this._tag_stack.try_pop('thead', ['table'])) ||
                        this._tag_stack.try_pop('tbody', ['table']))
                    : 'tr' === e.tag_name
                    ? (t =
                        (t =
                          (t =
                            t ||
                            this._tag_stack.try_pop('caption', ['table'])) ||
                          this._tag_stack.try_pop('colgroup', ['table'])) ||
                        this._tag_stack.try_pop('tr', [
                          'table',
                          'thead',
                          'tbody',
                          'tfoot',
                        ]))
                    : ('th' !== e.tag_name && 'td' !== e.tag_name) ||
                      (t =
                        (t =
                          t ||
                          this._tag_stack.try_pop('td', [
                            'table',
                            'thead',
                            'tbody',
                            'tfoot',
                            'tr',
                          ])) ||
                        this._tag_stack.try_pop('th', [
                          'table',
                          'thead',
                          'tbody',
                          'tfoot',
                          'tr',
                        ]));
                return (e.parent = this._tag_stack.get_parser_token()), t;
              }
            }),
              (e.exports.Beautifier = m);
          },
          function(e, t, n) {
            var i = n(6).Options;
            function r(e) {
              i.call(this, e, 'html'),
                1 === this.templating.length &&
                  'auto' === this.templating[0] &&
                  (this.templating = ['django', 'erb', 'handlebars', 'php']),
                (this.indent_inner_html = this._get_boolean(
                  'indent_inner_html',
                )),
                (this.indent_body_inner_html = this._get_boolean(
                  'indent_body_inner_html',
                  !0,
                )),
                (this.indent_head_inner_html = this._get_boolean(
                  'indent_head_inner_html',
                  !0,
                )),
                (this.indent_handlebars = this._get_boolean(
                  'indent_handlebars',
                  !0,
                )),
                (this.wrap_attributes = this._get_selection('wrap_attributes', [
                  'auto',
                  'force',
                  'force-aligned',
                  'force-expand-multiline',
                  'aligned-multiple',
                  'preserve',
                  'preserve-aligned',
                ])),
                (this.wrap_attributes_indent_size = this._get_number(
                  'wrap_attributes_indent_size',
                  this.indent_size,
                )),
                (this.extra_liners = this._get_array('extra_liners', [
                  'head',
                  'body',
                  '/html',
                ])),
                (this.inline = this._get_array('inline', [
                  'a',
                  'abbr',
                  'area',
                  'audio',
                  'b',
                  'bdi',
                  'bdo',
                  'br',
                  'button',
                  'canvas',
                  'cite',
                  'code',
                  'data',
                  'datalist',
                  'del',
                  'dfn',
                  'em',
                  'embed',
                  'i',
                  'iframe',
                  'img',
                  'input',
                  'ins',
                  'kbd',
                  'keygen',
                  'label',
                  'map',
                  'mark',
                  'math',
                  'meter',
                  'noscript',
                  'object',
                  'output',
                  'progress',
                  'q',
                  'ruby',
                  's',
                  'samp',
                  'select',
                  'small',
                  'span',
                  'strong',
                  'sub',
                  'sup',
                  'svg',
                  'template',
                  'textarea',
                  'time',
                  'u',
                  'var',
                  'video',
                  'wbr',
                  'text',
                  'acronym',
                  'big',
                  'strike',
                  'tt',
                ])),
                (this.void_elements = this._get_array('void_elements', [
                  'area',
                  'base',
                  'br',
                  'col',
                  'embed',
                  'hr',
                  'img',
                  'input',
                  'keygen',
                  'link',
                  'menuitem',
                  'meta',
                  'param',
                  'source',
                  'track',
                  'wbr',
                  '!doctype',
                  '?xml',
                  'basefont',
                  'isindex',
                ])),
                (this.unformatted = this._get_array('unformatted', [])),
                (this.content_unformatted = this._get_array(
                  'content_unformatted',
                  ['pre', 'textarea'],
                )),
                (this.unformatted_content_delimiter = this._get_characters(
                  'unformatted_content_delimiter',
                )),
                (this.indent_scripts = this._get_selection('indent_scripts', [
                  'normal',
                  'keep',
                  'separate',
                ]));
            }
            (r.prototype = new i()), (e.exports.Options = r);
          },
          function(e, t, n) {
            var i = n(9).Tokenizer,
              r = n(9).TOKEN,
              o = n(13).Directives,
              a = n(14).TemplatablePattern,
              s = n(12).Pattern,
              l = {
                TAG_OPEN: 'TK_TAG_OPEN',
                TAG_CLOSE: 'TK_TAG_CLOSE',
                ATTRIBUTE: 'TK_ATTRIBUTE',
                EQUALS: 'TK_EQUALS',
                VALUE: 'TK_VALUE',
                COMMENT: 'TK_COMMENT',
                TEXT: 'TK_TEXT',
                UNKNOWN: 'TK_UNKNOWN',
                START: r.START,
                RAW: r.RAW,
                EOF: r.EOF,
              },
              h = new o(/<\!--/, /-->/),
              c = function(e, t) {
                i.call(this, e, t), (this._current_tag_name = '');
                var n = new a(this._input).read_options(this._options),
                  r = new s(this._input);
                if (
                  ((this.__patterns = {
                    word: n.until(/[\n\r\t <]/),
                    single_quote: n.until_after(/'/),
                    double_quote: n.until_after(/"/),
                    attribute: n.until(/[\n\r\t =>]|\/>/),
                    element_name: n.until(/[\n\r\t >\/]/),
                    handlebars_comment: r
                      .starting_with(/{{!--/)
                      .until_after(/--}}/),
                    handlebars: r.starting_with(/{{/).until_after(/}}/),
                    handlebars_open: r.until(/[\n\r\t }]/),
                    handlebars_raw_close: r.until(/}}/),
                    comment: r.starting_with(/<!--/).until_after(/-->/),
                    cdata: r.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
                    conditional_comment: r
                      .starting_with(/<!\[/)
                      .until_after(/]>/),
                    processing: r.starting_with(/<\?/).until_after(/\?>/),
                  }),
                  this._options.indent_handlebars &&
                    (this.__patterns.word = this.__patterns.word.exclude(
                      'handlebars',
                    )),
                  (this._unformatted_content_delimiter = null),
                  this._options.unformatted_content_delimiter)
                ) {
                  var o = this._input.get_literal_regexp(
                    this._options.unformatted_content_delimiter,
                  );
                  this.__patterns.unformatted_content_delimiter = r
                    .matching(o)
                    .until_after(o);
                }
              };
            ((c.prototype = new i())._is_comment = function(e) {
              return !1;
            }),
              (c.prototype._is_opening = function(e) {
                return e.type === l.TAG_OPEN;
              }),
              (c.prototype._is_closing = function(e, t) {
                return (
                  e.type === l.TAG_CLOSE &&
                  t &&
                  ((('>' === e.text || '/>' === e.text) && '<' === t.text[0]) ||
                    ('}}' === e.text && '{' === t.text[0] && '{' === t.text[1]))
                );
              }),
              (c.prototype._reset = function() {
                this._current_tag_name = '';
              }),
              (c.prototype._get_next_token = function(e, t) {
                var n = null;
                this._readWhitespace();
                var i = this._input.peek();
                return null === i
                  ? this._create_token(l.EOF, '')
                  : (n =
                      (n =
                        (n =
                          (n =
                            (n =
                              (n =
                                (n =
                                  (n =
                                    (n =
                                      n || this._read_open_handlebars(i, t)) ||
                                    this._read_attribute(i, e, t)) ||
                                  this._read_close(i, t)) ||
                                this._read_raw_content(i, e, t)) ||
                              this._read_content_word(i)) ||
                            this._read_comment_or_cdata(i)) ||
                          this._read_processing(i)) || this._read_open(i, t)) ||
                      this._create_token(l.UNKNOWN, this._input.next()));
              }),
              (c.prototype._read_comment_or_cdata = function(e) {
                var t = null,
                  n = null,
                  i = null;
                '<' === e &&
                  ('!' === this._input.peek(1) &&
                    ((n = this.__patterns.comment.read())
                      ? (i = h.get_directives(n)) &&
                        'start' === i.ignore &&
                        (n += h.readIgnored(this._input))
                      : (n = this.__patterns.cdata.read())),
                  n && ((t = this._create_token(l.COMMENT, n)).directives = i));
                return t;
              }),
              (c.prototype._read_processing = function(e) {
                var t = null,
                  n = null;
                if ('<' === e) {
                  var i = this._input.peek(1);
                  ('!' !== i && '?' !== i) ||
                    (n =
                      (n = this.__patterns.conditional_comment.read()) ||
                      this.__patterns.processing.read()),
                    n &&
                      ((t = this._create_token(
                        l.COMMENT,
                        n,
                      )).directives = null);
                }
                return t;
              }),
              (c.prototype._read_open = function(e, t) {
                var n = null,
                  i = null;
                return (
                  t ||
                    ('<' === e &&
                      ((n = this._input.next()),
                      '/' === this._input.peek() && (n += this._input.next()),
                      (n += this.__patterns.element_name.read()),
                      (i = this._create_token(l.TAG_OPEN, n)))),
                  i
                );
              }),
              (c.prototype._read_open_handlebars = function(e, t) {
                var n = null,
                  i = null;
                return (
                  t ||
                    (this._options.indent_handlebars &&
                      '{' === e &&
                      '{' === this._input.peek(1) &&
                      ('!' === this._input.peek(2)
                        ? ((n =
                            (n = this.__patterns.handlebars_comment.read()) ||
                            this.__patterns.handlebars.read()),
                          (i = this._create_token(l.COMMENT, n)))
                        : ((n = this.__patterns.handlebars_open.read()),
                          (i = this._create_token(l.TAG_OPEN, n))))),
                  i
                );
              }),
              (c.prototype._read_close = function(e, t) {
                var n = null,
                  i = null;
                return (
                  t &&
                    ('<' === t.text[0] &&
                    ('>' === e || ('/' === e && '>' === this._input.peek(1)))
                      ? ((n = this._input.next()),
                        '/' === e && (n += this._input.next()),
                        (i = this._create_token(l.TAG_CLOSE, n)))
                      : '{' === t.text[0] &&
                        '}' === e &&
                        '}' === this._input.peek(1) &&
                        (this._input.next(),
                        this._input.next(),
                        (i = this._create_token(l.TAG_CLOSE, '}}')))),
                  i
                );
              }),
              (c.prototype._read_attribute = function(e, t, n) {
                var i = null,
                  r = '';
                if (n && '<' === n.text[0])
                  if ('=' === e)
                    i = this._create_token(l.EQUALS, this._input.next());
                  else if ('"' === e || "'" === e) {
                    var o = this._input.next();
                    (o +=
                      '"' === e
                        ? this.__patterns.double_quote.read()
                        : this.__patterns.single_quote.read()),
                      (i = this._create_token(l.VALUE, o));
                  } else
                    (r = this.__patterns.attribute.read()) &&
                      (i =
                        t.type === l.EQUALS
                          ? this._create_token(l.VALUE, r)
                          : this._create_token(l.ATTRIBUTE, r));
                return i;
              }),
              (c.prototype._is_content_unformatted = function(e) {
                return (
                  -1 === this._options.void_elements.indexOf(e) &&
                  (-1 !== this._options.content_unformatted.indexOf(e) ||
                    -1 !== this._options.unformatted.indexOf(e))
                );
              }),
              (c.prototype._read_raw_content = function(e, t, n) {
                var i = '';
                if (n && '{' === n.text[0])
                  i = this.__patterns.handlebars_raw_close.read();
                else if (
                  t.type === l.TAG_CLOSE &&
                  '<' === t.opened.text[0] &&
                  '/' !== t.text[0]
                ) {
                  var r = t.opened.text.substr(1).toLowerCase();
                  if ('script' === r || 'style' === r) {
                    var o = this._read_comment_or_cdata(e);
                    if (o) return (o.type = l.TEXT), o;
                    i = this._input.readUntil(
                      new RegExp('</' + r + '[\\n\\r\\t ]*?>', 'ig'),
                    );
                  } else
                    this._is_content_unformatted(r) &&
                      (i = this._input.readUntil(
                        new RegExp('</' + r + '[\\n\\r\\t ]*?>', 'ig'),
                      ));
                }
                return i ? this._create_token(l.TEXT, i) : null;
              }),
              (c.prototype._read_content_word = function(e) {
                var t = '';
                if (
                  (this._options.unformatted_content_delimiter &&
                    e === this._options.unformatted_content_delimiter[0] &&
                    (t = this.__patterns.unformatted_content_delimiter.read()),
                  t || (t = this.__patterns.word.read()),
                  t)
                )
                  return this._create_token(l.TEXT, t);
              }),
              (e.exports.Tokenizer = c),
              (e.exports.TOKEN = l);
          },
        ],
        t = {};
      var n = (function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var o = (t[i] = { exports: {} });
        return e[i](o, o.exports, n), o.exports;
      })(18);
      yt = n;
    })();
    var At = n(28);
    function Mt(e) {
      var t = e[0];
      return (
        t !== e[e.length - 1] ||
          ("'" !== t && '"' !== t) ||
          (e = e.substr(1, e.length - 2)),
        e
      );
    }
    function Rt(e, t, n, i, r, o) {
      var s = Mt(n);
      if (
        ((l = s),
        (h = e.languageId),
        l.length &&
          ('handlebars' !== h || !/{{.*}}/.test(l)) &&
          /\b(w[\w\d+.-]*:\/\/)?[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/.test(
            l,
          ))
      ) {
        var l, h;
        s.length < n.length && (i++, r--);
        var c = (function(e, t, n, i) {
          if (!/^\s*javascript\:/i.test(t) && !/[\n\r]/.test(t))
            return (
              (t = t.replace(/^\s*/g, '')),
              /^https?:\/\//i.test(t) || /^file:\/\//i.test(t)
                ? t
                : /^\#/i.test(t)
                ? e + t
                : /^\/\//i.test(t)
                ? (Ve(e, 'https://') ? 'https' : 'http') +
                  ':' +
                  t.replace(/^\s*/g, '')
                : n
                ? n.resolveReference(t, i || e)
                : t
            );
        })(e.uri, s, t, o);
        if (
          c &&
          (function(e) {
            try {
              return At.a.parse(e), !0;
            } catch (e) {
              return !1;
            }
          })(c)
        )
          return {
            range: a.create(e.positionAt(i), e.positionAt(r)),
            target: c,
          };
      }
    }
    function It(e, t) {
      for (
        var n = [],
          i = De(e.getText(), 0),
          r = i.scan(),
          o = void 0,
          a = !1,
          s = void 0,
          l = {};
        r !== fe.EOS;

      ) {
        switch (r) {
          case fe.StartTag:
            if (!s) a = 'base' === i.getTokenText().toLowerCase();
            break;
          case fe.AttributeName:
            o = i.getTokenText().toLowerCase();
            break;
          case fe.AttributeValue:
            if ('src' === o || 'href' === o) {
              var h = i.getTokenText();
              if (!a)
                (u = Rt(e, t, h, i.getTokenOffset(), i.getTokenEnd(), s)) &&
                  n.push(u);
              a &&
                void 0 === s &&
                (s = Mt(h)) &&
                t &&
                (s = t.resolveReference(s, e.uri)),
                (a = !1),
                (o = void 0);
            } else if ('id' === o) {
              l[Mt(i.getTokenText())] = i.getTokenOffset();
            }
        }
        r = i.scan();
      }
      for (var c = 0, d = n; c < d.length; c++) {
        var u = d[c],
          p = e.uri + '#';
        if (u.target && Ve(u.target, p)) {
          var m = l[u.target.substr(p.length)];
          if (void 0 !== m) {
            var f = e.positionAt(m);
            u.target = '' + p + (f.line + 1) + ',' + (f.character + 1);
          }
        }
      }
      return n;
    }
    function Ut(e, t, n) {
      var i = e.offsetAt(t),
        r = n.findNodeAt(i);
      if (!r.tag) return [];
      var o = [],
        a = zt(fe.StartTag, e, r.start),
        s = 'number' == typeof r.endTagStart && zt(fe.EndTag, e, r.endTagStart);
      return (
        ((a && Ht(a, t)) || (s && Ht(s, t))) &&
          (a && o.push({ kind: X.Read, range: a }),
          s && o.push({ kind: X.Read, range: s })),
        o
      );
    }
    function Nt(e, t) {
      return (
        e.line < t.line || (e.line === t.line && e.character <= t.character)
      );
    }
    function Ht(e, t) {
      return Nt(e.start, t) && Nt(t, e.end);
    }
    function zt(e, t, n) {
      for (var i = De(t.getText(), n), r = i.scan(); r !== fe.EOS && r !== e; )
        r = i.scan();
      return r !== fe.EOS
        ? {
            start: t.positionAt(i.getTokenOffset()),
            end: t.positionAt(i.getTokenEnd()),
          }
        : null;
    }
    function Wt(e, t) {
      var n = [];
      return (
        t.roots.forEach(function(t) {
          !(function e(t, n, i, r) {
            var o = (function(e) {
                var t = e.tag;
                if (e.attributes) {
                  var n = e.attributes.id,
                    i = e.attributes.class;
                  n && (t += '#' + n.replace(/[\"\']/g, '')),
                    i &&
                      (t += i
                        .replace(/[\"\']/g, '')
                        .split(/\s+/)
                        .map(function(e) {
                          return '.' + e;
                        })
                        .join(''));
                }
                return t || '?';
              })(n),
              l = s.create(
                t.uri,
                a.create(t.positionAt(n.start), t.positionAt(n.end)),
              ),
              h = { name: o, location: l, containerName: i, kind: Q.Field };
            r.push(h),
              n.children.forEach(function(n) {
                e(t, n, o, r);
              });
          })(e, t, '', n);
        }),
        n
      );
    }
    function Ot(e, t, n, i) {
      var r,
        o = e.offsetAt(t),
        a = i.findNodeAt(o);
      if (!a.tag) return null;
      if (
        !(function(e, t, n) {
          if (
            e.endTagStart &&
            e.endTagStart + '</'.length <= t &&
            t <= e.endTagStart + '</'.length + n.length
          )
            return !0;
          return (
            e.start + '<'.length <= t && t <= e.start + '<'.length + n.length
          );
        })(a, o, a.tag)
      )
        return null;
      var s = [],
        l = {
          start: e.positionAt(a.start + '<'.length),
          end: e.positionAt(a.start + '<'.length + a.tag.length),
        };
      if ((s.push({ range: l, newText: n }), a.endTagStart)) {
        var h = {
          start: e.positionAt(a.endTagStart + '</'.length),
          end: e.positionAt(a.endTagStart + '</'.length + a.tag.length),
        };
        s.push({ range: h, newText: n });
      }
      return { changes: (((r = {})[e.uri.toString()] = s), r) };
    }
    function Dt(e, t, n) {
      var i = e.offsetAt(t),
        r = n.findNodeAt(i);
      if (!r.tag) return null;
      if (!r.endTagStart) return null;
      if (
        r.start + '<'.length <= i &&
        i <= r.start + '<'.length + r.tag.length
      ) {
        var o = i - '<'.length - r.start + r.endTagStart + '</'.length;
        return e.positionAt(o);
      }
      if (
        r.endTagStart + '</'.length <= i &&
        i <= r.endTagStart + '</'.length + r.tag.length
      ) {
        o = i - '</'.length - r.endTagStart + r.start + '<'.length;
        return e.positionAt(o);
      }
      return null;
    }
    function Pt(e, t, n) {
      var i = e.offsetAt(t),
        r = n.findNodeAt(i),
        o = r.tag ? r.tag.length : 0;
      return r.endTagStart &&
        ((r.start + '<'.length <= i && i <= r.start + '<'.length + o) ||
          (r.endTagStart + '</'.length <= i &&
            i <= r.endTagStart + '</'.length + o))
        ? [
            a.create(
              e.positionAt(r.start + '<'.length),
              e.positionAt(r.start + '<'.length + o),
            ),
            a.create(
              e.positionAt(r.endTagStart + '</'.length),
              e.positionAt(r.endTagStart + '</'.length + o),
            ),
          ]
        : null;
    }
    function qt(e, t) {
      var n = De(e.getText()),
        i = n.scan(),
        r = [],
        o = [],
        a = null,
        s = -1;
      function l(e) {
        r.push(e), (s = e.startLine);
      }
      for (; i !== fe.EOS; ) {
        switch (i) {
          case fe.StartTag:
            var h = n.getTokenText(),
              c = e.positionAt(n.getTokenOffset()).line;
            o.push({ startLine: c, tagName: h }), (a = h);
            break;
          case fe.EndTag:
            a = n.getTokenText();
            break;
          case fe.StartTagClose:
            if (!a || !Fe(a)) break;
          case fe.EndTagClose:
          case fe.StartTagSelfClose:
            for (var d = o.length - 1; d >= 0 && o[d].tagName !== a; ) d--;
            if (d >= 0) {
              var p = o[d];
              (o.length = d),
                (f = e.positionAt(n.getTokenOffset()).line - 1) >
                  (c = p.startLine) &&
                  s !== c &&
                  l({ startLine: c, endLine: f });
            }
            break;
          case fe.Comment:
            c = e.positionAt(n.getTokenOffset()).line;
            var m = n.getTokenText().match(/^\s*#(region\b)|(endregion\b)/);
            if (m)
              if (m[1]) o.push({ startLine: c, tagName: '' });
              else {
                for (d = o.length - 1; d >= 0 && o[d].tagName.length; ) d--;
                if (d >= 0) {
                  var f;
                  p = o[d];
                  (o.length = d),
                    (f = c) > (c = p.startLine) &&
                      s !== c &&
                      l({ startLine: c, endLine: f, kind: u.Region });
                }
              }
            else
              c <
                (f = e.positionAt(n.getTokenOffset() + n.getTokenLength())
                  .line) && l({ startLine: c, endLine: f, kind: u.Comment });
        }
        i = n.scan();
      }
      var g = (t && t.rangeLimit) || Number.MAX_VALUE;
      return r.length > g
        ? (function(e, t) {
            e = e.sort(function(e, t) {
              var n = e.startLine - t.startLine;
              return 0 === n && (n = e.endLine - t.endLine), n;
            });
            for (
              var n = void 0,
                i = [],
                r = [],
                o = [],
                a = function(e, t) {
                  (r[e] = t), t < 30 && (o[t] = (o[t] || 0) + 1);
                },
                s = 0;
              s < e.length;
              s++
            ) {
              var l = e[s];
              if (n) {
                if (l.startLine > n.startLine)
                  if (l.endLine <= n.endLine)
                    i.push(n), (n = l), a(s, i.length);
                  else if (l.startLine > n.endLine) {
                    do {
                      n = i.pop();
                    } while (n && l.startLine > n.endLine);
                    n && i.push(n), (n = l), a(s, i.length);
                  }
              } else (n = l), a(s, 0);
            }
            var h = 0,
              c = 0;
            for (s = 0; s < o.length; s++) {
              var d = o[s];
              if (d) {
                if (d + h > t) {
                  c = s;
                  break;
                }
                h += d;
              }
            }
            var u = [];
            for (s = 0; s < e.length; s++) {
              var p = r[s];
              'number' == typeof p &&
                (p < c || (p === c && h++ < t)) &&
                u.push(e[s]);
            }
            return u;
          })(r, g)
        : r;
    }
    function Ft(e, t) {
      return t.map(function(t) {
        for (
          var n = (function(e, t) {
              var n = je(e.getText()),
                i = e.offsetAt(t),
                r = n.findNodeAt(i),
                o = (function(e) {
                  var t = e,
                    n = [];
                  for (; t.parent; )
                    (t = t.parent),
                      ((i = t),
                      i.startTagEnd &&
                      i.endTagStart &&
                      i.startTagEnd < i.endTagStart
                        ? [
                            [i.startTagEnd, i.endTagStart],
                            [i.start, i.end],
                          ]
                        : [[i.start, i.end]]).forEach(function(e) {
                        return n.push(e);
                      });
                  var i;
                  return n;
                })(r);
              if (r.startTagEnd && !r.endTagStart) {
                if (r.startTagEnd !== r.end) return [[r.start, r.end]];
                var s = a.create(
                  e.positionAt(r.startTagEnd - 2),
                  e.positionAt(r.startTagEnd),
                );
                '/>' === e.getText(s)
                  ? o.unshift([r.start + 1, r.startTagEnd - 2])
                  : o.unshift([r.start + 1, r.startTagEnd - 1]);
                var l = Bt(e, r, i);
                return (o = l.concat(o));
              }
              if (!r.startTagEnd || !r.endTagStart) return o;
              if (
                (o.unshift([r.start, r.end]), r.start < i && i < r.startTagEnd)
              ) {
                o.unshift([r.start + 1, r.startTagEnd - 1]);
                l = Bt(e, r, i);
                return (o = l.concat(o));
              }
              return r.startTagEnd <= i && i <= r.endTagStart
                ? (o.unshift([r.startTagEnd, r.endTagStart]), o)
                : (i >= r.endTagStart + 2 &&
                    o.unshift([r.endTagStart + 2, r.end - 1]),
                  o);
            })(e, t),
            i = void 0,
            r = void 0,
            o = n.length - 1;
          o >= 0;
          o--
        ) {
          var s = n[o];
          (i && s[0] === i[0] && s[1] === i[1]) ||
            (r = le.create(
              a.create(e.positionAt(n[o][0]), e.positionAt(n[o][1])),
              r,
            )),
            (i = s);
        }
        return r || (r = le.create(a.create(t, t))), r;
      });
    }
    function Bt(e, t, n) {
      for (
        var i = a.create(e.positionAt(t.start), e.positionAt(t.end)),
          r = e.getText(i),
          o = n - t.start,
          s = De(r),
          l = s.scan(),
          h = t.start,
          c = [],
          d = !1,
          u = -1;
        l !== fe.EOS;

      ) {
        switch (l) {
          case fe.AttributeName:
            if (o < s.getTokenOffset()) {
              d = !1;
              break;
            }
            o <= s.getTokenEnd() &&
              c.unshift([s.getTokenOffset(), s.getTokenEnd()]),
              (d = !0),
              (u = s.getTokenOffset());
            break;
          case fe.AttributeValue:
            if (!d) break;
            var p = s.getTokenText();
            if (o < s.getTokenOffset()) {
              c.push([u, s.getTokenEnd()]);
              break;
            }
            o >= s.getTokenOffset() &&
              o <= s.getTokenEnd() &&
              (c.unshift([s.getTokenOffset(), s.getTokenEnd()]),
              (('"' === p[0] && '"' === p[p.length - 1]) ||
                ("'" === p[0] && "'" === p[p.length - 1])) &&
                o >= s.getTokenOffset() + 1 &&
                o <= s.getTokenEnd() - 1 &&
                c.unshift([s.getTokenOffset() + 1, s.getTokenEnd() - 1]),
              c.push([u, s.getTokenEnd()]));
        }
        l = s.scan();
      }
      return c.map(function(e) {
        return [e[0] + h, e[1] + h];
      });
    }
    var jt = {
        version: 1.1,
        tags: [
          {
            name: 'html',
            description: {
              kind: 'markdown',
              value:
                'The html element represents the root of an HTML document.',
            },
            attributes: [
              {
                name: 'manifest',
                description: {
                  kind: 'markdown',
                  value:
                    'Specifies the URI of a resource manifest indicating resources that should be cached locally. See [Using the application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) for details.',
                },
              },
              {
                name: 'version',
                description:
                  'Specifies the version of the HTML [Document Type Definition](https://developer.mozilla.org/en-US/docs/Glossary/DTD "Document Type Definition: In HTML, the doctype is the required "<!DOCTYPE html>" preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called “quirks mode” when rendering a document; that is, the "<!DOCTYPE html>" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.") that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration.',
              },
              {
                name: 'xmlns',
                description:
                  'Specifies the XML Namespace of the document. Default value is `"http://www.w3.org/1999/xhtml"`. This is required in documents parsed with XML parsers, and optional in text/html documents.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/html',
              },
            ],
          },
          {
            name: 'head',
            description: {
              kind: 'markdown',
              value:
                'The head element represents a collection of metadata for the Document.',
            },
            attributes: [
              {
                name: 'profile',
                description:
                  'The URIs of one or more metadata profiles, separated by white space.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/head',
              },
            ],
          },
          {
            name: 'title',
            description: {
              kind: 'markdown',
              value:
                "The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/title',
              },
            ],
          },
          {
            name: 'base',
            description: {
              kind: 'markdown',
              value:
                'The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information.',
            },
            attributes: [
              {
                name: 'href',
                description: {
                  kind: 'markdown',
                  value:
                    'The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URLs are allowed.',
                },
              },
              {
                name: 'target',
                description: {
                  kind: 'markdown',
                  value:
                    'A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. It is a name of, or keyword for, a _browsing context_ (for example: tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the result into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the result into a new unnamed browsing context.\n*   `_parent`: Load the result into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n\nIf this attribute is specified, this element must come before any other elements with attributes whose values are URLs.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/base',
              },
            ],
          },
          {
            name: 'link',
            description: {
              kind: 'markdown',
              value:
                'The link element allows authors to link their document to other resources.',
            },
            attributes: [
              {
                name: 'href',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute specifies the [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL "URL: Uniform Resource Locator (URL) is a text string specifying where a resource can be found on the Internet.") of the linked resource. A URL can be absolute or relative.',
                },
              },
              {
                name: 'crossorigin',
                valueSet: 'xo',
                description: {
                  kind: 'markdown',
                  value:
                    'This enumerated attribute indicates whether [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") must be used when fetching the resource. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\n`anonymous`\n\nA cross-origin request (i.e. with an [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin "The Origin request header indicates where a fetch originates from. It doesn\'t include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn\'t disclose the whole path.") HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin "The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.") HTTP header) the image will be tainted and its usage restricted.\n\n`use-credentials`\n\nA cross-origin request (i.e. with an `Origin` HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials "The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request\'s credentials mode (Request.credentials) is "include".") HTTP header), the resource will be _tainted_ and its usage restricted.\n\nIf the attribute is not present, the resource is fetched without a [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") request (i.e. without sending the `Origin` HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for additional information.',
                },
              },
              {
                name: 'rel',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the [link types values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).',
                },
              },
              {
                name: 'media',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute specifies the media that the linked resource applies to. Its value must be a media type / [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries). This attribute is mainly useful when linking to external stylesheets — it allows the user agent to pick the best adapted one for the device it runs on.\n\n**Notes:**\n\n*   In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., [media types and groups](https://developer.mozilla.org/en-US/docs/Web/CSS/@media), where defined and allowed as values for this attribute, such as `print`, `screen`, `aural`, `braille`. HTML5 extended this to any kind of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries), which are a superset of the allowed values of HTML 4.\n*   Browsers not supporting [CSS3 Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries) won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4.",
                },
              },
              {
                name: 'hreflang',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt). Use this attribute only if the [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute is present.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as **text/css**), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the `type` attribute, but is actually now recommended practice. It is also used on `rel="preload"` link types, to make sure the browser only downloads file types that it supports.',
                },
              },
              {
                name: 'sizes',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the [`rel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-rel) contains a value of `icon` or a non-standard type such as Apple's `apple-touch-icon`. It may have the following values:\n\n*   `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.\n*   a white-space separated list of sizes, each in the format `_<width in pixels>_x_<height in pixels>_` or `_<width in pixels>_X_<height in pixels>_`. Each of these sizes must be contained in the resource.\n\n**Note:** Most icon formats are only able to store one single icon; therefore most of the time the [`sizes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-sizes) contains only one entry. MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous; you should definitely use it.",
                },
              },
              {
                name: 'as',
                description:
                  'This attribute is only used when `rel="preload"` or `rel="prefetch"` has been set on the `<link>` element. It specifies the type of content being loaded by the `<link>`, which is necessary for content prioritization, request matching, application of correct [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and setting of correct [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept "The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. Browsers set adequate values for this header depending on the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image, video or a script.") request header.',
              },
              {
                name: 'importance',
                description:
                  'Indicates the relative importance of the resource. Priority hints are delegated using the values:',
              },
              {
                name: 'importance',
                description:
                  '**`auto`**: Indicates **no preference**. The browser may use its own heuristics to decide the priority of the resource.\n\n**`high`**: Indicates to the browser that the resource is of **high** priority.\n\n**`low`**: Indicates to the browser that the resource is of **low** priority.\n\n**Note:** The `importance` attribute may only be used for the `<link>` element if `rel="preload"` or `rel="prefetch"` is present.',
              },
              {
                name: 'integrity',
                description:
                  'Contains inline metadata — a base64-encoded cryptographic hash of the resource (file) you’re telling the browser to fetch. The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).',
              },
              {
                name: 'referrerpolicy',
                description:
                  'A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer` means that the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` means that no [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior, if no policy is otherwise specified.\n*   `origin` means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.\n*   `origin-when-cross-origin` means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer\'s path.\n*   `unsafe-url` means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.',
              },
              {
                name: 'title',
                description:
                  'The `title` attribute has special semantics on the `<link>` element. When used on a `<link rel="stylesheet">` it defines a [preferred or an alternate stylesheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets). Incorrectly using it may [cause the stylesheet to be ignored](https://developer.mozilla.org/en-US/docs/Correctly_Using_Titles_With_External_Stylesheets).',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/link',
              },
            ],
          },
          {
            name: 'meta',
            description: {
              kind: 'markdown',
              value:
                'The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.',
            },
            attributes: [
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute defines the name of a piece of document-level metadata. It should not be set if one of the attributes [`itemprop`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemprop), [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) is also set.\n\nThis metadata name is associated with the value contained by the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute. The possible values for the name attribute are:\n\n*   `application-name` which defines the name of the application running in the web page.\n    \n    **Note:**\n    \n    *   Browsers may use this to identify the application. It is different from the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title "The HTML Title element (<title>) defines the document\'s title that is shown in a browser\'s title bar or a page\'s tab.") element, which usually contain the application name, but may also contain information like the document name or a status.\n    *   Simple web pages shouldn\'t define an application-name.\n    \n*   `author` which defines the name of the document\'s author.\n*   `description` which contains a short and accurate summary of the content of the page. Several browsers, like Firefox and Opera, use this as the default description of bookmarked pages.\n*   `generator` which contains the identifier of the software that generated the page.\n*   `keywords` which contains words relevant to the page\'s content separated by commas.\n*   `referrer` which controls the [`Referer` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) attached to requests sent from the document:\n    \n    Values for the `content` attribute of `<meta name="referrer">`\n    \n    `no-referrer`\n    \n    Do not send a HTTP `Referrer` header.\n    \n    `origin`\n    \n    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the document.\n    \n    `no-referrer-when-downgrade`\n    \n    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as a referrer to URLs as secure as the current page, (https→https), but does not send a referrer to less secure URLs (https→http). This is the default behaviour.\n    \n    `origin-when-cross-origin`\n    \n    Send the full URL (stripped of parameters) for same-origin requests, but only send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) for other cases.\n    \n    `same-origin`\n    \n    A referrer will be sent for [same-site origins](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), but cross-origin requests will contain no referrer information.\n    \n    `strict-origin`\n    \n    Only send the origin of the document as the referrer to a-priori as-much-secure destination (HTTPS->HTTPS), but don\'t send it to a less secure destination (HTTPS->HTTP).\n    \n    `strict-origin-when-cross-origin`\n    \n    Send a full URL when performing a same-origin request, only send the origin of the document to a-priori as-much-secure destination (HTTPS->HTTPS), and send no header to a less secure destination (HTTPS->HTTP).\n    \n    `unsafe-URL`\n    \n    Send the full URL (stripped of parameters) for same-origin or cross-origin requests.\n    \n    **Notes:**\n    \n    *   Some browsers support the deprecated values of `always`, `default`, and `never` for referrer.\n    *   Dynamically inserting `<meta name="referrer">` (with [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) or [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)) makes the referrer behaviour unpredictable.\n    *   When several conflicting policies are defined, the no-referrer policy is applied.\n    \n\nThis attribute may also have a value taken from the extended list defined on [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions). Although none have been formally accepted yet, a few commonly used names are:\n\n*   `creator` which defines the name of the creator of the document, such as an organization or institution. If there are more than one, several [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") elements should be used.\n*   `googlebot`, a synonym of `robots`, is only followed by Googlebot (the indexing crawler for Google).\n*   `publisher` which defines the name of the document\'s publisher.\n*   `robots` which defines the behaviour that cooperative crawlers, or "robots", should use with the page. It is a comma-separated list of the values below:\n    \n    Values for the content of `<meta name="robots">`\n    \n    Value\n    \n    Description\n    \n    Used by\n    \n    `index`\n    \n    Allows the robot to index the page (default).\n    \n    All\n    \n    `noindex`\n    \n    Requests the robot to not index the page.\n    \n    All\n    \n    `follow`\n    \n    Allows the robot to follow the links on the page (default).\n    \n    All\n    \n    `nofollow`\n    \n    Requests the robot to not follow the links on the page.\n    \n    All\n    \n    `none`\n    \n    Equivalent to `noindex, nofollow`\n    \n    [Google](https://support.google.com/webmasters/answer/79812)\n    \n    `noodp`\n    \n    Prevents using the [Open Directory Project](https://www.dmoz.org/) description, if any, as the page description in search engine results.\n    \n    [Google](https://support.google.com/webmasters/answer/35624#nodmoz), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/meta-tags-robotstxt-yahoo-search-sln2213.html#cont5), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `noarchive`\n    \n    Requests the search engine not to cache the page content.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `nosnippet`\n    \n    Prevents displaying any description of the page in search engine results.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `noimageindex`\n    \n    Requests this page not to appear as the referring page of an indexed image.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives)\n    \n    `nocache`\n    \n    Synonym of `noarchive`.\n    \n    [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    **Notes:**\n    \n    *   Only cooperative robots follow these rules. Do not expect to prevent e-mail harvesters with them.\n    *   The robot still needs to access the page in order to read these rules. To prevent bandwidth consumption, use a _[robots.txt](https://developer.mozilla.org/en-US/docs/Glossary/robots.txt "robots.txt: Robots.txt is a file which is usually placed in the root of any website. It decides whether crawlers are permitted or forbidden access to the web site.")_ file.\n    *   If you want to remove a page, `noindex` will work, but only after the robot visits the page again. Ensure that the `robots.txt` file is not preventing revisits.\n    *   Some values are mutually exclusive, like `index` and `noindex`, or `follow` and `nofollow`. In these cases the robot\'s behaviour is undefined and may vary between them.\n    *   Some crawler robots, like Google, Yahoo and Bing, support the same values for the HTTP header `X-Robots-Tag`; this allows non-HTML documents like images to use these rules.\n    \n*   `slurp`, is a synonym of `robots`, but only for Slurp - the crawler for Yahoo Search.\n*   `viewport`, which gives hints about the size of the initial size of the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport "viewport: A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you\'re viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view."). Used by mobile devices only.\n    \n    Values for the content of `<meta name="viewport">`\n    \n    Value\n    \n    Possible subvalues\n    \n    Description\n    \n    `width`\n    \n    A positive integer number, or the text `device-width`\n    \n    Defines the pixel width of the viewport that you want the web site to be rendered at.\n    \n    `height`\n    \n    A positive integer, or the text `device-height`\n    \n    Defines the height of the viewport. Not used by any browser.\n    \n    `initial-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the ratio between the device width (`device-width` in portrait mode or `device-height` in landscape mode) and the viewport size.\n    \n    `maximum-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the maximum amount to zoom in. It must be greater or equal to the `minimum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.\n    \n    `minimum-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the minimum zoom level. It must be smaller or equal to the `maximum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.\n    \n    `user-scalable`\n    \n    `yes` or `no`\n    \n    If set to `no`, the user is not able to zoom in the webpage. The default is `yes`. Browser settings can ignore this rule, and iOS10+ ignores it by default.\n    \n    Specification\n    \n    Status\n    \n    Comment\n    \n    [CSS Device Adaptation  \n    The definition of \'<meta name="viewport">\' in that specification.](https://drafts.csswg.org/css-device-adapt/#viewport-meta)\n    \n    Working Draft\n    \n    Non-normatively describes the Viewport META element\n    \n    See also: [`@viewport`](https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport "The @viewport CSS at-rule lets you configure the viewport through which the document is viewed. It\'s primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).")\n    \n    **Notes:**\n    \n    *   Though unstandardized, this declaration is respected by most mobile browsers due to de-facto dominance.\n    *   The default values may vary between devices and browsers.\n    *   To learn about this declaration in Firefox for Mobile, see [this article](https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag "Mobile/Viewport meta tag").',
                },
              },
              {
                name: 'http-equiv',
                description: {
                  kind: 'markdown',
                  value:
                    'Defines a pragma directive. The attribute is named `**http-equiv**(alent)` because all the allowed values are names of particular HTTP headers:\n\n*   `"content-language"`  \n    Defines the default language of the page. It can be overridden by the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any element.\n    \n    **Warning:** Do not use this value, as it is obsolete. Prefer the `lang` attribute on the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html "The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.") element.\n    \n*   `"content-security-policy"`  \n    Allows page authors to define a [content policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives) for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.\n*   `"content-type"`  \n    Defines the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the document, followed by its character encoding. It follows the same syntax as the HTTP `content-type` entity-header field, but as it is inside a HTML page, most values other than `text/html` are impossible. Therefore the valid syntax for its `content` is the string \'`text/html`\' followed by a character set with the following syntax: \'`; charset=_IANAcharset_`\', where `IANAcharset` is the _preferred MIME name_ for a character set as [defined by the IANA.](https://www.iana.org/assignments/character-sets)\n    \n    **Warning:** Do not use this value, as it is obsolete. Use the [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute on the [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element.\n    \n    **Note:** As [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") can\'t change documents\' types in XHTML or HTML5\'s XHTML serialization, never set the MIME type to an XHTML MIME type with `<meta>`.\n    \n*   `"refresh"`  \n    This instruction specifies:\n    *   The number of seconds until the page should be reloaded - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer.\n    *   The number of seconds until the page should redirect to another - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer followed by the string \'`;url=`\', and a valid URL.\n*   `"set-cookie"`  \n    Defines a [cookie](https://developer.mozilla.org/en-US/docs/cookie) for the page. Its content must follow the syntax defined in the [IETF HTTP Cookie Specification](https://tools.ietf.org/html/draft-ietf-httpstate-cookie-14).\n    \n    **Warning:** Do not use this instruction, as it is obsolete. Use the HTTP header [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) instead.',
                },
              },
              {
                name: 'content',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute contains the value for the [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name) attribute, depending on which is used.',
                },
              },
              {
                name: 'charset',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute declares the page\'s character encoding. It must contain a [standard IANA MIME name for character encodings](https://www.iana.org/assignments/character-sets). Although the standard doesn\'t request a specific encoding, it suggests:\n\n*   Authors are encouraged to use [`UTF-8`](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8).\n*   Authors should not use ASCII-incompatible encodings to avoid security risk: browsers not supporting them may interpret harmful content as HTML. This happens with the `JIS_C6226-1983`, `JIS_X0212-1990`, `HZ-GB-2312`, `JOHAB`, the ISO-2022 family and the EBCDIC family.\n\n**Note:** ASCII-incompatible encodings are those that don\'t map the 8-bit code points `0x20` to `0x7E` to the `0x0020` to `0x007E` Unicode code points)\n\n*   Authors **must not** use `CESU-8`, `UTF-7`, `BOCU-1` and/or `SCSU` as [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks with these encodings have been demonstrated.\n*   Authors should not use `UTF-32` because not all HTML5 encoding algorithms can distinguish it from `UTF-16`.\n\n**Notes:**\n\n*   The declared character encoding must match the one the page was saved with to avoid garbled characters and security holes.\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element declaring the encoding must be inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head "The HTML <head> element provides general information (metadata) about the document, including its title and links to its scripts and style sheets.") element and **within the first 1024 bytes** of the HTML as some browsers only look at those bytes before choosing an encoding.\n*   This [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element is only one part of the [algorithm to determine a page\'s character set](https://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#encoding-sniffing-algorithm "Algorithm charset page"). The [`Content-Type` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and any [Byte-Order Marks](https://developer.mozilla.org/en-US/docs/Glossary/Byte-Order_Mark "The definition of that term (Byte-Order Marks) has not been written yet; please consider contributing it!") override this element.\n*   It is strongly recommended to define the character encoding. If a page\'s encoding is undefined, cross-scripting techniques are possible, such as the [`UTF-7` fallback cross-scripting technique](https://code.google.com/p/doctype-mirror/wiki/ArticleUtf7).\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element with a `charset` attribute is a synonym for the pre-HTML5 `<meta http-equiv="Content-Type" content="text/html; charset=_IANAcharset_">`, where _`IANAcharset`_ contains the value of the equivalent [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute. This syntax is still allowed, although no longer recommended.',
                },
              },
              {
                name: 'scheme',
                description:
                  'This attribute defines the scheme in which metadata is described. A scheme is a context leading to the correct interpretations of the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) value, like a format.\n\n**Warning:** Do not use this value, as it is obsolete. There is no replacement as there was no real usage for it.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/meta',
              },
            ],
          },
          {
            name: 'style',
            description: {
              kind: 'markdown',
              value:
                'The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user.',
            },
            attributes: [
              {
                name: 'media',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute defines which media the style should be applied to. Its value is a [media query](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries), which defaults to `all` if the attribute is missing.',
                },
              },
              {
                name: 'nonce',
                description: {
                  kind: 'markdown',
                  value:
                    'A cryptographic nonce (number used once) used to whitelist inline styles in a [style-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource’s policy is otherwise trivial.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute defines the styling language as a MIME type (charset should not be specified). This attribute is optional and defaults to `text/css` if it is not specified — there is very little reason to include this in modern web documents.',
                },
              },
              { name: 'scoped', valueSet: 'v' },
              {
                name: 'title',
                description:
                  'This attribute specifies [alternative style sheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets) sets.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/style',
              },
            ],
          },
          {
            name: 'body',
            description: {
              kind: 'markdown',
              value: 'The body element represents the content of the document.',
            },
            attributes: [
              {
                name: 'onafterprint',
                description: {
                  kind: 'markdown',
                  value:
                    'Function to call after the user has printed the document.',
                },
              },
              {
                name: 'onbeforeprint',
                description: {
                  kind: 'markdown',
                  value:
                    'Function to call when the user requests printing of the document.',
                },
              },
              {
                name: 'onbeforeunload',
                description: {
                  kind: 'markdown',
                  value:
                    'Function to call when the document is about to be unloaded.',
                },
              },
              {
                name: 'onhashchange',
                description: {
                  kind: 'markdown',
                  value:
                    "Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed.",
                },
              },
              {
                name: 'onlanguagechange',
                description: {
                  kind: 'markdown',
                  value:
                    'Function to call when the preferred languages changed.',
                },
              },
              {
                name: 'onmessage',
                description: {
                  kind: 'markdown',
                  value:
                    'Function to call when the document has received a message.',
                },
              },
              {
                name: 'onoffline',
                description: {
                  kind: 'markdown',
                  value:
                    'Function to call when network communication has failed.',
                },
              },
              {
                name: 'ononline',
                description: {
                  kind: 'markdown',
                  value:
                    'Function to call when network communication has been restored.',
                },
              },
              { name: 'onpagehide' },
              { name: 'onpageshow' },
              {
                name: 'onpopstate',
                description: {
                  kind: 'markdown',
                  value:
                    'Function to call when the user has navigated session history.',
                },
              },
              {
                name: 'onstorage',
                description: {
                  kind: 'markdown',
                  value: 'Function to call when the storage area has changed.',
                },
              },
              {
                name: 'onunload',
                description: {
                  kind: 'markdown',
                  value: 'Function to call when the document is going away.',
                },
              },
              {
                name: 'alink',
                description:
                  'Color of text for hyperlinks when selected. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active "The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user.") pseudo-class instead._',
              },
              {
                name: 'background',
                description:
                  'URI of a image to use as a background. _This method is non-conforming, use CSS [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.") property on the element instead._',
              },
              {
                name: 'bgcolor',
                description:
                  'Background color for the document. _This method is non-conforming, use CSS [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property on the element instead._',
              },
              {
                name: 'bottommargin',
                description:
                  'The margin of the bottom of the body. _This method is non-conforming, use CSS [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
              },
              {
                name: 'leftmargin',
                description:
                  'The margin of the left of the body. _This method is non-conforming, use CSS [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
              },
              {
                name: 'link',
                description:
                  'Color of text for unvisited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link "The :link CSS pseudo-class represents an element that has not yet been visited. It matches every unvisited <a>, <area>, or <link> element that has an href attribute.") pseudo-class instead._',
              },
              {
                name: 'onblur',
                description: 'Function to call when the document loses focus.',
              },
              {
                name: 'onerror',
                description:
                  'Function to call when the document fails to load properly.',
              },
              {
                name: 'onfocus',
                description:
                  'Function to call when the document receives focus.',
              },
              {
                name: 'onload',
                description:
                  'Function to call when the document has finished loading.',
              },
              {
                name: 'onredo',
                description:
                  'Function to call when the user has moved forward in undo transaction history.',
              },
              {
                name: 'onresize',
                description:
                  'Function to call when the document has been resized.',
              },
              {
                name: 'onundo',
                description:
                  'Function to call when the user has moved backward in undo transaction history.',
              },
              {
                name: 'rightmargin',
                description:
                  'The margin of the right of the body. _This method is non-conforming, use CSS [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
              },
              {
                name: 'text',
                description:
                  'Foreground color of text. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property on the element instead._',
              },
              {
                name: 'topmargin',
                description:
                  'The margin of the top of the body. _This method is non-conforming, use CSS [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
              },
              {
                name: 'vlink',
                description:
                  'Color of text for visited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited "The :visited CSS pseudo-class represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.") pseudo-class instead._',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/body',
              },
            ],
          },
          {
            name: 'article',
            description: {
              kind: 'markdown',
              value:
                'The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/article',
              },
            ],
          },
          {
            name: 'section',
            description: {
              kind: 'markdown',
              value:
                'The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/section',
              },
            ],
          },
          {
            name: 'nav',
            description: {
              kind: 'markdown',
              value:
                'The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/nav',
              },
            ],
          },
          {
            name: 'aside',
            description: {
              kind: 'markdown',
              value:
                'The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/aside',
              },
            ],
          },
          {
            name: 'h1',
            description: {
              kind: 'markdown',
              value: 'The h1 element represents a section heading.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
              },
            ],
          },
          {
            name: 'h2',
            description: {
              kind: 'markdown',
              value: 'The h2 element represents a section heading.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
              },
            ],
          },
          {
            name: 'h3',
            description: {
              kind: 'markdown',
              value: 'The h3 element represents a section heading.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
              },
            ],
          },
          {
            name: 'h4',
            description: {
              kind: 'markdown',
              value: 'The h4 element represents a section heading.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
              },
            ],
          },
          {
            name: 'h5',
            description: {
              kind: 'markdown',
              value: 'The h5 element represents a section heading.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
              },
            ],
          },
          {
            name: 'h6',
            description: {
              kind: 'markdown',
              value: 'The h6 element represents a section heading.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
              },
            ],
          },
          {
            name: 'header',
            description: {
              kind: 'markdown',
              value:
                'The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/header',
              },
            ],
          },
          {
            name: 'footer',
            description: {
              kind: 'markdown',
              value:
                'The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/footer',
              },
            ],
          },
          {
            name: 'address',
            description: {
              kind: 'markdown',
              value:
                'The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/address',
              },
            ],
          },
          {
            name: 'p',
            description: {
              kind: 'markdown',
              value: 'The p element represents a paragraph.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/p',
              },
            ],
          },
          {
            name: 'hr',
            description: {
              kind: 'markdown',
              value:
                'The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'Sets the alignment of the rule on the page. If no value is specified, the default value is `left`.',
              },
              {
                name: 'color',
                description:
                  'Sets the color of the rule through color name or hexadecimal value.',
              },
              {
                name: 'noshade',
                description: 'Sets the rule to have no shading.',
              },
              {
                name: 'size',
                description: 'Sets the height, in pixels, of the rule.',
              },
              {
                name: 'width',
                description:
                  'Sets the length of the rule on the page through a pixel or percentage value.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/hr',
              },
            ],
          },
          {
            name: 'pre',
            description: {
              kind: 'markdown',
              value:
                'The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.',
            },
            attributes: [
              {
                name: 'cols',
                description:
                  'Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre#attr-width). To achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.',
              },
              {
                name: 'width',
                description:
                  'Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.',
              },
              {
                name: 'wrap',
                description:
                  'Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space "The white-space CSS property sets how white space inside an element is handled.") instead.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/pre',
              },
            ],
          },
          {
            name: 'blockquote',
            description: {
              kind: 'markdown',
              value:
                'The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.',
            },
            attributes: [
              {
                name: 'cite',
                description: {
                  kind: 'markdown',
                  value:
                    'A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/blockquote',
              },
            ],
          },
          {
            name: 'ol',
            description: {
              kind: 'markdown',
              value:
                'The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.',
            },
            attributes: [
              {
                name: 'reversed',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute specifies that the items of the list are specified in reversed order.',
                },
              },
              {
                name: 'start',
                description: {
                  kind: 'markdown',
                  value:
                    'This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use `<ol start="3">`.\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.',
                },
              },
              {
                name: 'type',
                valueSet: 'lt',
                description: {
                  kind: 'markdown',
                  value:
                    "Indicates the numbering type:\n\n*   `'a'` indicates lowercase letters,\n*   `'A'` indicates uppercase letters,\n*   `'i'` indicates lowercase Roman numerals,\n*   `'I'` indicates uppercase Roman numerals,\n*   and `'1'` indicates numbers (default).\n\nThe type set is used for the entire list unless a different [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-type) attribute is used within an enclosed [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li \"The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.\") element.\n\n**Note:** This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\nUnless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type \"The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\") property should be used instead.",
                },
              },
              {
                name: 'compact',
                description:
                  'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Warning:** Do not use this attribute, as it has been deprecated: the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give an effect similar to the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height "The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.") can be used with a value of `80%`.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ol',
              },
            ],
          },
          {
            name: 'ul',
            description: {
              kind: 'markdown',
              value:
                'The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.',
            },
            attributes: [
              {
                name: 'compact',
                description:
                  'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Usage note: **Do not use this attribute, as it has been deprecated: the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give a similar effect as the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [line-height](https://developer.mozilla.org/en-US/docs/CSS/line-height) can be used with a value of `80%`.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ul',
              },
            ],
          },
          {
            name: 'li',
            description: {
              kind: 'markdown',
              value:
                "The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.",
            },
            attributes: [
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    'This integer attribute indicates the current ordinal value of the list item as defined by the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The **value** attribute has no meaning for unordered lists ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.")) or for menus ([`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.")).\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\n**Note:** Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed.',
                },
              },
              {
                name: 'type',
                description:
                  'This character attribute indicates the numbering type:\n\n*   `a`: lowercase letters\n*   `A`: uppercase letters\n*   `i`: lowercase Roman numerals\n*   `I`: uppercase Roman numerals\n*   `1`: numbers\n\nThis type overrides the one used by its parent [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element, if any.\n\n**Usage note:** This attribute has been deprecated: use the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property instead.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/li',
              },
            ],
          },
          {
            name: 'dl',
            description: {
              kind: 'markdown',
              value:
                'The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dl',
              },
            ],
          },
          {
            name: 'dt',
            description: {
              kind: 'markdown',
              value:
                'The dt element represents the term, or name, part of a term-description group in a description list (dl element).',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dt',
              },
            ],
          },
          {
            name: 'dd',
            description: {
              kind: 'markdown',
              value:
                'The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).',
            },
            attributes: [
              {
                name: 'nowrap',
                description:
                  'If the value of this attribute is set to `yes`, the definition text will not wrap. The default value is `no`.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dd',
              },
            ],
          },
          {
            name: 'figure',
            description: {
              kind: 'markdown',
              value:
                'The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/figure',
              },
            ],
          },
          {
            name: 'figcaption',
            description: {
              kind: 'markdown',
              value:
                "The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/figcaption',
              },
            ],
          },
          {
            name: 'main',
            description: {
              kind: 'markdown',
              value:
                'The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/main',
              },
            ],
          },
          {
            name: 'div',
            description: {
              kind: 'markdown',
              value:
                'The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/div',
              },
            ],
          },
          {
            name: 'a',
            description: {
              kind: 'markdown',
              value:
                'If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.',
            },
            attributes: [
              {
                name: 'href',
                description: {
                  kind: 'markdown',
                  value:
                    'Contains a URL or a URL fragment that the hyperlink points to.',
                },
              },
              {
                name: 'target',
                description: {
                  kind: 'markdown',
                  value:
                    'Specifies where to display the linked URL. It is a name of, or keyword for, a _browsing context_: a tab, window, or `<iframe>`. The following keywords have special meanings:\n\n*   `_self`: Load the URL into the same browsing context as the current one. This is the default behavior.\n*   `_blank`: Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.\n*   `_parent`: Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as `_self`.\n*   `_top`: Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this behaves the same way as `_self`.\n\n**Note:** When using `target`, consider adding `rel="noreferrer"` to avoid exploitation of the `window.opener` API.\n\n**Note:** Linking to another page using `target="_blank"` will run the new page on the same process as your page. If the new page is executing expensive JS, your page\'s performance may suffer. To avoid this use `rel="noopener"`.',
                },
              },
              {
                name: 'download',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). There are no restrictions on allowed values, though `/` and `\\` are converted to underscores. Most file systems limit some punctuation in file names, and browsers will adjust the suggested name accordingly.\n\n**Notes:**\n\n*   This attribute only works for [same-origin URLs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).\n*   Although HTTP(s) URLs need to be in the same-origin, [`blob:` URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL.createObjectURL) and [`data:` URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are allowed so that content generated by JavaScript, such as pictures created in an image-editor Web app, can be downloaded.\n*   If the HTTP header [`Content-Disposition:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) gives a different filename than this attribute, the HTTP header takes priority over this attribute.\n*   If `Content-Disposition:` is set to `inline`, Firefox prioritizes `Content-Disposition`, like the filename case, while Chrome prioritizes the `download` attribute.',
                },
              },
              {
                name: 'ping',
                description: {
                  kind: 'markdown',
                  value:
                    'Contains a space-separated list of URLs to which, when the hyperlink is followed, [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST "The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.") requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.',
                },
              },
              {
                name: 'rel',
                description: {
                  kind: 'markdown',
                  value:
                    'Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).',
                },
              },
              {
                name: 'hreflang',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt "Tags for Identifying Languages").',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'Specifies the media type in the form of a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type "MIME type: A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).") for the linked URL. It is purely advisory, with no built-in functionality.',
                },
              },
              {
                name: 'referrerpolicy',
                description:
                  "Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) to send when fetching the URL:\n\n*   `'no-referrer'` means the `Referer:` header will not be sent.\n*   `'no-referrer-when-downgrade'` means no `Referer:` header will be sent when navigating to an origin without HTTPS. This is the default behavior.\n*   `'origin'` means the referrer will be the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the page, not including information after the domain.\n*   `'origin-when-cross-origin'` meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.\n*   `'strict-origin-when-cross-origin'`\n*   `'unsafe-url'` means the referrer will include the origin and path, but not the fragment, password, or username. This is unsafe because it can leak data from secure URLs to insecure ones.",
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/a',
              },
            ],
          },
          {
            name: 'em',
            description: {
              kind: 'markdown',
              value:
                'The em element represents stress emphasis of its contents.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/em',
              },
            ],
          },
          {
            name: 'strong',
            description: {
              kind: 'markdown',
              value:
                'The strong element represents strong importance, seriousness, or urgency for its contents.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/strong',
              },
            ],
          },
          {
            name: 'small',
            description: {
              kind: 'markdown',
              value:
                'The small element represents side comments such as small print.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/small',
              },
            ],
          },
          {
            name: 's',
            description: {
              kind: 'markdown',
              value:
                'The s element represents contents that are no longer accurate or no longer relevant.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/s',
              },
            ],
          },
          {
            name: 'cite',
            description: {
              kind: 'markdown',
              value:
                'The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/cite',
              },
            ],
          },
          {
            name: 'q',
            description: {
              kind: 'markdown',
              value:
                'The q element represents some phrasing content quoted from another source.',
            },
            attributes: [
              {
                name: 'cite',
                description: {
                  kind: 'markdown',
                  value:
                    'The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/q',
              },
            ],
          },
          {
            name: 'dfn',
            description: {
              kind: 'markdown',
              value:
                'The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dfn',
              },
            ],
          },
          {
            name: 'abbr',
            description: {
              kind: 'markdown',
              value:
                'The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/abbr',
              },
            ],
          },
          {
            name: 'ruby',
            description: {
              kind: 'markdown',
              value:
                'The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ruby',
              },
            ],
          },
          {
            name: 'rb',
            description: {
              kind: 'markdown',
              value:
                "The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rb',
              },
            ],
          },
          {
            name: 'rt',
            description: {
              kind: 'markdown',
              value:
                "The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rt',
              },
            ],
          },
          {
            name: 'rp',
            description: {
              kind: 'markdown',
              value:
                "The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rp',
              },
            ],
          },
          {
            name: 'time',
            description: {
              kind: 'markdown',
              value:
                'The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.',
            },
            attributes: [
              {
                name: 'datetime',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the time and/or date of the element and must be in one of the formats described below.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/time',
              },
            ],
          },
          {
            name: 'code',
            description: {
              kind: 'markdown',
              value:
                'The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/code',
              },
            ],
          },
          {
            name: 'var',
            description: {
              kind: 'markdown',
              value:
                'The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/var',
              },
            ],
          },
          {
            name: 'samp',
            description: {
              kind: 'markdown',
              value:
                'The samp element represents sample or quoted output from another program or computing system.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/samp',
              },
            ],
          },
          {
            name: 'kbd',
            description: {
              kind: 'markdown',
              value:
                'The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/kbd',
              },
            ],
          },
          {
            name: 'sub',
            description: {
              kind: 'markdown',
              value: 'The sub element represents a subscript.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/sub',
              },
            ],
          },
          {
            name: 'sup',
            description: {
              kind: 'markdown',
              value: 'The sup element represents a superscript.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/sup',
              },
            ],
          },
          {
            name: 'i',
            description: {
              kind: 'markdown',
              value:
                'The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/i',
              },
            ],
          },
          {
            name: 'b',
            description: {
              kind: 'markdown',
              value:
                'The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/b',
              },
            ],
          },
          {
            name: 'u',
            description: {
              kind: 'markdown',
              value:
                'The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/u',
              },
            ],
          },
          {
            name: 'mark',
            description: {
              kind: 'markdown',
              value:
                "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/mark',
              },
            ],
          },
          {
            name: 'bdi',
            description: {
              kind: 'markdown',
              value:
                'The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/bdi',
              },
            ],
          },
          {
            name: 'bdo',
            description: {
              kind: 'markdown',
              value:
                'The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]',
            },
            attributes: [
              {
                name: 'dir',
                description:
                  "The direction in which text should be rendered in this element's contents. Possible values are:\n\n*   `ltr`: Indicates that the text should go in a left-to-right direction.\n*   `rtl`: Indicates that the text should go in a right-to-left direction.",
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/bdo',
              },
            ],
          },
          {
            name: 'span',
            description: {
              kind: 'markdown',
              value:
                "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/span',
              },
            ],
          },
          {
            name: 'br',
            description: {
              kind: 'markdown',
              value: 'The br element represents a line break.',
            },
            attributes: [
              {
                name: 'clear',
                description:
                  'Indicates where to begin the next line after the break.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/br',
              },
            ],
          },
          {
            name: 'wbr',
            description: {
              kind: 'markdown',
              value: 'The wbr element represents a line break opportunity.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/wbr',
              },
            ],
          },
          {
            name: 'ins',
            description: {
              kind: 'markdown',
              value: 'The ins element represents an addition to the document.',
            },
            attributes: [
              {
                name: 'cite',
                description:
                  'This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system.',
              },
              {
                name: 'datetime',
                description:
                  'This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ins',
              },
            ],
          },
          {
            name: 'del',
            description: {
              kind: 'markdown',
              value: 'The del element represents a removal from the document.',
            },
            attributes: [
              {
                name: 'cite',
                description: {
                  kind: 'markdown',
                  value:
                    'A URI for a resource that explains the change (for example, meeting minutes).',
                },
              },
              {
                name: 'datetime',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/del',
              },
            ],
          },
          {
            name: 'picture',
            description: {
              kind: 'markdown',
              value:
                'The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/picture',
              },
            ],
          },
          {
            name: 'img',
            description: {
              kind: 'markdown',
              value: 'An img element represents an image.',
            },
            attributes: [
              {
                name: 'alt',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute defines an alternative text description of the image.\n\n**Note:** Browsers do not always display the image referenced by the element. This is the case for non-graphical browsers (including those used by people with visual impairments), if the user chooses not to display images, or if the browser cannot display the image because it is invalid or an [unsupported type](#Supported_image_formats). In these cases, the browser may replace the image with the text defined in this element\'s `alt` attribute. You should, for these reasons and others, provide a useful value for `alt` whenever possible.\n\n**Note:** Omitting this attribute altogether indicates that the image is a key part of the content, and no textual equivalent is available. Setting this attribute to an empty string (`alt=""`) indicates that this image is _not_ a key part of the content (decorative), and that non-visual browsers may omit it from rendering.',
                },
              },
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    "The image URL. This attribute is mandatory for the `<img>` element. On browsers supporting `srcset`, `src` is treated like a candidate image with a pixel density descriptor `1x` unless an image with this pixel density descriptor is already defined in `srcset,` or unless `srcset` contains '`w`' descriptors.",
                },
              },
              {
                name: 'srcset',
                description: {
                  kind: 'markdown',
                  value:
                    "A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. Each string is composed of:\n\n1.  a URL to an image,\n2.  optionally, whitespace followed by one of:\n    *   A width descriptor, or a positive integer directly followed by '`w`'. The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density.\n    *   A pixel density descriptor, which is a positive floating point number directly followed by '`x`'.\n\nIf no descriptor is specified, the source is assigned the default descriptor: `1x`.\n\nIt is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with '`2x`') are also invalid.\n\nThe user agent selects any one of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial for an example.",
                },
              },
              {
                name: 'crossorigin',
                valueSet: 'xo',
                description: {
                  kind: 'markdown',
                  value:
                    'This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being "[tainted](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#What_is_a_tainted_canvas)." The allowed values are:',
                },
              },
              {
                name: 'usemap',
                description: {
                  kind: 'markdown',
                  value:
                    'The partial URL (starting with \'#\') of an [image map](https://developer.mozilla.org/en-US/docs/HTML/Element/map) associated with the element.\n\n**Note:** You cannot use this attribute if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") element.',
                },
              },
              {
                name: 'ismap',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the image is part of a server-side map. If so, the precise coordinates of a click are sent to the server.\n\n**Note:** This attribute is allowed only if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") element with a valid [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute.',
                },
              },
              {
                name: 'width',
                description: {
                  kind: 'markdown',
                  value: 'The intrinsic width of the image in pixels.',
                },
              },
              {
                name: 'height',
                description: {
                  kind: 'markdown',
                  value: 'The intrinsic height of the image in pixels.',
                },
              },
              {
                name: 'decoding',
                description:
                  'Provides an image decoding hint to the browser. The allowed values are:',
              },
              {
                name: 'decoding',
                description:
                  '`sync`\n\nDecode the image synchronously for atomic presentation with other content.\n\n`async`\n\nDecode the image asynchronously to reduce delay in presenting other content.\n\n`auto`\n\nDefault mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.',
              },
              {
                name: 'importance',
                description:
                  'Indicates the relative importance of the resource. Priority hints are delegated using the values:',
              },
              {
                name: 'importance',
                description:
                  '`auto`: Indicates **no preference**. The browser may use its own heuristics to decide the priority of the image.\n\n`high`: Indicates to the browser that the image is of **high** priority.\n\n`low`: Indicates to the browser that the image is of **low** priority.',
              },
              {
                name: 'intrinsicsize',
                description:
                  'This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)',
              },
              {
                name: 'referrerpolicy',
                description:
                  'A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer:` The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade:` No `Referer` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior if no policy is otherwise specified.\n*   `origin:` The `Referer` header will include the page of origin\'s scheme, the host, and the port.\n*   `origin-when-cross-origin:` Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer\'s full path.\n*   `unsafe-url:` The `Referer` header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.',
              },
              {
                name: 'sizes',
                description:
                  "A list of one or more strings separated by commas indicating a set of source sizes. Each source size consists of:\n\n1.  a media condition. This must be omitted for the last item.\n2.  a source size value.\n\nSource size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the `srcset` attribute, when those sources are described using width ('`w`') descriptors. The selected source size affects the intrinsic size of the image (the image’s display size if no CSS styling is applied). If the `srcset` attribute is absent, or contains no values with a width (`w`) descriptor, then the `sizes` attribute has no effect.",
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/img',
              },
            ],
          },
          {
            name: 'iframe',
            description: {
              kind: 'markdown',
              value: 'The iframe element represents a nested browsing context.',
            },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'The URL of the page to embed. Use a value of `about:blank` to embed an empty page that conforms to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Inherited_origins). Also note that programatically removing an `<iframe>`\'s src attribute (e.g. via [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute "The Element method removeAttribute() removes the attribute with the specified name from the element.")) causes `about:blank` to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.',
                },
              },
              {
                name: 'srcdoc',
                description: {
                  kind: 'markdown',
                  value:
                    'Inline HTML to embed, overriding the `src` attribute. If a browser does not support the `srcdoc` attribute, it will fall back to the URL in the `src` attribute.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'A targetable name for the embedded browsing context. This can be used in the `target` attribute of the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL."), [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."), or [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base "The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.") elements; the `formtarget` attribute of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") elements; or the `windowName` parameter in the [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open "The Window interface\'s open() method loads the specified resource into the browsing context (window, <iframe> or tab) with the specified name. If the name doesn\'t exist, then a new window is opened and the specified resource is loaded into its browsing context.") method.',
                },
              },
              {
                name: 'sandbox',
                valueSet: 'sb',
                description: {
                  kind: 'markdown',
                  value:
                    'Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:\n\n*   `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.\n*   `allow-modals`: Lets the resource [open modal windows](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag).\n*   `allow-orientation-lock`: Lets the resource [lock the screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation).\n*   `allow-pointer-lock`: Lets the resource use the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/WebAPI/Pointer_Lock).\n*   `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.\n*   `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.\n*   `allow-presentation`: Lets the resource start a [presentation session](https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest).\n*   `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the [same-origin policy](https://developer.mozilla.org/en-US/docs/Glossary/same-origin_policy "same-origin policy: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.").\n*   `allow-scripts`: Lets the resource run scripts (but not create popup windows).\n*   `allow-storage-access-by-user-activation` : Lets the resource request access to the parent\'s storage capabilities with the [Storage Access API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API).\n*   `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).\n*   `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.\n\n**Notes about sandboxing:**\n\n*   When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute — making it no more secure than not using the `sandbox` attribute at all.\n*   Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` — such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.\n*   The `sandbox` attribute is unsupported in Internet Explorer 9 and earlier.',
                },
              },
              { name: 'seamless', valueSet: 'v' },
              {
                name: 'allowfullscreen',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'Set to `true` if the `<iframe>` can activate fullscreen mode by calling the [`requestFullscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen "The Element.requestFullscreen() method issues an asynchronous request to make the element be displayed in full-screen mode.") method.',
                },
              },
              {
                name: 'width',
                description: {
                  kind: 'markdown',
                  value:
                    'The width of the frame in CSS pixels. Default is `300`.',
                },
              },
              {
                name: 'height',
                description: {
                  kind: 'markdown',
                  value:
                    'The height of the frame in CSS pixels. Default is `150`.',
                },
              },
              {
                name: 'allow',
                description:
                  'Specifies a [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for the `<iframe>`.',
              },
              {
                name: 'allowpaymentrequest',
                description:
                  'Set to `true` if a cross-origin `<iframe>` should be allowed to invoke the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API).',
              },
              {
                name: 'allowpaymentrequest',
                description:
                  'This attribute is considered a legacy attribute and redefined as `allow="payment"`.',
              },
              {
                name: 'csp',
                description:
                  'A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) enforced for the embedded resource. See [`HTMLIFrameElement.csp`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp "The csp property of the HTMLIFrameElement interface specifies the Content Security Policy that an embedded document must agree to enforce upon itself.") for details.',
              },
              {
                name: 'importance',
                description:
                  "The download priority of the resource in the `<iframe>`'s `src` attribute. Allowed values:\n\n`auto` (default)\n\nNo preference. The browser uses its own heuristics to decide the priority of the resource.\n\n`high`\n\nThe resource should be downloaded before other lower-priority page resources.\n\n`low`\n\nThe resource should be downloaded after other higher-priority page resources.",
              },
              {
                name: 'referrerpolicy',
                description:
                  'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the frame\'s resource:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don\'t send it to a less secure destination (HTTPS→HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/iframe',
              },
            ],
          },
          {
            name: 'embed',
            description: {
              kind: 'markdown',
              value:
                'The embed element provides an integration point for an external (typically non-HTML) application or interactive content.',
            },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value: 'The URL of the resource being embedded.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'The MIME type to use to select the plug-in to instantiate.',
                },
              },
              {
                name: 'width',
                description: {
                  kind: 'markdown',
                  value:
                    'The displayed width of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.',
                },
              },
              {
                name: 'height',
                description: {
                  kind: 'markdown',
                  value:
                    'The displayed height of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/embed',
              },
            ],
          },
          {
            name: 'object',
            description: {
              kind: 'markdown',
              value:
                'The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.',
            },
            attributes: [
              {
                name: 'data',
                description: {
                  kind: 'markdown',
                  value:
                    'The address of the resource as a valid URL. At least one of **data** and **type** must be defined.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'The [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource specified by **data**. At least one of **data** and **type** must be defined.',
                },
              },
              {
                name: 'typemustmatch',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates if the **type** attribute and the actual [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource must match to be used.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name of valid browsing context (HTML5), or the name of the control (HTML 4).',
                },
              },
              {
                name: 'usemap',
                description: {
                  kind: 'markdown',
                  value:
                    'A hash-name reference to a [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map "The HTML <map> element is used with <area> elements to define an image map (a clickable link area).") element; that is a \'#\' followed by the value of a [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map#attr-name) of a map element.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document.',
                },
              },
              {
                name: 'width',
                description: {
                  kind: 'markdown',
                  value:
                    'The width of the display resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))',
                },
              },
              {
                name: 'height',
                description: {
                  kind: 'markdown',
                  value:
                    'The height of the displayed resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))',
                },
              },
              {
                name: 'archive',
                description:
                  'A space-separated list of URIs for archives of resources for the object.',
              },
              {
                name: 'border',
                description:
                  'The width of a border around the control, in pixels.',
              },
              {
                name: 'classid',
                description:
                  "The URI of the object's implementation. It can be used together with, or in place of, the **data** attribute.",
              },
              {
                name: 'codebase',
                description:
                  'The base path used to resolve relative URIs specified by **classid**, **data**, or **archive**. If not specified, the default is the base URI of the current document.',
              },
              {
                name: 'codetype',
                description:
                  'The content type of the data specified by **classid**.',
              },
              {
                name: 'declare',
                description:
                  'The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. In HTML5, repeat the <object> element completely each that that the resource is reused.',
              },
              {
                name: 'standby',
                description:
                  "A message that the browser can show while loading the object's implementation and data.",
              },
              {
                name: 'tabindex',
                description:
                  'The position of the element in the tabbing navigation order for the current document.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/object',
              },
            ],
          },
          {
            name: 'param',
            description: {
              kind: 'markdown',
              value:
                'The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own.',
            },
            attributes: [
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value: 'Name of the parameter.',
                },
              },
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value: 'Specifies the value of the parameter.',
                },
              },
              {
                name: 'type',
                description:
                  'Only used if the `valuetype` is set to "ref". Specifies the MIME type of values found at the URI specified by value.',
              },
              {
                name: 'valuetype',
                description:
                  'Specifies the type of the `value` attribute. Possible values are:\n\n*   data: Default value. The value is passed to the object\'s implementation as a string.\n*   ref: The value is a URI to a resource where run-time values are stored.\n*   object: An ID of another [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object "The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.") in the same document.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/param',
              },
            ],
          },
          {
            name: 'video',
            description: {
              kind: 'markdown',
              value:
                'A video element is used for playing videos or movies, and audio files with captions.',
            },
            attributes: [
              { name: 'src' },
              { name: 'crossorigin', valueSet: 'xo' },
              { name: 'poster' },
              { name: 'preload', valueSet: 'pl' },
              {
                name: 'autoplay',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.',
                },
              },
              { name: 'mediagroup' },
              { name: 'loop', valueSet: 'v' },
              { name: 'muted', valueSet: 'v' },
              { name: 'controls', valueSet: 'v' },
              { name: 'width' },
              { name: 'height' },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/video',
              },
            ],
          },
          {
            name: 'audio',
            description: {
              kind: 'markdown',
              value: 'An audio element represents a sound or audio stream.',
            },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'The URL of the audio to embed. This is subject to [HTTP access controls](https://developer.mozilla.org/en-US/docs/HTTP_access_control). This is optional; you may instead use the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element within the audio block to specify the audio to embed.',
                },
              },
              {
                name: 'crossorigin',
                valueSet: 'xo',
                description: {
                  kind: 'markdown',
                  value:
                    'This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\nanonymous\n\nSends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.\n\nuse-credentials\n\nSends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.\n\nWhen not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes) for additional information.',
                },
              },
              {
                name: 'preload',
                valueSet: 'pl',
                description: {
                  kind: 'markdown',
                  value:
                    "This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:\n\n*   `none`: Indicates that the audio should not be preloaded.\n*   `metadata`: Indicates that only audio metadata (e.g. length) is fetched.\n*   `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.\n*   _empty string_: A synonym of the `auto` value.\n\nIf not set, `preload`'s default value is browser-defined (i.e. each browser may have its own default value). The spec advises it to be set to `metadata`.\n\n**Usage notes:**\n\n*   The `autoplay` attribute has precedence over `preload`. If `autoplay` is specified, the browser would obviously need to start downloading the audio for playback.\n*   The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.",
                },
              },
              {
                name: 'autoplay',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.\n\n**Note**: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.',
                },
              },
              { name: 'mediagroup' },
              {
                name: 'loop',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio.',
                },
              },
              {
                name: 'muted',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is `false`.',
                },
              },
              {
                name: 'controls',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/audio',
              },
            ],
          },
          {
            name: 'source',
            description: {
              kind: 'markdown',
              value:
                'The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own.',
            },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'Required for [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document."), address of the media resource. The value of this attribute is ignored when the `<source>` element is placed inside a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'The MIME-type of the resource, optionally with a `codecs` parameter. See [RFC 4281](https://tools.ietf.org/html/rfc4281) for information about how to specify codecs.',
                },
              },
              {
                name: 'sizes',
                description:
                  'Is a list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. This information is used by the browser to determine, before laying the page out, which image defined in [`srcset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-srcset) to use.  \nThe `sizes` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
              },
              {
                name: 'srcset',
                description:
                  'A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use. Each string is composed of:\n\n1.  one URL to an image,\n2.  a width descriptor, that is a positive integer directly followed by `\'w\'`. The default value, if missing, is the infinity.\n3.  a pixel density descriptor, that is a positive floating number directly followed by `\'x\'`. The default value, if missing, is `1x`.\n\nEach string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor.  \nThe browser chooses the most adequate image to display at a given point of time.  \nThe `srcset` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
              },
              {
                name: 'media',
                description:
                  '[Media query](https://developer.mozilla.org/en-US/docs/CSS/Media_queries) of the resource\'s intended media; this should be used only in a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/source',
              },
            ],
          },
          {
            name: 'track',
            description: {
              kind: 'markdown',
              value:
                'The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.',
            },
            attributes: [
              {
                name: 'default',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one `track` element per media element.",
                },
              },
              {
                name: 'kind',
                valueSet: 'tk',
                description: {
                  kind: 'markdown',
                  value:
                    "How the text track is meant to be used. If omitted the default kind is `subtitles`. If the attribute is not present, it will use the `subtitles`. If the attribute contains an invalid value, it will use `metadata`. (Versions of Chrome earlier than 52 treated an invalid value as `subtitles`.) The following keywords are allowed:\n\n*   `subtitles`\n    *   Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.\n    *   Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.\n*   `captions`\n    *   Closed captions provide a transcription and possibly a translation of audio.\n    *   It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).\n    *   Suitable for users who are deaf or when the sound is muted.\n*   `descriptions`\n    *   Textual description of the video content.\n    *   Suitable for users who are blind or where the video cannot be seen.\n*   `chapters`\n    *   Chapter titles are intended to be used when the user is navigating the media resource.\n*   `metadata`\n    *   Tracks used by scripts. Not visible to the user.",
                },
              },
              {
                name: 'label',
                description: {
                  kind: 'markdown',
                  value:
                    'A user-readable title of the text track which is used by the browser when listing available text tracks.',
                },
              },
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'Address of the track (`.vtt` file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document — unless the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document.") parent element of the `track` element has a [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute.',
                },
              },
              {
                name: 'srclang',
                description: {
                  kind: 'markdown',
                  value:
                    'Language of the track text data. It must be a valid [BCP 47](https://r12a.github.io/app-subtags/) language tag. If the `kind` attribute is set to `subtitles,` then `srclang` must be defined.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/track',
              },
            ],
          },
          {
            name: 'map',
            description: {
              kind: 'markdown',
              value:
                'The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.',
            },
            attributes: [
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/map',
              },
            ],
          },
          {
            name: 'area',
            description: {
              kind: 'markdown',
              value:
                'The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map.',
            },
            attributes: [
              { name: 'alt' },
              { name: 'coords' },
              { name: 'shape', valueSet: 'sh' },
              { name: 'href' },
              { name: 'target' },
              { name: 'download' },
              { name: 'ping' },
              { name: 'rel' },
              { name: 'hreflang' },
              { name: 'type' },
              {
                name: 'accesskey',
                description:
                  'Specifies a keyboard navigation accelerator for the element. Pressing ALT or a similar key in association with the specified character selects the form control correlated with that key sequence. Page designers are forewarned to avoid key sequences already bound to browsers. This attribute is global since HTML5.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/area',
              },
            ],
          },
          {
            name: 'table',
            description: {
              kind: 'markdown',
              value:
                'The table element represents data with more than one dimension, in the form of a table.',
            },
            attributes: [
              { name: 'border' },
              {
                name: 'align',
                description:
                  'This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values:\n\n*   left: the table is displayed on the left side of the document;\n*   center: the table is displayed in the center of the document;\n*   right: the table is displayed on the right side of the document.\n\n**Usage Note**\n\n*   **Do not use this attribute**, as it has been deprecated. The [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). Set [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") and [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") to `auto` or [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.") to `0 auto` to achieve an effect that is similar to the align attribute.\n*   Prior to Firefox 4, Firefox also supported the `middle`, `absmiddle`, and `abscenter` values as synonyms of `center`, in quirks mode only.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/table',
              },
            ],
          },
          {
            name: 'caption',
            description: {
              kind: 'markdown',
              value:
                'The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values:\n\n`left`\n\nThe caption is displayed to the left of the table.\n\n`top`\n\nThe caption is displayed above the table.\n\n`right`\n\nThe caption is displayed to the right of the table.\n\n`bottom`\n\nThe caption is displayed below the table.\n\n**Usage note:** Do not use this attribute, as it has been deprecated. The [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption "The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>.") element should be styled using the [CSS](https://developer.mozilla.org/en-US/docs/CSS) properties [`caption-side`](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side "The caption-side CSS property puts the content of a table\'s <caption> on the specified side. The values are relative to the writing-mode of the table.") and [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.").',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/caption',
              },
            ],
          },
          {
            name: 'colgroup',
            description: {
              kind: 'markdown',
              value:
                'The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element.',
            },
            attributes: [
              { name: 'span' },
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed. The descendant [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") elements may override this value using their own [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-align) attribute.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use one `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property can be used.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/colgroup',
              },
            ],
          },
          {
            name: 'col',
            description: {
              kind: 'markdown',
              value:
                'If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup.',
            },
            attributes: [
              { name: 'span' },
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, its value is inherited from the [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-align) of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element this `<col>` element belongs too. If there are none, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/col',
              },
            ],
          },
          {
            name: 'tbody',
            description: {
              kind: 'markdown',
              value:
                'The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes.\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/tbody',
              },
            ],
          },
          {
            name: 'thead',
            description: {
              kind: 'markdown',
              value:
                'The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/thead',
              },
            ],
          },
          {
            name: 'tfoot',
            description: {
              kind: 'markdown',
              value:
                'The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/tfoot',
              },
            ],
          },
          {
            name: 'tr',
            description: {
              kind: 'markdown',
              value: 'The tr element represents a row of cells in a table.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") which specifies how the cell\'s context should be aligned horizontally within the cells in the row; this is shorthand for using `align` on every cell in the row individually. Possible values are:\n\n`left`\n\nAlign the content of each cell at its left edge.\n\n`center`\n\nCenter the contents of each cell between their left and right edges.\n\n`right`\n\nAlign the content of each cell at its right edge.\n\n`justify`\n\nWiden whitespaces within the text of each cell so that the text fills the full width of each cell (full justification).\n\n`char`\n\nAlign each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-charoff) to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported.\n\nIf no value is expressly set for `align`, the parent node\'s value is inherited.\n\nInstead of using the obsolete `align` attribute, you should instead use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to establish `left`, `center`, `right`, or `justify` alignment for the row\'s cells. To apply character-based alignment, set the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the alignment character (such as `"."` or `","`).',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/tr',
              },
            ],
          },
          {
            name: 'td',
            description: {
              kind: 'markdown',
              value: 'The td element represents a data cell in a table.',
            },
            attributes: [
              { name: 'colspan' },
              { name: 'rowspan' },
              { name: 'headers' },
              {
                name: 'abbr',
                description:
                  "This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the **title** attribute.",
              },
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char). Unimplemented in CSS3.',
              },
              {
                name: 'axis',
                description:
                  'This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.',
              },
              {
                name: 'bgcolor',
                description:
                  'This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by \'#\'. This attribute may be used with one of sixteen predefined color strings:\n\n \n\n`black` = "#000000"\n\n \n\n`green` = "#008000"\n\n \n\n`silver` = "#C0C0C0"\n\n \n\n`lime` = "#00FF00"\n\n \n\n`gray` = "#808080"\n\n \n\n`olive` = "#808000"\n\n \n\n`white` = "#FFFFFF"\n\n \n\n`yellow` = "#FFFF00"\n\n \n\n`maroon` = "#800000"\n\n \n\n`navy` = "#000080"\n\n \n\n`red` = "#FF0000"\n\n \n\n`blue` = "#0000FF"\n\n \n\n`purple` = "#800080"\n\n \n\n`teal` = "#008080"\n\n \n\n`fuchsia` = "#FF00FF"\n\n \n\n`aqua` = "#00FFFF"\n\n**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To create a similar effect use the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/CSS) instead.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/td',
              },
            ],
          },
          {
            name: 'th',
            description: {
              kind: 'markdown',
              value: 'The th element represents a header cell in a table.',
            },
            attributes: [
              { name: 'colspan' },
              { name: 'rowspan' },
              { name: 'headers' },
              { name: 'scope', valueSet: 's' },
              { name: 'sorted' },
              {
                name: 'abbr',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.",
                },
              },
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-charoff) attributes.\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char). Unimplemented in CSS3.',
              },
              {
                name: 'axis',
                description:
                  'This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard: use the [`scope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) attribute instead.',
              },
              {
                name: 'bgcolor',
                description:
                  'This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by \'#\'. This attribute may be used with one of sixteen predefined color strings:\n\n \n\n`black` = "#000000"\n\n \n\n`green` = "#008000"\n\n \n\n`silver` = "#C0C0C0"\n\n \n\n`lime` = "#00FF00"\n\n \n\n`gray` = "#808080"\n\n \n\n`olive` = "#808000"\n\n \n\n`white` = "#FFFFFF"\n\n \n\n`yellow` = "#FFFF00"\n\n \n\n`maroon` = "#800000"\n\n \n\n`navy` = "#000080"\n\n \n\n`red` = "#FF0000"\n\n \n\n`blue` = "#0000FF"\n\n \n\n`purple` = "#800080"\n\n \n\n`teal` = "#008080"\n\n \n\n`fuchsia` = "#FF00FF"\n\n \n\n`aqua` = "#00FFFF"\n\n**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th "The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). To create a similar effect use the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) instead.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/th',
              },
            ],
          },
          {
            name: 'form',
            description: {
              kind: 'markdown',
              value:
                'The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.',
            },
            attributes: [
              {
                name: 'accept-charset',
                description: {
                  kind: 'markdown',
                  value:
                    'A space- or comma-delimited list of character encodings that the server accepts. The browser uses them in the order in which they are listed. The default value, the reserved string `"UNKNOWN"`, indicates the same encoding as that of the document containing the form element.  \nIn previous versions of HTML, the different character encodings could be delimited by spaces or commas. In HTML5, only spaces are allowed as delimiters.',
                },
              },
              {
                name: 'action',
                description: {
                  kind: 'markdown',
                  value:
                    'The URI of a program that processes the form information. This value can be overridden by a [`formaction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
                },
              },
              {
                name: 'autocomplete',
                valueSet: 'o',
                description: {
                  kind: 'markdown',
                  value:
                    "Indicates whether input elements can by default have their values automatically completed by the browser. This setting can be overridden by an `autocomplete` attribute on an element belonging to the form. Possible values are:\n\n*   `off`: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries.\n*   `on`: The browser can automatically complete values based on values that the user has previously entered in the form.\n\nFor most modern browsers (including Firefox 38+, Google Chrome 34+, IE 11+) setting the autocomplete attribute will not prevent a browser's password manager from asking the user if they want to store login fields (username and password), if the user permits the storage the browser will autofill the login the next time the user visits the page. See [The autocomplete attribute and login fields](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).",
                },
              },
              {
                name: 'enctype',
                valueSet: 'et',
                description: {
                  kind: 'markdown',
                  value:
                    'When the value of the `method` attribute is `post`, enctype is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: The value used for an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the `type` attribute set to "file".\n*   `text/plain`: (HTML5)\n\nThis value can be overridden by a [`formenctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formenctype) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
                },
              },
              {
                name: 'method',
                valueSet: 'm',
                description: {
                  kind: 'markdown',
                  value:
                    'The [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) method that the browser uses to submit the form. Possible values are:\n\n*   `post`: Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; form data are included in the body of the form and sent to the server.\n*   `get`: Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a \'?\' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n*   `dialog`: Use when the form is inside a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog "The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window.") element to close the dialog when submitted.\n\nThis value can be overridden by a [`formmethod`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name of the form. In HTML 4, its use is deprecated (`id` should be used instead). It must be unique among the forms in a document and not just an empty string in HTML 5.',
                },
              },
              {
                name: 'novalidate',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the form is not to be validated when submitted. If this attribute is not specified (and therefore the form is validated), this default setting can be overridden by a [`formnovalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element belonging to the form.',
                },
              },
              {
                name: 'target',
                description: {
                  kind: 'markdown',
                  value:
                    'A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a _browsing context_ (for example, tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed HTML 4 window or HTML5 browsing context.\n*   `_parent`: Load the response into the HTML 4 frameset parent of the current frame, or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: HTML 4: Load the response into the full original window, and cancel all other frames. HTML5: Load the response into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n*   _iframename_: The response is displayed in a named [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one.").\n\nHTML5: This value can be overridden by a [`formtarget`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
                },
              },
              {
                name: 'accept',
                description:
                  'A comma-separated list of content types that the server accepts.\n\n**Usage note:** This attribute has been removed in HTML5 and should no longer be used. Instead, use the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) attribute of the specific [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
              },
              {
                name: 'autocapitalize',
                description:
                  'This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value for textual form control descendants should be automatically capitalized as it is entered/edited by the user. If the `autocapitalize` attribute is specified on an individual form control descendant, it trumps the form-wide `autocapitalize` setting. The non-deprecated values are available in iOS 5 and later. The default value is `sentences`. Possible values are:\n\n*   `none`: Completely disables automatic capitalization\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Element/form',
              },
            ],
          },
          {
            name: 'label',
            description: {
              kind: 'markdown',
              value:
                "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.",
            },
            attributes: [
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element with which the label is associated (its _form owner_). If specified, the value of the attribute is the `id` of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. This lets you place label elements anywhere within a document, not just as descendants of their form elements.',
                },
              },
              {
                name: 'for',
                description: {
                  kind: 'markdown',
                  value:
                    'The [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) of a [labelable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Form_labelable) form-related element in the same document as the `<label>` element. The first element in the document with an `id` matching the value of the `for` attribute is the _labeled control_ for this label element, if it is a labelable element. If it is not labelable then the `for` attribute has no effect. If there are other elements which also match the `id` value, later in the document, they are not considered.\n\n**Note**: A `<label>` element can have both a `for` attribute and a contained control element, as long as the `for` attribute points to the contained control element.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/label',
              },
            ],
          },
          {
            name: 'input',
            description: {
              kind: 'markdown',
              value:
                'The input element represents a typed data field, usually with a form control to allow the user to edit the data.',
            },
            attributes: [
              { name: 'accept' },
              { name: 'alt' },
              { name: 'autocomplete', valueSet: 'inputautocomplete' },
              { name: 'autofocus', valueSet: 'v' },
              { name: 'checked', valueSet: 'v' },
              { name: 'dirname' },
              { name: 'disabled', valueSet: 'v' },
              { name: 'form' },
              { name: 'formaction' },
              { name: 'formenctype', valueSet: 'et' },
              { name: 'formmethod', valueSet: 'fm' },
              { name: 'formnovalidate', valueSet: 'v' },
              { name: 'formtarget' },
              { name: 'height' },
              { name: 'inputmode', valueSet: 'im' },
              { name: 'list' },
              { name: 'max' },
              { name: 'maxlength' },
              { name: 'min' },
              { name: 'minlength' },
              { name: 'multiple', valueSet: 'v' },
              { name: 'name' },
              { name: 'pattern' },
              { name: 'placeholder' },
              { name: 'readonly', valueSet: 'v' },
              { name: 'required', valueSet: 'v' },
              { name: 'size' },
              { name: 'src' },
              { name: 'step' },
              { name: 'type', valueSet: 't' },
              { name: 'value' },
              { name: 'width' },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/input',
              },
            ],
          },
          {
            name: 'button',
            description: {
              kind: 'markdown',
              value:
                'The button element represents a button labeled by its contents.',
            },
            attributes: [
              {
                name: 'autofocus',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.',
                },
              },
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element with the **disabled** attribute set, then the button is enabled.\n\nFirefox will, unlike other browsers, by default, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Use the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-autocomplete) attribute to control this feature.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The form element that the button is associated with (its _form owner_). The value of the attribute must be the **id** attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. If this attribute is not specified, the `<button>` element will be associated to an ancestor [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element, if one exists. This attribute enables you to associate `<button>` elements to [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements anywhere within a document, not just as descendants of [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements.',
                },
              },
              {
                name: 'formaction',
                description: {
                  kind: 'markdown',
                  value:
                    "The URI of a program that processes the information submitted by the button. If specified, it overrides the [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action) attribute of the button's form owner.",
                },
              },
              {
                name: 'formenctype',
                valueSet: 'et',
                description: {
                  kind: 'markdown',
                  value:
                    'If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: Use this value if you are using an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) attribute set to `file`.\n*   `text/plain`\n\nIf this attribute is specified, it overrides the [`enctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype) attribute of the button\'s form owner.',
                },
              },
              {
                name: 'formmethod',
                valueSet: 'fm',
                description: {
                  kind: 'markdown',
                  value:
                    "If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:\n\n*   `post`: The data from the form are included in the body of the form and sent to the server.\n*   `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n\nIf specified, this attribute overrides the [`method`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method) attribute of the button's form owner.",
                },
              },
              {
                name: 'formnovalidate',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    "If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the [`novalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) attribute of the button's form owner.",
                },
              },
              {
                name: 'formtarget',
                description: {
                  kind: 'markdown',
                  value:
                    "If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the [`target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target) attribute of the button's form owner. The following keywords have special meanings:\n\n*   `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed browsing context.\n*   `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.",
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name of the button, which is submitted with the form data.',
                },
              },
              {
                name: 'type',
                valueSet: 'bt',
                description: {
                  kind: 'markdown',
                  value:
                    "The type of the button. Possible values are:\n\n*   `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.\n*   `reset`: The button resets all the controls to their initial values.\n*   `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.",
                },
              },
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    'The initial value of the button. It defines the value associated with the button which is submitted with the form data. This value is passed to the server in params when the form is submitted.',
                },
              },
              {
                name: 'autocomplete',
                description:
                  'The use of this attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Setting the value of this attribute to `off` (i.e. `autocomplete="off"`) disables this feature. See [bug 654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072 "if disabled state is changed with javascript, the normal state doesn\'t return after refreshing the page").',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/button',
              },
            ],
          },
          {
            name: 'select',
            description: {
              kind: 'markdown',
              value:
                'The select element represents a control for selecting amongst a set of options.',
            },
            attributes: [
              {
                name: 'autocomplete',
                valueSet: 'inputautocomplete',
                description: {
                  kind: 'markdown',
                  value:
                    'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") providing a hint for a [user agent\'s](https://developer.mozilla.org/en-US/docs/Glossary/user_agent "user agent\'s: A user agent is a computer program representing a person, for example, a browser in a Web context.") autocomplete feature. See [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete.',
                },
              },
              {
                name: 'autofocus',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute.',
                },
              },
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example `fieldset`; if there is no containing element with the `disabled` attribute set, then the control is enabled.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute lets you specify the form element to which the select element is associated (that is, its "form owner"). If this attribute is specified, its value must be the same as the `id` of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements.',
                },
              },
              {
                name: 'multiple',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute is used to specify the name of the control.',
                },
              },
              {
                name: 'required',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute indicating that an option with a non-empty string value must be selected.',
                },
              },
              {
                name: 'size',
                description: {
                  kind: 'markdown',
                  value:
                    'If the control is presented as a scrolling list box (e.g. when `multiple` is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.\n\n**Note:** According to the HTML5 specification, the default value for size should be 1; however, in practice, this has been found to break some web sites, and no other browser currently does that, so Mozilla has opted to continue to return 0 for the time being with Firefox.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/select',
              },
            ],
          },
          {
            name: 'datalist',
            description: {
              kind: 'markdown',
              value:
                'The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/datalist',
              },
            ],
          },
          {
            name: 'optgroup',
            description: {
              kind: 'markdown',
              value:
                'The optgroup element represents a group of option elements with a common label.',
            },
            attributes: [
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    "If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones.",
                },
              },
              {
                name: 'label',
                description: {
                  kind: 'markdown',
                  value:
                    'The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/optgroup',
              },
            ],
          },
          {
            name: 'option',
            description: {
              kind: 'markdown',
              value:
                'The option element represents an option in a select element or as part of a list of suggestions in a datalist element.',
            },
            attributes: [
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won\'t receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup "The HTML <optgroup> element creates a grouping of options within a <select> element.") element.',
                },
              },
              {
                name: 'label',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content.",
                },
              },
              {
                name: 'selected',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element whose [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute is not set, only one single `<option>` of this [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element may have the `selected` attribute.',
                },
              },
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    'The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/option',
              },
            ],
          },
          {
            name: 'textarea',
            description: {
              kind: 'markdown',
              value:
                "The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.",
            },
            attributes: [
              {
                name: 'autocomplete',
                valueSet: 'inputautocomplete',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:\n\n*   `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.\n*   `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.\n\nIf the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element\'s form owner. The form owner is either the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete) attribute in [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.").',
                },
              },
              {
                name: 'autofocus',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.',
                },
              },
              {
                name: 'cols',
                description: {
                  kind: 'markdown',
                  value:
                    'The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is `20`.',
                },
              },
              { name: 'dirname' },
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element when the `disabled` attribute is set, the control is enabled.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The form element that the `<textarea>` element is associated with (its "form owner"). The value of the attribute must be the `id` of a form element in the same document. If this attribute is not specified, the `<textarea>` element must be a descendant of a form element. This attribute enables you to place `<textarea>` elements anywhere within a document, not just as descendants of form elements.',
                },
              },
              { name: 'inputmode', valueSet: 'im' },
              {
                name: 'maxlength',
                description: {
                  kind: 'markdown',
                  value:
                    "The maximum number of characters (unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.",
                },
              },
              {
                name: 'minlength',
                description: {
                  kind: 'markdown',
                  value:
                    'The minimum number of characters (unicode code points) required that the user should enter.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value: 'The name of the control.',
                },
              },
              {
                name: 'placeholder',
                description: {
                  kind: 'markdown',
                  value:
                    'A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.\n\n**Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they are _not_ a substitute for a proper [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label "The HTML <label> element represents a caption for an item in a user interface.") element tied to the input. See [Labels and placeholders](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Labels_and_placeholders "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") in [<input>: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") for a full explanation.',
                },
              },
              {
                name: 'readonly',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the `disabled` attribute, the `readonly` attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.',
                },
              },
              {
                name: 'required',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute specifies that the user must fill in a value before submitting a form.',
                },
              },
              {
                name: 'rows',
                description: {
                  kind: 'markdown',
                  value: 'The number of visible text lines for the control.',
                },
              },
              {
                name: 'wrap',
                valueSet: 'w',
                description: {
                  kind: 'markdown',
                  value:
                    'Indicates how the control wraps text. Possible values are:\n\n*   `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must also be specified for this to take effect.\n*   `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.\n*   `off` : Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.\n\nIf this attribute is not specified, `soft` is its default value.',
                },
              },
              {
                name: 'autocapitalize',
                description:
                  'This is a non-standard attribute supported by WebKit on iOS (therefore nearly all browsers running on iOS, including Safari, Firefox, and Chrome), which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:\n\n*   `none`: Completely disables automatic capitalization.\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5.',
              },
              {
                name: 'spellcheck',
                description:
                  "Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. the value can be:\n\n*   `true`: Indicates that the element needs to have its spelling and grammar checked.\n*   `default` : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value.\n*   `false` : Indicates that the element should not be spell checked.",
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/textarea',
              },
            ],
          },
          {
            name: 'output',
            description: {
              kind: 'markdown',
              value:
                'The output element represents the result of a calculation performed by the application, or the result of a user action.',
            },
            attributes: [
              {
                name: 'for',
                description: {
                  kind: 'markdown',
                  value:
                    'A space-separated list of other elements’ [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)s, indicating that those elements contributed input values to (or otherwise affected) the calculation.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) that this element is associated with (its "form owner"). The value of the attribute must be an `id` of a form element in the same document. If this attribute is not specified, the output element must be a descendant of a form element. This attribute enables you to place output elements anywhere within a document, not just as descendants of their form elements.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name of the element, exposed in the [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement "The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.") API.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/output',
              },
            ],
          },
          {
            name: 'progress',
            description: {
              kind: 'markdown',
              value:
                'The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.',
            },
            attributes: [
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted. If there is no `value` attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take.',
                },
              },
              {
                name: 'max',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute describes how much work the task indicated by the `progress` element requires. The `max` attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 1.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/progress',
              },
            ],
          },
          {
            name: 'meter',
            description: {
              kind: 'markdown',
              value:
                'The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.',
            },
            attributes: [
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    "The current numeric value. This must be between the minimum and maximum values (`min` attribute and `max` attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the `min` attribute and `max` attribute, the value is equal to the nearest end of the range.\n\n**Usage note:** Unless the `value` attribute is between `0` and `1` (inclusive), the `min` and `max` attributes should define the range so that the `value` attribute's value is within it.",
                },
              },
              {
                name: 'min',
                description: {
                  kind: 'markdown',
                  value:
                    'The lower numeric bound of the measured range. This must be less than the maximum value (`max` attribute), if specified. If unspecified, the minimum value is 0.',
                },
              },
              {
                name: 'max',
                description: {
                  kind: 'markdown',
                  value:
                    'The upper numeric bound of the measured range. This must be greater than the minimum value (`min` attribute), if specified. If unspecified, the maximum value is 1.',
                },
              },
              {
                name: 'low',
                description: {
                  kind: 'markdown',
                  value:
                    'The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (`min` attribute), and it also must be less than the high value and maximum value (`high` attribute and `max` attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the `low` value is equal to the minimum value.',
                },
              },
              {
                name: 'high',
                description: {
                  kind: 'markdown',
                  value:
                    'The lower numeric bound of the high end of the measured range. This must be less than the maximum value (`max` attribute), and it also must be greater than the low value and minimum value (`low` attribute and **min** attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the `high` value is equal to the maximum value.',
                },
              },
              {
                name: 'optimum',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the optimal numeric value. It must be within the range (as defined by the `min` attribute and `max` attribute). When used with the `low` attribute and `high` attribute, it gives an indication where along the range is considered preferable. For example, if it is between the `min` attribute and the `low` attribute, then the lower range is considered preferred.',
                },
              },
              {
                name: 'form',
                description:
                  'This attribute associates the element with a `form` element that has ownership of the `meter` element. For example, a `meter` might be displaying a range corresponding to an `input` element of `type` _number_. This attribute is only used if the `meter` element is being used as a form-associated element; even then, it may be omitted if the element appears as a descendant of a `form` element.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/meter',
              },
            ],
          },
          {
            name: 'fieldset',
            description: {
              kind: 'markdown',
              value:
                'The fieldset element represents a set of form controls optionally grouped under a common name.',
            },
            attributes: [
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    "If this Boolean attribute is set, all form controls that are descendants of the `<fieldset>`, are disabled, meaning they are not editable and won't be submitted along with the `<form>`. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend \"The HTML <legend> element represents a caption for the content of its parent <fieldset>.\") element won't be disabled.",
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute takes the value of the `id` attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element you want the `<fieldset>` to be part of, even if it is not inside the form.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name associated with the group.\n\n**Note**: The caption for the fieldset is given by the first [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend "The HTML <legend> element represents a caption for the content of its parent <fieldset>.") element nested inside it.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/fieldset',
              },
            ],
          },
          {
            name: 'legend',
            description: {
              kind: 'markdown',
              value:
                "The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/legend',
              },
            ],
          },
          {
            name: 'details',
            description: {
              kind: 'markdown',
              value:
                'The details element represents a disclosure widget from which the user can obtain additional information or controls.',
            },
            attributes: [
              {
                name: 'open',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates whether or not the details — that is, the contents of the `<details>` element — are currently visible. The default, `false`, means the details are not visible.',
                },
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/details',
              },
            ],
          },
          {
            name: 'summary',
            description: {
              kind: 'markdown',
              value:
                "The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/summary',
              },
            ],
          },
          {
            name: 'dialog',
            description: {
              kind: 'markdown',
              value:
                'The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.',
            },
            attributes: [
              {
                name: 'open',
                description:
                  "Indicates that the dialog is active and available for interaction. When the `open` attribute is not set, the dialog shouldn't be shown to the user.",
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/dialog',
              },
            ],
          },
          {
            name: 'script',
            description: {
              kind: 'markdown',
              value:
                'The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.',
            },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.\n\nIf a `script` element has a `src` attribute specified, it should not have a script embedded inside its tags.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the type of script represented. The value of this attribute will be in one of the following categories:\n\n*   **Omitted or a JavaScript MIME type:** For HTML5-compliant browsers this indicates the script is JavaScript. HTML5 specification urges authors to omit the attribute rather than provide a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types).\n*   **`module`:** For HTML5-compliant browsers the code is treated as a JavaScript module. The processing of the script contents is not affected by the `charset` and `defer` attributes. For information on using `module`, see [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). Code may behave differently when the `module` keyword is used.\n*   **Any other value:** The embedded content is treated as a data block which won\'t be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The `src` attribute will be ignored.\n\n**Note:** in Firefox you could specify the version of JavaScript contained in a `<script>` element by including a non-standard `version` parameter inside the `type` attribute — for example `type="text/javascript;version=1.8"`. This has been removed in Firefox 59 (see [bug 1428745](https://bugzilla.mozilla.org/show_bug.cgi?id=1428745 "FIXED: Remove support for version parameter from script loader")).',
                },
              },
              { name: 'charset' },
              {
                name: 'async',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This is a Boolean attribute indicating that the browser should, if possible, load the script asynchronously.\n\nThis attribute must not be used if the `src` attribute is absent (i.e. for inline scripts). If it is included in this case it will have no effect.\n\nBrowsers usually assume the worst case scenario and load scripts synchronously, (i.e. `async="false"`) during HTML parsing.\n\nDynamically inserted scripts (using [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn\'t recognized.")) load asynchronously by default, so to turn on synchronous loading (i.e. scripts load in the order they were inserted) set `async="false"`.\n\nSee [Browser compatibility](#Browser_compatibility) for notes on browser support. See also [Async scripts for asm.js](https://developer.mozilla.org/en-US/docs/Games/Techniques/Async_scripts).',
                },
              },
              {
                name: 'defer',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded "/en-US/docs/Web/Events/DOMContentLoaded").\n\nScripts with the `defer` attribute will prevent the `DOMContentLoaded` event from firing until the script has loaded and finished evaluating.\n\nThis attribute must not be used if the `src` attribute is absent (i.e. for inline scripts), in this case it would have no effect.\n\nTo achieve a similar effect for dynamically inserted scripts use `async="false"` instead. Scripts with the `defer` attribute will execute in the order in which they appear in the document.',
                },
              },
              {
                name: 'crossorigin',
                valueSet: 'xo',
                description: {
                  kind: 'markdown',
                  value:
                    'Normal `script` elements pass minimal information to the [`window.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror "The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events.") for scripts which do not pass the standard [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for a more descriptive explanation of its valid arguments.',
                },
              },
              {
                name: 'nonce',
                description: {
                  kind: 'markdown',
                  value:
                    "A cryptographic nonce (number used once) to whitelist inline scripts in a [script-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.",
                },
              },
              {
                name: 'integrity',
                description:
                  'This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).',
              },
              {
                name: 'nomodule',
                description:
                  'This Boolean attribute is set to indicate that the script should not be executed in browsers that support [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.',
              },
              {
                name: 'referrerpolicy',
                description:
                  'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the script, or resources fetched by the script:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (e.g. HTTPS→HTTPS), but don\'t send it to a less secure destination (e.g. HTTPS→HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, but only send the origin when the protocol security level stays the same (e.g.HTTPS→HTTPS), and send no header to a less secure destination (e.g. HTTPS→HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.\n\n**Note**: An empty string value (`""`) is both the default value, and a fallback value if `referrerpolicy` is not supported. If `referrerpolicy` is not explicitly specified on the `<script>` element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to `no-referrer-when-downgrade`.',
              },
              {
                name: 'text',
                description:
                  'Like the `textContent` attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM.',
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/script',
              },
            ],
          },
          {
            name: 'noscript',
            description: {
              kind: 'markdown',
              value:
                "The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.",
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/noscript',
              },
            ],
          },
          {
            name: 'template',
            description: {
              kind: 'markdown',
              value:
                'The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.',
            },
            attributes: [],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/template',
              },
            ],
          },
          {
            name: 'canvas',
            description: {
              kind: 'markdown',
              value:
                'The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.',
            },
            attributes: [
              {
                name: 'width',
                description: {
                  kind: 'markdown',
                  value:
                    'The width of the coordinate space in CSS pixels. Defaults to 300.',
                },
              },
              {
                name: 'height',
                description: {
                  kind: 'markdown',
                  value:
                    'The height of the coordinate space in CSS pixels. Defaults to 150.',
                },
              },
              {
                name: 'moz-opaque',
                description:
                  "Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized [`canvas.getContext('2d', { alpha: false })`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext \"The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.\") instead.",
              },
            ],
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Element/canvas',
              },
            ],
          },
        ],
        globalAttributes: [
          {
            name: 'accesskey',
            description: {
              kind: 'markdown',
              value:
                'Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey',
              },
            ],
          },
          {
            name: 'autocapitalize',
            description: {
              kind: 'markdown',
              value:
                'Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:\n\n*   `off` or `none`, no autocapitalization is applied (all letters default to lowercase)\n*   `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase\n*   `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase\n*   `characters`, all letters should default to uppercase',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize',
              },
            ],
          },
          {
            name: 'class',
            description: {
              kind: 'markdown',
              value:
                'A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](/en-US/docs/Web/API/Document/getElementsByClassName "returns an array-like object of all child elements which have all of the given class names.").',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class',
              },
            ],
          },
          {
            name: 'contenteditable',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:\n\n*   `true` or the _empty string_, which indicates that the element must be editable;\n*   `false`, which indicates that the element must not be editable.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable',
              },
            ],
          },
          {
            name: 'contextmenu',
            description: {
              kind: 'markdown',
              value:
                'The `[**id**](#attr-id)` of a [`<menu>`](/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.") to use as the contextual menu for this element.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu',
              },
            ],
          },
          {
            name: 'dir',
            description: {
              kind: 'markdown',
              value:
                "An enumerated attribute indicating the directionality of the element's text. It can have the following values:\n\n*   `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);\n*   `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);\n*   `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.",
            },
            valueSet: 'd',
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir',
              },
            ],
          },
          {
            name: 'draggable',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](/en-us/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `true`, which indicates that the element may be dragged\n*   `false`, which indicates that the element may not be dragged.',
            },
            valueSet: 'b',
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable',
              },
            ],
          },
          {
            name: 'dropzone',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](/en-US/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `copy`, which indicates that dropping will create a copy of the element that was dragged\n*   `move`, which indicates that the element that was dragged will be moved to this new location.\n*   `link`, will create a link to the dragged data.',
            },
          },
          {
            name: 'exportparts',
            description: {
              kind: 'markdown',
              value:
                'Used to transitively export shadow parts from a nested shadow tree into a containing light tree.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts',
              },
            ],
          },
          {
            name: 'hidden',
            description: {
              kind: 'markdown',
              value:
                "A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.",
            },
            valueSet: 'v',
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden',
              },
            ],
          },
          {
            name: 'id',
            description: {
              kind: 'markdown',
              value:
                'Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id',
              },
            ],
          },
          {
            name: 'inputmode',
            description: {
              kind: 'markdown',
              value:
                'Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on [`<input>`](/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") elements, but is usable on any element while in `[contenteditable](/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable)` mode.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode',
              },
            ],
          },
          {
            name: 'is',
            description: {
              kind: 'markdown',
              value:
                'Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements) for more details).',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is',
              },
            ],
          },
          {
            name: 'itemid',
            description: {
              kind: 'markdown',
              value: 'The unique, global identifier of an item.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid',
              },
            ],
          },
          {
            name: 'itemprop',
            description: {
              kind: 'markdown',
              value:
                'Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop',
              },
            ],
          },
          {
            name: 'itemref',
            description: {
              kind: 'markdown',
              value:
                'Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref',
              },
            ],
          },
          {
            name: 'itemscope',
            description: {
              kind: 'markdown',
              value:
                '`itemscope` (usually) works along with `[itemtype](/en-US/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.',
            },
            valueSet: 'v',
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope',
              },
            ],
          },
          {
            name: 'itemtype',
            description: {
              kind: 'markdown',
              value:
                'Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](/en-US/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype',
              },
            ],
          },
          {
            name: 'lang',
            description: {
              kind: 'markdown',
              value:
                'Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](#attr-xml:lang) has priority over it.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang',
              },
            ],
          },
          {
            name: 'part',
            description: {
              kind: 'markdown',
              value:
                'A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the [`::part`](/en-US/docs/Web/CSS/::part "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.") pseudo-element.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part',
              },
            ],
          },
          { name: 'role', valueSet: 'roles' },
          {
            name: 'slot',
            description: {
              kind: 'markdown',
              value:
                'Assigns a slot in a [shadow DOM](/en-US/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the [`<slot>`](/en-US/docs/Web/HTML/Element/slot "The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.") element whose `[name](/en-US/docs/Web/HTML/Element/slot#attr-name)` attribute\'s value matches that `slot` attribute\'s value.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot',
              },
            ],
          },
          {
            name: 'spellcheck',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:\n\n*   `true`, which indicates that the element should be, if possible, checked for spelling errors;\n*   `false`, which indicates that the element should not be checked for spelling errors.',
            },
            valueSet: 'b',
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck',
              },
            ],
          },
          {
            name: 'style',
            description: {
              kind: 'markdown',
              value:
                'Contains [CSS](/en-US/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](/en-US/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or part of a document.") element have mainly the purpose of allowing for quick styling, for example for testing purposes.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style',
              },
            ],
          },
          {
            name: 'tabindex',
            description: {
              kind: 'markdown',
              value:
                'An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:\n\n*   a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;\n*   `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;\n*   a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex',
              },
            ],
          },
          {
            name: 'title',
            description: {
              kind: 'markdown',
              value:
                'Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.',
            },
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title',
              },
            ],
          },
          {
            name: 'translate',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute that is used to specify whether an element\'s attribute values and the values of its [`Text`](/en-US/docs/Web/API/Text "The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element\'s text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.") node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:\n\n*   empty string and `yes`, which indicates that the element will be translated.\n*   `no`, which indicates that the element will not be translated.',
            },
            valueSet: 'y',
            references: [
              {
                name: 'MDN Reference',
                url:
                  'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate',
              },
            ],
          },
          {
            name: 'onabort',
            description: {
              kind: 'markdown',
              value: 'The loading of a resource has been aborted.',
            },
          },
          {
            name: 'onblur',
            description: {
              kind: 'markdown',
              value: 'An element has lost focus (does not bubble).',
            },
          },
          {
            name: 'oncanplay',
            description: {
              kind: 'markdown',
              value:
                'The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.',
            },
          },
          {
            name: 'oncanplaythrough',
            description: {
              kind: 'markdown',
              value:
                'The user agent can play the media up to its end without having to stop for further buffering of content.',
            },
          },
          {
            name: 'onchange',
            description: {
              kind: 'markdown',
              value:
                "The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user.",
            },
          },
          {
            name: 'onclick',
            description: {
              kind: 'markdown',
              value:
                'A pointing device button has been pressed and released on an element.',
            },
          },
          {
            name: 'oncontextmenu',
            description: {
              kind: 'markdown',
              value:
                'The right button of the mouse is clicked (before the context menu is displayed).',
            },
          },
          {
            name: 'ondblclick',
            description: {
              kind: 'markdown',
              value: 'A pointing device button is clicked twice on an element.',
            },
          },
          {
            name: 'ondrag',
            description: {
              kind: 'markdown',
              value:
                'An element or text selection is being dragged (every 350ms).',
            },
          },
          {
            name: 'ondragend',
            description: {
              kind: 'markdown',
              value:
                'A drag operation is being ended (by releasing a mouse button or hitting the escape key).',
            },
          },
          {
            name: 'ondragenter',
            description: {
              kind: 'markdown',
              value:
                'A dragged element or text selection enters a valid drop target.',
            },
          },
          {
            name: 'ondragleave',
            description: {
              kind: 'markdown',
              value:
                'A dragged element or text selection leaves a valid drop target.',
            },
          },
          {
            name: 'ondragover',
            description: {
              kind: 'markdown',
              value:
                'An element or text selection is being dragged over a valid drop target (every 350ms).',
            },
          },
          {
            name: 'ondragstart',
            description: {
              kind: 'markdown',
              value: 'The user starts dragging an element or text selection.',
            },
          },
          {
            name: 'ondrop',
            description: {
              kind: 'markdown',
              value: 'An element is dropped on a valid drop target.',
            },
          },
          {
            name: 'ondurationchange',
            description: {
              kind: 'markdown',
              value: 'The duration attribute has been updated.',
            },
          },
          {
            name: 'onemptied',
            description: {
              kind: 'markdown',
              value:
                'The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.',
            },
          },
          {
            name: 'onended',
            description: {
              kind: 'markdown',
              value:
                'Playback has stopped because the end of the media was reached.',
            },
          },
          {
            name: 'onerror',
            description: {
              kind: 'markdown',
              value: 'A resource failed to load.',
            },
          },
          {
            name: 'onfocus',
            description: {
              kind: 'markdown',
              value: 'An element has received focus (does not bubble).',
            },
          },
          { name: 'onformchange' },
          { name: 'onforminput' },
          {
            name: 'oninput',
            description: {
              kind: 'markdown',
              value:
                'The value of an element changes or the content of an element with the attribute contenteditable is modified.',
            },
          },
          {
            name: 'oninvalid',
            description: {
              kind: 'markdown',
              value:
                "A submittable element has been checked and doesn't satisfy its constraints.",
            },
          },
          {
            name: 'onkeydown',
            description: { kind: 'markdown', value: 'A key is pressed down.' },
          },
          {
            name: 'onkeypress',
            description: {
              kind: 'markdown',
              value:
                'A key is pressed down and that key normally produces a character value (use input instead).',
            },
          },
          {
            name: 'onkeyup',
            description: { kind: 'markdown', value: 'A key is released.' },
          },
          {
            name: 'onload',
            description: {
              kind: 'markdown',
              value:
                'A resource and its dependent resources have finished loading.',
            },
          },
          {
            name: 'onloadeddata',
            description: {
              kind: 'markdown',
              value: 'The first frame of the media has finished loading.',
            },
          },
          {
            name: 'onloadedmetadata',
            description: {
              kind: 'markdown',
              value: 'The metadata has been loaded.',
            },
          },
          {
            name: 'onloadstart',
            description: { kind: 'markdown', value: 'Progress has begun.' },
          },
          {
            name: 'onmousedown',
            description: {
              kind: 'markdown',
              value:
                'A pointing device button (usually a mouse) is pressed on an element.',
            },
          },
          {
            name: 'onmousemove',
            description: {
              kind: 'markdown',
              value: 'A pointing device is moved over an element.',
            },
          },
          {
            name: 'onmouseout',
            description: {
              kind: 'markdown',
              value:
                'A pointing device is moved off the element that has the listener attached or off one of its children.',
            },
          },
          {
            name: 'onmouseover',
            description: {
              kind: 'markdown',
              value:
                'A pointing device is moved onto the element that has the listener attached or onto one of its children.',
            },
          },
          {
            name: 'onmouseup',
            description: {
              kind: 'markdown',
              value: 'A pointing device button is released over an element.',
            },
          },
          { name: 'onmousewheel' },
          {
            name: 'onpause',
            description: {
              kind: 'markdown',
              value: 'Playback has been paused.',
            },
          },
          {
            name: 'onplay',
            description: { kind: 'markdown', value: 'Playback has begun.' },
          },
          {
            name: 'onplaying',
            description: {
              kind: 'markdown',
              value:
                'Playback is ready to start after having been paused or delayed due to lack of data.',
            },
          },
          {
            name: 'onprogress',
            description: { kind: 'markdown', value: 'In progress.' },
          },
          {
            name: 'onratechange',
            description: {
              kind: 'markdown',
              value: 'The playback rate has changed.',
            },
          },
          {
            name: 'onreset',
            description: { kind: 'markdown', value: 'A form is reset.' },
          },
          {
            name: 'onresize',
            description: {
              kind: 'markdown',
              value: 'The document view has been resized.',
            },
          },
          {
            name: 'onreadystatechange',
            description: {
              kind: 'markdown',
              value: 'The readyState attribute of a document has changed.',
            },
          },
          {
            name: 'onscroll',
            description: {
              kind: 'markdown',
              value: 'The document view or an element has been scrolled.',
            },
          },
          {
            name: 'onseeked',
            description: {
              kind: 'markdown',
              value: 'A seek operation completed.',
            },
          },
          {
            name: 'onseeking',
            description: { kind: 'markdown', value: 'A seek operation began.' },
          },
          {
            name: 'onselect',
            description: {
              kind: 'markdown',
              value: 'Some text is being selected.',
            },
          },
          {
            name: 'onshow',
            description: {
              kind: 'markdown',
              value:
                'A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute',
            },
          },
          {
            name: 'onstalled',
            description: {
              kind: 'markdown',
              value:
                'The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.',
            },
          },
          {
            name: 'onsubmit',
            description: { kind: 'markdown', value: 'A form is submitted.' },
          },
          {
            name: 'onsuspend',
            description: {
              kind: 'markdown',
              value: 'Media data loading has been suspended.',
            },
          },
          {
            name: 'ontimeupdate',
            description: {
              kind: 'markdown',
              value:
                'The time indicated by the currentTime attribute has been updated.',
            },
          },
          {
            name: 'onvolumechange',
            description: { kind: 'markdown', value: 'The volume has changed.' },
          },
          {
            name: 'onwaiting',
            description: {
              kind: 'markdown',
              value:
                'Playback has stopped because of a temporary lack of data.',
            },
          },
          {
            name: 'aria-activedescendant',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url:
                  'https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Identifies the currently active element when DOM focus is on a [`composite`](https://www.w3.org/TR/wai-aria-1.1/#composite) widget, [`textbox`](https://www.w3.org/TR/wai-aria-1.1/#textbox), [`group`](https://www.w3.org/TR/wai-aria-1.1/#group), or [`application`](https://www.w3.org/TR/wai-aria-1.1/#application).',
            },
          },
          {
            name: 'aria-atomic',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-atomic',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology) will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) attribute.',
            },
          },
          {
            name: 'aria-autocomplete',
            valueSet: 'autocomplete',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.",
            },
          },
          {
            name: 'aria-busy',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-busy',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates an element is being modified and that assistive technologies _MAY_ want to wait until the modifications are complete before exposing them to the user.',
            },
          },
          {
            name: 'aria-checked',
            valueSet: 'tristate',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-checked',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates the current "checked" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of checkboxes, radio buttons, and other [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).',
            },
          },
          {
            name: 'aria-colcount',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colcount',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the total number of columns in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex).',
            },
          },
          {
            name: 'aria-colindex',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colindex',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) column index or position with respect to the total number of columns within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).",
            },
          },
          {
            name: 'aria-colspan',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colspan',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the number of columns spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).',
            },
          },
          {
            name: 'aria-controls',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-controls',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) whose contents or presence are controlled by the current element. See related [`aria-owns`](https://www.w3.org/TR/wai-aria-1.1/#aria-owns).',
            },
          },
          {
            name: 'aria-current',
            valueSet: 'current',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-current',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that represents the current item within a container or set of related elements.',
            },
          },
          {
            name: 'aria-describedat',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-describedat',
              },
            ],
          },
          {
            name: 'aria-describedby',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-describedby',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that describes the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).',
            },
          },
          {
            name: 'aria-disabled',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-disabled',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is [perceivable](https://www.w3.org/TR/wai-aria-1.1/#dfn-perceivable) but disabled, so it is not editable or otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) and [`aria-readonly`](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly).',
            },
          },
          {
            name: 'aria-dropeffect',
            valueSet: 'dropeffect',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                '\\[Deprecated in ARIA 1.1\\] Indicates what functions can be performed when a dragged object is released on the drop target.',
            },
          },
          {
            name: 'aria-errormessage',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides an error message for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-invalid`](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) and [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
            },
          },
          {
            name: 'aria-expanded',
            valueSet: 'u',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-expanded',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
            },
          },
          {
            name: 'aria-flowto',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-flowto',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                "Identifies the next [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.",
            },
          },
          {
            name: 'aria-grabbed',
            valueSet: 'u',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                '\\[Deprecated in ARIA 1.1\\] Indicates an element\'s "grabbed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) in a drag-and-drop operation.',
            },
          },
          {
            name: 'aria-haspopup',
            valueSet: 'haspopup',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).',
            },
          },
          {
            name: 'aria-hidden',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-hidden',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is exposed to an accessibility API. See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).',
            },
          },
          {
            name: 'aria-invalid',
            valueSet: 'invalid',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-invalid',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates the entered value does not conform to the format expected by the application. See related [`aria-errormessage`](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage).',
            },
          },
          {
            name: 'aria-kbdshortcuts',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-kbdshortcuts',
              },
            ],
          },
          {
            name: 'aria-label',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-label',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines a string value that labels the current element. See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).',
            },
          },
          {
            name: 'aria-labelledby',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that labels the current element. See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
            },
          },
          {
            name: 'aria-level',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-level',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the hierarchical level of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) within a structure.',
            },
          },
          {
            name: 'aria-live',
            valueSet: 'live',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-live',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates that an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) will be updated, and describes the types of updates the [user agents](https://www.w3.org/TR/wai-aria-1.1/#dfn-user-agent), [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology), and user can expect from the [live region](https://www.w3.org/TR/wai-aria-1.1/#dfn-live-region).',
            },
          },
          {
            name: 'aria-modal',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-modal',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is modal when displayed.',
            },
          },
          {
            name: 'aria-multiline',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-multiline',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether a text box accepts multiple lines of input or only a single line.',
            },
          },
          {
            name: 'aria-multiselectable',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates that the user may select more than one item from the current selectable descendants.',
            },
          },
          {
            name: 'aria-orientation',
            valueSet: 'orientation',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-orientation',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
            },
          },
          {
            name: 'aria-owns',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-owns',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Identifies an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in order to define a visual, functional, or contextual parent/child [relationship](https://www.w3.org/TR/wai-aria-1.1/#dfn-relationship) between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls).',
            },
          },
          {
            name: 'aria-placeholder',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.',
            },
          },
          {
            name: 'aria-posinset',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-posinset',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                "Defines an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize).",
            },
          },
          {
            name: 'aria-pressed',
            valueSet: 'tristate',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-pressed',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates the current "pressed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of toggle buttons. See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).',
            },
          },
          {
            name: 'aria-readonly',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-readonly',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is not editable, but is otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).',
            },
          },
          {
            name: 'aria-relevant',
            valueSet: 'relevant',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-relevant',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic).',
            },
          },
          {
            name: 'aria-required',
            valueSet: 'b',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-required',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates that user input is required on the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) before a form may be submitted.',
            },
          },
          {
            name: 'aria-roledescription',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines a human-readable, author-localized description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).',
            },
          },
          {
            name: 'aria-rowcount',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the total number of rows in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex).',
            },
          },
          {
            name: 'aria-rowindex',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) row index or position with respect to the total number of rows within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).",
            },
          },
          {
            name: 'aria-rowspan',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the number of rows spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).',
            },
          },
          {
            name: 'aria-selected',
            valueSet: 'u',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-selected',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates the current "selected" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of various [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed).',
            },
          },
          {
            name: 'aria-setsize',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-setsize',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset).',
            },
          },
          {
            name: 'aria-sort',
            valueSet: 'sort',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-sort',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Indicates if items in a table or grid are sorted in ascending or descending order.',
            },
          },
          {
            name: 'aria-valuemax',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the maximum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
            },
          },
          {
            name: 'aria-valuemin',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the minimum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
            },
          },
          {
            name: 'aria-valuenow',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the current value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-valuetext`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext).',
            },
          },
          {
            name: 'aria-valuetext',
            references: [
              {
                name: 'WAI-ARIA Reference',
                url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext',
              },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines the human readable text alternative of [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
            },
          },
          {
            name: 'aria-details',
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides a detailed, extended description for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
            },
          },
          {
            name: 'aria-keyshortcuts',
            description: {
              kind: 'markdown',
              value:
                'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
            },
          },
        ],
        valueSets: [
          { name: 'b', values: [{ name: 'true' }, { name: 'false' }] },
          {
            name: 'u',
            values: [
              { name: 'true' },
              { name: 'false' },
              { name: 'undefined' },
            ],
          },
          { name: 'o', values: [{ name: 'on' }, { name: 'off' }] },
          { name: 'y', values: [{ name: 'yes' }, { name: 'no' }] },
          { name: 'w', values: [{ name: 'soft' }, { name: 'hard' }] },
          {
            name: 'd',
            values: [{ name: 'ltr' }, { name: 'rtl' }, { name: 'auto' }],
          },
          {
            name: 'm',
            values: [
              {
                name: 'GET',
                description: {
                  kind: 'markdown',
                  value:
                    "Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a '?' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.",
                },
              },
              {
                name: 'POST',
                description: {
                  kind: 'markdown',
                  value:
                    'Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5); form data are included in the body of the form and sent to the server.',
                },
              },
              {
                name: 'dialog',
                description: {
                  kind: 'markdown',
                  value:
                    'Use when the form is inside a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element to close the dialog when submitted.',
                },
              },
            ],
          },
          { name: 'fm', values: [{ name: 'GET' }, { name: 'POST' }] },
          {
            name: 's',
            values: [
              { name: 'row' },
              { name: 'col' },
              { name: 'rowgroup' },
              { name: 'colgroup' },
            ],
          },
          {
            name: 't',
            values: [
              { name: 'hidden' },
              { name: 'text' },
              { name: 'search' },
              { name: 'tel' },
              { name: 'url' },
              { name: 'email' },
              { name: 'password' },
              { name: 'datetime' },
              { name: 'date' },
              { name: 'month' },
              { name: 'week' },
              { name: 'time' },
              { name: 'datetime-local' },
              { name: 'number' },
              { name: 'range' },
              { name: 'color' },
              { name: 'checkbox' },
              { name: 'radio' },
              { name: 'file' },
              { name: 'submit' },
              { name: 'image' },
              { name: 'reset' },
              { name: 'button' },
            ],
          },
          {
            name: 'im',
            values: [
              { name: 'verbatim' },
              { name: 'latin' },
              { name: 'latin-name' },
              { name: 'latin-prose' },
              { name: 'full-width-latin' },
              { name: 'kana' },
              { name: 'kana-name' },
              { name: 'katakana' },
              { name: 'numeric' },
              { name: 'tel' },
              { name: 'email' },
              { name: 'url' },
            ],
          },
          {
            name: 'bt',
            values: [
              { name: 'button' },
              { name: 'submit' },
              { name: 'reset' },
              { name: 'menu' },
            ],
          },
          {
            name: 'lt',
            values: [
              { name: '1' },
              { name: 'a' },
              { name: 'A' },
              { name: 'i' },
              { name: 'I' },
            ],
          },
          { name: 'mt', values: [{ name: 'context' }, { name: 'toolbar' }] },
          {
            name: 'mit',
            values: [
              { name: 'command' },
              { name: 'checkbox' },
              { name: 'radio' },
            ],
          },
          {
            name: 'et',
            values: [
              { name: 'application/x-www-form-urlencoded' },
              { name: 'multipart/form-data' },
              { name: 'text/plain' },
            ],
          },
          {
            name: 'tk',
            values: [
              { name: 'subtitles' },
              { name: 'captions' },
              { name: 'descriptions' },
              { name: 'chapters' },
              { name: 'metadata' },
            ],
          },
          {
            name: 'pl',
            values: [{ name: 'none' }, { name: 'metadata' }, { name: 'auto' }],
          },
          {
            name: 'sh',
            values: [
              { name: 'circle' },
              { name: 'default' },
              { name: 'poly' },
              { name: 'rect' },
            ],
          },
          {
            name: 'xo',
            values: [{ name: 'anonymous' }, { name: 'use-credentials' }],
          },
          {
            name: 'sb',
            values: [
              { name: 'allow-forms' },
              { name: 'allow-modals' },
              { name: 'allow-pointer-lock' },
              { name: 'allow-popups' },
              { name: 'allow-popups-to-escape-sandbox' },
              { name: 'allow-same-origin' },
              { name: 'allow-scripts' },
              { name: 'allow-top-navigation' },
            ],
          },
          {
            name: 'tristate',
            values: [
              { name: 'true' },
              { name: 'false' },
              { name: 'mixed' },
              { name: 'undefined' },
            ],
          },
          {
            name: 'inputautocomplete',
            values: [
              { name: 'additional-name' },
              { name: 'address-level1' },
              { name: 'address-level2' },
              { name: 'address-level3' },
              { name: 'address-level4' },
              { name: 'address-line1' },
              { name: 'address-line2' },
              { name: 'address-line3' },
              { name: 'bday' },
              { name: 'bday-year' },
              { name: 'bday-day' },
              { name: 'bday-month' },
              { name: 'billing' },
              { name: 'cc-additional-name' },
              { name: 'cc-csc' },
              { name: 'cc-exp' },
              { name: 'cc-exp-month' },
              { name: 'cc-exp-year' },
              { name: 'cc-family-name' },
              { name: 'cc-given-name' },
              { name: 'cc-name' },
              { name: 'cc-number' },
              { name: 'cc-type' },
              { name: 'country' },
              { name: 'country-name' },
              { name: 'current-password' },
              { name: 'email' },
              { name: 'family-name' },
              { name: 'fax' },
              { name: 'given-name' },
              { name: 'home' },
              { name: 'honorific-prefix' },
              { name: 'honorific-suffix' },
              { name: 'impp' },
              { name: 'language' },
              { name: 'mobile' },
              { name: 'name' },
              { name: 'new-password' },
              { name: 'nickname' },
              { name: 'organization' },
              { name: 'organization-title' },
              { name: 'pager' },
              { name: 'photo' },
              { name: 'postal-code' },
              { name: 'sex' },
              { name: 'shipping' },
              { name: 'street-address' },
              { name: 'tel-area-code' },
              { name: 'tel' },
              { name: 'tel-country-code' },
              { name: 'tel-extension' },
              { name: 'tel-local' },
              { name: 'tel-local-prefix' },
              { name: 'tel-local-suffix' },
              { name: 'tel-national' },
              { name: 'transaction-amount' },
              { name: 'transaction-currency' },
              { name: 'url' },
              { name: 'username' },
              { name: 'work' },
            ],
          },
          {
            name: 'autocomplete',
            values: [
              { name: 'inline' },
              { name: 'list' },
              { name: 'both' },
              { name: 'none' },
            ],
          },
          {
            name: 'current',
            values: [
              { name: 'page' },
              { name: 'step' },
              { name: 'location' },
              { name: 'date' },
              { name: 'time' },
              { name: 'true' },
              { name: 'false' },
            ],
          },
          {
            name: 'dropeffect',
            values: [
              { name: 'copy' },
              { name: 'move' },
              { name: 'link' },
              { name: 'execute' },
              { name: 'popup' },
              { name: 'none' },
            ],
          },
          {
            name: 'invalid',
            values: [
              { name: 'grammar' },
              { name: 'false' },
              { name: 'spelling' },
              { name: 'true' },
            ],
          },
          {
            name: 'live',
            values: [
              { name: 'off' },
              { name: 'polite' },
              { name: 'assertive' },
            ],
          },
          {
            name: 'orientation',
            values: [
              { name: 'vertical' },
              { name: 'horizontal' },
              { name: 'undefined' },
            ],
          },
          {
            name: 'relevant',
            values: [
              { name: 'additions' },
              { name: 'removals' },
              { name: 'text' },
              { name: 'all' },
              { name: 'additions text' },
            ],
          },
          {
            name: 'sort',
            values: [
              { name: 'ascending' },
              { name: 'descending' },
              { name: 'none' },
              { name: 'other' },
            ],
          },
          {
            name: 'roles',
            values: [
              { name: 'alert' },
              { name: 'alertdialog' },
              { name: 'button' },
              { name: 'checkbox' },
              { name: 'dialog' },
              { name: 'gridcell' },
              { name: 'link' },
              { name: 'log' },
              { name: 'marquee' },
              { name: 'menuitem' },
              { name: 'menuitemcheckbox' },
              { name: 'menuitemradio' },
              { name: 'option' },
              { name: 'progressbar' },
              { name: 'radio' },
              { name: 'scrollbar' },
              { name: 'searchbox' },
              { name: 'slider' },
              { name: 'spinbutton' },
              { name: 'status' },
              { name: 'switch' },
              { name: 'tab' },
              { name: 'tabpanel' },
              { name: 'textbox' },
              { name: 'timer' },
              { name: 'tooltip' },
              { name: 'treeitem' },
              { name: 'combobox' },
              { name: 'grid' },
              { name: 'listbox' },
              { name: 'menu' },
              { name: 'menubar' },
              { name: 'radiogroup' },
              { name: 'tablist' },
              { name: 'tree' },
              { name: 'treegrid' },
              { name: 'application' },
              { name: 'article' },
              { name: 'cell' },
              { name: 'columnheader' },
              { name: 'definition' },
              { name: 'directory' },
              { name: 'document' },
              { name: 'feed' },
              { name: 'figure' },
              { name: 'group' },
              { name: 'heading' },
              { name: 'img' },
              { name: 'list' },
              { name: 'listitem' },
              { name: 'math' },
              { name: 'none' },
              { name: 'note' },
              { name: 'presentation' },
              { name: 'region' },
              { name: 'row' },
              { name: 'rowgroup' },
              { name: 'rowheader' },
              { name: 'separator' },
              { name: 'table' },
              { name: 'term' },
              { name: 'text' },
              { name: 'toolbar' },
              { name: 'banner' },
              { name: 'complementary' },
              { name: 'contentinfo' },
              { name: 'form' },
              { name: 'main' },
              { name: 'navigation' },
              { name: 'region' },
              { name: 'search' },
              { name: 'doc-abstract' },
              { name: 'doc-acknowledgments' },
              { name: 'doc-afterword' },
              { name: 'doc-appendix' },
              { name: 'doc-backlink' },
              { name: 'doc-biblioentry' },
              { name: 'doc-bibliography' },
              { name: 'doc-biblioref' },
              { name: 'doc-chapter' },
              { name: 'doc-colophon' },
              { name: 'doc-conclusion' },
              { name: 'doc-cover' },
              { name: 'doc-credit' },
              { name: 'doc-credits' },
              { name: 'doc-dedication' },
              { name: 'doc-endnote' },
              { name: 'doc-endnotes' },
              { name: 'doc-epigraph' },
              { name: 'doc-epilogue' },
              { name: 'doc-errata' },
              { name: 'doc-example' },
              { name: 'doc-footnote' },
              { name: 'doc-foreword' },
              { name: 'doc-glossary' },
              { name: 'doc-glossref' },
              { name: 'doc-index' },
              { name: 'doc-introduction' },
              { name: 'doc-noteref' },
              { name: 'doc-notice' },
              { name: 'doc-pagebreak' },
              { name: 'doc-pagelist' },
              { name: 'doc-part' },
              { name: 'doc-preface' },
              { name: 'doc-prologue' },
              { name: 'doc-pullquote' },
              { name: 'doc-qna' },
              { name: 'doc-subtitle' },
              { name: 'doc-tip' },
              { name: 'doc-toc' },
            ],
          },
          {
            name: 'metanames',
            values: [
              { name: 'application-name' },
              { name: 'author' },
              { name: 'description' },
              { name: 'format-detection' },
              { name: 'generator' },
              { name: 'keywords' },
              { name: 'publisher' },
              { name: 'referrer' },
              { name: 'robots' },
              { name: 'theme-color' },
              { name: 'viewport' },
            ],
          },
          {
            name: 'haspopup',
            values: [
              {
                name: 'false',
                description: {
                  kind: 'markdown',
                  value:
                    '(default) Indicates the element does not have a popup.',
                },
              },
              {
                name: 'true',
                description: {
                  kind: 'markdown',
                  value: 'Indicates the popup is a menu.',
                },
              },
              {
                name: 'menu',
                description: {
                  kind: 'markdown',
                  value: 'Indicates the popup is a menu.',
                },
              },
              {
                name: 'listbox',
                description: {
                  kind: 'markdown',
                  value: 'Indicates the popup is a listbox.',
                },
              },
              {
                name: 'tree',
                description: {
                  kind: 'markdown',
                  value: 'Indicates the popup is a tree.',
                },
              },
              {
                name: 'grid',
                description: {
                  kind: 'markdown',
                  value: 'Indicates the popup is a grid.',
                },
              },
              {
                name: 'dialog',
                description: {
                  kind: 'markdown',
                  value: 'Indicates the popup is a dialog.',
                },
              },
            ],
          },
        ],
      },
      Gt = (function() {
        function e(e) {
          (this.dataProviders = []),
            this.setDataProviders(
              !1 !== e.useDefaultDataProvider,
              e.customDataProviders || [],
            );
        }
        return (
          (e.prototype.setDataProviders = function(e, t) {
            var n;
            (this.dataProviders = []),
              e && this.dataProviders.push(new nt('html5', jt)),
              (n = this.dataProviders).push.apply(n, t);
          }),
          (e.prototype.getDataProviders = function() {
            return this.dataProviders;
          }),
          e
        );
      })(),
      Vt = {};
    function Kt(e, t) {
      return new nt(e, t);
    }
    var Yt = function() {
        return (Yt =
          Object.assign ||
          function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      },
      $t = function(e, t, n, i) {
        return new (n || (n = Promise))(function(r, o) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function(e) {
                      e(t);
                    })).then(a, s);
          }
          l((i = i.apply(e, t || [])).next());
        });
      },
      Xt = function(e, t) {
        var n,
          i,
          r,
          o,
          a = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function() {
              return this;
            }),
          o
        );
        function s(o) {
          return function(s) {
            return (function(o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    i &&
                      (r =
                        2 & o[0]
                          ? i.return
                          : o[0]
                          ? i.throw || ((r = i.return) && r.call(i), 0)
                          : i.next) &&
                      !(r = r.call(i, o[1])).done)
                  )
                    return r;
                  switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                    case 0:
                    case 1:
                      r = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((r = a.trys),
                        (r = r.length > 0 && r[r.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < r[1]) {
                        (a.label = r[1]), (r = o);
                        break;
                      }
                      if (r && a.label < r[2]) {
                        (a.label = r[2]), a.ops.push(o);
                        break;
                      }
                      r[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  n = r = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      },
      Jt = (function() {
        function e(e, t) {
          (this._ctx = e),
            (this._languageSettings = t.languageSettings),
            (this._languageId = t.languageId);
          var n = this._languageSettings.data,
            i = null == n ? void 0 : n.useDefaultDataProvider,
            r = [];
          if (null == n ? void 0 : n.dataProviders)
            for (var o in n.dataProviders) r.push(Kt(o, n.dataProviders[o]));
          this._languageService = (function(e) {
            void 0 === e && (e = Vt);
            var t = new Gt(e),
              n = new vt(e, t),
              i = new mt(e, t);
            return {
              setDataProviders: t.setDataProviders.bind(t),
              createScanner: De,
              parseHTMLDocument: function(e) {
                return je(e.getText());
              },
              doComplete: i.doComplete.bind(i),
              doComplete2: i.doComplete2.bind(i),
              setCompletionParticipants: i.setCompletionParticipants.bind(i),
              doHover: n.doHover.bind(n),
              format: kt,
              findDocumentHighlights: Ut,
              findDocumentLinks: It,
              findDocumentSymbols: Wt,
              getFoldingRanges: qt,
              getSelectionRanges: Ft,
              doTagComplete: i.doTagComplete.bind(i),
              doRename: Ot,
              findMatchingTagPosition: Dt,
              findOnTypeRenameRanges: Pt,
              findLinkedEditingRanges: Pt,
            };
          })({ useDefaultDataProvider: i, customDataProviders: r });
        }
        return (
          (e.prototype.doComplete = function(e, t) {
            return $t(this, void 0, void 0, function() {
              var n, i;
              return Xt(this, function(r) {
                return (
                  (n = this._getTextDocument(e)),
                  (i = this._languageService.parseHTMLDocument(n)),
                  [
                    2,
                    Promise.resolve(
                      this._languageService.doComplete(
                        n,
                        t,
                        i,
                        this._languageSettings &&
                          this._languageSettings.suggest,
                      ),
                    ),
                  ]
                );
              });
            });
          }),
          (e.prototype.format = function(e, t, n) {
            return $t(this, void 0, void 0, function() {
              var i, r, o;
              return Xt(this, function(a) {
                return (
                  (i = this._getTextDocument(e)),
                  (r = Yt(Yt({}, this._languageSettings.format), n)),
                  (o = this._languageService.format(i, t, r)),
                  [2, Promise.resolve(o)]
                );
              });
            });
          }),
          (e.prototype.doHover = function(e, t) {
            return $t(this, void 0, void 0, function() {
              var n, i, r;
              return Xt(this, function(o) {
                return (
                  (n = this._getTextDocument(e)),
                  (i = this._languageService.parseHTMLDocument(n)),
                  (r = this._languageService.doHover(n, t, i)),
                  [2, Promise.resolve(r)]
                );
              });
            });
          }),
          (e.prototype.findDocumentHighlights = function(e, t) {
            return $t(this, void 0, void 0, function() {
              var n, i, r;
              return Xt(this, function(o) {
                return (
                  (n = this._getTextDocument(e)),
                  (i = this._languageService.parseHTMLDocument(n)),
                  (r = this._languageService.findDocumentHighlights(n, t, i)),
                  [2, Promise.resolve(r)]
                );
              });
            });
          }),
          (e.prototype.findDocumentLinks = function(e) {
            return $t(this, void 0, void 0, function() {
              var t, n;
              return Xt(this, function(i) {
                return (
                  (t = this._getTextDocument(e)),
                  (n = this._languageService.findDocumentLinks(t, null)),
                  [2, Promise.resolve(n)]
                );
              });
            });
          }),
          (e.prototype.findDocumentSymbols = function(e) {
            return $t(this, void 0, void 0, function() {
              var t, n, i;
              return Xt(this, function(r) {
                return (
                  (t = this._getTextDocument(e)),
                  (n = this._languageService.parseHTMLDocument(t)),
                  (i = this._languageService.findDocumentSymbols(t, n)),
                  [2, Promise.resolve(i)]
                );
              });
            });
          }),
          (e.prototype.getFoldingRanges = function(e, t) {
            return $t(this, void 0, void 0, function() {
              var n, i;
              return Xt(this, function(r) {
                return (
                  (n = this._getTextDocument(e)),
                  (i = this._languageService.getFoldingRanges(n, t)),
                  [2, Promise.resolve(i)]
                );
              });
            });
          }),
          (e.prototype.getSelectionRanges = function(e, t) {
            return $t(this, void 0, void 0, function() {
              var n, i;
              return Xt(this, function(r) {
                return (
                  (n = this._getTextDocument(e)),
                  (i = this._languageService.getSelectionRanges(n, t)),
                  [2, Promise.resolve(i)]
                );
              });
            });
          }),
          (e.prototype.doRename = function(e, t, n) {
            return $t(this, void 0, void 0, function() {
              var i, r, o;
              return Xt(this, function(a) {
                return (
                  (i = this._getTextDocument(e)),
                  (r = this._languageService.parseHTMLDocument(i)),
                  (o = this._languageService.doRename(i, t, n, r)),
                  [2, Promise.resolve(o)]
                );
              });
            });
          }),
          (e.prototype._getTextDocument = function(e) {
            for (
              var t = 0, n = this._ctx.getMirrorModels();
              t < n.length;
              t++
            ) {
              var i = n[t];
              if (i.uri.toString() === e)
                return me.create(e, this._languageId, i.version, i.getValue());
            }
            return null;
          }),
          e
        );
      })();
    self.onmessage = function() {
      A.initialize(function(e, t) {
        return new Jt(e, t);
      });
    };
  },
});
