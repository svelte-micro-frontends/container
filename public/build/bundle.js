
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function (exports) {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var singleSpaSvelte_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = singleSpaSvelte;

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	var defaultOpts = {
	  // required opts
	  component: null,
	  // optional opts
	  domElementGetter: null,
	  props: {}
	};

	function singleSpaSvelte(userOpts) {
	  if (_typeof(userOpts) !== "object") {
	    throw new Error("single-spa-svelte requires a configuration object");
	  }

	  var opts = _objectSpread(_objectSpread({}, defaultOpts), userOpts);

	  if (!opts.component) {
	    throw new Error("single-spa-svelte must be passed opts.component");
	  } // Just a shared object to store the mounted object state


	  var mountedInstances = {};
	  return {
	    bootstrap: bootstrap.bind(null, opts, mountedInstances),
	    mount: mount.bind(null, opts, mountedInstances),
	    unmount: unmount.bind(null, opts, mountedInstances),
	    update: update.bind(null, opts, mountedInstances)
	  };
	}

	function bootstrap(opts) {
	  return Promise.resolve();
	}

	function mount(opts, mountedInstances, singleSpaProps) {
	  var defaultOptKeys = Object.keys(defaultOpts);
	  var svelteOpts = Object.keys(opts).reduce(function (object, key) {
	    if (!defaultOptKeys.includes(key)) {
	      object[key] = opts[key];
	    }

	    return object;
	  }, {});
	  return Promise.resolve().then(function () {
	    var domElementGetter = chooseDomElementGetter(opts, singleSpaProps);
	    var domElement = domElementGetter(); // See https://svelte.dev/docs#Creating_a_component

	    mountedInstances.instance = new opts.component(_objectSpread(_objectSpread({}, svelteOpts), {}, {
	      target: domElement,
	      props: Object.assign({}, singleSpaProps, opts.props)
	    }));
	  });
	}

	function unmount(opts, mountedInstances) {
	  return Promise.resolve().then(function () {
	    mountedInstances.instance.$destroy ? mountedInstances.instance.$destroy() : mountedInstances.instance.destroy();
	  });
	}

	function update(opts, mountedInstances, props) {
	  return Promise.resolve().then(function () {
	    mountedInstances.instance.$set ? mountedInstances.instance.$set(props) : mountedInstances.instance.set(props);
	  });
	}

	function chooseDomElementGetter(opts, props) {
	  props = props && props.customProps ? props.customProps : props;

	  if (props.domElement) {
	    return function () {
	      return props.domElement;
	    };
	  } else if (props.domElementGetter) {
	    return props.domElementGetter;
	  } else if (opts.domElementGetter) {
	    return opts.domElementGetter;
	  } else {
	    return defaultDomElementGetter(props);
	  }
	}

	function defaultDomElementGetter(props) {
	  var appName = props.appName || props.name;

	  if (!appName) {
	    throw Error("single-spa-svelte was not given an application name as a prop, so it can't make a unique dom element container for the svelte application");
	  }

	  var htmlId = "single-spa-application:".concat(appName);
	  return function defaultDomEl() {
	    var domElement = document.getElementById(htmlId);

	    if (!domElement) {
	      domElement = document.createElement("div");
	      domElement.id = htmlId;
	      document.body.appendChild(domElement);
	    }

	    return domElement;
	  };
	}


	});

	var singleSpaSvelte = /*@__PURE__*/getDefaultExportFromCjs(singleSpaSvelte_1);

	function noop() { }
	function assign(tar, src) {
	    // @ts-ignore
	    for (const k in src)
	        tar[k] = src[k];
	    return tar;
	}
	function add_location(element, file, line, column, char) {
	    element.__svelte_meta = {
	        loc: { file, line, column, char }
	    };
	}
	function run(fn) {
	    return fn();
	}
	function blank_object() {
	    return Object.create(null);
	}
	function run_all(fns) {
	    fns.forEach(run);
	}
	function is_function(thing) {
	    return typeof thing === 'function';
	}
	function safe_not_equal(a, b) {
	    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}
	function is_empty(obj) {
	    return Object.keys(obj).length === 0;
	}
	function validate_store(store, name) {
	    if (store != null && typeof store.subscribe !== 'function') {
	        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
	    }
	}
	function subscribe(store, ...callbacks) {
	    if (store == null) {
	        return noop;
	    }
	    const unsub = store.subscribe(...callbacks);
	    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
	}
	function component_subscribe(component, store, callback) {
	    component.$$.on_destroy.push(subscribe(store, callback));
	}
	function create_slot(definition, ctx, $$scope, fn) {
	    if (definition) {
	        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
	        return definition[0](slot_ctx);
	    }
	}
	function get_slot_context(definition, ctx, $$scope, fn) {
	    return definition[1] && fn
	        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
	        : $$scope.ctx;
	}
	function get_slot_changes(definition, $$scope, dirty, fn) {
	    if (definition[2] && fn) {
	        const lets = definition[2](fn(dirty));
	        if ($$scope.dirty === undefined) {
	            return lets;
	        }
	        if (typeof lets === 'object') {
	            const merged = [];
	            const len = Math.max($$scope.dirty.length, lets.length);
	            for (let i = 0; i < len; i += 1) {
	                merged[i] = $$scope.dirty[i] | lets[i];
	            }
	            return merged;
	        }
	        return $$scope.dirty | lets;
	    }
	    return $$scope.dirty;
	}
	function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
	    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
	    if (slot_changes) {
	        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
	        slot.p(slot_context, slot_changes);
	    }
	}
	function exclude_internal_props(props) {
	    const result = {};
	    for (const k in props)
	        if (k[0] !== '$')
	            result[k] = props[k];
	    return result;
	}

	function append(target, node) {
	    target.appendChild(node);
	}
	function insert(target, node, anchor) {
	    target.insertBefore(node, anchor || null);
	}
	function detach(node) {
	    node.parentNode.removeChild(node);
	}
	function element(name) {
	    return document.createElement(name);
	}
	function text(data) {
	    return document.createTextNode(data);
	}
	function space() {
	    return text(' ');
	}
	function empty() {
	    return text('');
	}
	function listen(node, event, handler, options) {
	    node.addEventListener(event, handler, options);
	    return () => node.removeEventListener(event, handler, options);
	}
	function attr(node, attribute, value) {
	    if (value == null)
	        node.removeAttribute(attribute);
	    else if (node.getAttribute(attribute) !== value)
	        node.setAttribute(attribute, value);
	}
	function set_attributes(node, attributes) {
	    // @ts-ignore
	    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
	    for (const key in attributes) {
	        if (attributes[key] == null) {
	            node.removeAttribute(key);
	        }
	        else if (key === 'style') {
	            node.style.cssText = attributes[key];
	        }
	        else if (key === '__value') {
	            node.value = node[key] = attributes[key];
	        }
	        else if (descriptors[key] && descriptors[key].set) {
	            node[key] = attributes[key];
	        }
	        else {
	            attr(node, key, attributes[key]);
	        }
	    }
	}
	function children(element) {
	    return Array.from(element.childNodes);
	}
	function custom_event(type, detail) {
	    const e = document.createEvent('CustomEvent');
	    e.initCustomEvent(type, false, false, detail);
	    return e;
	}

	let current_component;
	function set_current_component(component) {
	    current_component = component;
	}
	function get_current_component() {
	    if (!current_component)
	        throw new Error('Function called outside component initialization');
	    return current_component;
	}
	function onMount(fn) {
	    get_current_component().$$.on_mount.push(fn);
	}
	function onDestroy(fn) {
	    get_current_component().$$.on_destroy.push(fn);
	}
	function createEventDispatcher() {
	    const component = get_current_component();
	    return (type, detail) => {
	        const callbacks = component.$$.callbacks[type];
	        if (callbacks) {
	            // TODO are there situations where events could be dispatched
	            // in a server (non-DOM) environment?
	            const event = custom_event(type, detail);
	            callbacks.slice().forEach(fn => {
	                fn.call(component, event);
	            });
	        }
	    };
	}
	function setContext(key, context) {
	    get_current_component().$$.context.set(key, context);
	}
	function getContext(key) {
	    return get_current_component().$$.context.get(key);
	}

	const dirty_components = [];
	const binding_callbacks = [];
	const render_callbacks = [];
	const flush_callbacks = [];
	const resolved_promise = Promise.resolve();
	let update_scheduled = false;
	function schedule_update() {
	    if (!update_scheduled) {
	        update_scheduled = true;
	        resolved_promise.then(flush);
	    }
	}
	function add_render_callback(fn) {
	    render_callbacks.push(fn);
	}
	let flushing = false;
	const seen_callbacks = new Set();
	function flush() {
	    if (flushing)
	        return;
	    flushing = true;
	    do {
	        // first, call beforeUpdate functions
	        // and update components
	        for (let i = 0; i < dirty_components.length; i += 1) {
	            const component = dirty_components[i];
	            set_current_component(component);
	            update(component.$$);
	        }
	        set_current_component(null);
	        dirty_components.length = 0;
	        while (binding_callbacks.length)
	            binding_callbacks.pop()();
	        // then, once components are updated, call
	        // afterUpdate functions. This may cause
	        // subsequent updates...
	        for (let i = 0; i < render_callbacks.length; i += 1) {
	            const callback = render_callbacks[i];
	            if (!seen_callbacks.has(callback)) {
	                // ...so guard against infinite loops
	                seen_callbacks.add(callback);
	                callback();
	            }
	        }
	        render_callbacks.length = 0;
	    } while (dirty_components.length);
	    while (flush_callbacks.length) {
	        flush_callbacks.pop()();
	    }
	    update_scheduled = false;
	    flushing = false;
	    seen_callbacks.clear();
	}
	function update($$) {
	    if ($$.fragment !== null) {
	        $$.update();
	        run_all($$.before_update);
	        const dirty = $$.dirty;
	        $$.dirty = [-1];
	        $$.fragment && $$.fragment.p($$.ctx, dirty);
	        $$.after_update.forEach(add_render_callback);
	    }
	}
	const outroing = new Set();
	let outros;
	function group_outros() {
	    outros = {
	        r: 0,
	        c: [],
	        p: outros // parent group
	    };
	}
	function check_outros() {
	    if (!outros.r) {
	        run_all(outros.c);
	    }
	    outros = outros.p;
	}
	function transition_in(block, local) {
	    if (block && block.i) {
	        outroing.delete(block);
	        block.i(local);
	    }
	}
	function transition_out(block, local, detach, callback) {
	    if (block && block.o) {
	        if (outroing.has(block))
	            return;
	        outroing.add(block);
	        outros.c.push(() => {
	            outroing.delete(block);
	            if (callback) {
	                if (detach)
	                    block.d(1);
	                callback();
	            }
	        });
	        block.o(local);
	    }
	}

	function get_spread_update(levels, updates) {
	    const update = {};
	    const to_null_out = {};
	    const accounted_for = { $$scope: 1 };
	    let i = levels.length;
	    while (i--) {
	        const o = levels[i];
	        const n = updates[i];
	        if (n) {
	            for (const key in o) {
	                if (!(key in n))
	                    to_null_out[key] = 1;
	            }
	            for (const key in n) {
	                if (!accounted_for[key]) {
	                    update[key] = n[key];
	                    accounted_for[key] = 1;
	                }
	            }
	            levels[i] = n;
	        }
	        else {
	            for (const key in o) {
	                accounted_for[key] = 1;
	            }
	        }
	    }
	    for (const key in to_null_out) {
	        if (!(key in update))
	            update[key] = undefined;
	    }
	    return update;
	}
	function get_spread_object(spread_props) {
	    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
	}
	function create_component(block) {
	    block && block.c();
	}
	function mount_component(component, target, anchor) {
	    const { fragment, on_mount, on_destroy, after_update } = component.$$;
	    fragment && fragment.m(target, anchor);
	    // onMount happens before the initial afterUpdate
	    add_render_callback(() => {
	        const new_on_destroy = on_mount.map(run).filter(is_function);
	        if (on_destroy) {
	            on_destroy.push(...new_on_destroy);
	        }
	        else {
	            // Edge case - component was destroyed immediately,
	            // most likely as a result of a binding initialising
	            run_all(new_on_destroy);
	        }
	        component.$$.on_mount = [];
	    });
	    after_update.forEach(add_render_callback);
	}
	function destroy_component(component, detaching) {
	    const $$ = component.$$;
	    if ($$.fragment !== null) {
	        run_all($$.on_destroy);
	        $$.fragment && $$.fragment.d(detaching);
	        // TODO null out other refs, including component.$$ (but need to
	        // preserve final state?)
	        $$.on_destroy = $$.fragment = null;
	        $$.ctx = [];
	    }
	}
	function make_dirty(component, i) {
	    if (component.$$.dirty[0] === -1) {
	        dirty_components.push(component);
	        schedule_update();
	        component.$$.dirty.fill(0);
	    }
	    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
	}
	function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
	    const parent_component = current_component;
	    set_current_component(component);
	    const prop_values = options.props || {};
	    const $$ = component.$$ = {
	        fragment: null,
	        ctx: null,
	        // state
	        props,
	        update: noop,
	        not_equal,
	        bound: blank_object(),
	        // lifecycle
	        on_mount: [],
	        on_destroy: [],
	        before_update: [],
	        after_update: [],
	        context: new Map(parent_component ? parent_component.$$.context : []),
	        // everything else
	        callbacks: blank_object(),
	        dirty,
	        skip_bound: false
	    };
	    let ready = false;
	    $$.ctx = instance
	        ? instance(component, prop_values, (i, ret, ...rest) => {
	            const value = rest.length ? rest[0] : ret;
	            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
	                if (!$$.skip_bound && $$.bound[i])
	                    $$.bound[i](value);
	                if (ready)
	                    make_dirty(component, i);
	            }
	            return ret;
	        })
	        : [];
	    $$.update();
	    ready = true;
	    run_all($$.before_update);
	    // `false` as a special case of no DOM component
	    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
	    if (options.target) {
	        if (options.hydrate) {
	            const nodes = children(options.target);
	            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	            $$.fragment && $$.fragment.l(nodes);
	            nodes.forEach(detach);
	        }
	        else {
	            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	            $$.fragment && $$.fragment.c();
	        }
	        if (options.intro)
	            transition_in(component.$$.fragment);
	        mount_component(component, options.target, options.anchor);
	        flush();
	    }
	    set_current_component(parent_component);
	}
	class SvelteComponent {
	    $destroy() {
	        destroy_component(this, 1);
	        this.$destroy = noop;
	    }
	    $on(type, callback) {
	        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
	        callbacks.push(callback);
	        return () => {
	            const index = callbacks.indexOf(callback);
	            if (index !== -1)
	                callbacks.splice(index, 1);
	        };
	    }
	    $set($$props) {
	        if (this.$$set && !is_empty($$props)) {
	            this.$$.skip_bound = true;
	            this.$$set($$props);
	            this.$$.skip_bound = false;
	        }
	    }
	}

	function dispatch_dev(type, detail) {
	    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.29.7' }, detail)));
	}
	function append_dev(target, node) {
	    dispatch_dev('SvelteDOMInsert', { target, node });
	    append(target, node);
	}
	function insert_dev(target, node, anchor) {
	    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
	    insert(target, node, anchor);
	}
	function detach_dev(node) {
	    dispatch_dev('SvelteDOMRemove', { node });
	    detach(node);
	}
	function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
	    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
	    if (has_prevent_default)
	        modifiers.push('preventDefault');
	    if (has_stop_propagation)
	        modifiers.push('stopPropagation');
	    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
	    const dispose = listen(node, event, handler, options);
	    return () => {
	        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
	        dispose();
	    };
	}
	function attr_dev(node, attribute, value) {
	    attr(node, attribute, value);
	    if (value == null)
	        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
	    else
	        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
	}
	function validate_slots(name, slot, keys) {
	    for (const slot_key of Object.keys(slot)) {
	        if (!~keys.indexOf(slot_key)) {
	            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
	        }
	    }
	}
	class SvelteComponentDev extends SvelteComponent {
	    constructor(options) {
	        if (!options || (!options.target && !options.$$inline)) {
	            throw new Error("'target' is a required option");
	        }
	        super();
	    }
	    $destroy() {
	        super.$destroy();
	        this.$destroy = () => {
	            console.warn('Component was already destroyed'); // eslint-disable-line no-console
	        };
	    }
	    $capture_state() { }
	    $inject_state() { }
	}

	const subscriber_queue = [];
	/**
	 * Creates a `Readable` store that allows reading by subscription.
	 * @param value initial value
	 * @param {StartStopNotifier}start start and stop notifications for subscriptions
	 */
	function readable(value, start) {
	    return {
	        subscribe: writable(value, start).subscribe
	    };
	}
	/**
	 * Create a `Writable` store that allows both updating and reading by subscription.
	 * @param {*=}value initial value
	 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
	 */
	function writable(value, start = noop) {
	    let stop;
	    const subscribers = [];
	    function set(new_value) {
	        if (safe_not_equal(value, new_value)) {
	            value = new_value;
	            if (stop) { // store is ready
	                const run_queue = !subscriber_queue.length;
	                for (let i = 0; i < subscribers.length; i += 1) {
	                    const s = subscribers[i];
	                    s[1]();
	                    subscriber_queue.push(s, value);
	                }
	                if (run_queue) {
	                    for (let i = 0; i < subscriber_queue.length; i += 2) {
	                        subscriber_queue[i][0](subscriber_queue[i + 1]);
	                    }
	                    subscriber_queue.length = 0;
	                }
	            }
	        }
	    }
	    function update(fn) {
	        set(fn(value));
	    }
	    function subscribe(run, invalidate = noop) {
	        const subscriber = [run, invalidate];
	        subscribers.push(subscriber);
	        if (subscribers.length === 1) {
	            stop = start(set) || noop;
	        }
	        run(value);
	        return () => {
	            const index = subscribers.indexOf(subscriber);
	            if (index !== -1) {
	                subscribers.splice(index, 1);
	            }
	            if (subscribers.length === 0) {
	                stop();
	                stop = null;
	            }
	        };
	    }
	    return { set, update, subscribe };
	}
	function derived(stores, fn, initial_value) {
	    const single = !Array.isArray(stores);
	    const stores_array = single
	        ? [stores]
	        : stores;
	    const auto = fn.length < 2;
	    return readable(initial_value, (set) => {
	        let inited = false;
	        const values = [];
	        let pending = 0;
	        let cleanup = noop;
	        const sync = () => {
	            if (pending) {
	                return;
	            }
	            cleanup();
	            const result = fn(single ? values[0] : values, set);
	            if (auto) {
	                set(result);
	            }
	            else {
	                cleanup = is_function(result) ? result : noop;
	            }
	        };
	        const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
	            values[i] = value;
	            pending &= ~(1 << i);
	            if (inited) {
	                sync();
	            }
	        }, () => {
	            pending |= (1 << i);
	        }));
	        inited = true;
	        sync();
	        return function stop() {
	            run_all(unsubscribers);
	            cleanup();
	        };
	    });
	}

	const LOCATION = {};
	const ROUTER = {};

	/**
	 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/history.js
	 *
	 * https://github.com/reach/router/blob/master/LICENSE
	 * */

	function getLocation(source) {
	  return {
	    ...source.location,
	    state: source.history.state,
	    key: (source.history.state && source.history.state.key) || "initial"
	  };
	}

	function createHistory(source, options) {
	  const listeners = [];
	  let location = getLocation(source);

	  return {
	    get location() {
	      return location;
	    },

	    listen(listener) {
	      listeners.push(listener);

	      const popstateListener = () => {
	        location = getLocation(source);
	        listener({ location, action: "POP" });
	      };

	      source.addEventListener("popstate", popstateListener);

	      return () => {
	        source.removeEventListener("popstate", popstateListener);

	        const index = listeners.indexOf(listener);
	        listeners.splice(index, 1);
	      };
	    },

	    navigate(to, { state, replace = false } = {}) {
	      state = { ...state, key: Date.now() + "" };
	      // try...catch iOS Safari limits to 100 pushState calls
	      try {
	        if (replace) {
	          source.history.replaceState(state, null, to);
	        } else {
	          source.history.pushState(state, null, to);
	        }
	      } catch (e) {
	        source.location[replace ? "replace" : "assign"](to);
	      }

	      location = getLocation(source);
	      listeners.forEach(listener => listener({ location, action: "PUSH" }));
	    }
	  };
	}

	// Stores history entries in memory for testing or other platforms like Native
	function createMemorySource(initialPathname = "/") {
	  let index = 0;
	  const stack = [{ pathname: initialPathname, search: "" }];
	  const states = [];

	  return {
	    get location() {
	      return stack[index];
	    },
	    addEventListener(name, fn) {},
	    removeEventListener(name, fn) {},
	    history: {
	      get entries() {
	        return stack;
	      },
	      get index() {
	        return index;
	      },
	      get state() {
	        return states[index];
	      },
	      pushState(state, _, uri) {
	        const [pathname, search = ""] = uri.split("?");
	        index++;
	        stack.push({ pathname, search });
	        states.push(state);
	      },
	      replaceState(state, _, uri) {
	        const [pathname, search = ""] = uri.split("?");
	        stack[index] = { pathname, search };
	        states[index] = state;
	      }
	    }
	  };
	}

	// Global history uses window.history as the source if available,
	// otherwise a memory history
	const canUseDOM = Boolean(
	  typeof window !== "undefined" &&
	    window.document &&
	    window.document.createElement
	);
	const globalHistory = createHistory(canUseDOM ? window : createMemorySource());
	const { navigate } = globalHistory;

	/**
	 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/utils.js
	 *
	 * https://github.com/reach/router/blob/master/LICENSE
	 * */

	const paramRe = /^:(.+)/;

	const SEGMENT_POINTS = 4;
	const STATIC_POINTS = 3;
	const DYNAMIC_POINTS = 2;
	const SPLAT_PENALTY = 1;
	const ROOT_POINTS = 1;

	/**
	 * Check if `string` starts with `search`
	 * @param {string} string
	 * @param {string} search
	 * @return {boolean}
	 */
	function startsWith(string, search) {
	  return string.substr(0, search.length) === search;
	}

	/**
	 * Check if `segment` is a root segment
	 * @param {string} segment
	 * @return {boolean}
	 */
	function isRootSegment(segment) {
	  return segment === "";
	}

	/**
	 * Check if `segment` is a dynamic segment
	 * @param {string} segment
	 * @return {boolean}
	 */
	function isDynamic(segment) {
	  return paramRe.test(segment);
	}

	/**
	 * Check if `segment` is a splat
	 * @param {string} segment
	 * @return {boolean}
	 */
	function isSplat(segment) {
	  return segment[0] === "*";
	}

	/**
	 * Split up the URI into segments delimited by `/`
	 * @param {string} uri
	 * @return {string[]}
	 */
	function segmentize(uri) {
	  return (
	    uri
	      // Strip starting/ending `/`
	      .replace(/(^\/+|\/+$)/g, "")
	      .split("/")
	  );
	}

	/**
	 * Strip `str` of potential start and end `/`
	 * @param {string} str
	 * @return {string}
	 */
	function stripSlashes(str) {
	  return str.replace(/(^\/+|\/+$)/g, "");
	}

	/**
	 * Score a route depending on how its individual segments look
	 * @param {object} route
	 * @param {number} index
	 * @return {object}
	 */
	function rankRoute(route, index) {
	  const score = route.default
	    ? 0
	    : segmentize(route.path).reduce((score, segment) => {
	        score += SEGMENT_POINTS;

	        if (isRootSegment(segment)) {
	          score += ROOT_POINTS;
	        } else if (isDynamic(segment)) {
	          score += DYNAMIC_POINTS;
	        } else if (isSplat(segment)) {
	          score -= SEGMENT_POINTS + SPLAT_PENALTY;
	        } else {
	          score += STATIC_POINTS;
	        }

	        return score;
	      }, 0);

	  return { route, score, index };
	}

	/**
	 * Give a score to all routes and sort them on that
	 * @param {object[]} routes
	 * @return {object[]}
	 */
	function rankRoutes(routes) {
	  return (
	    routes
	      .map(rankRoute)
	      // If two routes have the exact same score, we go by index instead
	      .sort((a, b) =>
	        a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index
	      )
	  );
	}

	/**
	 * Ranks and picks the best route to match. Each segment gets the highest
	 * amount of points, then the type of segment gets an additional amount of
	 * points where
	 *
	 *  static > dynamic > splat > root
	 *
	 * This way we don't have to worry about the order of our routes, let the
	 * computers do it.
	 *
	 * A route looks like this
	 *
	 *  { path, default, value }
	 *
	 * And a returned match looks like:
	 *
	 *  { route, params, uri }
	 *
	 * @param {object[]} routes
	 * @param {string} uri
	 * @return {?object}
	 */
	function pick(routes, uri) {
	  let match;
	  let default_;

	  const [uriPathname] = uri.split("?");
	  const uriSegments = segmentize(uriPathname);
	  const isRootUri = uriSegments[0] === "";
	  const ranked = rankRoutes(routes);

	  for (let i = 0, l = ranked.length; i < l; i++) {
	    const route = ranked[i].route;
	    let missed = false;

	    if (route.default) {
	      default_ = {
	        route,
	        params: {},
	        uri
	      };
	      continue;
	    }

	    const routeSegments = segmentize(route.path);
	    const params = {};
	    const max = Math.max(uriSegments.length, routeSegments.length);
	    let index = 0;

	    for (; index < max; index++) {
	      const routeSegment = routeSegments[index];
	      const uriSegment = uriSegments[index];

	      if (routeSegment !== undefined && isSplat(routeSegment)) {
	        // Hit a splat, just grab the rest, and return a match
	        // uri:   /files/documents/work
	        // route: /files/* or /files/*splatname
	        const splatName = routeSegment === "*" ? "*" : routeSegment.slice(1);

	        params[splatName] = uriSegments
	          .slice(index)
	          .map(decodeURIComponent)
	          .join("/");
	        break;
	      }

	      if (uriSegment === undefined) {
	        // URI is shorter than the route, no match
	        // uri:   /users
	        // route: /users/:userId
	        missed = true;
	        break;
	      }

	      let dynamicMatch = paramRe.exec(routeSegment);

	      if (dynamicMatch && !isRootUri) {
	        const value = decodeURIComponent(uriSegment);
	        params[dynamicMatch[1]] = value;
	      } else if (routeSegment !== uriSegment) {
	        // Current segments don't match, not dynamic, not splat, so no match
	        // uri:   /users/123/settings
	        // route: /users/:id/profile
	        missed = true;
	        break;
	      }
	    }

	    if (!missed) {
	      match = {
	        route,
	        params,
	        uri: "/" + uriSegments.slice(0, index).join("/")
	      };
	      break;
	    }
	  }

	  return match || default_ || null;
	}

	/**
	 * Check if the `path` matches the `uri`.
	 * @param {string} path
	 * @param {string} uri
	 * @return {?object}
	 */
	function match(route, uri) {
	  return pick([route], uri);
	}

	/**
	 * Add the query to the pathname if a query is given
	 * @param {string} pathname
	 * @param {string} [query]
	 * @return {string}
	 */
	function addQuery(pathname, query) {
	  return pathname + (query ? `?${query}` : "");
	}

	/**
	 * Resolve URIs as though every path is a directory, no files. Relative URIs
	 * in the browser can feel awkward because not only can you be "in a directory",
	 * you can be "at a file", too. For example:
	 *
	 *  browserSpecResolve('foo', '/bar/') => /bar/foo
	 *  browserSpecResolve('foo', '/bar') => /foo
	 *
	 * But on the command line of a file system, it's not as complicated. You can't
	 * `cd` from a file, only directories. This way, links have to know less about
	 * their current path. To go deeper you can do this:
	 *
	 *  <Link to="deeper"/>
	 *  // instead of
	 *  <Link to=`{${props.uri}/deeper}`/>
	 *
	 * Just like `cd`, if you want to go deeper from the command line, you do this:
	 *
	 *  cd deeper
	 *  # not
	 *  cd $(pwd)/deeper
	 *
	 * By treating every path as a directory, linking to relative paths should
	 * require less contextual information and (fingers crossed) be more intuitive.
	 * @param {string} to
	 * @param {string} base
	 * @return {string}
	 */
	function resolve(to, base) {
	  // /foo/bar, /baz/qux => /foo/bar
	  if (startsWith(to, "/")) {
	    return to;
	  }

	  const [toPathname, toQuery] = to.split("?");
	  const [basePathname] = base.split("?");
	  const toSegments = segmentize(toPathname);
	  const baseSegments = segmentize(basePathname);

	  // ?a=b, /users?b=c => /users?a=b
	  if (toSegments[0] === "") {
	    return addQuery(basePathname, toQuery);
	  }

	  // profile, /users/789 => /users/789/profile
	  if (!startsWith(toSegments[0], ".")) {
	    const pathname = baseSegments.concat(toSegments).join("/");

	    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
	  }

	  // ./       , /users/123 => /users/123
	  // ../      , /users/123 => /users
	  // ../..    , /users/123 => /
	  // ../../one, /a/b/c/d   => /a/b/one
	  // .././one , /a/b/c/d   => /a/b/c/one
	  const allSegments = baseSegments.concat(toSegments);
	  const segments = [];

	  allSegments.forEach(segment => {
	    if (segment === "..") {
	      segments.pop();
	    } else if (segment !== ".") {
	      segments.push(segment);
	    }
	  });

	  return addQuery("/" + segments.join("/"), toQuery);
	}

	/**
	 * Combines the `basepath` and the `path` into one path.
	 * @param {string} basepath
	 * @param {string} path
	 */
	function combinePaths(basepath, path) {
	  return `${stripSlashes(
    path === "/" ? basepath : `${stripSlashes(basepath)}/${stripSlashes(path)}`
  )}/`;
	}

	/**
	 * Decides whether a given `event` should result in a navigation or not.
	 * @param {object} event
	 */
	function shouldNavigate(event) {
	  return (
	    !event.defaultPrevented &&
	    event.button === 0 &&
	    !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
	  );
	}

	/* node_modules/.pnpm/svelte-routing@1.4.2_svelte@3.29.7/node_modules/svelte-routing/src/Router.svelte generated by Svelte v3.29.7 */

	function create_fragment(ctx) {
		let current;
		const default_slot_template = /*#slots*/ ctx[6].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

		const block = {
			c: function create() {
				if (default_slot) default_slot.c();
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				if (default_slot) {
					default_slot.m(target, anchor);
				}

				current = true;
			},
			p: function update(ctx, [dirty]) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope*/ 32) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
					}
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(default_slot, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(default_slot, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (default_slot) default_slot.d(detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance($$self, $$props, $$invalidate) {
		let $base;
		let $location;
		let $routes;
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Router", slots, ['default']);
		let { basepath = "/" } = $$props;
		let { url = null } = $$props;
		const locationContext = getContext(LOCATION);
		const routerContext = getContext(ROUTER);
		const routes = writable([]);
		validate_store(routes, "routes");
		component_subscribe($$self, routes, value => $$invalidate(10, $routes = value));
		const activeRoute = writable(null);
		let hasActiveRoute = false; // Used in SSR to synchronously set that a Route is active.

		// If locationContext is not set, this is the topmost Router in the tree.
		// If the `url` prop is given we force the location to it.
		const location = locationContext || writable(url ? { pathname: url } : globalHistory.location);

		validate_store(location, "location");
		component_subscribe($$self, location, value => $$invalidate(9, $location = value));

		// If routerContext is set, the routerBase of the parent Router
		// will be the base for this Router's descendants.
		// If routerContext is not set, the path and resolved uri will both
		// have the value of the basepath prop.
		const base = routerContext
		? routerContext.routerBase
		: writable({ path: basepath, uri: basepath });

		validate_store(base, "base");
		component_subscribe($$self, base, value => $$invalidate(8, $base = value));

		const routerBase = derived([base, activeRoute], ([base, activeRoute]) => {
			// If there is no activeRoute, the routerBase will be identical to the base.
			if (activeRoute === null) {
				return base;
			}

			const { path: basepath } = base;
			const { route, uri } = activeRoute;

			// Remove the potential /* or /*splatname from
			// the end of the child Routes relative paths.
			const path = route.default
			? basepath
			: route.path.replace(/\*.*$/, "");

			return { path, uri };
		});

		function registerRoute(route) {
			const { path: basepath } = $base;
			let { path } = route;

			// We store the original path in the _path property so we can reuse
			// it when the basepath changes. The only thing that matters is that
			// the route reference is intact, so mutation is fine.
			route._path = path;

			route.path = combinePaths(basepath, path);

			if (typeof window === "undefined") {
				// In SSR we should set the activeRoute immediately if it is a match.
				// If there are more Routes being registered after a match is found,
				// we just skip them.
				if (hasActiveRoute) {
					return;
				}

				const matchingRoute = match(route, $location.pathname);

				if (matchingRoute) {
					activeRoute.set(matchingRoute);
					hasActiveRoute = true;
				}
			} else {
				routes.update(rs => {
					rs.push(route);
					return rs;
				});
			}
		}

		function unregisterRoute(route) {
			routes.update(rs => {
				const index = rs.indexOf(route);
				rs.splice(index, 1);
				return rs;
			});
		}

		if (!locationContext) {
			// The topmost Router in the tree is responsible for updating
			// the location store and supplying it through context.
			onMount(() => {
				const unlisten = globalHistory.listen(history => {
					location.set(history.location);
				});

				return unlisten;
			});

			setContext(LOCATION, location);
		}

		setContext(ROUTER, {
			activeRoute,
			base,
			routerBase,
			registerRoute,
			unregisterRoute
		});

		const writable_props = ["basepath", "url"];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Router> was created with unknown prop '${key}'`);
		});

		$$self.$$set = $$props => {
			if ("basepath" in $$props) $$invalidate(3, basepath = $$props.basepath);
			if ("url" in $$props) $$invalidate(4, url = $$props.url);
			if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
		};

		$$self.$capture_state = () => ({
			getContext,
			setContext,
			onMount,
			writable,
			derived,
			LOCATION,
			ROUTER,
			globalHistory,
			pick,
			match,
			stripSlashes,
			combinePaths,
			basepath,
			url,
			locationContext,
			routerContext,
			routes,
			activeRoute,
			hasActiveRoute,
			location,
			base,
			routerBase,
			registerRoute,
			unregisterRoute,
			$base,
			$location,
			$routes
		});

		$$self.$inject_state = $$props => {
			if ("basepath" in $$props) $$invalidate(3, basepath = $$props.basepath);
			if ("url" in $$props) $$invalidate(4, url = $$props.url);
			if ("hasActiveRoute" in $$props) hasActiveRoute = $$props.hasActiveRoute;
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*$base*/ 256) {
				// This reactive statement will update all the Routes' path when
				// the basepath changes.
				 {
					const { path: basepath } = $base;

					routes.update(rs => {
						rs.forEach(r => r.path = combinePaths(basepath, r._path));
						return rs;
					});
				}
			}

			if ($$self.$$.dirty & /*$routes, $location*/ 1536) {
				// This reactive statement will be run when the Router is created
				// when there are no Routes and then again the following tick, so it
				// will not find an active Route in SSR and in the browser it will only
				// pick an active Route after all Routes have been registered.
				 {
					const bestMatch = pick($routes, $location.pathname);
					activeRoute.set(bestMatch);
				}
			}
		};

		return [routes, location, base, basepath, url, $$scope, slots];
	}

	class Router extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance, create_fragment, safe_not_equal, { basepath: 3, url: 4 });

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Router",
				options,
				id: create_fragment.name
			});
		}

		get basepath() {
			throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set basepath(value) {
			throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		get url() {
			throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set url(value) {
			throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}
	}

	/* node_modules/.pnpm/svelte-routing@1.4.2_svelte@3.29.7/node_modules/svelte-routing/src/Route.svelte generated by Svelte v3.29.7 */

	const get_default_slot_changes = dirty => ({
		params: dirty & /*routeParams*/ 2,
		location: dirty & /*$location*/ 16
	});

	const get_default_slot_context = ctx => ({
		params: /*routeParams*/ ctx[1],
		location: /*$location*/ ctx[4]
	});

	// (40:0) {#if $activeRoute !== null && $activeRoute.route === route}
	function create_if_block(ctx) {
		let current_block_type_index;
		let if_block;
		let if_block_anchor;
		let current;
		const if_block_creators = [create_if_block_1, create_else_block];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (/*component*/ ctx[0] !== null) return 0;
			return 1;
		}

		current_block_type_index = select_block_type(ctx);
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

		const block = {
			c: function create() {
				if_block.c();
				if_block_anchor = empty();
			},
			m: function mount(target, anchor) {
				if_blocks[current_block_type_index].m(target, anchor);
				insert_dev(target, if_block_anchor, anchor);
				current = true;
			},
			p: function update(ctx, dirty) {
				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx);

				if (current_block_type_index === previous_block_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				} else {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					} else {
						if_block.p(ctx, dirty);
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(if_block);
				current = true;
			},
			o: function outro(local) {
				transition_out(if_block);
				current = false;
			},
			d: function destroy(detaching) {
				if_blocks[current_block_type_index].d(detaching);
				if (detaching) detach_dev(if_block_anchor);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block.name,
			type: "if",
			source: "(40:0) {#if $activeRoute !== null && $activeRoute.route === route}",
			ctx
		});

		return block;
	}

	// (43:2) {:else}
	function create_else_block(ctx) {
		let current;
		const default_slot_template = /*#slots*/ ctx[10].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], get_default_slot_context);

		const block = {
			c: function create() {
				if (default_slot) default_slot.c();
			},
			m: function mount(target, anchor) {
				if (default_slot) {
					default_slot.m(target, anchor);
				}

				current = true;
			},
			p: function update(ctx, dirty) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope, routeParams, $location*/ 530) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, get_default_slot_changes, get_default_slot_context);
					}
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(default_slot, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(default_slot, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (default_slot) default_slot.d(detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_else_block.name,
			type: "else",
			source: "(43:2) {:else}",
			ctx
		});

		return block;
	}

	// (41:2) {#if component !== null}
	function create_if_block_1(ctx) {
		let switch_instance;
		let switch_instance_anchor;
		let current;

		const switch_instance_spread_levels = [
			{ location: /*$location*/ ctx[4] },
			/*routeParams*/ ctx[1],
			/*routeProps*/ ctx[2]
		];

		var switch_value = /*component*/ ctx[0];

		function switch_props(ctx) {
			let switch_instance_props = {};

			for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
				switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
			}

			return {
				props: switch_instance_props,
				$$inline: true
			};
		}

		if (switch_value) {
			switch_instance = new switch_value(switch_props());
		}

		const block = {
			c: function create() {
				if (switch_instance) create_component(switch_instance.$$.fragment);
				switch_instance_anchor = empty();
			},
			m: function mount(target, anchor) {
				if (switch_instance) {
					mount_component(switch_instance, target, anchor);
				}

				insert_dev(target, switch_instance_anchor, anchor);
				current = true;
			},
			p: function update(ctx, dirty) {
				const switch_instance_changes = (dirty & /*$location, routeParams, routeProps*/ 22)
				? get_spread_update(switch_instance_spread_levels, [
						dirty & /*$location*/ 16 && { location: /*$location*/ ctx[4] },
						dirty & /*routeParams*/ 2 && get_spread_object(/*routeParams*/ ctx[1]),
						dirty & /*routeProps*/ 4 && get_spread_object(/*routeProps*/ ctx[2])
					])
				: {};

				if (switch_value !== (switch_value = /*component*/ ctx[0])) {
					if (switch_instance) {
						group_outros();
						const old_component = switch_instance;

						transition_out(old_component.$$.fragment, 1, 0, () => {
							destroy_component(old_component, 1);
						});

						check_outros();
					}

					if (switch_value) {
						switch_instance = new switch_value(switch_props());
						create_component(switch_instance.$$.fragment);
						transition_in(switch_instance.$$.fragment, 1);
						mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
					} else {
						switch_instance = null;
					}
				} else if (switch_value) {
					switch_instance.$set(switch_instance_changes);
				}
			},
			i: function intro(local) {
				if (current) return;
				if (switch_instance) transition_in(switch_instance.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				if (switch_instance) transition_out(switch_instance.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(switch_instance_anchor);
				if (switch_instance) destroy_component(switch_instance, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_1.name,
			type: "if",
			source: "(41:2) {#if component !== null}",
			ctx
		});

		return block;
	}

	function create_fragment$1(ctx) {
		let if_block_anchor;
		let current;
		let if_block = /*$activeRoute*/ ctx[3] !== null && /*$activeRoute*/ ctx[3].route === /*route*/ ctx[7] && create_if_block(ctx);

		const block = {
			c: function create() {
				if (if_block) if_block.c();
				if_block_anchor = empty();
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				if (if_block) if_block.m(target, anchor);
				insert_dev(target, if_block_anchor, anchor);
				current = true;
			},
			p: function update(ctx, [dirty]) {
				if (/*$activeRoute*/ ctx[3] !== null && /*$activeRoute*/ ctx[3].route === /*route*/ ctx[7]) {
					if (if_block) {
						if_block.p(ctx, dirty);

						if (dirty & /*$activeRoute*/ 8) {
							transition_in(if_block, 1);
						}
					} else {
						if_block = create_if_block(ctx);
						if_block.c();
						transition_in(if_block, 1);
						if_block.m(if_block_anchor.parentNode, if_block_anchor);
					}
				} else if (if_block) {
					group_outros();

					transition_out(if_block, 1, 1, () => {
						if_block = null;
					});

					check_outros();
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(if_block);
				current = true;
			},
			o: function outro(local) {
				transition_out(if_block);
				current = false;
			},
			d: function destroy(detaching) {
				if (if_block) if_block.d(detaching);
				if (detaching) detach_dev(if_block_anchor);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$1.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$1($$self, $$props, $$invalidate) {
		let $activeRoute;
		let $location;
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Route", slots, ['default']);
		let { path = "" } = $$props;
		let { component = null } = $$props;
		const { registerRoute, unregisterRoute, activeRoute } = getContext(ROUTER);
		validate_store(activeRoute, "activeRoute");
		component_subscribe($$self, activeRoute, value => $$invalidate(3, $activeRoute = value));
		const location = getContext(LOCATION);
		validate_store(location, "location");
		component_subscribe($$self, location, value => $$invalidate(4, $location = value));

		const route = {
			path,
			// If no path prop is given, this Route will act as the default Route
			// that is rendered if no other Route in the Router is a match.
			default: path === ""
		};

		let routeParams = {};
		let routeProps = {};
		registerRoute(route);

		// There is no need to unregister Routes in SSR since it will all be
		// thrown away anyway.
		if (typeof window !== "undefined") {
			onDestroy(() => {
				unregisterRoute(route);
			});
		}

		$$self.$$set = $$new_props => {
			$$invalidate(13, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
			if ("path" in $$new_props) $$invalidate(8, path = $$new_props.path);
			if ("component" in $$new_props) $$invalidate(0, component = $$new_props.component);
			if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
		};

		$$self.$capture_state = () => ({
			getContext,
			onDestroy,
			ROUTER,
			LOCATION,
			path,
			component,
			registerRoute,
			unregisterRoute,
			activeRoute,
			location,
			route,
			routeParams,
			routeProps,
			$activeRoute,
			$location
		});

		$$self.$inject_state = $$new_props => {
			$$invalidate(13, $$props = assign(assign({}, $$props), $$new_props));
			if ("path" in $$props) $$invalidate(8, path = $$new_props.path);
			if ("component" in $$props) $$invalidate(0, component = $$new_props.component);
			if ("routeParams" in $$props) $$invalidate(1, routeParams = $$new_props.routeParams);
			if ("routeProps" in $$props) $$invalidate(2, routeProps = $$new_props.routeProps);
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*$activeRoute*/ 8) {
				 if ($activeRoute && $activeRoute.route === route) {
					$$invalidate(1, routeParams = $activeRoute.params);
				}
			}

			 {
				const { path, component, ...rest } = $$props;
				$$invalidate(2, routeProps = rest);
			}
		};

		$$props = exclude_internal_props($$props);

		return [
			component,
			routeParams,
			routeProps,
			$activeRoute,
			$location,
			activeRoute,
			location,
			route,
			path,
			$$scope,
			slots
		];
	}

	class Route extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$1, create_fragment$1, safe_not_equal, { path: 8, component: 0 });

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Route",
				options,
				id: create_fragment$1.name
			});
		}

		get path() {
			throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set path(value) {
			throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		get component() {
			throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set component(value) {
			throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}
	}

	/* node_modules/.pnpm/svelte-routing@1.4.2_svelte@3.29.7/node_modules/svelte-routing/src/Link.svelte generated by Svelte v3.29.7 */
	const file = "node_modules/.pnpm/svelte-routing@1.4.2_svelte@3.29.7/node_modules/svelte-routing/src/Link.svelte";

	function create_fragment$2(ctx) {
		let a;
		let current;
		let mounted;
		let dispose;
		const default_slot_template = /*#slots*/ ctx[11].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

		let a_levels = [
			{ href: /*href*/ ctx[0] },
			{ "aria-current": /*ariaCurrent*/ ctx[2] },
			/*props*/ ctx[1]
		];

		let a_data = {};

		for (let i = 0; i < a_levels.length; i += 1) {
			a_data = assign(a_data, a_levels[i]);
		}

		const block = {
			c: function create() {
				a = element("a");
				if (default_slot) default_slot.c();
				set_attributes(a, a_data);
				add_location(a, file, 40, 0, 1249);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, a, anchor);

				if (default_slot) {
					default_slot.m(a, null);
				}

				current = true;

				if (!mounted) {
					dispose = listen_dev(a, "click", /*onClick*/ ctx[5], false, false, false);
					mounted = true;
				}
			},
			p: function update(ctx, [dirty]) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope*/ 1024) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
					}
				}

				set_attributes(a, a_data = get_spread_update(a_levels, [
					(!current || dirty & /*href*/ 1) && { href: /*href*/ ctx[0] },
					(!current || dirty & /*ariaCurrent*/ 4) && { "aria-current": /*ariaCurrent*/ ctx[2] },
					dirty & /*props*/ 2 && /*props*/ ctx[1]
				]));
			},
			i: function intro(local) {
				if (current) return;
				transition_in(default_slot, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(default_slot, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(a);
				if (default_slot) default_slot.d(detaching);
				mounted = false;
				dispose();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$2.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$2($$self, $$props, $$invalidate) {
		let $base;
		let $location;
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Link", slots, ['default']);
		let { to = "#" } = $$props;
		let { replace = false } = $$props;
		let { state = {} } = $$props;
		let { getProps = () => ({}) } = $$props;
		const { base } = getContext(ROUTER);
		validate_store(base, "base");
		component_subscribe($$self, base, value => $$invalidate(14, $base = value));
		const location = getContext(LOCATION);
		validate_store(location, "location");
		component_subscribe($$self, location, value => $$invalidate(15, $location = value));
		const dispatch = createEventDispatcher();
		let href, isPartiallyCurrent, isCurrent, props;

		function onClick(event) {
			dispatch("click", event);

			if (shouldNavigate(event)) {
				event.preventDefault();

				// Don't push another entry to the history stack when the user
				// clicks on a Link to the page they are currently on.
				const shouldReplace = $location.pathname === href || replace;

				navigate(href, { state, replace: shouldReplace });
			}
		}

		const writable_props = ["to", "replace", "state", "getProps"];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Link> was created with unknown prop '${key}'`);
		});

		$$self.$$set = $$props => {
			if ("to" in $$props) $$invalidate(6, to = $$props.to);
			if ("replace" in $$props) $$invalidate(7, replace = $$props.replace);
			if ("state" in $$props) $$invalidate(8, state = $$props.state);
			if ("getProps" in $$props) $$invalidate(9, getProps = $$props.getProps);
			if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
		};

		$$self.$capture_state = () => ({
			getContext,
			createEventDispatcher,
			ROUTER,
			LOCATION,
			navigate,
			startsWith,
			resolve,
			shouldNavigate,
			to,
			replace,
			state,
			getProps,
			base,
			location,
			dispatch,
			href,
			isPartiallyCurrent,
			isCurrent,
			props,
			onClick,
			$base,
			$location,
			ariaCurrent
		});

		$$self.$inject_state = $$props => {
			if ("to" in $$props) $$invalidate(6, to = $$props.to);
			if ("replace" in $$props) $$invalidate(7, replace = $$props.replace);
			if ("state" in $$props) $$invalidate(8, state = $$props.state);
			if ("getProps" in $$props) $$invalidate(9, getProps = $$props.getProps);
			if ("href" in $$props) $$invalidate(0, href = $$props.href);
			if ("isPartiallyCurrent" in $$props) $$invalidate(12, isPartiallyCurrent = $$props.isPartiallyCurrent);
			if ("isCurrent" in $$props) $$invalidate(13, isCurrent = $$props.isCurrent);
			if ("props" in $$props) $$invalidate(1, props = $$props.props);
			if ("ariaCurrent" in $$props) $$invalidate(2, ariaCurrent = $$props.ariaCurrent);
		};

		let ariaCurrent;

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*to, $base*/ 16448) {
				 $$invalidate(0, href = to === "/" ? $base.uri : resolve(to, $base.uri));
			}

			if ($$self.$$.dirty & /*$location, href*/ 32769) {
				 $$invalidate(12, isPartiallyCurrent = startsWith($location.pathname, href));
			}

			if ($$self.$$.dirty & /*href, $location*/ 32769) {
				 $$invalidate(13, isCurrent = href === $location.pathname);
			}

			if ($$self.$$.dirty & /*isCurrent*/ 8192) {
				 $$invalidate(2, ariaCurrent = isCurrent ? "page" : undefined);
			}

			if ($$self.$$.dirty & /*getProps, $location, href, isPartiallyCurrent, isCurrent*/ 45569) {
				 $$invalidate(1, props = getProps({
					location: $location,
					href,
					isPartiallyCurrent,
					isCurrent
				}));
			}
		};

		return [
			href,
			props,
			ariaCurrent,
			base,
			location,
			onClick,
			to,
			replace,
			state,
			getProps,
			$$scope,
			slots
		];
	}

	class Link extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$2, create_fragment$2, safe_not_equal, { to: 6, replace: 7, state: 8, getProps: 9 });

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Link",
				options,
				id: create_fragment$2.name
			});
		}

		get to() {
			throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set to(value) {
			throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		get replace() {
			throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set replace(value) {
			throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		get state() {
			throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set state(value) {
			throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		get getProps() {
			throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set getProps(value) {
			throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}
	}

	/* src/routes/Home.svelte generated by Svelte v3.29.7 */

	function create_fragment$3(ctx) {
		const block = {
			c: noop,
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: noop,
			p: noop,
			i: noop,
			o: noop,
			d: noop
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$3.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$3($$self, $$props) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Home", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Home> was created with unknown prop '${key}'`);
		});

		return [];
	}

	class Home extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Home",
				options,
				id: create_fragment$3.name
			});
		}
	}

	/* src/routes/About.svelte generated by Svelte v3.29.7 */

	const file$1 = "src/routes/About.svelte";

	function create_fragment$4(ctx) {
		let main;
		let h2;
		let t1;
		let p0;
		let t2;
		let a0;
		let t4;
		let a1;
		let t6;
		let a2;
		let t8;
		let t9;
		let p1;
		let t11;
		let p2;
		let t12;
		let a3;
		let t14;
		let t15;
		let p3;
		let t16;
		let a4;
		let t18;

		const block = {
			c: function create() {
				main = element("main");
				h2 = element("h2");
				h2.textContent = "About this site";
				t1 = space();
				p0 = element("p");
				t2 = text("This website is a ");
				a0 = element("a");
				a0.textContent = "single-spa";
				t4 = text(" adaptation of the website created by ");
				a1 = element("a");
				a1.textContent = "Cam Jackson";
				t6 = text(" to demonstrate just one way that micro frontends can be implemented using ");
				a2 = element("a");
				a2.textContent = "Svelte";
				t8 = text(".");
				t9 = space();
				p1 = element("p");
				p1.textContent = "Micro frontends is an architectural style where independently deliverable frontend applications are composed into a greater whole. It's useful for breaking up monolithic frontend codebases into smaller, simpler applications that can be delivered to production by multiple teams independently.";
				t11 = space();
				p2 = element("p");
				t12 = text("To read more about the technique, including a full explanation of how the code for this demo works, check out the ");
				a3 = element("a");
				a3.textContent = "long-form article that Cam wrote for martinfowler.com";
				t14 = text(".");
				t15 = space();
				p3 = element("p");
				t16 = text("If you just want to read the source code for yourself, it's all available on Github at ");
				a4 = element("a");
				a4.textContent = "https://github.com/svelte-micro-frontends";
				t18 = text(".");
				add_location(h2, file$1, 1, 2, 20);
				attr_dev(a0, "href", "https://single-spa.js.org");
				add_location(a0, file$1, 2, 23, 68);
				attr_dev(a1, "href", "https://twitter.com/thecamjackson");
				add_location(a1, file$1, 2, 111, 156);
				attr_dev(a2, "href", "https://svelte.dev");
				add_location(a2, file$1, 2, 245, 290);
				add_location(p0, file$1, 2, 2, 47);
				add_location(p1, file$1, 3, 2, 337);
				attr_dev(a3, "href", "https://martinfowler.com/articles/micro-frontends.html");
				add_location(a3, file$1, 4, 119, 756);
				add_location(p2, file$1, 4, 2, 639);
				attr_dev(a4, "href", "https://github.com/svelte-micro-frontends");
				add_location(a4, file$1, 6, 92, 979);
				add_location(p3, file$1, 6, 2, 889);
				attr_dev(main, "id", "about");
				attr_dev(main, "class", "svelte-171asvm");
				add_location(main, file$1, 0, 0, 0);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, main, anchor);
				append_dev(main, h2);
				append_dev(main, t1);
				append_dev(main, p0);
				append_dev(p0, t2);
				append_dev(p0, a0);
				append_dev(p0, t4);
				append_dev(p0, a1);
				append_dev(p0, t6);
				append_dev(p0, a2);
				append_dev(p0, t8);
				append_dev(main, t9);
				append_dev(main, p1);
				append_dev(main, t11);
				append_dev(main, p2);
				append_dev(p2, t12);
				append_dev(p2, a3);
				append_dev(p2, t14);
				append_dev(main, t15);
				append_dev(main, p3);
				append_dev(p3, t16);
				append_dev(p3, a4);
				append_dev(p3, t18);
			},
			p: noop,
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(main);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$4.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$4($$self, $$props) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("About", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
		});

		return [];
	}

	class About extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "About",
				options,
				id: create_fragment$4.name
			});
		}
	}

	/* src/routes/Restaurants.svelte generated by Svelte v3.29.7 */

	function create_fragment$5(ctx) {
		const block = {
			c: noop,
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: noop,
			p: noop,
			i: noop,
			o: noop,
			d: noop
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$5.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$5($$self, $$props) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Restaurants", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Restaurants> was created with unknown prop '${key}'`);
		});

		return [];
	}

	class Restaurants extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Restaurants",
				options,
				id: create_fragment$5.name
			});
		}
	}

	/* src/routes/Order.svelte generated by Svelte v3.29.7 */

	function create_fragment$6(ctx) {
		const block = {
			c: noop,
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: noop,
			p: noop,
			i: noop,
			o: noop,
			d: noop
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$6.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$6($$self, $$props) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Order", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Order> was created with unknown prop '${key}'`);
		});

		return [];
	}

	class Order extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Order",
				options,
				id: create_fragment$6.name
			});
		}
	}

	/* src/App.svelte generated by Svelte v3.29.7 */
	const file$2 = "src/App.svelte";

	// (23:10) <Link to="/restaurants">
	function create_default_slot_4(ctx) {
		let t;

		const block = {
			c: function create() {
				t = text("Browse restaurants");
			},
			m: function mount(target, anchor) {
				insert_dev(target, t, anchor);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(t);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot_4.name,
			type: "slot",
			source: "(23:10) <Link to=\\\"/restaurants\\\">",
			ctx
		});

		return block;
	}

	// (26:10) <Link to="/order/{getRandomInt(8)}">
	function create_default_slot_3(ctx) {
		let t;

		const block = {
			c: function create() {
				t = text("Surprise Me");
			},
			m: function mount(target, anchor) {
				insert_dev(target, t, anchor);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(t);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot_3.name,
			type: "slot",
			source: "(26:10) <Link to=\\\"/order/{getRandomInt(8)}\\\">",
			ctx
		});

		return block;
	}

	// (29:10) <Link to="/about">
	function create_default_slot_2(ctx) {
		let t;

		const block = {
			c: function create() {
				t = text("About");
			},
			m: function mount(target, anchor) {
				insert_dev(target, t, anchor);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(t);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot_2.name,
			type: "slot",
			source: "(29:10) <Link to=\\\"/about\\\">",
			ctx
		});

		return block;
	}

	// (38:4) <Route path="/">
	function create_default_slot_1(ctx) {
		let home;
		let current;
		home = new Home({ $$inline: true });

		const block = {
			c: function create() {
				create_component(home.$$.fragment);
			},
			m: function mount(target, anchor) {
				mount_component(home, target, anchor);
				current = true;
			},
			i: function intro(local) {
				if (current) return;
				transition_in(home.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(home.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				destroy_component(home, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot_1.name,
			type: "slot",
			source: "(38:4) <Route path=\\\"/\\\">",
			ctx
		});

		return block;
	}

	// (15:0) <Router url="{url}">
	function create_default_slot(ctx) {
		let header;
		let div0;
		let h1;
		let t1;
		let nav;
		let ol;
		let li0;
		let link0;
		let t2;
		let li1;
		let link1;
		let t3;
		let li2;
		let link2;
		let t4;
		let div1;
		let route0;
		let t5;
		let route1;
		let t6;
		let route2;
		let t7;
		let route3;
		let current;

		link0 = new Link({
				props: {
					to: "/restaurants",
					$$slots: { default: [create_default_slot_4] },
					$$scope: { ctx }
				},
				$$inline: true
			});

		link1 = new Link({
				props: {
					to: "/order/" + getRandomInt(8),
					$$slots: { default: [create_default_slot_3] },
					$$scope: { ctx }
				},
				$$inline: true
			});

		link2 = new Link({
				props: {
					to: "/about",
					$$slots: { default: [create_default_slot_2] },
					$$scope: { ctx }
				},
				$$inline: true
			});

		route0 = new Route({
				props: {
					path: "restaurants",
					component: Restaurants
				},
				$$inline: true
			});

		route1 = new Route({
				props: { path: "about", component: About },
				$$inline: true
			});

		route2 = new Route({
				props: { path: "order", component: Order },
				$$inline: true
			});

		route3 = new Route({
				props: {
					path: "/",
					$$slots: { default: [create_default_slot_1] },
					$$scope: { ctx }
				},
				$$inline: true
			});

		const block = {
			c: function create() {
				header = element("header");
				div0 = element("div");
				h1 = element("h1");
				h1.textContent = "🍽 Feed me";
				t1 = space();
				nav = element("nav");
				ol = element("ol");
				li0 = element("li");
				create_component(link0.$$.fragment);
				t2 = space();
				li1 = element("li");
				create_component(link1.$$.fragment);
				t3 = space();
				li2 = element("li");
				create_component(link2.$$.fragment);
				t4 = space();
				div1 = element("div");
				create_component(route0.$$.fragment);
				t5 = space();
				create_component(route1.$$.fragment);
				t6 = space();
				create_component(route2.$$.fragment);
				t7 = space();
				create_component(route3.$$.fragment);
				attr_dev(h1, "class", "svelte-1molj3y");
				add_location(h1, file$2, 17, 6, 450);
				attr_dev(div0, "class", "center-column svelte-1molj3y");
				add_location(div0, file$2, 16, 4, 416);
				attr_dev(li0, "class", "svelte-1molj3y");
				add_location(li0, file$2, 21, 8, 532);
				attr_dev(li1, "class", "svelte-1molj3y");
				add_location(li1, file$2, 24, 8, 619);
				attr_dev(li2, "class", "svelte-1molj3y");
				add_location(li2, file$2, 27, 8, 711);
				attr_dev(ol, "class", "center-column svelte-1molj3y");
				add_location(ol, file$2, 20, 6, 497);
				attr_dev(nav, "class", "svelte-1molj3y");
				add_location(nav, file$2, 19, 4, 485);
				attr_dev(header, "class", "svelte-1molj3y");
				add_location(header, file$2, 15, 2, 403);
				add_location(div1, file$2, 33, 2, 808);
			},
			m: function mount(target, anchor) {
				insert_dev(target, header, anchor);
				append_dev(header, div0);
				append_dev(div0, h1);
				append_dev(header, t1);
				append_dev(header, nav);
				append_dev(nav, ol);
				append_dev(ol, li0);
				mount_component(link0, li0, null);
				append_dev(ol, t2);
				append_dev(ol, li1);
				mount_component(link1, li1, null);
				append_dev(ol, t3);
				append_dev(ol, li2);
				mount_component(link2, li2, null);
				insert_dev(target, t4, anchor);
				insert_dev(target, div1, anchor);
				mount_component(route0, div1, null);
				append_dev(div1, t5);
				mount_component(route1, div1, null);
				append_dev(div1, t6);
				mount_component(route2, div1, null);
				append_dev(div1, t7);
				mount_component(route3, div1, null);
				current = true;
			},
			p: function update(ctx, dirty) {
				const link0_changes = {};

				if (dirty & /*$$scope*/ 2) {
					link0_changes.$$scope = { dirty, ctx };
				}

				link0.$set(link0_changes);
				const link1_changes = {};

				if (dirty & /*$$scope*/ 2) {
					link1_changes.$$scope = { dirty, ctx };
				}

				link1.$set(link1_changes);
				const link2_changes = {};

				if (dirty & /*$$scope*/ 2) {
					link2_changes.$$scope = { dirty, ctx };
				}

				link2.$set(link2_changes);
				const route3_changes = {};

				if (dirty & /*$$scope*/ 2) {
					route3_changes.$$scope = { dirty, ctx };
				}

				route3.$set(route3_changes);
			},
			i: function intro(local) {
				if (current) return;
				transition_in(link0.$$.fragment, local);
				transition_in(link1.$$.fragment, local);
				transition_in(link2.$$.fragment, local);
				transition_in(route0.$$.fragment, local);
				transition_in(route1.$$.fragment, local);
				transition_in(route2.$$.fragment, local);
				transition_in(route3.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(link0.$$.fragment, local);
				transition_out(link1.$$.fragment, local);
				transition_out(link2.$$.fragment, local);
				transition_out(route0.$$.fragment, local);
				transition_out(route1.$$.fragment, local);
				transition_out(route2.$$.fragment, local);
				transition_out(route3.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(header);
				destroy_component(link0);
				destroy_component(link1);
				destroy_component(link2);
				if (detaching) detach_dev(t4);
				if (detaching) detach_dev(div1);
				destroy_component(route0);
				destroy_component(route1);
				destroy_component(route2);
				destroy_component(route3);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot.name,
			type: "slot",
			source: "(15:0) <Router url=\\\"{url}\\\">",
			ctx
		});

		return block;
	}

	function create_fragment$7(ctx) {
		let router;
		let current;

		router = new Router({
				props: {
					url: /*url*/ ctx[0],
					$$slots: { default: [create_default_slot] },
					$$scope: { ctx }
				},
				$$inline: true
			});

		const block = {
			c: function create() {
				create_component(router.$$.fragment);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				mount_component(router, target, anchor);
				current = true;
			},
			p: function update(ctx, [dirty]) {
				const router_changes = {};
				if (dirty & /*url*/ 1) router_changes.url = /*url*/ ctx[0];

				if (dirty & /*$$scope*/ 2) {
					router_changes.$$scope = { dirty, ctx };
				}

				router.$set(router_changes);
			},
			i: function intro(local) {
				if (current) return;
				transition_in(router.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(router.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				destroy_component(router, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$7.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	function instance$7($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("App", slots, []);
		let { url = "" } = $$props;
		const writable_props = ["url"];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
		});

		$$self.$$set = $$props => {
			if ("url" in $$props) $$invalidate(0, url = $$props.url);
		};

		$$self.$capture_state = () => ({
			Router,
			Link,
			Route,
			Home,
			About,
			Restaurants,
			Order,
			url,
			getRandomInt
		});

		$$self.$inject_state = $$props => {
			if ("url" in $$props) $$invalidate(0, url = $$props.url);
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		return [url];
	}

	class App extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$7, create_fragment$7, safe_not_equal, { url: 0 });

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "App",
				options,
				id: create_fragment$7.name
			});
		}

		get url() {
			throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}

		set url(value) {
			throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
		}
	}

	/*
	const app = new App({
		target: document.body,
		props: {
			name: 'world'
		}
	});

	export default app;
	*/

	const svelteLifecycles = singleSpaSvelte({
	  component: App,
	  domElementGetter: () => document.getElementById('single-spa-application:@feedme/container'),
	  props: { someData: 'data' }
	});
	const bootstrap = svelteLifecycles.bootstrap;
	const mount = svelteLifecycles.mount;
	const unmount = svelteLifecycles.unmount;

	exports.bootstrap = bootstrap;
	exports.mount = mount;
	exports.unmount = unmount;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}));
//# sourceMappingURL=bundle.js.map
