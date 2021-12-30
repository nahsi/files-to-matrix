function unimplemented(name) {
    throw new Error('Node.js process ' + name + ' is not supported by JSPM core outside of Node.js');
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = setTimeout(cleanUpNextTick, 0);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len){
            if (currentQueue) currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for(var i7 = 1; i7 < arguments.length; i7++)args[i7 - 1] = arguments[i7];
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) setTimeout(drainQueue, 0);
}
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var arch = 'x64';
var platform = 'browser';
var env = {
    PATH: '/usr/bin',
    LANG: navigator.language + '.UTF-8',
    PWD: '/',
    HOME: '/home',
    TMP: '/tmp'
};
var argv = [
    '/usr/bin/node'
];
var execArgv = [];
var version = 'v16.8.0';
var versions = {
};
var emitWarning = function(message, type1) {
    console.warn((type1 ? type1 + ': ' : '') + message);
};
var binding = function(name) {
    unimplemented('binding');
};
var umask = function(mask) {
    return 0;
};
var cwd = function() {
    return '/';
};
var chdir = function(dir) {
};
var release = {
    name: 'node',
    sourceUrl: '',
    headersUrl: '',
    libUrl: ''
};
function noop() {
}
var _rawDebug = noop;
var moduleLoadList = [];
function _linkedBinding(name) {
    unimplemented('_linkedBinding');
}
var domain = {
};
var _exiting = false;
var config = {
};
function dlopen(name) {
    unimplemented('dlopen');
}
function _getActiveRequests() {
    return [];
}
function _getActiveHandles() {
    return [];
}
var reallyExit = noop;
var _kill = noop;
var cpuUsage = function() {
    return {
    };
};
var resourceUsage = cpuUsage;
var memoryUsage = cpuUsage;
var kill = noop;
var exit = noop;
var openStdin = noop;
var allowedNodeEnvironmentFlags = {
};
function assert(condition, message) {
    if (!condition) throw new Error(message || 'assertion error');
}
var features = {
    inspector: false,
    debug: false,
    uv: false,
    ipv6: false,
    tls_alpn: false,
    tls_sni: false,
    tls_ocsp: false,
    tls: false,
    cached_builtins: true
};
var _fatalExceptions = noop;
var setUncaughtExceptionCaptureCallback = noop;
function hasUncaughtExceptionCaptureCallback() {
    return false;
}
var _tickCallback = noop;
var _debugProcess = noop;
var _debugEnd = noop;
var _startProfilerIdleNotifier = noop;
var _stopProfilerIdleNotifier = noop;
var stdout = undefined;
var stderr = undefined;
var stdin = undefined;
var abort = noop;
var pid = 2;
var ppid = 1;
var execPath = '/bin/usr/node';
var debugPort = 9229;
var argv0 = 'node';
var _preload_modules = [];
var setSourceMapsEnabled = noop;
var _performance = {
    now: typeof performance !== 'undefined' ? performance.now.bind(performance) : undefined,
    timing: typeof performance !== 'undefined' ? performance.timing : undefined
};
if (_performance.now === undefined) {
    var nowOffset = Date.now();
    if (_performance.timing && _performance.timing.navigationStart) {
        nowOffset = _performance.timing.navigationStart;
    }
    _performance.now = ()=>Date.now() - nowOffset
    ;
}
function uptime() {
    return _performance.now() / 1000;
}
var nanoPerSec = 1000000000;
function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - _performance.now()) * 0.001);
    var clocktime = _performance.now() * 0.001;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor(clocktime % 1 * 1000000000);
    if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds < 0) {
            seconds--;
            nanoseconds += nanoPerSec;
        }
    }
    return [
        seconds,
        nanoseconds
    ];
}
hrtime.bigint = function(time) {
    var diff = hrtime(time);
    if (typeof BigInt === 'undefined') {
        return diff[0] * nanoPerSec + diff[1];
    }
    return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
};
var _maxListeners = 10;
var _events = {
};
var _eventsCount = 0;
function on() {
    return process;
}
var addListener = on;
var once = on;
var off = on;
var removeListener = on;
var removeAllListeners = on;
var emit = noop;
var prependListener = on;
var prependOnceListener = on;
function listeners(name) {
    return [];
}
var process = {
    version,
    versions,
    arch,
    platform,
    release,
    _rawDebug,
    moduleLoadList,
    binding,
    _linkedBinding,
    _events,
    _eventsCount,
    _maxListeners,
    on,
    addListener,
    once,
    off,
    removeListener,
    removeAllListeners,
    emit,
    prependListener,
    prependOnceListener,
    listeners,
    domain,
    _exiting,
    config,
    dlopen,
    uptime,
    _getActiveRequests,
    _getActiveHandles,
    reallyExit,
    _kill,
    cpuUsage,
    resourceUsage,
    memoryUsage,
    kill,
    exit,
    openStdin,
    allowedNodeEnvironmentFlags,
    assert,
    features,
    _fatalExceptions,
    setUncaughtExceptionCaptureCallback,
    hasUncaughtExceptionCaptureCallback,
    emitWarning,
    nextTick,
    _tickCallback,
    _debugProcess,
    _debugEnd,
    _startProfilerIdleNotifier,
    _stopProfilerIdleNotifier,
    stdout,
    stdin,
    stderr,
    abort,
    umask,
    chdir,
    cwd,
    env,
    title,
    argv,
    execArgv,
    pid,
    ppid,
    execPath,
    debugPort,
    hrtime,
    argv0,
    _preload_modules,
    setSourceMapsEnabled
};
var exports = {
}, _dewExec = false;
function dew() {
    if (_dewExec) return exports;
    _dewExec = true;
    exports.endianness = function() {
        return "LE";
    };
    exports.hostname = function() {
        if (typeof location !== "undefined") {
            return location.hostname;
        } else return "";
    };
    exports.loadavg = function() {
        return [];
    };
    exports.uptime = function() {
        return 0;
    };
    exports.freemem = function() {
        return Number.MAX_VALUE;
    };
    exports.totalmem = function() {
        return Number.MAX_VALUE;
    };
    exports.cpus = function() {
        return [];
    };
    exports.type = function() {
        return "Browser";
    };
    exports.release = function() {
        if (typeof navigator !== "undefined") {
            return navigator.appVersion;
        }
        return "";
    };
    exports.networkInterfaces = exports.getNetworkInterfaces = function() {
        return {
        };
    };
    exports.arch = function() {
        return "javascript";
    };
    exports.platform = function() {
        return "browser";
    };
    exports.tmpdir = exports.tmpDir = function() {
        return "/tmp";
    };
    exports.EOL = "\n";
    exports.homedir = function() {
        return "/";
    };
    return exports;
}
var os = dew();
var _endianness = new Uint8Array(new Uint16Array([
    1
]).buffer)[0] === 1 ? 'LE' : 'BE';
os.endianness = function() {
    return _endianness;
};
os.homedir = function() {
    return '/home';
};
os.version = function() {
    return '';
};
os.arch = function() {
    return 'x64';
};
os.totalmem = function() {
    return navigator.deviceMemory !== undefined ? navigator.deviceMemory * (1 << 30) : 2 * (1 << 30);
};
os.cpus = function() {
    return Array(navigator.hardwareConcurrency || 0).fill({
        model: '',
        times: {
        }
    });
};
os.uptime = uptime;
os.constants = {
};
var version1 = os.version;
var constants = os.constants;
var EOL = os.EOL;
var arch1 = os.arch;
var cpus = os.cpus;
var endianness = os.endianness;
var freemem = os.freemem;
var getNetworkInterfaces = os.getNetworkInterfaces;
var homedir = os.homedir;
var hostname = os.hostname;
var loadavg = os.loadavg;
var networkInterfaces = os.networkInterfaces;
var platform1 = os.platform;
var release1 = os.release;
var tmpDir = os.tmpDir;
var tmpdir = os.tmpdir;
var totalmem = os.totalmem;
var type = os.type;
const mod = {
    default: os,
    uptime,
    EOL,
    arch: arch1,
    constants,
    cpus,
    endianness,
    freemem,
    getNetworkInterfaces,
    homedir,
    hostname,
    loadavg,
    networkInterfaces,
    platform: platform1,
    release: release1,
    tmpDir,
    tmpdir,
    totalmem,
    type,
    version: version1
};
var exports$1 = {
}, _dewExec$1 = false;
function dew$1() {
    if (_dewExec$1) return exports$1;
    _dewExec$1 = true;
    Object.defineProperty(exports$1, "__esModule", {
        value: true
    });
    exports$1.toCommandProperties = exports$1.toCommandValue = void 0;
    function toCommandValue(input) {
        if (input === null || input === undefined) {
            return "";
        } else if (typeof input === "string" || input instanceof String) {
            return input;
        }
        return JSON.stringify(input);
    }
    exports$1.toCommandValue = toCommandValue;
    function toCommandProperties(annotationProperties) {
        if (!Object.keys(annotationProperties).length) {
            return {
            };
        }
        return {
            title: annotationProperties.title,
            file: annotationProperties.file,
            line: annotationProperties.startLine,
            endLine: annotationProperties.endLine,
            col: annotationProperties.startColumn,
            endColumn: annotationProperties.endColumn
        };
    }
    exports$1.toCommandProperties = toCommandProperties;
    return exports$1;
}
var _os = "default" in mod ? mod.default : mod;
var exports1 = {
}, _dewExec1 = false;
function dew1() {
    if (_dewExec1) return exports1;
    _dewExec1 = true;
    var process4 = process;
    var __createBinding = exports1 && exports1.__createBinding || (Object.create ? function(o8, m5, k3, k2) {
        if (k2 === undefined) k2 = k3;
        Object.defineProperty(o8, k2, {
            enumerable: true,
            get: function() {
                return m5[k3];
            }
        });
    } : function(o9, m6, k4, k2) {
        if (k2 === undefined) k2 = k4;
        o9[k2] = m6[k4];
    });
    var __setModuleDefault = exports1 && exports1.__setModuleDefault || (Object.create ? function(o10, v5) {
        Object.defineProperty(o10, "default", {
            enumerable: true,
            value: v5
        });
    } : function(o11, v6) {
        o11["default"] = v6;
    });
    var __importStar = exports1 && exports1.__importStar || function(mod5) {
        if (mod5 && mod5.__esModule) return mod5;
        var result = {
        };
        if (mod5 != null) {
            for(var k5 in mod5)if (k5 !== "default" && Object.hasOwnProperty.call(mod5, k5)) __createBinding(result, mod5, k5);
        }
        __setModuleDefault(result, mod5);
        return result;
    };
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
    exports1.issue = exports1.issueCommand = void 0;
    const os1 = __importStar(_os);
    const utils_1 = dew$1();
    function issueCommand(command, properties, message) {
        const cmd = new Command(command, properties, message);
        process4.stdout.write(cmd.toString() + os1.EOL);
    }
    exports1.issueCommand = issueCommand;
    function issue(name, message = "") {
        issueCommand(name, {
        }, message);
    }
    exports1.issue = issue;
    const CMD_STRING = "::";
    class Command {
        constructor(command, properties, message){
            if (!command) {
                command = "missing.command";
            }
            this.command = command;
            this.properties = properties;
            this.message = message;
        }
        toString() {
            let cmdStr = CMD_STRING + this.command;
            if (this.properties && Object.keys(this.properties).length > 0) {
                cmdStr += " ";
                let first = true;
                for(const key in this.properties){
                    if (this.properties.hasOwnProperty(key)) {
                        const val = this.properties[key];
                        if (val) {
                            if (first) {
                                first = false;
                            } else {
                                cmdStr += ",";
                            }
                            cmdStr += `${key}=${escapeProperty(val)}`;
                        }
                    }
                }
            }
            cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
            return cmdStr;
        }
    }
    function escapeData(s6) {
        return utils_1.toCommandValue(s6).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
    }
    function escapeProperty(s7) {
        return utils_1.toCommandValue(s7).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
    }
    return exports1;
}
var e, t, n = "object" == typeof Reflect ? Reflect : null, r = n && "function" == typeof n.apply ? n.apply : function(e1, t1, n1) {
    return Function.prototype.apply.call(e1, t1, n1);
};
t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e2) {
    return Object.getOwnPropertyNames(e2).concat(Object.getOwnPropertySymbols(e2));
} : function(e3) {
    return Object.getOwnPropertyNames(e3);
};
var i = Number.isNaN || function(e4) {
    return e4 != e4;
};
function o() {
    o.init.call(this);
}
e = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
var s = 10;
function u(e5) {
    if ("function" != typeof e5) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e5);
}
function f(e6) {
    return void 0 === e6._maxListeners ? o.defaultMaxListeners : e6._maxListeners;
}
function v(e7, t2, n2, r1) {
    var i1, o1, s1, v1;
    if (u(n2), void 0 === (o1 = e7._events) ? (o1 = e7._events = Object.create(null), e7._eventsCount = 0) : (void 0 !== o1.newListener && (e7.emit("newListener", t2, n2.listener ? n2.listener : n2), o1 = e7._events), s1 = o1[t2]), void 0 === s1) s1 = o1[t2] = n2, ++e7._eventsCount;
    else if ("function" == typeof s1 ? s1 = o1[t2] = r1 ? [
        n2,
        s1
    ] : [
        s1,
        n2
    ] : r1 ? s1.unshift(n2) : s1.push(n2), (i1 = f(e7)) > 0 && s1.length > i1 && !s1.warned) {
        s1.warned = !0;
        var a1 = new Error("Possible EventEmitter memory leak detected. " + s1.length + " " + String(t2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        a1.name = "MaxListenersExceededWarning", a1.emitter = e7, a1.type = t2, a1.count = s1.length, v1 = a1, console && console.warn && console.warn(v1);
    }
    return e7;
}
function a() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function l(e8, t3, n3) {
    var r2 = {
        fired: !1,
        wrapFn: void 0,
        target: e8,
        type: t3,
        listener: n3
    }, i2 = a.bind(r2);
    return i2.listener = n3, r2.wrapFn = i2, i2;
}
function h(e9, t4, n4) {
    var r3 = e9._events;
    if (void 0 === r3) return [];
    var i3 = r3[t4];
    return void 0 === i3 ? [] : "function" == typeof i3 ? n4 ? [
        i3.listener || i3
    ] : [
        i3
    ] : n4 ? (function(e10) {
        for(var t5 = new Array(e10.length), n5 = 0; n5 < t5.length; ++n5)t5[n5] = e10[n5].listener || e10[n5];
        return t5;
    })(i3) : c(i3, i3.length);
}
function p(e) {
    var t6 = this._events;
    if (void 0 !== t6) {
        var n6 = t6[e];
        if ("function" == typeof n6) return 1;
        if (void 0 !== n6) return n6.length;
    }
    return 0;
}
function c(e11, t7) {
    for(var n7 = new Array(t7), r4 = 0; r4 < t7; ++r4)n7[r4] = e11[r4];
    return n7;
}
Object.defineProperty(o, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return s;
    },
    set: function(e12) {
        if ("number" != typeof e12 || e12 < 0 || i(e12)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e12 + ".");
        s = e12;
    }
}), o.init = function() {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, o.prototype.setMaxListeners = function(e13) {
    if ("number" != typeof e13 || e13 < 0 || i(e13)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e13 + ".");
    return this._maxListeners = e13, this;
}, o.prototype.getMaxListeners = function() {
    return f(this);
}, o.prototype.emit = function(e14) {
    for(var t8 = [], n8 = 1; n8 < arguments.length; n8++)t8.push(arguments[n8]);
    var i4 = "error" === e14, o2 = this._events;
    if (void 0 !== o2) i4 = i4 && void 0 === o2.error;
    else if (!i4) return !1;
    if (i4) {
        var s2;
        if (t8.length > 0 && (s2 = t8[0]), s2 instanceof Error) throw s2;
        var u1 = new Error("Unhandled error." + (s2 ? " (" + s2.message + ")" : ""));
        throw u1.context = s2, u1;
    }
    var f1 = o2[e14];
    if (void 0 === f1) return !1;
    if ("function" == typeof f1) r(f1, this, t8);
    else {
        var v2 = f1.length, a2 = c(f1, v2);
        for(n8 = 0; n8 < v2; ++n8)r(a2[n8], this, t8);
    }
    return !0;
}, o.prototype.addListener = function(e15, t9) {
    return v(this, e15, t9, !1);
}, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e16, t10) {
    return v(this, e16, t10, !0);
}, o.prototype.once = function(e17, t11) {
    return u(t11), this.on(e17, l(this, e17, t11)), this;
}, o.prototype.prependOnceListener = function(e18, t12) {
    return u(t12), this.prependListener(e18, l(this, e18, t12)), this;
}, o.prototype.removeListener = function(e19, t13) {
    var n9, r5, i5, o3, s3;
    if (u(t13), void 0 === (r5 = this._events)) return this;
    if (void 0 === (n9 = r5[e19])) return this;
    if (n9 === t13 || n9.listener === t13) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r5[e19], r5.removeListener && this.emit("removeListener", e19, n9.listener || t13));
    else if ("function" != typeof n9) {
        for(i5 = -1, o3 = n9.length - 1; o3 >= 0; o3--)if (n9[o3] === t13 || n9[o3].listener === t13) {
            s3 = n9[o3].listener, i5 = o3;
            break;
        }
        if (i5 < 0) return this;
        0 === i5 ? n9.shift() : !function(e20, t14) {
            for(; t14 + 1 < e20.length; t14++)e20[t14] = e20[t14 + 1];
            e20.pop();
        }(n9, i5), 1 === n9.length && (r5[e19] = n9[0]), void 0 !== r5.removeListener && this.emit("removeListener", e19, s3 || t13);
    }
    return this;
}, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e21) {
    var t15, n10, r6;
    if (void 0 === (n10 = this._events)) return this;
    if (void 0 === n10.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n10[e21] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n10[e21]), this;
    if (0 === arguments.length) {
        var i6, o4 = Object.keys(n10);
        for(r6 = 0; r6 < o4.length; ++r6)"removeListener" !== (i6 = o4[r6]) && this.removeAllListeners(i6);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if ("function" == typeof (t15 = n10[e21])) this.removeListener(e21, t15);
    else if (void 0 !== t15) for(r6 = t15.length - 1; r6 >= 0; r6--)this.removeListener(e21, t15[r6]);
    return this;
}, o.prototype.listeners = function(e22) {
    return h(this, e22, !0);
}, o.prototype.rawListeners = function(e23) {
    return h(this, e23, !1);
}, o.listenerCount = function(e24, t16) {
    return "function" == typeof e24.listenerCount ? e24.listenerCount(t16) : p.call(e24, t16);
}, o.prototype.listenerCount = p, o.prototype.eventNames = function() {
    return this._eventsCount > 0 ? t(this._events) : [];
};
var y = e;
y.EventEmitter;
y.defaultMaxListeners;
y.init;
y.listenerCount;
y.EventEmitter;
y.defaultMaxListeners;
y.init;
y.listenerCount;
var e1, t1, n1, r1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global, o1 = e1 = {
};
function i1() {
    throw new Error("setTimeout has not been defined");
}
function u1() {
    throw new Error("clearTimeout has not been defined");
}
function c1(e11) {
    if (t1 === setTimeout) return setTimeout(e11, 0);
    if ((t1 === i1 || !t1) && setTimeout) return t1 = setTimeout, setTimeout(e11, 0);
    try {
        return t1(e11, 0);
    } catch (n) {
        try {
            return t1.call(null, e11, 0);
        } catch (n) {
            return t1.call(this || r1, e11, 0);
        }
    }
}
!function() {
    try {
        t1 = "function" == typeof setTimeout ? setTimeout : i1;
    } catch (e) {
        t1 = i1;
    }
    try {
        n1 = "function" == typeof clearTimeout ? clearTimeout : u1;
    } catch (e2) {
        n1 = u1;
    }
}();
var l1, s1 = [], f1 = !1, a1 = -1;
function h1() {
    f1 && l1 && (f1 = !1, l1.length ? s1 = l1.concat(s1) : a1 = -1, s1.length && d());
}
function d() {
    if (!f1) {
        var e3 = c1(h1);
        f1 = !0;
        for(var t11 = s1.length; t11;){
            for(l1 = s1, s1 = []; ++a1 < t11;)l1 && l1[a1].run();
            a1 = -1, t11 = s1.length;
        }
        l1 = null, f1 = !1, (function(e4) {
            if (n1 === clearTimeout) return clearTimeout(e4);
            if ((n1 === u1 || !n1) && clearTimeout) return n1 = clearTimeout, clearTimeout(e4);
            try {
                n1(e4);
            } catch (t) {
                try {
                    return n1.call(null, e4);
                } catch (t) {
                    return n1.call(this || r1, e4);
                }
            }
        })(e3);
    }
}
function m(e5, t2) {
    (this || r1).fun = e5, (this || r1).array = t2;
}
function p1() {
}
o1.nextTick = function(e6) {
    var t3 = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var n11 = 1; n11 < arguments.length; n11++)t3[n11 - 1] = arguments[n11];
    s1.push(new m(e6, t3)), 1 !== s1.length || f1 || c1(d);
}, m.prototype.run = function() {
    (this || r1).fun.apply(null, (this || r1).array);
}, o1.title = "browser", o1.browser = !0, o1.env = {
}, o1.argv = [], o1.version = "", o1.versions = {
}, o1.on = p1, o1.addListener = p1, o1.once = p1, o1.off = p1, o1.removeListener = p1, o1.removeAllListeners = p1, o1.emit = p1, o1.prependListener = p1, o1.prependOnceListener = p1, o1.listeners = function(e) {
    return [];
}, o1.binding = function(e) {
    throw new Error("process.binding is not supported");
}, o1.cwd = function() {
    return "/";
}, o1.chdir = function(e) {
    throw new Error("process.chdir is not supported");
}, o1.umask = function() {
    return 0;
};
var T = e1;
T.addListener;
T.argv;
T.binding;
T.browser;
T.chdir;
T.cwd;
T.emit;
T.env;
T.listeners;
T.nextTick;
T.off;
T.on;
T.once;
T.prependListener;
T.prependOnceListener;
T.removeAllListeners;
T.removeListener;
T.title;
T.umask;
T.version;
T.versions;
var t2 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, e2 = Object.prototype.toString, o2 = function(o12) {
    return !(t2 && o12 && "object" == typeof o12 && Symbol.toStringTag in o12) && "[object Arguments]" === e2.call(o12);
}, n2 = function(t12) {
    return !!o2(t12) || null !== t12 && "object" == typeof t12 && "number" == typeof t12.length && t12.length >= 0 && "[object Array]" !== e2.call(t12) && "[object Function]" === e2.call(t12.callee);
}, r2 = function() {
    return o2(arguments);
}();
o2.isLegacyArguments = n2;
var l2 = r2 ? o2 : n2;
var t$1 = Object.prototype.toString, o$1 = Function.prototype.toString, n$1 = /^\s*(?:function)?\*/, e$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, r$1 = Object.getPrototypeOf, c2 = function() {
    if (!e$1) return !1;
    try {
        return Function("return function*() {}")();
    } catch (t) {
    }
}(), u2 = c2 ? r$1(c2) : {
}, i2 = function(c11) {
    return "function" == typeof c11 && (!!n$1.test(o$1.call(c11)) || (e$1 ? r$1(c11) === u2 : "[object GeneratorFunction]" === t$1.call(c11)));
};
var t$2 = "function" == typeof Object.create ? function(t21, e12) {
    e12 && (t21.super_ = e12, t21.prototype = Object.create(e12.prototype, {
        constructor: {
            value: t21,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }));
} : function(t3, e21) {
    if (e21) {
        t3.super_ = e21;
        var o21 = function() {
        };
        o21.prototype = e21.prototype, t3.prototype = new o21, t3.prototype.constructor = t3;
    }
};
var i$1 = function(e3) {
    return e3 && "object" == typeof e3 && "function" == typeof e3.copy && "function" == typeof e3.fill && "function" == typeof e3.readUInt8;
}, o$2 = {
}, u$1 = i$1, f2 = l2, a2 = i2;
function c$1(e4) {
    return e4.call.bind(e4);
}
var s2 = "undefined" != typeof BigInt, p2 = "undefined" != typeof Symbol, y1 = p2 && void 0 !== Symbol.toStringTag, l$1 = "undefined" != typeof Uint8Array, d1 = "undefined" != typeof ArrayBuffer;
if (l$1 && y1) var g = Object.getPrototypeOf(Uint8Array.prototype), b = c$1(Object.getOwnPropertyDescriptor(g, Symbol.toStringTag).get);
var m1 = c$1(Object.prototype.toString), h2 = c$1(Number.prototype.valueOf), j = c$1(String.prototype.valueOf), A = c$1(Boolean.prototype.valueOf);
if (s2) var w = c$1(BigInt.prototype.valueOf);
if (p2) var v1 = c$1(Symbol.prototype.valueOf);
function O(e5, t4) {
    if ("object" != typeof e5) return !1;
    try {
        return t4(e5), !0;
    } catch (e) {
        return !1;
    }
}
function S(e6) {
    return l$1 && y1 ? void 0 !== b(e6) : B(e6) || k(e6) || E(e6) || D(e6) || U(e6) || P(e6) || x(e6) || I(e6) || M(e6) || z(e6) || F(e6);
}
function B(e7) {
    return l$1 && y1 ? "Uint8Array" === b(e7) : "[object Uint8Array]" === m1(e7) || u$1(e7) && void 0 !== e7.buffer;
}
function k(e8) {
    return l$1 && y1 ? "Uint8ClampedArray" === b(e8) : "[object Uint8ClampedArray]" === m1(e8);
}
function E(e9) {
    return l$1 && y1 ? "Uint16Array" === b(e9) : "[object Uint16Array]" === m1(e9);
}
function D(e10) {
    return l$1 && y1 ? "Uint32Array" === b(e10) : "[object Uint32Array]" === m1(e10);
}
function U(e11) {
    return l$1 && y1 ? "Int8Array" === b(e11) : "[object Int8Array]" === m1(e11);
}
function P(e12) {
    return l$1 && y1 ? "Int16Array" === b(e12) : "[object Int16Array]" === m1(e12);
}
function x(e13) {
    return l$1 && y1 ? "Int32Array" === b(e13) : "[object Int32Array]" === m1(e13);
}
function I(e14) {
    return l$1 && y1 ? "Float32Array" === b(e14) : "[object Float32Array]" === m1(e14);
}
function M(e15) {
    return l$1 && y1 ? "Float64Array" === b(e15) : "[object Float64Array]" === m1(e15);
}
function z(e16) {
    return l$1 && y1 ? "BigInt64Array" === b(e16) : "[object BigInt64Array]" === m1(e16);
}
function F(e17) {
    return l$1 && y1 ? "BigUint64Array" === b(e17) : "[object BigUint64Array]" === m1(e17);
}
function T1(e18) {
    return "[object Map]" === m1(e18);
}
function N(e19) {
    return "[object Set]" === m1(e19);
}
function W(e20) {
    return "[object WeakMap]" === m1(e20);
}
function $(e21) {
    return "[object WeakSet]" === m1(e21);
}
function C(e22) {
    return "[object ArrayBuffer]" === m1(e22);
}
function V(e23) {
    return "undefined" != typeof ArrayBuffer && (C.working ? C(e23) : e23 instanceof ArrayBuffer);
}
function G(e24) {
    return "[object DataView]" === m1(e24);
}
function R(e25) {
    return "undefined" != typeof DataView && (G.working ? G(e25) : e25 instanceof DataView);
}
function J(e26) {
    return "[object SharedArrayBuffer]" === m1(e26);
}
function _(e27) {
    return "undefined" != typeof SharedArrayBuffer && (J.working ? J(e27) : e27 instanceof SharedArrayBuffer);
}
function H(e28) {
    return O(e28, h2);
}
function Z(e29) {
    return O(e29, j);
}
function q(e30) {
    return O(e30, A);
}
function K(e31) {
    return s2 && O(e31, w);
}
function L(e32) {
    return p2 && O(e32, v1);
}
o$2.isArgumentsObject = f2, o$2.isGeneratorFunction = a2, o$2.isPromise = function(e33) {
    return "undefined" != typeof Promise && e33 instanceof Promise || null !== e33 && "object" == typeof e33 && "function" == typeof e33.then && "function" == typeof e33.catch;
}, o$2.isArrayBufferView = function(e34) {
    return d1 && ArrayBuffer.isView ? ArrayBuffer.isView(e34) : S(e34) || R(e34);
}, o$2.isTypedArray = S, o$2.isUint8Array = B, o$2.isUint8ClampedArray = k, o$2.isUint16Array = E, o$2.isUint32Array = D, o$2.isInt8Array = U, o$2.isInt16Array = P, o$2.isInt32Array = x, o$2.isFloat32Array = I, o$2.isFloat64Array = M, o$2.isBigInt64Array = z, o$2.isBigUint64Array = F, T1.working = "undefined" != typeof Map && T1(new Map), o$2.isMap = function(e35) {
    return "undefined" != typeof Map && (T1.working ? T1(e35) : e35 instanceof Map);
}, N.working = "undefined" != typeof Set && N(new Set), o$2.isSet = function(e36) {
    return "undefined" != typeof Set && (N.working ? N(e36) : e36 instanceof Set);
}, W.working = "undefined" != typeof WeakMap && W(new WeakMap), o$2.isWeakMap = function(e37) {
    return "undefined" != typeof WeakMap && (W.working ? W(e37) : e37 instanceof WeakMap);
}, $.working = "undefined" != typeof WeakSet && $(new WeakSet), o$2.isWeakSet = function(e38) {
    return $(e38);
}, C.working = "undefined" != typeof ArrayBuffer && C(new ArrayBuffer), o$2.isArrayBuffer = V, G.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && G(new DataView(new ArrayBuffer(1), 0, 1)), o$2.isDataView = R, J.working = "undefined" != typeof SharedArrayBuffer && J(new SharedArrayBuffer), o$2.isSharedArrayBuffer = _, o$2.isAsyncFunction = function(e39) {
    return "[object AsyncFunction]" === m1(e39);
}, o$2.isMapIterator = function(e40) {
    return "[object Map Iterator]" === m1(e40);
}, o$2.isSetIterator = function(e41) {
    return "[object Set Iterator]" === m1(e41);
}, o$2.isGeneratorObject = function(e42) {
    return "[object Generator]" === m1(e42);
}, o$2.isWebAssemblyCompiledModule = function(e43) {
    return "[object WebAssembly.Module]" === m1(e43);
}, o$2.isNumberObject = H, o$2.isStringObject = Z, o$2.isBooleanObject = q, o$2.isBigIntObject = K, o$2.isSymbolObject = L, o$2.isBoxedPrimitive = function(e44) {
    return H(e44) || Z(e44) || q(e44) || K(e44) || L(e44);
}, o$2.isAnyArrayBuffer = function(e45) {
    return l$1 && (V(e45) || _(e45));
}, [
    "isProxy",
    "isExternal",
    "isModuleNamespaceObject"
].forEach(function(e46) {
    Object.defineProperty(o$2, e46, {
        enumerable: !1,
        value: function() {
            throw new Error(e46 + " is not supported in userland");
        }
    });
});
var Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global, X = {
}, Y = T, ee = Object.getOwnPropertyDescriptors || function(e47) {
    for(var t5 = Object.keys(e47), r11 = {
    }, n12 = 0; n12 < t5.length; n12++)r11[t5[n12]] = Object.getOwnPropertyDescriptor(e47, t5[n12]);
    return r11;
}, te = /%[sdj%]/g;
X.format = function(e48) {
    if (!ge(e48)) {
        for(var t6 = [], r21 = 0; r21 < arguments.length; r21++)t6.push(oe(arguments[r21]));
        return t6.join(" ");
    }
    r21 = 1;
    for(var n21 = arguments, i11 = n21.length, o3 = String(e48).replace(te, function(e49) {
        if ("%%" === e49) return "%";
        if (r21 >= i11) return e49;
        switch(e49){
            case "%s":
                return String(n21[r21++]);
            case "%d":
                return Number(n21[r21++]);
            case "%j":
                try {
                    return JSON.stringify(n21[r21++]);
                } catch (e) {
                    return "[Circular]";
                }
            default:
                return e49;
        }
    }), u11 = n21[r21]; r21 < i11; u11 = n21[++r21])le(u11) || !he(u11) ? o3 += " " + u11 : o3 += " " + oe(u11);
    return o3;
}, X.deprecate = function(e50, t7) {
    if (void 0 !== Y && !0 === Y.noDeprecation) return e50;
    if (void 0 === Y) return function() {
        return X.deprecate(e50, t7).apply(this || Q, arguments);
    };
    var r3 = !1;
    return function() {
        if (!r3) {
            if (Y.throwDeprecation) throw new Error(t7);
            Y.traceDeprecation ? console.trace(t7) : console.error(t7), r3 = !0;
        }
        return e50.apply(this || Q, arguments);
    };
};
var re = {
}, ne = /^$/;
if (Y.env.NODE_DEBUG) {
    var ie = Y.env.NODE_DEBUG;
    ie = ie.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ne = new RegExp("^" + ie + "$", "i");
}
function oe(e51, t8) {
    var r4 = {
        seen: [],
        stylize: fe
    };
    return arguments.length >= 3 && (r4.depth = arguments[2]), arguments.length >= 4 && (r4.colors = arguments[3]), ye(t8) ? r4.showHidden = t8 : t8 && X._extend(r4, t8), be(r4.showHidden) && (r4.showHidden = !1), be(r4.depth) && (r4.depth = 2), be(r4.colors) && (r4.colors = !1), be(r4.customInspect) && (r4.customInspect = !0), r4.colors && (r4.stylize = ue), ae(r4, e51, r4.depth);
}
function ue(e52, t) {
    var r5 = oe.styles[t];
    return r5 ? "[" + oe.colors[r5][0] + "m" + e52 + "[" + oe.colors[r5][1] + "m" : e52;
}
function fe(e53, t) {
    return e53;
}
function ae(e54, t9, r6) {
    if (e54.customInspect && t9 && we(t9.inspect) && t9.inspect !== X.inspect && (!t9.constructor || t9.constructor.prototype !== t9)) {
        var n3 = t9.inspect(r6, e54);
        return ge(n3) || (n3 = ae(e54, n3, r6)), n3;
    }
    var i21 = function(e55, t10) {
        if (be(t10)) return e55.stylize("undefined", "undefined");
        if (ge(t10)) {
            var r7 = "'" + JSON.stringify(t10).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e55.stylize(r7, "string");
        }
        if (de(t10)) return e55.stylize("" + t10, "number");
        if (ye(t10)) return e55.stylize("" + t10, "boolean");
        if (le(t10)) return e55.stylize("null", "null");
    }(e54, t9);
    if (i21) return i21;
    var o4 = Object.keys(t9), u21 = function(e56) {
        var t11 = {
        };
        return e56.forEach(function(e, r) {
            t11[e] = !0;
        }), t11;
    }(o4);
    if (e54.showHidden && (o4 = Object.getOwnPropertyNames(t9)), Ae(t9) && (o4.indexOf("message") >= 0 || o4.indexOf("description") >= 0)) return ce(t9);
    if (0 === o4.length) {
        if (we(t9)) {
            var f11 = t9.name ? ": " + t9.name : "";
            return e54.stylize("[Function" + f11 + "]", "special");
        }
        if (me(t9)) return e54.stylize(RegExp.prototype.toString.call(t9), "regexp");
        if (je(t9)) return e54.stylize(Date.prototype.toString.call(t9), "date");
        if (Ae(t9)) return ce(t9);
    }
    var a11, c21 = "", s11 = !1, p1 = [
        "{",
        "}"
    ];
    (pe(t9) && (s11 = !0, p1 = [
        "[",
        "]"
    ]), we(t9)) && (c21 = " [Function" + (t9.name ? ": " + t9.name : "") + "]");
    return me(t9) && (c21 = " " + RegExp.prototype.toString.call(t9)), je(t9) && (c21 = " " + Date.prototype.toUTCString.call(t9)), Ae(t9) && (c21 = " " + ce(t9)), 0 !== o4.length || s11 && 0 != t9.length ? r6 < 0 ? me(t9) ? e54.stylize(RegExp.prototype.toString.call(t9), "regexp") : e54.stylize("[Object]", "special") : (e54.seen.push(t9), a11 = s11 ? (function(e57, t12, r8, n4, i3) {
        for(var o5 = [], u3 = 0, f21 = t12.length; u3 < f21; ++u3)ke(t12, String(u3)) ? o5.push(se(e57, t12, r8, n4, String(u3), !0)) : o5.push("");
        return i3.forEach(function(i4) {
            i4.match(/^\d+$/) || o5.push(se(e57, t12, r8, n4, i4, !0));
        }), o5;
    })(e54, t9, r6, u21, o4) : o4.map(function(n5) {
        return se(e54, t9, r6, u21, n5, s11);
    }), e54.seen.pop(), (function(e58, t13, r9) {
        var n6 = 0;
        if (e58.reduce(function(e59, t14) {
            return n6++, t14.indexOf("\n") >= 0 && n6++, e59 + t14.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60) return r9[0] + ("" === t13 ? "" : t13 + "\n ") + " " + e58.join(",\n  ") + " " + r9[1];
        return r9[0] + t13 + " " + e58.join(", ") + " " + r9[1];
    })(a11, c21, p1)) : p1[0] + c21 + p1[1];
}
function ce(e60) {
    return "[" + Error.prototype.toString.call(e60) + "]";
}
function se(e61, t15, r10, n7, i5, o6) {
    var u4, f3, a21;
    if ((a21 = Object.getOwnPropertyDescriptor(t15, i5) || {
        value: t15[i5]
    }).get ? f3 = a21.set ? e61.stylize("[Getter/Setter]", "special") : e61.stylize("[Getter]", "special") : a21.set && (f3 = e61.stylize("[Setter]", "special")), ke(n7, i5) || (u4 = "[" + i5 + "]"), f3 || (e61.seen.indexOf(a21.value) < 0 ? (f3 = le(r10) ? ae(e61, a21.value, null) : ae(e61, a21.value, r10 - 1)).indexOf("\n") > -1 && (f3 = o6 ? f3.split("\n").map(function(e62) {
        return "  " + e62;
    }).join("\n").substr(2) : "\n" + f3.split("\n").map(function(e63) {
        return "   " + e63;
    }).join("\n")) : f3 = e61.stylize("[Circular]", "special")), be(u4)) {
        if (o6 && i5.match(/^\d+$/)) return f3;
        (u4 = JSON.stringify("" + i5)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u4 = u4.substr(1, u4.length - 2), u4 = e61.stylize(u4, "name")) : (u4 = u4.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u4 = e61.stylize(u4, "string"));
    }
    return u4 + ": " + f3;
}
function pe(e64) {
    return Array.isArray(e64);
}
function ye(e65) {
    return "boolean" == typeof e65;
}
function le(e66) {
    return null === e66;
}
function de(e67) {
    return "number" == typeof e67;
}
function ge(e68) {
    return "string" == typeof e68;
}
function be(e69) {
    return void 0 === e69;
}
function me(e70) {
    return he(e70) && "[object RegExp]" === ve(e70);
}
function he(e71) {
    return "object" == typeof e71 && null !== e71;
}
function je(e72) {
    return he(e72) && "[object Date]" === ve(e72);
}
function Ae(e73) {
    return he(e73) && ("[object Error]" === ve(e73) || e73 instanceof Error);
}
function we(e74) {
    return "function" == typeof e74;
}
function ve(e75) {
    return Object.prototype.toString.call(e75);
}
function Oe(e76) {
    return e76 < 10 ? "0" + e76.toString(10) : e76.toString(10);
}
X.debuglog = function(e77) {
    if (e77 = e77.toUpperCase(), !re[e77]) if (ne.test(e77)) {
        var t16 = Y.pid;
        re[e77] = function() {
            var r11 = X.format.apply(X, arguments);
            console.error("%s %d: %s", e77, t16, r11);
        };
    } else re[e77] = function() {
    };
    return re[e77];
}, X.inspect = oe, oe.colors = {
    bold: [
        1,
        22
    ],
    italic: [
        3,
        23
    ],
    underline: [
        4,
        24
    ],
    inverse: [
        7,
        27
    ],
    white: [
        37,
        39
    ],
    grey: [
        90,
        39
    ],
    black: [
        30,
        39
    ],
    blue: [
        34,
        39
    ],
    cyan: [
        36,
        39
    ],
    green: [
        32,
        39
    ],
    magenta: [
        35,
        39
    ],
    red: [
        31,
        39
    ],
    yellow: [
        33,
        39
    ]
}, oe.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
}, X.types = o$2, X.isArray = pe, X.isBoolean = ye, X.isNull = le, X.isNullOrUndefined = function(e78) {
    return null == e78;
}, X.isNumber = de, X.isString = ge, X.isSymbol = function(e79) {
    return "symbol" == typeof e79;
}, X.isUndefined = be, X.isRegExp = me, X.types.isRegExp = me, X.isObject = he, X.isDate = je, X.types.isDate = je, X.isError = Ae, X.types.isNativeError = Ae, X.isFunction = we, X.isPrimitive = function(e80) {
    return null === e80 || "boolean" == typeof e80 || "number" == typeof e80 || "string" == typeof e80 || "symbol" == typeof e80 || void 0 === e80;
}, X.isBuffer = i$1;
var Se = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function Be() {
    var e81 = new Date, t17 = [
        Oe(e81.getHours()),
        Oe(e81.getMinutes()),
        Oe(e81.getSeconds())
    ].join(":");
    return [
        e81.getDate(),
        Se[e81.getMonth()],
        t17
    ].join(" ");
}
function ke(e82, t18) {
    return Object.prototype.hasOwnProperty.call(e82, t18);
}
X.log = function() {
    console.log("%s - %s", Be(), X.format.apply(X, arguments));
}, X.inherits = t$2, X._extend = function(e83, t19) {
    if (!t19 || !he(t19)) return e83;
    for(var r12 = Object.keys(t19), n8 = r12.length; n8--;)e83[r12[n8]] = t19[r12[n8]];
    return e83;
};
var Ee = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function De(e84, t20) {
    if (!e84) {
        var r13 = new Error("Promise was rejected with a falsy value");
        r13.reason = e84, e84 = r13;
    }
    return t20(e84);
}
X.promisify = function(e85) {
    if ("function" != typeof e85) throw new TypeError('The "original" argument must be of type Function');
    if (Ee && e85[Ee]) {
        var t21;
        if ("function" != typeof (t21 = e85[Ee])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t21, Ee, {
            value: t21,
            enumerable: !1,
            writable: !1,
            configurable: !0
        }), t21;
    }
    function t21() {
        for(var t22, r14, n9 = new Promise(function(e86, n10) {
            t22 = e86, r14 = n10;
        }), i6 = [], o7 = 0; o7 < arguments.length; o7++)i6.push(arguments[o7]);
        i6.push(function(e87, n11) {
            e87 ? r14(e87) : t22(n11);
        });
        try {
            e85.apply(this || Q, i6);
        } catch (e88) {
            r14(e88);
        }
        return n9;
    }
    return Object.setPrototypeOf(t21, Object.getPrototypeOf(e85)), Ee && Object.defineProperty(t21, Ee, {
        value: t21,
        enumerable: !1,
        writable: !1,
        configurable: !0
    }), Object.defineProperties(t21, ee(e85));
}, X.promisify.custom = Ee, X.callbackify = function(e89) {
    if ("function" != typeof e89) throw new TypeError('The "original" argument must be of type Function');
    function t23() {
        for(var t24 = [], r15 = 0; r15 < arguments.length; r15++)t24.push(arguments[r15]);
        var n12 = t24.pop();
        if ("function" != typeof n12) throw new TypeError("The last argument must be of type Function");
        var i7 = this || Q, o8 = function() {
            return n12.apply(i7, arguments);
        };
        e89.apply(this || Q, t24).then(function(e90) {
            Y.nextTick(o8.bind(null, null, e90));
        }, function(e91) {
            Y.nextTick(De.bind(null, e91, o8));
        });
    }
    return Object.setPrototypeOf(t23, Object.getPrototypeOf(e89)), Object.defineProperties(t23, ee(e89)), t23;
};
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X.types;
self.TextEncoder;
self.TextDecoder;
var exports2 = {
}, _dewExec2 = false;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew2() {
    if (_dewExec2) return exports2;
    _dewExec2 = true;
    var process1 = exports2 = {
    };
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
    }
    (function() {
        try {
            if (typeof setTimeout === "function") {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === "function") {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e1) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                return cachedSetTimeout.call(this || _global, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                return cachedClearTimeout.call(this || _global, marker);
            }
        }
    }
    var queue1 = [];
    var draining1 = false;
    var currentQueue1;
    var queueIndex1 = -1;
    function cleanUpNextTick1() {
        if (!draining1 || !currentQueue1) {
            return;
        }
        draining1 = false;
        if (currentQueue1.length) {
            queue1 = currentQueue1.concat(queue1);
        } else {
            queueIndex1 = -1;
        }
        if (queue1.length) {
            drainQueue1();
        }
    }
    function drainQueue1() {
        if (draining1) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick1);
        draining1 = true;
        var len = queue1.length;
        while(len){
            currentQueue1 = queue1;
            queue1 = [];
            while(++queueIndex1 < len){
                if (currentQueue1) {
                    currentQueue1[queueIndex1].run();
                }
            }
            queueIndex1 = -1;
            len = queue1.length;
        }
        currentQueue1 = null;
        draining1 = false;
        runClearTimeout(timeout);
    }
    process1.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for(var i8 = 1; i8 < arguments.length; i8++){
                args[i8 - 1] = arguments[i8];
            }
        }
        queue1.push(new Item1(fun, args));
        if (queue1.length === 1 && !draining1) {
            runTimeout(drainQueue1);
        }
    };
    function Item1(fun, array) {
        (this || _global).fun = fun;
        (this || _global).array = array;
    }
    Item1.prototype.run = function() {
        (this || _global).fun.apply(null, (this || _global).array);
    };
    process1.title = "browser";
    process1.browser = true;
    process1.env = {
    };
    process1.argv = [];
    process1.version = "";
    process1.versions = {
    };
    function noop1() {
    }
    process1.on = noop1;
    process1.addListener = noop1;
    process1.once = noop1;
    process1.off = noop1;
    process1.removeListener = noop1;
    process1.removeAllListeners = noop1;
    process1.emit = noop1;
    process1.prependListener = noop1;
    process1.prependOnceListener = noop1;
    process1.listeners = function(name) {
        return [];
    };
    process1.binding = function(name) {
        throw new Error("process.binding is not supported");
    };
    process1.cwd = function() {
        return "/";
    };
    process1.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
    };
    process1.umask = function() {
        return 0;
    };
    return exports2;
}
var process1 = dew2();
process1.platform = 'browser';
process1.addListener;
process1.argv;
process1.binding;
process1.browser;
process1.chdir;
process1.cwd;
process1.emit;
process1.env;
process1.listeners;
process1.nextTick;
process1.off;
process1.on;
process1.once;
process1.prependListener;
process1.prependOnceListener;
process1.removeAllListeners;
process1.removeListener;
process1.title;
process1.umask;
process1.version;
process1.versions;
for(var r$11 = {
    byteLength: function(r12) {
        var t13 = u$2(r12), e13 = t13[0], n13 = t13[1];
        return 3 * (e13 + n13) / 4 - n13;
    },
    toByteArray: function(r22) {
        var t22, o13, a12 = u$2(r22), h11 = a12[0], c12 = a12[1], d11 = new n$2(function(r, t3, e22) {
            return 3 * (t3 + e22) / 4 - e22;
        }(0, h11, c12)), f = 0, A1 = c12 > 0 ? h11 - 4 : h11;
        for(o13 = 0; o13 < A1; o13 += 4)t22 = e$2[r22.charCodeAt(o13)] << 18 | e$2[r22.charCodeAt(o13 + 1)] << 12 | e$2[r22.charCodeAt(o13 + 2)] << 6 | e$2[r22.charCodeAt(o13 + 3)], d11[f++] = t22 >> 16 & 255, d11[f++] = t22 >> 8 & 255, d11[f++] = 255 & t22;
        2 === c12 && (t22 = e$2[r22.charCodeAt(o13)] << 2 | e$2[r22.charCodeAt(o13 + 1)] >> 4, d11[f++] = 255 & t22);
        1 === c12 && (t22 = e$2[r22.charCodeAt(o13)] << 10 | e$2[r22.charCodeAt(o13 + 1)] << 4 | e$2[r22.charCodeAt(o13 + 2)] >> 2, d11[f++] = t22 >> 8 & 255, d11[f++] = 255 & t22);
        return d11;
    },
    fromByteArray: function(r3) {
        for(var e3, n22 = r3.length, o22 = n22 % 3, a22 = [], h21 = 0, u12 = n22 - o22; h21 < u12; h21 += 16383)a22.push(c$11(r3, h21, h21 + 16383 > u12 ? u12 : h21 + 16383));
        1 === o22 ? (e3 = r3[n22 - 1], a22.push(t$11[e3 >> 2] + t$11[e3 << 4 & 63] + "==")) : 2 === o22 && (e3 = (r3[n22 - 2] << 8) + r3[n22 - 1], a22.push(t$11[e3 >> 10] + t$11[e3 >> 4 & 63] + t$11[e3 << 2 & 63] + "="));
        return a22.join("");
    }
}, t$11 = [], e$2 = [], n$2 = "undefined" != typeof Uint8Array ? Uint8Array : Array, o$21 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a$1 = 0, h$1 = o$21.length; a$1 < h$1; ++a$1)t$11[a$1] = o$21[a$1], e$2[o$21.charCodeAt(a$1)] = a$1;
function u$2(r4) {
    var t4 = r4.length;
    if (t4 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var e4 = r4.indexOf("=");
    return -1 === e4 && (e4 = t4), [
        e4,
        e4 === t4 ? 0 : 4 - e4 % 4
    ];
}
function c$11(r5, e5, n3) {
    for(var o3, a, h3 = [], u22 = e5; u22 < n3; u22 += 3)o3 = (r5[u22] << 16 & 16711680) + (r5[u22 + 1] << 8 & 65280) + (255 & r5[u22 + 2]), h3.push(t$11[(a = o3) >> 18 & 63] + t$11[a >> 12 & 63] + t$11[a >> 6 & 63] + t$11[63 & a]);
    return h3.join("");
}
e$2["-".charCodeAt(0)] = 62, e$2["_".charCodeAt(0)] = 63;
var a$1$1 = {
    read: function(a3, t, o4, r6, h4) {
        var M1, f12, p1 = 8 * h4 - r6 - 1, w1 = (1 << p1) - 1, e6 = w1 >> 1, i12 = -7, N1 = o4 ? h4 - 1 : 0, n4 = o4 ? -1 : 1, u3 = a3[t + N1];
        for(N1 += n4, M1 = u3 & (1 << -i12) - 1, u3 >>= -i12, i12 += p1; i12 > 0; M1 = 256 * M1 + a3[t + N1], N1 += n4, i12 -= 8);
        for(f12 = M1 & (1 << -i12) - 1, M1 >>= -i12, i12 += r6; i12 > 0; f12 = 256 * f12 + a3[t + N1], N1 += n4, i12 -= 8);
        if (0 === M1) M1 = 1 - e6;
        else {
            if (M1 === w1) return f12 ? NaN : 1 / 0 * (u3 ? -1 : 1);
            f12 += Math.pow(2, r6), M1 -= e6;
        }
        return (u3 ? -1 : 1) * f12 * Math.pow(2, M1 - r6);
    },
    write: function(a4, t5, o, r7, h5, M2) {
        var f22, p21, w2, e7 = 8 * M2 - h5 - 1, i22 = (1 << e7) - 1, N2 = i22 >> 1, n5 = 23 === h5 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u4 = r7 ? 0 : M2 - 1, l11 = r7 ? 1 : -1, s12 = t5 < 0 || 0 === t5 && 1 / t5 < 0 ? 1 : 0;
        for(t5 = Math.abs(t5), isNaN(t5) || t5 === 1 / 0 ? (p21 = isNaN(t5) ? 1 : 0, f22 = i22) : (f22 = Math.floor(Math.log(t5) / Math.LN2), t5 * (w2 = Math.pow(2, -f22)) < 1 && (f22--, w2 *= 2), (t5 += f22 + N2 >= 1 ? n5 / w2 : n5 * Math.pow(2, 1 - N2)) * w2 >= 2 && (f22++, w2 /= 2), f22 + N2 >= i22 ? (p21 = 0, f22 = i22) : f22 + N2 >= 1 ? (p21 = (t5 * w2 - 1) * Math.pow(2, h5), f22 += N2) : (p21 = t5 * Math.pow(2, N2 - 1) * Math.pow(2, h5), f22 = 0)); h5 >= 8; a4[o + u4] = 255 & p21, u4 += l11, p21 /= 256, h5 -= 8);
        for(f22 = f22 << h5 | p21, e7 += h5; e7 > 0; a4[o + u4] = 255 & f22, u4 += l11, f22 /= 256, e7 -= 8);
        a4[o + u4 - l11] |= 128 * s12;
    }
};
var e$1$1 = {
}, n$1$1 = r$11, i$11 = a$1$1, o$1$1 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
e$1$1.Buffer = u$1$1, e$1$1.SlowBuffer = function(t6) {
    +t6 != t6 && (t6 = 0);
    return u$1$1.alloc(+t6);
}, e$1$1.INSPECT_MAX_BYTES = 50;
function f$2(t7) {
    if (t7 > 2147483647) throw new RangeError('The value "' + t7 + '" is invalid for option "size"');
    var r8 = new Uint8Array(t7);
    return Object.setPrototypeOf(r8, u$1$1.prototype), r8;
}
function u$1$1(t8, r9, e8) {
    if ("number" == typeof t8) {
        if ("string" == typeof r9) throw new TypeError('The "string" argument must be of type string. Received type number');
        return a$2(t8);
    }
    return s$1(t8, r9, e8);
}
function s$1(t9, r10, e9) {
    if ("string" == typeof t9) return (function(t10, r11) {
        "string" == typeof r11 && "" !== r11 || (r11 = "utf8");
        if (!u$1$1.isEncoding(r11)) throw new TypeError("Unknown encoding: " + r11);
        var e10 = 0 | y2(t10, r11), n7 = f$2(e10), i4 = n7.write(t10, r11);
        i4 !== e10 && (n7 = n7.slice(0, i4));
        return n7;
    })(t9, r10);
    if (ArrayBuffer.isView(t9)) return p3(t9);
    if (null == t9) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t9);
    if (F1(t9, ArrayBuffer) || t9 && F1(t9.buffer, ArrayBuffer)) return c$1$1(t9, r10, e9);
    if ("undefined" != typeof SharedArrayBuffer && (F1(t9, SharedArrayBuffer) || t9 && F1(t9.buffer, SharedArrayBuffer))) return c$1$1(t9, r10, e9);
    if ("number" == typeof t9) throw new TypeError('The "value" argument must not be of type number. Received type number');
    var n6 = t9.valueOf && t9.valueOf();
    if (null != n6 && n6 !== t9) return u$1$1.from(n6, r10, e9);
    var i3 = function(t11) {
        if (u$1$1.isBuffer(t11)) {
            var r12 = 0 | l$11(t11.length), e11 = f$2(r12);
            return 0 === e11.length || t11.copy(e11, 0, 0, r12), e11;
        }
        if (void 0 !== t11.length) return "number" != typeof t11.length || N1(t11.length) ? f$2(0) : p3(t11);
        if ("Buffer" === t11.type && Array.isArray(t11.data)) return p3(t11.data);
    }(t9);
    if (i3) return i3;
    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t9[Symbol.toPrimitive]) return u$1$1.from(t9[Symbol.toPrimitive]("string"), r10, e9);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t9);
}
function h$1$1(t12) {
    if ("number" != typeof t12) throw new TypeError('"size" argument must be of type number');
    if (t12 < 0) throw new RangeError('The value "' + t12 + '" is invalid for option "size"');
}
function a$2(t13) {
    return h$1$1(t13), f$2(t13 < 0 ? 0 : 0 | l$11(t13));
}
function p3(t14) {
    for(var r13 = t14.length < 0 ? 0 : 0 | l$11(t14.length), e12 = f$2(r13), n8 = 0; n8 < r13; n8 += 1)e12[n8] = 255 & t14[n8];
    return e12;
}
function c$1$1(t15, r14, e13) {
    if (r14 < 0 || t15.byteLength < r14) throw new RangeError('"offset" is outside of buffer bounds');
    if (t15.byteLength < r14 + (e13 || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var n9;
    return n9 = void 0 === r14 && void 0 === e13 ? new Uint8Array(t15) : void 0 === e13 ? new Uint8Array(t15, r14) : new Uint8Array(t15, r14, e13), Object.setPrototypeOf(n9, u$1$1.prototype), n9;
}
function l$11(t16) {
    if (t16 >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
    return 0 | t16;
}
function y2(t17, r15) {
    if (u$1$1.isBuffer(t17)) return t17.length;
    if (ArrayBuffer.isView(t17) || F1(t17, ArrayBuffer)) return t17.byteLength;
    if ("string" != typeof t17) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t17);
    var e14 = t17.length, n10 = arguments.length > 2 && !0 === arguments[2];
    if (!n10 && 0 === e14) return 0;
    for(var i5 = !1;;)switch(r15){
        case "ascii":
        case "latin1":
        case "binary":
            return e14;
        case "utf8":
        case "utf-8":
            return _1(t17).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * e14;
        case "hex":
            return e14 >>> 1;
        case "base64":
            return z1(t17).length;
        default:
            if (i5) return n10 ? -1 : _1(t17).length;
            r15 = ("" + r15).toLowerCase(), i5 = !0;
    }
}
function g1(t18, r16, e15) {
    var n11 = !1;
    if ((void 0 === r16 || r16 < 0) && (r16 = 0), r16 > this.length) return "";
    if ((void 0 === e15 || e15 > this.length) && (e15 = this.length), e15 <= 0) return "";
    if ((e15 >>>= 0) <= (r16 >>>= 0)) return "";
    for(t18 || (t18 = "utf8");;)switch(t18){
        case "hex":
            return O1(this, r16, e15);
        case "utf8":
        case "utf-8":
            return I1(this, r16, e15);
        case "ascii":
            return S1(this, r16, e15);
        case "latin1":
        case "binary":
            return R1(this, r16, e15);
        case "base64":
            return T2(this, r16, e15);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return L1(this, r16, e15);
        default:
            if (n11) throw new TypeError("Unknown encoding: " + t18);
            t18 = (t18 + "").toLowerCase(), n11 = !0;
    }
}
function w1(t19, r, e) {
    var n12 = t19[r];
    t19[r] = t19[e], t19[e] = n12;
}
function d2(t20, r17, e16, n13, i6) {
    if (0 === t20.length) return -1;
    if ("string" == typeof e16 ? (n13 = e16, e16 = 0) : e16 > 2147483647 ? e16 = 2147483647 : e16 < -2147483648 && (e16 = -2147483648), N1(e16 = +e16) && (e16 = i6 ? 0 : t20.length - 1), e16 < 0 && (e16 = t20.length + e16), e16 >= t20.length) {
        if (i6) return -1;
        e16 = t20.length - 1;
    } else if (e16 < 0) {
        if (!i6) return -1;
        e16 = 0;
    }
    if ("string" == typeof r17 && (r17 = u$1$1.from(r17, n13)), u$1$1.isBuffer(r17)) return 0 === r17.length ? -1 : v2(t20, r17, e16, n13, i6);
    if ("number" == typeof r17) return r17 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i6 ? Uint8Array.prototype.indexOf.call(t20, r17, e16) : Uint8Array.prototype.lastIndexOf.call(t20, r17, e16) : v2(t20, [
        r17
    ], e16, n13, i6);
    throw new TypeError("val must be string, number or Buffer");
}
function v2(t21, r18, e17, n14, i7) {
    var o5, f3 = 1, u5 = t21.length, s21 = r18.length;
    if (void 0 !== n14 && ("ucs2" === (n14 = String(n14).toLowerCase()) || "ucs-2" === n14 || "utf16le" === n14 || "utf-16le" === n14)) {
        if (t21.length < 2 || r18.length < 2) return -1;
        f3 = 2, u5 /= 2, s21 /= 2, e17 /= 2;
    }
    function h6(t22, r19) {
        return 1 === f3 ? t22[r19] : t22.readUInt16BE(r19 * f3);
    }
    if (i7) {
        var a5 = -1;
        for(o5 = e17; o5 < u5; o5++)if (h6(t21, o5) === h6(r18, -1 === a5 ? 0 : o5 - a5)) {
            if (-1 === a5 && (a5 = o5), o5 - a5 + 1 === s21) return a5 * f3;
        } else -1 !== a5 && (o5 -= o5 - a5), a5 = -1;
    } else for(e17 + s21 > u5 && (e17 = u5 - s21), o5 = e17; o5 >= 0; o5--){
        for(var p31 = !0, c22 = 0; c22 < s21; c22++)if (h6(t21, o5 + c22) !== h6(r18, c22)) {
            p31 = !1;
            break;
        }
        if (p31) return o5;
    }
    return -1;
}
function b1(t23, r20, e18, n15) {
    e18 = Number(e18) || 0;
    var i8 = t23.length - e18;
    n15 ? (n15 = Number(n15)) > i8 && (n15 = i8) : n15 = i8;
    var o6 = r20.length;
    n15 > o6 / 2 && (n15 = o6 / 2);
    for(var f4 = 0; f4 < n15; ++f4){
        var u6 = parseInt(r20.substr(2 * f4, 2), 16);
        if (N1(u6)) return f4;
        t23[e18 + f4] = u6;
    }
    return f4;
}
function m2(t24, r21, e19, n16) {
    return D1(_1(r21, t24.length - e19), t24, e19, n16);
}
function E1(t25, r22, e20, n17) {
    return D1(function(t26) {
        for(var r23 = [], e21 = 0; e21 < t26.length; ++e21)r23.push(255 & t26.charCodeAt(e21));
        return r23;
    }(r22), t25, e20, n17);
}
function B1(t27, r24, e22, n18) {
    return E1(t27, r24, e22, n18);
}
function A1(t28, r25, e23, n19) {
    return D1(z1(r25), t28, e23, n19);
}
function U1(t29, r26, e24, n20) {
    return D1(function(t30, r27) {
        for(var e25, n21, i9, o7 = [], f5 = 0; f5 < t30.length && !((r27 -= 2) < 0); ++f5)e25 = t30.charCodeAt(f5), n21 = e25 >> 8, i9 = e25 % 256, o7.push(i9), o7.push(n21);
        return o7;
    }(r26, t29.length - e24), t29, e24, n20);
}
function T2(t31, r28, e26) {
    return 0 === r28 && e26 === t31.length ? n$1$1.fromByteArray(t31) : n$1$1.fromByteArray(t31.slice(r28, e26));
}
function I1(t32, r29, e27) {
    e27 = Math.min(t32.length, e27);
    for(var n22 = [], i10 = r29; i10 < e27;){
        var o8, f6, u7, s3, h7 = t32[i10], a6 = null, p4 = h7 > 239 ? 4 : h7 > 223 ? 3 : h7 > 191 ? 2 : 1;
        if (i10 + p4 <= e27) switch(p4){
            case 1:
                h7 < 128 && (a6 = h7);
                break;
            case 2:
                128 == (192 & (o8 = t32[i10 + 1])) && (s3 = (31 & h7) << 6 | 63 & o8) > 127 && (a6 = s3);
                break;
            case 3:
                o8 = t32[i10 + 1], f6 = t32[i10 + 2], 128 == (192 & o8) && 128 == (192 & f6) && (s3 = (15 & h7) << 12 | (63 & o8) << 6 | 63 & f6) > 2047 && (s3 < 55296 || s3 > 57343) && (a6 = s3);
                break;
            case 4:
                o8 = t32[i10 + 1], f6 = t32[i10 + 2], u7 = t32[i10 + 3], 128 == (192 & o8) && 128 == (192 & f6) && 128 == (192 & u7) && (s3 = (15 & h7) << 18 | (63 & o8) << 12 | (63 & f6) << 6 | 63 & u7) > 65535 && s3 < 1114112 && (a6 = s3);
        }
        null === a6 ? (a6 = 65533, p4 = 1) : a6 > 65535 && (a6 -= 65536, n22.push(a6 >>> 10 & 1023 | 55296), a6 = 56320 | 1023 & a6), n22.push(a6), i10 += p4;
    }
    return (function(t33) {
        var r30 = t33.length;
        if (r30 <= 4096) return String.fromCharCode.apply(String, t33);
        var e28 = "", n23 = 0;
        for(; n23 < r30;)e28 += String.fromCharCode.apply(String, t33.slice(n23, n23 += 4096));
        return e28;
    })(n22);
}
e$1$1.kMaxLength = 2147483647, u$1$1.TYPED_ARRAY_SUPPORT = (function() {
    try {
        var t34 = new Uint8Array(1), r31 = {
            foo: function() {
                return 42;
            }
        };
        return Object.setPrototypeOf(r31, Uint8Array.prototype), Object.setPrototypeOf(t34, r31), 42 === t34.foo();
    } catch (t) {
        return !1;
    }
})(), u$1$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u$1$1.prototype, "parent", {
    enumerable: !0,
    get: function() {
        if (u$1$1.isBuffer(this)) return this.buffer;
    }
}), Object.defineProperty(u$1$1.prototype, "offset", {
    enumerable: !0,
    get: function() {
        if (u$1$1.isBuffer(this)) return this.byteOffset;
    }
}), u$1$1.poolSize = 8192, u$1$1.from = function(t35, r32, e29) {
    return s$1(t35, r32, e29);
}, Object.setPrototypeOf(u$1$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(u$1$1, Uint8Array), u$1$1.alloc = function(t36, r33, e30) {
    return (function(t37, r34, e31) {
        return h$1$1(t37), t37 <= 0 ? f$2(t37) : void 0 !== r34 ? "string" == typeof e31 ? f$2(t37).fill(r34, e31) : f$2(t37).fill(r34) : f$2(t37);
    })(t36, r33, e30);
}, u$1$1.allocUnsafe = function(t38) {
    return a$2(t38);
}, u$1$1.allocUnsafeSlow = function(t39) {
    return a$2(t39);
}, u$1$1.isBuffer = function(t40) {
    return null != t40 && !0 === t40._isBuffer && t40 !== u$1$1.prototype;
}, u$1$1.compare = function(t41, r35) {
    if (F1(t41, Uint8Array) && (t41 = u$1$1.from(t41, t41.offset, t41.byteLength)), F1(r35, Uint8Array) && (r35 = u$1$1.from(r35, r35.offset, r35.byteLength)), !u$1$1.isBuffer(t41) || !u$1$1.isBuffer(r35)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (t41 === r35) return 0;
    for(var e32 = t41.length, n24 = r35.length, i11 = 0, o9 = Math.min(e32, n24); i11 < o9; ++i11)if (t41[i11] !== r35[i11]) {
        e32 = t41[i11], n24 = r35[i11];
        break;
    }
    return e32 < n24 ? -1 : n24 < e32 ? 1 : 0;
}, u$1$1.isEncoding = function(t42) {
    switch(String(t42).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1;
    }
}, u$1$1.concat = function(t43, r36) {
    if (!Array.isArray(t43)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t43.length) return u$1$1.alloc(0);
    var e33;
    if (void 0 === r36) for(r36 = 0, e33 = 0; e33 < t43.length; ++e33)r36 += t43[e33].length;
    var n25 = u$1$1.allocUnsafe(r36), i12 = 0;
    for(e33 = 0; e33 < t43.length; ++e33){
        var o10 = t43[e33];
        if (F1(o10, Uint8Array) && (o10 = u$1$1.from(o10)), !u$1$1.isBuffer(o10)) throw new TypeError('"list" argument must be an Array of Buffers');
        o10.copy(n25, i12), i12 += o10.length;
    }
    return n25;
}, u$1$1.byteLength = y2, u$1$1.prototype._isBuffer = !0, u$1$1.prototype.swap16 = function() {
    var t44 = this.length;
    if (t44 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var r37 = 0; r37 < t44; r37 += 2)w1(this, r37, r37 + 1);
    return this;
}, u$1$1.prototype.swap32 = function() {
    var t45 = this.length;
    if (t45 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var r38 = 0; r38 < t45; r38 += 4)w1(this, r38, r38 + 3), w1(this, r38 + 1, r38 + 2);
    return this;
}, u$1$1.prototype.swap64 = function() {
    var t46 = this.length;
    if (t46 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var r39 = 0; r39 < t46; r39 += 8)w1(this, r39, r39 + 7), w1(this, r39 + 1, r39 + 6), w1(this, r39 + 2, r39 + 5), w1(this, r39 + 3, r39 + 4);
    return this;
}, u$1$1.prototype.toString = function() {
    var t47 = this.length;
    return 0 === t47 ? "" : 0 === arguments.length ? I1(this, 0, t47) : g1.apply(this, arguments);
}, u$1$1.prototype.toLocaleString = u$1$1.prototype.toString, u$1$1.prototype.equals = function(t48) {
    if (!u$1$1.isBuffer(t48)) throw new TypeError("Argument must be a Buffer");
    return this === t48 || 0 === u$1$1.compare(this, t48);
}, u$1$1.prototype.inspect = function() {
    var t49 = "", r40 = e$1$1.INSPECT_MAX_BYTES;
    return t49 = this.toString("hex", 0, r40).replace(/(.{2})/g, "$1 ").trim(), this.length > r40 && (t49 += " ... "), "<Buffer " + t49 + ">";
}, o$1$1 && (u$1$1.prototype[o$1$1] = u$1$1.prototype.inspect), u$1$1.prototype.compare = function(t50, r41, e34, n26, i13) {
    if (F1(t50, Uint8Array) && (t50 = u$1$1.from(t50, t50.offset, t50.byteLength)), !u$1$1.isBuffer(t50)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t50);
    if (void 0 === r41 && (r41 = 0), void 0 === e34 && (e34 = t50 ? t50.length : 0), void 0 === n26 && (n26 = 0), void 0 === i13 && (i13 = this.length), r41 < 0 || e34 > t50.length || n26 < 0 || i13 > this.length) throw new RangeError("out of range index");
    if (n26 >= i13 && r41 >= e34) return 0;
    if (n26 >= i13) return -1;
    if (r41 >= e34) return 1;
    if (this === t50) return 0;
    for(var o11 = (i13 >>>= 0) - (n26 >>>= 0), f7 = (e34 >>>= 0) - (r41 >>>= 0), s4 = Math.min(o11, f7), h8 = this.slice(n26, i13), a7 = t50.slice(r41, e34), p5 = 0; p5 < s4; ++p5)if (h8[p5] !== a7[p5]) {
        o11 = h8[p5], f7 = a7[p5];
        break;
    }
    return o11 < f7 ? -1 : f7 < o11 ? 1 : 0;
}, u$1$1.prototype.includes = function(t51, r42, e35) {
    return -1 !== this.indexOf(t51, r42, e35);
}, u$1$1.prototype.indexOf = function(t52, r43, e36) {
    return d2(this, t52, r43, e36, !0);
}, u$1$1.prototype.lastIndexOf = function(t53, r44, e37) {
    return d2(this, t53, r44, e37, !1);
}, u$1$1.prototype.write = function(t54, r45, e38, n27) {
    if (void 0 === r45) n27 = "utf8", e38 = this.length, r45 = 0;
    else if (void 0 === e38 && "string" == typeof r45) n27 = r45, e38 = this.length, r45 = 0;
    else {
        if (!isFinite(r45)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        r45 >>>= 0, isFinite(e38) ? (e38 >>>= 0, void 0 === n27 && (n27 = "utf8")) : (n27 = e38, e38 = void 0);
    }
    var i14 = this.length - r45;
    if ((void 0 === e38 || e38 > i14) && (e38 = i14), t54.length > 0 && (e38 < 0 || r45 < 0) || r45 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    n27 || (n27 = "utf8");
    for(var o12 = !1;;)switch(n27){
        case "hex":
            return b1(this, t54, r45, e38);
        case "utf8":
        case "utf-8":
            return m2(this, t54, r45, e38);
        case "ascii":
            return E1(this, t54, r45, e38);
        case "latin1":
        case "binary":
            return B1(this, t54, r45, e38);
        case "base64":
            return A1(this, t54, r45, e38);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return U1(this, t54, r45, e38);
        default:
            if (o12) throw new TypeError("Unknown encoding: " + n27);
            n27 = ("" + n27).toLowerCase(), o12 = !0;
    }
}, u$1$1.prototype.toJSON = function() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function S1(t55, r46, e39) {
    var n28 = "";
    e39 = Math.min(t55.length, e39);
    for(var i15 = r46; i15 < e39; ++i15)n28 += String.fromCharCode(127 & t55[i15]);
    return n28;
}
function R1(t56, r47, e40) {
    var n29 = "";
    e40 = Math.min(t56.length, e40);
    for(var i16 = r47; i16 < e40; ++i16)n29 += String.fromCharCode(t56[i16]);
    return n29;
}
function O1(t57, r48, e41) {
    var n30 = t57.length;
    (!r48 || r48 < 0) && (r48 = 0), (!e41 || e41 < 0 || e41 > n30) && (e41 = n30);
    for(var i17 = "", o13 = r48; o13 < e41; ++o13)i17 += Y1[t57[o13]];
    return i17;
}
function L1(t58, r49, e42) {
    for(var n31 = t58.slice(r49, e42), i18 = "", o14 = 0; o14 < n31.length; o14 += 2)i18 += String.fromCharCode(n31[o14] + 256 * n31[o14 + 1]);
    return i18;
}
function x1(t59, r50, e43) {
    if (t59 % 1 != 0 || t59 < 0) throw new RangeError("offset is not uint");
    if (t59 + r50 > e43) throw new RangeError("Trying to access beyond buffer length");
}
function C1(t60, r51, e44, n32, i19, o15) {
    if (!u$1$1.isBuffer(t60)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r51 > i19 || r51 < o15) throw new RangeError('"value" argument is out of bounds');
    if (e44 + n32 > t60.length) throw new RangeError("Index out of range");
}
function P1(t61, r, e45, n33, i, o) {
    if (e45 + n33 > t61.length) throw new RangeError("Index out of range");
    if (e45 < 0) throw new RangeError("Index out of range");
}
function k1(t62, r52, e46, n34, o16) {
    return r52 = +r52, e46 >>>= 0, o16 || P1(t62, 0, e46, 4), i$11.write(t62, r52, e46, n34, 23, 4), e46 + 4;
}
function M1(t63, r53, e47, n35, o17) {
    return r53 = +r53, e47 >>>= 0, o17 || P1(t63, 0, e47, 8), i$11.write(t63, r53, e47, n35, 52, 8), e47 + 8;
}
u$1$1.prototype.slice = function(t64, r54) {
    var e48 = this.length;
    (t64 = ~~t64) < 0 ? (t64 += e48) < 0 && (t64 = 0) : t64 > e48 && (t64 = e48), (r54 = void 0 === r54 ? e48 : ~~r54) < 0 ? (r54 += e48) < 0 && (r54 = 0) : r54 > e48 && (r54 = e48), r54 < t64 && (r54 = t64);
    var n36 = this.subarray(t64, r54);
    return Object.setPrototypeOf(n36, u$1$1.prototype), n36;
}, u$1$1.prototype.readUIntLE = function(t65, r55, e49) {
    t65 >>>= 0, r55 >>>= 0, e49 || x1(t65, r55, this.length);
    for(var n37 = this[t65], i20 = 1, o18 = 0; ++o18 < r55 && (i20 *= 256);)n37 += this[t65 + o18] * i20;
    return n37;
}, u$1$1.prototype.readUIntBE = function(t66, r56, e50) {
    t66 >>>= 0, r56 >>>= 0, e50 || x1(t66, r56, this.length);
    for(var n38 = this[t66 + --r56], i21 = 1; r56 > 0 && (i21 *= 256);)n38 += this[t66 + --r56] * i21;
    return n38;
}, u$1$1.prototype.readUInt8 = function(t67, r57) {
    return t67 >>>= 0, r57 || x1(t67, 1, this.length), this[t67];
}, u$1$1.prototype.readUInt16LE = function(t68, r58) {
    return t68 >>>= 0, r58 || x1(t68, 2, this.length), this[t68] | this[t68 + 1] << 8;
}, u$1$1.prototype.readUInt16BE = function(t69, r59) {
    return t69 >>>= 0, r59 || x1(t69, 2, this.length), this[t69] << 8 | this[t69 + 1];
}, u$1$1.prototype.readUInt32LE = function(t70, r60) {
    return t70 >>>= 0, r60 || x1(t70, 4, this.length), (this[t70] | this[t70 + 1] << 8 | this[t70 + 2] << 16) + 16777216 * this[t70 + 3];
}, u$1$1.prototype.readUInt32BE = function(t71, r61) {
    return t71 >>>= 0, r61 || x1(t71, 4, this.length), 16777216 * this[t71] + (this[t71 + 1] << 16 | this[t71 + 2] << 8 | this[t71 + 3]);
}, u$1$1.prototype.readIntLE = function(t72, r62, e51) {
    t72 >>>= 0, r62 >>>= 0, e51 || x1(t72, r62, this.length);
    for(var n39 = this[t72], i22 = 1, o19 = 0; ++o19 < r62 && (i22 *= 256);)n39 += this[t72 + o19] * i22;
    return n39 >= (i22 *= 128) && (n39 -= Math.pow(2, 8 * r62)), n39;
}, u$1$1.prototype.readIntBE = function(t73, r63, e52) {
    t73 >>>= 0, r63 >>>= 0, e52 || x1(t73, r63, this.length);
    for(var n40 = r63, i23 = 1, o20 = this[t73 + --n40]; n40 > 0 && (i23 *= 256);)o20 += this[t73 + --n40] * i23;
    return o20 >= (i23 *= 128) && (o20 -= Math.pow(2, 8 * r63)), o20;
}, u$1$1.prototype.readInt8 = function(t74, r64) {
    return t74 >>>= 0, r64 || x1(t74, 1, this.length), 128 & this[t74] ? -1 * (255 - this[t74] + 1) : this[t74];
}, u$1$1.prototype.readInt16LE = function(t75, r65) {
    t75 >>>= 0, r65 || x1(t75, 2, this.length);
    var e53 = this[t75] | this[t75 + 1] << 8;
    return 32768 & e53 ? 4294901760 | e53 : e53;
}, u$1$1.prototype.readInt16BE = function(t76, r66) {
    t76 >>>= 0, r66 || x1(t76, 2, this.length);
    var e54 = this[t76 + 1] | this[t76] << 8;
    return 32768 & e54 ? 4294901760 | e54 : e54;
}, u$1$1.prototype.readInt32LE = function(t77, r67) {
    return t77 >>>= 0, r67 || x1(t77, 4, this.length), this[t77] | this[t77 + 1] << 8 | this[t77 + 2] << 16 | this[t77 + 3] << 24;
}, u$1$1.prototype.readInt32BE = function(t78, r68) {
    return t78 >>>= 0, r68 || x1(t78, 4, this.length), this[t78] << 24 | this[t78 + 1] << 16 | this[t78 + 2] << 8 | this[t78 + 3];
}, u$1$1.prototype.readFloatLE = function(t79, r69) {
    return t79 >>>= 0, r69 || x1(t79, 4, this.length), i$11.read(this, t79, !0, 23, 4);
}, u$1$1.prototype.readFloatBE = function(t80, r70) {
    return t80 >>>= 0, r70 || x1(t80, 4, this.length), i$11.read(this, t80, !1, 23, 4);
}, u$1$1.prototype.readDoubleLE = function(t81, r71) {
    return t81 >>>= 0, r71 || x1(t81, 8, this.length), i$11.read(this, t81, !0, 52, 8);
}, u$1$1.prototype.readDoubleBE = function(t82, r72) {
    return t82 >>>= 0, r72 || x1(t82, 8, this.length), i$11.read(this, t82, !1, 52, 8);
}, u$1$1.prototype.writeUIntLE = function(t83, r73, e55, n41) {
    (t83 = +t83, r73 >>>= 0, e55 >>>= 0, n41) || C1(this, t83, r73, e55, Math.pow(2, 8 * e55) - 1, 0);
    var i24 = 1, o21 = 0;
    for(this[r73] = 255 & t83; ++o21 < e55 && (i24 *= 256);)this[r73 + o21] = t83 / i24 & 255;
    return r73 + e55;
}, u$1$1.prototype.writeUIntBE = function(t84, r74, e56, n42) {
    (t84 = +t84, r74 >>>= 0, e56 >>>= 0, n42) || C1(this, t84, r74, e56, Math.pow(2, 8 * e56) - 1, 0);
    var i25 = e56 - 1, o22 = 1;
    for(this[r74 + i25] = 255 & t84; --i25 >= 0 && (o22 *= 256);)this[r74 + i25] = t84 / o22 & 255;
    return r74 + e56;
}, u$1$1.prototype.writeUInt8 = function(t85, r75, e57) {
    return t85 = +t85, r75 >>>= 0, e57 || C1(this, t85, r75, 1, 255, 0), this[r75] = 255 & t85, r75 + 1;
}, u$1$1.prototype.writeUInt16LE = function(t86, r76, e58) {
    return t86 = +t86, r76 >>>= 0, e58 || C1(this, t86, r76, 2, 65535, 0), this[r76] = 255 & t86, this[r76 + 1] = t86 >>> 8, r76 + 2;
}, u$1$1.prototype.writeUInt16BE = function(t87, r77, e59) {
    return t87 = +t87, r77 >>>= 0, e59 || C1(this, t87, r77, 2, 65535, 0), this[r77] = t87 >>> 8, this[r77 + 1] = 255 & t87, r77 + 2;
}, u$1$1.prototype.writeUInt32LE = function(t88, r78, e60) {
    return t88 = +t88, r78 >>>= 0, e60 || C1(this, t88, r78, 4, 4294967295, 0), this[r78 + 3] = t88 >>> 24, this[r78 + 2] = t88 >>> 16, this[r78 + 1] = t88 >>> 8, this[r78] = 255 & t88, r78 + 4;
}, u$1$1.prototype.writeUInt32BE = function(t89, r79, e61) {
    return t89 = +t89, r79 >>>= 0, e61 || C1(this, t89, r79, 4, 4294967295, 0), this[r79] = t89 >>> 24, this[r79 + 1] = t89 >>> 16, this[r79 + 2] = t89 >>> 8, this[r79 + 3] = 255 & t89, r79 + 4;
}, u$1$1.prototype.writeIntLE = function(t90, r80, e62, n43) {
    if (t90 = +t90, r80 >>>= 0, !n43) {
        var i26 = Math.pow(2, 8 * e62 - 1);
        C1(this, t90, r80, e62, i26 - 1, -i26);
    }
    var o23 = 0, f8 = 1, u8 = 0;
    for(this[r80] = 255 & t90; ++o23 < e62 && (f8 *= 256);)t90 < 0 && 0 === u8 && 0 !== this[r80 + o23 - 1] && (u8 = 1), this[r80 + o23] = (t90 / f8 >> 0) - u8 & 255;
    return r80 + e62;
}, u$1$1.prototype.writeIntBE = function(t91, r81, e63, n44) {
    if (t91 = +t91, r81 >>>= 0, !n44) {
        var i27 = Math.pow(2, 8 * e63 - 1);
        C1(this, t91, r81, e63, i27 - 1, -i27);
    }
    var o24 = e63 - 1, f9 = 1, u9 = 0;
    for(this[r81 + o24] = 255 & t91; --o24 >= 0 && (f9 *= 256);)t91 < 0 && 0 === u9 && 0 !== this[r81 + o24 + 1] && (u9 = 1), this[r81 + o24] = (t91 / f9 >> 0) - u9 & 255;
    return r81 + e63;
}, u$1$1.prototype.writeInt8 = function(t92, r82, e64) {
    return t92 = +t92, r82 >>>= 0, e64 || C1(this, t92, r82, 1, 127, -128), t92 < 0 && (t92 = 255 + t92 + 1), this[r82] = 255 & t92, r82 + 1;
}, u$1$1.prototype.writeInt16LE = function(t93, r83, e65) {
    return t93 = +t93, r83 >>>= 0, e65 || C1(this, t93, r83, 2, 32767, -32768), this[r83] = 255 & t93, this[r83 + 1] = t93 >>> 8, r83 + 2;
}, u$1$1.prototype.writeInt16BE = function(t94, r84, e66) {
    return t94 = +t94, r84 >>>= 0, e66 || C1(this, t94, r84, 2, 32767, -32768), this[r84] = t94 >>> 8, this[r84 + 1] = 255 & t94, r84 + 2;
}, u$1$1.prototype.writeInt32LE = function(t95, r85, e67) {
    return t95 = +t95, r85 >>>= 0, e67 || C1(this, t95, r85, 4, 2147483647, -2147483648), this[r85] = 255 & t95, this[r85 + 1] = t95 >>> 8, this[r85 + 2] = t95 >>> 16, this[r85 + 3] = t95 >>> 24, r85 + 4;
}, u$1$1.prototype.writeInt32BE = function(t96, r86, e68) {
    return t96 = +t96, r86 >>>= 0, e68 || C1(this, t96, r86, 4, 2147483647, -2147483648), t96 < 0 && (t96 = 4294967295 + t96 + 1), this[r86] = t96 >>> 24, this[r86 + 1] = t96 >>> 16, this[r86 + 2] = t96 >>> 8, this[r86 + 3] = 255 & t96, r86 + 4;
}, u$1$1.prototype.writeFloatLE = function(t97, r87, e69) {
    return k1(this, t97, r87, !0, e69);
}, u$1$1.prototype.writeFloatBE = function(t98, r88, e70) {
    return k1(this, t98, r88, !1, e70);
}, u$1$1.prototype.writeDoubleLE = function(t99, r89, e71) {
    return M1(this, t99, r89, !0, e71);
}, u$1$1.prototype.writeDoubleBE = function(t100, r90, e72) {
    return M1(this, t100, r90, !1, e72);
}, u$1$1.prototype.copy = function(t101, r91, e73, n45) {
    if (!u$1$1.isBuffer(t101)) throw new TypeError("argument should be a Buffer");
    if (e73 || (e73 = 0), n45 || 0 === n45 || (n45 = this.length), r91 >= t101.length && (r91 = t101.length), r91 || (r91 = 0), n45 > 0 && n45 < e73 && (n45 = e73), n45 === e73) return 0;
    if (0 === t101.length || 0 === this.length) return 0;
    if (r91 < 0) throw new RangeError("targetStart out of bounds");
    if (e73 < 0 || e73 >= this.length) throw new RangeError("Index out of range");
    if (n45 < 0) throw new RangeError("sourceEnd out of bounds");
    n45 > this.length && (n45 = this.length), t101.length - r91 < n45 - e73 && (n45 = t101.length - r91 + e73);
    var i28 = n45 - e73;
    if (this === t101 && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(r91, e73, n45);
    else if (this === t101 && e73 < r91 && r91 < n45) for(var o25 = i28 - 1; o25 >= 0; --o25)t101[o25 + r91] = this[o25 + e73];
    else Uint8Array.prototype.set.call(t101, this.subarray(e73, n45), r91);
    return i28;
}, u$1$1.prototype.fill = function(t102, r92, e74, n46) {
    if ("string" == typeof t102) {
        if ("string" == typeof r92 ? (n46 = r92, r92 = 0, e74 = this.length) : "string" == typeof e74 && (n46 = e74, e74 = this.length), void 0 !== n46 && "string" != typeof n46) throw new TypeError("encoding must be a string");
        if ("string" == typeof n46 && !u$1$1.isEncoding(n46)) throw new TypeError("Unknown encoding: " + n46);
        if (1 === t102.length) {
            var i29 = t102.charCodeAt(0);
            ("utf8" === n46 && i29 < 128 || "latin1" === n46) && (t102 = i29);
        }
    } else "number" == typeof t102 ? t102 &= 255 : "boolean" == typeof t102 && (t102 = Number(t102));
    if (r92 < 0 || this.length < r92 || this.length < e74) throw new RangeError("Out of range index");
    if (e74 <= r92) return this;
    var o26;
    if (r92 >>>= 0, e74 = void 0 === e74 ? this.length : e74 >>> 0, t102 || (t102 = 0), "number" == typeof t102) for(o26 = r92; o26 < e74; ++o26)this[o26] = t102;
    else {
        var f10 = u$1$1.isBuffer(t102) ? t102 : u$1$1.from(t102, n46), s5 = f10.length;
        if (0 === s5) throw new TypeError('The value "' + t102 + '" is invalid for argument "value"');
        for(o26 = 0; o26 < e74 - r92; ++o26)this[o26 + r92] = f10[o26 % s5];
    }
    return this;
};
var j1 = /[^+/0-9A-Za-z-_]/g;
function _1(t103, r93) {
    var e75;
    r93 = r93 || 1 / 0;
    for(var n47 = t103.length, i30 = null, o27 = [], f11 = 0; f11 < n47; ++f11){
        if ((e75 = t103.charCodeAt(f11)) > 55295 && e75 < 57344) {
            if (!i30) {
                if (e75 > 56319) {
                    (r93 -= 3) > -1 && o27.push(239, 191, 189);
                    continue;
                }
                if (f11 + 1 === n47) {
                    (r93 -= 3) > -1 && o27.push(239, 191, 189);
                    continue;
                }
                i30 = e75;
                continue;
            }
            if (e75 < 56320) {
                (r93 -= 3) > -1 && o27.push(239, 191, 189), i30 = e75;
                continue;
            }
            e75 = 65536 + (i30 - 55296 << 10 | e75 - 56320);
        } else i30 && (r93 -= 3) > -1 && o27.push(239, 191, 189);
        if (i30 = null, e75 < 128) {
            if ((r93 -= 1) < 0) break;
            o27.push(e75);
        } else if (e75 < 2048) {
            if ((r93 -= 2) < 0) break;
            o27.push(e75 >> 6 | 192, 63 & e75 | 128);
        } else if (e75 < 65536) {
            if ((r93 -= 3) < 0) break;
            o27.push(e75 >> 12 | 224, e75 >> 6 & 63 | 128, 63 & e75 | 128);
        } else {
            if (!(e75 < 1114112)) throw new Error("Invalid code point");
            if ((r93 -= 4) < 0) break;
            o27.push(e75 >> 18 | 240, e75 >> 12 & 63 | 128, e75 >> 6 & 63 | 128, 63 & e75 | 128);
        }
    }
    return o27;
}
function z1(t104) {
    return n$1$1.toByteArray(function(t105) {
        if ((t105 = (t105 = t105.split("=")[0]).trim().replace(j1, "")).length < 2) return "";
        for(; t105.length % 4 != 0;)t105 += "=";
        return t105;
    }(t104));
}
function D1(t106, r94, e76, n48) {
    for(var i31 = 0; i31 < n48 && !(i31 + e76 >= r94.length || i31 >= t106.length); ++i31)r94[i31 + e76] = t106[i31];
    return i31;
}
function F1(t107, r95) {
    return t107 instanceof r95 || null != t107 && null != t107.constructor && null != t107.constructor.name && t107.constructor.name === r95.name;
}
function N1(t108) {
    return t108 != t108;
}
var Y1 = function() {
    for(var t109 = new Array(256), r96 = 0; r96 < 16; ++r96)for(var e = 16 * r96, n49 = 0; n49 < 16; ++n49)t109[e + n49] = "0123456789abcdef"[r96] + "0123456789abcdef"[n49];
    return t109;
}();
e$1$1.Buffer;
e$1$1.INSPECT_MAX_BYTES;
e$1$1.kMaxLength;
var e3 = {
}, n3 = e$1$1, o3 = n3.Buffer;
function t3(r97, e77) {
    for(var n in r97)e77[n] = r97[n];
}
function f3(r98, e78, n50) {
    return o3(r98, e78, n50);
}
o3.from && o3.alloc && o3.allocUnsafe && o3.allocUnsafeSlow ? e3 = n3 : (t3(n3, e3), e3.Buffer = f3), f3.prototype = Object.create(o3.prototype), t3(o3, f3), f3.from = function(r99, e79, n51) {
    if ("number" == typeof r99) throw new TypeError("Argument must not be a number");
    return o3(r99, e79, n51);
}, f3.alloc = function(r100, e80, n52) {
    if ("number" != typeof r100) throw new TypeError("Argument must be a number");
    var t110 = o3(r100);
    return void 0 !== e80 ? "string" == typeof n52 ? t110.fill(e80, n52) : t110.fill(e80) : t110.fill(0), t110;
}, f3.allocUnsafe = function(r101) {
    if ("number" != typeof r101) throw new TypeError("Argument must be a number");
    return o3(r101);
}, f3.allocUnsafeSlow = function(r102) {
    if ("number" != typeof r102) throw new TypeError("Argument must be a number");
    return n3.SlowBuffer(r102);
};
var u3 = e3;
var e$11 = {
}, s3 = u3.Buffer, i3 = s3.isEncoding || function(t111) {
    switch((t111 = "" + t111) && t111.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1;
    }
};
function a3(t112) {
    var e81;
    switch(this.encoding = (function(t113) {
        var e82 = function(t114) {
            if (!t114) return "utf8";
            for(var e83;;)switch(t114){
                case "utf8":
                case "utf-8":
                    return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return "utf16le";
                case "latin1":
                case "binary":
                    return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                    return t114;
                default:
                    if (e83) return;
                    t114 = ("" + t114).toLowerCase(), e83 = !0;
            }
        }(t113);
        if ("string" != typeof e82 && (s3.isEncoding === i3 || !i3(t113))) throw new Error("Unknown encoding: " + t113);
        return e82 || t113;
    })(t112), this.encoding){
        case "utf16le":
            this.text = h3, this.end = l3, e81 = 4;
            break;
        case "utf8":
            this.fillLast = n$11, e81 = 4;
            break;
        case "base64":
            this.text = u$11, this.end = o$11, e81 = 3;
            break;
        default:
            return this.write = f$1, this.end = c3, void 0;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = s3.allocUnsafe(e81);
}
function r3(t115) {
    return t115 <= 127 ? 0 : t115 >> 5 == 6 ? 2 : t115 >> 4 == 14 ? 3 : t115 >> 3 == 30 ? 4 : t115 >> 6 == 2 ? -1 : -2;
}
function n$11(t116) {
    var e84 = this.lastTotal - this.lastNeed, s6 = function(t117, e85, s) {
        if (128 != (192 & e85[0])) return t117.lastNeed = 0, "�";
        if (t117.lastNeed > 1 && e85.length > 1) {
            if (128 != (192 & e85[1])) return t117.lastNeed = 1, "�";
            if (t117.lastNeed > 2 && e85.length > 2 && 128 != (192 & e85[2])) return t117.lastNeed = 2, "�";
        }
    }(this, t116);
    return void 0 !== s6 ? s6 : this.lastNeed <= t116.length ? (t116.copy(this.lastChar, e84, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t116.copy(this.lastChar, e84, 0, t116.length), this.lastNeed -= t116.length, void 0);
}
function h3(t118, e86) {
    if ((t118.length - e86) % 2 == 0) {
        var s7 = t118.toString("utf16le", e86);
        if (s7) {
            var i32 = s7.charCodeAt(s7.length - 1);
            if (i32 >= 55296 && i32 <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t118[t118.length - 2], this.lastChar[1] = t118[t118.length - 1], s7.slice(0, -1);
        }
        return s7;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t118[t118.length - 1], t118.toString("utf16le", e86, t118.length - 1);
}
function l3(t119) {
    var e87 = t119 && t119.length ? this.write(t119) : "";
    if (this.lastNeed) {
        var s8 = this.lastTotal - this.lastNeed;
        return e87 + this.lastChar.toString("utf16le", 0, s8);
    }
    return e87;
}
function u$11(t120, e88) {
    var s9 = (t120.length - e88) % 3;
    return 0 === s9 ? t120.toString("base64", e88) : (this.lastNeed = 3 - s9, this.lastTotal = 3, 1 === s9 ? this.lastChar[0] = t120[t120.length - 1] : (this.lastChar[0] = t120[t120.length - 2], this.lastChar[1] = t120[t120.length - 1]), t120.toString("base64", e88, t120.length - s9));
}
function o$11(t121) {
    var e89 = t121 && t121.length ? this.write(t121) : "";
    return this.lastNeed ? e89 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e89;
}
function f$1(t122) {
    return t122.toString(this.encoding);
}
function c3(t123) {
    return t123 && t123.length ? this.write(t123) : "";
}
e$11.StringDecoder = a3, a3.prototype.write = function(t124) {
    if (0 === t124.length) return "";
    var e90, s10;
    if (this.lastNeed) {
        if (void 0 === (e90 = this.fillLast(t124))) return "";
        s10 = this.lastNeed, this.lastNeed = 0;
    } else s10 = 0;
    return s10 < t124.length ? e90 ? e90 + this.text(t124, s10) : this.text(t124, s10) : e90 || "";
}, a3.prototype.end = function(t125) {
    var e91 = t125 && t125.length ? this.write(t125) : "";
    return this.lastNeed ? e91 + "�" : e91;
}, a3.prototype.text = function(t126, e92) {
    var s11 = function(t127, e93, s12) {
        var i34 = e93.length - 1;
        if (i34 < s12) return 0;
        var a8 = r3(e93[i34]);
        if (a8 >= 0) return a8 > 0 && (t127.lastNeed = a8 - 1), a8;
        if (--i34 < s12 || -2 === a8) return 0;
        if ((a8 = r3(e93[i34])) >= 0) return a8 > 0 && (t127.lastNeed = a8 - 2), a8;
        if (--i34 < s12 || -2 === a8) return 0;
        if ((a8 = r3(e93[i34])) >= 0) return a8 > 0 && (2 === a8 ? a8 = 0 : t127.lastNeed = a8 - 3), a8;
        return 0;
    }(this, t126, e92);
    if (!this.lastNeed) return t126.toString("utf8", e92);
    this.lastTotal = s11;
    var i33 = t126.length - (s11 - this.lastNeed);
    return t126.copy(this.lastChar, 0, i33), t126.toString("utf8", e92, i33);
}, a3.prototype.fillLast = function(t128) {
    if (this.lastNeed <= t128.length) return t128.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    t128.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t128.length), this.lastNeed -= t128.length;
};
e$11.StringDecoder;
e$11.StringDecoder;
var exports$2$1 = {
}, _dewExec$2$1 = false;
function dew$2$1() {
    if (_dewExec$2$1) return exports$2$1;
    _dewExec$2$1 = true;
    exports$2$1.byteLength = byteLength;
    exports$2$1.toByteArray = toByteArray;
    exports$2$1.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(var i13 = 0, len1 = code.length; i13 < len1; ++i13){
        lookup[i13] = code[i13];
        revLookup[code.charCodeAt(i13)] = i13;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
        var len = b64.length;
        if (len % 4 > 0) {
            throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1) validLen = len;
        var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
        return [
            validLen,
            placeHoldersLen
        ];
    }
    function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i9;
        for(i9 = 0; i9 < len; i9 += 4){
            tmp = revLookup[b64.charCodeAt(i9)] << 18 | revLookup[b64.charCodeAt(i9 + 1)] << 12 | revLookup[b64.charCodeAt(i9 + 2)] << 6 | revLookup[b64.charCodeAt(i9 + 3)];
            arr[curByte++] = tmp >> 16 & 255;
            arr[curByte++] = tmp >> 8 & 255;
            arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
            tmp = revLookup[b64.charCodeAt(i9)] << 2 | revLookup[b64.charCodeAt(i9 + 1)] >> 4;
            arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
            tmp = revLookup[b64.charCodeAt(i9)] << 10 | revLookup[b64.charCodeAt(i9 + 1)] << 4 | revLookup[b64.charCodeAt(i9 + 2)] >> 2;
            arr[curByte++] = tmp >> 8 & 255;
            arr[curByte++] = tmp & 255;
        }
        return arr;
    }
    function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for(var i10 = start; i10 < end; i10 += 3){
            tmp = (uint8[i10] << 16 & 16711680) + (uint8[i10 + 1] << 8 & 65280) + (uint8[i10 + 2] & 255);
            output.push(tripletToBase64(tmp));
        }
        return output.join("");
    }
    function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for(var i14 = 0, len2 = len - extraBytes; i14 < len2; i14 += maxChunkLength){
            parts.push(encodeChunk(uint8, i14, i14 + maxChunkLength > len2 ? len2 : i14 + maxChunkLength));
        }
        if (extraBytes === 1) {
            tmp = uint8[len - 1];
            parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
        } else if (extraBytes === 2) {
            tmp = (uint8[len - 2] << 8) + uint8[len - 1];
            parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
        }
        return parts.join("");
    }
    return exports$2$1;
}
var exports$1$1 = {
}, _dewExec$1$1 = false;
function dew$1$1() {
    if (_dewExec$1$1) return exports$1$1;
    _dewExec$1$1 = true;
    exports$1$1.read = function(buffer1, offset, isLE, mLen, nBytes) {
        var e8, m7;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i15 = isLE ? nBytes - 1 : 0;
        var d5 = isLE ? -1 : 1;
        var s8 = buffer1[offset + i15];
        i15 += d5;
        e8 = s8 & (1 << -nBits) - 1;
        s8 >>= -nBits;
        nBits += eLen;
        for(; nBits > 0; e8 = e8 * 256 + buffer1[offset + i15], i15 += d5, nBits -= 8){
        }
        m7 = e8 & (1 << -nBits) - 1;
        e8 >>= -nBits;
        nBits += mLen;
        for(; nBits > 0; m7 = m7 * 256 + buffer1[offset + i15], i15 += d5, nBits -= 8){
        }
        if (e8 === 0) {
            e8 = 1 - eBias;
        } else if (e8 === eMax) {
            return m7 ? NaN : (s8 ? -1 : 1) * Infinity;
        } else {
            m7 = m7 + Math.pow(2, mLen);
            e8 = e8 - eBias;
        }
        return (s8 ? -1 : 1) * m7 * Math.pow(2, e8 - mLen);
    };
    exports$1$1.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
        var e9, m8, c7;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i16 = isLE ? 0 : nBytes - 1;
        var d6 = isLE ? 1 : -1;
        var s9 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
            m8 = isNaN(value) ? 1 : 0;
            e9 = eMax;
        } else {
            e9 = Math.floor(Math.log(value) / Math.LN2);
            if (value * (c7 = Math.pow(2, -e9)) < 1) {
                e9--;
                c7 *= 2;
            }
            if (e9 + eBias >= 1) {
                value += rt / c7;
            } else {
                value += rt * Math.pow(2, 1 - eBias);
            }
            if (value * c7 >= 2) {
                e9++;
                c7 /= 2;
            }
            if (e9 + eBias >= eMax) {
                m8 = 0;
                e9 = eMax;
            } else if (e9 + eBias >= 1) {
                m8 = (value * c7 - 1) * Math.pow(2, mLen);
                e9 = e9 + eBias;
            } else {
                m8 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                e9 = 0;
            }
        }
        for(; mLen >= 8; buffer2[offset + i16] = m8 & 255, i16 += d6, m8 /= 256, mLen -= 8){
        }
        e9 = e9 << mLen | m8;
        eLen += mLen;
        for(; eLen > 0; buffer2[offset + i16] = e9 & 255, i16 += d6, e9 /= 256, eLen -= 8){
        }
        buffer2[offset + i16 - d6] |= s9 * 128;
    };
    return exports$1$1;
}
var exports$g = {
}, _dewExec$g = false;
function dew$g() {
    if (_dewExec$g) return exports$g;
    _dewExec$g = true;
    const base64 = dew$2$1();
    const ieee754 = dew$1$1();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports$g.Buffer = Buffer4;
    exports$g.SlowBuffer = SlowBuffer;
    exports$g.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports$g.kMaxLength = K_MAX_LENGTH;
    Buffer4.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer4.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
        try {
            const arr = new Uint8Array(1);
            const proto = {
                foo: function() {
                    return 42;
                }
            };
            Object.setPrototypeOf(proto, Uint8Array.prototype);
            Object.setPrototypeOf(arr, proto);
            return arr.foo() === 42;
        } catch (e) {
            return false;
        }
    }
    Object.defineProperty(Buffer4.prototype, "parent", {
        enumerable: true,
        get: function() {
            if (!Buffer4.isBuffer(this)) return undefined;
            return this.buffer;
        }
    });
    Object.defineProperty(Buffer4.prototype, "offset", {
        enumerable: true,
        get: function() {
            if (!Buffer4.isBuffer(this)) return undefined;
            return this.byteOffset;
        }
    });
    function createBuffer(length) {
        if (length > 2147483647) {
            throw new RangeError("The value \"" + length + "\" is invalid for option \"size\"");
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer4.prototype);
        return buf;
    }
    function Buffer4(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
            if (typeof encodingOrOffset === "string") {
                throw new TypeError("The \"string\" argument must be of type string. Received type number");
            }
            return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
    }
    Buffer4.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
            return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
            return fromArrayView(value);
        }
        if (value == null) {
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
            return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
            return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
            throw new TypeError("The \"value\" argument must not be of type number. Received type number");
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
            return Buffer4.from(valueOf, encodingOrOffset, length);
        }
        const b4 = fromObject(value);
        if (b4) return b4;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
            return Buffer4.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
    }
    Buffer4.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer4.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer4, Uint8Array);
    function assertSize(size) {
        if (typeof size !== "number") {
            throw new TypeError("\"size\" argument must be of type number");
        } else if (size < 0) {
            throw new RangeError("The value \"" + size + "\" is invalid for option \"size\"");
        }
    }
    function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
            return createBuffer(size);
        }
        if (fill !== undefined) {
            return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
    }
    Buffer4.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer4.allocUnsafe = function(size) {
        return allocUnsafe(size);
    };
    Buffer4.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
    };
    function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
            encoding = "utf8";
        }
        if (!Buffer4.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength1(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
            buf = buf.slice(0, actual);
        }
        return buf;
    }
    function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for(let i17 = 0; i17 < length; i17 += 1){
            buf[i17] = array[i17] & 255;
        }
        return buf;
    }
    function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
            const copy = new Uint8Array(arrayView);
            return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
            throw new RangeError("\"offset\" is outside of buffer bounds");
        }
        if (array.byteLength < byteOffset + (length || 0)) {
            throw new RangeError("\"length\" is outside of buffer bounds");
        }
        let buf;
        if (byteOffset === undefined && length === undefined) {
            buf = new Uint8Array(array);
        } else if (length === undefined) {
            buf = new Uint8Array(array, byteOffset);
        } else {
            buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer4.prototype);
        return buf;
    }
    function fromObject(obj) {
        if (Buffer4.isBuffer(obj)) {
            const len = checked(obj.length) | 0;
            const buf = createBuffer(len);
            if (buf.length === 0) {
                return buf;
            }
            obj.copy(buf, 0, 0, len);
            return buf;
        }
        if (obj.length !== undefined) {
            if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
                return createBuffer(0);
            }
            return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
            return fromArrayLike(obj.data);
        }
    }
    function checked(length) {
        if (length >= 2147483647) {
            throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + 2147483647..toString(16) + " bytes");
        }
        return length | 0;
    }
    function SlowBuffer(length) {
        if (+length != length) {
            length = 0;
        }
        return Buffer4.alloc(+length);
    }
    Buffer4.isBuffer = function isBuffer(b5) {
        return b5 != null && b5._isBuffer === true && b5 !== Buffer4.prototype;
    };
    Buffer4.compare = function compare(a7, b6) {
        if (isInstance(a7, Uint8Array)) a7 = Buffer4.from(a7, a7.offset, a7.byteLength);
        if (isInstance(b6, Uint8Array)) b6 = Buffer4.from(b6, b6.offset, b6.byteLength);
        if (!Buffer4.isBuffer(a7) || !Buffer4.isBuffer(b6)) {
            throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
        }
        if (a7 === b6) return 0;
        let x3 = a7.length;
        let y11 = b6.length;
        for(let i18 = 0, len = Math.min(x3, y11); i18 < len; ++i18){
            if (a7[i18] !== b6[i18]) {
                x3 = a7[i18];
                y11 = b6[i18];
                break;
            }
        }
        if (x3 < y11) return -1;
        if (y11 < x3) return 1;
        return 0;
    };
    Buffer4.isEncoding = function isEncoding(encoding) {
        switch(String(encoding).toLowerCase()){
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return true;
            default:
                return false;
        }
    };
    Buffer4.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
            throw new TypeError("\"list\" argument must be an Array of Buffers");
        }
        if (list.length === 0) {
            return Buffer4.alloc(0);
        }
        let i19;
        if (length === undefined) {
            length = 0;
            for(i19 = 0; i19 < list.length; ++i19){
                length += list[i19].length;
            }
        }
        const buffer3 = Buffer4.allocUnsafe(length);
        let pos = 0;
        for(i19 = 0; i19 < list.length; ++i19){
            let buf = list[i19];
            if (isInstance(buf, Uint8Array)) {
                if (pos + buf.length > buffer3.length) {
                    if (!Buffer4.isBuffer(buf)) buf = Buffer4.from(buf);
                    buf.copy(buffer3, pos);
                } else {
                    Uint8Array.prototype.set.call(buffer3, buf, pos);
                }
            } else if (!Buffer4.isBuffer(buf)) {
                throw new TypeError("\"list\" argument must be an Array of Buffers");
            } else {
                buf.copy(buffer3, pos);
            }
            pos += buf.length;
        }
        return buffer3;
    };
    function byteLength1(string, encoding) {
        if (Buffer4.isBuffer(string)) {
            return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
            return string.byteLength;
        }
        if (typeof string !== "string") {
            throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. " + "Received type " + typeof string);
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0;
        let loweredCase = false;
        for(;;){
            switch(encoding){
                case "ascii":
                case "latin1":
                case "binary":
                    return len;
                case "utf8":
                case "utf-8":
                    return utf8ToBytes(string).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return len * 2;
                case "hex":
                    return len >>> 1;
                case "base64":
                    return base64ToBytes(string).length;
                default:
                    if (loweredCase) {
                        return mustMatch ? -1 : utf8ToBytes(string).length;
                    }
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
            }
        }
    }
    Buffer4.byteLength = byteLength1;
    function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === undefined || start < 0) {
            start = 0;
        }
        if (start > this.length) {
            return "";
        }
        if (end === undefined || end > this.length) {
            end = this.length;
        }
        if (end <= 0) {
            return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
            return "";
        }
        if (!encoding) encoding = "utf8";
        while(true){
            switch(encoding){
                case "hex":
                    return hexSlice(this, start, end);
                case "utf8":
                case "utf-8":
                    return utf8Slice(this, start, end);
                case "ascii":
                    return asciiSlice(this, start, end);
                case "latin1":
                case "binary":
                    return latin1Slice(this, start, end);
                case "base64":
                    return base64Slice(this, start, end);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return utf16leSlice(this, start, end);
                default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = (encoding + "").toLowerCase();
                    loweredCase = true;
            }
        }
    }
    Buffer4.prototype._isBuffer = true;
    function swap(b7, n, m) {
        const i20 = b7[n];
        b7[n] = b7[m];
        b7[m] = i20;
    }
    Buffer4.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for(let i23 = 0; i23 < len; i23 += 2){
            swap(this, i23, i23 + 1);
        }
        return this;
    };
    Buffer4.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for(let i24 = 0; i24 < len; i24 += 4){
            swap(this, i24, i24 + 3);
            swap(this, i24 + 1, i24 + 2);
        }
        return this;
    };
    Buffer4.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for(let i25 = 0; i25 < len; i25 += 8){
            swap(this, i25, i25 + 7);
            swap(this, i25 + 1, i25 + 6);
            swap(this, i25 + 2, i25 + 5);
            swap(this, i25 + 3, i25 + 4);
        }
        return this;
    };
    Buffer4.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0) return "";
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
    };
    Buffer4.prototype.toLocaleString = Buffer4.prototype.toString;
    Buffer4.prototype.equals = function equals(b8) {
        if (!Buffer4.isBuffer(b8)) throw new TypeError("Argument must be a Buffer");
        if (this === b8) return true;
        return Buffer4.compare(this, b8) === 0;
    };
    Buffer4.prototype.inspect = function inspect() {
        let str = "";
        const max = exports$g.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max) str += " ... ";
        return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
        Buffer4.prototype[customInspectSymbol] = Buffer4.prototype.inspect;
    }
    Buffer4.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
            target = Buffer4.from(target, target.offset, target.byteLength);
        }
        if (!Buffer4.isBuffer(target)) {
            throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. " + "Received type " + typeof target);
        }
        if (start === undefined) {
            start = 0;
        }
        if (end === undefined) {
            end = target ? target.length : 0;
        }
        if (thisStart === undefined) {
            thisStart = 0;
        }
        if (thisEnd === undefined) {
            thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
            throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
            return 0;
        }
        if (thisStart >= thisEnd) {
            return -1;
        }
        if (start >= end) {
            return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        let x4 = thisEnd - thisStart;
        let y21 = end - start;
        const len = Math.min(x4, y21);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for(let i26 = 0; i26 < len; ++i26){
            if (thisCopy[i26] !== targetCopy[i26]) {
                x4 = thisCopy[i26];
                y21 = targetCopy[i26];
                break;
            }
        }
        if (x4 < y21) return -1;
        if (y21 < x4) return 1;
        return 0;
    };
    function bidirectionalIndexOf(buffer4, val, byteOffset, encoding, dir) {
        if (buffer4.length === 0) return -1;
        if (typeof byteOffset === "string") {
            encoding = byteOffset;
            byteOffset = 0;
        } else if (byteOffset > 2147483647) {
            byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
            byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
            byteOffset = dir ? 0 : buffer4.length - 1;
        }
        if (byteOffset < 0) byteOffset = buffer4.length + byteOffset;
        if (byteOffset >= buffer4.length) {
            if (dir) return -1;
            else byteOffset = buffer4.length - 1;
        } else if (byteOffset < 0) {
            if (dir) byteOffset = 0;
            else return -1;
        }
        if (typeof val === "string") {
            val = Buffer4.from(val, encoding);
        }
        if (Buffer4.isBuffer(val)) {
            if (val.length === 0) {
                return -1;
            }
            return arrayIndexOf(buffer4, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
            val = val & 255;
            if (typeof Uint8Array.prototype.indexOf === "function") {
                if (dir) {
                    return Uint8Array.prototype.indexOf.call(buffer4, val, byteOffset);
                } else {
                    return Uint8Array.prototype.lastIndexOf.call(buffer4, val, byteOffset);
                }
            }
            return arrayIndexOf(buffer4, [
                val
            ], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== undefined) {
            encoding = String(encoding).toLowerCase();
            if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                if (arr.length < 2 || val.length < 2) {
                    return -1;
                }
                indexSize = 2;
                arrLength /= 2;
                valLength /= 2;
                byteOffset /= 2;
            }
        }
        function read1(buf, i27) {
            if (indexSize === 1) {
                return buf[i27];
            } else {
                return buf.readUInt16BE(i27 * indexSize);
            }
        }
        let i28;
        if (dir) {
            let foundIndex = -1;
            for(i28 = byteOffset; i28 < arrLength; i28++){
                if (read1(arr, i28) === read1(val, foundIndex === -1 ? 0 : i28 - foundIndex)) {
                    if (foundIndex === -1) foundIndex = i28;
                    if (i28 - foundIndex + 1 === valLength) return foundIndex * indexSize;
                } else {
                    if (foundIndex !== -1) i28 -= i28 - foundIndex;
                    foundIndex = -1;
                }
            }
        } else {
            if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
            for(i28 = byteOffset; i28 >= 0; i28--){
                let found = true;
                for(let j3 = 0; j3 < valLength; j3++){
                    if (read1(arr, i28 + j3) !== read1(val, j3)) {
                        found = false;
                        break;
                    }
                }
                if (found) return i28;
            }
        }
        return -1;
    }
    Buffer4.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer4.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer4.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
            length = remaining;
        } else {
            length = Number(length);
            if (length > remaining) {
                length = remaining;
            }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
            length = strLen / 2;
        }
        let i29;
        for(i29 = 0; i29 < length; ++i29){
            const parsed = parseInt(string.substr(i29 * 2, 2), 16);
            if (numberIsNaN(parsed)) return i29;
            buf[offset + i29] = parsed;
        }
        return i29;
    }
    function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer4.prototype.write = function write(string, offset, length, encoding) {
        if (offset === undefined) {
            encoding = "utf8";
            length = this.length;
            offset = 0;
        } else if (length === undefined && typeof offset === "string") {
            encoding = offset;
            length = this.length;
            offset = 0;
        } else if (isFinite(offset)) {
            offset = offset >>> 0;
            if (isFinite(length)) {
                length = length >>> 0;
                if (encoding === undefined) encoding = "utf8";
            } else {
                encoding = length;
                length = undefined;
            }
        } else {
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        }
        const remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
            throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding) encoding = "utf8";
        let loweredCase = false;
        for(;;){
            switch(encoding){
                case "hex":
                    return hexWrite(this, string, offset, length);
                case "utf8":
                case "utf-8":
                    return utf8Write(this, string, offset, length);
                case "ascii":
                case "latin1":
                case "binary":
                    return asciiWrite(this, string, offset, length);
                case "base64":
                    return base64Write(this, string, offset, length);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return ucs2Write(this, string, offset, length);
                default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
            }
        }
    };
    Buffer4.prototype.toJSON = function toJSON() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    };
    function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
            return base64.fromByteArray(buf);
        } else {
            return base64.fromByteArray(buf.slice(start, end));
        }
    }
    function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i30 = start;
        while(i30 < end){
            const firstByte = buf[i30];
            let codePoint = null;
            let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
            if (i30 + bytesPerSequence <= end) {
                let secondByte, thirdByte, fourthByte, tempCodePoint;
                switch(bytesPerSequence){
                    case 1:
                        if (firstByte < 128) {
                            codePoint = firstByte;
                        }
                        break;
                    case 2:
                        secondByte = buf[i30 + 1];
                        if ((secondByte & 192) === 128) {
                            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                            if (tempCodePoint > 127) {
                                codePoint = tempCodePoint;
                            }
                        }
                        break;
                    case 3:
                        secondByte = buf[i30 + 1];
                        thirdByte = buf[i30 + 2];
                        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                codePoint = tempCodePoint;
                            }
                        }
                        break;
                    case 4:
                        secondByte = buf[i30 + 1];
                        thirdByte = buf[i30 + 2];
                        fourthByte = buf[i30 + 3];
                        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                codePoint = tempCodePoint;
                            }
                        }
                }
            }
            if (codePoint === null) {
                codePoint = 65533;
                bytesPerSequence = 1;
            } else if (codePoint > 65535) {
                codePoint -= 65536;
                res.push(codePoint >>> 10 & 1023 | 55296);
                codePoint = 56320 | codePoint & 1023;
            }
            res.push(codePoint);
            i30 += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= 4096) {
            return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i31 = 0;
        while(i31 < len){
            res += String.fromCharCode.apply(String, codePoints.slice(i31, i31 += MAX_ARGUMENTS_LENGTH));
        }
        return res;
    }
    function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for(let i32 = start; i32 < end; ++i32){
            ret += String.fromCharCode(buf[i32] & 127);
        }
        return ret;
    }
    function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for(let i33 = start; i33 < end; ++i33){
            ret += String.fromCharCode(buf[i33]);
        }
        return ret;
    }
    function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        let out = "";
        for(let i34 = start; i34 < end; ++i34){
            out += hexSliceLookupTable[buf[i34]];
        }
        return out;
    }
    function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for(let i35 = 0; i35 < bytes.length - 1; i35 += 2){
            res += String.fromCharCode(bytes[i35] + bytes[i35 + 1] * 256);
        }
        return res;
    }
    Buffer4.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;
        if (start < 0) {
            start += len;
            if (start < 0) start = 0;
        } else if (start > len) {
            start = len;
        }
        if (end < 0) {
            end += len;
            if (end < 0) end = 0;
        } else if (end > len) {
            end = len;
        }
        if (end < start) end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer4.prototype);
        return newBuf;
    };
    function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer4.prototype.readUintLE = Buffer4.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        let val = this[offset];
        let mul = 1;
        let i36 = 0;
        while(++i36 < byteLength && (mul *= 256)){
            val += this[offset + i36] * mul;
        }
        return val;
    };
    Buffer4.prototype.readUintBE = Buffer4.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
        }
        let val = this[offset + --byteLength];
        let mul = 1;
        while(byteLength > 0 && (mul *= 256)){
            val += this[offset + --byteLength] * mul;
        }
        return val;
    };
    Buffer4.prototype.readUint8 = Buffer4.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
    };
    Buffer4.prototype.readUint16LE = Buffer4.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
    };
    Buffer4.prototype.readUint16BE = Buffer4.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
    };
    Buffer4.prototype.readUint32LE = Buffer4.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer4.prototype.readUint32BE = Buffer4.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer4.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === undefined || last === undefined) {
            boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer4.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === undefined || last === undefined) {
            boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer4.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        let val = this[offset];
        let mul = 1;
        let i37 = 0;
        while(++i37 < byteLength && (mul *= 256)){
            val += this[offset + i37] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
    };
    Buffer4.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        let i38 = byteLength;
        let mul = 1;
        let val = this[offset + --i38];
        while(i38 > 0 && (mul *= 256)){
            val += this[offset + --i38] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
    };
    Buffer4.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128)) return this[offset];
        return (255 - this[offset] + 1) * -1;
    };
    Buffer4.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
    };
    Buffer4.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
    };
    Buffer4.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer4.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer4.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === undefined || last === undefined) {
            boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer4.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === undefined || last === undefined) {
            boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer4.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer4.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer4.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer4.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer4.isBuffer(buf)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
        if (value > max || value < min) throw new RangeError("\"value\" argument is out of bounds");
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer4.prototype.writeUintLE = Buffer4.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            const maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        let mul = 1;
        let i39 = 0;
        this[offset] = value & 255;
        while(++i39 < byteLength && (mul *= 256)){
            this[offset + i39] = value / mul & 255;
        }
        return offset + byteLength;
    };
    Buffer4.prototype.writeUintBE = Buffer4.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            const maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        let i40 = byteLength - 1;
        let mul = 1;
        this[offset + i40] = value & 255;
        while(--i40 >= 0 && (mul *= 256)){
            this[offset + i40] = value / mul & 255;
        }
        return offset + byteLength;
    };
    Buffer4.prototype.writeUint8 = Buffer4.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
    };
    Buffer4.prototype.writeUint16LE = Buffer4.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
    };
    Buffer4.prototype.writeUint16BE = Buffer4.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
    };
    Buffer4.prototype.writeUint32LE = Buffer4.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
    };
    Buffer4.prototype.writeUint32BE = Buffer4.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
    }
    Buffer4.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer4.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer4.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
            const limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        let i41 = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while(++i41 < byteLength && (mul *= 256)){
            if (value < 0 && sub === 0 && this[offset + i41 - 1] !== 0) {
                sub = 1;
            }
            this[offset + i41] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
    };
    Buffer4.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
            const limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        let i42 = byteLength - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i42] = value & 255;
        while(--i42 >= 0 && (mul *= 256)){
            if (value < 0 && sub === 0 && this[offset + i42 + 1] !== 0) {
                sub = 1;
            }
            this[offset + i42] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
    };
    Buffer4.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
        if (value < 0) value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
    };
    Buffer4.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
    };
    Buffer4.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
    };
    Buffer4.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
    };
    Buffer4.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0) value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
    };
    Buffer4.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer4.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
            checkIEEE754(buf, value, offset, 4);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
    }
    Buffer4.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer4.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
            checkIEEE754(buf, value, offset, 8);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
    }
    Buffer4.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer4.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer4.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer4.isBuffer(target)) throw new TypeError("argument should be a Buffer");
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;
        if (targetStart < 0) {
            throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
            end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
            this.copyWithin(targetStart, start, end);
        } else {
            Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
        }
        return len;
    };
    Buffer4.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
            if (typeof start === "string") {
                encoding = start;
                start = 0;
                end = this.length;
            } else if (typeof end === "string") {
                encoding = end;
                end = this.length;
            }
            if (encoding !== undefined && typeof encoding !== "string") {
                throw new TypeError("encoding must be a string");
            }
            if (typeof encoding === "string" && !Buffer4.isEncoding(encoding)) {
                throw new TypeError("Unknown encoding: " + encoding);
            }
            if (val.length === 1) {
                const code = val.charCodeAt(0);
                if (encoding === "utf8" && code < 128 || encoding === "latin1") {
                    val = code;
                }
            }
        } else if (typeof val === "number") {
            val = val & 255;
        } else if (typeof val === "boolean") {
            val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
            throw new RangeError("Out of range index");
        }
        if (end <= start) {
            return this;
        }
        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;
        if (!val) val = 0;
        let i43;
        if (typeof val === "number") {
            for(i43 = start; i43 < end; ++i43){
                this[i43] = val;
            }
        } else {
            const bytes = Buffer4.isBuffer(val) ? val : Buffer4.from(val, encoding);
            const len = bytes.length;
            if (len === 0) {
                throw new TypeError("The value \"" + val + "\" is invalid for argument \"value\"");
            }
            for(i43 = 0; i43 < end - start; ++i43){
                this[i43 + start] = bytes[i43 % len];
            }
        }
        return this;
    };
    const errors = {
    };
    function E3(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
            constructor(){
                super();
                Object.defineProperty(this, "message", {
                    value: getMessage.apply(this, arguments),
                    writable: true,
                    configurable: true
                });
                this.name = `${this.name} [${sym}]`;
                this.stack;
                delete this.name;
            }
            get code() {
                return sym;
            }
            set code(value) {
                Object.defineProperty(this, "code", {
                    configurable: true,
                    enumerable: true,
                    value,
                    writable: true
                });
            }
            toString() {
                return `${this.name} [${sym}]: ${this.message}`;
            }
        };
    }
    E3("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
        if (name) {
            return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E3("ERR_INVALID_ARG_TYPE", function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E3("ERR_OUT_OF_RANGE", function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
                received = addNumericalSeparator(received);
            }
            received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
        let res = "";
        let i44 = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for(; i44 >= start + 4; i44 -= 3){
            res = `_${val.slice(i44 - 3, i44)}${res}`;
        }
        return `${val.slice(0, i44)}${res}`;
    }
    function checkBounds(buf, offset, byteLength) {
        validateNumber(offset, "offset");
        if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
            boundsError(offset, buf.length - (byteLength + 1));
        }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength) {
        if (value > max || value < min) {
            const n8 = typeof min === "bigint" ? "n" : "";
            let range;
            if (byteLength > 3) {
                if (min === 0 || min === BigInt(0)) {
                    range = `>= 0${n8} and < 2${n8} ** ${(byteLength + 1) * 8}${n8}`;
                } else {
                    range = `>= -(2${n8} ** ${(byteLength + 1) * 8 - 1}${n8}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n8}`;
                }
            } else {
                range = `>= ${min}${n8} and <= ${max}${n8}`;
            }
            throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength);
    }
    function validateNumber(value, name) {
        if (typeof value !== "number") {
            throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
    }
    function boundsError(value, length, type2) {
        if (Math.floor(value) !== value) {
            validateNumber(value, type2);
            throw new errors.ERR_OUT_OF_RANGE(type2 || "offset", "an integer", value);
        }
        if (length < 0) {
            throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(type2 || "offset", `>= ${type2 ? 1 : 0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while(str.length % 4 !== 0){
            str = str + "=";
        }
        return str;
    }
    function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for(let i45 = 0; i45 < length; ++i45){
            codePoint = string.charCodeAt(i45);
            if (codePoint > 55295 && codePoint < 57344) {
                if (!leadSurrogate) {
                    if (codePoint > 56319) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                        continue;
                    } else if (i45 + 1 === length) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                        continue;
                    }
                    leadSurrogate = codePoint;
                    continue;
                }
                if (codePoint < 56320) {
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    leadSurrogate = codePoint;
                    continue;
                }
                codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
            } else if (leadSurrogate) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
            }
            leadSurrogate = null;
            if (codePoint < 128) {
                if ((units -= 1) < 0) break;
                bytes.push(codePoint);
            } else if (codePoint < 2048) {
                if ((units -= 2) < 0) break;
                bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
            } else if (codePoint < 65536) {
                if ((units -= 3) < 0) break;
                bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
            } else if (codePoint < 1114112) {
                if ((units -= 4) < 0) break;
                bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
            } else {
                throw new Error("Invalid code point");
            }
        }
        return bytes;
    }
    function asciiToBytes(str) {
        const byteArray = [];
        for(let i46 = 0; i46 < str.length; ++i46){
            byteArray.push(str.charCodeAt(i46) & 255);
        }
        return byteArray;
    }
    function utf16leToBytes(str, units) {
        let c8, hi, lo;
        const byteArray = [];
        for(let i47 = 0; i47 < str.length; ++i47){
            if ((units -= 2) < 0) break;
            c8 = str.charCodeAt(i47);
            hi = c8 >> 8;
            lo = c8 % 256;
            byteArray.push(lo);
            byteArray.push(hi);
        }
        return byteArray;
    }
    function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
        let i48;
        for(i48 = 0; i48 < length; ++i48){
            if (i48 + offset >= dst.length || i48 >= src.length) break;
            dst[i48 + offset] = src[i48];
        }
        return i48;
    }
    function isInstance(obj, type3) {
        return obj instanceof type3 || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type3.name;
    }
    function numberIsNaN(obj) {
        return obj !== obj;
    }
    const hexSliceLookupTable = function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for(let i49 = 0; i49 < 16; ++i49){
            const i16 = i49 * 16;
            for(let j4 = 0; j4 < 16; ++j4){
                table[i16 + j4] = alphabet[i49] + alphabet[j4];
            }
        }
        return table;
    }();
    function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
    }
    return exports$g;
}
var buffer = dew$g();
buffer.Buffer;
buffer.INSPECT_MAX_BYTES;
buffer.kMaxLength;
var exports$f = {
}, _dewExec$f = false;
function dew$f() {
    if (_dewExec$f) return exports$f;
    _dewExec$f = true;
    if (typeof Object.create === "function") {
        exports$f = function inherits(ctor, superCtor) {
            if (superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
            }
        };
    } else {
        exports$f = function inherits(ctor, superCtor) {
            if (superCtor) {
                ctor.super_ = superCtor;
                var TempCtor = function() {
                };
                TempCtor.prototype = superCtor.prototype;
                ctor.prototype = new TempCtor();
                ctor.prototype.constructor = ctor;
            }
        };
    }
    return exports$f;
}
var exports$e = {
}, _dewExec$e = false;
function dew$e() {
    if (_dewExec$e) return exports$e;
    _dewExec$e = true;
    exports$e = y.EventEmitter;
    return exports$e;
}
var exports$d = {
}, _dewExec$d = false;
function dew$d() {
    if (_dewExec$d) return exports$d;
    _dewExec$d = true;
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread(target) {
        for(var i50 = 1; i50 < arguments.length; i50++){
            var source = arguments[i50] != null ? arguments[i50] : {
            };
            if (i50 % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _defineProperties(target, props) {
        for(var i51 = 0; i51 < props.length; i51++){
            var descriptor = props[i51];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    var _require = buffer, Buffer5 = _require.Buffer;
    var _require2 = X, inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
        Buffer5.prototype.copy.call(src, target, offset);
    }
    exports$d = (function() {
        function BufferList() {
            _classCallCheck(this, BufferList);
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        _createClass(BufferList, [
            {
                key: "push",
                value: function push(v7) {
                    var entry = {
                        data: v7,
                        next: null
                    };
                    if (this.length > 0) this.tail.next = entry;
                    else this.head = entry;
                    this.tail = entry;
                    ++this.length;
                }
            },
            {
                key: "unshift",
                value: function unshift(v8) {
                    var entry = {
                        data: v8,
                        next: this.head
                    };
                    if (this.length === 0) this.tail = entry;
                    this.head = entry;
                    ++this.length;
                }
            },
            {
                key: "shift",
                value: function shift() {
                    if (this.length === 0) return;
                    var ret = this.head.data;
                    if (this.length === 1) this.head = this.tail = null;
                    else this.head = this.head.next;
                    --this.length;
                    return ret;
                }
            },
            {
                key: "clear",
                value: function clear() {
                    this.head = this.tail = null;
                    this.length = 0;
                }
            },
            {
                key: "join",
                value: function join(s10) {
                    if (this.length === 0) return "";
                    var p6 = this.head;
                    var ret = "" + p6.data;
                    while(p6 = p6.next){
                        ret += s10 + p6.data;
                    }
                    return ret;
                }
            },
            {
                key: "concat",
                value: function concat(n9) {
                    if (this.length === 0) return Buffer5.alloc(0);
                    var ret = Buffer5.allocUnsafe(n9 >>> 0);
                    var p7 = this.head;
                    var i52 = 0;
                    while(p7){
                        copyBuffer(p7.data, ret, i52);
                        i52 += p7.data.length;
                        p7 = p7.next;
                    }
                    return ret;
                }
            },
            {
                key: "consume",
                value: function consume(n10, hasStrings) {
                    var ret;
                    if (n10 < this.head.data.length) {
                        ret = this.head.data.slice(0, n10);
                        this.head.data = this.head.data.slice(n10);
                    } else if (n10 === this.head.data.length) {
                        ret = this.shift();
                    } else {
                        ret = hasStrings ? this._getString(n10) : this._getBuffer(n10);
                    }
                    return ret;
                }
            },
            {
                key: "first",
                value: function first() {
                    return this.head.data;
                }
            },
            {
                key: "_getString",
                value: function _getString(n14) {
                    var p8 = this.head;
                    var c9 = 1;
                    var ret = p8.data;
                    n14 -= ret.length;
                    while(p8 = p8.next){
                        var str = p8.data;
                        var nb = n14 > str.length ? str.length : n14;
                        if (nb === str.length) ret += str;
                        else ret += str.slice(0, n14);
                        n14 -= nb;
                        if (n14 === 0) {
                            if (nb === str.length) {
                                ++c9;
                                if (p8.next) this.head = p8.next;
                                else this.head = this.tail = null;
                            } else {
                                this.head = p8;
                                p8.data = str.slice(nb);
                            }
                            break;
                        }
                        ++c9;
                    }
                    this.length -= c9;
                    return ret;
                }
            },
            {
                key: "_getBuffer",
                value: function _getBuffer(n15) {
                    var ret = Buffer5.allocUnsafe(n15);
                    var p9 = this.head;
                    var c10 = 1;
                    p9.data.copy(ret);
                    n15 -= p9.data.length;
                    while(p9 = p9.next){
                        var buf = p9.data;
                        var nb = n15 > buf.length ? buf.length : n15;
                        buf.copy(ret, ret.length - n15, 0, nb);
                        n15 -= nb;
                        if (n15 === 0) {
                            if (nb === buf.length) {
                                ++c10;
                                if (p9.next) this.head = p9.next;
                                else this.head = this.tail = null;
                            } else {
                                this.head = p9;
                                p9.data = buf.slice(nb);
                            }
                            break;
                        }
                        ++c10;
                    }
                    this.length -= c10;
                    return ret;
                }
            },
            {
                key: custom,
                value: function value(_, options) {
                    return inspect(this, _objectSpread({
                    }, options, {
                        depth: 0,
                        customInspect: false
                    }));
                }
            }
        ]);
        return BufferList;
    })();
    return exports$d;
}
var exports$c = {
}, _dewExec$c = false;
function dew$c() {
    if (_dewExec$c) return exports$c;
    _dewExec$c = true;
    var process$1 = process1;
    function destroy(err1, cb) {
        var _this = this;
        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;
        if (readableDestroyed || writableDestroyed) {
            if (cb) {
                cb(err1);
            } else if (err1) {
                if (!this._writableState) {
                    process$1.nextTick(emitErrorNT, this, err1);
                } else if (!this._writableState.errorEmitted) {
                    this._writableState.errorEmitted = true;
                    process$1.nextTick(emitErrorNT, this, err1);
                }
            }
            return this;
        }
        if (this._readableState) {
            this._readableState.destroyed = true;
        }
        if (this._writableState) {
            this._writableState.destroyed = true;
        }
        this._destroy(err1 || null, function(err) {
            if (!cb && err) {
                if (!_this._writableState) {
                    process$1.nextTick(emitErrorAndCloseNT, _this, err);
                } else if (!_this._writableState.errorEmitted) {
                    _this._writableState.errorEmitted = true;
                    process$1.nextTick(emitErrorAndCloseNT, _this, err);
                } else {
                    process$1.nextTick(emitCloseNT, _this);
                }
            } else if (cb) {
                process$1.nextTick(emitCloseNT, _this);
                cb(err);
            } else {
                process$1.nextTick(emitCloseNT, _this);
            }
        });
        return this;
    }
    function emitErrorAndCloseNT(self, err) {
        emitErrorNT(self, err);
        emitCloseNT(self);
    }
    function emitCloseNT(self) {
        if (self._writableState && !self._writableState.emitClose) return;
        if (self._readableState && !self._readableState.emitClose) return;
        self.emit("close");
    }
    function undestroy() {
        if (this._readableState) {
            this._readableState.destroyed = false;
            this._readableState.reading = false;
            this._readableState.ended = false;
            this._readableState.endEmitted = false;
        }
        if (this._writableState) {
            this._writableState.destroyed = false;
            this._writableState.ended = false;
            this._writableState.ending = false;
            this._writableState.finalCalled = false;
            this._writableState.prefinished = false;
            this._writableState.finished = false;
            this._writableState.errorEmitted = false;
        }
    }
    function emitErrorNT(self, err) {
        self.emit("error", err);
    }
    function errorOrDestroy(stream1, err) {
        var rState = stream1._readableState;
        var wState = stream1._writableState;
        if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream1.destroy(err);
        else stream1.emit("error", err);
    }
    exports$c = {
        destroy: destroy,
        undestroy: undestroy,
        errorOrDestroy: errorOrDestroy
    };
    return exports$c;
}
var exports$b = {
}, _dewExec$b = false;
function dew$b() {
    if (_dewExec$b) return exports$b;
    _dewExec$b = true;
    const codes = {
    };
    function createErrorType(code, message, Base) {
        if (!Base) {
            Base = Error;
        }
        function getMessage(arg1, arg2, arg3) {
            if (typeof message === "string") {
                return message;
            } else {
                return message(arg1, arg2, arg3);
            }
        }
        class NodeError extends Base {
            constructor(arg1, arg2, arg3){
                super(getMessage(arg1, arg2, arg3));
            }
        }
        NodeError.prototype.name = Base.name;
        NodeError.prototype.code = code;
        codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
        if (Array.isArray(expected)) {
            const len = expected.length;
            expected = expected.map((i53)=>String(i53)
            );
            if (len > 2) {
                return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
            } else if (len === 2) {
                return `one of ${thing} ${expected[0]} or ${expected[1]}`;
            } else {
                return `of ${thing} ${expected[0]}`;
            }
        } else {
            return `of ${thing} ${String(expected)}`;
        }
    }
    function startsWith(str, search, pos) {
        return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str, search, this_len) {
        if (this_len === undefined || this_len > str.length) {
            this_len = str.length;
        }
        return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
        if (typeof start !== "number") {
            start = 0;
        }
        if (start + search.length > str.length) {
            return false;
        } else {
            return str.indexOf(search, start) !== -1;
        }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
        return "The value \"" + value + "\" is invalid for option \"" + name + "\"";
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
        let determiner;
        if (typeof expected === "string" && startsWith(expected, "not ")) {
            determiner = "must not be";
            expected = expected.replace(/^not /, "");
        } else {
            determiner = "must be";
        }
        let msg;
        if (endsWith(name, " argument")) {
            msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
        } else {
            const type4 = includes(name, ".") ? "property" : "argument";
            msg = `The "${name}" ${type4} ${determiner} ${oneOf(expected, "type")}`;
        }
        msg += `. Received type ${typeof actual}`;
        return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
        return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
        return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
        return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    exports$b.codes = codes;
    return exports$b;
}
var exports$a = {
}, _dewExec$a = false;
function dew$a() {
    if (_dewExec$a) return exports$a;
    _dewExec$a = true;
    var ERR_INVALID_OPT_VALUE = dew$b().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
        return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
        var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
        if (hwm != null) {
            if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
                var name = isDuplex ? duplexKey : "highWaterMark";
                throw new ERR_INVALID_OPT_VALUE(name, hwm);
            }
            return Math.floor(hwm);
        }
        return state.objectMode ? 16 : 16 * 1024;
    }
    exports$a = {
        getHighWaterMark: getHighWaterMark
    };
    return exports$a;
}
var exports$9 = {
}, _dewExec$9 = false;
var _global$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$9() {
    if (_dewExec$9) return exports$9;
    _dewExec$9 = true;
    exports$9 = deprecate;
    function deprecate(fn, msg) {
        if (config1("noDeprecation")) {
            return fn;
        }
        var warned = false;
        function deprecated() {
            if (!warned) {
                if (config1("throwDeprecation")) {
                    throw new Error(msg);
                } else if (config1("traceDeprecation")) {
                    console.trace(msg);
                } else {
                    console.warn(msg);
                }
                warned = true;
            }
            return fn.apply(this || _global$2, arguments);
        }
        return deprecated;
    }
    function config1(name) {
        try {
            if (!_global$2.localStorage) return false;
        } catch (_) {
            return false;
        }
        var val = _global$2.localStorage[name];
        if (null == val) return false;
        return String(val).toLowerCase() === "true";
    }
    return exports$9;
}
var exports$8 = {
}, _dewExec$8 = false;
var _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$8() {
    if (_dewExec$8) return exports$8;
    _dewExec$8 = true;
    var process$1 = process1;
    exports$8 = Writable;
    function CorkedRequest(state) {
        var _this = this;
        this.next = null;
        this.entry = null;
        this.finish = function() {
            onCorkedFinish(_this, state);
        };
    }
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
        deprecate: dew$9()
    };
    var Stream = dew$e();
    var Buffer6 = buffer.Buffer;
    var OurUint8Array = _global$1.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
        return Buffer6.from(chunk);
    }
    function _isUint8Array(obj) {
        return Buffer6.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = dew$c();
    var _require = dew$a(), getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = dew$b().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    dew$f()(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream2, isDuplex) {
        Duplex = Duplex || dew$7();
        options = options || {
        };
        if (typeof isDuplex !== "boolean") isDuplex = stream2 instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
        this.finalCalled = false;
        this.needDrain = false;
        this.ending = false;
        this.ended = false;
        this.finished = false;
        this.destroyed = false;
        var noDecode = options.decodeStrings === false;
        this.decodeStrings = !noDecode;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.length = 0;
        this.writing = false;
        this.corked = 0;
        this.sync = true;
        this.bufferProcessing = false;
        this.onwrite = function(er) {
            onwrite(stream2, er);
        };
        this.writecb = null;
        this.writelen = 0;
        this.bufferedRequest = null;
        this.lastBufferedRequest = null;
        this.pendingcb = 0;
        this.prefinished = false;
        this.errorEmitted = false;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.bufferedRequestCount = 0;
        this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
        var current = this.bufferedRequest;
        var out = [];
        while(current){
            out.push(current);
            current = current.next;
        }
        return out;
    };
    (function() {
        try {
            Object.defineProperty(WritableState.prototype, "buffer", {
                get: internalUtil.deprecate(function writableStateBufferGetter() {
                    return this.getBuffer();
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer " + "instead.", "DEP0003")
            });
        } catch (_) {
        }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
        realHasInstance = Function.prototype[Symbol.hasInstance];
        Object.defineProperty(Writable, Symbol.hasInstance, {
            value: function value(object) {
                if (realHasInstance.call(this, object)) return true;
                if (this !== Writable) return false;
                return object && object._writableState instanceof WritableState;
            }
        });
    } else {
        realHasInstance = function realHasInstance(object) {
            return object instanceof this;
        };
    }
    function Writable(options) {
        Duplex = Duplex || dew$7();
        var isDuplex = this instanceof Duplex;
        if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
        this._writableState = new WritableState(options, this, isDuplex);
        this.writable = true;
        if (options) {
            if (typeof options.write === "function") this._write = options.write;
            if (typeof options.writev === "function") this._writev = options.writev;
            if (typeof options.destroy === "function") this._destroy = options.destroy;
            if (typeof options.final === "function") this._final = options.final;
        }
        Stream.call(this);
    }
    Writable.prototype.pipe = function() {
        errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream3, cb) {
        var er = new ERR_STREAM_WRITE_AFTER_END();
        errorOrDestroy(stream3, er);
        process$1.nextTick(cb, er);
    }
    function validChunk(stream4, state, chunk, cb) {
        var er;
        if (chunk === null) {
            er = new ERR_STREAM_NULL_VALUES();
        } else if (typeof chunk !== "string" && !state.objectMode) {
            er = new ERR_INVALID_ARG_TYPE("chunk", [
                "string",
                "Buffer"
            ], chunk);
        }
        if (er) {
            errorOrDestroy(stream4, er);
            process$1.nextTick(cb, er);
            return false;
        }
        return true;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
        var state = this._writableState;
        var ret = false;
        var isBuf = !state.objectMode && _isUint8Array(chunk);
        if (isBuf && !Buffer6.isBuffer(chunk)) {
            chunk = _uint8ArrayToBuffer(chunk);
        }
        if (typeof encoding === "function") {
            cb = encoding;
            encoding = null;
        }
        if (isBuf) encoding = "buffer";
        else if (!encoding) encoding = state.defaultEncoding;
        if (typeof cb !== "function") cb = nop;
        if (state.ending) writeAfterEnd(this, cb);
        else if (isBuf || validChunk(this, state, chunk, cb)) {
            state.pendingcb++;
            ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
        }
        return ret;
    };
    Writable.prototype.cork = function() {
        this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
        var state = this._writableState;
        if (state.corked) {
            state.corked--;
            if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
        }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
        if (typeof encoding === "string") encoding = encoding.toLowerCase();
        if (!([
            "hex",
            "utf8",
            "utf-8",
            "ascii",
            "binary",
            "base64",
            "ucs2",
            "ucs-2",
            "utf16le",
            "utf-16le",
            "raw"
        ].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
        this._writableState.defaultEncoding = encoding;
        return this;
    };
    Object.defineProperty(Writable.prototype, "writableBuffer", {
        enumerable: false,
        get: function get() {
            return this._writableState && this._writableState.getBuffer();
        }
    });
    function decodeChunk(state, chunk, encoding) {
        if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
            chunk = Buffer6.from(chunk, encoding);
        }
        return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
        enumerable: false,
        get: function get() {
            return this._writableState.highWaterMark;
        }
    });
    function writeOrBuffer(stream5, state, isBuf, chunk, encoding, cb) {
        if (!isBuf) {
            var newChunk = decodeChunk(state, chunk, encoding);
            if (chunk !== newChunk) {
                isBuf = true;
                encoding = "buffer";
                chunk = newChunk;
            }
        }
        var len = state.objectMode ? 1 : chunk.length;
        state.length += len;
        var ret = state.length < state.highWaterMark;
        if (!ret) state.needDrain = true;
        if (state.writing || state.corked) {
            var last = state.lastBufferedRequest;
            state.lastBufferedRequest = {
                chunk: chunk,
                encoding: encoding,
                isBuf: isBuf,
                callback: cb,
                next: null
            };
            if (last) {
                last.next = state.lastBufferedRequest;
            } else {
                state.bufferedRequest = state.lastBufferedRequest;
            }
            state.bufferedRequestCount += 1;
        } else {
            doWrite(stream5, state, false, len, chunk, encoding, cb);
        }
        return ret;
    }
    function doWrite(stream6, state, writev1, len, chunk, encoding, cb) {
        state.writelen = len;
        state.writecb = cb;
        state.writing = true;
        state.sync = true;
        if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
        else if (writev1) stream6._writev(chunk, state.onwrite);
        else stream6._write(chunk, encoding, state.onwrite);
        state.sync = false;
    }
    function onwriteError(stream7, state, sync, er, cb) {
        --state.pendingcb;
        if (sync) {
            process$1.nextTick(cb, er);
            process$1.nextTick(finishMaybe, stream7, state);
            stream7._writableState.errorEmitted = true;
            errorOrDestroy(stream7, er);
        } else {
            cb(er);
            stream7._writableState.errorEmitted = true;
            errorOrDestroy(stream7, er);
            finishMaybe(stream7, state);
        }
    }
    function onwriteStateUpdate(state) {
        state.writing = false;
        state.writecb = null;
        state.length -= state.writelen;
        state.writelen = 0;
    }
    function onwrite(stream8, er) {
        var state = stream8._writableState;
        var sync = state.sync;
        var cb = state.writecb;
        if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
        onwriteStateUpdate(state);
        if (er) onwriteError(stream8, state, sync, er, cb);
        else {
            var finished = needFinish(state) || stream8.destroyed;
            if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
                clearBuffer(stream8, state);
            }
            if (sync) {
                process$1.nextTick(afterWrite, stream8, state, finished, cb);
            } else {
                afterWrite(stream8, state, finished, cb);
            }
        }
    }
    function afterWrite(stream9, state, finished, cb) {
        if (!finished) onwriteDrain(stream9, state);
        state.pendingcb--;
        cb();
        finishMaybe(stream9, state);
    }
    function onwriteDrain(stream10, state) {
        if (state.length === 0 && state.needDrain) {
            state.needDrain = false;
            stream10.emit("drain");
        }
    }
    function clearBuffer(stream11, state) {
        state.bufferProcessing = true;
        var entry = state.bufferedRequest;
        if (stream11._writev && entry && entry.next) {
            var l6 = state.bufferedRequestCount;
            var buffer5 = new Array(l6);
            var holder = state.corkedRequestsFree;
            holder.entry = entry;
            var count = 0;
            var allBuffers = true;
            while(entry){
                buffer5[count] = entry;
                if (!entry.isBuf) allBuffers = false;
                entry = entry.next;
                count += 1;
            }
            buffer5.allBuffers = allBuffers;
            doWrite(stream11, state, true, state.length, buffer5, "", holder.finish);
            state.pendingcb++;
            state.lastBufferedRequest = null;
            if (holder.next) {
                state.corkedRequestsFree = holder.next;
                holder.next = null;
            } else {
                state.corkedRequestsFree = new CorkedRequest(state);
            }
            state.bufferedRequestCount = 0;
        } else {
            while(entry){
                var chunk = entry.chunk;
                var encoding = entry.encoding;
                var cb = entry.callback;
                var len = state.objectMode ? 1 : chunk.length;
                doWrite(stream11, state, false, len, chunk, encoding, cb);
                entry = entry.next;
                state.bufferedRequestCount--;
                if (state.writing) {
                    break;
                }
            }
            if (entry === null) state.lastBufferedRequest = null;
        }
        state.bufferedRequest = entry;
        state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
        var state = this._writableState;
        if (typeof chunk === "function") {
            cb = chunk;
            chunk = null;
            encoding = null;
        } else if (typeof encoding === "function") {
            cb = encoding;
            encoding = null;
        }
        if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
        if (state.corked) {
            state.corked = 1;
            this.uncork();
        }
        if (!state.ending) endWritable(this, state, cb);
        return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
        enumerable: false,
        get: function get() {
            return this._writableState.length;
        }
    });
    function needFinish(state) {
        return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream12, state) {
        stream12._final(function(err) {
            state.pendingcb--;
            if (err) {
                errorOrDestroy(stream12, err);
            }
            state.prefinished = true;
            stream12.emit("prefinish");
            finishMaybe(stream12, state);
        });
    }
    function prefinish(stream13, state) {
        if (!state.prefinished && !state.finalCalled) {
            if (typeof stream13._final === "function" && !state.destroyed) {
                state.pendingcb++;
                state.finalCalled = true;
                process$1.nextTick(callFinal, stream13, state);
            } else {
                state.prefinished = true;
                stream13.emit("prefinish");
            }
        }
    }
    function finishMaybe(stream14, state) {
        var need = needFinish(state);
        if (need) {
            prefinish(stream14, state);
            if (state.pendingcb === 0) {
                state.finished = true;
                stream14.emit("finish");
                if (state.autoDestroy) {
                    var rState = stream14._readableState;
                    if (!rState || rState.autoDestroy && rState.endEmitted) {
                        stream14.destroy();
                    }
                }
            }
        }
        return need;
    }
    function endWritable(stream15, state, cb) {
        state.ending = true;
        finishMaybe(stream15, state);
        if (cb) {
            if (state.finished) process$1.nextTick(cb);
            else stream15.once("finish", cb);
        }
        state.ended = true;
        stream15.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
        var entry = corkReq.entry;
        corkReq.entry = null;
        while(entry){
            var cb = entry.callback;
            state.pendingcb--;
            cb(err);
            entry = entry.next;
        }
        state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
            if (this._writableState === undefined) {
                return false;
            }
            return this._writableState.destroyed;
        },
        set: function set(value) {
            if (!this._writableState) {
                return;
            }
            this._writableState.destroyed = value;
        }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
        cb(err);
    };
    return exports$8;
}
var exports$7 = {
}, _dewExec$7 = false;
function dew$7() {
    if (_dewExec$7) return exports$7;
    _dewExec$7 = true;
    var process$1 = process1;
    var objectKeys = Object.keys || function(obj) {
        var keys = [];
        for(var key in obj){
            keys.push(key);
        }
        return keys;
    };
    exports$7 = Duplex;
    var Readable1 = dew$3();
    var Writable = dew$8();
    dew$f()(Duplex, Readable1);
    {
        var keys1 = objectKeys(Writable.prototype);
        for(var v9 = 0; v9 < keys1.length; v9++){
            var method = keys1[v9];
            if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
        }
    }
    function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);
        Readable1.call(this, options);
        Writable.call(this, options);
        this.allowHalfOpen = true;
        if (options) {
            if (options.readable === false) this.readable = false;
            if (options.writable === false) this.writable = false;
            if (options.allowHalfOpen === false) {
                this.allowHalfOpen = false;
                this.once("end", onend);
            }
        }
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        enumerable: false,
        get: function get() {
            return this._writableState.highWaterMark;
        }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
        enumerable: false,
        get: function get() {
            return this._writableState && this._writableState.getBuffer();
        }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
        enumerable: false,
        get: function get() {
            return this._writableState.length;
        }
    });
    function onend() {
        if (this._writableState.ended) return;
        process$1.nextTick(onEndNT, this);
    }
    function onEndNT(self) {
        self.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
            if (this._readableState === undefined || this._writableState === undefined) {
                return false;
            }
            return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function set(value) {
            if (this._readableState === undefined || this._writableState === undefined) {
                return;
            }
            this._readableState.destroyed = value;
            this._writableState.destroyed = value;
        }
    });
    return exports$7;
}
var exports$6 = {
}, _dewExec$6 = false;
function dew$6() {
    if (_dewExec$6) return exports$6;
    _dewExec$6 = true;
    var ERR_STREAM_PREMATURE_CLOSE = dew$b().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once2(callback) {
        var called = false;
        return function() {
            if (called) return;
            called = true;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            callback.apply(this, args);
        };
    }
    function noop2() {
    }
    function isRequest(stream16) {
        return stream16.setHeader && typeof stream16.abort === "function";
    }
    function eos(stream17, opts, callback) {
        if (typeof opts === "function") return eos(stream17, null, opts);
        if (!opts) opts = {
        };
        callback = once2(callback || noop2);
        var readable = opts.readable || opts.readable !== false && stream17.readable;
        var writable = opts.writable || opts.writable !== false && stream17.writable;
        var onlegacyfinish = function onlegacyfinish() {
            if (!stream17.writable) onfinish();
        };
        var writableEnded = stream17._writableState && stream17._writableState.finished;
        var onfinish = function onfinish() {
            writable = false;
            writableEnded = true;
            if (!readable) callback.call(stream17);
        };
        var readableEnded = stream17._readableState && stream17._readableState.endEmitted;
        var onend = function onend() {
            readable = false;
            readableEnded = true;
            if (!writable) callback.call(stream17);
        };
        var onerror = function onerror(err) {
            callback.call(stream17, err);
        };
        var onclose = function onclose() {
            var err;
            if (readable && !readableEnded) {
                if (!stream17._readableState || !stream17._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
                return callback.call(stream17, err);
            }
            if (writable && !writableEnded) {
                if (!stream17._writableState || !stream17._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
                return callback.call(stream17, err);
            }
        };
        var onrequest = function onrequest() {
            stream17.req.on("finish", onfinish);
        };
        if (isRequest(stream17)) {
            stream17.on("complete", onfinish);
            stream17.on("abort", onclose);
            if (stream17.req) onrequest();
            else stream17.on("request", onrequest);
        } else if (writable && !stream17._writableState) {
            stream17.on("end", onlegacyfinish);
            stream17.on("close", onlegacyfinish);
        }
        stream17.on("end", onend);
        stream17.on("finish", onfinish);
        if (opts.error !== false) stream17.on("error", onerror);
        stream17.on("close", onclose);
        return function() {
            stream17.removeListener("complete", onfinish);
            stream17.removeListener("abort", onclose);
            stream17.removeListener("request", onrequest);
            if (stream17.req) stream17.req.removeListener("finish", onfinish);
            stream17.removeListener("end", onlegacyfinish);
            stream17.removeListener("close", onlegacyfinish);
            stream17.removeListener("finish", onfinish);
            stream17.removeListener("end", onend);
            stream17.removeListener("error", onerror);
            stream17.removeListener("close", onclose);
        };
    }
    exports$6 = eos;
    return exports$6;
}
var exports$5 = {
}, _dewExec$5 = false;
function dew$5() {
    if (_dewExec$5) return exports$5;
    _dewExec$5 = true;
    var process$1 = process1;
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    var finished = dew$6();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
        return {
            value: value,
            done: done
        };
    }
    function readAndResolve(iter) {
        var resolve1 = iter[kLastResolve];
        if (resolve1 !== null) {
            var data = iter[kStream].read();
            if (data !== null) {
                iter[kLastPromise] = null;
                iter[kLastResolve] = null;
                iter[kLastReject] = null;
                resolve1(createIterResult(data, false));
            }
        }
    }
    function onReadable(iter) {
        process$1.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
        return function(resolve2, reject) {
            lastPromise.then(function() {
                if (iter[kEnded]) {
                    resolve2(createIterResult(undefined, true));
                    return;
                }
                iter[kHandlePromise](resolve2, reject);
            }, reject);
        };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
        get stream () {
            return this[kStream];
        },
        next: function next() {
            var _this = this;
            var error = this[kError];
            if (error !== null) {
                return Promise.reject(error);
            }
            if (this[kEnded]) {
                return Promise.resolve(createIterResult(undefined, true));
            }
            if (this[kStream].destroyed) {
                return new Promise(function(resolve3, reject) {
                    process$1.nextTick(function() {
                        if (_this[kError]) {
                            reject(_this[kError]);
                        } else {
                            resolve3(createIterResult(undefined, true));
                        }
                    });
                });
            }
            var lastPromise = this[kLastPromise];
            var promise;
            if (lastPromise) {
                promise = new Promise(wrapForNext(lastPromise, this));
            } else {
                var data = this[kStream].read();
                if (data !== null) {
                    return Promise.resolve(createIterResult(data, false));
                }
                promise = new Promise(this[kHandlePromise]);
            }
            this[kLastPromise] = promise;
            return promise;
        }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
        return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
        var _this2 = this;
        return new Promise(function(resolve4, reject) {
            _this2[kStream].destroy(null, function(err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve4(createIterResult(undefined, true));
            });
        });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream18) {
        var _Object$create;
        var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {
        }, _defineProperty(_Object$create, kStream, {
            value: stream18,
            writable: true
        }), _defineProperty(_Object$create, kLastResolve, {
            value: null,
            writable: true
        }), _defineProperty(_Object$create, kLastReject, {
            value: null,
            writable: true
        }), _defineProperty(_Object$create, kError, {
            value: null,
            writable: true
        }), _defineProperty(_Object$create, kEnded, {
            value: stream18._readableState.endEmitted,
            writable: true
        }), _defineProperty(_Object$create, kHandlePromise, {
            value: function value(resolve5, reject) {
                var data = iterator[kStream].read();
                if (data) {
                    iterator[kLastPromise] = null;
                    iterator[kLastResolve] = null;
                    iterator[kLastReject] = null;
                    resolve5(createIterResult(data, false));
                } else {
                    iterator[kLastResolve] = resolve5;
                    iterator[kLastReject] = reject;
                }
            },
            writable: true
        }), _Object$create));
        iterator[kLastPromise] = null;
        finished(stream18, function(err) {
            if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                var reject = iterator[kLastReject];
                if (reject !== null) {
                    iterator[kLastPromise] = null;
                    iterator[kLastResolve] = null;
                    iterator[kLastReject] = null;
                    reject(err);
                }
                iterator[kError] = err;
                return;
            }
            var resolve6 = iterator[kLastResolve];
            if (resolve6 !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve6(createIterResult(undefined, true));
            }
            iterator[kEnded] = true;
        });
        stream18.on("readable", onReadable.bind(null, iterator));
        return iterator;
    };
    exports$5 = createReadableStreamAsyncIterator;
    return exports$5;
}
var exports$4 = {
}, _dewExec$4 = false;
function dew$4() {
    if (_dewExec$4) return exports$4;
    _dewExec$4 = true;
    exports$4 = function() {
        throw new Error("Readable.from is not available in the browser");
    };
    return exports$4;
}
var exports$3 = {
}, _dewExec$3 = false;
var _global1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$3() {
    if (_dewExec$3) return exports$3;
    _dewExec$3 = true;
    var process$1 = process1;
    exports$3 = Readable2;
    var Duplex;
    Readable2.ReadableState = ReadableState;
    y.EventEmitter;
    var EElistenerCount = function EElistenerCount(emitter, type5) {
        return emitter.listeners(type5).length;
    };
    var Stream = dew$e();
    var Buffer7 = buffer.Buffer;
    var OurUint8Array = _global1.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
        return Buffer7.from(chunk);
    }
    function _isUint8Array(obj) {
        return Buffer7.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = X;
    var debug1;
    if (debugUtil && debugUtil.debuglog) {
        debug1 = debugUtil.debuglog("stream");
    } else {
        debug1 = function debug() {
        };
    }
    var BufferList = dew$d();
    var destroyImpl = dew$c();
    var _require = dew$a(), getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = dew$b().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    dew$f()(Readable2, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = [
        "error",
        "close",
        "destroy",
        "pause",
        "resume"
    ];
    function prependListener1(emitter, event, fn) {
        if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
        if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
        else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
        else emitter._events[event] = [
            fn,
            emitter._events[event]
        ];
    }
    function ReadableState(options, stream19, isDuplex) {
        Duplex = Duplex || dew$7();
        options = options || {
        };
        if (typeof isDuplex !== "boolean") isDuplex = stream19 instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
        this.buffer = new BufferList();
        this.length = 0;
        this.pipes = null;
        this.pipesCount = 0;
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
        this.sync = true;
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
        this.paused = true;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.destroyed = false;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.awaitDrain = 0;
        this.readingMore = false;
        this.decoder = null;
        this.encoding = null;
        if (options.encoding) {
            if (!StringDecoder) StringDecoder = e$11.StringDecoder;
            this.decoder = new StringDecoder(options.encoding);
            this.encoding = options.encoding;
        }
    }
    function Readable2(options) {
        Duplex = Duplex || dew$7();
        if (!(this instanceof Readable2)) return new Readable2(options);
        var isDuplex = this instanceof Duplex;
        this._readableState = new ReadableState(options, this, isDuplex);
        this.readable = true;
        if (options) {
            if (typeof options.read === "function") this._read = options.read;
            if (typeof options.destroy === "function") this._destroy = options.destroy;
        }
        Stream.call(this);
    }
    Object.defineProperty(Readable2.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
            if (this._readableState === undefined) {
                return false;
            }
            return this._readableState.destroyed;
        },
        set: function set(value) {
            if (!this._readableState) {
                return;
            }
            this._readableState.destroyed = value;
        }
    });
    Readable2.prototype.destroy = destroyImpl.destroy;
    Readable2.prototype._undestroy = destroyImpl.undestroy;
    Readable2.prototype._destroy = function(err, cb) {
        cb(err);
    };
    Readable2.prototype.push = function(chunk, encoding) {
        var state = this._readableState;
        var skipChunkCheck;
        if (!state.objectMode) {
            if (typeof chunk === "string") {
                encoding = encoding || state.defaultEncoding;
                if (encoding !== state.encoding) {
                    chunk = Buffer7.from(chunk, encoding);
                    encoding = "";
                }
                skipChunkCheck = true;
            }
        } else {
            skipChunkCheck = true;
        }
        return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable2.prototype.unshift = function(chunk) {
        return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream20, chunk, encoding, addToFront, skipChunkCheck) {
        debug1("readableAddChunk", chunk);
        var state = stream20._readableState;
        if (chunk === null) {
            state.reading = false;
            onEofChunk(stream20, state);
        } else {
            var er;
            if (!skipChunkCheck) er = chunkInvalid(state, chunk);
            if (er) {
                errorOrDestroy(stream20, er);
            } else if (state.objectMode || chunk && chunk.length > 0) {
                if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer7.prototype) {
                    chunk = _uint8ArrayToBuffer(chunk);
                }
                if (addToFront) {
                    if (state.endEmitted) errorOrDestroy(stream20, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                    else addChunk(stream20, state, chunk, true);
                } else if (state.ended) {
                    errorOrDestroy(stream20, new ERR_STREAM_PUSH_AFTER_EOF());
                } else if (state.destroyed) {
                    return false;
                } else {
                    state.reading = false;
                    if (state.decoder && !encoding) {
                        chunk = state.decoder.write(chunk);
                        if (state.objectMode || chunk.length !== 0) addChunk(stream20, state, chunk, false);
                        else maybeReadMore(stream20, state);
                    } else {
                        addChunk(stream20, state, chunk, false);
                    }
                }
            } else if (!addToFront) {
                state.reading = false;
                maybeReadMore(stream20, state);
            }
        }
        return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream21, state, chunk, addToFront) {
        if (state.flowing && state.length === 0 && !state.sync) {
            state.awaitDrain = 0;
            stream21.emit("data", chunk);
        } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk);
            else state.buffer.push(chunk);
            if (state.needReadable) emitReadable(stream21);
        }
        maybeReadMore(stream21, state);
    }
    function chunkInvalid(state, chunk) {
        var er;
        if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
            er = new ERR_INVALID_ARG_TYPE("chunk", [
                "string",
                "Buffer",
                "Uint8Array"
            ], chunk);
        }
        return er;
    }
    Readable2.prototype.isPaused = function() {
        return this._readableState.flowing === false;
    };
    Readable2.prototype.setEncoding = function(enc) {
        if (!StringDecoder) StringDecoder = e$11.StringDecoder;
        var decoder = new StringDecoder(enc);
        this._readableState.decoder = decoder;
        this._readableState.encoding = this._readableState.decoder.encoding;
        var p10 = this._readableState.buffer.head;
        var content = "";
        while(p10 !== null){
            content += decoder.write(p10.data);
            p10 = p10.next;
        }
        this._readableState.buffer.clear();
        if (content !== "") this._readableState.buffer.push(content);
        this._readableState.length = content.length;
        return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n16) {
        if (n16 >= MAX_HWM) {
            n16 = MAX_HWM;
        } else {
            n16--;
            n16 |= n16 >>> 1;
            n16 |= n16 >>> 2;
            n16 |= n16 >>> 4;
            n16 |= n16 >>> 8;
            n16 |= n16 >>> 16;
            n16++;
        }
        return n16;
    }
    function howMuchToRead(n17, state) {
        if (n17 <= 0 || state.length === 0 && state.ended) return 0;
        if (state.objectMode) return 1;
        if (n17 !== n17) {
            if (state.flowing && state.length) return state.buffer.head.data.length;
            else return state.length;
        }
        if (n17 > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n17);
        if (n17 <= state.length) return n17;
        if (!state.ended) {
            state.needReadable = true;
            return 0;
        }
        return state.length;
    }
    Readable2.prototype.read = function(n18) {
        debug1("read", n18);
        n18 = parseInt(n18, 10);
        var state = this._readableState;
        var nOrig = n18;
        if (n18 !== 0) state.emittedReadable = false;
        if (n18 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
            debug1("read: emitReadable", state.length, state.ended);
            if (state.length === 0 && state.ended) endReadable(this);
            else emitReadable(this);
            return null;
        }
        n18 = howMuchToRead(n18, state);
        if (n18 === 0 && state.ended) {
            if (state.length === 0) endReadable(this);
            return null;
        }
        var doRead = state.needReadable;
        debug1("need readable", doRead);
        if (state.length === 0 || state.length - n18 < state.highWaterMark) {
            doRead = true;
            debug1("length less than watermark", doRead);
        }
        if (state.ended || state.reading) {
            doRead = false;
            debug1("reading or ended", doRead);
        } else if (doRead) {
            debug1("do read");
            state.reading = true;
            state.sync = true;
            if (state.length === 0) state.needReadable = true;
            this._read(state.highWaterMark);
            state.sync = false;
            if (!state.reading) n18 = howMuchToRead(nOrig, state);
        }
        var ret;
        if (n18 > 0) ret = fromList(n18, state);
        else ret = null;
        if (ret === null) {
            state.needReadable = state.length <= state.highWaterMark;
            n18 = 0;
        } else {
            state.length -= n18;
            state.awaitDrain = 0;
        }
        if (state.length === 0) {
            if (!state.ended) state.needReadable = true;
            if (nOrig !== n18 && state.ended) endReadable(this);
        }
        if (ret !== null) this.emit("data", ret);
        return ret;
    };
    function onEofChunk(stream22, state) {
        debug1("onEofChunk");
        if (state.ended) return;
        if (state.decoder) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) {
                state.buffer.push(chunk);
                state.length += state.objectMode ? 1 : chunk.length;
            }
        }
        state.ended = true;
        if (state.sync) {
            emitReadable(stream22);
        } else {
            state.needReadable = false;
            if (!state.emittedReadable) {
                state.emittedReadable = true;
                emitReadable_(stream22);
            }
        }
    }
    function emitReadable(stream23) {
        var state = stream23._readableState;
        debug1("emitReadable", state.needReadable, state.emittedReadable);
        state.needReadable = false;
        if (!state.emittedReadable) {
            debug1("emitReadable", state.flowing);
            state.emittedReadable = true;
            process$1.nextTick(emitReadable_, stream23);
        }
    }
    function emitReadable_(stream24) {
        var state = stream24._readableState;
        debug1("emitReadable_", state.destroyed, state.length, state.ended);
        if (!state.destroyed && (state.length || state.ended)) {
            stream24.emit("readable");
            state.emittedReadable = false;
        }
        state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
        flow(stream24);
    }
    function maybeReadMore(stream25, state) {
        if (!state.readingMore) {
            state.readingMore = true;
            process$1.nextTick(maybeReadMore_, stream25, state);
        }
    }
    function maybeReadMore_(stream26, state) {
        while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
            var len = state.length;
            debug1("maybeReadMore read 0");
            stream26.read(0);
            if (len === state.length) break;
        }
        state.readingMore = false;
    }
    Readable2.prototype._read = function(n) {
        errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable2.prototype.pipe = function(dest, pipeOpts) {
        var src = this;
        var state = this._readableState;
        switch(state.pipesCount){
            case 0:
                state.pipes = dest;
                break;
            case 1:
                state.pipes = [
                    state.pipes,
                    dest
                ];
                break;
            default:
                state.pipes.push(dest);
                break;
        }
        state.pipesCount += 1;
        debug1("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
        var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$1.stdout && dest !== process$1.stderr;
        var endFn = doEnd ? onend : unpipe;
        if (state.endEmitted) process$1.nextTick(endFn);
        else src.once("end", endFn);
        dest.on("unpipe", onunpipe);
        function onunpipe(readable, unpipeInfo) {
            debug1("onunpipe");
            if (readable === src) {
                if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                    unpipeInfo.hasUnpiped = true;
                    cleanup();
                }
            }
        }
        function onend() {
            debug1("onend");
            dest.end();
        }
        var ondrain = pipeOnDrain(src);
        dest.on("drain", ondrain);
        var cleanedUp = false;
        function cleanup() {
            debug1("cleanup");
            dest.removeListener("close", onclose);
            dest.removeListener("finish", onfinish);
            dest.removeListener("drain", ondrain);
            dest.removeListener("error", onerror);
            dest.removeListener("unpipe", onunpipe);
            src.removeListener("end", onend);
            src.removeListener("end", unpipe);
            src.removeListener("data", ondata);
            cleanedUp = true;
            if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
        }
        src.on("data", ondata);
        function ondata(chunk) {
            debug1("ondata");
            var ret = dest.write(chunk);
            debug1("dest.write", ret);
            if (ret === false) {
                if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                    debug1("false write response, pause", state.awaitDrain);
                    state.awaitDrain++;
                }
                src.pause();
            }
        }
        function onerror(er) {
            debug1("onerror", er);
            unpipe();
            dest.removeListener("error", onerror);
            if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
        }
        prependListener1(dest, "error", onerror);
        function onclose() {
            dest.removeListener("finish", onfinish);
            unpipe();
        }
        dest.once("close", onclose);
        function onfinish() {
            debug1("onfinish");
            dest.removeListener("close", onclose);
            unpipe();
        }
        dest.once("finish", onfinish);
        function unpipe() {
            debug1("unpipe");
            src.unpipe(dest);
        }
        dest.emit("pipe", src);
        if (!state.flowing) {
            debug1("pipe resume");
            src.resume();
        }
        return dest;
    };
    function pipeOnDrain(src) {
        return function pipeOnDrainFunctionResult() {
            var state = src._readableState;
            debug1("pipeOnDrain", state.awaitDrain);
            if (state.awaitDrain) state.awaitDrain--;
            if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
                state.flowing = true;
                flow(src);
            }
        };
    }
    Readable2.prototype.unpipe = function(dest) {
        var state = this._readableState;
        var unpipeInfo = {
            hasUnpiped: false
        };
        if (state.pipesCount === 0) return this;
        if (state.pipesCount === 1) {
            if (dest && dest !== state.pipes) return this;
            if (!dest) dest = state.pipes;
            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;
            if (dest) dest.emit("unpipe", this, unpipeInfo);
            return this;
        }
        if (!dest) {
            var dests = state.pipes;
            var len = state.pipesCount;
            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;
            for(var i54 = 0; i54 < len; i54++){
                dests[i54].emit("unpipe", this, {
                    hasUnpiped: false
                });
            }
            return this;
        }
        var index = indexOf(state.pipes, dest);
        if (index === -1) return this;
        state.pipes.splice(index, 1);
        state.pipesCount -= 1;
        if (state.pipesCount === 1) state.pipes = state.pipes[0];
        dest.emit("unpipe", this, unpipeInfo);
        return this;
    };
    Readable2.prototype.on = function(ev, fn) {
        var res = Stream.prototype.on.call(this, ev, fn);
        var state = this._readableState;
        if (ev === "data") {
            state.readableListening = this.listenerCount("readable") > 0;
            if (state.flowing !== false) this.resume();
        } else if (ev === "readable") {
            if (!state.endEmitted && !state.readableListening) {
                state.readableListening = state.needReadable = true;
                state.flowing = false;
                state.emittedReadable = false;
                debug1("on readable", state.length, state.reading);
                if (state.length) {
                    emitReadable(this);
                } else if (!state.reading) {
                    process$1.nextTick(nReadingNextTick, this);
                }
            }
        }
        return res;
    };
    Readable2.prototype.addListener = Readable2.prototype.on;
    Readable2.prototype.removeListener = function(ev, fn) {
        var res = Stream.prototype.removeListener.call(this, ev, fn);
        if (ev === "readable") {
            process$1.nextTick(updateReadableListening, this);
        }
        return res;
    };
    Readable2.prototype.removeAllListeners = function(ev) {
        var res = Stream.prototype.removeAllListeners.apply(this, arguments);
        if (ev === "readable" || ev === undefined) {
            process$1.nextTick(updateReadableListening, this);
        }
        return res;
    };
    function updateReadableListening(self) {
        var state = self._readableState;
        state.readableListening = self.listenerCount("readable") > 0;
        if (state.resumeScheduled && !state.paused) {
            state.flowing = true;
        } else if (self.listenerCount("data") > 0) {
            self.resume();
        }
    }
    function nReadingNextTick(self) {
        debug1("readable nexttick read 0");
        self.read(0);
    }
    Readable2.prototype.resume = function() {
        var state = this._readableState;
        if (!state.flowing) {
            debug1("resume");
            state.flowing = !state.readableListening;
            resume(this, state);
        }
        state.paused = false;
        return this;
    };
    function resume(stream27, state) {
        if (!state.resumeScheduled) {
            state.resumeScheduled = true;
            process$1.nextTick(resume_, stream27, state);
        }
    }
    function resume_(stream28, state) {
        debug1("resume", state.reading);
        if (!state.reading) {
            stream28.read(0);
        }
        state.resumeScheduled = false;
        stream28.emit("resume");
        flow(stream28);
        if (state.flowing && !state.reading) stream28.read(0);
    }
    Readable2.prototype.pause = function() {
        debug1("call pause flowing=%j", this._readableState.flowing);
        if (this._readableState.flowing !== false) {
            debug1("pause");
            this._readableState.flowing = false;
            this.emit("pause");
        }
        this._readableState.paused = true;
        return this;
    };
    function flow(stream29) {
        var state = stream29._readableState;
        debug1("flow", state.flowing);
        while(state.flowing && stream29.read() !== null){
        }
    }
    Readable2.prototype.wrap = function(stream30) {
        var _this = this;
        var state = this._readableState;
        var paused = false;
        stream30.on("end", function() {
            debug1("wrapped end");
            if (state.decoder && !state.ended) {
                var chunk = state.decoder.end();
                if (chunk && chunk.length) _this.push(chunk);
            }
            _this.push(null);
        });
        stream30.on("data", function(chunk) {
            debug1("wrapped data");
            if (state.decoder) chunk = state.decoder.write(chunk);
            if (state.objectMode && (chunk === null || chunk === undefined)) return;
            else if (!state.objectMode && (!chunk || !chunk.length)) return;
            var ret = _this.push(chunk);
            if (!ret) {
                paused = true;
                stream30.pause();
            }
        });
        for(var i55 in stream30){
            if (this[i55] === undefined && typeof stream30[i55] === "function") {
                this[i55] = (function methodWrap(method) {
                    return function methodWrapReturnFunction() {
                        return stream30[method].apply(stream30, arguments);
                    };
                })(i55);
            }
        }
        for(var n19 = 0; n19 < kProxyEvents.length; n19++){
            stream30.on(kProxyEvents[n19], this.emit.bind(this, kProxyEvents[n19]));
        }
        this._read = function(n20) {
            debug1("wrapped _read", n20);
            if (paused) {
                paused = false;
                stream30.resume();
            }
        };
        return this;
    };
    if (typeof Symbol === "function") {
        Readable2.prototype[Symbol.asyncIterator] = function() {
            if (createReadableStreamAsyncIterator === undefined) {
                createReadableStreamAsyncIterator = dew$5();
            }
            return createReadableStreamAsyncIterator(this);
        };
    }
    Object.defineProperty(Readable2.prototype, "readableHighWaterMark", {
        enumerable: false,
        get: function get() {
            return this._readableState.highWaterMark;
        }
    });
    Object.defineProperty(Readable2.prototype, "readableBuffer", {
        enumerable: false,
        get: function get() {
            return this._readableState && this._readableState.buffer;
        }
    });
    Object.defineProperty(Readable2.prototype, "readableFlowing", {
        enumerable: false,
        get: function get() {
            return this._readableState.flowing;
        },
        set: function set(state) {
            if (this._readableState) {
                this._readableState.flowing = state;
            }
        }
    });
    Readable2._fromList = fromList;
    Object.defineProperty(Readable2.prototype, "readableLength", {
        enumerable: false,
        get: function get() {
            return this._readableState.length;
        }
    });
    function fromList(n23, state) {
        if (state.length === 0) return null;
        var ret;
        if (state.objectMode) ret = state.buffer.shift();
        else if (!n23 || n23 >= state.length) {
            if (state.decoder) ret = state.buffer.join("");
            else if (state.buffer.length === 1) ret = state.buffer.first();
            else ret = state.buffer.concat(state.length);
            state.buffer.clear();
        } else {
            ret = state.buffer.consume(n23, state.decoder);
        }
        return ret;
    }
    function endReadable(stream31) {
        var state = stream31._readableState;
        debug1("endReadable", state.endEmitted);
        if (!state.endEmitted) {
            state.ended = true;
            process$1.nextTick(endReadableNT, state, stream31);
        }
    }
    function endReadableNT(state, stream32) {
        debug1("endReadableNT", state.endEmitted, state.length);
        if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream32.readable = false;
            stream32.emit("end");
            if (state.autoDestroy) {
                var wState = stream32._writableState;
                if (!wState || wState.autoDestroy && wState.finished) {
                    stream32.destroy();
                }
            }
        }
    }
    if (typeof Symbol === "function") {
        Readable2.from = function(iterable, opts) {
            if (from === undefined) {
                from = dew$4();
            }
            return from(Readable2, iterable, opts);
        };
    }
    function indexOf(xs, x5) {
        for(var i56 = 0, l7 = xs.length; i56 < l7; i56++){
            if (xs[i56] === x5) return i56;
        }
        return -1;
    }
    return exports$3;
}
var exports$2 = {
}, _dewExec$2 = false;
function dew$2() {
    if (_dewExec$2) return exports$2;
    _dewExec$2 = true;
    exports$2 = Transform;
    var _require$codes = dew$b().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = dew$7();
    dew$f()(Transform, Duplex);
    function afterTransform(er, data) {
        var ts = this._transformState;
        ts.transforming = false;
        var cb = ts.writecb;
        if (cb === null) {
            return this.emit("error", new ERR_MULTIPLE_CALLBACK());
        }
        ts.writechunk = null;
        ts.writecb = null;
        if (data != null) this.push(data);
        cb(er);
        var rs = this._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
            this._read(rs.highWaterMark);
        }
    }
    function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);
        Duplex.call(this, options);
        this._transformState = {
            afterTransform: afterTransform.bind(this),
            needTransform: false,
            transforming: false,
            writecb: null,
            writechunk: null,
            writeencoding: null
        };
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        if (options) {
            if (typeof options.transform === "function") this._transform = options.transform;
            if (typeof options.flush === "function") this._flush = options.flush;
        }
        this.on("prefinish", prefinish);
    }
    function prefinish() {
        var _this = this;
        if (typeof this._flush === "function" && !this._readableState.destroyed) {
            this._flush(function(er, data) {
                done(_this, er, data);
            });
        } else {
            done(this, null, null);
        }
    }
    Transform.prototype.push = function(chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
            var rs = this._readableState;
            if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
        }
    };
    Transform.prototype._read = function(n) {
        var ts = this._transformState;
        if (ts.writechunk !== null && !ts.transforming) {
            ts.transforming = true;
            this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
            ts.needTransform = true;
        }
    };
    Transform.prototype._destroy = function(err, cb) {
        Duplex.prototype._destroy.call(this, err, function(err2) {
            cb(err2);
        });
    };
    function done(stream33, er, data) {
        if (er) return stream33.emit("error", er);
        if (data != null) stream33.push(data);
        if (stream33._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
        if (stream33._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
        return stream33.push(null);
    }
    return exports$2;
}
var exports$11 = {
}, _dewExec$11 = false;
function dew$11() {
    if (_dewExec$11) return exports$11;
    _dewExec$11 = true;
    exports$11 = PassThrough;
    var Transform = dew$2();
    dew$f()(PassThrough, Transform);
    function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);
        Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
        cb(null, chunk);
    };
    return exports$11;
}
var exports3 = {
}, _dewExec3 = false;
function dew3() {
    if (_dewExec3) return exports3;
    _dewExec3 = true;
    var eos;
    function once3(callback) {
        var called = false;
        return function() {
            if (called) return;
            called = true;
            callback.apply(void 0, arguments);
        };
    }
    var _require$codes = dew$b().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop3(err) {
        if (err) throw err;
    }
    function isRequest(stream34) {
        return stream34.setHeader && typeof stream34.abort === "function";
    }
    function destroyer(stream35, reading, writing, callback) {
        callback = once3(callback);
        var closed = false;
        stream35.on("close", function() {
            closed = true;
        });
        if (eos === undefined) eos = dew$6();
        eos(stream35, {
            readable: reading,
            writable: writing
        }, function(err) {
            if (err) return callback(err);
            closed = true;
            callback();
        });
        var destroyed = false;
        return function(err) {
            if (closed) return;
            if (destroyed) return;
            destroyed = true;
            if (isRequest(stream35)) return stream35.abort();
            if (typeof stream35.destroy === "function") return stream35.destroy();
            callback(err || new ERR_STREAM_DESTROYED("pipe"));
        };
    }
    function call(fn) {
        fn();
    }
    function pipe(from, to) {
        return from.pipe(to);
    }
    function popCallback(streams) {
        if (!streams.length) return noop3;
        if (typeof streams[streams.length - 1] !== "function") return noop3;
        return streams.pop();
    }
    function pipeline() {
        for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++){
            streams[_key] = arguments[_key];
        }
        var callback = popCallback(streams);
        if (Array.isArray(streams[0])) streams = streams[0];
        if (streams.length < 2) {
            throw new ERR_MISSING_ARGS("streams");
        }
        var error;
        var destroys = streams.map(function(stream36, i57) {
            var reading = i57 < streams.length - 1;
            var writing = i57 > 0;
            return destroyer(stream36, reading, writing, function(err) {
                if (!error) error = err;
                if (err) destroys.forEach(call);
                if (reading) return;
                destroys.forEach(call);
                callback(error);
            });
        });
        return streams.reduce(pipe);
    }
    exports3 = pipeline;
    return exports3;
}
function e4(e14, r) {
    if (null == e14) throw new TypeError("Cannot convert first argument to object");
    for(var t14 = Object(e14), n110 = 1; n110 < arguments.length; n110++){
        var o14 = arguments[n110];
        if (null != o14) for(var a13 = Object.keys(Object(o14)), l12 = 0, i110 = a13.length; l12 < i110; l12++){
            var c13 = a13[l12], b11 = Object.getOwnPropertyDescriptor(o14, c13);
            void 0 !== b11 && b11.enumerable && (t14[c13] = o14[c13]);
        }
    }
    return t14;
}
var r4 = {
    assign: e4,
    polyfill: function() {
        Object.assign || Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: e4
        });
    }
};
var t4, e$12 = Object.prototype.toString, r$12 = function(t23) {
    var r13 = e$12.call(t23), n24 = "[object Arguments]" === r13;
    return n24 || (n24 = "[object Array]" !== r13 && null !== t23 && "object" == typeof t23 && "number" == typeof t23.length && t23.length >= 0 && "[object Function]" === e$12.call(t23.callee)), n24;
};
if (!Object.keys) {
    var n4 = Object.prototype.hasOwnProperty, o4 = Object.prototype.toString, c4 = r$12, l22 = Object.prototype.propertyIsEnumerable, i4 = !l22.call({
        toString: null
    }, "toString"), a4 = l22.call(function() {
    }, "prototype"), u4 = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ], f4 = function(t31) {
        var e23 = t31.constructor;
        return e23 && e23.prototype === t31;
    }, p12 = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
    }, s4 = function() {
        if ("undefined" == typeof window) return !1;
        for(var t41 in window)try {
            if (!p12["$" + t41] && n4.call(window, t41) && null !== window[t41] && "object" == typeof window[t41]) try {
                f4(window[t41]);
            } catch (t) {
                return !0;
            }
        } catch (t) {
            return !0;
        }
        return !1;
    }();
    t4 = function(t5) {
        var e31 = null !== t5 && "object" == typeof t5, r23 = "[object Function]" === o4.call(t5), l31 = c4(t5), p22 = e31 && "[object String]" === o4.call(t5), y12 = [];
        if (!e31 && !r23 && !l31) throw new TypeError("Object.keys called on a non-object");
        var b2 = a4 && r23;
        if (p22 && t5.length > 0 && !n4.call(t5, 0)) for(var g11 = 0; g11 < t5.length; ++g11)y12.push(String(g11));
        if (l31 && t5.length > 0) for(var h12 = 0; h12 < t5.length; ++h12)y12.push(String(h12));
        else for(var $1 in t5)b2 && "prototype" === $1 || !n4.call(t5, $1) || y12.push(String($1));
        if (i4) for(var j11 = function(t6) {
            if ("undefined" == typeof window || !s4) return f4(t6);
            try {
                return f4(t6);
            } catch (t) {
                return !1;
            }
        }(t5), w11 = 0; w11 < u4.length; ++w11)j11 && "constructor" === u4[w11] || !n4.call(t5, u4[w11]) || y12.push(u4[w11]);
        return y12;
    };
}
var y3 = t4, b2 = Array.prototype.slice, g2 = r$12, h4 = Object.keys, $1 = h4 ? function(t7) {
    return h4(t7);
} : y3, j2 = Object.keys;
$1.shim = function() {
    Object.keys ? (function() {
        var t8 = Object.keys(arguments);
        return t8 && t8.length === arguments.length;
    })(1, 2) || (Object.keys = function(t9) {
        return g2(t9) ? j2(b2.call(t9)) : j2(t9);
    }) : Object.keys = $1;
    return Object.keys || $1;
};
var w2 = $1;
var r$2 = w2, e$21 = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"), o$12 = Object.prototype.toString, n$12 = Array.prototype.concat, a$11 = Object.defineProperty, c$12 = a$11 && function() {
    var t10 = {
    };
    try {
        for(var r in a$11(t10, "x", {
            enumerable: !1,
            value: t10
        }), t10)return !1;
        return t10.x === t10;
    } catch (t) {
        return !1;
    }
}(), l$12 = function(t11, r31, e41, n25) {
    var l8;
    (!(r31 in t11) || "function" == typeof (l8 = n25) && "[object Function]" === o$12.call(l8) && n25()) && (c$12 ? a$11(t11, r31, {
        configurable: !0,
        enumerable: !1,
        value: e41,
        writable: !0
    }) : t11[r31] = e41);
}, u$12 = function(t12, o15) {
    var a8 = arguments.length > 2 ? arguments[2] : {
    }, c14 = r$2(o15);
    e$21 && (c14 = n$12.call(c14, Object.getOwnPropertySymbols(o15)));
    for(var u7 = 0; u7 < c14.length; u7 += 1)l$12(t12, c14[u7], o15[c14[u7]], a8[c14[u7]]);
};
u$12.supportsDescriptors = !!c$12;
var f$11 = u$12;
var t$12 = function() {
    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
    if ("symbol" == typeof Symbol.iterator) return !0;
    var t13 = {
    }, e5 = Symbol("test"), r41 = Object(e5);
    if ("string" == typeof e5) return !1;
    if ("[object Symbol]" !== Object.prototype.toString.call(e5)) return !1;
    if ("[object Symbol]" !== Object.prototype.toString.call(r41)) return !1;
    for(e5 in t13[e5] = 42, t13)return !1;
    if ("function" == typeof Object.keys && 0 !== Object.keys(t13).length) return !1;
    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t13).length) return !1;
    var o16 = Object.getOwnPropertySymbols(t13);
    if (1 !== o16.length || o16[0] !== e5) return !1;
    if (!Object.prototype.propertyIsEnumerable.call(t13, e5)) return !1;
    if ("function" == typeof Object.getOwnPropertyDescriptor) {
        var n26 = Object.getOwnPropertyDescriptor(t13, e5);
        if (42 !== n26.value || !0 !== n26.enumerable) return !1;
    }
    return !0;
};
var f$21 = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global).Symbol, e$3 = t$12, l$2 = function() {
    return "function" == typeof f$21 && "function" == typeof Symbol && "symbol" == typeof f$21("foo") && "symbol" == typeof Symbol("bar") && e$3();
};
var t$21 = "Function.prototype.bind called on incompatible ", n$21 = Array.prototype.slice, o$22 = Object.prototype.toString, r$3 = function(r5) {
    var e6 = this;
    if ("function" != typeof e6 || "[object Function]" !== o$22.call(e6)) throw new TypeError(t$21 + e6);
    for(var p13, i58 = n$21.call(arguments, 1), c15 = function() {
        if (this instanceof p13) {
            var t14 = e6.apply(this, i58.concat(n$21.call(arguments)));
            return Object(t14) === t14 ? t14 : this;
        }
        return e6.apply(r5, i58.concat(n$21.call(arguments)));
    }, a9 = Math.max(0, e6.length - i58.length), l9 = [], u8 = 0; u8 < a9; u8++)l9.push("$" + u8);
    if (p13 = Function("binder", "return function (" + l9.join(",") + "){ return binder.apply(this,arguments); }")(c15), e6.prototype) {
        var y22 = function() {
        };
        y22.prototype = e6.prototype, p13.prototype = new y22, y22.prototype = null;
    }
    return p13;
}, e$4 = Function.prototype.bind || r$3;
var o$3 = TypeError, t$3 = Object.getOwnPropertyDescriptor;
if (t$3) try {
    t$3({
    }, "");
} catch (r62) {
    t$3 = null;
}
var n$3 = function() {
    throw new o$3;
}, y$1 = t$3 ? function() {
    try {
        return arguments.callee, n$3;
    } catch (r) {
        try {
            return t$3(arguments, "callee").get;
        } catch (r) {
            return n$3;
        }
    }
}() : n$3, a$21 = l$2(), i$12 = Object.getPrototypeOf || function(r7) {
    return r7.__proto__;
}, d3 = "undefined" == typeof Uint8Array ? void 0 : i$12(Uint8Array), f$3 = {
    "%Array%": Array,
    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
    "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
    "%ArrayIteratorPrototype%": a$21 ? i$12([][Symbol.iterator]()) : void 0,
    "%ArrayPrototype%": Array.prototype,
    "%ArrayProto_entries%": Array.prototype.entries,
    "%ArrayProto_forEach%": Array.prototype.forEach,
    "%ArrayProto_keys%": Array.prototype.keys,
    "%ArrayProto_values%": Array.prototype.values,
    "%AsyncFromSyncIteratorPrototype%": void 0,
    "%AsyncFunction%": void 0,
    "%AsyncFunctionPrototype%": void 0,
    "%AsyncGenerator%": void 0,
    "%AsyncGeneratorFunction%": void 0,
    "%AsyncGeneratorPrototype%": void 0,
    "%AsyncIteratorPrototype%": void 0,
    "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
    "%Boolean%": Boolean,
    "%BooleanPrototype%": Boolean.prototype,
    "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
    "%DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
    "%Date%": Date,
    "%DatePrototype%": Date.prototype,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%ErrorPrototype%": Error.prototype,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%EvalErrorPrototype%": EvalError.prototype,
    "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
    "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
    "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
    "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
    "%Function%": Function,
    "%FunctionPrototype%": Function.prototype,
    "%Generator%": void 0,
    "%GeneratorFunction%": void 0,
    "%GeneratorPrototype%": void 0,
    "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
    "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
    "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
    "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
    "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
    "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": a$21 ? i$12(i$12([][Symbol.iterator]())) : void 0,
    "%JSON%": "object" == typeof JSON ? JSON : void 0,
    "%JSONParse%": "object" == typeof JSON ? JSON.parse : void 0,
    "%Map%": "undefined" == typeof Map ? void 0 : Map,
    "%MapIteratorPrototype%": "undefined" != typeof Map && a$21 ? i$12((new Map)[Symbol.iterator]()) : void 0,
    "%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
    "%Math%": Math,
    "%Number%": Number,
    "%NumberPrototype%": Number.prototype,
    "%Object%": Object,
    "%ObjectPrototype%": Object.prototype,
    "%ObjProto_toString%": Object.prototype.toString,
    "%ObjProto_valueOf%": Object.prototype.valueOf,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
    "%PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
    "%PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
    "%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
    "%Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
    "%Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
    "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
    "%RangeError%": RangeError,
    "%RangeErrorPrototype%": RangeError.prototype,
    "%ReferenceError%": ReferenceError,
    "%ReferenceErrorPrototype%": ReferenceError.prototype,
    "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
    "%RegExp%": RegExp,
    "%RegExpPrototype%": RegExp.prototype,
    "%Set%": "undefined" == typeof Set ? void 0 : Set,
    "%SetIteratorPrototype%": "undefined" != typeof Set && a$21 ? i$12((new Set)[Symbol.iterator]()) : void 0,
    "%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
    "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
    "%String%": String,
    "%StringIteratorPrototype%": a$21 ? i$12(""[Symbol.iterator]()) : void 0,
    "%StringPrototype%": String.prototype,
    "%Symbol%": a$21 ? Symbol : void 0,
    "%SymbolPrototype%": a$21 ? Symbol.prototype : void 0,
    "%SyntaxError%": SyntaxError,
    "%SyntaxErrorPrototype%": SyntaxError.prototype,
    "%ThrowTypeError%": y$1,
    "%TypedArray%": d3,
    "%TypedArrayPrototype%": d3 ? d3.prototype : void 0,
    "%TypeError%": o$3,
    "%TypeErrorPrototype%": o$3.prototype,
    "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
    "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
    "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
    "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
    "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
    "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
    "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
    "%URIError%": URIError,
    "%URIErrorPrototype%": URIError.prototype,
    "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
    "%WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
    "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
    "%WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
}, u$21 = e$4.call(Function.call, String.prototype.replace), A2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, l$3 = /\\(\\)?/g, v3 = function(r8) {
    var e7 = [];
    return u$21(r8, A2, function(r9, o17, t15, n27) {
        e7[e7.length] = t15 ? u$21(n27, l$3, "$1") : o17 || r9;
    }), e7;
}, P2 = function(r10, e8) {
    if (!(r10 in f$3)) throw new SyntaxError("intrinsic " + r10 + " does not exist!");
    if (void 0 === f$3[r10] && !e8) throw new o$3("intrinsic " + r10 + " exists, but is not available. Please file an issue!");
    return f$3[r10];
}, c$2 = function(r11, e9) {
    if ("string" != typeof r11 || 0 === r11.length) throw new TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof e9) throw new TypeError('"allowMissing" argument must be a boolean');
    for(var n28 = v3(r11), y31 = P2("%" + (n28.length > 0 ? n28[0] : "") + "%", e9), a10 = 1; a10 < n28.length; a10 += 1)if (null != y31) if (t$3 && a10 + 1 >= n28.length) {
        var i59 = t$3(y31, n28[a10]);
        if (!e9 && !(n28[a10] in y31)) throw new o$3("base intrinsic for " + r11 + " exists, but the property is not available.");
        y31 = i59 ? i59.get || i59.value : y31[n28[a10]];
    } else y31 = y31[n28[a10]];
    return y31;
};
var t$4, p$1 = e$4, o$4 = c$2("%Function%"), i$2 = o$4.apply, a$3 = o$4.call;
(t$4 = function() {
    return p$1.apply(a$3, arguments);
}).apply = function() {
    return p$1.apply(i$2, arguments);
};
var l$4 = t$4;
var r$4, n$4, i$3 = function(t16) {
    return t16 != t16;
}, o$5 = (r$4 = function(t17, e10) {
    return 0 === t17 && 0 === e10 ? 1 / t17 == 1 / e10 : t17 === e10 || !(!i$3(t17) || !i$3(e10));
}, r$4), c$3 = (n$4 = function() {
    return "function" == typeof Object.is ? Object.is : o$5;
}, n$4), f$4 = f$11, u$3 = f$11, s$11 = r$4, a$4 = n$4, l$5 = function() {
    var t18 = c$3();
    return f$4(Object, {
        is: t18
    }, {
        is: function() {
            return Object.is !== t18;
        }
    }), t18;
}, p$2 = l$4(a$4(), Object);
u$3(p$2, {
    getPolyfill: a$4,
    implementation: s$11,
    shim: l$5
});
var m3 = p$2;
N2 = function(r12) {
    return r12 != r12;
};
var N2, e$5, i$4 = N2, n$5 = (e$5 = function() {
    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : i$4;
}, f$11), t$5 = e$5, u$4 = f$11, a$5 = N2, m$1 = e$5, o$6 = function() {
    var r13 = t$5();
    return n$5(Number, {
        isNaN: r13
    }, {
        isNaN: function() {
            return Number.isNaN !== r13;
        }
    }), r13;
}, s$2 = m$1();
u$4(s$2, {
    getPolyfill: m$1,
    implementation: a$5,
    shim: o$6
});
var f$5 = s$2;
var c$4 = {
}, a$6 = !1;
function i$5() {
    if (a$6) return c$4;
    function e11(t19) {
        return (e11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t20) {
            return typeof t20;
        } : function(t21) {
            return t21 && "function" == typeof Symbol && t21.constructor === Symbol && t21 !== Symbol.prototype ? "symbol" : typeof t21;
        })(t19);
    }
    function n31(t22, n29) {
        return !n29 || "object" !== e11(n29) && "function" != typeof n29 ? (function(t23) {
            if (void 0 === t23) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t23;
        })(t22) : n29;
    }
    function r14(t24) {
        return (r14 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t25) {
            return t25.__proto__ || Object.getPrototypeOf(t25);
        })(t24);
    }
    function o23(t26, e12) {
        return (o23 = Object.setPrototypeOf || function(t27, e13) {
            return t27.__proto__ = e13, t27;
        })(t26, e12);
    }
    a$6 = !0;
    var i210, u13, l4 = {
    };
    function f7(t28, e14, c23) {
        c23 || (c23 = Error);
        var a23 = function(c31) {
            function a14(o18, c16, i60) {
                var u9;
                return !function(t29, e15) {
                    if (!(t29 instanceof e15)) throw new TypeError("Cannot call a class as a function");
                }(this, a14), (u9 = n31(this, r14(a14).call(this, function(t30, n30, r15) {
                    return "string" == typeof e14 ? e14 : e14(t30, n30, r15);
                }(o18, c16, i60)))).code = t28, u9;
            }
            return !function(t31, e16) {
                if ("function" != typeof e16 && null !== e16) throw new TypeError("Super expression must either be null or a function");
                t31.prototype = Object.create(e16 && e16.prototype, {
                    constructor: {
                        value: t31,
                        writable: !0,
                        configurable: !0
                    }
                }), e16 && o23(t31, e16);
            }(a14, c31), a14;
        }(c23);
        l4[t28] = a23;
    }
    function s13(t32, e17) {
        if (Array.isArray(t32)) {
            var n32 = t32.length;
            return t32 = t32.map(function(t33) {
                return String(t33);
            }), n32 > 2 ? "one of ".concat(e17, " ").concat(t32.slice(0, n32 - 1).join(", "), ", or ") + t32[n32 - 1] : 2 === n32 ? "one of ".concat(e17, " ").concat(t32[0], " or ").concat(t32[1]) : "of ".concat(e17, " ").concat(t32[0]);
        }
        return "of ".concat(e17, " ").concat(String(t32));
    }
    return f7("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), f7("ERR_INVALID_ARG_TYPE", function(t34, n4, r16) {
        var o19, c17, u10;
        if (void 0 === i210 && (i210 = tt()), i210("string" == typeof t34, "'name' must be a string"), "string" == typeof n4 && (c17 = "not ", n4.substr(0, c17.length) === c17) ? (o19 = "must not be", n4 = n4.replace(/^not /, "")) : o19 = "must be", (function(t35, e18, n33) {
            return (void 0 === n33 || n33 > t35.length) && (n33 = t35.length), t35.substring(n33 - e18.length, n33) === e18;
        })(t34, " argument")) u10 = "The ".concat(t34, " ").concat(o19, " ").concat(s13(n4, "type"));
        else {
            var l10 = function(t36, e19, n34) {
                return "number" != typeof n34 && (n34 = 0), !(n34 + e19.length > t36.length) && -1 !== t36.indexOf(e19, n34);
            }(t34, ".") ? "property" : "argument";
            u10 = 'The "'.concat(t34, '" ').concat(l10, " ").concat(o19, " ").concat(s13(n4, "type"));
        }
        return u10 += ". Received type ".concat(e11(r16));
    }, TypeError), f7("ERR_INVALID_ARG_VALUE", function(e20, n35) {
        var r17 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
        void 0 === u13 && (u13 = X);
        var o20 = u13.inspect(n35);
        return o20.length > 128 && (o20 = "".concat(o20.slice(0, 128), "...")), "The argument '".concat(e20, "' ").concat(r17, ". Received ").concat(o20);
    }, TypeError), f7("ERR_INVALID_RETURN_VALUE", function(t37, n36, r18) {
        var o24;
        return o24 = r18 && r18.constructor && r18.constructor.name ? "instance of ".concat(r18.constructor.name) : "type ".concat(e11(r18)), "Expected ".concat(t37, ' to be returned from the "').concat(n36, '"') + " function but got ".concat(o24, ".");
    }, TypeError), f7("ERR_MISSING_ARGS", function() {
        for(var t38 = arguments.length, e21 = new Array(t38), n37 = 0; n37 < t38; n37++)e21[n37] = arguments[n37];
        void 0 === i210 && (i210 = tt()), i210(e21.length > 0, "At least one arg needs to be specified");
        var r19 = "The ", o25 = e21.length;
        switch(e21 = e21.map(function(t39) {
            return '"'.concat(t39, '"');
        }), o25){
            case 1:
                r19 += "".concat(e21[0], " argument");
                break;
            case 2:
                r19 += "".concat(e21[0], " and ").concat(e21[1], " arguments");
                break;
            default:
                r19 += e21.slice(0, o25 - 1).join(", "), r19 += ", and ".concat(e21[o25 - 1], " arguments");
        }
        return "".concat(r19, " must be specified");
    }, TypeError), c$4.codes = l4, c$4;
}
var u$5 = {
}, l$6 = !1;
function f$6() {
    if (l$6) return u$5;
    l$6 = !0;
    var n5 = T;
    function r20(t40, e22, n38) {
        return e22 in t40 ? Object.defineProperty(t40, e22, {
            value: n38,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t40[e22] = n38, t40;
    }
    function o31(t41, e23) {
        for(var n39 = 0; n39 < e23.length; n39++){
            var r21 = e23[n39];
            r21.enumerable = r21.enumerable || !1, r21.configurable = !0, "value" in r21 && (r21.writable = !0), Object.defineProperty(t41, r21.key, r21);
        }
    }
    function c4(t42, e24) {
        return !e24 || "object" !== y4(e24) && "function" != typeof e24 ? a31(t42) : e24;
    }
    function a31(t43) {
        if (void 0 === t43) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t43;
    }
    function f13(t44) {
        var e25 = "function" == typeof Map ? new Map : void 0;
        return (f13 = function(t45) {
            if (null === t45 || (n40 = t45, -1 === Function.toString.call(n40).indexOf("[native code]"))) return t45;
            var n40;
            if ("function" != typeof t45) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e25) {
                if (e25.has(t45)) return e25.get(t45);
                e25.set(t45, r22);
            }
            function r22() {
                return p32(t45, arguments, h22(this).constructor);
            }
            return r22.prototype = Object.create(t45.prototype, {
                constructor: {
                    value: r22,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), g21(r22, t45);
        })(t44);
    }
    function s14() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), !0;
        } catch (t) {
            return !1;
        }
    }
    function p32(t46, e26, n6) {
        return (p32 = s14() ? Reflect.construct : function(t47, e27, n41) {
            var r23 = [
                null
            ];
            r23.push.apply(r23, e27);
            var o26 = new (Function.bind.apply(t47, r23));
            return n41 && g21(o26, n41.prototype), o26;
        }).apply(null, arguments);
    }
    function g21(t48, e28) {
        return (g21 = Object.setPrototypeOf || function(t49, e29) {
            return t49.__proto__ = e29, t49;
        })(t48, e28);
    }
    function h22(t50) {
        return (h22 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t51) {
            return t51.__proto__ || Object.getPrototypeOf(t51);
        })(t50);
    }
    function y4(t52) {
        return (y4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t53) {
            return typeof t53;
        } : function(t54) {
            return t54 && "function" == typeof Symbol && t54.constructor === Symbol && t54 !== Symbol.prototype ? "symbol" : typeof t54;
        })(t52);
    }
    var b3 = X.inspect, v11 = i$5().codes.ERR_INVALID_ARG_TYPE;
    function d12(t55, e30, n42) {
        return (void 0 === n42 || n42 > t55.length) && (n42 = t55.length), t55.substring(n42 - e30.length, n42) === e30;
    }
    var m11 = "", E11 = "", w21 = "", S11 = "", j21 = {
        deepStrictEqual: "Expected values to be strictly deep-equal:",
        strictEqual: "Expected values to be strictly equal:",
        strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
        deepEqual: "Expected values to be loosely deep-equal:",
        equal: "Expected values to be loosely equal:",
        notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
        notStrictEqual: 'Expected "actual" to be strictly unequal to:',
        notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
        notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
        notEqual: 'Expected "actual" to be loosely unequal to:',
        notIdentical: "Values identical but not reference-equal:"
    };
    function O11(t56) {
        var e31 = Object.keys(t56), n43 = Object.create(Object.getPrototypeOf(t56));
        return e31.forEach(function(e) {
            n43[e] = t56[e];
        }), Object.defineProperty(n43, "message", {
            value: t56.message
        }), n43;
    }
    function x11(t57) {
        return b3(t57, {
            compact: !1,
            customInspect: !1,
            depth: 1000,
            maxArrayLength: 1 / 0,
            showHidden: !1,
            breakLength: 1 / 0,
            showProxy: !1,
            sorted: !0,
            getters: !0
        });
    }
    function q1(t58, e32, r24) {
        var o27 = "", c18 = "", a15 = 0, i61 = "", u14 = !1, l13 = x11(t58), f8 = l13.split("\n"), s15 = x11(e32).split("\n"), p14 = 0, g3 = "";
        if ("strictEqual" === r24 && "object" === y4(t58) && "object" === y4(e32) && null !== t58 && null !== e32 && (r24 = "strictEqualObject"), 1 === f8.length && 1 === s15.length && f8[0] !== s15[0]) {
            var h31 = f8[0].length + s15[0].length;
            if (h31 <= 10) {
                if (!("object" === y4(t58) && null !== t58 || "object" === y4(e32) && null !== e32 || 0 === t58 && 0 === e32)) return "".concat(j21[r24], "\n\n") + "".concat(f8[0], " !== ").concat(s15[0], "\n");
            } else if ("strictEqualObject" !== r24) {
                if (h31 < (n5.stderr && n5.stderr.isTTY ? n5.stderr.columns : 80)) {
                    for(; f8[0][p14] === s15[0][p14];)p14++;
                    p14 > 2 && (g3 = "\n  ".concat(function(t59, e33) {
                        if (e33 = Math.floor(e33), 0 == t59.length || 0 == e33) return "";
                        var n44 = t59.length * e33;
                        for(e33 = Math.floor(Math.log(e33) / Math.log(2)); e33;)t59 += t59, e33--;
                        return t59 += t59.substring(0, n44 - t59.length);
                    }(" ", p14), "^"), p14 = 0);
                }
            }
        }
        for(var b4 = f8[f8.length - 1], v21 = s15[s15.length - 1]; b4 === v21 && (p14++ < 2 ? i61 = "\n  ".concat(b4).concat(i61) : o27 = b4, f8.pop(), s15.pop(), 0 !== f8.length && 0 !== s15.length);)b4 = f8[f8.length - 1], v21 = s15[s15.length - 1];
        var O2 = Math.max(f8.length, s15.length);
        if (0 === O2) {
            var q2 = l13.split("\n");
            if (q2.length > 30) for(q2[26] = "".concat(m11, "...").concat(S11); q2.length > 27;)q2.pop();
            return "".concat(j21.notIdentical, "\n\n").concat(q2.join("\n"), "\n");
        }
        p14 > 3 && (i61 = "\n".concat(m11, "...").concat(S11).concat(i61), u14 = !0), "" !== o27 && (i61 = "\n  ".concat(o27).concat(i61), o27 = "");
        var R2 = 0, A11 = j21[r24] + "\n".concat(E11, "+ actual").concat(S11, " ").concat(w21, "- expected").concat(S11), k11 = " ".concat(m11, "...").concat(S11, " Lines skipped");
        for(p14 = 0; p14 < O2; p14++){
            var _11 = p14 - a15;
            if (f8.length < p14 + 1) _11 > 1 && p14 > 2 && (_11 > 4 ? (c18 += "\n".concat(m11, "...").concat(S11), u14 = !0) : _11 > 3 && (c18 += "\n  ".concat(s15[p14 - 2]), R2++), c18 += "\n  ".concat(s15[p14 - 1]), R2++), a15 = p14, o27 += "\n".concat(w21, "-").concat(S11, " ").concat(s15[p14]), R2++;
            else if (s15.length < p14 + 1) _11 > 1 && p14 > 2 && (_11 > 4 ? (c18 += "\n".concat(m11, "...").concat(S11), u14 = !0) : _11 > 3 && (c18 += "\n  ".concat(f8[p14 - 2]), R2++), c18 += "\n  ".concat(f8[p14 - 1]), R2++), a15 = p14, c18 += "\n".concat(E11, "+").concat(S11, " ").concat(f8[p14]), R2++;
            else {
                var T11 = s15[p14], P11 = f8[p14], I11 = P11 !== T11 && (!d12(P11, ",") || P11.slice(0, -1) !== T11);
                I11 && d12(T11, ",") && T11.slice(0, -1) === P11 && (I11 = !1, P11 += ","), I11 ? (_11 > 1 && p14 > 2 && (_11 > 4 ? (c18 += "\n".concat(m11, "...").concat(S11), u14 = !0) : _11 > 3 && (c18 += "\n  ".concat(f8[p14 - 2]), R2++), c18 += "\n  ".concat(f8[p14 - 1]), R2++), a15 = p14, c18 += "\n".concat(E11, "+").concat(S11, " ").concat(P11), o27 += "\n".concat(w21, "-").concat(S11, " ").concat(T11), R2 += 2) : (c18 += o27, o27 = "", 1 !== _11 && 0 !== p14 || (c18 += "\n  ".concat(P11), R2++));
            }
            if (R2 > 20 && p14 < O2 - 2) return "".concat(A11).concat(k11, "\n").concat(c18, "\n").concat(m11, "...").concat(S11).concat(o27, "\n") + "".concat(m11, "...").concat(S11);
        }
        return "".concat(A11).concat(u14 ? k11 : "", "\n").concat(c18).concat(o27).concat(i61).concat(g3);
    }
    var R11 = function(t60) {
        function e34(t61) {
            var r25;
            if (!function(t62, e35) {
                if (!(t62 instanceof e35)) throw new TypeError("Cannot call a class as a function");
            }(this, e34), "object" !== y4(t61) || null === t61) throw new v11("options", "Object", t61);
            var o28 = t61.message, i62 = t61.operator, u15 = t61.stackStartFn, l14 = t61.actual, f9 = t61.expected, s16 = Error.stackTraceLimit;
            if (Error.stackTraceLimit = 0, null != o28) r25 = c4(this, h22(e34).call(this, String(o28)));
            else if (n5.stderr && n5.stderr.isTTY && (n5.stderr && n5.stderr.getColorDepth && 1 !== n5.stderr.getColorDepth() ? (m11 = "[34m", E11 = "[32m", S11 = "[39m", w21 = "[31m") : (m11 = "", E11 = "", S11 = "", w21 = "")), "object" === y4(l14) && null !== l14 && "object" === y4(f9) && null !== f9 && "stack" in l14 && l14 instanceof Error && "stack" in f9 && f9 instanceof Error && (l14 = O11(l14), f9 = O11(f9)), "deepStrictEqual" === i62 || "strictEqual" === i62) r25 = c4(this, h22(e34).call(this, q1(l14, f9, i62)));
            else if ("notDeepStrictEqual" === i62 || "notStrictEqual" === i62) {
                var p15 = j21[i62], g4 = x11(l14).split("\n");
                if ("notStrictEqual" === i62 && "object" === y4(l14) && null !== l14 && (p15 = j21.notStrictEqualObject), g4.length > 30) for(g4[26] = "".concat(m11, "...").concat(S11); g4.length > 27;)g4.pop();
                r25 = 1 === g4.length ? c4(this, h22(e34).call(this, "".concat(p15, " ").concat(g4[0]))) : c4(this, h22(e34).call(this, "".concat(p15, "\n\n").concat(g4.join("\n"), "\n")));
            } else {
                var b5 = x11(l14), d21 = "", R3 = j21[i62];
                "notDeepEqual" === i62 || "notEqual" === i62 ? (b5 = "".concat(j21[i62], "\n\n").concat(b5)).length > 1024 && (b5 = "".concat(b5.slice(0, 1021), "...")) : (d21 = "".concat(x11(f9)), b5.length > 512 && (b5 = "".concat(b5.slice(0, 509), "...")), d21.length > 512 && (d21 = "".concat(d21.slice(0, 509), "...")), "deepEqual" === i62 || "equal" === i62 ? b5 = "".concat(R3, "\n\n").concat(b5, "\n\nshould equal\n\n") : d21 = " ".concat(i62, " ").concat(d21)), r25 = c4(this, h22(e34).call(this, "".concat(b5).concat(d21)));
            }
            return Error.stackTraceLimit = s16, r25.generatedMessage = !o28, Object.defineProperty(a31(r25), "name", {
                value: "AssertionError [ERR_ASSERTION]",
                enumerable: !1,
                writable: !0,
                configurable: !0
            }), r25.code = "ERR_ASSERTION", r25.actual = l14, r25.expected = f9, r25.operator = i62, Error.captureStackTrace && Error.captureStackTrace(a31(r25), u15), r25.stack, r25.name = "AssertionError", c4(r25);
        }
        var i310, u23;
        return !function(t63, e36) {
            if ("function" != typeof e36 && null !== e36) throw new TypeError("Super expression must either be null or a function");
            t63.prototype = Object.create(e36 && e36.prototype, {
                constructor: {
                    value: t63,
                    writable: !0,
                    configurable: !0
                }
            }), e36 && g21(t63, e36);
        }(e34, t60), i310 = e34, (u23 = [
            {
                key: "toString",
                value: function() {
                    return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
                }
            },
            {
                key: b3.custom,
                value: function(t64, e37) {
                    return b3(this, function(t65) {
                        for(var e38 = 1; e38 < arguments.length; e38++){
                            var n45 = null != arguments[e38] ? arguments[e38] : {
                            }, o29 = Object.keys(n45);
                            "function" == typeof Object.getOwnPropertySymbols && (o29 = o29.concat(Object.getOwnPropertySymbols(n45).filter(function(t66) {
                                return Object.getOwnPropertyDescriptor(n45, t66).enumerable;
                            }))), o29.forEach(function(e39) {
                                r20(t65, e39, n45[e39]);
                            });
                        }
                        return t65;
                    }({
                    }, e37, {
                        customInspect: !1,
                        depth: 0
                    }));
                }
            }
        ]) && o31(i310.prototype, u23), e34;
    }(f13(Error));
    return u$5 = R11;
}
function s$3(t67, e40) {
    return (function(t68) {
        if (Array.isArray(t68)) return t68;
    })(t67) || (function(t69, e41) {
        var n46 = [], r26 = !0, o30 = !1, c19 = void 0;
        try {
            for(var a16, i63 = t69[Symbol.iterator](); !(r26 = (a16 = i63.next()).done) && (n46.push(a16.value), !e41 || n46.length !== e41); r26 = !0);
        } catch (t70) {
            o30 = !0, c19 = t70;
        } finally{
            try {
                r26 || null == i63.return || i63.return();
            } finally{
                if (o30) throw c19;
            }
        }
        return n46;
    })(t67, e40) || (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    })();
}
function p$3(t71) {
    return (p$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t72) {
        return typeof t72;
    } : function(t73) {
        return t73 && "function" == typeof Symbol && t73.constructor === Symbol && t73 !== Symbol.prototype ? "symbol" : typeof t73;
    })(t71);
}
var g$1 = void 0 !== /a/g.flags, h$11 = function(t74) {
    var e42 = [];
    return t74.forEach(function(t75) {
        return e42.push(t75);
    }), e42;
}, y$2 = function(t76) {
    var e43 = [];
    return t76.forEach(function(t77, n47) {
        return e43.push([
            n47,
            t77
        ]);
    }), e43;
}, b$1 = Object.is ? Object.is : m3, v$1 = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
}, d$1 = Number.isNaN ? Number.isNaN : f$5;
function m$2(t78) {
    return t78.call.bind(t78);
}
var E2 = m$2(Object.prototype.hasOwnProperty), w$1 = m$2(Object.prototype.propertyIsEnumerable), S2 = m$2(Object.prototype.toString), j$1 = X.types, O2 = j$1.isAnyArrayBuffer, x2 = j$1.isArrayBufferView, q1 = j$1.isDate, R2 = j$1.isMap, A$1 = j$1.isRegExp, k2 = j$1.isSet, _2 = j$1.isNativeError, T3 = j$1.isBoxedPrimitive, P$1 = j$1.isNumberObject, I2 = j$1.isStringObject, D2 = j$1.isBooleanObject, F2 = j$1.isBigIntObject, N$1 = j$1.isSymbolObject, L2 = j$1.isFloat32Array, M2 = j$1.isFloat64Array;
function U2(t79) {
    if (0 === t79.length || t79.length > 10) return !0;
    for(var e44 = 0; e44 < t79.length; e44++){
        var n48 = t79.charCodeAt(e44);
        if (n48 < 48 || n48 > 57) return !0;
    }
    return 10 === t79.length && t79 >= Math.pow(2, 32);
}
function G1(t80) {
    return Object.keys(t80).filter(U2).concat(v$1(t80).filter(Object.prototype.propertyIsEnumerable.bind(t80)));
}
function V1(t81, e45) {
    if (t81 === e45) return 0;
    for(var n49 = t81.length, r27 = e45.length, o32 = 0, c20 = Math.min(n49, r27); o32 < c20; ++o32)if (t81[o32] !== e45[o32]) {
        n49 = t81[o32], r27 = e45[o32];
        break;
    }
    return n49 < r27 ? -1 : r27 < n49 ? 1 : 0;
}
function B2(t82, e46, n7, r28) {
    if (t82 === e46) return 0 !== t82 || !n7 || b$1(t82, e46);
    if (n7) {
        if ("object" !== p$3(t82)) return "number" == typeof t82 && d$1(t82) && d$1(e46);
        if ("object" !== p$3(e46) || null === t82 || null === e46) return !1;
        if (Object.getPrototypeOf(t82) !== Object.getPrototypeOf(e46)) return !1;
    } else {
        if (null === t82 || "object" !== p$3(t82)) return (null === e46 || "object" !== p$3(e46)) && t82 == e46;
        if (null === e46 || "object" !== p$3(e46)) return !1;
    }
    var o33, c24, a17, i64, u16 = S2(t82);
    if (u16 !== S2(e46)) return !1;
    if (Array.isArray(t82)) {
        if (t82.length !== e46.length) return !1;
        var l15 = G1(t82), f10 = G1(e46);
        return l15.length === f10.length && C2(t82, e46, n7, r28, 1, l15);
    }
    if ("[object Object]" === u16 && (!R2(t82) && R2(e46) || !k2(t82) && k2(e46))) return !1;
    if (q1(t82)) {
        if (!q1(e46) || Date.prototype.getTime.call(t82) !== Date.prototype.getTime.call(e46)) return !1;
    } else if (A$1(t82)) {
        if (!A$1(e46) || (a17 = t82, i64 = e46, !(g$1 ? a17.source === i64.source && a17.flags === i64.flags : RegExp.prototype.toString.call(a17) === RegExp.prototype.toString.call(i64)))) return !1;
    } else if (_2(t82) || t82 instanceof Error) {
        if (t82.message !== e46.message || t82.name !== e46.name) return !1;
    } else {
        if (x2(t82)) {
            if (n7 || !L2(t82) && !M2(t82)) {
                if (!function(t83, e47) {
                    return t83.byteLength === e47.byteLength && 0 === V1(new Uint8Array(t83.buffer, t83.byteOffset, t83.byteLength), new Uint8Array(e47.buffer, e47.byteOffset, e47.byteLength));
                }(t82, e46)) return !1;
            } else if (!function(t84, e48) {
                if (t84.byteLength !== e48.byteLength) return !1;
                for(var n50 = 0; n50 < t84.byteLength; n50++)if (t84[n50] !== e48[n50]) return !1;
                return !0;
            }(t82, e46)) return !1;
            var s17 = G1(t82), h41 = G1(e46);
            return s17.length === h41.length && C2(t82, e46, n7, r28, 0, s17);
        }
        if (k2(t82)) return !(!k2(e46) || t82.size !== e46.size) && C2(t82, e46, n7, r28, 2);
        if (R2(t82)) return !(!R2(e46) || t82.size !== e46.size) && C2(t82, e46, n7, r28, 3);
        if (O2(t82)) {
            if (c24 = e46, (o33 = t82).byteLength !== c24.byteLength || 0 !== V1(new Uint8Array(o33), new Uint8Array(c24))) return !1;
        } else if (T3(t82) && !function(t85, e49) {
            return P$1(t85) ? P$1(e49) && b$1(Number.prototype.valueOf.call(t85), Number.prototype.valueOf.call(e49)) : I2(t85) ? I2(e49) && String.prototype.valueOf.call(t85) === String.prototype.valueOf.call(e49) : D2(t85) ? D2(e49) && Boolean.prototype.valueOf.call(t85) === Boolean.prototype.valueOf.call(e49) : F2(t85) ? F2(e49) && BigInt.prototype.valueOf.call(t85) === BigInt.prototype.valueOf.call(e49) : N$1(e49) && Symbol.prototype.valueOf.call(t85) === Symbol.prototype.valueOf.call(e49);
        }(t82, e46)) return !1;
    }
    return C2(t82, e46, n7, r28, 0);
}
function z2(t86, e50) {
    return e50.filter(function(e51) {
        return w$1(t86, e51);
    });
}
function C2(t87, e52, n51, r29, o34, c25) {
    if (5 === arguments.length) {
        c25 = Object.keys(t87);
        var a18 = Object.keys(e52);
        if (c25.length !== a18.length) return !1;
    }
    for(var i65 = 0; i65 < c25.length; i65++)if (!E2(e52, c25[i65])) return !1;
    if (n51 && 5 === arguments.length) {
        var u17 = v$1(t87);
        if (0 !== u17.length) {
            var l16 = 0;
            for(i65 = 0; i65 < u17.length; i65++){
                var f14 = u17[i65];
                if (w$1(t87, f14)) {
                    if (!w$1(e52, f14)) return !1;
                    c25.push(f14), l16++;
                } else if (w$1(e52, f14)) return !1;
            }
            var s18 = v$1(e52);
            if (u17.length !== s18.length && z2(e52, s18).length !== l16) return !1;
        } else {
            var p16 = v$1(e52);
            if (0 !== p16.length && 0 !== z2(e52, p16).length) return !1;
        }
    }
    if (0 === c25.length && (0 === o34 || 1 === o34 && 0 === t87.length || 0 === t87.size)) return !0;
    if (void 0 === r29) r29 = {
        val1: new Map,
        val2: new Map,
        position: 0
    };
    else {
        var g5 = r29.val1.get(t87);
        if (void 0 !== g5) {
            var h5 = r29.val2.get(e52);
            if (void 0 !== h5) return g5 === h5;
        }
        r29.position++;
    }
    r29.val1.set(t87, r29.position), r29.val2.set(e52, r29.position);
    var y5 = Q1(t87, e52, n51, c25, r29, o34);
    return r29.val1.delete(t87), r29.val2.delete(e52), y5;
}
function Y2(t88, e53, n52, r30) {
    for(var o35 = h$11(t88), c26 = 0; c26 < o35.length; c26++){
        var a19 = o35[c26];
        if (B2(e53, a19, n52, r30)) return t88.delete(a19), !0;
    }
    return !1;
}
function W1(t89) {
    switch(p$3(t89)){
        case "undefined":
            return null;
        case "object":
            return;
        case "symbol":
            return !1;
        case "string":
            t89 = +t89;
        case "number":
            if (d$1(t89)) return !1;
    }
    return !0;
}
function H1(t90, e54, n53) {
    var r31 = W1(n53);
    return null != r31 ? r31 : e54.has(r31) && !t90.has(r31);
}
function J1(t91, e55, n54, r32, o36) {
    var c27 = W1(n54);
    if (null != c27) return c27;
    var a20 = e55.get(c27);
    return !(void 0 === a20 && !e55.has(c27) || !B2(r32, a20, !1, o36)) && !t91.has(c27) && B2(r32, a20, !1, o36);
}
function K1(t92, e56, n55, r33, o37, c28) {
    for(var a24 = h$11(t92), i66 = 0; i66 < a24.length; i66++){
        var u18 = a24[i66];
        if (B2(n55, u18, o37, c28) && B2(r33, e56.get(u18), o37, c28)) return t92.delete(u18), !0;
    }
    return !1;
}
function Q1(t93, e57, n8, r34, o4, c5) {
    var a4 = 0;
    if (2 === c5) {
        if (!function(t94, e58, n56, r35) {
            for(var o38 = null, c29 = h$11(t94), a25 = 0; a25 < c29.length; a25++){
                var i67 = c29[a25];
                if ("object" === p$3(i67) && null !== i67) null === o38 && (o38 = new Set), o38.add(i67);
                else if (!e58.has(i67)) {
                    if (n56) return !1;
                    if (!H1(t94, e58, i67)) return !1;
                    null === o38 && (o38 = new Set), o38.add(i67);
                }
            }
            if (null !== o38) {
                for(var u19 = h$11(e58), l17 = 0; l17 < u19.length; l17++){
                    var f15 = u19[l17];
                    if ("object" === p$3(f15) && null !== f15) {
                        if (!Y2(o38, f15, n56, r35)) return !1;
                    } else if (!n56 && !t94.has(f15) && !Y2(o38, f15, n56, r35)) return !1;
                }
                return 0 === o38.size;
            }
            return !0;
        }(t93, e57, n8, o4)) return !1;
    } else if (3 === c5) {
        if (!function(t95, e59, n57, r36) {
            for(var o39 = null, c30 = y$2(t95), a26 = 0; a26 < c30.length; a26++){
                var i68 = s$3(c30[a26], 2), u20 = i68[0], l18 = i68[1];
                if ("object" === p$3(u20) && null !== u20) null === o39 && (o39 = new Set), o39.add(u20);
                else {
                    var f16 = e59.get(u20);
                    if (void 0 === f16 && !e59.has(u20) || !B2(l18, f16, n57, r36)) {
                        if (n57) return !1;
                        if (!J1(t95, e59, u20, l18, r36)) return !1;
                        null === o39 && (o39 = new Set), o39.add(u20);
                    }
                }
            }
            if (null !== o39) {
                for(var g6 = y$2(e59), h6 = 0; h6 < g6.length; h6++){
                    var b6 = s$3(g6[h6], 2), v31 = (u20 = b6[0], b6[1]);
                    if ("object" === p$3(u20) && null !== u20) {
                        if (!K1(o39, t95, u20, v31, n57, r36)) return !1;
                    } else if (!(n57 || t95.has(u20) && B2(t95.get(u20), v31, !1, r36) || K1(o39, t95, u20, v31, !1, r36))) return !1;
                }
                return 0 === o39.size;
            }
            return !0;
        }(t93, e57, n8, o4)) return !1;
    } else if (1 === c5) for(; a4 < t93.length; a4++){
        if (!E2(t93, a4)) {
            if (E2(e57, a4)) return !1;
            for(var i4 = Object.keys(t93); a4 < i4.length; a4++){
                var u31 = i4[a4];
                if (!E2(e57, u31) || !B2(t93[u31], e57[u31], n8, o4)) return !1;
            }
            return i4.length === Object.keys(e57).length;
        }
        if (!E2(e57, a4) || !B2(t93[a4], e57[a4], n8, o4)) return !1;
    }
    for(a4 = 0; a4 < r34.length; a4++){
        var l5 = r34[a4];
        if (!B2(t93[l5], e57[l5], n8, o4)) return !1;
    }
    return !0;
}
var X1 = {
    isDeepEqual: function(t96, e60) {
        return B2(t96, e60, !1);
    },
    isDeepStrictEqual: function(t97, e61) {
        return B2(t97, e61, !0);
    }
}, Z1 = {
}, $$1 = !1;
function tt() {
    if ($$1) return Z1;
    $$1 = !0;
    var o5 = T;
    function c6(t98) {
        return (c6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t99) {
            return typeof t99;
        } : function(t100) {
            return t100 && "function" == typeof Symbol && t100.constructor === Symbol && t100 !== Symbol.prototype ? "symbol" : typeof t100;
        })(t98);
    }
    var a5, u4, l6 = i$5().codes, s22 = l6.ERR_AMBIGUOUS_ARGUMENT, p17 = l6.ERR_INVALID_ARG_TYPE, g7 = l6.ERR_INVALID_ARG_VALUE, h7 = l6.ERR_INVALID_RETURN_VALUE, y6 = l6.ERR_MISSING_ARGS, b7 = f$6(), v4 = X.inspect, d31 = X.types, m$11 = d31.isPromise, E21 = d31.isRegExp, w3 = Object.assign ? Object.assign : r4.assign, S21 = Object.is ? Object.is : m3;
    function j3() {
        a5 = X1.isDeepEqual, u4 = X1.isDeepStrictEqual;
    }
    var O3 = !1, x21 = Z1 = k21, q3 = {
    };
    function R4(t101) {
        if (t101.message instanceof Error) throw t101.message;
        throw new b7(t101);
    }
    function A21(t102, e62, n58, r37) {
        if (!n58) {
            var o40 = !1;
            if (0 === e62) o40 = !0, r37 = "No value argument passed to `assert.ok()`";
            else if (r37 instanceof Error) throw r37;
            var c32 = new b7({
                actual: n58,
                expected: !0,
                message: r37,
                operator: "==",
                stackStartFn: t102
            });
            throw c32.generatedMessage = o40, c32;
        }
    }
    function k21() {
        for(var t103 = arguments.length, e63 = new Array(t103), n59 = 0; n59 < t103; n59++)e63[n59] = arguments[n59];
        A21.apply(void 0, [
            k21,
            e63.length
        ].concat(e63));
    }
    x21.fail = function t104(e64, n60, r38, c33, a27) {
        var i69, u24 = arguments.length;
        if (0 === u24) i69 = "Failed";
        else if (1 === u24) r38 = e64, e64 = void 0;
        else {
            if (!1 === O3) {
                O3 = !0;
                var l19 = o5.emitWarning ? o5.emitWarning : console.warn.bind(console);
                l19("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
            }
            2 === u24 && (c33 = "!=");
        }
        if (r38 instanceof Error) throw r38;
        var f17 = {
            actual: e64,
            expected: n60,
            operator: void 0 === c33 ? "fail" : c33,
            stackStartFn: a27 || t104
        };
        void 0 !== r38 && (f17.message = r38);
        var s19 = new b7(f17);
        throw i69 && (s19.message = i69, s19.generatedMessage = !0), s19;
    }, x21.AssertionError = b7, x21.ok = k21, x21.equal = function t105(e65, n61, r39) {
        if (arguments.length < 2) throw new y6("actual", "expected");
        e65 != n61 && R4({
            actual: e65,
            expected: n61,
            message: r39,
            operator: "==",
            stackStartFn: t105
        });
    }, x21.notEqual = function t106(e66, n62, r40) {
        if (arguments.length < 2) throw new y6("actual", "expected");
        e66 == n62 && R4({
            actual: e66,
            expected: n62,
            message: r40,
            operator: "!=",
            stackStartFn: t106
        });
    }, x21.deepEqual = function t107(e67, n63, r41) {
        if (arguments.length < 2) throw new y6("actual", "expected");
        void 0 === a5 && j3(), a5(e67, n63) || R4({
            actual: e67,
            expected: n63,
            message: r41,
            operator: "deepEqual",
            stackStartFn: t107
        });
    }, x21.notDeepEqual = function t108(e68, n64, r42) {
        if (arguments.length < 2) throw new y6("actual", "expected");
        void 0 === a5 && j3(), a5(e68, n64) && R4({
            actual: e68,
            expected: n64,
            message: r42,
            operator: "notDeepEqual",
            stackStartFn: t108
        });
    }, x21.deepStrictEqual = function t109(e69, n65, r43) {
        if (arguments.length < 2) throw new y6("actual", "expected");
        void 0 === a5 && j3(), u4(e69, n65) || R4({
            actual: e69,
            expected: n65,
            message: r43,
            operator: "deepStrictEqual",
            stackStartFn: t109
        });
    }, x21.notDeepStrictEqual = function t110(e70, n66, r44) {
        if (arguments.length < 2) throw new y6("actual", "expected");
        void 0 === a5 && j3();
        u4(e70, n66) && R4({
            actual: e70,
            expected: n66,
            message: r44,
            operator: "notDeepStrictEqual",
            stackStartFn: t110
        });
    }, x21.strictEqual = function t111(e71, n67, r45) {
        if (arguments.length < 2) throw new y6("actual", "expected");
        S21(e71, n67) || R4({
            actual: e71,
            expected: n67,
            message: r45,
            operator: "strictEqual",
            stackStartFn: t111
        });
    }, x21.notStrictEqual = function t112(e72, n68, r46) {
        if (arguments.length < 2) throw new y6("actual", "expected");
        S21(e72, n68) && R4({
            actual: e72,
            expected: n68,
            message: r46,
            operator: "notStrictEqual",
            stackStartFn: t112
        });
    };
    var _21 = function t113(e73, n69, r47) {
        var o41 = this;
        !function(t114, e74) {
            if (!(t114 instanceof e74)) throw new TypeError("Cannot call a class as a function");
        }(this, t113), n69.forEach(function(t115) {
            t115 in e73 && (void 0 !== r47 && "string" == typeof r47[t115] && E21(e73[t115]) && e73[t115].test(r47[t115]) ? o41[t115] = r47[t115] : o41[t115] = e73[t115]);
        });
    };
    function T21(t116, e75, n70, r48, o42, c34) {
        if (!(n70 in t116) || !u4(t116[n70], e75[n70])) {
            if (!r48) {
                var a28 = new _21(t116, o42), i70 = new _21(e75, o42, t116), l20 = new b7({
                    actual: a28,
                    expected: i70,
                    operator: "deepStrictEqual",
                    stackStartFn: c34
                });
                throw l20.actual = t116, l20.expected = e75, l20.operator = c34.name, l20;
            }
            R4({
                actual: t116,
                expected: e75,
                message: r48,
                operator: c34.name,
                stackStartFn: c34
            });
        }
    }
    function P21(t117, e76, n71, r49) {
        if ("function" != typeof e76) {
            if (E21(e76)) return e76.test(t117);
            if (2 === arguments.length) throw new p17("expected", [
                "Function",
                "RegExp"
            ], e76);
            if ("object" !== c6(t117) || null === t117) {
                var o43 = new b7({
                    actual: t117,
                    expected: e76,
                    message: n71,
                    operator: "deepStrictEqual",
                    stackStartFn: r49
                });
                throw o43.operator = r49.name, o43;
            }
            var i71 = Object.keys(e76);
            if (e76 instanceof Error) i71.push("name", "message");
            else if (0 === i71.length) throw new g7("error", e76, "may not be an empty object");
            return void 0 === a5 && j3(), i71.forEach(function(o44) {
                "string" == typeof t117[o44] && E21(e76[o44]) && e76[o44].test(t117[o44]) || T21(t117, e76, o44, n71, i71, r49);
            }), !0;
        }
        return void 0 !== e76.prototype && t117 instanceof e76 || !Error.isPrototypeOf(e76) && !0 === e76.call({
        }, t117);
    }
    function I21(t118) {
        if ("function" != typeof t118) throw new p17("fn", "Function", t118);
        try {
            t118();
        } catch (t119) {
            return t119;
        }
        return q3;
    }
    function D11(t120) {
        return m$11(t120) || null !== t120 && "object" === c6(t120) && "function" == typeof t120.then && "function" == typeof t120.catch;
    }
    function F11(t121) {
        return Promise.resolve().then(function() {
            var e77;
            if ("function" == typeof t121) {
                if (!D11(e77 = t121())) throw new h7("instance of Promise", "promiseFn", e77);
            } else {
                if (!D11(t121)) throw new p17("promiseFn", [
                    "Function",
                    "Promise"
                ], t121);
                e77 = t121;
            }
            return Promise.resolve().then(function() {
                return e77;
            }).then(function() {
                return q3;
            }).catch(function(t122) {
                return t122;
            });
        });
    }
    function N11(t123, e78, n72, r50) {
        if ("string" == typeof n72) {
            if (4 === arguments.length) throw new p17("error", [
                "Object",
                "Error",
                "Function",
                "RegExp"
            ], n72);
            if ("object" === c6(e78) && null !== e78) {
                if (e78.message === n72) throw new s22("error/message", 'The error message "'.concat(e78.message, '" is identical to the message.'));
            } else if (e78 === n72) throw new s22("error/message", 'The error "'.concat(e78, '" is identical to the message.'));
            r50 = n72, n72 = void 0;
        } else if (null != n72 && "object" !== c6(n72) && "function" != typeof n72) throw new p17("error", [
            "Object",
            "Error",
            "Function",
            "RegExp"
        ], n72);
        if (e78 === q3) {
            var o45 = "";
            n72 && n72.name && (o45 += " (".concat(n72.name, ")")), o45 += r50 ? ": ".concat(r50) : ".";
            var a29 = "rejects" === t123.name ? "rejection" : "exception";
            R4({
                actual: void 0,
                expected: n72,
                operator: t123.name,
                message: "Missing expected ".concat(a29).concat(o45),
                stackStartFn: t123
            });
        }
        if (n72 && !P21(e78, n72, r50, t123)) throw e78;
    }
    function L11(t124, e79, n73, r51) {
        if (e79 !== q3) {
            if ("string" == typeof n73 && (r51 = n73, n73 = void 0), !n73 || P21(e79, n73)) {
                var o46 = r51 ? ": ".concat(r51) : ".", c35 = "doesNotReject" === t124.name ? "rejection" : "exception";
                R4({
                    actual: e79,
                    expected: n73,
                    operator: t124.name,
                    message: "Got unwanted ".concat(c35).concat(o46, "\n") + 'Actual message: "'.concat(e79 && e79.message, '"'),
                    stackStartFn: t124
                });
            }
            throw e79;
        }
    }
    function M11() {
        for(var t125 = arguments.length, e80 = new Array(t125), n74 = 0; n74 < t125; n74++)e80[n74] = arguments[n74];
        A21.apply(void 0, [
            M11,
            e80.length
        ].concat(e80));
    }
    return x21.throws = function t126(e81) {
        for(var n75 = arguments.length, r52 = new Array(n75 > 1 ? n75 - 1 : 0), o47 = 1; o47 < n75; o47++)r52[o47 - 1] = arguments[o47];
        N11.apply(void 0, [
            t126,
            I21(e81)
        ].concat(r52));
    }, x21.rejects = function t127(e82) {
        for(var n76 = arguments.length, r53 = new Array(n76 > 1 ? n76 - 1 : 0), o48 = 1; o48 < n76; o48++)r53[o48 - 1] = arguments[o48];
        return F11(e82).then(function(e83) {
            return N11.apply(void 0, [
                t127,
                e83
            ].concat(r53));
        });
    }, x21.doesNotThrow = function t128(e84) {
        for(var n77 = arguments.length, r54 = new Array(n77 > 1 ? n77 - 1 : 0), o49 = 1; o49 < n77; o49++)r54[o49 - 1] = arguments[o49];
        L11.apply(void 0, [
            t128,
            I21(e84)
        ].concat(r54));
    }, x21.doesNotReject = function t129(e85) {
        for(var n78 = arguments.length, r55 = new Array(n78 > 1 ? n78 - 1 : 0), o50 = 1; o50 < n78; o50++)r55[o50 - 1] = arguments[o50];
        return F11(e85).then(function(e86) {
            return L11.apply(void 0, [
                t129,
                e86
            ].concat(r55));
        });
    }, x21.ifError = function t130(e87) {
        if (null != e87) {
            var n79 = "ifError got unwanted exception: ";
            "object" === c6(e87) && "string" == typeof e87.message ? 0 === e87.message.length && e87.constructor ? n79 += e87.constructor.name : n79 += e87.message : n79 += v4(e87);
            var r56 = new b7({
                actual: e87,
                expected: null,
                operator: "ifError",
                message: n79,
                stackStartFn: t130
            }), o51 = e87.stack;
            if ("string" == typeof o51) {
                var a30 = o51.split("\n");
                a30.shift();
                for(var i72 = r56.stack.split("\n"), u25 = 0; u25 < a30.length; u25++){
                    var l23 = i72.indexOf(a30[u25]);
                    if (-1 !== l23) {
                        i72 = i72.slice(0, l23);
                        break;
                    }
                }
                r56.stack = "".concat(i72.join("\n"), "\n").concat(a30.join("\n"));
            }
            throw r56;
        }
    }, x21.strict = w3(M11, x21, {
        equal: x21.strictEqual,
        deepEqual: x21.deepStrictEqual,
        notEqual: x21.notStrictEqual,
        notDeepEqual: x21.notDeepStrictEqual
    }), x21.strict.strict = x21.strict, Z1;
}
var et = tt();
et.AssertionError;
et.deepEqual;
et.deepStrictEqual;
et.doesNotReject;
et.doesNotThrow;
et.equal;
et.fail;
et.ifError;
et.notDeepEqual;
et.notDeepStrictEqual;
et.notEqual;
et.notStrictEqual;
et.ok;
et.rejects;
et.strict;
et.strictEqual;
et.throws;
et.AssertionError;
et.deepEqual;
et.deepStrictEqual;
et.doesNotReject;
et.doesNotThrow;
et.equal;
et.fail;
et.ifError;
et.notDeepEqual;
et.notDeepStrictEqual;
et.notEqual;
et.notStrictEqual;
et.ok;
et.rejects;
et.strict;
et.strictEqual;
et.throws;
et.AssertionError;
et.deepEqual;
et.deepStrictEqual;
et.doesNotReject;
et.doesNotThrow;
et.equal;
et.fail;
et.ifError;
et.notDeepEqual;
et.notDeepStrictEqual;
et.notEqual;
et.notStrictEqual;
et.ok;
et.rejects;
et.strict;
et.strictEqual;
et.throws;
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
var promisify = X.promisify;
X.types;
X.TextEncoder = self.TextEncoder;
X.TextDecoder = self.TextDecoder;
var exports4 = {
}, _dewExec4 = false;
function dew4() {
    if (_dewExec4) return exports4;
    _dewExec4 = true;
    var process$1 = process1;
    function assertPath(path1) {
        if (typeof path1 !== "string") {
            throw new TypeError("Path must be a string. Received " + JSON.stringify(path1));
        }
    }
    function normalizeStringPosix(path2, allowAboveRoot) {
        var res = "";
        var lastSegmentLength = 0;
        var lastSlash = -1;
        var dots = 0;
        var code;
        for(var i73 = 0; i73 <= path2.length; ++i73){
            if (i73 < path2.length) code = path2.charCodeAt(i73);
            else if (code === 47) break;
            else code = 47;
            if (code === 47) {
                if (lastSlash === i73 - 1 || dots === 1) ;
                else if (lastSlash !== i73 - 1 && dots === 2) {
                    if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                        if (res.length > 2) {
                            var lastSlashIndex = res.lastIndexOf("/");
                            if (lastSlashIndex !== res.length - 1) {
                                if (lastSlashIndex === -1) {
                                    res = "";
                                    lastSegmentLength = 0;
                                } else {
                                    res = res.slice(0, lastSlashIndex);
                                    lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                                }
                                lastSlash = i73;
                                dots = 0;
                                continue;
                            }
                        } else if (res.length === 2 || res.length === 1) {
                            res = "";
                            lastSegmentLength = 0;
                            lastSlash = i73;
                            dots = 0;
                            continue;
                        }
                    }
                    if (allowAboveRoot) {
                        if (res.length > 0) res += "/..";
                        else res = "..";
                        lastSegmentLength = 2;
                    }
                } else {
                    if (res.length > 0) res += "/" + path2.slice(lastSlash + 1, i73);
                    else res = path2.slice(lastSlash + 1, i73);
                    lastSegmentLength = i73 - lastSlash - 1;
                }
                lastSlash = i73;
                dots = 0;
            } else if (code === 46 && dots !== -1) {
                ++dots;
            } else {
                dots = -1;
            }
        }
        return res;
    }
    function _format(sep1, pathObject) {
        var dir = pathObject.dir || pathObject.root;
        var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
        if (!dir) {
            return base;
        }
        if (dir === pathObject.root) {
            return dir + base;
        }
        return dir + sep1 + base;
    }
    var posix1 = {
        resolve: function resolve() {
            var resolvedPath = "";
            var resolvedAbsolute = false;
            var cwd1;
            for(var i74 = arguments.length - 1; i74 >= -1 && !resolvedAbsolute; i74--){
                var path3;
                if (i74 >= 0) path3 = arguments[i74];
                else {
                    if (cwd1 === undefined) cwd1 = process$1.cwd();
                    path3 = cwd1;
                }
                assertPath(path3);
                if (path3.length === 0) {
                    continue;
                }
                resolvedPath = path3 + "/" + resolvedPath;
                resolvedAbsolute = path3.charCodeAt(0) === 47;
            }
            resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
            if (resolvedAbsolute) {
                if (resolvedPath.length > 0) return "/" + resolvedPath;
                else return "/";
            } else if (resolvedPath.length > 0) {
                return resolvedPath;
            } else {
                return ".";
            }
        },
        normalize: function normalize(path4) {
            assertPath(path4);
            if (path4.length === 0) return ".";
            var isAbsolute1 = path4.charCodeAt(0) === 47;
            var trailingSeparator = path4.charCodeAt(path4.length - 1) === 47;
            path4 = normalizeStringPosix(path4, !isAbsolute1);
            if (path4.length === 0 && !isAbsolute1) path4 = ".";
            if (path4.length > 0 && trailingSeparator) path4 += "/";
            if (isAbsolute1) return "/" + path4;
            return path4;
        },
        isAbsolute: function isAbsolute(path5) {
            assertPath(path5);
            return path5.length > 0 && path5.charCodeAt(0) === 47;
        },
        join: function join() {
            if (arguments.length === 0) return ".";
            var joined;
            for(var i75 = 0; i75 < arguments.length; ++i75){
                var arg = arguments[i75];
                assertPath(arg);
                if (arg.length > 0) {
                    if (joined === undefined) joined = arg;
                    else joined += "/" + arg;
                }
            }
            if (joined === undefined) return ".";
            return posix1.normalize(joined);
        },
        relative: function relative(from, to) {
            assertPath(from);
            assertPath(to);
            if (from === to) return "";
            from = posix1.resolve(from);
            to = posix1.resolve(to);
            if (from === to) return "";
            var fromStart = 1;
            for(; fromStart < from.length; ++fromStart){
                if (from.charCodeAt(fromStart) !== 47) break;
            }
            var fromEnd = from.length;
            var fromLen = fromEnd - fromStart;
            var toStart = 1;
            for(; toStart < to.length; ++toStart){
                if (to.charCodeAt(toStart) !== 47) break;
            }
            var toEnd = to.length;
            var toLen = toEnd - toStart;
            var length = fromLen < toLen ? fromLen : toLen;
            var lastCommonSep = -1;
            var i76 = 0;
            for(; i76 <= length; ++i76){
                if (i76 === length) {
                    if (toLen > length) {
                        if (to.charCodeAt(toStart + i76) === 47) {
                            return to.slice(toStart + i76 + 1);
                        } else if (i76 === 0) {
                            return to.slice(toStart + i76);
                        }
                    } else if (fromLen > length) {
                        if (from.charCodeAt(fromStart + i76) === 47) {
                            lastCommonSep = i76;
                        } else if (i76 === 0) {
                            lastCommonSep = 0;
                        }
                    }
                    break;
                }
                var fromCode = from.charCodeAt(fromStart + i76);
                var toCode = to.charCodeAt(toStart + i76);
                if (fromCode !== toCode) break;
                else if (fromCode === 47) lastCommonSep = i76;
            }
            var out = "";
            for(i76 = fromStart + lastCommonSep + 1; i76 <= fromEnd; ++i76){
                if (i76 === fromEnd || from.charCodeAt(i76) === 47) {
                    if (out.length === 0) out += "..";
                    else out += "/..";
                }
            }
            if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
            else {
                toStart += lastCommonSep;
                if (to.charCodeAt(toStart) === 47) ++toStart;
                return to.slice(toStart);
            }
        },
        _makeLong: function _makeLong(path6) {
            return path6;
        },
        dirname: function dirname(path7) {
            assertPath(path7);
            if (path7.length === 0) return ".";
            var code = path7.charCodeAt(0);
            var hasRoot = code === 47;
            var end = -1;
            var matchedSlash = true;
            for(var i77 = path7.length - 1; i77 >= 1; --i77){
                code = path7.charCodeAt(i77);
                if (code === 47) {
                    if (!matchedSlash) {
                        end = i77;
                        break;
                    }
                } else {
                    matchedSlash = false;
                }
            }
            if (end === -1) return hasRoot ? "/" : ".";
            if (hasRoot && end === 1) return "//";
            return path7.slice(0, end);
        },
        basename: function basename(path8, ext) {
            if (ext !== undefined && typeof ext !== "string") throw new TypeError("\"ext\" argument must be a string");
            assertPath(path8);
            var start = 0;
            var end = -1;
            var matchedSlash = true;
            var i78;
            if (ext !== undefined && ext.length > 0 && ext.length <= path8.length) {
                if (ext.length === path8.length && ext === path8) return "";
                var extIdx = ext.length - 1;
                var firstNonSlashEnd = -1;
                for(i78 = path8.length - 1; i78 >= 0; --i78){
                    var code = path8.charCodeAt(i78);
                    if (code === 47) {
                        if (!matchedSlash) {
                            start = i78 + 1;
                            break;
                        }
                    } else {
                        if (firstNonSlashEnd === -1) {
                            matchedSlash = false;
                            firstNonSlashEnd = i78 + 1;
                        }
                        if (extIdx >= 0) {
                            if (code === ext.charCodeAt(extIdx)) {
                                if (--extIdx === -1) {
                                    end = i78;
                                }
                            } else {
                                extIdx = -1;
                                end = firstNonSlashEnd;
                            }
                        }
                    }
                }
                if (start === end) end = firstNonSlashEnd;
                else if (end === -1) end = path8.length;
                return path8.slice(start, end);
            } else {
                for(i78 = path8.length - 1; i78 >= 0; --i78){
                    if (path8.charCodeAt(i78) === 47) {
                        if (!matchedSlash) {
                            start = i78 + 1;
                            break;
                        }
                    } else if (end === -1) {
                        matchedSlash = false;
                        end = i78 + 1;
                    }
                }
                if (end === -1) return "";
                return path8.slice(start, end);
            }
        },
        extname: function extname(path9) {
            assertPath(path9);
            var startDot = -1;
            var startPart = 0;
            var end = -1;
            var matchedSlash = true;
            var preDotState = 0;
            for(var i79 = path9.length - 1; i79 >= 0; --i79){
                var code = path9.charCodeAt(i79);
                if (code === 47) {
                    if (!matchedSlash) {
                        startPart = i79 + 1;
                        break;
                    }
                    continue;
                }
                if (end === -1) {
                    matchedSlash = false;
                    end = i79 + 1;
                }
                if (code === 46) {
                    if (startDot === -1) startDot = i79;
                    else if (preDotState !== 1) preDotState = 1;
                } else if (startDot !== -1) {
                    preDotState = -1;
                }
            }
            if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                return "";
            }
            return path9.slice(startDot, end);
        },
        format: function format(pathObject) {
            if (pathObject === null || typeof pathObject !== "object") {
                throw new TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof pathObject);
            }
            return _format("/", pathObject);
        },
        parse: function parse(path10) {
            assertPath(path10);
            var ret = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (path10.length === 0) return ret;
            var code = path10.charCodeAt(0);
            var isAbsolute2 = code === 47;
            var start;
            if (isAbsolute2) {
                ret.root = "/";
                start = 1;
            } else {
                start = 0;
            }
            var startDot = -1;
            var startPart = 0;
            var end = -1;
            var matchedSlash = true;
            var i80 = path10.length - 1;
            var preDotState = 0;
            for(; i80 >= start; --i80){
                code = path10.charCodeAt(i80);
                if (code === 47) {
                    if (!matchedSlash) {
                        startPart = i80 + 1;
                        break;
                    }
                    continue;
                }
                if (end === -1) {
                    matchedSlash = false;
                    end = i80 + 1;
                }
                if (code === 46) {
                    if (startDot === -1) startDot = i80;
                    else if (preDotState !== 1) preDotState = 1;
                } else if (startDot !== -1) {
                    preDotState = -1;
                }
            }
            if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                if (end !== -1) {
                    if (startPart === 0 && isAbsolute2) ret.base = ret.name = path10.slice(1, end);
                    else ret.base = ret.name = path10.slice(startPart, end);
                }
            } else {
                if (startPart === 0 && isAbsolute2) {
                    ret.name = path10.slice(1, startDot);
                    ret.base = path10.slice(1, end);
                } else {
                    ret.name = path10.slice(startPart, startDot);
                    ret.base = path10.slice(startPart, end);
                }
                ret.ext = path10.slice(startDot, end);
            }
            if (startPart > 0) ret.dir = path10.slice(0, startPart - 1);
            else if (isAbsolute2) ret.dir = "/";
            return ret;
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
    posix1.posix = posix1;
    exports4 = posix1;
    return exports4;
}
var path = dew4();
var _makeLong = path._makeLong;
var basename = path.basename;
var delimiter = path.delimiter;
var dirname = path.dirname;
var extname = path.extname;
var format = path.format;
var isAbsolute = path.isAbsolute;
var join = path.join;
var normalize = path.normalize;
var parse = path.parse;
var posix = path.posix;
var relative = path.relative;
var resolve = path.resolve;
var sep = path.sep;
var win32 = path.win32;
y.once = function(emitter, event) {
    return new Promise((resolve7, reject)=>{
        function eventListener(...args) {
            if (errorListener !== undefined) {
                emitter.removeListener('error', errorListener);
            }
            resolve7(args);
        }
        let errorListener;
        if (event !== 'error') {
            errorListener = (err)=>{
                emitter.removeListener(name, eventListener);
                reject(err);
            };
            emitter.once('error', errorListener);
        }
        emitter.once(event, eventListener);
    });
};
y.on = function(emitter, event) {
    const unconsumedEventValues = [];
    const unconsumedPromises = [];
    let error = null;
    let finished = false;
    const iterator = {
        async next () {
            const value = unconsumedEventValues.shift();
            if (value) {
                return createIterResult(value, false);
            }
            if (error) {
                const p18 = Promise.reject(error);
                error = null;
                return p18;
            }
            if (finished) {
                return createIterResult(undefined, true);
            }
            return new Promise((resolve8, reject)=>unconsumedPromises.push({
                    resolve: resolve8,
                    reject
                })
            );
        },
        async return () {
            emitter.removeListener(event, eventHandler);
            emitter.removeListener('error', errorHandler);
            finished = true;
            for (const promise of unconsumedPromises){
                promise.resolve(createIterResult(undefined, true));
            }
            return createIterResult(undefined, true);
        },
        throw (err) {
            error = err;
            emitter.removeListener(event, eventHandler);
            emitter.removeListener('error', errorHandler);
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
    emitter.on(event, eventHandler);
    emitter.on('error', errorHandler);
    return iterator;
    function eventHandler(...args) {
        const promise = unconsumedPromises.shift();
        if (promise) {
            promise.resolve(createIterResult(args, false));
        } else {
            unconsumedEventValues.push(args);
        }
    }
    function errorHandler(err) {
        finished = true;
        const toError = unconsumedPromises.shift();
        if (toError) {
            toError.reject(err);
        } else {
            error = err;
        }
        iterator.return();
    }
};
const { EventEmitter , defaultMaxListeners , init , listenerCount , on: on1 , once: once1 ,  } = y;
var exports5 = {
}, _dewExec5 = false;
var _global2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew5() {
    if (_dewExec5) return exports5;
    _dewExec5 = true;
    exports5 = Stream;
    var EE = y.EventEmitter;
    var inherits = dew$f();
    inherits(Stream, EE);
    Stream.Readable = dew$3();
    Stream.Writable = dew$8();
    Stream.Duplex = dew$7();
    Stream.Transform = dew$2();
    Stream.PassThrough = dew$11();
    Stream.finished = dew$6();
    Stream.pipeline = dew3();
    Stream.Stream = Stream;
    function Stream() {
        EE.call(this || _global2);
    }
    Stream.prototype.pipe = function(dest, options) {
        var source = this || _global2;
        function ondata(chunk) {
            if (dest.writable) {
                if (false === dest.write(chunk) && source.pause) {
                    source.pause();
                }
            }
        }
        source.on("data", ondata);
        function ondrain() {
            if (source.readable && source.resume) {
                source.resume();
            }
        }
        dest.on("drain", ondrain);
        if (!dest._isStdio && (!options || options.end !== false)) {
            source.on("end", onend);
            source.on("close", onclose);
        }
        var didOnEnd = false;
        function onend() {
            if (didOnEnd) return;
            didOnEnd = true;
            dest.end();
        }
        function onclose() {
            if (didOnEnd) return;
            didOnEnd = true;
            if (typeof dest.destroy === "function") dest.destroy();
        }
        function onerror(er) {
            cleanup();
            if (EE.listenerCount(this || _global2, "error") === 0) {
                throw er;
            }
        }
        source.on("error", onerror);
        dest.on("error", onerror);
        function cleanup() {
            source.removeListener("data", ondata);
            dest.removeListener("drain", ondrain);
            source.removeListener("end", onend);
            source.removeListener("close", onclose);
            source.removeListener("error", onerror);
            dest.removeListener("error", onerror);
            source.removeListener("end", cleanup);
            source.removeListener("close", cleanup);
            dest.removeListener("close", cleanup);
        }
        source.on("end", cleanup);
        source.on("close", cleanup);
        dest.on("close", cleanup);
        dest.emit("pipe", source);
        return dest;
    };
    return exports5;
}
var stream = dew5();
var Readable = stream.Readable;
Readable.wrap = function(src, options) {
    options = Object.assign({
        objectMode: src.readableObjectMode != null || src.objectMode != null || true
    }, options);
    options.destroy = function(err, callback) {
        src.destroy(err);
        callback(err);
    };
    return new Readable(options).wrap(src);
};
stream.Writable;
stream.Duplex;
stream.Transform;
stream.PassThrough;
stream.finished;
stream.pipeline;
stream.Stream;
({
    finished: promisify(stream.finished),
    pipeline: promisify(stream.pipeline)
});
const o5 = /^xn--/, n5 = /[^\0-\x7E]/, e5 = /[\x2E\u3002\uFF0E\uFF61]/g, r5 = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
}, c5 = Math.floor, s5 = String.fromCharCode;
function i5(t) {
    throw new RangeError(r5[t]);
}
function f5(t15, o110) {
    const n111 = t15.split("@");
    let r14 = "";
    n111.length > 1 && (r14 = n111[0] + "@", t15 = n111[1]);
    const c110 = (function(t24, o210) {
        const n210 = [];
        let e15 = t24.length;
        for(; e15--;)n210[e15] = o210(t24[e15]);
        return n210;
    })((t15 = t15.replace(e5, ".")).split("."), o110).join(".");
    return r14 + c110;
}
function l4(t32) {
    const o310 = [];
    let n310 = 0;
    const e24 = t32.length;
    for(; n310 < e24;){
        const r24 = t32.charCodeAt(n310++);
        if (r24 >= 55296 && r24 <= 56319 && n310 < e24) {
            const e32 = t32.charCodeAt(n310++);
            56320 == (64512 & e32) ? o310.push(((1023 & r24) << 10) + (1023 & e32) + 65536) : (o310.push(r24), n310--);
        } else o310.push(r24);
    }
    return o310;
}
const u5 = function(t42, o4) {
    return t42 + 22 + 75 * (t42 < 26) - ((0 != o4) << 5);
}, a5 = function(t5, o52, n4) {
    let e42 = 0;
    for(t5 = n4 ? c5(t5 / 700) : t5 >> 1, t5 += c5(t5 / o52); t5 > 455; e42 += 36)t5 = c5(t5 / 35);
    return c5(e42 + 36 * t5 / (t5 + 38));
}, d4 = function(o6) {
    const n510 = [], e51 = o6.length;
    let r32 = 0, s23 = 128, f18 = 72, l110 = o6.lastIndexOf("-");
    l110 < 0 && (l110 = 0);
    for(let t6 = 0; t6 < l110; ++t6)o6.charCodeAt(t6) >= 128 && i5("not-basic"), n510.push(o6.charCodeAt(t6));
    for(let d13 = l110 > 0 ? l110 + 1 : 0; d13 < e51;){
        let l32 = r32;
        for(let n6 = 1, s110 = 36;; s110 += 36){
            d13 >= e51 && i5("invalid-input");
            const l2 = (u110 = o6.charCodeAt(d13++)) - 48 < 10 ? u110 - 22 : u110 - 65 < 26 ? u110 - 65 : u110 - 97 < 26 ? u110 - 97 : 36;
            (l2 >= 36 || l2 > c5((2147483647 - r32) / n6)) && i5("overflow"), r32 += l2 * n6;
            const a110 = s110 <= f18 ? 1 : s110 >= f18 + 26 ? 26 : s110 - f18;
            if (l2 < a110) break;
            const h13 = 36 - a110;
            n6 > c5(2147483647 / h13) && i5("overflow"), n6 *= h13;
        }
        const h23 = n510.length + 1;
        f18 = a5(r32 - l32, h23, 0 == l32), c5(r32 / h23) > 2147483647 - s23 && i5("overflow"), s23 += c5(r32 / h23), r32 %= h23, n510.splice(r32++, 0, s23);
    }
    var u110;
    return String.fromCodePoint(...n510);
}, h5 = function(o7) {
    const n7 = [];
    let e6 = (o7 = l4(o7)).length, r42 = 128, f23 = 0, d22 = 72;
    for (const t7 of o7)t7 < 128 && n7.push(s5(t7));
    let h32 = n7.length, p1 = h32;
    for(h32 && n7.push("-"); p1 < e6;){
        let e8 = 2147483647;
        for (const t8 of o7)t8 >= r42 && t8 < e8 && (e8 = t8);
        const l41 = p1 + 1;
        e8 - r42 > c5((2147483647 - f23) / l41) && i5("overflow"), f23 += (e8 - r42) * l41, r42 = e8;
        for (const e7 of o7)if (e7 < r42 && ++f23 > 2147483647 && i5("overflow"), e7 == r42) {
            let t9 = f23;
            for(let o8 = 36;; o8 += 36){
                const e9 = o8 <= d22 ? 1 : o8 >= d22 + 26 ? 26 : o8 - d22;
                if (t9 < e9) break;
                const r51 = t9 - e9, i111 = 36 - e9;
                n7.push(s5(u5(e9 + r51 % i111, 0))), t9 = c5(r51 / i111);
            }
            n7.push(s5(u5(t9, 0))), d22 = a5(f23, l41, p1 == h32), f23 = 0, ++p1;
        }
        ++f23, ++r42;
    }
    return n7.join("");
};
var p4 = {
    version: "2.1.0",
    ucs2: {
        decode: l4,
        encode: (t10)=>String.fromCodePoint(...t10)
    },
    decode: d4,
    encode: h5,
    toASCII: function(t11) {
        return f5(t11, function(t12) {
            return n5.test(t12) ? "xn--" + h5(t12) : t12;
        });
    },
    toUnicode: function(t13) {
        return f5(t13, function(t14) {
            return o5.test(t14) ? d4(t14.slice(4).toLowerCase()) : t14;
        });
    }
};
p4.decode;
p4.encode;
p4.toASCII;
p4.toUnicode;
p4.ucs2;
p4.version;
function e6(e16, n112) {
    return Object.prototype.hasOwnProperty.call(e16, n112);
}
var n6 = function(n211, r15, t16, o111) {
    r15 = r15 || "&", t16 = t16 || "=";
    var a32 = {
    };
    if ("string" != typeof n211 || 0 === n211.length) return a32;
    var u26 = /\+/g;
    n211 = n211.split(r15);
    var c36 = 1000;
    o111 && "number" == typeof o111.maxKeys && (c36 = o111.maxKeys);
    var i81 = n211.length;
    c36 > 0 && i81 > c36 && (i81 = c36);
    for(var s20 = 0; s20 < i81; ++s20){
        var p19, f19, d7, y5, m9 = n211[s20].replace(u26, "%20"), l24 = m9.indexOf(t16);
        l24 >= 0 ? (p19 = m9.substr(0, l24), f19 = m9.substr(l24 + 1)) : (p19 = m9, f19 = ""), d7 = decodeURIComponent(p19), y5 = decodeURIComponent(f19), e6(a32, d7) ? Array.isArray(a32[d7]) ? a32[d7].push(y5) : a32[d7] = [
            a32[d7],
            y5
        ] : a32[d7] = y5;
    }
    return a32;
}, r6 = function(e25) {
    switch(typeof e25){
        case "string":
            return e25;
        case "boolean":
            return e25 ? "true" : "false";
        case "number":
            return isFinite(e25) ? e25 : "";
        default:
            return "";
    }
}, t5 = function(e33, n311, t25, o211) {
    return n311 = n311 || "&", t25 = t25 || "=", null === e33 && (e33 = void 0), "object" == typeof e33 ? Object.keys(e33).map(function(o311) {
        var a33 = encodeURIComponent(r6(o311)) + t25;
        return Array.isArray(e33[o311]) ? e33[o311].map(function(e43) {
            return a33 + encodeURIComponent(r6(e43));
        }).join(n311) : a33 + encodeURIComponent(r6(e33[o311]));
    }).join(n311) : o211 ? encodeURIComponent(r6(o211)) + t25 + encodeURIComponent(r6(e33)) : "";
}, o6 = {
};
o6.decode = o6.parse = n6, o6.encode = o6.stringify = t5;
o6.decode;
o6.encode;
o6.parse;
o6.stringify;
var h6 = {
}, e7 = p4, a6 = {
    isString: function(t6) {
        return "string" == typeof t6;
    },
    isObject: function(t7) {
        return "object" == typeof t7 && null !== t7;
    },
    isNull: function(t8) {
        return null === t8;
    },
    isNullOrUndefined: function(t9) {
        return null == t9;
    }
};
function r7() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
h6.parse = O3, h6.resolve = function(t10, s24) {
    return O3(t10, !1, !0).resolve(s24);
}, h6.resolveObject = function(t17, s25) {
    return t17 ? O3(t17, !1, !0).resolveObject(s25) : s25;
}, h6.format = function(t18) {
    a6.isString(t18) && (t18 = O3(t18));
    return t18 instanceof r7 ? t18.format() : r7.prototype.format.call(t18);
}, h6.Url = r7;
var o7 = /^([a-z0-9.+-]+:)/i, n7 = /:[0-9]*$/, i6 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, l5 = [
    "{",
    "}",
    "|",
    "\\",
    "^",
    "`"
].concat([
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    "\n",
    "\t"
]), p5 = [
    "'"
].concat(l5), c6 = [
    "%",
    "/",
    "?",
    ";",
    "#"
].concat(p5), u6 = [
    "/",
    "?",
    "#"
], f6 = /^[+a-z0-9A-Z_-]{0,63}$/, m4 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, v4 = {
    javascript: !0,
    "javascript:": !0
}, g3 = {
    javascript: !0,
    "javascript:": !0
}, y4 = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
}, b3 = o6;
function O3(t19, s26, h14) {
    if (t19 && a6.isObject(t19) && t19 instanceof r7) return t19;
    var e17 = new r7;
    return e17.parse(t19, s26, h14), e17;
}
r7.prototype.parse = function(t20, s27, h24) {
    if (!a6.isString(t20)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t20);
    var r16 = t20.indexOf("?"), n113 = -1 !== r16 && r16 < t20.indexOf("#") ? "?" : "#", l111 = t20.split(n113);
    l111[0] = l111[0].replace(/\\/g, "/");
    var O12 = t20 = l111.join(n113);
    if (O12 = O12.trim(), !h24 && 1 === t20.split("#").length) {
        var d8 = i6.exec(O12);
        if (d8) return this.path = O12, this.href = O12, this.pathname = d8[1], d8[2] ? (this.search = d8[2], this.query = s27 ? b3.parse(this.search.substr(1)) : this.search.substr(1)) : s27 && (this.search = "", this.query = {
        }), this;
    }
    var j5 = o7.exec(O12);
    if (j5) {
        var q2 = (j5 = j5[0]).toLowerCase();
        this.protocol = q2, O12 = O12.substr(j5.length);
    }
    if (h24 || j5 || O12.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var x6 = "//" === O12.substr(0, 2);
        !x6 || j5 && g3[j5] || (O12 = O12.substr(2), this.slashes = !0);
    }
    if (!g3[j5] && (x6 || j5 && !y4[j5])) {
        for(var A3, C3, I3 = -1, w3 = 0; w3 < u6.length; w3++){
            -1 !== (N3 = O12.indexOf(u6[w3])) && (-1 === I3 || N3 < I3) && (I3 = N3);
        }
        -1 !== (C3 = -1 === I3 ? O12.lastIndexOf("@") : O12.lastIndexOf("@", I3)) && (A3 = O12.slice(0, C3), O12 = O12.slice(C3 + 1), this.auth = decodeURIComponent(A3)), I3 = -1;
        for(w3 = 0; w3 < c6.length; w3++){
            var N3;
            -1 !== (N3 = O12.indexOf(c6[w3])) && (-1 === I3 || N3 < I3) && (I3 = N3);
        }
        -1 === I3 && (I3 = O12.length), this.host = O12.slice(0, I3), O12 = O12.slice(I3), this.parseHost(), this.hostname = this.hostname || "";
        var U3 = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!U3) for(var k6 = this.hostname.split(/\./), S3 = (w3 = 0, k6.length); w3 < S3; w3++){
            var R3 = k6[w3];
            if (R3 && !R3.match(f6)) {
                for(var $2 = "", z3 = 0, H2 = R3.length; z3 < H2; z3++)R3.charCodeAt(z3) > 127 ? $2 += "x" : $2 += R3[z3];
                if (!$2.match(f6)) {
                    var L3 = k6.slice(0, w3), Z2 = k6.slice(w3 + 1), _3 = R3.match(m4);
                    _3 && (L3.push(_3[1]), Z2.unshift(_3[2])), Z2.length && (O12 = "/" + Z2.join(".") + O12), this.hostname = L3.join(".");
                    break;
                }
            }
        }
        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), U3 || (this.hostname = e7.toASCII(this.hostname));
        var E4 = this.port ? ":" + this.port : "", P3 = this.hostname || "";
        this.host = P3 + E4, this.href += this.host, U3 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== O12[0] && (O12 = "/" + O12));
    }
    if (!v4[q2]) for(w3 = 0, S3 = p5.length; w3 < S3; w3++){
        var T12 = p5[w3];
        if (-1 !== O12.indexOf(T12)) {
            var B3 = encodeURIComponent(T12);
            B3 === T12 && (B3 = escape(T12)), O12 = O12.split(T12).join(B3);
        }
    }
    var D3 = O12.indexOf("#");
    -1 !== D3 && (this.hash = O12.substr(D3), O12 = O12.slice(0, D3));
    var F3 = O12.indexOf("?");
    if (-1 !== F3 ? (this.search = O12.substr(F3), this.query = O12.substr(F3 + 1), s27 && (this.query = b3.parse(this.query)), O12 = O12.slice(0, F3)) : s27 && (this.search = "", this.query = {
    }), O12 && (this.pathname = O12), y4[q2] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        E4 = this.pathname || "";
        var G2 = this.search || "";
        this.path = E4 + G2;
    }
    return this.href = this.format(), this;
}, r7.prototype.format = function() {
    var t110 = this.auth || "";
    t110 && (t110 = (t110 = encodeURIComponent(t110)).replace(/%3A/i, ":"), t110 += "@");
    var s28 = this.protocol || "", h33 = this.pathname || "", e26 = this.hash || "", r25 = !1, o112 = "";
    this.host ? r25 = t110 + this.host : this.hostname && (r25 = t110 + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (r25 += ":" + this.port)), this.query && a6.isObject(this.query) && Object.keys(this.query).length && (o112 = b3.stringify(this.query));
    var n212 = this.search || o112 && "?" + o112 || "";
    return s28 && ":" !== s28.substr(-1) && (s28 += ":"), this.slashes || (!s28 || y4[s28]) && !1 !== r25 ? (r25 = "//" + (r25 || ""), h33 && "/" !== h33.charAt(0) && (h33 = "/" + h33)) : r25 || (r25 = ""), e26 && "#" !== e26.charAt(0) && (e26 = "#" + e26), n212 && "?" !== n212.charAt(0) && (n212 = "?" + n212), s28 + r25 + (h33 = h33.replace(/[?#]/g, function(t26) {
        return encodeURIComponent(t26);
    })) + (n212 = n212.replace("#", "%23")) + e26;
}, r7.prototype.resolve = function(t27) {
    return this.resolveObject(O3(t27, !1, !0)).format();
}, r7.prototype.resolveObject = function(t28) {
    if (a6.isString(t28)) {
        var s29 = new r7;
        s29.parse(t28, !1, !0), t28 = s29;
    }
    for(var h42 = new r7, e34 = Object.keys(this), o212 = 0; o212 < e34.length; o212++){
        var n = e34[o212];
        h42[n] = this[n];
    }
    if (h42.hash = t28.hash, "" === t28.href) return h42.href = h42.format(), h42;
    if (t28.slashes && !t28.protocol) {
        for(var i112 = Object.keys(t28), l2 = 0; l2 < i112.length; l2++){
            var p1 = i112[l2];
            "protocol" !== p1 && (h42[p1] = t28[p1]);
        }
        return y4[h42.protocol] && h42.hostname && !h42.pathname && (h42.path = h42.pathname = "/"), h42.href = h42.format(), h42;
    }
    if (t28.protocol && t28.protocol !== h42.protocol) {
        if (!y4[t28.protocol]) {
            for(var c111 = Object.keys(t28), u111 = 0; u111 < c111.length; u111++){
                var f = c111[u111];
                h42[f] = t28[f];
            }
            return h42.href = h42.format(), h42;
        }
        if (h42.protocol = t28.protocol, t28.host || g3[t28.protocol]) h42.pathname = t28.pathname;
        else {
            for(var m12 = (t28.pathname || "").split("/"); m12.length && !(t28.host = m12.shift()););
            t28.host || (t28.host = ""), t28.hostname || (t28.hostname = ""), "" !== m12[0] && m12.unshift(""), m12.length < 2 && m12.unshift(""), h42.pathname = m12.join("/");
        }
        if (h42.search = t28.search, h42.query = t28.query, h42.host = t28.host || "", h42.auth = t28.auth, h42.hostname = t28.hostname || t28.host, h42.port = t28.port, h42.pathname || h42.search) {
            var v12 = h42.pathname || "", b12 = h42.search || "";
            h42.path = v12 + b12;
        }
        return h42.slashes = h42.slashes || t28.slashes, h42.href = h42.format(), h42;
    }
    var O21 = h42.pathname && "/" === h42.pathname.charAt(0), d9 = t28.host || t28.pathname && "/" === t28.pathname.charAt(0), j6 = d9 || O21 || h42.host && t28.pathname, q3 = j6, x7 = h42.pathname && h42.pathname.split("/") || [], A4 = (m12 = t28.pathname && t28.pathname.split("/") || [], h42.protocol && !y4[h42.protocol]);
    if (A4 && (h42.hostname = "", h42.port = null, h42.host && ("" === x7[0] ? x7[0] = h42.host : x7.unshift(h42.host)), h42.host = "", t28.protocol && (t28.hostname = null, t28.port = null, t28.host && ("" === m12[0] ? m12[0] = t28.host : m12.unshift(t28.host)), t28.host = null), j6 = j6 && ("" === m12[0] || "" === x7[0])), d9) h42.host = t28.host || "" === t28.host ? t28.host : h42.host, h42.hostname = t28.hostname || "" === t28.hostname ? t28.hostname : h42.hostname, h42.search = t28.search, h42.query = t28.query, x7 = m12;
    else if (m12.length) x7 || (x7 = []), x7.pop(), x7 = x7.concat(m12), h42.search = t28.search, h42.query = t28.query;
    else if (!a6.isNullOrUndefined(t28.search)) {
        if (A4) h42.hostname = h42.host = x7.shift(), (U4 = !!(h42.host && h42.host.indexOf("@") > 0) && h42.host.split("@")) && (h42.auth = U4.shift(), h42.host = h42.hostname = U4.shift());
        return h42.search = t28.search, h42.query = t28.query, a6.isNull(h42.pathname) && a6.isNull(h42.search) || (h42.path = (h42.pathname ? h42.pathname : "") + (h42.search ? h42.search : "")), h42.href = h42.format(), h42;
    }
    if (!x7.length) return h42.pathname = null, h42.search ? h42.path = "/" + h42.search : h42.path = null, h42.href = h42.format(), h42;
    for(var C4 = x7.slice(-1)[0], I4 = (h42.host || t28.host || x7.length > 1) && ("." === C4 || ".." === C4) || "" === C4, w4 = 0, N4 = x7.length; N4 >= 0; N4--)"." === (C4 = x7[N4]) ? x7.splice(N4, 1) : ".." === C4 ? (x7.splice(N4, 1), w4++) : w4 && (x7.splice(N4, 1), w4--);
    if (!j6 && !q3) for(; w4--; w4)x7.unshift("..");
    !j6 || "" === x7[0] || x7[0] && "/" === x7[0].charAt(0) || x7.unshift(""), I4 && "/" !== x7.join("/").substr(-1) && x7.push("");
    var U4, k7 = "" === x7[0] || x7[0] && "/" === x7[0].charAt(0);
    A4 && (h42.hostname = h42.host = k7 ? "" : x7.length ? x7.shift() : "", (U4 = !!(h42.host && h42.host.indexOf("@") > 0) && h42.host.split("@")) && (h42.auth = U4.shift(), h42.host = h42.hostname = U4.shift()));
    return (j6 = j6 || h42.host && x7.length) && !k7 && x7.unshift(""), x7.length ? h42.pathname = x7.join("/") : (h42.pathname = null, h42.path = null), a6.isNull(h42.pathname) && a6.isNull(h42.search) || (h42.path = (h42.pathname ? h42.pathname : "") + (h42.search ? h42.search : "")), h42.auth = t28.auth || h42.auth, h42.slashes = h42.slashes || t28.slashes, h42.href = h42.format(), h42;
}, r7.prototype.parseHost = function() {
    var t29 = this.host, s30 = n7.exec(t29);
    s30 && (":" !== (s30 = s30[0]) && (this.port = s30.substr(1)), t29 = t29.substr(0, t29.length - s30.length)), t29 && (this.hostname = t29);
};
h6.Url;
h6.format;
h6.resolve;
h6.resolveObject;
var exports6 = {
}, _dewExec6 = false;
function dew6() {
    if (_dewExec6) return exports6;
    _dewExec6 = true;
    var process5 = T;
    function assertPath(path1) {
        if (typeof path1 !== "string") {
            throw new TypeError("Path must be a string. Received " + JSON.stringify(path1));
        }
    }
    function normalizeStringPosix(path2, allowAboveRoot) {
        var res = "";
        var lastSegmentLength = 0;
        var lastSlash = -1;
        var dots = 0;
        var code;
        for(var i211 = 0; i211 <= path2.length; ++i211){
            if (i211 < path2.length) code = path2.charCodeAt(i211);
            else if (code === 47) break;
            else code = 47;
            if (code === 47) {
                if (lastSlash === i211 - 1 || dots === 1) ;
                else if (lastSlash !== i211 - 1 && dots === 2) {
                    if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                        if (res.length > 2) {
                            var lastSlashIndex = res.lastIndexOf("/");
                            if (lastSlashIndex !== res.length - 1) {
                                if (lastSlashIndex === -1) {
                                    res = "";
                                    lastSegmentLength = 0;
                                } else {
                                    res = res.slice(0, lastSlashIndex);
                                    lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                                }
                                lastSlash = i211;
                                dots = 0;
                                continue;
                            }
                        } else if (res.length === 2 || res.length === 1) {
                            res = "";
                            lastSegmentLength = 0;
                            lastSlash = i211;
                            dots = 0;
                            continue;
                        }
                    }
                    if (allowAboveRoot) {
                        if (res.length > 0) res += "/..";
                        else res = "..";
                        lastSegmentLength = 2;
                    }
                } else {
                    if (res.length > 0) res += "/" + path2.slice(lastSlash + 1, i211);
                    else res = path2.slice(lastSlash + 1, i211);
                    lastSegmentLength = i211 - lastSlash - 1;
                }
                lastSlash = i211;
                dots = 0;
            } else if (code === 46 && dots !== -1) {
                ++dots;
            } else {
                dots = -1;
            }
        }
        return res;
    }
    function _format(sep2, pathObject) {
        var dir = pathObject.dir || pathObject.root;
        var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
        if (!dir) {
            return base;
        }
        if (dir === pathObject.root) {
            return dir + base;
        }
        return dir + sep2 + base;
    }
    var posix2 = {
        resolve: function resolve() {
            var resolvedPath = "";
            var resolvedAbsolute = false;
            var cwd2;
            for(var i311 = arguments.length - 1; i311 >= -1 && !resolvedAbsolute; i311--){
                var path3;
                if (i311 >= 0) path3 = arguments[i311];
                else {
                    if (cwd2 === undefined) cwd2 = process5.cwd();
                    path3 = cwd2;
                }
                assertPath(path3);
                if (path3.length === 0) {
                    continue;
                }
                resolvedPath = path3 + "/" + resolvedPath;
                resolvedAbsolute = path3.charCodeAt(0) === 47;
            }
            resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
            if (resolvedAbsolute) {
                if (resolvedPath.length > 0) return "/" + resolvedPath;
                else return "/";
            } else if (resolvedPath.length > 0) {
                return resolvedPath;
            } else {
                return ".";
            }
        },
        normalize: function normalize(path4) {
            assertPath(path4);
            if (path4.length === 0) return ".";
            var isAbsolute3 = path4.charCodeAt(0) === 47;
            var trailingSeparator = path4.charCodeAt(path4.length - 1) === 47;
            path4 = normalizeStringPosix(path4, !isAbsolute3);
            if (path4.length === 0 && !isAbsolute3) path4 = ".";
            if (path4.length > 0 && trailingSeparator) path4 += "/";
            if (isAbsolute3) return "/" + path4;
            return path4;
        },
        isAbsolute: function isAbsolute(path5) {
            assertPath(path5);
            return path5.length > 0 && path5.charCodeAt(0) === 47;
        },
        join: function join() {
            if (arguments.length === 0) return ".";
            var joined;
            for(var i4 = 0; i4 < arguments.length; ++i4){
                var arg = arguments[i4];
                assertPath(arg);
                if (arg.length > 0) {
                    if (joined === undefined) joined = arg;
                    else joined += "/" + arg;
                }
            }
            if (joined === undefined) return ".";
            return posix2.normalize(joined);
        },
        relative: function relative(from, to) {
            assertPath(from);
            assertPath(to);
            if (from === to) return "";
            from = posix2.resolve(from);
            to = posix2.resolve(to);
            if (from === to) return "";
            var fromStart = 1;
            for(; fromStart < from.length; ++fromStart){
                if (from.charCodeAt(fromStart) !== 47) break;
            }
            var fromEnd = from.length;
            var fromLen = fromEnd - fromStart;
            var toStart = 1;
            for(; toStart < to.length; ++toStart){
                if (to.charCodeAt(toStart) !== 47) break;
            }
            var toEnd = to.length;
            var toLen = toEnd - toStart;
            var length = fromLen < toLen ? fromLen : toLen;
            var lastCommonSep = -1;
            var i510 = 0;
            for(; i510 <= length; ++i510){
                if (i510 === length) {
                    if (toLen > length) {
                        if (to.charCodeAt(toStart + i510) === 47) {
                            return to.slice(toStart + i510 + 1);
                        } else if (i510 === 0) {
                            return to.slice(toStart + i510);
                        }
                    } else if (fromLen > length) {
                        if (from.charCodeAt(fromStart + i510) === 47) {
                            lastCommonSep = i510;
                        } else if (i510 === 0) {
                            lastCommonSep = 0;
                        }
                    }
                    break;
                }
                var fromCode = from.charCodeAt(fromStart + i510);
                var toCode = to.charCodeAt(toStart + i510);
                if (fromCode !== toCode) break;
                else if (fromCode === 47) lastCommonSep = i510;
            }
            var out = "";
            for(i510 = fromStart + lastCommonSep + 1; i510 <= fromEnd; ++i510){
                if (i510 === fromEnd || from.charCodeAt(i510) === 47) {
                    if (out.length === 0) out += "..";
                    else out += "/..";
                }
            }
            if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
            else {
                toStart += lastCommonSep;
                if (to.charCodeAt(toStart) === 47) ++toStart;
                return to.slice(toStart);
            }
        },
        _makeLong: function _makeLong(path6) {
            return path6;
        },
        dirname: function dirname(path7) {
            assertPath(path7);
            if (path7.length === 0) return ".";
            var code = path7.charCodeAt(0);
            var hasRoot = code === 47;
            var end = -1;
            var matchedSlash = true;
            for(var i610 = path7.length - 1; i610 >= 1; --i610){
                code = path7.charCodeAt(i610);
                if (code === 47) {
                    if (!matchedSlash) {
                        end = i610;
                        break;
                    }
                } else {
                    matchedSlash = false;
                }
            }
            if (end === -1) return hasRoot ? "/" : ".";
            if (hasRoot && end === 1) return "//";
            return path7.slice(0, end);
        },
        basename: function basename(path8, ext) {
            if (ext !== undefined && typeof ext !== "string") throw new TypeError("\"ext\" argument must be a string");
            assertPath(path8);
            var start = 0;
            var end = -1;
            var matchedSlash = true;
            var i7;
            if (ext !== undefined && ext.length > 0 && ext.length <= path8.length) {
                if (ext.length === path8.length && ext === path8) return "";
                var extIdx = ext.length - 1;
                var firstNonSlashEnd = -1;
                for(i7 = path8.length - 1; i7 >= 0; --i7){
                    var code = path8.charCodeAt(i7);
                    if (code === 47) {
                        if (!matchedSlash) {
                            start = i7 + 1;
                            break;
                        }
                    } else {
                        if (firstNonSlashEnd === -1) {
                            matchedSlash = false;
                            firstNonSlashEnd = i7 + 1;
                        }
                        if (extIdx >= 0) {
                            if (code === ext.charCodeAt(extIdx)) {
                                if (--extIdx === -1) {
                                    end = i7;
                                }
                            } else {
                                extIdx = -1;
                                end = firstNonSlashEnd;
                            }
                        }
                    }
                }
                if (start === end) end = firstNonSlashEnd;
                else if (end === -1) end = path8.length;
                return path8.slice(start, end);
            } else {
                for(i7 = path8.length - 1; i7 >= 0; --i7){
                    if (path8.charCodeAt(i7) === 47) {
                        if (!matchedSlash) {
                            start = i7 + 1;
                            break;
                        }
                    } else if (end === -1) {
                        matchedSlash = false;
                        end = i7 + 1;
                    }
                }
                if (end === -1) return "";
                return path8.slice(start, end);
            }
        },
        extname: function extname(path9) {
            assertPath(path9);
            var startDot = -1;
            var startPart = 0;
            var end = -1;
            var matchedSlash = true;
            var preDotState = 0;
            for(var i8 = path9.length - 1; i8 >= 0; --i8){
                var code = path9.charCodeAt(i8);
                if (code === 47) {
                    if (!matchedSlash) {
                        startPart = i8 + 1;
                        break;
                    }
                    continue;
                }
                if (end === -1) {
                    matchedSlash = false;
                    end = i8 + 1;
                }
                if (code === 46) {
                    if (startDot === -1) startDot = i8;
                    else if (preDotState !== 1) preDotState = 1;
                } else if (startDot !== -1) {
                    preDotState = -1;
                }
            }
            if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                return "";
            }
            return path9.slice(startDot, end);
        },
        format: function format(pathObject) {
            if (pathObject === null || typeof pathObject !== "object") {
                throw new TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof pathObject);
            }
            return _format("/", pathObject);
        },
        parse: function parse(path10) {
            assertPath(path10);
            var ret = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (path10.length === 0) return ret;
            var code = path10.charCodeAt(0);
            var isAbsolute4 = code === 47;
            var start;
            if (isAbsolute4) {
                ret.root = "/";
                start = 1;
            } else {
                start = 0;
            }
            var startDot = -1;
            var startPart = 0;
            var end = -1;
            var matchedSlash = true;
            var i9 = path10.length - 1;
            var preDotState = 0;
            for(; i9 >= start; --i9){
                code = path10.charCodeAt(i9);
                if (code === 47) {
                    if (!matchedSlash) {
                        startPart = i9 + 1;
                        break;
                    }
                    continue;
                }
                if (end === -1) {
                    matchedSlash = false;
                    end = i9 + 1;
                }
                if (code === 46) {
                    if (startDot === -1) startDot = i9;
                    else if (preDotState !== 1) preDotState = 1;
                } else if (startDot !== -1) {
                    preDotState = -1;
                }
            }
            if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                if (end !== -1) {
                    if (startPart === 0 && isAbsolute4) ret.base = ret.name = path10.slice(1, end);
                    else ret.base = ret.name = path10.slice(startPart, end);
                }
            } else {
                if (startPart === 0 && isAbsolute4) {
                    ret.name = path10.slice(1, startDot);
                    ret.base = path10.slice(1, end);
                } else {
                    ret.name = path10.slice(startPart, startDot);
                    ret.base = path10.slice(startPart, end);
                }
                ret.ext = path10.slice(startDot, end);
            }
            if (startPart > 0) ret.dir = path10.slice(0, startPart - 1);
            else if (isAbsolute4) ret.dir = "/";
            return ret;
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
    posix2.posix = posix2;
    exports6 = posix2;
    return exports6;
}
var path1 = dew6();
const processPlatform$1 = typeof Deno !== 'undefined' ? Deno.build.os === "windows" ? "win32" : Deno.build.os : undefined;
h6.URL = typeof URL !== 'undefined' ? URL : null;
h6.pathToFileURL = pathToFileURL$1;
h6.fileURLToPath = fileURLToPath$1;
h6.Url;
h6.format;
h6.resolve;
h6.resolveObject;
h6.URL;
const isWindows$1 = processPlatform$1 === 'win32';
const forwardSlashRegEx$1 = /\//g;
const percentRegEx$1 = /%/g;
const backslashRegEx$1 = /\\/g;
const newlineRegEx$1 = /\n/g;
const carriageReturnRegEx$1 = /\r/g;
const tabRegEx$1 = /\t/g;
function fileURLToPath$1(path11) {
    if (typeof path11 === "string") path11 = new URL(path11);
    else if (!(path11 instanceof URL)) {
        throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
    }
    if (path11.protocol !== "file:") {
        throw new Deno.errors.InvalidData("invalid url scheme");
    }
    return isWindows$1 ? getPathFromURLWin$1(path11) : getPathFromURLPosix$1(path11);
}
function getPathFromURLWin$1(url) {
    const hostname1 = url.hostname;
    let pathname = url.pathname;
    for(let n312 = 0; n312 < pathname.length; n312++){
        if (pathname[n312] === "%") {
            const third = pathname.codePointAt(n312 + 2) || 32;
            if (pathname[n312 + 1] === "2" && third === 102 || pathname[n312 + 1] === "5" && third === 99) {
                throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
            }
        }
    }
    pathname = pathname.replace(forwardSlashRegEx$1, "\\");
    pathname = decodeURIComponent(pathname);
    if (hostname1 !== "") {
        return `\\\\${hostname1}${pathname}`;
    } else {
        const letter = pathname.codePointAt(1) | 32;
        const sep3 = pathname[2];
        if (letter < 97 || letter > 122 || sep3 !== ":") {
            throw new Deno.errors.InvalidData("file url path must be absolute");
        }
        return pathname.slice(1);
    }
}
function getPathFromURLPosix$1(url) {
    if (url.hostname !== "") {
        throw new Deno.errors.InvalidData("invalid file url hostname");
    }
    const pathname = url.pathname;
    for(let n4 = 0; n4 < pathname.length; n4++){
        if (pathname[n4] === "%") {
            const third = pathname.codePointAt(n4 + 2) || 32;
            if (pathname[n4 + 1] === "2" && third === 102) {
                throw new Deno.errors.InvalidData("must not include encoded / characters");
            }
        }
    }
    return decodeURIComponent(pathname);
}
function pathToFileURL$1(filepath) {
    let resolved = path1.resolve(filepath);
    const filePathLast = filepath.charCodeAt(filepath.length - 1);
    if ((filePathLast === 47 || isWindows$1 && filePathLast === 92) && resolved[resolved.length - 1] !== path1.sep) {
        resolved += "/";
    }
    const outURL = new URL("file://");
    if (resolved.includes("%")) resolved = resolved.replace(percentRegEx$1, "%25");
    if (!isWindows$1 && resolved.includes("\\")) {
        resolved = resolved.replace(backslashRegEx$1, "%5C");
    }
    if (resolved.includes("\n")) resolved = resolved.replace(newlineRegEx$1, "%0A");
    if (resolved.includes("\r")) {
        resolved = resolved.replace(carriageReturnRegEx$1, "%0D");
    }
    if (resolved.includes("\t")) resolved = resolved.replace(tabRegEx$1, "%09");
    outURL.pathname = resolved;
    return outURL;
}
const processPlatform = typeof Deno !== 'undefined' ? Deno.build.os === "windows" ? "win32" : Deno.build.os : undefined;
h6.URL = typeof URL !== 'undefined' ? URL : null;
h6.pathToFileURL = pathToFileURL;
h6.fileURLToPath = fileURLToPath;
h6.Url;
h6.format;
h6.resolve;
h6.resolveObject;
h6.URL;
const isWindows = processPlatform === 'win32';
const forwardSlashRegEx = /\//g;
const percentRegEx = /%/g;
const backslashRegEx = /\\/g;
const newlineRegEx = /\n/g;
const carriageReturnRegEx = /\r/g;
const tabRegEx = /\t/g;
function fileURLToPath(path12) {
    if (typeof path12 === "string") path12 = new URL(path12);
    else if (!(path12 instanceof URL)) {
        throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
    }
    if (path12.protocol !== "file:") {
        throw new Deno.errors.InvalidData("invalid url scheme");
    }
    return isWindows ? getPathFromURLWin(path12) : getPathFromURLPosix(path12);
}
function getPathFromURLWin(url) {
    const hostname2 = url.hostname;
    let pathname = url.pathname;
    for(let n511 = 0; n511 < pathname.length; n511++){
        if (pathname[n511] === "%") {
            const third = pathname.codePointAt(n511 + 2) || 32;
            if (pathname[n511 + 1] === "2" && third === 102 || pathname[n511 + 1] === "5" && third === 99) {
                throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
            }
        }
    }
    pathname = pathname.replace(forwardSlashRegEx, "\\");
    pathname = decodeURIComponent(pathname);
    if (hostname2 !== "") {
        return `\\\\${hostname2}${pathname}`;
    } else {
        const letter = pathname.codePointAt(1) | 32;
        const sep4 = pathname[2];
        if (letter < 97 || letter > 122 || sep4 !== ":") {
            throw new Deno.errors.InvalidData("file url path must be absolute");
        }
        return pathname.slice(1);
    }
}
function getPathFromURLPosix(url) {
    if (url.hostname !== "") {
        throw new Deno.errors.InvalidData("invalid file url hostname");
    }
    const pathname = url.pathname;
    for(let n610 = 0; n610 < pathname.length; n610++){
        if (pathname[n610] === "%") {
            const third = pathname.codePointAt(n610 + 2) || 32;
            if (pathname[n610 + 1] === "2" && third === 102) {
                throw new Deno.errors.InvalidData("must not include encoded / characters");
            }
        }
    }
    return decodeURIComponent(pathname);
}
function pathToFileURL(filepath) {
    let resolved = path.resolve(filepath);
    const filePathLast = filepath.charCodeAt(filepath.length - 1);
    if ((filePathLast === 47 || isWindows && filePathLast === 92) && resolved[resolved.length - 1] !== path.sep) {
        resolved += "/";
    }
    const outURL = new URL("file://");
    if (resolved.includes("%")) resolved = resolved.replace(percentRegEx, "%25");
    if (!isWindows && resolved.includes("\\")) {
        resolved = resolved.replace(backslashRegEx, "%5C");
    }
    if (resolved.includes("\n")) resolved = resolved.replace(newlineRegEx, "%0A");
    if (resolved.includes("\r")) {
        resolved = resolved.replace(carriageReturnRegEx, "%0D");
    }
    if (resolved.includes("\t")) resolved = resolved.replace(tabRegEx, "%09");
    outURL.pathname = resolved;
    return outURL;
}
var exports$21 = {
}, _dewExec$21 = false;
function dew$21() {
    if (_dewExec$21) return exports$21;
    _dewExec$21 = true;
    exports$21.byteLength = byteLength;
    exports$21.toByteArray = toByteArray;
    exports$21.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(var i113 = 0, len1 = code.length; i113 < len1; ++i113){
        lookup[i113] = code[i113];
        revLookup[code.charCodeAt(i113)] = i113;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
        var len = b64.length;
        if (len % 4 > 0) {
            throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1) validLen = len;
        var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
        return [
            validLen,
            placeHoldersLen
        ];
    }
    function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i82;
        for(i82 = 0; i82 < len; i82 += 4){
            tmp = revLookup[b64.charCodeAt(i82)] << 18 | revLookup[b64.charCodeAt(i82 + 1)] << 12 | revLookup[b64.charCodeAt(i82 + 2)] << 6 | revLookup[b64.charCodeAt(i82 + 3)];
            arr[curByte++] = tmp >> 16 & 255;
            arr[curByte++] = tmp >> 8 & 255;
            arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
            tmp = revLookup[b64.charCodeAt(i82)] << 2 | revLookup[b64.charCodeAt(i82 + 1)] >> 4;
            arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
            tmp = revLookup[b64.charCodeAt(i82)] << 10 | revLookup[b64.charCodeAt(i82 + 1)] << 4 | revLookup[b64.charCodeAt(i82 + 2)] >> 2;
            arr[curByte++] = tmp >> 8 & 255;
            arr[curByte++] = tmp & 255;
        }
        return arr;
    }
    function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for(var i83 = start; i83 < end; i83 += 3){
            tmp = (uint8[i83] << 16 & 16711680) + (uint8[i83 + 1] << 8 & 65280) + (uint8[i83 + 2] & 255);
            output.push(tripletToBase64(tmp));
        }
        return output.join("");
    }
    function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for(var i84 = 0, len2 = len - extraBytes; i84 < len2; i84 += maxChunkLength){
            parts.push(encodeChunk(uint8, i84, i84 + maxChunkLength > len2 ? len2 : i84 + maxChunkLength));
        }
        if (extraBytes === 1) {
            tmp = uint8[len - 1];
            parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
        } else if (extraBytes === 2) {
            tmp = (uint8[len - 2] << 8) + uint8[len - 1];
            parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
        }
        return parts.join("");
    }
    return exports$21;
}
var exports$12 = {
}, _dewExec$12 = false;
function dew$12() {
    if (_dewExec$12) return exports$12;
    _dewExec$12 = true;
    exports$12.read = function(buffer1, offset, isLE, mLen, nBytes) {
        var e10, m10;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i85 = isLE ? nBytes - 1 : 0;
        var d10 = isLE ? -1 : 1;
        var s31 = buffer1[offset + i85];
        i85 += d10;
        e10 = s31 & (1 << -nBits) - 1;
        s31 >>= -nBits;
        nBits += eLen;
        for(; nBits > 0; e10 = e10 * 256 + buffer1[offset + i85], i85 += d10, nBits -= 8){
        }
        m10 = e10 & (1 << -nBits) - 1;
        e10 >>= -nBits;
        nBits += mLen;
        for(; nBits > 0; m10 = m10 * 256 + buffer1[offset + i85], i85 += d10, nBits -= 8){
        }
        if (e10 === 0) {
            e10 = 1 - eBias;
        } else if (e10 === eMax) {
            return m10 ? NaN : (s31 ? -1 : 1) * Infinity;
        } else {
            m10 = m10 + Math.pow(2, mLen);
            e10 = e10 - eBias;
        }
        return (s31 ? -1 : 1) * m10 * Math.pow(2, e10 - mLen);
    };
    exports$12.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
        var e18, m13, c37;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i86 = isLE ? 0 : nBytes - 1;
        var d14 = isLE ? 1 : -1;
        var s32 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
            m13 = isNaN(value) ? 1 : 0;
            e18 = eMax;
        } else {
            e18 = Math.floor(Math.log(value) / Math.LN2);
            if (value * (c37 = Math.pow(2, -e18)) < 1) {
                e18--;
                c37 *= 2;
            }
            if (e18 + eBias >= 1) {
                value += rt / c37;
            } else {
                value += rt * Math.pow(2, 1 - eBias);
            }
            if (value * c37 >= 2) {
                e18++;
                c37 /= 2;
            }
            if (e18 + eBias >= eMax) {
                m13 = 0;
                e18 = eMax;
            } else if (e18 + eBias >= 1) {
                m13 = (value * c37 - 1) * Math.pow(2, mLen);
                e18 = e18 + eBias;
            } else {
                m13 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                e18 = 0;
            }
        }
        for(; mLen >= 8; buffer2[offset + i86] = m13 & 255, i86 += d14, m13 /= 256, mLen -= 8){
        }
        e18 = e18 << mLen | m13;
        eLen += mLen;
        for(; eLen > 0; buffer2[offset + i86] = e18 & 255, i86 += d14, e18 /= 256, eLen -= 8){
        }
        buffer2[offset + i86 - d14] |= s32 * 128;
    };
    return exports$12;
}
var exports7 = {
}, _dewExec7 = false;
function dew7() {
    if (_dewExec7) return exports7;
    _dewExec7 = true;
    const base64 = dew$21();
    const ieee754 = dew$12();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports7.Buffer = Buffer1;
    exports7.SlowBuffer = SlowBuffer;
    exports7.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports7.kMaxLength = K_MAX_LENGTH;
    Buffer1.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer1.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
        try {
            const arr = new Uint8Array(1);
            const proto = {
                foo: function() {
                    return 42;
                }
            };
            Object.setPrototypeOf(proto, Uint8Array.prototype);
            Object.setPrototypeOf(arr, proto);
            return arr.foo() === 42;
        } catch (e) {
            return false;
        }
    }
    Object.defineProperty(Buffer1.prototype, "parent", {
        enumerable: true,
        get: function() {
            if (!Buffer1.isBuffer(this)) return undefined;
            return this.buffer;
        }
    });
    Object.defineProperty(Buffer1.prototype, "offset", {
        enumerable: true,
        get: function() {
            if (!Buffer1.isBuffer(this)) return undefined;
            return this.byteOffset;
        }
    });
    function createBuffer(length) {
        if (length > 2147483647) {
            throw new RangeError("The value \"" + length + "\" is invalid for option \"size\"");
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer1.prototype);
        return buf;
    }
    function Buffer1(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
            if (typeof encodingOrOffset === "string") {
                throw new TypeError("The \"string\" argument must be of type string. Received type number");
            }
            return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
    }
    Buffer1.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
            return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
            return fromArrayView(value);
        }
        if (value == null) {
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
            return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
            return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
            throw new TypeError("The \"value\" argument must not be of type number. Received type number");
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
            return Buffer1.from(valueOf, encodingOrOffset, length);
        }
        const b9 = fromObject(value);
        if (b9) return b9;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
            return Buffer1.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
    }
    Buffer1.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer1.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer1, Uint8Array);
    function assertSize(size) {
        if (typeof size !== "number") {
            throw new TypeError("\"size\" argument must be of type number");
        } else if (size < 0) {
            throw new RangeError("The value \"" + size + "\" is invalid for option \"size\"");
        }
    }
    function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
            return createBuffer(size);
        }
        if (fill !== undefined) {
            return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
    }
    Buffer1.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer1.allocUnsafe = function(size) {
        return allocUnsafe(size);
    };
    Buffer1.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
    };
    function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
            encoding = "utf8";
        }
        if (!Buffer1.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength1(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
            buf = buf.slice(0, actual);
        }
        return buf;
    }
    function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for(let i87 = 0; i87 < length; i87 += 1){
            buf[i87] = array[i87] & 255;
        }
        return buf;
    }
    function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
            const copy = new Uint8Array(arrayView);
            return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
            throw new RangeError("\"offset\" is outside of buffer bounds");
        }
        if (array.byteLength < byteOffset + (length || 0)) {
            throw new RangeError("\"length\" is outside of buffer bounds");
        }
        let buf;
        if (byteOffset === undefined && length === undefined) {
            buf = new Uint8Array(array);
        } else if (length === undefined) {
            buf = new Uint8Array(array, byteOffset);
        } else {
            buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer1.prototype);
        return buf;
    }
    function fromObject(obj) {
        if (Buffer1.isBuffer(obj)) {
            const len = checked(obj.length) | 0;
            const buf = createBuffer(len);
            if (buf.length === 0) {
                return buf;
            }
            obj.copy(buf, 0, 0, len);
            return buf;
        }
        if (obj.length !== undefined) {
            if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
                return createBuffer(0);
            }
            return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
            return fromArrayLike(obj.data);
        }
    }
    function checked(length) {
        if (length >= 2147483647) {
            throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + 2147483647..toString(16) + " bytes");
        }
        return length | 0;
    }
    function SlowBuffer(length) {
        if (+length != length) {
            length = 0;
        }
        return Buffer1.alloc(+length);
    }
    Buffer1.isBuffer = function isBuffer(b10) {
        return b10 != null && b10._isBuffer === true && b10 !== Buffer1.prototype;
    };
    Buffer1.compare = function compare(a34, b13) {
        if (isInstance(a34, Uint8Array)) a34 = Buffer1.from(a34, a34.offset, a34.byteLength);
        if (isInstance(b13, Uint8Array)) b13 = Buffer1.from(b13, b13.offset, b13.byteLength);
        if (!Buffer1.isBuffer(a34) || !Buffer1.isBuffer(b13)) {
            throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
        }
        if (a34 === b13) return 0;
        let x8 = a34.length;
        let y6 = b13.length;
        for(let i88 = 0, len = Math.min(x8, y6); i88 < len; ++i88){
            if (a34[i88] !== b13[i88]) {
                x8 = a34[i88];
                y6 = b13[i88];
                break;
            }
        }
        if (x8 < y6) return -1;
        if (y6 < x8) return 1;
        return 0;
    };
    Buffer1.isEncoding = function isEncoding(encoding) {
        switch(String(encoding).toLowerCase()){
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return true;
            default:
                return false;
        }
    };
    Buffer1.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
            throw new TypeError("\"list\" argument must be an Array of Buffers");
        }
        if (list.length === 0) {
            return Buffer1.alloc(0);
        }
        let i89;
        if (length === undefined) {
            length = 0;
            for(i89 = 0; i89 < list.length; ++i89){
                length += list[i89].length;
            }
        }
        const buffer3 = Buffer1.allocUnsafe(length);
        let pos = 0;
        for(i89 = 0; i89 < list.length; ++i89){
            let buf = list[i89];
            if (isInstance(buf, Uint8Array)) {
                if (pos + buf.length > buffer3.length) {
                    if (!Buffer1.isBuffer(buf)) buf = Buffer1.from(buf);
                    buf.copy(buffer3, pos);
                } else {
                    Uint8Array.prototype.set.call(buffer3, buf, pos);
                }
            } else if (!Buffer1.isBuffer(buf)) {
                throw new TypeError("\"list\" argument must be an Array of Buffers");
            } else {
                buf.copy(buffer3, pos);
            }
            pos += buf.length;
        }
        return buffer3;
    };
    function byteLength1(string, encoding) {
        if (Buffer1.isBuffer(string)) {
            return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
            return string.byteLength;
        }
        if (typeof string !== "string") {
            throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. " + "Received type " + typeof string);
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0;
        let loweredCase = false;
        for(;;){
            switch(encoding){
                case "ascii":
                case "latin1":
                case "binary":
                    return len;
                case "utf8":
                case "utf-8":
                    return utf8ToBytes(string).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return len * 2;
                case "hex":
                    return len >>> 1;
                case "base64":
                    return base64ToBytes(string).length;
                default:
                    if (loweredCase) {
                        return mustMatch ? -1 : utf8ToBytes(string).length;
                    }
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
            }
        }
    }
    Buffer1.byteLength = byteLength1;
    function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === undefined || start < 0) {
            start = 0;
        }
        if (start > this.length) {
            return "";
        }
        if (end === undefined || end > this.length) {
            end = this.length;
        }
        if (end <= 0) {
            return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
            return "";
        }
        if (!encoding) encoding = "utf8";
        while(true){
            switch(encoding){
                case "hex":
                    return hexSlice(this, start, end);
                case "utf8":
                case "utf-8":
                    return utf8Slice(this, start, end);
                case "ascii":
                    return asciiSlice(this, start, end);
                case "latin1":
                case "binary":
                    return latin1Slice(this, start, end);
                case "base64":
                    return base64Slice(this, start, end);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return utf16leSlice(this, start, end);
                default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = (encoding + "").toLowerCase();
                    loweredCase = true;
            }
        }
    }
    Buffer1.prototype._isBuffer = true;
    function swap(b14, n, m) {
        const i90 = b14[n];
        b14[n] = b14[m];
        b14[m] = i90;
    }
    Buffer1.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for(let i91 = 0; i91 < len; i91 += 2){
            swap(this, i91, i91 + 1);
        }
        return this;
    };
    Buffer1.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for(let i92 = 0; i92 < len; i92 += 4){
            swap(this, i92, i92 + 3);
            swap(this, i92 + 1, i92 + 2);
        }
        return this;
    };
    Buffer1.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for(let i93 = 0; i93 < len; i93 += 8){
            swap(this, i93, i93 + 7);
            swap(this, i93 + 1, i93 + 6);
            swap(this, i93 + 2, i93 + 5);
            swap(this, i93 + 3, i93 + 4);
        }
        return this;
    };
    Buffer1.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0) return "";
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
    };
    Buffer1.prototype.toLocaleString = Buffer1.prototype.toString;
    Buffer1.prototype.equals = function equals(b15) {
        if (!Buffer1.isBuffer(b15)) throw new TypeError("Argument must be a Buffer");
        if (this === b15) return true;
        return Buffer1.compare(this, b15) === 0;
    };
    Buffer1.prototype.inspect = function inspect() {
        let str = "";
        const max = exports7.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max) str += " ... ";
        return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
        Buffer1.prototype[customInspectSymbol] = Buffer1.prototype.inspect;
    }
    Buffer1.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
            target = Buffer1.from(target, target.offset, target.byteLength);
        }
        if (!Buffer1.isBuffer(target)) {
            throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. " + "Received type " + typeof target);
        }
        if (start === undefined) {
            start = 0;
        }
        if (end === undefined) {
            end = target ? target.length : 0;
        }
        if (thisStart === undefined) {
            thisStart = 0;
        }
        if (thisEnd === undefined) {
            thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
            throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
            return 0;
        }
        if (thisStart >= thisEnd) {
            return -1;
        }
        if (start >= end) {
            return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        let x9 = thisEnd - thisStart;
        let y7 = end - start;
        const len = Math.min(x9, y7);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for(let i94 = 0; i94 < len; ++i94){
            if (thisCopy[i94] !== targetCopy[i94]) {
                x9 = thisCopy[i94];
                y7 = targetCopy[i94];
                break;
            }
        }
        if (x9 < y7) return -1;
        if (y7 < x9) return 1;
        return 0;
    };
    function bidirectionalIndexOf(buffer4, val, byteOffset, encoding, dir) {
        if (buffer4.length === 0) return -1;
        if (typeof byteOffset === "string") {
            encoding = byteOffset;
            byteOffset = 0;
        } else if (byteOffset > 2147483647) {
            byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
            byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
            byteOffset = dir ? 0 : buffer4.length - 1;
        }
        if (byteOffset < 0) byteOffset = buffer4.length + byteOffset;
        if (byteOffset >= buffer4.length) {
            if (dir) return -1;
            else byteOffset = buffer4.length - 1;
        } else if (byteOffset < 0) {
            if (dir) byteOffset = 0;
            else return -1;
        }
        if (typeof val === "string") {
            val = Buffer1.from(val, encoding);
        }
        if (Buffer1.isBuffer(val)) {
            if (val.length === 0) {
                return -1;
            }
            return arrayIndexOf(buffer4, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
            val = val & 255;
            if (typeof Uint8Array.prototype.indexOf === "function") {
                if (dir) {
                    return Uint8Array.prototype.indexOf.call(buffer4, val, byteOffset);
                } else {
                    return Uint8Array.prototype.lastIndexOf.call(buffer4, val, byteOffset);
                }
            }
            return arrayIndexOf(buffer4, [
                val
            ], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== undefined) {
            encoding = String(encoding).toLowerCase();
            if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                if (arr.length < 2 || val.length < 2) {
                    return -1;
                }
                indexSize = 2;
                arrLength /= 2;
                valLength /= 2;
                byteOffset /= 2;
            }
        }
        function read2(buf, i95) {
            if (indexSize === 1) {
                return buf[i95];
            } else {
                return buf.readUInt16BE(i95 * indexSize);
            }
        }
        let i212;
        if (dir) {
            let foundIndex = -1;
            for(i212 = byteOffset; i212 < arrLength; i212++){
                if (read2(arr, i212) === read2(val, foundIndex === -1 ? 0 : i212 - foundIndex)) {
                    if (foundIndex === -1) foundIndex = i212;
                    if (i212 - foundIndex + 1 === valLength) return foundIndex * indexSize;
                } else {
                    if (foundIndex !== -1) i212 -= i212 - foundIndex;
                    foundIndex = -1;
                }
            }
        } else {
            if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
            for(i212 = byteOffset; i212 >= 0; i212--){
                let found = true;
                for(let j7 = 0; j7 < valLength; j7++){
                    if (read2(arr, i212 + j7) !== read2(val, j7)) {
                        found = false;
                        break;
                    }
                }
                if (found) return i212;
            }
        }
        return -1;
    }
    Buffer1.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer1.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer1.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
            length = remaining;
        } else {
            length = Number(length);
            if (length > remaining) {
                length = remaining;
            }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
            length = strLen / 2;
        }
        let i96;
        for(i96 = 0; i96 < length; ++i96){
            const parsed = parseInt(string.substr(i96 * 2, 2), 16);
            if (numberIsNaN(parsed)) return i96;
            buf[offset + i96] = parsed;
        }
        return i96;
    }
    function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer1.prototype.write = function write(string, offset, length, encoding) {
        if (offset === undefined) {
            encoding = "utf8";
            length = this.length;
            offset = 0;
        } else if (length === undefined && typeof offset === "string") {
            encoding = offset;
            length = this.length;
            offset = 0;
        } else if (isFinite(offset)) {
            offset = offset >>> 0;
            if (isFinite(length)) {
                length = length >>> 0;
                if (encoding === undefined) encoding = "utf8";
            } else {
                encoding = length;
                length = undefined;
            }
        } else {
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        }
        const remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
            throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding) encoding = "utf8";
        let loweredCase = false;
        for(;;){
            switch(encoding){
                case "hex":
                    return hexWrite(this, string, offset, length);
                case "utf8":
                case "utf-8":
                    return utf8Write(this, string, offset, length);
                case "ascii":
                case "latin1":
                case "binary":
                    return asciiWrite(this, string, offset, length);
                case "base64":
                    return base64Write(this, string, offset, length);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return ucs2Write(this, string, offset, length);
                default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = ("" + encoding).toLowerCase();
                    loweredCase = true;
            }
        }
    };
    Buffer1.prototype.toJSON = function toJSON() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    };
    function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
            return base64.fromByteArray(buf);
        } else {
            return base64.fromByteArray(buf.slice(start, end));
        }
    }
    function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i97 = start;
        while(i97 < end){
            const firstByte = buf[i97];
            let codePoint = null;
            let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
            if (i97 + bytesPerSequence <= end) {
                let secondByte, thirdByte, fourthByte, tempCodePoint;
                switch(bytesPerSequence){
                    case 1:
                        if (firstByte < 128) {
                            codePoint = firstByte;
                        }
                        break;
                    case 2:
                        secondByte = buf[i97 + 1];
                        if ((secondByte & 192) === 128) {
                            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                            if (tempCodePoint > 127) {
                                codePoint = tempCodePoint;
                            }
                        }
                        break;
                    case 3:
                        secondByte = buf[i97 + 1];
                        thirdByte = buf[i97 + 2];
                        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                codePoint = tempCodePoint;
                            }
                        }
                        break;
                    case 4:
                        secondByte = buf[i97 + 1];
                        thirdByte = buf[i97 + 2];
                        fourthByte = buf[i97 + 3];
                        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                codePoint = tempCodePoint;
                            }
                        }
                }
            }
            if (codePoint === null) {
                codePoint = 65533;
                bytesPerSequence = 1;
            } else if (codePoint > 65535) {
                codePoint -= 65536;
                res.push(codePoint >>> 10 & 1023 | 55296);
                codePoint = 56320 | codePoint & 1023;
            }
            res.push(codePoint);
            i97 += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= 4096) {
            return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i98 = 0;
        while(i98 < len){
            res += String.fromCharCode.apply(String, codePoints.slice(i98, i98 += MAX_ARGUMENTS_LENGTH));
        }
        return res;
    }
    function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for(let i99 = start; i99 < end; ++i99){
            ret += String.fromCharCode(buf[i99] & 127);
        }
        return ret;
    }
    function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for(let i100 = start; i100 < end; ++i100){
            ret += String.fromCharCode(buf[i100]);
        }
        return ret;
    }
    function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        let out = "";
        for(let i101 = start; i101 < end; ++i101){
            out += hexSliceLookupTable[buf[i101]];
        }
        return out;
    }
    function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for(let i102 = 0; i102 < bytes.length - 1; i102 += 2){
            res += String.fromCharCode(bytes[i102] + bytes[i102 + 1] * 256);
        }
        return res;
    }
    Buffer1.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;
        if (start < 0) {
            start += len;
            if (start < 0) start = 0;
        } else if (start > len) {
            start = len;
        }
        if (end < 0) {
            end += len;
            if (end < 0) end = 0;
        } else if (end > len) {
            end = len;
        }
        if (end < start) end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer1.prototype);
        return newBuf;
    };
    function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer1.prototype.readUintLE = Buffer1.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        let val = this[offset];
        let mul = 1;
        let i103 = 0;
        while(++i103 < byteLength && (mul *= 256)){
            val += this[offset + i103] * mul;
        }
        return val;
    };
    Buffer1.prototype.readUintBE = Buffer1.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
        }
        let val = this[offset + --byteLength];
        let mul = 1;
        while(byteLength > 0 && (mul *= 256)){
            val += this[offset + --byteLength] * mul;
        }
        return val;
    };
    Buffer1.prototype.readUint8 = Buffer1.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
    };
    Buffer1.prototype.readUint16LE = Buffer1.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
    };
    Buffer1.prototype.readUint16BE = Buffer1.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
    };
    Buffer1.prototype.readUint32LE = Buffer1.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer1.prototype.readUint32BE = Buffer1.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer1.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === undefined || last === undefined) {
            boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer1.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === undefined || last === undefined) {
            boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer1.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        let val = this[offset];
        let mul = 1;
        let i104 = 0;
        while(++i104 < byteLength && (mul *= 256)){
            val += this[offset + i104] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
    };
    Buffer1.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        let i105 = byteLength;
        let mul = 1;
        let val = this[offset + --i105];
        while(i105 > 0 && (mul *= 256)){
            val += this[offset + --i105] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
    };
    Buffer1.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128)) return this[offset];
        return (255 - this[offset] + 1) * -1;
    };
    Buffer1.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
    };
    Buffer1.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
    };
    Buffer1.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer1.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer1.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === undefined || last === undefined) {
            boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer1.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === undefined || last === undefined) {
            boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer1.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer1.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer1.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer1.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer1.isBuffer(buf)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
        if (value > max || value < min) throw new RangeError("\"value\" argument is out of bounds");
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer1.prototype.writeUintLE = Buffer1.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            const maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        let mul = 1;
        let i106 = 0;
        this[offset] = value & 255;
        while(++i106 < byteLength && (mul *= 256)){
            this[offset + i106] = value / mul & 255;
        }
        return offset + byteLength;
    };
    Buffer1.prototype.writeUintBE = Buffer1.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            const maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        let i107 = byteLength - 1;
        let mul = 1;
        this[offset + i107] = value & 255;
        while(--i107 >= 0 && (mul *= 256)){
            this[offset + i107] = value / mul & 255;
        }
        return offset + byteLength;
    };
    Buffer1.prototype.writeUint8 = Buffer1.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
    };
    Buffer1.prototype.writeUint16LE = Buffer1.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
    };
    Buffer1.prototype.writeUint16BE = Buffer1.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
    };
    Buffer1.prototype.writeUint32LE = Buffer1.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
    };
    Buffer1.prototype.writeUint32BE = Buffer1.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
    }
    Buffer1.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer1.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer1.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
            const limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        let i108 = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while(++i108 < byteLength && (mul *= 256)){
            if (value < 0 && sub === 0 && this[offset + i108 - 1] !== 0) {
                sub = 1;
            }
            this[offset + i108] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
    };
    Buffer1.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
            const limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        let i109 = byteLength - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i109] = value & 255;
        while(--i109 >= 0 && (mul *= 256)){
            if (value < 0 && sub === 0 && this[offset + i109 + 1] !== 0) {
                sub = 1;
            }
            this[offset + i109] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
    };
    Buffer1.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
        if (value < 0) value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
    };
    Buffer1.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
    };
    Buffer1.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
    };
    Buffer1.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
    };
    Buffer1.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0) value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
    };
    Buffer1.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer1.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
            checkIEEE754(buf, value, offset, 4);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
    }
    Buffer1.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer1.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
            checkIEEE754(buf, value, offset, 8);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
    }
    Buffer1.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer1.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer1.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer1.isBuffer(target)) throw new TypeError("argument should be a Buffer");
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;
        if (targetStart < 0) {
            throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
            end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
            this.copyWithin(targetStart, start, end);
        } else {
            Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
        }
        return len;
    };
    Buffer1.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
            if (typeof start === "string") {
                encoding = start;
                start = 0;
                end = this.length;
            } else if (typeof end === "string") {
                encoding = end;
                end = this.length;
            }
            if (encoding !== undefined && typeof encoding !== "string") {
                throw new TypeError("encoding must be a string");
            }
            if (typeof encoding === "string" && !Buffer1.isEncoding(encoding)) {
                throw new TypeError("Unknown encoding: " + encoding);
            }
            if (val.length === 1) {
                const code = val.charCodeAt(0);
                if (encoding === "utf8" && code < 128 || encoding === "latin1") {
                    val = code;
                }
            }
        } else if (typeof val === "number") {
            val = val & 255;
        } else if (typeof val === "boolean") {
            val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
            throw new RangeError("Out of range index");
        }
        if (end <= start) {
            return this;
        }
        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;
        if (!val) val = 0;
        let i114;
        if (typeof val === "number") {
            for(i114 = start; i114 < end; ++i114){
                this[i114] = val;
            }
        } else {
            const bytes = Buffer1.isBuffer(val) ? val : Buffer1.from(val, encoding);
            const len = bytes.length;
            if (len === 0) {
                throw new TypeError("The value \"" + val + "\" is invalid for argument \"value\"");
            }
            for(i114 = 0; i114 < end - start; ++i114){
                this[i114 + start] = bytes[i114 % len];
            }
        }
        return this;
    };
    const errors = {
    };
    function E5(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
            constructor(){
                super();
                Object.defineProperty(this, "message", {
                    value: getMessage.apply(this, arguments),
                    writable: true,
                    configurable: true
                });
                this.name = `${this.name} [${sym}]`;
                this.stack;
                delete this.name;
            }
            get code() {
                return sym;
            }
            set code(value) {
                Object.defineProperty(this, "code", {
                    configurable: true,
                    enumerable: true,
                    value,
                    writable: true
                });
            }
            toString() {
                return `${this.name} [${sym}]: ${this.message}`;
            }
        };
    }
    E5("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
        if (name) {
            return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E5("ERR_INVALID_ARG_TYPE", function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E5("ERR_OUT_OF_RANGE", function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
                received = addNumericalSeparator(received);
            }
            received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
        let res = "";
        let i115 = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for(; i115 >= start + 4; i115 -= 3){
            res = `_${val.slice(i115 - 3, i115)}${res}`;
        }
        return `${val.slice(0, i115)}${res}`;
    }
    function checkBounds(buf, offset, byteLength) {
        validateNumber(offset, "offset");
        if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
            boundsError(offset, buf.length - (byteLength + 1));
        }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength) {
        if (value > max || value < min) {
            const n80 = typeof min === "bigint" ? "n" : "";
            let range;
            if (byteLength > 3) {
                if (min === 0 || min === BigInt(0)) {
                    range = `>= 0${n80} and < 2${n80} ** ${(byteLength + 1) * 8}${n80}`;
                } else {
                    range = `>= -(2${n80} ** ${(byteLength + 1) * 8 - 1}${n80}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n80}`;
                }
            } else {
                range = `>= ${min}${n80} and <= ${max}${n80}`;
            }
            throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength);
    }
    function validateNumber(value, name) {
        if (typeof value !== "number") {
            throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
    }
    function boundsError(value, length, type6) {
        if (Math.floor(value) !== value) {
            validateNumber(value, type6);
            throw new errors.ERR_OUT_OF_RANGE(type6 || "offset", "an integer", value);
        }
        if (length < 0) {
            throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(type6 || "offset", `>= ${type6 ? 1 : 0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while(str.length % 4 !== 0){
            str = str + "=";
        }
        return str;
    }
    function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for(let i116 = 0; i116 < length; ++i116){
            codePoint = string.charCodeAt(i116);
            if (codePoint > 55295 && codePoint < 57344) {
                if (!leadSurrogate) {
                    if (codePoint > 56319) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                        continue;
                    } else if (i116 + 1 === length) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                        continue;
                    }
                    leadSurrogate = codePoint;
                    continue;
                }
                if (codePoint < 56320) {
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    leadSurrogate = codePoint;
                    continue;
                }
                codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
            } else if (leadSurrogate) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
            }
            leadSurrogate = null;
            if (codePoint < 128) {
                if ((units -= 1) < 0) break;
                bytes.push(codePoint);
            } else if (codePoint < 2048) {
                if ((units -= 2) < 0) break;
                bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
            } else if (codePoint < 65536) {
                if ((units -= 3) < 0) break;
                bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
            } else if (codePoint < 1114112) {
                if ((units -= 4) < 0) break;
                bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
            } else {
                throw new Error("Invalid code point");
            }
        }
        return bytes;
    }
    function asciiToBytes(str) {
        const byteArray = [];
        for(let i117 = 0; i117 < str.length; ++i117){
            byteArray.push(str.charCodeAt(i117) & 255);
        }
        return byteArray;
    }
    function utf16leToBytes(str, units) {
        let c38, hi, lo;
        const byteArray = [];
        for(let i118 = 0; i118 < str.length; ++i118){
            if ((units -= 2) < 0) break;
            c38 = str.charCodeAt(i118);
            hi = c38 >> 8;
            lo = c38 % 256;
            byteArray.push(lo);
            byteArray.push(hi);
        }
        return byteArray;
    }
    function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
        let i119;
        for(i119 = 0; i119 < length; ++i119){
            if (i119 + offset >= dst.length || i119 >= src.length) break;
            dst[i119 + offset] = src[i119];
        }
        return i119;
    }
    function isInstance(obj, type7) {
        return obj instanceof type7 || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type7.name;
    }
    function numberIsNaN(obj) {
        return obj !== obj;
    }
    const hexSliceLookupTable = function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for(let i120 = 0; i120 < 16; ++i120){
            const i16 = i120 * 16;
            for(let j8 = 0; j8 < 16; ++j8){
                table[i16 + j8] = alphabet[i120] + alphabet[j8];
            }
        }
        return table;
    }();
    function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
    }
    return exports7;
}
var buffer1 = dew7();
var Buffer = buffer1.Buffer;
buffer1.INSPECT_MAX_BYTES;
buffer1.kMaxLength;
var exports$f1 = {
}, _dewExec$f1 = false;
function dew$f1() {
    if (_dewExec$f1) return exports$f1;
    _dewExec$f1 = true;
    Object.defineProperty(exports$f1, "__esModule", {
        value: true
    });
    exports$f1.constants = void 0;
    exports$f1.constants = {
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFBLK: 24576,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFSOCK: 49152,
        O_CREAT: 64,
        O_EXCL: 128,
        O_NOCTTY: 256,
        O_TRUNC: 512,
        O_APPEND: 1024,
        O_DIRECTORY: 65536,
        O_NOATIME: 262144,
        O_NOFOLLOW: 131072,
        O_SYNC: 1052672,
        O_DIRECT: 16384,
        O_NONBLOCK: 2048,
        S_IRWXU: 448,
        S_IRUSR: 256,
        S_IWUSR: 128,
        S_IXUSR: 64,
        S_IRWXG: 56,
        S_IRGRP: 32,
        S_IWGRP: 16,
        S_IXGRP: 8,
        S_IRWXO: 7,
        S_IROTH: 4,
        S_IWOTH: 2,
        S_IXOTH: 1,
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4
    };
    return exports$f1;
}
var exports$e1 = {
}, _dewExec$e1 = false;
function dew$e1() {
    if (_dewExec$e1) return exports$e1;
    _dewExec$e1 = true;
    if (typeof BigInt === "function") exports$e1.default = BigInt;
    else exports$e1.default = function BigIntNotSupported() {
        throw new Error("BigInt is not supported in this environment.");
    };
    return exports$e1;
}
var exports$d1 = {
}, _dewExec$d1 = false;
function dew$d1() {
    if (_dewExec$d1) return exports$d1;
    _dewExec$d1 = true;
    Object.defineProperty(exports$d1, "__esModule", {
        value: true
    });
    exports$d1.Stats = void 0;
    var constants_1 = dew$f1();
    var getBigInt_1 = dew$e1();
    var S_IFMT = constants_1.constants.S_IFMT, S_IFDIR = constants_1.constants.S_IFDIR, S_IFREG = constants_1.constants.S_IFREG, S_IFBLK = constants_1.constants.S_IFBLK, S_IFCHR = constants_1.constants.S_IFCHR, S_IFLNK = constants_1.constants.S_IFLNK, S_IFIFO = constants_1.constants.S_IFIFO, S_IFSOCK = constants_1.constants.S_IFSOCK;
    var Stats1 = function() {
        function Stats2() {
        }
        Stats2.build = function(node, bigint) {
            if (bigint === void 0) {
                bigint = false;
            }
            var stats = new Stats2();
            var uid = node.uid, gid = node.gid, atime = node.atime, mtime = node.mtime, ctime = node.ctime;
            var getStatNumber = !bigint ? function(number) {
                return number;
            } : getBigInt_1.default;
            stats.uid = getStatNumber(uid);
            stats.gid = getStatNumber(gid);
            stats.rdev = getStatNumber(0);
            stats.blksize = getStatNumber(4096);
            stats.ino = getStatNumber(node.ino);
            stats.size = getStatNumber(node.getSize());
            stats.blocks = getStatNumber(1);
            stats.atime = atime;
            stats.mtime = mtime;
            stats.ctime = ctime;
            stats.birthtime = ctime;
            stats.atimeMs = getStatNumber(atime.getTime());
            stats.mtimeMs = getStatNumber(mtime.getTime());
            var ctimeMs = getStatNumber(ctime.getTime());
            stats.ctimeMs = ctimeMs;
            stats.birthtimeMs = ctimeMs;
            stats.dev = getStatNumber(0);
            stats.mode = getStatNumber(node.mode);
            stats.nlink = getStatNumber(node.nlink);
            return stats;
        };
        Stats2.prototype._checkModeProperty = function(property) {
            return (Number(this.mode) & S_IFMT) === property;
        };
        Stats2.prototype.isDirectory = function() {
            return this._checkModeProperty(S_IFDIR);
        };
        Stats2.prototype.isFile = function() {
            return this._checkModeProperty(S_IFREG);
        };
        Stats2.prototype.isBlockDevice = function() {
            return this._checkModeProperty(S_IFBLK);
        };
        Stats2.prototype.isCharacterDevice = function() {
            return this._checkModeProperty(S_IFCHR);
        };
        Stats2.prototype.isSymbolicLink = function() {
            return this._checkModeProperty(S_IFLNK);
        };
        Stats2.prototype.isFIFO = function() {
            return this._checkModeProperty(S_IFIFO);
        };
        Stats2.prototype.isSocket = function() {
            return this._checkModeProperty(S_IFSOCK);
        };
        return Stats2;
    }();
    exports$d1.Stats = Stats1;
    exports$d1.default = Stats1;
    return exports$d1;
}
var exports$c1 = {
}, _dewExec$c1 = false;
function dew$c1() {
    if (_dewExec$c1) return exports$c1;
    _dewExec$c1 = true;
    var __spreadArray = exports$c1 && exports$c1.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2) for(var i121 = 0, l25 = from.length, ar; i121 < l25; i121++){
            if (ar || !(i121 in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i121);
                ar[i121] = from[i121];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports$c1, "__esModule", {
        value: true
    });
    exports$c1.bufferFrom = exports$c1.bufferAllocUnsafe = exports$c1.Buffer = void 0;
    var buffer_1 = buffer;
    Object.defineProperty(exports$c1, "Buffer", {
        enumerable: true,
        get: function() {
            return buffer_1.Buffer;
        }
    });
    function bufferV0P12Ponyfill(arg0) {
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++){
            args[_i - 1] = arguments[_i];
        }
        return new (buffer_1.Buffer.bind.apply(buffer_1.Buffer, __spreadArray([
            void 0,
            arg0
        ], args, false)))();
    }
    var bufferAllocUnsafe = buffer_1.Buffer.allocUnsafe || bufferV0P12Ponyfill;
    exports$c1.bufferAllocUnsafe = bufferAllocUnsafe;
    var bufferFrom = buffer_1.Buffer.from || bufferV0P12Ponyfill;
    exports$c1.bufferFrom = bufferFrom;
    return exports$c1;
}
var exports$b1 = {
}, _dewExec$b1 = false;
var _global$3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$b1() {
    if (_dewExec$b1) return exports$b1;
    _dewExec$b1 = true;
    var __extends = exports$b1 && exports$b1.__extends || function() {
        var extendStatics = function(d17, b18) {
            extendStatics = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(d15, b16) {
                d15.__proto__ = b16;
            } || function(d16, b17) {
                for(var p20 in b17)if (Object.prototype.hasOwnProperty.call(b17, p20)) d16[p20] = b17[p20];
            };
            return extendStatics(d17, b18);
        };
        return function(d18, b19) {
            if (typeof b19 !== "function" && b19 !== null) throw new TypeError("Class extends value " + String(b19) + " is not a constructor or null");
            extendStatics(d18, b19);
            function __() {
                this.constructor = d18;
            }
            d18.prototype = b19 === null ? Object.create(b19) : (__.prototype = b19.prototype, new __());
        };
    }();
    Object.defineProperty(exports$b1, "__esModule", {
        value: true
    });
    exports$b1.E = exports$b1.AssertionError = exports$b1.message = exports$b1.RangeError = exports$b1.TypeError = exports$b1.Error = void 0;
    var assert1 = et;
    var util1 = X;
    var kCode = typeof Symbol === "undefined" ? "_kCode" : Symbol("code");
    var messages = {
    };
    function makeNodeError(Base) {
        return (function(_super) {
            __extends(NodeError, _super);
            function NodeError(key) {
                var args = [];
                for(var _i = 1; _i < arguments.length; _i++){
                    args[_i - 1] = arguments[_i];
                }
                var _this = _super.call(this, message(key, args)) || this;
                _this.code = key;
                _this[kCode] = key;
                _this.name = _super.prototype.name + " [" + _this[kCode] + "]";
                return _this;
            }
            return NodeError;
        })(Base);
    }
    var g4 = typeof globalThis !== "undefined" ? globalThis : _global$3;
    var AssertionError1 = function(_super) {
        __extends(AssertionError, _super);
        function AssertionError(options) {
            var _this = this;
            if (typeof options !== "object" || options === null) {
                throw new exports$b1.TypeError("ERR_INVALID_ARG_TYPE", "options", "object");
            }
            if (options.message) {
                _this = _super.call(this, options.message) || this;
            } else {
                _this = _super.call(this, util1.inspect(options.actual).slice(0, 128) + " " + (options.operator + " " + util1.inspect(options.expected).slice(0, 128))) || this;
            }
            _this.generatedMessage = !options.message;
            _this.name = "AssertionError [ERR_ASSERTION]";
            _this.code = "ERR_ASSERTION";
            _this.actual = options.actual;
            _this.expected = options.expected;
            _this.operator = options.operator;
            exports$b1.Error.captureStackTrace(_this, options.stackStartFunction);
            return _this;
        }
        return AssertionError;
    }(g4.Error);
    exports$b1.AssertionError = AssertionError1;
    function message(key, args) {
        assert1.strictEqual(typeof key, "string");
        var msg = messages[key];
        assert1(msg, "An invalid error message key was used: " + key + ".");
        var fmt;
        if (typeof msg === "function") {
            fmt = msg;
        } else {
            fmt = util1.format;
            if (args === undefined || args.length === 0) return msg;
            args.unshift(msg);
        }
        return String(fmt.apply(null, args));
    }
    exports$b1.message = message;
    function E6(sym, val) {
        messages[sym] = typeof val === "function" ? val : String(val);
    }
    exports$b1.E = E6;
    exports$b1.Error = makeNodeError(g4.Error);
    exports$b1.TypeError = makeNodeError(g4.TypeError);
    exports$b1.RangeError = makeNodeError(g4.RangeError);
    E6("ERR_ARG_NOT_ITERABLE", "%s must be iterable");
    E6("ERR_ASSERTION", "%s");
    E6("ERR_BUFFER_OUT_OF_BOUNDS", bufferOutOfBounds);
    E6("ERR_CHILD_CLOSED_BEFORE_REPLY", "Child closed before reply received");
    E6("ERR_CONSOLE_WRITABLE_STREAM", "Console expects a writable stream instance for %s");
    E6("ERR_CPU_USAGE", "Unable to obtain cpu usage %s");
    E6("ERR_DNS_SET_SERVERS_FAILED", function(err, servers) {
        return "c-ares failed to set servers: \"" + err + "\" [" + servers + "]";
    });
    E6("ERR_FALSY_VALUE_REJECTION", "Promise was rejected with falsy value");
    E6("ERR_ENCODING_NOT_SUPPORTED", function(enc) {
        return "The \"" + enc + "\" encoding is not supported";
    });
    E6("ERR_ENCODING_INVALID_ENCODED_DATA", function(enc) {
        return "The encoded data was not valid for encoding " + enc;
    });
    E6("ERR_HTTP_HEADERS_SENT", "Cannot render headers after they are sent to the client");
    E6("ERR_HTTP_INVALID_STATUS_CODE", "Invalid status code: %s");
    E6("ERR_HTTP_TRAILER_INVALID", "Trailers are invalid with this transfer encoding");
    E6("ERR_INDEX_OUT_OF_RANGE", "Index out of range");
    E6("ERR_INVALID_ARG_TYPE", invalidArgType);
    E6("ERR_INVALID_ARRAY_LENGTH", function(name, len, actual) {
        assert1.strictEqual(typeof actual, "number");
        return "The array \"" + name + "\" (length " + actual + ") must be of length " + len + ".";
    });
    E6("ERR_INVALID_BUFFER_SIZE", "Buffer size must be a multiple of %s");
    E6("ERR_INVALID_CALLBACK", "Callback must be a function");
    E6("ERR_INVALID_CHAR", "Invalid character in %s");
    E6("ERR_INVALID_CURSOR_POS", "Cannot set cursor row without setting its column");
    E6("ERR_INVALID_FD", "\"fd\" must be a positive integer: %s");
    E6("ERR_INVALID_FILE_URL_HOST", "File URL host must be \"localhost\" or empty on %s");
    E6("ERR_INVALID_FILE_URL_PATH", "File URL path %s");
    E6("ERR_INVALID_HANDLE_TYPE", "This handle type cannot be sent");
    E6("ERR_INVALID_IP_ADDRESS", "Invalid IP address: %s");
    E6("ERR_INVALID_OPT_VALUE", function(name, value) {
        return "The value \"" + String(value) + "\" is invalid for option \"" + name + "\"";
    });
    E6("ERR_INVALID_OPT_VALUE_ENCODING", function(value) {
        return "The value \"" + String(value) + "\" is invalid for option \"encoding\"";
    });
    E6("ERR_INVALID_REPL_EVAL_CONFIG", "Cannot specify both \"breakEvalOnSigint\" and \"eval\" for REPL");
    E6("ERR_INVALID_SYNC_FORK_INPUT", "Asynchronous forks do not support Buffer, Uint8Array or string input: %s");
    E6("ERR_INVALID_THIS", "Value of \"this\" must be of type %s");
    E6("ERR_INVALID_TUPLE", "%s must be an iterable %s tuple");
    E6("ERR_INVALID_URL", "Invalid URL: %s");
    E6("ERR_INVALID_URL_SCHEME", function(expected) {
        return "The URL must be " + oneOf(expected, "scheme");
    });
    E6("ERR_IPC_CHANNEL_CLOSED", "Channel closed");
    E6("ERR_IPC_DISCONNECTED", "IPC channel is already disconnected");
    E6("ERR_IPC_ONE_PIPE", "Child process can have only one IPC pipe");
    E6("ERR_IPC_SYNC_FORK", "IPC cannot be used with synchronous forks");
    E6("ERR_MISSING_ARGS", missingArgs);
    E6("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    E6("ERR_NAPI_CONS_FUNCTION", "Constructor must be a function");
    E6("ERR_NAPI_CONS_PROTOTYPE_OBJECT", "Constructor.prototype must be an object");
    E6("ERR_NO_CRYPTO", "Node.js is not compiled with OpenSSL crypto support");
    E6("ERR_NO_LONGER_SUPPORTED", "%s is no longer supported");
    E6("ERR_PARSE_HISTORY_DATA", "Could not parse history data in %s");
    E6("ERR_SOCKET_ALREADY_BOUND", "Socket is already bound");
    E6("ERR_SOCKET_BAD_PORT", "Port should be > 0 and < 65536");
    E6("ERR_SOCKET_BAD_TYPE", "Bad socket type specified. Valid types are: udp4, udp6");
    E6("ERR_SOCKET_CANNOT_SEND", "Unable to send data");
    E6("ERR_SOCKET_CLOSED", "Socket is closed");
    E6("ERR_SOCKET_DGRAM_NOT_RUNNING", "Not running");
    E6("ERR_STDERR_CLOSE", "process.stderr cannot be closed");
    E6("ERR_STDOUT_CLOSE", "process.stdout cannot be closed");
    E6("ERR_STREAM_WRAP", "Stream has StringDecoder set or is in objectMode");
    E6("ERR_TLS_CERT_ALTNAME_INVALID", "Hostname/IP does not match certificate's altnames: %s");
    E6("ERR_TLS_DH_PARAM_SIZE", function(size) {
        return "DH parameter size " + size + " is less than 2048";
    });
    E6("ERR_TLS_HANDSHAKE_TIMEOUT", "TLS handshake timeout");
    E6("ERR_TLS_RENEGOTIATION_FAILED", "Failed to renegotiate");
    E6("ERR_TLS_REQUIRED_SERVER_NAME", "\"servername\" is required parameter for Server.addContext");
    E6("ERR_TLS_SESSION_ATTACK", "TSL session renegotiation attack detected");
    E6("ERR_TRANSFORM_ALREADY_TRANSFORMING", "Calling transform done when still transforming");
    E6("ERR_TRANSFORM_WITH_LENGTH_0", "Calling transform done when writableState.length != 0");
    E6("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s");
    E6("ERR_UNKNOWN_SIGNAL", "Unknown signal: %s");
    E6("ERR_UNKNOWN_STDIN_TYPE", "Unknown stdin file type");
    E6("ERR_UNKNOWN_STREAM_TYPE", "Unknown stream file type");
    E6("ERR_V8BREAKITERATOR", "Full ICU data not installed. " + "See https://github.com/nodejs/node/wiki/Intl");
    function invalidArgType(name, expected, actual) {
        assert1(name, "name is required");
        var determiner;
        if (expected.includes("not ")) {
            determiner = "must not be";
            expected = expected.split("not ")[1];
        } else {
            determiner = "must be";
        }
        var msg;
        if (Array.isArray(name)) {
            var names = name.map(function(val) {
                return "\"" + val + "\"";
            }).join(", ");
            msg = "The " + names + " arguments " + determiner + " " + oneOf(expected, "type");
        } else if (name.includes(" argument")) {
            msg = "The " + name + " " + determiner + " " + oneOf(expected, "type");
        } else {
            var type8 = name.includes(".") ? "property" : "argument";
            msg = "The \"" + name + "\" " + type8 + " " + determiner + " " + oneOf(expected, "type");
        }
        if (arguments.length >= 3) {
            msg += ". Received type " + (actual !== null ? typeof actual : "null");
        }
        return msg;
    }
    function missingArgs() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        assert1(args.length > 0, "At least one arg needs to be specified");
        var msg = "The ";
        var len = args.length;
        args = args.map(function(a35) {
            return "\"" + a35 + "\"";
        });
        switch(len){
            case 1:
                msg += args[0] + " argument";
                break;
            case 2:
                msg += args[0] + " and " + args[1] + " arguments";
                break;
            default:
                msg += args.slice(0, len - 1).join(", ");
                msg += ", and " + args[len - 1] + " arguments";
                break;
        }
        return msg + " must be specified";
    }
    function oneOf(expected, thing) {
        assert1(expected, "expected is required");
        assert1(typeof thing === "string", "thing is required");
        if (Array.isArray(expected)) {
            var len = expected.length;
            assert1(len > 0, "At least one expected value needs to be specified");
            expected = expected.map(function(i122) {
                return String(i122);
            });
            if (len > 2) {
                return "one of " + thing + " " + expected.slice(0, len - 1).join(", ") + ", or " + expected[len - 1];
            } else if (len === 2) {
                return "one of " + thing + " " + expected[0] + " or " + expected[1];
            } else {
                return "of " + thing + " " + expected[0];
            }
        } else {
            return "of " + thing + " " + String(expected);
        }
    }
    function bufferOutOfBounds(name, isWriting) {
        if (isWriting) {
            return "Attempt to write outside buffer bounds";
        } else {
            return "\"" + name + "\" is outside of buffer bounds";
        }
    }
    return exports$b1;
}
var exports$a1 = {
}, _dewExec$a1 = false;
function dew$a1() {
    if (_dewExec$a1) return exports$a1;
    _dewExec$a1 = true;
    Object.defineProperty(exports$a1, "__esModule", {
        value: true
    });
    exports$a1.strToEncoding = exports$a1.assertEncoding = exports$a1.ENCODING_UTF8 = void 0;
    var buffer_1 = dew$c1();
    var errors = dew$b1();
    exports$a1.ENCODING_UTF8 = "utf8";
    function assertEncoding(encoding) {
        if (encoding && !buffer_1.Buffer.isEncoding(encoding)) throw new errors.TypeError("ERR_INVALID_OPT_VALUE_ENCODING", encoding);
    }
    exports$a1.assertEncoding = assertEncoding;
    function strToEncoding(str, encoding) {
        if (!encoding || encoding === exports$a1.ENCODING_UTF8) return str;
        if (encoding === "buffer") return new buffer_1.Buffer(str);
        return new buffer_1.Buffer(str).toString(encoding);
    }
    exports$a1.strToEncoding = strToEncoding;
    return exports$a1;
}
var exports$91 = {
}, _dewExec$91 = false;
function dew$91() {
    if (_dewExec$91) return exports$91;
    _dewExec$91 = true;
    Object.defineProperty(exports$91, "__esModule", {
        value: true
    });
    exports$91.Dirent = void 0;
    var constants_1 = dew$f1();
    var encoding_1 = dew$a1();
    var S_IFMT = constants_1.constants.S_IFMT, S_IFDIR = constants_1.constants.S_IFDIR, S_IFREG = constants_1.constants.S_IFREG, S_IFBLK = constants_1.constants.S_IFBLK, S_IFCHR = constants_1.constants.S_IFCHR, S_IFLNK = constants_1.constants.S_IFLNK, S_IFIFO = constants_1.constants.S_IFIFO, S_IFSOCK = constants_1.constants.S_IFSOCK;
    var Dirent1 = function() {
        function Dirent2() {
            this.name = "";
            this.mode = 0;
        }
        Dirent2.build = function(link1, encoding) {
            var dirent = new Dirent2();
            var mode = link1.getNode().mode;
            dirent.name = (0, encoding_1.strToEncoding)(link1.getName(), encoding);
            dirent.mode = mode;
            return dirent;
        };
        Dirent2.prototype._checkModeProperty = function(property) {
            return (this.mode & S_IFMT) === property;
        };
        Dirent2.prototype.isDirectory = function() {
            return this._checkModeProperty(S_IFDIR);
        };
        Dirent2.prototype.isFile = function() {
            return this._checkModeProperty(S_IFREG);
        };
        Dirent2.prototype.isBlockDevice = function() {
            return this._checkModeProperty(S_IFBLK);
        };
        Dirent2.prototype.isCharacterDevice = function() {
            return this._checkModeProperty(S_IFCHR);
        };
        Dirent2.prototype.isSymbolicLink = function() {
            return this._checkModeProperty(S_IFLNK);
        };
        Dirent2.prototype.isFIFO = function() {
            return this._checkModeProperty(S_IFIFO);
        };
        Dirent2.prototype.isSocket = function() {
            return this._checkModeProperty(S_IFSOCK);
        };
        return Dirent2;
    }();
    exports$91.Dirent = Dirent1;
    exports$91.default = Dirent1;
    return exports$91;
}
var exports$81 = {
}, _dewExec$81 = false;
var _global$21 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$81() {
    if (_dewExec$81) return exports$81;
    _dewExec$81 = true;
    var process$1 = process1;
    Object.defineProperty(exports$81, "__esModule", {
        value: true
    });
    var _setImmediate;
    if (typeof process$1.nextTick === "function") _setImmediate = process$1.nextTick.bind(typeof globalThis !== "undefined" ? globalThis : _global$21);
    else _setImmediate = setTimeout.bind(typeof globalThis !== "undefined" ? globalThis : _global$21);
    exports$81.default = _setImmediate;
    return exports$81;
}
var exports$71 = {
}, _dewExec$71 = false;
function dew$71() {
    if (_dewExec$71) return exports$71;
    _dewExec$71 = true;
    var process$1 = process1;
    Object.defineProperty(exports$71, "__esModule", {
        value: true
    });
    exports$71.createProcess = void 0;
    var maybeReturnProcess = function() {
        if (typeof process$1 !== "undefined") {
            return process$1;
        }
        try {
            return process1;
        } catch (_a) {
            return undefined;
        }
    };
    function createProcess() {
        var p23 = maybeReturnProcess() || {
        };
        if (!p23.getuid) p23.getuid = function() {
            return 0;
        };
        if (!p23.getgid) p23.getgid = function() {
            return 0;
        };
        if (!p23.cwd) p23.cwd = function() {
            return "/";
        };
        if (!p23.nextTick) p23.nextTick = dew$81().default;
        if (!p23.emitWarning) p23.emitWarning = function(message, type9) {
            console.warn("" + type9 + (type9 ? ": " : "") + message);
        };
        if (!p23.env) p23.env = {
        };
        return p23;
    }
    exports$71.createProcess = createProcess;
    exports$71.default = createProcess();
    return exports$71;
}
var exports$61 = {
}, _dewExec$61 = false;
function dew$61() {
    if (_dewExec$61) return exports$61;
    _dewExec$61 = true;
    var __extends = exports$61 && exports$61.__extends || function() {
        var extendStatics = function(d23, b22) {
            extendStatics = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(d19, b20) {
                d19.__proto__ = b20;
            } || function(d20, b21) {
                for(var p24 in b21)if (Object.prototype.hasOwnProperty.call(b21, p24)) d20[p24] = b21[p24];
            };
            return extendStatics(d23, b22);
        };
        return function(d24, b23) {
            if (typeof b23 !== "function" && b23 !== null) throw new TypeError("Class extends value " + String(b23) + " is not a constructor or null");
            extendStatics(d24, b23);
            function __() {
                this.constructor = d24;
            }
            d24.prototype = b23 === null ? Object.create(b23) : (__.prototype = b23.prototype, new __());
        };
    }();
    Object.defineProperty(exports$61, "__esModule", {
        value: true
    });
    exports$61.File = exports$61.Link = exports$61.Node = exports$61.SEP = void 0;
    var process_1 = dew$71();
    var buffer_1 = dew$c1();
    var constants_1 = dew$f1();
    var events_1 = y;
    var Stats_1 = dew$d1();
    var S_IFMT = constants_1.constants.S_IFMT, S_IFDIR = constants_1.constants.S_IFDIR, S_IFREG = constants_1.constants.S_IFREG, S_IFLNK = constants_1.constants.S_IFLNK, O_APPEND = constants_1.constants.O_APPEND;
    exports$61.SEP = "/";
    var Node1 = function(_super) {
        __extends(Node, _super);
        function Node(ino, perm) {
            if (perm === void 0) {
                perm = 438;
            }
            var _this = _super.call(this) || this;
            _this.uid = process_1.default.getuid();
            _this.gid = process_1.default.getgid();
            _this.atime = new Date();
            _this.mtime = new Date();
            _this.ctime = new Date();
            _this.perm = 438;
            _this.mode = S_IFREG;
            _this.nlink = 1;
            _this.perm = perm;
            _this.mode |= perm;
            _this.ino = ino;
            return _this;
        }
        Node.prototype.getString = function(encoding) {
            if (encoding === void 0) {
                encoding = "utf8";
            }
            return this.getBuffer().toString(encoding);
        };
        Node.prototype.setString = function(str) {
            this.buf = (0, buffer_1.bufferFrom)(str, "utf8");
            this.touch();
        };
        Node.prototype.getBuffer = function() {
            if (!this.buf) this.setBuffer((0, buffer_1.bufferAllocUnsafe)(0));
            return (0, buffer_1.bufferFrom)(this.buf);
        };
        Node.prototype.setBuffer = function(buf) {
            this.buf = (0, buffer_1.bufferFrom)(buf);
            this.touch();
        };
        Node.prototype.getSize = function() {
            return this.buf ? this.buf.length : 0;
        };
        Node.prototype.setModeProperty = function(property) {
            this.mode = this.mode & ~S_IFMT | property;
        };
        Node.prototype.setIsFile = function() {
            this.setModeProperty(S_IFREG);
        };
        Node.prototype.setIsDirectory = function() {
            this.setModeProperty(S_IFDIR);
        };
        Node.prototype.setIsSymlink = function() {
            this.setModeProperty(S_IFLNK);
        };
        Node.prototype.isFile = function() {
            return (this.mode & S_IFMT) === S_IFREG;
        };
        Node.prototype.isDirectory = function() {
            return (this.mode & S_IFMT) === S_IFDIR;
        };
        Node.prototype.isSymlink = function() {
            return (this.mode & S_IFMT) === S_IFLNK;
        };
        Node.prototype.makeSymlink = function(steps) {
            this.symlink = steps;
            this.setIsSymlink();
        };
        Node.prototype.write = function(buf, off1, len, pos) {
            if (off1 === void 0) {
                off1 = 0;
            }
            if (len === void 0) {
                len = buf.length;
            }
            if (pos === void 0) {
                pos = 0;
            }
            if (!this.buf) this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
            if (pos + len > this.buf.length) {
                var newBuf = (0, buffer_1.bufferAllocUnsafe)(pos + len);
                this.buf.copy(newBuf, 0, 0, this.buf.length);
                this.buf = newBuf;
            }
            buf.copy(this.buf, pos, off1, off1 + len);
            this.touch();
            return len;
        };
        Node.prototype.read = function(buf, off2, len, pos) {
            if (off2 === void 0) {
                off2 = 0;
            }
            if (len === void 0) {
                len = buf.byteLength;
            }
            if (pos === void 0) {
                pos = 0;
            }
            if (!this.buf) this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
            var actualLen = len;
            if (actualLen > buf.byteLength) {
                actualLen = buf.byteLength;
            }
            if (actualLen + pos > this.buf.length) {
                actualLen = this.buf.length - pos;
            }
            this.buf.copy(buf, off2, pos, pos + actualLen);
            return actualLen;
        };
        Node.prototype.truncate = function(len) {
            if (len === void 0) {
                len = 0;
            }
            if (!len) this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
            else {
                if (!this.buf) this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
                if (len <= this.buf.length) {
                    this.buf = this.buf.slice(0, len);
                } else {
                    var buf = (0, buffer_1.bufferAllocUnsafe)(0);
                    this.buf.copy(buf);
                    buf.fill(0, len);
                }
            }
            this.touch();
        };
        Node.prototype.chmod = function(perm) {
            this.perm = perm;
            this.mode = this.mode & ~511 | perm;
            this.touch();
        };
        Node.prototype.chown = function(uid, gid) {
            this.uid = uid;
            this.gid = gid;
            this.touch();
        };
        Node.prototype.touch = function() {
            this.mtime = new Date();
            this.emit("change", this);
        };
        Node.prototype.canRead = function(uid, gid) {
            if (uid === void 0) {
                uid = process_1.default.getuid();
            }
            if (gid === void 0) {
                gid = process_1.default.getgid();
            }
            if (this.perm & 4) {
                return true;
            }
            if (gid === this.gid) {
                if (this.perm & 32) {
                    return true;
                }
            }
            if (uid === this.uid) {
                if (this.perm & 256) {
                    return true;
                }
            }
            return false;
        };
        Node.prototype.canWrite = function(uid, gid) {
            if (uid === void 0) {
                uid = process_1.default.getuid();
            }
            if (gid === void 0) {
                gid = process_1.default.getgid();
            }
            if (this.perm & 2) {
                return true;
            }
            if (gid === this.gid) {
                if (this.perm & 16) {
                    return true;
                }
            }
            if (uid === this.uid) {
                if (this.perm & 128) {
                    return true;
                }
            }
            return false;
        };
        Node.prototype.del = function() {
            this.emit("delete", this);
        };
        Node.prototype.toJSON = function() {
            return {
                ino: this.ino,
                uid: this.uid,
                gid: this.gid,
                atime: this.atime.getTime(),
                mtime: this.mtime.getTime(),
                ctime: this.ctime.getTime(),
                perm: this.perm,
                mode: this.mode,
                nlink: this.nlink,
                symlink: this.symlink,
                data: this.getString()
            };
        };
        return Node;
    }(events_1.EventEmitter);
    exports$61.Node = Node1;
    var Link1 = function(_super) {
        __extends(Link, _super);
        function Link(vol1, parent, name) {
            var _this = _super.call(this) || this;
            _this.children = {
            };
            _this.steps = [];
            _this.ino = 0;
            _this.length = 0;
            _this.vol = vol1;
            _this.parent = parent;
            _this.steps = parent ? parent.steps.concat([
                name
            ]) : [
                name
            ];
            return _this;
        }
        Link.prototype.setNode = function(node) {
            this.node = node;
            this.ino = node.ino;
        };
        Link.prototype.getNode = function() {
            return this.node;
        };
        Link.prototype.createChild = function(name, node) {
            if (node === void 0) {
                node = this.vol.createNode();
            }
            var link2 = new Link(this.vol, this, name);
            link2.setNode(node);
            if (node.isDirectory()) ;
            this.setChild(name, link2);
            return link2;
        };
        Link.prototype.setChild = function(name, link3) {
            if (link3 === void 0) {
                link3 = new Link(this.vol, this, name);
            }
            this.children[name] = link3;
            link3.parent = this;
            this.length++;
            this.emit("child:add", link3, this);
            return link3;
        };
        Link.prototype.deleteChild = function(link4) {
            delete this.children[link4.getName()];
            this.length--;
            this.emit("child:delete", link4, this);
        };
        Link.prototype.getChild = function(name) {
            if (Object.hasOwnProperty.call(this.children, name)) {
                return this.children[name];
            }
        };
        Link.prototype.getPath = function() {
            return this.steps.join(exports$61.SEP);
        };
        Link.prototype.getName = function() {
            return this.steps[this.steps.length - 1];
        };
        Link.prototype.walk = function(steps, stop, i123) {
            if (stop === void 0) {
                stop = steps.length;
            }
            if (i123 === void 0) {
                i123 = 0;
            }
            if (i123 >= steps.length) return this;
            if (i123 >= stop) return this;
            var step = steps[i123];
            var link5 = this.getChild(step);
            if (!link5) return null;
            return link5.walk(steps, stop, i123 + 1);
        };
        Link.prototype.toJSON = function() {
            return {
                steps: this.steps,
                ino: this.ino,
                children: Object.keys(this.children)
            };
        };
        return Link;
    }(events_1.EventEmitter);
    exports$61.Link = Link1;
    var File1 = function() {
        function File(link6, node, flags, fd) {
            this.position = 0;
            this.link = link6;
            this.node = node;
            this.flags = flags;
            this.fd = fd;
        }
        File.prototype.getString = function(encoding) {
            return this.node.getString();
        };
        File.prototype.setString = function(str) {
            this.node.setString(str);
        };
        File.prototype.getBuffer = function() {
            return this.node.getBuffer();
        };
        File.prototype.setBuffer = function(buf) {
            this.node.setBuffer(buf);
        };
        File.prototype.getSize = function() {
            return this.node.getSize();
        };
        File.prototype.truncate = function(len) {
            this.node.truncate(len);
        };
        File.prototype.seekTo = function(position) {
            this.position = position;
        };
        File.prototype.stats = function() {
            return Stats_1.default.build(this.node);
        };
        File.prototype.write = function(buf, offset, length, position) {
            if (offset === void 0) {
                offset = 0;
            }
            if (length === void 0) {
                length = buf.length;
            }
            if (typeof position !== "number") position = this.position;
            if (this.flags & O_APPEND) position = this.getSize();
            var bytes = this.node.write(buf, offset, length, position);
            this.position = position + bytes;
            return bytes;
        };
        File.prototype.read = function(buf, offset, length, position) {
            if (offset === void 0) {
                offset = 0;
            }
            if (length === void 0) {
                length = buf.byteLength;
            }
            if (typeof position !== "number") position = this.position;
            var bytes = this.node.read(buf, offset, length, position);
            this.position = position + bytes;
            return bytes;
        };
        File.prototype.chmod = function(perm) {
            this.node.chmod(perm);
        };
        File.prototype.chown = function(uid, gid) {
            this.node.chown(uid, gid);
        };
        return File;
    }();
    exports$61.File = File1;
    return exports$61;
}
var exports$51 = {
}, _dewExec$51 = false;
var _global$11 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$51() {
    if (_dewExec$51) return exports$51;
    _dewExec$51 = true;
    Object.defineProperty(exports$51, "__esModule", {
        value: true
    });
    function setTimeoutUnref(callback, time, args) {
        var ref = setTimeout.apply(typeof globalThis !== "undefined" ? globalThis : _global$11, arguments);
        if (ref && typeof ref === "object" && typeof ref.unref === "function") ref.unref();
        return ref;
    }
    exports$51.default = setTimeoutUnref;
    return exports$51;
}
var exports$41 = {
}, _dewExec$41 = false;
function dew$41() {
    if (_dewExec$41) return exports$41;
    _dewExec$41 = true;
    var __spreadArray = exports$41 && exports$41.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2) for(var i124 = 0, l26 = from.length, ar; i124 < l26; i124++){
            if (ar || !(i124 in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i124);
                ar[i124] = from[i124];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports$41, "__esModule", {
        value: true
    });
    exports$41.FileHandle = void 0;
    function promisify1(vol2, fn, getResult) {
        if (getResult === void 0) {
            getResult = function(input) {
                return input;
            };
        }
        return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return new Promise(function(resolve9, reject) {
                vol2[fn].bind(vol2).apply(void 0, __spreadArray(__spreadArray([], args, false), [
                    function(error, result) {
                        if (error) return reject(error);
                        return resolve9(getResult(result));
                    }
                ], false));
            });
        };
    }
    var FileHandle1 = function() {
        function FileHandle(vol3, fd) {
            this.vol = vol3;
            this.fd = fd;
        }
        FileHandle.prototype.appendFile = function(data, options) {
            return promisify1(this.vol, "appendFile")(this.fd, data, options);
        };
        FileHandle.prototype.chmod = function(mode) {
            return promisify1(this.vol, "fchmod")(this.fd, mode);
        };
        FileHandle.prototype.chown = function(uid, gid) {
            return promisify1(this.vol, "fchown")(this.fd, uid, gid);
        };
        FileHandle.prototype.close = function() {
            return promisify1(this.vol, "close")(this.fd);
        };
        FileHandle.prototype.datasync = function() {
            return promisify1(this.vol, "fdatasync")(this.fd);
        };
        FileHandle.prototype.read = function(buffer11, offset, length, position) {
            return promisify1(this.vol, "read", function(bytesRead) {
                return {
                    bytesRead: bytesRead,
                    buffer: buffer11
                };
            })(this.fd, buffer11, offset, length, position);
        };
        FileHandle.prototype.readFile = function(options) {
            return promisify1(this.vol, "readFile")(this.fd, options);
        };
        FileHandle.prototype.stat = function(options) {
            return promisify1(this.vol, "fstat")(this.fd, options);
        };
        FileHandle.prototype.sync = function() {
            return promisify1(this.vol, "fsync")(this.fd);
        };
        FileHandle.prototype.truncate = function(len) {
            return promisify1(this.vol, "ftruncate")(this.fd, len);
        };
        FileHandle.prototype.utimes = function(atime, mtime) {
            return promisify1(this.vol, "futimes")(this.fd, atime, mtime);
        };
        FileHandle.prototype.write = function(buffer2, offset, length, position) {
            return promisify1(this.vol, "write", function(bytesWritten) {
                return {
                    bytesWritten: bytesWritten,
                    buffer: buffer2
                };
            })(this.fd, buffer2, offset, length, position);
        };
        FileHandle.prototype.writeFile = function(data, options) {
            return promisify1(this.vol, "writeFile")(this.fd, data, options);
        };
        return FileHandle;
    }();
    exports$41.FileHandle = FileHandle1;
    function createPromisesApi(vol4) {
        if (typeof Promise === "undefined") return null;
        return {
            FileHandle: FileHandle1,
            access: function(path11, mode) {
                return promisify1(vol4, "access")(path11, mode);
            },
            appendFile: function(path2, data, options) {
                return promisify1(vol4, "appendFile")(path2 instanceof FileHandle1 ? path2.fd : path2, data, options);
            },
            chmod: function(path3, mode) {
                return promisify1(vol4, "chmod")(path3, mode);
            },
            chown: function(path4, uid, gid) {
                return promisify1(vol4, "chown")(path4, uid, gid);
            },
            copyFile: function(src, dest, flags) {
                return promisify1(vol4, "copyFile")(src, dest, flags);
            },
            lchmod: function(path5, mode) {
                return promisify1(vol4, "lchmod")(path5, mode);
            },
            lchown: function(path6, uid, gid) {
                return promisify1(vol4, "lchown")(path6, uid, gid);
            },
            link: function(existingPath, newPath) {
                return promisify1(vol4, "link")(existingPath, newPath);
            },
            lstat: function(path7, options) {
                return promisify1(vol4, "lstat")(path7, options);
            },
            mkdir: function(path8, options) {
                return promisify1(vol4, "mkdir")(path8, options);
            },
            mkdtemp: function(prefix, options) {
                return promisify1(vol4, "mkdtemp")(prefix, options);
            },
            open: function(path9, flags, mode) {
                return promisify1(vol4, "open", function(fd) {
                    return new FileHandle1(vol4, fd);
                })(path9, flags, mode);
            },
            readdir: function(path10, options) {
                return promisify1(vol4, "readdir")(path10, options);
            },
            readFile: function(id, options) {
                return promisify1(vol4, "readFile")(id instanceof FileHandle1 ? id.fd : id, options);
            },
            readlink: function(path11, options) {
                return promisify1(vol4, "readlink")(path11, options);
            },
            realpath: function(path12, options) {
                return promisify1(vol4, "realpath")(path12, options);
            },
            rename: function(oldPath, newPath) {
                return promisify1(vol4, "rename")(oldPath, newPath);
            },
            rmdir: function(path13) {
                return promisify1(vol4, "rmdir")(path13);
            },
            stat: function(path14, options) {
                return promisify1(vol4, "stat")(path14, options);
            },
            symlink: function(target, path15, type10) {
                return promisify1(vol4, "symlink")(target, path15, type10);
            },
            truncate: function(path16, len) {
                return promisify1(vol4, "truncate")(path16, len);
            },
            unlink: function(path17) {
                return promisify1(vol4, "unlink")(path17);
            },
            utimes: function(path18, atime, mtime) {
                return promisify1(vol4, "utimes")(path18, atime, mtime);
            },
            writeFile: function(id, data, options) {
                return promisify1(vol4, "writeFile")(id instanceof FileHandle1 ? id.fd : id, data, options);
            }
        };
    }
    exports$41.default = createPromisesApi;
    return exports$41;
}
var exports$31 = {
}, _dewExec$31 = false;
function dew$31() {
    if (_dewExec$31) return exports$31;
    _dewExec$31 = true;
    var process$1 = process1;
    Object.defineProperty(exports$31, "__esModule", {
        value: true
    });
    exports$31.unixify = unixify;
    exports$31.correctPath = correctPath;
    var isWin = process$1.platform === "win32";
    function removeTrailingSeparator(str) {
        var i125 = str.length - 1;
        if (i125 < 2) {
            return str;
        }
        while(isSeparator(str, i125)){
            i125--;
        }
        return str.substr(0, i125 + 1);
    }
    function isSeparator(str, i126) {
        var _char = str[i126];
        return i126 > 0 && (_char === "/" || isWin && _char === "\\");
    }
    function normalizePath(str, stripTrailing) {
        if (typeof str !== "string") {
            throw new TypeError("expected a string");
        }
        str = str.replace(/[\\\/]+/g, "/");
        if (stripTrailing !== false) {
            str = removeTrailingSeparator(str);
        }
        return str;
    }
    function unixify(filepath) {
        var stripTrailing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (isWin) {
            filepath = normalizePath(filepath, stripTrailing);
            return filepath.replace(/^([a-zA-Z]+:|\.\/)/, "");
        }
        return filepath;
    }
    function correctPath(filepath) {
        return unixify(filepath.replace(/^\\\\\?\\.:\\/, "\\"));
    }
    return exports$31;
}
var exports$22 = {
}, _dewExec$22 = false;
var _global3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$22() {
    if (_dewExec$22) return exports$22;
    _dewExec$22 = true;
    var __extends = exports$22 && exports$22.__extends || function() {
        var extendStatics = function(d32, b31) {
            extendStatics = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(d25, b24) {
                d25.__proto__ = b24;
            } || function(d26, b25) {
                for(var p25 in b25)if (Object.prototype.hasOwnProperty.call(b25, p25)) d26[p25] = b25[p25];
            };
            return extendStatics(d32, b31);
        };
        return function(d27, b26) {
            if (typeof b26 !== "function" && b26 !== null) throw new TypeError("Class extends value " + String(b26) + " is not a constructor or null");
            extendStatics(d27, b26);
            function __() {
                this.constructor = d27;
            }
            d27.prototype = b26 === null ? Object.create(b26) : (__.prototype = b26.prototype, new __());
        };
    }();
    var __spreadArray = exports$22 && exports$22.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2) for(var i127 = 0, l27 = from.length, ar; i127 < l27; i127++){
            if (ar || !(i127 in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i127);
                ar[i127] = from[i127];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports$22, "__esModule", {
        value: true
    });
    exports$22.FSWatcher = exports$22.StatWatcher = exports$22.Volume = exports$22.toUnixTimestamp = exports$22.bufferToEncoding = exports$22.dataToBuffer = exports$22.dataToStr = exports$22.pathToSteps = exports$22.filenameToSteps = exports$22.pathToFilename = exports$22.flagsToNumber = exports$22.FLAGS = void 0;
    var pathModule = path;
    var node_1 = dew$61();
    var Stats_1 = dew$d1();
    var Dirent_1 = dew$91();
    var buffer_1 = dew$c1();
    var setImmediate_1 = dew$81();
    var process_1 = dew$71();
    var setTimeoutUnref_1 = dew$51();
    var stream_1 = stream;
    var constants_1 = dew$f1();
    var events_1 = y;
    var encoding_1 = dew$a1();
    var errors = dew$b1();
    var util2 = X;
    var promises_1 = dew$41();
    var resolveCrossPlatform = pathModule.resolve;
    var O_RDONLY = constants_1.constants.O_RDONLY, O_WRONLY = constants_1.constants.O_WRONLY, O_RDWR = constants_1.constants.O_RDWR, O_CREAT = constants_1.constants.O_CREAT, O_EXCL = constants_1.constants.O_EXCL, O_TRUNC = constants_1.constants.O_TRUNC, O_APPEND = constants_1.constants.O_APPEND, O_SYNC = constants_1.constants.O_SYNC, O_DIRECTORY = constants_1.constants.O_DIRECTORY, F_OK1 = constants_1.constants.F_OK, COPYFILE_EXCL = constants_1.constants.COPYFILE_EXCL, COPYFILE_FICLONE_FORCE = constants_1.constants.COPYFILE_FICLONE_FORCE;
    var _a1 = pathModule.posix ? pathModule.posix : pathModule, sep5 = _a1.sep, relative1 = _a1.relative, join1 = _a1.join, dirname1 = _a1.dirname;
    var isWin = process_1.default.platform === "win32";
    var kMinPoolSpace = 128;
    var ERRSTR = {
        PATH_STR: "path must be a string or Buffer",
        FD: "fd must be a file descriptor",
        MODE_INT: "mode must be an int",
        CB: "callback must be a function",
        UID: "uid must be an unsigned int",
        GID: "gid must be an unsigned int",
        LEN: "len must be an integer",
        ATIME: "atime must be an integer",
        MTIME: "mtime must be an integer",
        PREFIX: "filename prefix is required",
        BUFFER: "buffer must be an instance of Buffer or StaticBuffer",
        OFFSET: "offset must be an integer",
        LENGTH: "length must be an integer",
        POSITION: "position must be an integer"
    };
    var ERRSTR_OPTS = function(tipeof) {
        return "Expected options to be either an object or a string, but got " + tipeof + " instead";
    };
    var ENOENT = "ENOENT";
    var EBADF = "EBADF";
    var EINVAL = "EINVAL";
    var EPERM = "EPERM";
    var EPROTO = "EPROTO";
    var EEXIST = "EEXIST";
    var ENOTDIR = "ENOTDIR";
    var EMFILE = "EMFILE";
    var EACCES = "EACCES";
    var EISDIR = "EISDIR";
    var ENOTEMPTY = "ENOTEMPTY";
    var ENOSYS = "ENOSYS";
    function formatError(errorCode, func, path19, path2) {
        if (func === void 0) {
            func = "";
        }
        if (path19 === void 0) {
            path19 = "";
        }
        if (path2 === void 0) {
            path2 = "";
        }
        var pathFormatted = "";
        if (path19) pathFormatted = " '" + path19 + "'";
        if (path2) pathFormatted += " -> '" + path2 + "'";
        switch(errorCode){
            case ENOENT:
                return "ENOENT: no such file or directory, " + func + pathFormatted;
            case EBADF:
                return "EBADF: bad file descriptor, " + func + pathFormatted;
            case EINVAL:
                return "EINVAL: invalid argument, " + func + pathFormatted;
            case EPERM:
                return "EPERM: operation not permitted, " + func + pathFormatted;
            case EPROTO:
                return "EPROTO: protocol error, " + func + pathFormatted;
            case EEXIST:
                return "EEXIST: file already exists, " + func + pathFormatted;
            case ENOTDIR:
                return "ENOTDIR: not a directory, " + func + pathFormatted;
            case EISDIR:
                return "EISDIR: illegal operation on a directory, " + func + pathFormatted;
            case EACCES:
                return "EACCES: permission denied, " + func + pathFormatted;
            case ENOTEMPTY:
                return "ENOTEMPTY: directory not empty, " + func + pathFormatted;
            case EMFILE:
                return "EMFILE: too many open files, " + func + pathFormatted;
            case ENOSYS:
                return "ENOSYS: function not implemented, " + func + pathFormatted;
            default:
                return errorCode + ": error occurred, " + func + pathFormatted;
        }
    }
    function createError(errorCode, func, path20, path2, Constructor) {
        if (func === void 0) {
            func = "";
        }
        if (path20 === void 0) {
            path20 = "";
        }
        if (path2 === void 0) {
            path2 = "";
        }
        if (Constructor === void 0) {
            Constructor = Error;
        }
        var error = new Constructor(formatError(errorCode, func, path20, path2));
        error.code = errorCode;
        return error;
    }
    var FLAGS1;
    (function(FLAGS) {
        FLAGS[FLAGS["r"] = O_RDONLY] = "r";
        FLAGS[FLAGS["r+"] = O_RDWR] = "r+";
        FLAGS[FLAGS["rs"] = O_RDONLY | O_SYNC] = "rs";
        FLAGS[FLAGS["sr"] = FLAGS.rs] = "sr";
        FLAGS[FLAGS["rs+"] = O_RDWR | O_SYNC] = "rs+";
        FLAGS[FLAGS["sr+"] = FLAGS["rs+"]] = "sr+";
        FLAGS[FLAGS["w"] = O_WRONLY | O_CREAT | O_TRUNC] = "w";
        FLAGS[FLAGS["wx"] = O_WRONLY | O_CREAT | O_TRUNC | O_EXCL] = "wx";
        FLAGS[FLAGS["xw"] = FLAGS.wx] = "xw";
        FLAGS[FLAGS["w+"] = O_RDWR | O_CREAT | O_TRUNC] = "w+";
        FLAGS[FLAGS["wx+"] = O_RDWR | O_CREAT | O_TRUNC | O_EXCL] = "wx+";
        FLAGS[FLAGS["xw+"] = FLAGS["wx+"]] = "xw+";
        FLAGS[FLAGS["a"] = O_WRONLY | O_APPEND | O_CREAT] = "a";
        FLAGS[FLAGS["ax"] = O_WRONLY | O_APPEND | O_CREAT | O_EXCL] = "ax";
        FLAGS[FLAGS["xa"] = FLAGS.ax] = "xa";
        FLAGS[FLAGS["a+"] = O_RDWR | O_APPEND | O_CREAT] = "a+";
        FLAGS[FLAGS["ax+"] = O_RDWR | O_APPEND | O_CREAT | O_EXCL] = "ax+";
        FLAGS[FLAGS["xa+"] = FLAGS["ax+"]] = "xa+";
    })(FLAGS1 = exports$22.FLAGS || (exports$22.FLAGS = {
    }));
    function flagsToNumber(flags) {
        if (typeof flags === "number") return flags;
        if (typeof flags === "string") {
            var flagsNum = FLAGS1[flags];
            if (typeof flagsNum !== "undefined") return flagsNum;
        }
        throw new errors.TypeError("ERR_INVALID_OPT_VALUE", "flags", flags);
    }
    exports$22.flagsToNumber = flagsToNumber;
    function getOptions(defaults, options) {
        var opts;
        if (!options) return defaults;
        else {
            var tipeof = typeof options;
            switch(tipeof){
                case "string":
                    opts = Object.assign({
                    }, defaults, {
                        encoding: options
                    });
                    break;
                case "object":
                    opts = Object.assign({
                    }, defaults, options);
                    break;
                default:
                    throw TypeError(ERRSTR_OPTS(tipeof));
            }
        }
        if (opts.encoding !== "buffer") (0, encoding_1.assertEncoding)(opts.encoding);
        return opts;
    }
    function optsGenerator(defaults) {
        return function(options) {
            return getOptions(defaults, options);
        };
    }
    function validateCallback(callback) {
        if (typeof callback !== "function") throw TypeError(ERRSTR.CB);
        return callback;
    }
    function optsAndCbGenerator(getOpts) {
        return function(options, callback) {
            return typeof options === "function" ? [
                getOpts(),
                options
            ] : [
                getOpts(options),
                validateCallback(callback)
            ];
        };
    }
    var optsDefaults = {
        encoding: "utf8"
    };
    var getDefaultOpts = optsGenerator(optsDefaults);
    var getDefaultOptsAndCb = optsAndCbGenerator(getDefaultOpts);
    var readFileOptsDefaults = {
        flag: "r"
    };
    var getReadFileOptions = optsGenerator(readFileOptsDefaults);
    var writeFileDefaults = {
        encoding: "utf8",
        mode: 438,
        flag: FLAGS1[FLAGS1.w]
    };
    var getWriteFileOptions = optsGenerator(writeFileDefaults);
    var appendFileDefaults = {
        encoding: "utf8",
        mode: 438,
        flag: FLAGS1[FLAGS1.a]
    };
    var getAppendFileOpts = optsGenerator(appendFileDefaults);
    var getAppendFileOptsAndCb = optsAndCbGenerator(getAppendFileOpts);
    var realpathDefaults = optsDefaults;
    var getRealpathOptions = optsGenerator(realpathDefaults);
    var getRealpathOptsAndCb = optsAndCbGenerator(getRealpathOptions);
    var mkdirDefaults = {
        mode: 511,
        recursive: false
    };
    var getMkdirOptions = function(options) {
        if (typeof options === "number") return Object.assign({
        }, mkdirDefaults, {
            mode: options
        });
        return Object.assign({
        }, mkdirDefaults, options);
    };
    var rmdirDefaults = {
        recursive: false
    };
    var getRmdirOptions = function(options) {
        return Object.assign({
        }, rmdirDefaults, options);
    };
    var readdirDefaults = {
        encoding: "utf8",
        withFileTypes: false
    };
    var getReaddirOptions = optsGenerator(readdirDefaults);
    var getReaddirOptsAndCb = optsAndCbGenerator(getReaddirOptions);
    var statDefaults = {
        bigint: false
    };
    var getStatOptions = function(options) {
        if (options === void 0) {
            options = {
            };
        }
        return Object.assign({
        }, statDefaults, options);
    };
    var getStatOptsAndCb = function(options, callback) {
        return typeof options === "function" ? [
            getStatOptions(),
            options
        ] : [
            getStatOptions(options),
            validateCallback(callback)
        ];
    };
    function getPathFromURLPosix1(url) {
        if (url.hostname !== "") {
            throw new errors.TypeError("ERR_INVALID_FILE_URL_HOST", process_1.default.platform);
        }
        var pathname = url.pathname;
        for(var n81 = 0; n81 < pathname.length; n81++){
            if (pathname[n81] === "%") {
                var third = pathname.codePointAt(n81 + 2) | 32;
                if (pathname[n81 + 1] === "2" && third === 102) {
                    throw new errors.TypeError("ERR_INVALID_FILE_URL_PATH", "must not include encoded / characters");
                }
            }
        }
        return decodeURIComponent(pathname);
    }
    function pathToFilename(path21) {
        if (typeof path21 !== "string" && !buffer_1.Buffer.isBuffer(path21)) {
            try {
                if (!(path21 instanceof h6.URL)) throw new TypeError(ERRSTR.PATH_STR);
            } catch (err) {
                throw new TypeError(ERRSTR.PATH_STR);
            }
            path21 = getPathFromURLPosix1(path21);
        }
        var pathString = String(path21);
        nullCheck(pathString);
        return pathString;
    }
    exports$22.pathToFilename = pathToFilename;
    var resolve10 = function(filename, base) {
        if (base === void 0) {
            base = process_1.default.cwd();
        }
        return resolveCrossPlatform(base, filename);
    };
    if (isWin) {
        var _resolve_1 = resolve10;
        var unixify_1 = dew$31().unixify;
        resolve10 = function(filename, base) {
            return unixify_1(_resolve_1(filename, base));
        };
    }
    function filenameToSteps(filename, base) {
        var fullPath = resolve10(filename, base);
        var fullPathSansSlash = fullPath.substr(1);
        if (!fullPathSansSlash) return [];
        return fullPathSansSlash.split(sep5);
    }
    exports$22.filenameToSteps = filenameToSteps;
    function pathToSteps(path22) {
        return filenameToSteps(pathToFilename(path22));
    }
    exports$22.pathToSteps = pathToSteps;
    function dataToStr(data, encoding) {
        if (encoding === void 0) {
            encoding = encoding_1.ENCODING_UTF8;
        }
        if (buffer_1.Buffer.isBuffer(data)) return data.toString(encoding);
        else if (data instanceof Uint8Array) return (0, buffer_1.bufferFrom)(data).toString(encoding);
        else return String(data);
    }
    exports$22.dataToStr = dataToStr;
    function dataToBuffer(data, encoding) {
        if (encoding === void 0) {
            encoding = encoding_1.ENCODING_UTF8;
        }
        if (buffer_1.Buffer.isBuffer(data)) return data;
        else if (data instanceof Uint8Array) return (0, buffer_1.bufferFrom)(data);
        else return (0, buffer_1.bufferFrom)(String(data), encoding);
    }
    exports$22.dataToBuffer = dataToBuffer;
    function bufferToEncoding(buffer3, encoding) {
        if (!encoding || encoding === "buffer") return buffer3;
        else return buffer3.toString(encoding);
    }
    exports$22.bufferToEncoding = bufferToEncoding;
    function nullCheck(path23, callback) {
        if (("" + path23).indexOf("\0") !== -1) {
            var er = new Error("Path must be a string without null bytes");
            er.code = ENOENT;
            if (typeof callback !== "function") throw er;
            process_1.default.nextTick(callback, er);
            return false;
        }
        return true;
    }
    function _modeToNumber(mode, def) {
        if (typeof mode === "number") return mode;
        if (typeof mode === "string") return parseInt(mode, 8);
        if (def) return modeToNumber(def);
        return undefined;
    }
    function modeToNumber(mode, def) {
        var result = _modeToNumber(mode, def);
        if (typeof result !== "number" || isNaN(result)) throw new TypeError(ERRSTR.MODE_INT);
        return result;
    }
    function isFd(path24) {
        return path24 >>> 0 === path24;
    }
    function validateFd(fd) {
        if (!isFd(fd)) throw TypeError(ERRSTR.FD);
    }
    function toUnixTimestamp(time) {
        if (typeof time === "string" && +time == time) {
            return +time;
        }
        if (time instanceof Date) {
            return time.getTime() / 1000;
        }
        if (isFinite(time)) {
            if (time < 0) {
                return Date.now() / 1000;
            }
            return time;
        }
        throw new Error("Cannot parse time: " + time);
    }
    exports$22.toUnixTimestamp = toUnixTimestamp;
    function validateUid(uid) {
        if (typeof uid !== "number") throw TypeError(ERRSTR.UID);
    }
    function validateGid(gid) {
        if (typeof gid !== "number") throw TypeError(ERRSTR.GID);
    }
    function flattenJSON(nestedJSON) {
        var flatJSON = {
        };
        function flatten(pathPrefix, node) {
            for(var path25 in node){
                var contentOrNode = node[path25];
                var joinedPath = join1(pathPrefix, path25);
                if (typeof contentOrNode === "string") {
                    flatJSON[joinedPath] = contentOrNode;
                } else if (typeof contentOrNode === "object" && contentOrNode !== null && Object.keys(contentOrNode).length > 0) {
                    flatten(joinedPath, contentOrNode);
                } else {
                    flatJSON[joinedPath] = null;
                }
            }
        }
        flatten("", nestedJSON);
        return flatJSON;
    }
    var Volume1 = function() {
        function Volume(props) {
            if (props === void 0) {
                props = {
                };
            }
            this.ino = 0;
            this.inodes = {
            };
            this.releasedInos = [];
            this.fds = {
            };
            this.releasedFds = [];
            this.maxFiles = 10000;
            this.openFiles = 0;
            this.promisesApi = (0, promises_1.default)(this);
            this.statWatchers = {
            };
            this.props = Object.assign({
                Node: node_1.Node,
                Link: node_1.Link,
                File: node_1.File
            }, props);
            var root = this.createLink();
            root.setNode(this.createNode(true));
            var self = this;
            this.StatWatcher = (function(_super) {
                __extends(StatWatcher, _super);
                function StatWatcher() {
                    return _super.call(this, self) || this;
                }
                return StatWatcher;
            })(StatWatcher1);
            var _ReadStream = FsReadStream;
            this.ReadStream = (function(_super) {
                __extends(class_1, _super);
                function class_1() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++){
                        args[_i] = arguments[_i];
                    }
                    return _super.apply(this, __spreadArray([
                        self
                    ], args, false)) || this;
                }
                return class_1;
            })(_ReadStream);
            var _WriteStream = FsWriteStream;
            this.WriteStream = (function(_super) {
                __extends(class_2, _super);
                function class_2() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++){
                        args[_i] = arguments[_i];
                    }
                    return _super.apply(this, __spreadArray([
                        self
                    ], args, false)) || this;
                }
                return class_2;
            })(_WriteStream);
            this.FSWatcher = (function(_super) {
                __extends(FSWatcher, _super);
                function FSWatcher() {
                    return _super.call(this, self) || this;
                }
                return FSWatcher;
            })(FSWatcher1);
            this.root = root;
        }
        Volume.fromJSON = function(json, cwd3) {
            var vol5 = new Volume();
            vol5.fromJSON(json, cwd3);
            return vol5;
        };
        Volume.fromNestedJSON = function(json, cwd4) {
            var vol6 = new Volume();
            vol6.fromNestedJSON(json, cwd4);
            return vol6;
        };
        Object.defineProperty(Volume.prototype, "promises", {
            get: function() {
                if (this.promisesApi === null) throw new Error("Promise is not supported in this environment.");
                return this.promisesApi;
            },
            enumerable: false,
            configurable: true
        });
        Volume.prototype.createLink = function(parent, name, isDirectory, perm) {
            if (isDirectory === void 0) {
                isDirectory = false;
            }
            if (!parent) {
                return new this.props.Link(this, null, "");
            }
            if (!name) {
                throw new Error("createLink: name cannot be empty");
            }
            return parent.createChild(name, this.createNode(isDirectory, perm));
        };
        Volume.prototype.deleteLink = function(link7) {
            var parent = link7.parent;
            if (parent) {
                parent.deleteChild(link7);
                return true;
            }
            return false;
        };
        Volume.prototype.newInoNumber = function() {
            var releasedFd = this.releasedInos.pop();
            if (releasedFd) return releasedFd;
            else {
                this.ino = (this.ino + 1) % 4294967295;
                return this.ino;
            }
        };
        Volume.prototype.newFdNumber = function() {
            var releasedFd = this.releasedFds.pop();
            return typeof releasedFd === "number" ? releasedFd : Volume.fd--;
        };
        Volume.prototype.createNode = function(isDirectory, perm) {
            if (isDirectory === void 0) {
                isDirectory = false;
            }
            var node = new this.props.Node(this.newInoNumber(), perm);
            if (isDirectory) node.setIsDirectory();
            this.inodes[node.ino] = node;
            return node;
        };
        Volume.prototype.getNode = function(ino) {
            return this.inodes[ino];
        };
        Volume.prototype.deleteNode = function(node) {
            node.del();
            delete this.inodes[node.ino];
            this.releasedInos.push(node.ino);
        };
        Volume.prototype.genRndStr = function() {
            var str = (Math.random() + 1).toString(36).substr(2, 6);
            if (str.length === 6) return str;
            else return this.genRndStr();
        };
        Volume.prototype.getLink = function(steps) {
            return this.root.walk(steps);
        };
        Volume.prototype.getLinkOrThrow = function(filename, funcName) {
            var steps = filenameToSteps(filename);
            var link8 = this.getLink(steps);
            if (!link8) throw createError(ENOENT, funcName, filename);
            return link8;
        };
        Volume.prototype.getResolvedLink = function(filenameOrSteps) {
            var steps = typeof filenameOrSteps === "string" ? filenameToSteps(filenameOrSteps) : filenameOrSteps;
            var link9 = this.root;
            var i128 = 0;
            while(i128 < steps.length){
                var step = steps[i128];
                link9 = link9.getChild(step);
                if (!link9) return null;
                var node = link9.getNode();
                if (node.isSymlink()) {
                    steps = node.symlink.concat(steps.slice(i128 + 1));
                    link9 = this.root;
                    i128 = 0;
                    continue;
                }
                i128++;
            }
            return link9;
        };
        Volume.prototype.getResolvedLinkOrThrow = function(filename, funcName) {
            var link10 = this.getResolvedLink(filename);
            if (!link10) throw createError(ENOENT, funcName, filename);
            return link10;
        };
        Volume.prototype.resolveSymlinks = function(link11) {
            return this.getResolvedLink(link11.steps.slice(1));
        };
        Volume.prototype.getLinkAsDirOrThrow = function(filename, funcName) {
            var link12 = this.getLinkOrThrow(filename, funcName);
            if (!link12.getNode().isDirectory()) throw createError(ENOTDIR, funcName, filename);
            return link12;
        };
        Volume.prototype.getLinkParent = function(steps) {
            return this.root.walk(steps, steps.length - 1);
        };
        Volume.prototype.getLinkParentAsDirOrThrow = function(filenameOrSteps, funcName) {
            var steps = filenameOrSteps instanceof Array ? filenameOrSteps : filenameToSteps(filenameOrSteps);
            var link13 = this.getLinkParent(steps);
            if (!link13) throw createError(ENOENT, funcName, sep5 + steps.join(sep5));
            if (!link13.getNode().isDirectory()) throw createError(ENOTDIR, funcName, sep5 + steps.join(sep5));
            return link13;
        };
        Volume.prototype.getFileByFd = function(fd) {
            return this.fds[String(fd)];
        };
        Volume.prototype.getFileByFdOrThrow = function(fd, funcName) {
            if (!isFd(fd)) throw TypeError(ERRSTR.FD);
            var file = this.getFileByFd(fd);
            if (!file) throw createError(EBADF, funcName);
            return file;
        };
        Volume.prototype.getNodeByIdOrCreate = function(id, flags, perm) {
            if (typeof id === "number") {
                var file = this.getFileByFd(id);
                if (!file) throw Error("File nto found");
                return file.node;
            } else {
                var steps = pathToSteps(id);
                var link14 = this.getLink(steps);
                if (link14) return link14.getNode();
                if (flags & O_CREAT) {
                    var dirLink = this.getLinkParent(steps);
                    if (dirLink) {
                        var name_1 = steps[steps.length - 1];
                        link14 = this.createLink(dirLink, name_1, false, perm);
                        return link14.getNode();
                    }
                }
                throw createError(ENOENT, "getNodeByIdOrCreate", pathToFilename(id));
            }
        };
        Volume.prototype.wrapAsync = function(method, args, callback) {
            var _this = this;
            validateCallback(callback);
            (0, setImmediate_1.default)(function() {
                var result;
                try {
                    result = method.apply(_this, args);
                } catch (err) {
                    callback(err);
                    return;
                }
                callback(null, result);
            });
        };
        Volume.prototype._toJSON = function(link15, json, path26) {
            var _a;
            if (link15 === void 0) {
                link15 = this.root;
            }
            if (json === void 0) {
                json = {
                };
            }
            var isEmpty = true;
            var children = link15.children;
            if (link15.getNode().isFile()) {
                children = (_a = {
                }, _a[link15.getName()] = link15.parent.getChild(link15.getName()), _a);
                link15 = link15.parent;
            }
            for(var name_2 in children){
                isEmpty = false;
                var child = link15.getChild(name_2);
                if (!child) {
                    throw new Error("_toJSON: unexpected undefined");
                }
                var node = child.getNode();
                if (node.isFile()) {
                    var filename = child.getPath();
                    if (path26) filename = relative1(path26, filename);
                    json[filename] = node.getString();
                } else if (node.isDirectory()) {
                    this._toJSON(child, json, path26);
                }
            }
            var dirPath = link15.getPath();
            if (path26) dirPath = relative1(path26, dirPath);
            if (dirPath && isEmpty) {
                json[dirPath] = null;
            }
            return json;
        };
        Volume.prototype.toJSON = function(paths, json, isRelative) {
            if (json === void 0) {
                json = {
                };
            }
            if (isRelative === void 0) {
                isRelative = false;
            }
            var links = [];
            if (paths) {
                if (!(paths instanceof Array)) paths = [
                    paths
                ];
                for(var _i = 0, paths_1 = paths; _i < paths_1.length; _i++){
                    var path27 = paths_1[_i];
                    var filename = pathToFilename(path27);
                    var link16 = this.getResolvedLink(filename);
                    if (!link16) continue;
                    links.push(link16);
                }
            } else {
                links.push(this.root);
            }
            if (!links.length) return json;
            for(var _a = 0, links_1 = links; _a < links_1.length; _a++){
                var link16 = links_1[_a];
                this._toJSON(link16, json, isRelative ? link16.getPath() : "");
            }
            return json;
        };
        Volume.prototype.fromJSON = function(json, cwd5) {
            if (cwd5 === void 0) {
                cwd5 = process_1.default.cwd();
            }
            for(var filename in json){
                var data = json[filename];
                filename = resolve10(filename, cwd5);
                if (typeof data === "string") {
                    var dir = dirname1(filename);
                    this.mkdirpBase(dir, 511);
                    this.writeFileSync(filename, data);
                } else {
                    this.mkdirpBase(filename, 511);
                }
            }
        };
        Volume.prototype.fromNestedJSON = function(json, cwd6) {
            this.fromJSON(flattenJSON(json), cwd6);
        };
        Volume.prototype.reset = function() {
            this.ino = 0;
            this.inodes = {
            };
            this.releasedInos = [];
            this.fds = {
            };
            this.releasedFds = [];
            this.openFiles = 0;
            this.root = this.createLink();
            this.root.setNode(this.createNode(true));
        };
        Volume.prototype.mountSync = function(mountpoint, json) {
            this.fromJSON(json, mountpoint);
        };
        Volume.prototype.openLink = function(link17, flagsNum, resolveSymlinks) {
            if (resolveSymlinks === void 0) {
                resolveSymlinks = true;
            }
            if (this.openFiles >= this.maxFiles) {
                throw createError(EMFILE, "open", link17.getPath());
            }
            var realLink = link17;
            if (resolveSymlinks) realLink = this.resolveSymlinks(link17);
            if (!realLink) throw createError(ENOENT, "open", link17.getPath());
            var node = realLink.getNode();
            if (node.isDirectory()) {
                if ((flagsNum & (O_RDONLY | O_RDWR | O_WRONLY)) !== O_RDONLY) throw createError(EISDIR, "open", link17.getPath());
            } else {
                if (flagsNum & O_DIRECTORY) throw createError(ENOTDIR, "open", link17.getPath());
            }
            if (!(flagsNum & O_WRONLY)) {
                if (!node.canRead()) {
                    throw createError(EACCES, "open", link17.getPath());
                }
            }
            var file = new this.props.File(link17, node, flagsNum, this.newFdNumber());
            this.fds[file.fd] = file;
            this.openFiles++;
            if (flagsNum & O_TRUNC) file.truncate();
            return file;
        };
        Volume.prototype.openFile = function(filename, flagsNum, modeNum, resolveSymlinks) {
            if (resolveSymlinks === void 0) {
                resolveSymlinks = true;
            }
            var steps = filenameToSteps(filename);
            var link18 = resolveSymlinks ? this.getResolvedLink(steps) : this.getLink(steps);
            if (!link18 && flagsNum & O_CREAT) {
                var dirLink = this.getResolvedLink(steps.slice(0, steps.length - 1));
                if (!dirLink) throw createError(ENOENT, "open", sep5 + steps.join(sep5));
                if (flagsNum & O_CREAT && typeof modeNum === "number") {
                    link18 = this.createLink(dirLink, steps[steps.length - 1], false, modeNum);
                }
            }
            if (link18) return this.openLink(link18, flagsNum, resolveSymlinks);
            throw createError(ENOENT, "open", filename);
        };
        Volume.prototype.openBase = function(filename, flagsNum, modeNum, resolveSymlinks) {
            if (resolveSymlinks === void 0) {
                resolveSymlinks = true;
            }
            var file = this.openFile(filename, flagsNum, modeNum, resolveSymlinks);
            if (!file) throw createError(ENOENT, "open", filename);
            return file.fd;
        };
        Volume.prototype.openSync = function(path28, flags, mode) {
            if (mode === void 0) {
                mode = 438;
            }
            var modeNum = modeToNumber(mode);
            var fileName = pathToFilename(path28);
            var flagsNum = flagsToNumber(flags);
            return this.openBase(fileName, flagsNum, modeNum);
        };
        Volume.prototype.open = function(path29, flags, a36, b27) {
            var mode = a36;
            var callback = b27;
            if (typeof a36 === "function") {
                mode = 438;
                callback = a36;
            }
            mode = mode || 438;
            var modeNum = modeToNumber(mode);
            var fileName = pathToFilename(path29);
            var flagsNum = flagsToNumber(flags);
            this.wrapAsync(this.openBase, [
                fileName,
                flagsNum,
                modeNum
            ], callback);
        };
        Volume.prototype.closeFile = function(file) {
            if (!this.fds[file.fd]) return;
            this.openFiles--;
            delete this.fds[file.fd];
            this.releasedFds.push(file.fd);
        };
        Volume.prototype.closeSync = function(fd) {
            validateFd(fd);
            var file = this.getFileByFdOrThrow(fd, "close");
            this.closeFile(file);
        };
        Volume.prototype.close = function(fd, callback) {
            validateFd(fd);
            this.wrapAsync(this.closeSync, [
                fd
            ], callback);
        };
        Volume.prototype.openFileOrGetById = function(id, flagsNum, modeNum) {
            if (typeof id === "number") {
                var file = this.fds[id];
                if (!file) throw createError(ENOENT);
                return file;
            } else {
                return this.openFile(pathToFilename(id), flagsNum, modeNum);
            }
        };
        Volume.prototype.readBase = function(fd, buffer4, offset, length, position) {
            var file = this.getFileByFdOrThrow(fd);
            return file.read(buffer4, Number(offset), Number(length), position);
        };
        Volume.prototype.readSync = function(fd, buffer5, offset, length, position) {
            validateFd(fd);
            return this.readBase(fd, buffer5, offset, length, position);
        };
        Volume.prototype.read = function(fd, buffer6, offset, length, position, callback) {
            var _this = this;
            validateCallback(callback);
            if (length === 0) {
                return process_1.default.nextTick(function() {
                    if (callback) callback(null, 0, buffer6);
                });
            }
            (0, setImmediate_1.default)(function() {
                try {
                    var bytes = _this.readBase(fd, buffer6, offset, length, position);
                    callback(null, bytes, buffer6);
                } catch (err) {
                    callback(err);
                }
            });
        };
        Volume.prototype.readFileBase = function(id, flagsNum, encoding) {
            var result;
            var isUserFd = typeof id === "number";
            var userOwnsFd = isUserFd && isFd(id);
            var fd;
            if (userOwnsFd) fd = id;
            else {
                var filename = pathToFilename(id);
                var steps = filenameToSteps(filename);
                var link19 = this.getResolvedLink(steps);
                if (link19) {
                    var node = link19.getNode();
                    if (node.isDirectory()) throw createError(EISDIR, "open", link19.getPath());
                }
                fd = this.openSync(id, flagsNum);
            }
            try {
                result = bufferToEncoding(this.getFileByFdOrThrow(fd).getBuffer(), encoding);
            } finally{
                if (!userOwnsFd) {
                    this.closeSync(fd);
                }
            }
            return result;
        };
        Volume.prototype.readFileSync = function(file, options) {
            var opts = getReadFileOptions(options);
            var flagsNum = flagsToNumber(opts.flag);
            return this.readFileBase(file, flagsNum, opts.encoding);
        };
        Volume.prototype.readFile = function(id, a37, b28) {
            var _a = optsAndCbGenerator(getReadFileOptions)(a37, b28), opts = _a[0], callback = _a[1];
            var flagsNum = flagsToNumber(opts.flag);
            this.wrapAsync(this.readFileBase, [
                id,
                flagsNum,
                opts.encoding
            ], callback);
        };
        Volume.prototype.writeBase = function(fd, buf, offset, length, position) {
            var file = this.getFileByFdOrThrow(fd, "write");
            return file.write(buf, offset, length, position);
        };
        Volume.prototype.writeSync = function(fd, a38, b29, c39, d28) {
            validateFd(fd);
            var encoding;
            var offset;
            var length;
            var position;
            var isBuffer = typeof a38 !== "string";
            if (isBuffer) {
                offset = (b29 || 0) | 0;
                length = c39;
                position = d28;
            } else {
                position = b29;
                encoding = c39;
            }
            var buf = dataToBuffer(a38, encoding);
            if (isBuffer) {
                if (typeof length === "undefined") {
                    length = buf.length;
                }
            } else {
                offset = 0;
                length = buf.length;
            }
            return this.writeBase(fd, buf, offset, length, position);
        };
        Volume.prototype.write = function(fd, a39, b30, c40, d29, e19) {
            var _this = this;
            validateFd(fd);
            var offset;
            var length;
            var position;
            var encoding;
            var callback;
            var tipa = typeof a39;
            var tipb = typeof b30;
            var tipc = typeof c40;
            var tipd = typeof d29;
            if (tipa !== "string") {
                if (tipb === "function") {
                    callback = b30;
                } else if (tipc === "function") {
                    offset = b30 | 0;
                    callback = c40;
                } else if (tipd === "function") {
                    offset = b30 | 0;
                    length = c40;
                    callback = d29;
                } else {
                    offset = b30 | 0;
                    length = c40;
                    position = d29;
                    callback = e19;
                }
            } else {
                if (tipb === "function") {
                    callback = b30;
                } else if (tipc === "function") {
                    position = b30;
                    callback = c40;
                } else if (tipd === "function") {
                    position = b30;
                    encoding = c40;
                    callback = d29;
                }
            }
            var buf = dataToBuffer(a39, encoding);
            if (tipa !== "string") {
                if (typeof length === "undefined") length = buf.length;
            } else {
                offset = 0;
                length = buf.length;
            }
            var cb = validateCallback(callback);
            (0, setImmediate_1.default)(function() {
                try {
                    var bytes = _this.writeBase(fd, buf, offset, length, position);
                    if (tipa !== "string") {
                        cb(null, bytes, buf);
                    } else {
                        cb(null, bytes, a39);
                    }
                } catch (err) {
                    cb(err);
                }
            });
        };
        Volume.prototype.writeFileBase = function(id, buf, flagsNum, modeNum) {
            var isUserFd = typeof id === "number";
            var fd;
            if (isUserFd) fd = id;
            else {
                fd = this.openBase(pathToFilename(id), flagsNum, modeNum);
            }
            var offset = 0;
            var length = buf.length;
            var position = flagsNum & O_APPEND ? undefined : 0;
            try {
                while(length > 0){
                    var written = this.writeSync(fd, buf, offset, length, position);
                    offset += written;
                    length -= written;
                    if (position !== undefined) position += written;
                }
            } finally{
                if (!isUserFd) this.closeSync(fd);
            }
        };
        Volume.prototype.writeFileSync = function(id, data, options) {
            var opts = getWriteFileOptions(options);
            var flagsNum = flagsToNumber(opts.flag);
            var modeNum = modeToNumber(opts.mode);
            var buf = dataToBuffer(data, opts.encoding);
            this.writeFileBase(id, buf, flagsNum, modeNum);
        };
        Volume.prototype.writeFile = function(id, data, a40, b32) {
            var options = a40;
            var callback = b32;
            if (typeof a40 === "function") {
                options = writeFileDefaults;
                callback = a40;
            }
            var cb = validateCallback(callback);
            var opts = getWriteFileOptions(options);
            var flagsNum = flagsToNumber(opts.flag);
            var modeNum = modeToNumber(opts.mode);
            var buf = dataToBuffer(data, opts.encoding);
            this.wrapAsync(this.writeFileBase, [
                id,
                buf,
                flagsNum,
                modeNum
            ], cb);
        };
        Volume.prototype.linkBase = function(filename1, filename2) {
            var steps1 = filenameToSteps(filename1);
            var link1 = this.getLink(steps1);
            if (!link1) throw createError(ENOENT, "link", filename1, filename2);
            var steps2 = filenameToSteps(filename2);
            var dir2 = this.getLinkParent(steps2);
            if (!dir2) throw createError(ENOENT, "link", filename1, filename2);
            var name = steps2[steps2.length - 1];
            if (dir2.getChild(name)) throw createError(EEXIST, "link", filename1, filename2);
            var node = link1.getNode();
            node.nlink++;
            dir2.createChild(name, node);
        };
        Volume.prototype.copyFileBase = function(src, dest, flags) {
            var buf = this.readFileSync(src);
            if (flags & COPYFILE_EXCL) {
                if (this.existsSync(dest)) {
                    throw createError(EEXIST, "copyFile", src, dest);
                }
            }
            if (flags & COPYFILE_FICLONE_FORCE) {
                throw createError(ENOSYS, "copyFile", src, dest);
            }
            this.writeFileBase(dest, buf, FLAGS1.w, 438);
        };
        Volume.prototype.copyFileSync = function(src, dest, flags) {
            var srcFilename = pathToFilename(src);
            var destFilename = pathToFilename(dest);
            return this.copyFileBase(srcFilename, destFilename, (flags || 0) | 0);
        };
        Volume.prototype.copyFile = function(src, dest, a41, b33) {
            var srcFilename = pathToFilename(src);
            var destFilename = pathToFilename(dest);
            var flags;
            var callback;
            if (typeof a41 === "function") {
                flags = 0;
                callback = a41;
            } else {
                flags = a41;
                callback = b33;
            }
            validateCallback(callback);
            this.wrapAsync(this.copyFileBase, [
                srcFilename,
                destFilename,
                flags
            ], callback);
        };
        Volume.prototype.linkSync = function(existingPath, newPath) {
            var existingPathFilename = pathToFilename(existingPath);
            var newPathFilename = pathToFilename(newPath);
            this.linkBase(existingPathFilename, newPathFilename);
        };
        Volume.prototype.link = function(existingPath, newPath, callback) {
            var existingPathFilename = pathToFilename(existingPath);
            var newPathFilename = pathToFilename(newPath);
            this.wrapAsync(this.linkBase, [
                existingPathFilename,
                newPathFilename
            ], callback);
        };
        Volume.prototype.unlinkBase = function(filename) {
            var steps = filenameToSteps(filename);
            var link20 = this.getLink(steps);
            if (!link20) throw createError(ENOENT, "unlink", filename);
            if (link20.length) throw Error("Dir not empty...");
            this.deleteLink(link20);
            var node = link20.getNode();
            node.nlink--;
            if (node.nlink <= 0) {
                this.deleteNode(node);
            }
        };
        Volume.prototype.unlinkSync = function(path30) {
            var filename = pathToFilename(path30);
            this.unlinkBase(filename);
        };
        Volume.prototype.unlink = function(path31, callback) {
            var filename = pathToFilename(path31);
            this.wrapAsync(this.unlinkBase, [
                filename
            ], callback);
        };
        Volume.prototype.symlinkBase = function(targetFilename, pathFilename) {
            var pathSteps = filenameToSteps(pathFilename);
            var dirLink = this.getLinkParent(pathSteps);
            if (!dirLink) throw createError(ENOENT, "symlink", targetFilename, pathFilename);
            var name = pathSteps[pathSteps.length - 1];
            if (dirLink.getChild(name)) throw createError(EEXIST, "symlink", targetFilename, pathFilename);
            var symlink1 = dirLink.createChild(name);
            symlink1.getNode().makeSymlink(filenameToSteps(targetFilename));
            return symlink1;
        };
        Volume.prototype.symlinkSync = function(target, path32, type) {
            var targetFilename = pathToFilename(target);
            var pathFilename = pathToFilename(path32);
            this.symlinkBase(targetFilename, pathFilename);
        };
        Volume.prototype.symlink = function(target, path33, a42, b34) {
            var callback = validateCallback(typeof a42 === "function" ? a42 : b34);
            var targetFilename = pathToFilename(target);
            var pathFilename = pathToFilename(path33);
            this.wrapAsync(this.symlinkBase, [
                targetFilename,
                pathFilename
            ], callback);
        };
        Volume.prototype.realpathBase = function(filename, encoding) {
            var steps = filenameToSteps(filename);
            var realLink = this.getResolvedLink(steps);
            if (!realLink) throw createError(ENOENT, "realpath", filename);
            return (0, encoding_1.strToEncoding)(realLink.getPath(), encoding);
        };
        Volume.prototype.realpathSync = function(path34, options) {
            return this.realpathBase(pathToFilename(path34), getRealpathOptions(options).encoding);
        };
        Volume.prototype.realpath = function(path35, a43, b35) {
            var _a = getRealpathOptsAndCb(a43, b35), opts = _a[0], callback = _a[1];
            var pathFilename = pathToFilename(path35);
            this.wrapAsync(this.realpathBase, [
                pathFilename,
                opts.encoding
            ], callback);
        };
        Volume.prototype.lstatBase = function(filename, bigint) {
            if (bigint === void 0) {
                bigint = false;
            }
            var link21 = this.getLink(filenameToSteps(filename));
            if (!link21) throw createError(ENOENT, "lstat", filename);
            return Stats_1.default.build(link21.getNode(), bigint);
        };
        Volume.prototype.lstatSync = function(path36, options) {
            return this.lstatBase(pathToFilename(path36), getStatOptions(options).bigint);
        };
        Volume.prototype.lstat = function(path37, a44, b36) {
            var _a = getStatOptsAndCb(a44, b36), opts = _a[0], callback = _a[1];
            this.wrapAsync(this.lstatBase, [
                pathToFilename(path37),
                opts.bigint
            ], callback);
        };
        Volume.prototype.statBase = function(filename, bigint) {
            if (bigint === void 0) {
                bigint = false;
            }
            var link22 = this.getResolvedLink(filenameToSteps(filename));
            if (!link22) throw createError(ENOENT, "stat", filename);
            return Stats_1.default.build(link22.getNode(), bigint);
        };
        Volume.prototype.statSync = function(path38, options) {
            return this.statBase(pathToFilename(path38), getStatOptions(options).bigint);
        };
        Volume.prototype.stat = function(path39, a45, b37) {
            var _a = getStatOptsAndCb(a45, b37), opts = _a[0], callback = _a[1];
            this.wrapAsync(this.statBase, [
                pathToFilename(path39),
                opts.bigint
            ], callback);
        };
        Volume.prototype.fstatBase = function(fd, bigint) {
            if (bigint === void 0) {
                bigint = false;
            }
            var file = this.getFileByFd(fd);
            if (!file) throw createError(EBADF, "fstat");
            return Stats_1.default.build(file.node, bigint);
        };
        Volume.prototype.fstatSync = function(fd, options) {
            return this.fstatBase(fd, getStatOptions(options).bigint);
        };
        Volume.prototype.fstat = function(fd, a46, b38) {
            var _a = getStatOptsAndCb(a46, b38), opts = _a[0], callback = _a[1];
            this.wrapAsync(this.fstatBase, [
                fd,
                opts.bigint
            ], callback);
        };
        Volume.prototype.renameBase = function(oldPathFilename, newPathFilename) {
            var link23 = this.getLink(filenameToSteps(oldPathFilename));
            if (!link23) throw createError(ENOENT, "rename", oldPathFilename, newPathFilename);
            var newPathSteps = filenameToSteps(newPathFilename);
            var newPathDirLink = this.getLinkParent(newPathSteps);
            if (!newPathDirLink) throw createError(ENOENT, "rename", oldPathFilename, newPathFilename);
            var oldLinkParent = link23.parent;
            if (oldLinkParent) {
                oldLinkParent.deleteChild(link23);
            }
            var name = newPathSteps[newPathSteps.length - 1];
            link23.steps = __spreadArray(__spreadArray([], newPathDirLink.steps, true), [
                name
            ], false);
            newPathDirLink.setChild(link23.getName(), link23);
        };
        Volume.prototype.renameSync = function(oldPath, newPath) {
            var oldPathFilename = pathToFilename(oldPath);
            var newPathFilename = pathToFilename(newPath);
            this.renameBase(oldPathFilename, newPathFilename);
        };
        Volume.prototype.rename = function(oldPath, newPath, callback) {
            var oldPathFilename = pathToFilename(oldPath);
            var newPathFilename = pathToFilename(newPath);
            this.wrapAsync(this.renameBase, [
                oldPathFilename,
                newPathFilename
            ], callback);
        };
        Volume.prototype.existsBase = function(filename) {
            return !!this.statBase(filename);
        };
        Volume.prototype.existsSync = function(path40) {
            try {
                return this.existsBase(pathToFilename(path40));
            } catch (err) {
                return false;
            }
        };
        Volume.prototype.exists = function(path41, callback) {
            var _this = this;
            var filename = pathToFilename(path41);
            if (typeof callback !== "function") throw Error(ERRSTR.CB);
            (0, setImmediate_1.default)(function() {
                try {
                    callback(_this.existsBase(filename));
                } catch (err) {
                    callback(false);
                }
            });
        };
        Volume.prototype.accessBase = function(filename, mode) {
            this.getLinkOrThrow(filename, "access");
        };
        Volume.prototype.accessSync = function(path42, mode) {
            if (mode === void 0) {
                mode = F_OK1;
            }
            var filename = pathToFilename(path42);
            mode = mode | 0;
            this.accessBase(filename, mode);
        };
        Volume.prototype.access = function(path43, a47, b39) {
            var mode = F_OK1;
            var callback;
            if (typeof a47 !== "function") {
                mode = a47 | 0;
                callback = validateCallback(b39);
            } else {
                callback = a47;
            }
            var filename = pathToFilename(path43);
            this.wrapAsync(this.accessBase, [
                filename,
                mode
            ], callback);
        };
        Volume.prototype.appendFileSync = function(id, data, options) {
            if (options === void 0) {
                options = appendFileDefaults;
            }
            var opts = getAppendFileOpts(options);
            if (!opts.flag || isFd(id)) opts.flag = "a";
            this.writeFileSync(id, data, opts);
        };
        Volume.prototype.appendFile = function(id, data, a48, b40) {
            var _a = getAppendFileOptsAndCb(a48, b40), opts = _a[0], callback = _a[1];
            if (!opts.flag || isFd(id)) opts.flag = "a";
            this.writeFile(id, data, opts, callback);
        };
        Volume.prototype.readdirBase = function(filename, options) {
            var steps = filenameToSteps(filename);
            var link24 = this.getResolvedLink(steps);
            if (!link24) throw createError(ENOENT, "readdir", filename);
            var node = link24.getNode();
            if (!node.isDirectory()) throw createError(ENOTDIR, "scandir", filename);
            if (options.withFileTypes) {
                var list_1 = [];
                for(var name_3 in link24.children){
                    var child = link24.getChild(name_3);
                    if (!child) {
                        continue;
                    }
                    list_1.push(Dirent_1.default.build(child, options.encoding));
                }
                if (!isWin && options.encoding !== "buffer") list_1.sort(function(a49, b41) {
                    if (a49.name < b41.name) return -1;
                    if (a49.name > b41.name) return 1;
                    return 0;
                });
                return list_1;
            }
            var list = [];
            for(var name_4 in link24.children){
                list.push((0, encoding_1.strToEncoding)(name_4, options.encoding));
            }
            if (!isWin && options.encoding !== "buffer") list.sort();
            return list;
        };
        Volume.prototype.readdirSync = function(path44, options) {
            var opts = getReaddirOptions(options);
            var filename = pathToFilename(path44);
            return this.readdirBase(filename, opts);
        };
        Volume.prototype.readdir = function(path45, a50, b42) {
            var _a = getReaddirOptsAndCb(a50, b42), options = _a[0], callback = _a[1];
            var filename = pathToFilename(path45);
            this.wrapAsync(this.readdirBase, [
                filename,
                options
            ], callback);
        };
        Volume.prototype.readlinkBase = function(filename, encoding) {
            var link25 = this.getLinkOrThrow(filename, "readlink");
            var node = link25.getNode();
            if (!node.isSymlink()) throw createError(EINVAL, "readlink", filename);
            var str = sep5 + node.symlink.join(sep5);
            return (0, encoding_1.strToEncoding)(str, encoding);
        };
        Volume.prototype.readlinkSync = function(path46, options) {
            var opts = getDefaultOpts(options);
            var filename = pathToFilename(path46);
            return this.readlinkBase(filename, opts.encoding);
        };
        Volume.prototype.readlink = function(path47, a51, b43) {
            var _a = getDefaultOptsAndCb(a51, b43), opts = _a[0], callback = _a[1];
            var filename = pathToFilename(path47);
            this.wrapAsync(this.readlinkBase, [
                filename,
                opts.encoding
            ], callback);
        };
        Volume.prototype.fsyncBase = function(fd) {
            this.getFileByFdOrThrow(fd, "fsync");
        };
        Volume.prototype.fsyncSync = function(fd) {
            this.fsyncBase(fd);
        };
        Volume.prototype.fsync = function(fd, callback) {
            this.wrapAsync(this.fsyncBase, [
                fd
            ], callback);
        };
        Volume.prototype.fdatasyncBase = function(fd) {
            this.getFileByFdOrThrow(fd, "fdatasync");
        };
        Volume.prototype.fdatasyncSync = function(fd) {
            this.fdatasyncBase(fd);
        };
        Volume.prototype.fdatasync = function(fd, callback) {
            this.wrapAsync(this.fdatasyncBase, [
                fd
            ], callback);
        };
        Volume.prototype.ftruncateBase = function(fd, len) {
            var file = this.getFileByFdOrThrow(fd, "ftruncate");
            file.truncate(len);
        };
        Volume.prototype.ftruncateSync = function(fd, len) {
            this.ftruncateBase(fd, len);
        };
        Volume.prototype.ftruncate = function(fd, a52, b44) {
            var len = typeof a52 === "number" ? a52 : 0;
            var callback = validateCallback(typeof a52 === "number" ? b44 : a52);
            this.wrapAsync(this.ftruncateBase, [
                fd,
                len
            ], callback);
        };
        Volume.prototype.truncateBase = function(path48, len) {
            var fd = this.openSync(path48, "r+");
            try {
                this.ftruncateSync(fd, len);
            } finally{
                this.closeSync(fd);
            }
        };
        Volume.prototype.truncateSync = function(id, len) {
            if (isFd(id)) return this.ftruncateSync(id, len);
            this.truncateBase(id, len);
        };
        Volume.prototype.truncate = function(id, a53, b45) {
            var len = typeof a53 === "number" ? a53 : 0;
            var callback = validateCallback(typeof a53 === "number" ? b45 : a53);
            if (isFd(id)) return this.ftruncate(id, len, callback);
            this.wrapAsync(this.truncateBase, [
                id,
                len
            ], callback);
        };
        Volume.prototype.futimesBase = function(fd, atime, mtime) {
            var file = this.getFileByFdOrThrow(fd, "futimes");
            var node = file.node;
            node.atime = new Date(atime * 1000);
            node.mtime = new Date(mtime * 1000);
        };
        Volume.prototype.futimesSync = function(fd, atime, mtime) {
            this.futimesBase(fd, toUnixTimestamp(atime), toUnixTimestamp(mtime));
        };
        Volume.prototype.futimes = function(fd, atime, mtime, callback) {
            this.wrapAsync(this.futimesBase, [
                fd,
                toUnixTimestamp(atime),
                toUnixTimestamp(mtime)
            ], callback);
        };
        Volume.prototype.utimesBase = function(filename, atime, mtime) {
            var fd = this.openSync(filename, "r+");
            try {
                this.futimesBase(fd, atime, mtime);
            } finally{
                this.closeSync(fd);
            }
        };
        Volume.prototype.utimesSync = function(path49, atime, mtime) {
            this.utimesBase(pathToFilename(path49), toUnixTimestamp(atime), toUnixTimestamp(mtime));
        };
        Volume.prototype.utimes = function(path50, atime, mtime, callback) {
            this.wrapAsync(this.utimesBase, [
                pathToFilename(path50),
                toUnixTimestamp(atime),
                toUnixTimestamp(mtime)
            ], callback);
        };
        Volume.prototype.mkdirBase = function(filename, modeNum) {
            var steps = filenameToSteps(filename);
            if (!steps.length) {
                throw createError(EEXIST, "mkdir", filename);
            }
            var dir = this.getLinkParentAsDirOrThrow(filename, "mkdir");
            var name = steps[steps.length - 1];
            if (dir.getChild(name)) throw createError(EEXIST, "mkdir", filename);
            dir.createChild(name, this.createNode(true, modeNum));
        };
        Volume.prototype.mkdirpBase = function(filename, modeNum) {
            var steps = filenameToSteps(filename);
            var link26 = this.root;
            for(var i129 = 0; i129 < steps.length; i129++){
                var step = steps[i129];
                if (!link26.getNode().isDirectory()) throw createError(ENOTDIR, "mkdir", link26.getPath());
                var child = link26.getChild(step);
                if (child) {
                    if (child.getNode().isDirectory()) link26 = child;
                    else throw createError(ENOTDIR, "mkdir", child.getPath());
                } else {
                    link26 = link26.createChild(step, this.createNode(true, modeNum));
                }
            }
        };
        Volume.prototype.mkdirSync = function(path51, options) {
            var opts = getMkdirOptions(options);
            var modeNum = modeToNumber(opts.mode, 511);
            var filename = pathToFilename(path51);
            if (opts.recursive) this.mkdirpBase(filename, modeNum);
            else this.mkdirBase(filename, modeNum);
        };
        Volume.prototype.mkdir = function(path52, a54, b46) {
            var opts = getMkdirOptions(a54);
            var callback = validateCallback(typeof a54 === "function" ? a54 : b46);
            var modeNum = modeToNumber(opts.mode, 511);
            var filename = pathToFilename(path52);
            if (opts.recursive) this.wrapAsync(this.mkdirpBase, [
                filename,
                modeNum
            ], callback);
            else this.wrapAsync(this.mkdirBase, [
                filename,
                modeNum
            ], callback);
        };
        Volume.prototype.mkdirpSync = function(path53, mode) {
            this.mkdirSync(path53, {
                mode: mode,
                recursive: true
            });
        };
        Volume.prototype.mkdirp = function(path54, a55, b47) {
            var mode = typeof a55 === "function" ? undefined : a55;
            var callback = validateCallback(typeof a55 === "function" ? a55 : b47);
            this.mkdir(path54, {
                mode: mode,
                recursive: true
            }, callback);
        };
        Volume.prototype.mkdtempBase = function(prefix, encoding, retry) {
            if (retry === void 0) {
                retry = 5;
            }
            var filename = prefix + this.genRndStr();
            try {
                this.mkdirBase(filename, 511);
                return (0, encoding_1.strToEncoding)(filename, encoding);
            } catch (err) {
                if (err.code === EEXIST) {
                    if (retry > 1) return this.mkdtempBase(prefix, encoding, retry - 1);
                    else throw Error("Could not create temp dir.");
                } else throw err;
            }
        };
        Volume.prototype.mkdtempSync = function(prefix, options) {
            var encoding = getDefaultOpts(options).encoding;
            if (!prefix || typeof prefix !== "string") throw new TypeError("filename prefix is required");
            nullCheck(prefix);
            return this.mkdtempBase(prefix, encoding);
        };
        Volume.prototype.mkdtemp = function(prefix, a56, b48) {
            var _a = getDefaultOptsAndCb(a56, b48), encoding = _a[0].encoding, callback = _a[1];
            if (!prefix || typeof prefix !== "string") throw new TypeError("filename prefix is required");
            if (!nullCheck(prefix)) return;
            this.wrapAsync(this.mkdtempBase, [
                prefix,
                encoding
            ], callback);
        };
        Volume.prototype.rmdirBase = function(filename, options) {
            var opts = getRmdirOptions(options);
            var link27 = this.getLinkAsDirOrThrow(filename, "rmdir");
            if (link27.length && !opts.recursive) throw createError(ENOTEMPTY, "rmdir", filename);
            this.deleteLink(link27);
        };
        Volume.prototype.rmdirSync = function(path55, options) {
            this.rmdirBase(pathToFilename(path55), options);
        };
        Volume.prototype.rmdir = function(path56, a57, b49) {
            var opts = getRmdirOptions(a57);
            var callback = validateCallback(typeof a57 === "function" ? a57 : b49);
            this.wrapAsync(this.rmdirBase, [
                pathToFilename(path56),
                opts
            ], callback);
        };
        Volume.prototype.fchmodBase = function(fd, modeNum) {
            var file = this.getFileByFdOrThrow(fd, "fchmod");
            file.chmod(modeNum);
        };
        Volume.prototype.fchmodSync = function(fd, mode) {
            this.fchmodBase(fd, modeToNumber(mode));
        };
        Volume.prototype.fchmod = function(fd, mode, callback) {
            this.wrapAsync(this.fchmodBase, [
                fd,
                modeToNumber(mode)
            ], callback);
        };
        Volume.prototype.chmodBase = function(filename, modeNum) {
            var fd = this.openSync(filename, "r+");
            try {
                this.fchmodBase(fd, modeNum);
            } finally{
                this.closeSync(fd);
            }
        };
        Volume.prototype.chmodSync = function(path57, mode) {
            var modeNum = modeToNumber(mode);
            var filename = pathToFilename(path57);
            this.chmodBase(filename, modeNum);
        };
        Volume.prototype.chmod = function(path58, mode, callback) {
            var modeNum = modeToNumber(mode);
            var filename = pathToFilename(path58);
            this.wrapAsync(this.chmodBase, [
                filename,
                modeNum
            ], callback);
        };
        Volume.prototype.lchmodBase = function(filename, modeNum) {
            var fd = this.openBase(filename, O_RDWR, 0, false);
            try {
                this.fchmodBase(fd, modeNum);
            } finally{
                this.closeSync(fd);
            }
        };
        Volume.prototype.lchmodSync = function(path59, mode) {
            var modeNum = modeToNumber(mode);
            var filename = pathToFilename(path59);
            this.lchmodBase(filename, modeNum);
        };
        Volume.prototype.lchmod = function(path60, mode, callback) {
            var modeNum = modeToNumber(mode);
            var filename = pathToFilename(path60);
            this.wrapAsync(this.lchmodBase, [
                filename,
                modeNum
            ], callback);
        };
        Volume.prototype.fchownBase = function(fd, uid, gid) {
            this.getFileByFdOrThrow(fd, "fchown").chown(uid, gid);
        };
        Volume.prototype.fchownSync = function(fd, uid, gid) {
            validateUid(uid);
            validateGid(gid);
            this.fchownBase(fd, uid, gid);
        };
        Volume.prototype.fchown = function(fd, uid, gid, callback) {
            validateUid(uid);
            validateGid(gid);
            this.wrapAsync(this.fchownBase, [
                fd,
                uid,
                gid
            ], callback);
        };
        Volume.prototype.chownBase = function(filename, uid, gid) {
            var link28 = this.getResolvedLinkOrThrow(filename, "chown");
            var node = link28.getNode();
            node.chown(uid, gid);
        };
        Volume.prototype.chownSync = function(path61, uid, gid) {
            validateUid(uid);
            validateGid(gid);
            this.chownBase(pathToFilename(path61), uid, gid);
        };
        Volume.prototype.chown = function(path62, uid, gid, callback) {
            validateUid(uid);
            validateGid(gid);
            this.wrapAsync(this.chownBase, [
                pathToFilename(path62),
                uid,
                gid
            ], callback);
        };
        Volume.prototype.lchownBase = function(filename, uid, gid) {
            this.getLinkOrThrow(filename, "lchown").getNode().chown(uid, gid);
        };
        Volume.prototype.lchownSync = function(path63, uid, gid) {
            validateUid(uid);
            validateGid(gid);
            this.lchownBase(pathToFilename(path63), uid, gid);
        };
        Volume.prototype.lchown = function(path64, uid, gid, callback) {
            validateUid(uid);
            validateGid(gid);
            this.wrapAsync(this.lchownBase, [
                pathToFilename(path64),
                uid,
                gid
            ], callback);
        };
        Volume.prototype.watchFile = function(path65, a58, b50) {
            var filename = pathToFilename(path65);
            var options = a58;
            var listener = b50;
            if (typeof options === "function") {
                listener = a58;
                options = null;
            }
            if (typeof listener !== "function") {
                throw Error("\"watchFile()\" requires a listener function");
            }
            var interval = 5007;
            var persistent = true;
            if (options && typeof options === "object") {
                if (typeof options.interval === "number") interval = options.interval;
                if (typeof options.persistent === "boolean") persistent = options.persistent;
            }
            var watcher = this.statWatchers[filename];
            if (!watcher) {
                watcher = new this.StatWatcher();
                watcher.start(filename, persistent, interval);
                this.statWatchers[filename] = watcher;
            }
            watcher.addListener("change", listener);
            return watcher;
        };
        Volume.prototype.unwatchFile = function(path66, listener) {
            var filename = pathToFilename(path66);
            var watcher = this.statWatchers[filename];
            if (!watcher) return;
            if (typeof listener === "function") {
                watcher.removeListener("change", listener);
            } else {
                watcher.removeAllListeners("change");
            }
            if (watcher.listenerCount("change") === 0) {
                watcher.stop();
                delete this.statWatchers[filename];
            }
        };
        Volume.prototype.createReadStream = function(path67, options) {
            return new this.ReadStream(path67, options);
        };
        Volume.prototype.createWriteStream = function(path68, options) {
            return new this.WriteStream(path68, options);
        };
        Volume.prototype.watch = function(path69, options, listener) {
            var filename = pathToFilename(path69);
            var givenOptions = options;
            if (typeof options === "function") {
                listener = options;
                givenOptions = null;
            }
            var _a = getDefaultOpts(givenOptions), persistent = _a.persistent, recursive = _a.recursive, encoding = _a.encoding;
            if (persistent === undefined) persistent = true;
            if (recursive === undefined) recursive = false;
            var watcher = new this.FSWatcher();
            watcher.start(filename, persistent, recursive, encoding);
            if (listener) {
                watcher.addListener("change", listener);
            }
            return watcher;
        };
        Volume.fd = 2147483647;
        return Volume;
    }();
    exports$22.Volume = Volume1;
    function emitStop(self) {
        self.emit("stop");
    }
    var StatWatcher1 = function(_super) {
        __extends(StatWatcher, _super);
        function StatWatcher(vol7) {
            var _this = _super.call(this) || this;
            _this.onInterval = function() {
                try {
                    var stats = _this.vol.statSync(_this.filename);
                    if (_this.hasChanged(stats)) {
                        _this.emit("change", stats, _this.prev);
                        _this.prev = stats;
                    }
                } finally{
                    _this.loop();
                }
            };
            _this.vol = vol7;
            return _this;
        }
        StatWatcher.prototype.loop = function() {
            this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
        };
        StatWatcher.prototype.hasChanged = function(stats) {
            if (stats.mtimeMs > this.prev.mtimeMs) return true;
            if (stats.nlink !== this.prev.nlink) return true;
            return false;
        };
        StatWatcher.prototype.start = function(path70, persistent, interval) {
            if (persistent === void 0) {
                persistent = true;
            }
            if (interval === void 0) {
                interval = 5007;
            }
            this.filename = pathToFilename(path70);
            this.setTimeout = persistent ? setTimeout.bind(typeof globalThis !== "undefined" ? globalThis : _global3) : setTimeoutUnref_1.default;
            this.interval = interval;
            this.prev = this.vol.statSync(this.filename);
            this.loop();
        };
        StatWatcher.prototype.stop = function() {
            clearTimeout(this.timeoutRef);
            process_1.default.nextTick(emitStop, this);
        };
        return StatWatcher;
    }(events_1.EventEmitter);
    exports$22.StatWatcher = StatWatcher1;
    var pool;
    function allocNewPool(poolSize) {
        pool = (0, buffer_1.bufferAllocUnsafe)(poolSize);
        pool.used = 0;
    }
    util2.inherits(FsReadStream, stream_1.Readable);
    exports$22.ReadStream = FsReadStream;
    function FsReadStream(vol8, path71, options) {
        if (!(this instanceof FsReadStream)) return new FsReadStream(vol8, path71, options);
        this._vol = vol8;
        options = Object.assign({
        }, getOptions(options, {
        }));
        if (options.highWaterMark === undefined) options.highWaterMark = 64 * 1024;
        stream_1.Readable.call(this, options);
        this.path = pathToFilename(path71);
        this.fd = options.fd === undefined ? null : options.fd;
        this.flags = options.flags === undefined ? "r" : options.flags;
        this.mode = options.mode === undefined ? 438 : options.mode;
        this.start = options.start;
        this.end = options.end;
        this.autoClose = options.autoClose === undefined ? true : options.autoClose;
        this.pos = undefined;
        this.bytesRead = 0;
        if (this.start !== undefined) {
            if (typeof this.start !== "number") {
                throw new TypeError("\"start\" option must be a Number");
            }
            if (this.end === undefined) {
                this.end = Infinity;
            } else if (typeof this.end !== "number") {
                throw new TypeError("\"end\" option must be a Number");
            }
            if (this.start > this.end) {
                throw new Error("\"start\" option must be <= \"end\" option");
            }
            this.pos = this.start;
        }
        if (typeof this.fd !== "number") this.open();
        this.on("end", function() {
            if (this.autoClose) {
                if (this.destroy) this.destroy();
            }
        });
    }
    FsReadStream.prototype.open = function() {
        var self = this;
        this._vol.open(this.path, this.flags, this.mode, function(er, fd) {
            if (er) {
                if (self.autoClose) {
                    if (self.destroy) self.destroy();
                }
                self.emit("error", er);
                return;
            }
            self.fd = fd;
            self.emit("open", fd);
            self.read();
        });
    };
    FsReadStream.prototype._read = function(n82) {
        if (typeof this.fd !== "number") {
            return this.once("open", function() {
                this._read(n82);
            });
        }
        if (this.destroyed) return;
        if (!pool || pool.length - pool.used < kMinPoolSpace) {
            allocNewPool(this._readableState.highWaterMark);
        }
        var thisPool = pool;
        var toRead = Math.min(pool.length - pool.used, n82);
        var start = pool.used;
        if (this.pos !== undefined) toRead = Math.min(this.end - this.pos + 1, toRead);
        if (toRead <= 0) return this.push(null);
        var self = this;
        this._vol.read(this.fd, pool, pool.used, toRead, this.pos, onread);
        if (this.pos !== undefined) this.pos += toRead;
        pool.used += toRead;
        function onread(er, bytesRead) {
            if (er) {
                if (self.autoClose && self.destroy) {
                    self.destroy();
                }
                self.emit("error", er);
            } else {
                var b51 = null;
                if (bytesRead > 0) {
                    self.bytesRead += bytesRead;
                    b51 = thisPool.slice(start, start + bytesRead);
                }
                self.push(b51);
            }
        }
    };
    FsReadStream.prototype._destroy = function(err, cb) {
        this.close(function(err2) {
            cb(err || err2);
        });
    };
    FsReadStream.prototype.close = function(cb) {
        var _this = this;
        if (cb) this.once("close", cb);
        if (this.closed || typeof this.fd !== "number") {
            if (typeof this.fd !== "number") {
                this.once("open", closeOnOpen);
                return;
            }
            return process_1.default.nextTick(function() {
                return _this.emit("close");
            });
        }
        this.closed = true;
        this._vol.close(this.fd, function(er) {
            if (er) _this.emit("error", er);
            else _this.emit("close");
        });
        this.fd = null;
    };
    function closeOnOpen(fd) {
        this.close();
    }
    util2.inherits(FsWriteStream, stream_1.Writable);
    exports$22.WriteStream = FsWriteStream;
    function FsWriteStream(vol9, path72, options) {
        if (!(this instanceof FsWriteStream)) return new FsWriteStream(vol9, path72, options);
        this._vol = vol9;
        options = Object.assign({
        }, getOptions(options, {
        }));
        stream_1.Writable.call(this, options);
        this.path = pathToFilename(path72);
        this.fd = options.fd === undefined ? null : options.fd;
        this.flags = options.flags === undefined ? "w" : options.flags;
        this.mode = options.mode === undefined ? 438 : options.mode;
        this.start = options.start;
        this.autoClose = options.autoClose === undefined ? true : !!options.autoClose;
        this.pos = undefined;
        this.bytesWritten = 0;
        if (this.start !== undefined) {
            if (typeof this.start !== "number") {
                throw new TypeError("\"start\" option must be a Number");
            }
            if (this.start < 0) {
                throw new Error("\"start\" must be >= zero");
            }
            this.pos = this.start;
        }
        if (options.encoding) this.setDefaultEncoding(options.encoding);
        if (typeof this.fd !== "number") this.open();
        this.once("finish", function() {
            if (this.autoClose) {
                this.close();
            }
        });
    }
    FsWriteStream.prototype.open = function() {
        this._vol.open(this.path, this.flags, this.mode, (function(er, fd) {
            if (er) {
                if (this.autoClose && this.destroy) {
                    this.destroy();
                }
                this.emit("error", er);
                return;
            }
            this.fd = fd;
            this.emit("open", fd);
        }).bind(this));
    };
    FsWriteStream.prototype._write = function(data, encoding, cb) {
        if (!(data instanceof buffer_1.Buffer)) return this.emit("error", new Error("Invalid data"));
        if (typeof this.fd !== "number") {
            return this.once("open", function() {
                this._write(data, encoding, cb);
            });
        }
        var self = this;
        this._vol.write(this.fd, data, 0, data.length, this.pos, function(er, bytes) {
            if (er) {
                if (self.autoClose && self.destroy) {
                    self.destroy();
                }
                return cb(er);
            }
            self.bytesWritten += bytes;
            cb();
        });
        if (this.pos !== undefined) this.pos += data.length;
    };
    FsWriteStream.prototype._writev = function(data, cb) {
        if (typeof this.fd !== "number") {
            return this.once("open", function() {
                this._writev(data, cb);
            });
        }
        var self = this;
        var len = data.length;
        var chunks = new Array(len);
        var size = 0;
        for(var i130 = 0; i130 < len; i130++){
            var chunk = data[i130].chunk;
            chunks[i130] = chunk;
            size += chunk.length;
        }
        var buf = buffer_1.Buffer.concat(chunks);
        this._vol.write(this.fd, buf, 0, buf.length, this.pos, function(er, bytes) {
            if (er) {
                if (self.destroy) self.destroy();
                return cb(er);
            }
            self.bytesWritten += bytes;
            cb();
        });
        if (this.pos !== undefined) this.pos += size;
    };
    FsWriteStream.prototype._destroy = FsReadStream.prototype._destroy;
    FsWriteStream.prototype.close = FsReadStream.prototype.close;
    FsWriteStream.prototype.destroySoon = FsWriteStream.prototype.end;
    var FSWatcher1 = function(_super) {
        __extends(FSWatcher, _super);
        function FSWatcher(vol10) {
            var _this = _super.call(this) || this;
            _this._filename = "";
            _this._filenameEncoded = "";
            _this._recursive = false;
            _this._encoding = encoding_1.ENCODING_UTF8;
            _this._onNodeChange = function() {
                _this._emit("change");
            };
            _this._onParentChild = function(link29) {
                if (link29.getName() === _this._getName()) {
                    _this._emit("rename");
                }
            };
            _this._emit = function(type11) {
                _this.emit("change", type11, _this._filenameEncoded);
            };
            _this._persist = function() {
                _this._timer = setTimeout(_this._persist, 1000000);
            };
            _this._vol = vol10;
            return _this;
        }
        FSWatcher.prototype._getName = function() {
            return this._steps[this._steps.length - 1];
        };
        FSWatcher.prototype.start = function(path73, persistent, recursive, encoding) {
            if (persistent === void 0) {
                persistent = true;
            }
            if (recursive === void 0) {
                recursive = false;
            }
            if (encoding === void 0) {
                encoding = encoding_1.ENCODING_UTF8;
            }
            this._filename = pathToFilename(path73);
            this._steps = filenameToSteps(this._filename);
            this._filenameEncoded = (0, encoding_1.strToEncoding)(this._filename);
            this._recursive = recursive;
            this._encoding = encoding;
            try {
                this._link = this._vol.getLinkOrThrow(this._filename, "FSWatcher");
            } catch (err) {
                var error = new Error("watch " + this._filename + " " + err.code);
                error.code = err.code;
                error.errno = err.code;
                throw error;
            }
            this._link.getNode().on("change", this._onNodeChange);
            this._link.on("child:add", this._onNodeChange);
            this._link.on("child:delete", this._onNodeChange);
            var parent = this._link.parent;
            if (parent) {
                parent.setMaxListeners(parent.getMaxListeners() + 1);
                parent.on("child:delete", this._onParentChild);
            }
            if (persistent) this._persist();
        };
        FSWatcher.prototype.close = function() {
            clearTimeout(this._timer);
            this._link.getNode().removeListener("change", this._onNodeChange);
            var parent = this._link.parent;
            if (parent) {
                parent.removeListener("child:delete", this._onParentChild);
            }
        };
        return FSWatcher;
    }(events_1.EventEmitter);
    exports$22.FSWatcher = FSWatcher1;
    return exports$22;
}
var exports$13 = {
}, _dewExec$13 = false;
function dew$13() {
    if (_dewExec$13) return exports$13;
    _dewExec$13 = true;
    Object.defineProperty(exports$13, "__esModule", {
        value: true
    });
    exports$13.fsAsyncMethods = exports$13.fsSyncMethods = exports$13.fsProps = void 0;
    var fsProps = [
        "constants",
        "F_OK",
        "R_OK",
        "W_OK",
        "X_OK",
        "Stats"
    ];
    exports$13.fsProps = fsProps;
    var fsSyncMethods = [
        "renameSync",
        "ftruncateSync",
        "truncateSync",
        "chownSync",
        "fchownSync",
        "lchownSync",
        "chmodSync",
        "fchmodSync",
        "lchmodSync",
        "statSync",
        "lstatSync",
        "fstatSync",
        "linkSync",
        "symlinkSync",
        "readlinkSync",
        "realpathSync",
        "unlinkSync",
        "rmdirSync",
        "mkdirSync",
        "mkdirpSync",
        "readdirSync",
        "closeSync",
        "openSync",
        "utimesSync",
        "futimesSync",
        "fsyncSync",
        "writeSync",
        "readSync",
        "readFileSync",
        "writeFileSync",
        "appendFileSync",
        "existsSync",
        "accessSync",
        "fdatasyncSync",
        "mkdtempSync",
        "copyFileSync",
        "createReadStream",
        "createWriteStream"
    ];
    exports$13.fsSyncMethods = fsSyncMethods;
    var fsAsyncMethods = [
        "rename",
        "ftruncate",
        "truncate",
        "chown",
        "fchown",
        "lchown",
        "chmod",
        "fchmod",
        "lchmod",
        "stat",
        "lstat",
        "fstat",
        "link",
        "symlink",
        "readlink",
        "realpath",
        "unlink",
        "rmdir",
        "mkdir",
        "mkdirp",
        "readdir",
        "close",
        "open",
        "utimes",
        "futimes",
        "fsync",
        "write",
        "read",
        "readFile",
        "writeFile",
        "appendFile",
        "exists",
        "access",
        "fdatasync",
        "mkdtemp",
        "copyFile",
        "watchFile",
        "unwatchFile",
        "watch"
    ];
    exports$13.fsAsyncMethods = fsAsyncMethods;
    return exports$13;
}
var exports8 = {
}, _dewExec8 = false;
function dew8() {
    if (_dewExec8) return exports8;
    _dewExec8 = true;
    var __assign = exports8 && exports8.__assign || function() {
        __assign = Object.assign || function(t30) {
            for(var s33, i131 = 1, n83 = arguments.length; i131 < n83; i131++){
                s33 = arguments[i131];
                for(var p26 in s33)if (Object.prototype.hasOwnProperty.call(s33, p26)) t30[p26] = s33[p26];
            }
            return t30;
        };
        return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports8, "__esModule", {
        value: true
    });
    exports8.fs = exports8.createFsFromVolume = exports8.vol = exports8.Volume = void 0;
    var Stats_1 = dew$d1();
    var Dirent_1 = dew$91();
    var volume_1 = dew$22();
    var _a2 = dew$13(), fsSyncMethods = _a2.fsSyncMethods, fsAsyncMethods = _a2.fsAsyncMethods;
    var constants_1 = dew$f1();
    var F_OK2 = constants_1.constants.F_OK, R_OK1 = constants_1.constants.R_OK, W_OK1 = constants_1.constants.W_OK, X_OK1 = constants_1.constants.X_OK;
    exports8.Volume = volume_1.Volume;
    exports8.vol = new volume_1.Volume();
    function createFsFromVolume1(vol11) {
        var fs1 = {
            F_OK: F_OK2,
            R_OK: R_OK1,
            W_OK: W_OK1,
            X_OK: X_OK1,
            constants: constants_1.constants,
            Stats: Stats_1.default,
            Dirent: Dirent_1.default
        };
        for(var _i = 0, fsSyncMethods_1 = fsSyncMethods; _i < fsSyncMethods_1.length; _i++){
            var method = fsSyncMethods_1[_i];
            if (typeof vol11[method] === "function") fs1[method] = vol11[method].bind(vol11);
        }
        for(var _a = 0, fsAsyncMethods_1 = fsAsyncMethods; _a < fsAsyncMethods_1.length; _a++){
            var method = fsAsyncMethods_1[_a];
            if (typeof vol11[method] === "function") fs1[method] = vol11[method].bind(vol11);
        }
        fs1.StatWatcher = vol11.StatWatcher;
        fs1.FSWatcher = vol11.FSWatcher;
        fs1.WriteStream = vol11.WriteStream;
        fs1.ReadStream = vol11.ReadStream;
        fs1.promises = vol11.promises;
        fs1._toUnixTimestamp = volume_1.toUnixTimestamp;
        return fs1;
    }
    exports8.createFsFromVolume = createFsFromVolume1;
    exports8.fs = createFsFromVolume1(exports8.vol);
    exports8 = __assign(__assign({
    }, exports8), exports8.fs);
    exports8.semantic = true;
    return exports8;
}
var memfs = dew8();
dew$22();
const { vol , createFsFromVolume  } = memfs;
function unimplemented1(name) {
    throw new Error(`Node.js fs ${name} is not supported by JSPM core in the browser`);
}
vol.fromNestedJSON({
    '/dev': {
        stdin: '',
        stdout: '',
        stderr: ''
    },
    '/usr/bin': {
    },
    '/home': {
    },
    '/tmp': {
    }
});
vol.releasedFds = [
    2,
    1,
    0
];
vol.openSync('/dev/stdin', 'w');
vol.openSync('/dev/stdout', 'r');
vol.openSync('/dev/stderr', 'r');
watchStdo('/dev/stdout', 1, console.log);
watchStdo('/dev/stderr', 2, console.error);
function watchStdo(path74, fd, listener) {
    let oldSize = 0;
    const decoder = new TextDecoder();
    vol.watch(path74, 'utf8', ()=>{
        const { size  } = vol.fstatSync(fd);
        const buf = Buffer.alloc(size - oldSize);
        vol.readSync(fd, buf, 0, buf.length, oldSize);
        oldSize = size;
        listener(decoder.decode(buf, {
            stream: true
        }));
    });
}
const fs = createFsFromVolume(vol);
fs.opendir = ()=>unimplemented1('opendir')
;
fs.opendirSync = ()=>unimplemented1('opendirSync')
;
fs.promises.opendir = ()=>unimplemented1('promises.opendir')
;
fs.cp = ()=>unimplemented1('cp')
;
fs.cpSync = ()=>unimplemented1('cpSync')
;
fs.promises.cp = ()=>unimplemented1('promises.cp')
;
fs.readv = ()=>unimplemented1('readv')
;
fs.readvSync = ()=>unimplemented1('readvSync')
;
fs.rm = ()=>unimplemented1('rm')
;
fs.rmSync = ()=>unimplemented1('rmSync')
;
fs.promises.rm = ()=>unimplemented1('promises.rm')
;
fs.Dir = ()=>unimplemented1('Dir')
;
fs.promises.watch = ()=>unimplemented1('promises.watch')
;
fs.FileReadStream = fs.ReadStream;
fs.FileWriteStream = fs.WriteStream;
function handleFsUrl(url, isSync) {
    if (url.protocol === 'file:') return fileURLToPath(url);
    if (url.protocol === 'https:' || url.protocol === 'http:') {
        const path75 = '\\\\url\\' + url.href.replaceAll(/\//g, '\\\\');
        if (existsSync(path75)) return path75;
        if (isSync) throw new Error(`Cannot sync request URL ${url} via FS. JSPM FS support for network URLs requires using async FS methods or priming the MemFS cache first with an async request before a sync request.`);
        return (async ()=>{
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Unable to fetch ${url.href}, ${res.status}`);
            const buf = await res.arrayBuffer();
            writeFileSync(path75, Buffer.from(buf));
            return path75;
        })();
    }
    throw new Error('URL ' + url + ' not supported in JSPM FS implementation.');
}
function wrapFsSync(fn) {
    return function(path76, ...args) {
        if (path76 instanceof URL) return fn(handleFsUrl(path76, true), ...args);
        return fn(path76, ...args);
    };
}
function wrapFsPromise(fn) {
    return async function(path77, ...args) {
        if (path77 instanceof URL) return fn(await handleFsUrl(path77), ...args);
        return fn(path77, ...args);
    };
}
function wrapFsCallback(fn) {
    return function(path78, ...args) {
        const cb = args[args.length - 1];
        if (path78 instanceof URL && typeof cb === 'function') {
            handleFsUrl(path78).then((path79)=>{
                fn(path79, ...args);
            }, cb);
        } else {
            fn(path78, ...args);
        }
    };
}
fs.promises.readFile = wrapFsPromise(fs.promises.readFile);
fs.readFile = wrapFsCallback(fs.readFile);
fs.readFileSync = wrapFsSync(fs.readFileSync);
const { appendFile , appendFileSync , access , accessSync , chown , chownSync , chmod , chmodSync , close , closeSync , copyFile , copyFileSync , cp , cpSync , createReadStream , createWriteStream , exists , existsSync , fchown , fchownSync , fchmod , fchmodSync , fdatasync , fdatasyncSync , fstat , fstatSync , fsync , fsyncSync , ftruncate , ftruncateSync , futimes , futimesSync , lchown , lchownSync , lchmod , lchmodSync , link , linkSync , lstat , lstatSync , mkdir , mkdirSync , mkdtemp , mkdtempSync , open , openSync , opendir , opendirSync , readdir , readdirSync , read , readSync , readv , readvSync , readFile , readFileSync , readlink , readlinkSync , realpath , realpathSync , rename , renameSync , rm , rmSync , rmdir , rmdirSync , stat , statSync , symlink , symlinkSync , truncate , truncateSync , unwatchFile , unlink , unlinkSync , utimes , utimesSync , watch , watchFile , writeFile , writeFileSync , write , writeSync , writev , writevSync , Dir , Dirent , Stats , ReadStream , WriteStream , FileReadStream , FileWriteStream , _toUnixTimestamp , constants: { F_OK , R_OK , W_OK , X_OK  } , constants: constants1 , promises ,  } = fs;
const mod1 = {
    default: fs,
    Dir,
    Dirent,
    F_OK,
    FileReadStream,
    FileWriteStream,
    R_OK,
    ReadStream,
    Stats,
    W_OK,
    WriteStream,
    X_OK,
    _toUnixTimestamp,
    access,
    accessSync,
    appendFile,
    appendFileSync,
    chmod,
    chmodSync,
    chown,
    chownSync,
    close,
    closeSync,
    constants: constants1,
    copyFile,
    copyFileSync,
    cp,
    cpSync,
    createReadStream,
    createWriteStream,
    exists,
    existsSync,
    fchmod,
    fchmodSync,
    fchown,
    fchownSync,
    fdatasync,
    fdatasyncSync,
    fstat,
    fstatSync,
    fsync,
    fsyncSync,
    ftruncate,
    ftruncateSync,
    futimes,
    futimesSync,
    lchmod,
    lchmodSync,
    lchown,
    lchownSync,
    link,
    linkSync,
    lstat,
    lstatSync,
    mkdir,
    mkdirSync,
    mkdtemp,
    mkdtempSync,
    open,
    openSync,
    opendir,
    opendirSync,
    promises,
    read,
    readFile,
    readFileSync,
    readSync,
    readdir,
    readdirSync,
    readlink,
    readlinkSync,
    readv,
    readvSync,
    realpath,
    realpathSync,
    rename,
    renameSync,
    rm,
    rmSync,
    rmdir,
    rmdirSync,
    stat,
    statSync,
    symlink,
    symlinkSync,
    truncate,
    truncateSync,
    unlink,
    unlinkSync,
    unwatchFile,
    utimes,
    utimesSync,
    watch,
    watchFile,
    write,
    writeFile,
    writeFileSync,
    writeSync,
    writev,
    writevSync
};
const mod2 = {
    default: path,
    _makeLong,
    basename,
    delimiter,
    dirname,
    extname,
    format,
    isAbsolute,
    join,
    normalize,
    parse,
    posix,
    relative,
    resolve,
    sep,
    win32
};
var exports9 = {
}, _dewExec9 = false;
function dew9() {
    if (_dewExec9) return exports9;
    _dewExec9 = true;
    exports9 = exports9 = dew$3();
    exports9.Stream = exports9;
    exports9.Readable = exports9;
    exports9.Writable = dew$8();
    exports9.Duplex = dew$7();
    exports9.Transform = dew$2();
    exports9.PassThrough = dew$11();
    exports9.finished = dew$6();
    exports9.pipeline = dew3();
    return exports9;
}
var exports$52 = {
}, _dewExec$52 = false;
var _global$31 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$52() {
    if (_dewExec$52) return exports$52;
    _dewExec$52 = true;
    exports$52.fetch = isFunction(_global$31.fetch) && isFunction(_global$31.ReadableStream);
    exports$52.writableStream = isFunction(_global$31.WritableStream);
    exports$52.abortController = isFunction(_global$31.AbortController);
    var xhr1;
    function getXHR() {
        if (xhr1 !== undefined) return xhr1;
        if (_global$31.XMLHttpRequest) {
            xhr1 = new _global$31.XMLHttpRequest();
            try {
                xhr1.open("GET", _global$31.XDomainRequest ? "/" : "https://example.com");
            } catch (e) {
                xhr1 = null;
            }
        } else {
            xhr1 = null;
        }
        return xhr1;
    }
    function checkTypeSupport(type12) {
        var xhr = getXHR();
        if (!xhr) return false;
        try {
            xhr.responseType = type12;
            return xhr.responseType === type12;
        } catch (e) {
        }
        return false;
    }
    exports$52.arraybuffer = exports$52.fetch || checkTypeSupport("arraybuffer");
    exports$52.msstream = !exports$52.fetch && checkTypeSupport("ms-stream");
    exports$52.mozchunkedarraybuffer = !exports$52.fetch && checkTypeSupport("moz-chunked-arraybuffer");
    exports$52.overrideMimeType = exports$52.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false);
    function isFunction(value) {
        return typeof value === "function";
    }
    xhr1 = null;
    return exports$52;
}
var exports$42 = {
}, _dewExec$42 = false;
var _global$22 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$42() {
    if (_dewExec$42) return exports$42;
    _dewExec$42 = true;
    var Buffer8 = buffer.Buffer;
    var process$1 = process1;
    var capability = dew$52();
    var inherits = dew$f();
    var stream37 = dew9();
    var rStates = exports$42.readyStates = {
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
    };
    var IncomingMessage1 = exports$42.IncomingMessage = function(xhr, response, mode, resetTimers) {
        var self = this || _global$22;
        stream37.Readable.call(self);
        self._mode = mode;
        self.headers = {
        };
        self.rawHeaders = [];
        self.trailers = {
        };
        self.rawTrailers = [];
        self.on("end", function() {
            process$1.nextTick(function() {
                self.emit("close");
            });
        });
        if (mode === "fetch") {
            self._fetchResponse = response;
            self.url = response.url;
            self.statusCode = response.status;
            self.statusMessage = response.statusText;
            response.headers.forEach(function(header, key) {
                self.headers[key.toLowerCase()] = header;
                self.rawHeaders.push(key, header);
            });
            if (capability.writableStream) {
                var writable = new WritableStream({
                    write: function(chunk) {
                        resetTimers(false);
                        return new Promise(function(resolve11, reject) {
                            if (self._destroyed) {
                                reject();
                            } else if (self.push(Buffer8.from(chunk))) {
                                resolve11();
                            } else {
                                self._resumeFetch = resolve11;
                            }
                        });
                    },
                    close: function() {
                        resetTimers(true);
                        if (!self._destroyed) self.push(null);
                    },
                    abort: function(err) {
                        resetTimers(true);
                        if (!self._destroyed) self.emit("error", err);
                    }
                });
                try {
                    response.body.pipeTo(writable).catch(function(err) {
                        resetTimers(true);
                        if (!self._destroyed) self.emit("error", err);
                    });
                    return;
                } catch (e) {
                }
            }
            var reader = response.body.getReader();
            function read3() {
                reader.read().then(function(result) {
                    if (self._destroyed) return;
                    resetTimers(result.done);
                    if (result.done) {
                        self.push(null);
                        return;
                    }
                    self.push(Buffer8.from(result.value));
                    read3();
                }).catch(function(err) {
                    resetTimers(true);
                    if (!self._destroyed) self.emit("error", err);
                });
            }
            read3();
        } else {
            self._xhr = xhr;
            self._pos = 0;
            self.url = xhr.responseURL;
            self.statusCode = xhr.status;
            self.statusMessage = xhr.statusText;
            var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
            headers.forEach(function(header) {
                var matches = header.match(/^([^:]+):\s*(.*)/);
                if (matches) {
                    var key = matches[1].toLowerCase();
                    if (key === "set-cookie") {
                        if (self.headers[key] === undefined) {
                            self.headers[key] = [];
                        }
                        self.headers[key].push(matches[2]);
                    } else if (self.headers[key] !== undefined) {
                        self.headers[key] += ", " + matches[2];
                    } else {
                        self.headers[key] = matches[2];
                    }
                    self.rawHeaders.push(matches[1], matches[2]);
                }
            });
            self._charset = "x-user-defined";
            if (!capability.overrideMimeType) {
                var mimeType = self.rawHeaders["mime-type"];
                if (mimeType) {
                    var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
                    if (charsetMatch) {
                        self._charset = charsetMatch[1].toLowerCase();
                    }
                }
                if (!self._charset) self._charset = "utf-8";
            }
        }
    };
    inherits(IncomingMessage1, stream37.Readable);
    IncomingMessage1.prototype._read = function() {
        var self = this || _global$22;
        var resolve12 = self._resumeFetch;
        if (resolve12) {
            self._resumeFetch = null;
            resolve12();
        }
    };
    IncomingMessage1.prototype._onXHRProgress = function(resetTimers) {
        var self = this || _global$22;
        var xhr = self._xhr;
        var response = null;
        switch(self._mode){
            case "text":
                response = xhr.responseText;
                if (response.length > self._pos) {
                    var newData = response.substr(self._pos);
                    if (self._charset === "x-user-defined") {
                        var buffer12 = Buffer8.alloc(newData.length);
                        for(var i132 = 0; i132 < newData.length; i132++)buffer12[i132] = newData.charCodeAt(i132) & 255;
                        self.push(buffer12);
                    } else {
                        self.push(newData, self._charset);
                    }
                    self._pos = response.length;
                }
                break;
            case "arraybuffer":
                if (xhr.readyState !== rStates.DONE || !xhr.response) break;
                response = xhr.response;
                self.push(Buffer8.from(new Uint8Array(response)));
                break;
            case "moz-chunked-arraybuffer":
                response = xhr.response;
                if (xhr.readyState !== rStates.LOADING || !response) break;
                self.push(Buffer8.from(new Uint8Array(response)));
                break;
            case "ms-stream":
                response = xhr.response;
                if (xhr.readyState !== rStates.LOADING) break;
                var reader = new _global$22.MSStreamReader();
                reader.onprogress = function() {
                    if (reader.result.byteLength > self._pos) {
                        self.push(Buffer8.from(new Uint8Array(reader.result.slice(self._pos))));
                        self._pos = reader.result.byteLength;
                    }
                };
                reader.onload = function() {
                    resetTimers(true);
                    self.push(null);
                };
                reader.readAsArrayBuffer(response);
                break;
        }
        if (self._xhr.readyState === rStates.DONE && self._mode !== "ms-stream") {
            resetTimers(true);
            self.push(null);
        }
    };
    return exports$42;
}
var exports$32 = {
}, _dewExec$32 = false;
var _global$12 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$32() {
    if (_dewExec$32) return exports$32;
    _dewExec$32 = true;
    var Buffer9 = buffer.Buffer;
    var process$1 = process1;
    var capability = dew$52();
    var inherits = dew$f();
    var response1 = dew$42();
    var stream38 = dew9();
    var IncomingMessage2 = response1.IncomingMessage;
    var rStates = response1.readyStates;
    function decideMode(preferBinary, useFetch) {
        if (capability.fetch && useFetch) {
            return "fetch";
        } else if (capability.mozchunkedarraybuffer) {
            return "moz-chunked-arraybuffer";
        } else if (capability.msstream) {
            return "ms-stream";
        } else if (capability.arraybuffer && preferBinary) {
            return "arraybuffer";
        } else {
            return "text";
        }
    }
    var ClientRequest1 = exports$32 = function(opts) {
        var self = this || _global$12;
        stream38.Writable.call(self);
        self._opts = opts;
        self._body = [];
        self._headers = {
        };
        if (opts.auth) self.setHeader("Authorization", "Basic " + Buffer9.from(opts.auth).toString("base64"));
        Object.keys(opts.headers).forEach(function(name) {
            self.setHeader(name, opts.headers[name]);
        });
        var preferBinary;
        var useFetch = true;
        if (opts.mode === "disable-fetch" || "requestTimeout" in opts && !capability.abortController) {
            useFetch = false;
            preferBinary = true;
        } else if (opts.mode === "prefer-streaming") {
            preferBinary = false;
        } else if (opts.mode === "allow-wrong-content-type") {
            preferBinary = !capability.overrideMimeType;
        } else if (!opts.mode || opts.mode === "default" || opts.mode === "prefer-fast") {
            preferBinary = true;
        } else {
            throw new Error("Invalid value for opts.mode");
        }
        self._mode = decideMode(preferBinary, useFetch);
        self._fetchTimer = null;
        self._socketTimeout = null;
        self._socketTimer = null;
        self.on("finish", function() {
            self._onFinish();
        });
    };
    inherits(ClientRequest1, stream38.Writable);
    ClientRequest1.prototype.setHeader = function(name, value) {
        var self = this || _global$12;
        var lowerName = name.toLowerCase();
        if (unsafeHeaders.indexOf(lowerName) !== -1) return;
        self._headers[lowerName] = {
            name: name,
            value: value
        };
    };
    ClientRequest1.prototype.getHeader = function(name) {
        var header = (this || _global$12)._headers[name.toLowerCase()];
        if (header) return header.value;
        return null;
    };
    ClientRequest1.prototype.removeHeader = function(name) {
        var self = this || _global$12;
        delete self._headers[name.toLowerCase()];
    };
    ClientRequest1.prototype._onFinish = function() {
        var self = this || _global$12;
        if (self._destroyed) return;
        var opts = self._opts;
        if ("timeout" in opts && opts.timeout !== 0) {
            self.setTimeout(opts.timeout);
        }
        var headersObj = self._headers;
        var body = null;
        if (opts.method !== "GET" && opts.method !== "HEAD") {
            body = new Blob(self._body, {
                type: (headersObj["content-type"] || {
                }).value || ""
            });
        }
        var headersList = [];
        Object.keys(headersObj).forEach(function(keyName) {
            var name = headersObj[keyName].name;
            var value = headersObj[keyName].value;
            if (Array.isArray(value)) {
                value.forEach(function(v10) {
                    headersList.push([
                        name,
                        v10
                    ]);
                });
            } else {
                headersList.push([
                    name,
                    value
                ]);
            }
        });
        if (self._mode === "fetch") {
            var signal = null;
            if (capability.abortController) {
                var controller = new AbortController();
                signal = controller.signal;
                self._fetchAbortController = controller;
                if ("requestTimeout" in opts && opts.requestTimeout !== 0) {
                    self._fetchTimer = _global$12.setTimeout(function() {
                        self.emit("requestTimeout");
                        if (self._fetchAbortController) self._fetchAbortController.abort();
                    }, opts.requestTimeout);
                }
            }
            _global$12.fetch(self._opts.url, {
                method: self._opts.method,
                headers: headersList,
                body: body || undefined,
                mode: "cors",
                credentials: opts.withCredentials ? "include" : "same-origin",
                signal: signal
            }).then(function(response) {
                self._fetchResponse = response;
                self._resetTimers(false);
                self._connect();
            }, function(reason) {
                self._resetTimers(true);
                if (!self._destroyed) self.emit("error", reason);
            });
        } else {
            var xhr = self._xhr = new _global$12.XMLHttpRequest();
            try {
                xhr.open(self._opts.method, self._opts.url, true);
            } catch (err) {
                process$1.nextTick(function() {
                    self.emit("error", err);
                });
                return;
            }
            if ("responseType" in xhr) xhr.responseType = self._mode;
            if ("withCredentials" in xhr) xhr.withCredentials = !!opts.withCredentials;
            if (self._mode === "text" && "overrideMimeType" in xhr) xhr.overrideMimeType("text/plain; charset=x-user-defined");
            if ("requestTimeout" in opts) {
                xhr.timeout = opts.requestTimeout;
                xhr.ontimeout = function() {
                    self.emit("requestTimeout");
                };
            }
            headersList.forEach(function(header) {
                xhr.setRequestHeader(header[0], header[1]);
            });
            self._response = null;
            xhr.onreadystatechange = function() {
                switch(xhr.readyState){
                    case rStates.LOADING:
                    case rStates.DONE:
                        self._onXHRProgress();
                        break;
                }
            };
            if (self._mode === "moz-chunked-arraybuffer") {
                xhr.onprogress = function() {
                    self._onXHRProgress();
                };
            }
            xhr.onerror = function() {
                if (self._destroyed) return;
                self._resetTimers(true);
                self.emit("error", new Error("XHR error"));
            };
            try {
                xhr.send(body);
            } catch (err1) {
                process$1.nextTick(function() {
                    self.emit("error", err1);
                });
                return;
            }
        }
    };
    function statusValid(xhr) {
        try {
            var status = xhr.status;
            return status !== null && status !== 0;
        } catch (e) {
            return false;
        }
    }
    ClientRequest1.prototype._onXHRProgress = function() {
        var self = this || _global$12;
        self._resetTimers(false);
        if (!statusValid(self._xhr) || self._destroyed) return;
        if (!self._response) self._connect();
        self._response._onXHRProgress(self._resetTimers.bind(self));
    };
    ClientRequest1.prototype._connect = function() {
        var self = this || _global$12;
        if (self._destroyed) return;
        self._response = new IncomingMessage2(self._xhr, self._fetchResponse, self._mode, self._resetTimers.bind(self));
        self._response.on("error", function(err) {
            self.emit("error", err);
        });
        self.emit("response", self._response);
    };
    ClientRequest1.prototype._write = function(chunk, encoding, cb) {
        var self = this || _global$12;
        self._body.push(chunk);
        cb();
    };
    ClientRequest1.prototype._resetTimers = function(done) {
        var self = this || _global$12;
        _global$12.clearTimeout(self._socketTimer);
        self._socketTimer = null;
        if (done) {
            _global$12.clearTimeout(self._fetchTimer);
            self._fetchTimer = null;
        } else if (self._socketTimeout) {
            self._socketTimer = _global$12.setTimeout(function() {
                self.emit("timeout");
            }, self._socketTimeout);
        }
    };
    ClientRequest1.prototype.abort = ClientRequest1.prototype.destroy = function(err) {
        var self = this || _global$12;
        self._destroyed = true;
        self._resetTimers(true);
        if (self._response) self._response._destroyed = true;
        if (self._xhr) self._xhr.abort();
        else if (self._fetchAbortController) self._fetchAbortController.abort();
        if (err) self.emit("error", err);
    };
    ClientRequest1.prototype.end = function(data, encoding, cb) {
        var self = this || _global$12;
        if (typeof data === "function") {
            cb = data;
            data = undefined;
        }
        stream38.Writable.prototype.end.call(self, data, encoding, cb);
    };
    ClientRequest1.prototype.setTimeout = function(timeout, cb) {
        var self = this || _global$12;
        if (cb) self.once("timeout", cb);
        self._socketTimeout = timeout;
        self._resetTimers(false);
    };
    ClientRequest1.prototype.flushHeaders = function() {
    };
    ClientRequest1.prototype.setNoDelay = function() {
    };
    ClientRequest1.prototype.setSocketKeepAlive = function() {
    };
    var unsafeHeaders = [
        "accept-charset",
        "accept-encoding",
        "access-control-request-headers",
        "access-control-request-method",
        "connection",
        "content-length",
        "cookie",
        "cookie2",
        "date",
        "dnt",
        "expect",
        "host",
        "keep-alive",
        "origin",
        "referer",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
        "via"
    ];
    return exports$32;
}
var exports$23 = {
}, _dewExec$23 = false;
function dew$23() {
    if (_dewExec$23) return exports$23;
    _dewExec$23 = true;
    exports$23 = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
        var target = {
        };
        for(var i133 = 0; i133 < arguments.length; i133++){
            var source = arguments[i133];
            for(var key in source){
                if (hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    }
    return exports$23;
}
var exports$14 = {
}, _dewExec$14 = false;
function dew$14() {
    if (_dewExec$14) return exports$14;
    _dewExec$14 = true;
    exports$14 = {
        "100": "Continue",
        "101": "Switching Protocols",
        "102": "Processing",
        "200": "OK",
        "201": "Created",
        "202": "Accepted",
        "203": "Non-Authoritative Information",
        "204": "No Content",
        "205": "Reset Content",
        "206": "Partial Content",
        "207": "Multi-Status",
        "208": "Already Reported",
        "226": "IM Used",
        "300": "Multiple Choices",
        "301": "Moved Permanently",
        "302": "Found",
        "303": "See Other",
        "304": "Not Modified",
        "305": "Use Proxy",
        "307": "Temporary Redirect",
        "308": "Permanent Redirect",
        "400": "Bad Request",
        "401": "Unauthorized",
        "402": "Payment Required",
        "403": "Forbidden",
        "404": "Not Found",
        "405": "Method Not Allowed",
        "406": "Not Acceptable",
        "407": "Proxy Authentication Required",
        "408": "Request Timeout",
        "409": "Conflict",
        "410": "Gone",
        "411": "Length Required",
        "412": "Precondition Failed",
        "413": "Payload Too Large",
        "414": "URI Too Long",
        "415": "Unsupported Media Type",
        "416": "Range Not Satisfiable",
        "417": "Expectation Failed",
        "418": "I'm a teapot",
        "421": "Misdirected Request",
        "422": "Unprocessable Entity",
        "423": "Locked",
        "424": "Failed Dependency",
        "425": "Unordered Collection",
        "426": "Upgrade Required",
        "428": "Precondition Required",
        "429": "Too Many Requests",
        "431": "Request Header Fields Too Large",
        "451": "Unavailable For Legal Reasons",
        "500": "Internal Server Error",
        "501": "Not Implemented",
        "502": "Bad Gateway",
        "503": "Service Unavailable",
        "504": "Gateway Timeout",
        "505": "HTTP Version Not Supported",
        "506": "Variant Also Negotiates",
        "507": "Insufficient Storage",
        "508": "Loop Detected",
        "509": "Bandwidth Limit Exceeded",
        "510": "Not Extended",
        "511": "Network Authentication Required"
    };
    return exports$14;
}
var exports10 = {
}, _dewExec10 = false;
var _global4 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew10() {
    if (_dewExec10) return exports10;
    _dewExec10 = true;
    var ClientRequest2 = dew$32();
    var response = dew$42();
    var extend = dew$23();
    var statusCodes = dew$14();
    var url = h6;
    var http1 = exports10;
    http1.request = function(opts, cb) {
        if (typeof opts === "string") opts = url.parse(opts);
        else opts = extend(opts);
        var defaultProtocol = _global4.location.protocol.search(/^https?:$/) === -1 ? "http:" : "";
        var protocol = opts.protocol || defaultProtocol;
        var host = opts.hostname || opts.host;
        var port = opts.port;
        var path2 = opts.path || "/";
        if (host && host.indexOf(":") !== -1) host = "[" + host + "]";
        opts.url = (host ? protocol + "//" + host : "") + (port ? ":" + port : "") + path2;
        opts.method = (opts.method || "GET").toUpperCase();
        opts.headers = opts.headers || {
        };
        var req = new ClientRequest2(opts);
        if (cb) req.on("response", cb);
        return req;
    };
    http1.get = function get(opts, cb) {
        var req = http1.request(opts, cb);
        req.end();
        return req;
    };
    http1.ClientRequest = ClientRequest2;
    http1.IncomingMessage = response.IncomingMessage;
    http1.Agent = function() {
    };
    http1.Agent.defaultMaxSockets = 4;
    http1.globalAgent = new http1.Agent();
    http1.STATUS_CODES = statusCodes;
    http1.METHODS = [
        "CHECKOUT",
        "CONNECT",
        "COPY",
        "DELETE",
        "GET",
        "HEAD",
        "LOCK",
        "M-SEARCH",
        "MERGE",
        "MKACTIVITY",
        "MKCOL",
        "MOVE",
        "NOTIFY",
        "OPTIONS",
        "PATCH",
        "POST",
        "PROPFIND",
        "PROPPATCH",
        "PURGE",
        "PUT",
        "REPORT",
        "SEARCH",
        "SUBSCRIBE",
        "TRACE",
        "UNLOCK",
        "UNSUBSCRIBE"
    ];
    return exports10;
}
var http = dew10();
http.Agent;
http.ClientRequest;
http.IncomingMessage;
http.METHODS;
http.STATUS_CODES;
http.get;
http.globalAgent;
http.request;
var exports11 = {
}, _dewExec11 = false;
var _global5 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew11() {
    if (_dewExec11) return exports11;
    _dewExec11 = true;
    var http$1 = http;
    var url = h6;
    var https1 = exports11;
    for(var key in http$1){
        if (http$1.hasOwnProperty(key)) https1[key] = http$1[key];
    }
    https1.request = function(params, cb) {
        params = validateParams(params);
        return http$1.request.call(this || _global5, params, cb);
    };
    https1.get = function(params, cb) {
        params = validateParams(params);
        return http$1.get.call(this || _global5, params, cb);
    };
    function validateParams(params) {
        if (typeof params === "string") {
            params = url.parse(params);
        }
        if (!params.protocol) {
            params.protocol = "https:";
        }
        if (params.protocol !== "https:") {
            throw new Error("Protocol \"" + params.protocol + "\" not supported. Expected \"https:\"");
        }
        return params;
    }
    return exports11;
}
var https = dew11();
https.Agent;
https.ClientRequest;
https.IncomingMessage;
https.METHODS;
https.STATUS_CODES;
https.get;
https.globalAgent;
https.request;
function unimplemented2() {
    throw new Error('Node.js tls module is not supported by JSPM core outside of Node.js');
}
var tls = {
    CLIENT_RENEG_LIMIT: null,
    CLIENT_RENEG_WINDOW: null,
    DEFAULT_CIPHERS: null,
    DEFAULT_ECDH_CURVE: null,
    DEFAULT_MIN_VERSION: null,
    DEFAULT_MAX_VERSION: null,
    getCiphers: unimplemented2,
    rootCertificates: null,
    convertALPNProtocols: unimplemented2,
    checkServerIdentity: unimplemented2,
    parseCertString: unimplemented2,
    createSecureContext: unimplemented2,
    SecureContext: unimplemented2,
    TLSSocket: unimplemented2,
    Server: unimplemented2,
    createServer: unimplemented2,
    connect: unimplemented2,
    createSecurePair: unimplemented2
};
var exports12 = {
};
var Buffer1 = buffer1.Buffer;
var process2 = process;
var tls1 = tls;
var http1 = http;
var https1 = https;
var events = y;
var util = X;
exports12.httpOverHttp = httpOverHttp;
exports12.httpsOverHttp = httpsOverHttp;
exports12.httpOverHttps = httpOverHttps;
exports12.httpsOverHttps = httpsOverHttps;
function httpOverHttp(options) {
    var agent = new TunnelingAgent(options);
    agent.request = http1.request;
    return agent;
}
function httpsOverHttp(options) {
    var agent = new TunnelingAgent(options);
    agent.request = http1.request;
    agent.createSocket = createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function httpOverHttps(options) {
    var agent = new TunnelingAgent(options);
    agent.request = https1.request;
    return agent;
}
function httpsOverHttps(options) {
    var agent = new TunnelingAgent(options);
    agent.request = https1.request;
    agent.createSocket = createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function TunnelingAgent(options1) {
    var self = this;
    self.options = options1 || {
    };
    self.proxyOptions = self.options.proxy || {
    };
    self.maxSockets = self.options.maxSockets || http1.Agent.defaultMaxSockets;
    self.requests = [];
    self.sockets = [];
    self.on("free", function onFree(socket, host, port, localAddress) {
        var options = toOptions(host, port, localAddress);
        for(var i134 = 0, len = self.requests.length; i134 < len; ++i134){
            var pending = self.requests[i134];
            if (pending.host === options.host && pending.port === options.port) {
                self.requests.splice(i134, 1);
                pending.request.onSocket(socket);
                return;
            }
        }
        socket.destroy();
        self.removeSocket(socket);
    });
}
util.inherits(TunnelingAgent, events.EventEmitter);
TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
    var self = this;
    var options = mergeOptions({
        request: req
    }, self.options, toOptions(host, port, localAddress));
    if (self.sockets.length >= this.maxSockets) {
        self.requests.push(options);
        return;
    }
    self.createSocket(options, function(socket) {
        socket.on("free", onFree);
        socket.on("close", onCloseOrRemove);
        socket.on("agentRemove", onCloseOrRemove);
        req.onSocket(socket);
        function onFree() {
            self.emit("free", socket, options);
        }
        function onCloseOrRemove(err) {
            self.removeSocket(socket);
            socket.removeListener("free", onFree);
            socket.removeListener("close", onCloseOrRemove);
            socket.removeListener("agentRemove", onCloseOrRemove);
        }
    });
};
TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
    var self = this;
    var placeholder = {
    };
    self.sockets.push(placeholder);
    var connectOptions = mergeOptions({
    }, self.proxyOptions, {
        method: "CONNECT",
        path: options.host + ":" + options.port,
        agent: false,
        headers: {
            host: options.host + ":" + options.port
        }
    });
    if (options.localAddress) {
        connectOptions.localAddress = options.localAddress;
    }
    if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {
        };
        connectOptions.headers["Proxy-Authorization"] = "Basic " + new Buffer1(connectOptions.proxyAuth).toString("base64");
    }
    debug("making CONNECT request");
    var connectReq = self.request(connectOptions);
    connectReq.useChunkedEncodingByDefault = false;
    connectReq.once("response", onResponse);
    connectReq.once("upgrade", onUpgrade);
    connectReq.once("connect", onConnect);
    connectReq.once("error", onError);
    connectReq.end();
    function onResponse(res) {
        res.upgrade = true;
    }
    function onUpgrade(res, socket, head) {
        process2.nextTick(function() {
            onConnect(res, socket, head);
        });
    }
    function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode !== 200) {
            debug("tunneling socket could not be established, statusCode=%d", res.statusCode);
            socket.destroy();
            var error = new Error("tunneling socket could not be established, " + "statusCode=" + res.statusCode);
            error.code = "ECONNRESET";
            options.request.emit("error", error);
            self.removeSocket(placeholder);
            return;
        }
        if (head.length > 0) {
            debug("got illegal response body from proxy");
            socket.destroy();
            var error = new Error("got illegal response body from proxy");
            error.code = "ECONNRESET";
            options.request.emit("error", error);
            self.removeSocket(placeholder);
            return;
        }
        debug("tunneling connection has established");
        self.sockets[self.sockets.indexOf(placeholder)] = socket;
        return cb(socket);
    }
    function onError(cause) {
        connectReq.removeAllListeners();
        debug("tunneling socket could not be established, cause=%s\n", cause.message, cause.stack);
        var error = new Error("tunneling socket could not be established, " + "cause=" + cause.message);
        error.code = "ECONNRESET";
        options.request.emit("error", error);
        self.removeSocket(placeholder);
    }
};
TunnelingAgent.prototype.removeSocket = function removeSocket(socket1) {
    var pos = this.sockets.indexOf(socket1);
    if (pos === -1) {
        return;
    }
    this.sockets.splice(pos, 1);
    var pending = this.requests.shift();
    if (pending) {
        this.createSocket(pending, function(socket) {
            pending.request.onSocket(socket);
        });
    }
};
function createSecureSocket(options, cb) {
    var self = this;
    TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        var hostHeader = options.request.getHeader("host");
        var tlsOptions = mergeOptions({
        }, self.options, {
            socket: socket,
            servername: hostHeader ? hostHeader.replace(/:.*$/, "") : options.host
        });
        var secureSocket = tls1.connect(0, tlsOptions);
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
    });
}
function toOptions(host, port, localAddress) {
    if (typeof host === "string") {
        return {
            host: host,
            port: port,
            localAddress: localAddress
        };
    }
    return host;
}
function mergeOptions(target) {
    for(var i135 = 1, len = arguments.length; i135 < len; ++i135){
        var overrides = arguments[i135];
        if (typeof overrides === "object") {
            var keys = Object.keys(overrides);
            for(var j9 = 0, keyLen = keys.length; j9 < keyLen; ++j9){
                var k = keys[j9];
                if (overrides[k] !== undefined) {
                    target[k] = overrides[k];
                }
            }
        }
    }
    return target;
}
var debug;
if (process2.env.NODE_DEBUG && /\btunnel\b/.test(process2.env.NODE_DEBUG)) {
    debug = function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === "string") {
            args[0] = "TUNNEL: " + args[0];
        } else {
            args.unshift("TUNNEL:");
        }
        console.error.apply(console, args);
    };
} else {
    debug = function() {
    };
}
exports12.debug = debug;
exports12.httpOverHttp, exports12.httpsOverHttp, exports12.httpOverHttps, exports12.httpsOverHttps, exports12.debug;
var exports13 = {
};
var process3 = process;
Object.defineProperty(exports13, "__esModule", {
    value: true
});
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === "https:";
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process3.env["https_proxy"] || process3.env["HTTPS_PROXY"];
    } else {
        proxyVar = process3.env["http_proxy"] || process3.env["HTTP_PROXY"];
    }
    if (proxyVar) {
        proxyUrl = new URL(proxyVar);
    }
    return proxyUrl;
}
exports13.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process3.env["no_proxy"] || process3.env["NO_PROXY"] || "";
    if (!noProxy) {
        return false;
    }
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    } else if (reqUrl.protocol === "http:") {
        reqPort = 80;
    } else if (reqUrl.protocol === "https:") {
        reqPort = 443;
    }
    let upperReqHosts = [
        reqUrl.hostname.toUpperCase()
    ];
    if (typeof reqPort === "number") {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    for (let upperNoProxyItem of noProxy.split(",").map((x10)=>x10.trim().toUpperCase()
    ).filter((x12)=>x12
    )){
        if (upperReqHosts.some((x13)=>x13 === upperNoProxyItem
        )) {
            return true;
        }
    }
    return false;
}
exports13.checkBypass = checkBypass;
var exports$15 = {
};
var Buffer2 = buffer1.Buffer;
Object.defineProperty(exports$15, "__esModule", {
    value: true
});
const http2 = http;
const https2 = https;
const pm = exports13;
let tunnel;
var HttpCodes;
(function(HttpCodes1) {
    HttpCodes1[HttpCodes1["OK"] = 200] = "OK";
    HttpCodes1[HttpCodes1["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes1[HttpCodes1["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes1[HttpCodes1["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes1[HttpCodes1["SeeOther"] = 303] = "SeeOther";
    HttpCodes1[HttpCodes1["NotModified"] = 304] = "NotModified";
    HttpCodes1[HttpCodes1["UseProxy"] = 305] = "UseProxy";
    HttpCodes1[HttpCodes1["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes1[HttpCodes1["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes1[HttpCodes1["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes1[HttpCodes1["BadRequest"] = 400] = "BadRequest";
    HttpCodes1[HttpCodes1["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes1[HttpCodes1["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes1[HttpCodes1["Forbidden"] = 403] = "Forbidden";
    HttpCodes1[HttpCodes1["NotFound"] = 404] = "NotFound";
    HttpCodes1[HttpCodes1["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes1[HttpCodes1["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes1[HttpCodes1["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes1[HttpCodes1["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes1[HttpCodes1["Conflict"] = 409] = "Conflict";
    HttpCodes1[HttpCodes1["Gone"] = 410] = "Gone";
    HttpCodes1[HttpCodes1["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes1[HttpCodes1["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes1[HttpCodes1["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes1[HttpCodes1["BadGateway"] = 502] = "BadGateway";
    HttpCodes1[HttpCodes1["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes1[HttpCodes1["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports$15.HttpCodes || (exports$15.HttpCodes = {
}));
var Headers;
(function(Headers1) {
    Headers1["Accept"] = "accept";
    Headers1["ContentType"] = "content-type";
})(Headers = exports$15.Headers || (exports$15.Headers = {
}));
var MediaTypes;
(function(MediaTypes1) {
    MediaTypes1["ApplicationJson"] = "application/json";
})(MediaTypes = exports$15.MediaTypes || (exports$15.MediaTypes = {
}));
function getProxyUrl$1(serverUrl) {
    let proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : "";
}
exports$15.getProxyUrl = getProxyUrl$1;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = [
    "OPTIONS",
    "GET",
    "DELETE",
    "HEAD"
];
const ExponentialBackoffCeiling = 10;
class HttpClientError extends Error {
    constructor(message, statusCode){
        super(message);
        this.name = "HttpClientError";
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports$15.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message){
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve13, reject)=>{
            let output = Buffer2.alloc(0);
            this.message.on("data", (chunk)=>{
                output = Buffer2.concat([
                    output,
                    chunk
                ]);
            });
            this.message.on("end", ()=>{
                resolve13(output.toString());
            });
        });
    }
}
exports$15.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === "https:";
}
exports$15.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions){
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request("OPTIONS", requestUrl, null, additionalHeaders || {
        });
    }
    get(requestUrl, additionalHeaders) {
        return this.request("GET", requestUrl, null, additionalHeaders || {
        });
    }
    del(requestUrl, additionalHeaders) {
        return this.request("DELETE", requestUrl, null, additionalHeaders || {
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request("POST", requestUrl, data, additionalHeaders || {
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request("PATCH", requestUrl, data, additionalHeaders || {
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request("PUT", requestUrl, data, additionalHeaders || {
        });
    }
    head(requestUrl, additionalHeaders) {
        return this.request("HEAD", requestUrl, null, additionalHeaders || {
        });
    }
    sendStream(verb, requestUrl, stream39, additionalHeaders) {
        return this.request(verb, requestUrl, stream39, additionalHeaders);
    }
    async getJson(requestUrl, additionalHeaders = {
    }) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {
    }) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {
    }) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {
    }) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error("Client has already been disposed.");
        }
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1 ? this._maxRetries + 1 : 1;
        let numTries = 0;
        let response;
        while(numTries < maxTries){
            response = await this.requestRaw(info, data);
            if (response && response.message && response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for(let i136 = 0; i136 < this.handlers.length; i136++){
                    if (this.handlers[i136].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i136];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                } else {
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while(HttpRedirectCodes.indexOf(response.message.statusCode) != -1 && this._allowRedirects && redirectsRemaining > 0){
                const redirectUrl = response.message.headers["location"];
                if (!redirectUrl) {
                    break;
                }
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == "https:" && parsedUrl.protocol != parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) {
                    throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
                }
                await response.readBody();
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for(let header in headers){
                        if (header.toLowerCase() === "authorization") {
                            delete headers[header];
                        }
                    }
                }
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    requestRaw(info, data) {
        return new Promise((resolve14, reject)=>{
            let callbackForResult = function(err, res) {
                if (err) {
                    reject(err);
                }
                resolve14(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === "string") {
            info.options.headers["Content-Length"] = Buffer2.byteLength(data, "utf8");
        }
        let callbackCalled = false;
        let handleResult = (err, res)=>{
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg)=>{
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on("socket", (sock)=>{
            socket = sock;
        });
        req.setTimeout(this._socketTimeout || 3 * 60000, ()=>{
            if (socket) {
                socket.end();
            }
            handleResult(new Error("Request timeout: " + info.options.path), null);
        });
        req.on("error", function(err) {
            handleResult(err, null);
        });
        if (data && typeof data === "string") {
            req.write(data, "utf8");
        }
        if (data && typeof data !== "string") {
            data.on("close", function() {
                req.end();
            });
            data.pipe(req);
        } else {
            req.end();
        }
    }
    getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {
        };
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === "https:";
        info.httpModule = usingSsl ? https2 : http2;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {
        };
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
        info.options.path = (info.parsedUrl.pathname || "") + (info.parsedUrl.search || "");
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers["user-agent"] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        if (this.handlers) {
            this.handlers.forEach((handler)=>{
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = (obj)=>Object.keys(obj).reduce((c41, k)=>(c41[k.toLowerCase()] = obj[k], c41)
            , {
            })
        ;
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({
            }, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {
        });
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = (obj)=>Object.keys(obj).reduce((c42, k)=>(c42[k.toLowerCase()] = obj[k], c42)
            , {
            })
        ;
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === "https:";
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http2.globalAgent.maxSockets;
        }
        if (useProxy) {
            if (!tunnel) {
                tunnel = exports12;
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...(proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    },
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === "https:";
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            } else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        if (this._keepAlive && !agent) {
            const options = {
                keepAlive: this._keepAlive,
                maxSockets: maxSockets
            };
            agent = usingSsl ? new https2.Agent(options) : new http2.Agent(options);
            this._agent = agent;
        }
        if (!agent) {
            agent = usingSsl ? https2.globalAgent : http2.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            agent.options = Object.assign(agent.options || {
            }, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = 5 * Math.pow(2, retryNumber);
        return new Promise((resolve15)=>setTimeout(()=>resolve15()
            , ms)
        );
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === "string") {
            let a59 = new Date(value);
            if (!isNaN(a59.valueOf())) {
                return a59;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve16, reject)=>{
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {
                }
            };
            if (statusCode == HttpCodes.NotFound) {
                resolve16(response);
            }
            let obj;
            let contents;
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    } else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            } catch (err) {
            }
            if (statusCode > 299) {
                let msg;
                if (obj && obj.message) {
                    msg = obj.message;
                } else if (contents && contents.length > 0) {
                    msg = contents;
                } else {
                    msg = "Failed request: (" + statusCode + ")";
                }
                let err = new HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            } else {
                resolve16(response);
            }
        });
    }
}
exports$15.HttpClient = HttpClient;
const __esModule = exports$15.__esModule;
const _HttpCodes = exports$15.HttpCodes, _Headers = exports$15.Headers, _MediaTypes = exports$15.MediaTypes, _getProxyUrl = exports$15.getProxyUrl, _HttpClientError = exports$15.HttpClientError, _HttpClientResponse = exports$15.HttpClientResponse, _isHttps = exports$15.isHttps, _HttpClient = exports$15.HttpClient;
const mod3 = {
    default: exports$15,
    Headers: _Headers,
    HttpClient: _HttpClient,
    HttpClientError: _HttpClientError,
    HttpClientResponse: _HttpClientResponse,
    HttpCodes: _HttpCodes,
    MediaTypes: _MediaTypes,
    __esModule,
    getProxyUrl: _getProxyUrl,
    isHttps: _isHttps
};
var exports14 = {
};
var Buffer3 = buffer1.Buffer;
Object.defineProperty(exports14, "__esModule", {
    value: true
});
class BasicCredentialHandler {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        options.headers["Authorization"] = "Basic " + Buffer3.from(this.username + ":" + this.password).toString("base64");
    }
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports14.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token){
        this.token = token;
    }
    prepareRequest(options) {
        options.headers["Authorization"] = "Bearer " + this.token;
    }
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports14.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token){
        this.token = token;
    }
    prepareRequest(options) {
        options.headers["Authorization"] = "Basic " + Buffer3.from("PAT:" + this.token).toString("base64");
    }
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports14.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
const __esModule1 = exports14.__esModule;
const _BasicCredentialHandler = exports14.BasicCredentialHandler, _BearerCredentialHandler = exports14.BearerCredentialHandler, _PersonalAccessTokenCredentialHandler = exports14.PersonalAccessTokenCredentialHandler;
const mod4 = {
    default: exports14,
    BasicCredentialHandler: _BasicCredentialHandler,
    BearerCredentialHandler: _BearerCredentialHandler,
    PersonalAccessTokenCredentialHandler: _PersonalAccessTokenCredentialHandler,
    __esModule: __esModule1
};
var _fs = "default" in mod1 ? mod1.default : mod1;
var _os$1 = "default" in mod ? mod.default : mod;
var exports$33 = {
}, _dewExec$24 = false;
function dew$24() {
    if (_dewExec$24) return exports$33;
    _dewExec$24 = true;
    var process6 = process;
    var __createBinding = exports$33 && exports$33.__createBinding || (Object.create ? function(o53, m14, k8, k22) {
        if (k22 === undefined) k22 = k8;
        Object.defineProperty(o53, k22, {
            enumerable: true,
            get: function() {
                return m14[k8];
            }
        });
    } : function(o54, m15, k9, k23) {
        if (k23 === undefined) k23 = k9;
        o54[k23] = m15[k9];
    });
    var __setModuleDefault = exports$33 && exports$33.__setModuleDefault || (Object.create ? function(o55, v13) {
        Object.defineProperty(o55, "default", {
            enumerable: true,
            value: v13
        });
    } : function(o56, v14) {
        o56["default"] = v14;
    });
    var __importStar = exports$33 && exports$33.__importStar || function(mod6) {
        if (mod6 && mod6.__esModule) return mod6;
        var result = {
        };
        if (mod6 != null) {
            for(var k10 in mod6)if (k10 !== "default" && Object.hasOwnProperty.call(mod6, k10)) __createBinding(result, mod6, k10);
        }
        __setModuleDefault(result, mod6);
        return result;
    };
    Object.defineProperty(exports$33, "__esModule", {
        value: true
    });
    exports$33.issueCommand = void 0;
    const fs1 = __importStar(_fs);
    const os2 = __importStar(_os$1);
    const utils_1 = dew$1();
    function issueCommand(command, message) {
        const filePath = process6.env[`GITHUB_${command}`];
        if (!filePath) {
            throw new Error(`Unable to find environment variable for file command ${command}`);
        }
        if (!fs1.existsSync(filePath)) {
            throw new Error(`Missing file at path: ${filePath}`);
        }
        fs1.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os2.EOL}`, {
            encoding: "utf8"
        });
    }
    exports$33.issueCommand = issueCommand;
    return exports$33;
}
var _httpClient = "default" in mod3 ? mod3.default : mod3;
var _auth = "default" in mod4 ? mod4.default : mod4;
var exports$24 = {
}, _dewExec$15 = false;
function dew$15() {
    if (_dewExec$15) return exports$24;
    _dewExec$15 = true;
    var process7 = process;
    var __awaiter = exports$24 && exports$24.__awaiter || function(thisArg, _arguments, P4, generator) {
        function adopt(value) {
            return value instanceof P4 ? value : new P4(function(resolve17) {
                resolve17(value);
            });
        }
        return new (P4 || (P4 = Promise))(function(resolve18, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e20) {
                    reject(e20);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e27) {
                    reject(e27);
                }
            }
            function step(result) {
                result.done ? resolve18(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports$24, "__esModule", {
        value: true
    });
    exports$24.OidcClient = void 0;
    const http_client_1 = _httpClient;
    const auth_1 = _auth;
    const core_1 = dew12();
    class OidcClient {
        static createHttpClient(allowRetry = true, maxRetry = 10) {
            const requestOptions = {
                allowRetries: allowRetry,
                maxRetries: maxRetry
            };
            return new http_client_1.HttpClient("actions/oidc-client", [
                new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())
            ], requestOptions);
        }
        static getRequestToken() {
            const token = process7.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];
            if (!token) {
                throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
            }
            return token;
        }
        static getIDTokenUrl() {
            const runtimeUrl = process7.env["ACTIONS_ID_TOKEN_REQUEST_URL"];
            if (!runtimeUrl) {
                throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
            }
            return runtimeUrl;
        }
        static getCall(id_token_url) {
            var _a;
            return __awaiter(this, void 0, void 0, function*() {
                const httpclient = OidcClient.createHttpClient();
                const res = yield httpclient.getJson(id_token_url).catch((error)=>{
                    throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
                });
                const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
                if (!id_token) {
                    throw new Error("Response json body do not have ID Token field");
                }
                return id_token;
            });
        }
        static getIDToken(audience) {
            return __awaiter(this, void 0, void 0, function*() {
                try {
                    let id_token_url = OidcClient.getIDTokenUrl();
                    if (audience) {
                        const encodedAudience = encodeURIComponent(audience);
                        id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                    }
                    core_1.debug(`ID token url is ${id_token_url}`);
                    const id_token = yield OidcClient.getCall(id_token_url);
                    core_1.setSecret(id_token);
                    return id_token;
                } catch (error) {
                    throw new Error(`Error message: ${error.message}`);
                }
            });
        }
    }
    exports$24.OidcClient = OidcClient;
    return exports$24;
}
var _os1 = "default" in mod ? mod.default : mod;
var _path = "default" in mod2 ? mod2.default : mod2;
var exports$16 = {
}, _dewExec12 = false;
function dew12() {
    if (_dewExec12) return exports$16;
    _dewExec12 = true;
    var process8 = process;
    var __createBinding = exports$16 && exports$16.__createBinding || (Object.create ? function(o57, m16, k12, k24) {
        if (k24 === undefined) k24 = k12;
        Object.defineProperty(o57, k24, {
            enumerable: true,
            get: function() {
                return m16[k12];
            }
        });
    } : function(o58, m17, k13, k25) {
        if (k25 === undefined) k25 = k13;
        o58[k25] = m17[k13];
    });
    var __setModuleDefault = exports$16 && exports$16.__setModuleDefault || (Object.create ? function(o59, v15) {
        Object.defineProperty(o59, "default", {
            enumerable: true,
            value: v15
        });
    } : function(o60, v16) {
        o60["default"] = v16;
    });
    var __importStar = exports$16 && exports$16.__importStar || function(mod7) {
        if (mod7 && mod7.__esModule) return mod7;
        var result = {
        };
        if (mod7 != null) {
            for(var k14 in mod7)if (k14 !== "default" && Object.hasOwnProperty.call(mod7, k14)) __createBinding(result, mod7, k14);
        }
        __setModuleDefault(result, mod7);
        return result;
    };
    var __awaiter = exports$16 && exports$16.__awaiter || function(thisArg, _arguments, P5, generator) {
        function adopt(value) {
            return value instanceof P5 ? value : new P5(function(resolve19) {
                resolve19(value);
            });
        }
        return new (P5 || (P5 = Promise))(function(resolve20, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e28) {
                    reject(e28);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e29) {
                    reject(e29);
                }
            }
            function step(result) {
                result.done ? resolve20(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports$16, "__esModule", {
        value: true
    });
    exports$16.getIDToken = exports$16.getState = exports$16.saveState = exports$16.group = exports$16.endGroup = exports$16.startGroup = exports$16.info = exports$16.notice = exports$16.warning = exports$16.error = exports$16.debug = exports$16.isDebug = exports$16.setFailed = exports$16.setCommandEcho = exports$16.setOutput = exports$16.getBooleanInput = exports$16.getMultilineInput = exports$16.getInput = exports$16.addPath = exports$16.setSecret = exports$16.exportVariable = exports$16.ExitCode = void 0;
    const command_1 = dew1();
    const file_command_1 = dew$24();
    const utils_1 = dew$1();
    const os3 = __importStar(_os1);
    const path3 = __importStar(_path);
    const oidc_utils_1 = dew$15();
    var ExitCode1;
    (function(ExitCode) {
        ExitCode[ExitCode["Success"] = 0] = "Success";
        ExitCode[ExitCode["Failure"] = 1] = "Failure";
    })(ExitCode1 = exports$16.ExitCode || (exports$16.ExitCode = {
    }));
    function exportVariable(name, val) {
        const convertedVal = utils_1.toCommandValue(val);
        process8.env[name] = convertedVal;
        const filePath = process8.env["GITHUB_ENV"] || "";
        if (filePath) {
            const delimiter1 = "_GitHubActionsFileCommandDelimeter_";
            const commandValue = `${name}<<${delimiter1}${os3.EOL}${convertedVal}${os3.EOL}${delimiter1}`;
            file_command_1.issueCommand("ENV", commandValue);
        } else {
            command_1.issueCommand("set-env", {
                name
            }, convertedVal);
        }
    }
    exports$16.exportVariable = exportVariable;
    function setSecret(secret) {
        command_1.issueCommand("add-mask", {
        }, secret);
    }
    exports$16.setSecret = setSecret;
    function addPath(inputPath) {
        const filePath = process8.env["GITHUB_PATH"] || "";
        if (filePath) {
            file_command_1.issueCommand("PATH", inputPath);
        } else {
            command_1.issueCommand("add-path", {
            }, inputPath);
        }
        process8.env["PATH"] = `${inputPath}${path3.delimiter}${process8.env["PATH"]}`;
    }
    exports$16.addPath = addPath;
    function getInput(name, options) {
        const val = process8.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
        if (options && options.required && !val) {
            throw new Error(`Input required and not supplied: ${name}`);
        }
        if (options && options.trimWhitespace === false) {
            return val;
        }
        return val.trim();
    }
    exports$16.getInput = getInput;
    function getMultilineInput(name, options) {
        const inputs = getInput(name, options).split("\n").filter((x14)=>x14 !== ""
        );
        return inputs;
    }
    exports$16.getMultilineInput = getMultilineInput;
    function getBooleanInput(name, options) {
        const trueValue = [
            "true",
            "True",
            "TRUE"
        ];
        const falseValue = [
            "false",
            "False",
            "FALSE"
        ];
        const val = getInput(name, options);
        if (trueValue.includes(val)) return true;
        if (falseValue.includes(val)) return false;
        throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    exports$16.getBooleanInput = getBooleanInput;
    function setOutput(name, value) {
        process8.stdout.write(os3.EOL);
        command_1.issueCommand("set-output", {
            name
        }, value);
    }
    exports$16.setOutput = setOutput;
    function setCommandEcho(enabled) {
        command_1.issue("echo", enabled ? "on" : "off");
    }
    exports$16.setCommandEcho = setCommandEcho;
    function setFailed(message) {
        process8.exitCode = ExitCode1.Failure;
        error(message);
    }
    exports$16.setFailed = setFailed;
    function isDebug() {
        return process8.env["RUNNER_DEBUG"] === "1";
    }
    exports$16.isDebug = isDebug;
    function debug2(message) {
        command_1.issueCommand("debug", {
        }, message);
    }
    exports$16.debug = debug2;
    function error(message, properties = {
    }) {
        command_1.issueCommand("error", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports$16.error = error;
    function warning(message, properties = {
    }) {
        command_1.issueCommand("warning", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports$16.warning = warning;
    function notice(message, properties = {
    }) {
        command_1.issueCommand("notice", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports$16.notice = notice;
    function info(message) {
        process8.stdout.write(message + os3.EOL);
    }
    exports$16.info = info;
    function startGroup(name) {
        command_1.issue("group", name);
    }
    exports$16.startGroup = startGroup;
    function endGroup() {
        command_1.issue("endgroup");
    }
    exports$16.endGroup = endGroup;
    function group(name, fn) {
        return __awaiter(this, void 0, void 0, function*() {
            startGroup(name);
            let result;
            try {
                result = yield fn();
            } finally{
                endGroup();
            }
            return result;
        });
    }
    exports$16.group = group;
    function saveState(name, value) {
        command_1.issueCommand("save-state", {
            name
        }, value);
    }
    exports$16.saveState = saveState;
    function getState(name) {
        return process8.env[`STATE_${name}`] || "";
    }
    exports$16.getState = getState;
    function getIDToken(aud) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield oidc_utils_1.OidcClient.getIDToken(aud);
        });
    }
    exports$16.getIDToken = getIDToken;
    return exports$16;
}
const exports15 = dew12();
var _$__esModule = exports15['__esModule'], _$getIDToken = exports15['getIDToken'], _$getState = exports15['getState'], _$saveState = exports15['saveState'], _$group = exports15['group'], _$endGroup = exports15['endGroup'], _$startGroup = exports15['startGroup'], _$info = exports15['info'], _$notice = exports15['notice'], _$warning = exports15['warning'], _$error = exports15['error'], _$debug = exports15['debug'], _$isDebug = exports15['isDebug'], _$setFailed = exports15['setFailed'], _$setCommandEcho = exports15['setCommandEcho'], _$setOutput = exports15['setOutput'], _$getBooleanInput = exports15['getBooleanInput'], _$getMultilineInput = exports15['getMultilineInput'], _$getInput = exports15['getInput'], _$addPath = exports15['addPath'], _$setSecret = exports15['setSecret'], _$exportVariable = exports15['exportVariable'], _$ExitCode = exports15['ExitCode'];
const myInput = _$getInput('testInput', {
    required: true
});
async function run() {
    console.log(myInput);
}
run();
