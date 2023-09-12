try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const Jt = (t, ...e) => {
  let n = t;
  return e.length > 0 && (n += ` :: ${JSON.stringify(e)}`), n;
}, Yt = Jt;
class f extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, n) {
    const r = Yt(e, n);
    super(r), this.name = e, this.details = n;
  }
}
const m = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, J = (t) => [m.prefix, t, m.suffix].filter((e) => e && e.length > 0).join("-"), Xt = (t) => {
  for (const e of Object.keys(m))
    t(e);
}, W = {
  updateDetails: (t) => {
    Xt((e) => {
      typeof t[e] == "string" && (m[e] = t[e]);
    });
  },
  getGoogleAnalyticsName: (t) => t || J(m.googleAnalytics),
  getPrecacheName: (t) => t || J(m.precache),
  getPrefix: () => m.prefix,
  getRuntimeName: (t) => t || J(m.runtime),
  getSuffix: () => m.suffix
};
function je(t, e) {
  const n = e();
  return t.waitUntil(n), n;
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch {
}
const Qt = "__WB_REVISION__";
function Zt(t) {
  if (!t)
    throw new f("add-to-cache-list-unexpected-type", { entry: t });
  if (typeof t == "string") {
    const o = new URL(t, location.href);
    return {
      cacheKey: o.href,
      url: o.href
    };
  }
  const { revision: e, url: n } = t;
  if (!n)
    throw new f("add-to-cache-list-unexpected-type", { entry: t });
  if (!e) {
    const o = new URL(n, location.href);
    return {
      cacheKey: o.href,
      url: o.href
    };
  }
  const r = new URL(n, location.href), s = new URL(n, location.href);
  return r.searchParams.set(Qt, e), {
    cacheKey: r.href,
    url: s.href
  };
}
class en {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: n }) => {
      n && (n.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: n, cachedResponse: r }) => {
      if (e.type === "install" && n && n.originalRequest && n.originalRequest instanceof Request) {
        const s = n.originalRequest.url;
        r ? this.notUpdatedURLs.push(s) : this.updatedURLs.push(s);
      }
      return r;
    };
  }
}
class tn {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: n, params: r }) => {
      const s = (r == null ? void 0 : r.cacheKey) || this._precacheController.getCacheKeyForURL(n.url);
      return s ? new Request(s, { headers: n.headers }) : n;
    }, this._precacheController = e;
  }
}
let N;
function nn() {
  if (N === void 0) {
    const t = new Response("");
    if ("body" in t)
      try {
        new Response(t.body), N = !0;
      } catch {
        N = !1;
      }
    N = !1;
  }
  return N;
}
async function rn(t, e) {
  let n = null;
  if (t.url && (n = new URL(t.url).origin), n !== self.location.origin)
    throw new f("cross-origin-copy-response", { origin: n });
  const r = t.clone(), s = {
    headers: new Headers(r.headers),
    status: r.status,
    statusText: r.statusText
  }, o = e ? e(s) : s, i = nn() ? r.body : await r.blob();
  return new Response(i, o);
}
const sn = (t) => new URL(String(t), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function Ue(t, e) {
  const n = new URL(t);
  for (const r of e)
    n.searchParams.delete(r);
  return n.href;
}
async function on(t, e, n, r) {
  const s = Ue(e.url, n);
  if (e.url === s)
    return t.match(e, r);
  const o = Object.assign(Object.assign({}, r), { ignoreSearch: !0 }), i = await t.keys(e, o);
  for (const a of i) {
    const c = Ue(a.url, n);
    if (s === c)
      return t.match(a, r);
  }
}
let an = class {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, n) => {
      this.resolve = e, this.reject = n;
    });
  }
};
const cn = /* @__PURE__ */ new Set();
async function ln() {
  for (const t of cn)
    await t();
}
function un(t) {
  return new Promise((e) => setTimeout(e, t));
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch {
}
function j(t) {
  return typeof t == "string" ? new Request(t) : t;
}
class hn {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, n) {
    this._cacheKeys = {}, Object.assign(this, n), this.event = n.event, this._strategy = e, this._handlerDeferred = new an(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const r of this._plugins)
      this._pluginStateMap.set(r, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: n } = this;
    let r = j(e);
    if (r.mode === "navigate" && n instanceof FetchEvent && n.preloadResponse) {
      const i = await n.preloadResponse;
      if (i)
        return i;
    }
    const s = this.hasCallback("fetchDidFail") ? r.clone() : null;
    try {
      for (const i of this.iterateCallbacks("requestWillFetch"))
        r = await i({ request: r.clone(), event: n });
    } catch (i) {
      if (i instanceof Error)
        throw new f("plugin-error-request-will-fetch", {
          thrownErrorMessage: i.message
        });
    }
    const o = r.clone();
    try {
      let i;
      i = await fetch(r, r.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const a of this.iterateCallbacks("fetchDidSucceed"))
        i = await a({
          event: n,
          request: o,
          response: i
        });
      return i;
    } catch (i) {
      throw s && await this.runCallbacks("fetchDidFail", {
        error: i,
        event: n,
        originalRequest: s.clone(),
        request: o.clone()
      }), i;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const n = await this.fetch(e), r = n.clone();
    return this.waitUntil(this.cachePut(e, r)), n;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const n = j(e);
    let r;
    const { cacheName: s, matchOptions: o } = this._strategy, i = await this.getCacheKey(n, "read"), a = Object.assign(Object.assign({}, o), { cacheName: s });
    r = await caches.match(i, a);
    for (const c of this.iterateCallbacks("cachedResponseWillBeUsed"))
      r = await c({
        cacheName: s,
        matchOptions: o,
        cachedResponse: r,
        request: i,
        event: this.event
      }) || void 0;
    return r;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, n) {
    const r = j(e);
    await un(0);
    const s = await this.getCacheKey(r, "write");
    if (!n)
      throw new f("cache-put-with-no-response", {
        url: sn(s.url)
      });
    const o = await this._ensureResponseSafeToCache(n);
    if (!o)
      return !1;
    const { cacheName: i, matchOptions: a } = this._strategy, c = await self.caches.open(i), l = this.hasCallback("cacheDidUpdate"), u = l ? await on(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      c,
      s.clone(),
      ["__WB_REVISION__"],
      a
    ) : null;
    try {
      await c.put(s, l ? o.clone() : o);
    } catch (d) {
      if (d instanceof Error)
        throw d.name === "QuotaExceededError" && await ln(), d;
    }
    for (const d of this.iterateCallbacks("cacheDidUpdate"))
      await d({
        cacheName: i,
        oldResponse: u,
        newResponse: o.clone(),
        request: s,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, n) {
    const r = `${e.url} | ${n}`;
    if (!this._cacheKeys[r]) {
      let s = e;
      for (const o of this.iterateCallbacks("cacheKeyWillBeUsed"))
        s = j(await o({
          mode: n,
          request: s,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[r] = s;
    }
    return this._cacheKeys[r];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const n of this._strategy.plugins)
      if (e in n)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, n) {
    for (const r of this.iterateCallbacks(e))
      await r(n);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const n of this._strategy.plugins)
      if (typeof n[e] == "function") {
        const r = this._pluginStateMap.get(n);
        yield (o) => {
          const i = Object.assign(Object.assign({}, o), { state: r });
          return n[e](i);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let n = e, r = !1;
    for (const s of this.iterateCallbacks("cacheWillUpdate"))
      if (n = await s({
        request: this.request,
        response: n,
        event: this.event
      }) || void 0, r = !0, !n)
        break;
    return r || n && n.status !== 200 && (n = void 0), n;
  }
}
class dn {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = W.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [n] = this.handleAll(e);
    return n;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const n = e.event, r = typeof e.request == "string" ? new Request(e.request) : e.request, s = "params" in e ? e.params : void 0, o = new hn(this, { event: n, request: r, params: s }), i = this._getResponse(o, r, n), a = this._awaitComplete(i, o, r, n);
    return [i, a];
  }
  async _getResponse(e, n, r) {
    await e.runCallbacks("handlerWillStart", { event: r, request: n });
    let s;
    try {
      if (s = await this._handle(n, e), !s || s.type === "error")
        throw new f("no-response", { url: n.url });
    } catch (o) {
      if (o instanceof Error) {
        for (const i of e.iterateCallbacks("handlerDidError"))
          if (s = await i({ error: o, event: r, request: n }), s)
            break;
      }
      if (!s)
        throw o;
    }
    for (const o of e.iterateCallbacks("handlerWillRespond"))
      s = await o({ event: r, request: n, response: s });
    return s;
  }
  async _awaitComplete(e, n, r, s) {
    let o, i;
    try {
      o = await e;
    } catch {
    }
    try {
      await n.runCallbacks("handlerDidRespond", {
        event: s,
        request: r,
        response: o
      }), await n.doneWaiting();
    } catch (a) {
      a instanceof Error && (i = a);
    }
    if (await n.runCallbacks("handlerDidComplete", {
      event: s,
      request: r,
      response: o,
      error: i
    }), n.destroy(), i)
      throw i;
  }
}
class w extends dn {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(e = {}) {
    e.cacheName = W.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(w.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, n) {
    const r = await n.cacheMatch(e);
    return r || (n.event && n.event.type === "install" ? await this._handleInstall(e, n) : await this._handleFetch(e, n));
  }
  async _handleFetch(e, n) {
    let r;
    const s = n.params || {};
    if (this._fallbackToNetwork) {
      const o = s.integrity, i = e.integrity, a = !i || i === o;
      r = await n.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? i || o : void 0
      })), o && a && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await n.cachePut(e, r.clone()));
    } else
      throw new f("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    return r;
  }
  async _handleInstall(e, n) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const r = await n.fetch(e);
    if (!await n.cachePut(e, r.clone()))
      throw new f("bad-precaching-response", {
        url: e.url,
        status: r.status
      });
    return r;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, n = 0;
    for (const [r, s] of this.plugins.entries())
      s !== w.copyRedirectedCacheableResponsesPlugin && (s === w.defaultPrecacheCacheabilityPlugin && (e = r), s.cacheWillUpdate && n++);
    n === 0 ? this.plugins.push(w.defaultPrecacheCacheabilityPlugin) : n > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
w.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: t }) {
    return !t || t.status >= 400 ? null : t;
  }
};
w.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: t }) {
    return t.redirected ? await rn(t) : t;
  }
};
class fn {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: e, plugins: n = [], fallbackToNetwork: r = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new w({
      cacheName: W.getPrecacheName(e),
      plugins: [
        ...n,
        new tn({ precacheController: this })
      ],
      fallbackToNetwork: r
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(e) {
    const n = [];
    for (const r of e) {
      typeof r == "string" ? n.push(r) : r && r.revision === void 0 && n.push(r.url);
      const { cacheKey: s, url: o } = Zt(r), i = typeof r != "string" && r.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(o) && this._urlsToCacheKeys.get(o) !== s)
        throw new f("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(o),
          secondEntry: s
        });
      if (typeof r != "string" && r.integrity) {
        if (this._cacheKeysToIntegrities.has(s) && this._cacheKeysToIntegrities.get(s) !== r.integrity)
          throw new f("add-to-cache-list-conflicting-integrities", {
            url: o
          });
        this._cacheKeysToIntegrities.set(s, r.integrity);
      }
      if (this._urlsToCacheKeys.set(o, s), this._urlsToCacheModes.set(o, i), n.length > 0) {
        const a = `Workbox is precaching URLs without revision info: ${n.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(a);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(e) {
    return je(e, async () => {
      const n = new en();
      this.strategy.plugins.push(n);
      for (const [o, i] of this._urlsToCacheKeys) {
        const a = this._cacheKeysToIntegrities.get(i), c = this._urlsToCacheModes.get(o), l = new Request(o, {
          integrity: a,
          cache: c,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: i },
          request: l,
          event: e
        }));
      }
      const { updatedURLs: r, notUpdatedURLs: s } = n;
      return { updatedURLs: r, notUpdatedURLs: s };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(e) {
    return je(e, async () => {
      const n = await self.caches.open(this.strategy.cacheName), r = await n.keys(), s = new Set(this._urlsToCacheKeys.values()), o = [];
      for (const i of r)
        s.has(i.url) || (await n.delete(i), o.push(i.url));
      return { deletedURLs: o };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(e) {
    const n = new URL(e, location.href);
    return this._urlsToCacheKeys.get(n.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(e) {
    const n = e instanceof Request ? e.url : e, r = this.getCacheKeyForURL(n);
    if (r)
      return (await self.caches.open(this.strategy.cacheName)).match(r);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(e) {
    const n = this.getCacheKeyForURL(e);
    if (!n)
      throw new f("non-precached-url", { url: e });
    return (r) => (r.request = new Request(e), r.params = Object.assign({ cacheKey: n }, r.params), this.strategy.handle(r));
  }
}
let Y;
const ot = () => (Y || (Y = new fn()), Y);
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const it = "GET", U = (t) => t && typeof t == "object" ? t : { handle: t };
class P {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, n, r = it) {
    this.handler = U(n), this.match = e, this.method = r;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = U(e);
  }
}
class pn extends P {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, n, r) {
    const s = ({ url: o }) => {
      const i = e.exec(o.href);
      if (i && !(o.origin !== location.origin && i.index !== 0))
        return i.slice(1);
    };
    super(s, n, r);
  }
}
class gn {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: n } = e, r = this.handleRequest({ request: n, event: e });
      r && e.respondWith(r);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: n } = e.data, r = Promise.all(n.urlsToCache.map((s) => {
          typeof s == "string" && (s = [s]);
          const o = new Request(...s);
          return this.handleRequest({ request: o, event: e });
        }));
        e.waitUntil(r), e.ports && e.ports[0] && r.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: n }) {
    const r = new URL(e.url, location.href);
    if (!r.protocol.startsWith("http"))
      return;
    const s = r.origin === location.origin, { params: o, route: i } = this.findMatchingRoute({
      event: n,
      request: e,
      sameOrigin: s,
      url: r
    });
    let a = i && i.handler;
    const c = e.method;
    if (!a && this._defaultHandlerMap.has(c) && (a = this._defaultHandlerMap.get(c)), !a)
      return;
    let l;
    try {
      l = a.handle({ url: r, request: e, event: n, params: o });
    } catch (d) {
      l = Promise.reject(d);
    }
    const u = i && i.catchHandler;
    return l instanceof Promise && (this._catchHandler || u) && (l = l.catch(async (d) => {
      if (u)
        try {
          return await u.handle({ url: r, request: e, event: n, params: o });
        } catch (C) {
          C instanceof Error && (d = C);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: r, request: e, event: n });
      throw d;
    })), l;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: n, request: r, event: s }) {
    const o = this._routes.get(r.method) || [];
    for (const i of o) {
      let a;
      const c = i.match({ url: e, sameOrigin: n, request: r, event: s });
      if (c)
        return a = c, (Array.isArray(a) && a.length === 0 || c.constructor === Object && // eslint-disable-line
        Object.keys(c).length === 0 || typeof c == "boolean") && (a = void 0), { route: i, params: a };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, n = it) {
    this._defaultHandlerMap.set(n, U(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = U(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new f("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const n = this._routes.get(e.method).indexOf(e);
    if (n > -1)
      this._routes.get(e.method).splice(n, 1);
    else
      throw new f("unregister-route-route-not-registered");
  }
}
let L;
const mn = () => (L || (L = new gn(), L.addFetchListener(), L.addCacheListener()), L);
function bn(t, e, n) {
  let r;
  if (typeof t == "string") {
    const o = new URL(t, location.href), i = ({ url: a }) => a.href === o.href;
    r = new P(i, e, n);
  } else if (t instanceof RegExp)
    r = new pn(t, e, n);
  else if (typeof t == "function")
    r = new P(t, e, n);
  else if (t instanceof P)
    r = t;
  else
    throw new f("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return mn().registerRoute(r), r;
}
function wn(t, e = []) {
  for (const n of [...t.searchParams.keys()])
    e.some((r) => r.test(n)) && t.searchParams.delete(n);
  return t;
}
function* yn(t, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: n = "index.html", cleanURLs: r = !0, urlManipulation: s } = {}) {
  const o = new URL(t, location.href);
  o.hash = "", yield o.href;
  const i = wn(o, e);
  if (yield i.href, n && i.pathname.endsWith("/")) {
    const a = new URL(i.href);
    a.pathname += n, yield a.href;
  }
  if (r) {
    const a = new URL(i.href);
    a.pathname += ".html", yield a.href;
  }
  if (s) {
    const a = s({ url: o });
    for (const c of a)
      yield c.href;
  }
}
class _n extends P {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(e, n) {
    const r = ({ request: s }) => {
      const o = e.getURLsToCacheKeys();
      for (const i of yn(s.url, n)) {
        const a = o.get(i);
        if (a) {
          const c = e.getIntegrityForCacheKey(a);
          return { cacheKey: a, integrity: c };
        }
      }
    };
    super(r, e.strategy);
  }
}
function In(t) {
  const e = ot(), n = new _n(e, t);
  bn(n);
}
const En = "-precache-", Cn = async (t, e = En) => {
  const r = (await self.caches.keys()).filter((s) => s.includes(e) && s.includes(self.registration.scope) && s !== t);
  return await Promise.all(r.map((s) => self.caches.delete(s))), r;
};
function Sn() {
  self.addEventListener("activate", (t) => {
    const e = W.getPrecacheName();
    t.waitUntil(Cn(e).then((n) => {
    }));
  });
}
function vn(t) {
  ot().precache(t);
}
function Dn(t, e) {
  vn(t), In(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at = function(t) {
  const e = [];
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let s = t.charCodeAt(r);
    s < 128 ? e[n++] = s : s < 2048 ? (e[n++] = s >> 6 | 192, e[n++] = s & 63 | 128) : (s & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (s = 65536 + ((s & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = s >> 18 | 240, e[n++] = s >> 12 & 63 | 128, e[n++] = s >> 6 & 63 | 128, e[n++] = s & 63 | 128) : (e[n++] = s >> 12 | 224, e[n++] = s >> 6 & 63 | 128, e[n++] = s & 63 | 128);
  }
  return e;
}, Tn = function(t) {
  const e = [];
  let n = 0, r = 0;
  for (; n < t.length; ) {
    const s = t[n++];
    if (s < 128)
      e[r++] = String.fromCharCode(s);
    else if (s > 191 && s < 224) {
      const o = t[n++];
      e[r++] = String.fromCharCode((s & 31) << 6 | o & 63);
    } else if (s > 239 && s < 365) {
      const o = t[n++], i = t[n++], a = t[n++], c = ((s & 7) << 18 | (o & 63) << 12 | (i & 63) << 6 | a & 63) - 65536;
      e[r++] = String.fromCharCode(55296 + (c >> 10)), e[r++] = String.fromCharCode(56320 + (c & 1023));
    } else {
      const o = t[n++], i = t[n++];
      e[r++] = String.fromCharCode((s & 15) << 12 | (o & 63) << 6 | i & 63);
    }
  }
  return e.join("");
}, ct = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(t, e) {
    if (!Array.isArray(t))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let s = 0; s < t.length; s += 3) {
      const o = t[s], i = s + 1 < t.length, a = i ? t[s + 1] : 0, c = s + 2 < t.length, l = c ? t[s + 2] : 0, u = o >> 2, d = (o & 3) << 4 | a >> 4;
      let C = (a & 15) << 2 | l >> 6, x = l & 63;
      c || (x = 64, i || (C = 64)), r.push(n[u], n[d], n[C], n[x]);
    }
    return r.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(at(t), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Tn(this.decodeStringToByteArray(t, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(t, e) {
    this.init_();
    const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let s = 0; s < t.length; ) {
      const o = n[t.charAt(s++)], a = s < t.length ? n[t.charAt(s)] : 0;
      ++s;
      const l = s < t.length ? n[t.charAt(s)] : 64;
      ++s;
      const d = s < t.length ? n[t.charAt(s)] : 64;
      if (++s, o == null || a == null || l == null || d == null)
        throw new An();
      const C = o << 2 | a >> 4;
      if (r.push(C), l !== 64) {
        const x = a << 4 & 240 | l >> 2;
        if (r.push(x), d !== 64) {
          const Gt = l << 6 & 192 | d;
          r.push(Gt);
        }
      }
    }
    return r;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let t = 0; t < this.ENCODED_VALS.length; t++)
        this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
    }
  }
};
class An extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Rn = function(t) {
  const e = at(t);
  return ct.encodeByteArray(e, !0);
}, lt = function(t) {
  return Rn(t).replace(/\./g, "");
}, kn = function(t) {
  try {
    return ct.decodeString(t, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn = () => On().__FIREBASE_DEFAULTS__, Bn = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, Nn = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && kn(t[1]);
  return e && JSON.parse(e);
}, Ln = () => {
  try {
    return Mn() || Bn() || Nn();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, ut = () => {
  var t;
  return (t = Ln()) === null || t === void 0 ? void 0 : t.config;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, n) => {
      this.resolve = e, this.reject = n;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
function ht() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function dt() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", s = self.indexedDB.open(r);
      s.onsuccess = () => {
        s.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }, s.onupgradeneeded = () => {
        n = !1;
      }, s.onerror = () => {
        var o;
        e(((o = s.error) === null || o === void 0 ? void 0 : o.message) || "");
      };
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $n = "FirebaseError";
class B extends Error {
  constructor(e, n, r) {
    super(n), this.code = e, this.customData = r, this.name = $n, Object.setPrototypeOf(this, B.prototype), Error.captureStackTrace && Error.captureStackTrace(this, q.prototype.create);
  }
}
class q {
  constructor(e, n, r) {
    this.service = e, this.serviceName = n, this.errors = r;
  }
  create(e, ...n) {
    const r = n[0] || {}, s = `${this.service}/${e}`, o = this.errors[e], i = o ? xn(o, r) : "Error", a = `${this.serviceName}: ${i} (${s}).`;
    return new B(s, a, r);
  }
}
function xn(t, e) {
  return t.replace(jn, (n, r) => {
    const s = e[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const jn = /\{\$([^}]+)}/g;
function fe(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), r = Object.keys(e);
  for (const s of n) {
    if (!r.includes(s))
      return !1;
    const o = t[s], i = e[s];
    if (Fe(o) && Fe(i)) {
      if (!fe(o, i))
        return !1;
    } else if (o !== i)
      return !1;
  }
  for (const s of r)
    if (!n.includes(s))
      return !1;
  return !0;
}
function Fe(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(t) {
  return t && t._delegate ? t._delegate : t;
}
class D {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, n, r) {
    this.name = e, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un {
  constructor(e, n) {
    this.name = e, this.container = n, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new Pn();
      if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: n
          });
          s && r.resolve(s);
        } catch {
        }
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), s = (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: r
        });
      } catch (o) {
        if (s)
          return null;
        throw o;
      }
    else {
      if (s)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (Kn(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: S });
        } catch {
        }
      for (const [n, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(n);
        try {
          const o = this.getOrInitializeService({
            instanceIdentifier: s
          });
          r.resolve(o);
        } catch {
        }
      }
    }
  }
  clearInstance(e = S) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = S) {
    return this.instances.has(e);
  }
  getOptions(e = S) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n
    });
    for (const [o, i] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(o);
      r === a && i.resolve(s);
    }
    return s;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, n) {
    var r;
    const s = this.normalizeInstanceIdentifier(n), o = (r = this.onInitCallbacks.get(s)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    o.add(e), this.onInitCallbacks.set(s, o);
    const i = this.instances.get(s);
    return i && e(i, s), () => {
      o.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const s of r)
        try {
          s(e, n);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: Fn(e),
      options: n
    }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = S) {
    return this.component ? this.component.multipleInstances ? e : S : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Fn(t) {
  return t === S ? void 0 : t;
}
function Kn(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const n = new Un(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var h;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(h || (h = {}));
const Vn = {
  debug: h.DEBUG,
  verbose: h.VERBOSE,
  info: h.INFO,
  warn: h.WARN,
  error: h.ERROR,
  silent: h.SILENT
}, Wn = h.INFO, qn = {
  [h.DEBUG]: "log",
  [h.VERBOSE]: "log",
  [h.INFO]: "info",
  [h.WARN]: "warn",
  [h.ERROR]: "error"
}, zn = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const r = (/* @__PURE__ */ new Date()).toISOString(), s = qn[e];
  if (s)
    console[s](`[${r}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class Gn {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Wn, this._logHandler = zn, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in h))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Vn[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, h.DEBUG, ...e), this._logHandler(this, h.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, h.VERBOSE, ...e), this._logHandler(this, h.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, h.INFO, ...e), this._logHandler(this, h.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, h.WARN, ...e), this._logHandler(this, h.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, h.ERROR, ...e), this._logHandler(this, h.ERROR, ...e);
  }
}
const Jn = (t, e) => e.some((n) => t instanceof n);
let Ke, He;
function Yn() {
  return Ke || (Ke = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Xn() {
  return He || (He = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const pt = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap();
function Qn(t) {
  const e = new Promise((n, r) => {
    const s = () => {
      t.removeEventListener("success", o), t.removeEventListener("error", i);
    }, o = () => {
      n(y(t.result)), s();
    }, i = () => {
      r(t.error), s();
    };
    t.addEventListener("success", o), t.addEventListener("error", i);
  });
  return e.then((n) => {
    n instanceof IDBCursor && pt.set(n, t);
  }).catch(() => {
  }), ve.set(e, t), e;
}
function Zn(t) {
  if (pe.has(t))
    return;
  const e = new Promise((n, r) => {
    const s = () => {
      t.removeEventListener("complete", o), t.removeEventListener("error", i), t.removeEventListener("abort", i);
    }, o = () => {
      n(), s();
    }, i = () => {
      r(t.error || new DOMException("AbortError", "AbortError")), s();
    };
    t.addEventListener("complete", o), t.addEventListener("error", i), t.addEventListener("abort", i);
  });
  pe.set(t, e);
}
let ge = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return pe.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || gt.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return y(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function er(t) {
  ge = t(ge);
}
function tr(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const r = t.call(Q(this), e, ...n);
    return gt.set(r, e.sort ? e.sort() : [e]), y(r);
  } : Xn().includes(t) ? function(...e) {
    return t.apply(Q(this), e), y(pt.get(this));
  } : function(...e) {
    return y(t.apply(Q(this), e));
  };
}
function nr(t) {
  return typeof t == "function" ? tr(t) : (t instanceof IDBTransaction && Zn(t), Jn(t, Yn()) ? new Proxy(t, ge) : t);
}
function y(t) {
  if (t instanceof IDBRequest)
    return Qn(t);
  if (X.has(t))
    return X.get(t);
  const e = nr(t);
  return e !== t && (X.set(t, e), ve.set(e, t)), e;
}
const Q = (t) => ve.get(t);
function rr(t, e, { blocked: n, upgrade: r, blocking: s, terminated: o } = {}) {
  const i = indexedDB.open(t, e), a = y(i);
  return r && i.addEventListener("upgradeneeded", (c) => {
    r(y(i.result), c.oldVersion, c.newVersion, y(i.transaction), c);
  }), n && i.addEventListener("blocked", (c) => n(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    c.oldVersion,
    c.newVersion,
    c
  )), a.then((c) => {
    o && c.addEventListener("close", () => o()), s && c.addEventListener("versionchange", (l) => s(l.oldVersion, l.newVersion, l));
  }).catch(() => {
  }), a;
}
const sr = ["get", "getKey", "getAll", "getAllKeys", "count"], or = ["put", "add", "delete", "clear"], Z = /* @__PURE__ */ new Map();
function Ve(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Z.get(e))
    return Z.get(e);
  const n = e.replace(/FromIndex$/, ""), r = e !== n, s = or.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(s || sr.includes(n))
  )
    return;
  const o = async function(i, ...a) {
    const c = this.transaction(i, s ? "readwrite" : "readonly");
    let l = c.store;
    return r && (l = l.index(a.shift())), (await Promise.all([
      l[n](...a),
      s && c.done
    ]))[0];
  };
  return Z.set(e, o), o;
}
er((t) => ({
  ...t,
  get: (e, n, r) => Ve(e, n) || t.get(e, n, r),
  has: (e, n) => !!Ve(e, n) || t.has(e, n)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (ar(n)) {
        const r = n.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function ar(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const me = "@firebase/app", We = "0.9.15";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T = new Gn("@firebase/app"), cr = "@firebase/app-compat", lr = "@firebase/analytics-compat", ur = "@firebase/analytics", hr = "@firebase/app-check-compat", dr = "@firebase/app-check", fr = "@firebase/auth", pr = "@firebase/auth-compat", gr = "@firebase/database", mr = "@firebase/database-compat", br = "@firebase/functions", wr = "@firebase/functions-compat", yr = "@firebase/installations", _r = "@firebase/installations-compat", Ir = "@firebase/messaging", Er = "@firebase/messaging-compat", Cr = "@firebase/performance", Sr = "@firebase/performance-compat", vr = "@firebase/remote-config", Dr = "@firebase/remote-config-compat", Tr = "@firebase/storage", Ar = "@firebase/storage-compat", Rr = "@firebase/firestore", kr = "@firebase/firestore-compat", Or = "firebase";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be = "[DEFAULT]", Mr = {
  [me]: "fire-core",
  [cr]: "fire-core-compat",
  [ur]: "fire-analytics",
  [lr]: "fire-analytics-compat",
  [dr]: "fire-app-check",
  [hr]: "fire-app-check-compat",
  [fr]: "fire-auth",
  [pr]: "fire-auth-compat",
  [gr]: "fire-rtdb",
  [mr]: "fire-rtdb-compat",
  [br]: "fire-fn",
  [wr]: "fire-fn-compat",
  [yr]: "fire-iid",
  [_r]: "fire-iid-compat",
  [Ir]: "fire-fcm",
  [Er]: "fire-fcm-compat",
  [Cr]: "fire-perf",
  [Sr]: "fire-perf-compat",
  [vr]: "fire-rc",
  [Dr]: "fire-rc-compat",
  [Tr]: "fire-gcs",
  [Ar]: "fire-gcs-compat",
  [Rr]: "fire-fst",
  [kr]: "fire-fst-compat",
  "fire-js": "fire-js",
  [Or]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
function Br(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    T.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function M(t) {
  const e = t.name;
  if (we.has(e))
    return T.debug(`There were multiple attempts to register component ${e}.`), !1;
  we.set(e, t);
  for (const n of F.values())
    Br(n, t);
  return !0;
}
function De(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nr = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}, I = new q("app", "Firebase", Nr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr {
  constructor(e, n, r) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new D(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
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
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw I.create("app-deleted", { appName: this._name });
  }
}
function mt(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: be, automaticDataCollectionEnabled: !1 }, e), s = r.name;
  if (typeof s != "string" || !s)
    throw I.create("bad-app-name", {
      appName: String(s)
    });
  if (n || (n = ut()), !n)
    throw I.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const o = F.get(s);
  if (o) {
    if (fe(n, o.options) && fe(r, o.config))
      return o;
    throw I.create("duplicate-app", { appName: s });
  }
  const i = new Hn(s);
  for (const c of we.values())
    i.addComponent(c);
  const a = new Lr(n, r, i);
  return F.set(s, a), a;
}
function Pr(t = be) {
  const e = F.get(t);
  if (!e && t === be && ut())
    return mt();
  if (!e)
    throw I.create("no-app", { appName: t });
  return e;
}
function O(t, e, n) {
  var r;
  let s = (r = Mr[t]) !== null && r !== void 0 ? r : t;
  n && (s += `-${n}`);
  const o = s.match(/\s|\//), i = e.match(/\s|\//);
  if (o || i) {
    const a = [
      `Unable to register library "${s}" with version "${e}":`
    ];
    o && a.push(`library name "${s}" contains illegal characters (whitespace or "/")`), o && i && a.push("and"), i && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`), T.warn(a.join(" "));
    return;
  }
  M(new D(
    `${s}-version`,
    () => ({ library: s, version: e }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $r = "firebase-heartbeat-database", xr = 1, $ = "firebase-heartbeat-store";
let ee = null;
function bt() {
  return ee || (ee = rr($r, xr, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore($);
      }
    }
  }).catch((t) => {
    throw I.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), ee;
}
async function jr(t) {
  try {
    return await (await bt()).transaction($).objectStore($).get(wt(t));
  } catch (e) {
    if (e instanceof B)
      T.warn(e.message);
    else {
      const n = I.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      T.warn(n.message);
    }
  }
}
async function qe(t, e) {
  try {
    const r = (await bt()).transaction($, "readwrite");
    await r.objectStore($).put(e, wt(t)), await r.done;
  } catch (n) {
    if (n instanceof B)
      T.warn(n.message);
    else {
      const r = I.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message
      });
      T.warn(r.message);
    }
  }
}
function wt(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ur = 1024, Fr = 30 * 24 * 60 * 60 * 1e3;
class Kr {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new Vr(n), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), r = ze();
    if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((s) => s.date === r)))
      return this._heartbeatsCache.heartbeats.push({ date: r, agent: n }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((s) => {
        const o = new Date(s.date).valueOf();
        return Date.now() - o <= Fr;
      }), this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
      return "";
    const e = ze(), { heartbeatsToSend: n, unsentEntries: r } = Hr(this._heartbeatsCache.heartbeats), s = lt(JSON.stringify({ version: 2, heartbeats: n }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s;
  }
}
function ze() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Hr(t, e = Ur) {
  const n = [];
  let r = t.slice();
  for (const s of t) {
    const o = n.find((i) => i.agent === s.agent);
    if (o) {
      if (o.dates.push(s.date), Ge(n) > e) {
        o.dates.pop();
        break;
      }
    } else if (n.push({
      agent: s.agent,
      dates: [s.date]
    }), Ge(n) > e) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: r
  };
}
class Vr {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return ht() ? dt().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await jr(this.app) || { heartbeats: [] } : { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return qe(this.app, {
        lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : s.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return qe(this.app, {
        lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : s.lastSentHeartbeatDate,
        heartbeats: [
          ...s.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function Ge(t) {
  return lt(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wr(t) {
  M(new D(
    "platform-logger",
    (e) => new ir(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), M(new D(
    "heartbeat",
    (e) => new Kr(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), O(me, We, t), O(me, We, "esm2017"), O("fire-js", "");
}
Wr("");
var qr = "firebase", zr = "10.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
O(qr, zr, "app");
const Gr = (t, e) => e.some((n) => t instanceof n);
let Je, Ye;
function Jr() {
  return Je || (Je = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Yr() {
  return Ye || (Ye = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const yt = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap();
function Xr(t) {
  const e = new Promise((n, r) => {
    const s = () => {
      t.removeEventListener("success", o), t.removeEventListener("error", i);
    }, o = () => {
      n(E(t.result)), s();
    }, i = () => {
      r(t.error), s();
    };
    t.addEventListener("success", o), t.addEventListener("error", i);
  });
  return e.then((n) => {
    n instanceof IDBCursor && yt.set(n, t);
  }).catch(() => {
  }), Te.set(e, t), e;
}
function Qr(t) {
  if (ye.has(t))
    return;
  const e = new Promise((n, r) => {
    const s = () => {
      t.removeEventListener("complete", o), t.removeEventListener("error", i), t.removeEventListener("abort", i);
    }, o = () => {
      n(), s();
    }, i = () => {
      r(t.error || new DOMException("AbortError", "AbortError")), s();
    };
    t.addEventListener("complete", o), t.addEventListener("error", i), t.addEventListener("abort", i);
  });
  ye.set(t, e);
}
let _e = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return ye.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || _t.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return E(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Zr(t) {
  _e = t(_e);
}
function es(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const r = t.call(ne(this), e, ...n);
    return _t.set(r, e.sort ? e.sort() : [e]), E(r);
  } : Yr().includes(t) ? function(...e) {
    return t.apply(ne(this), e), E(yt.get(this));
  } : function(...e) {
    return E(t.apply(ne(this), e));
  };
}
function ts(t) {
  return typeof t == "function" ? es(t) : (t instanceof IDBTransaction && Qr(t), Gr(t, Jr()) ? new Proxy(t, _e) : t);
}
function E(t) {
  if (t instanceof IDBRequest)
    return Xr(t);
  if (te.has(t))
    return te.get(t);
  const e = ts(t);
  return e !== t && (te.set(t, e), Te.set(e, t)), e;
}
const ne = (t) => Te.get(t);
function ns(t, e, { blocked: n, upgrade: r, blocking: s, terminated: o } = {}) {
  const i = indexedDB.open(t, e), a = E(i);
  return r && i.addEventListener("upgradeneeded", (c) => {
    r(E(i.result), c.oldVersion, c.newVersion, E(i.transaction));
  }), n && i.addEventListener("blocked", () => n()), a.then((c) => {
    o && c.addEventListener("close", () => o()), s && c.addEventListener("versionchange", () => s());
  }).catch(() => {
  }), a;
}
const rs = ["get", "getKey", "getAll", "getAllKeys", "count"], ss = ["put", "add", "delete", "clear"], re = /* @__PURE__ */ new Map();
function Xe(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (re.get(e))
    return re.get(e);
  const n = e.replace(/FromIndex$/, ""), r = e !== n, s = ss.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(s || rs.includes(n))
  )
    return;
  const o = async function(i, ...a) {
    const c = this.transaction(i, s ? "readwrite" : "readonly");
    let l = c.store;
    return r && (l = l.index(a.shift())), (await Promise.all([
      l[n](...a),
      s && c.done
    ]))[0];
  };
  return re.set(e, o), o;
}
Zr((t) => ({
  ...t,
  get: (e, n, r) => Xe(e, n) || t.get(e, n, r),
  has: (e, n) => !!Xe(e, n) || t.has(e, n)
}));
const It = "@firebase/installations", Ae = "0.6.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et = 1e4, Ct = `w:${Ae}`, St = "FIS_v2", os = "https://firebaseinstallations.googleapis.com/v1", is = 60 * 60 * 1e3, as = "installations", cs = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ls = {
  "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
  "not-registered": "Firebase Installation is not registered.",
  "installation-not-found": "Firebase Installation not found.",
  "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  "app-offline": "Could not process request. Application offline.",
  "delete-pending-registration": "Can't delete installation while there is a pending registration request."
}, A = new q(as, cs, ls);
function vt(t) {
  return t instanceof B && t.code.includes(
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dt({ projectId: t }) {
  return `${os}/projects/${t}/installations`;
}
function Tt(t) {
  return {
    token: t.token,
    requestStatus: 2,
    expiresIn: hs(t.expiresIn),
    creationTime: Date.now()
  };
}
async function At(t, e) {
  const r = (await e.json()).error;
  return A.create("request-failed", {
    requestName: t,
    serverCode: r.code,
    serverMessage: r.message,
    serverStatus: r.status
  });
}
function Rt({ apiKey: t }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": t
  });
}
function us(t, { refreshToken: e }) {
  const n = Rt(t);
  return n.append("Authorization", ds(e)), n;
}
async function kt(t) {
  const e = await t();
  return e.status >= 500 && e.status < 600 ? t() : e;
}
function hs(t) {
  return Number(t.replace("s", "000"));
}
function ds(t) {
  return `${St} ${t}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fs({ appConfig: t, heartbeatServiceProvider: e }, { fid: n }) {
  const r = Dt(t), s = Rt(t), o = e.getImmediate({
    optional: !0
  });
  if (o) {
    const l = await o.getHeartbeatsHeader();
    l && s.append("x-firebase-client", l);
  }
  const i = {
    fid: n,
    authVersion: St,
    appId: t.appId,
    sdkVersion: Ct
  }, a = {
    method: "POST",
    headers: s,
    body: JSON.stringify(i)
  }, c = await kt(() => fetch(r, a));
  if (c.ok) {
    const l = await c.json();
    return {
      fid: l.fid || n,
      registrationStatus: 2,
      refreshToken: l.refreshToken,
      authToken: Tt(l.authToken)
    };
  } else
    throw await At("Create Installation", c);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ps(t) {
  return btoa(String.fromCharCode(...t)).replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gs = /^[cdef][\w-]{21}$/, Ie = "";
function ms() {
  try {
    const t = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
    const n = bs(t);
    return gs.test(n) ? n : Ie;
  } catch {
    return Ie;
  }
}
function bs(t) {
  return ps(t).substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(t) {
  return `${t.appName}!${t.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mt = /* @__PURE__ */ new Map();
function Bt(t, e) {
  const n = z(t);
  Nt(n, e), ws(n, e);
}
function Nt(t, e) {
  const n = Mt.get(t);
  if (n)
    for (const r of n)
      r(e);
}
function ws(t, e) {
  const n = ys();
  n && n.postMessage({ key: t, fid: e }), _s();
}
let v = null;
function ys() {
  return !v && "BroadcastChannel" in self && (v = new BroadcastChannel("[Firebase] FID Change"), v.onmessage = (t) => {
    Nt(t.data.key, t.data.fid);
  }), v;
}
function _s() {
  Mt.size === 0 && v && (v.close(), v = null);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Is = "firebase-installations-database", Es = 1, R = "firebase-installations-store";
let se = null;
function Re() {
  return se || (se = ns(Is, Es, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(R);
      }
    }
  })), se;
}
async function K(t, e) {
  const n = z(t), s = (await Re()).transaction(R, "readwrite"), o = s.objectStore(R), i = await o.get(n);
  return await o.put(e, n), await s.done, (!i || i.fid !== e.fid) && Bt(t, e.fid), e;
}
async function Lt(t) {
  const e = z(t), r = (await Re()).transaction(R, "readwrite");
  await r.objectStore(R).delete(e), await r.done;
}
async function G(t, e) {
  const n = z(t), s = (await Re()).transaction(R, "readwrite"), o = s.objectStore(R), i = await o.get(n), a = e(i);
  return a === void 0 ? await o.delete(n) : await o.put(a, n), await s.done, a && (!i || i.fid !== a.fid) && Bt(t, a.fid), a;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ke(t) {
  let e;
  const n = await G(t.appConfig, (r) => {
    const s = Cs(r), o = Ss(t, s);
    return e = o.registrationPromise, o.installationEntry;
  });
  return n.fid === Ie ? { installationEntry: await e } : {
    installationEntry: n,
    registrationPromise: e
  };
}
function Cs(t) {
  const e = t || {
    fid: ms(),
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  };
  return Pt(e);
}
function Ss(t, e) {
  if (e.registrationStatus === 0) {
    if (!navigator.onLine) {
      const s = Promise.reject(A.create(
        "app-offline"
        /* ErrorCode.APP_OFFLINE */
      ));
      return {
        installationEntry: e,
        registrationPromise: s
      };
    }
    const n = {
      fid: e.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    }, r = vs(t, n);
    return { installationEntry: n, registrationPromise: r };
  } else
    return e.registrationStatus === 1 ? {
      installationEntry: e,
      registrationPromise: Ds(t)
    } : { installationEntry: e };
}
async function vs(t, e) {
  try {
    const n = await fs(t, e);
    return K(t.appConfig, n);
  } catch (n) {
    throw vt(n) && n.customData.serverCode === 409 ? await Lt(t.appConfig) : await K(t.appConfig, {
      fid: e.fid,
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    }), n;
  }
}
async function Ds(t) {
  let e = await Qe(t.appConfig);
  for (; e.registrationStatus === 1; )
    await Ot(100), e = await Qe(t.appConfig);
  if (e.registrationStatus === 0) {
    const { installationEntry: n, registrationPromise: r } = await ke(t);
    return r || n;
  }
  return e;
}
function Qe(t) {
  return G(t, (e) => {
    if (!e)
      throw A.create(
        "installation-not-found"
        /* ErrorCode.INSTALLATION_NOT_FOUND */
      );
    return Pt(e);
  });
}
function Pt(t) {
  return Ts(t) ? {
    fid: t.fid,
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  } : t;
}
function Ts(t) {
  return t.registrationStatus === 1 && t.registrationTime + Et < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function As({ appConfig: t, heartbeatServiceProvider: e }, n) {
  const r = Rs(t, n), s = us(t, n), o = e.getImmediate({
    optional: !0
  });
  if (o) {
    const l = await o.getHeartbeatsHeader();
    l && s.append("x-firebase-client", l);
  }
  const i = {
    installation: {
      sdkVersion: Ct,
      appId: t.appId
    }
  }, a = {
    method: "POST",
    headers: s,
    body: JSON.stringify(i)
  }, c = await kt(() => fetch(r, a));
  if (c.ok) {
    const l = await c.json();
    return Tt(l);
  } else
    throw await At("Generate Auth Token", c);
}
function Rs(t, { fid: e }) {
  return `${Dt(t)}/${e}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(t, e = !1) {
  let n;
  const r = await G(t.appConfig, (o) => {
    if (!$t(o))
      throw A.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const i = o.authToken;
    if (!e && Ms(i))
      return o;
    if (i.requestStatus === 1)
      return n = ks(t, e), o;
    {
      if (!navigator.onLine)
        throw A.create(
          "app-offline"
          /* ErrorCode.APP_OFFLINE */
        );
      const a = Ns(o);
      return n = Os(t, a), a;
    }
  });
  return n ? await n : r.authToken;
}
async function ks(t, e) {
  let n = await Ze(t.appConfig);
  for (; n.authToken.requestStatus === 1; )
    await Ot(100), n = await Ze(t.appConfig);
  const r = n.authToken;
  return r.requestStatus === 0 ? Oe(t, e) : r;
}
function Ze(t) {
  return G(t, (e) => {
    if (!$t(e))
      throw A.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const n = e.authToken;
    return Ls(n) ? Object.assign(Object.assign({}, e), { authToken: {
      requestStatus: 0
      /* RequestStatus.NOT_STARTED */
    } }) : e;
  });
}
async function Os(t, e) {
  try {
    const n = await As(t, e), r = Object.assign(Object.assign({}, e), { authToken: n });
    return await K(t.appConfig, r), n;
  } catch (n) {
    if (vt(n) && (n.customData.serverCode === 401 || n.customData.serverCode === 404))
      await Lt(t.appConfig);
    else {
      const r = Object.assign(Object.assign({}, e), { authToken: {
        requestStatus: 0
        /* RequestStatus.NOT_STARTED */
      } });
      await K(t.appConfig, r);
    }
    throw n;
  }
}
function $t(t) {
  return t !== void 0 && t.registrationStatus === 2;
}
function Ms(t) {
  return t.requestStatus === 2 && !Bs(t);
}
function Bs(t) {
  const e = Date.now();
  return e < t.creationTime || t.creationTime + t.expiresIn < e + is;
}
function Ns(t) {
  const e = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, t), { authToken: e });
}
function Ls(t) {
  return t.requestStatus === 1 && t.requestTime + Et < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ps(t) {
  const e = t, { installationEntry: n, registrationPromise: r } = await ke(e);
  return r ? r.catch(console.error) : Oe(e).catch(console.error), n.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $s(t, e = !1) {
  const n = t;
  return await xs(n), (await Oe(n, e)).token;
}
async function xs(t) {
  const { registrationPromise: e } = await ke(t);
  e && await e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function js(t) {
  if (!t || !t.options)
    throw oe("App Configuration");
  if (!t.name)
    throw oe("App Name");
  const e = [
    "projectId",
    "apiKey",
    "appId"
  ];
  for (const n of e)
    if (!t.options[n])
      throw oe(n);
  return {
    appName: t.name,
    projectId: t.options.projectId,
    apiKey: t.options.apiKey,
    appId: t.options.appId
  };
}
function oe(t) {
  return A.create("missing-app-config-values", {
    valueName: t
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xt = "installations", Us = "installations-internal", Fs = (t) => {
  const e = t.getProvider("app").getImmediate(), n = js(e), r = De(e, "heartbeat");
  return {
    app: e,
    appConfig: n,
    heartbeatServiceProvider: r,
    _delete: () => Promise.resolve()
  };
}, Ks = (t) => {
  const e = t.getProvider("app").getImmediate(), n = De(e, xt).getImmediate();
  return {
    getId: () => Ps(n),
    getToken: (s) => $s(n, s)
  };
};
function Hs() {
  M(new D(
    xt,
    Fs,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), M(new D(
    Us,
    Ks,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
}
Hs();
O(It, Ae);
O(It, Ae, "esm2017");
const Vs = (t, e) => e.some((n) => t instanceof n);
let et, tt;
function Ws() {
  return et || (et = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function qs() {
  return tt || (tt = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const jt = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap();
function zs(t) {
  const e = new Promise((n, r) => {
    const s = () => {
      t.removeEventListener("success", o), t.removeEventListener("error", i);
    }, o = () => {
      n(b(t.result)), s();
    }, i = () => {
      r(t.error), s();
    };
    t.addEventListener("success", o), t.addEventListener("error", i);
  });
  return e.then((n) => {
    n instanceof IDBCursor && jt.set(n, t);
  }).catch(() => {
  }), Me.set(e, t), e;
}
function Gs(t) {
  if (Ee.has(t))
    return;
  const e = new Promise((n, r) => {
    const s = () => {
      t.removeEventListener("complete", o), t.removeEventListener("error", i), t.removeEventListener("abort", i);
    }, o = () => {
      n(), s();
    }, i = () => {
      r(t.error || new DOMException("AbortError", "AbortError")), s();
    };
    t.addEventListener("complete", o), t.addEventListener("error", i), t.addEventListener("abort", i);
  });
  Ee.set(t, e);
}
let Ce = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return Ee.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || Ut.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return b(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Js(t) {
  Ce = t(Ce);
}
function Ys(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const r = t.call(ae(this), e, ...n);
    return Ut.set(r, e.sort ? e.sort() : [e]), b(r);
  } : qs().includes(t) ? function(...e) {
    return t.apply(ae(this), e), b(jt.get(this));
  } : function(...e) {
    return b(t.apply(ae(this), e));
  };
}
function Xs(t) {
  return typeof t == "function" ? Ys(t) : (t instanceof IDBTransaction && Gs(t), Vs(t, Ws()) ? new Proxy(t, Ce) : t);
}
function b(t) {
  if (t instanceof IDBRequest)
    return zs(t);
  if (ie.has(t))
    return ie.get(t);
  const e = Xs(t);
  return e !== t && (ie.set(t, e), Me.set(e, t)), e;
}
const ae = (t) => Me.get(t);
function Ft(t, e, { blocked: n, upgrade: r, blocking: s, terminated: o } = {}) {
  const i = indexedDB.open(t, e), a = b(i);
  return r && i.addEventListener("upgradeneeded", (c) => {
    r(b(i.result), c.oldVersion, c.newVersion, b(i.transaction));
  }), n && i.addEventListener("blocked", () => n()), a.then((c) => {
    o && c.addEventListener("close", () => o()), s && c.addEventListener("versionchange", () => s());
  }).catch(() => {
  }), a;
}
function ce(t, { blocked: e } = {}) {
  const n = indexedDB.deleteDatabase(t);
  return e && n.addEventListener("blocked", () => e()), b(n).then(() => {
  });
}
const Qs = ["get", "getKey", "getAll", "getAllKeys", "count"], Zs = ["put", "add", "delete", "clear"], le = /* @__PURE__ */ new Map();
function nt(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (le.get(e))
    return le.get(e);
  const n = e.replace(/FromIndex$/, ""), r = e !== n, s = Zs.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(s || Qs.includes(n))
  )
    return;
  const o = async function(i, ...a) {
    const c = this.transaction(i, s ? "readwrite" : "readonly");
    let l = c.store;
    return r && (l = l.index(a.shift())), (await Promise.all([
      l[n](...a),
      s && c.done
    ]))[0];
  };
  return le.set(e, o), o;
}
Js((t) => ({
  ...t,
  get: (e, n, r) => nt(e, n) || t.get(e, n, r),
  has: (e, n) => !!nt(e, n) || t.has(e, n)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kt = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4", eo = "https://fcmregistrations.googleapis.com/v1", Ht = "FCM_MSG", to = "google.c.a.c_id", no = 3, ro = 1;
var H;
(function(t) {
  t[t.DATA_MESSAGE = 1] = "DATA_MESSAGE", t[t.DISPLAY_NOTIFICATION = 3] = "DISPLAY_NOTIFICATION";
})(H || (H = {}));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
var V;
(function(t) {
  t.PUSH_RECEIVED = "push-received", t.NOTIFICATION_CLICKED = "notification-clicked";
})(V || (V = {}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t) {
  const e = new Uint8Array(t);
  return btoa(String.fromCharCode(...e)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function so(t) {
  const e = "=".repeat((4 - t.length % 4) % 4), n = (t + e).replace(/\-/g, "+").replace(/_/g, "/"), r = atob(n), s = new Uint8Array(r.length);
  for (let o = 0; o < r.length; ++o)
    s[o] = r.charCodeAt(o);
  return s;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ue = "fcm_token_details_db", oo = 5, rt = "fcm_token_object_Store";
async function io(t) {
  if ("databases" in indexedDB && !(await indexedDB.databases()).map((o) => o.name).includes(ue))
    return null;
  let e = null;
  return (await Ft(ue, oo, {
    upgrade: async (r, s, o, i) => {
      var a;
      if (s < 2 || !r.objectStoreNames.contains(rt))
        return;
      const c = i.objectStore(rt), l = await c.index("fcmSenderId").get(t);
      if (await c.clear(), !!l) {
        if (s === 2) {
          const u = l;
          if (!u.auth || !u.p256dh || !u.endpoint)
            return;
          e = {
            token: u.fcmToken,
            createTime: (a = u.createTime) !== null && a !== void 0 ? a : Date.now(),
            subscriptionOptions: {
              auth: u.auth,
              p256dh: u.p256dh,
              endpoint: u.endpoint,
              swScope: u.swScope,
              vapidKey: typeof u.vapidKey == "string" ? u.vapidKey : g(u.vapidKey)
            }
          };
        } else if (s === 3) {
          const u = l;
          e = {
            token: u.fcmToken,
            createTime: u.createTime,
            subscriptionOptions: {
              auth: g(u.auth),
              p256dh: g(u.p256dh),
              endpoint: u.endpoint,
              swScope: u.swScope,
              vapidKey: g(u.vapidKey)
            }
          };
        } else if (s === 4) {
          const u = l;
          e = {
            token: u.fcmToken,
            createTime: u.createTime,
            subscriptionOptions: {
              auth: g(u.auth),
              p256dh: g(u.p256dh),
              endpoint: u.endpoint,
              swScope: u.swScope,
              vapidKey: g(u.vapidKey)
            }
          };
        }
      }
    }
  })).close(), await ce(ue), await ce("fcm_vapid_details_db"), await ce("undefined"), ao(e) ? e : null;
}
function ao(t) {
  if (!t || !t.subscriptionOptions)
    return !1;
  const { subscriptionOptions: e } = t;
  return typeof t.createTime == "number" && t.createTime > 0 && typeof t.token == "string" && t.token.length > 0 && typeof e.auth == "string" && e.auth.length > 0 && typeof e.p256dh == "string" && e.p256dh.length > 0 && typeof e.endpoint == "string" && e.endpoint.length > 0 && typeof e.swScope == "string" && e.swScope.length > 0 && typeof e.vapidKey == "string" && e.vapidKey.length > 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const co = "firebase-messaging-database", lo = 1, k = "firebase-messaging-store";
let he = null;
function Be() {
  return he || (he = Ft(co, lo, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(k);
      }
    }
  })), he;
}
async function Ne(t) {
  const e = Pe(t), r = await (await Be()).transaction(k).objectStore(k).get(e);
  if (r)
    return r;
  {
    const s = await io(t.appConfig.senderId);
    if (s)
      return await Le(t, s), s;
  }
}
async function Le(t, e) {
  const n = Pe(t), s = (await Be()).transaction(k, "readwrite");
  return await s.objectStore(k).put(e, n), await s.done, e;
}
async function uo(t) {
  const e = Pe(t), r = (await Be()).transaction(k, "readwrite");
  await r.objectStore(k).delete(e), await r.done;
}
function Pe({ appConfig: t }) {
  return t.appId;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ho = {
  "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
  "only-available-in-window": "This method is available in a Window context.",
  "only-available-in-sw": "This method is available in a service worker context.",
  "permission-default": "The notification permission was not granted and dismissed instead.",
  "permission-blocked": "The notification permission was not granted and blocked instead.",
  "unsupported-browser": "This browser doesn't support the API's required to use the Firebase SDK.",
  "indexed-db-unsupported": "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
  "failed-service-worker-registration": "We are unable to register the default service worker. {$browserErrorMessage}",
  "token-subscribe-failed": "A problem occurred while subscribing the user to FCM: {$errorInfo}",
  "token-subscribe-no-token": "FCM returned no token when subscribing the user to push.",
  "token-unsubscribe-failed": "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
  "token-update-failed": "A problem occurred while updating the user from FCM: {$errorInfo}",
  "token-update-no-token": "FCM returned no token when updating the user to push.",
  "use-sw-after-get-token": "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
  "invalid-sw-registration": "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
  "invalid-bg-handler": "The input to setBackgroundMessageHandler() must be a function.",
  "invalid-vapid-key": "The public VAPID key must be a string.",
  "use-vapid-key-after-get-token": "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
}, p = new q("messaging", "Messaging", ho);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fo(t, e) {
  const n = await xe(t), r = Wt(e), s = {
    method: "POST",
    headers: n,
    body: JSON.stringify(r)
  };
  let o;
  try {
    o = await (await fetch($e(t.appConfig), s)).json();
  } catch (i) {
    throw p.create("token-subscribe-failed", {
      errorInfo: i == null ? void 0 : i.toString()
    });
  }
  if (o.error) {
    const i = o.error.message;
    throw p.create("token-subscribe-failed", {
      errorInfo: i
    });
  }
  if (!o.token)
    throw p.create(
      "token-subscribe-no-token"
      /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */
    );
  return o.token;
}
async function po(t, e) {
  const n = await xe(t), r = Wt(e.subscriptionOptions), s = {
    method: "PATCH",
    headers: n,
    body: JSON.stringify(r)
  };
  let o;
  try {
    o = await (await fetch(`${$e(t.appConfig)}/${e.token}`, s)).json();
  } catch (i) {
    throw p.create("token-update-failed", {
      errorInfo: i == null ? void 0 : i.toString()
    });
  }
  if (o.error) {
    const i = o.error.message;
    throw p.create("token-update-failed", {
      errorInfo: i
    });
  }
  if (!o.token)
    throw p.create(
      "token-update-no-token"
      /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */
    );
  return o.token;
}
async function Vt(t, e) {
  const r = {
    method: "DELETE",
    headers: await xe(t)
  };
  try {
    const o = await (await fetch(`${$e(t.appConfig)}/${e}`, r)).json();
    if (o.error) {
      const i = o.error.message;
      throw p.create("token-unsubscribe-failed", {
        errorInfo: i
      });
    }
  } catch (s) {
    throw p.create("token-unsubscribe-failed", {
      errorInfo: s == null ? void 0 : s.toString()
    });
  }
}
function $e({ projectId: t }) {
  return `${eo}/projects/${t}/registrations`;
}
async function xe({ appConfig: t, installations: e }) {
  const n = await e.getToken();
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": t.apiKey,
    "x-goog-firebase-installations-auth": `FIS ${n}`
  });
}
function Wt({ p256dh: t, auth: e, endpoint: n, vapidKey: r }) {
  const s = {
    web: {
      endpoint: n,
      auth: e,
      p256dh: t
    }
  };
  return r !== Kt && (s.web.applicationPubKey = r), s;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const go = 7 * 24 * 60 * 60 * 1e3;
async function mo(t) {
  const e = await wo(t.swRegistration, t.vapidKey), n = {
    vapidKey: t.vapidKey,
    swScope: t.swRegistration.scope,
    endpoint: e.endpoint,
    auth: g(e.getKey("auth")),
    p256dh: g(e.getKey("p256dh"))
  }, r = await Ne(t.firebaseDependencies);
  if (r) {
    if (yo(r.subscriptionOptions, n))
      return Date.now() >= r.createTime + go ? bo(t, {
        token: r.token,
        createTime: Date.now(),
        subscriptionOptions: n
      }) : r.token;
    try {
      await Vt(t.firebaseDependencies, r.token);
    } catch (s) {
      console.warn(s);
    }
    return st(t.firebaseDependencies, n);
  } else
    return st(t.firebaseDependencies, n);
}
async function Se(t) {
  const e = await Ne(t.firebaseDependencies);
  e && (await Vt(t.firebaseDependencies, e.token), await uo(t.firebaseDependencies));
  const n = await t.swRegistration.pushManager.getSubscription();
  return n ? n.unsubscribe() : !0;
}
async function bo(t, e) {
  try {
    const n = await po(t.firebaseDependencies, e), r = Object.assign(Object.assign({}, e), { token: n, createTime: Date.now() });
    return await Le(t.firebaseDependencies, r), n;
  } catch (n) {
    throw await Se(t), n;
  }
}
async function st(t, e) {
  const r = {
    token: await fo(t, e),
    createTime: Date.now(),
    subscriptionOptions: e
  };
  return await Le(t, r), r.token;
}
async function wo(t, e) {
  const n = await t.pushManager.getSubscription();
  return n || t.pushManager.subscribe({
    userVisibleOnly: !0,
    // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
    // submitted to pushManager#subscribe must be of type Uint8Array.
    applicationServerKey: so(e)
  });
}
function yo(t, e) {
  const n = e.vapidKey === t.vapidKey, r = e.endpoint === t.endpoint, s = e.auth === t.auth, o = e.p256dh === t.p256dh;
  return n && r && s && o;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _o(t) {
  const e = {
    from: t.from,
    // eslint-disable-next-line camelcase
    collapseKey: t.collapse_key,
    // eslint-disable-next-line camelcase
    messageId: t.fcmMessageId
  };
  return Io(e, t), Eo(e, t), Co(e, t), e;
}
function Io(t, e) {
  if (!e.notification)
    return;
  t.notification = {};
  const n = e.notification.title;
  n && (t.notification.title = n);
  const r = e.notification.body;
  r && (t.notification.body = r);
  const s = e.notification.image;
  s && (t.notification.image = s);
  const o = e.notification.icon;
  o && (t.notification.icon = o);
}
function Eo(t, e) {
  e.data && (t.data = e.data);
}
function Co(t, e) {
  var n, r, s, o, i;
  if (!e.fcmOptions && !(!((n = e.notification) === null || n === void 0) && n.click_action))
    return;
  t.fcmOptions = {};
  const a = (s = (r = e.fcmOptions) === null || r === void 0 ? void 0 : r.link) !== null && s !== void 0 ? s : (o = e.notification) === null || o === void 0 ? void 0 : o.click_action;
  a && (t.fcmOptions.link = a);
  const c = (i = e.fcmOptions) === null || i === void 0 ? void 0 : i.analytics_label;
  c && (t.fcmOptions.analyticsLabel = c);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function So(t) {
  return typeof t == "object" && !!t && to in t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vo(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
qt("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o");
qt("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4");
async function Do(t, e) {
  const n = To(e, await t.firebaseDependencies.installations.getId());
  Ao(t, n);
}
function To(t, e) {
  var n, r;
  const s = {};
  return t.from && (s.project_number = t.from), t.fcmMessageId && (s.message_id = t.fcmMessageId), s.instance_id = e, t.notification ? s.message_type = H.DISPLAY_NOTIFICATION.toString() : s.message_type = H.DATA_MESSAGE.toString(), s.sdk_platform = no.toString(), s.package_name = self.origin.replace(/(^\w+:|^)\/\//, ""), t.collapse_key && (s.collapse_key = t.collapse_key), s.event = ro.toString(), !((n = t.fcmOptions) === null || n === void 0) && n.analytics_label && (s.analytics_label = (r = t.fcmOptions) === null || r === void 0 ? void 0 : r.analytics_label), s;
}
function Ao(t, e) {
  const n = {};
  n.event_time_ms = Math.floor(Date.now()).toString(), n.source_extension_json_proto3 = JSON.stringify(e), t.logEvents.push(n);
}
function qt(t, e) {
  const n = [];
  for (let r = 0; r < t.length; r++)
    n.push(t.charAt(r)), r < e.length && n.push(e.charAt(r));
  return n.join("");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ro(t, e) {
  var n, r;
  const { newSubscription: s } = t;
  if (!s) {
    await Se(e);
    return;
  }
  const o = await Ne(e.firebaseDependencies);
  await Se(e), e.vapidKey = (r = (n = o == null ? void 0 : o.subscriptionOptions) === null || n === void 0 ? void 0 : n.vapidKey) !== null && r !== void 0 ? r : Kt, await mo(e);
}
async function ko(t, e) {
  const n = Bo(t);
  if (!n)
    return;
  e.deliveryMetricsExportedToBigQueryEnabled && await Do(e, n);
  const r = await zt();
  if (Lo(r))
    return Po(r, n);
  if (n.notification && await $o(Mo(n)), !!e && e.onBackgroundMessageHandler) {
    const s = _o(n);
    typeof e.onBackgroundMessageHandler == "function" ? await e.onBackgroundMessageHandler(s) : e.onBackgroundMessageHandler.next(s);
  }
}
async function Oo(t) {
  var e, n;
  const r = (n = (e = t.notification) === null || e === void 0 ? void 0 : e.data) === null || n === void 0 ? void 0 : n[Ht];
  if (r) {
    if (t.action)
      return;
  } else
    return;
  t.stopImmediatePropagation(), t.notification.close();
  const s = xo(r);
  if (!s)
    return;
  const o = new URL(s, self.location.href), i = new URL(self.location.origin);
  if (o.host !== i.host)
    return;
  let a = await No(o);
  if (a ? a = await a.focus() : (a = await self.clients.openWindow(s), await vo(3e3)), !!a)
    return r.messageType = V.NOTIFICATION_CLICKED, r.isFirebaseMessaging = !0, a.postMessage(r);
}
function Mo(t) {
  const e = Object.assign({}, t.notification);
  return e.data = {
    [Ht]: t
  }, e;
}
function Bo({ data: t }) {
  if (!t)
    return null;
  try {
    return t.json();
  } catch {
    return null;
  }
}
async function No(t) {
  const e = await zt();
  for (const n of e) {
    const r = new URL(n.url, self.location.href);
    if (t.host === r.host)
      return n;
  }
  return null;
}
function Lo(t) {
  return t.some((e) => e.visibilityState === "visible" && // Ignore chrome-extension clients as that matches the background pages of extensions, which
  // are always considered visible for some reason.
  !e.url.startsWith("chrome-extension://"));
}
function Po(t, e) {
  e.isFirebaseMessaging = !0, e.messageType = V.PUSH_RECEIVED;
  for (const n of t)
    n.postMessage(e);
}
function zt() {
  return self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
    // TS doesn't know that "type: 'window'" means it'll return WindowClient[]
  });
}
function $o(t) {
  var e;
  const { actions: n } = t, { maxActions: r } = Notification;
  return n && r && n.length > r && console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`), self.registration.showNotification(
    /* title= */
    (e = t.title) !== null && e !== void 0 ? e : "",
    t
  );
}
function xo(t) {
  var e, n, r;
  const s = (n = (e = t.fcmOptions) === null || e === void 0 ? void 0 : e.link) !== null && n !== void 0 ? n : (r = t.notification) === null || r === void 0 ? void 0 : r.click_action;
  return s || (So(t.data) ? self.location.origin : null);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jo(t) {
  if (!t || !t.options)
    throw de("App Configuration Object");
  if (!t.name)
    throw de("App Name");
  const e = [
    "projectId",
    "apiKey",
    "appId",
    "messagingSenderId"
  ], { options: n } = t;
  for (const r of e)
    if (!n[r])
      throw de(r);
  return {
    appName: t.name,
    projectId: n.projectId,
    apiKey: n.apiKey,
    appId: n.appId,
    senderId: n.messagingSenderId
  };
}
function de(t) {
  return p.create("missing-app-config-values", {
    valueName: t
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo {
  constructor(e, n, r) {
    this.deliveryMetricsExportedToBigQueryEnabled = !1, this.onBackgroundMessageHandler = null, this.onMessageHandler = null, this.logEvents = [], this.isLogServiceStarted = !1;
    const s = jo(e);
    this.firebaseDependencies = {
      app: e,
      appConfig: s,
      installations: n,
      analyticsProvider: r
    };
  }
  _delete() {
    return Promise.resolve();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fo = (t) => {
  const e = new Uo(t.getProvider("app").getImmediate(), t.getProvider("installations-internal").getImmediate(), t.getProvider("analytics-internal"));
  return self.addEventListener("push", (n) => {
    n.waitUntil(ko(n, e));
  }), self.addEventListener("pushsubscriptionchange", (n) => {
    n.waitUntil(Ro(n, e));
  }), self.addEventListener("notificationclick", (n) => {
    n.waitUntil(Oo(n));
  }), e;
};
function Ko() {
  M(new D(
    "messaging-sw",
    Fo,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ho() {
  return ht() && await dt() && "PushManager" in self && "Notification" in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vo(t, e) {
  if (self.document !== void 0)
    throw p.create(
      "only-available-in-sw"
      /* ErrorCode.AVAILABLE_IN_SW */
    );
  return t.onBackgroundMessageHandler = e, () => {
    t.onBackgroundMessageHandler = null;
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wo(t = Pr()) {
  return Ho().then((e) => {
    if (!e)
      throw p.create(
        "unsupported-browser"
        /* ErrorCode.UNSUPPORTED_BROWSER */
      );
  }, (e) => {
    throw p.create(
      "indexed-db-unsupported"
      /* ErrorCode.INDEXED_DB_UNSUPPORTED */
    );
  }), De(ft(t), "messaging-sw").getImmediate();
}
function qo(t, e) {
  return t = ft(t), Vo(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ko();
Sn();
Dn([{"revision":null,"url":"assets/AdminView-61e07583.js"},{"revision":null,"url":"assets/AdminView-db567cca.css"},{"revision":null,"url":"assets/index-4032167f.js"},{"revision":null,"url":"assets/index-416f28a4.css"},{"revision":"e1b0d3783e831c98dfedf62d24b26ab0","url":"firebase-messaging-sw.js"},{"revision":"cc4c66d06d1b3be50f233e4533cf5b52","url":"index.html"},{"revision":"1872c500de691dce40960bb85481de07","url":"registerSW.js"},{"revision":"c5611577c6fa70d967f05315912674a2","url":"favicon.ico"},{"revision":"8c4a85040bb81e8ce9a86262e2501516","url":"pwa-192x192.png"},{"revision":"9ee455bde94e1ddc798a5d2bf224248e","url":"pwa-512x512.png"},{"revision":"f20e24a85efffafa7fc7c4cfe6a231da","url":"manifest.webmanifest"}]);
const zo = mt({
  apiKey: "AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",
  authDomain: "fonti-paintball.firebaseapp.com",
  projectId: "fonti-paintball",
  storageBucket: "fonti-paintball.appspot.com",
  messagingSenderId: "778438522690",
  appId: "1:778438522690:web:a4c394a2732663a3cc3adb",
  measurementId: "G-9JV9LHBR8P"
}), Go = Wo(zo);
qo(Go, (t) => {
  console.log(t);
});
