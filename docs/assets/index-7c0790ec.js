function Lv(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const o in n)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
function nm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var om = { exports: {} },
  Qs = {},
  im = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jo = Symbol.for('react.element'),
  Iv = Symbol.for('react.portal'),
  Bv = Symbol.for('react.fragment'),
  Dv = Symbol.for('react.strict_mode'),
  Vv = Symbol.for('react.profiler'),
  Ov = Symbol.for('react.provider'),
  Nv = Symbol.for('react.context'),
  Fv = Symbol.for('react.forward_ref'),
  Wv = Symbol.for('react.suspense'),
  Hv = Symbol.for('react.memo'),
  Uv = Symbol.for('react.lazy'),
  Zd = Symbol.iterator;
function Gv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Zd && e[Zd]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var sm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  am = Object.assign,
  lm = {};
function Vn(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = lm),
    (this.updater = r || sm);
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function um() {}
um.prototype = Vn.prototype;
function lc(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = lm),
    (this.updater = r || sm);
}
var uc = (lc.prototype = new um());
uc.constructor = lc;
am(uc, Vn.prototype);
uc.isPureReactComponent = !0;
var Jd = Array.isArray,
  cm = Object.prototype.hasOwnProperty,
  cc = { current: null },
  dm = { key: !0, ref: !0, __self: !0, __source: !0 };
function fm(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      cm.call(t, n) && !dm.hasOwnProperty(n) && (o[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) o.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
  return {
    $$typeof: Jo,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: cc.current,
  };
}
function Yv(e, t) {
  return {
    $$typeof: Jo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function dc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jo;
}
function Xv(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var ef = /\/+/g;
function Ha(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Xv('' + e.key)
    : t.toString(36);
}
function Oi(e, t, r, n, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Jo:
          case Iv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = n === '' ? '.' + Ha(s, 0) : n),
      Jd(o)
        ? ((r = ''),
          e != null && (r = e.replace(ef, '$&/') + '/'),
          Oi(o, t, r, '', function (u) {
            return u;
          }))
        : o != null &&
          (dc(o) &&
            (o = Yv(
              o,
              r +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(ef, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (n = n === '' ? '.' : n + ':'), Jd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = n + Ha(i, a);
      s += Oi(i, t, r, l, o);
    }
  else if (((l = Gv(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + Ha(i, a++)), (s += Oi(i, t, r, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return s;
}
function pi(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    Oi(e, n, '', '', function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function Kv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Ni = { transition: null },
  Qv = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Ni,
    ReactCurrentOwner: cc,
  };
N.Children = {
  map: pi,
  forEach: function (e, t, r) {
    pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!dc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
N.Component = Vn;
N.Fragment = Bv;
N.Profiler = Vv;
N.PureComponent = lc;
N.StrictMode = Dv;
N.Suspense = Wv;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qv;
N.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var n = am({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = cc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      cm.call(t, l) &&
        !dm.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: Jo, type: e.type, key: o, ref: i, props: n, _owner: s };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ov, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = fm;
N.createFactory = function (e) {
  var t = fm.bind(null, e);
  return (t.type = e), t;
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: Fv, render: e };
};
N.isValidElement = dc;
N.lazy = function (e) {
  return { $$typeof: Uv, _payload: { _status: -1, _result: e }, _init: Kv };
};
N.memo = function (e, t) {
  return { $$typeof: Hv, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = Ni.transition;
  Ni.transition = {};
  try {
    e();
  } finally {
    Ni.transition = t;
  }
};
N.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
N.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
N.useContext = function (e) {
  return Oe.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
N.useId = function () {
  return Oe.current.useId();
};
N.useImperativeHandle = function (e, t, r) {
  return Oe.current.useImperativeHandle(e, t, r);
};
N.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
N.useReducer = function (e, t, r) {
  return Oe.current.useReducer(e, t, r);
};
N.useRef = function (e) {
  return Oe.current.useRef(e);
};
N.useState = function (e) {
  return Oe.current.useState(e);
};
N.useSyncExternalStore = function (e, t, r) {
  return Oe.current.useSyncExternalStore(e, t, r);
};
N.useTransition = function () {
  return Oe.current.useTransition();
};
N.version = '18.2.0';
im.exports = N;
var S = im.exports;
const St = nm(S),
  tf = Lv({ __proto__: null, default: St }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qv = S,
  Zv = Symbol.for('react.element'),
  Jv = Symbol.for('react.fragment'),
  e1 = Object.prototype.hasOwnProperty,
  t1 = qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  r1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function pm(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (n in t) e1.call(t, n) && !r1.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Zv,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: t1.current,
  };
}
Qs.Fragment = Jv;
Qs.jsx = pm;
Qs.jsxs = pm;
om.exports = Qs;
var b = om.exports,
  Dl = {},
  hm = { exports: {} },
  it = {},
  mm = { exports: {} },
  gm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, D) {
    var V = A.length;
    A.push(D);
    e: for (; 0 < V; ) {
      var se = (V - 1) >>> 1,
        we = A[se];
      if (0 < o(we, D)) (A[se] = D), (A[V] = we), (V = se);
      else break e;
    }
  }
  function r(A) {
    return A.length === 0 ? null : A[0];
  }
  function n(A) {
    if (A.length === 0) return null;
    var D = A[0],
      V = A.pop();
    if (V !== D) {
      A[0] = V;
      e: for (var se = 0, we = A.length, di = we >>> 1; se < di; ) {
        var Cr = 2 * (se + 1) - 1,
          Wa = A[Cr],
          _r = Cr + 1,
          fi = A[_r];
        if (0 > o(Wa, V))
          _r < we && 0 > o(fi, Wa)
            ? ((A[se] = fi), (A[_r] = V), (se = _r))
            : ((A[se] = Wa), (A[Cr] = V), (se = Cr));
        else if (_r < we && 0 > o(fi, V)) (A[se] = fi), (A[_r] = V), (se = _r);
        else break e;
      }
    }
    return D;
  }
  function o(A, D) {
    var V = A.sortIndex - D.sortIndex;
    return V !== 0 ? V : A.id - D.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    x = !1,
    v = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    y = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(A) {
    for (var D = r(u); D !== null; ) {
      if (D.callback === null) n(u);
      else if (D.startTime <= A)
        n(u), (D.sortIndex = D.expirationTime), t(l, D);
      else break;
      D = r(u);
    }
  }
  function w(A) {
    if (((v = !1), g(A), !x))
      if (r(l) !== null) (x = !0), Se(C);
      else {
        var D = r(u);
        D !== null && _t(w, D.startTime - A);
      }
  }
  function C(A, D) {
    (x = !1), v && ((v = !1), y(T), (T = -1)), (m = !0);
    var V = f;
    try {
      for (
        g(D), d = r(l);
        d !== null && (!(d.expirationTime > D) || (A && !Y()));

      ) {
        var se = d.callback;
        if (typeof se == 'function') {
          (d.callback = null), (f = d.priorityLevel);
          var we = se(d.expirationTime <= D);
          (D = e.unstable_now()),
            typeof we == 'function' ? (d.callback = we) : d === r(l) && n(l),
            g(D);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var di = !0;
      else {
        var Cr = r(u);
        Cr !== null && _t(w, Cr.startTime - D), (di = !1);
      }
      return di;
    } finally {
      (d = null), (f = V), (m = !1);
    }
  }
  var P = !1,
    _ = null,
    T = -1,
    L = 5,
    $ = -1;
  function Y() {
    return !(e.unstable_now() - $ < L);
  }
  function Qe() {
    if (_ !== null) {
      var A = e.unstable_now();
      $ = A;
      var D = !0;
      try {
        D = _(!0, A);
      } finally {
        D ? lt() : ((P = !1), (_ = null));
      }
    } else P = !1;
  }
  var lt;
  if (typeof h == 'function')
    lt = function () {
      h(Qe);
    };
  else if (typeof MessageChannel < 'u') {
    var qe = new MessageChannel(),
      me = qe.port2;
    (qe.port1.onmessage = Qe),
      (lt = function () {
        me.postMessage(null);
      });
  } else
    lt = function () {
      k(Qe, 0);
    };
  function Se(A) {
    (_ = A), P || ((P = !0), lt());
  }
  function _t(A, D) {
    T = k(function () {
      A(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || m || ((x = !0), Se(C));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (L = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (A) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var V = f;
      f = D;
      try {
        return A();
      } finally {
        f = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, D) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var V = f;
      f = A;
      try {
        return D();
      } finally {
        f = V;
      }
    }),
    (e.unstable_scheduleCallback = function (A, D, V) {
      var se = e.unstable_now();
      switch (
        (typeof V == 'object' && V !== null
          ? ((V = V.delay), (V = typeof V == 'number' && 0 < V ? se + V : se))
          : (V = se),
        A)
      ) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return (
        (we = V + we),
        (A = {
          id: c++,
          callback: D,
          priorityLevel: A,
          startTime: V,
          expirationTime: we,
          sortIndex: -1,
        }),
        V > se
          ? ((A.sortIndex = V),
            t(u, A),
            r(l) === null &&
              A === r(u) &&
              (v ? (y(T), (T = -1)) : (v = !0), _t(w, V - se)))
          : ((A.sortIndex = we), t(l, A), x || m || ((x = !0), Se(C))),
        A
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (A) {
      var D = f;
      return function () {
        var V = f;
        f = D;
        try {
          return A.apply(this, arguments);
        } finally {
          f = V;
        }
      };
    });
})(gm);
mm.exports = gm;
var n1 = mm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ym = S,
  nt = n1;
function E(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var vm = new Set(),
  _o = {};
function Gr(e, t) {
  Tn(e, t), Tn(e + 'Capture', t);
}
function Tn(e, t) {
  for (_o[e] = t, e = 0; e < t.length; e++) vm.add(t[e]);
}
var Ut = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Vl = Object.prototype.hasOwnProperty,
  o1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rf = {},
  nf = {};
function i1(e) {
  return Vl.call(nf, e)
    ? !0
    : Vl.call(rf, e)
      ? !1
      : o1.test(e)
        ? (nf[e] = !0)
        : ((rf[e] = !0), !1);
}
function s1(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function a1(e, t, r, n) {
  if (t === null || typeof t > 'u' || s1(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, r, n, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ae = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ae[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ae[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ae[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ae[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ae[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ae[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ae[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ae[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fc = /[\-:]([a-z])/g;
function pc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(fc, pc);
    Ae[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(fc, pc);
    Ae[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(fc, pc);
  Ae[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ae[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Ne(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ae[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hc(e, t, r, n) {
  var o = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (a1(t, r, o, n) && (r = null),
    n || o === null
      ? i1(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : o.mustUseProperty
        ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : '') : r)
        : ((t = o.attributeName),
          (n = o.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (r = o === 3 || (o === 4 && r === !0) ? '' : '' + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Kt = ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hi = Symbol.for('react.element'),
  nn = Symbol.for('react.portal'),
  on = Symbol.for('react.fragment'),
  mc = Symbol.for('react.strict_mode'),
  Ol = Symbol.for('react.profiler'),
  xm = Symbol.for('react.provider'),
  bm = Symbol.for('react.context'),
  gc = Symbol.for('react.forward_ref'),
  Nl = Symbol.for('react.suspense'),
  Fl = Symbol.for('react.suspense_list'),
  yc = Symbol.for('react.memo'),
  Zt = Symbol.for('react.lazy'),
  Sm = Symbol.for('react.offscreen'),
  of = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (of && e[of]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var oe = Object.assign,
  Ua;
function ro(e) {
  if (Ua === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ua = (t && t[1]) || '';
    }
  return (
    `
` +
    Ua +
    e
  );
}
var Ga = !1;
function Ya(e, t) {
  if (!e || Ga) return '';
  Ga = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ga = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : '') ? ro(e) : '';
}
function l1(e) {
  switch (e.tag) {
    case 5:
      return ro(e.type);
    case 16:
      return ro('Lazy');
    case 13:
      return ro('Suspense');
    case 19:
      return ro('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ya(e.type, !1)), e;
    case 11:
      return (e = Ya(e.type.render, !1)), e;
    case 1:
      return (e = Ya(e.type, !0)), e;
    default:
      return '';
  }
}
function Wl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case on:
      return 'Fragment';
    case nn:
      return 'Portal';
    case Ol:
      return 'Profiler';
    case mc:
      return 'StrictMode';
    case Nl:
      return 'Suspense';
    case Fl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case bm:
        return (e.displayName || 'Context') + '.Consumer';
      case xm:
        return (e._context.displayName || 'Context') + '.Provider';
      case gc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case yc:
        return (
          (t = e.displayName || null), t !== null ? t : Wl(e.type) || 'Memo'
        );
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return Wl(e(t));
        } catch {}
    }
  return null;
}
function u1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Wl(t);
    case 8:
      return t === mc ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function hr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function wm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function c1(e) {
  var t = wm(e) ? 'checked' : 'value',
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < 'u' &&
    typeof r.get == 'function' &&
    typeof r.set == 'function'
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (n = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (s) {
          n = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function mi(e) {
  e._valueTracker || (e._valueTracker = c1(e));
}
function km(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = '';
  return (
    e && (n = wm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function as(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hl(e, t) {
  var r = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function sf(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = hr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Cm(e, t) {
  (t = t.checked), t != null && hc(e, 'checked', t, !1);
}
function Ul(e, t) {
  Cm(e, t);
  var r = hr(t.value),
    n = t.type;
  if (r != null)
    n === 'number'
      ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r);
  else if (n === 'submit' || n === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Gl(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Gl(e, t.type, hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function af(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type;
    if (
      !(
        (n !== 'submit' && n !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== '' && (e.name = r);
}
function Gl(e, t, r) {
  (t !== 'number' || as(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
}
var no = Array.isArray;
function bn(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = '' + hr(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function lf(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(E(92));
      if (no(r)) {
        if (1 < r.length) throw Error(E(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ''), (r = t);
  }
  e._wrapperState = { initialValue: hr(r) };
}
function _m(e, t) {
  var r = hr(t.value),
    n = hr(t.defaultValue);
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n);
}
function uf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Pm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Xl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Pm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var gi,
  Em = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        gi = gi || document.createElement('div'),
          gi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = gi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Po(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var lo = {
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
  d1 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(lo).forEach(function (e) {
  d1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lo[t] = lo[e]);
  });
});
function Tm(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (lo.hasOwnProperty(e) && lo[e])
      ? ('' + t).trim()
      : t + 'px';
}
function zm(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        o = Tm(r, t[r], n);
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var f1 = oe(
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
  },
);
function Kl(e, t) {
  if (t) {
    if (f1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(E(62));
  }
}
function Ql(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ql = null;
function vc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zl = null,
  Sn = null,
  wn = null;
function cf(e) {
  if ((e = ri(e))) {
    if (typeof Zl != 'function') throw Error(E(280));
    var t = e.stateNode;
    t && ((t = ta(t)), Zl(e.stateNode, e.type, t));
  }
}
function Am(e) {
  Sn ? (wn ? wn.push(e) : (wn = [e])) : (Sn = e);
}
function Rm() {
  if (Sn) {
    var e = Sn,
      t = wn;
    if (((wn = Sn = null), cf(e), t)) for (e = 0; e < t.length; e++) cf(t[e]);
  }
}
function Mm(e, t) {
  return e(t);
}
function $m() {}
var Xa = !1;
function jm(e, t, r) {
  if (Xa) return e(t, r);
  Xa = !0;
  try {
    return Mm(e, t, r);
  } finally {
    (Xa = !1), (Sn !== null || wn !== null) && ($m(), Rm());
  }
}
function Eo(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ta(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != 'function') throw Error(E(231, t, typeof r));
  return r;
}
var Jl = !1;
if (Ut)
  try {
    var Gn = {};
    Object.defineProperty(Gn, 'passive', {
      get: function () {
        Jl = !0;
      },
    }),
      window.addEventListener('test', Gn, Gn),
      window.removeEventListener('test', Gn, Gn);
  } catch {
    Jl = !1;
  }
function p1(e, t, r, n, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var uo = !1,
  ls = null,
  us = !1,
  eu = null,
  h1 = {
    onError: function (e) {
      (uo = !0), (ls = e);
    },
  };
function m1(e, t, r, n, o, i, s, a, l) {
  (uo = !1), (ls = null), p1.apply(h1, arguments);
}
function g1(e, t, r, n, o, i, s, a, l) {
  if ((m1.apply(this, arguments), uo)) {
    if (uo) {
      var u = ls;
      (uo = !1), (ls = null);
    } else throw Error(E(198));
    us || ((us = !0), (eu = u));
  }
}
function Yr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Lm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function df(e) {
  if (Yr(e) !== e) throw Error(E(188));
}
function y1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yr(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return df(o), e;
        if (i === n) return df(o), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (r.alternate !== n) throw Error(E(190));
  }
  if (r.tag !== 3) throw Error(E(188));
  return r.stateNode.current === r ? e : t;
}
function Im(e) {
  return (e = y1(e)), e !== null ? Bm(e) : null;
}
function Bm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dm = nt.unstable_scheduleCallback,
  ff = nt.unstable_cancelCallback,
  v1 = nt.unstable_shouldYield,
  x1 = nt.unstable_requestPaint,
  ae = nt.unstable_now,
  b1 = nt.unstable_getCurrentPriorityLevel,
  xc = nt.unstable_ImmediatePriority,
  Vm = nt.unstable_UserBlockingPriority,
  cs = nt.unstable_NormalPriority,
  S1 = nt.unstable_LowPriority,
  Om = nt.unstable_IdlePriority,
  qs = null,
  $t = null;
function w1(e) {
  if ($t && typeof $t.onCommitFiberRoot == 'function')
    try {
      $t.onCommitFiberRoot(qs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : _1,
  k1 = Math.log,
  C1 = Math.LN2;
function _1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((k1(e) / C1) | 0)) | 0;
}
var yi = 64,
  vi = 4194304;
function oo(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function ds(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = r & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (n = oo(a)) : ((i &= s), i !== 0 && (n = oo(i)));
  } else (s = r & ~o), s !== 0 ? (n = oo(s)) : i !== 0 && (n = oo(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - wt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function P1(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function E1(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - wt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & r) || a & n) && (o[s] = P1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function tu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Nm() {
  var e = yi;
  return (yi <<= 1), !(yi & 4194240) && (yi = 64), e;
}
function Ka(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ei(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = r);
}
function T1(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - wt(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function bc(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - wt(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var U = 0;
function Fm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wm,
  Sc,
  Hm,
  Um,
  Gm,
  ru = !1,
  xi = [],
  ir = null,
  sr = null,
  ar = null,
  To = new Map(),
  zo = new Map(),
  tr = [],
  z1 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function pf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ir = null;
      break;
    case 'dragenter':
    case 'dragleave':
      sr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ar = null;
      break;
    case 'pointerover':
    case 'pointerout':
      To.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      zo.delete(t.pointerId);
  }
}
function Yn(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ri(t)), t !== null && Sc(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function A1(e, t, r, n, o) {
  switch (t) {
    case 'focusin':
      return (ir = Yn(ir, e, t, r, n, o)), !0;
    case 'dragenter':
      return (sr = Yn(sr, e, t, r, n, o)), !0;
    case 'mouseover':
      return (ar = Yn(ar, e, t, r, n, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return To.set(i, Yn(To.get(i) || null, e, t, r, n, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), zo.set(i, Yn(zo.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function Ym(e) {
  var t = Mr(e.target);
  if (t !== null) {
    var r = Yr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Lm(r)), t !== null)) {
          (e.blockedOn = t),
            Gm(e.priority, function () {
              Hm(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (ql = n), r.target.dispatchEvent(n), (ql = null);
    } else return (t = ri(r)), t !== null && Sc(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function hf(e, t, r) {
  Fi(e) && r.delete(t);
}
function R1() {
  (ru = !1),
    ir !== null && Fi(ir) && (ir = null),
    sr !== null && Fi(sr) && (sr = null),
    ar !== null && Fi(ar) && (ar = null),
    To.forEach(hf),
    zo.forEach(hf);
}
function Xn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ru ||
      ((ru = !0),
      nt.unstable_scheduleCallback(nt.unstable_NormalPriority, R1)));
}
function Ao(e) {
  function t(o) {
    return Xn(o, e);
  }
  if (0 < xi.length) {
    Xn(xi[0], e);
    for (var r = 1; r < xi.length; r++) {
      var n = xi[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    ir !== null && Xn(ir, e),
      sr !== null && Xn(sr, e),
      ar !== null && Xn(ar, e),
      To.forEach(t),
      zo.forEach(t),
      r = 0;
    r < tr.length;
    r++
  )
    (n = tr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < tr.length && ((r = tr[0]), r.blockedOn === null); )
    Ym(r), r.blockedOn === null && tr.shift();
}
var kn = Kt.ReactCurrentBatchConfig,
  fs = !0;
function M1(e, t, r, n) {
  var o = U,
    i = kn.transition;
  kn.transition = null;
  try {
    (U = 1), wc(e, t, r, n);
  } finally {
    (U = o), (kn.transition = i);
  }
}
function $1(e, t, r, n) {
  var o = U,
    i = kn.transition;
  kn.transition = null;
  try {
    (U = 4), wc(e, t, r, n);
  } finally {
    (U = o), (kn.transition = i);
  }
}
function wc(e, t, r, n) {
  if (fs) {
    var o = nu(e, t, r, n);
    if (o === null) il(e, t, n, ps, r), pf(e, n);
    else if (A1(o, e, t, r, n)) n.stopPropagation();
    else if ((pf(e, n), t & 4 && -1 < z1.indexOf(e))) {
      for (; o !== null; ) {
        var i = ri(o);
        if (
          (i !== null && Wm(i),
          (i = nu(e, t, r, n)),
          i === null && il(e, t, n, ps, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else il(e, t, n, null, r);
  }
}
var ps = null;
function nu(e, t, r, n) {
  if (((ps = null), (e = vc(n)), (e = Mr(e)), e !== null))
    if (((t = Yr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Lm(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ps = e), null;
}
function Xm(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (b1()) {
        case xc:
          return 1;
        case Vm:
          return 4;
        case cs:
        case S1:
          return 16;
        case Om:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nr = null,
  kc = null,
  Wi = null;
function Km() {
  if (Wi) return Wi;
  var e,
    t = kc,
    r = t.length,
    n,
    o = 'value' in nr ? nr.value : nr.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var s = r - e;
  for (n = 1; n <= s && t[r - n] === o[i - n]; n++);
  return (Wi = o.slice(e, 1 < n ? 1 - n : void 0));
}
function Hi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bi() {
  return !0;
}
function mf() {
  return !1;
}
function st(e) {
  function t(r, n, o, i, s) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? bi
        : mf),
      (this.isPropagationStopped = mf),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = bi));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = bi));
      },
      persist: function () {},
      isPersistent: bi,
    }),
    t
  );
}
var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cc = st(On),
  ti = oe({}, On, { view: 0, detail: 0 }),
  j1 = st(ti),
  Qa,
  qa,
  Kn,
  Zs = oe({}, ti, {
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
    getModifierState: _c,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Kn &&
            (Kn && e.type === 'mousemove'
              ? ((Qa = e.screenX - Kn.screenX), (qa = e.screenY - Kn.screenY))
              : (qa = Qa = 0),
            (Kn = e)),
          Qa);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : qa;
    },
  }),
  gf = st(Zs),
  L1 = oe({}, Zs, { dataTransfer: 0 }),
  I1 = st(L1),
  B1 = oe({}, ti, { relatedTarget: 0 }),
  Za = st(B1),
  D1 = oe({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  V1 = st(D1),
  O1 = oe({}, On, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  N1 = st(O1),
  F1 = oe({}, On, { data: 0 }),
  yf = st(F1),
  W1 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  H1 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  U1 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function G1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = U1[e]) ? !!t[e] : !1;
}
function _c() {
  return G1;
}
var Y1 = oe({}, ti, {
    key: function (e) {
      if (e.key) {
        var t = W1[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Hi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? H1[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _c,
    charCode: function (e) {
      return e.type === 'keypress' ? Hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Hi(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  X1 = st(Y1),
  K1 = oe({}, Zs, {
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
  }),
  vf = st(K1),
  Q1 = oe({}, ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _c,
  }),
  q1 = st(Q1),
  Z1 = oe({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  J1 = st(Z1),
  ex = oe({}, Zs, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tx = st(ex),
  rx = [9, 13, 27, 32],
  Pc = Ut && 'CompositionEvent' in window,
  co = null;
Ut && 'documentMode' in document && (co = document.documentMode);
var nx = Ut && 'TextEvent' in window && !co,
  Qm = Ut && (!Pc || (co && 8 < co && 11 >= co)),
  xf = String.fromCharCode(32),
  bf = !1;
function qm(e, t) {
  switch (e) {
    case 'keyup':
      return rx.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Zm(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var sn = !1;
function ox(e, t) {
  switch (e) {
    case 'compositionend':
      return Zm(t);
    case 'keypress':
      return t.which !== 32 ? null : ((bf = !0), xf);
    case 'textInput':
      return (e = t.data), e === xf && bf ? null : e;
    default:
      return null;
  }
}
function ix(e, t) {
  if (sn)
    return e === 'compositionend' || (!Pc && qm(e, t))
      ? ((e = Km()), (Wi = kc = nr = null), (sn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Qm && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var sx = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function Sf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!sx[e.type] : t === 'textarea';
}
function Jm(e, t, r, n) {
  Am(n),
    (t = hs(t, 'onChange')),
    0 < t.length &&
      ((r = new Cc('onChange', 'change', null, r, n)),
      e.push({ event: r, listeners: t }));
}
var fo = null,
  Ro = null;
function ax(e) {
  c0(e, 0);
}
function Js(e) {
  var t = un(e);
  if (km(t)) return e;
}
function lx(e, t) {
  if (e === 'change') return t;
}
var e0 = !1;
if (Ut) {
  var Ja;
  if (Ut) {
    var el = 'oninput' in document;
    if (!el) {
      var wf = document.createElement('div');
      wf.setAttribute('oninput', 'return;'),
        (el = typeof wf.oninput == 'function');
    }
    Ja = el;
  } else Ja = !1;
  e0 = Ja && (!document.documentMode || 9 < document.documentMode);
}
function kf() {
  fo && (fo.detachEvent('onpropertychange', t0), (Ro = fo = null));
}
function t0(e) {
  if (e.propertyName === 'value' && Js(Ro)) {
    var t = [];
    Jm(t, Ro, e, vc(e)), jm(ax, t);
  }
}
function ux(e, t, r) {
  e === 'focusin'
    ? (kf(), (fo = t), (Ro = r), fo.attachEvent('onpropertychange', t0))
    : e === 'focusout' && kf();
}
function cx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Js(Ro);
}
function dx(e, t) {
  if (e === 'click') return Js(t);
}
function fx(e, t) {
  if (e === 'input' || e === 'change') return Js(t);
}
function px(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == 'function' ? Object.is : px;
function Mo(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Vl.call(t, o) || !Ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Cf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _f(e, t) {
  var r = Cf(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
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
    r = Cf(r);
  }
}
function r0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? r0(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function n0() {
  for (var e = window, t = as(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string';
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = as(e.document);
  }
  return t;
}
function Ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function hx(e) {
  var t = n0(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    r0(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Ec(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        'selectionStart' in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = _f(r, i));
        var s = _f(r, n);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mx = Ut && 'documentMode' in document && 11 >= document.documentMode,
  an = null,
  ou = null,
  po = null,
  iu = !1;
function Pf(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  iu ||
    an == null ||
    an !== as(n) ||
    ((n = an),
    'selectionStart' in n && Ec(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (po && Mo(po, n)) ||
      ((po = n),
      (n = hs(ou, 'onSelect')),
      0 < n.length &&
        ((t = new Cc('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = an))));
}
function Si(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  );
}
var ln = {
    animationend: Si('Animation', 'AnimationEnd'),
    animationiteration: Si('Animation', 'AnimationIteration'),
    animationstart: Si('Animation', 'AnimationStart'),
    transitionend: Si('Transition', 'TransitionEnd'),
  },
  tl = {},
  o0 = {};
Ut &&
  ((o0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  'TransitionEvent' in window || delete ln.transitionend.transition);
function ea(e) {
  if (tl[e]) return tl[e];
  if (!ln[e]) return e;
  var t = ln[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in o0) return (tl[e] = t[r]);
  return e;
}
var i0 = ea('animationend'),
  s0 = ea('animationiteration'),
  a0 = ea('animationstart'),
  l0 = ea('transitionend'),
  u0 = new Map(),
  Ef =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function xr(e, t) {
  u0.set(e, t), Gr(t, [e]);
}
for (var rl = 0; rl < Ef.length; rl++) {
  var nl = Ef[rl],
    gx = nl.toLowerCase(),
    yx = nl[0].toUpperCase() + nl.slice(1);
  xr(gx, 'on' + yx);
}
xr(i0, 'onAnimationEnd');
xr(s0, 'onAnimationIteration');
xr(a0, 'onAnimationStart');
xr('dblclick', 'onDoubleClick');
xr('focusin', 'onFocus');
xr('focusout', 'onBlur');
xr(l0, 'onTransitionEnd');
Tn('onMouseEnter', ['mouseout', 'mouseover']);
Tn('onMouseLeave', ['mouseout', 'mouseover']);
Tn('onPointerEnter', ['pointerout', 'pointerover']);
Tn('onPointerLeave', ['pointerout', 'pointerover']);
Gr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Gr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Gr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Gr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Gr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Gr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var io =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  vx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(io));
function Tf(e, t, r) {
  var n = e.type || 'unknown-event';
  (e.currentTarget = r), g1(n, t, void 0, e), (e.currentTarget = null);
}
function c0(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = n.length - 1; 0 <= s; s--) {
          var a = n[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Tf(o, a, u), (i = l);
        }
      else
        for (s = 0; s < n.length; s++) {
          if (
            ((a = n[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Tf(o, a, u), (i = l);
        }
    }
  }
  if (us) throw ((e = eu), (us = !1), (eu = null), e);
}
function Q(e, t) {
  var r = t[cu];
  r === void 0 && (r = t[cu] = new Set());
  var n = e + '__bubble';
  r.has(n) || (d0(t, e, 2, !1), r.add(n));
}
function ol(e, t, r) {
  var n = 0;
  t && (n |= 4), d0(r, e, n, t);
}
var wi = '_reactListening' + Math.random().toString(36).slice(2);
function $o(e) {
  if (!e[wi]) {
    (e[wi] = !0),
      vm.forEach(function (r) {
        r !== 'selectionchange' && (vx.has(r) || ol(r, !1, e), ol(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wi] || ((t[wi] = !0), ol('selectionchange', !1, t));
  }
}
function d0(e, t, r, n) {
  switch (Xm(t)) {
    case 1:
      var o = M1;
      break;
    case 4:
      o = $1;
      break;
    default:
      o = wc;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !Jl ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
        ? e.addEventListener(t, r, { passive: o })
        : e.addEventListener(t, r, !1);
}
function il(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var s = n.tag;
      if (s === 3 || s === 4) {
        var a = n.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = n.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Mr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            n = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  jm(function () {
    var u = i,
      c = vc(r),
      d = [];
    e: {
      var f = u0.get(e);
      if (f !== void 0) {
        var m = Cc,
          x = e;
        switch (e) {
          case 'keypress':
            if (Hi(r) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = X1;
            break;
          case 'focusin':
            (x = 'focus'), (m = Za);
            break;
          case 'focusout':
            (x = 'blur'), (m = Za);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = Za;
            break;
          case 'click':
            if (r.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = gf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = I1;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = q1;
            break;
          case i0:
          case s0:
          case a0:
            m = V1;
            break;
          case l0:
            m = J1;
            break;
          case 'scroll':
            m = j1;
            break;
          case 'wheel':
            m = tx;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = N1;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = vf;
        }
        var v = (t & 4) !== 0,
          k = !v && e === 'scroll',
          y = v ? (f !== null ? f + 'Capture' : null) : f;
        v = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              y !== null && ((w = Eo(h, y)), w != null && v.push(jo(h, w, g)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((f = new m(f, x, null, r, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          f &&
            r !== ql &&
            (x = r.relatedTarget || r.fromElement) &&
            (Mr(x) || x[Gt]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          m
            ? ((x = r.relatedTarget || r.toElement),
              (m = u),
              (x = x ? Mr(x) : null),
              x !== null &&
                ((k = Yr(x)), x !== k || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((m = null), (x = u)),
          m !== x)
        ) {
          if (
            ((v = gf),
            (w = 'onMouseLeave'),
            (y = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = vf),
              (w = 'onPointerLeave'),
              (y = 'onPointerEnter'),
              (h = 'pointer')),
            (k = m == null ? f : un(m)),
            (g = x == null ? f : un(x)),
            (f = new v(w, h + 'leave', m, r, c)),
            (f.target = k),
            (f.relatedTarget = g),
            (w = null),
            Mr(c) === u &&
              ((v = new v(y, h + 'enter', x, r, c)),
              (v.target = g),
              (v.relatedTarget = k),
              (w = v)),
            (k = w),
            m && x)
          )
            t: {
              for (v = m, y = x, h = 0, g = v; g; g = Qr(g)) h++;
              for (g = 0, w = y; w; w = Qr(w)) g++;
              for (; 0 < h - g; ) (v = Qr(v)), h--;
              for (; 0 < g - h; ) (y = Qr(y)), g--;
              for (; h--; ) {
                if (v === y || (y !== null && v === y.alternate)) break t;
                (v = Qr(v)), (y = Qr(y));
              }
              v = null;
            }
          else v = null;
          m !== null && zf(d, f, m, v, !1),
            x !== null && k !== null && zf(d, k, x, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? un(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && f.type === 'file'))
        )
          var C = lx;
        else if (Sf(f))
          if (e0) C = fx;
          else {
            C = cx;
            var P = ux;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (C = dx);
        if (C && (C = C(e, u))) {
          Jm(d, C, r, c);
          break e;
        }
        P && P(e, f, u),
          e === 'focusout' &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === 'number' &&
            Gl(f, 'number', f.value);
      }
      switch (((P = u ? un(u) : window), e)) {
        case 'focusin':
          (Sf(P) || P.contentEditable === 'true') &&
            ((an = P), (ou = u), (po = null));
          break;
        case 'focusout':
          po = ou = an = null;
          break;
        case 'mousedown':
          iu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (iu = !1), Pf(d, r, c);
          break;
        case 'selectionchange':
          if (mx) break;
        case 'keydown':
        case 'keyup':
          Pf(d, r, c);
      }
      var _;
      if (Pc)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        sn
          ? qm(e, r) && (T = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Qm &&
          r.locale !== 'ko' &&
          (sn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && sn && (_ = Km())
            : ((nr = c),
              (kc = 'value' in nr ? nr.value : nr.textContent),
              (sn = !0))),
        (P = hs(u, T)),
        0 < P.length &&
          ((T = new yf(T, e, null, r, c)),
          d.push({ event: T, listeners: P }),
          _ ? (T.data = _) : ((_ = Zm(r)), _ !== null && (T.data = _)))),
        (_ = nx ? ox(e, r) : ix(e, r)) &&
          ((u = hs(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new yf('onBeforeInput', 'beforeinput', null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = _)));
    }
    c0(d, t);
  });
}
function jo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function hs(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Eo(e, r)),
      i != null && n.unshift(jo(e, i, o)),
      (i = Eo(e, t)),
      i != null && n.push(jo(e, i, o))),
      (e = e.return);
  }
  return n;
}
function Qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zf(e, t, r, n, o) {
  for (var i = t._reactName, s = []; r !== null && r !== n; ) {
    var a = r,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Eo(r, i)), l != null && s.unshift(jo(r, l, a)))
        : o || ((l = Eo(r, i)), l != null && s.push(jo(r, l, a)))),
      (r = r.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var xx = /\r\n?/g,
  bx = /\u0000|\uFFFD/g;
function Af(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      xx,
      `
`,
    )
    .replace(bx, '');
}
function ki(e, t, r) {
  if (((t = Af(t)), Af(e) !== t && r)) throw Error(E(425));
}
function ms() {}
var su = null,
  au = null;
function lu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var uu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Sx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Rf = typeof Promise == 'function' ? Promise : void 0,
  wx =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Rf < 'u'
        ? function (e) {
            return Rf.resolve(null).then(e).catch(kx);
          }
        : uu;
function kx(e) {
  setTimeout(function () {
    throw e;
  });
}
function sl(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(o), Ao(t);
          return;
        }
        n--;
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++;
    r = o;
  } while (r);
  Ao(t);
}
function lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Mf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === '$' || r === '$!' || r === '$?') {
        if (t === 0) return e;
        t--;
      } else r === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Nn = Math.random().toString(36).slice(2),
  Rt = '__reactFiber$' + Nn,
  Lo = '__reactProps$' + Nn,
  Gt = '__reactContainer$' + Nn,
  cu = '__reactEvents$' + Nn,
  Cx = '__reactListeners$' + Nn,
  _x = '__reactHandles$' + Nn;
function Mr(e) {
  var t = e[Rt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Gt] || r[Rt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Mf(e); e !== null; ) {
          if ((r = e[Rt])) return r;
          e = Mf(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function ri(e) {
  return (
    (e = e[Rt] || e[Gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function ta(e) {
  return e[Lo] || null;
}
var du = [],
  cn = -1;
function br(e) {
  return { current: e };
}
function q(e) {
  0 > cn || ((e.current = du[cn]), (du[cn] = null), cn--);
}
function X(e, t) {
  cn++, (du[cn] = e.current), (e.current = t);
}
var mr = {},
  Ie = br(mr),
  He = br(!1),
  Or = mr;
function zn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return mr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function gs() {
  q(He), q(Ie);
}
function $f(e, t, r) {
  if (Ie.current !== mr) throw Error(E(168));
  X(Ie, t), X(He, r);
}
function f0(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(E(108, u1(e) || 'Unknown', o));
  return oe({}, r, n);
}
function ys(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mr),
    (Or = Ie.current),
    X(Ie, e),
    X(He, He.current),
    !0
  );
}
function jf(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(E(169));
  r
    ? ((e = f0(e, t, Or)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      q(He),
      q(Ie),
      X(Ie, e))
    : q(He),
    X(He, r);
}
var Dt = null,
  ra = !1,
  al = !1;
function p0(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Px(e) {
  (ra = !0), p0(e);
}
function Sr() {
  if (!al && Dt !== null) {
    al = !0;
    var e = 0,
      t = U;
    try {
      var r = Dt;
      for (U = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Dt = null), (ra = !1);
    } catch (o) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), Dm(xc, Sr), o);
    } finally {
      (U = t), (al = !1);
    }
  }
  return null;
}
var dn = [],
  fn = 0,
  vs = null,
  xs = 0,
  ct = [],
  dt = 0,
  Nr = null,
  Vt = 1,
  Ot = '';
function Er(e, t) {
  (dn[fn++] = xs), (dn[fn++] = vs), (vs = e), (xs = t);
}
function h0(e, t, r) {
  (ct[dt++] = Vt), (ct[dt++] = Ot), (ct[dt++] = Nr), (Nr = e);
  var n = Vt;
  e = Ot;
  var o = 32 - wt(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - wt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (n & ((1 << s) - 1)).toString(32)),
      (n >>= s),
      (o -= s),
      (Vt = (1 << (32 - wt(t) + o)) | (r << o) | n),
      (Ot = i + e);
  } else (Vt = (1 << i) | (r << o) | n), (Ot = e);
}
function Tc(e) {
  e.return !== null && (Er(e, 1), h0(e, 1, 0));
}
function zc(e) {
  for (; e === vs; )
    (vs = dn[--fn]), (dn[fn] = null), (xs = dn[--fn]), (dn[fn] = null);
  for (; e === Nr; )
    (Nr = ct[--dt]),
      (ct[dt] = null),
      (Ot = ct[--dt]),
      (ct[dt] = null),
      (Vt = ct[--dt]),
      (ct[dt] = null);
}
var tt = null,
  Je = null,
  Z = !1,
  bt = null;
function m0(e, t) {
  var r = ft(5, null, null, 0);
  (r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Lf(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (Je = lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Nr !== null ? { id: Vt, overflow: Ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = ft(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (tt = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pu(e) {
  if (Z) {
    var t = Je;
    if (t) {
      var r = t;
      if (!Lf(e, t)) {
        if (fu(e)) throw Error(E(418));
        t = lr(r.nextSibling);
        var n = tt;
        t && Lf(e, t)
          ? m0(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (tt = e));
      }
    } else {
      if (fu(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (tt = e);
    }
  }
}
function If(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function Ci(e) {
  if (e !== tt) return !1;
  if (!Z) return If(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !lu(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (fu(e)) throw (g0(), Error(E(418)));
    for (; t; ) m0(e, t), (t = lr(t.nextSibling));
  }
  if ((If(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === '/$') {
            if (t === 0) {
              Je = lr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = tt ? lr(e.stateNode.nextSibling) : null;
  return !0;
}
function g0() {
  for (var e = Je; e; ) e = lr(e.nextSibling);
}
function An() {
  (Je = tt = null), (Z = !1);
}
function Ac(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
var Ex = Kt.ReactCurrentBatchConfig;
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var bs = br(null),
  Ss = null,
  pn = null,
  Rc = null;
function Mc() {
  Rc = pn = Ss = null;
}
function $c(e) {
  var t = bs.current;
  q(bs), (e._currentValue = t);
}
function hu(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Cn(e, t) {
  (Ss = e),
    (Rc = pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (Rc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pn === null)) {
      if (Ss === null) throw Error(E(308));
      (pn = e), (Ss.dependencies = { lanes: 0, firstContext: e });
    } else pn = pn.next = e;
  return t;
}
var $r = null;
function jc(e) {
  $r === null ? ($r = [e]) : $r.push(e);
}
function y0(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), jc(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    Yt(e, n)
  );
}
function Yt(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Jt = !1;
function Lc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function v0(e, t) {
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
function Ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ur(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), F & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      Yt(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), jc(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    Yt(e, r)
  );
}
function Ui(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), bc(e, r);
  }
}
function Bf(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var s = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function ws(e, t, r, n) {
  var o = e.updateQueue;
  Jt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        m = a.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            v = a;
          switch (((f = t), (m = r), v.tag)) {
            case 1:
              if (((x = v.payload), typeof x == 'function')) {
                d = x.call(m, d, f);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = v.payload),
                (f = typeof x == 'function' ? x.call(m, d, f) : x),
                f == null)
              )
                break e;
              d = oe({}, d, f);
              break e;
            case 2:
              Jt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Wr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Df(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != 'function'))
          throw Error(E(191, o));
        o.call(n);
      }
    }
}
var x0 = new ym.Component().refs;
function mu(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : oe({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var na = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ve(),
      o = dr(e),
      i = Ft(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = ur(e, i, o)),
      t !== null && (kt(t, e, o, n), Ui(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ve(),
      o = dr(e),
      i = Ft(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = ur(e, i, o)),
      t !== null && (kt(t, e, o, n), Ui(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ve(),
      n = dr(e),
      o = Ft(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ur(e, o, n)),
      t !== null && (kt(t, e, n, r), Ui(t, e, n));
  },
};
function Vf(e, t, r, n, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Mo(r, n) || !Mo(o, i)
        : !0
  );
}
function b0(e, t, r) {
  var n = !1,
    o = mr,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = mt(i))
      : ((o = Ue(t) ? Or : Ie.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? zn(e, o) : mr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = na),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Of(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && na.enqueueReplaceState(t, t.state, null);
}
function gu(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = x0), Lc(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = mt(i))
    : ((i = Ue(t) ? Or : Ie.current), (o.context = zn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (mu(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && na.enqueueReplaceState(o, o.state, null),
      ws(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Qn(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(E(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(E(147, e));
      var o = n,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === x0 && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(E(284));
    if (!r._owner) throw Error(E(290, e));
  }
  return e;
}
function _i(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Nf(e) {
  var t = e._init;
  return t(e._payload);
}
function S0(e) {
  function t(y, h) {
    if (e) {
      var g = y.deletions;
      g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
    }
  }
  function r(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function n(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function o(y, h) {
    return (y = fr(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, h, g) {
    return (
      (y.index = g),
      e
        ? ((g = y.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((y.flags |= 2), h) : g)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, h, g, w) {
    return h === null || h.tag !== 6
      ? ((h = hl(g, y.mode, w)), (h.return = y), h)
      : ((h = o(h, g)), (h.return = y), h);
  }
  function l(y, h, g, w) {
    var C = g.type;
    return C === on
      ? c(y, h, g.props.children, w, g.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === Zt &&
              Nf(C) === h.type))
        ? ((w = o(h, g.props)), (w.ref = Qn(y, h, g)), (w.return = y), w)
        : ((w = qi(g.type, g.key, g.props, null, y.mode, w)),
          (w.ref = Qn(y, h, g)),
          (w.return = y),
          w);
  }
  function u(y, h, g, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = ml(g, y.mode, w)), (h.return = y), h)
      : ((h = o(h, g.children || [])), (h.return = y), h);
  }
  function c(y, h, g, w, C) {
    return h === null || h.tag !== 7
      ? ((h = Dr(g, y.mode, w, C)), (h.return = y), h)
      : ((h = o(h, g)), (h.return = y), h);
  }
  function d(y, h, g) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = hl('' + h, y.mode, g)), (h.return = y), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case hi:
          return (
            (g = qi(h.type, h.key, h.props, null, y.mode, g)),
            (g.ref = Qn(y, null, h)),
            (g.return = y),
            g
          );
        case nn:
          return (h = ml(h, y.mode, g)), (h.return = y), h;
        case Zt:
          var w = h._init;
          return d(y, w(h._payload), g);
      }
      if (no(h) || Un(h))
        return (h = Dr(h, y.mode, g, null)), (h.return = y), h;
      _i(y, h);
    }
    return null;
  }
  function f(y, h, g, w) {
    var C = h !== null ? h.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return C !== null ? null : a(y, h, '' + g, w);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case hi:
          return g.key === C ? l(y, h, g, w) : null;
        case nn:
          return g.key === C ? u(y, h, g, w) : null;
        case Zt:
          return (C = g._init), f(y, h, C(g._payload), w);
      }
      if (no(g) || Un(g)) return C !== null ? null : c(y, h, g, w, null);
      _i(y, g);
    }
    return null;
  }
  function m(y, h, g, w, C) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (y = y.get(g) || null), a(h, y, '' + w, C);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case hi:
          return (y = y.get(w.key === null ? g : w.key) || null), l(h, y, w, C);
        case nn:
          return (y = y.get(w.key === null ? g : w.key) || null), u(h, y, w, C);
        case Zt:
          var P = w._init;
          return m(y, h, g, P(w._payload), C);
      }
      if (no(w) || Un(w)) return (y = y.get(g) || null), c(h, y, w, C, null);
      _i(h, w);
    }
    return null;
  }
  function x(y, h, g, w) {
    for (
      var C = null, P = null, _ = h, T = (h = 0), L = null;
      _ !== null && T < g.length;
      T++
    ) {
      _.index > T ? ((L = _), (_ = null)) : (L = _.sibling);
      var $ = f(y, _, g[T], w);
      if ($ === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && $.alternate === null && t(y, _),
        (h = i($, h, T)),
        P === null ? (C = $) : (P.sibling = $),
        (P = $),
        (_ = L);
    }
    if (T === g.length) return r(y, _), Z && Er(y, T), C;
    if (_ === null) {
      for (; T < g.length; T++)
        (_ = d(y, g[T], w)),
          _ !== null &&
            ((h = i(_, h, T)), P === null ? (C = _) : (P.sibling = _), (P = _));
      return Z && Er(y, T), C;
    }
    for (_ = n(y, _); T < g.length; T++)
      (L = m(_, y, T, g[T], w)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? T : L.key),
          (h = i(L, h, T)),
          P === null ? (C = L) : (P.sibling = L),
          (P = L));
    return (
      e &&
        _.forEach(function (Y) {
          return t(y, Y);
        }),
      Z && Er(y, T),
      C
    );
  }
  function v(y, h, g, w) {
    var C = Un(g);
    if (typeof C != 'function') throw Error(E(150));
    if (((g = C.call(g)), g == null)) throw Error(E(151));
    for (
      var P = (C = null), _ = h, T = (h = 0), L = null, $ = g.next();
      _ !== null && !$.done;
      T++, $ = g.next()
    ) {
      _.index > T ? ((L = _), (_ = null)) : (L = _.sibling);
      var Y = f(y, _, $.value, w);
      if (Y === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && Y.alternate === null && t(y, _),
        (h = i(Y, h, T)),
        P === null ? (C = Y) : (P.sibling = Y),
        (P = Y),
        (_ = L);
    }
    if ($.done) return r(y, _), Z && Er(y, T), C;
    if (_ === null) {
      for (; !$.done; T++, $ = g.next())
        ($ = d(y, $.value, w)),
          $ !== null &&
            ((h = i($, h, T)), P === null ? (C = $) : (P.sibling = $), (P = $));
      return Z && Er(y, T), C;
    }
    for (_ = n(y, _); !$.done; T++, $ = g.next())
      ($ = m(_, y, T, $.value, w)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? T : $.key),
          (h = i($, h, T)),
          P === null ? (C = $) : (P.sibling = $),
          (P = $));
    return (
      e &&
        _.forEach(function (Qe) {
          return t(y, Qe);
        }),
      Z && Er(y, T),
      C
    );
  }
  function k(y, h, g, w) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === on &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case hi:
          e: {
            for (var C = g.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (((C = g.type), C === on)) {
                  if (P.tag === 7) {
                    r(y, P.sibling),
                      (h = o(P, g.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Zt &&
                    Nf(C) === P.type)
                ) {
                  r(y, P.sibling),
                    (h = o(P, g.props)),
                    (h.ref = Qn(y, P, g)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                r(y, P);
                break;
              } else t(y, P);
              P = P.sibling;
            }
            g.type === on
              ? ((h = Dr(g.props.children, y.mode, w, g.key)),
                (h.return = y),
                (y = h))
              : ((w = qi(g.type, g.key, g.props, null, y.mode, w)),
                (w.ref = Qn(y, h, g)),
                (w.return = y),
                (y = w));
          }
          return s(y);
        case nn:
          e: {
            for (P = g.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  r(y, h.sibling),
                    (h = o(h, g.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  r(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = ml(g, y.mode, w)), (h.return = y), (y = h);
          }
          return s(y);
        case Zt:
          return (P = g._init), k(y, h, P(g._payload), w);
      }
      if (no(g)) return x(y, h, g, w);
      if (Un(g)) return v(y, h, g, w);
      _i(y, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        h !== null && h.tag === 6
          ? (r(y, h.sibling), (h = o(h, g)), (h.return = y), (y = h))
          : (r(y, h), (h = hl(g, y.mode, w)), (h.return = y), (y = h)),
        s(y))
      : r(y, h);
  }
  return k;
}
var Rn = S0(!0),
  w0 = S0(!1),
  ni = {},
  jt = br(ni),
  Io = br(ni),
  Bo = br(ni);
function jr(e) {
  if (e === ni) throw Error(E(174));
  return e;
}
function Ic(e, t) {
  switch ((X(Bo, t), X(Io, e), X(jt, ni), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xl(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xl(t, e));
  }
  q(jt), X(jt, t);
}
function Mn() {
  q(jt), q(Io), q(Bo);
}
function k0(e) {
  jr(Bo.current);
  var t = jr(jt.current),
    r = Xl(t, e.type);
  t !== r && (X(Io, e), X(jt, r));
}
function Bc(e) {
  Io.current === e && (q(jt), q(Io));
}
var te = br(0);
function ks(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ll = [];
function Dc() {
  for (var e = 0; e < ll.length; e++)
    ll[e]._workInProgressVersionPrimary = null;
  ll.length = 0;
}
var Gi = Kt.ReactCurrentDispatcher,
  ul = Kt.ReactCurrentBatchConfig,
  Fr = 0,
  ne = null,
  ge = null,
  ke = null,
  Cs = !1,
  ho = !1,
  Do = 0,
  Tx = 0;
function Re() {
  throw Error(E(321));
}
function Vc(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Ct(e[r], t[r])) return !1;
  return !0;
}
function Oc(e, t, r, n, o, i) {
  if (
    ((Fr = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gi.current = e === null || e.memoizedState === null ? Mx : $x),
    (e = r(n, o)),
    ho)
  ) {
    i = 0;
    do {
      if (((ho = !1), (Do = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (ke = ge = null),
        (t.updateQueue = null),
        (Gi.current = jx),
        (e = r(n, o));
    } while (ho);
  }
  if (
    ((Gi.current = _s),
    (t = ge !== null && ge.next !== null),
    (Fr = 0),
    (ke = ge = ne = null),
    (Cs = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Nc() {
  var e = Do !== 0;
  return (Do = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ne.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function gt() {
  if (ge === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = ke === null ? ne.memoizedState : ke.next;
  if (t !== null) (ke = t), (ge = e);
  else {
    if (e === null) throw Error(E(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      ke === null ? (ne.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function Vo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function cl(e) {
  var t = gt(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = ge,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Fr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = n)) : (l = l.next = d),
          (ne.lanes |= c),
          (Wr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = n) : (l.next = a),
      Ct(n, t.memoizedState) || (We = !0),
      (t.memoizedState = n),
      (t.baseState = s),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ne.lanes |= i), (Wr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function dl(e) {
  var t = gt(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Ct(i, t.memoizedState) || (We = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function C0() {}
function _0(e, t) {
  var r = ne,
    n = gt(),
    o = t(),
    i = !Ct(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (We = !0)),
    (n = n.queue),
    Fc(T0.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Oo(9, E0.bind(null, r, n, o, t), void 0, null),
      Ce === null)
    )
      throw Error(E(349));
    Fr & 30 || P0(r, t, o);
  }
  return o;
}
function P0(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function E0(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), z0(t) && A0(e);
}
function T0(e, t, r) {
  return r(function () {
    z0(t) && A0(e);
  });
}
function z0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Ct(e, r);
  } catch {
    return !0;
  }
}
function A0(e) {
  var t = Yt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Ff(e) {
  var t = Et();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Rx.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function Oo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function R0() {
  return gt().memoizedState;
}
function Yi(e, t, r, n) {
  var o = Et();
  (ne.flags |= e),
    (o.memoizedState = Oo(1 | t, r, void 0, n === void 0 ? null : n));
}
function oa(e, t, r, n) {
  var o = gt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (ge !== null) {
    var s = ge.memoizedState;
    if (((i = s.destroy), n !== null && Vc(n, s.deps))) {
      o.memoizedState = Oo(t, r, i, n);
      return;
    }
  }
  (ne.flags |= e), (o.memoizedState = Oo(1 | t, r, i, n));
}
function Wf(e, t) {
  return Yi(8390656, 8, e, t);
}
function Fc(e, t) {
  return oa(2048, 8, e, t);
}
function M0(e, t) {
  return oa(4, 2, e, t);
}
function $0(e, t) {
  return oa(4, 4, e, t);
}
function j0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function L0(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), oa(4, 4, j0.bind(null, t, e), r)
  );
}
function Wc() {}
function I0(e, t) {
  var r = gt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Vc(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function B0(e, t) {
  var r = gt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Vc(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function D0(e, t, r) {
  return Fr & 21
    ? (Ct(r, t) || ((r = Nm()), (ne.lanes |= r), (Wr |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = r));
}
function zx(e, t) {
  var r = U;
  (U = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = ul.transition;
  ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = r), (ul.transition = n);
  }
}
function V0() {
  return gt().memoizedState;
}
function Ax(e, t, r) {
  var n = dr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    O0(e))
  )
    N0(t, r);
  else if (((r = y0(e, t, r, n)), r !== null)) {
    var o = Ve();
    kt(r, e, n, o), F0(r, t, n);
  }
}
function Rx(e, t, r) {
  var n = dr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (O0(e)) N0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, r);
        if (((o.hasEagerState = !0), (o.eagerState = a), Ct(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), jc(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = y0(e, t, o, n)),
      r !== null && ((o = Ve()), kt(r, e, n, o), F0(r, t, n));
  }
}
function O0(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function N0(e, t) {
  ho = Cs = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function F0(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), bc(e, r);
  }
}
var _s = {
    readContext: mt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  Mx = {
    readContext: mt,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: Wf,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Yi(4194308, 4, j0.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Et();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Ax.bind(null, ne, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ff,
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = Ff(!1),
        t = e[0];
      return (e = zx.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = ne,
        o = Et();
      if (Z) {
        if (r === void 0) throw Error(E(407));
        r = r();
      } else {
        if (((r = t()), Ce === null)) throw Error(E(349));
        Fr & 30 || P0(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        Wf(T0.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Oo(9, E0.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Et(),
        t = Ce.identifierPrefix;
      if (Z) {
        var r = Ot,
          n = Vt;
        (r = (n & ~(1 << (32 - wt(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Do++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':');
      } else (r = Tx++), (t = ':' + t + 'r' + r.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $x = {
    readContext: mt,
    useCallback: I0,
    useContext: mt,
    useEffect: Fc,
    useImperativeHandle: L0,
    useInsertionEffect: M0,
    useLayoutEffect: $0,
    useMemo: B0,
    useReducer: cl,
    useRef: R0,
    useState: function () {
      return cl(Vo);
    },
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      var t = gt();
      return D0(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = cl(Vo)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: C0,
    useSyncExternalStore: _0,
    useId: V0,
    unstable_isNewReconciler: !1,
  },
  jx = {
    readContext: mt,
    useCallback: I0,
    useContext: mt,
    useEffect: Fc,
    useImperativeHandle: L0,
    useInsertionEffect: M0,
    useLayoutEffect: $0,
    useMemo: B0,
    useReducer: dl,
    useRef: R0,
    useState: function () {
      return dl(Vo);
    },
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      var t = gt();
      return ge === null ? (t.memoizedState = e) : D0(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = dl(Vo)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: C0,
    useSyncExternalStore: _0,
    useId: V0,
    unstable_isNewReconciler: !1,
  };
function $n(e, t) {
  try {
    var r = '',
      n = t;
    do (r += l1(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function fl(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function yu(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Lx = typeof WeakMap == 'function' ? WeakMap : Map;
function W0(e, t, r) {
  (r = Ft(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Es || ((Es = !0), (Eu = n)), yu(e, t);
    }),
    r
  );
}
function H0(e, t, r) {
  (r = Ft(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == 'function') {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        yu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (r.callback = function () {
        yu(e, t),
          typeof n != 'function' &&
            (cr === null ? (cr = new Set([this])) : cr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    r
  );
}
function Hf(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Lx();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = Kx.bind(null, e, t, r)), t.then(e, e));
}
function Uf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gf(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Ft(-1, 1)), (t.tag = 2), ur(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var Ix = Kt.ReactCurrentOwner,
  We = !1;
function De(e, t, r, n) {
  t.child = e === null ? w0(t, null, r, n) : Rn(t, e.child, r, n);
}
function Yf(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    Cn(t, o),
    (n = Oc(e, t, r, n, i, o)),
    (r = Nc()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xt(e, t, o))
      : (Z && r && Tc(t), (t.flags |= 1), De(e, t, n, o), t.child)
  );
}
function Xf(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == 'function' &&
      !qc(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), U0(e, t, i, n, o))
      : ((e = qi(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Mo), r(s, n) && e.ref === t.ref)
    )
      return Xt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = fr(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function U0(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Mo(i, n) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), Xt(e, t, o);
  }
  return vu(e, t, r, n, o);
}
function G0(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(mn, Ze),
        (Ze |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          X(mn, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        X(mn, Ze),
        (Ze |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      X(mn, Ze),
      (Ze |= n);
  return De(e, t, o, r), t.child;
}
function Y0(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vu(e, t, r, n, o) {
  var i = Ue(r) ? Or : Ie.current;
  return (
    (i = zn(t, i)),
    Cn(t, o),
    (r = Oc(e, t, r, n, i, o)),
    (n = Nc()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xt(e, t, o))
      : (Z && n && Tc(t), (t.flags |= 1), De(e, t, r, o), t.child)
  );
}
function Kf(e, t, r, n, o) {
  if (Ue(r)) {
    var i = !0;
    ys(t);
  } else i = !1;
  if ((Cn(t, o), t.stateNode === null))
    Xi(e, t), b0(t, r, n), gu(t, r, n, o), (n = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = r.contextType;
    typeof u == 'object' && u !== null
      ? (u = mt(u))
      : ((u = Ue(r) ? Or : Ie.current), (u = zn(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== n || l !== u) && Of(t, s, n, u)),
      (Jt = !1);
    var f = t.memoizedState;
    (s.state = f),
      ws(t, n, s, o),
      (l = t.memoizedState),
      a !== n || f !== l || He.current || Jt
        ? (typeof c == 'function' && (mu(t, r, c, n), (l = t.memoizedState)),
          (a = Jt || Vf(t, r, a, n, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (s.props = n),
          (s.state = l),
          (s.context = u),
          (n = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (n = !1));
  } else {
    (s = t.stateNode),
      v0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : vt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = r.contextType),
      typeof l == 'object' && l !== null
        ? (l = mt(l))
        : ((l = Ue(r) ? Or : Ie.current), (l = zn(t, l)));
    var m = r.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== d || f !== l) && Of(t, s, n, l)),
      (Jt = !1),
      (f = t.memoizedState),
      (s.state = f),
      ws(t, n, s, o);
    var x = t.memoizedState;
    a !== d || f !== x || He.current || Jt
      ? (typeof m == 'function' && (mu(t, r, m, n), (x = t.memoizedState)),
        (u = Jt || Vf(t, r, u, n, f, x, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(n, x, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(n, x, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = x)),
        (s.props = n),
        (s.state = x),
        (s.context = l),
        (n = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return xu(e, t, r, n, i, o);
}
function xu(e, t, r, n, o, i) {
  Y0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!n && !s) return o && jf(t, r, !1), Xt(e, t, i);
  (n = t.stateNode), (Ix.current = t);
  var a =
    s && typeof r.getDerivedStateFromError != 'function' ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Rn(t, e.child, null, i)), (t.child = Rn(t, null, a, i)))
      : De(e, t, a, i),
    (t.memoizedState = n.state),
    o && jf(t, r, !0),
    t.child
  );
}
function X0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $f(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $f(e, t.context, !1),
    Ic(e, t.containerInfo);
}
function Qf(e, t, r, n, o) {
  return An(), Ac(o), (t.flags |= 256), De(e, t, r, n), t.child;
}
var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Su(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function K0(e, t, r) {
  var n = t.pendingProps,
    o = te.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    X(te, o & 1),
    e === null)
  )
    return (
      pu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = aa(s, n, 0, null)),
              (e = Dr(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Su(r)),
              (t.memoizedState = bu),
              e)
            : Hc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Bx(e, t, s, n, a, o, r);
  if (i) {
    (i = n.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: 'hidden', children: n.children };
    return (
      !(s & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = fr(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = fr(a, i)) : ((i = Dr(i, s, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Su(r)
          : {
              baseLanes: s.baseLanes | r,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = bu),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = fr(i, { mode: 'visible', children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Hc(e, t) {
  return (
    (t = aa({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pi(e, t, r, n) {
  return (
    n !== null && Ac(n),
    Rn(t, e.child, null, r),
    (e = Hc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Bx(e, t, r, n, o, i, s) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = fl(Error(E(422)))), Pi(e, t, s, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = n.fallback),
          (o = t.mode),
          (n = aa({ mode: 'visible', children: n.children }, o, 0, null)),
          (i = Dr(i, o, s, null)),
          (i.flags |= 2),
          (n.return = t),
          (i.return = t),
          (n.sibling = i),
          (t.child = n),
          t.mode & 1 && Rn(t, e.child, null, s),
          (t.child.memoizedState = Su(s)),
          (t.memoizedState = bu),
          i);
  if (!(t.mode & 1)) return Pi(e, t, s, null);
  if (o.data === '$!') {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(E(419))), (n = fl(i, n, void 0)), Pi(e, t, s, n);
  }
  if (((a = (s & e.childLanes) !== 0), We || a)) {
    if (((n = Ce), n !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Yt(e, o), kt(n, e, o, -1));
    }
    return Qc(), (n = fl(Error(E(421)))), Pi(e, t, s, n);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qx.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Je = lr(o.nextSibling)),
      (tt = t),
      (Z = !0),
      (bt = null),
      e !== null &&
        ((ct[dt++] = Vt),
        (ct[dt++] = Ot),
        (ct[dt++] = Nr),
        (Vt = e.id),
        (Ot = e.overflow),
        (Nr = t)),
      (t = Hc(t, n.children)),
      (t.flags |= 4096),
      t);
}
function qf(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), hu(e.return, t, r);
}
function pl(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function Q0(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((De(e, t, n.children, r), (n = te.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qf(e, r, t);
        else if (e.tag === 19) qf(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((X(te, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && ks(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          pl(t, !1, o, r, i);
        break;
      case 'backwards':
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ks(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        pl(t, !0, r, null, i);
        break;
      case 'together':
        pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wr |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, r = fr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = fr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function Dx(e, t, r) {
  switch (t.tag) {
    case 3:
      X0(t), An();
      break;
    case 5:
      k0(t);
      break;
    case 1:
      Ue(t.type) && ys(t);
      break;
    case 4:
      Ic(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      X(bs, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (X(te, te.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? K0(e, t, r)
            : (X(te, te.current & 1),
              (e = Xt(e, t, r)),
              e !== null ? e.sibling : null);
      X(te, te.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Q0(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        X(te, te.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), G0(e, t, r);
  }
  return Xt(e, t, r);
}
var q0, wu, Z0, J0;
q0 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
wu = function () {};
Z0 = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), jr(jt.current);
    var i = null;
    switch (r) {
      case 'input':
        (o = Hl(e, o)), (n = Hl(e, n)), (i = []);
        break;
      case 'select':
        (o = oe({}, o, { value: void 0 })),
          (n = oe({}, n, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Yl(e, o)), (n = Yl(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof n.onClick == 'function' &&
          (e.onclick = ms);
    }
    Kl(r, n);
    var s;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (r || (r = {}), (r[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (_o.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((a = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (r || (r = {}), (r[s] = ''));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (r || (r = {}), (r[s] = l[s]));
          } else r || (i || (i = []), i.push(u, r)), (r = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (i = i || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (_o.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && Q('scroll', e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    r && (i = i || []).push('style', r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
J0 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function qn(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case 'collapsed':
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function Vx(e, t, r) {
  var n = t.pendingProps;
  switch ((zc(t), t.tag)) {
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
      return Me(t), null;
    case 1:
      return Ue(t.type) && gs(), Me(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Mn(),
        q(He),
        q(Ie),
        Dc(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ci(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), bt !== null && (Au(bt), (bt = null)))),
        wu(e, t),
        Me(t),
        null
      );
    case 5:
      Bc(t);
      var o = jr(Bo.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Z0(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(E(166));
          return Me(t), null;
        }
        if (((e = jr(jt.current)), Ci(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Rt] = t), (n[Lo] = i), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              Q('cancel', n), Q('close', n);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Q('load', n);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < io.length; o++) Q(io[o], n);
              break;
            case 'source':
              Q('error', n);
              break;
            case 'img':
            case 'image':
            case 'link':
              Q('error', n), Q('load', n);
              break;
            case 'details':
              Q('toggle', n);
              break;
            case 'input':
              sf(n, i), Q('invalid', n);
              break;
            case 'select':
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                Q('invalid', n);
              break;
            case 'textarea':
              lf(n, i), Q('invalid', n);
          }
          Kl(r, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === 'children'
                ? typeof a == 'string'
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ki(n.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    n.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ki(n.textContent, a, e),
                    (o = ['children', '' + a]))
                : _o.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  Q('scroll', n);
            }
          switch (r) {
            case 'input':
              mi(n), af(n, i, !0);
              break;
            case 'textarea':
              mi(n), uf(n);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (n.onclick = ms);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Pm(r)),
            e === 'http://www.w3.org/1999/xhtml'
              ? r === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == 'string'
                  ? (e = s.createElement(r, { is: n.is }))
                  : ((e = s.createElement(r)),
                    r === 'select' &&
                      ((s = e),
                      n.multiple
                        ? (s.multiple = !0)
                        : n.size && (s.size = n.size)))
              : (e = s.createElementNS(e, r)),
            (e[Rt] = t),
            (e[Lo] = n),
            q0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ql(r, n)), r)) {
              case 'dialog':
                Q('cancel', e), Q('close', e), (o = n);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Q('load', e), (o = n);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < io.length; o++) Q(io[o], e);
                o = n;
                break;
              case 'source':
                Q('error', e), (o = n);
                break;
              case 'img':
              case 'image':
              case 'link':
                Q('error', e), Q('load', e), (o = n);
                break;
              case 'details':
                Q('toggle', e), (o = n);
                break;
              case 'input':
                sf(e, n), (o = Hl(e, n)), Q('invalid', e);
                break;
              case 'option':
                o = n;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = oe({}, n, { value: void 0 })),
                  Q('invalid', e);
                break;
              case 'textarea':
                lf(e, n), (o = Yl(e, n)), Q('invalid', e);
                break;
              default:
                o = n;
            }
            Kl(r, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === 'style'
                  ? zm(e, l)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && Em(e, l))
                    : i === 'children'
                      ? typeof l == 'string'
                        ? (r !== 'textarea' || l !== '') && Po(e, l)
                        : typeof l == 'number' && Po(e, '' + l)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (_o.hasOwnProperty(i)
                          ? l != null && i === 'onScroll' && Q('scroll', e)
                          : l != null && hc(e, i, l, s));
              }
            switch (r) {
              case 'input':
                mi(e), af(e, n, !1);
                break;
              case 'textarea':
                mi(e), uf(e);
                break;
              case 'option':
                n.value != null && e.setAttribute('value', '' + hr(n.value));
                break;
              case 'select':
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? bn(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      bn(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = ms);
            }
            switch (r) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus;
                break e;
              case 'img':
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) J0(e, t, e.memoizedProps, n);
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(E(166));
        if (((r = jr(Bo.current)), jr(jt.current), Ci(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Rt] = t),
            (i = n.nodeValue !== r) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ki(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ki(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Rt] = t),
            (t.stateNode = n);
      }
      return Me(t), null;
    case 13:
      if (
        (q(te),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Je !== null && t.mode & 1 && !(t.flags & 128))
          g0(), An(), (t.flags |= 98560), (i = !1);
        else if (((i = Ci(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[Rt] = t;
          } else
            An(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (i = !1);
        } else bt !== null && (Au(bt), (bt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ve === 0 && (ve = 3) : Qc())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        Mn(), wu(e, t), e === null && $o(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return $c(t.type._context), Me(t), null;
    case 17:
      return Ue(t.type) && gs(), Me(t), null;
    case 19:
      if ((q(te), (i = t.memoizedState), i === null)) return Me(t), null;
      if (((n = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (n) qn(i, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ks(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    qn(i, !1),
                    n = s.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return X(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ae() > jn &&
            ((t.flags |= 128), (n = !0), qn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ks(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              qn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !Z)
            )
              return Me(t), null;
          } else
            2 * ae() - i.renderingStartTime > jn &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), qn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((r = i.last),
            r !== null ? (r.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ae()),
          (t.sibling = null),
          (r = te.current),
          X(te, n ? (r & 1) | 2 : r & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Kc(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? Ze & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Ox(e, t) {
  switch ((zc(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && gs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Mn(),
        q(He),
        q(Ie),
        Dc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Bc(t), null;
    case 13:
      if ((q(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        An();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(te), null;
    case 4:
      return Mn(), null;
    case 10:
      return $c(t.type._context), null;
    case 22:
    case 23:
      return Kc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ei = !1,
  je = !1,
  Nx = typeof WeakSet == 'function' ? WeakSet : Set,
  M = null;
function hn(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null);
      } catch (n) {
        ie(e, t, n);
      }
    else r.current = null;
}
function ku(e, t, r) {
  try {
    r();
  } catch (n) {
    ie(e, t, n);
  }
}
var Zf = !1;
function Fx(e, t) {
  if (((su = fs), (e = n0()), Ec(e))) {
    if ('selectionStart' in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== r || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = s + n),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === r && ++u === o && (a = s),
                f === i && ++c === n && (l = s),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (au = { focusedElem: e, selectionRange: r }, fs = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var v = x.memoizedProps,
                    k = x.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : vt(t.type, v),
                      k,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (w) {
          ie(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (x = Zf), (Zf = !1), x;
}
function mo(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ku(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function ia(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Cu(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function eg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), eg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Rt], delete t[Lo], delete t[cu], delete t[Cx], delete t[_x])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function tg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Jf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || tg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _u(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = ms));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (_u(e, t, r), e = e.sibling; e !== null; ) _u(e, t, r), (e = e.sibling);
}
function Pu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Pu(e, t, r), e = e.sibling; e !== null; ) Pu(e, t, r), (e = e.sibling);
}
var Pe = null,
  xt = !1;
function Qt(e, t, r) {
  for (r = r.child; r !== null; ) rg(e, t, r), (r = r.sibling);
}
function rg(e, t, r) {
  if ($t && typeof $t.onCommitFiberUnmount == 'function')
    try {
      $t.onCommitFiberUnmount(qs, r);
    } catch {}
  switch (r.tag) {
    case 5:
      je || hn(r, t);
    case 6:
      var n = Pe,
        o = xt;
      (Pe = null),
        Qt(e, t, r),
        (Pe = n),
        (xt = o),
        Pe !== null &&
          (xt
            ? ((e = Pe),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Pe.removeChild(r.stateNode));
      break;
    case 18:
      Pe !== null &&
        (xt
          ? ((e = Pe),
            (r = r.stateNode),
            e.nodeType === 8
              ? sl(e.parentNode, r)
              : e.nodeType === 1 && sl(e, r),
            Ao(e))
          : sl(Pe, r.stateNode));
      break;
    case 4:
      (n = Pe),
        (o = xt),
        (Pe = r.stateNode.containerInfo),
        (xt = !0),
        Qt(e, t, r),
        (Pe = n),
        (xt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && ku(r, t, s),
            (o = o.next);
        } while (o !== n);
      }
      Qt(e, t, r);
      break;
    case 1:
      if (
        !je &&
        (hn(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == 'function')
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          ie(r, t, a);
        }
      Qt(e, t, r);
      break;
    case 21:
      Qt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((je = (n = je) || r.memoizedState !== null), Qt(e, t, r), (je = n))
        : Qt(e, t, r);
      break;
    default:
      Qt(e, t, r);
  }
}
function ep(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Nx()),
      t.forEach(function (n) {
        var o = qx.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function yt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Pe = a.stateNode), (xt = !1);
              break e;
            case 3:
              (Pe = a.stateNode.containerInfo), (xt = !0);
              break e;
            case 4:
              (Pe = a.stateNode.containerInfo), (xt = !0);
              break e;
          }
          a = a.return;
        }
        if (Pe === null) throw Error(E(160));
        rg(i, s, o), (Pe = null), (xt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        ie(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ng(t, e), (t = t.sibling);
}
function ng(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Pt(e), n & 4)) {
        try {
          mo(3, e, e.return), ia(3, e);
        } catch (v) {
          ie(e, e.return, v);
        }
        try {
          mo(5, e, e.return);
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 1:
      yt(t, e), Pt(e), n & 512 && r !== null && hn(r, r.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Pt(e),
        n & 512 && r !== null && hn(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Po(o, '');
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = r !== null ? r.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && Cm(o, i),
              Ql(a, s);
            var u = Ql(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === 'style'
                ? zm(o, d)
                : c === 'dangerouslySetInnerHTML'
                  ? Em(o, d)
                  : c === 'children'
                    ? Po(o, d)
                    : hc(o, c, d, u);
            }
            switch (a) {
              case 'input':
                Ul(o, i);
                break;
              case 'textarea':
                _m(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? bn(o, !!i.multiple, m, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? bn(o, !!i.multiple, i.defaultValue, !0)
                      : bn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Lo] = i;
          } catch (v) {
            ie(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Pt(e), n & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Pt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Ao(t.containerInfo);
        } catch (v) {
          ie(e, e.return, v);
        }
      break;
    case 4:
      yt(t, e), Pt(e);
      break;
    case 13:
      yt(t, e),
        Pt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Yc = ae())),
        n & 4 && ep(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || c), yt(t, e), (je = u)) : yt(t, e),
        Pt(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (d = M = c; M !== null; ) {
              switch (((f = M), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, f, f.return);
                  break;
                case 1:
                  hn(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (v) {
                      ie(n, r, v);
                    }
                  }
                  break;
                case 5:
                  hn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    rp(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (M = m)) : rp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = Tm('display', s)));
              } catch (v) {
                ie(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (v) {
                ie(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Pt(e), n & 4 && ep(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (tg(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(E(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (Po(o, ''), (n.flags &= -33));
          var i = Jf(e);
          Pu(e, i, o);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo,
            a = Jf(e);
          _u(e, a, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      ie(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wx(e, t, r) {
  (M = e), og(e);
}
function og(e, t, r) {
  for (var n = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      i = o.child;
    if (o.tag === 22 && n) {
      var s = o.memoizedState !== null || Ei;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || je;
        a = Ei;
        var u = je;
        if (((Ei = s), (je = l) && !u))
          for (M = o; M !== null; )
            (s = M),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? np(o)
                : l !== null
                  ? ((l.return = s), (M = l))
                  : np(o);
        for (; i !== null; ) (M = i), og(i), (i = i.sibling);
        (M = o), (Ei = a), (je = u);
      }
      tp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (M = i)) : tp(e);
  }
}
function tp(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || ia(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !je)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : vt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Df(t, i, n);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Df(t, s, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && r.focus();
                    break;
                  case 'img':
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ao(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        je || (t.flags & 512 && Cu(t));
      } catch (f) {
        ie(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (M = r);
      break;
    }
    M = t.return;
  }
}
function rp(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (M = r);
      break;
    }
    M = t.return;
  }
}
function np(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ia(4, t);
          } catch (l) {
            ie(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == 'function') {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              ie(t, o, l);
            }
          }
          var i = t.return;
          try {
            Cu(t);
          } catch (l) {
            ie(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Cu(t);
          } catch (l) {
            ie(t, s, l);
          }
      }
    } catch (l) {
      ie(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var Hx = Math.ceil,
  Ps = Kt.ReactCurrentDispatcher,
  Uc = Kt.ReactCurrentOwner,
  pt = Kt.ReactCurrentBatchConfig,
  F = 0,
  Ce = null,
  pe = null,
  ze = 0,
  Ze = 0,
  mn = br(0),
  ve = 0,
  No = null,
  Wr = 0,
  sa = 0,
  Gc = 0,
  go = null,
  Fe = null,
  Yc = 0,
  jn = 1 / 0,
  Bt = null,
  Es = !1,
  Eu = null,
  cr = null,
  Ti = !1,
  or = null,
  Ts = 0,
  yo = 0,
  Tu = null,
  Ki = -1,
  Qi = 0;
function Ve() {
  return F & 6 ? ae() : Ki !== -1 ? Ki : (Ki = ae());
}
function dr(e) {
  return e.mode & 1
    ? F & 2 && ze !== 0
      ? ze & -ze
      : Ex.transition !== null
        ? (Qi === 0 && (Qi = Nm()), Qi)
        : ((e = U),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xm(e.type))),
          e)
    : 1;
}
function kt(e, t, r, n) {
  if (50 < yo) throw ((yo = 0), (Tu = null), Error(E(185)));
  ei(e, r, n),
    (!(F & 2) || e !== Ce) &&
      (e === Ce && (!(F & 2) && (sa |= r), ve === 4 && rr(e, ze)),
      Ge(e, n),
      r === 1 && F === 0 && !(t.mode & 1) && ((jn = ae() + 500), ra && Sr()));
}
function Ge(e, t) {
  var r = e.callbackNode;
  E1(e, t);
  var n = ds(e, e === Ce ? ze : 0);
  if (n === 0)
    r !== null && ff(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && ff(r), t === 1))
      e.tag === 0 ? Px(op.bind(null, e)) : p0(op.bind(null, e)),
        wx(function () {
          !(F & 6) && Sr();
        }),
        (r = null);
    else {
      switch (Fm(n)) {
        case 1:
          r = xc;
          break;
        case 4:
          r = Vm;
          break;
        case 16:
          r = cs;
          break;
        case 536870912:
          r = Om;
          break;
        default:
          r = cs;
      }
      r = fg(r, ig.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function ig(e, t) {
  if (((Ki = -1), (Qi = 0), F & 6)) throw Error(E(327));
  var r = e.callbackNode;
  if (_n() && e.callbackNode !== r) return null;
  var n = ds(e, e === Ce ? ze : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = zs(e, n);
  else {
    t = n;
    var o = F;
    F |= 2;
    var i = ag();
    (Ce !== e || ze !== t) && ((Bt = null), (jn = ae() + 500), Br(e, t));
    do
      try {
        Yx();
        break;
      } catch (a) {
        sg(e, a);
      }
    while (1);
    Mc(),
      (Ps.current = i),
      (F = o),
      pe !== null ? (t = 0) : ((Ce = null), (ze = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = tu(e)), o !== 0 && ((n = o), (t = zu(e, o)))), t === 1)
    )
      throw ((r = No), Br(e, 0), rr(e, n), Ge(e, ae()), r);
    if (t === 6) rr(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !Ux(o) &&
          ((t = zs(e, n)),
          t === 2 && ((i = tu(e)), i !== 0 && ((n = i), (t = zu(e, i)))),
          t === 1))
      )
        throw ((r = No), Br(e, 0), rr(e, n), Ge(e, ae()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Tr(e, Fe, Bt);
          break;
        case 3:
          if (
            (rr(e, n), (n & 130023424) === n && ((t = Yc + 500 - ae()), 10 < t))
          ) {
            if (ds(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = uu(Tr.bind(null, e, Fe, Bt), t);
            break;
          }
          Tr(e, Fe, Bt);
          break;
        case 4:
          if ((rr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var s = 31 - wt(n);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (n &= ~i);
          }
          if (
            ((n = o),
            (n = ae() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * Hx(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = uu(Tr.bind(null, e, Fe, Bt), n);
            break;
          }
          Tr(e, Fe, Bt);
          break;
        case 5:
          Tr(e, Fe, Bt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ge(e, ae()), e.callbackNode === r ? ig.bind(null, e) : null;
}
function zu(e, t) {
  var r = go;
  return (
    e.current.memoizedState.isDehydrated && (Br(e, t).flags |= 256),
    (e = zs(e, t)),
    e !== 2 && ((t = Fe), (Fe = r), t !== null && Au(t)),
    e
  );
}
function Au(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function Ux(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ct(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rr(e, t) {
  for (
    t &= ~Gc,
      t &= ~sa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - wt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function op(e) {
  if (F & 6) throw Error(E(327));
  _n();
  var t = ds(e, 0);
  if (!(t & 1)) return Ge(e, ae()), null;
  var r = zs(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = tu(e);
    n !== 0 && ((t = n), (r = zu(e, n)));
  }
  if (r === 1) throw ((r = No), Br(e, 0), rr(e, t), Ge(e, ae()), r);
  if (r === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tr(e, Fe, Bt),
    Ge(e, ae()),
    null
  );
}
function Xc(e, t) {
  var r = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = r), F === 0 && ((jn = ae() + 500), ra && Sr());
  }
}
function Hr(e) {
  or !== null && or.tag === 0 && !(F & 6) && _n();
  var t = F;
  F |= 1;
  var r = pt.transition,
    n = U;
  try {
    if (((pt.transition = null), (U = 1), e)) return e();
  } finally {
    (U = n), (pt.transition = r), (F = t), !(F & 6) && Sr();
  }
}
function Kc() {
  (Ze = mn.current), q(mn);
}
function Br(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Sx(r)), pe !== null))
    for (r = pe.return; r !== null; ) {
      var n = r;
      switch ((zc(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && gs();
          break;
        case 3:
          Mn(), q(He), q(Ie), Dc();
          break;
        case 5:
          Bc(n);
          break;
        case 4:
          Mn();
          break;
        case 13:
          q(te);
          break;
        case 19:
          q(te);
          break;
        case 10:
          $c(n.type._context);
          break;
        case 22:
        case 23:
          Kc();
      }
      r = r.return;
    }
  if (
    ((Ce = e),
    (pe = e = fr(e.current, null)),
    (ze = Ze = t),
    (ve = 0),
    (No = null),
    (Gc = sa = Wr = 0),
    (Fe = go = null),
    $r !== null)
  ) {
    for (t = 0; t < $r.length; t++)
      if (((r = $r[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (n.next = s);
        }
        r.pending = n;
      }
    $r = null;
  }
  return e;
}
function sg(e, t) {
  do {
    var r = pe;
    try {
      if ((Mc(), (Gi.current = _s), Cs)) {
        for (var n = ne.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        Cs = !1;
      }
      if (
        ((Fr = 0),
        (ke = ge = ne = null),
        (ho = !1),
        (Do = 0),
        (Uc.current = null),
        r === null || r.return === null)
      ) {
        (ve = 1), (No = t), (pe = null);
        break;
      }
      e: {
        var i = e,
          s = r.return,
          a = r,
          l = t;
        if (
          ((t = ze),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Uf(s);
          if (m !== null) {
            (m.flags &= -257),
              Gf(m, s, a, i, t),
              m.mode & 1 && Hf(i, u, t),
              (t = m),
              (l = u);
            var x = t.updateQueue;
            if (x === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Hf(i, u, t), Qc();
              break e;
            }
            l = Error(E(426));
          }
        } else if (Z && a.mode & 1) {
          var k = Uf(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Gf(k, s, a, i, t),
              Ac($n(l, a));
            break e;
          }
        }
        (i = l = $n(l, a)),
          ve !== 4 && (ve = 2),
          go === null ? (go = [i]) : go.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = W0(i, l, t);
              Bf(i, y);
              break e;
            case 1:
              a = l;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (cr === null || !cr.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = H0(i, a, t);
                Bf(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ug(r);
    } catch (C) {
      (t = C), pe === r && r !== null && (pe = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function ag() {
  var e = Ps.current;
  return (Ps.current = _s), e === null ? _s : e;
}
function Qc() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    Ce === null || (!(Wr & 268435455) && !(sa & 268435455)) || rr(Ce, ze);
}
function zs(e, t) {
  var r = F;
  F |= 2;
  var n = ag();
  (Ce !== e || ze !== t) && ((Bt = null), Br(e, t));
  do
    try {
      Gx();
      break;
    } catch (o) {
      sg(e, o);
    }
  while (1);
  if ((Mc(), (F = r), (Ps.current = n), pe !== null)) throw Error(E(261));
  return (Ce = null), (ze = 0), ve;
}
function Gx() {
  for (; pe !== null; ) lg(pe);
}
function Yx() {
  for (; pe !== null && !v1(); ) lg(pe);
}
function lg(e) {
  var t = dg(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? ug(e) : (pe = t),
    (Uc.current = null);
}
function ug(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Ox(r, t)), r !== null)) {
        (r.flags &= 32767), (pe = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (pe = null);
        return;
      }
    } else if (((r = Vx(r, t, Ze)), r !== null)) {
      pe = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function Tr(e, t, r) {
  var n = U,
    o = pt.transition;
  try {
    (pt.transition = null), (U = 1), Xx(e, t, r, n);
  } finally {
    (pt.transition = o), (U = n);
  }
  return null;
}
function Xx(e, t, r, n) {
  do _n();
  while (or !== null);
  if (F & 6) throw Error(E(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (T1(e, i),
    e === Ce && ((pe = Ce = null), (ze = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Ti ||
      ((Ti = !0),
      fg(cs, function () {
        return _n(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = pt.transition), (pt.transition = null);
    var s = U;
    U = 1;
    var a = F;
    (F |= 4),
      (Uc.current = null),
      Fx(e, r),
      ng(r, e),
      hx(au),
      (fs = !!su),
      (au = su = null),
      (e.current = r),
      Wx(r),
      x1(),
      (F = a),
      (U = s),
      (pt.transition = i);
  } else e.current = r;
  if (
    (Ti && ((Ti = !1), (or = e), (Ts = o)),
    (i = e.pendingLanes),
    i === 0 && (cr = null),
    w1(r.stateNode),
    Ge(e, ae()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Es) throw ((Es = !1), (e = Eu), (Eu = null), e);
  return (
    Ts & 1 && e.tag !== 0 && _n(),
    (i = e.pendingLanes),
    i & 1 ? (e === Tu ? yo++ : ((yo = 0), (Tu = e))) : (yo = 0),
    Sr(),
    null
  );
}
function _n() {
  if (or !== null) {
    var e = Fm(Ts),
      t = pt.transition,
      r = U;
    try {
      if (((pt.transition = null), (U = 16 > e ? 16 : e), or === null))
        var n = !1;
      else {
        if (((e = or), (or = null), (Ts = 0), F & 6)) throw Error(E(331));
        var o = F;
        for (F |= 4, M = e.current; M !== null; ) {
          var i = M,
            s = i.child;
          if (M.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (M = d);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var f = c.sibling,
                        m = c.return;
                      if ((eg(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (M = f);
                        break;
                      }
                      M = m;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var v = x.child;
                if (v !== null) {
                  x.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (M = s);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mo(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (M = y);
                break e;
              }
              M = i.return;
            }
        }
        var h = e.current;
        for (M = h; M !== null; ) {
          s = M;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (M = g);
          else
            e: for (s = h; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ia(9, a);
                  }
                } catch (C) {
                  ie(a, a.return, C);
                }
              if (a === s) {
                M = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (M = w);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((F = o), Sr(), $t && typeof $t.onPostCommitFiberRoot == 'function')
        )
          try {
            $t.onPostCommitFiberRoot(qs, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (U = r), (pt.transition = t);
    }
  }
  return !1;
}
function ip(e, t, r) {
  (t = $n(r, t)),
    (t = W0(e, t, 1)),
    (e = ur(e, t, 1)),
    (t = Ve()),
    e !== null && (ei(e, 1, t), Ge(e, t));
}
function ie(e, t, r) {
  if (e.tag === 3) ip(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ip(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' &&
            (cr === null || !cr.has(n)))
        ) {
          (e = $n(r, e)),
            (e = H0(t, e, 1)),
            (t = ur(t, e, 1)),
            (e = Ve()),
            t !== null && (ei(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Kx(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ce === e &&
      (ze & r) === r &&
      (ve === 4 || (ve === 3 && (ze & 130023424) === ze && 500 > ae() - Yc)
        ? Br(e, 0)
        : (Gc |= r)),
    Ge(e, t);
}
function cg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vi), (vi <<= 1), !(vi & 130023424) && (vi = 4194304))
      : (t = 1));
  var r = Ve();
  (e = Yt(e, t)), e !== null && (ei(e, t, r), Ge(e, r));
}
function Qx(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), cg(e, r);
}
function qx(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  n !== null && n.delete(t), cg(e, r);
}
var dg;
dg = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || He.current) We = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (We = !1), Dx(e, t, r);
      We = !!(e.flags & 131072);
    }
  else (We = !1), Z && t.flags & 1048576 && h0(t, xs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Xi(e, t), (e = t.pendingProps);
      var o = zn(t, Ie.current);
      Cn(t, r), (o = Oc(null, t, n, e, o, r));
      var i = Nc();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(n) ? ((i = !0), ys(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Lc(t),
            (o.updater = na),
            (t.stateNode = o),
            (o._reactInternals = t),
            gu(t, n, e, r),
            (t = xu(null, t, n, !0, i, r)))
          : ((t.tag = 0), Z && i && Tc(t), De(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Xi(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = Jx(n)),
          (e = vt(n, e)),
          o)
        ) {
          case 0:
            t = vu(null, t, n, e, r);
            break e;
          case 1:
            t = Kf(null, t, n, e, r);
            break e;
          case 11:
            t = Yf(null, t, n, e, r);
            break e;
          case 14:
            t = Xf(null, t, n, vt(n.type, e), r);
            break e;
        }
        throw Error(E(306, n, ''));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : vt(n, o)),
        vu(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : vt(n, o)),
        Kf(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((X0(t), e === null)) throw Error(E(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          v0(e, t),
          ws(t, n, null, r);
        var s = t.memoizedState;
        if (((n = s.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = $n(Error(E(423)), t)), (t = Qf(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = $n(Error(E(424)), t)), (t = Qf(e, t, n, r, o));
            break e;
          } else
            for (
              Je = lr(t.stateNode.containerInfo.firstChild),
                tt = t,
                Z = !0,
                bt = null,
                r = w0(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((An(), n === o)) {
            t = Xt(e, t, r);
            break e;
          }
          De(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        k0(t),
        e === null && pu(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        lu(n, o) ? (s = null) : i !== null && lu(n, i) && (t.flags |= 32),
        Y0(e, t),
        De(e, t, s, r),
        t.child
      );
    case 6:
      return e === null && pu(t), null;
    case 13:
      return K0(e, t, r);
    case 4:
      return (
        Ic(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Rn(t, null, n, r)) : De(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : vt(n, o)),
        Yf(e, t, n, o, r)
      );
    case 7:
      return De(e, t, t.pendingProps, r), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          X(bs, n._currentValue),
          (n._currentValue = s),
          i !== null)
        )
          if (Ct(i.value, s)) {
            if (i.children === o.children && !He.current) {
              t = Xt(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = Ft(-1, r & -r)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      hu(i.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(E(341));
                (s.lanes |= r),
                  (a = s.alternate),
                  a !== null && (a.lanes |= r),
                  hu(s, r, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        De(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        Cn(t, r),
        (o = mt(o)),
        (n = n(o)),
        (t.flags |= 1),
        De(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = vt(n, t.pendingProps)),
        (o = vt(n.type, o)),
        Xf(e, t, n, o, r)
      );
    case 15:
      return U0(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : vt(n, o)),
        Xi(e, t),
        (t.tag = 1),
        Ue(n) ? ((e = !0), ys(t)) : (e = !1),
        Cn(t, r),
        b0(t, n, o),
        gu(t, n, o, r),
        xu(null, t, n, !0, e, r)
      );
    case 19:
      return Q0(e, t, r);
    case 22:
      return G0(e, t, r);
  }
  throw Error(E(156, t.tag));
};
function fg(e, t) {
  return Dm(e, t);
}
function Zx(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
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
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ft(e, t, r, n) {
  return new Zx(e, t, r, n);
}
function qc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Jx(e) {
  if (typeof e == 'function') return qc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gc)) return 11;
    if (e === yc) return 14;
  }
  return 2;
}
function fr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = ft(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function qi(e, t, r, n, o, i) {
  var s = 2;
  if (((n = e), typeof e == 'function')) qc(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case on:
        return Dr(r.children, o, i, t);
      case mc:
        (s = 8), (o |= 8);
        break;
      case Ol:
        return (
          (e = ft(12, r, t, o | 2)), (e.elementType = Ol), (e.lanes = i), e
        );
      case Nl:
        return (e = ft(13, r, t, o)), (e.elementType = Nl), (e.lanes = i), e;
      case Fl:
        return (e = ft(19, r, t, o)), (e.elementType = Fl), (e.lanes = i), e;
      case Sm:
        return aa(r, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case xm:
              s = 10;
              break e;
            case bm:
              s = 9;
              break e;
            case gc:
              s = 11;
              break e;
            case yc:
              s = 14;
              break e;
            case Zt:
              (s = 16), (n = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = ft(s, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function Dr(e, t, r, n) {
  return (e = ft(7, e, n, t)), (e.lanes = r), e;
}
function aa(e, t, r, n) {
  return (
    (e = ft(22, e, n, t)),
    (e.elementType = Sm),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hl(e, t, r) {
  return (e = ft(6, e, null, t)), (e.lanes = r), e;
}
function ml(e, t, r) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function eb(e, t, r, n, o) {
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
    (this.eventTimes = Ka(0)),
    (this.expirationTimes = Ka(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ka(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Zc(e, t, r, n, o, i, s, a, l) {
  return (
    (e = new eb(e, t, r, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ft(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Lc(i),
    e
  );
}
function tb(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function pg(e) {
  if (!e) return mr;
  e = e._reactInternals;
  e: {
    if (Yr(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Ue(r)) return f0(e, r, t);
  }
  return t;
}
function hg(e, t, r, n, o, i, s, a, l) {
  return (
    (e = Zc(r, n, !0, e, o, i, s, a, l)),
    (e.context = pg(null)),
    (r = e.current),
    (n = Ve()),
    (o = dr(r)),
    (i = Ft(n, o)),
    (i.callback = t ?? null),
    ur(r, i, o),
    (e.current.lanes = o),
    ei(e, o, n),
    Ge(e, n),
    e
  );
}
function la(e, t, r, n) {
  var o = t.current,
    i = Ve(),
    s = dr(o);
  return (
    (r = pg(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Ft(i, s)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = ur(o, t, s)),
    e !== null && (kt(e, o, s, i), Ui(e, o, s)),
    s
  );
}
function As(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Jc(e, t) {
  sp(e, t), (e = e.alternate) && sp(e, t);
}
function rb() {
  return null;
}
var mg =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ed(e) {
  this._internalRoot = e;
}
ua.prototype.render = ed.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  la(e, t, null, null);
};
ua.prototype.unmount = ed.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hr(function () {
      la(null, e, null, null);
    }),
      (t[Gt] = null);
  }
};
function ua(e) {
  this._internalRoot = e;
}
ua.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Um();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < tr.length && t !== 0 && t < tr[r].priority; r++);
    tr.splice(r, 0, e), r === 0 && Ym(e);
  }
};
function td(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ca(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ap() {}
function nb(e, t, r, n, o) {
  if (o) {
    if (typeof n == 'function') {
      var i = n;
      n = function () {
        var u = As(s);
        i.call(u);
      };
    }
    var s = hg(t, n, e, 0, null, !1, !1, '', ap);
    return (
      (e._reactRootContainer = s),
      (e[Gt] = s.current),
      $o(e.nodeType === 8 ? e.parentNode : e),
      Hr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == 'function') {
    var a = n;
    n = function () {
      var u = As(l);
      a.call(u);
    };
  }
  var l = Zc(e, 0, !1, null, null, !1, !1, '', ap);
  return (
    (e._reactRootContainer = l),
    (e[Gt] = l.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    Hr(function () {
      la(t, l, r, n);
    }),
    l
  );
}
function da(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var a = o;
      o = function () {
        var l = As(s);
        a.call(l);
      };
    }
    la(t, s, e, o);
  } else s = nb(r, t, e, o, n);
  return As(s);
}
Wm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = oo(t.pendingLanes);
        r !== 0 &&
          (bc(t, r | 1), Ge(t, ae()), !(F & 6) && ((jn = ae() + 500), Sr()));
      }
      break;
    case 13:
      Hr(function () {
        var n = Yt(e, 1);
        if (n !== null) {
          var o = Ve();
          kt(n, e, 1, o);
        }
      }),
        Jc(e, 1);
  }
};
Sc = function (e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var r = Ve();
      kt(t, e, 134217728, r);
    }
    Jc(e, 134217728);
  }
};
Hm = function (e) {
  if (e.tag === 13) {
    var t = dr(e),
      r = Yt(e, t);
    if (r !== null) {
      var n = Ve();
      kt(r, e, t, n);
    }
    Jc(e, t);
  }
};
Um = function () {
  return U;
};
Gm = function (e, t) {
  var r = U;
  try {
    return (U = e), t();
  } finally {
    U = r;
  }
};
Zl = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((Ul(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = ta(n);
            if (!o) throw Error(E(90));
            km(n), Ul(n, o);
          }
        }
      }
      break;
    case 'textarea':
      _m(e, r);
      break;
    case 'select':
      (t = r.value), t != null && bn(e, !!r.multiple, t, !1);
  }
};
Mm = Xc;
$m = Hr;
var ob = { usingClientEntryPoint: !1, Events: [ri, un, ta, Am, Rm, Xc] },
  Zn = {
    findFiberByHostInstance: Mr,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  ib = {
    bundleType: Zn.bundleType,
    version: Zn.version,
    rendererPackageName: Zn.rendererPackageName,
    rendererConfig: Zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Im(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zn.findFiberByHostInstance || rb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zi.isDisabled && zi.supportsFiber)
    try {
      (qs = zi.inject(ib)), ($t = zi);
    } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ob;
it.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!td(t)) throw Error(E(200));
  return tb(e, t, null, r);
};
it.createRoot = function (e, t) {
  if (!td(e)) throw Error(E(299));
  var r = !1,
    n = '',
    o = mg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Zc(e, 1, !1, null, null, r, !1, n, o)),
    (e[Gt] = t.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    new ed(t)
  );
};
it.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(E(188))
      : ((e = Object.keys(e).join(',')), Error(E(268, e)));
  return (e = Im(t)), (e = e === null ? null : e.stateNode), e;
};
it.flushSync = function (e) {
  return Hr(e);
};
it.hydrate = function (e, t, r) {
  if (!ca(t)) throw Error(E(200));
  return da(null, e, t, !0, r);
};
it.hydrateRoot = function (e, t, r) {
  if (!td(e)) throw Error(E(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = '',
    s = mg;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
    (t = hg(t, null, e, 1, r ?? null, o, !1, i, s)),
    (e[Gt] = t.current),
    $o(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new ua(t);
};
it.render = function (e, t, r) {
  if (!ca(t)) throw Error(E(200));
  return da(null, e, t, !1, r);
};
it.unmountComponentAtNode = function (e) {
  if (!ca(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Hr(function () {
        da(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Gt] = null);
        });
      }),
      !0)
    : !1;
};
it.unstable_batchedUpdates = Xc;
it.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!ca(r)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return da(e, t, r, !1, n);
};
it.version = '18.2.0-next-9e3b772b8-20220608';
function gg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg);
    } catch (e) {
      console.error(e);
    }
}
gg(), (hm.exports = it);
var rd = hm.exports,
  lp = rd;
(Dl.createRoot = lp.createRoot), (Dl.hydrateRoot = lp.hydrateRoot);
var Pn = (e) => typeof e == 'number',
  yg = (e) => Object.prototype.toString.call(e) === '[object String]',
  fa = (e) => typeof e > 'u' && e === void 0,
  xe = (e) =>
    e !== null && (typeof e == 'object' || typeof e == 'function') && !O(e),
  O = (e) => Array.isArray(e),
  Ur = (e) => typeof e == 'function',
  sb = (e) => /[0-9].*[px|rem|em|%|vw|vh]$/.test(e),
  ab = (e) =>
    e
      .toLowerCase()
      .replace(/-(.)/g, (t, r) => r.toUpperCase())
      .replace(/^(.)/, (t, r) => r.toUpperCase());
function Lr(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class lb extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var so = lb;
function Fo(e) {
  if (typeof e != 'string') throw new so(e);
  if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0];
  let t = e.trim();
  t = gb.test(e) ? db(e) : e;
  const r = fb.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(Wo(a, 2), 16)),
      parseInt(Wo(s[3] || 'f', 2), 16) / 255,
    ];
  }
  const n = pb.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 16)),
      parseInt(s[3] || 'ff', 16) / 255,
    ];
  }
  const o = hb.exec(t);
  if (o) {
    const s = Array.from(o).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 10)),
      parseFloat(s[3] || '1'),
    ];
  }
  const i = mb.exec(t);
  if (i) {
    const [s, a, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Lr(0, 100, a) !== a) throw new so(e);
    if (Lr(0, 100, l) !== l) throw new so(e);
    return [...yb(s, a, l), Number.isNaN(u) ? 1 : u];
  }
  throw new so(e);
}
function ub(e) {
  let t = 5381,
    r = e.length;
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const up = (e) => parseInt(e.replace(/_/g, ''), 36),
  cb =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce((e, t) => {
        const r = up(t.substring(0, 3)),
          n = up(t.substring(3)).toString(16);
        let o = '';
        for (let i = 0; i < 6 - n.length; i++) o += '0';
        return (e[r] = `${o}${n}`), e;
      }, {});
function db(e) {
  const t = e.toLowerCase().trim(),
    r = cb[ub(t)];
  if (!r) throw new so(e);
  return `#${r}`;
}
const Wo = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(''),
  fb = new RegExp(`^#${Wo('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  pb = new RegExp(`^#${Wo('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  hb = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${Wo(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i',
  ),
  mb =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  gb = /^[a-z]+$/i,
  cp = (e) => Math.round(e * 255),
  yb = (e, t, r) => {
    let n = r / 100;
    if (t === 0) return [n, n, n].map(cp);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * n - 1)) * (t / 100),
      s = i * (1 - Math.abs((o % 2) - 1));
    let a = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((a = i), (l = s))
      : o >= 1 && o < 2
        ? ((a = s), (l = i))
        : o >= 2 && o < 3
          ? ((l = i), (u = s))
          : o >= 3 && o < 4
            ? ((l = s), (u = i))
            : o >= 4 && o < 5
              ? ((a = s), (u = i))
              : o >= 5 && o < 6 && ((a = i), (u = s));
    const c = n - i / 2,
      d = a + c,
      f = l + c,
      m = u + c;
    return [d, f, m].map(cp);
  };
function vg(e, t, r, n) {
  return `rgba(${Lr(0, 255, e).toFixed()}, ${Lr(0, 255, t).toFixed()}, ${Lr(0, 255, r).toFixed()}, ${parseFloat(Lr(0, 1, n).toFixed(3))})`;
}
function xg(e, t, r) {
  const n = (C, P) => (P === 3 ? C : C / 255),
    [o, i, s, a] = Fo(e).map(n),
    [l, u, c, d] = Fo(t).map(n),
    f = d - a,
    m = r * 2 - 1,
    v = ((m * f === -1 ? m : m + f / (1 + m * f)) + 1) / 2,
    k = 1 - v,
    y = (o * k + l * v) * 255,
    h = (i * k + u * v) * 255,
    g = (s * k + c * v) * 255,
    w = d * r + a * (1 - r);
  return vg(y, h, g, w);
}
function vb(e, t) {
  const [r, n, o, i] = Fo(e);
  return vg(r, n, o, i - t);
}
function Rs(e) {
  const [t, r, n, o] = Fo(e);
  let i = (s) => {
    const a = Lr(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ''}`;
}
var dp = () => {},
  et = (e, ...t) => (Ur(e) ? e(...t) : e),
  bg =
    (...e) =>
    (t) => {
      e.some(
        (r) => (r == null || r(t), t == null ? void 0 : t.defaultPrevented),
      );
    },
  pa = ({
    strict: e = !0,
    errorMessage:
      t = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
    name: r,
    defaultValue: n,
  } = {}) => {
    const o = S.createContext(n);
    o.displayName = r;
    const i = () => {
      var s;
      const a = S.useContext(o);
      if (!a && e) {
        const l = new Error(t);
        throw (
          ((l.name = 'ContextError'),
          (s = Error.captureStackTrace) == null || s.call(Error, l, i),
          l)
        );
      }
      return a;
    };
    return [o.Provider, i, o];
  },
  Ms =
    globalThis != null && globalThis.document ? S.useLayoutEffect : S.useEffect,
  xb = (e) => S.isValidElement(e) || yg(e) || Pn(e),
  le = (...e) => e.filter(Boolean).join(' '),
  tn = (e, t) => {
    if (e != null) {
      if (typeof e == 'function') {
        e(t);
        return;
      }
      try {
        e.current = t;
      } catch {
        throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
      }
    }
  },
  bb =
    (...e) =>
    (t) => {
      e.forEach((r) => {
        tn(r, t);
      });
    },
  Sb = (...e) => S.useMemo(() => bb(...e), [e]),
  wb = (e, t = []) => {
    const r = S.useRef(e);
    return (
      S.useEffect(() => {
        r.current = e;
      }),
      S.useCallback((...n) => {
        var o;
        return (o = r.current) == null ? void 0 : o.call(r, ...n);
      }, t)
    );
  },
  Ru = (e, t) => {
    const r = S.useRef(!1),
      n = S.useRef(!1);
    S.useEffect(() => {
      if (r.current && n.current) return e();
      n.current = !0;
    }, t),
      S.useEffect(
        () => (
          (r.current = !0),
          () => {
            r.current = !1;
          }
        ),
        [],
      );
  },
  kb = (e) => `${e}-${new Date().getTime()}`,
  nd = () =>
    !!(typeof window < 'u' && window.document && window.document.createElement),
  Cb = (e) => {
    if (Pn(e)) return e;
    if (fa(e)) return 0;
    if (e.includes('px')) return parseFloat(e);
    const t = nd();
    let r = 16;
    if (t) {
      const n = window.getComputedStyle(document.documentElement);
      r = parseFloat(n.fontSize);
    }
    return parseFloat(e) * r;
  },
  Mu = (e) => (e ? '' : void 0),
  _b = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  j = (e) => e === 'gray' || e === 'neutral',
  ye = (e) => e === 'yellow' || e === 'cyan' || e === 'lime',
  R =
    (e, t) =>
    (r = {}, n) => {
      var o, i, s;
      const [a, l] = e.split('.'),
        [, u] =
          (s = Object.entries(
            (i = (o = r.semantics) == null ? void 0 : o.colorSchemes) != null
              ? i
              : {},
          ).find(([d]) => a === d)) != null
            ? s
            : [];
      u && (e = `${u}.${l}`);
      const c = B(r, `colors.${e}`, e);
      try {
        return O(c) ? Rs(String(n !== 'dark' ? c[0] : c[1])) : Rs(String(c));
      } catch {
        return t ?? '#000000';
      }
    },
  de = (e, t) => (r, n) => {
    const o = R(e, e)(r, n);
    return Rs(xg(o, '#fff', t / 100));
  },
  ee = (e, t) => (r, n) => {
    const o = R(e, e)(r, n);
    return Rs(xg(o, '#000', t / 100));
  },
  Te = (e, t) => (r, n) => {
    const o = R(e, e)(r, n);
    return vb(o, 1 - t);
  },
  Pb = ({ string: e, colors: t } = {}) => {
    const r = Eb();
    return e && t ? zb(e, t) : e && !t ? Tb(e) : t && !e ? Ab(t) : r;
  },
  Eb = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, '0')}`,
  Tb = (e) => {
    let t = 0;
    if (e.length === 0) return t.toString();
    for (let n = 0; n < e.length; n += 1)
      (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t);
    let r = '#';
    for (let n = 0; n < 3; n += 1) {
      const o = (t >> (n * 8)) & 255;
      r += `00${o.toString(16)}`.substr(-2);
    }
    return r;
  },
  zb = (e, t) => {
    let r = 0;
    if (e.length === 0) return t[0];
    for (let n = 0; n < e.length; n += 1)
      (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
    return (r = ((r % t.length) + t.length) % t.length), t[r];
  },
  Ab = (e) => e[Math.floor(Math.random() * e.length)],
  Rb = (e) => {
    const [t, r, n] = Fo(e);
    return (t * 299 + r * 587 + n * 114) / 1e3;
  },
  Mb = (e) => (t, r) => {
    const n = t ? R(e)(t, r) : e;
    return Rb(n) < 128 ? 'dark' : 'light';
  },
  $b = (e) => (t, r) => Mb(e)(t, r) === 'light',
  oi = (e, t) => {
    const r = {};
    return (
      Object.keys(e).forEach((n) => {
        t.includes(n) || (r[n] = e[n]);
      }),
      r
    );
  },
  $u = (e, t) => {
    const r = {};
    return (
      t.forEach((n) => {
        n in e && (r[n] = e[n]);
      }),
      r
    );
  },
  Sg = (e, t) => {
    const r = {};
    return (
      Object.entries(e).forEach(([n, o]) => {
        t(n, o, e) && (r[n] = o);
      }),
      r
    );
  },
  od = (e) => Sg(e, (t, r) => r != null),
  he = (e, t, r = !1) => {
    let n = Object.assign({}, e);
    if (xe(t))
      if (xe(e))
        for (const [o, i] of Object.entries(t)) {
          const s = e[o];
          r && O(i) && O(s)
            ? (n[o] = s.concat(...i))
            : !Ur(i) && xe(i) && e.hasOwnProperty(o)
              ? (n[o] = he(s, i, r))
              : Object.assign(n, { [o]: i });
        }
      else n = t;
    return n;
  },
  ju = (e, t = 1 / 0, r = []) =>
    (!xe(e) && !O(e)) || !t
      ? e
      : Object.entries(e).reduce(
          (n, [o, i]) => (
            xe(i) && !Object.keys(i).some((s) => r.includes(s))
              ? Object.entries(ju(i, t - 1, r)).forEach(([s, a]) => {
                  n[`${o}.${s}`] = a;
                })
              : (n[o] = i),
            n
          ),
          {},
        ),
  jb = (e) => e.reduce((t, [r, n]) => ((t[r] = n), t), {}),
  wg = (e) => Object.keys(e),
  Lb = (e, t) =>
    O(e)
      ? e.map(t)
      : xe(e)
        ? Object.entries(e).reduce((r, [n, o]) => ((r[n] = t(o)), r), {})
        : t(e),
  Ib = (e, t, r, n) => {
    const o = typeof t == 'string' ? t.split('.') : [t];
    for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
    return e === void 0 ? r : e;
  },
  Bb = (e) => {
    const t = new WeakMap();
    return (n, o, i, s) => {
      if (typeof n > 'u') return e(n, o, i);
      t.has(n) || t.set(n, new Map());
      const a = t.get(n);
      if (a.has(o)) return a.get(o);
      const l = e(n, o, i, s);
      return a.set(o, l), l;
    };
  },
  B = Bb(Ib),
  Db = (e, ...t) => {
    if (e == null)
      throw new TypeError('Cannot convert undefined or null to object');
    const r = { ...e };
    for (const n of t)
      if (n != null)
        for (const o in n)
          Object.prototype.hasOwnProperty.call(n, o) &&
            (o in r && delete r[o], (r[o] = n[o]));
    return r;
  },
  Vb = (e) => e.default || e,
  Ob = (e, t = '') => e.replace(/\s+/g, t),
  ha = (e, ...t) => t.join(` ${e} `).replace(/calc/g, ''),
  fp = (...e) => `calc(${ha('+', ...e)})`,
  pp = (...e) => `calc(${ha('-', ...e)})`,
  Lu = (...e) => `calc(${ha('*', ...e)})`,
  hp = (...e) => `calc(${ha('/', ...e)})`,
  mp = (e) =>
    e != null && !isNaN(parseFloat(e.toString()))
      ? String(e).startsWith('-')
        ? String(e).slice(1)
        : `-${e}`
      : Lu(e, -1),
  Rr = Object.assign(
    (e) => ({
      add: (...t) => Rr(fp(e, ...t)),
      subtract: (...t) => Rr(pp(e, ...t)),
      multiply: (...t) => Rr(Lu(e, ...t)),
      divide: (...t) => Rr(hp(e, ...t)),
      negate: () => Rr(mp(e)),
      toString: () => e.toString(),
    }),
    { add: fp, subtract: pp, multiply: Lu, divide: hp, negate: mp },
  ),
  Nb = { getDocument: () => document, getWindow: () => window },
  Fb = S.createContext(Nb),
  kg = ({ children: e, environment: t, disabled: r }) => {
    const n = S.useRef(null),
      o = S.useMemo(
        () =>
          t || {
            getDocument: () => {
              var s, a;
              return (a = (s = n.current) == null ? void 0 : s.ownerDocument) !=
                null
                ? a
                : document;
            },
            getWindow: () => {
              var s, a;
              return (a =
                (s = n.current) == null
                  ? void 0
                  : s.ownerDocument.defaultView) != null
                ? a
                : window;
            },
          },
        [t],
      ),
      i = !r || !t;
    return b.jsxs(Fb.Provider, {
      value: o,
      children: [
        e,
        i ? b.jsx('span', { id: '__ui_dev', hidden: !0, ref: n }) : null,
      ],
    });
  };
kg.displayName = 'EnvironmentProvider';
var Wb = typeof Element < 'u',
  Hb = typeof Map == 'function',
  Ub = typeof Set == 'function',
  Gb = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function Zi(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Zi(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (Hb && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Zi(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (Ub && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (Gb && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (Wb && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') &&
          e.$$typeof
        ) &&
        !Zi(e[o[n]], t[o[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Yb = function (t, r) {
  try {
    return Zi(t, r);
  } catch (n) {
    if ((n.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1;
    throw n;
  }
};
const gp = nm(Yb);
function Xb(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Kb(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var Cg = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Kb(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Xb(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  $e = '-ms-',
  $s = '-moz-',
  W = '-webkit-',
  _g = 'comm',
  id = 'rule',
  sd = 'decl',
  Qb = '@import',
  Pg = '@keyframes',
  qb = '@layer',
  Zb = Math.abs,
  ma = String.fromCharCode,
  Jb = Object.assign;
function eS(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^
        Ee(e, 3)
    : 0;
}
function Eg(e) {
  return e.trim();
}
function tS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, r) {
  return e.replace(t, r);
}
function Iu(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ho(e, t, r) {
  return e.slice(t, r);
}
function zt(e) {
  return e.length;
}
function ad(e) {
  return e.length;
}
function Ai(e, t) {
  return t.push(e), e;
}
function rS(e, t) {
  return e.map(t).join('');
}
var ga = 1,
  Ln = 1,
  Tg = 0,
  Xe = 0,
  fe = 0,
  Fn = '';
function ya(e, t, r, n, o, i, s) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: ga,
    column: Ln,
    length: s,
    return: '',
  };
}
function Jn(e, t) {
  return Jb(ya('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function nS() {
  return fe;
}
function oS() {
  return (
    (fe = Xe > 0 ? Ee(Fn, --Xe) : 0), Ln--, fe === 10 && ((Ln = 1), ga--), fe
  );
}
function rt() {
  return (
    (fe = Xe < Tg ? Ee(Fn, Xe++) : 0), Ln++, fe === 10 && ((Ln = 1), ga++), fe
  );
}
function Lt() {
  return Ee(Fn, Xe);
}
function Ji() {
  return Xe;
}
function ii(e, t) {
  return Ho(Fn, e, t);
}
function Uo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function zg(e) {
  return (ga = Ln = 1), (Tg = zt((Fn = e))), (Xe = 0), [];
}
function Ag(e) {
  return (Fn = ''), e;
}
function es(e) {
  return Eg(ii(Xe - 1, Bu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function iS(e) {
  for (; (fe = Lt()) && fe < 33; ) rt();
  return Uo(e) > 2 || Uo(fe) > 3 ? '' : ' ';
}
function sS(e, t) {
  for (
    ;
    --t &&
    rt() &&
    !(fe < 48 || fe > 102 || (fe > 57 && fe < 65) || (fe > 70 && fe < 97));

  );
  return ii(e, Ji() + (t < 6 && Lt() == 32 && rt() == 32));
}
function Bu(e) {
  for (; rt(); )
    switch (fe) {
      case e:
        return Xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bu(fe);
        break;
      case 40:
        e === 41 && Bu(e);
        break;
      case 92:
        rt();
        break;
    }
  return Xe;
}
function aS(e, t) {
  for (; rt() && e + fe !== 47 + 10; )
    if (e + fe === 42 + 42 && Lt() === 47) break;
  return '/*' + ii(t, Xe - 1) + '*' + ma(e === 47 ? e : rt());
}
function lS(e) {
  for (; !Uo(Lt()); ) rt();
  return ii(e, Xe);
}
function uS(e) {
  return Ag(ts('', null, null, null, [''], (e = zg(e)), 0, [0], e));
}
function ts(e, t, r, n, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      m = 0,
      x = 0,
      v = 1,
      k = 1,
      y = 1,
      h = 0,
      g = '',
      w = o,
      C = i,
      P = n,
      _ = g;
    k;

  )
    switch (((x = h), (h = rt()))) {
      case 40:
        if (x != 108 && Ee(_, d - 1) == 58) {
          Iu((_ += H(es(h), '&', '&\f')), '&\f') != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += es(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += iS(x);
        break;
      case 92:
        _ += sS(Ji() - 1, 7);
        continue;
      case 47:
        switch (Lt()) {
          case 42:
          case 47:
            Ai(cS(aS(rt(), Ji()), t, r), l);
            break;
          default:
            _ += '/';
        }
        break;
      case 123 * v:
        a[u++] = zt(_) * y;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            k = 0;
          case 59 + c:
            y == -1 && (_ = H(_, /\f/g, '')),
              m > 0 &&
                zt(_) - d &&
                Ai(
                  m > 32
                    ? vp(_ + ';', n, r, d - 1)
                    : vp(H(_, ' ', '') + ';', n, r, d - 2),
                  l,
                );
            break;
          case 59:
            _ += ';';
          default:
            if (
              (Ai((P = yp(_, t, r, u, c, o, a, g, (w = []), (C = []), d)), i),
              h === 123)
            )
              if (c === 0) ts(_, t, P, P, w, i, d, a, C);
              else
                switch (f === 99 && Ee(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ts(
                      e,
                      P,
                      P,
                      n && Ai(yp(e, P, P, 0, 0, o, a, g, o, (w = []), d), C),
                      o,
                      C,
                      d,
                      a,
                      n ? w : C,
                    );
                    break;
                  default:
                    ts(_, P, P, P, [''], C, 0, a, C);
                }
        }
        (u = c = m = 0), (v = y = 1), (g = _ = ''), (d = s);
        break;
      case 58:
        (d = 1 + zt(_)), (m = x);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && oS() == 125) continue;
        }
        switch (((_ += ma(h)), h * v)) {
          case 38:
            y = c > 0 ? 1 : ((_ += '\f'), -1);
            break;
          case 44:
            (a[u++] = (zt(_) - 1) * y), (y = 1);
            break;
          case 64:
            Lt() === 45 && (_ += es(rt())),
              (f = Lt()),
              (c = d = zt((g = _ += lS(Ji())))),
              h++;
            break;
          case 45:
            x === 45 && zt(_) == 2 && (v = 0);
        }
    }
  return i;
}
function yp(e, t, r, n, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [''], m = ad(f), x = 0, v = 0, k = 0;
    x < n;
    ++x
  )
    for (var y = 0, h = Ho(e, d + 1, (d = Zb((v = s[x])))), g = e; y < m; ++y)
      (g = Eg(v > 0 ? f[y] + ' ' + h : H(h, /&\f/g, f[y]))) && (l[k++] = g);
  return ya(e, t, r, o === 0 ? id : a, l, u, c);
}
function cS(e, t, r) {
  return ya(e, t, r, _g, ma(nS()), Ho(e, 2, -2), 0);
}
function vp(e, t, r, n) {
  return ya(e, t, r, sd, Ho(e, 0, n), Ho(e, n + 1, -1), n);
}
function En(e, t) {
  for (var r = '', n = ad(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
  return r;
}
function dS(e, t, r, n) {
  switch (e.type) {
    case qb:
      if (e.children.length) break;
    case Qb:
    case sd:
      return (e.return = e.return || e.value);
    case _g:
      return '';
    case Pg:
      return (e.return = e.value + '{' + En(e.children, n) + '}');
    case id:
      e.value = e.props.join(',');
  }
  return zt((r = En(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
function fS(e) {
  var t = ad(e);
  return function (r, n, o, i) {
    for (var s = '', a = 0; a < t; a++) s += e[a](r, n, o, i) || '';
    return s;
  };
}
function pS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var xp = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Rg(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var hS = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Lt()), o === 38 && i === 12 && (r[n] = 1), !Uo(i);

    )
      rt();
    return ii(t, Xe);
  },
  mS = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Uo(o)) {
        case 0:
          o === 38 && Lt() === 12 && (r[n] = 1), (t[n] += hS(Xe - 1, r, n));
          break;
        case 2:
          t[n] += es(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = Lt() === 58 ? '&\f' : ''), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += ma(o);
      }
    while ((o = rt()));
    return t;
  },
  gS = function (t, r) {
    return Ag(mS(zg(t), r));
  },
  bp = new WeakMap(),
  yS = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !bp.get(n)) &&
        !o
      ) {
        bp.set(t, !0);
        for (
          var i = [], s = gS(r, i), a = n.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + ' ' + s[l];
      }
    }
  },
  vS = function (t) {
    if (t.type === 'decl') {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function Mg(e, t) {
  switch (eS(e, t)) {
    case 5103:
      return W + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return W + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e + $s + e + $e + e + e;
    case 6828:
    case 4268:
      return W + e + $e + e + e;
    case 6165:
      return W + e + $e + 'flex-' + e + e;
    case 5187:
      return (
        W + e + H(e, /(\w+).+(:[^]+)/, W + 'box-$1$2' + $e + 'flex-$1$2') + e
      );
    case 5443:
      return W + e + $e + 'flex-item-' + H(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        W +
        e +
        $e +
        'flex-line-pack' +
        H(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return W + e + $e + H(e, 'shrink', 'negative') + e;
    case 5292:
      return W + e + $e + H(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        W +
        'box-' +
        H(e, '-grow', '') +
        W +
        e +
        $e +
        H(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return W + H(e, /([^-])(transform)/g, '$1' + W + '$2') + e;
    case 6187:
      return (
        H(H(H(e, /(zoom-|grab)/, W + '$1'), /(image-set)/, W + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, W + '$1$`$1');
    case 4968:
      return (
        H(
          H(e, /(.+:)(flex-)?(.*)/, W + 'box-pack:$3' + $e + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        W +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, W + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (zt(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break;
          case 102:
            return (
              H(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  W +
                  '$2-$3$1' +
                  $s +
                  (Ee(e, t + 3) == 108 ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~Iu(e, 'stretch')
              ? Mg(H(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, zt(e) - 3 - (~Iu(e, '!important') && 10))) {
        case 107:
          return H(e, ':', ':' + W) + e;
        case 101:
          return (
            H(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                W +
                (Ee(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                W +
                '$2$3$1' +
                $e +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return W + e + $e + H(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return W + e + $e + H(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return W + e + $e + H(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return W + e + $e + e + e;
  }
  return e;
}
var xS = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case sd:
          t.return = Mg(t.value, t.length);
          break;
        case Pg:
          return En([Jn(t, { value: H(t.value, '@', '@' + W) })], o);
        case id:
          if (t.length)
            return rS(t.props, function (i) {
              switch (tS(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return En(
                    [Jn(t, { props: [H(i, /:(read-\w+)/, ':' + $s + '$1')] })],
                    o,
                  );
                case '::placeholder':
                  return En(
                    [
                      Jn(t, {
                        props: [H(i, /:(plac\w+)/, ':' + W + 'input-$1')],
                      }),
                      Jn(t, { props: [H(i, /:(plac\w+)/, ':' + $s + '$1')] }),
                      Jn(t, { props: [H(i, /:(plac\w+)/, $e + 'input-$1')] }),
                    ],
                    o,
                  );
              }
              return '';
            });
      }
  },
  bS = [xS],
  SS = function (t) {
    var r = t.key;
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (v) {
        var k = v.getAttribute('data-emotion');
        k.indexOf(' ') !== -1 &&
          (document.head.appendChild(v), v.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || bS,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (v) {
          for (
            var k = v.getAttribute('data-emotion').split(' '), y = 1;
            y < k.length;
            y++
          )
            i[k[y]] = !0;
          a.push(v);
        },
      );
    var l,
      u = [yS, vS];
    {
      var c,
        d = [
          dS,
          pS(function (v) {
            c.insert(v);
          }),
        ],
        f = fS(u.concat(o, d)),
        m = function (k) {
          return En(uS(k), f);
        };
      l = function (k, y, h, g) {
        (c = h),
          m(k ? k + '{' + y.styles + '}' : y.styles),
          g && (x.inserted[y.name] = !0);
      };
    }
    var x = {
      key: r,
      sheet: new Cg({
        key: r,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return x.sheet.hydrate(a), x;
  };
function js() {
  return (
    (js = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    js.apply(this, arguments)
  );
}
var $g = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _e = typeof Symbol == 'function' && Symbol.for,
  ld = _e ? Symbol.for('react.element') : 60103,
  ud = _e ? Symbol.for('react.portal') : 60106,
  va = _e ? Symbol.for('react.fragment') : 60107,
  xa = _e ? Symbol.for('react.strict_mode') : 60108,
  ba = _e ? Symbol.for('react.profiler') : 60114,
  Sa = _e ? Symbol.for('react.provider') : 60109,
  wa = _e ? Symbol.for('react.context') : 60110,
  cd = _e ? Symbol.for('react.async_mode') : 60111,
  ka = _e ? Symbol.for('react.concurrent_mode') : 60111,
  Ca = _e ? Symbol.for('react.forward_ref') : 60112,
  _a = _e ? Symbol.for('react.suspense') : 60113,
  wS = _e ? Symbol.for('react.suspense_list') : 60120,
  Pa = _e ? Symbol.for('react.memo') : 60115,
  Ea = _e ? Symbol.for('react.lazy') : 60116,
  kS = _e ? Symbol.for('react.block') : 60121,
  CS = _e ? Symbol.for('react.fundamental') : 60117,
  _S = _e ? Symbol.for('react.responder') : 60118,
  PS = _e ? Symbol.for('react.scope') : 60119;
function at(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ld:
        switch (((e = e.type), e)) {
          case cd:
          case ka:
          case va:
          case ba:
          case xa:
          case _a:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case wa:
              case Ca:
              case Ea:
              case Pa:
              case Sa:
                return e;
              default:
                return t;
            }
        }
      case ud:
        return t;
    }
  }
}
function jg(e) {
  return at(e) === ka;
}
G.AsyncMode = cd;
G.ConcurrentMode = ka;
G.ContextConsumer = wa;
G.ContextProvider = Sa;
G.Element = ld;
G.ForwardRef = Ca;
G.Fragment = va;
G.Lazy = Ea;
G.Memo = Pa;
G.Portal = ud;
G.Profiler = ba;
G.StrictMode = xa;
G.Suspense = _a;
G.isAsyncMode = function (e) {
  return jg(e) || at(e) === cd;
};
G.isConcurrentMode = jg;
G.isContextConsumer = function (e) {
  return at(e) === wa;
};
G.isContextProvider = function (e) {
  return at(e) === Sa;
};
G.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ld;
};
G.isForwardRef = function (e) {
  return at(e) === Ca;
};
G.isFragment = function (e) {
  return at(e) === va;
};
G.isLazy = function (e) {
  return at(e) === Ea;
};
G.isMemo = function (e) {
  return at(e) === Pa;
};
G.isPortal = function (e) {
  return at(e) === ud;
};
G.isProfiler = function (e) {
  return at(e) === ba;
};
G.isStrictMode = function (e) {
  return at(e) === xa;
};
G.isSuspense = function (e) {
  return at(e) === _a;
};
G.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === va ||
    e === ka ||
    e === ba ||
    e === xa ||
    e === _a ||
    e === wS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ea ||
        e.$$typeof === Pa ||
        e.$$typeof === Sa ||
        e.$$typeof === wa ||
        e.$$typeof === Ca ||
        e.$$typeof === CS ||
        e.$$typeof === _S ||
        e.$$typeof === PS ||
        e.$$typeof === kS))
  );
};
G.typeOf = at;
$g.exports = G;
var ES = $g.exports,
  Lg = ES,
  TS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  zS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ig = {};
Ig[Lg.ForwardRef] = TS;
Ig[Lg.Memo] = zS;
var AS = !0;
function RS(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ');
    }),
    n
  );
}
var Bg = function (t, r, n) {
    var o = t.key + '-' + r.name;
    (n === !1 || AS === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  Dg = function (t, r, n) {
    Bg(t, r, n);
    var o = t.key + '-' + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function MS(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var $S = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  jS = /[A-Z]|^ms/g,
  LS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Vg = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Sp = function (t) {
    return t != null && typeof t != 'boolean';
  },
  gl = Rg(function (e) {
    return Vg(e) ? e : e.replace(jS, '-$&').toLowerCase();
  }),
  wp = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(LS, function (n, o, i) {
            return (At = { name: o, styles: i, next: At }), o;
          });
    }
    return $S[t] !== 1 && !Vg(t) && typeof r == 'number' && r !== 0
      ? r + 'px'
      : r;
  };
function Go(e, t, r) {
  if (r == null) return '';
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object': {
      if (r.anim === 1)
        return (At = { name: r.name, styles: r.styles, next: At }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (At = { name: n.name, styles: n.styles, next: At }), (n = n.next);
        var o = r.styles + ';';
        return o;
      }
      return IS(e, t, r);
    }
    case 'function': {
      if (e !== void 0) {
        var i = At,
          s = r(e);
        return (At = i), Go(e, t, s);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function IS(e, t, r) {
  var n = '';
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += Go(e, t, r[o]) + ';';
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != 'object')
        t != null && t[s] !== void 0
          ? (n += i + '{' + t[s] + '}')
          : Sp(s) && (n += gl(i) + ':' + wp(i, s) + ';');
      else if (
        Array.isArray(s) &&
        typeof s[0] == 'string' &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          Sp(s[a]) && (n += gl(i) + ':' + wp(i, s[a]) + ';');
      else {
        var l = Go(e, t, s);
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += gl(i) + ':' + l + ';';
            break;
          }
          default:
            n += i + '{' + l + '}';
        }
      }
    }
  return n;
}
var kp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  At,
  dd = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = '';
    At = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += Go(n, r, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += Go(n, r, t[a])), o && (i += s[a]);
    kp.lastIndex = 0;
    for (var l = '', u; (u = kp.exec(i)) !== null; ) l += '-' + u[1];
    var c = MS(i) + l;
    return { name: c, styles: i, next: At };
  },
  BS = function (t) {
    return t();
  },
  Og = tf['useInsertionEffect'] ? tf['useInsertionEffect'] : !1,
  DS = Og || BS,
  Cp = Og || S.useLayoutEffect,
  Ng = S.createContext(typeof HTMLElement < 'u' ? SS({ key: 'css' }) : null);
Ng.Provider;
var Fg = function (t) {
    return S.forwardRef(function (r, n) {
      var o = S.useContext(Ng);
      return t(r, o, n);
    });
  },
  Yo = S.createContext({}),
  VS = function (t, r) {
    if (typeof r == 'function') {
      var n = r(t);
      return n;
    }
    return js({}, t, r);
  },
  OS = xp(function (e) {
    return xp(function (t) {
      return VS(e, t);
    });
  }),
  NS = function (t) {
    var r = S.useContext(Yo);
    return (
      t.theme !== r && (r = OS(r)(t.theme)),
      S.createElement(Yo.Provider, { value: r }, t.children)
    );
  },
  fd = Fg(function (e, t) {
    var r = e.styles,
      n = dd([r], void 0, S.useContext(Yo)),
      o = S.useRef();
    return (
      Cp(
        function () {
          var i = t.key + '-global',
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + ' ' + n.name + '"]',
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute('data-emotion', i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t],
      ),
      Cp(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && Dg(t, n.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert('', n, s, !1);
        },
        [t, n.name],
      ),
      null
    );
  });
function FS() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return dd(t);
}
var WS = function () {
    var t = FS.apply(void 0, arguments),
      r = 'animation-' + t.name;
    return {
      name: r,
      styles: '@keyframes ' + r + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  HS =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  US = Rg(function (e) {
    return (
      HS.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  GS = US,
  YS = function (t) {
    return t !== 'theme';
  },
  _p = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? GS : YS;
  },
  Pp = function (t, r, n) {
    var o;
    if (r) {
      var i = r.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != 'function' && n && (o = t.__emotion_forwardProp), o;
  },
  XS = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      Bg(r, n, o),
      DS(function () {
        return Dg(r, n, o);
      }),
      null
    );
  },
  KS = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      s;
    r !== void 0 && ((i = r.label), (s = r.target));
    var a = Pp(t, r, n),
      l = a || _p(o),
      u = !l('as');
    return function () {
      var c = arguments,
        d =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push('label:' + i + ';'),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, m = 1; m < f; m++) d.push(c[m], c[0][m]);
      }
      var x = Fg(function (v, k, y) {
        var h = (u && v.as) || o,
          g = '',
          w = [],
          C = v;
        if (v.theme == null) {
          C = {};
          for (var P in v) C[P] = v[P];
          C.theme = S.useContext(Yo);
        }
        typeof v.className == 'string'
          ? (g = RS(k.registered, w, v.className))
          : v.className != null && (g = v.className + ' ');
        var _ = dd(d.concat(w), k.registered, C);
        (g += k.key + '-' + _.name), s !== void 0 && (g += ' ' + s);
        var T = u && a === void 0 ? _p(h) : l,
          L = {};
        for (var $ in v) (u && $ === 'as') || (T($) && (L[$] = v[$]));
        return (
          (L.className = g),
          (L.ref = y),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(XS, {
              cache: k,
              serialized: _,
              isStringTag: typeof h == 'string',
            }),
            S.createElement(h, L),
          )
        );
      });
      return (
        (x.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (x.defaultProps = t.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = o),
        (x.__emotion_styles = d),
        (x.__emotion_forwardProp = a),
        Object.defineProperty(x, 'toString', {
          value: function () {
            return '.' + s;
          },
        }),
        (x.withComponent = function (v, k) {
          return e(v, js({}, r, k, { shouldForwardProp: Pp(x, k, !0) })).apply(
            void 0,
            d,
          );
        }),
        x
      );
    };
  },
  QS = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
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
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Du = KS.bind();
QS.forEach(function (e) {
  Du[e] = Du(e);
});
var ue = (e) => S.forwardRef(e),
  rs = (e, t) => {
    const r = ['@media screen'];
    return (
      e && r.push('and', `(min-width: ${e}px)`),
      t && r.push('and', `(max-width: ${t}px)`),
      r.length > 1 ? r.join(' ') : void 0
    );
  },
  qS = (e, t) => {
    const r = t === 'down';
    return Object.entries(e).map(([n, o], i, s) => {
      var a;
      const [, l] = (a = s[i + 1]) != null ? a : [];
      let u = r ? l : o,
        c = r ? o : l;
      n === 'base' && (r ? (c = void 0) : (u = void 0)),
        r ? u && (u += 1) : c && (c -= 1);
      const d = rs(void 0, c),
        f = rs(u),
        m = rs(u, c);
      return {
        breakpoint: n,
        minW: u,
        maxW: c,
        query: t === 'down' ? d : f,
        maxWQuery: d,
        minWQuery: f,
        minMaxQuery: m,
      };
    });
  },
  ZS = (e, t) =>
    Object.fromEntries(
      Object.entries(e)
        .map(([r, n]) => [r, Cb(n)])
        .sort((r, n) => (t === 'down' ? n[1] - r[1] : r[1] - n[1])),
    ),
  JS = (e, t = 'down') => {
    if (!e) return;
    (e.base = t === 'down' ? '9999px' : '0px'), (e = ZS(e, t));
    const r = wg(e),
      n = qS(e, t);
    return {
      keys: r,
      isResponsive: (i) => {
        const s = Object.keys(i);
        return s.length > 0 && s.every((a) => r.includes(a));
      },
      queries: n,
    };
  },
  Ep = nd() ? new Cg({ key: 'css', container: document.head }) : void 0,
  Vu = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  Tp = [
    'rotate(var(--ui-rotate, 0))',
    'scaleX(var(--ui-scale-x, 1))',
    'scaleY(var(--ui-scale-y, 1))',
    'skewX(var(--ui-skew-x, 0))',
    'skewY(var(--ui-skew-y, 0))',
  ],
  ew = new Set(Object.values(Vu)),
  Wg = new Set([
    'none',
    '-moz-initial',
    'inherit',
    'initial',
    'revert',
    'unset',
  ]),
  zp = (e) => yg(e) && e.includes('(') && e.includes(')'),
  tw = (e) => /^var\(--.+\)$/.test(e),
  rw = (e) => {
    let t = parseFloat(e.toString());
    const r = e.toString().replace(String(t), '');
    return { isUnitless: !r, value: e, unit: r };
  },
  gn = (e, t) => (r) => {
    const n = `${e}.${t}`;
    return xe(r.__cssMap) && n in r.__cssMap ? r.__cssMap[n].ref : t;
  },
  Ou = (e, t) => {
    var r;
    if (e == null || Wg.has(e)) return e;
    if (!zp(e)) return `url('${e}')`;
    const o = /(^[a-z-A-Z]+)\((.*)\)/g,
      [, i, s] = (r = o.exec(e)) != null ? r : [];
    if (!i || !s) return e;
    const a = i.includes('-gradient') ? i : `${i}-gradient`,
      [l, ...u] = s
        .split(',')
        .map((f) => f.trim())
        .filter(Boolean);
    if (!u.length) return e;
    const c = l in Vu ? Vu[l] : l;
    u.unshift(c);
    const d = u.map((f) => {
      if (ew.has(f)) return f;
      const m = f.indexOf(' ');
      let [x, v] = m !== -1 ? [f.slice(0, m), f.slice(m + 1)] : [f];
      const k = zp(v) ? v : v && v.split(' '),
        y = `colors.${x}`;
      return (
        (x = y in t.__cssMap ? t.__cssMap[y].ref : x),
        k ? [x, ...(O(k) ? k : [k])].join(' ') : x
      );
    });
    return `${a}(${d.join(', ')})`;
  },
  nw = (e) =>
    Object.entries(e).reduce(
      (t, [r, n]) => (
        r === 'duration'
          ? (t.animationDuration = n)
          : r === 'timingFunction'
            ? (t.animationTimingFunction = n)
            : (t[r] = n),
        t
      ),
      {},
    ),
  Nu = (e, t) => {
    if (e == null || Wg.has(e)) return e;
    if (xe(e)) {
      const {
          keyframes: r,
          animationDuration: n = '0s',
          animationTimingFunction: o = 'ease',
          delay: i = '0s',
          iterationCount: s = '1',
          direction: a = 'normal',
          fillMode: l = 'none',
          playState: u = 'running',
        } = Ta(nw(e))(t),
        { name: c, styles: d } = WS(r);
      return (
        Ep == null || Ep.insert(d), `${c} ${n} ${o} ${i} ${s} ${a} ${l} ${u}`
      );
    } else
      return e.includes(',')
        ? ((e = e
            .split(',')
            .map((r) => ((r = r.trim()), (r = gn('animations', r)(t)), r))
            .join(',')),
          e)
        : ((e = gn('animations', e)(t)), e);
  },
  ow = (e) =>
    e === 'auto'
      ? [
          'translateX(var(--ui-translate-x, 0))',
          'translateY(var(--ui-translate-y, 0))',
          ...Tp,
        ].join(' ')
      : e === 'auto-3d'
        ? [
            'translate3d(var(--ui-translate-x, 0), var(--ui-translate-y, 0), 0)',
            ...Tp,
          ].join(' ')
        : e,
  iw =
    (e = 'filter') =>
    (t) =>
      t !== 'auto'
        ? t
        : e === 'filter'
          ? [
              'var(--ui-blur, /*!*/ /*!*/)',
              'var(--ui-brightness, /*!*/ /*!*/)',
              'var(--ui-contrast, /*!*/ /*!*/)',
              'var(--ui-drop-shadow, /*!*/ /*!*/)',
              'var(--ui-grayscale, /*!*/ /*!*/)',
              'var(--ui-hue-rotate, /*!*/ /*!*/)',
              'var(--ui-invert, /*!*/ /*!*/)',
              'var(--ui-opacity, /*!*/ /*!*/)',
              'var(--ui-saturate, /*!*/ /*!*/)',
              'var(--ui-sepia, /*!*/ /*!*/)',
            ].join(' ')
          : [
              'var(--ui-backdrop-blur, /*!*/ /*!*/)',
              'var(--ui-backdrop-brightness, /*!*/ /*!*/)',
              'var(--ui-backdrop-contrast, /*!*/ /*!*/)',
              'var(--ui-backdrop-drop-shadow, /*!*/ /*!*/)',
              'var(--ui-backdrop-grayscale, /*!*/ /*!*/)',
              'var(--ui-backdrop-hue-rotate, /*!*/ /*!*/)',
              'var(--ui-backdrop-invert, /*!*/ /*!*/)',
              'var(--ui-backdrop-opacity, /*!*/ /*!*/)',
              'var(--ui-backdrop-saturate, /*!*/ /*!*/)',
              'var(--ui-backdrop-sepia, /*!*/ /*!*/)',
            ].join(' '),
  J =
    (e, t) =>
    (r = 'light') =>
      r === 'light' ? e : t,
  p = {
    var: (e, t) =>
      e.reduce((r, { name: n, token: o, value: i }) => {
        var s, a;
        return (
          (n = `--${(a = (s = t.__config.var) == null ? void 0 : s.prefix) != null ? a : 'ui'}-${n}`),
          xe(i)
            ? (i = Object.entries(i).reduce(
                (u, [c, d]) => ((u[c] = gn(o, d)(t)), u),
                {},
              ))
            : O(i)
              ? (i = i.map((u) => gn(o, u)(t)))
              : (i = gn(o, i)(t)),
          (r[n] = i),
          r
        );
      }, {}),
    token: (e, t, r) => (n, o) => {
      var i;
      n = gn(e, n)(o);
      let s = (i = t == null ? void 0 : t(n, o)) != null ? i : n;
      return r && (s = r(s, o)), s;
    },
    styles:
      (e) =>
      (t, r, n = {}) => {
        const o = {},
          i = B(r, e ? `styles.${e}.${t}` : `styles.${t}`, {});
        for (const s in i) (s in n && n[s] != null) || (o[s] = i[s]);
        return o;
      },
    px: (e) => {
      if (e == null) return e;
      const { isUnitless: t } = rw(e);
      return t || Pn(e) ? `${e}px` : e;
    },
    deg: (e) =>
      tw(e) || e == null
        ? e
        : (typeof e == 'string' && !e.endsWith('deg')) || Pn(e)
          ? `${e}deg`
          : e,
    fraction:
      (e) =>
      (t, ...r) => (
        Pn(t) && t <= 1 && (t = `${t * 100}%`), e && (t = e(t, ...r)), t
      ),
    isTruncated: (e) => {
      if (e === !0)
        return {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        };
    },
    bgClip: (e) =>
      e === 'text'
        ? { color: 'transparent', backgroundClip: 'text' }
        : { backgroundClip: e },
    function:
      (e, t) =>
      (r, ...n) => (t && (r = t(r, ...n)), `${e}(${r})`),
    gradient: Ou,
    animation: Nu,
    transform: ow,
    filter: iw,
  },
  gr = {
    _hover: '&:hover, &[data-hover]',
    _nativeHover: '&:hover',
    _active: '&:active, &[data-active]',
    _nativeActive: '&:active',
    _focus: '&:focus, &[data-focus]',
    _nativeFocus: '&:focus',
    _focusVisible: '&:focus-visible, &[data-focus-visible]',
    _nativeFocusVisible: '&:focus-visible',
    _disabled:
      '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
    _readOnly: '&[readonly], &[aria-readonly=true], &[data-readonly]',
    _indeterminate:
      '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
    _before: '&::before',
    _after: '&::after',
    _marker: '&::marker',
    _firstLetter: '&::first-letter',
    _firstLine: '&::first-line',
    _empty: '&:empty',
    _expanded: '&[aria-expanded=true], &[data-expanded]',
    _checked: '&:checked, &[data-checked], &[aria-checked=true]',
    _invalid: '&[data-invalid], &[aria-invalid=true]',
    _valid: '&:valid, &[data-valid], &[data-state=valid]',
    _selected: '&[aria-selected=true], &[data-selected]',
    _hidden: '&[hidden], &[data-hidden]',
    _visited: '&:visited',
    _placeholder: '&::placeholder, &[data-placeholder]',
    _placeholderShown: '&:placeholder-shown',
    _fullScreen: '&:fullscreen',
    _selection: '&::selection',
    _even: '&:nth-of-type(even)',
    _odd: '&:nth-of-type(odd)',
    _first: '&:first-of-type',
    _last: '&:last-of-type',
    _notFirst: '&:not(:first-of-type)',
    _notLast: '&:not(:last-of-type)',
    _autofill: '&:-webkit-autofill',
    _filled: '&[data-filled]',
    _start: '&[data-start]',
    _end: '&[data-end]',
    _outside: '&[data-outside]',
    _between: '&[data-between]',
    _weekend: '&[data-weekend]',
    _holiday: '&[data-holiday]',
    _today: '&[data-today]',
    _accept: '&[data-accept]',
    _reject: '&[data-reject]',
    _idle: '&[data-idle]',
    _loading: '&[data-loading]',
    _loaded: '&[data-loaded]',
    _ripple: '& .ui-ripple',
    _vertical: '&:vertical, &[data-orientation=vertical]',
    _horizontal: '&:horizontal, &[data-orientation=horizontal]',
    _scrollbar: '&::-webkit-scrollbar',
    _scrollbarTrack: '&::-webkit-scrollbar-track',
    _scrollbarTrackPiece: '&::-webkit-scrollbar-track-piece',
    _scrollbarThumb: '&::-webkit-scrollbar-thumb',
    _scrollbarButton: '&::-webkit-scrollbar-button',
    _scrollbarCorner: '&::-webkit-scrollbar-corner',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
    _dark:
      '.ui-dark &:not([data-mode]), [data-mode=dark] &:not([data-mode]), &[data-mode=dark]',
    _light:
      '.ui-light &:not([data-mode]), [data-mode=light] &:not([data-mode]), &[data-mode=light]',
  },
  sw = Object.keys(gr),
  aw = (e, t) => {
    const r = `--${[t, Ob(e, '-')].filter(Boolean).join('-')}`,
      n = `var(${r})`;
    return { variable: r, reference: n };
  },
  Ap = (e, t) => ((e = e.replace(/\./g, '-')), aw(e, t)),
  qr =
    (e, t = 'ui') =>
    ({ baseTokens: r, cssMap: n = {}, cssVars: o = {} } = {}) => {
      for (let [i, { isSemantic: s, value: a }] of Object.entries(e)) {
        const l = (v = '') => {
            var k;
            const [y] = i.split('.'),
              h = [y, v].join('.');
            if (!((k = e[h]) != null ? k : r == null ? void 0 : r[h]))
              return [, v];
            const { variable: w, reference: C } = Ap(h, t);
            return [w, C];
          },
          { variable: u, reference: c } = Ap(i, t);
        let d, f;
        if (i.startsWith('animations.'))
          O(a)
            ? (d = a.map((v) => Nu(v, { __cssMap: n })).join(','))
            : (d = Nu(a, { __cssMap: n }));
        else {
          let [v, k] = O(a) ? [...a] : [a];
          if (i.startsWith('gradients.')) {
            const [y, h] = l(v),
              [g, w] = l(k);
            y ? (d = h) : (d = Ou(l(v)[1], { __cssMap: n })),
              g ? (f = w) : (f = Ou(k, { __cssMap: n }));
          } else (d = v), (f = k);
        }
        if (!s) {
          if (i.startsWith('spaces') && !fa(d)) {
            const v = i.split('.'),
              [k, ...y] = v,
              h = `${k}.-${y.join('.')}`,
              g = Rr.negate(d),
              w = Rr.negate(c);
            n[h] = { value: g, var: u, ref: w };
          }
          (o[u] = d),
            f && (o = he(o, { [gr._dark]: { [u]: f } })),
            (n[i] = { value: d, var: u, ref: c });
          continue;
        }
        const [m, x] = l(d);
        if (((o = he(o, { [u]: x })), f)) {
          const [, v] = l(f);
          o = he(o, { [gr._dark]: { [u]: v } });
        }
        n[i] = { value: m ?? d, var: u, ref: c };
      }
      return { cssMap: n, cssVars: o };
    },
  z = {
    accentColor: {
      properties: 'accentColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    alignContent: !0,
    alignItems: !0,
    alignSelf: !0,
    alignTracks: !0,
    all: !0,
    animation: {
      properties: 'animation',
      token: 'animations',
      transform: p.token('animations', p.animation),
    },
    animationComposition: !0,
    animationDelay: !0,
    animationDirection: !0,
    animationDuration: {
      properties: 'animationDuration',
      token: 'transitions.duration',
      transform: p.token('transitions.duration'),
    },
    animationFillMode: !0,
    animationIterationCount: !0,
    animationName: !0,
    animationPlayState: !0,
    animationRange: !0,
    animationRangeEnd: !0,
    animationRangeStart: !0,
    animationTimeline: !0,
    animationTimingFunction: {
      properties: 'animationTimingFunction',
      token: 'transitions.easing',
      transform: p.token('transitions.easing'),
    },
    appearance: !0,
    aspectRatio: !0,
    backfaceVisibility: {
      properties: 'backfaceVisibility',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    background: {
      properties: 'background',
      token: 'colors',
      transform: p.token('colors'),
    },
    backgroundAttachment: !0,
    backgroundBlendMode: !0,
    backgroundClip: { properties: 'backgroundClip', transform: p.bgClip },
    backgroundColor: {
      properties: 'backgroundColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    backgroundImage: {
      properties: 'backgroundImage',
      token: 'gradients',
      transform: p.token('gradients', p.gradient),
    },
    backgroundOrigin: !0,
    backgroundPosition: !0,
    backgroundPositionX: !0,
    backgroundPositionY: !0,
    backgroundRepeat: !0,
    backgroundSize: !0,
    blockSize: {
      properties: 'blockSize',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    border: {
      properties: 'border',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderBlock: {
      properties: 'borderBlock',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderBlockColor: {
      properties: 'borderBlockColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderBlockEnd: {
      properties: 'borderBlockEnd',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderBlockEndColor: {
      properties: 'borderBlockEndColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderBlockEndStyle: !0,
    borderBlockEndWidth: { properties: 'borderBlockEndWidth', transform: p.px },
    borderBlockStart: {
      properties: 'borderBlockStart',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderBlockStartColor: {
      properties: 'borderBlockStartColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderBlockStartStyle: !0,
    borderBlockStartWidth: {
      properties: 'borderBlockStartWidth',
      transform: p.px,
    },
    borderBlockStyle: !0,
    borderBlockWidth: { properties: 'borderBlockWidth', transform: p.px },
    borderBottom: {
      properties: 'borderBottom',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderBottomColor: {
      properties: 'borderBottomColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderBottomLeftRadius: {
      properties: 'borderBottomLeftRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderBottomRightRadius: {
      properties: 'borderBottomRightRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderBottomStyle: !0,
    borderBottomWidth: { properties: 'borderBottomWidth', transform: p.px },
    borderCollapse: !0,
    borderColor: {
      properties: 'borderColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderEndEndRadius: {
      properties: 'borderEndEndRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderEndStartRadius: {
      properties: 'borderEndStartRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderImage: {
      properties: 'borderImage',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderImageOutset: !0,
    borderImageRepeat: !0,
    borderImageSlice: !0,
    borderImageSource: !0,
    borderImageWidth: { properties: 'borderImageWidth', transform: p.px },
    borderInline: {
      properties: 'borderInline',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderInlineColor: {
      properties: 'borderInlineColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderInlineEnd: {
      properties: 'borderInlineEnd',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderInlineEndColor: {
      properties: 'borderInlineEndColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderInlineEndStyle: !0,
    borderInlineEndWidth: {
      properties: 'borderInlineEndWidth',
      transform: p.px,
    },
    borderInlineStart: {
      properties: 'borderInlineStart',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderInlineStartColor: {
      properties: 'borderInlineStartColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderInlineStartStyle: !0,
    borderInlineStartWidth: {
      properties: 'borderInlineStartWidth',
      transform: p.px,
    },
    borderInlineStyle: !0,
    borderInlineWidth: { properties: 'borderInlineWidth', transform: p.px },
    borderLeft: {
      properties: 'borderLeft',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderLeftColor: {
      properties: 'borderLeftColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderLeftStyle: !0,
    borderLeftWidth: { properties: 'borderLeftWidth', transform: p.px },
    borderRadius: {
      properties: 'borderRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderRight: {
      properties: 'borderRight',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderRightColor: {
      properties: 'borderRightColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderRightStyle: !0,
    borderRightWidth: { properties: 'borderRightWidth', transform: p.px },
    borderSpacing: !0,
    borderStartEndRadius: {
      properties: 'borderStartEndRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderStartStartRadius: {
      properties: 'borderStartStartRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderStyle: !0,
    borderTop: {
      properties: 'borderTop',
      token: 'borders',
      transform: p.token('borders', p.px),
    },
    borderTopColor: {
      properties: 'borderTopColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    borderTopLeftRadius: {
      properties: 'borderTopLeftRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderTopRightRadius: {
      properties: 'borderTopRightRadius',
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderTopStyle: !0,
    borderTopWidth: { properties: 'borderTopWidth', transform: p.px },
    borderWidth: { properties: 'borderWidth', transform: p.px },
    bottom: {
      properties: 'bottom',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    boxAlign: !0,
    boxDecorationBreak: !0,
    boxDirection: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxLines: !0,
    boxOrdinalGroup: !0,
    boxOrient: !0,
    boxPack: !0,
    boxShadow: {
      properties: 'boxShadow',
      token: 'shadows',
      transform: p.token('shadows'),
    },
    boxSizing: !0,
    breakAfter: !0,
    breakBefore: !0,
    breakInside: !0,
    captionSide: !0,
    caretColor: {
      properties: 'caretColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    clear: !0,
    clip: !0,
    clipPath: !0,
    color: {
      properties: 'color',
      token: 'colors',
      transform: p.token('colors'),
    },
    columnCount: !0,
    columnFill: !0,
    columnGap: {
      properties: 'columnGap',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    columnRule: { properties: 'columnRule', transform: p.px },
    columnRuleColor: {
      properties: 'columnRuleColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    columnRuleStyle: !0,
    columnRuleWidth: { properties: 'columnRuleWidth', transform: p.px },
    columnSpan: !0,
    columnWidth: { properties: 'columnWidth', transform: p.px },
    columns: !0,
    contain: !0,
    containIntrinsicBlockSize: !0,
    containIntrinsicHeight: !0,
    containIntrinsicInlineSize: !0,
    containIntrinsicSize: !0,
    containIntrinsicWidth: {
      properties: 'containIntrinsicWidth',
      transform: p.px,
    },
    container: !0,
    containerName: !0,
    containerType: !0,
    content: !0,
    contentVisibility: !0,
    counterIncrement: !0,
    counterReset: !0,
    counterSet: !0,
    cursor: !0,
    direction: !0,
    display: !0,
    emptyCells: !0,
    flex: !0,
    flexBasis: {
      properties: 'flexBasis',
      token: 'sizes',
      transform: p.token('sizes', p.px),
    },
    flexDirection: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexWrap: !0,
    float: !0,
    font: !0,
    fontFamily: {
      properties: 'fontFamily',
      token: 'fonts',
      transform: p.token('fonts'),
    },
    fontFeatureSettings: !0,
    fontKerning: !0,
    fontLanguageOverride: !0,
    fontOpticalSizing: !0,
    fontPalette: !0,
    fontSize: {
      properties: 'fontSize',
      token: 'fontSizes',
      transform: p.token('fontSizes', p.px),
    },
    fontSizeAdjust: !0,
    fontSmooth: !0,
    fontStretch: !0,
    fontStyle: !0,
    fontSynthesis: !0,
    fontSynthesisPosition: !0,
    fontSynthesisSmallCaps: !0,
    fontSynthesisStyle: !0,
    fontSynthesisWeight: !0,
    fontVariant: !0,
    fontVariantAlternates: !0,
    fontVariantCaps: !0,
    fontVariantEastAsian: !0,
    fontVariantEmoji: !0,
    fontVariantLigatures: !0,
    fontVariantNumeric: !0,
    fontVariantPosition: !0,
    fontVariationSettings: !0,
    fontWeight: {
      properties: 'fontWeight',
      token: 'fontWeights',
      transform: p.token('fontWeights'),
    },
    forcedColorAdjust: !0,
    gap: {
      properties: 'gap',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    grid: !0,
    gridArea: !0,
    gridAutoColumns: !0,
    gridAutoFlow: !0,
    gridAutoRows: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnStart: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowStart: !0,
    gridTemplate: !0,
    gridTemplateAreas: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    hangingPunctuation: !0,
    height: {
      properties: 'height',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    hyphenateCharacter: !0,
    hyphenateLimitChars: !0,
    hyphens: !0,
    imageOrientation: !0,
    imageRendering: !0,
    imageResolution: !0,
    initialLetter: !0,
    inlineSize: {
      properties: 'inlineSize',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    inset: {
      properties: 'inset',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    insetBlock: {
      properties: 'insetBlock',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    insetBlockEnd: {
      properties: 'insetBlockEnd',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    insetBlockStart: {
      properties: 'insetBlockStart',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    insetInline: {
      properties: 'insetInline',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    insetInlineEnd: {
      properties: 'insetInlineEnd',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    insetInlineStart: {
      properties: 'insetInlineStart',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    isolation: !0,
    justifyContent: !0,
    justifyItems: !0,
    justifySelf: !0,
    justifyTracks: !0,
    left: {
      properties: 'left',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    letterSpacing: {
      properties: 'letterSpacing',
      token: 'letterSpacings',
      transform: p.token('letterSpacings'),
    },
    lineBreak: !0,
    lineHeight: {
      properties: 'lineHeight',
      token: 'lineHeights',
      transform: p.token('lineHeights'),
    },
    lineHeightStep: !0,
    listStyle: !0,
    listStyleImage: !0,
    listStylePosition: !0,
    listStyleType: !0,
    margin: {
      properties: 'margin',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginBlock: {
      properties: 'marginBlock',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginBlockEnd: {
      properties: 'marginBlockEnd',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginBlockStart: {
      properties: 'marginBlockStart',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginBottom: {
      properties: 'marginBottom',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginInline: {
      properties: 'marginInline',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginInlineEnd: {
      properties: 'marginInlineEnd',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginInlineStart: {
      properties: 'marginInlineStart',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginLeft: {
      properties: 'marginLeft',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginRight: {
      properties: 'marginRight',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginTop: {
      properties: 'marginTop',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginTrim: !0,
    mask: !0,
    maskBorder: !0,
    maskBorderMode: !0,
    maskBorderOutset: !0,
    maskBorderRepeat: !0,
    maskBorderSlice: !0,
    maskBorderSource: !0,
    maskBorderWidth: { properties: 'maskBorderWidth', transform: p.px },
    maskClip: !0,
    maskComposite: !0,
    maskImage: !0,
    maskMode: !0,
    maskOrigin: !0,
    maskPosition: !0,
    maskRepeat: !0,
    maskSize: !0,
    maskType: !0,
    masonryAutoFlow: !0,
    mathDepth: !0,
    mathShift: !0,
    mathStyle: !0,
    maxBlockSize: {
      properties: 'maxBlockSize',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    maxHeight: {
      properties: 'maxHeight',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    maxInlineSize: {
      properties: 'maxInlineSize',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    maxWidth: {
      properties: 'maxWidth',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    minBlockSize: {
      properties: 'minBlockSize',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    minHeight: {
      properties: 'minHeight',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    minInlineSize: {
      properties: 'minInlineSize',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    minWidth: {
      properties: 'minWidth',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    mixBlendMode: !0,
    objectFit: !0,
    objectPosition: !0,
    offset: !0,
    offsetAnchor: !0,
    offsetDistance: !0,
    offsetPath: !0,
    offsetPosition: !0,
    offsetRotate: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    outline: !0,
    outlineColor: {
      properties: 'outlineColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    outlineOffset: !0,
    outlineStyle: !0,
    outlineWidth: { properties: 'outlineWidth', transform: p.px },
    overflow: !0,
    overflowAnchor: !0,
    overflowBlock: !0,
    overflowClipMargin: !0,
    overflowInline: !0,
    overflowWrap: !0,
    overflowX: !0,
    overflowY: !0,
    overlay: !0,
    overscrollBehavior: !0,
    overscrollBehaviorBlock: !0,
    overscrollBehaviorInline: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    padding: {
      properties: 'padding',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingBlock: {
      properties: 'paddingBlock',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingBlockEnd: {
      properties: 'paddingBlockEnd',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingBlockStart: {
      properties: 'paddingBlockStart',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingBottom: {
      properties: 'paddingBottom',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingInline: {
      properties: 'paddingInline',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingInlineEnd: {
      properties: 'paddingInlineEnd',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingInlineStart: {
      properties: 'paddingInlineStart',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingLeft: {
      properties: 'paddingLeft',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingRight: {
      properties: 'paddingRight',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingTop: {
      properties: 'paddingTop',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    page: !0,
    pageBreakAfter: !0,
    pageBreakBefore: !0,
    pageBreakInside: !0,
    paintOrder: !0,
    perspective: !0,
    perspectiveOrigin: !0,
    placeContent: !0,
    placeItems: !0,
    placeSelf: !0,
    pointerEvents: !0,
    position: !0,
    printColorAdjust: !0,
    quotes: !0,
    resize: !0,
    right: {
      properties: 'right',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    rowGap: {
      properties: 'rowGap',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    rubyAlign: !0,
    rubyPosition: !0,
    scrollBehavior: !0,
    scrollMargin: {
      properties: 'scrollMargin',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollMarginBlock: !0,
    scrollMarginBlockEnd: !0,
    scrollMarginBlockStart: !0,
    scrollMarginBottom: {
      properties: 'scrollMarginBottom',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollMarginInline: !0,
    scrollMarginInlineEnd: !0,
    scrollMarginInlineStart: !0,
    scrollMarginLeft: {
      properties: 'scrollMarginLeft',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollMarginRight: {
      properties: 'scrollMarginRight',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollMarginTop: {
      properties: 'scrollMarginTop',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollPadding: {
      properties: 'scrollPadding',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollPaddingBlock: !0,
    scrollPaddingBlockEnd: !0,
    scrollPaddingBlockStart: !0,
    scrollPaddingBottom: {
      properties: 'scrollPaddingBottom',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollPaddingInline: !0,
    scrollPaddingInlineEnd: !0,
    scrollPaddingInlineStart: !0,
    scrollPaddingLeft: {
      properties: 'scrollPaddingLeft',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollPaddingRight: {
      properties: 'scrollPaddingRight',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollPaddingTop: {
      properties: 'scrollPaddingTop',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollTimeline: !0,
    scrollTimelineAxis: !0,
    scrollTimelineName: !0,
    scrollbarColor: !0,
    scrollbarGutter: !0,
    scrollbarWidth: { properties: 'scrollbarWidth', transform: p.px },
    shapeImageThreshold: !0,
    shapeMargin: !0,
    shapeOutside: !0,
    tabSize: !0,
    tableLayout: !0,
    textAlign: !0,
    textAlignLast: !0,
    textCombineUpright: !0,
    textDecoration: !0,
    textDecorationColor: {
      properties: 'textDecorationColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    textDecorationLine: !0,
    textDecorationSkip: !0,
    textDecorationSkipInk: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textEmphasis: !0,
    textEmphasisColor: {
      properties: 'textEmphasisColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    textEmphasisPosition: !0,
    textEmphasisStyle: !0,
    textIndent: !0,
    textJustify: !0,
    textOrientation: !0,
    textOverflow: !0,
    textRendering: !0,
    textShadow: {
      properties: 'textShadow',
      token: 'shadows',
      transform: p.token('shadows'),
    },
    textSizeAdjust: !0,
    textTransform: !0,
    textUnderlineOffset: !0,
    textUnderlinePosition: !0,
    textWrap: !0,
    timelineScope: !0,
    top: {
      properties: 'top',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    touchAction: !0,
    transform: { properties: 'transform', transform: p.transform },
    transformBox: !0,
    transformOrigin: !0,
    transformStyle: !0,
    transitionBehavior: !0,
    transitionDelay: !0,
    transitionDuration: {
      properties: 'transitionDuration',
      token: 'transitions.duration',
      transform: p.token('transitions.duration'),
    },
    transitionProperty: {
      properties: 'transitionProperty',
      token: 'transitions.property',
      transform: p.token('transitions.property'),
    },
    transitionTimingFunction: {
      properties: 'transitionTimingFunction',
      token: 'transitions.easing',
      transform: p.token('transitions.easing'),
    },
    translate: !0,
    unicodeBidi: !0,
    userSelect: !0,
    verticalAlign: !0,
    viewTimeline: !0,
    viewTimelineAxis: !0,
    viewTimelineInset: !0,
    viewTimelineName: !0,
    viewTransitionName: !0,
    visibility: !0,
    whiteSpace: !0,
    whiteSpaceCollapse: !0,
    widows: !0,
    width: {
      properties: 'width',
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    willChange: !0,
    wordBreak: !0,
    wordSpacing: !0,
    writingMode: !0,
    zIndex: {
      properties: 'zIndex',
      token: 'zIndices',
      transform: p.token('zIndices'),
    },
    zoom: !0,
    alignmentBaseline: !0,
    azimuth: !0,
    baselineShift: !0,
    clipRule: !0,
    colorInterpolation: !0,
    dominantBaseline: !0,
    fill: { properties: 'fill', token: 'colors', transform: p.token('colors') },
    fillOpacity: !0,
    fillRule: !0,
    floodColor: {
      properties: 'floodColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    floodOpacity: !0,
    glyphOrientationVertical: !0,
    lightingColor: {
      properties: 'lightingColor',
      token: 'colors',
      transform: p.token('colors'),
    },
    markerEnd: !0,
    markerMid: !0,
    markerStart: !0,
    shapeRendering: !0,
    stopColor: !0,
    stopOpacity: !0,
    stroke: {
      properties: 'stroke',
      token: 'colors',
      transform: p.token('colors'),
    },
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeLinecap: !0,
    strokeLinejoin: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: { properties: 'strokeWidth', transform: p.px },
    textAnchor: !0,
    vectorEffect: !0,
    marginX: {
      properties: ['marginInlineStart', 'marginInlineEnd'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    marginY: {
      properties: ['marginTop', 'marginBottom'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingX: {
      properties: ['paddingInlineStart', 'paddingInlineEnd'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    paddingY: {
      properties: ['paddingTop', 'paddingBottom'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollMarginX: {
      properties: ['scrollMarginLeft', 'scrollMarginRight'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollMarginY: {
      properties: ['scrollMarginTop', 'scrollMarginBottom'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollPaddingX: {
      properties: ['scrollPaddingLeft', 'scrollPaddingRight'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scrollPaddingY: {
      properties: ['scrollPaddingTop', 'scrollPaddingBottom'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    insetX: {
      properties: ['left', 'right'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    insetY: {
      properties: ['top', 'bottom'],
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    borderY: {
      properties: ['borderTop', 'borderBottom'],
      token: 'borders',
      transform: p.token('borders'),
    },
    borderX: {
      properties: ['borderLeft', 'borderRight'],
      token: 'borders',
      transform: p.token('borders'),
    },
    borderTopRadius: {
      properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderBottomRadius: {
      properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderRightRadius: {
      properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderLeftRadius: {
      properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderInlineStartRadius: {
      properties: ['borderStartStartRadius', 'borderStartEndRadius'],
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    borderInlineEndRadius: {
      properties: ['borderEndStartRadius', 'borderEndEndRadius'],
      token: 'radii',
      transform: p.token('radii', p.px),
    },
    boxSize: {
      properties: ['width', 'height'],
      token: 'sizes',
      transform: p.token('sizes', p.fraction(p.px)),
    },
    minBoxSize: { properties: ['minWidth', 'minHeight'] },
    maxBoxSize: { properties: ['maxWidth', 'maxHeight'] },
    translateX: {
      properties: '--ui-translate-x',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    translateY: {
      properties: '--ui-translate-y',
      token: 'spaces',
      transform: p.token('spaces', p.px),
    },
    scale: { properties: ['--ui-scale-x', '--ui-scale-y'] },
    scaleX: { properties: '--ui-scale-x' },
    scaleY: { properties: '--ui-scale-y' },
    rotate: { properties: '--ui-rotate', transform: p.deg },
    skewX: { properties: '--ui-skew-x', transform: p.deg },
    skewY: { properties: '--ui-skew-y', transform: p.deg },
    filter: { transform: p.filter() },
    blur: {
      properties: '--ui-blur',
      token: 'blurs',
      transform: p.token('blurs', p.function('blur')),
    },
    brightness: {
      properties: '--ui-brightness',
      transform: p.function('brightness'),
    },
    contrast: {
      properties: '--ui-contrast',
      transform: p.function('contrast'),
    },
    dropShadow: {
      properties: '--ui-drop-shadow',
      token: 'shadows',
      transform: p.token('shadows', p.function('drop-shadow')),
    },
    grayscale: {
      properties: '--ui-grayscale',
      transform: p.function('grayscale'),
    },
    hueRotate: {
      properties: '--ui-hue-rotate',
      transform: p.function('hue-rotate', p.deg),
    },
    invert: { properties: '--ui-invert', transform: p.function('invert') },
    saturate: {
      properties: '--ui-saturate',
      transform: p.function('saturate'),
    },
    sepia: { properties: '--ui-sepia', transform: p.function('sepia') },
    backdropFilter: { transform: p.filter('backdrop') },
    backdropBlur: {
      properties: '--ui-backdrop-blur',
      token: 'blurs',
      transform: p.token('blurs', p.function('blur')),
    },
    backdropBrightness: {
      properties: '--ui-backdrop-brightness',
      transform: p.function('brightness'),
    },
    backdropContrast: {
      properties: '--ui-backdrop-contrast',
      transform: p.function('contrast'),
    },
    backdropDropShadow: {
      properties: '--ui-backdrop-drop-shadow',
      token: 'shadows',
      transform: p.token('shadows', p.function('drop-shadow')),
    },
    backdropGrayscale: {
      properties: '--ui-backdrop-grayscale',
      transform: p.function('grayscale'),
    },
    backdropHueRotate: {
      properties: '--ui-backdrop-hue-rotate',
      transform: p.function('hue-rotate', p.deg),
    },
    backdropInvert: {
      properties: '--ui-backdrop-invert',
      transform: p.function('invert'),
    },
    backdropSaturate: {
      properties: '--ui-backdrop-saturate',
      transform: p.function('saturate'),
    },
    backdropSepia: {
      properties: '--ui-backdrop-sepia',
      transform: p.function('sepia'),
    },
    lineClamp: {
      properties: '--ui-line-clamp',
      isSkip: !0,
      static: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 'var(--ui-line-clamp)',
      },
    },
    isTruncated: { isSkip: !0, transform: p.isTruncated },
    layerStyle: {
      isProcessResult: !0,
      isSkip: !0,
      transform: p.styles('layerStyles'),
    },
    textStyle: {
      isProcessResult: !0,
      isSkip: !0,
      transform: p.styles('textStyles'),
    },
    apply: { isProcessResult: !0, isSkip: !0, transform: p.styles() },
    var: { isProcessSkip: !0, isSkip: !0, transform: p.var },
    colorMode: { properties: 'colorScheme' },
  },
  lw = {
    accent: z.accentColor,
    bg: z.background,
    bgAttachment: { properties: 'backgroundAttachment' },
    bgBlendMode: { properties: 'backgroundBlendMode' },
    bgClip: z.backgroundClip,
    bgColor: z.backgroundColor,
    bgImage: z.backgroundImage,
    bgImg: z.backgroundImage,
    bgGradient: z.backgroundImage,
    bgOrigin: { properties: 'backgroundOrigin' },
    bgPosition: { properties: 'backgroundPosition' },
    bgPositionX: { properties: 'backgroundPositionX' },
    bgPosX: { properties: 'backgroundPositionX' },
    bgPositionY: { properties: 'backgroundPositionY' },
    bgPosY: { properties: 'backgroundPositionY' },
    bgRepeat: { properties: 'backgroundRepeat' },
    bgSize: { properties: 'backgroundSize' },
    roundedBottomLeft: z.borderBottomLeftRadius,
    roundedBottomRight: z.borderBottomRightRadius,
    borderBottomEndRadius: z.borderEndEndRadius,
    roundedBottomEnd: z.borderEndEndRadius,
    borderBottomStartRadius: z.borderEndStartRadius,
    roundedBottomStart: z.borderEndStartRadius,
    borderEnd: z.borderInlineEnd,
    borderEndColor: z.borderInlineEndColor,
    borderEndStyle: { properties: 'borderInlineEndStyle' },
    borderEndWidth: z.borderInlineEndWidth,
    borderStart: z.borderInlineStart,
    borderStartColor: z.borderInlineStartColor,
    borderStartStyle: { properties: 'borderInlineStartStyle' },
    borderStartWidth: z.borderInlineStartWidth,
    rounded: z.borderRadius,
    borderTopEndRadius: z.borderStartEndRadius,
    roundedTopEnd: z.borderStartEndRadius,
    borderTopStartRadius: z.borderStartStartRadius,
    roundedTopStart: z.borderStartStartRadius,
    roundedTopLeft: z.borderTopLeftRadius,
    roundedTopRight: z.borderTopRightRadius,
    shadow: z.boxShadow,
    caret: z.caretColor,
    textColor: z.color,
    gx: z.columnGap,
    gapX: z.columnGap,
    flexDir: { properties: 'flexDirection' },
    text: z.fontSize,
    g: z.gap,
    h: z.height,
    insetEnd: z.insetInlineEnd,
    insetStart: z.insetInlineStart,
    tracking: z.letterSpacing,
    leading: z.lineHeight,
    listStyleImg: { properties: 'listStyleImage' },
    listStylePos: { properties: 'listStylePosition' },
    m: z.margin,
    mb: z.marginBottom,
    me: z.marginInlineEnd,
    marginEnd: z.marginInlineEnd,
    ms: z.marginInlineStart,
    marginStart: z.marginInlineStart,
    ml: z.marginLeft,
    mr: z.marginRight,
    mt: z.marginTop,
    maxH: z.maxHeight,
    maxW: z.maxWidth,
    minH: z.minHeight,
    minW: z.minWidth,
    blendMode: { properties: 'mixBlendMode' },
    overscroll: { properties: 'overscrollBehavior' },
    overscrollX: { properties: 'overscrollBehaviorX' },
    overscrollY: { properties: 'overscrollBehaviorY' },
    p: z.padding,
    pb: z.paddingBottom,
    pe: z.paddingInlineEnd,
    paddingEnd: z.paddingInlineEnd,
    ps: z.paddingInlineStart,
    paddingStart: z.paddingInlineStart,
    pl: z.paddingLeft,
    pr: z.paddingRight,
    pt: z.paddingTop,
    pos: { properties: 'position' },
    gy: z.rowGap,
    gapY: z.rowGap,
    textDecor: { properties: 'textDecoration' },
    w: z.width,
    z: z.zIndex,
    mx: z.marginX,
    my: z.marginY,
    px: z.paddingX,
    py: z.paddingY,
    roundedTop: z.borderTopRadius,
    roundedBottom: z.borderBottomRadius,
    roundedRight: z.borderRightRadius,
    roundedLeft: z.borderLeftRadius,
    borderStartRadius: z.borderInlineStartRadius,
    roundedStart: z.borderInlineStartRadius,
    borderEndRadius: z.borderInlineEndRadius,
    roundedEnd: z.borderInlineEndRadius,
  },
  pd = { ...z, ...lw },
  uw = ['var'],
  cw = Object.keys(pd),
  Rp = (e) => uw.includes(e),
  dw = (e, t) => ({ [e]: t[0], [gr._dark]: { [e]: t[1] } }),
  fw = (e, t, r) =>
    r.reduce((n, { breakpoint: o, query: i }) => {
      const s = t[o];
      return i ? (n[i] = { [e]: s }) : (n[e] = t[o]), n;
    }, {}),
  pw = (e, t) => (r) => {
    if (!r.__breakpoints) return e;
    const { isResponsive: n, queries: o } = r.__breakpoints;
    let i = {};
    for (let [s, a] of Object.entries(e))
      if (((a = et(a, r)), a != null)) {
        if (O(a) && !(Rp(s) && !t)) {
          i = he(i, dw(s, a));
          continue;
        }
        if (xe(a) && n(a) && !(Rp(s) && !t)) {
          i = he(i, fw(s, a, o));
          continue;
        }
        i[s] = a;
      }
    return i;
  },
  hw = ({ theme: e, styles: t = {}, pseudos: r = {} }) => {
    const n = (o, i = !1) => {
      var s, a, l;
      const u = et(o, e),
        c = pw(u, i)(e);
      let d = {};
      for (let [f, m] of Object.entries(c)) {
        if (((m = et(m, e)), m == null)) continue;
        f in r && (f = r[f]);
        let x = t[f];
        if (
          (x === !0 && (x = { properties: f }),
          xe(m) && !(x != null && x.isProcessSkip))
        ) {
          (d[f] = (s = d[f]) != null ? s : {}), (d[f] = he(d[f], n(m, !0)));
          continue;
        }
        if (
          ((m =
            (l =
              (a = x == null ? void 0 : x.transform) == null
                ? void 0
                : a.call(x, m, e)) != null
              ? l
              : m),
          ((x != null && x.isProcessResult) ||
            (x != null && x.isProcessSkip)) &&
            (m = n(m, !0)),
          !i && x != null && x.static)
        ) {
          const k = et(x.static, e);
          d = he(d, k);
        }
        const v = et(x == null ? void 0 : x.properties, e);
        if (v)
          if (O(v)) {
            for (const k of v) d[k] = m;
            continue;
          } else if (xe(m)) {
            d = he(d, m);
            continue;
          } else {
            d[v] = m;
            continue;
          }
        if (xe(m)) {
          d = he(d, m);
          continue;
        }
        d[f] = m;
      }
      return d;
    };
    return n;
  },
  Ta = (e) => (t) => hw({ theme: t, styles: pd, pseudos: gr })(e),
  Mp = [
    'blurs',
    'borders',
    'colors',
    'fonts',
    'fontSizes',
    'fontWeights',
    'letterSpacings',
    'lineHeights',
    'radii',
    'shadows',
    'sizes',
    'spaces',
    'zIndices',
  ],
  $p = ['gradients'],
  mw = (e, t) => {
    var r;
    e = gw(e);
    const { breakpoints: n, themeSchemes: o } = e ?? {},
      i = (r = t == null ? void 0 : t.var) == null ? void 0 : r.prefix,
      s = Zr(e),
      a = Zr(e, 'secondary'),
      l = Zr(e, 'animation');
    let { cssMap: u, cssVars: c } = jp(qr(s, i), qr(a, i), qr(l, i))();
    if (o)
      for (const [f, m] of Object.entries(o)) {
        const x = Zr(m),
          v = Zr(m, 'secondary'),
          k = Zr(m, 'animation');
        let { cssVars: y } = jp(
          qr(x, i),
          qr(v, i),
          qr(k, i),
        )({ ...s, ...a, ...l });
        c = {
          ...c,
          [`[data-theme=${f}] &:not([data-theme]), &[data-theme=${f}]`]: y,
        };
      }
    return (
      Object.assign(e, {
        __config: t,
        __cssVars: { ...{}, ...c },
        __cssMap: u,
        __breakpoints: JS(n, t == null ? void 0 : t.breakpoint),
      }),
      e
    );
  },
  Zr = (e, t = 'primary') => {
    var r;
    let n = [],
      o = [],
      i = [];
    switch (t) {
      case 'primary':
        (n = [...Mp, 'transitions']),
          (o = [...Mp, 'transitions', 'colorSchemes']);
        break;
      case 'secondary':
        (n = [...$p]), (o = [...$p]);
        break;
      case 'animation':
        (n = ['animations']), (o = ['animations']), (i = ['keyframes']);
        break;
    }
    const s = $u(e, n),
      a = $u((r = e.semantics) != null ? r : {}, o),
      l = Object.entries(ju(s, 1 / 0, i)).map(([c, d]) => [
        c,
        { isSemantic: !1, value: d },
      ]),
      u = Object.entries(ju(a, 1 / 0, i)).reduce((c, [d, f]) => {
        if (d.startsWith('colorSchemes.')) {
          const [, m] = d.split('.');
          _b.forEach((x) => {
            const v = { isSemantic: !0, value: `${f}.${x}` };
            c.push([`colors.${m}.${x}`, v]);
          });
        } else {
          const m = { isSemantic: !0, value: f };
          c.push([d, m]);
        }
        return c;
      }, []);
    return jb([...l, ...u]);
  },
  jp =
    (...e) =>
    (t) => {
      let r = {},
        n = {};
      for (const o of e) {
        const { cssMap: i, cssVars: s } = o({
          baseTokens: t,
          cssMap: r,
          cssVars: n,
        });
        (r = { ...r, ...i }), (n = { ...n, ...s });
      }
      return { cssMap: r, cssVars: n };
    },
  gw = (e) => oi(e, ['__cssMap', '__cssVar', '__breakpoints']),
  si = (e) => oi(e, ['size', 'variant', 'colorScheme']),
  Hg =
    (e, ...t) =>
    ({ omit: r = [], pick: n = [] } = {}) =>
      t.reduce((o, i) => Ls(Ug(o)({ omit: r, pick: n }), i), e),
  be =
    (e, ...t) =>
    ({ omit: r = [], pick: n = [] } = {}) =>
      t.reduce((o, i) => Ls(Ug(o)({ omit: r, pick: n, isMulti: !0 }), i), e),
  Ls = (e, t) => {
    let r = Object.assign({}, e);
    if (xe(t) && xe(e))
      for (const [n, o] of Object.entries(t)) {
        const i = e[n];
        e.hasOwnProperty(n)
          ? !Ur(i) && !Ur(o)
            ? (r[n] = Ls(i, o))
            : (r[n] = (s) => Ls(et(i, s), et(o, s)))
          : Object.assign(r, { [n]: o });
      }
    else r = t;
    return r;
  },
  Ug =
    (e) =>
    ({ omit: t, pick: r, isMulti: n = !1 }) => (
      xe(e) &&
        (t.length && (e = Is(e, t, n)(oi)), r.length && (e = Is(e, r, n)($u))),
      e
    ),
  Is =
    (e, t, r, n = []) =>
    (o) => (
      xe(e) &&
        ((e = o(e, t)),
        Object.entries(e ?? {}).forEach(([i, s]) => {
          const a = t.filter((u) => u !== i),
            l = [...n, i];
          yw(l, r) &&
            (Ur(s)
              ? (e[i] = (u) => Is(s(u), a, r, l)(o))
              : (e[i] = Is(s, a, r, l)(o)));
        })),
      e
    ),
  yw = (e, t) => {
    switch (e[0]) {
      case 'baseStyle':
        return e.length < (t ? 2 : 1);
      case 'variants':
      case 'sizes':
        return e.length < (t ? 3 : 2);
      default:
        return !1;
    }
  },
  vw = (e, t, r = !0) => {
    const n = {};
    return (
      Object.entries(e).forEach(([o, i]) => {
        switch (o) {
          case 'baseStyle':
            Ur(i) ? (n[o] = (s) => i(s)[t]) : (n[o] = i[t]);
            break;
          case 'variants':
          case 'sizes':
            n[o] = Object.entries(i).reduce(
              (s, [a, l]) => (
                Ur(l) ? (s[a] = (u) => l(u)[t]) : (s[a] = l[t]), s
              ),
              {},
            );
            break;
          case 'defaultProps':
            r && (n[o] = i);
            break;
        }
      }),
      n
    );
  },
  yl = 'ui-color-mode',
  Gg = !!(globalThis != null && globalThis.document),
  Lp = (e) => ({
    ssr: !1,
    type: 'localStorage',
    get: (t = 'light') => {
      if (!Gg) return t;
      try {
        return localStorage.getItem(e) || t;
      } catch {
        return t;
      }
    },
    set: (t) => {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  }),
  Ip = (e, t) => {
    const r = e.match(new RegExp(`(^| )${t}=([^;]+)`));
    return r == null ? void 0 : r[2];
  },
  vl = (e, t) => ({
    ssr: !!t,
    type: 'cookie',
    get: (r = 'light') =>
      t ? Ip(t, e) || r : (Gg && Ip(document.cookie, e)) || r,
    set: (r) => {
      document.cookie = `${e}=${r}; max-age=31536000; path=/`;
    },
  }),
  xw = {
    localStorage: Lp(yl),
    cookieStorage: vl(yl),
    ssr: (e) => vl(yl, e),
    createLocalStorage: Lp,
    createCookieStorage: vl,
  },
  Ri = { light: 'ui-light', dark: 'ui-dark' },
  bw = {
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)',
  },
  Sw = ({ isPreventTransition: e = !0 }) => {
    const t = (a) => {
        const l = e ? s() : void 0;
        (document.documentElement.dataset.mode = a),
          (document.documentElement.style.colorScheme = a),
          l == null || l();
      },
      r = (a) => {
        document.body.classList.add(a ? Ri.dark : Ri.light),
          document.body.classList.remove(a ? Ri.light : Ri.dark);
      },
      n = () => window.matchMedia(bw.dark),
      o = (a) => {
        var l;
        return ((l = n().matches) != null ? l : a === 'dark')
          ? 'dark'
          : 'light';
      },
      i = (a) => {
        const l = n(),
          u = (c) => {
            a(c.matches ? 'dark' : 'light');
          };
        return (
          typeof l.addListener == 'function'
            ? l.addListener(u)
            : l.addEventListener('change', u),
          () => {
            typeof l.removeListener == 'function'
              ? l.removeListener(u)
              : l.removeEventListener('change', u);
          }
        );
      },
      s = () => {
        const a = document.createElement('style'),
          l = document.createTextNode(
            '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
          );
        return (
          a.appendChild(l),
          document.head.appendChild(a),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(a);
                });
              });
          }
        );
      };
    return {
      setDataset: t,
      setClassName: r,
      query: n,
      getSystemColorMode: o,
      addListener: i,
      preventTransition: s,
    };
  },
  { localStorage: ww } = xw,
  kw = (e, t) => (e.type === 'cookie' && e.ssr ? e.get(t) : t),
  Yg = S.createContext({}),
  Cw = ({
    colorMode: e,
    colorModeManager: t = ww,
    config: {
      initialColorMode: r = 'light',
      disableTransitionOnChange: n = !0,
    } = {},
    children: o,
  }) => {
    const [i, s] = S.useState(() => kw(t, r)),
      [a, l] = S.useState(void 0),
      c = i === 'system' ? a || (r === 'dark' ? 'dark' : 'light') : i,
      {
        getSystemColorMode: d,
        setClassName: f,
        setDataset: m,
        addListener: x,
      } = S.useMemo(() => Sw({ isPreventTransition: n }), [n]),
      v = S.useCallback(
        (g) => {
          const w = g === 'system' ? d() : g;
          s(g), f(w === 'dark'), m(w), t.set(g);
        },
        [t, d, f, m],
      ),
      k = S.useCallback(
        (g) => {
          l(g), i === 'system' && (f(g === 'dark'), m(g));
        },
        [i, f, m],
      ),
      y = S.useCallback(() => {
        v(c === 'dark' ? 'light' : 'dark');
      }, [v, c]);
    Ms(() => {
      l(d());
    }, [r, x, v]),
      S.useEffect(() => {
        const g = t.get();
        g && v(g);
      }, [v, t]),
      S.useEffect(() => x(k), [x, k]);
    const h = S.useMemo(
      () => ({
        colorMode: e ?? c,
        internalColorMode: i,
        changeColorMode: e ? dp : v,
        toggleColorMode: e ? dp : y,
        forced: e !== void 0,
      }),
      [e, c, i, v, y],
    );
    return b.jsx(Yg.Provider, { value: h, children: o });
  },
  Wn = () => {
    const e = S.useContext(Yg);
    if (e === void 0)
      throw new Error('useColorMode must be used within a ColorModeProvider');
    return e;
  },
  _w = (e, t) => {
    const { colorMode: r } = Wn();
    return r === 'light' ? e : t;
  },
  xl = 'ui-theme-scheme',
  Xg = !!(globalThis != null && globalThis.document),
  Bp = (e) => ({
    ssr: !1,
    type: 'localStorage',
    get: (t = 'base') => {
      if (!Xg) return t;
      try {
        return localStorage.getItem(e) || t;
      } catch {
        return t;
      }
    },
    set: (t) => {
      try {
        localStorage.setItem(e, String(t));
      } catch {}
    },
  }),
  Dp = (e, t) => {
    const r = e.match(new RegExp(`(^| )${t}=([^;]+)`));
    return r == null ? void 0 : r[2];
  },
  bl = (e, t) => ({
    ssr: !!t,
    type: 'cookie',
    get: (r = 'base') =>
      t ? Dp(t, e) || r : (Xg && Dp(document.cookie, e)) || r,
    set: (r) => {
      document.cookie = `${e}=${r}; max-age=31536000; path=/`;
    },
  }),
  Pw = {
    localStorage: Bp(xl),
    cookieStorage: bl(xl),
    ssr: (e) => bl(xl, e),
    createLocalStorage: Bp,
    createCookieStorage: bl,
  },
  { localStorage: Ew } = Pw,
  Tw = ({
    theme: e = {},
    config: t,
    themeSchemeManager: r = Ew,
    children: n,
  }) => {
    const [o, i] = S.useState(r.get(t == null ? void 0 : t.initialThemeScheme)),
      s = S.useCallback(
        (l) => {
          const u = t != null && t.disableTransitionOnChange ? Mw() : void 0;
          (document.documentElement.dataset.theme = l),
            u == null || u(),
            i(l),
            r.set(l);
        },
        [t, r],
      ),
      a = S.useMemo(() => mw(e, t), [e, t]);
    return (
      S.useEffect(() => {
        const l = r.get();
        l && s(l);
      }, [s, r]),
      b.jsxs(NS, {
        theme: { themeScheme: o, changeThemeScheme: s, ...a },
        children: [b.jsx(zw, {}), n],
      })
    );
  },
  zw = () =>
    b.jsx(fd, {
      styles: ({ __cssVars: e }) => ({ ':host, :root, [data-mode]': e }),
    }),
  Aw = () => {
    const { colorMode: e } = Wn();
    return b.jsx(fd, {
      styles: (t) => {
        const { themeScheme: r } = t;
        let n = B(t, 'styles.resetStyle', {});
        const o = et(n, { theme: t, colorMode: e, themeScheme: r });
        if (o) return Ta(o)(t);
      },
    });
  },
  Rw = () => {
    const { colorMode: e } = Wn();
    return b.jsx(fd, {
      styles: (t) => {
        const { themeScheme: r } = t;
        let n = B(t, 'styles.globalStyle', {});
        const o = et(n, { theme: t, colorMode: e, themeScheme: r });
        if (o) return Ta(o)(t);
      },
    });
  },
  Hn = () => {
    const { themeScheme: e, changeThemeScheme: t, ...r } = S.useContext(Yo);
    if (!r)
      throw Error(
        'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
      );
    const n = S.useMemo(() => {
      var i;
      if (fa(e) || e === 'base') return r;
      const s = (i = r.themeSchemes) == null ? void 0 : i[e];
      return s ? he(r, s) : r;
    }, [e, r]);
    return S.useMemo(
      () => ({
        themeScheme: e,
        changeThemeScheme: t,
        theme: n,
        internalTheme: r,
      }),
      [e, t, n, r],
    );
  },
  Mw = () => {
    const e = document.createElement('style'),
      t = document.createTextNode(
        '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
      );
    return (
      e.appendChild(t),
      document.head.appendChild(e),
      () => {
        window.getComputedStyle(document.body),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              document.head.removeChild(e);
            });
          });
      }
    );
  },
  $w =
    (e, t, r) =>
    ({ isMulti: n }) => {
      const [o, i] = e,
        s = Vr(t[o], r)({ isMulti: n, query: gr._light }),
        a = Vr(t[i], r)({ isMulti: n, query: gr._dark });
      return [s, a];
    },
  jw =
    (e, t, r) =>
    ({ isMulti: n }) => {
      var o, i;
      const s = wg(e);
      if (s.length === 1 && 'base' in e)
        return Vr(t[e.base], r)({ isMulti: n });
      {
        const { queries: a = [] } =
            (o = r.theme.__breakpoints) != null ? o : {},
          { breakpoint: l } = (i = r.theme.__config) != null ? i : {},
          u = l === 'down',
          c = a
            .filter(({ breakpoint: f }) => f !== 'base' && s.includes(f))
            .sort((f, m) => {
              var x, v, k, y;
              return u
                ? ((x = f.maxW) != null ? x : 0) -
                    ((v = m.maxW) != null ? v : 0)
                : ((k = m.minW) != null ? k : 0) -
                    ((y = f.minW) != null ? y : 0);
            })[0];
        let d = !1;
        return a.reduce(
          (
            f,
            { breakpoint: m, minW: x, maxW: v, maxWQuery: k, minWQuery: y },
            h,
          ) => {
            var g;
            const w = e[m],
              C = m === c.breakpoint;
            if (m === 'base' || !w) return f;
            if (!d) {
              const T = e.base,
                L = a[h - 1],
                $ = L == null ? void 0 : L[u ? 'minWQuery' : 'maxWQuery'],
                Y = Vr(t[T], r)({ isMulti: n, query: $ });
              (f = he(f, Y)), (d = !0);
            }
            let P = u ? k : y;
            if (!C) {
              let T = h + 1,
                L;
              for (; T < a.length; ) {
                const $ = (g = a[T]) != null ? g : {};
                if (e[$.breakpoint]) {
                  const Y = T - 1;
                  L = a[Y];
                  break;
                }
                T += 1;
              }
              (x = u ? (L == null ? void 0 : L.minW) : x),
                (v = u ? v : L == null ? void 0 : L.maxW),
                (P = rs(x, v));
            }
            const _ = Vr(t[w], r)({ isMulti: n, query: P });
            return (f = he(f, _)), f;
          },
          {},
        );
      }
    },
  Vp =
    (e, t, r) =>
    ({ isMulti: n }) => {
      let o = {};
      if (O(e)) {
        const [i, s] = $w(e, t, r)({ isMulti: n });
        o = he(i, s);
      } else
        xe(e)
          ? (o = jw(e, t, r)({ isMulti: n }))
          : (o = Vr(t[e], r)({ isMulti: n }));
      return o;
    },
  Vr =
    (e, t) =>
    ({ isMulti: r, query: n }) => {
      let o = et(e, t);
      if (r)
        for (const [i, s] of Object.entries(o ?? {})) {
          const a = et(s, t);
          n ? (o = he(o, { [i]: { [n]: a } })) : (o = he(o, { [i]: a }));
        }
      else if (n) return { [n]: o };
      return o;
    },
  Kg = (e, t, r = !1) => {
    var n, o, i, s;
    const { theme: a, themeScheme: l } = Hn(),
      { colorMode: u } = Wn(),
      c = B(a, `components.${e}`),
      d = S.useRef({}),
      f = S.useRef({});
    if (
      ((t = he(
        (n = c == null ? void 0 : c.defaultProps) != null ? n : {},
        od(t),
      )),
      c)
    ) {
      const x = oi(t, ['children']);
      let v = Vr((o = c.baseStyle) != null ? o : {}, {
        theme: a,
        colorMode: u,
        themeScheme: l,
        ...x,
      })({ isMulti: r });
      const k = Vp(t.variant, (i = c.variants) != null ? i : {}, {
          theme: a,
          colorMode: u,
          themeScheme: l,
          ...x,
        })({ isMulti: r }),
        y = Vp(t.size, (s = c.sizes) != null ? s : {}, {
          theme: a,
          colorMode: u,
          themeScheme: l,
          ...x,
        })({ isMulti: r });
      (v = he(v, y)), (v = he(v, k)), gp(f.current, v) || (f.current = v);
    }
    return gp(d.current, t) || (d.current = t), [f.current, d.current];
  },
  hd = (e, t) => Kg(e, t),
  Qg = (e, t) => Kg(e, t, !0),
  Lw = new Set([
    ...cw,
    ...sw,
    'textStyle',
    'layerStyle',
    'apply',
    'lineClamp',
    'focusBorderColor',
    'errorBorderColor',
    'as',
    '__css',
    'css',
    'sx',
  ]),
  Iw = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate']),
  Bw = (e) => Iw.has(e) || !Lw.has(e),
  Dw = Vb(Du),
  Vw = { ...pd, ...gr },
  Ow =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: o, sx: i, ...s } = t,
        a = Sg(s, (c) => c in Vw),
        l = et(e, t),
        u = Ta(Db({}, o, l, od(a), i))(r);
      return n ? [u, n] : u;
    },
  Sl = (e, { baseStyle: t, ...r } = {}) => {
    r.shouldForwardProp || (r.shouldForwardProp = Bw);
    const n = Ow({ baseStyle: t }),
      o = Dw(e, r)(n),
      i = S.forwardRef((s, a) => {
        const { colorMode: l, forced: u } = Wn();
        return S.createElement(o, {
          ref: a,
          'data-mode': u ? l : void 0,
          ...s,
        });
      });
    return (i.displayName = 'UIComponent'), i;
  },
  Nw = () => {
    const e = new Map();
    return new Proxy(Sl, {
      apply: (t, r, [n, o]) => Sl(n, o),
      get: (t, r) => (e.has(r) || e.set(r, Sl(r)), e.get(r)),
    });
  },
  K = Nw(),
  Fu = (e, t) => {
    var r, n, o;
    const { theme: i } = Hn(),
      { colorMode: s } = Wn();
    e === 'layerStyles' && (e = 'styles.layerStyles'),
      e === 'textStyles' && (e = 'styles.textStyles'),
      e === 'transitionProperty' && (e = 'transitions.property'),
      e === 'transitionDuration' && (e = 'transitions.duration'),
      e === 'transitionEasing' && (e = 'transitions.easing');
    let a = B(i, `${e}.${t}`);
    if (fa(a))
      if (
        ((a = B(i, `semantics.${e}.${t}`)),
        O(a)
          ? (a = [
              (r = B(i, `${e}.${a[0]}`)) != null ? r : a[0],
              (n = B(i, `${e}.${a[1]}`)) != null ? n : a[1],
            ])
          : (a = (o = B(i, `${e}.${a}`)) != null ? o : a),
        O(a))
      ) {
        const [l, u] = a;
        if (((a = s === 'light' ? l : u), O(a))) {
          const [c, d] = a;
          return s === 'light' ? c : d;
        } else return a;
      } else return a;
    else if (O(a)) {
      const [l, u] = a;
      return s === 'light' ? l : u;
    } else return a;
  },
  Ye = ue(({ as: e, viewBox: t, size: r, className: n, __css: o, ...i }, s) => {
    const a = Lb(r, (u) => (sb(u) ? u : Fu('fontSizes', u))),
      l = {
        w: '1em',
        h: '1em',
        display: 'inline-block',
        lineHeight: '1em',
        flexShrink: 0,
        color: 'currentColor',
        ...o,
      };
    return e && typeof e != 'string'
      ? b.jsx(K.svg, {
          as: e,
          className: le('ui-icon', n),
          __css: l,
          boxSize: a,
          ...i,
        })
      : b.jsx(K.svg, {
          ref: s,
          verticalAlign: 'middle',
          viewBox: t,
          className: le('ui-icon', n),
          __css: l,
          boxSize: a,
          ...i,
        });
  }),
  Fw = (e) =>
    b.jsx(Ye, {
      viewBox: '0 0 24 24',
      ...e,
      children: b.jsx('path', {
        fill: 'currentColor',
        d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
      }),
    }),
  Ww = (e) =>
    b.jsx(Ye, {
      viewBox: '0 0 24 24',
      ...e,
      children: b.jsx('path', {
        fill: 'currentColor',
        d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
      }),
    }),
  Op = (e) =>
    b.jsx(Ye, {
      viewBox: '0 0 24 24',
      ...e,
      children: b.jsx('path', {
        fill: 'currentColor',
        d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
      }),
    }),
  Hw = (e) =>
    b.jsx(Ye, {
      focusable: 'false',
      'aria-hidden': !0,
      viewBox: '0 0 24 24',
      ...e,
      children: b.jsx('path', {
        fill: 'currentColor',
        d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
      }),
    }),
  Uw = ue(({ color: e, duration: t = '1.8s', ...r }, n) =>
    b.jsx(Ye, {
      ref: n,
      viewBox: '0 0 44 44',
      stroke: e,
      ...r,
      children: b.jsxs('g', {
        fill: 'none',
        fillRule: 'evenodd',
        strokeWidth: '2',
        children: [
          b.jsxs('circle', {
            cx: '22',
            cy: '22',
            r: '1',
            children: [
              b.jsx('animate', {
                attributeName: 'r',
                begin: '0s',
                dur: t,
                values: '1; 20',
                calcMode: 'spline',
                keyTimes: '0; 1',
                keySplines: '0.165, 0.84, 0.44, 1',
                repeatCount: 'indefinite',
              }),
              b.jsx('animate', {
                attributeName: 'stroke-opacity',
                begin: '0s',
                dur: t,
                values: '1; 0',
                calcMode: 'spline',
                keyTimes: '0; 1',
                keySplines: '0.3, 0.61, 0.355, 1',
                repeatCount: 'indefinite',
              }),
            ],
          }),
          b.jsxs('circle', {
            cx: '22',
            cy: '22',
            r: '1',
            children: [
              b.jsx('animate', {
                attributeName: 'r',
                begin: '-0.9s',
                dur: t,
                values: '1; 20',
                calcMode: 'spline',
                keyTimes: '0; 1',
                keySplines: '0.165, 0.84, 0.44, 1',
                repeatCount: 'indefinite',
              }),
              b.jsx('animate', {
                attributeName: 'stroke-opacity',
                begin: '-0.9s',
                dur: t,
                values: '1; 0',
                calcMode: 'spline',
                keyTimes: '0; 1',
                keySplines: '0.3, 0.61, 0.355, 1',
                repeatCount: 'indefinite',
              }),
            ],
          }),
        ],
      }),
    }),
  ),
  Gw = ue(({ color: e, duration: t = '3s', ...r }, n) => {
    const o = typeof t == 'string' ? parseFloat(t) : t;
    return b.jsx(Ye, {
      ref: n,
      viewBox: '0 0 45 45',
      stroke: e,
      ...r,
      children: b.jsxs('g', {
        fill: 'none',
        fillRule: 'evenodd',
        transform: 'translate(1 1)',
        strokeWidth: '2',
        children: [
          b.jsxs('circle', {
            cx: '22',
            cy: '22',
            r: '6',
            strokeOpacity: '0',
            children: [
              b.jsx('animate', {
                attributeName: 'r',
                begin: '1.5s',
                dur: `${o}s`,
                values: '6;22',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
              b.jsx('animate', {
                attributeName: 'stroke-opacity',
                begin: '1.5s',
                dur: `${o}s`,
                values: '1;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
              b.jsx('animate', {
                attributeName: 'stroke-width',
                begin: '1.5s',
                dur: `${o}s`,
                values: '2;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            ],
          }),
          b.jsxs('circle', {
            cx: '22',
            cy: '22',
            r: '6',
            strokeOpacity: '0',
            children: [
              b.jsx('animate', {
                attributeName: 'r',
                begin: '3s',
                dur: `${o}s`,
                values: '6;22',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
              b.jsx('animate', {
                attributeName: 'stroke-opacity',
                begin: '3s',
                dur: `${o}s`,
                values: '1;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
              b.jsx('animate', {
                attributeName: 'stroke-width',
                begin: '3s',
                dur: `${o}s`,
                values: '2;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            ],
          }),
          b.jsx('circle', {
            cx: '22',
            cy: '22',
            r: '8',
            children: b.jsx('animate', {
              attributeName: 'r',
              begin: '0s',
              dur: `${o / 2}s`,
              values: '6;1;2;3;4;5;6',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
          }),
        ],
      }),
    });
  }),
  Yw = ue(({ color: e, duration: t = '1.4s', ...r }, n) => {
    const o = typeof t == 'string' ? parseFloat(t) : t;
    return b.jsx(Ye, {
      ref: n,
      viewBox: '0 0 55 80',
      fill: e,
      ...r,
      children: b.jsxs('g', {
        transform: 'matrix(1 0 0 -1 0 80)',
        children: [
          b.jsx('rect', {
            width: '10',
            height: '20',
            rx: '3',
            children: b.jsx('animate', {
              attributeName: 'height',
              begin: '0s',
              dur: `${o * 3}s`,
              values:
                '20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
          }),
          b.jsx('rect', {
            x: '15',
            width: '10',
            height: '80',
            rx: '3',
            children: b.jsx('animate', {
              attributeName: 'height',
              begin: '0s',
              dur: `${o * 1.4}s`,
              values: '80;55;33;5;75;23;73;33;12;14;60;80',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
          }),
          b.jsx('rect', {
            x: '30',
            width: '10',
            height: '50',
            rx: '3',
            children: b.jsx('animate', {
              attributeName: 'height',
              begin: '0s',
              dur: `${o}s`,
              values: '50;34;78;23;56;23;34;76;80;54;21;50',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
          }),
          b.jsx('rect', {
            x: '45',
            width: '10',
            height: '30',
            rx: '3',
            children: b.jsx('animate', {
              attributeName: 'height',
              begin: '0s',
              dur: `${o * 1.4}s`,
              values: '30;45;13;80;56;72;45;76;34;23;67;30',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
          }),
        ],
      }),
    });
  }),
  Xw = ue(({ color: e, duration: t = '3s', ...r }, n) =>
    b.jsx(Ye, {
      ref: n,
      viewBox: '0 0 58 58',
      stroke: e,
      ...r,
      children: b.jsx('g', {
        fill: 'none',
        fillRule: 'evenodd',
        children: b.jsxs('g', {
          transform: 'translate(2 1)',
          stroke: e,
          strokeWidth: '1.5',
          children: [
            b.jsx('circle', {
              cx: '42.601',
              cy: '11.462',
              r: '5',
              fillOpacity: '1',
              fill: e,
              children: b.jsx('animate', {
                attributeName: 'fill-opacity',
                begin: '0s',
                dur: t,
                values: '1;0;0;0;0;0;0;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            }),
            b.jsx('circle', {
              cx: '49.063',
              cy: '27.063',
              r: '5',
              fillOpacity: '0',
              fill: e,
              children: b.jsx('animate', {
                attributeName: 'fill-opacity',
                begin: '0s',
                dur: t,
                values: '0;1;0;0;0;0;0;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            }),
            b.jsx('circle', {
              cx: '42.601',
              cy: '42.663',
              r: '5',
              fillOpacity: '0',
              fill: e,
              children: b.jsx('animate', {
                attributeName: 'fill-opacity',
                begin: '0s',
                dur: t,
                values: '0;0;1;0;0;0;0;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            }),
            b.jsx('circle', {
              cx: '27',
              cy: '49.125',
              r: '5',
              fillOpacity: '0',
              fill: e,
              children: b.jsx('animate', {
                attributeName: 'fill-opacity',
                begin: '0s',
                dur: t,
                values: '0;0;0;1;0;0;0;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            }),
            b.jsx('circle', {
              cx: '11.399',
              cy: '42.663',
              r: '5',
              fillOpacity: '0',
              fill: e,
              children: b.jsx('animate', {
                attributeName: 'fill-opacity',
                begin: '0s',
                dur: t,
                values: '0;0;0;0;1;0;0;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            }),
            b.jsx('circle', {
              cx: '4.938',
              cy: '27.063',
              r: '5',
              fillOpacity: '0',
              fill: e,
              children: b.jsx('animate', {
                attributeName: 'fill-opacity',
                begin: '0s',
                dur: t,
                values: '0;0;0;0;0;1;0;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            }),
            b.jsx('circle', {
              cx: '11.399',
              cy: '11.462',
              r: '5',
              fillOpacity: '0',
              fill: e,
              children: b.jsx('animate', {
                attributeName: 'fill-opacity',
                begin: '0s',
                dur: t,
                values: '0;0;0;0;0;0;1;0',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            }),
            b.jsx('circle', {
              cx: '27',
              cy: '5',
              r: '5',
              fillOpacity: '0',
              fill: e,
              children: b.jsx('animate', {
                attributeName: 'fill-opacity',
                begin: '0s',
                dur: t,
                values: '0;0;0;0;0;0;0;1',
                calcMode: 'linear',
                repeatCount: 'indefinite',
              }),
            }),
          ],
        }),
      }),
    }),
  ),
  Kw = ue(({ color: e, duration: t = '1s', ...r }, n) =>
    b.jsxs(Ye, {
      ref: n,
      viewBox: '0 0 120 30',
      fill: e,
      ...r,
      children: [
        b.jsxs('circle', {
          cx: '15',
          cy: '15',
          r: '15',
          children: [
            b.jsx('animate', {
              attributeName: 'r',
              from: '15',
              to: '15',
              begin: '0s',
              dur: t,
              values: '15;9;15',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
            b.jsx('animate', {
              attributeName: 'fill-opacity',
              from: '1',
              to: '1',
              begin: '0s',
              dur: t,
              values: '1;.5;1',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
          ],
        }),
        b.jsxs('circle', {
          cx: '60',
          cy: '15',
          r: '9',
          fillOpacity: '0.3',
          children: [
            b.jsx('animate', {
              attributeName: 'r',
              from: '9',
              to: '9',
              begin: '0s',
              dur: t,
              values: '9;15;9',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
            b.jsx('animate', {
              attributeName: 'fill-opacity',
              from: '0.5',
              to: '0.5',
              begin: '0s',
              dur: t,
              values: '.5;1;.5',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
          ],
        }),
        b.jsxs('circle', {
          cx: '105',
          cy: '15',
          r: '15',
          children: [
            b.jsx('animate', {
              attributeName: 'r',
              from: '15',
              to: '15',
              begin: '0s',
              dur: t,
              values: '15;9;15',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
            b.jsx('animate', {
              attributeName: 'fill-opacity',
              from: '1',
              to: '1',
              begin: '0s',
              dur: t,
              values: '1;.5;1',
              calcMode: 'linear',
              repeatCount: 'indefinite',
            }),
          ],
        }),
      ],
    }),
  ),
  Qw = ue(({ color: e, duration: t = '1s', ...r }, n) =>
    b.jsxs(Ye, {
      ref: n,
      viewBox: '0 0 105 105',
      fill: e,
      ...r,
      children: [
        b.jsx('circle', {
          cx: '12.5',
          cy: '12.5',
          r: '12.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '0s',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
        b.jsx('circle', {
          cx: '12.5',
          cy: '52.5',
          r: '12.5',
          fillOpacity: '.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '100ms',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
        b.jsx('circle', {
          cx: '52.5',
          cy: '12.5',
          r: '12.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '300ms',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
        b.jsx('circle', {
          cx: '52.5',
          cy: '52.5',
          r: '12.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '600ms',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
        b.jsx('circle', {
          cx: '92.5',
          cy: '12.5',
          r: '12.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '800ms',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
        b.jsx('circle', {
          cx: '92.5',
          cy: '52.5',
          r: '12.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '400ms',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
        b.jsx('circle', {
          cx: '12.5',
          cy: '92.5',
          r: '12.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '700ms',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
        b.jsx('circle', {
          cx: '52.5',
          cy: '92.5',
          r: '12.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '500ms',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
        b.jsx('circle', {
          cx: '92.5',
          cy: '92.5',
          r: '12.5',
          children: b.jsx('animate', {
            attributeName: 'fill-opacity',
            begin: '200ms',
            dur: t,
            values: '1;.2;1',
            calcMode: 'linear',
            repeatCount: 'indefinite',
          }),
        }),
      ],
    }),
  ),
  qw = ue(({ color: e, secondaryColor: t, duration: r = '1s', ...n }, o) =>
    b.jsx(Ye, {
      ref: o,
      viewBox: '0 0 38 38',
      stroke: e,
      ...n,
      children: b.jsx('g', {
        fill: 'none',
        fillRule: 'evenodd',
        children: b.jsxs('g', {
          transform: 'translate(1 1)',
          strokeWidth: '2',
          children: [
            b.jsx('circle', {
              ...(t ? { stroke: t } : { strokeOpacity: '.5' }),
              cx: '18',
              cy: '18',
              r: '18',
            }),
            b.jsx('path', {
              d: 'M36 18c0-9.94-8.06-18-18-18',
              children: b.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'rotate',
                from: '0 18 18',
                to: '360 18 18',
                dur: r,
                repeatCount: 'indefinite',
              }),
            }),
          ],
        }),
      }),
    }),
  ),
  Zw = () => {
    const { theme: e } = Hn();
    if (!e)
      throw Error(
        'useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
      );
    const t = e.__breakpoints;
    if (!t)
      throw Error(
        'useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`',
      );
    const r = S.useMemo(
        () =>
          t.queries.map(({ breakpoint: i, minMaxQuery: s }) => {
            var a;
            return {
              breakpoint: i,
              query:
                (a =
                  s == null ? void 0 : s.replace('@media screen and ', '')) !=
                null
                  ? a
                  : '',
            };
          }),
        [t],
      ),
      [n, o] = S.useState(() => {
        if (!nd()) return 'base';
        for (const { breakpoint: s, query: a } of r)
          if (window.matchMedia(a).matches) return s;
      });
    return (
      S.useEffect(() => {
        const i = r.map(({ breakpoint: s, query: a }) => {
          const l = window.matchMedia(a),
            u = (c) => {
              c.matches && o(s);
            };
          return (
            typeof l.addEventListener == 'function' &&
              l.addEventListener('change', u),
            () => {
              typeof l.removeEventListener == 'function' &&
                l.removeEventListener('change', u);
            }
          );
        });
        return () => {
          i.forEach((s) => s());
        };
      }, [r]),
      n
    );
  },
  Jw = (e) => {
    var t;
    const { theme: r } = Hn();
    if (!r)
      throw Error(
        'useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
      );
    const n = (t = r.__breakpoints) == null ? void 0 : t.keys;
    if (!n)
      throw Error(
        'useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`',
      );
    const o = Zw(),
      i = n.indexOf(o);
    for (let s = i; 0 < s; s--) {
      const a = n[s];
      if (e.hasOwnProperty(a)) return e[a];
    }
    return e.base;
  },
  Np = (e) => (xe(e) ? Jw(e) : O(e) ? _w(...e) : e),
  In = ue(
    (
      {
        className: e,
        variant: t = 'oval',
        color: r = 'primary',
        secondaryColor: n,
        size: o = '1em',
        duration: i,
        ...s
      },
      a,
    ) => {
      var l, u;
      const c = (l = Fu('colors', Np(r))) != null ? l : r,
        d = (u = Fu('colors', Np(n))) != null ? u : n,
        f = S.useMemo(
          () => ({
            className: le('ui-loading', e),
            size: o,
            color: c,
            duration: i,
            ...s,
          }),
          [e, c, i, s, o],
        );
      switch (t) {
        case 'grid':
          return b.jsx(Qw, { ref: a, ...f });
        case 'audio':
          return b.jsx(Yw, { ref: a, ...f });
        case 'dots':
          return b.jsx(Kw, { ref: a, ...f });
        case 'puff':
          return b.jsx(Uw, { ref: a, ...f });
        case 'rings':
          return b.jsx(Gw, { ref: a, ...f });
        case 'circles':
          return b.jsx(Xw, { ref: a, ...f });
        default:
          return b.jsx(qw, { ref: a, ...f, secondaryColor: d });
      }
    },
  );
const Bs = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never',
  }),
  za = S.createContext({});
function ek() {
  return S.useContext(za).visualElement;
}
const ai = S.createContext(null),
  Aa = typeof document < 'u',
  Ds = Aa ? S.useLayoutEffect : S.useEffect,
  qg = S.createContext({ strict: !1 });
function tk(e, t, r, n) {
  const o = ek(),
    i = S.useContext(qg),
    s = S.useContext(ai),
    a = S.useContext(Bs).reducedMotion,
    l = S.useRef();
  (n = n || i.renderer),
    !l.current &&
      n &&
      (l.current = n(e, {
        visualState: t,
        parent: o,
        props: r,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  return (
    S.useInsertionEffect(() => {
      u && u.update(r, s);
    }),
    Ds(() => {
      u && u.render();
    }),
    S.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? Ds : S.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function yn(e) {
  return (
    typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function rk(e, t, r) {
  return S.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : yn(r) && (r.current = n));
    },
    [t],
  );
}
function Xo(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function Ra(e) {
  return typeof e == 'object' && typeof e.start == 'function';
}
const md = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  gd = ['initial', ...md];
function Ma(e) {
  return Ra(e.animate) || gd.some((t) => Xo(e[t]));
}
function Zg(e) {
  return !!(Ma(e) || e.variants);
}
function nk(e, t) {
  if (Ma(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Xo(r) ? r : void 0,
      animate: Xo(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function ok(e) {
  const { initial: t, animate: r } = nk(e, S.useContext(za));
  return S.useMemo(() => ({ initial: t, animate: r }), [Fp(t), Fp(r)]);
}
function Fp(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const Wp = {
    animation: [
      'animate',
      'exit',
      'variants',
      'whileHover',
      'whileTap',
      'whileFocus',
      'whileDrag',
      'whileInView',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Ko = {};
for (const e in Wp) Ko[e] = { isEnabled: (t) => Wp[e].some((r) => !!t[r]) };
function ik(e) {
  for (const t in e) Ko[t] = { ...Ko[t], ...e[t] };
}
function $a(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const vo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let sk = 1;
function ak() {
  return $a(() => {
    if (vo.hasEverUpdated) return sk++;
  });
}
const yd = S.createContext({}),
  Jg = S.createContext({}),
  lk = Symbol.for('motionComponentSymbol');
function uk({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && ik(e);
  function i(a, l) {
    let u;
    const c = { ...S.useContext(Bs), ...a, layoutId: ck(a) },
      { isStatic: d } = c,
      f = ok(a),
      m = d ? void 0 : ak(),
      x = n(a, d);
    if (!d && Aa) {
      f.visualElement = tk(o, x, c, t);
      const v = S.useContext(Jg),
        k = S.useContext(qg).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, k, e, m, v));
    }
    return S.createElement(
      za.Provider,
      { value: f },
      u && f.visualElement
        ? S.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      r(o, a, m, rk(x, f.visualElement, l), x, d, f.visualElement),
    );
  }
  const s = S.forwardRef(i);
  return (s[lk] = o), s;
}
function ck({ layoutId: e }) {
  const t = S.useContext(yd).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function dk(e) {
  function t(n, o = {}) {
    return uk(e(n, o));
  }
  if (typeof Proxy > 'u') return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)),
  });
}
const fk = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function vd(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(fk.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Vs = {};
function pk(e) {
  Object.assign(Vs, e);
}
const ja = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  Xr = new Set(ja);
function ey(e, { layout: t, layoutId: r }) {
  return (
    Xr.has(e) ||
    e.startsWith('origin') ||
    ((t || r !== void 0) && (!!Vs[e] || e === 'opacity'))
  );
}
const Ke = (e) => !!(e && e.getVelocity),
  hk = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  mk = ja.length;
function gk(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  o,
) {
  let i = '';
  for (let s = 0; s < mk; s++) {
    const a = ja[s];
    if (e[a] !== void 0) {
      const l = hk[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += 'translateZ(0)'),
    (i = i.trim()),
    o ? (i = o(e, n ? '' : i)) : r && n && (i = 'none'),
    i
  );
}
const ty = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  ry = ty('--'),
  Wu = ty('var(--'),
  yk = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Bn = (e, t, r) => Math.min(Math.max(r, e), t),
  Kr = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e,
  },
  xo = { ...Kr, transform: (e) => Bn(0, 1, e) },
  Mi = { ...Kr, default: 1 },
  bo = (e) => Math.round(e * 1e5) / 1e5,
  Qo = /(-)?([\d]*\.?[\d])+/g,
  Hu =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  vk =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function li(e) {
  return typeof e == 'string';
}
const ui = (e) => ({
    test: (t) => li(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  qt = ui('deg'),
  It = ui('%'),
  I = ui('px'),
  xk = ui('vh'),
  bk = ui('vw'),
  Hp = {
    ...It,
    parse: (e) => It.parse(e) / 100,
    transform: (e) => It.transform(e * 100),
  },
  Up = { ...Kr, transform: Math.round },
  ny = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    size: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    rotate: qt,
    rotateX: qt,
    rotateY: qt,
    rotateZ: qt,
    scale: Mi,
    scaleX: Mi,
    scaleY: Mi,
    scaleZ: Mi,
    skew: qt,
    skewX: qt,
    skewY: qt,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: xo,
    originX: Hp,
    originY: Hp,
    originZ: I,
    zIndex: Up,
    fillOpacity: xo,
    strokeOpacity: xo,
    numOctaves: Up,
  };
function xd(e, t, r, n) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (ry(d)) {
      i[d] = f;
      continue;
    }
    const m = ny[d],
      x = yk(f, m);
    if (Xr.has(d)) {
      if (((l = !0), (s[d] = x), !c)) continue;
      f !== (m.default || 0) && (c = !1);
    } else d.startsWith('origin') ? ((u = !0), (a[d] = x)) : (o[d] = x);
  }
  if (
    (t.transform ||
      (l || n
        ? (o.transform = gk(e.transform, r, c, n))
        : o.transform && (o.transform = 'none')),
    u)
  ) {
    const { originX: d = '50%', originY: f = '50%', originZ: m = 0 } = a;
    o.transformOrigin = `${d} ${f} ${m}`;
  }
}
const bd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function oy(e, t, r) {
  for (const n in t) !Ke(t[n]) && !ey(n, r) && (e[n] = t[n]);
}
function Sk({ transformTemplate: e }, t, r) {
  return S.useMemo(() => {
    const n = bd();
    return (
      xd(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function wk(e, t, r) {
  const n = e.style || {},
    o = {};
  return (
    oy(o, n, e),
    Object.assign(o, Sk(e, t, r)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function kk(e, t, r) {
  const n = {},
    o = wk(e, t, r);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = o),
    n
  );
}
const Ck = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'ignoreStrict',
  'viewport',
]);
function Os(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    Ck.has(e)
  );
}
let iy = (e) => !Os(e);
function sy(e) {
  e && (iy = (t) => (t.startsWith('on') ? !Os(t) : e(t)));
}
try {
  sy(require('@emotion/is-prop-valid').default);
} catch {}
function _k(e, t, r) {
  const n = {};
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((iy(o) ||
        (r === !0 && Os(o)) ||
        (!t && !Os(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (n[o] = e[o]));
  return n;
}
function Gp(e, t, r) {
  return typeof e == 'string' ? e : I.transform(t + r * e);
}
function Pk(e, t, r) {
  const n = Gp(t, e.x, e.width),
    o = Gp(r, e.y, e.height);
  return `${n} ${o}`;
}
const Ek = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Tk = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function zk(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Ek : Tk;
  e[i.offset] = I.transform(-n);
  const s = I.transform(t),
    a = I.transform(r);
  e[i.array] = `${s} ${a}`;
}
function Sd(
  e,
  {
    attrX: t,
    attrY: r,
    originX: n,
    originY: o,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: a = 0,
    ...l
  },
  u,
  c,
  d,
) {
  if ((xd(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: m, dimensions: x } = e;
  f.transform && (x && (m.transform = f.transform), delete f.transform),
    x &&
      (n !== void 0 || o !== void 0 || m.transform) &&
      (m.transformOrigin = Pk(
        x,
        n !== void 0 ? n : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (f.x = t),
    r !== void 0 && (f.y = r),
    i !== void 0 && zk(f, i, s, a, !1);
}
const ay = () => ({ ...bd(), attrs: {} }),
  wd = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function Ak(e, t, r, n) {
  const o = S.useMemo(() => {
    const i = ay();
    return (
      Sd(i, t, { enableHardwareAcceleration: !1 }, wd(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    oy(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function Rk(e = !1) {
  return (r, n, o, i, { latestValues: s }, a) => {
    const u = (vd(r) ? Ak : kk)(n, s, a, r),
      d = { ..._k(n, typeof r == 'string', e), ...u, ref: i },
      { children: f } = n,
      m = S.useMemo(() => (Ke(f) ? f.get() : f), [f]);
    return (
      o && (d['data-projection-id'] = o),
      S.createElement(r, { ...d, children: m })
    );
  };
}
const kd = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function ly(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r) e.style.setProperty(i, r[i]);
}
const uy = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function cy(e, t, r, n) {
  ly(e, t, void 0, n);
  for (const o in t.attrs) e.setAttribute(uy.has(o) ? o : kd(o), t.attrs[o]);
}
function Cd(e, t) {
  const { style: r } = e,
    n = {};
  for (const o in r)
    (Ke(r[o]) || (t.style && Ke(t.style[o])) || ey(o, e)) && (n[o] = r[o]);
  return n;
}
function dy(e, t) {
  const r = Cd(e, t);
  for (const n in e)
    if (Ke(e[n]) || Ke(t[n])) {
      const o = n === 'x' || n === 'y' ? 'attr' + n.toUpperCase() : n;
      r[o] = e[n];
    }
  return r;
}
function _d(e, t, r, n = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  );
}
const Ns = (e) => Array.isArray(e),
  Mk = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  $k = (e) => (Ns(e) ? e[e.length - 1] || 0 : e);
function ns(e) {
  const t = Ke(e) ? e.get() : e;
  return Mk(t) ? t.toValue() : t;
}
function jk(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  o,
  i,
) {
  const s = { latestValues: Lk(n, o, i, e), renderState: t() };
  return r && (s.mount = (a) => r(n, a, s)), s;
}
const fy = (e) => (t, r) => {
  const n = S.useContext(za),
    o = S.useContext(ai),
    i = () => jk(e, t, n, o);
  return r ? i() : $a(i);
};
function Lk(e, t, r, n) {
  const o = {},
    i = n(e, {});
  for (const f in i) o[f] = ns(i[f]);
  let { initial: s, animate: a } = e;
  const l = Ma(e),
    u = Zg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  return (
    d &&
      typeof d != 'boolean' &&
      !Ra(d) &&
      (Array.isArray(d) ? d : [d]).forEach((m) => {
        const x = _d(e, m);
        if (!x) return;
        const { transitionEnd: v, transition: k, ...y } = x;
        for (const h in y) {
          let g = y[h];
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (o[h] = g);
        }
        for (const h in v) o[h] = v[h];
      }),
    o
  );
}
const Ik = {
    useVisualState: fy({
      scrapeMotionValuesFromProps: dy,
      createRenderState: ay,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        try {
          r.dimensions =
            typeof t.getBBox == 'function'
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Sd(
          r,
          n,
          { enableHardwareAcceleration: !1 },
          wd(t.tagName),
          e.transformTemplate,
        ),
          cy(t, r);
      },
    }),
  },
  Bk = {
    useVisualState: fy({
      scrapeMotionValuesFromProps: Cd,
      createRenderState: bd,
    }),
  };
function Dk(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(vd(e) ? Ik : Bk),
    preloadedFeatures: r,
    useRender: Rk(t),
    createVisualElement: n,
    Component: e,
  };
}
function Nt(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const py = (e) =>
  e.pointerType === 'mouse'
    ? typeof e.button != 'number' || e.button <= 0
    : e.isPrimary !== !1;
function La(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
}
const Vk = (e) => (t) => py(t) && e(t, La(t));
function Wt(e, t, r, n) {
  return Nt(e, t, Vk(r), n);
}
const Ok = (e, t) => (r) => t(e(r)),
  pr = (...e) => e.reduce(Ok);
function hy(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const Yp = hy('dragHorizontal'),
  Xp = hy('dragVertical');
function my(e) {
  let t = !1;
  if (e === 'y') t = Xp();
  else if (e === 'x') t = Yp();
  else {
    const r = Yp(),
      n = Xp();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function gy() {
  const e = my(!0);
  return e ? (e(), !1) : !0;
}
class wr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Kp(e, t) {
  const r = 'pointer' + (t ? 'enter' : 'leave'),
    n = 'onHover' + (t ? 'Start' : 'End'),
    o = (i, s) => {
      if (i.type === 'touch' || gy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive('whileHover', t),
        a[n] && a[n](i, s);
    };
  return Wt(e.current, r, o, { passive: !e.getProps()[n] });
}
class Nk extends wr {
  mount() {
    this.unmount = pr(Kp(this.node, !0), Kp(this.node, !1));
  }
  unmount() {}
}
class Fk extends wr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = pr(
      Nt(this.node.current, 'focus', () => this.onFocus()),
      Nt(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
const yy = (e, t) => (t ? (e === t ? !0 : yy(e, t.parentElement)) : !1),
  ht = (e) => e;
function wl(e, t) {
  if (!t) return;
  const r = new PointerEvent('pointer' + e);
  t(r, La(r));
}
class Wk extends wr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ht),
      (this.removeEndListeners = ht),
      (this.removeAccessibleListeners = ht),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const n = this.node.getProps(),
          i = Wt(
            window,
            'pointerup',
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              yy(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
            },
            { passive: !(n.onTap || n.onPointerUp) },
          ),
          s = Wt(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          });
        (this.removeEndListeners = pr(i, s)), this.startPress(t, r);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return;
            const s = (a) => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                wl('up', this.node.getProps().onTap);
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Nt(this.node.current, 'keyup', s)),
              wl('down', (a, l) => {
                this.startPress(a, l);
              });
          },
          r = Nt(this.node.current, 'keydown', t),
          n = () => {
            this.isPressing && wl('cancel', (i, s) => this.cancelPress(i, s));
          },
          o = Nt(this.node.current, 'blur', n);
        this.removeAccessibleListeners = pr(r, o);
      });
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive('whileTap', !0),
      n && n(t, r);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !gy()
    );
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: n } = this.node.getProps();
    n && n(t, r);
  }
  mount() {
    const t = this.node.getProps(),
      r = Wt(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = Nt(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = pr(r, n);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Uu = new WeakMap(),
  kl = new WeakMap(),
  Hk = (e) => {
    const t = Uu.get(e.target);
    t && t(e);
  },
  Uk = (e) => {
    e.forEach(Hk);
  };
function Gk({ root: e, ...t }) {
  const r = e || document;
  kl.has(r) || kl.set(r, {});
  const n = kl.get(r),
    o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(Uk, { root: e, ...t })), n[o];
}
function Yk(e, t, r) {
  const n = Gk(t);
  return (
    Uu.set(e, r),
    n.observe(e),
    () => {
      Uu.delete(e), n.unobserve(e);
    }
  );
}
const Xk = { some: 0, all: 1 };
class Kk extends wr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  viewportFallback() {
    requestAnimationFrame(() => {
      this.hasEnteredView = !0;
      const { onViewportEnter: t } = this.node.getProps();
      t && t(null),
        this.node.animationState &&
          this.node.animationState.setActive('whileInView', !0);
    });
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: o = 'some', once: i, fallback: s = !0 } = t;
    if (typeof IntersectionObserver > 'u') {
      s && this.viewportFallback();
      return;
    }
    const a = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof o == 'number' ? o : Xk[o],
      },
      l = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          m = c ? d : f;
        m && m(u);
      };
    return Yk(this.node.current, a, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: r } = this.node;
    ['amount', 'margin', 'root'].some(Qk(t, r)) && this.startObserver();
  }
  unmount() {}
}
function Qk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const qk = {
  inView: { Feature: Kk },
  tap: { Feature: Wk },
  focus: { Feature: Fk },
  hover: { Feature: Nk },
};
function vy(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
const Zk = (e) => /^\-?\d*\.?\d+$/.test(e),
  Jk = (e) => /^0[^.\s]+$/.test(e),
  Ht = { delta: 0, timestamp: 0 },
  xy = (1 / 60) * 1e3,
  e2 = typeof performance < 'u' ? () => performance.now() : () => Date.now(),
  by =
    typeof window < 'u'
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(e2()), xy);
function t2(e) {
  let t = [],
    r = [],
    n = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : r;
        return (
          u && s.add(l),
          f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = r.indexOf(l);
        u !== -1 && r.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, r] = [r, t]), (r.length = 0), (n = t.length), n))
          for (let u = 0; u < n; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (o = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const r2 = 40;
let Gu = !0,
  qo = !1,
  Yu = !1;
const ci = ['read', 'update', 'preRender', 'render', 'postRender'],
  Ia = ci.reduce((e, t) => ((e[t] = t2(() => (qo = !0))), e), {}),
  Le = ci.reduce((e, t) => {
    const r = Ia[t];
    return (e[t] = (n, o = !1, i = !1) => (qo || o2(), r.schedule(n, o, i))), e;
  }, {}),
  yr = ci.reduce((e, t) => ((e[t] = Ia[t].cancel), e), {}),
  Cl = ci.reduce((e, t) => ((e[t] = () => Ia[t].process(Ht)), e), {}),
  n2 = (e) => Ia[e].process(Ht),
  Sy = (e) => {
    (qo = !1),
      (Ht.delta = Gu ? xy : Math.max(Math.min(e - Ht.timestamp, r2), 1)),
      (Ht.timestamp = e),
      (Yu = !0),
      ci.forEach(n2),
      (Yu = !1),
      qo && ((Gu = !1), by(Sy));
  },
  o2 = () => {
    (qo = !0), (Gu = !0), Yu || by(Sy);
  };
function Pd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ed(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Td {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Pd(this.subscriptions, t), () => Ed(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function zd(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const i2 = (e) => !isNaN(parseFloat(e));
class s2 {
  constructor(t, r = {}) {
    (this.version = '9.1.7'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        (this.prev = this.current), (this.current = n);
        const { delta: i, timestamp: s } = Ht;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          Le.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Le.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = i2(this.current)),
      (this.owner = r.owner);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Td());
    const n = this.events[t].add(r);
    return t === 'change'
      ? () => {
          n(),
            Le.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), (this.prev = t), (this.timeDelta = n);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? zd(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r) || null),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = null;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Dn(e, t) {
  return new s2(e, t);
}
const Ad = (e, t) => (r) =>
    !!(
      (li(r) && vk.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  wy = (e, t, r) => (n) => {
    if (!li(n)) return n;
    const [o, i, s, a] = n.match(Qo);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  a2 = (e) => Bn(0, 255, e),
  _l = { ...Kr, transform: (e) => Math.round(a2(e)) },
  Ir = {
    test: Ad('rgb', 'red'),
    parse: wy('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      _l.transform(e) +
      ', ' +
      _l.transform(t) +
      ', ' +
      _l.transform(r) +
      ', ' +
      bo(xo.transform(n)) +
      ')',
  };
function l2(e) {
  let t = '',
    r = '',
    n = '',
    o = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Xu = { test: Ad('#'), parse: l2, transform: Ir.transform },
  vn = {
    test: Ad('hsl', 'hue'),
    parse: wy('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      It.transform(bo(t)) +
      ', ' +
      It.transform(bo(r)) +
      ', ' +
      bo(xo.transform(n)) +
      ')',
  },
  Be = {
    test: (e) => Ir.test(e) || Xu.test(e) || vn.test(e),
    parse: (e) =>
      Ir.test(e) ? Ir.parse(e) : vn.test(e) ? vn.parse(e) : Xu.parse(e),
    transform: (e) =>
      li(e) ? e : e.hasOwnProperty('red') ? Ir.transform(e) : vn.transform(e),
  },
  ky = '${c}',
  Cy = '${n}';
function u2(e) {
  var t, r;
  return (
    isNaN(e) &&
    li(e) &&
    (((t = e.match(Qo)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Hu)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
function Fs(e) {
  typeof e == 'number' && (e = `${e}`);
  const t = [];
  let r = 0,
    n = 0;
  const o = e.match(Hu);
  o && ((r = o.length), (e = e.replace(Hu, ky)), t.push(...o.map(Be.parse)));
  const i = e.match(Qo);
  return (
    i && ((n = i.length), (e = e.replace(Qo, Cy)), t.push(...i.map(Kr.parse))),
    { values: t, numColors: r, numNumbers: n, tokenised: e }
  );
}
function _y(e) {
  return Fs(e).values;
}
function Py(e) {
  const { values: t, numColors: r, tokenised: n } = Fs(e),
    o = t.length;
  return (i) => {
    let s = n;
    for (let a = 0; a < o; a++)
      s = s.replace(a < r ? ky : Cy, a < r ? Be.transform(i[a]) : bo(i[a]));
    return s;
  };
}
const c2 = (e) => (typeof e == 'number' ? 0 : e);
function d2(e) {
  const t = _y(e);
  return Py(e)(t.map(c2));
}
const vr = {
    test: u2,
    parse: _y,
    createTransformer: Py,
    getAnimatableNone: d2,
  },
  f2 = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function p2(e) {
  const [t, r] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [n] = r.match(Qo) || [];
  if (!n) return e;
  const o = r.replace(n, '');
  let i = f2.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + '(' + i + o + ')';
}
const h2 = /([a-z-]*)\(.*?\)/g,
  Ku = {
    ...vr,
    getAnimatableNone: (e) => {
      const t = e.match(h2);
      return t ? t.map(p2).join(' ') : e;
    },
  },
  m2 = {
    ...ny,
    color: Be,
    backgroundColor: Be,
    outlineColor: Be,
    fill: Be,
    stroke: Be,
    borderColor: Be,
    borderTopColor: Be,
    borderRightColor: Be,
    borderBottomColor: Be,
    borderLeftColor: Be,
    filter: Ku,
    WebkitFilter: Ku,
  },
  Rd = (e) => m2[e];
function Md(e, t) {
  let r = Rd(e);
  return (
    r !== Ku && (r = vr), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const Ey = (e) => (t) => t.test(e),
  g2 = { test: (e) => e === 'auto', parse: (e) => e },
  Ty = [Kr, I, It, qt, bk, xk, g2],
  eo = (e) => Ty.find(Ey(e)),
  y2 = [...Ty, Be, vr],
  v2 = (e) => y2.find(Ey(e));
function x2(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function b2(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function Ba(e, t, r) {
  const n = e.getProps();
  return _d(n, t, r !== void 0 ? r : n.custom, x2(e), b2(e));
}
function S2(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Dn(r));
}
function w2(e, t) {
  const r = Ba(e, t);
  let {
    transitionEnd: n = {},
    transition: o = {},
    ...i
  } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const s in i) {
    const a = $k(i[s]);
    S2(e, s, a);
  }
}
function k2(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = i.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = i[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == 'string' && (Zk(c) || Jk(c))
            ? (c = parseFloat(c))
            : !v2(c) && vr.test(u) && (c = Md(l, u)),
          e.addValue(l, Dn(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function C2(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function _2(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = C2(o, t);
    if (i !== void 0) n[o] = i;
    else {
      const s = r.getValue(o);
      s && (n[o] = s.get());
    }
  }
  return n;
}
function Ws(e) {
  return !!(Ke(e) && e.add);
}
const P2 = 'framerAppearId',
  E2 = 'data-' + kd(P2);
let T2 = ht,
  Hs = ht;
const os = (e) => e * 1e3,
  z2 = { current: !1 },
  $d = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  jd = (e) => (t) => 1 - e(1 - t),
  Ld = (e) => e * e,
  A2 = jd(Ld),
  Id = $d(Ld),
  re = (e, t, r) => -r * e + r * t + e;
function Pl(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
        ? t
        : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e
  );
}
function R2({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (o = Pl(l, a, e + 1 / 3)), (i = Pl(l, a, e)), (s = Pl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: n,
  };
}
const El = (e, t, r) => {
    const n = e * e;
    return Math.sqrt(Math.max(0, r * (t * t - n) + n));
  },
  M2 = [Xu, Ir, vn],
  $2 = (e) => M2.find((t) => t.test(e));
function Qp(e) {
  const t = $2(e);
  let r = t.parse(e);
  return t === vn && (r = R2(r)), r;
}
const zy = (e, t) => {
  const r = Qp(e),
    n = Qp(t),
    o = { ...r };
  return (i) => (
    (o.red = El(r.red, n.red, i)),
    (o.green = El(r.green, n.green, i)),
    (o.blue = El(r.blue, n.blue, i)),
    (o.alpha = re(r.alpha, n.alpha, i)),
    Ir.transform(o)
  );
};
function Ay(e, t) {
  return typeof e == 'number'
    ? (r) => re(e, t, r)
    : Be.test(e)
      ? zy(e, t)
      : My(e, t);
}
const Ry = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, s) => Ay(i, t[s]));
    return (i) => {
      for (let s = 0; s < n; s++) r[s] = o[s](i);
      return r;
    };
  },
  j2 = (e, t) => {
    const r = { ...e, ...t },
      n = {};
    for (const o in r)
      e[o] !== void 0 && t[o] !== void 0 && (n[o] = Ay(e[o], t[o]));
    return (o) => {
      for (const i in n) r[i] = n[i](o);
      return r;
    };
  },
  My = (e, t) => {
    const r = vr.createTransformer(t),
      n = Fs(e),
      o = Fs(t);
    return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
      ? pr(Ry(n.values, o.values), r)
      : (s) => `${s > 0 ? t : e}`;
  },
  Zo = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  qp = (e, t) => (r) => re(e, t, r);
function L2(e) {
  return typeof e == 'number'
    ? qp
    : typeof e == 'string'
      ? Be.test(e)
        ? zy
        : My
      : Array.isArray(e)
        ? Ry
        : typeof e == 'object'
          ? j2
          : qp;
}
function I2(e, t, r) {
  const n = [],
    o = r || L2(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] : t;
      a = pr(l, a);
    }
    n.push(a);
  }
  return n;
}
function $y(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  Hs(i === t.length),
    Hs(!n || !Array.isArray(n) || n.length === i - 1),
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = I2(t, n, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Zo(e[c], e[c + 1], u);
      return s[c](d);
    };
  return r ? (u) => l(Bn(e[0], e[i - 1], u)) : l;
}
function B2(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Zo(0, t, n);
    e.push(re(r, 1, o));
  }
}
function D2(e) {
  const t = [0];
  return B2(t, e.length - 1), t;
}
function V2(e, t) {
  return e.map((r) => r * t);
}
const jy = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  O2 = 1e-7,
  N2 = 12;
function F2(e, t, r, n, o) {
  let i,
    s,
    a = 0;
  do (s = t + (r - t) / 2), (i = jy(s, n, o) - e), i > 0 ? (r = s) : (t = s);
  while (Math.abs(i) > O2 && ++a < N2);
  return s;
}
function Ly(e, t, r, n) {
  if (e === t && r === n) return ht;
  const o = (i) => F2(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : jy(o(i), t, n));
}
const Iy = (e) => 1 - Math.sin(Math.acos(e)),
  Bd = jd(Iy),
  W2 = $d(Bd),
  By = Ly(0.33, 1.53, 0.69, 0.99),
  Dd = jd(By),
  H2 = $d(Dd),
  U2 = (e) =>
    (e *= 2) < 1 ? 0.5 * Dd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  G2 = {
    linear: ht,
    easeIn: Ld,
    easeInOut: Id,
    easeOut: A2,
    circIn: Iy,
    circInOut: W2,
    circOut: Bd,
    backIn: Dd,
    backInOut: H2,
    backOut: By,
    anticipate: U2,
  },
  Zp = (e) => {
    if (Array.isArray(e)) {
      Hs(e.length === 4);
      const [t, r, n, o] = e;
      return Ly(t, r, n, o);
    } else if (typeof e == 'string') return G2[e];
    return e;
  },
  Y2 = (e) => Array.isArray(e) && typeof e[0] != 'number';
function X2(e, t) {
  return e.map(() => t || Id).splice(0, e.length - 1);
}
function Qu({ keyframes: e, ease: t = Id, times: r, duration: n = 300 }) {
  e = [...e];
  const o = Y2(t) ? t.map(Zp) : Zp(t),
    i = { done: !1, value: e[0] },
    s = V2(r && r.length === e.length ? r : D2(e), n);
  function a() {
    return $y(s, e, { ease: Array.isArray(o) ? o : X2(e, o) });
  }
  let l = a();
  return {
    next: (u) => ((i.value = l(u)), (i.done = u >= n), i),
    flipTarget: () => {
      e.reverse(), (l = a());
    },
  };
}
const Tl = 0.001,
  K2 = 0.01,
  Jp = 10,
  Q2 = 0.05,
  q2 = 1;
function Z2({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1,
}) {
  let o, i;
  T2(e <= Jp * 1e3);
  let s = 1 - t;
  (s = Bn(Q2, q2, s)),
    (e = Bn(K2, Jp, e / 1e3)),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - r,
            m = qu(u, s),
            x = Math.exp(-d);
          return Tl - (f / m) * x;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * r + r,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            v = qu(Math.pow(u, 2), s);
          return ((-o(u) + Tl > 0 ? -1 : 1) * ((f - m) * x)) / v;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1;
          return -Tl + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = e5(o, i, a);
  if (((e = e * 1e3), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * n;
    return { stiffness: u, damping: s * 2 * Math.sqrt(n * u), duration: e };
  }
}
const J2 = 12;
function e5(e, t, r) {
  let n = r;
  for (let o = 1; o < J2; o++) n = n - e(n) / t(n);
  return n;
}
function qu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const t5 = ['duration', 'bounce'],
  r5 = ['stiffness', 'damping', 'mass'];
function eh(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function n5(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!eh(e, r5) && eh(e, t5)) {
    const r = Z2(e);
    (t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
const o5 = 5;
function Dy({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  let o = e[0],
    i = e[e.length - 1];
  const s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = n5(n);
  let m = i5,
    x = c ? -(c / 1e3) : 0;
  const v = l / (2 * Math.sqrt(a * u));
  function k() {
    const y = i - o,
      h = Math.sqrt(a / u) / 1e3,
      g = Math.abs(y) < 5;
    if ((r || (r = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5), v < 1)) {
      const w = qu(h, v);
      m = (C) => {
        const P = Math.exp(-v * h * C);
        return (
          i -
          P * (((x + v * h * y) / w) * Math.sin(w * C) + y * Math.cos(w * C))
        );
      };
    } else if (v === 1) m = (w) => i - Math.exp(-h * w) * (y + (x + h * y) * w);
    else {
      const w = h * Math.sqrt(v * v - 1);
      m = (C) => {
        const P = Math.exp(-v * h * C),
          _ = Math.min(w * C, 300);
        return (
          i - (P * ((x + v * h * y) * Math.sinh(_) + w * y * Math.cosh(_))) / w
        );
      };
    }
  }
  return (
    k(),
    {
      next: (y) => {
        const h = m(y);
        if (f) s.done = y >= d;
        else {
          let g = x;
          if (y !== 0)
            if (v < 1) {
              const P = Math.max(0, y - o5);
              g = zd(h - m(P), y - P);
            } else g = 0;
          const w = Math.abs(g) <= r,
            C = Math.abs(i - h) <= t;
          s.done = w && C;
        }
        return (s.value = s.done ? i : h), s;
      },
      flipTarget: () => {
        (x = -x), ([o, i] = [i, o]), k();
      },
    }
  );
}
Dy.needsInterpolation = (e, t) => typeof e == 'string' || typeof t == 'string';
const i5 = (e) => 0;
function s5({
  keyframes: e = [0],
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 350,
  restDelta: o = 0.5,
  modifyTarget: i,
}) {
  const s = e[0],
    a = { done: !1, value: s };
  let l = r * t;
  const u = s + l,
    c = i === void 0 ? u : i(u);
  return (
    c !== u && (l = c - s),
    {
      next: (d) => {
        const f = -l * Math.exp(-d / n);
        return (a.done = !(f > o || f < -o)), (a.value = a.done ? c : c + f), a;
      },
      flipTarget: () => {},
    }
  );
}
const a5 = { decay: s5, keyframes: Qu, tween: Qu, spring: Dy };
function Vy(e, t, r = 0) {
  return e - t - r;
}
function l5(e, t = 0, r = 0, n = !0) {
  return n ? Vy(t + -e, t, r) : t - (e - t) + r;
}
function u5(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
const c5 = (e) => {
  const t = ({ delta: r }) => e(r);
  return { start: () => Le.update(t, !0), stop: () => yr.update(t) };
};
function Us({
  duration: e,
  driver: t = c5,
  elapsed: r = 0,
  repeat: n = 0,
  repeatType: o = 'loop',
  repeatDelay: i = 0,
  keyframes: s,
  autoplay: a = !0,
  onPlay: l,
  onStop: u,
  onComplete: c,
  onRepeat: d,
  onUpdate: f,
  type: m = 'keyframes',
  ...x
}) {
  const v = r;
  let k,
    y = 0,
    h = e,
    g = !1,
    w = !0,
    C;
  const P = a5[s.length > 2 ? 'keyframes' : m] || Qu,
    _ = s[0],
    T = s[s.length - 1];
  let L = { done: !1, value: _ };
  const { needsInterpolation: $ } = P;
  $ && $(_, T) && ((C = $y([0, 100], [_, T], { clamp: !1 })), (s = [0, 100]));
  const Y = P({ ...x, duration: e, keyframes: s });
  function Qe() {
    y++,
      o === 'reverse'
        ? ((w = y % 2 === 0), (r = l5(r, h, i, w)))
        : ((r = Vy(r, h, i)), o === 'mirror' && Y.flipTarget()),
      (g = !1),
      d && d();
  }
  function lt() {
    k && k.stop(), c && c();
  }
  function qe(Se) {
    w || (Se = -Se),
      (r += Se),
      g ||
        ((L = Y.next(Math.max(0, r))),
        C && (L.value = C(L.value)),
        (g = w ? L.done : r <= 0)),
      f && f(L.value),
      g &&
        (y === 0 && (h = h !== void 0 ? h : r),
        y < n ? u5(r, h, i, w) && Qe() : lt());
  }
  function me() {
    l && l(), (k = t(qe)), k.start();
  }
  return (
    a && me(),
    {
      stop: () => {
        u && u(), k && k.stop();
      },
      set currentTime(Se) {
        (r = v), qe(Se);
      },
      sample: (Se) => {
        r = v;
        const _t = e && typeof e == 'number' ? Math.max(e * 0.5, 50) : 50;
        let A = 0;
        for (qe(0); A <= Se; ) {
          const D = Se - A;
          qe(Math.min(D, _t)), (A += _t);
        }
        return L;
      },
    }
  );
}
function d5(e) {
  return !e || Array.isArray(e) || (typeof e == 'string' && Oy[e]);
}
const ao = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Oy = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: ao([0, 0.65, 0.55, 1]),
    circOut: ao([0.55, 0, 1, 0.45]),
    backIn: ao([0.31, 0.01, 0.66, -0.59]),
    backOut: ao([0.33, 1.53, 0.69, 0.99]),
  };
function f5(e) {
  if (e) return Array.isArray(e) ? ao(e) : Oy[e];
}
function p5(
  e,
  t,
  r,
  {
    delay: n = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = 'loop',
    ease: a,
    times: l,
  } = {},
) {
  return e.animate(
    { [t]: r, offset: l },
    {
      delay: n,
      duration: o,
      easing: f5(a),
      fill: 'both',
      iterations: i + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal',
    },
  );
}
const th = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
  },
  zl = {},
  Ny = {};
for (const e in th)
  Ny[e] = () => (zl[e] === void 0 && (zl[e] = th[e]()), zl[e]);
function h5(e, { repeat: t, repeatType: r = 'loop' }) {
  const n = t && r !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const m5 = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  $i = 10;
function g5(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      Ny.waapi() &&
      m5.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== 'mirror' &&
      o.damping !== 0
    )
  )
    return !1;
  let { keyframes: s, duration: a = 300, elapsed: l = 0, ease: u } = o;
  if (o.type === 'spring' || !d5(o.ease)) {
    if (o.repeat === 1 / 0) return;
    const d = Us({ ...o, elapsed: 0 });
    let f = { done: !1, value: s[0] };
    const m = [];
    let x = 0;
    for (; !f.done && x < 2e4; ) (f = d.sample(x)), m.push(f.value), (x += $i);
    (s = m), (a = x - $i), (u = 'linear');
  }
  const c = p5(e.owner.current, t, s, {
    ...o,
    delay: -l,
    duration: a,
    ease: u,
  });
  return (
    (c.onfinish = () => {
      e.set(h5(s, o)), Le.update(() => c.cancel()), n && n();
    }),
    {
      get currentTime() {
        return c.currentTime || 0;
      },
      set currentTime(d) {
        c.currentTime = d;
      },
      stop: () => {
        const { currentTime: d } = c;
        if (d) {
          const f = Us({ ...o, autoplay: !1 });
          e.setWithVelocity(f.sample(d - $i).value, f.sample(d).value, $i);
        }
        Le.update(() => c.cancel());
      },
    }
  );
}
function Fy(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r;
      i >= t && (yr.read(n), e(i - t));
    };
  return Le.read(n, !0), () => yr.read(n);
}
function y5({ keyframes: e, elapsed: t, onUpdate: r, onComplete: n }) {
  const o = () => {
    r && r(e[e.length - 1]), n && n();
  };
  return t ? { stop: Fy(o, -t) } : o();
}
function v5({
  keyframes: e,
  velocity: t = 0,
  min: r,
  max: n,
  power: o = 0.8,
  timeConstant: i = 750,
  bounceStiffness: s = 500,
  bounceDamping: a = 10,
  restDelta: l = 1,
  modifyTarget: u,
  driver: c,
  onUpdate: d,
  onComplete: f,
  onStop: m,
}) {
  const x = e[0];
  let v;
  function k(w) {
    return (r !== void 0 && w < r) || (n !== void 0 && w > n);
  }
  function y(w) {
    return r === void 0
      ? n
      : n === void 0 || Math.abs(r - w) < Math.abs(n - w)
        ? r
        : n;
  }
  function h(w) {
    v && v.stop(),
      (v = Us({
        keyframes: [0, 1],
        velocity: 0,
        ...w,
        driver: c,
        onUpdate: (C) => {
          d && d(C), w.onUpdate && w.onUpdate(C);
        },
        onComplete: f,
        onStop: m,
      }));
  }
  function g(w) {
    h({ type: 'spring', stiffness: s, damping: a, restDelta: l, ...w });
  }
  if (k(x)) g({ velocity: t, keyframes: [x, y(x)] });
  else {
    let w = o * t + x;
    typeof u < 'u' && (w = u(w));
    const C = y(w),
      P = C === r ? -1 : 1;
    let _, T;
    const L = ($) => {
      (_ = T),
        (T = $),
        (t = zd($ - _, Ht.delta)),
        ((P === 1 && $ > C) || (P === -1 && $ < C)) &&
          g({ keyframes: [$, C], velocity: t });
    };
    h({
      type: 'decay',
      keyframes: [x, 0],
      velocity: t,
      timeConstant: i,
      power: o,
      restDelta: l,
      modifyTarget: u,
      onUpdate: k(w) ? L : void 0,
    });
  }
  return { stop: () => v && v.stop() };
}
const x5 = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  b5 = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  S5 = { type: 'keyframes', duration: 0.8 },
  w5 = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  k5 = (e, { keyframes: t }) =>
    t.length > 2
      ? S5
      : Xr.has(e)
        ? e.startsWith('scale')
          ? b5(t[1])
          : x5
        : w5,
  Zu = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && vr.test(t) && !t.startsWith('url('))
        );
function C5({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function rh(e) {
  return (
    e === 0 ||
    (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
  );
}
function nh(e) {
  return typeof e == 'number' ? 0 : Md('', e);
}
function Wy(e, t) {
  return e[t] || e.default || e;
}
function _5(e, t, r, n) {
  const o = Zu(t, r);
  let i = n.from !== void 0 ? n.from : e.get();
  return (
    i === 'none' && o && typeof r == 'string'
      ? (i = Md(t, r))
      : rh(i) && typeof r == 'string'
        ? (i = nh(r))
        : !Array.isArray(r) && rh(r) && typeof i == 'string' && (r = nh(i)),
    Array.isArray(r) ? (r[0] === null && (r[0] = i), r) : [i, r]
  );
}
const Vd =
  (e, t, r, n = {}) =>
  (o) => {
    const i = Wy(n, e) || {},
      s = i.delay || n.delay || 0;
    let { elapsed: a = 0 } = n;
    a = a - os(s);
    const l = _5(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = Zu(e, u),
      f = Zu(e, c);
    let m = {
      keyframes: l,
      velocity: t.getVelocity(),
      ...i,
      elapsed: a,
      onUpdate: (x) => {
        t.set(x), i.onUpdate && i.onUpdate(x);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (!d || !f || z2.current || i.type === !1) return y5(m);
    if (i.type === 'inertia') return v5(m);
    if (
      (C5(i) || (m = { ...m, ...k5(e, m) }),
      m.duration && (m.duration = os(m.duration)),
      m.repeatDelay && (m.repeatDelay = os(m.repeatDelay)),
      t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate)
    ) {
      const x = g5(t, e, m);
      if (x) return x;
    }
    return Us(m);
  };
function P5(e, t, r = {}) {
  e.notify('AnimationStart', t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Ju(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == 'string') n = Ju(e, t, r);
  else {
    const o = typeof t == 'function' ? Ba(e, t, r.custom) : t;
    n = Hy(e, o, r);
  }
  return n.then(() => e.notify('AnimationComplete', t));
}
function Ju(e, t, r = {}) {
  const n = Ba(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Hy(e, n, r) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return E5(e, t, u + l, c, d, r);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [l, u] = a === 'beforeChildren' ? [i, s] : [s, i];
    return l().then(u);
  } else return Promise.all([i(), s(r.delay)]);
}
function Hy(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue('willChange');
  n && (i = n);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in a) {
    const f = e.getValue(d),
      m = a[d];
    if (!f || m === void 0 || (c && z5(c, d))) continue;
    const x = { delay: r, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const k = e.getProps()[E2];
      k && (x.elapsed = window.HandoffAppearAnimations(k, d, f, Le));
    }
    let v = f.start(
      Vd(d, f, m, e.shouldReduceMotion && Xr.has(d) ? { type: !1 } : x),
    );
    Ws(l) && (l.add(d), (v = v.then(() => l.remove(d)))), u.push(v);
  }
  return Promise.all(u).then(() => {
    s && w2(e, s);
  });
}
function E5(e, t, r = 0, n = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => a - u * n;
  return (
    Array.from(e.variantChildren)
      .sort(T5)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          s.push(
            Ju(u, t, { ...i, delay: r + l(c) }).then(() =>
              u.notify('AnimationComplete', t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function T5(e, t) {
  return e.sortNodePosition(t);
}
function z5({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
const A5 = [...md].reverse(),
  R5 = md.length;
function M5(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => P5(e, r, n)));
}
function $5(e) {
  let t = M5(e);
  const r = L5();
  let n = !0;
  const o = (l, u) => {
    const c = Ba(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...m } = c;
      l = { ...l, ...m, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      m = new Set();
    let x = {},
      v = 1 / 0;
    for (let y = 0; y < R5; y++) {
      const h = A5[y],
        g = r[h],
        w = c[h] !== void 0 ? c[h] : d[h],
        C = Xo(w),
        P = h === u ? g.isActive : null;
      P === !1 && (v = y);
      let _ = w === d[h] && w !== c[h] && C;
      if (
        (_ && n && e.manuallyAnimateOnMount && (_ = !1),
        (g.protectedKeys = { ...x }),
        (!g.isActive && P === null) ||
          (!w && !g.prevProp) ||
          Ra(w) ||
          typeof w == 'boolean')
      )
        continue;
      const T = j5(g.prevProp, w);
      let L = T || (h === u && g.isActive && !_ && C) || (y > v && C);
      const $ = Array.isArray(w) ? w : [w];
      let Y = $.reduce(o, {});
      P === !1 && (Y = {});
      const { prevResolvedValues: Qe = {} } = g,
        lt = { ...Qe, ...Y },
        qe = (me) => {
          (L = !0), m.delete(me), (g.needsAnimating[me] = !0);
        };
      for (const me in lt) {
        const Se = Y[me],
          _t = Qe[me];
        x.hasOwnProperty(me) ||
          (Se !== _t
            ? Ns(Se) && Ns(_t)
              ? !vy(Se, _t) || T
                ? qe(me)
                : (g.protectedKeys[me] = !0)
              : Se !== void 0
                ? qe(me)
                : m.add(me)
            : Se !== void 0 && m.has(me)
              ? qe(me)
              : (g.protectedKeys[me] = !0));
      }
      (g.prevProp = w),
        (g.prevResolvedValues = Y),
        g.isActive && (x = { ...x, ...Y }),
        n && e.blockInitialAnimation && (L = !1),
        L &&
          !_ &&
          f.push(
            ...$.map((me) => ({ animation: me, options: { type: h, ...l } })),
          );
    }
    if (m.size) {
      const y = {};
      m.forEach((h) => {
        const g = e.getBaseTarget(h);
        g !== void 0 && (y[h] = g);
      }),
        f.push({ animation: y });
    }
    let k = !!f.length;
    return (
      n && c.initial === !1 && !e.manuallyAnimateOnMount && (k = !1),
      (n = !1),
      k ? t(f) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var d;
    if (r[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((m) => {
        var x;
        return (x = m.animationState) === null || x === void 0
          ? void 0
          : x.setActive(l, u);
      }),
      (r[l].isActive = u);
    const f = s(c, l);
    for (const m in r) r[m].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => r,
  };
}
function j5(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !vy(t, e) : !1;
}
function Pr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function L5() {
  return {
    animate: Pr(!0),
    whileInView: Pr(),
    whileHover: Pr(),
    whileTap: Pr(),
    whileDrag: Pr(),
    whileFocus: Pr(),
    exit: Pr(),
  };
}
class I5 extends wr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = $5(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ra(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let B5 = 0;
class D5 extends wr {
  constructor() {
    super(...arguments), (this.id = B5++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: r,
        custom: n,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive('exit', !t, {
      custom: n ?? this.node.getProps().custom,
    });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const V5 = { animation: { Feature: I5 }, exit: { Feature: D5 } },
  oh = (e, t) => Math.abs(e - t);
function O5(e, t) {
  const r = oh(e.x, t.x),
    n = oh(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Uy {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Rl(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = O5(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: m } = Ht;
        this.history.push({ ...f, timestamp: m });
        const { onStart: x, onMove: v } = this.handlers;
        c ||
          (x && x(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Al(c, this.transformPagePoint)),
          Le.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          m = Rl(
            u.type === 'pointercancel'
              ? this.lastMoveEventInfo
              : Al(c, this.transformPagePoint),
            this.history,
          );
        this.startEvent && d && d(u, m), f && f(u, m);
      }),
      !py(t))
    )
      return;
    (this.handlers = r), (this.transformPagePoint = n);
    const o = La(t),
      i = Al(o, this.transformPagePoint),
      { point: s } = i,
      { timestamp: a } = Ht;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = r;
    l && l(t, Rl(i, this.history)),
      (this.removeListeners = pr(
        Wt(window, 'pointermove', this.handlePointerMove),
        Wt(window, 'pointerup', this.handlePointerUp),
        Wt(window, 'pointercancel', this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), yr.update(this.updatePoint);
  }
}
function Al(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ih(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Rl({ point: e }, t) {
  return {
    point: e,
    delta: ih(e, Gy(t)),
    offset: ih(e, N5(t)),
    velocity: F5(t, 0.1),
  };
}
function N5(e) {
  return e[0];
}
function Gy(e) {
  return e[e.length - 1];
}
function F5(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const o = Gy(e);
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > os(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const i = (o.timestamp - n.timestamp) / 1e3;
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function ot(e) {
  return e.max - e.min;
}
function ec(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function sh(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = re(t.min, t.max, e.origin)),
    (e.scale = ot(r) / ot(t)),
    (ec(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = re(r.min, r.max, e.origin) - e.originPoint),
    (ec(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function So(e, t, r, n) {
  sh(e.x, t.x, r.x, n ? n.originX : void 0),
    sh(e.y, t.y, r.y, n ? n.originY : void 0);
}
function ah(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + ot(t));
}
function W5(e, t, r) {
  ah(e.x, t.x, r.x), ah(e.y, t.y, r.y);
}
function lh(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + ot(t));
}
function wo(e, t, r) {
  lh(e.x, t.x, r.x), lh(e.y, t.y, r.y);
}
function H5(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? re(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? re(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function uh(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function U5(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: uh(e.x, r, o), y: uh(e.y, t, n) };
}
function ch(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function G5(e, t) {
  return { x: ch(e.x, t.x), y: ch(e.y, t.y) };
}
function Y5(e, t) {
  let r = 0.5;
  const n = ot(e),
    o = ot(t);
  return (
    o > n
      ? (r = Zo(t.min, t.max - n, e.min))
      : n > o && (r = Zo(e.min, e.max - o, t.min)),
    Bn(0, 1, r)
  );
}
function X5(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const tc = 0.35;
function K5(e = tc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = tc),
    { x: dh(e, 'left', 'right'), y: dh(e, 'top', 'bottom') }
  );
}
function dh(e, t, r) {
  return { min: fh(e, t), max: fh(e, r) };
}
function fh(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const ph = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ko = () => ({ x: ph(), y: ph() }),
  hh = () => ({ min: 0, max: 0 }),
  ce = () => ({ x: hh(), y: hh() });
function Tt(e) {
  return [e('x'), e('y')];
}
function Yy({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function Q5({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function q5(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Ml(e) {
  return e === void 0 || e === 1;
}
function rc({ scale: e, scaleX: t, scaleY: r }) {
  return !Ml(e) || !Ml(t) || !Ml(r);
}
function zr(e) {
  return rc(e) || Xy(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Xy(e) {
  return mh(e.x) || mh(e.y);
}
function mh(e) {
  return e && e !== '0%';
}
function Gs(e, t, r) {
  const n = e - r,
    o = t * n;
  return r + o;
}
function gh(e, t, r, n, o) {
  return o !== void 0 && (e = Gs(e, o, n)), Gs(e, r, n) + t;
}
function nc(e, t = 0, r = 1, n, o) {
  (e.min = gh(e.min, t, r, n, o)), (e.max = gh(e.max, t, r, n, o));
}
function Ky(e, { x: t, y: r }) {
  nc(e.x, t.translate, t.scale, t.originPoint),
    nc(e.y, r.translate, r.scale, r.originPoint);
}
function Z5(e, t, r, n = !1) {
  const o = r.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = r[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === 'contents') ||
      (n &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        xn(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Ky(e, s)),
      n && zr(i.latestValues) && xn(e, i.latestValues));
  }
  (t.x = yh(t.x)), (t.y = yh(t.y));
}
function yh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function er(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function vh(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = re(e.min, e.max, i);
  nc(e, t[r], t[n], s, t.scale);
}
const J5 = ['x', 'scaleX', 'originX'],
  eC = ['y', 'scaleY', 'originY'];
function xn(e, t) {
  vh(e.x, t, J5), vh(e.y, t, eC);
}
function Qy(e, t) {
  return Yy(q5(e.getBoundingClientRect(), t));
}
function tC(e, t, r) {
  const n = Qy(e, r),
    { scroll: o } = t;
  return o && (er(n.x, o.offset.x), er(n.y, o.offset.y)), n;
}
const rC = new WeakMap();
class nC {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ce()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), r && this.snapToCursor(La(l, 'page').point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = my(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Tt((x) => {
            let v = this.getAxisMotionValue(x).get() || 0;
            if (It.test(v)) {
              const { projection: k } = this.visualElement;
              if (k && k.layout) {
                const y = k.layout.layoutBox[x];
                y && (v = ot(y) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[x] = v;
          }),
          f && f(l, u);
        const { animationState: m } = this.visualElement;
        m && m.setActive('whileDrag', !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: x } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = oC(x)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis('x', u.point, x),
          this.updateAxis('y', u.point, x),
          this.visualElement.render(),
          m && m(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new Uy(
      t,
      { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() },
    );
  }
  stop(t, r) {
    const n = this.isDragging;
    if ((this.cancel(), !n)) return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && i(t, r);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: n } = this.getProps();
    !n &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive('whileDrag', !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !ji(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (s = H5(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints;
    t && yn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
        ? (this.constraints = U5(n.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = K5(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Tt((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = X5(n.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !yn(t)) return !1;
    const n = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = tC(n, o.root, this.visualElement.getTransformPagePoint());
    let s = G5(o.layout.layoutBox, i);
    if (r) {
      const a = r(Q5(s));
      (this.hasMutatedConstraints = !!a), a && (s = Yy(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Tt((c) => {
        if (!ji(c, r, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          x = {
            type: 'inertia',
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Vd(t, n, 0, r));
  }
  stopAnimation() {
    Tt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const r = '_drag' + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r];
    return (
      o ||
      this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Tt((r) => {
      const { drag: n } = this.getProps();
      if (!ji(r, n, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[r];
        i.set(t[r] - re(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!yn(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Tt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = Y5({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Tt((s) => {
        if (!ji(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(re(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    rC.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Wt(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        yn(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const s = Nt(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        'didUpdate',
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Tt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      s(), r(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = tc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ji(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function oC(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r;
}
class iC extends wr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ht),
      (this.removeListeners = ht),
      (this.controls = new nC(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ht);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
class sC extends wr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ht);
  }
  onPointerDown(t) {
    this.session = new Uy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: n,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: t,
      onStart: r,
      onMove: n,
      onEnd: (i, s) => {
        delete this.session, o && o(i, s);
      },
    };
  }
  mount() {
    this.removePointerDownListener = Wt(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function aC() {
  const e = S.useContext(ai);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = S.useId();
  return S.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function lC() {
  return uC(S.useContext(ai));
}
function uC(e) {
  return e === null ? !0 : e.isPresent;
}
function xh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const to = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const r = xh(e, t.target.x),
        n = xh(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  qy = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function cC(e) {
  const t = qy.exec(e);
  if (!t) return [,];
  const [, r, n] = t;
  return [r, n];
}
function oc(e, t, r = 1) {
  const [n, o] = cC(e);
  if (!n) return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  return i ? i.trim() : Wu(o) ? oc(o, t, r + 1) : o;
}
function dC(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element)) return { target: t, transitionEnd: r };
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!Wu(i)) return;
      const s = oc(i, n);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!Wu(i)) continue;
    const s = oc(i, n);
    s && ((t[o] = s), r && r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const bh = '_$css',
  fC = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = e.includes('var('),
        i = [];
      o && (e = e.replace(qy, (m) => (i.push(m), bh)));
      const s = vr.parse(e);
      if (s.length > 5) return n;
      const a = vr.createTransformer(e),
        l = typeof s[0] != 'number' ? 1 : 0,
        u = r.x.scale * t.x,
        c = r.y.scale * t.y;
      (s[0 + l] /= u), (s[1 + l] /= c);
      const d = re(u, c, 0.5);
      typeof s[2 + l] == 'number' && (s[2 + l] /= d),
        typeof s[3 + l] == 'number' && (s[3 + l] /= d);
      let f = a(s);
      if (o) {
        let m = 0;
        f = f.replace(bh, () => {
          const x = i[m];
          return m++, x;
        });
      }
      return f;
    },
  };
class pC extends St.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    pk(hC),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (vo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: n,
        drag: o,
        isPresent: i,
      } = this.props,
      s = n.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== r || r === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Le.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(o),
      n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Zy(e) {
  const [t, r] = aC(),
    n = S.useContext(yd);
  return St.createElement(pC, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: S.useContext(Jg),
    isPresent: t,
    safeToRemove: r,
  });
}
const hC = {
  borderRadius: {
    ...to,
    applyTo: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
  borderTopLeftRadius: to,
  borderTopRightRadius: to,
  borderBottomLeftRadius: to,
  borderBottomRightRadius: to,
  boxShadow: fC,
};
function mC(e, t, r = {}) {
  const n = Ke(e) ? e : Dn(e);
  return (
    n.start(Vd('', n, t, r)),
    { stop: () => n.stop(), isAnimating: () => n.isAnimating() }
  );
}
const Jy = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  gC = Jy.length,
  Sh = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  wh = (e) => typeof e == 'number' || I.test(e);
function yC(e, t, r, n, o, i) {
  o
    ? ((e.opacity = re(0, r.opacity !== void 0 ? r.opacity : 1, vC(n))),
      (e.opacityExit = re(t.opacity !== void 0 ? t.opacity : 1, 0, xC(n))))
    : i &&
      (e.opacity = re(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n,
      ));
  for (let s = 0; s < gC; s++) {
    const a = `border${Jy[s]}Radius`;
    let l = kh(t, a),
      u = kh(r, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || wh(l) === wh(u)
        ? ((e[a] = Math.max(re(Sh(l), Sh(u), n), 0)),
          (It.test(u) || It.test(l)) && (e[a] += '%'))
        : (e[a] = u);
  }
  (t.rotate || r.rotate) && (e.rotate = re(t.rotate || 0, r.rotate || 0, n));
}
function kh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const vC = ev(0, 0.5, Bd),
  xC = ev(0.5, 0.95, ht);
function ev(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(Zo(e, t, n)));
}
function Ch(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ut(e, t) {
  Ch(e.x, t.x), Ch(e.y, t.y);
}
function _h(e, t, r, n, o) {
  return (
    (e -= t), (e = Gs(e, 1 / r, n)), o !== void 0 && (e = Gs(e, 1 / o, n)), e
  );
}
function bC(e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
  if (
    (It.test(t) &&
      ((t = parseFloat(t)), (t = re(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = re(i.min, i.max, n);
  e === i && (a -= t),
    (e.min = _h(e.min, t, r, a, o)),
    (e.max = _h(e.max, t, r, a, o));
}
function Ph(e, t, [r, n, o], i, s) {
  bC(e, t[r], t[n], t[o], t.scale, i, s);
}
const SC = ['x', 'scaleX', 'originX'],
  wC = ['y', 'scaleY', 'originY'];
function Eh(e, t, r, n) {
  Ph(e.x, t, SC, r ? r.x : void 0, n ? n.x : void 0),
    Ph(e.y, t, wC, r ? r.y : void 0, n ? n.y : void 0);
}
function Th(e) {
  return e.translate === 0 && e.scale === 1;
}
function tv(e) {
  return Th(e.x) && Th(e.y);
}
function ic(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function zh(e) {
  return ot(e.x) / ot(e.y);
}
class kC {
  constructor() {
    this.members = [];
  }
  add(t) {
    Pd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Ed(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0) return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ah(e, t, r) {
  let n = '';
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `),
      u && (n += `rotateX(${u}deg) `),
      c && (n += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (n += `scale(${s}, ${a})`), n || 'none';
}
const CC = (e, t) => e.depth - t.depth;
class _C {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Pd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Ed(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(CC),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function PC(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
const Rh = ['', 'X', 'Y', 'Z'],
  Mh = 1e3;
let EC = 0;
const Ar = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function rv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(s, a = {}, l = t == null ? void 0 : t()) {
      (this.id = EC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Ar.totalNodes =
            Ar.resolvedTargetDeltas =
            Ar.recalculatedProjection =
              0),
            this.nodes.forEach(AC),
            this.nodes.forEach(jC),
            this.nodes.forEach(LC),
            this.nodes.forEach(RC),
            PC(Ar);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = s),
        (this.latestValues = a),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _C());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Td()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    registerPotentialNode(s, a) {
      this.potentialNodes.set(s, a);
    }
    mount(s, a = !1) {
      if (this.instance) return;
      (this.isSVG = s instanceof SVGElement && s.tagName !== 'svg'),
        (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = Fy(f, 250)),
            vo.hasAnimatedSinceResize &&
              ((vo.hasAnimatedSinceResize = !1), this.nodes.forEach(jh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: m,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || OC,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: y } =
                  c.getProps(),
                h = !this.targetLayout || !ic(this.targetLayout, x) || m,
                g = !f && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const w = { ...Wy(v, 'layout'), onPlay: k, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                !f && this.animationProgress === 0 && jh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        yr.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(IC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate');
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach($h);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(NC), this.potentialNodes.clear()),
        this.nodes.forEach($C),
        this.nodes.forEach(TC),
        this.nodes.forEach(zC),
        this.clearAllSnapshots(),
        Cl.update(),
        Cl.preRender(),
        Cl.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(MC), this.sharedNodes.forEach(BC);
    }
    scheduleUpdateProjection() {
      Le.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Le.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ce()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: n(this.instance),
            offset: r(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !tv(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || zr(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        FC(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ce();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (er(a.x, l.offset.x), er(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = ce();
      ut(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            ut(a, s);
            const { scroll: f } = this.root;
            f && (er(a.x, -f.offset.x), er(a.y, -f.offset.y));
          }
          er(a.x, c.offset.x), er(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ce();
      ut(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          xn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          zr(c.latestValues) && xn(l, c.latestValues);
      }
      return zr(this.latestValues) && xn(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ce();
      ut(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !zr(u.latestValues)) continue;
        rc(u.latestValues) && u.updateSnapshot();
        const c = ce(),
          d = u.measurePageBox();
        ut(c, d),
          Eh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return zr(this.latestValues) && Eh(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    resolveTargetDelta() {
      var s;
      const a = this.getLead();
      if (
        (this.isProjectionDirty ||
          (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty),
        !(
          ((!!this.resumingFrom || this !== a) &&
            this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        ))
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout
            ? ((this.relativeParent = f),
              (this.relativeTarget = ce()),
              (this.relativeTargetOrigin = ce()),
              wo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                f.layout.layoutBox,
              ),
              ut(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ce()), (this.targetWithTransforms = ce())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? W5(this.target, this.relativeTarget, this.relativeParent.target)
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : ut(this.target, this.layout.layoutBox),
                  Ky(this.target, this.targetDelta))
                : ut(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const f = this.getClosestProjectingParent();
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target
              ? ((this.relativeParent = f),
                (this.relativeTarget = ce()),
                (this.relativeTargetOrigin = ce()),
                wo(this.relativeTargetOrigin, this.target, f.target),
                ut(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ar.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          rc(this.parent.latestValues) ||
          Xy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      ut(this.layoutCorrected, this.layout.layoutBox),
        Z5(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: f } = a;
      if (!f) return;
      this.projectionDelta ||
        ((this.projectionDelta = ko()),
        (this.projectionDeltaWithTransform = ko()));
      const m = this.treeScale.x,
        x = this.treeScale.y,
        v = this.projectionTransform;
      So(this.projectionDelta, this.layoutCorrected, f, this.latestValues),
        (this.projectionTransform = Ah(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== m ||
          this.treeScale.y !== x) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', f)),
        Ar.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ko();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = ce(),
        m = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        v = m !== x,
        k = this.getStack(),
        y = !k || k.members.length <= 1,
        h = !!(v && !y && this.options.crossfade === !0 && !this.path.some(VC));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (w) => {
        const C = w / 1e3;
        Lh(d.x, s.x, C),
          Lh(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (wo(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            DC(this.relativeTarget, this.relativeTargetOrigin, f, C),
            g && ic(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ce()),
            ut(g, this.relativeTarget)),
          v &&
            ((this.animationValues = c), yC(c, u, this.latestValues, C, h, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (yr.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Le.update(() => {
          (vo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = mC(0, Mh, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Mh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          nv(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ce();
          const d = ot(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = ot(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        ut(a, l),
          xn(a, c),
          So(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new kC()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < Rh.length; c++) {
        const d = 'rotate' + Rh[c];
        l[d] && ((u[d] = l[d]), s.setStaticValue(d, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = '';
      else return { visibility: 'hidden' };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = ns(s.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = ns(s.pointerEvents) || '')),
          this.hasProjected &&
            !zr(this.latestValues) &&
            ((v.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Ah(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        c && (u.transform = c(f, u.transform));
      const { x: m, y: x } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${x.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0);
      for (const v in Vs) {
        if (f[v] === void 0) continue;
        const { correct: k, applyTo: y } = Vs[v],
          h = u.transform === 'none' ? f[v] : k(f[v], d);
        if (y) {
          const g = y.length;
          for (let w = 0; w < g; w++) u[y[w]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? ns(s.pointerEvents) || '' : 'none'),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach($h),
        this.root.sharedNodes.clear();
    }
  };
}
function TC(e) {
  e.updateLayout();
}
function zC(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = r.source !== e.layout.source;
    i === 'size'
      ? Tt((d) => {
          const f = s ? r.measuredBox[d] : r.layoutBox[d],
            m = ot(f);
          (f.min = n[d].min), (f.max = f.min + m);
        })
      : nv(i, r.layoutBox, n) &&
        Tt((d) => {
          const f = s ? r.measuredBox[d] : r.layoutBox[d],
            m = ot(n[d]);
          f.max = f.min + m;
        });
    const a = ko();
    So(a, n, r.layoutBox);
    const l = ko();
    s ? So(l, e.applyTransform(o, !0), r.measuredBox) : So(l, n, r.layoutBox);
    const u = !tv(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const x = ce();
          wo(x, r.layoutBox, f.layoutBox);
          const v = ce();
          wo(v, n, m.layoutBox),
            ic(x, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function AC(e) {
  Ar.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function RC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function MC(e) {
  e.clearSnapshot();
}
function $h(e) {
  e.clearMeasurements();
}
function $C(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function jh(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function jC(e) {
  e.resolveTargetDelta();
}
function LC(e) {
  e.calcProjection();
}
function IC(e) {
  e.resetRotation();
}
function BC(e) {
  e.removeLeadSnapshot();
}
function Lh(e, t, r) {
  (e.translate = re(t.translate, 0, r)),
    (e.scale = re(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Ih(e, t, r, n) {
  (e.min = re(t.min, r.min, n)), (e.max = re(t.max, r.max, n));
}
function DC(e, t, r, n) {
  Ih(e.x, t.x, r.x, n), Ih(e.y, t.y, r.y, n);
}
function VC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const OC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function NC(e, t) {
  let r = e.root;
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      r = e.path[i];
      break;
    }
  const o = (r && r !== e.root ? r.instance : document).querySelector(
    `[data-projection-id="${t}"]`,
  );
  o && e.mount(o, !0);
}
function Bh(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function FC(e) {
  Bh(e.x), Bh(e.y);
}
function nv(e, t, r) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !ec(zh(t), zh(r), 0.2))
  );
}
const WC = rv({
    attachResizeListener: (e, t) => Nt(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  $l = { current: void 0 },
  ov = rv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!$l.current) {
        const e = new WC(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), ($l.current = e);
      }
      return $l.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  HC = {
    pan: { Feature: sC },
    drag: { Feature: iC, ProjectionNode: ov, MeasureLayout: Zy },
  },
  UC = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  iv = (e) => UC.has(e),
  GC = (e) => Object.keys(e).some(iv),
  Dh = (e) => e === Kr || e === I,
  Vh = (e, t) => parseFloat(e.split(', ')[t]),
  Oh =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === 'none' || !n) return 0;
      const o = n.match(/^matrix3d\((.+)\)$/);
      if (o) return Vh(o[1], t);
      {
        const i = n.match(/^matrix\((.+)\)$/);
        return i ? Vh(i[1], e) : 0;
      }
    },
  YC = new Set(['x', 'y', 'z']),
  XC = ja.filter((e) => !YC.has(e));
function KC(e) {
  const t = [];
  return (
    XC.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Nh = {
    width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(r),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Oh(4, 13),
    y: Oh(5, 14),
  },
  QC = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === 'none' && t.setStaticValue('display', e.display || 'block'),
      r.forEach((u) => {
        a[u] = Nh[u](n, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      r.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = Nh[u](l, i));
      }),
      e
    );
  },
  qC = (e, t, r = {}, n = {}) => {
    (t = { ...t }), (n = { ...n });
    const o = Object.keys(t).filter(iv);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = r[l],
          d = eo(c);
        const f = t[l];
        let m;
        if (Ns(f)) {
          const x = f.length,
            v = f[0] === null ? 1 : 0;
          (c = f[v]), (d = eo(c));
          for (let k = v; k < x; k++) m ? Hs(eo(f[k]) === m) : (m = eo(f[k]));
        } else m = eo(f);
        if (d !== m)
          if (Dh(d) && Dh(m)) {
            const x = u.get();
            typeof x == 'string' && u.set(parseFloat(x)),
              typeof f == 'string'
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && m === I && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            m != null &&
            m.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[l] = d.transform(f))
              : (s || ((i = KC(e)), (s = !0)),
                a.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f));
      }),
      a.length)
    ) {
      const l = a.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = QC(t, e, a);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Aa && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      );
    } else return { target: t, transitionEnd: n };
  };
function ZC(e, t, r, n) {
  return GC(t) ? qC(e, t, r, n) : { target: t, transitionEnd: n };
}
const JC = (e, t, r, n) => {
    const o = dC(e, t, n);
    return (t = o.target), (n = o.transitionEnd), ZC(e, t, r, n);
  },
  sc = { current: null },
  sv = { current: !1 };
function e_() {
  if (((sv.current = !0), !!Aa))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (sc.current = e.matches);
      e.addListener(t), t();
    } else sc.current = !1;
}
function t_(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o],
      s = r[o];
    if (Ke(i)) e.addValue(o, i), Ws(n) && n.add(o);
    else if (Ke(s)) e.addValue(o, Dn(i, { owner: e })), Ws(n) && n.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Dn(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o);
  return t;
}
const av = Object.keys(Ko),
  r_ = av.length,
  Fh = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  n_ = gd.length;
class o_ {
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: n,
      reducedMotionConfig: o,
      visualState: i,
    },
    s = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => Le.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = i;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = r.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.isControllingVariants = Ma(r)),
      (this.isVariantNode = Zg(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      a[d] !== void 0 && Ke(f) && (f.set(a[d], !1), Ws(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    (this.current = t),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      sv.current || e_(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : sc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      yr.update(this.notifyUpdate),
      yr.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Xr.has(t),
      o = r.on('change', (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Le.update(this.notifyUpdate, !1, !0),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = r.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i, s) {
    let a, l;
    for (let u = 0; u < r_; u++) {
      const c = av[u],
        {
          isEnabled: d,
          Feature: f,
          ProjectionNode: m,
          MeasureLayout: x,
        } = Ko[c];
      m && (a = m),
        d(r) &&
          (!this.features[c] && f && (this.features[c] = new f(this)),
          x && (l = x));
    }
    if (!this.projection && a) {
      this.projection = new a(
        i,
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: u,
        layout: c,
        drag: d,
        dragConstraints: f,
        layoutScroll: m,
        layoutRoot: x,
      } = r;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!d || (f && yn(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == 'string' ? c : 'both',
        initialPromotionConfig: s,
        layoutScroll: m,
        layoutRoot: x,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted
        ? r.update(this.props, this.prevProps)
        : (r.mount(), (r.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let n = 0; n < Fh.length; n++) {
      const o = Fh[n];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t['on' + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = t_(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    const r = {};
    for (let n = 0; n < n_; n++) {
      const o = gd[n],
        i = this.props[o];
      (Xo(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    r !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, r)),
      this.values.set(t, r),
      (this.latestValues[t] = r.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return (
      n === void 0 &&
        r !== void 0 &&
        ((n = Dn(r, { owner: this })), this.addValue(t, n)),
      n
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props,
      o =
        typeof n == 'string' || typeof n == 'object'
          ? (r = _d(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0;
    if (n && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ke(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Td()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class lv extends o_ {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: r, ...n },
    { transformValues: o },
    i,
  ) {
    let s = _2(n, t || {}, this);
    if ((o && (r && (r = o(r)), n && (n = o(n)), s && (s = o(s))), i)) {
      k2(this, n, s);
      const a = JC(this, n, s, r);
      (r = a.transitionEnd), (n = a.target);
    }
    return { transition: t, transitionEnd: r, ...n };
  }
}
function i_(e) {
  return window.getComputedStyle(e);
}
class s_ extends lv {
  readValueFromInstance(t, r) {
    if (Xr.has(r)) {
      const n = Rd(r);
      return (n && n.default) || 0;
    } else {
      const n = i_(t),
        o = (ry(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Qy(t, r);
  }
  build(t, r, n, o) {
    xd(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Cd(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ke(t) &&
      (this.childSubscription = t.on('change', (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, o) {
    ly(t, r, n, o);
  }
}
class a_ extends lv {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Xr.has(r)) {
      const n = Rd(r);
      return (n && n.default) || 0;
    }
    return (r = uy.has(r) ? r : kd(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ce();
  }
  scrapeMotionValuesFromProps(t, r) {
    return dy(t, r);
  }
  build(t, r, n, o) {
    Sd(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    cy(t, r, n, o);
  }
  mount(t) {
    (this.isSVGTag = wd(t.tagName)), super.mount(t);
  }
}
const l_ = (e, t) =>
    vd(e)
      ? new a_(t, { enableHardwareAcceleration: !1 })
      : new s_(t, { enableHardwareAcceleration: !0 }),
  u_ = { layout: { ProjectionNode: ov, MeasureLayout: Zy } },
  c_ = { ...V5, ...qk, ...HC, ...u_ },
  Od = dk((e, t) => Dk(e, t, c_, l_));
function uv() {
  const e = S.useRef(!1);
  return (
    Ds(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function d_() {
  const e = uv(),
    [t, r] = S.useState(0),
    n = S.useCallback(() => {
      e.current && r(t + 1);
    }, [t]);
  return [S.useCallback(() => Le.postRender(n), [n]), t];
}
class f_ extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      (n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function p_({ children: e, isPresent: t }) {
  const r = S.useId(),
    n = S.useRef(null),
    o = S.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    S.useInsertionEffect(() => {
      const { width: i, height: s, top: a, left: l } = o.current;
      if (t || !n.current || !i || !s) return;
      n.current.dataset.motionPopId = r;
      const u = document.createElement('style');
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    S.createElement(
      f_,
      { isPresent: t, childRef: n, sizeRef: o },
      S.cloneElement(e, { ref: n }),
    )
  );
}
const jl = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = $a(h_),
    l = S.useId(),
    u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: r,
        custom: o,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const d of a.values()) if (!d) return;
          n && n();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      i ? void 0 : [r],
    );
  return (
    S.useMemo(() => {
      a.forEach((c, d) => a.set(d, !1));
    }, [r]),
    S.useEffect(() => {
      !r && !a.size && n && n();
    }, [r]),
    s === 'popLayout' && (e = S.createElement(p_, { isPresent: r }, e)),
    S.createElement(ai.Provider, { value: u }, e)
  );
};
function h_() {
  return new Map();
}
function m_(e) {
  return S.useEffect(() => () => e(), []);
}
const rn = (e) => e.key || '';
function g_(e, t) {
  e.forEach((r) => {
    const n = rn(r);
    t.set(n, r);
  });
}
function y_(e) {
  const t = [];
  return (
    S.Children.forEach(e, (r) => {
      S.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const Nd = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: s = 'sync',
}) => {
  o && (s = 'wait');
  let [a] = d_();
  const l = S.useContext(yd).forceRender;
  l && (a = l);
  const u = uv(),
    c = y_(e);
  let d = c;
  const f = new Set(),
    m = S.useRef(d),
    x = S.useRef(new Map()).current,
    v = S.useRef(!0);
  if (
    (Ds(() => {
      (v.current = !1), g_(c, x), (m.current = d);
    }),
    m_(() => {
      (v.current = !0), x.clear(), f.clear();
    }),
    v.current)
  )
    return S.createElement(
      S.Fragment,
      null,
      d.map((g) =>
        S.createElement(
          jl,
          {
            key: rn(g),
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: s,
          },
          g,
        ),
      ),
    );
  d = [...d];
  const k = m.current.map(rn),
    y = c.map(rn),
    h = k.length;
  for (let g = 0; g < h; g++) {
    const w = k[g];
    y.indexOf(w) === -1 && f.add(w);
  }
  return (
    s === 'wait' && f.size && (d = []),
    f.forEach((g) => {
      if (y.indexOf(g) !== -1) return;
      const w = x.get(g);
      if (!w) return;
      const C = k.indexOf(g),
        P = () => {
          x.delete(g), f.delete(g);
          const _ = m.current.findIndex((T) => T.key === g);
          if ((m.current.splice(_, 1), !f.size)) {
            if (((m.current = c), u.current === !1)) return;
            a(), n && n();
          }
        };
      d.splice(
        C,
        0,
        S.createElement(
          jl,
          {
            key: rn(w),
            isPresent: !1,
            onExitComplete: P,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
          },
          w,
        ),
      );
    }),
    (d = d.map((g) => {
      const w = g.key;
      return f.has(w)
        ? g
        : S.createElement(
            jl,
            { key: rn(g), isPresent: !0, presenceAffectsLayout: i, mode: s },
            g,
          );
    })),
    S.createElement(
      S.Fragment,
      null,
      f.size ? d : d.map((g) => S.cloneElement(g)),
    )
  );
};
function v_({ children: e, isValidProp: t, ...r }) {
  t && sy(t),
    (r = { ...S.useContext(Bs), ...r }),
    (r.isStatic = $a(() => r.isStatic));
  const n = S.useMemo(
    () => r,
    [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion],
  );
  return S.createElement(Bs.Provider, { value: n }, e);
}
var Da = ue(({ as: e = 'div', className: t, ...r }, n) =>
    b.jsx(K.div, { as: Od[e], ref: n, className: le('ui-motion', t), ...r }),
  ),
  [cv, x_] = pa({ strict: !1, name: 'PortalContext' }),
  b_ = ({ children: e, containerRef: t, appendToParentPortal: r }) => {
    const n = t.current,
      o = n ?? (typeof window < 'u' ? document.body : void 0),
      i = S.useMemo(() => {
        if (!n) return;
        const { ownerDocument: a } = n,
          l = a.createElement('div');
        return l && (l.className = 'ui-portal'), l;
      }, [n]),
      [, s] = S.useState({});
    return (
      Ms(() => s({}), []),
      Ms(() => {
        if (!(!i || !o))
          return (
            o.appendChild(i),
            () => {
              o.removeChild(i);
            }
          );
      }, [i, o]),
      o && i
        ? rd.createPortal(b.jsx(cv, { value: r ? i : null, children: e }), i)
        : null
    );
  },
  S_ = ({ appendToParentPortal: e, children: t }) => {
    const [r, n] = S.useState(null),
      o = S.useRef(null),
      [, i] = S.useState({});
    S.useEffect(() => i({}), []);
    const s = x_();
    return (
      Ms(() => {
        if (!r) return;
        const { ownerDocument: a } = r,
          l = e ? s ?? a.body : a.body;
        if (!l) return;
        (o.current = a.createElement('div')),
          (o.current.className = 'ui-portal'),
          l.appendChild(o.current),
          i({});
        const u = o.current;
        return () => {
          l.contains(u) && l.removeChild(u);
        };
      }, [r]),
      o.current
        ? rd.createPortal(
            b.jsx(cv, { value: o.current, children: t }),
            o.current,
          )
        : b.jsx('span', { ref: (a) => (a ? n(a) : void 0) })
    );
  },
  Va = ({
    containerRef: e,
    appendToParentPortal: t = !0,
    isDisabled: r,
    children: n,
  }) =>
    r
      ? n
      : e
        ? b.jsx(b_, { containerRef: e, appendToParentPortal: t, children: n })
        : b.jsx(S_, { appendToParentPortal: t, children: n });
Va.className = 'ui-portal';
Va.selector = '.ui-portal';
var Oa = (e, t) => {
    const r = wb(e);
    S.useEffect(() => {
      if (t == null) return;
      let n = null;
      return (
        (n = window.setTimeout(r, t)),
        () => {
          n && window.clearTimeout(n);
        }
      );
    }, [t, r]);
  },
  Mt = function () {
    return (
      (Mt =
        Object.assign ||
        function (t) {
          for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
      Mt.apply(this, arguments)
    );
  };
function dv(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  return r;
}
function w_(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var is = 'right-scroll-bar-position',
  ss = 'width-before-scroll-bar',
  k_ = 'with-scroll-bars-hidden',
  C_ = '--removed-body-scroll-bar-size';
function Ll(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function __(e, t) {
  var r = S.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && ((r.value = n), r.callback(n, o));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
var Wh = new WeakMap();
function P_(e, t) {
  var r = __(t || null, function (n) {
    return e.forEach(function (o) {
      return Ll(o, n);
    });
  });
  return (
    S.useLayoutEffect(
      function () {
        var n = Wh.get(r);
        if (n) {
          var o = new Set(n),
            i = new Set(e),
            s = r.current;
          o.forEach(function (a) {
            i.has(a) || Ll(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || Ll(a, s);
            });
        }
        Wh.set(r, e);
      },
      [e],
    ),
    r
  );
}
function E_(e) {
  return e;
}
function T_(e, t) {
  t === void 0 && (t = E_);
  var r = [],
    n = !1,
    o = {
      read: function () {
        if (n)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, n);
        return (
          r.push(s),
          function () {
            r = r.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (n = !0; r.length; ) {
          var s = r;
          (r = []), s.forEach(i);
        }
        r = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (i) {
        n = !0;
        var s = [];
        if (r.length) {
          var a = r;
          (r = []), a.forEach(i), (s = r);
        }
        var l = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (r = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), r;
            },
          });
      },
    };
  return o;
}
function z_(e) {
  e === void 0 && (e = {});
  var t = T_(null);
  return (t.options = Mt({ async: !0, ssr: !1 }, e)), t;
}
var fv = function (e) {
  var t = e.sideCar,
    r = dv(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    );
  var n = t.read();
  if (!n) throw new Error('Sidecar medium not found');
  return S.createElement(n, Mt({}, r));
};
fv.isSideCarExport = !0;
function A_(e, t) {
  return e.useMedium(t), fv;
}
var pv = z_(),
  Il = function () {},
  Na = S.forwardRef(function (e, t) {
    var r = S.useRef(null),
      n = S.useState({
        onScrollCapture: Il,
        onWheelCapture: Il,
        onTouchMoveCapture: Il,
      }),
      o = n[0],
      i = n[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      m = e.noIsolation,
      x = e.inert,
      v = e.allowPinchZoom,
      k = e.as,
      y = k === void 0 ? 'div' : k,
      h = e.gapMode,
      g = dv(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      w = f,
      C = P_([r, t]),
      P = Mt(Mt({}, g), o);
    return S.createElement(
      S.Fragment,
      null,
      c &&
        S.createElement(w, {
          sideCar: pv,
          removeScrollBar: u,
          shards: d,
          noIsolation: m,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: r,
          gapMode: h,
        }),
      s
        ? S.cloneElement(S.Children.only(a), Mt(Mt({}, P), { ref: C }))
        : S.createElement(y, Mt({}, P, { className: l, ref: C }), a),
    );
  });
Na.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Na.classNames = { fullWidth: ss, zeroRight: is };
var Hh,
  R_ = function () {
    if (Hh) return Hh;
    if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
  };
function M_() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = R_();
  return t && e.setAttribute('nonce', t), e;
}
function $_(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function j_(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var L_ = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = M_()) && ($_(t, r), j_(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  I_ = function () {
    var e = L_();
    return function (t, r) {
      S.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r],
      );
    };
  },
  hv = function () {
    var e = I_(),
      t = function (r) {
        var n = r.styles,
          o = r.dynamic;
        return e(n, o), null;
      };
    return t;
  },
  B_ = { left: 0, top: 0, right: 0, gap: 0 },
  Bl = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  D_ = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      n = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Bl(r), Bl(n), Bl(o)];
  },
  V_ = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return B_;
    var t = D_(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  O_ = hv(),
  N_ = function (e, t, r, n) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      r === void 0 && (r = 'margin'),
      `
  .`
        .concat(
          k_,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(a, 'px ')
        .concat(
          n,
          `;
  }
  body {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(n, ';'),
            r === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, 'px ')
                .concat(
                  n,
                  `;
    `,
                ),
            r === 'padding' &&
              'padding-right: '.concat(a, 'px ').concat(n, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          is,
          ` {
    right: `,
        )
        .concat(a, 'px ')
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          ss,
          ` {
    margin-right: `,
        )
        .concat(a, 'px ')
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(is, ' .')
        .concat(
          is,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(ss, ' .')
        .concat(
          ss,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body {
    `,
        )
        .concat(C_, ': ')
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  F_ = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      o = n === void 0 ? 'margin' : n,
      i = S.useMemo(
        function () {
          return V_(o);
        },
        [o],
      );
    return S.createElement(O_, { styles: N_(i, !t, o, r ? '' : '!important') });
  },
  ac = !1;
if (typeof window < 'u')
  try {
    var Li = Object.defineProperty({}, 'passive', {
      get: function () {
        return (ac = !0), !0;
      },
    });
    window.addEventListener('test', Li, Li),
      window.removeEventListener('test', Li, Li);
  } catch {
    ac = !1;
  }
var Jr = ac ? { passive: !1 } : !1,
  W_ = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  mv = function (e, t) {
    var r = window.getComputedStyle(e);
    return (
      r[t] !== 'hidden' &&
      !(r.overflowY === r.overflowX && !W_(e) && r[t] === 'visible')
    );
  },
  H_ = function (e) {
    return mv(e, 'overflowY');
  },
  U_ = function (e) {
    return mv(e, 'overflowX');
  },
  Uh = function (e, t) {
    var r = t.ownerDocument,
      n = t;
    do {
      typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host);
      var o = gv(e, n);
      if (o) {
        var i = yv(e, n),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      n = n.parentNode;
    } while (n && n !== r.body);
    return !1;
  },
  G_ = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  Y_ = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  gv = function (e, t) {
    return e === 'v' ? H_(t) : U_(t);
  },
  yv = function (e, t) {
    return e === 'v' ? G_(t) : Y_(t);
  },
  X_ = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  K_ = function (e, t, r, n, o) {
    var i = X_(e, window.getComputedStyle(t).direction),
      s = i * n,
      a = r.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      d = 0,
      f = 0;
    do {
      var m = yv(e, a),
        x = m[0],
        v = m[1],
        k = m[2],
        y = v - k - i * x;
      (x || y) && gv(e, a) && ((d += y), (f += x)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && ((o && Math.abs(d) < 1) || (!o && s > d))) ||
        (!c && ((o && Math.abs(f) < 1) || (!o && -s > f)))) &&
        (u = !0),
      u
    );
  },
  Ii = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Gh = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Yh = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  Q_ = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  q_ = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Z_ = 0,
  en = [];
function J_(e) {
  var t = S.useRef([]),
    r = S.useRef([0, 0]),
    n = S.useRef(),
    o = S.useState(Z_++)[0],
    i = S.useState(hv)[0],
    s = S.useRef(e);
  S.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    S.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var v = w_([e.lockRef.current], (e.shards || []).map(Yh), !0).filter(
            Boolean,
          );
          return (
            v.forEach(function (k) {
              return k.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                v.forEach(function (k) {
                  return k.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = S.useCallback(function (v, k) {
      if ('touches' in v && v.touches.length === 2)
        return !s.current.allowPinchZoom;
      var y = Ii(v),
        h = r.current,
        g = 'deltaX' in v ? v.deltaX : h[0] - y[0],
        w = 'deltaY' in v ? v.deltaY : h[1] - y[1],
        C,
        P = v.target,
        _ = Math.abs(g) > Math.abs(w) ? 'h' : 'v';
      if ('touches' in v && _ === 'h' && P.type === 'range') return !1;
      var T = Uh(_, P);
      if (!T) return !0;
      if ((T ? (C = _) : ((C = _ === 'v' ? 'h' : 'v'), (T = Uh(_, P))), !T))
        return !1;
      if (
        (!n.current && 'changedTouches' in v && (g || w) && (n.current = C), !C)
      )
        return !0;
      var L = n.current || C;
      return K_(L, k, v, L === 'h' ? g : w, !0);
    }, []),
    l = S.useCallback(function (v) {
      var k = v;
      if (!(!en.length || en[en.length - 1] !== i)) {
        var y = 'deltaY' in k ? Gh(k) : Ii(k),
          h = t.current.filter(function (C) {
            return (
              C.name === k.type &&
              (C.target === k.target || k.target === C.shadowParent) &&
              Q_(C.delta, y)
            );
          })[0];
        if (h && h.should) {
          k.cancelable && k.preventDefault();
          return;
        }
        if (!h) {
          var g = (s.current.shards || [])
              .map(Yh)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(k.target);
              }),
            w = g.length > 0 ? a(k, g[0]) : !s.current.noIsolation;
          w && k.cancelable && k.preventDefault();
        }
      }
    }, []),
    u = S.useCallback(function (v, k, y, h) {
      var g = { name: v, delta: k, target: y, should: h, shadowParent: e4(y) };
      t.current.push(g),
        setTimeout(function () {
          t.current = t.current.filter(function (w) {
            return w !== g;
          });
        }, 1);
    }, []),
    c = S.useCallback(function (v) {
      (r.current = Ii(v)), (n.current = void 0);
    }, []),
    d = S.useCallback(function (v) {
      u(v.type, Gh(v), v.target, a(v, e.lockRef.current));
    }, []),
    f = S.useCallback(function (v) {
      u(v.type, Ii(v), v.target, a(v, e.lockRef.current));
    }, []);
  S.useEffect(function () {
    return (
      en.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener('wheel', l, Jr),
      document.addEventListener('touchmove', l, Jr),
      document.addEventListener('touchstart', c, Jr),
      function () {
        (en = en.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener('wheel', l, Jr),
          document.removeEventListener('touchmove', l, Jr),
          document.removeEventListener('touchstart', c, Jr);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    x = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    x ? S.createElement(i, { styles: q_(o) }) : null,
    m ? S.createElement(F_, { gapMode: e.gapMode }) : null,
  );
}
function e4(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const t4 = A_(pv, J_);
var vv = S.forwardRef(function (e, t) {
  return S.createElement(Na, Mt({}, e, { ref: t, sideCar: t4 }));
});
vv.classNames = Na.classNames;
const r4 = vv;
var n4 = S.createContext({}),
  Bi = () => ({
    isLoading: S.createRef(),
    start: S.createRef(),
    finish: S.createRef(),
    update: S.createRef(),
    force: S.createRef(),
  }),
  Di = (e) => ({
    isLoading: () => {
      var t, r, n;
      return (n =
        (r = (t = e.current.isLoading).current) == null ? void 0 : r.call(t)) !=
        null
        ? n
        : !1;
    },
    start: (t) => {
      var r, n;
      return (n = (r = e.current.start).current) == null
        ? void 0
        : n.call(r, t);
    },
    finish: () => {
      var t, r;
      return (r = (t = e.current.finish).current) == null ? void 0 : r.call(t);
    },
    update: (t) => {
      var r, n;
      return (n = (r = e.current.update).current) == null
        ? void 0
        : n.call(r, t);
    },
    force: (t) => {
      var r, n;
      return (n = (r = e.current.force).current) == null
        ? void 0
        : n.call(r, t);
    },
  }),
  o4 = (e) => e + 1,
  i4 = (e) => (e === 0 ? e : e - 1),
  s4 = ({ screen: e, page: t, background: r, custom: n, children: o }) => {
    var i, s, a, l, u;
    const c = S.useRef(Bi()),
      d = S.useRef(Bi()),
      f = S.useRef(Bi()),
      m = S.useRef(Bi()),
      x = Di(c),
      v = Di(d),
      k = Di(f),
      y = Di(m),
      h = { screen: x, page: v, background: k, custom: y };
    return b.jsxs(n4.Provider, {
      value: h,
      children: [
        o,
        b.jsx(Vi, {
          controlRefs: c,
          ...e,
          component:
            (i = e == null ? void 0 : e.component) != null
              ? i
              : (g) => b.jsx(bv, { ...g }),
        }),
        b.jsx(Vi, {
          controlRefs: d,
          ...t,
          component:
            (s = t == null ? void 0 : t.component) != null
              ? s
              : (g) => b.jsx(Sv, { ...g }),
        }),
        b.jsx(Vi, {
          controlRefs: f,
          ...r,
          blockScrollOnMount:
            (a = r == null ? void 0 : r.blockScrollOnMount) != null ? a : !1,
          component:
            (l = r == null ? void 0 : r.component) != null
              ? l
              : (g) => b.jsx(wv, { ...g }),
        }),
        b.jsx(Vi, {
          controlRefs: m,
          blockScrollOnMount:
            (u = r == null ? void 0 : r.blockScrollOnMount) != null ? u : !1,
          ...n,
          component: n == null ? void 0 : n.component,
        }),
      ],
    });
  },
  Vi = ({
    controlRefs: e,
    appendToParentPortal: t,
    containerRef: r,
    allowPinchZoom: n = !1,
    blockScrollOnMount: o = !0,
    initialState: i,
    duration: s = null,
    icon: a,
    text: l,
    component: u,
  }) => {
    const c = S.useRef(!1),
      [{ loadingCount: d, message: f, duration: m }, x] = S.useState({
        loadingCount: i ? 1 : 0,
        message: void 0,
        duration: s,
      }),
      {
        isLoading: v,
        start: k,
        finish: y,
        update: h,
        force: g,
      } = S.useMemo(
        () => ({
          isLoading: () => c.current,
          start: ({ message: C, duration: P = s } = {}) => {
            (c.current = !0),
              x(({ loadingCount: _ }) => ({
                loadingCount: o4(_),
                message: C,
                duration: P,
              }));
          },
          update: (C) => x((P) => ({ ...P, ...C })),
          finish: () => {
            (c.current = !1),
              x(({ loadingCount: C }) => ({
                loadingCount: i4(C),
                message: void 0,
                duration: s,
              }));
          },
          force: ({ loadingCount: C = 0, message: P, duration: _ = s }) => {
            (c.current = !!C), x({ loadingCount: C, message: P, duration: _ });
          },
        }),
        [s],
      );
    tn(e.current.isLoading, v),
      tn(e.current.start, k),
      tn(e.current.finish, y),
      tn(e.current.update, h),
      tn(e.current.force, g);
    const w = {
      initialState: i,
      icon: a,
      text: l,
      message: f,
      duration: m,
      onFinish: y,
    };
    return (
      Ru(() => {
        (i || Pn(s)) &&
          x({ loadingCount: i ? 1 : 0, message: void 0, duration: s });
      }, [i, s]),
      b.jsx(Nd, {
        initial: !1,
        children: d
          ? b.jsx(Va, {
              appendToParentPortal: t,
              containerRef: r,
              children: b.jsx(r4, {
                allowPinchZoom: n,
                enabled: o,
                forwardProps: !0,
                children: b.jsx(S.Fragment, {
                  children: b.jsx(a4, { component: u, ...w }),
                }),
              }),
            })
          : null,
      })
    );
  },
  a4 = ({ component: e, ...t }) =>
    typeof e == 'function' ? e(t) : b.jsx(b.Fragment, {}),
  Fd = ({ message: e, ...t }) =>
    e ? (xb(e) ? e : b.jsx(K.p, { ...t, children: e })) : null,
  l4 = (e = 'fade') => ({
    initial: { opacity: 0, scale: e === 'scaleFade' ? 0.95 : void 0 },
    animate: {
      opacity: 1,
      scale: e === 'scaleFade' ? 1 : void 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: e === 'scaleFade' ? 0.95 : void 0,
      transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
    },
  }),
  xv = (e = 'fill') => ({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 'beerus',
    bg: e === 'fill' ? ['white', 'black'] : 'blackAlpha.600',
    w: '100vw',
    h: '100dvh',
    p: 'md',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  Ys = (e, t = 'fade') => ({
    initial: e ? !1 : 'initial',
    animate: 'animate',
    exit: 'exit',
    variants: l4(t),
  }),
  bv = S.memo(
    ({
      initialState: e,
      icon: t,
      text: r,
      message: n,
      duration: o,
      onFinish: i,
    }) => {
      const s = {
        maxW: 'md',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'sm',
      };
      return (
        Oa(i, o),
        b.jsx(Da, {
          className: 'ui-loading-screen',
          ...Ys(e),
          __css: xv(),
          children: b.jsxs(K.div, {
            __css: s,
            children: [
              b.jsx(In, { size: '6xl', ...t }),
              b.jsx(Fd, { message: n, lineClamp: 3, ...r }),
            ],
          }),
        })
      );
    },
  );
bv.displayName = 'ScreenComponent';
var Sv = S.memo(
  ({
    initialState: e,
    icon: t,
    text: r,
    message: n,
    duration: o,
    onFinish: i,
  }) => {
    const s = {
      bg: ['white', 'black'],
      maxW: 'md',
      p: 'md',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'sm',
      rounded: 'md',
      boxShadow: ['lg', 'dark-lg'],
    };
    return (
      Oa(i, o),
      b.jsx(Da, {
        className: 'ui-loading-page',
        ...Ys(e),
        __css: xv('transparent'),
        children: b.jsxs(K.div, {
          as: Od.div,
          className: 'ui-loading-page__inner',
          ...Ys(e, 'scaleFade'),
          __css: s,
          children: [
            b.jsx(In, { size: '6xl', ...t }),
            b.jsx(Fd, { message: n, lineClamp: 3, ...r }),
          ],
        }),
      })
    );
  },
);
Sv.displayName = 'PageComponent';
var wv = S.memo(
  ({
    initialState: e,
    icon: t,
    text: r,
    message: n,
    duration: o,
    onFinish: i,
  }) => {
    const s = {
      position: 'fixed',
      right: 'md',
      bottom: 'md',
      zIndex: 'beerus',
      bg: ['white', 'black'],
      maxW: 'sm',
      p: 'sm',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'sm',
      rounded: 'md',
      boxShadow: ['3xl', 'dark-lg'],
    };
    return (
      Oa(i, o),
      b.jsxs(Da, {
        className: 'ui-loading-background',
        ...Ys(e, 'scaleFade'),
        __css: s,
        children: [
          b.jsx(In, { size: 'xl', ...t }),
          b.jsx(Fd, { message: n, fontSize: 'sm', lineClamp: 1, ...r }),
        ],
      })
    );
  },
);
wv.displayName = 'BackgroundComponent';
var kv = {
    info: { icon: Ww, colorScheme: 'info' },
    success: { icon: Fw, colorScheme: 'success' },
    warning: { icon: Op, colorScheme: 'warning' },
    error: { icon: Op, colorScheme: 'danger' },
    loading: { icon: In, colorScheme: 'primary' },
  },
  [u4, Wd] = pa({
    name: 'AlertStylesContext',
    errorMessage: `useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `,
  }),
  c4 = (e, t) => {
    var r, n;
    return (n =
      (r = t == null ? void 0 : t[e]) == null ? void 0 : r.colorScheme) != null
      ? n
      : kv[e].colorScheme;
  },
  d4 = (e, t) => {
    var r, n;
    return (n = (r = t == null ? void 0 : t[e]) == null ? void 0 : r.icon) !=
      null
      ? n
      : kv[e].icon;
  },
  f4 = ue(({ status: e = 'info', colorScheme: t, ...r }, n) => {
    var o, i, s;
    const { theme: a } = Hn(),
      l =
        (s =
          (i = (o = a.__config) == null ? void 0 : o.alert) == null
            ? void 0
            : i.statuses) != null
          ? s
          : {};
    t ?? (t = c4(e, l));
    const [u, c] = Qg('Alert', { ...r, colorScheme: t }),
      { className: d, children: f, ...m } = si(c),
      x = {
        w: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        ...u.container,
      };
    return b.jsx(u4, {
      value: { status: e, styles: u },
      children: b.jsx(K.div, {
        ref: n,
        className: le('ui-alert', d),
        role: 'alert',
        __css: x,
        ...m,
        children: f,
      }),
    });
  }),
  p4 = ({ className: e, children: t, variant: r = 'oval', ...n }) => {
    var o, i, s;
    const { status: a, styles: l } = Wd(),
      { theme: u } = Hn(),
      c =
        (s =
          (i = (o = u.__config) == null ? void 0 : o.alert) == null
            ? void 0
            : i.statuses) != null
          ? s
          : {},
      d = d4(a, c),
      f = { ...l.icon, ...(a === 'loading' ? l.loading : {}) };
    return b.jsx(K.span, {
      display: 'inherit',
      className: le('ui-alert__icon', e),
      __css: f,
      ...n,
      children:
        t ||
        b.jsx(d, {
          ...(a === 'loading'
            ? { variant: r, color: 'currentcolor' }
            : { boxSize: '100%' }),
        }),
    });
  },
  h4 = ue(({ className: e, ...t }, r) => {
    const { styles: n } = Wd(),
      o = { display: 'block', ...n.title };
    return b.jsx(K.p, {
      ref: r,
      className: le('ui-alert__title', e),
      __css: o,
      ...t,
    });
  }),
  m4 = ue(({ className: e, ...t }, r) => {
    const { styles: n } = Wd(),
      o = { ...n.description };
    return b.jsx(K.span, {
      ref: r,
      className: le('ui-alert__desc', e),
      __css: o,
      ...t,
    });
  }),
  g4 = (e, t, r) => Math.min(Math.max(e, t), r),
  Hd = ({
    className: e,
    ripples: t,
    onAnimationComplete: r,
    onClear: n,
    color: o = 'currentColor',
    style: i,
    isDisabled: s,
    ...a
  }) => {
    if (s) return null;
    const l = { rounded: 'full', zIndex: 'kurillin' };
    return b.jsx(b.Fragment, {
      children: t.map(({ key: u, x: c, y: d, size: f }) => {
        const m = g4(0.01 * f, 0.2, f > 100 ? 0.75 : 0.5);
        return b.jsx(
          Nd,
          {
            mode: 'popLayout',
            children: b.jsx(Da, {
              as: 'span',
              className: le('ui-ripple', e),
              initial: { transform: 'scale(0)', opacity: 0.35 },
              animate: { transform: 'scale(2)', opacity: 0 },
              exit: { opacity: 0 },
              transition: { duration: m },
              bgColor: o,
              style: {
                position: 'absolute',
                transformOrigin: 'center',
                pointerEvents: 'none',
                left: c,
                top: d,
                width: `${f}px`,
                height: `${f}px`,
                ...i,
              },
              __css: l,
              ...a,
              onAnimationComplete: bg(r, () => n(u)),
            }),
          },
          u,
        );
      }),
    });
  },
  Ud = ({ disabled: e, isDisabled: t, ...r } = {}) => {
    const [n, o] = S.useState([]),
      i = S.useCallback(
        (a) => {
          if (e || t) return o([]);
          const l = a.currentTarget,
            u = Math.max(l.clientWidth, l.clientHeight),
            c = l.getBoundingClientRect();
          o((d) => [
            ...d,
            {
              key: kb(d.length.toString()),
              size: u,
              x: a.clientX - c.x - u / 2,
              y: a.clientY - c.y - u / 2,
            },
          ]);
        },
        [e, t],
      ),
      s = S.useCallback((a) => {
        o((l) => l.filter((u) => u.key !== a));
      }, []);
    return { ripples: n, onPointerDown: bg(i, r.onPointerDown), onClear: s };
  },
  y4 = ue((e, t) => {
    const [r, n] = hd('CloseButton', e),
      {
        className: o,
        children: i,
        isDisabled: s,
        __css: a,
        disableRipple: l,
        ...u
      } = si(n),
      { onPointerDown: c, ...d } = Ud({ ...u, isDisabled: l || s }),
      f = {
        position: 'relative',
        overflow: 'hidden',
        outline: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        ...r,
        ...a,
      };
    return b.jsxs(K.button, {
      ref: t,
      type: 'button',
      'aria-label': 'Close',
      className: le('ui-close-button', o),
      disabled: s,
      __css: f,
      ...u,
      onPointerDown: c,
      children: [
        i || b.jsx(Hw, { width: '1em', height: '1em' }),
        b.jsx(Hd, { isDisabled: l || s, ...d }),
      ],
    });
  }),
  v4 = (e, t) => e.find((r) => r.id === t),
  Xh = (e, t) => {
    const r = Cv(e, t),
      n = r ? e[r].findIndex((o) => o.id === t) : -1;
    return { placement: r, index: n };
  },
  Cv = (e, t) => {
    for (const [r, n] of Object.entries(e)) if (v4(n, t)) return r;
  },
  Kh = 0,
  x4 = (
    e,
    {
      id: t,
      placement: r = 'top',
      duration: n,
      onCloseComplete: o,
      status: i,
      style: s,
    },
  ) => (
    (Kh += 1),
    t ?? (t = Kh),
    {
      id: t,
      placement: r,
      status: i,
      duration: n,
      message: e,
      onDelete: () => Co.remove(String(t), r),
      isDelete: !1,
      onCloseComplete: o,
      style: s,
    }
  ),
  b4 = (e) => {
    const { component: t } = e;
    return (n) =>
      typeof t == 'function' ? t({ ...n, ...e }) : b.jsx(k4, { ...n, ...e });
  },
  S4 = {
    top: [],
    'top-left': [],
    'top-right': [],
    bottom: [],
    'bottom-left': [],
    'bottom-right': [],
  },
  w4 = (e) => {
    let t = e;
    const r = new Set(),
      n = (o) => {
        (t = o(t)), r.forEach((i) => i());
      };
    return {
      getSnapshot: () => t,
      subscribe: (o) => (
        r.add(o),
        () => {
          n(() => e), r.delete(o);
        }
      ),
      remove: (o, i) => {
        n((s) => ({ ...s, [i]: s[i].filter((a) => a.id != o) }));
      },
      create: (o, i) => {
        var s;
        const a = ((s = i.limit) != null ? s : 0) - 1,
          l = x4(o, i),
          { placement: u, id: c } = l;
        return (
          n((d) => {
            var f;
            let m = (f = d[u]) != null ? f : [];
            if (a > 0 && m.length > a) {
              const v = m.length - a,
                y = (u.includes('top') ? m.slice(v * -1) : m.slice(0, v)).map(
                  ({ id: h }) => h,
                );
              m = m.map((h) => (y.includes(h.id) ? { ...h, isDelete: !0 } : h));
            }
            const x = u.includes('top') ? [l, ...m] : [...m, l];
            return { ...d, [u]: x };
          }),
          c
        );
      },
      update: (o, i) => {
        n((s) => {
          const a = { ...s },
            { placement: l, index: u } = Xh(a, o);
          return (
            l && u !== -1 && (a[l][u] = { ...a[l][u], ...i, message: b4(i) }), a
          );
        });
      },
      closeAll: ({ placement: o } = {}) => {
        n((i) => {
          let s = [
            'bottom',
            'bottom-right',
            'bottom-left',
            'top',
            'top-left',
            'top-right',
          ];
          return (
            o && (s = o),
            s.reduce(
              (a, l) => ((a[l] = i[l].map((u) => ({ ...u, isDelete: !0 }))), a),
              { ...i },
            )
          );
        });
      },
      close: (o) => {
        n((i) => {
          const s = Cv(i, o);
          return s
            ? {
                ...i,
                [s]: i[s].map((a) => (a.id == o ? { ...a, isDelete: !0 } : a)),
              }
            : i;
        });
      },
      isActive: (o) => !!Xh(Co.getSnapshot(), o).placement,
    };
  },
  Co = w4(S4),
  k4 = ({
    variant: e = 'basic',
    colorScheme: t,
    status: r,
    icon: n,
    title: o,
    description: i,
    isClosable: s,
    className: a,
    onClose: l,
  }) =>
    b.jsxs(f4, {
      status: r,
      variant: e,
      colorScheme: t,
      alignItems: 'start',
      boxShadow: 'lg',
      className: le('ui-notice', a),
      pe: s ? 8 : void 0,
      children: [
        b.jsx(p4, {
          variant: n == null ? void 0 : n.variant,
          className: 'ui-notice__icon',
          ...(n != null && n.color ? { color: n.color } : {}),
          children: n == null ? void 0 : n.children,
        }),
        b.jsxs(K.div, {
          flex: '1',
          children: [
            o
              ? b.jsx(h4, {
                  className: 'ui-notice__title',
                  lineClamp: 1,
                  children: o,
                })
              : null,
            i
              ? b.jsx(m4, {
                  className: 'ui-notice__desc',
                  lineClamp: 3,
                  children: i,
                })
              : null,
          ],
        }),
        s
          ? b.jsx(y4, {
              className: 'ui-notice__close-button',
              size: 'sm',
              onClick: l,
              position: 'absolute',
              top: 2,
              right: 2,
            })
          : null,
      ],
    }),
  C4 = ({
    variants: e,
    gap: t = 'md',
    appendToParentPortal: r,
    containerRef: n,
  }) => {
    const o = S.useSyncExternalStore(
        Co.subscribe,
        Co.getSnapshot,
        Co.getSnapshot,
      ),
      i = Object.entries(o).map(([s, a]) => {
        const l = s.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
          u = s.includes('bottom')
            ? 'env(safe-area-inset-bottom, 0px)'
            : void 0,
          c = s.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
          d = s.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)',
          f = {
            position: 'fixed',
            zIndex: 'zarbon',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            margin: t,
            gap: t,
            top: l,
            bottom: u,
            right: c,
            left: d,
          };
        return b.jsx(
          K.ul,
          {
            className: le('ui-notice__list', `ui-notice__list--${s}`),
            __css: f,
            children: b.jsx(Nd, {
              initial: !1,
              children: a.map((m) => b.jsx(_v, { variants: e, ...m }, m.id)),
            }),
          },
          s,
        );
      });
    return b.jsx(Va, { appendToParentPortal: r, containerRef: n, children: i });
  },
  _4 = {
    initial: ({ placement: e }) => ({
      opacity: 0,
      [['top', 'bottom'].includes(e) ? 'y' : 'x']:
        (e === 'bottom' || e.includes('right') ? 1 : -1) * 24,
    }),
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  _v = S.memo(
    ({
      variants: e = _4,
      placement: t,
      duration: r = 5e3,
      message: n,
      onCloseComplete: o,
      isDelete: i = !1,
      onDelete: s,
      style: a,
    }) => {
      const [l, u] = S.useState(r),
        c = lC();
      Ru(() => {
        c || o == null || o();
      }, [c]),
        Ru(() => {
          u(r);
        }, [r]);
      const d = () => u(null),
        f = () => u(r),
        m = () => {
          c && s();
        };
      S.useEffect(() => {
        c && i && s();
      }, [c, i, s]),
        Oa(m, l);
      const x = { pointerEvents: 'auto', maxW: '2xl', minW: 'sm', ...a };
      return b.jsx(Od.li, {
        layout: !0,
        className: 'ui-notice__list__item',
        variants: e,
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        onHoverStart: d,
        onHoverEnd: f,
        custom: { placement: t },
        style: {
          display: 'flex',
          justifyContent: t.includes('left')
            ? 'flex-start'
            : t.includes('right')
              ? 'flex-end'
              : 'center',
        },
        children: b.jsx(K.div, {
          className: 'ui-notice__list__item__inner',
          __css: x,
          children: et(n, { onClose: m }),
        }),
      });
    },
  );
_v.displayName = 'NoticeComponent';
var P4 = {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  E4 = {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  T4 = {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '3xl':
      '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgb(0, 112, 240)',
    inline: 'inset 0 0 0 3px rgb(0, 112, 240)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
    'dark-sm':
      '0px 0px 0px 1px　rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2)',
    'dark-md':
      '0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2)',
    'dark-lg':
      '0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4)',
  },
  Pv = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    normal: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  z4 = {
    ...Pv,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '9xs': '1rem',
    '8xs': '1.5rem',
    '7xs': '2rem',
    '6xs': '3rem',
    '5xs': '4.5rem',
    '4xs': '6rem',
    '3xs': '7.5rem',
    '2xs': '10rem',
    xs: '15rem',
    sm: '20rem',
    md: '24rem',
    lg: '28rem',
    xl: '32rem',
    '2xl': '36rem',
    '3xl': '42rem',
    '4xl': '48rem',
    '5xl': '56rem',
    '6xl': '64rem',
    '7xl': '72rem',
    '8xl': '80rem',
    '9xl': '90rem',
  },
  A4 = {
    property: {
      common:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      dimensions: 'width, height',
      position: 'left, right, top, bottom',
      background: 'background-color, background-image, background-position',
    },
    easing: {
      'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
      'ultra-fast': '50ms',
      faster: '100ms',
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
      slower: '400ms',
      'ultra-slow': '500ms',
    },
  },
  R4 = {
    yamcha: 1,
    kurillin: 9,
    nappa: 99,
    guldo: 100,
    jeice: 110,
    burter: 120,
    recoome: 130,
    ginyu: 140,
    dodoria: 150,
    zarbon: 160,
    freeza: 9996,
    vegeta: 9997,
    sonGoku: 9998,
    beerus: 9999,
  },
  M4 = { sm: '30em', md: '48em', lg: '61em', xl: '80em', '2xl': '90em' },
  $4 = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#141414',
    white: '#fbfbfb',
    border: ['#dcdcde', '#434248'],
    focus: '#0070F0',
    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
      950: 'rgba(255, 255, 255, 0.96)',
    },
    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
      950: 'rgba(0, 0, 0, 0.96)',
    },
    gray: {
      50: '#dedfe3',
      100: '#d3d5da',
      200: '#b7bbc3',
      300: '#9ea3ae',
      400: '#828997',
      500: '#6b7280',
      600: '#565c67',
      700: '#434851',
      800: '#2e3138',
      900: '#1c1e21',
      950: '#101113',
    },
    neutral: {
      50: '#dedede',
      100: '#d4d4d4',
      200: '#bababa',
      300: '#a3a3a3',
      400: '#8a8a8a',
      500: '#737373',
      600: '#5c5c5c',
      700: '#474747',
      800: '#303030',
      900: '#1c1c1c',
      950: '#0f0f0f',
    },
    red: {
      50: '#fdeae8',
      100: '#fbd9d5',
      200: '#f6b2ac',
      300: '#f28c82',
      400: '#ee6a5d',
      500: '#ea4334',
      600: '#de2817',
      700: '#b42013',
      800: '#8a190f',
      900: '#66120b',
      950: '#530f09',
    },
    rose: {
      50: '#feecef',
      100: '#fdd8de',
      200: '#fbb2be',
      300: '#f88b9d',
      400: '#f6657d',
      500: '#f43e5c',
      600: '#f2183c',
      700: '#cf0c2d',
      800: '#a40a23',
      900: '#7d071b',
      950: '#650616',
    },
    pink: {
      50: '#fde8ed',
      100: '#fcd9e3',
      200: '#f9b9ca',
      300: '#f693ad',
      400: '#f37295',
      500: '#f0517c',
      600: '#ec275c',
      700: '#d81347',
      800: '#ae0f39',
      900: '#880c2d',
      950: '#710a25',
    },
    flashy: {
      50: '#fdedf5',
      100: '#fbdaeb',
      200: '#f7b5d6',
      300: '#f390c2',
      400: '#ef6bad',
      500: '#ec4699',
      600: '#e82185',
      700: '#c6156e',
      800: '#a21159',
      900: '#780d42',
      950: '#660b38',
    },
    orange: {
      50: '#fef0e6',
      100: '#fee4d2',
      200: '#fdc7a1',
      300: '#fbac74',
      400: '#fa9247',
      500: '#f97415',
      600: '#e06106',
      700: '#b34d05',
      800: '#863a03',
      900: '#5e2902',
      950: '#461e02',
    },
    amber: {
      50: '#fdf0d8',
      100: '#fde8c4',
      200: '#fbd593',
      300: '#f9c367',
      400: '#f7b23b',
      500: '#f59f0a',
      600: '#ce8509',
      700: '#a26907',
      800: '#764c05',
      900: '#4e3303',
      950: '#362302',
    },
    yellow: {
      50: '#fef4d7',
      100: '#feefc3',
      200: '#fde290',
      300: '#fdd663',
      400: '#fcc931',
      500: '#fbbd04',
      600: '#ce9b03',
      700: '#a67d03',
      800: '#795b02',
      900: '#503d01',
      950: '#372a01',
    },
    lime: {
      50: '#e7facc',
      100: '#ddf7b5',
      200: '#c7f287',
      300: '#b2ee59',
      400: '#9de92b',
      500: '#82cb15',
      600: '#6ba611',
      700: '#507d0d',
      800: '#385809',
      900: '#1e2e05',
      950: '#121c03',
    },
    green: {
      50: '#e0f5e6',
      100: '#d0f1d9',
      200: '#a9e5b9',
      300: '#86da9c',
      400: '#5fce7d',
      500: '#3cc360',
      600: '#31a04f',
      700: '#28813f',
      800: '#1d5e2e',
      900: '#133e1f',
      950: '#0d2b15',
    },
    emerald: {
      50: '#d0fbed',
      100: '#b4f8e2',
      200: '#80f4cd',
      300: '#4defb9',
      400: '#19eba5',
      500: '#10b77f',
      600: '#0d9165',
      700: '#096748',
      800: '#06422e',
      900: '#021710',
      950: '#000503',
    },
    teal: {
      50: '#cdf9f4',
      100: '#b1f6ee',
      200: '#7ef1e3',
      300: '#51ecda',
      400: '#1ee6cf',
      500: '#14b8a5',
      600: '#108e80',
      700: '#0c6a5f',
      800: '#07403a',
      900: '#031c19',
      950: '#010504',
    },
    cyan: {
      50: '#cef6fd',
      100: '#b0f1fd',
      200: '#7ee8fb',
      300: '#4de0f9',
      400: '#16d6f8',
      500: '#07b6d5',
      600: '#0590a8',
      700: '#046e81',
      800: '#034854',
      900: '#012228',
      950: '#011114',
    },
    sky: {
      50: '#ddf3fd',
      100: '#c5eafc',
      200: '#95d9f9',
      300: '#65c8f6',
      400: '#35b7f3',
      500: '#0da2e7',
      600: '#0b87c1',
      700: '#096995',
      800: '#064e6f',
      900: '#042f43',
      950: '#032230',
    },
    blue: {
      50: '#e2edfd',
      100: '#cfe0fc',
      200: '#adcbfa',
      300: '#8bb5f8',
      400: '#659cf6',
      500: '#4387f4',
      600: '#186bf2',
      700: '#0c59d4',
      800: '#0a47a9',
      900: '#07357d',
      950: '#062c6a',
    },
    indigo: {
      50: '#e8e8fd',
      100: '#d9dafc',
      200: '#bdbef9',
      300: '#9c9ef6',
      400: '#8082f4',
      500: '#6467f2',
      600: '#3a3dee',
      700: '#1417e6',
      800: '#1114c0',
      900: '#0d0f96',
      950: '#0b0d83',
    },
    violet: {
      50: '#eee7fe',
      100: '#e3d8fd',
      200: '#cbb6fb',
      300: '#b699fa',
      400: '#a17cf8',
      500: '#895af6',
      600: '#6d34f4',
      700: '#500ced',
      800: '#410ac2',
      900: '#34089b',
      950: '#2e0788',
    },
    purple: {
      50: '#f0e2fe',
      100: '#e9d3fd',
      200: '#d7b1fb',
      300: '#c994fa',
      400: '#b772f8',
      500: '#a855f7',
      600: '#9229f5',
      700: '#7e0bea',
      800: '#6609be',
      900: '#510797',
      950: '#44067f',
    },
    fuchsia: {
      50: '#f9e3fd',
      100: '#f5d0fb',
      200: '#eeaff8',
      300: '#e78af5',
      400: '#e069f2',
      500: '#d948ef',
      600: '#d01eeb',
      700: '#b112ca',
      800: '#900ea4',
      900: '#6b0b7a',
      950: '#5b0967',
    },
  },
  j4 = {
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2rem',
    '5xl': '2.25rem',
    '6xl': '3rem',
    '7xl': '3.75rem',
    '8xl': '4.5rem',
    '9xl': '6rem',
  },
  L4 = {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  I4 = {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  B4 = {},
  D4 = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  V4 = {},
  O4 = { sm: '4px', md: '8px', lg: '12px', xl: '16px', '2xl': '24px' },
  N4 = {},
  F4 = {
    animations: V4,
    blurs: O4,
    borders: N4,
    breakpoints: M4,
    colors: $4,
    fontSizes: j4,
    fontWeights: L4,
    fonts: I4,
    gradients: B4,
    letterSpacings: D4,
    lineHeights: P4,
    radii: E4,
    shadows: T4,
    sizes: z4,
    spaces: Pv,
    transitions: A4,
    zIndices: R4,
  },
  W4 = {
    body: {
      fontFamily: 'body',
      bg: ['white', 'black'],
      color: ['black', 'white'],
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
      overflowX: 'hidden',
    },
    '*::placeholder, *[data-placeholder]': { color: 'blackAlpha.600' },
    _dark: {
      '*::placeholder, *[data-placeholder]': { color: 'whiteAlpha.400' },
    },
    '*, *::before, *::after': {
      borderWidth: '0',
      borderStyle: 'solid',
      borderColor: 'border',
      wordWrap: 'break-word',
    },
  },
  H4 = {},
  U4 = {
    '*': { boxSizing: 'border-box' },
    '::before, ::after': { boxSizing: 'inherit' },
    html: {
      lineHeight: 1.15,
      WebkitTextSizeAdjust: '100%',
      WebkitTapHighlightColor: 'transparent',
    },
    body: { margin: 0 },
    main: { display: 'block' },
    'p, table, blockquote, address, pre, iframe, form, figure, dl': {
      margin: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontWeight: 'inherit',
      margin: 0,
    },
    'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
    dt: { fontWeight: 'bold' },
    dd: { marginLeft: 0 },
    hr: {
      boxSizing: 'content-box',
      height: 0,
      overflow: 'visible',
      border: 0,
      borderTop: '1px solid',
      margin: 0,
      clear: 'both',
      color: 'inherit',
    },
    pre: { fontFamily: 'monospace, monospace', fontSize: 'inherit' },
    address: { fontStyle: 'inherit' },
    a: {
      backgroundColor: 'transparent',
      textDecoration: 'none',
      color: 'inherit',
    },
    'abbr[title]': { borderBottom: 'none', textDecoration: 'underline dotted' },
    'b, strong': { fontWeight: 'bolder' },
    'code, kbd, samp': {
      fontFamily: 'monospace, monospace',
      fontSize: 'inherit',
    },
    small: { fontSize: '80%' },
    'sub, sup': {
      fontSize: '75%',
      lineHeight: 0,
      position: 'relative',
      verticalAlign: 'baseline',
    },
    sub: { bottom: '-0.25em' },
    sup: { top: '-0.5em' },
    img: { borderStyle: 'none', verticalAlign: 'bottom' },
    'embed, object, iframe': { border: 0, verticalAlign: 'bottom' },
    'button, input, optgroup, select, textarea': {
      WebkitAppearance: 'none',
      appearance: 'none',
      verticalAlign: 'middle',
      color: 'inherit',
      font: 'inherit',
      border: 0,
      background: 'transparent',
      padding: 0,
      margin: 0,
      outline: 0,
      borderRadius: 0,
      textAlign: 'inherit',
    },
    "[type='checkbox']": {
      WebkitAppearance: 'checkbox',
      appearance: 'checkbox',
    },
    "[type='radio']": { WebkitAppearance: 'radio', appearance: 'radio' },
    'button, input': { overflow: 'visible' },
    'button, select': { textTransform: 'none' },
    "button, [type='button'], [type='reset'], [type='submit']": {
      cursor: 'pointer',
      WebkitAppearance: 'none',
      appearance: 'none',
    },
    "button[disabled], [type='button'][disabled], [type='reset'][disabled], [type='submit'][disabled]":
      { cursor: 'default' },
    "button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner":
      { borderStyle: 'none', padding: 0 },
    "button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring":
      { outline: '1px dotted ButtonText' },
    'select::-ms-expand': { display: 'none' },
    option: { padding: 0 },
    fieldset: { margin: 0, padding: 0, border: 0, minWidth: 0 },
    legend: {
      color: 'inherit',
      display: 'table',
      maxWidth: '100%',
      padding: 0,
      whiteSpace: 'normal',
    },
    progress: { verticalAlign: 'baseline' },
    textarea: { overflow: 'auto' },
    "[type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button":
      { display: 'none' },
    "[type='search']": { outlineOffset: '-2px' },
    "[type='search']::-webkit-search-decoration": { WebkitAppearance: 'none' },
    "[type='time']::-webkit-calendar-picker-indicator": { display: 'none' },
    '::-webkit-file-upload-button': {
      WebkitAppearance: 'button',
      font: 'inherit',
    },
    '::-webkit-search-cancel-button': { WebkitAppearance: 'none' },
    'label[for]': { cursor: 'pointer' },
    details: { display: 'block' },
    summary: { display: 'list-item' },
    '[contenteditable]': { outline: 'none' },
    table: { borderCollapse: 'collapse', borderSpacing: 0 },
    caption: { textAlign: 'left' },
    'td, th': { verticalAlign: 'top', padding: 0 },
    th: { textAlign: 'left', fontWeight: 'bold' },
    template: { display: 'none' },
    '[hidden]': { display: 'none !important' },
  },
  G4 = {},
  Y4 = {
    baseStyle: {
      container: {},
      label: {
        color: ['blackAlpha.700', 'whiteAlpha.600'],
        fontWeight: 'medium',
      },
      number: ({ colorScheme: e }) => ({
        fontFeatureSettings: '"pnum"',
        fontVariantNumeric: 'proportional-nums',
        verticalAlign: 'baseline',
        fontSize: '5xl',
        color: e
          ? [`${e}.500`, `${e}.600`]
          : ['blackAlpha.800', 'whiteAlpha.700'],
        fontWeight: 'extrabold',
      }),
      helperMessage: {
        fontSize: 'sm',
        color: ['blackAlpha.700', 'whiteAlpha.600'],
      },
      icon: {
        marginEnd: '1',
        w: '3.5',
        h: '3.5',
        verticalAlign: 'middle',
        var: [
          { name: 'increase', token: 'colors', value: 'success.400' },
          { name: 'decrease', token: 'colors', value: 'danger.400' },
        ],
      },
    },
    defaultProps: {},
  },
  X4 = {
    baseStyle: ({ colorScheme: e = 'primary' }) => ({
      stepper: {
        w: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        _vertical: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 0,
        },
        _horizontal: { flexDirection: 'row', alignItems: 'center', gap: 4 },
      },
      step: {
        position: 'relative',
        display: 'flex',
        gap: 2,
        flex: 1,
        flexShrink: 0,
        _horizontal: { alignItems: 'center' },
        '&:last-of-type:not([data-stretch])': { flex: 'initial' },
      },
      status: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        rounded: 'full',
        transitionProperty: 'common',
        transitionDuration: 'slow',
        '&[data-status=active]': {
          borderWidth: '2px',
          borderColor: [`${e}.500`, `${e}.400`],
        },
        '&[data-status=complete]': {
          bg: [`${e}.500`, `${e}.400`],
          color: ['white', 'black'],
        },
        '&[data-status=incomplete]': { borderWidth: '2px' },
      },
      icon: { flexShrink: 0 },
      number: {},
      title: { fontWeight: 'medium' },
      description: { color: ['blackAlpha.700', 'whiteAlpha.600'] },
      separator: {
        bg: 'border',
        flex: 1,
        transitionProperty: 'common',
        transitionDuration: 'slow',
        '&[data-status=complete]': { bg: [`${e}.500`, `${e}.400`] },
        _vertical: { position: 'absolute', w: 0.5, h: '100%' },
        _horizontal: { w: '100%', h: 0.5, ms: 2 },
      },
    }),
    sizes: {
      sm: ({ theme: e }) => ({
        title: { fontSize: 'sm' },
        description: { fontSize: 'xs' },
        status: { w: 6, h: 6 },
        icon: { w: 4, h: 4 },
        number: { fontSize: 'sm' },
        separator: {
          maxHeight: `calc(100% - ${B(e, 'sizes.6')} - 8px)`,
          top: `calc(${B(e, 'sizes.6')} + 4px)`,
          insetStart: `calc(${B(e, 'sizes.6')} / 2 - 1px)`,
        },
      }),
      md: ({ theme: e }) => ({
        title: { fontSize: 'md' },
        description: { fontSize: 'sn' },
        status: { w: 8, h: 8 },
        icon: { w: 5, h: 5 },
        number: { fontSize: 'md' },
        separator: {
          maxHeight: `calc(100% - ${B(e, 'sizes.8')} - 8px)`,
          top: `calc(${B(e, 'sizes.8')} + 4px)`,
          insetStart: `calc(${B(e, 'sizes.8')} / 2 - 1px)`,
        },
      }),
      lg: ({ theme: e }) => ({
        title: { fontSize: 'lg' },
        description: { fontSize: 'md' },
        status: { w: 10, h: 10 },
        icon: { w: 6, h: 6 },
        number: { fontSize: 'lg' },
        separator: {
          maxHeight: `calc(100% - ${B(e, 'sizes.10')} - 8px)`,
          top: `calc(${B(e, 'sizes.10')} + 4px)`,
          insetStart: `calc(${B(e, 'sizes.10')} / 2 - 1px)`,
        },
      }),
    },
    defaultProps: { size: 'md', colorScheme: 'primary' },
  },
  K4 = {
    baseStyle: {
      container: {
        _readOnly: { cursor: 'auto' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      },
      track: {
        rounded: 'full',
        bg: ['blackAlpha.400', 'whiteAlpha.300'],
        transitionProperty: 'common',
        transitionDuration: 'fast',
        _checked: { justifyContent: 'flex-end' },
        _focusVisible: { boxShadow: 'outline' },
      },
      thumb: { rounded: 'inherit', bg: 'white' },
      label: { userSelect: 'none' },
    },
    variants: {
      thick: ({ colorScheme: e = 'primary' }) => ({
        track: { p: '1', _checked: { bg: [`${e}.500`, `${e}.600`] } },
      }),
      thin: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        track: {
          _checked: {
            bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
          },
        },
        thumb: {
          boxShadow: 'dark-md',
          _checked: { bg: [`${r}.500`, `${r}.600`] },
        },
      }),
    },
    sizes: {
      sm: ({ variant: e }) => ({
        track: { w: '6', h: e === 'thin' ? '2' : void 0 },
        thumb: { w: '3', h: '3' },
        label: { fontSize: 'sm' },
      }),
      md: ({ variant: e }) => ({
        track: { w: '8', h: e === 'thin' ? '3' : void 0 },
        thumb: { w: '4', h: '4' },
        label: { fontSize: 'md' },
      }),
      lg: ({ variant: e }) => ({
        track: { w: '10', h: e === 'thin' ? '4' : void 0 },
        thumb: { w: '5', h: '5' },
        label: { fontSize: 'lg' },
      }),
    },
    defaultProps: { size: 'md', variant: 'thick', colorScheme: 'primary' },
  },
  Q4 = {
    baseStyle: {
      container: ({ orientation: e }) => ({
        display: 'flex',
        flexDirection: e === 'vertical' ? 'row' : 'column',
      }),
      tabList: ({ align: e, orientation: t }) => ({
        flexDirection: t === 'vertical' ? 'column' : 'row',
        justifyContent: e === 'center' ? e : `flex-${e}`,
      }),
      tab: ({ isFitted: e }) => ({
        flex: e ? 1 : void 0,
        whiteSpace: 'nowrap',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        _hover: { opacity: 0.7 },
        _focusVisible: { zIndex: 'yamcha', boxShadow: 'outline' },
        _selected: { _hover: { opacity: 1 } },
        _disabled: { cursor: 'not-allowed', opacity: 0.4 },
      }),
      tabPanels: {},
      tabPanel: { p: 'md' },
    },
    variants: {
      line: ({ colorScheme: e = 'primary', orientation: t }) => {
        const r = t === 'vertical';
        return {
          tabList: {
            borderColor: 'inherit',
            ...(r ? { borderEndWidth: '1px' } : { borderBottomWidth: '1px' }),
          },
          tab: {
            borderColor: 'transparent',
            _selected: {
              color: [`${e}.500`, j(e) ? `${e}.100` : `${e}.400`],
              borderColor: 'currentColor',
            },
            ...(r
              ? { borderEndWidth: '1px', borderEndStyle: 'solid', me: '-1px' }
              : {
                  borderBottomWidth: '1px',
                  borderBottomStyle: 'solid',
                  mb: '-1px',
                }),
            _ripple: { display: 'none' },
          },
        };
      },
      sticky: ({ colorScheme: e = 'primary', orientation: t }) => {
        const r = t === 'vertical';
        return {
          tabList: {
            borderColor: 'inherit',
            ...(r ? { borderEndWidth: '1px' } : { borderBottomWidth: '1px' }),
          },
          tab: {
            borderColor: 'transparent',
            _selected: {
              color: [`${e}.500`, j(e) ? `${e}.100` : `${e}.400`],
              borderColor: 'inherit',
              ...(r
                ? { borderEndColor: ['white', 'black'] }
                : { borderBottomColor: ['white', 'black'] }),
            },
            ...(r
              ? {
                  roundedLeft: 'md',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  me: '-2px',
                }
              : {
                  roundedTop: 'md',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  mb: '-2px',
                }),
            _ripple: { display: 'none' },
          },
        };
      },
      'sticky-subtle': ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'primary',
        orientation: n,
      }) => {
        const o = n === 'vertical';
        return {
          tabList: {
            borderColor: 'inherit',
            ...(o ? { borderEndWidth: '1px' } : { borderBottomWidth: '1px' }),
          },
          tab: {
            borderColor: 'inherit',
            _notLast: {
              ...(o ? { borderBottom: 'none' } : { borderEnd: 'none' }),
            },
            _selected: {
              bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
              color: [`${r}.800`, j(r) ? `${r}.50` : `${r}.200`],
            },
            ...(o
              ? { borderWidth: '1px', borderStyle: 'solid', me: '-1px' }
              : { borderWidth: '1px', borderStyle: 'solid', mb: '-1px' }),
          },
        };
      },
      'sticky-solid': ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'primary',
        orientation: n,
      }) => {
        const o = n === 'vertical';
        return {
          tabList: {
            borderColor: 'inherit',
            ...(o ? { borderEndWidth: '1px' } : { borderBottomWidth: '1px' }),
          },
          tab: {
            borderColor: 'inherit',
            _notLast: {
              ...(o ? { borderBottom: 'none' } : { borderEnd: 'none' }),
            },
            _selected: {
              bg: [de(`${r}.600`, 24)(e, t), ee(`${r}.600`, 16)(e, t)],
              color: 'white',
            },
            ...(o
              ? { borderWidth: '1px', borderStyle: 'solid', me: '-1px' }
              : { borderWidth: '1px', borderStyle: 'solid', mb: '-1px' }),
          },
        };
      },
      rounded: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => {
        const n = J(
          R(`${r}.500`)(e, t),
          R(j(r) ? `${r}.100` : `${r}.400`)(e, t),
        )(t);
        return {
          tabList: { gap: 'sm' },
          tab: {
            borderRadius: 'full',
            _selected: { color: n, boxShadow: `inset 0 0 0px 1px ${n}` },
          },
        };
      },
      'rounded-subtle': ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'primary',
      }) => ({
        tabList: { gap: 'sm' },
        tab: {
          borderRadius: 'full',
          _selected: {
            bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
            color: [`${r}.800`, j(r) ? `${r}.50` : `${r}.200`],
          },
        },
      }),
      'rounded-solid': ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'primary',
      }) => ({
        tabList: { gap: 'sm' },
        tab: {
          borderRadius: 'full',
          _selected: {
            bg: [de(`${r}.600`, 24)(e, t), ee(`${r}.600`, 16)(e, t)],
            color: 'white',
          },
        },
      }),
      unstyled: {
        tab: { _hover: { opacity: 'inherit' }, _ripple: { display: 'none' } },
      },
    },
    sizes: {
      sm: { tab: { py: 1, px: 3, fontSize: 'sm' } },
      md: { tab: { fontSize: 'md', py: 2, px: 4 } },
      lg: { tab: { fontSize: 'lg', py: 3, px: 5 } },
    },
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'primary' },
  },
  q4 = {
    baseStyle: {
      container: {
        outline: 0,
        fontWeight: 'medium',
        rounded: 'md',
        _focusVisible: { boxShadow: 'outline' },
      },
      label: { overflow: 'visible' },
      closeButton: {
        transitionProperty: 'common',
        transitionDuration: 'normal',
        rounded: 'full',
        opacity: 0.5,
        _disabled: { opacity: 0.4 },
        _hover: {
          opacity: 0.8,
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        },
        _active: { opacity: 1 },
        _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
      },
    },
    variants: {
      solid: {
        container: ({
          theme: e,
          colorMode: t,
          colorScheme: r = 'primary',
        }) => ({
          bg: [de(`${r}.600`, 24)(e, t), ee(`${r}.600`, 16)(e, t)],
          color: 'white',
        }),
      },
      subtle: {
        container: ({
          theme: e,
          colorMode: t,
          colorScheme: r = 'primary',
        }) => ({
          bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
          color: [`${r}.800`, j(r) ? `${r}.50` : `${r}.200`],
        }),
      },
      outline: {
        container: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => {
          const n = J(
            R(`${r}.500`)(e, t),
            R(j(r) ? `${r}.100` : `${r}.400`)(e, t),
          )(t);
          return { color: n, boxShadow: `inset 0 0 0px 1px ${n}` };
        },
      },
    },
    sizes: {
      sm: ({ theme: e }) => ({
        container: {
          minH: '6',
          minW: '6',
          fontSize: 'xs',
          px: '2',
          lineHeight: B(e, 'sizes.6'),
        },
      }),
      md: ({ theme: e }) => ({
        container: {
          minH: '7',
          minW: '7',
          fontSize: 'sm',
          px: '2',
          lineHeight: B(e, 'sizes.7'),
        },
      }),
      lg: ({ theme: e }) => ({
        container: {
          minH: '8',
          minW: '8',
          fontSize: 'md',
          px: '3',
          lineHeight: B(e, 'sizes.8'),
        },
      }),
    },
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'primary' },
  },
  kr = {
    baseStyle: {
      container: {},
      field: {
        width: '100%',
        minWidth: 0,
        outline: 0,
        position: 'relative',
        appearance: 'none',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      },
      element: { color: ['blackAlpha.600', 'whiteAlpha.700'] },
    },
    variants: {
      outline: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = 'focus',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(r)
            ? J(R(r[0], r[0])(e, t), R(r[1], r[1])(e, t))(t)
            : R(r, r)(e, t),
          i = O(n)
            ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
            : R(n, n)(e, t);
        return {
          field: {
            border: '1px solid',
            borderColor: 'inherit',
            bg: 'inherit',
            _hover: { borderColor: ['blackAlpha.500', 'whiteAlpha.400'] },
            _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
            _invalid: { borderColor: i, boxShadow: `0 0 0 1px ${i}` },
            _active: { borderColor: o, boxShadow: `0 0 0 1px ${o}` },
            _focusVisible: {
              zIndex: 'yamcha',
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
          },
          addon: {
            border: '1px solid',
            borderColor: ['inherit', 'whiteAlpha.50'],
            bg: ['blackAlpha.300', 'whiteAlpha.300'],
          },
        };
      },
      filled: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = 'focus',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(r)
            ? J(R(r[0], r[0])(e, t), R(r[1], r[1])(e, t))(t)
            : R(r, r)(e, t),
          i = O(n)
            ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
            : R(n, n)(e, t);
        return {
          field: {
            border: '2px solid',
            borderColor: 'transparent',
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _hover: { bg: ['blackAlpha.100', 'whiteAlpha.100'] },
            _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
            _invalid: { borderColor: i, boxShadow: `0 0 0 1px ${i}` },
            _active: {
              bg: 'transparent',
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
            _focusVisible: {
              bg: 'transparent',
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
          },
          addon: {
            border: '2px solid transparent',
            bg: ['blackAlpha.300', 'whiteAlpha.300'],
          },
        };
      },
      flushed: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = 'focus',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(r)
            ? J(R(r[0], r[0])(e, t), R(r[1], r[1])(e, t))(t)
            : R(r, r)(e, t),
          i = O(n)
            ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
            : R(n, n)(e, t);
        return {
          field: {
            borderBottom: '1px solid',
            borderColor: 'inherit',
            rounded: '0',
            px: '0',
            bg: 'transparent',
            _hover: { borderColor: ['blackAlpha.500', 'whiteAlpha.400'] },
            _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
            _invalid: { borderColor: i, boxShadow: `0px 1px 0px 0px ${i}` },
            _active: { borderColor: o, boxShadow: `0px 1px 0px 0px ${o}` },
            _focusVisible: {
              borderColor: o,
              boxShadow: `0px 1px 0px 0px ${o}`,
            },
          },
          addon: {
            borderBottom: '1px solid',
            borderColor: 'inherit',
            bg: 'transparent',
            rounded: '0',
          },
        };
      },
      unstyled: {
        field: { bg: 'transparent', minH: 'auto', px: '0' },
        addon: { bg: 'transparent', minH: 'auto', px: '0' },
      },
    },
    sizes: {
      xs: {
        field: { fontSize: 'xs', px: '2', minH: '6', rounded: 'sm' },
        addon: { fontSize: 'xs', px: '2', minH: '6', rounded: 'sm' },
      },
      sm: {
        field: { fontSize: 'sm', px: '2', minH: '8', rounded: 'md' },
        addon: { fontSize: 'sm', px: '2', minH: '8', rounded: 'md' },
      },
      md: {
        field: { fontSize: 'md', px: '3', minH: '10', rounded: 'md' },
        addon: { fontSize: 'md', px: '3', minH: '10', rounded: 'md' },
      },
      lg: {
        field: { fontSize: 'lg', px: '4', minH: '12', rounded: 'md' },
        addon: { fontSize: 'lg', px: '4', minH: '12', rounded: 'md' },
      },
    },
    defaultProps: { size: 'md', variant: 'outline' },
  },
  Z4 = Hg(vw(kr, 'field'), {
    baseStyle: { py: '2', lineHeight: 'short', verticalAlign: 'top' },
    variants: { unstyled: { h: 'auto', py: '0', px: '0' } },
    sizes: {
      xs: { py: '2', minH: '20' },
      sm: { py: '2', minH: '20' },
      md: { py: '2', minH: '20' },
      lg: { py: '3', minH: '20' },
    },
  })(),
  J4 = {
    baseStyle: {
      rounded: 'md',
      bg: ['white', 'black'],
      border: '1px solid',
      borderColor: ['blackAlpha.200', 'whiteAlpha.100'],
      px: 'sm',
      py: '0.5',
      fontWeight: 'medium',
      fontSize: 'sm',
      color: 'inherit',
      boxShadow: ['md', 'dark-md'],
      maxW: 'xs',
      zIndex: 'dodoria',
    },
  },
  eP = {
    baseStyle: {
      container: { w: '100%' },
      item: {
        w: '100%',
        h: '100%',
        _selected: { boxShadow: ['md', 'dark-md'] },
      },
      trigger: { color: ['blackAlpha.300', 'whiteAlpha.300'] },
    },
    variants: {
      elevated: {
        item: { bg: ['white', 'black'], boxShadow: ['base', 'dark-md'] },
      },
      outline: { item: { bg: ['white', 'black'], borderWidth: '1px' } },
      unstyled: {
        item: { rounded: 0, p: 0, _selected: { boxShadow: 'unset' } },
      },
    },
    sizes: {
      sm: { item: { rounded: 'base', p: 'sm' } },
      md: { item: { rounded: 'md', p: 'md' } },
      normal: { item: { rounded: 'lg', p: 'normal' } },
      lg: { item: { rounded: 'xl', p: 'lg' } },
    },
    defaultProps: { variant: 'outline', size: 'md' },
  },
  tP = {
    baseStyle: ({ direction: e }) => ({
      container: {},
      item: {},
      trigger: {},
      icon: {
        color: ['blackAlpha.600', 'whiteAlpha.700'],
        rotate: e === 'vertical' ? '90deg' : '0deg',
      },
    }),
    variants: {
      border: ({ direction: e }) => ({
        trigger: {
          bg: 'border',
          ...(e === 'vertical' ? { h: 'px' } : { w: 'px' }),
          _focus: { outline: 'none' },
          _focusVisible: { outline: 'none', bg: 'focus' },
          _after: {
            content: "''",
            position: 'absolute',
            ...(e === 'vertical'
              ? { left: '0', right: '0', transform: 'translateY(-50%)' }
              : { top: '0', bottom: '0', transform: 'translateX(-50%)' }),
            ...(e === 'vertical' ? { h: '2' } : { w: '2' }),
          },
        },
        icon: { p: '1', bg: 'border', rounded: 'full' },
      }),
      spacer: ({
        direction: e,
        theme: t,
        colorMode: r,
        colorScheme: n = 'gray',
      }) => ({
        trigger: {
          ...(e === 'vertical' ? { p: '1' } : { p: '1' }),
          _after: {
            transitionProperty: 'common',
            transitionDuration: 'slower',
            bg: 'transparent',
            content: "''",
            display: 'block',
            rounded: 'full',
            ...(e === 'vertical'
              ? { w: 'full', h: '2' }
              : { w: '2', h: 'full' }),
          },
          _dark: { _after: { bg: 'transparent' } },
          _focus: { outline: 'none' },
          _active: {
            _after: { bg: j(n) ? 'border' : `${n}.50` },
            _dark: {
              _after: { bg: j(n) ? 'border' : Te(`${n}.600`, 0.12)(t, r) },
            },
          },
          _focusVisible: {
            outline: 'none',
            _after: { bg: j(n) ? 'border' : `${n}.100` },
            _dark: {
              _after: { bg: j(n) ? 'border' : Te(`${n}.600`, 0.24)(t, r) },
            },
          },
        },
        icon: {
          transitionProperty: 'common',
          transitionDuration: 'slower',
          _active: { color: ['transparent', 'transparent'] },
        },
      }),
    },
    defaultProps: { variant: 'border', colorScheme: 'gray' },
  },
  rP = {
    baseStyle: {
      container: {
        w: 'full',
        rounded: 'md',
        cursor: 'pointer',
        _readOnly: { cursor: 'auto' },
        _disabled: { opacity: 0.6, cursor: 'not-allowed' },
      },
      inner: { rounded: 'md' },
      overlay: { rounded: 'md' },
      track: {},
      thumb: {
        rounded: 'full',
        outline: 0,
        borderWidth: '3px',
        borderColor: 'whiteAlpha.950',
        boxShadow: ['md', 'dark-md'],
        transitionProperty: 'transform',
        transitionDuration: 'normal',
        _active: { transform: 'scale(1.15)' },
        _focusVisible: { boxShadow: ['outline', 'outline'] },
      },
    },
    sizes: {
      sm: { container: { maxW: 'xs' }, thumb: { boxSize: '3' } },
      md: { container: { maxW: 'sm' }, thumb: { boxSize: '4' } },
      lg: { container: { maxW: 'md' }, thumb: { boxSize: '5' } },
      full: { container: { maxW: 'full' }, thumb: { boxSize: '5' } },
    },
    defaultProps: { size: 'md' },
  },
  nP = {
    baseStyle: {
      outline: 0,
      _focusVisible: { boxShadow: 'inline' },
      _scrollbar: { w: '3', h: '3' },
      _scrollbarTrack: { bg: 'transparent' },
      _scrollbarThumb: {
        bg: 'blackAlpha.600',
        bgClip: 'padding-box',
        border: '3px solid transparent',
        rounded: 'full',
        _nativeHover: { bg: 'blackAlpha.800', bgClip: 'padding-box' },
      },
      _dark: {
        _scrollbarThumb: {
          bg: 'whiteAlpha.600',
          bgClip: 'padding-box',
          _nativeHover: { bg: 'whiteAlpha.800', bgClip: 'padding-box' },
        },
      },
      _scrollbarButton: {},
      _scrollbarCorner: { bg: 'transparent' },
    },
  },
  oP = {
    baseStyle: {
      container: {
        p: '1',
        bg: ['blackAlpha.100', 'whiteAlpha.50'],
        _readOnly: { cursor: 'default' },
        _disabled: { cursor: 'not-allowed' },
      },
      cursor: { boxShadow: ['md', 'dark-md'] },
      button: {
        transitionProperty: 'common',
        transitionDuration: 'ultra-slow',
        fontWeight: 'medium',
        whiteSpace: 'nowrap',
        color: ['blackAlpha.800', 'whiteAlpha.800'],
        _hover: { opacity: 0.7, _checked: { opacity: 1 } },
        _focusVisible: { boxShadow: 'outline' },
        _readOnly: { cursor: 'default' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      },
    },
    variants: {
      basic: ({ colorScheme: e = 'gray' }) => ({
        container: { rounded: 'lg' },
        cursor: {
          bg: j(e)
            ? ['whiteAlpha.800', `${e}.700`]
            : [ye(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
          color: [j(e) || ye(e) ? 'black' : 'white', 'white'],
          rounded: 'md',
        },
        button: {
          rounded: 'md',
          _checked: { color: [j(e) || ye(e) ? 'black' : 'white', 'white'] },
        },
      }),
      rounded: ({ colorScheme: e = 'gray' }) => ({
        container: { rounded: 'full' },
        cursor: {
          bg: j(e)
            ? ['whiteAlpha.800', `${e}.700`]
            : [ye(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
          color: [j(e) || ye(e) ? 'black' : 'white', 'white'],
          rounded: 'full',
        },
        button: {
          rounded: 'full',
          _checked: { color: [j(e) || ye(e) ? 'black' : 'white', 'white'] },
        },
      }),
    },
    sizes: {
      sm: {
        container: { minW: 'xs' },
        button: { py: '1', px: '2', fontSize: 'sm' },
      },
      md: {
        container: { minW: 'sm' },
        button: { py: '1.5', px: '3', fontSize: 'md' },
      },
      lg: { container: { minW: 'md' }, button: { py: '2', px: '4' } },
    },
    defaultProps: { variant: 'basic', size: 'md' },
  },
  iP = {
    baseStyle: {
      background: ['blackAlpha.300', 'whiteAlpha.300'],
      borderColor: ['blackAlpha.400', 'whiteAlpha.400'],
      opacity: 0.7,
      borderRadius: 'sm',
    },
    defaultProps: {
      startColor: ['blackAlpha.300', 'whiteAlpha.300'],
      endColor: ['blackAlpha.400', 'whiteAlpha.400'],
    },
  },
  Ev = {
    baseStyle: {
      container: { w: '100%' },
      table: {
        h: '100%',
        w: '100%',
        fontVariantNumeric: 'lining-nums tabular-nums',
        borderCollapse: 'collapse',
      },
      tr: {
        _disabled: {
          cursor: 'not-allowed',
          opacity: 0.4,
          _hover: { bg: ['initial', 'initial'] },
        },
      },
      th: {
        fontFamily: 'heading',
        fontWeight: 'semibold',
        textAlign: 'start',
        color: ['blackAlpha.700', 'whiteAlpha.600'],
        textTransform: 'uppercase',
        letterSpacing: 'wider',
      },
      td: { textAlign: 'start' },
      caption: {
        fontFamily: 'heading',
        fontWeight: 'medium',
        textAlign: 'center',
        color: ['blackAlpha.700', 'whiteAlpha.600'],
      },
    },
    variants: {
      simple: ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'gray',
        withBorder: n,
        withColumnBorders: o,
        highlightOnSelected: i,
        highlightOnHover: s,
      }) => ({
        table: { ...(n ? { borderWidth: '1px' } : {}) },
        th: {
          borderBottomWidth: '1px',
          '&[data-is-numeric=true]': { textAlign: 'end' },
          ...(o ? { _notLast: { borderRightWidth: '1px' } } : {}),
        },
        td: {
          borderBottomWidth: '1px',
          '&[data-is-numeric=true]': { textAlign: 'end' },
          ...(o ? { _notLast: { borderRightWidth: '1px' } } : {}),
        },
        tbody: {
          tr: {
            ...(i
              ? {
                  _selected: {
                    bg: [
                      j(r) ? de(`${r}.50`, 72)(e, t) : de(`${r}.50`, 64)(e, t),
                      Te(`${r}.300`, 0.04)(e, t),
                    ],
                  },
                }
              : {}),
            ...(s
              ? {
                  cursor: 'pointer',
                  transitionProperty: 'common',
                  transitionDuration: 'slow',
                  _hover: {
                    bg: [
                      Te(`${r}.400`, 0.08)(e, t),
                      Te(`${r}.300`, 0.12)(e, t),
                    ],
                  },
                }
              : {}),
          },
        },
        tfoot: { tr: { _last: { th: { borderBottomWidth: 0 } } } },
      }),
      striped: ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'gray',
        withBorder: n,
        withColumnBorders: o,
        highlightOnHover: i,
      }) => ({
        table: { ...(n ? { borderWidth: '1px' } : {}) },
        th: {
          borderBottomWidth: '1px',
          '&[data-is-numeric=true]': { textAlign: 'end' },
          ...(o ? { _notLast: { borderRightWidth: '1px' } } : {}),
        },
        td: {
          borderBottomWidth: '1px',
          '&[data-is-numeric=true]': { textAlign: 'end' },
          ...(o ? { _notLast: { borderRightWidth: '1px' } } : {}),
        },
        tbody: {
          tr: {
            _odd: {
              bg: [
                j(r) ? de(`${r}.50`, 72)(e, t) : de(`${r}.50`, 64)(e, t),
                Te(`${r}.300`, 0.04)(e, t),
              ],
            },
            ...(i
              ? {
                  cursor: 'pointer',
                  transitionProperty: 'common',
                  transitionDuration: 'slow',
                  _hover: {
                    bg: [
                      Te(`${r}.400`, 0.08)(e, t),
                      Te(`${r}.300`, 0.12)(e, t),
                    ],
                  },
                }
              : {}),
          },
        },
        tfoot: { tr: { _last: { th: { borderBottomWidth: 0 } } } },
      }),
      unstyled: {},
    },
    sizes: {
      sm: {
        container: { gap: 2 },
        th: { px: 2, py: 1, fontSize: 'xs', lineHeight: 5 },
        td: { px: 2, py: 1, fontSize: 'xs', lineHeight: 5 },
        caption: { mt: 1, px: 2, py: 1, fontSize: 'xs' },
      },
      md: {
        container: { gap: 4 },
        th: { px: 3, py: 2, fontSize: 'sm', lineHeight: 5 },
        td: { px: 3, py: 2, fontSize: 'sm', lineHeight: 5 },
        caption: { mt: 2, px: 3, py: 2, fontSize: 'sm' },
      },
      lg: {
        container: { gap: 6 },
        th: { px: 4, py: 3, lineHeight: 6 },
        td: { px: 4, py: 3, lineHeight: 6 },
        caption: { mt: 3, px: 4, py: 3 },
      },
      xl: {
        container: { gap: 8 },
        th: { px: 6, py: 4, fontSize: 'lg', lineHeight: 6 },
        td: { px: 6, py: 4, fontSize: 'lg', lineHeight: 6 },
        caption: { mt: 4, px: 6, py: 4, fontSize: 'lg' },
      },
    },
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
  },
  Tv = be(Ev, {
    baseStyle: { sortIcon: {} },
    sizes: {
      sm: { sortIcon: { right: 2 } },
      md: { sortIcon: { right: 3 } },
      lg: { sortIcon: { right: 4 } },
      xl: { sortIcon: { right: 6 } },
    },
  })(),
  sP = be(Tv, {
    baseStyle: { pagingControl: { gridTemplateColumns: '1fr 5fr 1fr' } },
    sizes: {
      sm: { pagingControl: { gap: 2 } },
      md: { pagingControl: { gap: 4 } },
      lg: { pagingControl: { gap: 6 } },
      xl: { pagingControl: { gap: 8 } },
    },
  })(),
  aP = be(kr, {
    baseStyle: { container: { gap: 'sm' }, field: { textAlign: 'center' } },
    variants: { unstyled: { field: { h: 'auto' } } },
    sizes: {
      xs: { field: { fontSize: 'xs', boxSize: '6', rounded: 'sm' } },
      sm: { field: { fontSize: 'sm', boxSize: '8', rounded: 'md' } },
      md: { field: { fontSize: 'md', boxSize: '10', rounded: 'md' } },
      lg: { field: { fontSize: 'lg', boxSize: '12', rounded: 'md' } },
    },
  })({ omit: ['addon', 'sizes'] }),
  lP = {
    baseStyle: {
      container: {
        rounded: 'md',
        bg: ['white', 'black'],
        border: '1px solid',
        borderColor: ['blackAlpha.200', 'whiteAlpha.100'],
        color: 'inherit',
        boxShadow: ['lg', 'dark-lg'],
        zIndex: 'guldo',
        _focusVisible: { outline: 0, boxShadow: 'outline' },
      },
      closeButton: { top: '2', right: '2' },
      header: {
        p: 'sm',
        gap: 'sm',
        fontWeight: 'semibold',
        borderBottom: '1px solid',
        borderColor: 'inherit',
      },
      body: { my: 'sm', px: 'sm', gap: 'sm' },
      footer: {
        p: 'sm',
        gap: 'sm',
        borderTop: '1px solid',
        borderColor: 'inherit',
      },
    },
  },
  uP = {
    baseStyle: {
      track: { bg: 'border' },
      filledTrack: ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'primary',
        hasStripe: n,
        isAnimation: o,
        filledTrackColor: i,
      }) => {
        n = !o && n;
        const s = J('rgba(255, 255, 255, 0.15)', 'rgba(0,0,0,0.1)')(t),
          a = i
            ? O(i)
              ? J(R(i[0], i[0])(e, t), R(i[1], i[1])(e, t))(t)
              : R(i, i)(e, t)
            : R(`${r}.500`)(e, t);
        return {
          transitionProperty: 'common',
          transitionDuration: 'slow',
          bgImage: n
            ? `linear-gradient(
            45deg,
            ${s} 25%,
            transparent 25%,
            transparent 50%,
            ${s} 50%,
            ${s} 75%,
            transparent 75%,
            transparent
          )`
            : o
              ? `linear-gradient(
            to right,
            transparent 0%,
            ${a} 50%,
            transparent 100%
          )`
              : void 0,
          ...(n ? { bgSize: '1rem 1rem' } : {}),
          ...(o ? {} : { bgColor: a }),
        };
      },
    },
    sizes: {
      xs: { track: { h: '1' } },
      sm: { track: { h: '2' } },
      md: { track: { h: '3' } },
      lg: { track: { h: '4' } },
    },
    defaultProps: { size: 'md', colorScheme: 'primary' },
  },
  cP = {
    baseStyle: {
      container: {
        _readOnly: { cursor: 'auto' },
        _disabled: { cursor: 'not-allowed' },
      },
      icon: ({ colorScheme: e = 'primary' }) => ({
        transitionProperty: 'box-shadow',
        transitionDuration: 'normal',
        border: '2px solid',
        borderColor: 'inherit',
        rounded: 'full',
        color: 'white',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        _checked: {
          _before: {
            content: '""',
            display: 'inline-block',
            rounded: 'full',
            bg: [`${e}.500`, `${e}.600`],
          },
          _hover: { _before: { bg: [`${e}.600`, `${e}.700`] } },
          _disabled: {
            _before: { bg: ['blackAlpha.400', 'whiteAlpha.300'] },
            _dark: { _before: { bg: 'whiteAlpha.300' } },
          },
        },
        _disabled: { bg: ['blackAlpha.200', 'whiteAlpha.100'] },
        _focusVisible: { boxShadow: 'outline' },
        _invalid: {
          borderColor: ['danger.500', 'danger.400'],
          _focusVisible: { borderColor: ['inherit', 'inherit'] },
        },
      }),
      label: { userSelect: 'none', _disabled: { opacity: 0.4 } },
    },
    sizes: {
      sm: {
        icon: { boxSize: '3.5', _before: { boxSize: '1.5' } },
        label: { fontSize: 'sm' },
      },
      md: {
        icon: { boxSize: '4', _before: { boxSize: '2' } },
        label: { fontSize: 'md' },
      },
      lg: {
        icon: { boxSize: '5', _before: { boxSize: '3' } },
        label: { fontSize: 'lg' },
      },
    },
    defaultProps: { size: 'md', colorScheme: 'primary' },
  },
  zv = be(kr, {
    baseStyle: {
      container: {},
      field: {
        cursor: 'pointer',
        pr: '8',
        pb: 'px',
        _focus: { zIndex: 'unset' },
        _readOnly: { pointerEvents: 'none' },
      },
      icon: {
        w: '6',
        py: '2',
        color: ['blackAlpha.600', 'whiteAlpha.700'],
        fontSize: 'xl',
        outline: 0,
        rounded: 'md',
        _disabled: { opacity: 0.4 },
      },
    },
    sizes: {
      xs: { icon: { pt: '3', fontSize: 'lg', insetEnd: '1' } },
      sm: { icon: { insetEnd: '2' } },
      md: { icon: { insetEnd: '2' } },
      lg: { icon: { insetEnd: '2' } },
    },
  })({ omit: ['addon', 'element'] }),
  Gd = {
    baseStyle: {
      button: { transitionProperty: 'common', transitionDuration: 'normal' },
      list: {
        rounded: 'md',
        minW: 'xs',
        py: '2',
        bg: ['white', 'black'],
        border: '1px solid',
        borderColor: ['blackAlpha.200', 'whiteAlpha.100'],
        color: 'inherit',
        boxShadow: ['lg', 'dark-lg'],
        zIndex: 'yamcha',
      },
      item: {
        cursor: 'pointer',
        py: '1.5',
        px: '3',
        transitionProperty: 'background',
        transitionDuration: 'ultra-fast',
        transitionTimingFunction: 'ease-in',
        _focus: { bg: ['blackAlpha.50', 'whiteAlpha.50'] },
        _hover: { bg: ['blackAlpha.100', 'whiteAlpha.100'] },
        _active: { bg: ['blackAlpha.200', 'whiteAlpha.200'] },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      },
      icon: { color: ['blackAlpha.600', 'whiteAlpha.700'] },
      command: { opacity: 0.6 },
      divider: { my: '2', borderBottomWidth: '1px', borderColor: 'inherit' },
      group: {},
      groupLabel: {
        py: '1.5',
        px: '3',
        fontSize: 'sm',
        fontWeight: 'semibold',
        color: ['blackAlpha.700', 'whiteAlpha.600'],
      },
    },
  },
  Yd = be(zv, Gd, {
    baseStyle: {
      inner: {},
      list: { w: '100%', maxH: 'xs', overflowY: 'auto' },
      itemIcon: {},
    },
  })({ omit: ['button', 'command'] }),
  Xd = be(Yd, {
    baseStyle: {
      clearIcon: {
        transitionProperty: 'common',
        transitionDuration: 'normal',
        pointerEvents: 'auto',
        _hover: { opacity: 0.8 },
        _disabled: { pointerEvents: 'none', opacity: 0.4 },
        _focusVisible: { boxShadow: 'outline' },
      },
    },
  })(),
  Fa = be(kr, Xd, {
    baseStyle: {
      container: {},
      field: {
        cursor: 'text',
        pb: 'px',
        _focus: { zIndex: 'unset' },
        _readOnly: { pointerEvents: 'none' },
      },
      list: {
        w: 'auto',
        minW: 'auto',
        maxH: 'inherit',
        overflowY: 'inherit',
        p: '2',
      },
    },
    sizes: { xs: { icon: { pt: '2', fontSize: 'md' } } },
  })({ omit: ['addon', 'element', 'group', 'groupLabel', 'item', 'itemIcon'] }),
  dP = be(Fa)(),
  Av = {
    baseStyle: {
      container: ({ orientation: e }) => ({
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        _readOnly: { cursor: 'auto' },
        _disabled: { opacity: 0.6, cursor: 'not-allowed' },
        ...(e === 'vertical' ? { h: '100%' } : { w: '100%' }),
      }),
      track: {
        overflow: 'hidden',
        rounded: 'sm',
        bg: 'border',
        _disabled: { bg: ['blackAlpha.200', 'whiteAlpha.400'] },
      },
      filledTrack: ({ colorScheme: e = 'primary' }) => ({
        w: 'inherit',
        h: 'inherit',
        bg: [`${e}.500`, `${e}.400`],
      }),
      mark: { fontSize: 'sm' },
      thumb: ({ theme: e, colorMode: t, orientation: r }) => ({
        position: 'absolute',
        zIndex: 'yamcha',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 0,
        rounded: 'full',
        bg: 'white',
        boxShadow: 'base',
        border: '1px solid',
        borderColor: 'transparent',
        transitionProperty: 'transform',
        transitionDuration: 'normal',
        _focusVisible: { boxShadow: 'outline' },
        _disabled: { bg: [de('black', 72)(e, t), ee('white', 64)] },
        ...(r === 'vertical'
          ? {
              left: '50%',
              transform: 'translateX(-50%)',
              _active: { transform: 'translateX(-50%) scale(1.15)' },
            }
          : {
              top: '50%',
              transform: 'translateY(-50%)',
              _active: { transform: 'translateY(-50%) scale(1.15)' },
            }),
      }),
    },
    sizes: {
      sm: ({ orientation: e }) => ({
        track: e === 'vertical' ? { w: '0.5' } : { h: '0.5' },
        thumb: { boxSize: '2.5' },
        mark: e === 'vertical' ? { ml: '2' } : { mt: '2' },
      }),
      md: ({ orientation: e }) => ({
        track: e === 'vertical' ? { w: '1' } : { h: '1' },
        thumb: { boxSize: '3.5' },
        mark: e === 'vertical' ? { ml: '3' } : { mt: '3' },
      }),
      lg: ({ orientation: e }) => ({
        track: e === 'vertical' ? { w: '1.5' } : { h: '1.5' },
        thumb: { boxSize: '5' },
        mark: e === 'vertical' ? { ml: '4' } : { mt: '4' },
      }),
    },
    defaultProps: { size: 'md', colorScheme: 'primary' },
  },
  fP = be(Av)(),
  pP = {
    baseStyle: ({ colorScheme: e = 'yellow' }) => ({
      container: { w: 'max-content' },
      group: { position: 'relative' },
      item: {
        cursor: 'pointer',
        rounded: 'sm',
        color: ['blackAlpha.300', 'whiteAlpha.300'],
        outline: 'none',
        _notLast: { position: 'absolute', top: 0, left: 0 },
        _readOnly: { cursor: 'default' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        _focusVisible: { boxShadow: 'outline' },
        _filled: { color: [`${e}.500`, `${e}.600`] },
      },
      icon: { fill: 'currentColor' },
    }),
    sizes: {
      xs: { icon: { fontSize: 'md' } },
      sm: { icon: { fontSize: 'lg' } },
      md: { icon: { fontSize: 'xl' } },
      lg: { icon: { fontSize: '2xl' } },
      xl: { icon: { fontSize: '3xl' } },
    },
    defaultProps: { size: 'md', colorScheme: 'yellow' },
  },
  hP = be(Fa)(),
  mP = be(Xd)(),
  gP = be(Fa)(),
  yP = be(kr, {
    baseStyle: {
      stepper: {
        borderStart: '1px solid',
        borderColor: 'inherit',
        color: ['blackAlpha.600', 'whiteAlpha.700'],
        _hover: { bg: ['blackAlpha.100', 'whiteAlpha.100'] },
        _active: { bg: ['blackAlpha.200', 'whiteAlpha.200'] },
        _readOnly: { cursor: 'auto' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      },
    },
    variants: {
      flushed: {
        stepper: {
          bg: 'transparent',
          border: 'none',
          _hover: { bg: 'transparent', opacity: 0.8 },
          _active: { bg: 'transparent', opacity: 0.7 },
          _last: { border: 'none' },
        },
      },
      unstyled: {
        stepper: {
          bg: 'transparent',
          border: 'none',
          _hover: { bg: 'transparent' },
          _active: { bg: 'transparent' },
          _last: { border: 'none' },
        },
      },
    },
    sizes: {
      xs: {
        stepper: {
          fontSize: 'xs',
          _first: { borderTopEndRadius: 'sm' },
          _last: {
            borderBottomEndRadius: 'sm',
            mt: '-1px',
            borderTop: '1px solid',
            borderColor: 'inherit',
          },
        },
      },
      sm: {
        stepper: {
          fontSize: 'sm',
          _first: { borderTopEndRadius: 'md' },
          _last: {
            borderBottomEndRadius: 'md',
            mt: '-1px',
            borderTop: '1px solid',
            borderColor: 'inherit',
          },
        },
      },
      md: {
        stepper: {
          fontSize: 'md',
          _first: { borderTopEndRadius: 'md' },
          _last: {
            borderBottomEndRadius: 'md',
            mt: '-1px',
            borderTop: '1px solid',
            borderColor: 'inherit',
          },
        },
      },
      lg: {
        stepper: {
          fontSize: 'lg',
          _first: { borderTopEndRadius: 'md' },
          _last: {
            borderBottomEndRadius: 'md',
            mt: '-1px',
            borderTop: '1px solid',
            borderColor: 'inherit',
          },
        },
      },
    },
  })({ omit: ['addon'] }),
  vP = {
    baseStyle: {
      container: { _disabled: { cursor: 'not-allowed' } },
      inner: { flex: 1 },
      item: {
        px: 1,
        color: ['blackAlpha.600', 'whiteAlpha.700'],
        rounded: 'md',
        transitionProperty: 'common',
        transitionDuration: 'slower',
        _selected: { cursor: 'default', pointerEvents: 'none' },
        _focus: { outline: 'none' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
        _hover: { _disabled: { bg: ['initial', 'initial'] } },
        _focusVisible: { boxShadow: 'outline' },
      },
      first: {},
      last: {},
      prev: {},
      next: {},
      dots: { pointerEvents: 'none' },
    },
    variants: {
      solid: ({ colorScheme: e = 'primary' }) => ({
        item: {
          border: '1px solid',
          borderColor: 'border',
          _selected: {
            bg: j(e)
              ? [`${e}.50`, `${e}.700`]
              : [ye(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
            borderColor: j(e)
              ? [`${e}.50`, `${e}.700`]
              : [ye(e) ? `${e}.400` : `${e}.500`, `${e}.600`],
            color: [j(e) || ye(e) ? 'black' : 'white', 'white'],
            _hover: {
              bg: j(e)
                ? [`${e}.100`, `${e}.800`]
                : [ye(e) ? `${e}.500` : `${e}.600`, `${e}.700`],
            },
          },
          _hover: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _disabled: { bg: ['initial', 'initial'] },
          },
          _active: { bg: ['blackAlpha.100', 'whiteAlpha.100'] },
        },
        dots: { border: '0' },
      }),
      outline: ({ colorScheme: e = 'primary' }) => ({
        item: {
          border: '1px solid',
          borderColor: 'border',
          _selected: {
            bg: 'transparent',
            borderColor: [`${e}.600`, `${e}.500`],
            color: j(e)
              ? ['blackAlpha.800', 'whiteAlpha.700']
              : [`${e}.600`, `${e}.500`],
            _hover: { bg: ['transparent', 'transparent'] },
          },
          _hover: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _disabled: { bg: ['initial', 'initial'] },
          },
          _active: { bg: ['blackAlpha.100', 'whiteAlpha.100'] },
        },
        dots: { border: '0' },
      }),
      ghost: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        item: {
          _selected: {
            bg: j(r) ? void 0 : 'transparent',
            fontWeight: 'semibold',
            color: j(r)
              ? ['blackAlpha.800', 'whiteAlpha.700']
              : [`${r}.600`, `${r}.500`],
          },
          _hover: { bg: [`${r}.50`, Te(`${r}.600`, 0.12)(e, t)] },
          _active: {
            bg: j(r)
              ? [`${r}.300`, 'whiteAlpha.300']
              : [`${r}.200`, Te(`${r}.200`, 0.24)(e, t)],
          },
        },
      }),
      unstyled: {
        container: { gap: 0 },
        inner: { gap: 0 },
        item: { bg: 'none', color: 'inherit', minW: 'auto', minH: 'auto' },
        _ripple: { display: 'none' },
      },
    },
    sizes: {
      xs: {
        container: { gap: 'xs' },
        inner: { gap: 'xs' },
        item: { minW: 6, minH: 6, fontSize: 'xs' },
      },
      sm: {
        container: { gap: 'xs' },
        inner: { gap: 'xs' },
        item: { minW: 7, minH: 7, fontSize: 'sm' },
      },
      md: {
        container: { gap: 'sm' },
        inner: { gap: 'sm' },
        item: { minW: 8, minH: 8, fontSize: 'md' },
      },
      lg: {
        container: { gap: 'sm' },
        inner: { gap: 'sm' },
        item: { minW: 10, minH: 10, fontSize: 'lg' },
      },
      xl: {
        container: { gap: 'md' },
        inner: { gap: 'md' },
        item: { minW: 12, minH: 12, fontSize: 'xl' },
      },
    },
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'primary' },
  },
  xP = {
    baseStyle: {
      fontFamily: 'mono',
      bg: ['blackAlpha.50', 'whiteAlpha.50'],
      rounded: 'md',
      borderWidth: '1px',
      fontSize: '0.8em',
      fontWeight: 'bold',
      lineHeight: 'shorter',
      py: '0.2em',
      px: '0.4em',
      whiteSpace: 'nowrap',
    },
  },
  bP = {
    baseStyle: {
      transitionProperty: 'common',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-out',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none',
      color: 'link',
      _hover: { textDecoration: 'underline' },
      _focusVisible: { boxShadow: 'outline' },
    },
  },
  SP = {
    baseStyle: {
      container: {},
      item: {},
      icon: { me: '2', display: 'inline-block', verticalAlign: 'middle' },
    },
  },
  wP = {
    baseStyle: { px: '1', py: '1' },
    variants: {
      solid: ({ theme: e, colorMode: t, colorScheme: r = 'gray' }) => ({
        bg: [de(`${r}.600`, 24)(e, t), ee(`${r}.600`, 16)(e, t)],
        color: 'white',
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = 'gray' }) => ({
        bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
        color: [`${r}.800`, j(r) ? `${r}.50` : `${r}.200`],
      }),
      outline: ({ theme: e, colorMode: t, colorScheme: r = 'gray' }) => {
        const n = J(
          R(`${r}.500`)(e, t),
          R(j(r) ? `${r}.100` : `${r}.400`)(e, t),
        )(t);
        return { color: n, boxShadow: `inset 0 0 0px 1px ${n}` };
      },
      'text-accent': ({ colorScheme: e = 'gray' }) => ({
        color: [`${e}.500`, j(e) ? `${e}.100` : `${e}.400`],
        p: 0,
      }),
      unstyled: { p: 0 },
    },
    defaultProps: { variant: 'subtle', colorScheme: 'secondary' },
  },
  kP = {
    baseStyle: {
      w: 'full',
      '*:first-of-type': { mt: '0 !important' },
      'h1, h2, h3, h4, h5, h6': {
        mt: '24px',
        mb: '16px',
        fontWeight: 'semibold',
        lineHeight: '1.25',
      },
      h1: {
        pb: '.3em',
        fontSize: '2em',
        borderBottom: '1px solid',
        borderBottomColor: 'border',
      },
      h2: {
        pb: '.3em',
        fontSize: '1.5em',
        borderBottom: '1px solid',
        borderBottomColor: 'border',
      },
      h3: { fontSize: '1.25em' },
      h4: { fontSize: '1em' },
      h5: { fontSize: '0.875em' },
      h6: { fontSize: '0.85em' },
      'p, blockquote, ul, ol, dl, table, pre, details': {
        mt: '0px',
        mb: '16px',
      },
      strong: { fontWeight: 'semibold' },
      a: { color: 'link', textDecoration: 'none' },
      img: { maxW: '100%', boxSizing: 'content-box' },
      blockquote: {
        px: '1em',
        color: ['blackAlpha.700', 'whiteAlpha.600'],
        borderLeft: '0.25em solid',
        borderLeftColor: 'border',
      },
      'blockquote>:last-child': { mb: 0 },
      ul: { pl: '2em', listStyleType: 'disc' },
      'li + li': { mt: '0.25em' },
      'code:not(pre > *)': {
        py: '0.2em',
        px: '0.4em',
        m: 0,
        fontFamily: 'mono',
        fontSize: '85%',
        bg: ['blackAlpha.200', 'whiteAlpha.300'],
        rounded: '6px',
      },
      pre: { mt: '16px', fontSize: '92.5%', lineHeight: 1.45, rounded: '6px' },
      hr: { h: '0.25em', p: 0, my: '24px', bg: 'border', border: 0 },
      table: {
        display: 'block',
        w: 'max-content',
        maxW: '100%',
        overflow: 'auto',
      },
      tr: { borderTop: '1px solid', borderTopColor: 'border' },
      th: { fontWeight: 'semibold' },
      'th, td': {
        py: '6px',
        px: '13px',
        border: '1px solid',
        borderColor: 'border',
      },
    },
  },
  CP = {
    baseStyle: ({ theme: e, colorMode: t }) => ({
      container: {
        color: ['blackAlpha.700', 'whiteAlpha.600'],
        rounded: 'md',
        w: '100%',
        bg: ['blackAlpha.50', 'whiteAlpha.50'],
        outline: 0,
        overflow: 'hidden',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        _hover: { cursor: 'pointer', bg: ['blackAlpha.100', 'whiteAlpha.100'] },
        _loading: {
          cursor: 'not-allowed',
          bg: ['blackAlpha.100', 'whiteAlpha.100'],
        },
        _accept: {
          bg: ['success.50', Te('success.400', 0.12)(e, t)],
          borderColor: ['success.500', 'success.400'],
        },
        _reject: {
          bg: ['danger.50', Te('danger.400', 0.12)(e, t)],
          borderColor: ['danger.500', 'danger.400'],
        },
      },
      overlay: { bg: ['whiteAlpha.600', 'blackAlpha.600'], zIndex: 'kurillin' },
    }),
    variants: {
      solid: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = 'focus',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(r)
            ? J(R(r[0], r[0])(e, t), R(r[1], r[1])(e, t))(t)
            : R(r, r)(e, t),
          i = O(n)
            ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
            : R(n, n)(e, t);
        return {
          container: {
            borderWidth: '1px',
            borderStyle: 'solid',
            _invalid: { borderColor: i, boxShadow: `0 0 0 1px ${i}` },
            _focus: {
              zIndex: 'yamcha',
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
            _focusVisible: {
              zIndex: 'yamcha',
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
          },
        };
      },
      dashed: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = 'focus',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(r)
            ? J(R(r[0], r[0])(e, t), R(r[1], r[1])(e, t))(t)
            : R(r, r)(e, t),
          i = O(n)
            ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
            : R(n, n)(e, t);
        return {
          container: {
            borderWidth: '1px',
            borderStyle: 'dashed',
            _invalid: { borderColor: i, boxShadow: `0 0 0 1px ${i}` },
            _focus: {
              zIndex: 'yamcha',
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
            _focusVisible: {
              zIndex: 'yamcha',
              borderColor: o,
              boxShadow: `0 0 0 1px ${o}`,
            },
          },
        };
      },
      unstyled: {
        container: {
          color: 'inherit',
          rounded: 'inherit',
          bg: 'transparent',
          h: 'auto',
          _hover: { cursor: 'inherit', bg: 'transparent' },
          _loading: { cursor: 'auto', bg: 'transparent' },
          _accept: { bg: 'transparent', borderColor: 'inherit' },
          _reject: { bg: 'transparent', borderColor: 'inherit' },
        },
        overlay: { bg: 'transparent' },
      },
    },
    sizes: {
      xs: { container: { h: 'xs' } },
      sm: { container: { h: 'sm' } },
      md: { container: { h: 'md' } },
      lg: { container: { h: 'lg' } },
      full: { container: { h: 'full' } },
    },
    defaultProps: { size: 'sm', variant: 'dashed' },
  },
  _P = {
    baseStyle: {
      container: { w: 'full' },
      preview: {
        rounded: 'md',
        p: '1',
        whiteSpace: 'pre-line',
        transitionProperty: 'common',
        transitionDuration: 'normal',
      },
      input: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = 'focus',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(r)
            ? J(R(r[0], r[0])(e, t), R(r[1], r[1])(e, t))(t)
            : R(r, r)(e, t),
          i = O(n)
            ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
            : R(n, n)(e, t);
        return {
          rounded: 'md',
          p: '1',
          w: 'full',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          _placeholder: { opacity: 0.6 },
          _invalid: { boxShadow: `0px 0px 0px 1px ${i}` },
          _focus: { zIndex: 'yamcha', boxShadow: `0px 0px 0px 1px ${o}` },
          _focusVisible: {
            zIndex: 'yamcha',
            boxShadow: `0px 0px 0px 1px ${o}`,
          },
        };
      },
      textarea: ({
        theme: e,
        colorMode: t,
        focusBorderColor: r = 'focus',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(r)
            ? J(R(r[0], r[0])(e, t), R(r[1], r[1])(e, t))(t)
            : R(r, r)(e, t),
          i = O(n)
            ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
            : R(n, n)(e, t);
        return {
          boxSizing: 'content-box',
          rounded: 'md',
          p: '1',
          w: 'full',
          h: '1lh',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          _placeholder: { opacity: 0.6 },
          _invalid: { boxShadow: `0px 0px 0px 1px ${i}` },
          _focus: { zIndex: 'yamcha', boxShadow: `0px 0px 0px 1px ${o}` },
          _focusVisible: {
            zIndex: 'yamcha',
            boxShadow: `0px 0px 0px 1px ${o}`,
          },
        };
      },
    },
  },
  PP = be(kr)(),
  EP = {
    baseStyle: {
      container: { w: '100%', position: 'relative' },
      label: {
        fontSize: 'md',
        me: '3',
        mb: '2',
        fontWeight: 'medium',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        opacity: 1,
        _disabled: { opacity: 0.4 },
      },
      requiredIndicator: { ms: '1', color: ['danger.500', 'danger.400'] },
      helperMessage: {
        mt: '2',
        color: ['blackAlpha.700', 'whiteAlpha.600'],
        fontSize: 'sm',
      },
      errorMessage: {
        mt: '2',
        color: ['danger.500', 'danger.400'],
        fontSize: 'sm',
      },
    },
  },
  TP = {
    baseStyle: { fontFamily: 'heading', fontWeight: 'bold' },
    sizes: {
      '4xl': { fontSize: { base: '7xl', sm: '6xl' } },
      '3xl': { fontSize: { base: '6xl', sm: '5xl' } },
      '2xl': { fontSize: { base: '5xl', sm: '4xl' } },
      xl: { fontSize: { base: '4xl', sm: '3xl' } },
      lg: { fontSize: { base: '3xl', sm: '2xl' } },
      md: { fontSize: 'xl' },
      sm: { fontSize: 'md' },
      xs: { fontSize: 'sm' },
    },
    defaultProps: { size: 'xl' },
  },
  zP = {
    baseStyle: ({ withBorder: e }) => ({
      zIndex: 'kurillin',
      rounded: 'full',
      w: 'fit-content',
      h: 'fit-content',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 0,
      whiteSpace: 'nowrap',
      ...(e ? { borderWidth: '0.2em', borderColor: ['white', 'black'] } : {}),
    }),
    sizes: {
      sm: { minH: 2, minW: 2, fontSize: 'xs', px: 1, lineHeight: 1.6 },
      md: { minH: 3, minW: 3, fontSize: 'sm', px: 1.5, lineHeight: 1.5 },
      lg: { minH: 4, minW: 4, fontSize: 'md', px: 2, lineHeight: 1.4 },
    },
    variants: {
      solid: ({ colorScheme: e = 'primary' }) => ({
        bg: [`${e}.500`, `${e}.600`],
        color: 'white',
        var: [
          { name: 'ping', token: 'colors', value: [`${e}.300`, `${e}.400`] },
        ],
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
        color: [`${r}.800`, j(r) ? `${r}.50` : `${r}.200`],
        var: [
          {
            name: 'ping',
            token: 'colors',
            value: ['blackAlpha.400', 'whiteAlpha.500'],
          },
        ],
      }),
    },
    defaultProps: { size: 'md', variant: 'solid', colorScheme: 'primary' },
  },
  AP = be(kr, Gd, {
    baseStyle: {
      container: {},
      inner: {},
      field: {
        pr: '8',
        pb: 'px',
        _focus: { zIndex: 'unset' },
        _readOnly: { pointerEvents: 'none' },
      },
      swatch: {},
      eyeDropper: {
        w: '6',
        py: '1',
        fontSize: 'lg',
        outline: 0,
        rounded: 'md',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        pointerEvents: 'auto',
        color: ['blackAlpha.600', 'whiteAlpha.700'],
        _hover: { color: ['blackAlpha.500', 'whiteAlpha.600'] },
        _disabled: { pointerEvents: 'none', opacity: 0.4 },
        _focusVisible: { boxShadow: 'outline' },
      },
      list: {
        w: 'auto',
        minW: 'auto',
        maxH: 'inherit',
        overflowY: 'inherit',
        p: '2',
      },
    },
    sizes: {
      xs: ({ withSwatch: e }) => ({
        field: { pl: e ? '6' : '2' },
        swatch: { insetStart: '1', boxSize: '4' },
        eyeDropper: { insetEnd: '1', fontSize: 'sm' },
      }),
      sm: ({ withSwatch: e }) => ({
        field: { pl: e ? '9' : '2' },
        swatch: { insetStart: '2', boxSize: '5' },
        eyeDropper: { insetEnd: '2' },
      }),
      md: ({ withSwatch: e }) => ({
        field: { pl: e ? '10' : '3' },
        swatch: { insetStart: '2', boxSize: '6' },
        eyeDropper: { insetEnd: '2' },
      }),
      lg: ({ withSwatch: e }) => ({
        field: { pl: e ? '12' : '4' },
        swatch: { insetStart: '2' },
        eyeDropper: { insetEnd: '2' },
      }),
    },
  })({
    omit: [
      'addon',
      'element',
      'button',
      'item',
      'command',
      'icon',
      'divider',
      'group',
      'groupLabel',
    ],
  }),
  RP = {
    baseStyle: {
      container: { w: 'full' },
      saturationSlider: { maxW: 'full' },
      body: {},
      sliders: { flex: '1' },
      hueSlider: {},
      alphaSlider: {},
      eyeDropper: {
        borderColor: 'border',
        color: ['blackAlpha.600', 'whiteAlpha.700'],
        _hover: {
          borderColor: ['blackAlpha.500', 'whiteAlpha.400'],
          _disabled: { borderColor: 'inherit' },
        },
      },
      result: {},
      channels: {},
      channelLabel: {
        color: ['blackAlpha.700', 'whiteAlpha.600'],
        fontWeight: 'medium',
      },
      channel: {},
      swatchesLabel: {
        color: ['blackAlpha.700', 'whiteAlpha.600'],
        fontWeight: 'medium',
      },
      swatches: {},
      swatch: {
        _readOnly: { cursor: 'auto' },
        _disabled: { opacity: 0.6, cursor: 'not-allowed' },
      },
    },
    sizes: {
      sm: {
        container: { w: 'xs', gap: 'sm' },
        body: { gap: 'xs' },
        sliders: { gap: 'xs' },
        channels: { gap: 'xs' },
        eyeDropper: { boxSize: '7', fontSize: 'xs' },
        result: { boxSize: '7' },
        channelLabel: { fontSize: 'xs' },
        swatchesLabel: { fontSize: 'xs' },
        swatches: { gap: 'xs' },
      },
      md: {
        container: { w: 'sm', gap: 'sm' },
        body: { gap: 'sm' },
        sliders: { gap: 'sm' },
        channels: { gap: 'sm' },
        eyeDropper: { boxSize: '10' },
        result: { boxSize: '10' },
        channelLabel: { fontSize: 'sm', mb: 'xs' },
        swatchesLabel: { fontSize: 'sm', mb: 'xs' },
        swatches: { gap: 'sm' },
      },
      lg: {
        container: { w: 'md', gap: 'md' },
        body: { gap: 'sm' },
        sliders: { gap: 'sm' },
        channels: { gap: 'sm' },
        eyeDropper: { boxSize: '12', fontSize: 'xl' },
        result: { boxSize: '12' },
        channelLabel: { fontSize: 'md', mb: 'xs' },
        swatchesLabel: { fontSize: 'md', mb: 'xs' },
        swatches: { gap: 'sm' },
      },
      full: {
        container: { w: 'full', gap: 'md' },
        body: { gap: 'sm' },
        sliders: { gap: 'sm' },
        channels: { gap: 'sm' },
        eyeDropper: { boxSize: '12', fontSize: 'xl' },
        result: { boxSize: '12' },
        channelLabel: { fontSize: 'md', mb: 'xs' },
        swatchesLabel: { fontSize: 'md', mb: 'xs' },
        swatches: { gap: 'sm' },
      },
    },
    defaultProps: { size: 'md' },
  },
  MP = {
    baseStyle: { container: {}, overlay: { boxSize: 'full' } },
    variants: {
      basic: { container: { rounded: 'md' }, overlay: { rounded: 'md' } },
      rounded: { container: { rounded: 'full' }, overlay: { rounded: 'full' } },
    },
    sizes: {
      sm: { container: { boxSize: '6' } },
      md: { container: { boxSize: '8' } },
      lg: { container: { boxSize: '10' } },
    },
    defaultProps: { variant: 'basic', size: 'md' },
  },
  $P = {
    baseStyle: {
      w: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: { base: 'lg', sm: 'md' },
      p: { base: 'lg', sm: 'md' },
    },
  },
  Kd = {
    baseStyle: {
      container: {
        w: '100%',
        rounded: 'md',
        bg: ['white', 'black'],
        color: 'inherit',
        boxShadow: ['lg', 'dark-lg'],
        zIndex: 'recoome',
      },
      closeButton: { top: '3', right: '3' },
      overlay: { bg: 'blackAlpha.600', zIndex: 'burter' },
      header: {
        pt: 'md',
        px: 'md',
        gap: 'md',
        fontSize: 'xl',
        fontWeight: 'semibold',
      },
      body: { my: 'md', px: 'md', gap: 'md', flex: '1' },
      footer: { px: 'md', pb: 'md', gap: 'md' },
    },
    sizes: {
      xs: { container: { maxW: 'xs' } },
      sm: { container: { maxW: 'sm' } },
      md: { container: { maxW: 'md' } },
      lg: { container: { maxW: 'lg' } },
      xl: { container: { maxW: 'xl' } },
      '2xl': { container: { maxW: '2xl' } },
      '3xl': { container: { maxW: '3xl' } },
      '4xl': { container: { maxW: '4xl' } },
      '5xl': { container: { maxW: '5xl' } },
      '6xl': { container: { maxW: '6xl' } },
      full: { container: { minW: '100vw', minH: '100dvh', rounded: 0 } },
    },
    defaultProps: { size: 'md' },
  },
  jP = be(Kd)(),
  LP = {
    baseStyle: { borderColor: 'border' },
    variants: {
      solid: { borderStyle: 'solid' },
      dashed: { borderStyle: 'dashed' },
      dotted: { borderStyle: 'dotted' },
    },
    defaultProps: { variant: 'solid' },
  },
  IP = be(Kd, {
    baseStyle: {
      container: ({ isFullHeight: e, placement: t }) => ({
        ...(e ? { height: '100dvh', rounded: '0' } : {}),
        w: 'auto',
        [`rounded${ab(t)}`]: 0,
      }),
      body: { overflow: 'auto' },
    },
    sizes: {
      xs: { container: { maxW: 'xs' } },
      sm: { container: { maxW: 'md' } },
      md: { container: { maxW: 'lg' } },
      lg: { container: { maxW: '2xl' } },
      xl: { container: { maxW: '4xl' } },
      full: { container: { minW: '100vw', minH: '100dvh' } },
    },
    defaultProps: { size: 'md' },
  })({ omit: ['sizes'] }),
  BP = {
    baseStyle: {
      px: 1,
      textTransform: 'uppercase',
      fontSize: 'xs',
      rounded: 'sm',
      fontWeight: 'bold',
    },
    variants: {
      solid: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        bg: [de(`${r}.600`, 24)(e, t), ee(`${r}.600`, 16)(e, t)],
        color: 'white',
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
        color: [`${r}.800`, j(r) ? `${r}.50` : `${r}.200`],
      }),
      outline: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => {
        const n = J(
          R(`${r}.500`)(e, t),
          R(j(r) ? `${r}.100` : Te(`${r}.400`, 0.92)(e, t))(e, t),
        )(t);
        return { color: n, boxShadow: `inset 0 0 0px 1px ${n}` };
      },
    },
    defaultProps: { variant: 'subtle', colorScheme: 'primary' },
  },
  DP = {
    baseStyle: {
      container: {},
      item: {},
      link: {
        transitionProperty: 'common',
        transitionDuration: 'fast',
        transitionTimingFunction: 'ease-out',
        textDecoration: 'none',
        outline: 'none',
        color: 'inherit',
        '&:not([aria-current=page])': {
          cursor: 'pointer',
          _hover: { textDecoration: 'underline' },
          _focusVisible: { boxShadow: 'outline' },
        },
      },
      separator: {},
    },
  },
  VP = {
    baseStyle: {
      container: { gap: 'md' },
      header: {},
      label: { color: ['blackAlpha.700', 'whiteAlpha.600'] },
      labelIcon: { color: ['blackAlpha.500', 'whiteAlpha.500'] },
      control: {
        color: ['blackAlpha.500', 'whiteAlpha.500'],
        fontSize: '1.25em',
        _hidden: { opacity: 0, pointerEvents: 'none' },
      },
      prev: {},
      next: {},
      content: {},
      year: { gridTemplateColumns: 'repeat(4, 1fr)' },
      month: { gridTemplateColumns: 'repeat(3, 1fr)' },
      button: {
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
          boxShadow: 'none',
          _focusVisible: { boxShadow: '0 0 0 3px rgba(125, 125, 125, 0.6)' },
        },
      },
      date: {},
      row: {},
      cell: { transitionProperty: 'common', transitionDuration: 'slower' },
      weekday: {
        userSelect: 'none',
        color: ['blackAlpha.700', 'whiteAlpha.600'],
        justifyContent: 'center',
        alignItems: 'center',
      },
      day: {
        _weekend: { color: ['red.600', 'red.400'] },
        _outside: { color: ['blackAlpha.500', 'whiteAlpha.500'] },
        _holiday: { color: ['red.600', 'red.400'] },
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
          _ripple: { display: 'none' },
        },
      },
    },
    variants: {
      solid: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        button: {
          _hover: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _disabled: { bg: ['initial', 'initial'] },
          },
          _selected: {
            bg: j(r)
              ? [`${r}.50`, `${r}.700`]
              : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            color: [j(r) || ye(r) ? 'black' : 'white', 'white'],
          },
        },
        cell: {
          _between: {
            bg: [
              j(r) ? Te(`${r}.50`, 0.48)(e, t) : `${r}.50`,
              ee(`${r}.300`, 72)(e, t),
            ],
            _start: { roundedLeft: 'md' },
            _end: { roundedRight: 'md' },
          },
        },
        day: {
          _hover: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _between: { bg: ['initial', 'initial'] },
            _selected: {
              bg: j(r)
                ? [`${r}.100`, `${r}.700`]
                : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            },
            _disabled: { bg: ['initial', 'initial'] },
          },
          _today: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _between: { bg: ['initial', 'initial'] },
          },
          _start: { roundedRight: '0' },
          _end: { roundedLeft: '0' },
          _selected: {
            bg: j(r)
              ? [`${r}.100`, `${r}.700`]
              : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            color: [j(r) || ye(r) ? 'black' : 'white', 'white'],
            borderColor: ['transparent', 'transparent'],
          },
        },
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        button: {
          _hover: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _disabled: { bg: ['initial', 'initial'] },
          },
          _selected: {
            bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
            color: [`${r}.800`, j(r) ? `${r}.50` : `${r}.200`],
          },
        },
        cell: {
          _between: {
            bg: [
              j(r) ? Te(`${r}.50`, 0.48)(e, t) : `${r}.50`,
              ee(`${r}.300`, 72)(e, t),
            ],
            _start: { roundedLeft: 'md' },
            _end: { roundedRight: 'md' },
          },
        },
        day: {
          _hover: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _between: { bg: ['initial', 'initial'] },
            _selected: {
              bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
            },
            _disabled: { bg: ['initial', 'initial'] },
          },
          _today: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _between: { bg: ['initial', 'initial'] },
          },
          _start: { roundedRight: '0' },
          _end: { roundedLeft: '0' },
          _selected: {
            bg: [j(r) ? `${r}.50` : `${r}.100`, ee(`${r}.300`, 58)(e, t)],
            color: [`${r}.800`, j(r) ? `${r}.50` : `${r}.200`],
            borderColor: ['transparent', 'transparent'],
          },
        },
      }),
      unstyled: {
        container: { gap: 'inherit', fontSize: 'inherit' },
        content: { w: 'auto' },
        label: {
          h: 'auto',
          pointerEvents: 'inherit',
          _hover: { bg: 'inherit' },
          _active: { bg: 'inherit', pointerEvents: 'inherit' },
        },
        labelIcon: { color: 'inherit' },
        control: {
          fontSize: 'inherit',
          w: 'auto',
          h: 'auto',
          _hover: { bg: 'inherit' },
          _active: { bg: 'inherit' },
          _hidden: { opacity: 'inherit', pointerEvents: 'inherit' },
        },
        button: {
          h: 'auto',
          _hover: { bg: 'inherit' },
          _active: { bg: 'inherit' },
          _disabled: {
            opacity: 'inherit',
            cursor: 'inherit',
            boxShadow: 'inherit',
            _focusVisible: { boxShadow: 'inherit' },
          },
        },
        weekday: { userSelect: 'auto', color: 'inherit', w: 'auto', h: 'auto' },
        day: {
          w: 'auto',
          h: 'auto',
          _hover: { bg: 'inherit' },
          _active: { bg: 'inherit' },
          _weekend: { color: 'inherit' },
          _outside: { color: 'inherit' },
          _holiday: { color: 'inherit' },
          _disabled: {
            opacity: 'inherit',
            cursor: 'inherit',
            boxShadow: 'inherit',
            _focusVisible: { boxShadow: 'inherit' },
          },
        },
      },
    },
    sizes: {
      sm: {
        container: { fontSize: 'xs' },
        content: { w: 56 },
        label: { h: 8 },
        control: { w: 8, h: 8 },
        button: { h: 8 },
        weekday: { w: 8, h: 8 },
        day: { w: 8, h: 8 },
      },
      md: {
        container: { fontSize: 'sm' },
        content: { w: '17.5rem' },
        label: { h: 10 },
        control: { w: 10, h: 10 },
        button: { h: 10 },
        weekday: { w: 10, h: 10 },
        day: { w: 10, h: 10 },
      },
      lg: {
        container: { fontSize: 'md' },
        content: { w: '21rem' },
        label: { h: 12 },
        control: { fontSize: '1.5em', w: 12, h: 12 },
        button: { h: 12 },
        weekday: { w: 12, h: 12 },
        day: { w: 12, h: 12 },
      },
      full: {
        container: { w: 'full', fontSize: 'md' },
        content: { w: 'full' },
        label: { h: 12 },
        control: { fontSize: '1.5em', w: 12, h: 12 },
        button: { h: 12 },
        weekday: { w: 'full', h: 12 },
        day: { w: 'full', h: 12 },
      },
    },
    defaultProps: { size: 'md', variant: 'solid', colorScheme: 'primary' },
  },
  OP = {
    baseStyle: { container: {}, header: {}, body: { flex: '1' }, footer: {} },
    variants: {
      elevated: { container: { boxShadow: ['md', 'dark-md'] } },
      outline: { container: { borderWidth: '1px' } },
      solid: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        container: {
          bg: [de(`${r}.600`, 16)(e, t), ee(`${r}.600`, 16)(e, t)],
          color: 'white',
        },
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        container: { bg: [`${r}.100`, ee(`${r}.300`, 58)(e, t)] },
      }),
      unstyled: {
        container: { rounded: 0 },
        header: { p: 0 },
        body: { p: 0 },
        footer: { p: 0 },
      },
    },
    sizes: {
      sm: {
        container: { rounded: 'base' },
        header: { pt: 'sm', px: 'sm', gap: 'sm' },
        body: { py: 'sm', px: 'sm', gap: 'sm' },
        footer: { pb: 'sm', px: 'sm', gap: 'sm' },
      },
      md: {
        container: { rounded: 'md' },
        header: { pt: 'md', px: 'md', gap: 'md' },
        body: { py: 'md', px: 'md', gap: 'md' },
        footer: { pb: 'md', px: 'md', gap: 'md' },
      },
      normal: {
        container: { rounded: 'lg' },
        header: { pt: 'normal', px: 'normal', gap: 'normal' },
        body: { py: 'normal', px: 'normal', gap: 'normal' },
        footer: { pb: 'normal', px: 'normal', gap: 'normal' },
      },
      lg: {
        container: { rounded: 'xl' },
        header: { pt: 'lg', px: 'lg', gap: 'lg' },
        body: { py: 'lg', px: 'lg', gap: 'lg' },
        footer: { pb: 'lg', px: 'lg', gap: 'lg' },
      },
    },
    defaultProps: { variant: 'elevated', colorScheme: 'primary', size: 'md' },
  },
  NP = {
    baseStyle: {
      container: { w: '100%' },
      inner: {},
      slide: {},
      control: {},
      prev: ({ orientation: e }) => ({
        ...(e === 'vertical'
          ? { left: '50%', top: '4', transform: 'translateX(-50%)' }
          : { top: '50%', left: '4', transform: 'translateY(-50%)' }),
      }),
      next: ({ orientation: e }) => ({
        ...(e === 'vertical'
          ? { left: '50%', bottom: '4', transform: 'translateX(-50%)' }
          : { top: '50%', right: '4', transform: 'translateY(-50%)' }),
      }),
      indicators: ({ orientation: e }) => ({
        gap: 'md',
        ...(e === 'vertical'
          ? {
              py: '4',
              h: '100%',
              top: '50%',
              right: '4',
              transform: 'translateY(-50%)',
            }
          : {
              px: '4',
              w: '100%',
              h: '2',
              left: '50%',
              bottom: '4',
              transform: 'translateX(-50%)',
            }),
      }),
      indicator: ({ orientation: e }) => ({
        rounded: 'full',
        bg: ['whiteAlpha.400', 'blackAlpha.400'],
        _hover: { bg: ['whiteAlpha.500', 'blackAlpha.500'] },
        _active: { bg: ['whiteAlpha.600', 'blackAlpha.600'] },
        _selected: { bg: ['whiteAlpha.700', 'blackAlpha.700'] },
        transitionProperty: 'common',
        transitionDuration: 'slower',
        ...(e === 'vertical'
          ? { h: '8', right: '4' }
          : { w: '8', bottom: '4' }),
      }),
    },
    sizes: {
      sm: {
        inner: { h: 'sm' },
        indicators: ({ orientation: e }) => ({
          ...(e === 'vertical' ? { w: '1.5' } : { h: '1.5' }),
        }),
      },
      md: {
        inner: { h: 'md' },
        indicators: ({ orientation: e }) => ({
          ...(e === 'vertical' ? { w: '1.5' } : { h: '1.5' }),
        }),
      },
      lg: {
        inner: { h: 'lg' },
        indicators: ({ orientation: e }) => ({
          ...(e === 'vertical' ? { w: '2' } : { h: '2' }),
        }),
      },
      xl: {
        inner: { h: 'xl' },
        indicators: ({ orientation: e }) => ({
          ...(e === 'vertical' ? { w: '2' } : { h: '2' }),
        }),
      },
    },
    defaultProps: { size: 'md' },
  },
  FP = {
    baseStyle: {
      container: {
        _readOnly: { cursor: 'auto' },
        _disabled: { cursor: 'not-allowed' },
      },
      icon: ({ colorScheme: e = 'primary' }) => ({
        transitionProperty: 'box-shadow',
        transitionDuration: 'normal',
        border: '2px solid',
        borderColor: 'inherit',
        color: ['white', 'black'],
        _checked: {
          bg: `${e}.500`,
          borderColor: `${e}.500`,
          color: ['white', 'black'],
          _hover: { bg: `${e}.600`, borderColor: `${e}.600` },
          _disabled: { bg: ['blackAlpha.400', 'whiteAlpha.300'] },
        },
        _indeterminate: {
          bg: `${e}.500`,
          borderColor: `${e}.500`,
          color: ['white', 'black'],
        },
        _disabled: {
          bg: ['blackAlpha.200', 'whiteAlpha.100'],
          borderColor: ['transparent', 'transparent'],
        },
        _focusVisible: { boxShadow: 'outline' },
        _invalid: {
          borderColor: ['danger.500', 'danger.400'],
          _focusVisible: {
            borderColor: 'inherit',
            _checked: { borderColor: `${e}.500` },
          },
        },
      }),
      label: { userSelect: 'none', _disabled: { opacity: 0.4 } },
    },
    sizes: {
      sm: {
        icon: { boxSize: '3.5', rounded: 'base', fontSize: '2xs' },
        label: { fontSize: 'sm' },
      },
      md: {
        icon: { boxSize: '4', rounded: 'base', fontSize: '2xs' },
        label: { fontSize: 'md' },
      },
      lg: {
        icon: { boxSize: '5', rounded: 'base', fontSize: 'sm' },
        label: { fontSize: 'lg' },
      },
    },
    defaultProps: { size: 'md', colorScheme: 'primary' },
  },
  Rv = {
    baseStyle: {
      cursor: 'pointer',
      rounded: 'md',
      fontWeight: 'semibold',
      transitionProperty: 'common',
      transitionDuration: 'slower',
      _focus: { outline: 'none' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
      _readOnly: { cursor: 'default', _ripple: { display: 'none' } },
      _hover: { _disabled: { bg: ['initial', 'initial'] } },
    },
    variants: {
      solid: ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'gray',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(n)
          ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
          : R(n, n)(e, t);
        return {
          bg: j(r)
            ? [`${r}.50`, `${r}.700`]
            : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
          color: [j(r) || ye(r) ? 'black' : 'white', 'white'],
          _hover: {
            bg: j(r)
              ? [`${r}.100`, `${r}.800`]
              : [ye(r) ? `${r}.500` : `${r}.600`, `${r}.700`],
            _disabled: {
              bg: j(r)
                ? [`${r}.50`, `${r}.700`]
                : [ye(r) ? `${r}.400` : `${r}.500`, `${r}.600`],
            },
          },
          _invalid: {
            border: '1px solid',
            borderColor: o,
            boxShadow: `0 0 0 1px ${o}`,
          },
          _focusVisible: { borderColor: 'transparent', boxShadow: 'outline' },
        };
      },
      outline: ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'gray',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(n)
          ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
          : R(n, n)(e, t);
        return {
          border: '1px solid',
          borderColor: [`${r}.600`, `${r}.500`],
          color: j(r)
            ? ['blackAlpha.800', 'whiteAlpha.700']
            : [`${r}.600`, `${r}.500`],
          bg: 'transparent',
          _hover: { bg: [`${r}.50`, Te(`${r}.600`, 0.12)(e, t)] },
          _invalid: { borderColor: [o, o], boxShadow: `0 0 0 1px ${o}` },
          _focusVisible: {
            boxShadow: 'outline',
            _invalid: { borderColor: 'transparent' },
          },
        };
      },
      link: ({ colorScheme: e = 'gray' }) => ({
        padding: 0,
        height: 'auto',
        lineHeight: 'normal',
        verticalAlign: 'baseline',
        color: [`${e}.600`, `${e}.500`],
        _hover: {
          textDecoration: 'underline',
          _disabled: { textDecoration: 'none' },
        },
        _active: {
          color: [`${e}.700`, `${e}.600`],
          _disabled: { color: [`${e}.600`, `${e}.500`] },
        },
        _focusVisible: { boxShadow: 'outline' },
        _ripple: { display: 'none' },
      }),
      ghost: ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'gray',
        errorBorderColor: n = ['danger.500', 'danger.400'],
      }) => {
        const o = O(n)
          ? J(R(n[0], n[0])(e, t), R(n[1], n[1])(e, t))(t)
          : R(n, n)(e, t);
        return {
          color: j(r)
            ? ['blackAlpha.800', 'whiteAlpha.700']
            : [`${r}.600`, `${r}.500`],
          bg: 'transparent',
          _hover: { bg: [`${r}.50`, Te(`${r}.600`, 0.12)(e, t)] },
          _invalid: {
            border: '1px solid',
            borderColor: o,
            boxShadow: `0 0 0 1px ${o}`,
          },
          _focusVisible: { borderColor: 'transparent', boxShadow: 'outline' },
        };
      },
      unstyled: {
        bg: 'none',
        color: 'inherit',
        display: 'inline',
        lineHeight: 'inherit',
        m: 0,
        p: 0,
        _ripple: { display: 'none' },
      },
    },
    sizes: {
      xs: ({ theme: e }) => ({
        h: 6,
        minW: 6,
        fontSize: 'xs',
        lineHeight: B(e, 'sizes.6'),
        px: 2,
      }),
      sm: ({ theme: e }) => ({
        h: 8,
        minW: 8,
        fontSize: 'sm',
        lineHeight: B(e, 'sizes.8'),
        px: 3,
      }),
      md: ({ theme: e }) => ({
        h: 10,
        minW: 10,
        fontSize: 'md',
        lineHeight: B(e, 'sizes.10'),
        px: 4,
      }),
      lg: ({ theme: e }) => ({
        h: 12,
        minW: 12,
        fontSize: 'lg',
        lineHeight: B(e, 'sizes.12'),
        px: 6,
      }),
    },
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
  },
  WP = Hg(Rv, {
    baseStyle: {
      _hover: { bg: ['blackAlpha.100', 'whiteAlpha.100'] },
      _active: { bg: ['blackAlpha.200', 'whiteAlpha.200'] },
      _focusVisible: { boxShadow: 'outline' },
    },
    sizes: {
      sm: { boxSize: 6, fontSize: '2xs' },
      md: { boxSize: 8, fontSize: 'xs' },
      lg: { boxSize: 10, fontSize: 'md' },
    },
    defaultProps: { size: 'md' },
  })({ omit: ['variants', 'sizes', 'defaultProps'] }),
  HP = {
    baseStyle: {
      container: {},
      item: {},
      button: {
        transitionProperty: 'common',
        transitionDuration: 'normal',
        _focusVisible: { boxShadow: 'outline' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        py: '3',
        px: '4',
      },
      panel: { px: '4', pb: '3' },
      icon: {
        ml: 'auto',
        fontSize: '1.25em',
        color: ['blackAlpha.600', 'whiteAlpha.700'],
      },
    },
    variants: {
      basic: {
        item: {
          borderTopWidth: '1px',
          borderColor: 'inherit',
          _last: { borderBottomWidth: '1px' },
        },
        button: {
          _hover: {
            bg: ['blackAlpha.50', 'whiteAlpha.50'],
            _disabled: { bg: 'none' },
          },
        },
      },
      card: {
        item: {
          borderWidth: '1px',
          rounded: 'md',
          bg: ['blackAlpha.50', 'whiteAlpha.50'],
          _expanded: { bg: ['white', 'black'] },
          _notFirst: { mt: 'md' },
        },
        button: {
          _hover: {
            bg: ['blackAlpha.100', 'whiteAlpha.100'],
            _expanded: { bg: 'none' },
            _disabled: { bg: 'none' },
          },
        },
      },
      unstyled: {},
    },
    defaultProps: { variant: 'basic' },
  },
  UP = {
    baseStyle: {
      container: { px: 4, py: 3, rounded: 'md' },
      icon: { flexShrink: 0, marginEnd: 3, boxSize: 5 },
      loading: { flexShrink: 0, marginEnd: 3, fontSize: 'xl' },
      title: { marginEnd: 2, fontWeight: 'bold', lineHeight: 5 },
      description: { lineHeight: 5 },
    },
    variants: {
      basic: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        container: { bg: ['white', 'black'], borderWidth: '1px' },
        icon: { color: [de(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      subtle: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        container: { bg: [`${r}.100`, ee(`${r}.300`, 58)(e, t)] },
        icon: { color: [de(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      solid: ({ theme: e, colorMode: t, colorScheme: r = 'primary' }) => ({
        container: {
          bg: [de(`${r}.600`, 16)(e, t), ee(`${r}.600`, 16)(e, t)],
          color: 'white',
        },
      }),
      'island-accent': ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'primary',
      }) => ({
        container: {
          bg: ['white', 'black'],
          borderWidth: '1px',
          pl: 7,
          _before: {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: 3,
            transform: 'translateY(-50%)',
            w: 1,
            h: 'calc(100% - 1.5rem)',
            bg: [de(`${r}.600`, 16)(e, t), `${r}.400`],
            rounded: 'full',
          },
        },
        icon: { color: [de(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      'left-accent': ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'primary',
      }) => ({
        container: {
          bg: [`${r}.100`, ee(`${r}.300`, 58)(e, t)],
          pl: 3,
          borderLeft: '0.25rem solid',
          borderLeftColor: [de(`${r}.600`, 16)(e, t), `${r}.400`],
          rounded: 4,
        },
        icon: { color: [de(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
      'top-accent': ({
        theme: e,
        colorMode: t,
        colorScheme: r = 'primary',
      }) => ({
        container: {
          bg: [`${r}.100`, ee(`${r}.300`, 58)(e, t)],
          pt: 3,
          borderTop: '0.25rem solid',
          borderTopColor: [de(`${r}.600`, 16)(e, t), `${r}.400`],
          rounded: 4,
        },
        icon: { color: [de(`${r}.600`, 16)(e, t), `${r}.400`] },
      }),
    },
    defaultProps: { variant: 'basic', colorScheme: 'primary' },
  },
  Mv = {
    baseStyle: {
      container: {
        w: '100%',
        rounded: 'full',
        cursor: 'pointer',
        _readOnly: { cursor: 'auto' },
        _disabled: { opacity: 0.6, cursor: 'not-allowed' },
      },
      overlay: { rounded: 'full' },
      track: {},
      thumb: {
        rounded: 'full',
        outline: 0,
        borderWidth: '3px',
        borderColor: 'whiteAlpha.950',
        boxShadow: ['md', 'dark-md'],
        transitionProperty: 'transform',
        transitionDuration: 'normal',
        _active: { transform: 'scale(1.15)' },
        _focusVisible: { boxShadow: ['outline', 'outline'] },
      },
    },
    sizes: {
      sm: { container: { h: '3' }, thumb: { boxSize: '3' } },
      md: { container: { h: '4' }, thumb: { boxSize: '4' } },
      lg: { container: { h: '5' }, thumb: { boxSize: '5' } },
    },
    defaultProps: { size: 'md' },
  },
  GP = be(Mv)(),
  YP = be(Yd)(),
  XP = {
    baseStyle: {
      group: {},
      container: ({ theme: e, colorMode: t, name: r }) => {
        const n = r ? Pb({ string: r }) : J('gray.200', 'gray.500')(t);
        return {
          bg: n,
          color: $b(n)(e, t) ? 'white' : 'black',
          borderColor: ['white', 'black'],
          verticalAlign: 'top',
          _loaded: { bg: 'inherit' },
        };
      },
      name: {},
      excess: {
        borderColor: ['white', 'black'],
        bg: ['blackAlpha.200', 'whiteAlpha.200'],
      },
      badge: {
        rounded: 'full',
        borderWidth: '0.2em',
        borderColor: ['white', 'black'],
      },
    },
    sizes: {
      '2xs': ({ theme: e }) => ({
        container: {
          w: '4',
          h: '4',
          fontSize: `calc(${B(e, 'sizes.4')} / 2.5)`,
        },
        name: {
          fontSize: `calc(${B(e, 'sizes.4')} / 2.5)`,
          lineHeight: B(e, 'sizes.16'),
        },
        excess: { w: '4', h: '4' },
      }),
      xs: ({ theme: e }) => ({
        container: {
          w: '6',
          h: '6',
          fontSize: `calc(${B(e, 'sizes.6')} / 2.5)`,
        },
        name: {
          fontSize: `calc(${B(e, 'sizes.6')} / 2.5)`,
          lineHeight: B(e, 'sizes.16'),
        },
        excess: { w: '6', h: '6' },
      }),
      sm: ({ theme: e }) => ({
        container: {
          w: '8',
          h: '8',
          fontSize: `calc(${B(e, 'sizes.8')} / 2.5)`,
        },
        name: {
          fontSize: `calc(${B(e, 'sizes.8')} / 2.5)`,
          lineHeight: B(e, 'sizes.16'),
        },
        excess: { w: '8', h: '8' },
      }),
      md: ({ theme: e }) => ({
        container: {
          w: '12',
          h: '12',
          fontSize: `calc(${B(e, 'sizes.12')} / 2.5)`,
        },
        name: {
          fontSize: `calc(${B(e, 'sizes.12')} / 2.5)`,
          lineHeight: B(e, 'sizes.16'),
        },
        excess: { w: '12', h: '12' },
      }),
      lg: ({ theme: e }) => ({
        container: {
          w: '16',
          h: '16',
          fontSize: `calc(${B(e, 'sizes.16')} / 2.5)`,
        },
        name: {
          fontSize: `calc(${B(e, 'sizes.16')} / 2.5)`,
          lineHeight: B(e, 'sizes.16'),
        },
        excess: { w: '16', h: '16' },
      }),
      xl: ({ theme: e }) => ({
        container: {
          w: '24',
          h: '24',
          fontSize: `calc(${B(e, 'sizes.24')} / 2.5)`,
        },
        name: {
          fontSize: `calc(${B(e, 'sizes.24')} / 2.5)`,
          lineHeight: B(e, 'sizes.16'),
        },
        excess: { w: '24', h: '24' },
      }),
      '2xl': ({ theme: e }) => ({
        container: {
          w: '32',
          h: '32',
          fontSize: `calc(${B(e, 'sizes.32')} / 2.5)`,
        },
        name: {
          fontSize: `calc(${B(e, 'sizes.32')} / 2.5)`,
          lineHeight: B(e, 'sizes.16'),
        },
        excess: { w: '32', h: '32' },
      }),
    },
    defaultProps: { size: 'md' },
  },
  KP = {
    Accordion: HP,
    Alert: UP,
    AlphaSlider: GP,
    Autocomplete: YP,
    Avatar: XP,
    Badge: BP,
    Breadcrumb: DP,
    Button: Rv,
    Calendar: VP,
    Card: OP,
    Carousel: NP,
    Checkbox: FP,
    CloseButton: WP,
    ColorPicker: AP,
    ColorSelector: RP,
    ColorSwatch: MP,
    Container: $P,
    DatePicker: Fa,
    Dialog: jP,
    Divider: LP,
    Drawer: IP,
    Dropzone: CP,
    Editable: _P,
    FileInput: PP,
    FormControl: EP,
    Heading: TP,
    HueSlider: Mv,
    Indicator: zP,
    Input: kr,
    Kbd: xP,
    Link: bP,
    List: SP,
    Mark: wP,
    Markdown: kP,
    Menu: Gd,
    Modal: Kd,
    MonthPicker: hP,
    MultiAutocomplete: mP,
    MultiDatePicker: gP,
    MultiSelect: Xd,
    NativeSelect: zv,
    NumberInput: yP,
    Pagination: vP,
    PagingTable: sP,
    PinInput: aP,
    Popover: lP,
    Progress: uP,
    Radio: cP,
    RangeDatePicker: dP,
    RangeSlider: fP,
    Rating: pP,
    Reorder: eP,
    Resizable: tP,
    SaturationSlider: rP,
    ScrollArea: nP,
    SegmentedControl: oP,
    Select: Yd,
    NativeTable: Ev,
    Skeleton: iP,
    Slider: Av,
    Stat: Y4,
    Stepper: X4,
    Switch: K4,
    Table: Tv,
    Tabs: Q4,
    Tag: q4,
    Textarea: Z4,
    Tooltip: J4,
  },
  QP = {
    initialThemeScheme: 'base',
    initialColorMode: 'light',
    var: { prefix: 'ui' },
    breakpoint: 'down',
  },
  qP = {
    colors: {
      primary: 'blue.500',
      secondary: 'violet.500',
      info: 'blue.500',
      success: 'green.500',
      warning: 'orange.500',
      danger: 'red.500',
      link: 'blue.500',
    },
    colorSchemes: {
      primary: 'blue',
      secondary: 'violet',
      info: 'blue',
      success: 'green',
      warning: 'orange',
      danger: 'red',
      link: 'blue',
    },
  },
  ZP = {
    styles: {
      globalStyle: W4,
      resetStyle: U4,
      layerStyles: H4,
      textStyles: G4,
    },
    semantics: qP,
    components: KP,
    ...F4,
  },
  JP = QP,
  e3 = ({
    theme: e = ZP,
    config: t = JP,
    disableResetStyle: r,
    disableGlobalStyle: n,
    colorModeManager: o,
    themeSchemeManager: i,
    environment: s,
    disableEnvironment: a,
    children: l,
  }) => {
    var u;
    return b.jsx(Tw, {
      theme: e,
      config: t,
      themeSchemeManager: i,
      children: b.jsx(Cw, {
        colorModeManager: o,
        config: t,
        children: b.jsx(kg, {
          environment: s,
          disabled: a,
          children: b.jsx(v_, {
            ...((u = t.motion) == null ? void 0 : u.config),
            children: b.jsxs(s4, {
              ...t.loading,
              children: [
                r ? null : b.jsx(Aw, {}),
                n ? null : b.jsx(Rw, {}),
                l,
                b.jsx(C4, { ...t.notice }),
              ],
            }),
          }),
        }),
      }),
    });
  },
  [t3, r3] = pa({ strict: !1, name: 'ButtonGroupContext' });
ue(
  (
    {
      className: e,
      size: t,
      variant: r,
      direction: n,
      isAttached: o,
      isDisabled: i,
      gap: s,
      columnGap: a,
      rowGap: l,
      ...u
    },
    c,
  ) => {
    const d = n === 'column' || n === 'column-reverse',
      f = { display: 'inline-flex', flexDirection: n },
      m = S.useMemo(() => ({ size: t, variant: r, isDisabled: i }), [t, r, i]);
    return (
      o
        ? Object.assign(f, {
            '> *:first-of-type:not(:last-of-type)': d
              ? { borderBottomRadius: 0, marginBlockEnd: '-1px' }
              : { borderRightRadius: 0, marginInlineEnd: '-1px' },
            '> *:not(:first-of-type):not(:last-of-type)': d
              ? { borderRadius: 0, marginBlockStart: '-1px' }
              : { borderRadius: 0, marginInlineEnd: '-1px' },
            '> *:not(:first-of-type):last-of-type': d
              ? { borderTopRadius: 0, marginBlockStart: '-1px' }
              : { borderLeftRadius: 0 },
          })
        : Object.assign(f, { gap: s, columnGap: a, rowGap: l }),
      b.jsx(t3, {
        value: m,
        children: b.jsx(K.div, {
          ref: c,
          role: 'group',
          className: le('ui-button-group', e),
          'data-attached': Mu(o),
          __css: f,
          ...u,
        }),
      })
    );
  },
);
var n3 = ue(({ children: e, ...t }, r) => {
    const n = r3(),
      [o, i] = hd('Button', { ...n, ...t }),
      {
        className: s,
        as: a,
        type: l,
        isLoading: u,
        isActive: c,
        isDisabled: d = n == null ? void 0 : n.isDisabled,
        leftIcon: f,
        rightIcon: m,
        loadingIcon: x,
        loadingText: v,
        loadingPlacement: k = 'start',
        disableRipple: y,
        __css: h,
        ...g
      } = si(i),
      w = d || u,
      { ref: C, type: P } = o3(a),
      _ = Sb(r, C),
      { onPointerDown: T, ...L } = Ud({ ...g, isDisabled: y || w }),
      $ = S.useMemo(() => {
        var lt;
        const qe =
          '_focus' in o
            ? he((lt = o._focus) != null ? lt : {}, { zIndex: 'yamcha' })
            : {};
        return {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2',
          appearance: 'none',
          userSelect: 'none',
          position: 'relative',
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          overflow: 'hidden',
          outline: 'none',
          ...o,
          ...h,
          ...(n ? { _focus: qe } : {}),
        };
      }, [o, h, n]),
      Y = { leftIcon: f, rightIcon: m, children: e },
      Qe = { loadingIcon: x, loadingText: v };
    return b.jsxs(K.button, {
      ref: _,
      as: a,
      className: le('ui-button', s),
      type: l ?? P,
      disabled: w,
      'data-active': Mu(c),
      data__loading: Mu(u),
      __css: $,
      ...g,
      onPointerDown: T,
      children: [
        u && k === 'start'
          ? b.jsx(Qh, { className: 'ui-button__loading--start', ...Qe })
          : null,
        u
          ? v || b.jsx(K.span, { opacity: 0, children: b.jsx(qh, { ...Y }) })
          : b.jsx(qh, { ...Y }),
        u && k === 'end'
          ? b.jsx(Qh, { className: 'ui-button__loading--end', ...Qe })
          : null,
        b.jsx(Hd, { isDisabled: y || w, ...L }),
      ],
    });
  }),
  Qh = ({ className: e, loadingIcon: t, loadingText: r }) => {
    const n = S.useMemo(
        () => ({
          display: 'flex',
          alignItems: 'center',
          position: r ? 'relative' : 'absolute',
          fontSize: '1em',
          lineHeight: 'normal',
        }),
        [r],
      ),
      o = S.useMemo(
        () =>
          typeof t == 'string'
            ? b.jsx(In, { color: 'current', variant: t })
            : t || b.jsx(In, { color: 'current' }),
        [t],
      );
    return b.jsx(K.div, {
      className: le('ui-button__loading', e),
      __css: n,
      children: o,
    });
  },
  qh = ({ leftIcon: e, rightIcon: t, children: r }) =>
    b.jsxs(b.Fragment, {
      children: [
        e ? b.jsx(Zh, { children: e }) : null,
        r,
        t ? b.jsx(Zh, { children: t }) : null,
      ],
    }),
  Zh = ({ children: e, className: t, ...r }) =>
    b.jsx(K.span, {
      className: le('ui-button__icon', t),
      display: 'inline-flex',
      alignSelf: 'center',
      flexShrink: 0,
      'aria-hidden': !0,
      ...r,
      children: e,
    }),
  o3 = (e) => {
    const t = S.useRef(!e),
      r = S.useCallback((o) => {
        o && (t.current = o.tagName === 'BUTTON');
      }, []),
      n = t.current ? 'button' : void 0;
    return { ref: r, type: n };
  },
  i3 = K('div'),
  s3 = K('div', {
    baseStyle: {
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
    },
  }),
  Jh = ue((e, t) => {
    const [r, n] = hd('Text', e),
      { className: o, align: i, decoration: s, casing: a, ...l } = si(n),
      u = od({ textAlign: i, textDecoration: s, textTransform: a });
    return b.jsx(K.p, {
      ref: t,
      className: le('ui-text', o),
      __css: r,
      ...u,
      ...l,
    });
  }),
  [a3, Qd] = pa({
    name: 'TableStyleContext',
    errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" or "<NativeTable />" or "<PagingTable />"`,
  }),
  l3 = ue((e, t) => {
    const [r, n] = Qg('NativeTable', e),
      { className: o, layout: i, ...s } = si(n),
      a = { tableLayout: i, ...r.table };
    return b.jsx(a3, {
      value: r,
      children: b.jsx(K.table, {
        ref: t,
        className: le('ui-table', o),
        __css: a,
        ...oi(s, ['withBorder', 'withColumnBorders', 'highlightOnHover']),
      }),
    });
  }),
  u3 = ue(({ className: e, ...t }, r) => {
    const o = { ...Qd().tr };
    return b.jsx(K.tr, {
      ref: r,
      className: le('ui-table__tr', e),
      __css: o,
      ...t,
    });
  }),
  c3 = ue(({ className: e, ...t }, r) => {
    const o = { ...Qd().tbody };
    return b.jsx(K.tbody, {
      ref: r,
      className: le('ui-table__tbody', e),
      __css: o,
      ...t,
    });
  }),
  d3 = ue(({ className: e, isNumeric: t, ...r }, n) => {
    const i = { ...Qd().td };
    return b.jsx(K.td, {
      ref: n,
      className: le('ui-table__td', e),
      __css: i,
      'data-is-numeric': t,
      ...r,
    });
  }),
  $v = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  em = St.createContext && St.createContext($v),
  f3 = ['attr', 'size', 'title'];
function p3(e, t) {
  if (e == null) return {};
  var r = h3(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function h3(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Xs() {
  return (
    (Xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xs.apply(this, arguments)
  );
}
function tm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tm(Object(r), !0).forEach(function (n) {
          m3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function m3(e, t, r) {
  return (
    (t = g3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function g3(e) {
  var t = y3(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function y3(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || 'default');
    if (typeof n != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function jv(e) {
  return (
    e &&
    e.map((t, r) =>
      St.createElement(t.tag, Ks({ key: r }, t.attr), jv(t.child)),
    )
  );
}
function qd(e) {
  return (t) =>
    St.createElement(v3, Xs({ attr: Ks({}, e.attr) }, t), jv(e.child));
}
function v3(e) {
  var t = (r) => {
    var { attr: n, size: o, title: i } = e,
      s = p3(e, f3),
      a = o || r.size || '1em',
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + ' ' : '') + e.className),
      St.createElement(
        'svg',
        Xs(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          r.attr,
          n,
          s,
          {
            className: l,
            style: Ks(Ks({ color: e.color || r.color }, r.style), e.style),
            height: a,
            width: a,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        i && St.createElement('title', null, i),
        e.children,
      )
    );
  };
  return em !== void 0
    ? St.createElement(em.Consumer, null, (r) => t(r))
    : t($v);
}
function x3(e) {
  return qd({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z',
        },
        child: [],
      },
    ],
  })(e);
}
function b3(e) {
  return qd({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z',
        },
        child: [],
      },
    ],
  })(e);
}
function S3(e) {
  return qd({
    tag: 'svg',
    attr: { version: '1.1', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z',
        },
        child: [],
      },
    ],
  })(e);
}
const w3 = ({ i: e, j: t, c: r, handleClick: n }) => {
    const { onPointerDown: o, ...i } = Ud();
    return b.jsxs(
      d3,
      {
        w: '33.33%',
        h: '33.33%',
        position: 'relative',
        overflow: 'hidden',
        onClick: () => (r === 0 ? n(e, t) : void 0),
        onPointerDown: o,
        children: [
          (() => {
            switch (r) {
              case 0:
                return b.jsx(Ye, { w: 'full', h: 'full', as: x3 });
              case 1:
                return b.jsx(Ye, { w: 'full', h: 'full', as: b3 });
              case -1:
                return b.jsx(Ye, { w: 'full', h: 'full', as: S3 });
              default:
                return '';
            }
          })(),
          b.jsx(Hd, { ...i }),
        ],
      },
      t,
    );
  },
  rm = new Array(3).fill(new Array(3).fill(0)),
  k3 = () => {
    const [e, t] = S.useState(rm),
      [r, n] = S.useState(!1),
      [o, i] = S.useState(0),
      s = (u, c) => {
        o === 0 &&
          (t((d) =>
            d.map((f, m) =>
              m === u ? f.map((x, v) => (v === c ? (r ? -1 : 1) : x)) : f,
            ),
          ),
          n(!r));
      },
      a = () => {
        if (e.map((u) => u.every((c) => c === 1)).some((u) => u === !0)) {
          console.log('1の勝ち'), i(1);
          return;
        }
        if (e.map((u) => u.every((c) => c === -1)).some((u) => u === !0)) {
          console.log('-1の勝ち'), i(2);
          return;
        }
        for (let u = 0; u < e.length; u++) {
          if (e.map((c) => c[u]).every((c) => c === 1)) {
            console.log('1の勝ち'), i(1);
            return;
          }
          if (e.map((c) => c[u]).every((c) => c === -1)) {
            console.log('-1の勝ち'), i(2);
            return;
          }
        }
        if (e.map((u, c) => u[c]).every((u) => u === 1)) {
          console.log('1の勝ち'), i(1);
          return;
        }
        if (e.map((u, c) => u[c]).every((u) => u === -1)) {
          console.log('-1の勝ち'), i(2);
          return;
        }
        if (e.map((u, c) => u[u.length - 1 - c]).every((u) => u === 1)) {
          console.log('1の勝ち'), i(1);
          return;
        }
        if (e.map((u, c) => u[u.length - 1 - c]).every((u) => u === -1)) {
          console.log('-1の勝ち'), i(2);
          return;
        }
        if (e.map((u) => u.every((c) => c !== 0)).every((u) => u === !0)) {
          console.log('引き分け'), i(3);
          return;
        }
        i(0);
      },
      l = () => {
        n(!1), i(0), t(rm);
      };
    return (
      S.useEffect(a, [e]),
      b.jsxs(s3, {
        w: '100vw',
        h: '100dvh',
        flexDir: 'column',
        children: [
          b.jsx(l3, {
            withBorder: !0,
            withColumnBorders: !0,
            w: 'calc(100vw * 0.25)',
            h: 'calc(100vw * 0.25)',
            children: b.jsx(c3, {
              children: e.map((u, c) =>
                b.jsx(
                  u3,
                  {
                    children: u.map((d, f) =>
                      b.jsx(w3, { c: d, i: c, j: f, handleClick: s, key: f }),
                    ),
                  },
                  c,
                ),
              ),
            }),
          }),
          o === 0
            ? b.jsx(Jh, {
                textAlign: 'center',
                children: r ? 'あいての番' : 'あなたの番',
              })
            : b.jsxs(i3, {
                children: [
                  b.jsx(Jh, {
                    textAlign: 'center',
                    children: (() => {
                      switch (o) {
                        case 1:
                          return 'あなたの勝ち';
                        case 2:
                          return 'あいての勝ち';
                        default:
                          return '引き分け';
                      }
                    })(),
                  }),
                  b.jsx(n3, { onClick: l, children: 'もう一回' }),
                ],
              }),
        ],
      })
    );
  };
Dl.createRoot(document.getElementById('root')).render(
  b.jsx(St.StrictMode, { children: b.jsx(e3, { children: b.jsx(k3, {}) }) }),
);
